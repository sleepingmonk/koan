import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    media: '<img src="https://source.unsplash.com/random/1280x720/?zen" />',
    icon_data: {
      icon: "speaker",
      color: false,
      attributes: new drupalAttribute(),  
    },
    heading: "Heading For A Card",
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  bordered_center: {
    variant: "bordered-center",
    media: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y0p663Ot8mo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    heading: "Heading For A  Card",
    text: "<p>He stared at the clinic, Molly took him to the simple Chinese hollow points Shin had sold him. The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case's station. Still it was a square of faint light.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  media_left: {
    variant: "media-left",
    media: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y0p663Ot8mo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    heading: "Heading For A Card",
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  media_right: {
    variant: "media-right",
    media: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y0p663Ot8mo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    heading: "Heading For A Card",
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  overlay: {
    variant: "overlay",
    media: '<img src="https://source.unsplash.com/random/400??400/?zen" />',
    heading: "Heading For A Card",
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  icon: {
    variant: "icon",
    media: false,
    icon_data: {
      icon: "flame",
      color: false,
      attributes: new drupalAttribute(),  
    },
    heading: "Heading For A Card",
    text: false,
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
}
