---
layout: post
title: Getting Started with React Spreadsheet component | Syncfusion
description:  Check out and learn about getting started with the React Spreadsheet component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: document-processing
documentation: ug
---

# Getting Started with React Spreadsheet component

This section explains how to create a simple React application and add the [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) component with the minimum required setup.

## Prerequisites

[System requirements for React components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Create a React application

Use [`Vite`](https://vite.dev/guide/) to create a new React application, as it provides a faster development environment, smaller bundle sizes, and optimized builds.

To create a new React application, run one of the following commands based on your preferred environment.

{% tabs %}
{% highlight js tabtitle="JavaScript" %}

npm create vite@latest spreadsheet-app -- --template react
cd spreadsheet-app

{% endhighlight %}
{% highlight ts tabtitle="TypeScript" %}

npm create vite@latest spreadsheet-app -- --template react-ts
cd spreadsheet-app

{% endhighlight %}
{% endtabs %}

## Install the Syncfusion® React Spreadsheet package

Install the [Syncfusion® React Spreadsheet](https://www.npmjs.com/package/@syncfusion/ej2-react-spreadsheet) package from npm using the following command:

```
npm install @syncfusion/ej2-react-spreadsheet --save
```

## Add CSS references

Add the following Spreadsheet and dependent component style references to the `src/index.css` file. **Replace the contents of src/index.css** by removing all existing default styles and pasting the following theme import code. The example below demonstrates importing the `Tailwind 3` theme.

```css
@import '@syncfusion/ej2-base/styles/tailwind3.css';
@import '@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '@syncfusion/ej2-lists/styles/tailwind3.css';
@import '@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '@syncfusion/ej2-popups/styles/tailwind3.css';
@import '@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '@syncfusion/ej2-grids/styles/tailwind3.css';
@import '@syncfusion/ej2-react-spreadsheet/styles/tailwind3.css';
```

Syncfusion also ships additional built-in themes. To use a different theme, replace `tailwind3.css` with the theme of your choice (for example, `bootstrap5.css`, `fluent2.css`, etc.) in all `@import` statements.

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) section.

## Add the Syncfusion® React Spreadsheet component

Now, import the `SpreadsheetComponent` into your `src/App.jsx` or `src/App.tsx` file and render it. **Replace the contents of `src/App.jsx` or `src/App.tsx`** by removing all existing default codes and pasting the following spreadsheet component codes.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}

import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export default function App() {
    return (<SpreadsheetComponent openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' 
                saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' />);
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% raw %}

import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export default function App() {
  return (<SpreadsheetComponent openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' 
            saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' />);
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

> **Note:** The [`openUrl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`Web Services`](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/web-services/webservice-overview) section.

## Run the application

Run the following command to start the development server:

```
npm run dev
```

After the application starts, open the localhost URL shown in the terminal to view the React Spreadsheet Editor in the browser. The output will appear as follows:

![React Spreadsheet Editor](images/spreadsheet.png)

You can also explore the Spreadsheet interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/spreadsheet/react/getting-started-cs1" %}

> [View Sample in GitHub](https://github.com/SyncfusionExamples/getting-started-with-the-react-spreadsheet-component) to explore the complete source code. You can also explore our [React Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/react/#/tailwind3/spreadsheet/default) that shows you how to present and manipulate data.

## Video tutorial

To get started quickly with React Spreadsheet, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=3Cx9AnKAHdY" %}

N> Looking for the full React Spreadsheet Editor component overview, features, pricing, and documentation? Visit the [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) page.

## See also

* [Open Excel files](./open-excel-files)
* [Save Excel files](./save-excel-files)
* [Web Services](./web-services/webservice-overview)
* [Data Binding](./data-binding)