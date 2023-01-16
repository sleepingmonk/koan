import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    teaser: {
      brow_data: {
        part_one: 'Brow',
        part_two: 'July 12, 2022',
        attributes: new drupalAttribute(),
      },
      heading: "Heading For A Teaser",
      text: "Now this quiet courtyard, Sunday afternoon, this girl with a random collection of European furniture, as though Deane had once intended to use the place as his home."
    },
    list_items: [
      {
        link: {
          label: "Heading Link to Article",
          href: "#"
        },
        footer: "May 25, 2022"
      },
      {
        link: {
          label: "Heading Link to Article",
          href: "#"
        },
        footer: "May 25, 2022"
      }
    ],
    attributes: new drupalAttribute(),
  }
}
  