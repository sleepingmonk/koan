
import Stack from './Stack.twig';
import readme from './Stack.mdx?raw';
import './Stack.css';

export default {
  title: 'Layout-Demos/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: readme,
      }
    },
  },
  argTypes: {
    space: {
      description: "The space between elements;",
      table: { defaultValue: { summary: '1.5rem' }},
      control: { type: 'select' },
      options: ['--s0', '--s1', '--s2', '--s3', '--s4', '--s5'],
    },
    num_items: {
      description: "Add or remove items for exploring this layout.",
      table: { defaultValue: { summary: "--s1" }},
    },
  },

};

const Template = ({ ...args }) => {
  return Stack({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  space: '--s0',
  num_items: 3,

};
