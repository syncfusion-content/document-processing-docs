---
layout: post
title: Underline Text in React PDF Viewer | Syncfusion
description: Learn how to enable, apply, customize, and manage Underline annotations in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Underline Annotation (Text Markup) in React PDF Viewer

This guide explains how to **enable**, **apply**, **customize**, and **manage** *Underline* text markup annotations in the Syncfusion **React PDF Viewer**. You can underline text using the toolbar or context menu, programmatically invoke underline mode, customize default settings, handle events, and export the PDF with annotations.

---

## Enable Underline in the Viewer
To enable Underline annotations, inject the following modules into the React PDF Viewer:
- [**Annotation**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#annotation)
- [**TextSelection**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#textselection)
- [**Toolbar**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#toolbar)

This minimal setup enables UI interactions like selection and underlining.

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

---

## Apply Underline Annotation

### Apply Underline Using the Toolbar
1. Select the text you want to underline.
2. Click the **Underline** icon in the annotation toolbar.
   - If **Pan Mode** is active, the viewer automatically switches to **Text Selection** mode.

![Underline tool](../../../javascript-es6/annotations/annotation-images/underline-tool.gif)

---

### Apply underline using Context Menu
Right-click a selected text region → select **Underline**.

![Underline Context](../../../javascript-es6/annotations/annotation-images/underline-context.gif)

To customize menu items, refer to [**Customize Context Menu**](../../context-menu/custom-context-menu) documentation.

---

### Enable Underline Mode
Switch the viewer into underline mode using `setAnnotationMode('Underline')`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function enableUnderline() {
  const viewer = document.getElementById('container').ej2_instances[0];
  viewer.annotation.setAnnotationMode('Underline');
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

#### Exit Underline Mode
Switch back to normal mode using:

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function disableUnderlineMode() {
  const viewer = document.getElementById('container').ej2_instances[0];
  viewer.annotation.setAnnotationMode('None');
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

### Add Underline Programmatically
Use [`addAnnotation()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#addannotation) to insert an underline at a specific location.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function addUnderline() {
  const viewer = document.getElementById('container').ej2_instances[0];
  viewer.annotation.addAnnotation('Underline', {
    bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
    pageNumber: 1
  });
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## Customize Underline Appearance
Configure default underline settings such as **color**, **opacity**, and **author** using [`underlineSettings`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#underlinesettings).

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
<PdfViewerComponent
  id="container"
  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
  resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  height="650px"
  underlineSettings={{
    author: 'Guest User',
    subject: 'Important',
    color: '#00aa00',
    opacity: 0.9
  }}
>
  <Inject services={[Toolbar, Annotation, TextSelection]} />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## Manage Underline (Edit, Delete, Comment)

### Edit Underline

#### Edit Underline Appearance (UI)
Use the annotation toolbar:
- **Edit Color** tool  
![Edit color](../../../javascript-es6/images/edit_color.png)
- **Edit Opacity** slider  
![Edit opacity](../../../javascript-es6/images/edit_opacity.png)

---

#### Edit Underline Programmatically
Modify an existing underline programmatically using `editAnnotation()`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function editUnderlineProgrammatically() {
  const viewer = document.getElementById('container').ej2_instances[0];
  for (let annot of viewer.annotationCollection) {
    if (annot.textMarkupAnnotationType === 'Underline') {
      annot.color = '#0000ff';
      annot.opacity = 0.8;
      viewer.annotation.editAnnotation(annot);
      break;
    }
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

### Delete Underline
The PDF Viewer supports deleting existing annotations through both the UI and API. For detailed behavior, supported deletion workflows, and API reference, see [**Delete Annotation**](../remove-annotations).

---

### Comments
Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to underline annotations. It provides a dedicated UI for reviewing feedback, tracking conversations, and collaborating on annotation–related notes within the PDF Viewer.

---

## Set properties while adding Individual Annotation
Set properties for individual annotations when adding them programmatically by supplying fields on each `addAnnotation('Underline', …)` call.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function addMultipleUnderlines() {
  const viewer = document.getElementById('container').ej2_instances[0];
  // Underline 1
  viewer.annotation.addAnnotation('Underline', {
    bounds: [{ x: 100, y: 150, width: 320, height: 14 }],
    pageNumber: 1,
    author: 'User 1',
    color: '#ffff00',
    opacity: 0.9
  });
  // Underline 2
  viewer.annotation.addAnnotation('Underline', {
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

---

## Disable TextMarkup Annotation
Disable text markup annotations (including underline) using the [`enableTextMarkupAnnotation`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#enabletextmarkupannotation) property.

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

---

## Handle Underline Events
The PDF viewer provides annotation life-cycle events that notify when underline annotations are added, modified, selected, or removed. For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event).

---

## Export and Import
The PDF Viewer supports exporting and importing annotations, allowing you to save annotations as a separate file or load existing annotations back into the viewer. For full details on supported formats and steps to export or import annotations, see [**Export and Import Annotation**](../export-import-annotations)

---

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
