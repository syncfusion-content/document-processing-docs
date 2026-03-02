---
layout: post
title: React Spreadsheet getting started with Remix | Syncfusion
description: Integrate and use the Syncfusion React Spreadsheet component within a Remix app.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Getting started with Syncfusion React Spreadsheet in Remix

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

The `create-react-router@latest` command create a remix app using the latest package versions.

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

Navigate into the project directory with the below command and install the `react-router` package:

```bash
cd my-react-router-app
```

## Adding Syncfusion Spreadsheet package

To include the React Spreadsheet component in your project, use the following command:

```bash
npm install @syncfusion/ej2-react-spreadsheet --save
```

## Adding CSS reference

Import the Syncfusion® component themes in the `app.css` file as shown below:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-spreadsheet/styles/tailwind3.css';
```

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

This configuration ensures Syncfusion modules are properly transpiled for SSR compatibility.

## Adding Spreadsheet component

Add the React Spreadsheet component in `~/app/routes/_index.tsx` file using the following code:

```js
import type { Route } from "./+types/home";
import  {Spreadsheet}  from '../components/spreadsheet';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Index() {
  return <Spreadsheet />;
}
```

## Run the application

Start your Remix application in development mode:

```bash
npm run dev
```

For deployment, build your app for production,
```bash
npm run build
```

Then run the app in production mode:

```bash
npm run start
```

## See Also

* [Getting Started with Syncfusion React Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started)