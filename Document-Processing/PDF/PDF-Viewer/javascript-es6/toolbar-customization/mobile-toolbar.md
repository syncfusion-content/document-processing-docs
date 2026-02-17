---
layout: post
title: Mobile Toolbar Interface in TypeScript PDF Viewer control | Syncfusion
description: Learn All About the Mobile Toolbar Interface in Syncfusion TypeScript PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---
# Mobile Toolbar Interface in TypeScript PDF Viewer control

The Mobile PDF Viewer provides features for viewing, searching, annotating, and managing PDF documents on mobile devices. It exposes core tools such as search, download, bookmarking, annotation, and page organization. The desktop toolbar can also be enabled in mobile mode to expose additional actions when required.

## Mobile Mode Toolbar Configuration

In mobile mode, the toolbar is optimized for small screens and presents the most common actions for interacting with a PDF document. The following key features are available in mobile mode:

![Mobile toolbar with primary PDF interaction options](../images/mobileToolbar.png)

### Main Toolbar Options:

**OpenOption:** Tap to load a PDF document.

**SearchOption:** Access the search bar to find text within the document.

![Search bar displayed for finding text within a PDF](../images/searchOption.png)

**UndoRedoTool:** Quickly undo or redo any annotations made.

**OrganizePagesTool:** Enable or disable page organization features to modify document pages.

![Page organization interface for modifying PDF pages](../images/organizePages.png)

**AnnotationEditTool:** Activate or deactivate annotation editing to add or modify annotations.

![Annotation editing toolbar allowing users to add, edit, or delete annotations on a PDF](../images/editAnnotation.png)

N> In mobile mode, the annotation toolbar is displayed at the bottom of the viewer.

### More Options Menu:
When you open the "more options" menu, you will see additional actions such as:

**DownloadOption:** Tap to download the currently opened PDF document.

**BookmarkOption:** Allows you to view bookmarks within the document.

![More options menu showing additional actions like download and bookmark](../images/more-options.png)

## Enabling Desktop Mode in Mobile

The desktop toolbar can be enabled on mobile devices by setting the `enableDesktopMode` option. Enabling this option exposes desktop-style toolbar actions in the mobile PDF Viewer.

### Steps to Enable Desktop Mode:

**Step 1:** Set `enableDesktopMode` to true in the component configuration.

**Step 2:** The viewer will use the desktop toolbar layout, granting access to additional actions and controls.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.enableDesktopMode = true;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.enableDesktopMode = true;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Enable Scrolling in Desktop Mode with Touch Gestures

To ensure smooth touch scrolling of documents on mobile devices when the desktop toolbar is enabled, set the `enableTextSelection` option to **false**. This disables text-selection interactions that can interfere with touch-based scrolling.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.enableDesktopMode = true;
pdfviewer.enableTextSelection = false;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.enableDesktopMode = true;
pdfviewer.enableTextSelection = false;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Print Option Not Available

The Print option is not available in mobile mode by default. Enabling the desktop toolbar on mobile via `enableDesktopMode` makes the Print option available.

### How to Use Print on Mobile:

- Set `enableDesktopMode` to true to load the desktop toolbar on mobile.
- After enabling desktop mode, the Print option appears in the toolbar and can be used to print the document from the mobile device

N> Print functionality remains unavailable in the default mobile toolbar unless desktop mode is enabled.