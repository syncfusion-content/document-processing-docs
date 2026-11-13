---
layout: post
title: Resize and Move Annotations in React PDF Viewer | Syncfusion
description: Resize and move annotations in the React PDF Viewer using the built-in UI and programmatically update the annotation bounds and page number dynamically.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Resize and Move Annotations in React PDF Viewer

Annotations can be resized and moved after they are added to a document. The PDF Viewer supports these operations both from the built-in UI and programmatically through the [`editAnnotation`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation#editannotation) API.

## Resize annotations

### Resize via UI

1. Add an annotation to the page, or select an existing annotation.
2. When the annotation is selected, resize handles appear on its corners and edges.
3. Drag a handle to change the width and height of the annotation.

![Resize annotations in PDF Viewer UI](../images/resize-annotations-pdf-viewer.gif)

### Resize programmatically

The size of an annotation is defined by its `bounds`. To resize an annotation programmatically, update the `width` and `height` of the respective annotation `bounds` and call the `editAnnotation` API to apply the change dynamically.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
const resizeAnnotation = () => {
  //get recently added annotation
  const annotation =
    viewer.annotationCollection[viewer.annotationCollection.length - 1];
  //programmatically resize the annotation
  annotation.bounds.width += 100;
  annotation.bounds.height += 100;
  viewer.annotation.editAnnotation(annotation);
};
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Move annotations

### Move via UI

1. Select an annotation.
2. Drag the annotation to reposition it within the same page, or drag it to a different page in the document.

![Move annotations between pages in PDF Viewer UI](../images/move-annotations-between-pages.gif)

### Move programmatically

To move an annotation programmatically, update the relevant property of the annotation and call the `editAnnotation` API.

- To move an annotation to a **different page**, update the `pageNumber` property of the annotation.
- To move an annotation **within the same page**, update the `x` and `y` values of the annotation `bounds`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
const moveAnnotation = () => {
  //get recently added annotation
  const annotation =
    viewer.annotationCollection[viewer.annotationCollection.length - 1];
  //programmatically change page number of annotation
  annotation.pageNumber += 1;
  viewer.annotation.editAnnotation(annotation);
};
{% endraw %}
{% endhighlight %}
{% endtabs %}

To move an annotation to a new position on the same page, update the `bounds` of the annotation instead.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
const moveAnnotationInPage = () => {
  //get recently added annotation
  const annotation =
    viewer.annotationCollection[viewer.annotationCollection.length - 1];
  // Update the annotation's coordinates (using left/top or x/y depending on the bounds object)
  annotation.bounds.left += 50;
  annotation.bounds.top += 50;
  viewer.annotation.editAnnotation(annotation);
};
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Sample

The following sample shows both the resize and move operations with a single viewer instance.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';

function Default() {
  let viewer;
  const moveAnnotation = () => {
    //get recently added annotation
    const annotation =
      viewer.annotationCollection[viewer.annotationCollection.length - 1];
    //programmatically change page number of annotation
    annotation.pageNumber += 1;
    viewer.annotation.editAnnotation(annotation);
  };
  const resizeAnnotation = () => {
    //get recently added annotation
    const annotation =
      viewer.annotationCollection[viewer.annotationCollection.length - 1];
    //programmatically resize the annotation
    annotation.bounds.width += 100;
    annotation.bounds.height += 100;
    viewer.annotation.editAnnotation(annotation);
  };
  return (
    <div>
      <div className="control-section">
        <button onClick={moveAnnotation}>Move annotation</button>
        <button onClick={resizeAnnotation}>Resize annotation</button>
        {/* Render the PDF Viewer */}
        <PdfViewerComponent
          ref={(scope) => {
            viewer = scope;
          }}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: 'calc(100vh - 230px)' }}
        >
          <Inject
            services={[
              Toolbar,
              Magnification,
              Navigation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch,
              Annotation,
              FormFields,
              FormDesigner,
              PageOrganizer,
            ]}
          />
        </PdfViewerComponent>
      </div>
    </div>
  );
}
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

N> The `editAnnotation` API requires an existing annotation. Add an annotation to the document before calling the resize or move methods.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Customize Annotation](../annotation/customize-annotation)
- [Remove Annotation](../annotation/delete-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation Permission](../annotation/annotation-permission)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)
