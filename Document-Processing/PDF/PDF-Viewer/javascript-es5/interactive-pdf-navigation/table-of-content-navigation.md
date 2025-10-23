---
layout: post
title: Table of contents navigation in PDF Viewer | Syncfusion
description: Learn how to navigate PDFs using the table of contents in the Syncfusion PDF Viewer control for JavaScript.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Table of contents navigation in PDF Viewer

The PDF Viewer supports a built-in table of contents (TOC) experience to help users jump to sections defined by the document’s bookmarks or outline.

## Table of contents navigation

Use the table of contents to quickly navigate to headings and sections defined in the PDF. When the document contains a bookmarks/outline structure, the viewer exposes those entries in the table of contents (Bookmarks) pane. Selecting an entry navigates directly to the mapped destination. If the PDF does not include a table of contents, the pane will not list any entries.

![Table of contents pane in PDF Viewer](../images/toc.png)

## Hyperlink Navigation

The PDF Viewer provides robust support for hyperlink navigation within PDF documents. This allows users to interact with embedded links, which can point to external websites or other locations within the same document. This section covers how to configure hyperlink behavior, including enabling or disabling links, controlling how they open, and responding to hyperlink-related events.

![Hyperlink Navigation in PDF Viewer](../images/link.png)

### Enabling and Disabling Hyperlinks

By default, the PDF Viewer automatically detects and enables all hyperlinks present in a loaded document. This behavior can be controlled using the `enableHyperlink` property.

- **Property**: `enableHyperlink`
- **Type**: `boolean`
- **Default**: `true`

When `enableHyperlink` is set to `false`, all hyperlinks in the document become non-interactive. This means that users cannot click them, and no hyperlink-related events will be triggered.

The following example demonstrates how to disable hyperlink navigation:

{% tabs %}
{% highlight js tabtitle="Standalone" %}


ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification,
ej.pdfviewer.Navigation, ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation,
ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  enableHyperlink: false // Disables all hyperlinks
});

pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification,
ej.pdfviewer.Navigation, ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation,
ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  enableHyperlink: false // Disables all hyperlinks
});

pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

> Note: Disabling hyperlinks only affects the viewer's behavior and does not alter the original PDF document.
### Controlling Link Behavior

The `hyperlinkOpenState` property determines how external URLs are opened when a hyperlink is clicked.

- **Property**: `hyperlinkOpenState`
- **Type**: `'CurrentTab' | 'NewTab'`
- **Default**: `'CurrentTab'`

By default, links open in the same browser tab (`CurrentTab`). To open links in a new tab, set this property to `'NewTab'`. This is useful for preserving the user's current viewing session.

The following example configures hyperlinks to open in a new tab:

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification,
ej.pdfviewer.Navigation, ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation,
ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  hyperlinkOpenState: 'NewTab' // Opens links in a new browser tab
});

pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification,
ej.pdfviewer.Navigation, ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation,
ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  hyperlinkOpenState: 'NewTab' // Opens links in a new browser tab
});

pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

### Handling Hyperlink Events

The PDF Viewer exposes events that allow for monitoring and customizing hyperlink interactions.

#### hyperlinkClick

The `hyperlinkClick` event is triggered when a user clicks a hyperlink. This event can be used to implement custom logic, such as validating a URL or preventing the default navigation behavior.

The event arguments provide the following information:
- `hyperlink`: The URL of the clicked hyperlink.
- `cancel`: A boolean that, when set to `true`, prevents the default navigation action.

#### hyperlinkMouseOver

The `hyperlinkMouseOver` event is triggered when the mouse pointer hovers over a hyperlink. This can be used to display custom tooltips or other visual feedback.

The event arguments include:
- `hyperlinkElement`: The HTML anchor element (`<a>`) corresponding to the hyperlink.

The following example demonstrates how to use these events:

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification,
ej.pdfviewer.Navigation, ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation,
ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  // Event handler for hyperlink click
  hyperlinkClick: function (args) {
    // Log the URL of the clicked hyperlink
    console.log('Hyperlink Clicked:', args.hyperlink);

    // To prevent the default navigation behavior, set args.cancel to true
    // args.cancel = true;
  },

  // Event handler for mouse hover over a hyperlink
  hyperlinkMouseOver: function (args) {
    // Log the href of the hyperlink element when the mouse hovers over it
    if (args && args.hyperlinkElement && args.hyperlinkElement.href) {
      console.log('Mouse is over hyperlink:', args.hyperlinkElement.href);
    }
  }
});

// Append the PDF Viewer to the HTML element
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification,
ej.pdfviewer.Navigation, ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation,
ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/',
  // Event handler for hyperlink click
  hyperlinkClick: function (args) {
    // Log the URL of the clicked hyperlink
    console.log('Hyperlink Clicked:', args.hyperlink);

    // To prevent the default navigation behavior, set args.cancel to true
    // args.cancel = true;
  },

  // Event handler for mouse hover over a hyperlink
  hyperlinkMouseOver: function (args) {
    // Log the href of the hyperlink element when the mouse hovers over it
    if (args && args.hyperlinkElement && args.hyperlinkElement.href) {
      console.log('Mouse is over hyperlink:', args.hyperlinkElement.href);
    }
  }
});

// Append the PDF Viewer to the HTML element
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## See also

- [Bookmark navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/interactive-pdf-navigation/bookmark-navigation/)
- [Page navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/interactive-pdf-navigation/page-navigation/)
- [Page thumbnail navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/interactive-pdf-navigation/page-thumbnail-navigation/)
