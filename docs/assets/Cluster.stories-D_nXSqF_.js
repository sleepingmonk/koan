import{t as o,D as p,a as l,T as a}from"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";const x={default:{num_items:5}};l(a);a.cache(!1);const i=e=>e,r=(e={})=>{const n=o.twig({id:"/home/runner/work/koan/koan/stories/Layout/Cluster/Cluster.twig",data:[{type:"raw",value:`

<div class="cluster-demo">
  <h2>Single Cluster</h2>
  <div class="box">
    <div class="cluster">
      `,position:{start:92,end:199}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"i",expression:[{type:"Twig.expression.type._function",fn:"range",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.number",value:1,match:["1",null]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"num_items",match:["num_items"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:199,end:233},output:[{type:"raw",value:'        <div style="background: #000; text-align: center; color: #000; font-weight: bold;">',position:{start:234,end:325}},{type:"output",position:{start:325,end:409},stack:[{type:"Twig.expression.type._function",position:{start:325,end:409},fn:"random",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:325,end:409}},{type:"Twig.expression.type.array.start",value:"[",match:["["],position:{start:325,end:409}},{type:"Twig.expression.type.string",value:"xxx",position:{start:325,end:409}},{type:"Twig.expression.type.comma",position:{start:325,end:409}},{type:"Twig.expression.type.string",value:"xxxxx",position:{start:325,end:409}},{type:"Twig.expression.type.comma",position:{start:325,end:409}},{type:"Twig.expression.type.string",value:"xxxxxxxx",position:{start:325,end:409}},{type:"Twig.expression.type.comma",position:{start:325,end:409}},{type:"Twig.expression.type.string",value:"xxxxxxxxxxxxx",position:{start:325,end:409}},{type:"Twig.expression.type.comma",position:{start:325,end:409}},{type:"Twig.expression.type.string",value:"xxxxxxxxxxxxxxxxxxxxx",position:{start:325,end:409}},{type:"Twig.expression.type.array.end",value:"]",match:["]"],position:{start:325,end:409}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:325,end:409},expression:!1}]}]},{type:"raw",value:`</div>
      `,position:{start:409,end:422}}]},position:{open:{start:199,end:233},close:{start:422,end:434}}},{type:"raw",value:`    </div>
  </div>
  <h2>Nested Clusters</h2>
  <p>Header with Logo and Nav example.</p>
  <ul>
    <li>The outer cluster contains the Icon and the Nav. The whole nav will wrap below the icon when necessary. This cluster has \`justify-content: space between\` to move the Nav to the right. And \`align-content: center:\` to vertically align everything to the center.</li>
    <li>The inner cluster contains the nav items. The nav items will wrap themselves when necessary.</li>
  </ul>
  <div class="box">
    <div class="cluster" style="justify-content: space-between; align-items: center;">
      <div class="cluster-demo__logo"></div>
      <div class="cluster">
        `,position:{start:435,end:1106}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"i",expression:[{type:"Twig.expression.type._function",fn:"range",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.number",value:1,match:["1",null]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"num_items",match:["num_items"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:1106,end:1140},output:[{type:"raw",value:'          <div style="background: #000; text-align: center; color: #000; font-weight: bold;">',position:{start:1141,end:1234}},{type:"output",position:{start:1234,end:1318},stack:[{type:"Twig.expression.type._function",position:{start:1234,end:1318},fn:"random",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:1234,end:1318}},{type:"Twig.expression.type.array.start",value:"[",match:["["],position:{start:1234,end:1318}},{type:"Twig.expression.type.string",value:"xxx",position:{start:1234,end:1318}},{type:"Twig.expression.type.comma",position:{start:1234,end:1318}},{type:"Twig.expression.type.string",value:"xxxxx",position:{start:1234,end:1318}},{type:"Twig.expression.type.comma",position:{start:1234,end:1318}},{type:"Twig.expression.type.string",value:"xxxxxxxx",position:{start:1234,end:1318}},{type:"Twig.expression.type.comma",position:{start:1234,end:1318}},{type:"Twig.expression.type.string",value:"xxxxxxxxxxxxx",position:{start:1234,end:1318}},{type:"Twig.expression.type.comma",position:{start:1234,end:1318}},{type:"Twig.expression.type.string",value:"xxxxxxxxxxxxxxxxxxxxx",position:{start:1234,end:1318}},{type:"Twig.expression.type.array.end",value:"]",match:["]"],position:{start:1234,end:1318}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:1234,end:1318},expression:!1}]}]},{type:"raw",value:`</div>
        `,position:{start:1318,end:1333}}]},position:{open:{start:1106,end:1140},close:{start:1333,end:1345}}},{type:"raw",value:`      </div>
    </div>
  </div>
</div>
`,position:{start:1346,end:1346}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),i(n.render({attributes:new p(t),...e}))}catch(t){return i("An error occurred whilst rendering /home/runner/work/koan/koan/stories/Layout/Cluster/Cluster.twig: "+t.toString())}},u=`# Cluster

>***Layouts are NOT components! They are only a demo of the layout primitive for Storybook.  To use layout primitives in your own templates simply use the appropriate CSS Classes.  See documentation and code samples for more details.***

The Cluster is a good layout for groups of items of differing length that can potentially wrap. Some examples might be nav links, tag lists, keyword lists, etc.

Using \`justify-content\` you can align groups to the left, right or center.

<details>
  <summary>Inherited CSS Variables:</summary>
  - \`--gap\`: Sets the gap value between cluster items. Be sure to use the "Modal Scale" variables, \`--s0\`, though the default should be good for most cases.
</details>

*No media queries were used in the making of this layout.*
`,g={title:"Layout Demos/Cluster",component:r,parameters:{layout:"padded",docs:{description:{component:u}}},argTypes:{}},y=({...e})=>r({...e}),s=y.bind({});s.args=x.default;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Cluster({
    ...args
  });
}`,...s.parameters?.docs?.source}}};const w=["Default"];export{s as Default,w as __namedExportsOrder,g as default};
