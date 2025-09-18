import data from './HomePage.data';
import HomePage from './HomePage.twig';
import './HomePage.css';
import '../../Atoms/Button/Button.css';

export default {
  title: 'Page Demos/HomePage',
  component: HomePage,
  tags: ["!autodocs"]
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return HomePage({ ...args });
};

// Bind the Basic component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
