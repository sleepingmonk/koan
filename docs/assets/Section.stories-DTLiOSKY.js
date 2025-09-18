import"./Button-dN61hXFk.js";import{S as u}from"./Section-3qP5kWuX.js";/* empty css                *//* empty css               */import"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";import"./Brow-Oi5Gql4t.js";const e={default:{first_component:!0,scheme:"light",align_items:"start",background_image_url:"",bg_tint:!0,brow_data:{variant:"heading",part_one:"Brow Example",part_two:"Part Two"},heading:"Heading Example",text:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",button_data:{variant:"secondary",label:"Button",href:"#"},content_layout:"container",content_styles:["background: transparent; border: 1px dashed var(--color);"],content_data:['<div class="box"><p>Additional Content Goes Here</p></div>']},dark:{first_component:!1,scheme:"dark",brow_data:{variant:"default",part_one:"Brow Example",part_two:""},heading:"Heading Example",text:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",button_data:{label:"Button",href:"#",variant:"secondary"},content_layout:"container",content_styles:["background: transparent; border: 1px dashed var(--color);"],content_data:['<div class="box"><p>Additional Content Goes Here</p></div>']},base:{first_component:!0,scheme:"base",align_items:"start",background_image_url:"",bg_tint:!0,brow_data:{variant:"heading",part_one:"Brow Example",part_two:"Part Two"},heading:"Heading Example",text:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",button_data:{variant:"secondary",label:"Button",href:"#"},content_layout:"container",content_styles:["background: transparent; border: 1px dashed var(--color);"],content_data:['<div class="box"><p>Additional Content Goes Here</p></div>']},primary:{first_component:!0,scheme:"primary",align_items:"start",background_image_url:"",bg_tint:!0,brow_data:{variant:"heading",part_one:"Brow Example",part_two:"Part Two"},heading:"Heading Example",text:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",button_data:{variant:"secondary",label:"Button",href:"#"},content_layout:"container",content_styles:["background: transparent; border: 1px dashed var(--color);"],content_data:['<div class="box"><p>Additional Content Goes Here</p></div>']},accent:{first_component:!0,scheme:"accent",align_items:"start",background_image_url:"",bg_tint:!0,brow_data:{variant:"heading",part_one:"Brow Example",part_two:"Part Two"},heading:"Heading Example",text:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",button_data:{variant:"secondary",label:"Button",href:"#"},content_layout:"container",content_styles:["background: transparent; border: 1px dashed var(--color);"],content_data:['<div class="box"><p>Additional Content Goes Here</p></div>']},bg_image:{first_component:!1,scheme:"dark",background_image_url:"/image.jpg",bg_tint:"secondary",brow_data:{variant:"default",part_one:"Brow Example",part_two:""},heading:"Heading Example",text:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",button_data:{label:"Button",href:"#",variant:"secondary"},content_layout:"container",content_styles:["background: transparent; border: 1px dashed var(--color);"],content_data:['<div class="box"><p>Additional Content Goes Here</p></div>']}},c=`# Section

A Section is a wrapping component that provides a background as well as optional **brow**, **heading**, **text** and **button**. The Section contains other components that provide content, like cards, etc.

<details>
  <summary>Inherited CSS Variables:</summary>
  - \`--color\`
  - \`--color\`
  - \`--accent-color\`
  - \`--heading-color\`
  - \`--button-fg\`
</details>

<details>
  <summary>Twig Variables:</summary>
  \`\`\`
  variant: "default",
  first_component: false,
  brow_data: {
    variant: "default",
    part_one: "Brow Example",
    part_two: "",
  },
  heading: "Heading Example",
  text: "<p>...</p>",
  sub_component_template: "Card"
  sub_component_data: {
    [Data for the specified sub_component_template]
  },
  button_data: {
    variant: "primary",
    size: "normal",
    label: "Button",
    href: "#"
  }
  \`\`\`
</details>
`,f={title:"Components/Organisms/Section",component:u,parameters:{docs:{description:{component:c}}},argTypes:{first_component:{description:"If true, sets the section heading to H1",table:{defaultValue:{summary:!1}}},scheme:{description:"Scheme name based on background color which also sets complimentary styles.",table:{defaultValue:{summary:"default"}},control:{type:"select"},options:["default","light","dark","base-dark-xx","base-dark-x","base","base-light-x","base-light-xx","primary-dark-xx","primary-dark-x","primary","primary-light-x","primary-light-xx","accent-dark-xx","accent-dark-x","accent","accent-light-x","accent-light-xx"]},align_items:{description:"Sets the alignment of all content within the section.",table:{defaultValue:{summary:"start"}},control:{type:"select"},options:["start","center","end"]},brow_data:{description:"Populates the Brow template.",table:{defaultValue:{summary:!1}}},heading:{description:"Populates the Brow template.",table:{defaultValue:{summary:!1}}},text:{description:"Populates the Brow template.",table:{defaultValue:{summary:!1}}},sub_component_layout:{description:"Sets the layout for the sub component.",table:{defaultValue:{summary:"default"}}},sub_component_data:{description:"Populates the template specified in sub_component_template.",table:{defaultValue:{summary:!1}},control:{type:"object"}},button_data:{description:"Populates the Button template.",table:{defaultValue:{summary:!1}}}}},t=({...l})=>u({...l}),a=t.bind({});a.args=e.default;const n=t.bind({});n.args=e.dark;const r=t.bind({});r.args=e.base;const o=t.bind({});o.args=e.primary;const s=t.bind({});s.args=e.accent;const i=t.bind({});i.args=e.bg_image;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Section({
    ...args
  });
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Section({
    ...args
  });
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Section({
    ...args
  });
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Section({
    ...args
  });
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Section({
    ...args
  });
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Section({
    ...args
  });
}`,...i.parameters?.docs?.source}}};const v=["Default","Dark","Base","Primary","Accent","BgImage"];export{s as Accent,r as Base,i as BgImage,n as Dark,a as Default,o as Primary,v as __namedExportsOrder,f as default};
