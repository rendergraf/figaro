# Figaro
## Design System Library

This monorepo contains several packages that allow for the creation and testing of a custom UI component library using a Design System from Figma.

The goal is to create a UI component library that is easily customizable through a Design System in Figma. The idea is that you can:

- Create components in figaro-ui and reuse them in any application.
- Customize the appearance of components by importing design tokens from Figma.
- Maintain synchronization between design and development, ensuring that components reflect changes made in Figma in real time.

## How to Clone This Project

Run the following command:

```sh
git clone https://github.com/rendergraf/figaro.git
cd figaro
pnpm install
```

## What's Inside?

This monorepo contains the following packages/apps. The architecture is organized as follows:

### Apps and Packages

- `docs`: Documentation for Figaro
- `web`: An example app to test the component library
- `@figaro/ui`: A library of reusable React components that allows you to import and apply design tokens from Figma
- `@figaro/eslint-config`: ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@figaro/typescript-config`: `tsconfig.json` used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Workflow

- Design in Figma: You design or update your Design System in Figma.
- Exporting Tokens: You use the figaro-export-tokens plugin to export design tokens (colors, typography, etc.) in JSON format.
- Tokens exported from Figma are integrated into figaro-ui, allowing styles to be used by the components of figaro-ui.
- Testing in web-figaro: You use the web-figaro app to test and verify how the custom UI components look.

### Utilities

This monorepo also has the following tools configured:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
cd figaro
pnpm build
```

### Develop

To test figaro-web with the components of figaro-ui:

```sh
cd figaro
pnpm dev --filter figaro-web
```

### Organizations

Support this project with your organization. Your logo will show up here with a link to your website.
[[Contribute](https://opencollective.com/figaro/contribute)]

### Individuals

By donating \$5 or more, you can support the ongoing development of this project. We'll appreciate any support. Thank you to all our supporters! 🙏
[[Contribute](https://opencollective.com/figaro/contribute)]

## Contributors

- Xavier Araque | xavieraraque@gmail.com
