
import schemeJSON from '../../assets/scheme.json';
import Scale from './Scale.twig';
import readme from './Scale.mdx?raw';
import './Scale.css';

const rows = schemeJSON.children[':root'].attributes;
const scale = [];
let ratio;

for (const key in rows) {
  if (key.includes('--s')) {
    const name = key;
    const splitName = name.split('-');
    scale.push({
      name: name,
      category: splitName[0],
      value: rows[key],
    });
  }

  if (key.includes('--ratio')) {
    ratio = rows[key];
  }
}

export default {
  title: 'Scheme/Scale',
  component: Scale,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: readme
      }
    }
  },
  argTypes: {
    attributes: {table: {disable: true}},
    scale: {table: {disable: true}},
    ratio: {table: {disable: true}},
  },
};

const Template = ({ ...args }) => {
  return Scale({ ...args });
};

export const Default = Template.bind({});
Default.args = {

  scale: scale,
  ratio: ratio,
}
