import { mergeConfig } from 'vite';
import twigDrupal from 'vite-plugin-twig-drupal';
import path from 'path';

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.docs.mdx"
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
          "@atoms": path.resolve(__dirname, "../stories/Components/Atoms"),
          "@molecules": path.resolve(__dirname, "../stories/Components/Molecules"),
          "@organisms": path.resolve(__dirname, "../stories/Components/Organisms"),
        },
      },
      plugins: [
        twigDrupal({
          namespaces: {
            atoms: path.resolve(__dirname, "../stories/Components/Atoms"),
            molecules: path.resolve(__dirname, "../stories/Components/Molecules"),
            organisms: path.resolve(__dirname, "../stories/Components/Organisms"),
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
