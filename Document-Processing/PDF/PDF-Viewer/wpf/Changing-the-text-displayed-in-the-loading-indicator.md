---
layout: post
title: Change the text displayed in WPF Pdf Viewer | Syncfusion&reg;
description: Learn how to change the text displayed in the loading indicator in the Syncfusion<sup>&reg;</sup> WPF Pdf Viewer control.
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