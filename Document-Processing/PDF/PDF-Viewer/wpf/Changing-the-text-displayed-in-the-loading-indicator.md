---
layout: post
title: Change the text displayed in WPF Pdf Viewer | Syncfusion
description: Change loading indicator text in Syncfusion WPF PDF Viewer for custom UI messages. Learn text customization and configuration.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Change the text displayed in the loading indicator in WPF Pdf Viewer

PDF Viewer allows you to change the text displayed in the loading indicator. The following code example illustrates the same.

{% tabs %}
{% highlight C# %}

// Changing the text displayed in the loading indicator
pdfviewer1.LoadingIndicator.LoadingMessage = "Document loading";
{% endhighlight %}




{% highlight vbnet %}

'Changing the text displayed in the loading indicator
pdfviewer1.LoadingIndicator.LoadingMessage = "Document loading"

{% endhighlight %}
{% endtabs %}