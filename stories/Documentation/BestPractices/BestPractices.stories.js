import readme from './BestPractices.mdx?raw';
import Component from './BestPractices.twig';

export default {
  title: 'Documentation/Best Practices',
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: readme,
      }
    }
  },
  // tags: ['autodocs'], // Enables auto-generated documentation for all stories
};

const Template = ({ ...args }) => {
  return Component({ ...args });
};

export const Default = Template.bind({});
Default.args = {

};
