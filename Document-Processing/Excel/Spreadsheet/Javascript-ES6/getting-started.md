---
layout: post
title: Getting started with EJ2 TypeScript Spreadsheet control | Syncfusion
description:  Checkout and learn about Getting started with EJ2 TypeScript Spreadsheet control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Getting started 
documentation: ug
---

# Getting Started with TypeScript Spreadsheet component

This section explains how to create a simple TypeScript application and add the [Syncfusion® JavaScript Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk) component with the minimum required setup.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Prerequisites

To get started, ensure the following software is installed on your machine:

- [Spreadsheet Editor SDK](https://www.syncfusion.com/account/manage-trials/start-trials)
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

Add the following style references to the file.

{% tabs %}
{% highlight css tabtitle="~/src/styles/styles.css" %}

@import "../../node_modules/@syncfusion/ej2-spreadsheet/material.css";

{% endhighlight %}
{% endtabs %}

> Refer to [themes topic](https://ej2.syncfusion.com/javascript/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a typescript project.

## Add the Syncfusion® Spreadsheet component to the application

Add the HTML `div` element with ID attribute as `element` in your `index.html` file, and initialize the Spreadsheet control in `index.ts`.

The following example shows a basic Spreadsheet component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/spreadsheet/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/spreadsheet/getting-started-cs1/index.html %}
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
          
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/spreadsheet/getting-started-cs1" %}


## See Also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)