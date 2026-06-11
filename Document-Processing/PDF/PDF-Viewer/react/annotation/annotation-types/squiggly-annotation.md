---
layout: post
title: Squiggly Annotation (Text Markup) in React PDF Viewer | Syncfusion
description: Learn how to enable, apply, customize, and manage Squiggly annotations in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Squiggly Annotation (Text Markup) in React PDF Viewer

This guide explains how to **enable**, **apply**, **customize**, and **manage** *Squiggly* text markup annotations in the Syncfusion **React PDF Viewer**.
You can add squiggly underlines from the toolbar or context menu, programmatically invoke squiggly mode, customize default settings, handle events, and export the PDF with annotations.

## Enable Squiggly in the Viewer
To enable Squiggly annotations, inject the following modules into the React PDF Viewer:

- [**Annotation**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#annotation)
- [**TextSelection**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#textselection)
- [**Toolbar**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#toolbar)

This minimal setup enables UI interactions like selection and squiggly markup.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent,
  Inject,
  Toolbar,
  Annotation,
  TextSelection
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Annotation, TextSelection]} />
    </PdfViewerComponent>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Add Squiggly Annotation

### Add Squiggly Using the Toolbar

1. Select the text you want to annotate.
2. Click the **Squiggly** icon in the annotation toolbar.
   - If **Pan Mode** is active, the viewer automatically switches to **Text Selection** mode.
![Squiggly tool](../../../javascript-es6/annotations/annotation-images/squiggle-tool.gif)

### Add Squiggly Using the Context Menu

Right-click a selected text region → select **Squiggly**.
![Squiggly context](../../../javascript-es6/annotations/annotation-images/squiggle-context.gif)
To customize menu items, refer to [**Customize Context Menu**](../../context-menu/custom-context-menu) documentation.

### Enable Squiggly Mode
Switch the viewer into squiggly mode using `setAnnotationMode('Squiggly')`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function enableSquiggly() {
  const viewer = document.getElementById('container').ej2_instances[0];
  viewer.annotation.setAnnotationMode('Squiggly');
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

#### Exit Squiggly Mode
Switch back to normal mode using:

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function disableSquigglyMode() {
  const viewer = document.getElementById('container').ej2_instances[0];
  viewer.annotation.setAnnotationMode('None');
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Add Squiggly Programmatically
Use [`addAnnotation()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#addannotation) to insert a squiggly at a specific location.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function addSquiggly() {
  const viewer = document.getElementById('container').ej2_instances[0];
  viewer.annotation.addAnnotation('Squiggly', {
    bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
    pageNumber: 1
  });
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Customize Squiggly Appearance
Configure default squiggly settings such as **color**, **opacity**, and **author** using [`squigglySettings`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#squigglysettings).

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
<PdfViewerComponent
  id="container"
  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
  resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  height="650px"
  squigglySettings={{
    author: 'Guest User',
    subject: 'Corrections',
    color: '#00ff00',
    opacity: 0.9
  }}
>
  <Inject services={[Toolbar, Annotation, TextSelection]} />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Manage Squiggly (Edit, Delete, Comment)

### Edit Squiggly

#### Edit Squiggly Appearance (UI)

Use the annotation toolbar:
- **Edit Color** tool  
![Edit color](../../../javascript-es6/images/edit_color.png)
- **Edit Opacity** slider  
![Edit opacity](../../../javascript-es6/images/edit_opacity.png)

#### Edit Squiggly Programmatically
Modify an existing squiggly programmatically using `editAnnotation()`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function editSquigglyProgrammatically() {
  const viewer = document.getElementById('container').ej2_instances[0];
  for (let annot of viewer.annotationCollection) {
    if (annot.textMarkupAnnotationType === 'Squiggly') {
      annot.color = '#ff0000';
      annot.opacity = 0.8;
      viewer.annotation.editAnnotation(annot);
      break;
    }
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Delete Squiggly
The PDF Viewer supports deleting existing annotations through both the UI and API.
For detailed behavior, supported deletion workflows, and API reference, see [**Delete Annotation**](../remove-annotations)

### Comments
Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to squiggly annotations.
It provides a dedicated UI for reviewing feedback, tracking conversations, and collaborating on annotation‑related notes within the PDF Viewer.

## Set properties while adding Individual Annotation
Set properties for individual squiggly annotations at the time of creation using the [`addAnnotation`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#addannotation) API.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function addMultipleSquigglies() {
  const viewer = document.getElementById('container').ej2_instances[0];
  // Squiggly 1
  viewer.annotation.addAnnotation('Squiggly', {
    bounds: [{ x: 100, y: 150, width: 320, height: 14 }],
    pageNumber: 1,
    author: 'User 1',
    color: '#ffff00',
    opacity: 0.9
  });
  // Squiggly 2
  viewer.annotation.addAnnotation('Squiggly', {
    bounds: [{ x: 110, y: 220, width: 300, height: 14 }],
    pageNumber: 1,
    author: 'User 2',
    color: '#ff1010',
    opacity: 0.9
  });
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Disable TextMarkup Annotation
Disable text markup annotations (including squiggly) using the [`enableTextMarkupAnnotation`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#enabletextmarkupannotation) property.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
<PdfViewerComponent
  id="container"
  enableTextMarkupAnnotation={false}
  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
  resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  style={{ height: '650px' }}
>
  <Inject services={[Toolbar, Annotation, TextSelection]} />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Handle Squiggly Events
The PDF viewer provides annotation life‑cycle events that notify when squiggly annotations are added, modified, selected, or removed.
For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event)

## Export and Import

The PDF Viewer supports exporting and importing annotations, allowing you to save annotations as a separate file or load existing annotations back into the viewer.
For full details on supported formats and steps to export or import annotations, see [**Export and Import annotations**](../export-import-annotations)

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
