---
layout: post
title: React Spreadsheet getting started with Create React App | Syncfusion
description: Integrate and use the Syncfusion React Spreadsheet component using create react app.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Getting Started with Syncfusion Spreadsheet using Create React App

This article provides a step-by-step guide for setting up a React application using Create React App and integrating Syncfusion Spreadsheet.

## Prerequisites

Ensure the following requirements are met before starting:
[System requirements for Syncfusion React Spreadsheet](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Create the React application

The recommended approach is to use the [`Create React App`](https://github.com/facebook/create-react-app) tool for initializing your project. This tool sets up a development environment and optimizes the build for production.

To create a new application using JavaScript:

```
npx create-react-app my-app
cd my-app
```

or

```
yarn create react-app my-app
cd my-app
```

To create a React application in `TypeScript` environment, run the following command:

```
npx create-react-app my-app --template typescript
cd my-app
```

Besides using the [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) package runner tool, also create an application from the `npm init`. To begin with the `npm init`, upgrade the `npm` version to `npm 6`+.

```
npm init react-app my-app
cd my-app
```

After running the above commands, the project will be created and all required dependencies will be installed automatically.

## Install Syncfusion React Spreadsheet Packages

To install the React Spreadsheet package, use the following command:

```
npm install @syncfusion/ej2-react-spreadsheet --save
```
or

```
yarn add @syncfusion/ej2-react-grids
```

## Import CSS

Syncfusion React Spreadshet come with built-in [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme). Import the CSS styles for the Srpeadsheet component and its dependent components in the `src/App.css` file. The example below demonstrates importing the `Tailwind 3` theme.

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

For more details on built-in themes and usage, refer to the [Themes topic](https://ej2.syncfusion.com/react/documentation/appearance/theme).

## Adding Spreadsheet component

Now, you can import the spreadsheet component into your `src/App.jsx` file.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import './App.css';
export default function App() {
    return  (<SpreadsheetComponent/>);
}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import './App.css';
export default function App() {
    return  (<SpreadsheetComponent/>);
}
{% endhighlight %}
{% endtabs %}

## Run the application
Run the app using the following commands:

```
npm start
```

or

```
yarn start
```

## See Also
* [Getting Started with Syncfusion React Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started)