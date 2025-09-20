import data from './Icon.data';
import Icon from './Icon.twig';
import './Icon.css';
import readme from './Icon.mdx?raw';

import iconsJSON from '../../../assets/icons.json';
import schemeJSON from '../../../assets/scheme.json';
const schemeColors = Object.keys(schemeJSON.children[':root'].attributes).map(key => {
  if (key.startsWith('--color-')) {
    return key.replace('--color-', '');
  }
  return false;
});

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
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
    icon: {
      description: 'Available icons are in an svg "sprite" file built from the icons in `assets/icons`. i.e. `documents`, `speaker`, `toolkit`',
      table: { defaultValue: { summary: false }},
      control: { type: 'select' },
      options: iconsJSON,
    },
    color: {
      description: "Can be any color defined in the scheme CSS file, i.e. `assets/css/scheme-default.css` or any scheme file that overrides it. If the defined color is `--color-primary-dark-x` then the color name is `primary-dark-x`.  `false` inherits the current `--color` value.",
      table: { defaultValue: { summary: false }},
      control: { type: 'select' },
      options: schemeColors,
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Icon({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
