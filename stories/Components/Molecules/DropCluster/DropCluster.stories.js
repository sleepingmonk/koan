
import data from './DropCluster.data';
import DropCluster from './DropCluster.twig';
import readme from './DropCluster.mdx?raw';
import './DropCluster.css';
// import './DropCluster.js';

export default {
  title: 'Components/Molecules/DropCluster',
  component: DropCluster,
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
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
    variant: {
      description: "DropCluster variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return DropCluster({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the DropCluster.data.js file.
Default.args = data.default;

// // Bind additional component variants like this.
// export const [VariantName] = Template.bind({});
// [VariantName].args = data.[VariantName];
