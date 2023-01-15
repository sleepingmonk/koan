import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    section_1: {
      brow_data: false,
      heading: 'Section Padding Demo',
      text: false,
      sub_component_template: "Card",
      sub_component_data: {
        media: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y0p663Ot8mo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        media_caption: '<p>Media caption.</p>',
        heading: "The Problem",
        text: "<p>When stacking Sections on a page we need to manage the spacing between content within adjacent Sections.</p><p>When Section backrounds are <b><i>different</i></b>, the spacing of the content needs to be relative to the border between the sections.</p><p>When Section backgrounds are the <b><i>same</i></b>, the spacing of the content needs to be relative to the content within each Section, otherwise there's too much negative space between content.</p><p>You can use the Measure and Outline tools in the toolbar to verify.</p>",
        button_data: false,
        variant: "media-right",
        attributes: new drupalAttribute(),
      },
      button_data: false,
      variant: 'primary-dark-xx-stripe',
      first_component: false,
      attributes: new drupalAttribute(),
    },
    section_2: {
      heading: 'Different Background Than Above',
      text: '<p>Because this section has a different background, there is padding above to separate content from the border of the two Sections.</p>',
      sub_component_template: "TeaserPlusList",
      sub_component_data: {
        teaser: {
          brow_data: {
            part_one: 'Brow',
            part_two: 'July 12, 2022',
            attributes: new drupalAttribute(),
          },
          heading: "Teaser Plus List",
          text: "<p>Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the puppet place had been a subunit of Freeside’s security system.</p>"
        },
        list_items: [
          {
            link: {
              label: "The last Case saw of Chiba were the dark angles of the Flatline as a construct...",
              href: "#"
            },
            footer: "May 25, 2022"
          },
          {
            link: {
              label: "His offices were located in a warehouse behind Ninsei, part of which seemed to move of their own accord...",
              href: "#"
            },
            footer: "May 25, 2022"
          }
        ],
        attributes: new drupalAttribute(),
      },
      attributes: new drupalAttribute(),
    },
    section_3: {
      heading: 'Same Background As Above',
      text: '<p>Because this Section has the same background as above, the padding is removed so the spacing is correct, relative to the content in the section above. This happens automatically.</p>',
      sub_component_template: "TeaserPlusList",
      sub_component_data: {
        teaser: {
          brow_data: {
            part_one: 'Brow',
            part_two: 'July 12, 2022',
            attributes: new drupalAttribute(),
          },
          heading: "Teaser Plus List",
          text: "<p>Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the puppet place had been a subunit of Freeside’s security system.</p>"
        },
        list_items: [
          {
            link: {
              label: "The last Case saw of Chiba were the dark angles of the Flatline as a construct...",
              href: "#"
            },
            footer: "May 25, 2022"
          },
          {
            link: {
              label: "His offices were located in a warehouse behind Ninsei, part of which seemed to move of their own accord...",
              href: "#"
            },
            footer: "May 25, 2022"
          }
        ],
        attributes: new drupalAttribute(),
      },
      attributes: new drupalAttribute(),
    }
  }    
}
