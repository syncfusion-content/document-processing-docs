---
layout: post
title: React Spreadsheet getting started with Preact | Syncfusion
description: Provides a short overview for integrating and using the Syncfusion React Spreadsheet within Preact.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Getting started with Syncfusion React Spreadsheet in Preact

This section helps you to quickly integrate the Syncfusion **React Spreadsheet** component into a [Preact](https://preactjs.com) application.  

[Preact](https://preactjs.com) is a lightweight alternative to React that provides a React‑compatible API through `preact/compat`, which enables Syncfusion React components to work seamlessly without additional configuration.

This page focuses on the required setup: installing packages, adding styles, and rendering the Spreadsheet component.

## Dependencies

The following list of dependencies are required to use the Spreadsheet component in your application:

```js
|-- @syncfusion/ej2-react-spreadsheet
      |-- @syncfusion/ej2-react-base
      |-- @syncfusion/ej2-spreadsheet
      |-- @syncfusion/ej2-base
      |-- @syncfusion/ej2-dropdowns
      |-- @syncfusion/ej2-navigations
      |-- @syncfusion/ej2-grids

```

## Setup

Create a new Preact project and install the Syncfusion React Spreadsheet package.

```bash
npm init preact
cd my-project
npm install @syncfusion/ej2-react-spreadsheet --save

# or using yarn:
yarn init preact
yarn add @syncfusion/ej2-react-spreadsheet
```

## Adding CSS reference

Add components style as given below in `src/styles.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-react-spreadsheet/styles/material.css';
```

## Adding Spreadsheet component

Now, you can import the spreadsheet component into your `src/index.jsx` file.

```js
import { render } from 'preact';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import './style.css';

function App() {
  return (
   <SpreadsheetComponent />
  );
}

render(<App />, document.getElementById('app'));
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

## See Also

* [Getting started Syncfusion React Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started)