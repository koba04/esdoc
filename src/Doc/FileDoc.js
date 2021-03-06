import fs from 'fs';
import AbstractDoc from './AbstractDoc.js';

/**
 * Doc Class from source file.
 */
export default class FileDoc extends AbstractDoc {
  /**
   * apply own tag.
   * @private
   */
  _apply() {
    super._apply();

    delete this._value.export;
    delete this._value.importPath;
    delete this._value.importStyle;
  }

  /** specify ``file`` to kind. */
  ['@kind']() {
    super['@kind']();
    if (this._value.kind) return;
    this._value.kind = 'file';
  }

  /** take out self name from file path */
  ['@name']() {
    super['@name']();
    if (this._value.name) return;
    this._value.name = this._pathResolver.filePath;
  }

  /** specify name to longname */
  ['@longname']() {
    let value = this._findTagValue(['@longname']);
    if (value) {
      this._value.longname = value;
    } else {
      this._value.longname = this._value.name;
    }
  }

  /** specify file content to value.content */
  ['@content']() {
    super['@content']();
    if ('content' in this._value) return;

    let filePath = this._pathResolver.fileFullPath;
    let content = fs.readFileSync(filePath, {encode: 'utf8'}).toString();
    this._value.content = content;
  }
}
