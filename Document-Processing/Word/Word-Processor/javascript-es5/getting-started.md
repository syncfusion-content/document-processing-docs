---
layout: post
title: Getting Started with JavaScript (ES5) DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in a JavaScript application using the Syncfusion® Document Editor control to create, edit, and view Word documents.
platform: document-processing
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion<sup>&reg;</sup> JavaScript (ES5) DOCX Editor

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript DOCX Editor (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a JavaScript (ES5) application.

## Steps to create a Document Editor using JavaScript (ES5)

Create a folder named `documenteditor-app` with `index.html` and `index.js` files. Your application structure should look like this:

 ```text
  documenteditor-app/
  ├── index.html
  └── index.js
  ```

### Add style and script references

The Syncfusion<sup style="font-size:70%">&reg;</sup> Essential JS 2 components' global scripts and styles are available at the following CDN link formats.

**Syntax:**

  ```text
  Script: https://cdn.syncfusion.com/ej2/{VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js
  Style: https://cdn.syncfusion.com/ej2/{VERSION}/{PACKAGE_NAME}/styles/{THEME_NAME}.css
  ```

  **Example:**

  ```text
  Script: https://cdn.syncfusion.com/ej2/33.2.3/ej2-base/dist/global/ej2-base.min.js 
  Style: https://cdn.syncfusion.com/ej2/33.2.3/ej2-base/styles/material.css
  ```

Add the following CDN references inside the `<head>` section of your `index.html` file, as shown below.

{% tabs %}
{% highlight html tabtitle="index.html" %}

...
<head>
    <title>Syncfusion JavaScript Document Editor</title>
	<!-- EJ2 Document Editor dependent theme -->
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-base/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <!-- EJ2 Document Editor theme -->
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-documenteditor/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <!-- EJ2 Document Editor dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-file-utils/dist/global/ej2-file-utils.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-compression/dist/global/ej2-compression.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-office-chart/dist/global/ej2-office-chart.min.js" type="text/javascript"></script>
    <!-- EJ2 Document Editor script -->
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-documenteditor/dist/global/ej2-documenteditor.min.js" type="text/javascript"></script>
</head>
...
{% endhighlight %}
{% endtabs %}

### Add the Document Editor component

Add a container element for the Document Editor in the `index.html` file and then initialize the control in the `<script>` tag.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Syncfusion JavaScript Document Editor</title>
    <!-- Add your style references here -->
</head>
<body>
    <!-- Element that renders the Document Editor -->
    <div id='DocumentEditor'></div>
    <script src="index.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}
{% highlight js tabtitle="index.js" %}

// Inject toolbar
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);

// Initialize Document Editor Container component
var documenteditorContainer = new ej.documenteditor.DocumentEditorContainer({ 
    enableToolbar: true, 
    height: '590px'

});

// Use the following service URL only for demo purposes
documenteditorContainer.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
// Render the DocumentEditorContainer control
documenteditorContainer.appendTo('#DocumentEditor');

{% endhighlight %}
{% endtabs %}

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

### Run the application

Open the `index.html` file in a web browser. The JavaScript (ES5) Document Editor is rendered with a toolbar and an editable document area, as shown below.

![Output of JavaScript ES5 Document Editor](./images/javascript_es5_getting_started.png)

You can also explore the Document Editor interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/es5-getting-started-cs2" %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/JavaScript-ES5-DOCX-Editor-Examples/tree/master/getting-started).

## Server-side dependencies

The Document Editor component requires server-side interactions for the following operations:

* Open file formats other than SFDT
* Paste with formatting
* Restrict editing
* Spell check
* Save as file formats other than SFDT and DOCX

N> If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

For detailed information about server-side dependencies, refer to the [Web Services Overview](./web-services-overview) page.

## See also

- [Open a document](./import)
- [Save a document](./export)
- [Collaborative Editing](./collaborative-editing/overview)