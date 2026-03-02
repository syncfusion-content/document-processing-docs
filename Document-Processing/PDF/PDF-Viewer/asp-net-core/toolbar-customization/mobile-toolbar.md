---
layout: post
title: Mobile Toolbar in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn All About the Mobile Toolbar Interface in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---
# Mobile Toolbar Interface in ASP.NET Core PDF Viewer control

The mobile PDF Viewer provides features for viewing, searching, annotating, and managing PDF documents on mobile devices. It includes tools such as search, download, bookmarking, annotation, and page organization. The viewer can enable desktop toolbar features in mobile mode to expose a broader set of actions.

## Mobile Mode Toolbar Configuration
In mobile mode, the toolbar is optimized for small screens and presents the most common actions for interacting with a PDF document. Below are the key features available in mobile mode:

![Mobile toolbar with primary PDF interaction options](../images/mobileToolbar.png)

### Main toolbar options

**OpenOption:** Loads a PDF document.

**SearchOption:** Opens the search bar to locate text within the document.

![Search bar displayed for finding text within a PDF](../images/searchOption.png)

**UndoRedoTool:** Undoes or redoes recent annotation changes.

**OrganizePagesTool:** Toggles page organization features to modify document pages.

![Page organization interface for modifying PDF pages](../images/organizePages.png)

**AnnotationEditTool:** Enables or disables annotation editing for adding or modifying annotations.

![Annotation editing toolbar allowing users to add, edit, or delete annotations on a PDF](../images/editAnnotation.png)


N> In mobile mode, the annotation toolbar is displayed at the bottom of the viewer.

### More options menu
Opening the "more options" menu reveals additional actions such as:

**DownloadOption:** Downloads the currently opened PDF document.

**BookmarkOption:** Displays bookmarks within the document.

![More options menu showing additional actions like download and bookmark](../images/more-options.png)

## Enabling Desktop Mode in Mobile

Enable desktop mode on mobile devices by setting the `enableDesktopMode` API to `true`. Enabling desktop mode replaces the mobile toolbar with the desktop toolbar layout and exposes additional toolbar actions.

### Steps to Enable Desktop Mode:

**Step 1:** Set `enableDesktopMode` to true in the API configuration.

**Step 2:** This will replace the mobile toolbar with the desktop toolbar layout, allowing access to more actions and controls.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableDesktopMode="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableDesktopMode="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Enable Scrolling in Desktop Mode with Touch Gestures

To ensure smooth scrolling of PDF documents on a mobile device in desktop mode, enable touch gesture scrolling by setting the `enableTextSelection` option to **false**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableTextSelection="false">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableTextSelection="false">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Print Option Not Available

The Print option is not available in mobile mode by default. Enable desktop mode on mobile using the `enableDesktopMode` API to access the print option.

### How to Use Print on Mobile:

**Enable Desktop Mode:** Set `enableDesktopMode` to true to load the desktop version of the toolbar on your mobile device.

**Print Option:** Once desktop mode is enabled, the print option will be available, allowing you to print the document directly from your mobile device.

N> In mobile mode, print functionality remains unavailable unless desktop mode is enabled.