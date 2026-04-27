---
layout: post
title: Getting Started with JavaScript (ES5) DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in a JavaScript application using the Syncfusion® Document Editor control to create, edit, and view Word documents.
platform: document-processing
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with JavaScript (ES5) Document Editor

Syncfusion® DOCX Editor (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a JavaScript (ES5) application.


## Component Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components can be initialized using either of the following approaches:

* Using local script and style references in an HTML page
* Using CDN links for script and style references

### Using local script and style references

This approach downloads and hosts the required files locally, providing better control over versioning and offline availability.

**Step 1:** Create an app folder `app` for Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2/) build installed location.

**Syntax:**
> Script: `**(installed location)**/JavaScript - EJ2/{RELEASE_VERSION}/Web (Essential JS 2)/JavaScript/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/JavaScript - EJ2/{RELEASE_VERSION}/Web (Essential JS 2)/JavaScript/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/32.1.19/Web (Essential JS 2)/JavaScript/ej2-documenteditor/dist/global/ej2-documenteditor.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/32.1.19/Web (Essential JS 2)/JavaScript/ej2-documenteditor/styles/material.css`

**Step 3:** Create a folder `app/resources` and copy/paste the global scripts and styles from the above installed location to `app/resources` location.

**Step 4:** Create a HTML page (index.html) in `app` location and add the Essentials JS 2 script and style references.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Essential JS 2 Document editor</title>
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
<body>
</body>
</html>

**Step 5:** To render DocumentEditorContainer component, add the `Div` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DocumentEditorContainer** component in the `index.html` by using following code

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Essential JS 2 Document editor</title>
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
<body>
    <!-- Element which is going to render -->
    <div id='DocumentEditor' style='height:620px'></div>
    <script>
        // Initialize DocumentEditorContainer component
        var documenteditorContainer = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true });

        // Inject required modules
        ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
        documenteditorContainer.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
        
        // DocumentEditorContainer control rendering
        documenteditorContainer.appendTo('#DocumentEditor');
    </script>
</body>
</html>
```

> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).


Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DocumentEditorContainer** component.

### Using CDN link for script and style reference

This approach uses Content Delivery Network (CDN) links to reference the required scripts and styles, eliminating the need to download and host files locally.

**Step 1:** Create an app folder `app` for the Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/32.1.19/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/32.1.19/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-documenteditor/dist/global/ej2-documenteditor.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-documenteditor/dist/global/ej2-documenteditor.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-documenteditor/styles/material.css`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-documenteditor/styles/material.css)

**Step 5:** Create a HTML page (index.html) in `app` location and add the CDN link references. Now add the `Div` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DocumentEditorContainer** component in the index.html by using following code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Essential JS 2 Document editor</title>
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
<body>
    <!-- Element which is going to render as Document editor -->
    <div id='DocumentEditor' style='height:620px'></div>
    <script>
        // Initialize DocumentEditorContainer component
        var documenteditorContainer = new ej.documenteditor.DocumentEditorContainer({ 
            enableToolbar: true, 
            height: '590px' 
        });
        
        ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
        documenteditorContainer.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
        
        // DocumentEditorContainer control rendering
        documenteditorContainer.appendTo('#DocumentEditor');
    </script>
</body>
</html>
```

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/es5-getting-started-cs2" %}

Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DocumentEditorContainer** component.

## Server-side dependencies

The Document editor component requires server-side interactions for the following operations:

* Open file formats other than SFDT
* Paste with formatting
* Restrict editing
* Spell check
* Save as file formats other than SFDT and DOCX

>Note: If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

For detailed information about server-side dependencies, refer to the [Web Services Overview](./web-services-overview) page.