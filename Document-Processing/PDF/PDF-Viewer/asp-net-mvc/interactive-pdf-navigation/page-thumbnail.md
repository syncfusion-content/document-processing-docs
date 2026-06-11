---
layout: post
title: Thumbnail Navigation in ASP.NET Core PDF Viewer control | Syncfusion
description: Discover how to navigate PDF pages using thumbnails in the Syncfusion ASP.NET MVC PDF Viewer control for a visual and intuitive experience.
platform: document-processing
control: PDF Viewer
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

* [Toolbar items](../toolbar-customization)
* [Feature Modules](../feature-module)