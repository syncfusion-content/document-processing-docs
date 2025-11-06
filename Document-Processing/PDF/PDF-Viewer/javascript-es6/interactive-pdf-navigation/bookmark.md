---
layout: post
title: Bookmark Navigation in TypeScript PDF Viewer | Syncfusion
description: Learn how to use bookmarks for quick navigation in the Syncfusion TypeScript PDF Viewer control, enhancing user experience and accessibility.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Bookmark navigation in TypeScript PDF Viewer control

The Bookmarks saved in PDF files are loaded and made ready for easy navigation.
You can enable/disable bookmark navigation by using the following code snippet.,

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

![Alt text](../images/bookmark.png)

To perform bookmark navigation, you can use the **goToBookmark** method. It's important to note that the **goToBookmark** method will throw an error if the specified bookmark does not exist in the PDF document.

Here is an example of how to use the **goToBookmark** method:

```
  <button id="gotobookmark">Specfic Page</button>
```

```ts
document.getElementById('gotobookmark').addEventListener('click', () => {
  viewer.bookmark.goToBookmark(x, y);
});
```

x - Specifies the pageIndex for Navigate.

y - Specifies the Y coordinates value of the Page.

Also, you can use the **getBookmarks** method to retrieve a list of all the bookmarks in a PDF document. This method returns a List of Bookmark objects, which contain information about each bookmark.

Here is an example of how to use the getBookmarks method:

```
  <button id="getBookmarks">retrieve bookmark</button>
```

```ts
document.getElementById('getBookmarks').addEventListener('click', () => {
  var getBookmarks = viewer.bookmark.getBookmarks();
  console.log(getBookmarks)
});
```

## Show or hide the bookmark panel on load

The `isBookmarkPanelOpen` property gets or sets a boolean value to show or hide the bookmark panel while loading a document. Defaults to false. You can refer to [isBookmarkPanelOpen API Documentation](https://ej2.syncfusion.com/documentation/api/pdfviewer/#isbookmarkpanelopen) for more Details

```ts
  viewer.isBookmarkPanelOpen = true;
```

## See also

* [Toolbar items](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/toolbar)
* [Feature Modules](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/feature-module)