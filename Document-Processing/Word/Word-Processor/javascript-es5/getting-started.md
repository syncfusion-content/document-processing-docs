---
layout: post
title: Getting started with JavaScript (ES5) Document editor control | Syncfusion
description:  Checkout and learn about Getting started with JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in JavaScript (ES5) Document editor control

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Component Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `app` for Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2/) build installed location.

**Syntax:**
> Script: `**(installed location)**/JavaScript - EJ2/{RELEASE_VERSION}/Web (Essential JS 2)/JavaScript/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/JavaScript - EJ2/{RELEASE_VERSION}/Web (Essential JS 2)/JavaScript/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/23.1.36/Web (Essential JS 2)/JavaScript/ej2-documenteditor/dist/global/ej2-documenteditor.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/23.1.36/Web (Essential JS 2)/JavaScript/ej2-documenteditor/styles/material.css`

**Step 3:** Create a folder `app/resources` and copy/paste the global scripts and styles from the above installed location to `app/resources` location.

**Step 4:** Create a HTML page (index.html) in `app` location and add the Essentials JS 2 script and style references.

```html
  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
      <title>Essential JS 2</title>
      <!-- EJ2 Document Editor dependent material theme -->
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

      <!-- EJ2 Document Editor dependent scripts -->
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
      <!-- EJ2 Document Editor script -->
      <script src="resources/scripts/ej2-documenteditor.min.js" type="text/javascript"></script>
  </head>
  <body>
  </body>
  </html>
```

**Step 5:** Now, add the `Div` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DocumentEditor** component in the `index.html` by using following code

```html
  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
      <title>Essential JS 2</title>
      <!-- EJ2 Document Editor dependent material theme -->
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

      <!-- EJ2 Document Editor dependent scripts -->
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
      <!-- EJ2 Document Editor script -->
      <script src="resources/scripts/ej2-documenteditor.min.js" type="text/javascript"></script>
  </head>
  <body>
    <!--element which is going to render-->
        <div id='DocumentEditor'></div>
    <script>
        // Initialize DocumentEditor component.
        var documenteditor = new ej.documenteditor.DocumentEditor({ isReadOnly: false, serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' });

        documenteditor.acceptTab = true;

        //Enable all the built in modules.
        documenteditor.enableAllModules();
        documenteditor.pageOutline = '#E0E0E0';

        //Document Editor control rendering starts
        documenteditor.appendTo('#DocumentEditor');
    </script>
  </body>
  </html>
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DocumentEditor** component.

**Step 7:** To render DocumentEditorContainer component, add the `Div` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DocumentEditorContainer** component in the `index.html` by using following code

```html
  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>Essential JS 2</title>
      <!-- EJ2 Document Editor dependent material theme -->
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

      <!-- EJ2 Document Editor dependent scripts -->
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
      <!-- EJ2 Document Editor script -->
      <script src="resources/scripts/ej2-documenteditor.min.js" type="text/javascript"></script>
    </head>
    <body>
      <!--element which is going to render-->
      <div id='DocumentEditor' style='height:620px'>

      </div>
      <script>
          // Initialize DocumentEditorContainer component.
          var documenteditorContainer = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true });

          //Inject require modules.
          ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
          documenteditorContainer.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
          //DocumentEditorContainer control rendering starts
          documenteditorContainer.appendTo('#DocumentEditor');
      </script>
    </body>
  </html>
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DocumentEditorContainer** component.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `app` for the Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/23.1.36/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/23.1.36/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-documenteditor/dist/global/ej2-documenteditor.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-documenteditor/dist/global/ej2-documenteditor.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-documenteditor/styles/material.css`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-documenteditor/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `app` location and add the CDN link references. Now, add the `Div` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DocumentEditor** component in the index.html by using following code.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <title>Essential JS 2</title>
  <!-- EJ2 Document Editor dependent theme -->
  <link href="https://cdn.syncfusion.com/ej2/21.2.3/ej2-base/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/21.2.3/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/21.2.3/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/21.2.3/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/21.2.3/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/21.2.3/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/21.2.3/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/21.2.3/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />

  <!-- EJ2 Document Editor theme -->
  <link href="https://cdn.syncfusion.com/ej2/21.2.3/ej2-documenteditor/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />

  <!-- EJ2 Document Editor dependent scripts -->
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-svg-base/dist/global/ej2-svg-base.min.js"type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-file-utils/dist/global/ej2-file-utils.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-compression/dist/global/ej2-compression.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-office-chart/dist/global/ej2-office-chart.min.js" type="text/javascript"></script>
  <!-- EJ2 Document Editor script -->
  <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-documenteditor/dist/global/ej2-documenteditor.min.js" type="text/javascript"></script>
  </head>
  <body>
  <!--element which is going to render-->
      <div id='DocumentEditor' style='height:350px'></div>
  <script>
      // Initialize DocumentEditor component.
      var documenteditor = new ej.documenteditor.DocumentEditor({ height: '370px', isReadOnly: false, serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' });

      documenteditor.acceptTab = true;
      //Enable all the build in modules.
      documenteditor.enableAllModules();

      //Set page border color.
      documenteditor.pageOutline = '#E0E0E0';

      //Document Editor control rendering starts
      documenteditor.appendTo('#DocumentEditor');
  </script>
  </body>
  </html>
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DocumentEditor** component.

**Step 5:** To render DocumentEditorContainer component, add the `Div` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DocumentEditorContainer** component in the index.html by using following code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Essential JS 2</title>
  <!-- EJ2 Document Editor dependent theme -->
  <link href="https://cdn.syncfusion.com/ej2/23.1.36/ej2-base/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/23.1.36/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/23.1.36/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/23.1.36/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/23.1.36/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/23.1.36/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/23.1.36/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
  <link href="https://cdn.syncfusion.com/ej2/23.1.36/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />

  <!-- EJ2 Document Editor theme -->
  <link href="https://cdn.syncfusion.com/ej2/23.1.36/ej2-documenteditor/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />

  <!-- EJ2 Document Editor dependent scripts -->
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-file-utils/dist/global/ej2-file-utils.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-compression/dist/global/ej2-compression.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-office-chart/dist/global/ej2-office-chart.min.js" type="text/javascript"></script>
  <!-- EJ2 Document Editor script -->
  <script src="https://cdn.syncfusion.com/ej2/23.1.36/ej2-documenteditor/dist/global/ej2-documenteditor.min.js" type="text/javascript"></script>
</head>

<body>
  <!--Element which is going to render as Document Editor-->
  <div id='DocumentEditor' style='height:620px'>

  </div>
  <script>
    // Initialize DocumentEditorContainer component.
    var documenteditorContainer = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true, height: '590px' });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    documenteditorContainer.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
    //DocumentEditorContainer control rendering starts
    documenteditorContainer.appendTo('#DocumentEditor');
  </script>
</body>

</html>
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/es5-getting-started-cs2" %}

Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DocumentEditorContainer** component.

## Server side dependencies

The Document Editor component requires server-side interactions for the following operations:

* [Open file formats other than SFDT](./import#convert-word-documents-into-sfdt)
* [Paste with formatting](./clipboard#paste-with-formatting)
* [Restrict editing](./document-management)
* [Spell check](./spell-check)
* [Save as file formats other than SFDT and DOCX](./saving-documents/server-side-export)

>Note: If you don't require the above functionalities then you can deploy as pure client-side component without any server-side interactions.

Please refer the [example from GitHub](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) to configure the web service and set the [serviceUrl](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container#serviceurl/).

Syncfusion<sup style="font-size:70%">&reg;</sup> provides a predefined [Word Processor server docker image](https://hub.docker.com/r/syncfusion/word-processor-server) targeting ASP.NET Core 2.1 framework. You can directly pull this docker image and deploy it in server on the go. You can also create own docker image by customizing the existing [docker project from GitHub](https://github.com/SyncfusionExamples/Word-Processor-Server-Docker).

>Note: Staring from `v19.3.0.x`, we have optimized the accuracy of text size measurements such as to match Microsoft Word pagination for most Word documents. This improvement is included as default behavior along with an optional API [to disable it and retain the document pagination behavior of older versions](./how-to/disable-optimized-text-measuring).

## Frequently Asked Questions

* [How to localize the Document Editor container](./global-local).
* [How to load the document by default](./how-to/open-default-document).
* [How to customize tool bar](./how-to/customize-tool-bar).
* [How to resize Document editor component?](./how-to/resize-document-editor)
* [How to add a save button to the DocumentEditorContainer component toolbar](./how-to/add-save-button-in-toolbar)