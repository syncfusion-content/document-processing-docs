---
layout: post
title: Find Text in TypeScript PDF Viewer control | Syncfusion
description: Learn how to configure text search using find text and run programmatic searches in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---

# Find text method in TypeScript PDF Viewer

Use the `findText` method to locate a string or an array of strings and return the bounding rectangles for each match. Optional parameters support case-sensitive comparisons and page scoping so you can retrieve coordinates for a single page or the entire document.

## Find and get the bounds of a text

Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter. It returns the bounding rectangles for all pages in the document where the text was found. The following code snippet shows how to get the bounds of the specified text:
The following code snippet shows how to get the bounds of the specified text:

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib",
});
viewer.appendTo("#pdfViewer");
document.getElementById('textbounds')?.addEventListener('click', function() {
    console.log(viewer.textSearch.findText('pdf', false));
});

{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
});
viewer.appendTo("#pdfViewer");
document.getElementById('textbounds')?.addEventListener('click', function() {
    console.log(viewer.textSearch.findText('pdf', false));
});

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

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib",
});
viewer.appendTo("#pdfViewer");
document.getElementById('textbounds')?.addEventListener('click', function() {
        console.log(viewer.textSearch.findText('pdf', false, 7));
});

{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
});
viewer.appendTo("#pdfViewer");
document.getElementById('textbounds')?.addEventListener('click', function() {
        console.log(viewer.textSearch.findText('pdf', false, 7));
});

{% endhighlight %}
{% endtabs %}

## Find and get the bounds of the list of text
Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for all pages in the document where the strings were found.

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib",
});
viewer.appendTo("#pdfViewer");
document.getElementById('textbounds')?.addEventListener('click', function() {
    console.log(viewer.textSearch.findText(['adobe', 'pdf'], false));
});

{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
});
viewer.appendTo("#pdfViewer");
document.getElementById('textbounds')?.addEventListener('click', function() {
    console.log(viewer.textSearch.findText(['adobe', 'pdf'], false));
});

{% endhighlight %}
{% endtabs %}

## Find and get the bounds of the list of text on desired page

Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for these search strings on that particular page where the strings were found.

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib",
});
viewer.appendTo("#pdfViewer");
document.getElementById('textbounds')?.addEventListener('click', function() {
        console.log(viewer.textSearch.findText(['adobe', 'pdf'], false, 7));
    });

{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
});
viewer.appendTo("#pdfViewer");
document.getElementById('textbounds')?.addEventListener('click', function() {
        console.log(viewer.textSearch.findText(['adobe', 'pdf'], false, 7));
    });

{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)

## See Also

[Text Search Features](./text-search-features)
[Text Search Events](./text-search-events)
[Extract Text](../how-to/extract-text-ts)
[Extract Text Options](../how-to/extract-text-option-ts)
[Extract Text Completed](../how-to/extract-text-completed-ts)