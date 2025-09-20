import { DocsContainer } from '@storybook/addon-docs/blocks';
import DocsTemplate from './docs.jsx';
import '../stories/css/elements.css';
import '../stories/css/layout-primitives.css';
import '../stories/css/scheme-default.css';
import './docs.css';

export default {
  // tags: ['autodocs'],
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
          'Page-Demos',
          'Documentation', ['Intro'],
          'Scheme', ['Colors', 'Fonts', 'Sizes'],
          'Layout-Demos',
          'Components',
        ],
      },
    },
    docs: {
      container: DocsContainer,
      page: DocsTemplate,
      toc: true,
      source: {
        transform: async (source) => {
          const prettier = await import('prettier/standalone');
          const prettierPluginBabel = await import('prettier/plugins/babel');
          const prettierPluginEstree = await import('prettier/plugins/estree');

          let formatted = await prettier.format(source, {
            parser: 'babel',
            plugins: [prettierPluginBabel, prettierPluginEstree],
            semi: false,
          });

          // Explicitly clean up leading/trailing semicolons Storybook injects
          formatted = formatted.replace(/^\s*;\s*/, '').replace(/;\s*$/, '');

          return formatted.trim();
        },
      },
    }
  }
};
