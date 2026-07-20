---
layout: post
title: Working with Hyperlinks in Windows Forms PDF Viewer | Syncfusion&reg;
description: Learn about Working with Hyperlinks support in Syncfusion&reg; Windows Forms PDF Viewer (PdfViewerControl) control and more details.
platform: document-processing
control: PdfViewerControl
documentation: ug
---

# Working with Hyperlinks in Windows Forms PDF Viewer (PdfViewerControl)

The [WinForms PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/winforms-pdf-viewer) supports URLs (hyperlinks) in the PDF document, which allows you to navigate to the destination just by clicking on it and by opening it in the default browser. This also supports a few events that are listed in the following table.

### Events Table

<table>
<tr>
<th>Event</th>
<th>Description</th>
<th>Arguments</th>
</tr>
<tr>
<td>{{'[HyperlinkMouseOver](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_Forms_PdfViewer_PdfViewerControl_HyperlinkMouseOver)'| markdownify }}</td>
<td>This event is triggered when the mouse pointer is placed over the hyperlink.</td>
<td>HyperlinkMouseOverEventArgs</td>
</tr>
<tr>
<td>{{'[HyperlinkClicked](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_Forms_PdfViewer_PdfViewerControl_HyperlinkClicked)'| markdownify }}</td>
<td>This event is triggered when the hyperlink in the PDF document is clicked.</td>
<td>HyperlinkClickedEventArgs</td>
</tr>
</table>

N> From version 19.3, the `HyperLinkClickedEventArgs` is renamed to [HyperlinkClickedEventArgs](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.HyperlinkClickedEventArgs.html). Also, we have renamed the `HyperLinkClicked` and `HyperLinkMouseOver` events to [HyperlinkClicked](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_Forms_PdfViewer_PdfViewerControl_HyperlinkClicked) and [HyperlinkMouseOver](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_Forms_PdfViewer_PdfViewerControl_HyperlinkMouseOver) respectively. Also, we have introduced [HyperlinkMouseOverEventArgs](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.HyperlinkMouseOverEventArgs.html) to view the details of the hyperlink when the mouse is over it.

## How to disable hyperlink navigation in PDF Viewer

You can disable the hyperlink navigation in PDF viewer control by setting the value of [Handled](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.HyperlinkClickedEventArgs.html#Syncfusion_Windows_Forms_PdfViewer_HyperlinkClickedEventArgs_Handled) in the [HyperlinkClickedEventArgs](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.HyperlinkClickedEventArgs.html) parameter as true in the [HyperlinkClicked]https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_Forms_PdfViewer_PdfViewerControl_HyperlinkClicked Event which is available in the PdfViewerControl and PdfDocumentView class. 
Please refer to the following example for more details.

N> From the version 19.3, we have introduced [Handled](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.HyperlinkClickedEventArgs.html#Syncfusion_Windows_Forms_PdfViewer_HyperlinkClickedEventArgs_Handled) property in the event arguments to disable the hyperlink navigation based on the standards. You need to change its value to `true` to disable the navigation.

{% tabs %}
{% highlight c# %}

//Initialize PDF Viewer.
PdfViewerControl pdfViewerControl = new PdfViewerControl();
//Load the PDF.
pdfViewerControl.Load("Sample.pdf");
// Wires the event handler for `HyperlinkClicked` event.
pdfViewerControl.HyperlinkClicked += PdfViewerControl_HyperlinkClicked;

private void PdfViewerControl_HyperlinkClicked(object sender, Syncfusion.Windows.Forms.PdfViewer.HyperlinkClickedEventArgs args)
{
    // Gets or sets the value to handle the navigation of hyperlink.
    args.Handled = true;
}

{% endhighlight %}

{% highlight vbnet %}

' Initialize PDF Viewer.
Private pdfViewerControl As New PdfViewerControl()
'Load the PDF.
pdfViewerControl.Load("Sample.pdf")

' Wires the event handler for `HyperlinkClicked` event.
AddHandler pdfViewerControl.HyperlinkClicked, AddressOf PdfViewerControl_HyperlinkClicked

Private Sub PdfViewerControl_HyperlinkClicked(obj As Object, args As Syncfusion.Windows.Forms.PdfViewer.HyperlinkClickedEventArgs)
    ' Gets or sets the value to handle the navigation of hyperlink.
    args.Handled = True
End Sub

{% endhighlight %}
{% endtabs %}

## How to retrieve the hyperlink details from PDF Viewer

You can retrieve the hyperlink details from PDF Viewer by using [HyperlinkClickedEventArgs](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.HyperlinkClickedEventArgs.html) when the hyperlink is clicked and by using [HyperlinkMouseOverEventArgs](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.HyperlinkMouseOverEventArgs.html) when the mouse is over the hyperlink.

### HyperlinkClicked Event

You can acquire the details of the hyperlink which is clicked in the PDF file by using the [HyperlinkClickedEventArgs](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.HyperlinkClickedEventArgs.html) in the [HyperlinkClicked](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_Forms_PdfViewer_PdfViewerControl_HyperlinkClicked) event.
Please refer to the following example for more details.

{% tabs %}
{% highlight c# %}

// Wires the event handler for `HyperlinkClicked` event.
pdfViewerControl.HyperlinkClicked += PdfViewerControl_HyperlinkClicked;

private void PdfViewerControl_HyperlinkClicked(object sender, Syncfusion.Windows.Forms.PdfViewer.HyperlinkClickedEventArgs args)
{
    //Returns the URI clicked in the PDF viewer control.
    string URI = args.Uri;
}

{% endhighlight %}

{% highlight vbnet %}

' Wires the event handler for `HyperlinkClicked` event.
AddHandler pdfViewerControl.HyperlinkClicked, AddressOf PdfViewerControl_HyperlinkClicked

Private Sub PdfViewerControl_HyperlinkClicked(obj As Object, args As Syncfusion.Windows.PdfViewer.AnnotEventArgs)
    ' Returns the URI clicked in the PDF viewer control.
    Dim uri As String = args.URI
End Sub

{% endhighlight %}
{% endtabs %}

### HyperlinkMouseOver Event

You can acquire the details of the hyperlink which is hovered in the PDF file by using the [HyperlinkMouseOverEventArgs](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.HyperlinkMouseOverEventArgs.html) in the [HyperlinkMouseOver](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_Forms_PdfViewer_PdfViewerControl_HyperlinkMouseOver) event.
Please refer to the below example for more details.

{% tabs %}
{% highlight c# %}

// Wires the event handler for `HyperlinkMouseOver` event.
pdfViewerControl.HyperlinkMouseOver += PdfViewerControl_HyperlinkMouseOver;

private void PdfViewerControl_HyperlinkMouseOver(object sender, Syncfusion.Windows.Forms.PdfViewer.HyperlinkMouseOverEventArgs e)
{
    //Returns the URI hovered in the PDF viewer control.
    string URI = e.Uri;
}

{% endhighlight %}
{% endtabs %}

## Redirecting to a different Hyperlink

You can navigate to a different hyperlink than the one clicked. To redirect a hyperlink, you need to pass the value of [Handled](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.HyperlinkClickedEventArgs.html#Syncfusion_Windows_Forms_PdfViewer_HyperlinkClickedEventArgs_Handled) parameter as `true` to stop the navigation of the clicked hyperlink. Then open the desired hyperlink that you want to navigate to instead.
Please refer to the following example for more details.

{% tabs %}
{% highlight c# %}

// Wires the event handler for `HyperlinkClicked` event.
pdfViewerControl.HyperlinkClicked += PdfViewerControl_HyperlinkClicked;

private void PdfViewerControl_HyperlinkClicked(object sender, Syncfusion.Windows.Forms.PdfViewer.HyperlinkClickedEventArgs args)
{
    // Gets or sets the value to handle the navigation of hyperlink. 
    args.Handled = true;
    // Opens the URI (www.google.com) in a default browser.
    System.Diagnostics.Process.Start("www.google.com");
}

{% endhighlight %}

{% highlight vbnet %}

' Wires the event handler for `HyperlinkClicked` event.
AddHandler pdfViewerControl.HyperlinkClicked, AddressOf PdfViewerControl_HyperlinkClicked

Private Sub PdfViewerControl_HyperlinkClicked(obj As Object, args As Syncfusion.Windows.PdfViewer.AnnotEventArgs)
    ' Opens the URI (www.google.com) in a default browser.
    System.Diagnostics.Process.Start("www.google.com")
End Sub

{% endhighlight %}
{% endtabs %}