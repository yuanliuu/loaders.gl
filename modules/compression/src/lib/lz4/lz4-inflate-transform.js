import lz4 from 'lz4js';
import {concatenateArrayBuffers} from '@loaders.gl/loader-utils';

export default class LZ4InflateTransform {
  static async run(input, options) {
    const inputArray = new Uint8Array(input);
    const output = lz4.decompress(inputArray);
    return output.buffer;
  }

  constructor() {
    this._chunks = [];
  }

  async write(chunk) {
    this._chunks.push(null);
    return null;
  }

  async end() {
    const arrayBuffer = concatenateArrayBuffers(...this._chunks);
    return await LZ4InflateTransform.run(arrayBuffer);
  }
}
