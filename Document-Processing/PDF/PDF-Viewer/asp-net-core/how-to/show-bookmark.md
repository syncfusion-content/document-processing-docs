---
layout: post
title: Show the bookmark pane in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to display the bookmark pane programmatically in the Syncfusion ASP.NET Core PDF Viewer by enabling the enableBookmark property.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Show bookmark

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer can display the bookmark pane automatically by setting the [`enableBookmark`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#enablebookmark) property to `true`. Use this option when documents rely on bookmark navigation for quick access to chapters or tagged sections.

N> The default value of `enableBookmark` is `true`, so the bookmark pane remains available unless it is explicitly disabled.

Follow these steps to show the bookmark pane:

**Step 1:** Create a PDF Viewer sample by using the [ASP.NET Core getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) so that the required scripts, styles, and controller endpoints are configured.

**Step 2:** Enable the bookmark pane in the Razor markup, as shown in the following samples.

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

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Show%20Bookmark)
