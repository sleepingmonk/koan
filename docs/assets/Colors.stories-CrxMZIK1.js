import{t as l,D as c,a as y,T as a}from"./twig-CReQIq0G.js";import{s as d}from"./scheme-sRb5K4TQ.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";y(a);a.cache(!1);const r=e=>e,n=(e={})=>{const o=l.twig({id:"/home/runner/work/koan/koan/stories/Scheme/Colors/Colors.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"colors"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:0,end:35}},position:{start:0,end:35}},{type:"logic",token:{type:"Twig.logic.type.set",key:"cat",expression:[{type:"Twig.expression.type.string",value:""}],position:{start:36,end:54}},position:{start:36,end:54}},{type:"raw",value:`
<div class="`,position:{start:55,end:68}},{type:"output",position:{start:68,end:91},stack:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"],position:{start:68,end:91}},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],position:{start:68,end:91},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:68,end:91}},{type:"Twig.expression.type.string",value:" ",position:{start:68,end:91}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:68,end:91},expression:!1}]}]},{type:"raw",value:`">
  `,position:{start:91,end:96}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"color",expression:[{type:"Twig.expression.type.variable",value:"colors",match:["colors"]}],position:{start:96,end:121},output:[{type:"raw",value:"    ",position:{start:122,end:126}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"cat",match:["cat"]},{type:"Twig.expression.type.variable",value:"color",match:["color"]},{type:"Twig.expression.type.key.period",key:"category"},{type:"Twig.expression.type.operator.binary",value:"!=",precidence:9,associativity:"leftToRight",operator:"!="}],position:{start:126,end:156},output:[{type:"raw",value:"      ",position:{start:157,end:163}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"cat",match:["cat"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"!=",precidence:9,associativity:"leftToRight",operator:"!="}],position:{start:163,end:181},output:[{type:"raw",value:`</div>
  </div>
      `,position:{start:182,end:204}}]},position:{open:{start:163,end:181},close:{start:204,end:215}}},{type:"raw",value:"      ",position:{start:216,end:222}},{type:"logic",token:{type:"Twig.logic.type.set",key:"cat",expression:[{type:"Twig.expression.type.variable",value:"color",match:["color"]},{type:"Twig.expression.type.key.period",key:"category"}],position:{start:222,end:252}},position:{start:222,end:252}},{type:"raw",value:"      ",position:{start:253,end:259}},{type:"raw",value:`
  <div class="color__group">
    <h2>`,position:{start:281,end:319}},{type:"output",position:{start:319,end:339},stack:[{type:"Twig.expression.type.variable",value:"color",match:["color"],position:{start:319,end:339}},{type:"Twig.expression.type.key.period",position:{start:319,end:339},key:"category"}]},{type:"raw",value:`</h2>
    <div class="grid">
    `,position:{start:339,end:372}}]},position:{open:{start:126,end:156},close:{start:372,end:383}}},{type:"raw",value:`  <div class="color">
        <div class="color__swatch" style="background-color: `,position:{start:384,end:466}},{type:"output",position:{start:466,end:481},stack:[{type:"Twig.expression.type.variable",value:"color",match:["color"],position:{start:466,end:481}},{type:"Twig.expression.type.key.period",position:{start:466,end:481},key:"value"}]},{type:"raw",value:`;"></div>
        <div class="color__label"><strong>`,position:{start:481,end:533}},{type:"output",position:{start:533,end:549},stack:[{type:"Twig.expression.type.variable",value:"color",match:["color"],position:{start:533,end:549}},{type:"Twig.expression.type.key.period",position:{start:533,end:549},key:"name"}]},{type:"raw",value:"</strong><br /><em>",position:{start:549,end:568}},{type:"output",position:{start:568,end:585},stack:[{type:"Twig.expression.type.variable",value:"color",match:["color"],position:{start:568,end:585}},{type:"Twig.expression.type.key.period",position:{start:568,end:585},key:"value"}]},{type:"raw",value:`</em></div>
      </div>
  `,position:{start:585,end:612}}]},position:{open:{start:96,end:121},close:{start:612,end:624}}},{type:"raw",value:"  ",position:{start:625,end:627}},{type:"raw",value:`
</div>
  </div>
</div>
`,position:{start:655,end:655}}],precompiled:!0});o.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),r(o.render({attributes:new c(t),...e}))}catch(t){return r("An error occurred whilst rendering /home/runner/work/koan/koan/stories/Scheme/Colors/Colors.twig: "+t.toString())}},u=`# Colors

## Notes for Storybook

These color swatches are dynamically generated based on the CSS custom properties defined in the \`*-scheme.css\` file. It looks for \`--color-*\` variables.

Use \`npm run scheme-data\` to (re)generate the JSON file that drives the Scheme stories if the scheme css file changes.

When using these color values in your CSS prefix with \`--color-\` followed by the name of the color shown in the swatch label.
`,i=d.children[":root"].attributes,p=[];for(const e in i)if(e.includes("--color-")){const o=e.replace("--color-","").replace(/\/\*.*\/\n\s*/,""),t=o.split("-");p.push({name:o,category:t[0],value:i[e]})}const T={title:"Scheme/Colors",component:n,parameters:{layout:"padded",docs:{description:{component:u}}},argTypes:{attributes:{table:{disable:!0}},colors:{table:{disable:!0}}}},g=({...e})=>n({...e}),s=g.bind({});s.args={colors:p};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Colors({
    ...args
  });
}`,...s.parameters?.docs?.source}}};const k=["Default"];export{s as Default,k as __namedExportsOrder,T as default};
