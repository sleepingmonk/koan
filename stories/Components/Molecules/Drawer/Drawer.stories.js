
import data from './Drawer.data';
import Drawer from './Drawer.twig';
import readme from './Drawer.mdx?raw';
import './Drawer.css';

export default {
  title: 'Components/Molecules/Drawer',
  component: Drawer,
  decorators: [
    (Story) => `<div>postion: absolute; &darr;<div style="margin-block-end: 100px; margin-inline: auto;inline-size: 50%; block-size: 400px; position: relative; background: var(--color-dark);">${Story()}</div>position: fixed: &darr;</div>`,
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
    variant: {
      description: "Drawer variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'block-start', 'block-end', 'inline-start', 'inline-end'],
    },
    position: {
      description: "Drawer position.",
      table: {defaultValue: {summary: 'absolute'}},
      control: { type: 'radio' },
      options: ['absolute', 'fixed'],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Drawer({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Drawer.data.js file.
Default.args = data.default;

// // Bind additional component variants like this.
// export const [VariantName] = Template.bind({});
// [VariantName].args = data.[VariantName];
