import type {Schema, Batch} from '../../category/common';
import {TableBatch, TableBatchConstructor} from './table-batch';
import RowTableBatch from './columnar-table-batch';
import ColumnarTableBatch from './columnar-table-batch';

// TODO define interface instead
type TableBatchBuilderOptions = {
  batchType?: 'row' | 'columnar' | 'arrow';
  batchSize?: number | 'auto';
  convertToObject?: boolean;
  optimizeMemoryUsage?: boolean;
};

type GetBatchOptions = {
  bytesUsed?: number;
  [key: string]: any;
};

const DEFAULT_OPTIONS: Required<TableBatchBuilderOptions> = {
  batchType: 'row',
  batchSize: 'auto',
  convertToObject: true,
  /** optimizes memory usage but increases parsing time. */
  optimizeMemoryUsage: false
};

const ERR_MESSAGE = 'TableBatchBuilder';

export default class TableBatchBuilder {
  schema: Schema;
  options: Required<TableBatchBuilderOptions>;

  batch: TableBatch | null = null;
  batchCount: number = 0;
  bytesUsed: number = 0;
  isChunkComplete: boolean = false;
  lastBatchEmittedMs = 0;

  static ArrowBatch?: TableBatchConstructor;

  constructor(schema: Schema, options?: TableBatchBuilderOptions) {
    this.schema = schema;
    this.options = {...DEFAULT_OPTIONS, ...options};
  }

  hasBatch(): boolean {
    return Boolean(this.batch);
  }

  /** Add one row to the batch */
  addRow(row): void {
    if (!this.batch) {
      const TableBatchType = this._getTableBatchType();
      this.batch = new TableBatchType(this.schema, this.options);
    }
    this.batch.addRow(row);
  }

  /** Mark an incoming raw memory chunk has completed */
  chunkComplete(chunk: ArrayBuffer | string): void {
    if (chunk instanceof ArrayBuffer) {
      this.bytesUsed += chunk.byteLength;
    }
    if (typeof chunk === 'string') {
      this.bytesUsed += chunk.length;
    }
    this.isChunkComplete = true;
  }

  isFull(): boolean {
    // No batch, not ready
    if (!this.batch || this.batch.rowCount() === 0) {
      return false;
    }

    // if batchSize === 'auto' we wait for chunk to complete
    // if batchSize === number, ensure we have enough rows
    if (this.options.batchSize === 'auto') {
      if (!this.isChunkComplete) {
        return false;
      }
    } else if (this.options.batchSize > this.batch.rowCount()) {
      return false;
    }

    // Emit batch
    this.isChunkComplete = false;
    this.lastBatchEmittedMs = Date.now();
    return true;
  }

  /**
   * bytesUsed can be set via chunkComplete or via getBatch
   */
  getBatch(options?: GetBatchOptions): Batch | null {
    if (!this.batch) {
      return null;
    }

    // TODO - this can overly increment bytes used?
    if (options?.bytesUsed) {
      this.bytesUsed = options.bytesUsed;
    }
    const normalizedBatch = this.batch.getBatch() as Batch;
    normalizedBatch.count = this.batchCount;
    normalizedBatch.bytesUsed = this.bytesUsed;
    Object.assign(normalizedBatch, options);

    this.batchCount++;
    this.batch = null;
    return normalizedBatch;
  }

  _getTableBatchType(): TableBatchConstructor {
    switch (this.options.batchType) {
      case 'row':
        return RowTableBatch;
      case 'columnar':
        return ColumnarTableBatch;
      case 'arrow':
        if (!TableBatchBuilder.ArrowBatch) {
          throw new Error(ERR_MESSAGE);
        }
        return TableBatchBuilder.ArrowBatch;
      default:
        throw new Error(ERR_MESSAGE);
    }
  }
}
