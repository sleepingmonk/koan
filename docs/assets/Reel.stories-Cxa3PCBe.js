import{t as d,D as m,a as y,T as p}from"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";y(p);p.cache(!1);const l=e=>e,u=(e={})=>{const r=d.twig({id:"/home/runner/work/koan/koan/stories/Layout/Reel/Reel.twig",data:[{type:"raw",value:`
`,position:{start:92,end:93}},{type:"logic",token:{type:"Twig.logic.type.set",key:"scroll",expression:[{type:"Twig.expression.type.variable",value:"scroll",match:["scroll"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.string",value:"no-bar"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:93,end:134}},position:{start:93,end:134}},{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"reel"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"scroll",match:["scroll"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:135,end:178}},position:{start:135,end:178}},{type:"raw",value:`
<div class="reel-demo">
  <div class="`,position:{start:321,end:360}},{type:"output",position:{start:360,end:383},stack:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"],position:{start:360,end:383}},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],position:{start:360,end:383},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:360,end:383}},{type:"Twig.expression.type.string",value:" ",position:{start:360,end:383}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:360,end:383},expression:!1}]}]},{type:"raw",value:'" style="',position:{start:383,end:392}},{type:"output",position:{start:392,end:408},stack:[{type:"Twig.expression.type.variable",value:"styles",match:["styles"],position:{start:392,end:408}},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],position:{start:392,end:408}}]},{type:"raw",value:`">
    `,position:{start:408,end:415}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"i",expression:[{type:"Twig.expression.type._function",fn:"range",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.number",value:1,match:["1",null]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"num_items",match:["num_items"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:415,end:449},output:[{type:"raw",value:'      <div class="box">',position:{start:450,end:473}},{type:"output",position:{start:473,end:480},stack:[{type:"Twig.expression.type.variable",value:"i",match:["i"],position:{start:473,end:480}}]},{type:"raw",value:`</div>
    `,position:{start:480,end:491}}]},position:{open:{start:415,end:449},close:{start:491,end:503}}},{type:"raw",value:`  </div>
  `,position:{start:504,end:515}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"hint",match:["hint"]}],position:{start:515,end:528},output:[{type:"raw",value:`    <div class="reel-hint">
      <div>&rarr;</div>
      <div>&larr;</div>
    </div>
  `,position:{start:529,end:618}}]},position:{open:{start:515,end:528},close:{start:618,end:629}}},{type:"raw",value:`  <div class='caption'>
    <p><em>NOTE: the reel-demo div needs to wrap the whole thing for Storybook, because JSX only allows one top element and the adjacent hint makes two. Do not include a \`.reel-demo\` wrapper when implementing a Reel in components.</em></p>
  </div>
</div>
`,position:{start:630,end:630}}],precompiled:!0});r.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),l(r.render({attributes:new m(t),...e}))}catch(t){return l("An error occurred whilst rendering /home/runner/work/koan/koan/stories/Layout/Reel/Reel.twig: "+t.toString())}},n={default:{num_items:12,scroll:!0,hint:!1},no_scroll:{num_items:12,scroll:!1,hint:!1},hint:{num_items:12,scroll:!1,hint:!0}},h=`# Reel

>***Layouts are NOT components! They are only a demo of the layout primitive for Storybook.  To use layout primitives in your own templates simply use the appropriate CSS Classes.  See documentation and code samples for more details.***

The Reel layout is great for navigating categories of items. Think about the way you scroll through movies or series' on your favorite streaming platform.

It could also be used to replace traditional "carousels" or "sliders" which come with many unique problems. I could be the foundation for a pure CSS carousel.

Some may even be bold enough to use it for navigation menus instead of hamburger menus, under the right circumstances. Though it probably won't be great for dropdown menus or mega-menus.

The Reel layout will provide a horizontal list of items at all times. When the item list gets wider than the available space the \`.reel\` will overflow and scroll horizontally.

There is a built in "affordance" that gives a visual clue that there is content that's outside of the container, but it's subtle.  It might be sufficient in some cases, and you could tweak it in the component CSS to make it move obvious. It's just there as a foundation.

It's harder to miss the scrollbar that will appear, which you can restyle in your component. If that's too much for your context you can add a \`no-bar\` class to your \`.reel\` to suppress it.

One other trick at your disposal is \`.reel-hint\`.  This uses a Javascript ResizeObserver to toggle an \`overflowing\` class on the \`.reel\`. You can use this class for anything you want to do to the reel that's overflowing, but it will also toggle the visibility of an element with the \`reel-hint\` class that's adjacent to the \`.reel\`. Specifically, it must be the next element after the \`.reel\`. When there is no scroll, the hint is hidden.

In the examples we've just used small arrows to indicate that there's more content to scroll to, but a scroll hint could be anything and styled how you like.

<div class="caption">*NOTE: This Javascript doesn't seem to work on the "Docs" page but it should work on the Canvas. This is a Storybook issue, to be investigated. It should work as an exported library in your Drupal theme.*</div>

<details>
  <summary>Inherited CSS Variables:</summary>
  - \`--gap\`: The space between child elements.
</details>
`;function g(e){document.readyState==="complete"||document.readyState==="interactive"?setTimeout(e,1):document.addEventListener("DOMContentLoaded",e)}g(function(){const e=Array.from(document.querySelectorAll(".reel")),r=t=>{t.classList.toggle("overflowing",t.scrollWidth>t.clientWidth)};for(let t of e)"ResizeObserver"in window&&new ResizeObserver(c=>{r(c[0].target)}).observe(t)});const b={title:"Layout Demos/Reel",description:"This is a description of this component.",component:u,parameters:{layout:"padded",docs:{description:{component:h}}},argTypes:{num_items:{description:"Add or remove items for exploring this layout.",table:{defaultValue:{summary:"--s1"}}}}},i=({...e})=>u({...e}),o=i.bind({});o.args=n.default;const s=i.bind({});s.args=n.no_scroll;const a=i.bind({});a.args=n.hint;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Reel({
    ...args
  });
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Reel({
    ...args
  });
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Reel({
    ...args
  });
}`,...a.parameters?.docs?.source}}};const T=["Default","NoScroll","Hint"];export{o as Default,a as Hint,s as NoScroll,T as __namedExportsOrder,b as default};
