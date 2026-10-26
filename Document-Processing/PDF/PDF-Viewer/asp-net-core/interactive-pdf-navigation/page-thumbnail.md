---
layout: post
title: Page Thumbnail in ASP.NET Core PDF Viewer | Syncfusion
description: Use page thumbnail navigation in the ASP.NET Core PDF Viewer to preview and jump to any page through a visual sidebar of page thumbnails.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Page Thumbnail Navigation in ASP.NET Core PDF Viewer

Page thumbnails provide miniature representations of pages and enable quick navigation. Use the thumbnail pane to jump to specific pages without scrolling.

## Enable thumbnail navigation

You can enable or disable thumbnail navigation using the `enableThumbnail` property. The example below shows how to enable thumbnails.

- **Property**: `enableThumbnail`
- **Type**: `boolean`
- **Default**: `true`

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

![Thumbnail pane in PDF Viewer](../images/thumbnail.png)

## See also

* [Toolbar items](../toolbar-customization)
* [Feature Modules](../feature-module)