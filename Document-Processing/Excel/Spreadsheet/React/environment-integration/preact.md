---
layout: post
title: Getting Started with React Spreadsheet in Preact | Syncfusion
description: Learn how to get started with the Syncfusion React Spreadsheet component in a Preact project. Explore setup and configuration steps
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Getting Started with React Spreadsheet in Preact

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

**Step 2: Choose the project language** - Select **JavaScript** as the project language to build this Preact project.

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

## Install the Syncfusion® React Spreadsheet package

To install the React Spreadsheet component package, use the following command:

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

Add the required Spreadsheet theme style reference to `src/style.css` file:

```css
@import '@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
```

N> The `index.css` file automatically includes all required dependent component styles for the Spreadsheet. You do not need to import individual dependency styles such as Base, Inputs, Buttons, SplitButtons, Lists, Navigations, Popups, Dropdowns, Grids separately.

N> Refer to the [Themes topic](https://ej2.syncfusion.com/react/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a Preact project.

## Adding Spreadsheet component

Add the React Spreadsheet component in `src/index.js` file using the following code:

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

[Getting Started with React Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started)