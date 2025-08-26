
import data from './Frame.data';
import Frame from './Frame.twig';
import './Frame.css';
import readme from './Frame.mdx?raw';

export default {
  title: 'Layout Demos/Frame',
  component: Frame,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: readme,
      }
    },
  },
  argTypes: {
    // Variant select is a pretty common arg.
    frame_h: {
      description: "Frame horizontal aspect.",
      table: {defaultValue: {summary: 16}},
      control: { type: 'number' }
    },
    frame_v: {
      description: "Frame vertical aspect.",
      table: {defaultValue: {summary: 9}},
      control: { type: 'number' }
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Frame({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Frame.data.js file.
Default.args = data.default;
