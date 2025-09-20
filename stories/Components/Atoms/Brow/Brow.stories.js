import data from './Brow.data';
import Brow from './Brow.twig';
import './Brow.css';
import readme from './Brow.mdx?raw';

export default {
  title: 'Components/Atoms/Brow',
  component: Brow,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    variant: {
      description: "The component variant.",
      table: { defaultValue: { summary: 'default' }},
      control: { type: 'radio' },
      options: ['default', 'heading'],
    },
    part_one: {
      description: "The first part of the Brow, usually colored by `--accent-color` value.",
      table: { defaultValue: { summary: false }},
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Brow({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
