var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export default (function (_ref) {
  var _ref$editorProps = _ref.editorProps,
      editorProps = _ref$editorProps === undefined ? {} : _ref$editorProps,
      providerProps = _objectWithoutProperties(_ref, ['editorProps']);

  return React.createElement(
    LiveProvider,
    _extends({}, providerProps, { mountStylesheet: false }),
    React.createElement(LiveError, null),
    React.createElement(LivePreview, null),
    React.createElement(LiveEditor, editorProps)
  );
});