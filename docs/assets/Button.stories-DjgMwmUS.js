import{B as o}from"./Button-dN61hXFk.js";/* empty css               */import"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";const a={primary:{variant:"primary",size:"normal",label:"Button",href:"#"},secondary:{variant:"secondary",size:"normal",label:"Button",href:"#"},text:{variant:"text",size:"normal",label:"Button",href:"#"}},i=`# Button

Button border, text and background colors can be inherited from ancestor components via CSS variables.

<details>
  <summary>Inherited CSS Variables:</summary>
  - \`--button-fg\`
  - \`--button-bg\`
  - \`--button-border\` usually set to \`--button-fg\`.
</details>

<details>
  <summary>Twig Variables:</summary>
  \`\`\`
  variant: 'primary',
  size: 'normal',
  label: "Button",
  href: "#",

  \`\`\`
</details>
`,p={title:"Components/Atoms/Button",component:o,parameters:{layout:"centered",docs:{description:{component:i}}},argTypes:{variant:{description:"The button variant name.",table:{defaultValue:{summary:"primary"}},control:{type:"select"},options:["primary","secondary","text"]},size:{description:"The button size.",table:{defaultValue:{summary:"normal"}},control:{type:"select"},options:["small","normal","large"]},label:{description:"The button text.",table:{defaultValue:{summary:!1}}},href:{table:{disable:!0}}}},n=({...s})=>o({...s}),r=n.bind({});r.args=a.primary;const t=n.bind({});t.args=a.secondary;const e=n.bind({});e.args=a.text;r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Button({
    ...args
  });
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Button({
    ...args
  });
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Button({
    ...args
  });
}`,...e.parameters?.docs?.source}}};const b=["Primary","Secondary","Text"];export{r as Primary,t as Secondary,e as Text,b as __namedExportsOrder,p as default};
