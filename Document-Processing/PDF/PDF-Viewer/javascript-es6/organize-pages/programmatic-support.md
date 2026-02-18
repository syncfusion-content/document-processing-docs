---
layout: post
title: Programmatic Support for Organize Pages in TypeScript PDF Viewer control | Syncfusion
description: Learn here all about Programmatic Support for Organize Pages in Syncfusion TypeScript PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Programmatic Support for Organize Pages in TypeScript PDF Viewer control

The PDF Viewer exposes programmatic APIs to manage page organization. Use these APIs to enable the page organizer, open or close the organizer dialog, and customize page-management behaviors from application code.

## Enable or disable the page organizer

Enable the page organizer using the `enablePageOrganizer` property. The default value is `true`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.enablePageOrganizer = true;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.enablePageOrganizer = true;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Open the page organizer on document load

Control whether the page organizer opens automatically when a document loads using the `isPageOrganizerOpen` property. The default value is `false`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.isPageOrganizerOpen = true;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.isPageOrganizerOpen = true;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Customize page organizer settings

Use the `pageOrganizerSettings` property to configure page-management actions and thumbnail zoom behavior. Settings include toggles for deleting, inserting, rotating, copying, importing, and rearranging pages, and controls for thumbnail zoom. By default, all actions are enabled, and standard zoom settings are applied.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.pageOrganizerSettings = {canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true, canImport: true,  imageZoom: 1, showImageZoomingSlider: true, imageZoomMin: 1, imageZoomMax: 5}
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.pageOrganizerSettings = {canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true, canImport: true,  imageZoom: 1, showImageZoomingSlider: true, imageZoomMin: 1, imageZoomMax: 5};
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Open the page organizer dialog

Call the `openPageOrganizer` method on the viewer's `pageOrganizer` API to programmatically open the organizer dialog and access page-management tools.

```html
<button id="openPageOrganizer">Open PageOrganizer Pane</button>
```

```ts
document.getElementById('openPageOrganizer').addEventListener('click', function () {
  viewer.pageOrganizer.openPageOrganizer();
});
```

## Close the page organizer dialog

Call the `closePageOrganizer` method on the viewer's `pageOrganizer` API to programmatically close the organizer dialog.

```html
<button id="closePageOrganizer">Close PageOrganizer Pane</button>
```

```ts
document.getElementById('closePageOrganizer').addEventListener('click', function () {
  viewer.pageOrganizer.closePageOrganizer();
});
```
