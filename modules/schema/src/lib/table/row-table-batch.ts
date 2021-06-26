import type {Schema, Batch} from '../../category/common';
import {TableBatch} from './table-batch';

type RowTableBatchOptions = {
  batchSize: number | string;
  convertToObject: boolean;
  optimizeMemoryUsage: boolean;
};

const DEFAULT_ROW_COUNT = 100;

export default class RowTableBatch implements TableBatch {
  schema: Schema;
  options: RowTableBatchOptions;

  length: number = 0;
  rows: Array<any> | null = null;
  cursor: number = 0;
  private _headers: Array<any> | null = null;

  constructor(schema: Schema, options: RowTableBatchOptions) {
    this.options = options;
    this.schema = schema;

    // schema is an array if there're no headers
    // object if there are headers
    if (!Array.isArray(schema)) {
      this._headers = [];
      for (const key in schema) {
        this._headers[schema[key].index] = schema[key].name;
      }
    }
  }

  rowCount(): number {
    return this.length;
  }

  addRow(row, cursor?: number): void {
    if (Number.isFinite(cursor)) {
      this.cursor = cursor as number;
    }

    this.rows = this.rows || new Array(DEFAULT_ROW_COUNT);

    // We can only convert if we were given a schema
    const convertToObject = this.options.convertToObject && this.schema;
    this.rows[this.length] = convertToObject ? convertRowToObject(row, this._headers) : row;

    if (this.options.optimizeMemoryUsage) {
      // A workaround to allocate new strings and don't retain pointers to original strings.
      // https://bugs.chromium.org/p/v8/issues/detail?id=2869
      this.rows[this.length] = JSON.parse(JSON.stringify(this.rows[this.length]));
    }

    this.length++;
  }

  getBatch(): Batch | null {
    if (this.rows) {
      const rows = this.rows.slice(0, this.length);
      this.rows = null;
      return {data: rows, schema: this.schema, length: rows.length, cursor: this.cursor};
    }
    return null;
  }
}

function convertRowToObject(row, headers) {
  if (!row) {
    throw new Error('null row');
  }
  if (!Array.isArray(row)) {
    return row;
  }

  if (!headers) {
    return row;
  }
  const result = {};
  for (let i = 0; i < headers.length; i++) {
    result[headers[i]] = row[i];
  }
  return result;
}
