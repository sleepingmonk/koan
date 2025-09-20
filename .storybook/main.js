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

  core: {
    disableWhatsNewNotifications: true
  }
};
export default config;
