import type {
  WorkerObject,
  WorkerOptions,
  WorkerMessageType,
  WorkerMessagePayload
} from '../../types';
import type WorkerJob from '../worker-farm/worker-job';
import WorkerFarm from '../worker-farm/worker-farm';
import {removeNontransferableOptions} from '../worker-utils/remove-nontransferable-options';
import {getWorkerURL, getWorkerName} from './get-worker-url';

type ProcessOnWorkerOptions = WorkerOptions & {
  jobName?: string;
  [key: string]: any;
};

type ProcessOnMainThread = (data: any, options?: {[key: string]: any}) => any;

/**
 * Determines if we can parse with worker
 * @param loader
 * @param data
 * @param options
 */
export function canProcessWithWorker(worker: WorkerObject, options?: WorkerOptions) {
  if (!WorkerFarm.isSupported()) {
    return false;
  }

  return worker.worker && options?.worker;
}

/**
 * This function expects that the worker thread sends certain messages,
 * Creating such a worker can be automated if the worker is wrapper by a call to
 * createWorker in @loaders.gl/worker-utils.
 */
export async function processOnWorker(
  worker: WorkerObject,
  data: any,
  options: ProcessOnWorkerOptions,
  processOnMainThread?: ProcessOnMainThread
): Promise<any> {
  const name = getWorkerName(worker);
  const url = getWorkerURL(worker, options);

  const workerFarm = WorkerFarm.getWorkerFarm(options);
  const workerPool = workerFarm.getWorkerPool({name, url});

  const jobName = options.jobName || worker.name;
  const job = await workerPool.startJob(jobName, onMessage.bind(null, processOnMainThread));

  // Kick off the processing in the worker
  const transferableOptions = removeNontransferableOptions(options);
  job.postMessage('process', {input: data, options: transferableOptions});

  const result = await job.result;
  return result.result;
}

/**
 * Job completes when we receive the result
 * @param job
 * @param message
 */
async function onMessage(
  processOnMainThread: ProcessOnMainThread | undefined,
  job: WorkerJob,
  type: WorkerMessageType,
  payload: WorkerMessagePayload
) {
  switch (type) {
    case 'done':
      job.done(payload);
      break;

    case 'error':
      job.error(payload.error);
      break;

    case 'process':
      // Worker is asking for main thread to parse
      const {id, input, options} = payload;
      try {
        if (!processOnMainThread) {
          job.postMessage('error', {id, error: 'Worker not set up to process on main thread'});
          return;
        }
        const result = await processOnMainThread(input, options);
        job.postMessage('done', {id, result});
      } catch (error) {
        const message = error instanceof Error ? error.message : 'unknown error';
        job.postMessage('error', {id, error: message});
      }
      break;

    default:
      // eslint-disable-next-line
      console.warn(`process-on-worker: unknown message ${type}`);
  }
}
