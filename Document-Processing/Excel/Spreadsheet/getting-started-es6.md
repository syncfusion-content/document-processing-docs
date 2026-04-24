---
layout: post
title: Getting started with EJ2 TypeScript Spreadsheet control | Syncfusion
description:  Checkout and learn about Getting started with EJ2 TypeScript Spreadsheet control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Getting started 
documentation: ug
---

# Getting started in EJ2 TypeScript Spreadsheet control

This section explains the steps to create a simple Spreadsheet component using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Prerequisites

To get started, ensure the following software is installed on your machine:

- [Visual Studio Code](https://code.visualstudio.com/)
- Node `v14.15.0` or higher

## Create the TypeScript application

Create a simple TypeScript application using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

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

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below:

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import "../../node_modules/@syncfusion/ej2/material.css";

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme/) section to know more about built-in themes and CSS reference for individual controls.

## Add the Syncfusion® Spreadsheet Editor component to the application

Add the HTML `div` element with ID attribute as `element` in your `index.html` file, and initialize the Spreadsheet control in `app.ts`.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <!--Element which will render as Spreadsheet-->
    <div id="element"></div>
</body>
</html>

{% endhighlight %}
{% highlight ts tabtitle="index.ts" %}

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

// Initialize Spreadsheet component
let spreadsheet: Spreadsheet = new Spreadsheet();

// Render initialized Spreadsheet
spreadsheet.appendTo('#element');

{% endhighlight %}
{% endtabs %}


> **Note:** The [openUrl](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#openurl) and [saveUrl](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#saveurl) properties are used to connect the Spreadsheet control to a server-side service for Excel import and export operations. For development and production use, we recommend configuring your own local or hosted service instead of relying on demo endpoints. For more information, refer to the [blog](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services) post.

## Run the application

The `quickstart` project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The following example shows a basic Spreadsheet component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/spreadsheet/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/spreadsheet/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/spreadsheet/getting-started-cs1" %}

> You can refer to our [JavaScript Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/javascript/#/tailwind3/spreadsheet/default.html) that shows you how present and manipulate data, including editing, formulas, formatting, importing, and exporting.

## See Also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)