import{s as y}from"./scheme-sRb5K4TQ.js";import{t as l,D as c,a as d,T as a}from"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";d(a);a.cache(!1);const n=t=>t,r=(t={})=>{const o=l.twig({id:"/home/runner/work/koan/koan/stories/Scheme/Fonts/Fonts.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"fonts"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"stack"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:0,end:44}},position:{start:0,end:44}},{type:"raw",value:`
`,position:{start:45,end:46}},{type:"logic",token:{type:"Twig.logic.type.set",key:"cat",expression:[{type:"Twig.expression.type.string",value:""}],position:{start:46,end:64}},position:{start:46,end:64}},{type:"raw",value:`
<div class="`,position:{start:65,end:78}},{type:"output",position:{start:78,end:101},stack:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"],position:{start:78,end:101}},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],position:{start:78,end:101},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:78,end:101}},{type:"Twig.expression.type.string",value:" ",position:{start:78,end:101}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:78,end:101},expression:!1}]}]},{type:"raw",value:`">
  `,position:{start:101,end:106}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"font",expression:[{type:"Twig.expression.type.variable",value:"fonts",match:["fonts"]}],position:{start:106,end:129},output:[{type:"raw",value:"    ",position:{start:130,end:134}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"cat",match:["cat"]},{type:"Twig.expression.type.variable",value:"font",match:["font"]},{type:"Twig.expression.type.key.period",key:"category"},{type:"Twig.expression.type.operator.binary",value:"!=",precidence:9,associativity:"leftToRight",operator:"!="}],position:{start:134,end:163},output:[{type:"raw",value:"      ",position:{start:164,end:170}},{type:"raw",value:`
      `,position:{start:201,end:208}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"cat",match:["cat"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"!=",precidence:9,associativity:"leftToRight",operator:"!="}],position:{start:208,end:226},output:[{type:"raw",value:`        </div>
      `,position:{start:227,end:248}}]},position:{open:{start:208,end:226},close:{start:248,end:259}}},{type:"raw",value:`
      `,position:{start:260,end:267}},{type:"logic",token:{type:"Twig.logic.type.set",key:"cat",expression:[{type:"Twig.expression.type.variable",value:"font",match:["font"]},{type:"Twig.expression.type.key.period",key:"category"}],position:{start:267,end:296}},position:{start:267,end:296}},{type:"raw",value:`
      `,position:{start:297,end:304}},{type:"raw",value:`
      <div class="font__group stack">
        <div class="box">
          <h2>--font-`,position:{start:326,end:412}},{type:"output",position:{start:412,end:431},stack:[{type:"Twig.expression.type.variable",value:"font",match:["font"],position:{start:412,end:431}},{type:"Twig.expression.type.key.period",position:{start:412,end:431},key:"category"}]},{type:"raw",value:": ",position:{start:431,end:433}},{type:"output",position:{start:433,end:449},stack:[{type:"Twig.expression.type.variable",value:"font",match:["font"],position:{start:433,end:449}},{type:"Twig.expression.type.key.period",position:{start:433,end:449},key:"value"}]},{type:"raw",value:`;</h2>
        </div>
    `,position:{start:449,end:475}}]},position:{open:{start:134,end:163},close:{start:475,end:486}}},{type:"raw",value:`
    <div class="font box">
      <div class="font__swatch" style="font-family: var(--font-`,position:{start:487,end:578}},{type:"output",position:{start:578,end:591},stack:[{type:"Twig.expression.type.variable",value:"font",match:["font"],position:{start:578,end:591}},{type:"Twig.expression.type.key.period",position:{start:578,end:591},key:"name"}]},{type:"raw",value:"); font-weight: ",position:{start:591,end:607}},{type:"output",position:{start:607,end:624},stack:[{type:"Twig.expression.type.variable",value:"font_weight",match:["font_weight"],position:{start:607,end:624}}]},{type:"raw",value:`">
        <p>The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog.</p>
        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p>0123456789</p>
      </div>
    </div>
  `,position:{start:624,end:1081}}]},position:{open:{start:106,end:129},close:{start:1081,end:1093}}},{type:"raw",value:"  ",position:{start:1094,end:1096}},{type:"raw",value:`
  </div>
</div>
`,position:{start:1124,end:1124}}],precompiled:!0});o.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),n(o.render({attributes:new c(e),...t}))}catch(e){return n("An error occurred whilst rendering /home/runner/work/koan/koan/stories/Scheme/Fonts/Fonts.twig: "+e.toString())}},u=`# Fonts

The available fonts are rendered here for reference. You may adjust the font-weight to see how each font is affected.
`,i=y.children[":root"].attributes,p=[];for(const t in i)if(t.includes("--font-")){const o=t.replace("--font-","").replace(/\/\*.*\/\n\s*/,""),e=o.split("-");p.push({name:o,category:e[0],value:i[t]})}const h={title:"Scheme/Fonts",component:r,parameters:{layout:"padded",docs:{description:{component:u}}},argTypes:{fonts:{table:{disable:!0}},font_weight:{control:{type:"select"},options:[100,200,300,400,500,600,700,800,900]}}},g=({...t})=>r({...t}),s=g.bind({});s.args={fonts:p,font_weight:300};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Fonts({
    ...args
  });
}`,...s.parameters?.docs?.source}}};const T=["Default"];export{s as Default,T as __namedExportsOrder,h as default};
