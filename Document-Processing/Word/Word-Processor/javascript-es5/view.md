---
layout: post
title: View in JavaScript (ES5) Document editor control | Syncfusion
description: Learn here all about View in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: View 
documentation: ug
domainurl: ##DomainURL##
---
# View in JavaScript (ES5) Document editor control

## Web layout

DocumentEditor allows you to change the view to web layout and print using the [`layoutType`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/layoutType/).

```ts
let docEdit: DocumentEditor = new DocumentEditor({ layoutType: 'Continuous'});
```

>Note: Default value of [`layoutType`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#layouttype) in DocumentEditor component is [`Pages`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/layoutType/).

## Ruler

Using ruler we can refer to setting specific margins, tab stops, or indentations within a document to ensure consistent formatting in Document Editor.

The following example illustrates how to enable ruler in Document Editor

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/document-editor/ruler-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/document-editor/ruler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/ruler-cs1" %}

## Navigation Pane

Using the heading navigation pane allows users to swiftly navigate documents by heading, enhancing their ability to move through the document efficiently.

The following example illustrates how to enable heading navigation pane in Document Editor

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true,height: '590px',
// Enable heading navigation pane in document editor
  documentEditorSettings: {
    showNavigationPane: true,
  }
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.appendTo('#container');
```
> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.