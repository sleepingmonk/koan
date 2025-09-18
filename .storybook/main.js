import { mergeConfig } from 'vite';
import twigDrupal from 'vite-plugin-twig-drupal';
import path from 'path';

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
  ],
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  viteFinal: async (config, { configType }) => {
    // Check if building for production on GitHub Pages
    if (configType === 'PRODUCTION' && process.env.STORYBOOK_GITHUB_PAGES_BUILD) {
      config.base = '/koan/';
    }

    return mergeConfig(config, {
      resolve: {
        alias: {
          "@atoms": path.resolve(__dirname, "../stories/Atoms"),
          "@molecules": path.resolve(__dirname, "../stories/Molecules"),
          "@organisms": path.resolve(__dirname, "../stories/Organisms"),
        },
      },
      plugins: [
        twigDrupal({
          namespaces: {
            atoms: path.resolve(__dirname, "../stories/Atoms"),
            molecules: path.resolve(__dirname, "../stories/Molecules"),
            organisms: path.resolve(__dirname, "../stories/Organisms"),
          },
        }),
      ],
    });
  },
};
export default config;
