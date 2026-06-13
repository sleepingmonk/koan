export default {
  default: {
    section_1: {
      first_component: true,
      scheme: 'dark',
      section_classes: ['hero'],
      align_items: "center",
      background_image_url: `../image.jpg`,
      bg_tint: true,
      heading: "Koan",
      text: `<p>The Zen of UI</p>
      <img height="100" src="logo.svg" alt="Koan Logo" class="logo" />
      `,
      content_data: `
        <div class="center stack" style="text-align: center;">
          <p>An ultra-light design system built on clarity and flow.<br />
          <strong>Algorithmic Layout Primitives, Atomic Design Principles, and a powerful Scheme System</strong>, clear away the noise so you can build effortless interfaces that just work.</p>
          <div class="switcher">
            <a class="button button--small" href="https://www.drupal.org/project/koan" target="_blank" rel="noopener">Get for Drupal</a>
            <a class="button button--small" href="https://www.npmjs.com/package/koan-astro" target="_blank" rel="noopener">Get for Astro</a>
          </div>
        </div>
      `,
      button_data: false,
    },
    section_2: {
      scheme: "base-light-x",
      align_items: "center",
      heading: 'When You Care About Form and Flow',
      content_layout: "center stack",
      content_data: `
        <p>This project was born out of frustration with bloated frameworks and cryptic “class soup” that makes code harder, not easier. Instead of fighting your tools, you should be free to focus on your content, your layouts, and your users.</p>
        <h3>Why It's Different</h3>
        <ul>
          <li><strong>Algorithmic Layout</strong><br />
          At its core is a foundation of layout primitives—an ultra-lightweight CSS layer that makes content king. With only a dozen classes, you can build flexible, fluid layouts that never break, no matter the screen size.</li>
          <li><strong>Atomic Design Principles</strong><br />
          Primitives compose into Atoms, Molecules, and Organisms—the essential building blocks of any page. This structured approach makes it simple to scale from small UI pieces to complex systems without losing consistency.</li>
          <li><strong>Powerful Scheme System</strong><br />
          A small set of CSS custom properties gives you deep control over your project's look and feel. Set a variant at the Organism level, and it cascades seamlessly through Molecules and Atoms. Consistency isn't an afterthought—it's baked into the architecture.</li>
          <li><strong>Light Weight, Heavy Impact</strong><br />
          No massive bundles, no endless JavaScript. Just what you need out of the box to build a solid frontend—plus the flexibility to compose advanced or highly specific components of your own.</li>
          <li><strong>No Class Soup</strong><br />
          Forget cryptic markup that looks like inline styles in disguise. Your code stays readable, logical, and maintainable.</li>
        </ul>
        <h3>The Result</h3>
        <p>A system that respects your creativity, your users, and your time. It gets out of the way, removes friction, and lets you build layouts and components that feel natural, consistent, and fast.</p>
        <h3>Get Started</h3>
        <p>Whether you're building a new project from scratch or looking to streamline an existing one, Koan provides a solid foundation that scales with your needs. Dive into the <a href="/?path=/docs/documentation-intro--docs">documentation</a>, explore the components, and see how Koan can transform your workflow.</p>
        <div class="switcher"><a class="button button--small" href="https://www.drupal.org/project/koan" target="_blank" rel="noopener">Get Koan for Drupal</a> <a class="button button--small" href="https://www.npmjs.com/package/koan-astro" target="_blank" rel="noopener">Get Koan for Astro</a></div>
      `,
    },
    foundations: {
      scheme: "primary-dark-xx",
      align_items: "center",
      heading: 'Foundations',
      text: "<p>For more in-depth study of the principles behind Koan, check out the work of these people.</p>",
      content_layout: "container",
      content_data: {
        // Cards component data.
        variant: "multicolor",
        card_width: "35ch",
        card_variant: "",
        items: [
          {
            variant: "icon",
            media: false,
            icon_data: {
              icon: "flame",
              color: false,

            },
            heading: "Every Layout",
            text: "<p>Haydon Pickering <br />& Andy Bell</p>",
            button_data: {
              label: "Button",
              href: "https://every-layout.dev/rudiments/boxes/",
              external: true,
              variant: "primary",
            },

          },
          {
            variant: "icon",
            media: false,
            icon_data: {
              icon: "flame",
              color: false,

            },
            heading: "Atomic Design",
            text: "<span>Brad Frost</span>",
            button_data: {
              label: "Button",
              href: "https://atomicdesign.bradfrost.com/table-of-contents/",
              external: true,
              variant: "primary",
            },

          },
          {
            variant: "icon",
            media: false,
            icon_data: {
              icon: "flame",
              color: false,

            },
            heading: "Bionic Studio",
            text: "Calvin Tyndall",
            button_data: {
              label: "Button",
              href: "https://bionic.studio",
              external: true,
              variant: "primary",
            },
          },
        ],
      },
    },
    section_3: {
      first_component: false,
      scheme: 'base',
      section_classes: ['footer'],
      align_items: "start",
      text: `
        <div class="branding">
          <svg viewBox="0 0 100 50" class="icon">
            <use xlink:href="icons.svg#BionicStudioLogo-wm"></use>
          </svg>
        </div>`,
      content_data: `
        <div class="center stack">
          <p>Hand crafted and maintained with ♥ by Calvin at <a href="https://bionic.studio" target="_blank">Bionic Studio</a></p>
          <p>Bionic Studio is a full service web consulting, development and marketing agency. We help teams, projects and businesses be successful. <a href="https://bionic.studio" target="_blank">https://bionic.studio</a></p>
        </div>
      `,
      button_data: false,
    },
  }
}
