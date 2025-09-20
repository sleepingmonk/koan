
import data from './Cover.data';
import Cover from './Cover.twig';
import './Cover.css';
import readme from './Cover.mdx?raw';

export default {
  title: 'Layout-Demos/Cover',
  component: Cover,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Cover({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Cover.data.js file.
Default.args = data.default;

// Bind the Default component variant for this component.
export const WithTop = Template.bind({});
// Data comes from the Cover.data.js file.
WithTop.args = data.with_top;

// Bind the Default component variant for this component.
export const WithBottom = Template.bind({});
// Data comes from the Cover.data.js file.
WithBottom.args = data.with_bottom;

// Bind the Default component variant for this component.
export const WithBoth = Template.bind({});
// Data comes from the Cover.data.js file.
WithBoth.args = data.with_both;
