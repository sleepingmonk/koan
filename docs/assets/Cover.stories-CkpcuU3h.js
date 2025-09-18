import{t as l,D as m,a as v,T as d}from"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";const r={default:{principal:"<div class='box'><p>This is principal</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere omnis voluptas neque ipsam debitis rerum numquam? Praesentium consectetur expedita delectus provident itaque quae ad est molestias, quas repellendus dicta.</p></div>"},with_top:{top:"<div class='box'><p>Top</p></div>",principal:"<div class='box'><p>This is principal</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere omnis voluptas neque ipsam debitis rerum numquam? Praesentium consectetur expedita delectus provident itaque quae ad est molestias, quas repellendus dicta.</p></div>"},with_bottom:{principal:"<div class='box'><p>This is principal</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere omnis voluptas neque ipsam debitis rerum numquam? Praesentium consectetur expedita delectus provident itaque quae ad est molestias, quas repellendus dicta.</p></div>",bottom:"<div class='box'><p>Bottom</p></div>"},with_both:{top:"<div class='box'><p>Top</p></div>",principal:"<div class='box'><p>This is principal</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere omnis voluptas neque ipsam debitis rerum numquam? Praesentium consectetur expedita delectus provident itaque quae ad est molestias, quas repellendus dicta.</p></div>",bottom:"<div class='box'><p>Bottom</p></div>"}};v(d);d.cache(!1);const u=e=>e,c=(e={})=>{const p=l.twig({id:"/home/runner/work/koan/koan/stories/Layout/Cover/Cover.twig",data:[{type:"raw",value:`

<div class="cover cover-demo">
  `,position:{start:92,end:127}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"top",match:["top"]}],position:{start:127,end:139},output:[{type:"raw",value:"    ",position:{start:140,end:144}},{type:"output",position:{start:144,end:153},stack:[{type:"Twig.expression.type.variable",value:"top",match:["top"],position:{start:144,end:153}}]},{type:"raw",value:`
  `,position:{start:153,end:156}}]},position:{open:{start:127,end:139},close:{start:156,end:167}}},{type:"raw",value:"  ",position:{start:168,end:170}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"principal",match:["principal"]}],position:{start:170,end:188},output:[{type:"raw",value:`    <div class="principal">
      `,position:{start:189,end:223}},{type:"output",position:{start:223,end:238},stack:[{type:"Twig.expression.type.variable",value:"principal",match:["principal"],position:{start:223,end:238}}]},{type:"raw",value:`
    </div>
  `,position:{start:238,end:252}}]},position:{open:{start:170,end:188},close:{start:252,end:263}}},{type:"raw",value:"  ",position:{start:264,end:266}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"bottom",match:["bottom"]}],position:{start:266,end:281},output:[{type:"raw",value:"    ",position:{start:282,end:286}},{type:"output",position:{start:286,end:298},stack:[{type:"Twig.expression.type.variable",value:"bottom",match:["bottom"],position:{start:286,end:298}}]},{type:"raw",value:`
  `,position:{start:298,end:301}}]},position:{open:{start:266,end:281},close:{start:301,end:312}}},{type:"raw",value:`</div>
`,position:{start:313,end:313}}],precompiled:!0});p.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),u(p.render({attributes:new m(t),...e}))}catch(t){return u("An error occurred whilst rendering /home/runner/work/koan/koan/stories/Layout/Cover/Cover.twig: "+t.toString())}},h=`# Cover

>***Layouts are NOT components! They are only a demo of the layout primitive for Storybook.  To use layout primitives in your own templates simply use the appropriate CSS Classes.  See documentation and code samples for more details.***

The Cover layout provides a way to vertically align content (\`.principal\`) and provides an optional top and bottom element while still centering the \`.principal\` accordingly.

Another thing you could do with a Cover is use it for "Card" content, where you have a Heading, Text and Button as your top, principal and bottom elements.

While you may not wish to center your Text between the Heading and Button in this context, you could override the CSS in this context to remove the top margin on the principal. \`margin-block-start: 0;\` This will bring the Heading and the Text together, while still pushing the Button to the bottom of the available space.

<details>
  <summary>Basic Markup</summary>
  \`\`\`
  <div class="cover">
    <div></div>
    <div class="principal"></div>
    <div></div>
  </div>
  \`\`\`
</details>

<details>
  <summary>Inherited CSS Variables:</summary>
  - \`--gap\`: *(--s0)* Sets the gap value between cover sections. Be sure to use the "Modal Scale" variables, \`--s*\`, though the default should be good for most cases.
  - \`--cover-height\`: *(100vh)* Sets the MINIMUM height of the cover.
  - \`--cover-padding\`: *(--s0)* By default the Cover layout has padding around the wrapping div. You may wish to have the cover go edge to edge (0), or some other padding value.
</details>
`,w={title:"Layout Demos/Cover",component:c,parameters:{layout:"fullscreen",docs:{description:{component:h}}},argTypes:{}},n=({...e})=>c({...e}),o=n.bind({});o.args=r.default;const a=n.bind({});a.args=r.with_top;const i=n.bind({});i.args=r.with_bottom;const s=n.bind({});s.args=r.with_both;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Cover({
    ...args
  });
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Cover({
    ...args
  });
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Cover({
    ...args
  });
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Cover({
    ...args
  });
}`,...s.parameters?.docs?.source}}};const f=["Default","WithTop","WithBottom","WithBoth"];export{o as Default,s as WithBoth,i as WithBottom,a as WithTop,f as __namedExportsOrder,w as default};
