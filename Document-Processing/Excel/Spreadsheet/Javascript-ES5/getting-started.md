---
layout: post
title: Getting started with EJ2 Javascript Spreadsheet control | Syncfusion
description:  Checkout and learn about Getting started with EJ2 Javascript Spreadsheet control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Getting started 
documentation: ug
---

# Getting Started with Javascript Spreadsheet component

This section explains the steps to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Spreadsheet control in a JavaScript application.

## Prerequisites

To get started, ensure the following software is installed on your machine:

- [Spreadsheet Editor SDK](https://www.syncfusion.com/account/manage-trials/start-trials)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Essential Studio® JavaScript (Essential® JS 2)](https://www.syncfusion.com/downloads/essential-js2)

> **Note:** If you are using Syncfusion® CDN resources to build your web application, you can skip the Essential Studio® JavaScript prerequisite.

## Create the JavaScript Project

Create a simple JavaScript application to render the Spreadsheet control.

**Step 1:** Create a root folder named `myapp`.

**Step 2:** Inside the `myapp` folder, create the following files:

- `index.html`
- `index.js`

## Add Syncfusion Spreadsheet resources

Add the required Syncfusion Essential<sup style="font-size:70%">&reg;</sup> JS 2 Spreadsheet theme style and script references to the `index.html` file before rendering the Spreadsheet control.

You can access Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet control resources using either of the following methods:

- **Using local scripts and styles** – Copy the required script and style files from the [Essential Studio® JavaScript (Essential® JS 2)](https://www.syncfusion.com/downloads/essential-js2) build into the `resources` folder of your application.

  Your application structure should look like this:

  ```text
  myapp/
  ├── index.html
  ├── index.js
  └── resources/
  ```

- **Using CDN link for scripts and styles** – Reference the scripts and styles directly from the CDN.

{% tabs %}
{% highlight html tabtitle="Local script and style" %}

...
<head>
<!-- Essential JS 2 Spreadsheet's dependents material theme -->
<link href="resources/base/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/inputs/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/buttons/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/splitbuttons/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/lists/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/navigations/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/popups/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/dropdowns/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/grids/styles/material.css" rel="stylesheet" type="text/css" />
<!-- Essential JS 2 Spreadsheet's material theme -->
<link href="resources/spreadsheet/styles/material.css" rel="stylesheet" type="text/css" />
<!-- Essential JS 2 Spreadsheet's dependents script -->
<script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-buttons.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-splitbuttons.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-inputs.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-lists.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-dropdowns.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-navigations.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-excel-export.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-pdf-export.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-calendars.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-compression.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-file-utils.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>
<script src="resources/scripts/ej2-charts.min.js" type="text/javascript"></script>
<!-- Essential JS 2 Spreadsheet global script -->
<script src="resources/scripts/ej2-spreadsheet.min.js" type="text/javascript"></script>
</head>
...

{% endhighlight %}
{% highlight html tabtitle="CDN link for script and style" %}

...
<head>
<!-- Essential JS 2 Spreadsheet's dependents material theme -->
<link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-grids/styles/material.css" rel="stylesheet" type="text/css" />
<!-- Essential JS 2 Spreadsheet material theme -->
<link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-spreadsheet/styles/material.css" rel="stylesheet" type="text/css" />
<!-- Essential JS 2 Spreadsheet's dependents script -->
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
<script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-spreadsheet/dist/global/ej2-spreadsheet.min.js" type="text/javascript"></script>
</head>
...
{% endhighlight %}
{% endtabs %}

## Add the Syncfusion® Spreadsheet component to the project

After adding the required style references, add a container element for the Spreadsheet control in the `index.html` file and then initialize the control in the `index.js` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Essential JS 2 Spreadsheet</title>
    <!-- Add your style references here -->
</head>
<body>
    <!-- Add the HTML <div> element for Spreadsheet -->
    <div id="element"></div>
    <script src="index.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}
{% highlight js tabtitle="index.js" %}

// Initialize the Spreadsheet control
var spreadsheet = new ej.spreadsheet.Spreadsheet();

// Render the initialized Spreadsheet
spreadsheet.appendTo('#element');

{% endhighlight %}
{% endtabs %}

> **Note:** The [openUrl](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#openurl) and [saveUrl](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#saveurl) properties are used to connect the Spreadsheet control to a server-side service for Excel import and export operations. For development and production use, we recommend configuring your own local or hosted service instead of relying on demo endpoints. For more information, refer to the [`link`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## Run the application

Now, run the `index.html` in web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Spreadsheet control.

Output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/spreadsheet/es5-getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/spreadsheet/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/spreadsheet/es5-getting-started-cs1" %}


## See Also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)