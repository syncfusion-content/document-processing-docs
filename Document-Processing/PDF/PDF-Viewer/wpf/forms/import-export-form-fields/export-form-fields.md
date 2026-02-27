---
layout: post
title: Export form data in the WPF PDF Viewer component | Syncfusion
description: Learn how to export PDF form field data (FDF, XFDF, JSON, and XML) using the Syncfusion WPF PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export PDF Form Data from WPF PDF Viewer

The PDF Viewer allows you to export form field data in multiple formats for easy storage or integration. Supported formats:

- [FDF](#export-as-fdf)
- [XFDF](#export-as-xfdf)
- [JSON](#export-as-json)
- [XML](#export-as-xml)

Follow the below steps to export data from PDF document in UI

1. Select **Export** option in the form data toolbar, to save the completed PDF form data as a file in another file format.
2. In Export Form Data As dialog box, you can select the desired format to save the form data (FDF, XFDF, XML, and JSON).

N> If the PDF document is loaded as a stream, the [PdfViewerControl](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html) will request for the form name when exporting.

##How to export Programmatically

[ExportFormData](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_ExportFormData_System_String_Syncfusion_Pdf_Parsing_DataFormat_System_String_) API is used to import the form fields data in code behind.

### Export as FDF
The following example exports form field data as FDF.

{% tabs %}
{% highlight c# %}

private void button1_Click(object sender, RoutedEventArgs e)
{
    //Export PDF form data
    pdfviewer.ExportFormData("Export.fdf", Syncfusion.Pdf.Parsing.DataFormat.Fdf, "SourceForm.pdf");
}

{% endhighlight %}
{% highlight VB %}

Private Sub button1_Click(sender As Object, e As RoutedEventArgs)
    'Export PDF form data
    pdfviewer.ExportFormData("Export.fdf", Syncfusion.Pdf.Parsing.DataFormat.Fdf, "SourceForm.pdf")
End Sub

{% endhighlight %}
{% endtabs %}

### Export as XFDF
The following example exports form field data as XFDF.

{% tabs %}
{% highlight c# %}

private void button1_Click(object sender, RoutedEventArgs e)
{
    //Export PDF form data
    pdfViewer.ExportFormData("Export.xfdf", Syncfusion.Pdf.Parsing.DataFormat.XFdf, "SourceForm.pdf");
}

{% endhighlight %}
{% highlight VB %}

Private Sub button1_Click(sender As Object, e As RoutedEventArgs)
    'Export PDF form data
    pdfViewer.ExportFormData("Export.xfdf", Syncfusion.Pdf.Parsing.DataFormat.XFdf, "SourceForm.pdf")
End Sub

{% endhighlight %}
{% endtabs %}

### Export as JSON
The following example exports form field data as JSON.

{% tabs %}
{% highlight c# %}

private void button1_Click(object sender, RoutedEventArgs e)
{
    //Export PDF form data
    pdfViewer.ExportFormData("Export.json", Syncfusion.Pdf.Parsing.DataFormat.Json, "SourceForm.pdf");
}

{% endhighlight %}
{% highlight VB %}

Private Sub button1_Click(sender As Object, e As RoutedEventArgs)
    'Export PDF form data
    pdfViewer.ExportFormData("Export.json", Syncfusion.Pdf.Parsing.DataFormat.Json, "SourceForm.pdf")
End Sub

{% endhighlight %}
{% endtabs %}

### Export as XML
The following example exports form field data as XML.

{% tabs %}
{% highlight c# %}

private void button1_Click(object sender, RoutedEventArgs e)
{
    //Export PDF form data
     pdfViewer.ExportFormData("Export.xml", Syncfusion.Pdf.Parsing.DataFormat.Xml, "SourceForm.pdf");
}

{% endhighlight %}
{% highlight VB %}

Private Sub button1_Click(sender As Object, e As RoutedEventArgs)
    'Export PDF form data
     pdfViewer.ExportFormData("Export.xml", Syncfusion.Pdf.Parsing.DataFormat.Xml, "SourceForm.pdf")
End Sub

{% endhighlight %}
{% endtabs %}

## Common Use Cases
- Save user-entered data to your server without altering the original PDF.
- Export as JSON for REST API integration.
- Export as FDF/XFDF for compatibility with other PDF tools.

## See also

-  [Overview](../overview)
- [Import form fields](./import-form-fields)
- [Add form fields](../add-form-fields)
- [Modify form fields](../modify-form-fields)
- [Remove form fields](../remove-form-fields)
- [Form fields API](../form-fields-api)