---
layout: post
title: Interactive Navigation in PDF Viewer | Syncfusion
description: Learn about table of content navigation and hyperlink navigation in the Syncfusion PDF Viewer control for TypeScript.
platform: document-processing
control: Navigation
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Interactive Navigation in PDF Viewer

The PDF Viewer component supports various interactive navigation features to enhance user experience. This document details two key navigation methods: table of contents and hyperlinks.

## Table of Content Navigation

Table of contents navigation allows users to quickly jump to different sections of a PDF document by clicking entries in the table of contents. The PDF Viewer automatically displays a table of contents pane if the document contains a valid table of contents.

![Table of Contents Navigation in PDF Viewer](../images/toc.png)

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
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

const viewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  enableHyperlink: false // Disables all hyperlinks
});
viewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

const viewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/',
  enableHyperlink: false // Disables all hyperlinks
});
viewer.appendTo('#PdfViewer');
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
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

const viewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  hyperlinkOpenState: 'NewTab' // Opens links in a new browser tab
});
viewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

const viewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/',
  hyperlinkOpenState: 'NewTab' // Opens links in a new browser tab
});
viewer.appendTo('#PdfViewer');
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
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

const viewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  // Event handler for hyperlink click
  hyperlinkClick: (args) => {
    // Log the URL of the clicked hyperlink
    console.log('Hyperlink Clicked:', args.hyperlink);
    
    // To prevent the default navigation behavior, set args.cancel to true
    // args.cancel = true;
  },
  
  // Event handler for mouse hover over a hyperlink
  hyperlinkMouseOver: (args) => {
    // Log the href of the hyperlink element when the mouse hovers over it
    console.log('Mouse is over hyperlink:', args.hyperlinkElement.href);
  }
});

// Append the PDF Viewer to the HTML element
viewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

const viewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  // Set the service URL for server-backed PDF processing
  serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/',
  
  // Event handler for hyperlink click
  hyperlinkClick: (args) => {
    // Log the URL of the clicked hyperlink
    console.log('Hyperlink Clicked:', args.hyperlink);
    
    // To prevent the default navigation behavior, set args.cancel to true
    // args.cancel = true;
  },
  
  // Event handler for mouse hover over a hyperlink
  hyperlinkMouseOver: (args) => {
    // Log the href of the hyperlink element when the mouse hovers over it
    console.log('Mouse is over hyperlink:', args.hyperlinkElement.href);
  }
});

// Append the PDF Viewer to the HTML element
viewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## See Also

- [Toolbar Customization](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/toolbar-customization/custom-toolbar/)
- [Feature Modules](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/feature-module/)
- [Bookmark Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/interactive-pdf-navigation/bookmark-navigation/)
- [Page Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/interactive-pdf-navigation/page-navigation/)
