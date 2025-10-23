---
layout: post
title: Navigation in ASP.NET Core Pdfviewer control | Syncfusion
description: Learn here all about Navigation in Syncfusion ASP.NET Core Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Page Thumbnail navigation

Thumbnails is the miniature representation of actual pages in PDF files. This feature displays thumbnails of the pages and allows navigation.
You can enable/disable thumbnail navigation by using the following code snippet.,

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableThumbnail(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableThumbnail(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```
{% endhighlight %}
{% endtabs %}

![Alt text](../images/thumbnail.png)

## See also

* [Toolbar items](../toolbar-customization/)
* [Feature Modules](../feature-module.md)