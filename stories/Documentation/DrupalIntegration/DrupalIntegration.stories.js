import readme from './DrupalIntegration.mdx?raw';
import Component from './DrupalIntegration.twig';

export default {
  title: 'Documentation/DrupalIntegration',
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: readme,
      }
    }
  },
};

const Template = ({ ...args }) => {
  return Component({ ...args });
};

export const Default = Template.bind({});
Default.args = {

};
