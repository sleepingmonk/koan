import readme from './Intro.mdx?raw';
import Component from './Intro.twig';

export default {
  title: 'Documentation/Intro',
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
