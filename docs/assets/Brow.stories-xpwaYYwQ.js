import{B as a}from"./Brow-Oi5Gql4t.js";import"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";const t={default:{variant:"default",part_one:"Brow Example",part_two:"Part Two"}},o=`# Brow

The Brow is often placed above headings. There are two possible parts, which are styled differently.

<details>
  <summary>Inherited CSS Variables:</summary>
  - \`--accent-color\` brow part one.
</details>

<details>
  <summary>Twig Variables:</summary>
  \`\`\`
  variant: "default",
  part_one: "Brow Example",
  \`\`\`
</details>
`,p={title:"Components/Atoms/Brow",component:a,parameters:{layout:"centered",docs:{description:{component:o}}},argTypes:{variant:{description:"The component variant.",table:{defaultValue:{summary:"default"}},control:{type:"radio"},options:["default","heading"]},part_one:{description:"The first part of the Brow, usually colored by `--accent-color` value.",table:{defaultValue:{summary:!1}}}}},n=({...r})=>a({...r}),e=n.bind({});e.args=t.default;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Brow({
    ...args
  });
}`,...e.parameters?.docs?.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,p as default};
