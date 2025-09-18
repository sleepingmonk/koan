import{t as r,D as p,a as l,T as n}from"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";const d=`# Box

>***Layouts are NOT components! They are only a demo of the layout primitive for Storybook.  To use layout primitives in your own templates simply use the appropriate CSS Classes.  See documentation and code samples for more details.***

The purpose of a box is to allow for the separation of concerns in our components. As a layout component, it's concerned with styles that are intrinsic to the Box, i.e.:

 - padding
 - background
 - border

It may also be a good place to override the CSS variables that will be inherited by the elements contained within the box.

External properties of a Box should not be styled directly, i.e.:

  - margin
  - width
  - height

External properties should be applied by the context, as with the margin applied by wrapping Boxes in a Stack, or the flex components (Switcher, Cluster, Sidebar, etc.) that manage flex-basis, flex-grow and flex-shrink. Otherwise width and height should only grow to fit the content within it and not be directly set by CSS.

You might argue that a Box as a layout component is unnecessary, as we are simply applying styles we could apply to any div. The \`.box\` class doesn't seem that useful in and of itself. But it stands to help remind us to **think of the context**, to **separate concerns**, and that **this is a system**, not a collection of arbitrarily styled divs.

By default, the box only has equal padding set to the first point on the modular scale \`var('--s1')\`.  In many cases, it should be enough to simply add the \`.box\` class to the appropriate element to move it's content from the edge of it's container.

<details>
  <summary>Inherited CSS Variables:</summary>
   - \`--bg\`
   - \`--heading-color\`
   - \`--accent-color\`
   - \`--color\`
   - \`--button-border\`
   - \`--button-bg\`
   - \`--button-fg\`
</details>
`;l(n);n.cache(!1);const a=e=>e,i=(e={})=>{const s=r.twig({id:"/home/runner/work/koan/koan/stories/Layout/Box/Box.twig",data:[{type:"raw",value:`

`,position:{start:92,end:94}},{type:"logic",token:{type:"Twig.logic.type.set",key:"styles",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:94,end:115}},position:{start:94,end:115}},{type:"logic",token:{type:"Twig.logic.type.set",key:"styles",expression:[{type:"Twig.expression.type.variable",value:"padding",match:["padding"]},{type:"Twig.expression.type.variable",value:"styles",match:["styles"]},{type:"Twig.expression.type.filter",value:"merge",match:["|merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"padding: var("},{type:"Twig.expression.type.variable",value:"padding",match:["padding"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:");"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.variable",value:"styles",match:["styles"]},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:116,end:202}},position:{start:116,end:202}},{type:"raw",value:`
`,position:{start:203,end:204}},{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"stack"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:204,end:238}},position:{start:204,end:238}},{type:"raw",value:`
<div class="`,position:{start:239,end:252}},{type:"output",position:{start:252,end:275},stack:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"],position:{start:252,end:275}},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],position:{start:252,end:275},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:252,end:275}},{type:"Twig.expression.type.string",value:" ",position:{start:252,end:275}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:252,end:275},expression:!1}]}]},{type:"raw",value:'" style="',position:{start:275,end:284}},{type:"output",position:{start:284,end:301},stack:[{type:"Twig.expression.type.variable",value:"styles",match:["styles"],position:{start:284,end:301}},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],position:{start:284,end:301}}]},{type:"raw",value:`">
  <p>Just a box</p>
  <div class="box" style="border: 1px solid;">
    <p>Box</p>
  </div>
  <p>A composition of 3 boxes in a simple card like pattern.</p>
  <div class="box" style="border: 1px solid; padding: 0;">
    <div class="box" style="border: 0spx solid; background: #aaa; --heading-color: #fff;">
      <h3>Box With Background</h3>
    </div>
    <div class="box" style="border: 0px solid;">
      <p>Box with no border, with padding.</p>
      <p><em>Both inner boxes wrapped in a box with border and no padding.</em></p>
    </div>
  </div>
</div>
`,position:{start:301,end:301}}],precompiled:!0});s.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),a(s.render({attributes:new p(t),...e}))}catch(t){return a("An error occurred whilst rendering /home/runner/work/koan/koan/stories/Layout/Box/Box.twig: "+t.toString())}},g={title:"Layout Demos/Box",description:"A simple Box component for layout purposes.",component:i,parameters:{layout:"centered",docs:{description:{component:d}}}},y=({...e})=>i({...e}),o=y.bind({});o.args={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Box({
    ...args
  });
}`,...o.parameters?.docs?.source}}};const h=["Default"];export{o as Default,h as __namedExportsOrder,g as default};
