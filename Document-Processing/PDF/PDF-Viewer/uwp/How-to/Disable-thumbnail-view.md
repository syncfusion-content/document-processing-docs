---
layout: post
title: How to Disable thumbnail view in UWP PDF Viewer | Syncfusion
description: Learn how to disable thumbnail view in uwp pdf viewer in Syncfusion UWP PDF Viewer with examples and implementation details.
platform: document-processing
control: PDF viewer
documentation: ug
---

# How to Disable thumbnail view in UWP PDF Viewer
The SfPdfViewer control allows you to enable and disable thumbnail view that is opened when the document is magnified below 100%. The following code illustrates the same.
{% tabs %}
{% highlight c# %}
pdfViewer.IsThumbnailViewEnabled = false;
{% endhighlight %}
{% highlight vbnet %}
pdfViewer.IsThumbnailViewEnabled = False
{% endhighlight %}
{% endtabs %}

## See Also
- [Viewing PDF](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/viewing-pdf)
- [Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/working-with-page-navigation)
- [Custom toolbar](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/creating-custom-toolbar)