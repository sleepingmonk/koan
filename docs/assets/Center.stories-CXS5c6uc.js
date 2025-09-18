import{t as o,D as u,a as c,T as i}from"./twig-CReQIq0G.js";import"./iframe-BWpVt3rS.js";import"./preload-helper-D9Z9MdNV.js";const l=`# Center

>***Layouts are NOT components! They are only a demo of the layout primitive for Storybook.  To use layout primitives in your own templates simply use the appropriate CSS Classes.  See documentation and code samples for more details.***

The Center provides a centered column with a max width to maintain a good "measure" (characters per line).

The Center will expand to fit content to the max width of it's "measure". Any sub elements that have less width than the Center element CAN be centered, relative to the width of this component. See the heading and the button in the second example on the **Canvas**.

You may want to combine \`.center\` with \`.stack\` in some cases.
  - \`class="center stack"\`

In the Center example, \`.stack\` is responsible for the margins between the sub elements, \`<h1>, <p>, <a>\`.

<details>
  <summary>Inherited CSS Variables:</summary>
  - \`--measure\`: characters per line. Set at the root, and although it could be overridden, it should be avoided to maintain consistency and readability.
  - \`--align-items\`: for "intrinsic" centering of sub elements inside the "Center" element. It's best to set this in the CSS for the element that requires it.
  \`\`\`
  .section > * > .center {
      --align-items: center;
  }
  \`\`\`
</details>
`;c(i);i.cache(!1);const s=e=>e,a=(e={})=>{const r=o.twig({id:"/home/runner/work/koan/koan/stories/Layout/Center/Center.twig",data:[{type:"raw",value:`

<div class='stack'>
  <div class="center stack">
    <h1>Center</h1>
    <code>class=".center"</code>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, architecto neque. Quos explicabo nobis iste excepturi, earum repellat deserunt sit quae fugit quia perferendis iure modi exercitationem totam asperiores itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum repellendus esse sit perferendis mollitia et, dolorum fugiat doloribus tempora? Quos natus necessitatibus debitis ea laboriosam rem iure assumenda voluptatum!</p>
    <a class="button">Button</a>
  </div>

  <div class="center stack" style="--align-items: center;">
    <h1>Center</h1>
    <code>class=".center" style="--align-items: center"</code>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, architecto neque. Quos explicabo nobis iste excepturi, earum repellat deserunt sit quae fugit quia perferendis iure modi exercitationem totam asperiores itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum repellendus esse sit perferendis mollitia et, dolorum fugiat doloribus tempora? Quos natus necessitatibus debitis ea laboriosam rem iure assumenda voluptatum!</p>
    <a class="button">Button</a>
  </div>
</div>
`,position:{start:92,end:92}}],precompiled:!0});r.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),s(r.render({attributes:new u(t),...e}))}catch(t){return s("An error occurred whilst rendering /home/runner/work/koan/koan/stories/Layout/Center/Center.twig: "+t.toString())}},b={title:"Layout Demos/Center",component:a,parameters:{layout:"centered",docs:{description:{component:l}}}},m=({...e})=>a({...e}),n=m.bind({});n.args={};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return Center({
    ...args
  });
}`,...n.parameters?.docs?.source}}};const f=["Default"];export{n as Default,f as __namedExportsOrder,b as default};
