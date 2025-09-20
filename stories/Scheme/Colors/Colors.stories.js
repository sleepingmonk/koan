import Colors from './Colors.twig';
import schemeJSON from '../../assets/scheme.json';
import readme from './Colors.mdx?raw'
import './Colors.css';

const rows = schemeJSON.children[':root'].attributes;
const colors = [];

for (const key in rows) {
  if (key.includes('--color-')) {
    const name = key.replace('--color-', '').replace(/\/\*.*\/\n\s*/, '');
    const splitName = name.split('-');
    colors.push({
      name: name,
      category: splitName[0],
      value: rows[key],
    });
  }
}

export default {
  title: 'Scheme/Colors',
  component: Colors,
  tags: ['!autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    colors: {table: {disable: true}},
  },
};

const Template = ({ ...args }) => {
  return Colors({ ...args });
};

export const Default = Template.bind({});
Default.args = {

  colors: colors,
}
