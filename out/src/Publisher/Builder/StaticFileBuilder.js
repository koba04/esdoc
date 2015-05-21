'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _DocBuilderJs = require('./DocBuilder.js');

var _DocBuilderJs2 = _interopRequireDefault(_DocBuilderJs);

/**
 * Static file output builder class.
 */

var StaticFileBuilder = (function (_DocBuilder) {
  function StaticFileBuilder() {
    _classCallCheck(this, StaticFileBuilder);

    if (_DocBuilder != null) {
      _DocBuilder.apply(this, arguments);
    }
  }

  _inherits(StaticFileBuilder, _DocBuilder);

  _createClass(StaticFileBuilder, [{
    key: 'exec',

    /**
     * execute build output.
     * @param {function(content: string, filePath: string)} callback - is called with each output.
     */
    value: function exec(callback) {
      callback(_path2['default'].resolve(__dirname, './template/css'), './css');
      callback(_path2['default'].resolve(__dirname, './template/script'), './script');
      callback(_path2['default'].resolve(__dirname, './template/image'), './image');

      // see DocBuilder#_buildLayoutDoc
      var scripts = this._config.scripts || [];
      for (var i = 0; i < scripts.length; i++) {
        var userScript = scripts[i];
        var _name = './user/script/' + i + '-' + _path2['default'].basename(userScript);
        callback(userScript, _name);
      }

      var styles = this._config.styles || [];
      for (var i = 0; i < styles.length; i++) {
        var userStyle = styles[i];
        var _name2 = './user/css/' + i + '-' + _path2['default'].basename(userStyle);
        callback(userStyle, _name2);
      }
    }
  }]);

  return StaticFileBuilder;
})(_DocBuilderJs2['default']);

exports['default'] = StaticFileBuilder;
module.exports = exports['default'];