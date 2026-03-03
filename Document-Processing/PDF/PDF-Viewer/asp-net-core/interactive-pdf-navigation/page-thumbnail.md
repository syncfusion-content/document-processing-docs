---
layout: post
title: Page Thumbnail Navigation in ASP.NET Core PDF Viewer | Syncfusion
description: Enable and use page thumbnails for navigation in ASP.NET Core PDF Viewer. Learn how to enable thumbnails and use thumbnail navigation APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Page Thumbnail navigation in ASP.NET Core PDF Viewer

Page thumbnails provide miniature representations of pages and enable quick navigation. Use the thumbnail pane to jump to specific pages without scrolling.

## Enable thumbnail navigation

You can enable or disable thumbnail navigation using the `enableThumbnail` property. The example below shows how to enable thumbnails.

**Example: Enable thumbnails**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableThumbnail="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableThumbnail="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

![Alt text](../images/thumbnail.png)

## See also

* [Toolbar items](../toolbar-customization)
* [Feature Modules](../feature-module)