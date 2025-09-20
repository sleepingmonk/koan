import data from './SectionPaddingDemo.data';
import SectionPaddingDemo from './SectionPaddingDemo.twig';
import './SectionPaddingDemo.css';
import '../../Components/Molecules/Card/Card.css';
import '../../Components/Organisms/Section/Section.css';

export default {
  title: 'Page-Demos/SectionPaddingDemo',
  component: SectionPaddingDemo,
  tags: ["!autodocs"]
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return SectionPaddingDemo({ ...args });
};

// Bind the Basic component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
