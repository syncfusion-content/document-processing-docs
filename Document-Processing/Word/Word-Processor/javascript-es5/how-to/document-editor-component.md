---
layout: post
title: DocumentEditorContainer vs DocumentEditor in Javascript ES5 DOCX Editor
description: Learn the differences between DocumentEditorContainer and DocumentEditor in the Syncfusion Javascript (ES5) DOCX Editor and understand when and how to use the DocumentEditor component for custom document editing scenarios.
platform: document-processing
control: DocumentEditor
documentation: ug
domainurl: ##DomainURL##
---

## DocumentEditorContainer vs DocumentEditor in Javascript ES5 DOCX Editor

In this article, we explain the differences between **DocumentEditorContainer** and **DocumentEditor**, and also describe how to use the **DocumentEditor** component in the Javascript (ES5) DOCX Editor.

## Difference between DocumentEditorContainer and DocumentEditor

The **DocumentEditor** component provides a flexible foundation for creating, viewing, and editing Word documents. Unlike **DocumentEditorContainer**, this component allows you to customize the UI options based on your specific requirements.

- **DocumentEditorContainer**: A complete solution with a predefined toolbar and properties pane that provides a comprehensive document editing experience. It allows users to create, view, and edit Word documents with minimal configuration.
- **DocumentEditor**: A customizable component that provides a flexible foundation for creating, viewing, and editing Word documents. This component allows you to build a user interface based on your specific requirements.

### When to Use DocumentEditorContainer and DocumentEditor

- Choose **DocumentEditorContainer** for standard document editing scenarios (applications similar to Microsoft Word).
- Choose **DocumentEditor** for advanced or unique UI/UX requirements where customization is key.

## Adding DocumentEditor component

Add the `Div` element and initiate the DocumentEditor component in the `index.html` by using following code

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
    <div id='DocumentEditor'></div>
    <script>
        // Initialize DocumentEditor component
        var documenteditor = new ej.documenteditor.DocumentEditor({ 
            isReadOnly: false, 
            serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' 
        });

        documenteditor.acceptTab = true;

        // Enable all the built-in modules
        documenteditor.enableAllModules();
        documenteditor.pageOutline = '#E0E0E0';

        // Document editor control rendering
        documenteditor.appendTo('#DocumentEditor');
    </script>
</body>
</html>
```

> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

## See Also

* [How to customize toolbar](./customize-tool-bar)