---
layout: post
title: Getting started with React Spreadsheet component | Syncfusion
description:  Checkout and learn about Getting started with React Spreadsheet component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: document-processing
documentation: ug
---

# Getting started with React Spreadsheet component

This section explains the steps to create a simple Spreadsheet component in a React application.

To get start quickly with React Spreadsheet, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=3Cx9AnKAHdY" %}

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

## Setup for Local Development

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```


## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. To install Spreadsheet component use the following command.

```
npm install @syncfusion/ej2-react-spreadsheet --save
```

## Adding CSS reference

 Add components style as given below in `src/App.css`.

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

> To refer `App.css` in the application then import it in the `src/App.tsx` file.

## Adding Spreadsheet component

Now, you can import the spreadsheet component into your `src/App.tsx` file.

```ts
import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import './App.css';
export default function App() {
    return  (<SpreadsheetComponent/>);
}
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows a basic spreadsheet component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/getting-started-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/getting-started-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/getting-started-cs1" %}

> You can refer to our [React Spreadsheet](https://www.syncfusion.com/react-components/react-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/react/#/tailwind3/spreadsheet/default) that shows you how to present and manipulate data.

## See Also

* [Data Binding](./data-binding)
* [Open](./open/open)
* [Save](./save/save)