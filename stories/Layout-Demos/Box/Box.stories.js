import readme from './Box.mdx?raw';
import Box from './Box.twig';

export default {
  title: 'Layout-Demos/Box',
  description: 'A simple Box component for layout purposes.',
  component: Box,
  tags: ['autodocs'],
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
  return Box({ ...args });
};

export const Default = Template.bind({});
Default.args = {

};
