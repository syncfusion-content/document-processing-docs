---
layout: post
title: ErrorOccured Event in WinForm PDFViewer | Syncfusion
description: The ErrorOccurred event in PdfViewerControl enables applications to detect, handle, and respond to PDF loading and processing errors.
platform: document-processing
control: PdfViewerControl
documentation: ug
---

# ErrorOccured Event in WinForm PDFViewer

PDF Viewer provides support to identify the error using the ErrorOccurred Event. The [ErrorOccurred](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_Forms_PdfViewer_PdfViewerControl_ErrorOccurred) event in the PdfViewerControl is triggered whenever an error occurs within the control. This event provides an opportunity to handle errors effectively by allowing developers to log the details or display appropriate messages to users when an issue arises within the [PdfViewerControl](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.PdfViewerControl.html).

{% tabs %}
{% highlight c# %}

public Form1()
{
    InitializeComponent();
    PdfViewer.ErrorOccurred += PdfViewer_ErrorOccurred;
}

private void PdfViewer_ErrorOccurred(object sender, ErrorOccurredEventArgs e)
{
    // Log error message
    Console.WriteLine("Error occurred in PdfViewerControl: " + e.Message);

    // Display error message to the user
    MessageBox.Show("An error occurred while viewing the PDF: " + e.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
}

{% endhighlight %}
{% endtabs %}