---
layout: post
title: Change author name using annotation settings in JavaScript PDF Viewer | Syncfusion
description: Learn how to change the author name and related annotation settings using the annotationSettings API in the JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Change author name using annotation settings in JavaScript PDF Viewer

The PDF Viewer allows customizing individual annotation settings through the `annotationSettings` API, which exposes properties common to all annotations. See the annotationSettings API reference for full details.

API: `annotationSettings` (refer to the API reference)

| Property Name | Data type & Default Value | Description |
|---|---|---|
| author | String ("Guest") | Specifies the author of the annotation. |
| minWidth | Number (0) | Specifies the minimum width of the annotation. |
| maxWidth | Number (0) | Specifies the maximum width of the annotation. |
| minHeight | Number (0) | Specifies the minimum height of the annotation. |
| maxHeight | Number (0) | Specifies the maximum height of the annotation. |
| isLock | Boolean (false) | Specifies whether the annotation is locked. If true, the annotation cannot be selected. |
| isPrint | Boolean (true) | Specifies whether the annotation is included in print actions. |
| isDownload | Boolean (true) | Specifies whether the annotation is included in download actions. |
| Free Text Settings |
| allowOnlyTextInput | Boolean (false) | Specifies text-only mode for free text annotations. If true, moving or resizing is disabled. |

Change the author name and other properties using the `annotationSettings` API as shown below.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields } from "../src/index";

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields);
let viewer: PdfViewer = new PdfViewer();
viewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);
viewer.annotationSettings = { author: 'syncfusion', minHeight: 30, maxHeight: 500, minWidth: 30, maxWidth: 500, isLock: false, isPrint: true, isDownload: true  };
viewer.freeTextSettings = { allowTextOnly : true };
viewer.appendTo("#pdfViewer");
```
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields } from "../src/index";

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields);
let viewer: PdfViewer = new PdfViewer();
viewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
viewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);
viewer.annotationSettings = { author: 'syncfusion', minHeight: 30, maxHeight: 500, minWidth: 30, maxWidth: 500, isLock: false, isPrint: true, isDownload: true  };
viewer.freeTextSettings = { allowTextOnly : true };
viewer.appendTo("#pdfViewer");
```
{% endhighlight %}
{% endtabs %}