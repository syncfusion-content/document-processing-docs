---
layout: post
title: Getting started with EJ2 TypeScript Spreadsheet control | Syncfusion
description:  Checkout and learn about Getting started with EJ2 TypeScript Spreadsheet control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Getting started 
documentation: ug
---

# Getting started in EJ2 TypeScript Spreadsheet control

This section explains the steps to create a simple Spreadsheet component using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the Spreadsheet component in your application:

```js
|-- @syncfusion/ej2-spreadsheet
   |-- @syncfusion/ej2-base
   |-- @syncfusion/ej2-dropdowns
   |-- @syncfusion/ej2-navigations
   |-- @syncfusion/ej2-grids

```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2/material.css";

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme) section to know more about built-in themes and CSS reference for individual controls.

## Add Spreadsheet component

Add the HTML `div` element with ID attribute as `element` in your `index.html` file.

`[src/index.html]`

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
{% endtabs %}

Now, import the Spreadsheet component into your `app.ts` to instantiate a spreadsheet and append the spreadsheet instance to the `#element`.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

// Initialize Spreadsheet component
let spreadsheet: Spreadsheet = new Spreadsheet();

// Render initialized Spreadsheet
spreadsheet.appendTo('#element');

{% endhighlight %}
{% endtabs %}

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