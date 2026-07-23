---
layout: post
title: Getting started with TypeScript Spreadsheet control | Syncfusion
description:  Check out and learn about getting started with the Syncfusion TypeScript Spreadsheet control in the Spreadsheet Editor SDK and more details.
platform: document-processing
control: Getting started 
documentation: ug
---

# Getting Started with the TypeScript Spreadsheet Editor

This section explains how to create a TypeScript application and add the [TypeScript Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) with the minimum required configuration.

## Prerequisites

To get started, ensure the following software is installed on your machine:

- [Git](https://git-scm.com/downloads)
- [Node.js (`v14.15.0` or later)](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Create a TypeScript application

Create a simple TypeScript application using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

**Step 1:** Open the command prompt from the required directory and clone the quickstart project from GitHub.

```bash
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
```

**Step 2:** Navigate to the `ej2-quickstart` folder.

```bash
cd ej2-quickstart
```
**Step 3:** By default, the `ej2‑quickstart` repository is preconfigured with the [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in `~/package.json`. This package installs all Syncfusion Essential JS 2 components packages, including the Spreadsheet component and other EJ2 controls.
 
To install only the Spreadsheet component, replace the existing dependency with [@syncfusion/ej2-spreadsheet](https://www.npmjs.com/package/@syncfusion/ej2), as shown below:

```json
"dependencies": {
  "@syncfusion/ej2-spreadsheet": "*"
}
```

**Step 4:** Install the dependent npm packages.

```bash
npm install
```

## Register Syncfusion License Key

Before initializing any Syncfusion components, generate a Syncfusion license key and register it in the application.

- [Generate a Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
- [Register a Syncfusion License Key in a JavaScript-ES6 Application](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#javascript-es6--typescript)

## Add CSS references

Add the following style references for the Spreadsheet component and its dependent components.

{% tabs %}
{% highlight css tabtitle="~/src/styles/styles.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-spreadsheet/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

> **Note:** This example uses the `Tailwind3` theme. To use a different built-in theme, replace the `tailwind3.css` references with the corresponding theme stylesheets. Refer to the [Themes documentation](https://ej2.syncfusion.com/documentation/appearance/theme) for information about the available themes and the different ways to include theme styles in a TypeScript application.


## Add the Syncfusion® Spreadsheet Component to the Application

Add a container element for the Spreadsheet component to the `index.html` file, and then initialize the component in the `app.ts` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Syncfusion TypeScript Spreadsheet</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Syncfusion TypeScript Spreadsheet" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <!-- Element which will render as Spreadsheet -->
    <div id="element"></div>
</body>
</html>

{% endhighlight %}
{% highlight ts tabtitle="app.ts" %}

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

// Initialize the Spreadsheet component
const spreadsheet: Spreadsheet = new Spreadsheet({
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
});

// Render the Spreadsheet Component.
spreadsheet.appendTo('#element');

{% endhighlight %}
{% endtabs %}

> **Note:** The [openUrl](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#openurl) and [saveUrl](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#saveurl) properties are used to connect the Spreadsheet component to a server-side service for Excel import and export operations. For development and production use, we recommend configuring your own local or hosted service instead of relying on demo endpoints. For more information, refer to [`link`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## Run the Application

The `quickstart` project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

After the development server starts, open the local URL displayed in the terminal. Verify that the Spreadsheet component is rendered correctly, as shown in the following image.

![Rendered spreadsheet in browser](./images/spreadsheet.png)

You can also explore the Spreadsheet component using the live sample below. The sample allows you to load an Excel file, analyze and modify its data, and save the updated data back to an Excel file.

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/spreadsheet/getting-started-cs1" %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/getting-started-with-the-javascript-spreadsheet-control). For information about features, pricing, and related resources, visit the [JavaScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) page.

## See also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)
