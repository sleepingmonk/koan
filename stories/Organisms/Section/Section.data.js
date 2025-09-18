import Button from "../../Atoms/Button/Button.twig";

export default {
  default: {
    first_component: true,
    // Base scheme color: light, dark, base, accent, primary.
    scheme: "light",
    // Section alignment: start, center, end.
    align_items: "start",
    background_image_url: "",
    bg_tint: true,
    brow_data: {
      variant: "heading",
      part_one: "Brow Example",
      part_two: "Part Two",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
    button_data: {
      variant: "secondary",
      label: "Button",
      href: "#",
    },
    content_layout: "container",
    content_styles: ['background: transparent; border: 1px dashed var(--color);'],
    content_data: [
      '<div class="box"><p>Additional Content Goes Here</p></div>',
    ],
  },
  dark: {
    first_component: false,
    scheme: "dark",
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "secondary",
    },
    content_layout: "container",
    content_styles: ['background: transparent; border: 1px dashed var(--color);'],
    content_data: [
      '<div class="box"><p>Additional Content Goes Here</p></div>',
    ],
  },
  base: {
    first_component: true,
    // Base scheme color: light, dark, base, accent, primary.
    scheme: "base",
    // Section alignment: start, center, end.
    align_items: "start",
    background_image_url: "",
    bg_tint: true,
    brow_data: {
      variant: "heading",
      part_one: "Brow Example",
      part_two: "Part Two",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
    button_data: {
      variant: "secondary",
      label: "Button",
      href: "#",
    },
    content_layout: "container",
    content_styles: ['background: transparent; border: 1px dashed var(--color);'],
    content_data: [
      '<div class="box"><p>Additional Content Goes Here</p></div>',
    ],
  },
  primary: {
    first_component: true,
    // Base scheme color: light, dark, base, accent, primary.
    scheme: "primary",
    // Section alignment: start, center, end.
    align_items: "start",
    background_image_url: "",
    bg_tint: true,
    brow_data: {
      variant: "heading",
      part_one: "Brow Example",
      part_two: "Part Two",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
    button_data: {
      variant: "secondary",
      label: "Button",
      href: "#",
    },
    content_layout: "container",
    content_styles: ['background: transparent; border: 1px dashed var(--color);'],
    content_data: [
      '<div class="box"><p>Additional Content Goes Here</p></div>',
    ],
  },
  accent: {
    first_component: true,
    // Base scheme color: light, dark, base, accent, primary.
    scheme: "accent",
    // Section alignment: start, center, end.
    align_items: "start",
    background_image_url: "",
    bg_tint: true,
    brow_data: {
      variant: "heading",
      part_one: "Brow Example",
      part_two: "Part Two",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
    button_data: {
      variant: "secondary",
      label: "Button",
      href: "#",
    },
    content_layout: "container",
    content_styles: ['background: transparent; border: 1px dashed var(--color);'],
    content_data: [
      '<div class="box"><p>Additional Content Goes Here</p></div>',
    ],
  },
  bg_image: {
    first_component: false,
    scheme: "dark",
    background_image_url: "/image.jpg",
    bg_tint: "secondary",
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "secondary",
    },
    content_layout: "container",
    content_styles: ['background: transparent; border: 1px dashed var(--color);'],
    content_data: [
      '<div class="box"><p>Additional Content Goes Here</p></div>',
    ],
  }
};
