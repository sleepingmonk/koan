import{t as a,D as p,a as l,T as s}from"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";l(s);s.cache(!1);const n=e=>e,r=(e={})=>{const i=a.twig({id:"/home/runner/work/koan/koan/stories/Layout/Imposter/Imposter.twig",data:[{type:"raw",value:`

`,position:{start:92,end:94}},{type:"raw",value:`

`,position:{start:202,end:204}},{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"center"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:204,end:239}},position:{start:204,end:239}},{type:"raw",value:`
<div class="imposter-demo">
  <div class="grid">
    <div class="box">
      <div class="imposter imposter-demo__inner">
        <div class="box">
          <p>absolute</p>
        </div>
      </div>
    </div>
    <div class="box">
    </div>
  </div>
  <div class="grid">
    <div class="box">
    </div>
    <div class="box">
      <div class="imposter imposter-demo__inner" style="--positioning: `,position:{start:240,end:642}},{type:"output",position:{start:642,end:659},stack:[{type:"Twig.expression.type.variable",value:"positioning",match:["positioning"],position:{start:642,end:659}}]},{type:"raw",value:`">
        <div class="box">
          <p>`,position:{start:659,end:701}},{type:"output",position:{start:701,end:718},stack:[{type:"Twig.expression.type.variable",value:"positioning",match:["positioning"],position:{start:701,end:718}}]},{type:"raw",value:`</p>
        </div>
      </div>
    </div>
  </div>
</div>
`,position:{start:718,end:718}}],precompiled:!0});i.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),n(i.render({attributes:new p(t),...e}))}catch(t){return n("An error occurred whilst rendering /home/runner/work/koan/koan/stories/Layout/Imposter/Imposter.twig: "+t.toString())}},d=`# Imposter

>***Layouts are NOT components! They are only a demo of the layout primitive for Storybook.  To use layout primitives in your own templates simply use the appropriate CSS Classes.  See documentation and code samples for more details.***

The Imposter element allows you to centrally position an element over the viewport, document, or a positioned element.

You can use fixed positioning on the imposter to create a full screen modal.

A note about flow: If using position fixed, its best to place your imposter element at the end of the document so it appears above other elements without requiring z-index.

<details>
  <summary>Inherited CSS Variables:</summary>
  - \`--positioning\`:
    - **absolute**: (default): positions the imposter relative to its containing element.
    - **fixed**: positions the imposter relative to the page.
</details>
`,v={title:"Layout Demos/Imposter",component:r,parameters:{layout:"padded",docs:{description:{component:d}}},argTypes:{positioning:{description:"Sets the impostor positioning relative to its containing element, or the page.",table:{defaultValue:{summary:"absolute (the containing element)"}},control:{type:"radio"},options:["absolute","fixed"]},main:{table:{disable:!0}},imposter:{table:{disable:!0}}}},m=({...e})=>r({...e}),o=m.bind({});o.args={positioning:"absolute",main:"",imposter:""};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Imposter({
    ...args
  });
}`,...o.parameters?.docs?.source}}};const g=["Default"];export{o as Default,g as __namedExportsOrder,v as default};
