---
layout: post
title: Find Text in TypeScript PDF Viewer control | Syncfusion
description: Learn how to configure text search using find text and run programmatic searches in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---

# Find text method
Use the `findText` method to locate a string or an array of strings and return the bounding rectangles for each match. Optional parameters support case-sensitive comparisons and page scoping so you can retrieve coordinates for a single page or the entire document.

## Find and get the bounds of a text
Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter. It returns the bounding rectangles for all pages in the document where the text was found. The following code snippet shows how to get the bounds of the specified text:
The following code snippet shows how to get the bounds of the specified text:

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('textbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText('pdf', false));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('textbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText('pdf', false));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% endtabs %}

## Find and get the bounds of a text on the desired page
Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter. It returns the bounding rectangles for that page in the document where the text was found. The following code snippet shows how to retrieve bounds for the specified text on a selected page:
The following code snippet shows how to retrieve bounds for the specified text on a selected page:

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('textbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText('pdf', false, 7));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('textbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText('pdf', false, 7));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% endtabs %}

## Find and get the bounds of the list of text
Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for all pages in the document where the strings were found.

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('textbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText(['adobe', 'pdf'], false));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('listTextbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText(['adobe', 'pdf'], false));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% endtabs %}

## Find and get the bounds of the list of text on desired page
Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for these search strings on that particular page where the strings were found.

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('textbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText(['adobe', 'pdf'], false, 7));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('listTextbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText(['adobe', 'pdf'], false, 7));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% endtabs %}
