import { DocsContainer } from '@storybook/addon-docs/blocks';
import DocsTemplate from './docs.jsx';
import '../stories/css/elements.css';
import '../stories/css/layout-primitives.css';
import '../stories/css/scheme-default.css';
import './docs.css';

export default {
  tags: ['autodocs'], // Enables auto-generated documentation for all stories
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Page Demos',
          'Documentation', ['Intro'],
          'Scheme', ['Colors', 'Fonts', 'Sizes'],
          'Layout Demos',
          'Components',
        ],
      },
    },
    docs: {
      container: DocsContainer,
      page: DocsTemplate,
      toc: true,
    }
  }
};
