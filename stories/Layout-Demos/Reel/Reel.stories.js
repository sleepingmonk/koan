import Reel from './Reel.twig';
import data from './Reel.data';
import readme from './Reel.mdx?raw';
import './Reel.css';
import './Reel.js';

export default {
  title: 'Layout-Demos/Reel',
  description: 'This is a description of this component.',
  component: Reel,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: readme,
      }
    },
  },
  argTypes: {
    num_items: {
      description: "Add or remove items for exploring this layout.",
      table: { defaultValue: { summary: "--s1" }},
    },
  },
};

// const AddJS = (storyFn) => {
//   return storyFn();
// };

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Reel({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

export const NoScroll = Template.bind({});
NoScroll.args = data.no_scroll;

export const Hint = Template.bind({});
Hint.args = data.hint;
