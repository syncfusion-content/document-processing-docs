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

## Video tutorial

To get started quickly with React Spreadsheet, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=3Cx9AnKAHdY" %}

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

## Verify the package installation

After installing the Syncfusion® React Spreadsheet package, verify that it has been added successfully to your project.

Run the following command:

```
npm list @syncfusion/ej2-react-spreadsheet
```

If the package is installed correctly, you will see output similar to the following:

```
spreadsheet-app
└── @syncfusion/ej2-react-spreadsheet@x.x.x
```

You can also verify the installation by checking the `dependencies` section in your `package.json` file:

```json
{
  "dependencies": {
    "@syncfusion/ej2-react-spreadsheet": "^x.x.x"
  }
}
```

If the package is not listed, run the installation command again:

```
npm install @syncfusion/ej2-react-spreadsheet --save
```

> **Note:** The version number may vary depending on the latest package available on npm. Ensure that the package appears in both the `package.json` file and the `node_modules` folder before proceeding to the next steps.

## Add CSS references

Add the following Spreadsheet and dependent component style references to the `src/index.css` file. **Replace the entire default contents of that file** - Vite's starter `App` component ships with demo styles that is not needed here. Open the file, delete everything in it, and paste the code below. The example below demonstrates importing the `Tailwind 3` theme.

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

Syncfusion also ships additional built-in themes - Material, Bootstrap, Fabric, Fluent, Bootstrap 5, and Bootstrap 4. To use a different theme, replace `tailwind3.css` with the theme of your choice (for example, `material.css` or `bootstrap.css`) in all `@import` statements.

## Register the Syncfusion License Key

Syncfusion licensing is mandatory for production use. Register a valid Syncfusion license key in your application's entry point **before** rendering the `SpreadsheetComponent`.

For step-by-step registration guidance, see [Licensing](../../../Licensing/overview.md).

## Add the Syncfusion® React Spreadsheet component

Now, import the `SpreadsheetComponent` into your `src/App.jsx` or `src/App.tsx` file and render it. **Replace the entire default contents of that file** - Vite's starter `App` component ships with demo markup (logo, counter, CSS classes) that is not needed here. Open the file, delete everything in it, and paste the code below.

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

### Configure additional Spreadsheet properties

Along with the `openUrl` and `saveUrl` properties, you can configure additional Spreadsheet properties during component initialization to customize the Spreadsheet's behavior and appearance. This allows you to enable or disable specific features, control the user interface, and tailor the Spreadsheet experience to meet your application requirements.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}

import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export default function App() {
  return (<SpreadsheetComponent openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
      saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
      allowEditing={true} allowOpen={true} allowSave={true} showFormulaBar={true} showSheetTabs={true} height="100%" width="100%"/>);
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% raw %}

import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export default function App() {
  return (<SpreadsheetComponent openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
      saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
      allowEditing={true} allowOpen={true} allowSave={true} showFormulaBar={true} showSheetTabs={true} height="100%" width="100%"/>);
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

> **Note:** The React Spreadsheet component provides a rich set of configuration options, including editing, formatting, importing and exporting Excel files, sheet management, and UI customization. You can specify the required properties during initialization to configure the component according to your application's needs. For the complete list of available properties, refer to the https://ej2.syncfusion.com/react/documentation/api/spreadsheet/.

## Run the application

Run the following command to start the development server:

```
npm run dev
```

After the application starts, open the localhost URL shown in the terminal to view the React Spreadsheet Editor in the browser. The output will appear as follows:

![React Spreadsheet Editor](images/spreadsheet.png)

## Stop the development server

When you are finished testing the application, you can stop the Vite development server running on localhost.

In the terminal where the server is running, press:

```
Ctrl + C
```

You will see a confirmation prompt similar to the following:

```
Terminate batch job (Y/N)?
```

Type `Y` and press Enter to stop the server.

> **Note:** Stopping the development server only ends the local hosting process. Your project files and application configuration remain unchanged and can be started again at any time by running `npm run dev`.

You can also explore the Spreadsheet interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/spreadsheet/react/getting-started-cs1" %}

> [View Sample in GitHub](https://github.com/SyncfusionExamples/getting-started-with-the-react-spreadsheet-component) to explore the complete source code. You can also explore our [React Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/react/#/tailwind3/spreadsheet/default) that shows you how to present and manipulate data.

N> Looking for the full React Spreadsheet Editor component overview, features, pricing, and documentation? Visit the [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) page.

## See also

* [Open Excel files](./open-excel-files)
* [Save Excel files](./save-excel-files)
* [Web Services](./web-services/webservice-overview)
* [Data Binding](./data-binding)
* [FAQ](../../../Frequently-asked-question.md)
