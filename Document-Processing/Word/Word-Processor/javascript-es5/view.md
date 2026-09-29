---
layout: post
title: View in JavaScript DOCX Editor | Syncfusion
description: View in JavaScript DOCX Editor enables web layout, ruler display, and heading navigation to enhance document readability and navigation.
platform: document-processing
control: View 
documentation: ug
domainurl: ##DomainURL##
---
# View in JavaScript DOCX Editor

## Web Layout

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) allows you to change the view to web layout and print layout using the [`layoutType`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/layoutType).

```ts
let docEdit: DocumentEditor = new DocumentEditor({ layoutType: 'Continuous'});
```

N> The default value of [`layoutType`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#layouttype) in the DocumentEditor component is [`Pages`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/layoutType).

### Online Demo

Explore how to view Word documents in web layout using the JavaScript (ES5) DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/material3/document-editor/web-layout.html).

## Ruler

Use the ruler to set specific margins, tab stops, or indentations within a document to ensure consistent formatting in DOCX Editor.

The following example illustrates how to enable the ruler in DOCX Editor.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/ruler-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/ruler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/ruler-cs1" %}

### Online Demo

Explore how to use the ruler in the JavaScript (ES5) DOCX Editor for working with Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/material3/document-editor/ruler.html).

## Navigation Pane

Using the heading navigation pane allows users to swiftly navigate documents by heading, enhancing their ability to move through the document efficiently.

The following example illustrates how to enable the heading navigation pane in DOCX Editor.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px',
  // Enable the heading navigation pane in Document Editor.
  documentEditorSettings: {
    showNavigationPane: true,
  }
});
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.appendTo('#container');
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer to and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

### Online Demo

Explore how to navigate through headings in Word documents using the JavaScript (ES5) DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/material3/document-editor/heading-navigation.html).
