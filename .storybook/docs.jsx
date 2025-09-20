import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/addon-docs/blocks';

export default function DocsTemplate({ of }) {
  return (
    <>
      <Subtitle />
      <div className='story__description'>
        <Description />
      </div>
      <Primary />
      <Controls />
      {/* <Stories /> */}
    </>
  );
};
