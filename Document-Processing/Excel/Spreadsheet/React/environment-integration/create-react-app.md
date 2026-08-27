---
layout: post
title: React Spreadsheet getting started with Create React App | Syncfusion
description: Learn how to get started with the Syncfusion React Spreadsheet component in a Create React App project. Explore setup and examples.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Getting Started with React Spreadsheet in Create React App

This article provides a step-by-step guide for setting up a React application using Create React App(CRA) and integrating React Spreadsheet Editor.

> **Note:** Create React App (CRA) is no longer actively maintained, and the React team recommends modern build tools such as [Vite](https://vitejs.dev/) or [Next.js](https://nextjs.org/) for new projects. This guide remains available for existing CRA-based projects. To start a new project with Next.js, see [Getting Started with the React Spreadsheet Component in a Next.js Project](./nextjs-getting-started).

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

## Import the required CSS styles

Themes for Spreadsheet can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

Add the required Spreadsheet theme style reference to `src/App.css` file:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
```

N> The `index.css` file automatically includes all required dependent component styles for the Spreadsheet. You do not need to import individual dependency styles such as Base, Inputs, Buttons, SplitButtons, Lists, Navigations, Popups, Dropdowns, Grids separately.

N> Refer to the [Themes topic](https://ej2.syncfusion.com/react/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a React project.

## Add the Syncfusion® React Spreadsheet Component

Now, import the `SpreadsheetComponent` into `src/App.js` file and replace the existing code with the following:

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

## See Also
* [Getting Started with React Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started)
* [Getting Started with the React Spreadsheet Component in a Next.js Project](./nextjs-getting-started)
* [Open Excel files](../open-excel-files)
* [Save Excel files](../save-excel-files)
* [Data Binding](../data-binding)