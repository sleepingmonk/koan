import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    hero: {
      variant: 'content-bg',
      content_justify: 'left',
      bg_tint: false,
      background_image_url: 'https://source.unsplash.com/random/900×500/?zen',
      card_data: {
        variant: "default",
        first_component: true,
        media: false,
        heading: "Card Within Hero",
        subheading: false,
        text: "<p>They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the previous century. None of that prepared him for the arena, the crowd, the tense hush, the towering puppets of light from a service hatch framed a heap of discarded fiber optics and the chassis of a skyscraper canyon. No light but the muted purring of the car’s floor.</p>",
        button_data: false,
        attributes: new drupalAttribute(),
      },
      attributes: new drupalAttribute()
    },
    section_1: {
      variant: 'primary-dark-xx',
      brow_data: {
        part_one: "Section With Card",
        part_two: false,
        variant: 'default',
        attributes: new drupalAttribute(),
      },
      heading: false,
      text: false,
      first_component: false,
      button_data: false,
      sub_component_template: "Card",
      sub_component_data: {
        variant: "media-right",
        media: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y0p663Ot8mo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        media_caption: '<p>Case felt the edge of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses.</p>',
        heading: "Card:media-right Within Section",
        text: "<p>He stared at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor. Now this quiet courtyard, Sunday afternoon, this girl with a luminous digital display wired to a kind of central stage, a raised circle ringed with a random collection of European furniture, as though Deane had once intended to use the place as his home.</p>",
        button: false,
        attributes: new drupalAttribute(),
      },
      attributes: new drupalAttribute(),
    },
    section_2: {
      variant: "default",
      heading: 'Section With Cards',
      sub_component_template: "Cards",
      sub_component_data: {
        attributes: new drupalAttribute(),
        variant: "",
        cardWidth: "45ch",
        items: [
          {
            variant: "icon",
            icon_data: {
              icon: "flame",
              color: false,
              attributes: new drupalAttribute(),
            },
            heading: "Card:icon",
            text: false,
            button_data: {
              label: "Button",
              href: "#",
              variant: "primary",
            },
            attributes: new drupalAttribute(),
          },
          {
            icon_data: {
              icon: "flame",
              color: false,
              attributes: new drupalAttribute(),
            },
            heading: "Card:icon",
            text: false,
            button_data: {
              label: "Button",
              href: "#",
              variant: "primary",
            },
            variant: "icon",
            attributes: new drupalAttribute(),
          },
          {
            icon_data: {
              icon: "flame",
              color: false,
              attributes: new drupalAttribute(),
            },
            heading: "Card:icon",
            text: false,
            button_data: {
              label: "Button",
              href: "#",
              variant: "primary",
            },
            variant: "icon",
            attributes: new drupalAttribute(),
          },
          {
            icon_data: {
              icon: "flame",
              color: false,
              attributes: new drupalAttribute(),
            },
            heading: "Card:icon",
            text: false,
            button_data: {
              label: "Button",
              href: "#",
              variant: "primary",
            },
            variant: "icon",
            attributes: new drupalAttribute(),
          },
        ],
      },
      attributes: new drupalAttribute(),
    },
    section_4: {
      brow_data: false,
      heading: false,
      text: false,
      sub_component_template: "Cards",
      sub_component_data: {
        variant: "",
        cardWidth: "30ch",
        attributes: new drupalAttribute(),
        items: [
          {
            media: '<img src="https://source.unsplash.com/random/900×700/?zen" />',
            heading: "Card:bordered-center",
            text: "<p>The girls looked like tall, exotic grazing animals, swaying gracefully and unconsciously with the movement of the train, their high heels like polished hooves against the gray metal of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a painted jungle of rainbow foliage.</p>",
            button_data: {
              label: "Button Primary Small",
              href: "#",
              variant: "primary",
              size: "small",
            },
            // A variant type that contols the layout and style of the component.
            variant: "bordered-center",
            // drupalAttribute allows us to mock drupal attributes in storybook.
            attributes: new drupalAttribute(),
          },
          {
            media: '<div class="frame"><img src="https://source.unsplash.com/random/900×700/?zen,monk" /></div>',
            heading: "Card:bordered-center",
            text: "<p>Now this quiet courtyard, Sunday afternoon, this girl with a random collection of European furniture, as though Deane had once intended to use the place as his home. He woke and found her stretched beside him in the tunnel’s ceiling.</p>",
            button_data: {
              label: "Button Primary Small",
              href: "#",
              variant: "primary",
              size: "small",
            },
            // A variant type that contols the layout and style of the component.
            variant: "bordered-center",
            // drupalAttribute allows us to mock drupal attributes in storybook.
            attributes: new drupalAttribute(),
          },
        ],
      },
      button_data: false,
      variant: 'white',
      first_component: false,
      attributes: new drupalAttribute(),
    },
    attributes: new drupalAttribute(),
  }
}
