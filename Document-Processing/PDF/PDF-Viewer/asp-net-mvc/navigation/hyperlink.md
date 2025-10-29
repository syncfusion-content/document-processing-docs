---
layout: post
title: Hyperlink navigation in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to configure hyperlink navigation, including table-of-contents entries, in the Syncfusion PDF Viewer control for ASP.NET MVC.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Hyperlink navigation in ASP.NET MVC PDF Viewer

The PDF Viewer consolidates hyperlink-driven experiences, including inline links and table-of-contents (TOC) entries that target in-document destinations. These elements surface contextual entry points so users can jump directly to relevant sections without manual scrolling.

> **Note:** The table of contents pane and hyperlink interactions rely on the same navigation infrastructure. When these capabilities are enabled, the PDF Viewer automatically surfaces TOC entries and clickable links defined in the PDF.

## Required modules

Inject the following modules to enable both navigation experiences: `Toolbar`, `Magnification`, `Navigation`, `LinkAnnotation`, `BookmarkView`, `TextSelection`, `ThumbnailView`, and optionally `Annotation`.

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
{% highlight html tabtitle="Standalone" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableHyperlink(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableHyperlink(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```
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
{% highlight html tabtitle="Standalone" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").HyperlinkOpenState(Syncfusion.EJ2.PdfViewer.LinkTarget.NewTab).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).HyperlinkOpenState(Syncfusion.EJ2.PdfViewer.LinkTarget.NewTab).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```
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
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").HyperlinkClick("hyperlinkClicked").HyperlinkMouseOver("hyperlinkMouseOver").Render()
</div>

<script>
    function hyperlinkClicked(args) {
        // Log the URL of the clicked hyperlink
        console.log('Hyperlink Clicked:', args.hyperlink);

        // To prevent the default navigation behavior, set args.cancel to true
        // args.cancel = true;
    }

    function hyperlinkMouseOver(args) {
        // Log the URL of the hyperlink being hovered over
        console.log('Hyperlink Mouse Over:', args.hyperlinkElement.href);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").HyperlinkClick("hyperlinkClicked").HyperlinkMouseOver("hyperlinkMouseOver").Render()
</div>

<script>
    function hyperlinkClicked(args) {
        // Log the URL of the clicked hyperlink
        console.log('Hyperlink Clicked:', args.hyperlink);

        // To prevent the default navigation behavior, set args.cancel to true
        // args.cancel = true;
    }

    function hyperlinkMouseOver(args) {
        // Log the URL of the hyperlink being hovered over
        console.log('Hyperlink Mouse Over:', args.hyperlinkElement.href);
    }
</script>

{% endhighlight %}
{% endtabs %}

## See also

- [Bookmark navigation](./bookmark)
- [Page navigation](./page)
- [Page thumbnail navigation](./page-thumbnail)
