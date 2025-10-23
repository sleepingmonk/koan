module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Foundation for a storybook component for twig.',
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?"
      },
      {
        type: "list",
        name: "type",
        message: "What kind of component?",
        choices: ["Other", "Atoms", "Molecules", "Organisms"]
      },
      {
        type: "input",
        name: "typeOther",
        message: "Enter the type name for your component:",
        when: (answers) => answers.type === 'Other'
      }
    ],
    actions: [
      {
        type: "add",
        path: "stories/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.twig",
        templateFile: "plop-templates/Component/template.twig"
      },
      {
        type: "add",
        path: "stories/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.stories.js",
        templateFile: "plop-templates/Component/template.stories.js",
        data: { folder: "stories" }
      },
      {
        type: "add",
        path: "stories/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.data.js",
        templateFile: "plop-templates/Component/template.data.js",
        data: { folder: "stories" }
      },
      {
        type: "modify",
        path: "stories/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.stories.js",
        pattern: "Other",
        template: "{{pascalCase typeOther}}",
        abortOnFail: false
      },
      {
        type: "add",
        path: "stories/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.css",
        templateFile: "plop-templates/Component/template.css"
      },
      {
        type: "add",
        path: "stories/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/Component/template.js"
      },
      {
        type: "add",
        path: "stories/{{pascalCase type}}/{{pascalCase name}}/readme.md",
        templateFile: "plop-templates/Component/template.md"
      }
    ]
  }),
  plop.setGenerator('subtheme', {
    description: 'Drupal Subtheme for the Koan basetheme.',
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your subtheme name?"
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../custom/{{snakeCase name}}/css/scheme-default.css",
        templateFile: "plop-templates/subtheme/css/scheme-default.css"
      },
      {
        type: "add",
        path: "../../custom/{{snakeCase name}}/{{snakeCase name}}.theme",
        templateFile: "plop-templates/subtheme/kabuki.theme"
      },
      {
        type: "add",
        path: "../../custom/{{snakeCase name}}/README.md",
        templateFile: "plop-templates/subtheme/README.md"
      },
      {
        type: "add",
        path: "../../custom/{{snakeCase name}}/theme-settings.php",
        templateFile: "plop-templates/subtheme/theme-settings.php"
      },
      {
        type: "add",
        path: "../../custom/{{snakeCase name}}/screenshot.png",
        templateFile: "plop-templates/subtheme/screenshot.png"
      },
      {
        type: "add",
        path: "../../custom/{{snakeCase name}}/logo.svg",
        templateFile: "plop-templates/subtheme/logo.svg"
      },
      {
        type: "add",
        path: "../../custom/{{snakeCase name}}/{{snakeCase name}}.info.yml",
        templateFile: "plop-templates/subtheme/kabuki.info.yml"
      },
      {
        type: "add",
        path: "../../custom/{{snakeCase name}}/{{snakeCase name}}.libraries.yml",
        templateFile: "plop-templates/subtheme/kabuki.libraries.yml"
      },
      {
        type: "add",
        path: "../../custom/{{snakeCase name}}/Components/Atoms/README.md",
      },
      {
        type: "add",
        path: "../../custom/{{snakeCase name}}/Components/Molecules/README.md",
      },
      {
        type: "add",
        path: "../../custom/{{snakeCase name}}/Components/Organisms/README.md",
      },
    ]
  })
}
