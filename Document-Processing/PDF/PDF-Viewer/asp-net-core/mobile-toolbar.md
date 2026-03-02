---
layout: post
title: Mobile toolbar interface in ASP.NET Core PDF Viewer | Syncfusion
description: Learn about the mobile toolbar interface in the Syncfusion ASP.NET Core PDF Viewer, including main options, more menu actions, and enabling desktop mode on mobile.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Mobile Toolbar Interface in ASP.NET Core PDF Viewer

The mobile PDF Viewer provides various features for viewing, searching, annotating, and managing PDF documents on mobile devices. It includes essential tools such as search, download, bookmarking, annotation, and page organization. Users can enable desktop toolbar features in mobile mode to access a more extensive set of actions.

## Mobile Mode Toolbar Configuration

In mobile mode, the toolbar is optimized for small screens and presents the most common actions for working with PDF documents. Key features available in mobile mode include:

![Mobile toolbar with primary PDF interaction options](./images/mobileToolbar.png)

### Main Toolbar Options

**OpenOption:** Tap to load a PDF document.

**SearchOption:** Access the search bar to find text within the document.

![Search bar for finding text within a PDF](./images/searchOption.png)

**UndoRedoTool:** Quickly undo or redo annotations.

**OrganizePagesTool:** Enable or disable page organization features to modify document pages.

![Page organization interface for modifying PDF pages](./images/organizePages.png)

**AnnotationEditTool:** Activate or deactivate annotation editing to add or modify annotations.

![Annotation editing toolbar for adding, editing, or deleting PDF annotations](./images/editAnnotation.png)

N> In mobile mode, the annotation toolbar is displayed at the bottom of the viewer.

### More Options Menu

The More options menu provides additional actions such as:

**DownloadOption:** Tap to download the currently opened PDF document.

**BookmarkOption:** View bookmarks within the document.

![More options menu showing additional actions like download and bookmark](./images/more-options.png)

## Enable Desktop Mode on Mobile

The desktop toolbar can be enabled on mobile devices using the `enableDesktopMode` API. This brings desktop-like features to the mobile PDF Viewer, providing access to additional toolbar actions typically available on desktop platforms.

### Steps to Enable Desktop Mode

- Set `enableDesktopMode` to true in the configuration.
- The desktop toolbar layout replaces the mobile toolbar, allowing access to more actions and controls.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableDesktopMode="true">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableDesktopMode="true">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

## Enable Scrolling in Desktop Mode with Touch Gestures

Smooth scrolling of PDF documents on mobile devices in desktop mode can be enabled by setting `enableTextSelection` to false.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableDesktopMode="true"
                   enableTextSelection="false">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableDesktopMode="true"
                   enableTextSelection="false">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

## Print Option Availability

The Print option is not available in mobile mode by default. To use print on mobile devices, enable the desktop toolbar using the `enableDesktopMode` API.

### How to Use Print on Mobile

- Enable desktop mode: Set `enableDesktopMode` to true to load the desktop toolbar on a mobile device.
- **Print option**: Once desktop mode is enabled, the print option becomes available.

N> Print is unavailable in mobile mode unless desktop mode is enabled.
