---
layout: post
title: Show the bookmark pane in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to display the bookmark pane programmatically in the Syncfusion ASP.NET Core PDF Viewer by enabling the enableBookmark property.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Display the bookmark pane in ASP.NET Core PDF Viewer

Enable automatic display of the bookmark navigation pane by setting the [`enableBookmark`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer#enablebookmark) property to `true`. Use bookmarks to provide quick navigation for documents with chapters, sections, or hierarchical content organization.

N> By default, `enableBookmark` is set to `true`, so the bookmark pane is visible unless explicitly disabled.

Follow these steps to enable the bookmark pane:

**Step 1:** Follow the [ASP.NET Core PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to set up the required scripts, styles, and controller endpoints.

**Step 2:** Set `enableBookmark` to `true` in the Razor markup:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableBookmark="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableBookmark="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

[View sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Show%20Bookmark)
