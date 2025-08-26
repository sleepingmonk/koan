
import data from './Container.data';
import Container from './Container.twig';
import './Container.css';
import readme from './Container.mdx?raw';

export default {
  title: 'Layout Demos/Container',
  component: Container,
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
  return Container({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Container.data.js file.
Default.args = data.default;
