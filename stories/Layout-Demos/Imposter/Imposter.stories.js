
import Imposter from './Imposter.twig';
import './Imposter.css';
import readme from './Imposter.mdx?raw';

export default {
  title: 'Layout-Demos/Imposter',
  component: Imposter,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: readme,
      }
    },
  },
  argTypes: {
    positioning: {
      description: "Sets the impostor positioning relative to its containing element, or the page.",
      table: { defaultValue: { summary: "absolute (the containing element)" }},
      control: { type: 'radio' },
      options: [ 'absolute', 'fixed' ],
    },
    main: {table: { disable: true }},
    imposter: {table: { disable: true }},
  },
};

const Template = ({ ...args }) => {
  return Imposter({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  positioning: 'absolute',
  main: "",
  imposter: "",

};
