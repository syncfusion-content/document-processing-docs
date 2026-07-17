---
layout: post
title: React Spreadsheet getting started with Create React App | Syncfusion
description: Check out and learn how to use the React Spreadsheet component of Syncfusion Essential JS 2 in a Create React App project.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Getting Started with the React Spreadsheet Editor in a Create React App Project

This article provides a step-by-step guide for setting up a React application using Create React App and integrating React Spreadsheet Editor.

> **Note:** Create React App (CRA) is no longer actively maintained, and the React team recommends modern build tools such as [Vite](https://vitejs.dev/) or [Next.js](https://nextjs.org/) for new projects. This guide remains available for existing CRA-based projects. To start a new project with Next.js, see [Getting Started with the React Spreadsheet Component in a Next.js Project](./nextjs-getting-started.md).

## Prerequisites

Ensure the following requirements are met before starting:
[System requirements for React Spreadsheet Editor](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Create the React Application

The recommended approach is to use the [`Create React App`](https://github.com/facebook/create-react-app) tool for initializing your project. This tool sets up a development environment and optimizes the build for production.

To create a new application using JavaScript:

```bash
npx create-react-app my-app
cd my-app
```

or

```bash
yarn create react-app my-app
cd my-app
```

To create a React application in `TypeScript` environment, run the following command:

```bash
npx create-react-app my-app --template typescript
cd my-app
```

You can also initialize a project with `npm init react-app` instead of `npx`. This requires `npm 6` or later (npm 10+ is recommended, bundled with current Node.js LTS).

```bash
npm init react-app my-app
cd my-app
```

After running the above commands, the project will be created and all required dependencies will be installed automatically.

## Install Syncfusion React Spreadsheet Packages

To install the React Spreadsheet package, use the following command:

```bash
npm install @syncfusion/ej2-react-spreadsheet --save
```
or

```bash
yarn add @syncfusion/ej2-react-spreadsheet
```

## Add CSS references

Add the following Spreadsheet and dependent component style references to the `src/App.css` file. **Replace the contents of src/App.css** by removing all existing default styles and pasting the following theme import code. The example below demonstrates importing the `Tailwind 3` theme.

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

Syncfusion also ships additional built-in themes. To use a different theme, replace `tailwind3.css` with the theme of your choice (for example, `bootstrap5.css`, `fluent2.css`, etc,.) in all `@import` statements.

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) section.

## Add the Syncfusion® React Spreadsheet Component

Now, you can import the `SpreadsheetComponent` into your `src/App.js` file. **Replace the contents of `src/App.js`** by removing all existing default codes and pasting the following spreadsheet component codes.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import './App.css';
export default function App() {
    return (<SpreadsheetComponent/>);
}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import './App.css';
export default function App() {
    return (<SpreadsheetComponent/>);
}
{% endhighlight %}
{% endtabs %}

## Run the Application
Run the app using the following command:

```bash
npm start
```

or

```bash
yarn start
```

N> Looking for the full React Spreadsheet Editor component overview, features, pricing, and documentation? Visit the [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) page.

## See Also
* [Getting Started with React Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started)
* [Getting Started with the React Spreadsheet Component in a Next.js Project](./nextjs-getting-started)
* [Open Excel files](../open-excel-files)
* [Save Excel files](../save-excel-files)
* [Web Services](../web-services/webservice-overview)
* [Data Binding](../data-binding)