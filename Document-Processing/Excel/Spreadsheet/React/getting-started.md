---
layout: post
title: Getting started with React Spreadsheet component | Syncfusion
description:  Checkout and learn about Getting started with React Spreadsheet component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: document-processing
documentation: ug
---

# Getting Started with React Spreadsheet component

This section explains how to create a simple React application and add the [Syncfusion React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) component with the minimum required setup.

To get started quickly with React Spreadsheet, you can check this video:

{% youtube "https://www.youtube.com/watch?v=3Cx9AnKAHdY" %}

## Create a React application

Use `Vite` to create a new React application.

{% tabs %}
{% highlight js tabtitle="JS" %}
{% include code-snippet/spreadsheet/react/getting-started-cs1/app/vite.js %}
{% endhighlight %}
{% highlight ts tabtitle="TS" %}
{% include code-snippet/spreadsheet/react/getting-started-cs1/app/vite.ts %}
{% endhighlight %}
{% endtabs %}

## Install the Syncfusion Spreadsheet package

Install the [React Spreadsheet](https://www.npmjs.com/package/@syncfusion/ej2-react-spreadsheet) package from npm using the following command:

```
npm install @syncfusion/ej2-react-spreadsheet --save
```

## Add the required CSS references

Add the following style references to the `src/App.css` file.

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

## Add the Spreadsheet component

Now, import the `SpreadsheetComponent` into your `src/App.jsx` file and render it.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/getting-started-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/getting-started-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

> **Note:** The [`openUrl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`Web Services`](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/web-services/webservice-overview) section.

## Run the application

Run the following command to start the development server:

```
npm run dev
```

After the application starts, open the local URL shown in the terminal to view the React Spreadsheet Editor in the browser.

The following example shows a basic spreadsheet component.

{% previewsample "/document-processing/code-snippet/spreadsheet/react/getting-started-cs1" %}

> You can refer to our [React Spreadsheet](https://www.syncfusion.com/react-components/react-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/react/#/tailwind3/spreadsheet/default) that shows you how to present and manipulate data.

## See Also

* [Data Binding](./data-binding)
* [Open Excel files](./open-excel-files)
* [Save Excel files](./save-excel-files)
* [Web Services](./web-services/webservice-overview)