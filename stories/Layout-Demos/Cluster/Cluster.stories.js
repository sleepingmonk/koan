
import data from './Cluster.data';
import Cluster from './Cluster.twig';
import './Cluster.css';
import readme from './Cluster.mdx?raw';

export default {
  title: 'Layout-Demos/Cluster',
  component: Cluster,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
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
  return Cluster({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Cluster.data.js file.
Default.args = data.default;
