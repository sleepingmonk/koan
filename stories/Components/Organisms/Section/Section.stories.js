
import data from './Section.data';
import Section from './Section.twig';
import readme from './Section.mdx?raw';
import './Section.css';
import '../../Atoms/Button/Button.css';

export default {
  title: 'Components/Organisms/Section',
  component: Section,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    }
  },
  argTypes: {
    first_component: {
      description: "If true, sets the section heading to H1",
      table: {defaultValue: {summary: false}},
    },
    scheme: {
      description: "Scheme name based on background color which also sets complimentary styles.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'select' },
      options: [
        'default',
        'light',
        'dark',
        'base-dark-xx',
        'base-dark-x',
        'base',
        'base-light-x',
        'base-light-xx',
        'primary-dark-xx',
        'primary-dark-x',
        'primary',
        'primary-light-x',
        'primary-light-xx',
        'accent-dark-xx',
        'accent-dark-x',
        'accent',
        'accent-light-x',
        'accent-light-xx',
      ],
    },
    align_items: {
      description: "Sets the alignment of all content within the section.",
      table: {defaultValue: {summary: 'start'}},
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
    },
    brow_data: {
      description: "Populates the Brow template.",
      table: {defaultValue: {summary: false}},
    },
    heading: {
      description: "Populates the Brow template.",
      table: {defaultValue: {summary: false}},
    },
    text: {
      description: "Populates the Brow template.",
      table: {defaultValue: {summary: false}},
    },
    sub_component_layout: {
      description: "Sets the layout for the sub component.",
      table: {defaultValue: {summary: 'default'}},
    },
    sub_component_data: {
      description: "Populates the template specified in sub_component_template.",
      table: {defaultValue: {summary: false}},
      control: { type: 'object' },
    },
    button_data: {
      description: "Populates the Button template.",
      table: {defaultValue: {summary: false}},
    },
  }
};

const Template = ({ ...args }) => {
  return Section({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;

export const Dark = Template.bind({});
Dark.args = data.dark;

export const Base = Template.bind({});
Base.args = data.base;

export const Primary = Template.bind({});
Primary.args = data.primary;

export const Accent = Template.bind({});
Accent.args = data.accent;

export const BgImage = Template.bind({});
BgImage.args = data.bg_image;
