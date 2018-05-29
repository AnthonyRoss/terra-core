/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-responsive-element/docs/README.md';
import ResponsiveElementSrc from '!raw-loader!terra-responsive-element/src/ResponsiveElement';
import ResponsiveTableExample from './examples/ResponsiveTable';
import ResponsiveTableExampleSrc from '!raw-loader!./examples/ResponsiveTable';

const DocPage = () => (
  <DocTemplate
    packageName="terra-responsive-element"
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element"
    propsTables={[
      {
        componentName: 'Responsive Element',
        componentSrc: ResponsiveElementSrc,
      },
    ]}
    examples={[
      {
        title: 'Responsive Table',
        description: 'A table that will collapse into a list on small view ports.',
        example: <ResponsiveTableExample />,
        source: ResponsiveTableExampleSrc,
      },
    ]}
  />
);

export default DocPage;
