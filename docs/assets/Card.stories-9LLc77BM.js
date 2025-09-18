import{C as d}from"./Card-Di3tLEhs.js";/* empty css             *//* empty css               */import"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";import"./Icon-DyjxCoXG.js";import"./Button-dN61hXFk.js";const e={default:{variant:"default",media:'<img src="/image.jpg" />',icon_data:{icon:"speaker",color:!1},heading:"Heading For A Card",text:"<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",button_data:{label:"Button",href:"#",variant:"primary"}},bordered_center:{variant:"bordered-center",media:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Y0p663Ot8mo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',heading:"Heading For A  Card",text:"<p>He stared at the clinic, Molly took him to the simple Chinese hollow points Shin had sold him. The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case's station. Still it was a square of faint light.</p>",button_data:{label:"Button",href:"#",variant:"primary"}},media_left:{variant:"media-left",media:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Y0p663Ot8mo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',heading:"Heading For A Card",text:"<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",button_data:{label:"Button",href:"#",variant:"primary"}},media_right:{variant:"media-right",media:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Y0p663Ot8mo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',heading:"Heading For A Card",text:"<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",button_data:{label:"Button",href:"#",variant:"primary"}},overlay:{variant:"overlay",media:{url:"/image.jpg"},heading:"Heading For A Card",text:"<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",button_data:{label:"Button",href:"#",variant:"primary"}},icon:{variant:"icon",media:!1,icon_data:{icon:"flame",color:!1},heading:"Heading For A Card",text:!1,button_data:{label:"Button",href:"#",variant:"primary"}}},c=`# Card

Card components consist of a few sub components that can be displayed in multiple layouts.


<details>
  <summary>Inherited CSS Variables:</summary>  - \`--color\`
  - \`--heading-color\`
  - \`--button-border\`
  - \`--button-bg\`
  - \`--button-fg\`
</details>

<details>
  <summary>Twig Variables:</summary>
  \`\`\`
  variant: "default",
  media: '...',
  icon_data: {
    icon: "speaker",
    color: false,
  },
  heading: "Heading For A Card",
  text: "<p>...</p>",
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  \`\`\`
</details>
`,v={title:"Components/Molecules/Card",component:d,parameters:{layout:"centered",docs:{description:{component:c}}},argTypes:{variant:{description:"The Card variant. Often set on the `Cards` component.",table:{defaultValue:{summary:"default"}},control:{type:"select"},options:["default","bordered-center","media-left","media-right","overlay","icon"]},media:{description:"Image, Video",table:{defaultValue:{summary:!1}}},icon_data:{description:"Data to pass to the Icon component.",table:{defaultValue:{summary:!1}}},heading:{description:"A heading.",table:{defaultValue:{summary:!1}}},text:{description:"A heading.",table:{defaultValue:{summary:!1}}},button:{description:"`button.label`, `button.href`, `button.variant`",table:{defaultValue:{summary:!1}}}}},a=({...l})=>d({...l}),t=a.bind({});t.args=e.default;const r=a.bind({});r.args=e.bordered_center;const n=a.bind({});n.args=e.media_left;const o=a.bind({});o.args=e.media_right;const i=a.bind({});i.args=e.overlay;const s=a.bind({});s.args=e.icon;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Card({
    ...args
  });
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Card({
    ...args
  });
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Card({
    ...args
  });
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Card({
    ...args
  });
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Card({
    ...args
  });
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Card({
    ...args
  });
}`,...s.parameters?.docs?.source}}};const w=["Default","BorderedCenter","MediaLeft","MediaRight","Overlay","Icon"];export{r as BorderedCenter,t as Default,s as Icon,n as MediaLeft,o as MediaRight,i as Overlay,w as __namedExportsOrder,v as default};
