---
layout: post
title: Link Annotation in JavaScript (ES6) PDF Viewer | Syncfusion
description: Enable, add, customize, and manage link annotations in the JavaScript (ES6) PDF Viewer for internal navigation and external URLs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Link Annotation in JavaScript (ES6) PDF Viewer

This guide explains how to enable, add, customize, and manage link annotations in the Syncfusion JavaScript (ES6) PDF Viewer. Link annotations can navigate to a page in the same document or open an external URL in the browser.

![Link annotation overview](../../../react/images/link-annotation.png)

## Enable Link Annotation in the Viewer

Inject the required modules to enable link annotations and the annotation toolbar.

- [**Annotation**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#annotation)
- [**LinkAnnotation**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#linkannotation)
- [**Toolbar**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#toolbar)
- [**Magnification**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/magnification)
- [**Navigation**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/navigation)

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer
);

const viewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
  hyperlinkOpenState: 'NewTab'
});
viewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

> The `hyperlinkOpenState` property controls how external URLs open when a user clicks a link. Use `NewTab` to open the URL in a new browser tab, or `NewWindow` to open it in a separate browser window.

## Add Link Annotation

### Add Link Using the Toolbar

1. Click the **Add Link** button from the annotation toolbar.
2. Choose whether the link points to a **URL** or a **Page**.
3. Enter the target URL or page number.
4. Set the properties such as **stroke color** and **stroke thickness**.
5. Click **Insert** to create the link annotation.

![Add Link dialog URL](../../../react/images/add-link.png)

![Add Link dialog Page](../../../react/images/page-link.png)

### Add Link Annotation Programmatically

Use the `addAnnotation()` API to create a link annotation at a specific location.

#### Add Internal Page Link

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
const viewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#PdfViewer');

viewer.annotation.addAnnotation('Link', {
  offset: { x: 200, y: 480 },
  pageNumber: 1,
  width: 150,
  height: 75,
  destinationPageIndex: 4,
  destinationLocation: { x: 100, y: 200 },
  zoomValue: 4,
  strokeColor: '#1433e3'
});
{% endhighlight %}
{% endtabs %}

This adds a link rectangle that navigates to page index 4 and zooms to the specified location when clicked.

#### Add External URL Link

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
viewer.annotation.addAnnotation('Link', {
  offset: { x: 450, y: 480 },
  pageNumber: 1,
  width: 150,
  height: 75,
  url: 'https://www.syncfusion.com',
  strokeColor: '#FF0000'
});
{% endhighlight %}
{% endtabs %}

## Customize Link Appearance

Configure how external links open using the viewer property `hyperlinkOpenState`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
const viewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
  hyperlinkOpenState: 'NewWindow'
});
viewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## Manage Link Annotations

### Edit Link Annotation in the UI

After a link annotation is inserted, users can:

- Right-click the selected link annotation to open the context menu
- Choose **Select** to move the rectangle
- Drag the resize handles to adjust size
- Right-click and choose **Edit** to change the destination page or URL

![Resize link annotation](../../../react/images/resize-link.png)

![Edit Link Annotation Context Menu](../../../react/images/edit-link.png)

### Edit Link Annotation Programmatically

Use `editAnnotation()` to update an existing link annotation.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
for (let i = 0; i < viewer.annotationCollection.length; i++) {
  const linkAnnotation = viewer.annotationCollection[i];
  if (linkAnnotation.subject === 'Link') {
    linkAnnotation.strokeColor = '#1fcbd4';
    linkAnnotation.thickness = 2;
    linkAnnotation.bounds = { left: 100, top: 100, width: 100, height: 100 };
    linkAnnotation.url = 'https://www.google.com';
    linkAnnotation.destinationPageIndex = 3;
    linkAnnotation.destinationLocation = { x: 300, y: 300 };
    linkAnnotation.zoomValue = 1;
    viewer.annotation.editAnnotation(linkAnnotation);
    break;
  }
}
{% endhighlight %}
{% endtabs %}

### Delete Link Annotation

The PDF Viewer supports deleting link annotations through both the UI and API.

![Delete link annotation](../../../react/images/delete-link.png)

#### Delete a link annotation by ID

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
const linkAnnotation = viewer.annotationCollection.find((item) => item.subject === 'Link');

if (linkAnnotation) {
  viewer.annotation.deleteAnnotationById(linkAnnotation.annotationId);
}
{% endhighlight %}
{% endtabs %}

## Set Properties While Adding an Individual Link

You can set link properties directly when calling `addAnnotation('Link', ...)`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
viewer.annotation.addAnnotation('Link', {
  offset: { x: 100, y: 150 },
  pageNumber: 1,
  width: 180,
  height: 60,
  url: 'https://www.syncfusion.com',
  strokeColor: '#ff0000'
});

viewer.annotation.addAnnotation('Link', {
  offset: { x: 320, y: 180 },
  pageNumber: 1,
  width: 150,
  height: 60,
  destinationPageIndex: 2,
  destinationLocation: { x: 100, y: 200 },
  zoomValue: 2,
  strokeColor: '#1433e3'
});
{% endhighlight %}
{% endtabs %}

## Link Annotation Events

The PDF Viewer raises annotation life cycle events that can be used to monitor when link annotations are added, modified, selected, or removed. For the complete event list, see [Annotation Events](../annotation-event).

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Annotations/Link%20Annotation)

## See Also

- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Hyperlink Navigation](../../interactive-pdf-navigation/hyperlink)
- [Annotation Events](../annotation-event)
- [Export and Import Annotation](../export-import/export-annotation)
- [Delete Annotation](../delete-annotation)
