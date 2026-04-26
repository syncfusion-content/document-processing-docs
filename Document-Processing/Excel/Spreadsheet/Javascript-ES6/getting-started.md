---
layout: post
title: Getting started with TypeScript Spreadsheet control | Syncfusion
description:  Checkout and learn about getting started with the Syncfusion TypeScript Spreadsheet control in the Spreadsheet Editor SDK and more details.
platform: document-processing
control: Getting started 
documentation: ug
---

# Getting Started with TypeScript Spreadsheet control

This section explains how to create a simple TypeScript application and add the [Syncfusion® TypeScript Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) control with the minimum required setup.

## Prerequisites

To get started, ensure the following software is installed on your machine:

- [Git](https://git-scm.com/downloads)
- [Node.js (`v14.15.0` or later)](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Create the TypeScript application

Create a simple TypeScript application using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

**Step 1:** Open the command prompt from the required directory and clone the quickstart project from GitHub.

```bash
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart
```

**Step 2:** Navigate to the `ej2-quickstart` folder.

```bash
cd ej2-quickstart
```

**Step 3:** Install the dependent npm packages.

```bash
npm install
```

## Add CSS references

Add the following style references to the file.

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

> Refer to the [Themes topic](https://ej2.syncfusion.com/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a TypeScript project.

## Add the Syncfusion® Spreadsheet control to the application

Add a container element for the Spreadsheet control in the `index.html` file and then initialize the control in the `index.ts` file.

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
{% highlight ts tabtitle="index.ts" %}

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

// Initialize the Spreadsheet component
const spreadsheet: Spreadsheet = new Spreadsheet({
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
});

// Render initialized Spreadsheet
spreadsheet.appendTo('#element');

{% endhighlight %}
{% endtabs %}

> **Note:** The [openUrl](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#openurl) and [saveUrl](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#saveurl) properties are used to connect the Spreadsheet control to a server-side service for Excel import and export operations. For development and production use, we recommend configuring your own local or hosted service instead of relying on demo endpoints. For more information, refer to the [`link`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## Run the application

The `quickstart` project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Use the following live preview to explore the Spreadsheet control.
          
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/spreadsheet/getting-started-cs1" %}

## See Also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)