---
layout: post
title: Getting Started with JavaScript (ES5) DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in a JavaScript application using the Syncfusion® Document Editor control to create, edit, and view Word documents.
platform: document-processing
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with JavaScript (ES5) DOCX Editor
Syncfusion® DOCX Editor (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a JavaScript (ES5) application.

## Steps to create a JavaScript (ES5) DOCX Editor

Create a folder named `documenteditor-app` with `index.html` file. Then, add the required Syncfusion Document Editor style and script references to the `index.html` file.

You can add the required resources using either of the following methods:

### Using local script and style references

Create a `resources` folder under `documenteditor-app`, and then copy the required script and style files from the [DOCX Editor SDK](https://www.syncfusion.com/account/manage-trials/start-trials) build into it.

  Your application structure should look like this:
  ```text
  documenteditor-app/
  ├── index.html
  └── resources/
  ```
### Using CDN link for script and style reference

Reference the scripts and styles directly from the CDN.
  ```text
  Script: https://cdn.syncfusion.com/ej2/{VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js
  Style: https://cdn.syncfusion.com/ej2/{VERSION}/{PACKAGE_NAME}/styles/{THEME_NAME}.css
  ```

{% tabs %}
{% highlight html tabtitle="Local script and style" %}

...
<head>
    <!-- EJ2 Document editor dependent material theme -->
    <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="resources/buttons/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="resources/inputs/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="resources/popups/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="resources/lists/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="resources/navigations/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="resources/splitbuttons/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="resources/dropdowns/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <!-- EJ2 DocumentEditor material theme -->
    <link href="resources/documenteditor/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <!-- EJ2 Document editor dependent scripts -->
    <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-file-utils.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-compression.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-pdf-export.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-splitbuttons.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-lists.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-calendars.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-charts.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-office-chart.min.js" type="text/javascript"></script>
    <!-- EJ2 Document editor script -->
    <script src="resources/scripts/ej2-documenteditor.min.js" type="text/javascript"></script>
</head>
...

{% endhighlight %}
{% highlight html tabtitle="CDN link for script and style" %}

...
<head>
    <!-- EJ2 Document editor dependent theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <link href="https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <!-- EJ2 Document editor theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-documenteditor/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
    <!-- EJ2 Document editor dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-file-utils/dist/global/ej2-file-utils.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-compression/dist/global/ej2-compression.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-office-chart/dist/global/ej2-office-chart.min.js" type="text/javascript"></script>
    <!-- EJ2 Document editor script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-documenteditor/dist/global/ej2-documenteditor.min.js" type="text/javascript"></script>
</head>
...
{% endhighlight %}
{% endtabs %}

> **Note:** To learn more about other ways to load themes or scripts, see the [Themes topic](https://ej2.syncfusion.com/javascript/documentation/appearance/theme) and [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator) documentation.


### Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component

Add a container element for the Document Editor in the `index.html` file and then initialize the control in script tag.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Syncfusion JavaScript Document Editor</title>
    <!-- Add your style references here -->
</head>
<body>
    <!-- Element which is going to render as Document editor -->
    <div id='DocumentEditor' style='height:620px'></div>
    <script>
        // Initialize Document Editor Container component
        var documenteditorContainer = new ej.documenteditor.DocumentEditorContainer({ 
            enableToolbar: true, 
            height: '590px' 
        });
        ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
        // Use the following service URL only for demo purposes
        documenteditorContainer.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
        // DocumentEditorContainer control rendering
        documenteditorContainer.appendTo('#DocumentEditor');
    </script>
</body>
</html>

{% endhighlight %}
{% endtabs %}

> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

### Run the application

Now, open the `index.html` file in a web browser to render the JavaScript Document Editor.

Use the following live preview to explore the Document Editor control.

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/es5-getting-started-cs2" %}

## Server-side dependencies

The Document Editor component requires server-side interactions for the following operations:

* Open file formats other than SFDT
* Paste with formatting
* Restrict editing
* Spell check
* Save as file formats other than SFDT and DOCX

>Note: If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

For detailed information about server-side dependencies, refer to the [Web Services Overview](./web-services-overview) page.
