---
layout: post
title: Getting started with Javascript Spreadsheet control | Syncfusion
description:  Checkout and learn about getting started with the Syncfusion JavaScript Spreadsheet control in the Spreadsheet Editor SDK and more details.
platform: document-processing
control: Getting started 
documentation: ug
---

# Getting Started with JavaScript Spreadsheet control

This section explains the steps to create a simple [Syncfusion® JavaScript Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) control in a JavaScript application.

## Create a JavaScript application

Create a folder named `spreadsheet-app` with `index.html` and `index.js` files.

Your application structure should look like this:

```text
spreadsheet-app/
├── index.html
├── index.js
```

## Add Syncfusion® Spreadsheet resources

Add the required Syncfusion® Spreadsheet style and script references to the `index.html` file using one of the following methods:

{% tabcontents %}

{% tabcontent Using Local Resources %}

To use local scripts and styles for the Syncfusion® Spreadsheet, follow these steps:

1. Download and install the [Spreadsheet Editor SDK](https://www.syncfusion.com/account/manage-trials/start-trials).

2. Create a `resources` folder in your application (for example, `spreadsheet-app/resources`).

3. From the installed SDK location, copy the required packages from the following folder into the `resources` folder:

```
<Install path>/Syncfusion/Essential Studio/Spreadsheet Editor SDK/{VERSION}/Web (Essential JS 2)/JavaScript
```

4. After copying the files, add the Spreadsheet and its dependent control style and script references inside the `<head>` section of your `index.html` file, as shown below.

{% tabs %}
{% highlight html tabtitle="index.html" %}

...
<head>
...
    <!-- Spreadsheet dependency styles -->
    <link href="resources/ej2-base/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/ej2-inputs/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/ej2-buttons/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/ej2-splitbuttons/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/ej2-lists/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/ej2-navigations/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/ej2-popups/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/ej2-dropdowns/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/ej2-grids/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <!-- Spreadsheet styles -->
    <link href="resources/ej2-spreadsheet/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <!-- Spreadsheet dependency scripts -->
    <script src="resources/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="resources/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
    <script src="resources/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
    <script src="resources/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="resources/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="resources/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="resources/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="resources/ej2-excel-export/dist/global/ej2-excel-export.min.js" type="text/javascript"></script>
    <script src="resources/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
    <script src="resources/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
    <script src="resources/ej2-compression/dist/global/ej2-compression.min.js" type="text/javascript"></script>
    <script src="resources/ej2-file-utils/dist/global/ej2-file-utils.min.js" type="text/javascript"></script>
    <script src="resources/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
    <script src="resources/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
    <script src="resources/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
    <!-- Spreadsheet scripts -->
    <script src="resources/ej2-spreadsheet/dist/global/ej2-spreadsheet.min.js" type="text/javascript"></script>
</head>
...

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Using CDN Links %}

Reference the scripts and styles directly from the CDN.

```text
Script: https://cdn.syncfusion.com/ej2/{VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js
Style: https://cdn.syncfusion.com/ej2/{VERSION}/{PACKAGE_NAME}/styles/{THEME_NAME}.css
```

{% tabs %}
{% highlight html tabtitle="index.html" %}

...
<head>
...
    <!-- Spreadsheet dependency styles -->
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-base/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-inputs/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-buttons/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-splitbuttons/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-lists/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-navigations/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-popups/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-dropdowns/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-grids/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <!-- Spreadsheet styles -->
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-spreadsheet/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <!-- Spreadsheet dependency scripts -->
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-excel-export/dist/global/ej2-excel-export.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-compression/dist/global/ej2-compression.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-file-utils/dist/global/ej2-file-utils.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
    <!-- Spreadsheet scripts -->
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-spreadsheet/dist/global/ej2-spreadsheet.min.js" type="text/javascript"></script>
</head>
...

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

> **Note:** To learn more about other ways to load themes or scripts, see the [Themes topic](https://ej2.syncfusion.com/javascript/documentation/appearance/theme) and [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator) documentation.

## Add the Syncfusion® Spreadsheet control

Add a container element for the Spreadsheet control in the `index.html` file and then initialize the control in the `index.js` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Syncfusion JavaScript Spreadsheet</title>
    <!-- Add your style references here -->
</head>
<body>
    <!-- Element which will render as Spreadsheet -->
    <div id="element"></div>
    <script src="index.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}
{% highlight js tabtitle="index.js" %}

// Initialize the Spreadsheet control
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
});

// Render the initialized Spreadsheet
spreadsheet.appendTo('#element');

{% endhighlight %}
{% endtabs %}

> **Note:** The [openUrl](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#openurl) and [saveUrl](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#saveurl) properties are used to connect the Spreadsheet control to a server-side service for Excel import and export operations. For development and production use, we recommend configuring your own local or hosted service instead of relying on demo endpoints. For more information, refer to the [`link`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## Run the application

Open the `index.html` file in a web browser to launch the JavaScript Spreadsheet editor. The image below shows how the spreadsheet is rendered in the browser:

![Rendered spreadsheet in browser](./images/spreadsheet.png)

You can also explore the Spreadsheet interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/spreadsheet/es5-getting-started-cs1" %}

## See also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)