---
layout: post
title: Programmatic Support for Organize Pages in JavaScript PDF Viewer control | Syncfusion
description: Learn here all about Programmatic Support for Organize Pages in Syncfusion JavaScript PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Programmatic Support for Organize Pages in JavaScript PDF Viewer control

The PDF Viewer exposes programmatic APIs to manage page organization. Use these APIs to enable the page organizer, open or close the organizer dialog, and customize page-management behaviors from application code.

## Enable or disable the page organizer

Enable the page organizer using the `enablePageOrganizer` property. The default value is `true`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner, ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
pdfviewer.enablePageOrganizer = true;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner, ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
pdfviewer.enablePageOrganizer = true;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Open the page organizer on document load

Control whether the page organizer opens automatically when a document loads using the `isPageOrganizerOpen` property. The default value is `false`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner, ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
pdfviewer.isPageOrganizerOpen = true;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner, ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
pdfviewer.isPageOrganizerOpen = true;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Customize page organizer settings

Use the `pageOrganizerSettings` property to configure page-management actions and thumbnail zoom behavior. Settings include toggles for deleting, inserting, rotating, copying, importing, and rearranging pages, and controls for thumbnail zoom. By default, all actions are enabled, and standard zoom settings are applied.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner, ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
pdfviewer.pageOrganizerSettings = {canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true, canImport: true,  imageZoom: 1, showImageZoomingSlider: true, imageZoomMin: 1, imageZoomMax: 5}
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner, ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
pdfviewer.pageOrganizerSettings = {canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true, canImport: true,  imageZoom: 1, showImageZoomingSlider: true, imageZoomMin: 1, imageZoomMax: 5}
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Open the page organizer dialog

Call the `openPageOrganizer` method on the viewer's `pageOrganizer` API to programmatically open the organizer dialog and access page-management tools.

```html
<button id="openPageOrganizer">Open PageOrganizer Pane</button>
```

```js
document.getElementById('openPageOrganizer').addEventListener('click', function () {
  viewer.pageOrganizer.openPageOrganizer();
});
```

## Close the page organizer dialog

Call the `closePageOrganizer` method on the viewer's `pageOrganizer` API to programmatically close the organizer dialog.

```html
<button id="closePageOrganizer">Close PageOrganizer Pane</button>
```

```js
document.getElementById('closePageOrganizer').addEventListener('click', function () {
  viewer.pageOrganizer.closePageOrganizer();
});
```
