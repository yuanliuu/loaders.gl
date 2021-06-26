import type {Batch, Schema} from '../../category/common';

export interface TableBatchOptions {}

export interface TableBatchConstructor {
  new (schema: Schema, options?: TableBatchOptions): TableBatch;
}

/**
 * TableBatchBuilder builds batches conforming to this interface
 */
export interface TableBatch {
  /** Number of rows */
  rowCount(): number;
  /** Add one row */
  addRow(row): void;
  /** return a batch object */
  getBatch(): Batch | null;
}
