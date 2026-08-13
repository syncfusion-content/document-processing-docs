---
layout: post
title: Set default format in DOCX editor in JavaScript (ES5) | Syncfusion
description: Learn here all about Set default format in document editor in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Set default format in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# Set default format in document editor in JavaScript (ES5) DOCX editor

You can set the default character format, paragraph format, and section format in [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor).

## Set the default character format

You can use [`setDefaultCharacterFormat`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#setdefaultcharacterformat) method to set the default character format. For example, the Document Editor's default font size is 11 and you can change it to any valid value.

The following example code illustrates how to change the default font size in the Document Editor.

```js
var container = new ej.documenteditor.DocumentEditorContainer({ height: "590px" });
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
// Default font size set to 20
container.setDefaultCharacterFormat({ fontSize: 20 });
container.appendTo('#container');
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Similarly, you can change the required [`CharacterFormatProperties`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/characterFormatProperties) default values.

The following example code illustrates how to change the other character format default values in the Document Editor.

```js
var container = new ej.documenteditor.DocumentEditorContainer({ height: "590px" });
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
// Set default value
var defaultCharacterFormat = {
    bold: false,
    italic: false,
    baselineAlignment: 'Normal',
    underline: 'None',
    fontColor: "#000000",
    fontFamily: 'Algerian',
    fontSize: 12
};
container.setDefaultCharacterFormat(defaultCharacterFormat);
container.appendTo('#container');
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Set the default paragraph format

You can use [`setDefaultParagraphFormat`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#setdefaultparagraphformat) API to set the default paragraph format. You can change the required [`ParagraphFormatProperties`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/paragraphFormatProperties) default values.

The following example code illustrates how to change the paragraph format (before spacing, line spacing, etc.) default values in the Document Editor.

```js
var container = new ej.documenteditor.DocumentEditorContainer({ height: "590px" });
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);

var defaultParagraphFormat = {
    beforeSpacing: 8,
    lineSpacing: 1.5,
    leftIndent: 24,
    textAlignment: "Center"
};
container.setDefaultParagraphFormat(defaultParagraphFormat);
container.appendTo('#container');
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Set the default section format

You can use [`setDefaultSectionFormat`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#setdefaultsectionformat) API to set the default section format. You can change the required [`SectionFormatProperties`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/sectionFormatProperties) default values.

The following example code illustrates how to change the section format (header and footer distance, page width and height, etc.) default values in the Document Editor.

```js
var container = new ej.documenteditor.DocumentEditorContainer({ height: "590px" });
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);

var defaultSectionFormat = {
    pageWidth: 500,
    pageHeight: 800,
    headerDistance: 56,
    footerDistance: 48,
    leftMargin: 24,
    rightMargin: 12,
    topMargin: 0,
    bottomMargin: 0

};
container.setDefaultSectionFormat(defaultSectionFormat);
container.appendTo('#container');
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.