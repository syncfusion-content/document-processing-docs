---
layout: post
title: Import form data in the WPF PDF Viewer component | Syncfusion
description: Learn how to import PDF form field data (FDF, XFDF, JSON, and XML) using the Syncfusion WPF PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import PDF Form Data into WPF PDF Viewer

The **PDF Viewer** lets you import values into interactive form fields in the currently loaded PDF. You can import data from these formats:

- [FDF](#import-as-fdf)
- [XFDF](#import-xfdf)
- [JSON](#import-json)
- [XML](#import-xml)

Follow the below steps to import data to PDF document with `AcroForm`.

1.	Click the form data tool button in the left pane, the form data toolbar will appear as a secondary toolbar in the [PdfViewerControl](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html).
2.	Select **Import** option in form data toolbar to import the PDF form data.

![WPF PDF Viewer Import Form Data](form-filling-images/wpf-pdf-viewer-import-form-data.png)  

## How to Import Programmatically
[ImportFormData](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_ImportFormData_System_String_Syncfusion_Pdf_Parsing_DataFormat_) API is used to import the form fields data in code behind.


### Import FDF
The following example imports form field data as FDF.

{% tabs %}
{% highlight c# %}

private void button1_Click(object sender, RoutedEventArgs e)
{
    //Import PDF form data
    pdfviewer.ImportFormData("Import.fdf", Syncfusion.Pdf.Parsing.DataFormat.Fdf);
}

{% endhighlight %}
{% highlight VB %}

Private Sub button1_Click(sender As Object, e As RoutedEventArgs)
    'Import PDF form data
    pdfviewer.ImportFormData("Import.fdf", Syncfusion.Pdf.Parsing.DataFormat.Fdf)
End Sub

{% endhighlight %}
{% endtabs %}

### Import XFDF
The following example imports form field data as XFDF.

{% tabs %}
{% highlight c# %}

private void button1_Click(object sender, RoutedEventArgs e)
{
    //Import PDF form data
     pdfViewer.ImportFormData("Import.xfdf", Syncfusion.Pdf.Parsing.DataFormat.XFdf);
}

{% endhighlight %}
{% highlight VB %}

Private Sub button1_Click(sender As Object, e As RoutedEventArgs)
    'Import PDF form data
    pdfViewer.ImportFormData("Import.xfdf", Syncfusion.Pdf.Parsing.DataFormat.XFdf)
End Sub

{% endhighlight %}
{% endtabs %}

### Import JSON
The following example imports form field data as JSON.

{% tabs %}
{% highlight c# %}

private void button1_Click(object sender, RoutedEventArgs e)
{
    //Import PDF form data
    pdfViewer.ImportFormData("Import.json", Syncfusion.Pdf.Parsing.DataFormat.Json);
}

{% endhighlight %}
{% highlight VB %}

Private Sub button1_Click(sender As Object, e As RoutedEventArgs)
    'Import PDF form data
    pdfViewer.ImportFormData("Import.json", Syncfusion.Pdf.Parsing.DataFormat.Json)
End Sub

{% endhighlight %}
{% endtabs %}

## Import XML
The following example imports form field data as XML.

{% tabs %}
{% highlight c# %}

private void button1_Click(object sender, RoutedEventArgs e)
{
    //Import PDF form data
     pdfViewer.ImportFormData("Import.xml", Syncfusion.Pdf.Parsing.DataFormat.Xml);
}

{% endhighlight %}
{% highlight VB %}

Private Sub button1_Click(sender As Object, e As RoutedEventArgs)
    'Import PDF form data
    pdfViewer.ImportFormData("Import.xml", Syncfusion.Pdf.Parsing.DataFormat.Xml)
End Sub

{% endhighlight %}
{% endtabs %}

## Common Use Cases

- Pre-fill application forms from a database using JSON.
- Migrate data from other PDF tools using FDF/XFDF.
- Restore user progress saved locally or on the server.

## See also

-  [Overview](../overview)
- [Export form fields](../export-form-fields)
- [Add form fields](../add-form-fields)
- [Modify form fields](../modify-form-fields)
- [Remove form fields](../remove-form-fields)
- [Form fields API](../form-fields-api)