import readme from './Center.mdx?raw';
import Center from './Center.twig';

export default {
  title: 'Layout Demos/Center',
  component: Center,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: readme,
      }
    }
  }
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Center({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
};
