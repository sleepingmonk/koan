
import data from './Cards.data';
import Cards from './Cards.twig';
import readme from './Cards.mdx?raw';
import './Cards.css';

export default {
  title: 'Components/Organisms/Cards',
  component: Cards,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: readme,
      }
    },
  },
  argTypes: {
    variant: {
      description: "COMING SOON: See `Section` component for variant values.",
      table: {defaultValue: {summary: "default"}},
    },
    card_width: {
      description: "The minimum width of an individual card. See the `Layout: Grid` layout example for more info and to experiment.",
      table: {defaultValue: {summary: "30ch"}},
    },
    card_variant: {
      description: "We can set the `Card` variant at the `Cards` wrapper level for consistency within a group of cards.",
      table: {defaultValue: {summary: "default"}},
      control: { type: 'select' },
      options: ['default', 'bordered-center', 'media-left', 'media-right', 'icon', 'overlay'],
    },
    items: {
      table: {
        disable: true,
      }
    },
  }
};

const Template = ({ ...args }) => {
  return Cards({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;

export const MediaLeft = Template.bind({});
MediaLeft.args = data.media_left;

export const MediaRight = Template.bind({});
MediaRight.args = data.media_right;

export const Icon = Template.bind({});
Icon.args = data.icon;
