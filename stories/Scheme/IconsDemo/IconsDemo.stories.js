import IconsDemo from './IconsDemo.twig';
import iconsJSON from '../../assets/icons.json';
import readme from './IconsDemo.mdx?raw'
import './IconsDemo.css';
import './IconsDemo.js';

export default {
  title: 'Scheme/IconsDemo',
  component: IconsDemo,
  tags: ["!autodocs"],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    icons: {table: {disable: true}},
  },
};

const Template = ({ ...args }) => {
  return IconsDemo({ ...args });
};

export const Icons = Template.bind({});
Icons.args = {
  icons: iconsJSON,
}
