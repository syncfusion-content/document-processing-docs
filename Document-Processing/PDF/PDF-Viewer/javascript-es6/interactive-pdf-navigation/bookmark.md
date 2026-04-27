---
layout: post
title: Bookmark Navigation in TypeScript PDF Viewer | Syncfusion
description: Learn how to use bookmarks for quick navigation in the Syncfusion TypeScript PDF Viewer control, enhancing user experience and accessibility.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Bookmark navigation in TypeScript PDF Viewer

Bookmarks embedded in PDF files are loaded and exposed for quick navigation. Use the following code snippet to enable or disable bookmark navigation.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}


import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({enableBookmark: true, documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({enableBookmark: true, documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'});
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

![Bookmarks panel and navigation](../images/bookmark.png)

To navigate to a bookmark programmatically, use the **goToBookmark** method. The method throws an error if the specified bookmark does not exist in the document.

Example usage is shown below; ensure the viewer instance variable used in these snippets is the same across your integration (for example `pdfviewer`).

```
  <button id="gotobookmark">Specfic Page</button>
```

```ts
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

```ts
document.getElementById('getBookmarks').addEventListener('click', () => {
  var getBookmarks = viewer.bookmark.getBookmarks();
  console.log(getBookmarks)
});
```

## See also

* [Toolbar items](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/toolbar)
* [Feature Modules](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/feature-module)