import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load(string) {
    const buffer = await read(string);
    const stringFromBuffer = await json(buffer);
    return JSON.parse(stringFromBuffer);
  }
}
