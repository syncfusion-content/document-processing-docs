---
layout: post
title: Find Text in JavaScript PDF Viewer control | Syncfusion
description: Learn how to configure text search using find text and run programmatic searches in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---

# Find text method in JavaScript PDF Viewer

## Find text method

Use the `findText` method to locate a string or an array of strings and return the bounding rectangles for each match. Optional parameters support case-sensitive comparisons and page scoping so you can retrieve coordinates for a single page or the entire document.

### Find and get the bounds of a text

Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter and returns matches from all pages in the document. The following code snippet shows how to get the bounds of the specified text:

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.Print,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.FormFields
);

var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#pdfViewer');
document.getElementById('textbounds').addEventListener('click', function () {
    console.log(viewer.textSearch.findText('pdf', false));
});

{% endhighlight %}
{% highlight js tabtitle="Server-backed" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.Print,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.FormFields
);

var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
});
viewer.appendTo('#pdfViewer');
document.getElementById('textbounds').addEventListener('click', function () {
    console.log(viewer.textSearch.findText('pdf', false));
});

{% endhighlight %}
{% endtabs %}

### Find and get the bounds of a text on the desired page

Searches for the specified text within the document and returns the bounding rectangles of the matched text on a specific page. The search can be case-sensitive based on the provided parameter and returns matches only from the selected page. The following code snippet shows how to retrieve bounds for the specified text on a selected page:

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.Print,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.FormFields
);

var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#pdfViewer');
document.getElementById('textbounds').addEventListener('click', function () {
    console.log(viewer.textSearch.findText('pdf', false, 7));
});

{% endhighlight %}
{% highlight js tabtitle="Server-backed" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.Print,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.FormFields
);

var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
});
viewer.appendTo('#pdfViewer');
document.getElementById('textbounds').addEventListener('click', function () {
    console.log(viewer.textSearch.findText('pdf', false, 7));
});

{% endhighlight %}
{% endtabs %}

### Find and get the bounds of the list of text
Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters and returns matches from all pages in the document where the strings were found.

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.Print,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.FormFields
);

var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#pdfViewer');
document.getElementById('textbounds').addEventListener('click', function () {
    console.log(viewer.textSearch.findText(['adobe', 'pdf'], false));
});

{% endhighlight %}
{% highlight js tabtitle="Server-backed" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.Print,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.FormFields
);

var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
});
viewer.appendTo('#pdfViewer');
document.getElementById('textbounds').addEventListener('click', function () {
    console.log(viewer.textSearch.findText(['adobe', 'pdf'], false));
});

{% endhighlight %}
{% endtabs %}

### Find and get the bounds of the list of text on desired page

Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for these search strings on that particular page where the strings were found.

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.Print,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.FormFields
);

var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#pdfViewer');
document.getElementById('textbounds').addEventListener('click', function () {
    console.log(viewer.textSearch.findText(['adobe', 'pdf'], false, 7));
});

{% endhighlight %}
{% highlight js tabtitle="Server-backed" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.Print,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.FormFields
);

var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
});
viewer.appendTo('#pdfViewer');
document.getElementById('textbounds').addEventListener('click', function () {
    console.log(viewer.textSearch.findText(['adobe', 'pdf'], false, 7));
});

{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## Find text with findTextAsync

The `findTextAsync` method is designed for performing an asynchronous text search within a PDF document. You can use it to search for a single string or multiple strings, with the ability to control case sensitivity. By default, the search is applied to all pages of the document. However, you can adjust this behavior by specifying the page number (pageIndex), which allows you to search only a specific page if needed.

### Find text with findTextAsync in TypeScript PDF Viewer

The `findTextAsync` method searches for a string or array of strings asynchronously and returns bounding rectangles for each match. Use it to locate text positions across the document or on a specific page.

Here is an example of how to use `findTextAsync`:

Example 1: Search for a single string ('pdf') case-insensitively across all pages

```html
 <button id="findText">Find Text</button>
 <button id="findTexts">Find Texts</button>
```
```ts
// ...existing code...
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch,
  ej.pdfviewer.Print,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.FormFields,
  ej.pdfviewer.FormDesigner,
  ej.pdfviewer.PageOrganizer
);

var viewer = new ej.pdfviewer.PdfViewer();
viewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
viewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
viewer.appendTo('#PdfViewer');

var findTextButton = document.getElementById('findText');
if (findTextButton) {
  findTextButton.addEventListener('click', function () {
    viewer.textSearchModule.findTextAsync('pdf', false).then(function (res) {
      console.log(res); // Logs the search result for the term 'pdf'
    });
  });
}
```
Example 2: Search for multiple strings (['pdf', 'the']) case-insensitively across all pages
```ts
var findTextButtons = document.getElementById('findTexts');
if (findTextButtons) {
  findTextButtons.addEventListener('click', function () {
    viewer.textSearchModule.findTextAsync(['pdf', 'the'], false).then(function (res) {
      console.log(res); // Logs the search result for the terms 'pdf' and 'the'
    });
  });
}
```

### Parameters

**text (string | string[]):** The text or array of texts to search for in the document.

**matchCase (boolean):** Whether the search is case-sensitive. `true` matches exact case; `false` ignores case.

**pageIndex (optional, number):** Zero-based page index to search. If omitted, searches all pages.

N> `pageIndex` is zero-based; specify `0` for the first page. Omit this parameter to search the entire document.

### Example workflow

**findTextAsync('pdf', false):**
This will search for the term "pdf" in a case-insensitive manner across all pages of the document.

**findTextAsync(['pdf', 'the'], false):**
This will search for the terms "pdf" and "the" in a case-insensitive manner across all pages of the document.

**findTextAsync('pdf', false, 0):**
This will search for the term "pdf" in a case-insensitive manner only on the first page (page 0).

**findTextAsync(['pdf', 'the'], false, 1):**
This will search for the terms "pdf" and "the" in a case-insensitive manner only on the second page (page 1).

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to/)

## See Also

[Text Search Features](./text-search-features)
[Text Search Events](./text-search-events)
[Extract Text](../how-to/extract-text-js)
[Extract Text Options](../how-to/extract-text-option-js)
[Extract Text Completed](../how-to/extract-text-completed-js)