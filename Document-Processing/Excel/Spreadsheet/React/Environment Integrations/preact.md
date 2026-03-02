---
layout: post
title: React Spreadsheet getting started with Preact | Syncfusion
description: Integrate and use the Syncfusion React Spreadsheet component within a Preact app.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Getting started with Syncfusion React Spreadsheet in Preact

This article outlines the steps required to set up a [`Preact`](https://preactjs.com) project and integrate Syncfusion React Spreadsheet.

`Preact` is a fast, lightweight JavaScript library that provides a modern API similar to React. It is optimized for minimal file size and fast performance, making it well-suited for projects where load time and bundle size are important.

## Prerequisites

Ensure the following requirements are met before starting:
[System requirements for Syncfusion React Spreadsheet](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Set up the Preact project

To create a new Preact project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm init preact@latest
```
or

```bash
yarn create preact
```

Using one of the above commands will lead you to set up additional configurations for the project, as below:

**Step 1: Define the project name** - You can specify the name of the project directly. Let’s specify the name of the project as `my-project` for this article.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Project directory:
|  my-project
—
```

**Step 2: Choose the project language** - Select JavaScript as the framework variant to build this Preact project using JavaScript.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Project language:
|  > JavaScript
|    TypeScript
—
```

**Step 3: Configure project options** - Configure the project as shown below for this article.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Use router?
|    Yes / > No
—
|
*  Prerender app (SSG)?
|    Yes / > No
—
|
*  Use ESLint?
|    Yes / > No
—
```

**Step 4: Navigate to the project directory** - After completing the above steps to create `my-project`, navigate to the project directory using the following command:

```bash
cd my-project
```

Ensure your HTML has a mount point for the app. For example, in `index.html` add:


```html
<div id="app"></div>
```

Now that `my-project` is ready to run with default settings, let’s add Syncfusion components to the project.

## Install Syncfusion React packages.

To install the React Spreadsheet component package, use the following command:

```bash
npm install @syncfusion/ej2-react-spreadsheet --save
```
or

```bash
yarn add @syncfusion/ej2-react-spreadsheet
```

## Adding CSS reference

Import the Syncfusion® component themes in the `src/style.css` file as shown below:

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

## Adding Spreadsheet component

Add the React Spreadsheet component in `src/index.jsx` file using the following code:

```js
import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import './App.css';
export default function App() {
    return  (<SpreadsheetComponent/>);
}
```


## Run the project
To run the project, use the following command:

```bash
npm run dev
```
or

```bash
yarn run dev
```

## See also

[Getting Started with Syncfusion React Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started)