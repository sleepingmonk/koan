import{s as c}from"./scheme-sRb5K4TQ.js";import{t as d,D as u,a as y,T as o}from"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";y(o);o.cache(!1);const r=e=>e,n=(e={})=>{const s=d.twig({id:"/home/runner/work/koan/koan/stories/Scheme/Scale/Scale.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"scale"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"stack"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:0,end:44}},position:{start:0,end:44}},{type:"raw",value:`
`,position:{start:45,end:46}},{type:"logic",token:{type:"Twig.logic.type.set",key:"cat",expression:[{type:"Twig.expression.type.string",value:""}],position:{start:46,end:64}},position:{start:46,end:64}},{type:"raw",value:`
<div class="`,position:{start:65,end:78}},{type:"output",position:{start:78,end:101},stack:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"],position:{start:78,end:101}},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],position:{start:78,end:101},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:78,end:101}},{type:"Twig.expression.type.string",value:" ",position:{start:78,end:101}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:78,end:101},expression:!1}]}]},{type:"raw",value:`">
  <p><strong>ratio: </strong> `,position:{start:101,end:134}},{type:"output",position:{start:134,end:145},stack:[{type:"Twig.expression.type.variable",value:"ratio",match:["ratio"],position:{start:134,end:145}}]},{type:"raw",value:`</p>
  `,position:{start:145,end:152}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"s",expression:[{type:"Twig.expression.type.variable",value:"scale",match:["scale"]}],position:{start:152,end:172},output:[{type:"raw",value:`    <div class="cluster">
      <div class="scale__label">
        <strong>`,position:{start:173,end:248}},{type:"output",position:{start:248,end:260},stack:[{type:"Twig.expression.type.variable",value:"s",match:["s"],position:{start:248,end:260}},{type:"Twig.expression.type.key.period",position:{start:248,end:260},key:"name"}]},{type:"raw",value:`</strong>
      </div>
      <div class="scale__swatch" style="width: var(`,position:{start:260,end:334}},{type:"output",position:{start:334,end:344},stack:[{type:"Twig.expression.type.variable",value:"s",match:["s"],position:{start:334,end:344}},{type:"Twig.expression.type.key.period",position:{start:334,end:344},key:"name"}]},{type:"raw",value:"); height: var(",position:{start:344,end:359}},{type:"output",position:{start:359,end:369},stack:[{type:"Twig.expression.type.variable",value:"s",match:["s"],position:{start:359,end:369}},{type:"Twig.expression.type.key.period",position:{start:359,end:369},key:"name"}]},{type:"raw",value:`);"></div>
    </div>
  `,position:{start:369,end:393}}]},position:{open:{start:152,end:172},close:{start:393,end:405}}},{type:"raw",value:`</div>
`,position:{start:406,end:406}}],precompiled:!0});s.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),r(s.render({attributes:new u(t),...e}))}catch(t){return r("An error occurred whilst rendering /home/runner/work/koan/koan/stories/Scheme/Scale/Scale.twig: "+t.toString())}},g=`# Modular Scale

The purpose of a Modular Scale is to create visual harmony in the sizing and spacing of elements on our page. Rather than arbitrary sizing or spacing values we can equip ourselves with a small collection of values that are derived from a mathematical algorithm. These values can be used to set padding, margins, sizes, etc.

By sticking to our modular scale values we can avoid visual discord in our layouts. Just select the scale value that solves our spacing/sizing needs the best and know that these will scale appropriately and always be proportional to every other element's spacing/sizing.

The modular scale **ratio** for this design was not chosen arbitrarily either. It was set by determining a baseline value from the design to serve as \`--s0\`, then finding the extreme ends of large and small represented in the design. The ratio was derived from this range to give us a set of harmonious points on the scale.

For more on Modular Scale see [Every Layout](https://every-layout.dev/rudiments/modular-scale/).
`,i=c.children[":root"].attributes,p=[];let l;for(const e in i){if(e.includes("--s")){const s=e,t=s.split("-");p.push({name:s,category:t[0],value:i[e]})}e.includes("--ratio")&&(l=i[e])}const f={title:"Scheme/Scale",component:n,parameters:{layout:"centered",docs:{description:{component:g}}},argTypes:{scale:{table:{disable:!0}},ratio:{table:{disable:!0}}}},m=({...e})=>n({...e}),a=m.bind({});a.args={scale:p,ratio:l};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Scale({
    ...args
  });
}`,...a.parameters?.docs?.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,f as default};
