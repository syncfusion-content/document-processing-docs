---
layout: post
title: Navigation in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to use page, bookmark, thumbnail, hyperlink, and table of contents navigation in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Navigation

The ASP.NET Core PDF Viewer supports internal and external navigation options.

## Toolbar page navigation options

The default PDF Viewer toolbar contains the following navigation options:

* **Go to page** – Navigate to a specific page in the PDF document.
* **Show next page** – Navigate to the next page.
* **Show previous page** – Navigate to the previous page.
* **Show first page** – Navigate to the first page.
* **Show last page** – Navigate to the last page.

Enable or disable page navigation using the following example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableNavigation="false">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableNavigation="false">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}


![Toolbar navigation options in the PDF Viewer](./images/navigation.png)

## Bookmark navigation

Bookmarks saved in PDF files are loaded and made available for easy navigation.
Enable or disable bookmark navigation using the following example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableBookmark="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableBookmark="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

![Bookmark panel in the PDF Viewer](./images/bookmark.png)

## Thumbnail navigation

Thumbnails are miniature representations of pages in a PDF file. This feature displays thumbnails of pages and allows quick navigation.
Enable or disable thumbnail navigation using the following example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableThumbnail="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableThumbnail="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

![Thumbnail panel in the PDF Viewer](./images/thumbnail.png)

## Hyperlink navigation

Hyperlink navigation enables navigation to URLs (website links) within a PDF file.

![Hyperlink navigation in the PDF Viewer](./images/link.png)

## Table of contents navigation

Table of contents navigation allows users to navigate to different parts of a PDF that are listed in the document’s table of contents.

Enable or disable hyperlink navigation using the following example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableHyperlink="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableHyperlink="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

Change the hyperlink open state using the following example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
            style="height:600px"
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            hyperlinkOpenState="@(Syncfusion.EJ2.PdfViewer.LinkTarget.NewTab)">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
            style="height:600px"
            serviceUrl="/api/PdfViewer"
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            hyperlinkOpenState="@(Syncfusion.EJ2.PdfViewer.LinkTarget.NewTab)">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

![Table of contents panel in the PDF Viewer](./images/toc.png)

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)