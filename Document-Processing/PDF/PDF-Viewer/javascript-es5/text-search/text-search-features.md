---
layout: post
title: Text search Features in JavaScript PDF Viewer control | Syncfusion
description: Learn how to configure text search and run programmatic searches in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---
# Text search Features in JavaScript PDF Viewer control

The text search feature in the PDF Viewer locates and highlights matching content within a document. Enable or disable this capability with the following configuration.

![Text Search](../../javascript-es6/images/textSearch.gif)

N> The text search functionality requires importing TextSearch and adding it to PdfViewer.Inject(..., TextSearch). Otherwise, the search UI and APIs are not accessible.

## Text search features in UI

### Real-time search suggestions while typing
Typing in the search box immediately surfaces suggestions that match the entered text. The list refreshes on every keystroke so users can quickly jump to likely results without completing the entire term.

![Search suggestion popup](../images/SingleSearchPopup.png)

### Select search suggestions from the popup
After typing in the search box, the popup lists relevant matches. Selecting an item jumps directly to the corresponding occurrence in the PDF.

![Search results from popup](../images/SearchResultFromPopup.png)

### Dynamic Text Search for Large PDF Documents
Dynamic text search is enabled during the initial loading of the document when the document text collection has not yet been fully loaded in the background.

![Dynamic text search in progress](../../javascript-es6/images/dynamic-textSearch.gif)

### Search text with the Match Case option
Enable the Match Case checkbox to limit results to case-sensitive matches. Navigation commands then step through each exact match in sequence.

![Match case navigation](../images/SearchNavigationMatchCase.png)

### Search text without Match Case
Leave the Match Case option cleared to highlight every occurrence of the query, regardless of capitalization, and navigate through each result.

![Search navigation without match case](../images/SearchNavigationNoMatchCase.png)

### Search a list of words with Match Any Word
Enable Match Any Word to split the query into separate words. The popup proposes matches for each word and highlights them throughout the document.

![Match any word search results](../images/MultiSearchPopup.png)

## Text Search Programmatically

### Enable or Disable Text Search 

Use the following snippet to enable or disable text search features

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.23/material.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as PdfViewer -->
    <div id="PdfViewer"></div>
</body>

</html>

```

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.Pdfviewer.TextSearch
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    enableTextSearch: true,
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}


ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.Pdfviewer.TextSearch
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    enableTextSearch: true,
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

### Programmatic search with settings

While the PDF Viewer toolbar offers an interactive search experience, you can also trigger and customize searches programmatically by calling the `searchText` method with tailored options.

#### Using `searchText`

Use the `searchText` method to start a search with optional filters that control case sensitivity and whole-word behavior.

```js
// searchText(text: string, isMatchCase?: boolean)
pdfviewer.textSearch.searchText('search text', false);
```

- `isMatchCase` (optional boolean): Determines whether the search should be case-sensitive.

#### Match Case

Set the `isMatchCase` parameter to `true` to perform a case-sensitive search that mirrors the Match Case option in the search panel.

```js
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

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

// Later, to search programmatically:
// This will only find instances of "PDF" in uppercase.
pdfviewer.textSearch.searchText('PDF', true);
```

### Search Text Programmatically with the SearchText API

The following text search methods are available in the PDF Viewer,

* [**Search text**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch#searchtext): Searches the target text in the PDF document and highlights each occurrence in the pages.
* [**Search next**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch#searchnext): Searches the next occurrence of the current query from the active match.
* [**Search previous**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch#searchprevious): Searches the previous occurrence of the current query from the active match.
* [**Cancel text search**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch#canceltextsearch): Cancels the current text search and removes the highlighted occurrences from the PDF Viewer.

![Alt text](../images/search.png)

Use the following code snippet to implement text search using the SearchText API

```html
  <!-- Search UI -->
<div style="margin-top: 8px;">
  <input id="searchBox" type="text" placeholder="Find text" />
  <label><input id="chkMatchCase" type="checkbox" /> Match case</label>
  <label><input id="chkWholeWord" type="checkbox" /> Whole word</label>

  <button id="btnSearch">Search</button>
  <button id="btnNext">Next</button>
  <button id="btnPrev">Previous</button>
  <button id="btnCancel">Cancel</button>
</div>
<!-- Viewer host -->
<div id="pdfViewer" style="height: 700px;"></div>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch
);

var viewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

viewer.appendTo('#pdfViewer');

// --- Programmatic Text Search API ---

// Searches the target text in the PDF and highlights all matches.
function searchText(query, matchCase) {
  if (!query || !query.trim()) return;
  viewer.textSearch.searchText(query, !!matchCase);
}

// Navigates to the next occurrence relative to the current active match.
function searchNext() {
  viewer.textSearch.searchNext();
}

// Navigates to the previous occurrence relative to the current active match.
function searchPrevious() {
  viewer.textSearch.searchPrevious();
}

// Cancels the current search and clears all highlights.
function cancelTextSearch() {
  viewer.textSearch.cancelTextSearch();
}

// Example: wire up to buttons/inputs
var input = document.getElementById('searchBox');
var btnSearch = document.getElementById('btnSearch');
if (btnSearch) {
  btnSearch.addEventListener('click', function () {
    var val = input ? input.value : '';
    searchText(val, false);
  });
}
var btnNext = document.getElementById('btnNext');
if (btnNext) {
  btnNext.addEventListener('click', function () { searchNext(); });
}
var btnPrev = document.getElementById('btnPrev');
if (btnPrev) {
  btnPrev.addEventListener('click', function () { searchPrevious(); });
}
var btnCancel = document.getElementById('btnCancel');
if (btnCancel) {
  btnCancel.addEventListener('click', function () { cancelTextSearch(); });
}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch
);

var viewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'
});

viewer.appendTo('#pdfViewer');

// --- Programmatic Text Search API ---

// Searches the target text in the PDF and highlights all matches.
function searchText(query, matchCase) {
  if (!query || !query.trim()) return;
  viewer.textSearch.searchText(query, !!matchCase);
}

// Navigates to the next occurrence relative to the current active match.
function searchNext() {
  viewer.textSearch.searchNext();
}

// Navigates to the previous occurrence relative to the current active match.
function searchPrevious() {
  viewer.textSearch.searchPrevious();
}

// Cancels the current search and clears all highlights.
function cancelTextSearch() {
  viewer.textSearch.cancelTextSearch();
}

// Example: wire up to buttons/inputs
var input = document.getElementById('searchBox');
var btnSearch = document.getElementById('btnSearch');
if (btnSearch) {
  btnSearch.addEventListener('click', function () {
    var val = input ? input.value : '';
    searchText(val, false);
  });
}
var btnNext = document.getElementById('btnNext');
if (btnNext) {
  btnNext.addEventListener('click', function () { searchNext(); });
}
var btnPrev = document.getElementById('btnPrev');
if (btnPrev) {
  btnPrev.addEventListener('click', function () { searchPrevious(); });
}
var btnCancel = document.getElementById('btnCancel');
if (btnCancel) {
  btnCancel.addEventListener('click', function () { cancelTextSearch(); });
}
{% endhighlight %}
{% endtabs %}


[View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## See Also

[Find Text](./find-text)
[Text Search Events](./text-search-events)
[Extract Text](../how-to/extract-text-js)
[Extract Text Options](../how-to/extract-text-option-js)
[Extract Text Completed](../how-to/extract-text-completed-js)
