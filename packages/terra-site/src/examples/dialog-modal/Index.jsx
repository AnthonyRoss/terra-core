/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from 'terra-dialog-modal/docs/README.md';
import { version } from 'terra-dialog-modal/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DialogModalSrc from '!raw-loader!terra-dialog-modal/src/DialogModal';

// Example Files
import DefaultDialogModal from './DefaultDialogModal';
import DefaultDialogModalSrc from '!raw-loader!./DefaultDialogModal.jsx';

const DialogModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="DialogModal - Default"
      example={<DefaultDialogModal />}
      exampleSrc={DefaultDialogModalSrc}
    />

    <PropsTable id="props" src={DialogModalSrc} />
  </div>
);

export default DialogModalExamples;
