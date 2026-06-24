---
layout: post
title: Page Navigation in JavaScript PDF Viewer control | Syncfusion
description: Explore how to navigate pages in the Syncfusion JavaScript PDF Viewer control using built-in options for seamless document viewing.
platform: document-processing
control: PDF Viewer
documentation: ##DomainURL##
---

# Page navigation in JavaScript PDF Viewer

The JavaScript PDF Viewer supports internal and external navigation.

## Toolbar page navigation options

The default PDF Viewer toolbar provides the following navigation options:

- [**Go to page**](https://ej2.syncfusion.com/documentation/api/pdfviewer/navigation/#gotopage) — Navigate to a specific page.
- [**Show next page**](https://ej2.syncfusion.com/documentation/api/pdfviewer/navigation/#gotonextpage) — Navigate to the next page.
- [**Show previous page**](https://ej2.syncfusion.com/documentation/api/pdfviewer/navigation/#gotopreviouspage) — Navigate to the previous page.
- [**Show first page**](https://ej2.syncfusion.com/documentation/api/pdfviewer/navigation/#gotofirstpage) — Navigate to the first page.
- [**Show last page**](https://ej2.syncfusion.com/documentation/api/pdfviewer/navigation/#gotolastpage) — Navigate to the last page.

```html
<html>
  <head>
    <script src="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2.min.js" type="text/javascript"></script>
    <link href="https://cdn.syncfusion.com/ej2/31.2.2/tailwind3.css" rel="stylesheet" />
  </head>
  <body>
    <div class="container">
      <div id="pdfViewer" style="height: 640px; width: 100%"></div>
    </div>
  </body>
</html>
```

Use the following code snippet to enable or disable page navigation.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  enableNavigation: true,
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
});

pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
  enableNavigation: true,
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
});

ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection
);

pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

![Page navigation toolbar in PDF Viewer](../images/navigation.png)

Also, you can programmatically perform page navigation options as follows.

```html
<html>
  <head>
    <script src="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2.min.js" type="text/javascript"></script>
    <link href="https://cdn.syncfusion.com/ej2/31.2.2/tailwind3.css" rel="stylesheet" />
  </head>
  <body>
    <div class="container">
      <button id="goToFirstPage">Go To First Page</button>
      <button id="goToLastPage">Go To last Page</button>
      <button id="goToNextPage">Go To Next Page</button>
      <button id="goToPage">Go To Page 4</button>
      <button id="goToPreviousPage">Go To Previous Page</button>
      <div id="pdfViewer" style="height: 640px; width: 100%"></div>
    </div>
  </body>
</html>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}

var viewer = new ej.pdfviewer.PdfViewer ({
  documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
  resourceUrl:'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});

ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.ThumbnailView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print,
  ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.Annotation,  ej.pdfviewer.FormFields,
  ej.pdfviewer.FormDesigner,ej.pdfviewer.PageOrganizer
);

viewer.appendTo('#pdfViewer');

// Go To First Page
document.getElementById('goToFirstPage').addEventListener('click', () => {
  viewer.navigation.goToFirstPage();
});
// Go To Last Page
document.getElementById('goToLastPage').addEventListener('click', () => {
  viewer.navigation.goToLastPage();
});
// Go To Next Page
document.getElementById('goToNextPage').addEventListener('click', () => {
  viewer.navigation.goToNextPage();
});
// Go To Page
document.getElementById('goToPage').addEventListener('click', () => {
  viewer.navigation.goToPage(4);
});
// Go To Previous Page
document.getElementById('goToPreviousPage').addEventListener('click', () => {
  viewer.navigation.goToPreviousPage();
});

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

var viewer = new ej.pdfviewer.PdfViewer ({
    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    resourceUrl:'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});

ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.ThumbnailView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print,
  ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.Annotation,  ej.pdfviewer.FormFields,
  ej.pdfviewer.FormDesigner, ej.pdfviewer.PageOrganizer
);

viewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
viewer.appendTo('#pdfViewer');

// Go To First Page
document.getElementById('goToFirstPage').addEventListener('click', () => {
viewer.navigation.goToFirstPage();
});
// Go To Last Page
document.getElementById('goToLastPage').addEventListener('click', () => {
viewer.navigation.goToLastPage();
});
// Go To Next Page
document.getElementById('goToNextPage').addEventListener('click', () => {
viewer.navigation.goToNextPage();
});
// Go To Page
document.getElementById('goToPage').addEventListener('click', () => {
viewer.navigation.goToPage(4);
});
// Go To Previous Page
document.getElementById('goToPreviousPage').addEventListener('click', () => {
viewer.navigation.goToPreviousPage();
});

{% endhighlight %}
{% endtabs %}

Find the sample [here](https://stackblitz.com/edit/kpzmjpf7?file=index.js) to perform the page navigation options programmatically.

## See also

* [Toolbar items](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/toolbar)
* [Feature modules](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/feature-module)