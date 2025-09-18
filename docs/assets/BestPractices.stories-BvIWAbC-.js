import{t as i,D as c,a as l,T as s}from"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";const d=`# Best Practices

As a general approach to building components for this library.

  - Read all the docs, and the external sources they reference.
  - Always be brutally minimalist with the amount of code you use to achieve something.
  - Always build off of existing foundations before creating new things. This means, know the systems and components in this library.
  - Start with all your necessary elements in the order they should appear. i.e. heading, text, image, etc.
  - Wrap your elements in layout (primitive) elements in order to get as close to the layout as possible with no other styles.
  - Add minor and natural layout adjustments for flex elements, i.e. justify-content, align-items, etc.
  - This should get you 100% of the way for layout, 98% of the time. [1]
  - Add aesthetic styling for variants. Use BEM style class names as needed for clarity in selectors.
  - Always use our Scheme values for Colors, sizes, fonts, etc.  If new values are required, add them to the Scheme first. Never hard code colors, sizes, etc into a component.
  - Avoid adding margin and padding to elements directly. It's better for their containing element to determine their spacing and relationship to other elements.

*[1] For the 2% of the time that you don't quite get there out of the box, understand intrinsic layout, or ask for guidance. *

*Remember that Web UI development is a collaboration between developer and designer. Ask for feedback, clarification, justification, or alternatives when something in the design does not integrate well with the system we're building or the browsers that render them.*



`;l(s);s.cache(!1);const o=e=>e,a=(e={})=>{const r=i.twig({id:"/home/runner/work/koan/koan/stories/Documentation/BestPractices/BestPractices.twig",data:[{type:"raw",value:`<div class="principal center">
  See Docs.
</div>
`,position:{start:0,end:0}}],precompiled:!0});r.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),o(r.render({attributes:new c(t),...e}))}catch(t){return o("An error occurred whilst rendering /home/runner/work/koan/koan/stories/Documentation/BestPractices/BestPractices.twig: "+t.toString())}},f={title:"Documentation/Best Practices",component:a,parameters:{layout:"centered",docs:{description:{component:d}}}},u=({...e})=>a({...e}),n=u.bind({});n.args={};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Component({
    ...args
  });
}`,...n.parameters?.docs?.source}}};const g=["Default"];export{n as Default,g as __namedExportsOrder,f as default};
