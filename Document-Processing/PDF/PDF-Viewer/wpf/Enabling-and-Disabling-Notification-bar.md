---
layout: post
title: Enable/Disable Notification bar in WPF Pdf Viewer | Syncfusion&reg;
description: Learn about Enable and Disable Notification bar support in Syncfusion<sup>&reg;</sup>; WPF Pdf Viewer control and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Enable and Disable Notification bar in WPF Pdf Viewer

Notification bar is a part of the PDF Viewer that displays a notification when an unexpected error occurs in the PDF Viewer control. You can suppress the display of the Notification bar by setting the [EnableNotificationBar](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_EnableNotificationBar) property to `false` (default value is `true`). The following code example illustrates the same.

{% tabs %}
{% highlight C# %}

using Syncfusion.Windows.PdfViewer;

//Initialize PDF Viewer.
PdfViewerControl pdfViewer1 = new PdfViewerControl();
//Load the PDF.
pdfViewer1.Load("Sample.pdf");

// Hiding the notification bar of the PDF Viewer
pdfViewer1.EnableNotificationBar = false;
{% endhighlight %}


{% highlight vbnet %}

Imports Syncfusion.Windows.PdfViewer

'Initialize PDF Viewer.
Private pdfViewer1 As New PdfViewerControl()
'Load the PDF.
pdfViewer1.Load("Sample.pdf")

' Hiding the notification bar of the PDF Viewer
pdfViewer1.EnableNotificationBar = False

{% endhighlight %}
{% endtabs %}