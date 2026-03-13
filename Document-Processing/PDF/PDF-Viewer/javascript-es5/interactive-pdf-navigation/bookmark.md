---
layout: post
title: Bookmark Navigation in JavaScript PDF Viewer control | Syncfusion
description: Learn how to use bookmarks for quick navigation in the Syncfusion JavaScript PDF Viewer control, enhancing user experience and accessibility.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Bookmark navigation in JavaScript PDF Viewer

Bookmarks embedded in PDF files are loaded and exposed for quick navigation. Use the following code snippet to enable or disable bookmark navigation.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  enableBookmark: true,
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  enableBookmark: true,
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
});
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

![Bookmarks panel](../images/bookmark.png)

![Bookmarks panel and navigation](../images/bookmark.png)

To navigate to a bookmark programmatically, use the **goToBookmark** method. The method throws an error if the specified bookmark does not exist in the document.

Example usage is shown below; ensure the viewer instance variable used in these snippets is the same across your integration (for example `pdfviewer`).

```
  <button id="gotobookmark">Specfic Page</button>
```

```js
document.getElementById('gotobookmark').addEventListener('click', () => {
  viewer.bookmark.goToBookmark(x, y);
});
```


- `x` — The page index to navigate to (zero-based).
- `y` — The vertical coordinate (Y offset) on the page to position the viewport.

Use the **getBookmarks** method to retrieve all bookmarks in a document. It returns a list of bookmark objects containing properties such as `title`, `pageIndex`, and `destination`. A typical integration maps the returned list into a clickable navigation menu that calls `goToBookmark` with the selected bookmark's `pageIndex` and `destination` values.

Example usage is shown below.

```
  <button id="getBookmarks">retrieve bookmark</button>
```

```js
document.getElementById('getBookmarks').addEventListener('click', () => {
  var getBookmarks = viewer.bookmark.getBookmarks();
  console.log(getBookmarks)
});
```

## See also

* [Toolbar items](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/toolbar)
* [Feature modules](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/feature-module)