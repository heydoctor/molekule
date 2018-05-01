import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export default ({ editorProps = {}, ...providerProps }) => (
  <LiveProvider {...providerProps} mountStylesheet={false}>
    <LiveError />
    <LivePreview />
    <LiveEditor {...editorProps} />
  </LiveProvider>
);
