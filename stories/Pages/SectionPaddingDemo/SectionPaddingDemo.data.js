
export default {
  default: {
    section_1: {
      first_component: true,
      // Base scheme color: light, dark, base, accent, primary.
      scheme: "dark",
      // Section alignment: start, center, end.
      align_items: "start",
      background_image_url: "/image.jpg",
      bg_tint: true,
      brow_data: false,
      heading: 'Section Padding Demo',
      text: false,
      button_data: false,
      content_layout: "",
      content_styles: [],
      content_data: false,
    },
    section_2: {
      scheme: "light",
      heading: 'Different Background Than Above',
      align_items: "center",
      content_layout: "center",
      content_data: '<p>Because this section has a different background, there is padding above to separate content from the border of the two Sections.</p>',
    },
    section_3: {
      scheme: "light",
      heading: 'Same Background As Above',
      align_items: "center",
      content_layout: "center",
      content_data: '<p>Because this Section has the same background as above, the padding is removed so the spacing is correct, relative to the content in the section above. This happens automatically.</p>',
    }
  }
}
