---
layout: post
title: Getting Started with React Spreadsheet in Remix | Syncfusion
description: Learn how to get started with the Syncfusion React Spreadsheet component in a Remix project. Explore setup and configuration options.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Getting Started with React Spreadsheet in Remix

This guide provides a step-by-step workflow for integrating Syncfusion React Spreadsheet into a new Remix application.

## Prerequisites
Ensure the following requirements are met before starting:
[System requirements for Syncfusion React Spreadsheet](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Benefits of using Remix

### Nested pages

Pages within the `./routes` directory are structured as nested routes, allowing components to be embedded hierarchically in parent pages. This organization helps reduce page loading times.

### Error boundaries

Errors within nested routes or individual Remix components are isolated. If a failure occurs, only the affected route/component fails to render, preserving the rest of the page.

### Transition

Remix automatically manages loading states during navigation or data fetching. Developers can configure what displays while the application loads, improving user experience.

## Create Remix application

To set up a basic Remix sample, run the following command:

```bash
npx create-react-router@latest
```

The `create-react-router@latest` command creates a remix app using the latest package versions.

When you run this command, you will be asked the following questions.

```bash
   dir   Where should we create your new project?
         ./my-react-router-app

      ◼  Using default template See https://github.com/remix-run/react-router-templates for more
      ✔  Template copied

   git   Initialize a new git repository?
         No

  deps   Install dependencies with npm?
         Yes
```

Navigate into the project directory using the following command.

```bash
cd my-react-router-app
```

## Adding Syncfusion® Spreadsheet package

To include the React Spreadsheet component in your project, use the following command:

```bash
npm install @syncfusion/ej2-react-spreadsheet
```

## Adding CSS reference

To apply the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme, install the corresponding theme package by using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

The installed theme package includes an `index.css` file that automatically imports all the required dependency styles. Import the following stylesheet into `app.css` file as shown below:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
```

> **Note:** This example uses the `Tailwind3` theme. To use a different built-in theme, replace the `ej2-tailwind3-theme` references with the corresponding theme stylesheets. Refer to the [Themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages) for information about the available themes and the different ways to include theme styles in a React application.

## Configure Server-Side Rendering (SSR)

For Syncfusion React Spreadsheet to function with Remix server-side rendering (via Vite), update your `vite.config.ts` file as shown:

```js
import { defineConfig } from "vite";

export default defineConfig({
  ...
  ssr: {
    noExternal: [/@syncfusion/]
  },
  ...
});
```

This configuration ensures Syncfusion modules are properly compiled for SSR compatibility.

## Adding Spreadsheet component

Add the React Spreadsheet component in `~/app/routes/_index.ts` file using the following code:

```js
import type { Route } from "./+types/home";
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Index() {
  return <SpreadsheetComponent />;
}
```

## Run the application

Start your Remix application in development mode:

```bash
npm run dev
```

For deployment, build your app for production.
```bash
npm run build
```

Then run the app in production mode:

```bash
npm run start
```

## See Also

* [Getting Started with React Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started)