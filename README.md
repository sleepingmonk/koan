# Koan!

Koan is a component library and a base theme for Drupal built by sleepingmonk.

This library uses algorithmic/intrinsic layout techniques and 13 "[Layout Primitives](https://every-layout.dev/rudiments/)", instead of media queries and breakpoints, to compose complex layouts. It allows content to expand or contract according to its needs, and still adapts to infinite screen sizes.

Layout Primitives are composed into Atomic Components, that are used to build templates and pages.

For more details about the methodologies used in this component library see: https://sleepingmonk.github.io/koan


External References:

  - https://every-layout.dev/rudiments/
  - https://aneventapart.com/news/post/designing-intrinsic-layouts-aea-video
  - https://atomicdesign.bradfrost.com/table-of-contents/
  - https://calvint.com creator of Koan.
  - https://bionic.studio development and maintenance.

## Installation

### Requirements

  1. [Components module](https://drupal.org/project/components)

### Use
  - Install with composer to your drupal project.
    - `composer install drupal/koan`
  - Enable the base theme in drupal via the UI or with drush:
    - `drush theme:install koan`
  - Create a new theme with the following line in your `info.yml` file:  `base theme: koan` **OR** use plop to generate a new subtheme in your `themes/custom` directory:
    - cd to `themes/contrib/koan`
    - `nvm use` (or some other method) to set the appropriate node version. (see `.nvmrc`)
    - `npm install`
    - `npm run plop`
    - Follow the prompts to select `subtheme` and enter a name for your theme.
    - Theme will be generated in your `themes/custom` dir ready for development.
    - `drush theme:install [your_theme_name]`
  - Include Koan templates into your custom theme via `@atoms/button.twig`, etc.
  - Include custom components from your subtheme via `[yourThemeNameAtoms]/[myAtom].twig`, etc.
  - Be sure to attach the proper libraries. See [Docs](https://sleepingmonk.github.io/koan/?path=/docs/documentation-drupalintegration--docs#drupal-libraries) for more info.

## Pattern Library Development
  **For development of the pattern library only. Not required to use this as a base theme.**

### Requirements

  - See `.nvmrc` for required node version.

### Installation

  - Clone this repo and cd to the directory
  - `nvm use`: to use the specified version of Node. (If using nvm to manage node. You may need to install the appropriate version.)
  - `npm install`: to install the required development packages.
  - `npm run storybook`: to start storybook. It will open a new browser window.

### Creating Components

There is a package installed to help make development easier, by generating component scaffolds for you. The package is called [Plop JS](https://plopjs.com). You don't need to learn or configure it.  Just create new components by running it and following the prompts.

  - `npm run plop`
  - Enter a component name. i.e. `Card`
  - Select a component type. i.e. `Molecules`

The new component will appear at `src/stories/Molecules/Card`

For more information about how to develop components for this library, see the "Documentation" section on the sidebar of Storybook.


## Links
* Project Page:   https://drupal.org/project/koan
* Documentation:  https://sleepingmonk.github.io/koan
* Support:        https://drupal.org/project/koan

## License
http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
