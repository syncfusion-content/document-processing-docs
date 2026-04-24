---
layout: post
title: Form Fields API in WPF PDF Viewer | Syncfusion
description: Learn how to use the Form Fields API in the Syncfusion WPF PDF Viewer to access, modify, and manage form fields effectively in your PDF applications.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Fields API in WPF PDF Viewer

The PDF Viewer provides comprehensive APIs to Add, edit, Remove, import,Export and manage form fields programmatically. The following APIs are available:

| API | Description |
|---|---|
| [ImportFormData](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_ImportFormData_System_String_Syncfusion_Pdf_Parsing_DataFormat_) | Import form field data as in different format (Fdf,xfdf,Json,xml).|
| [ExportFormData](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_ExportFormData_System_String_Syncfusion_Pdf_Parsing_DataFormat_System_String_) | Export form field data as in different format (Fdf,xfdf,Json,xml)as a downloadable file.|
| LoadedDocument.Form.Fields | By accessing the LoadedDocument form fileds we can perform add, remove and modify the form fileds in code behind.|

## ImportFormData
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

## ExportFormData
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

## LoadedDocument Form field
The below code snippet illustrates how to add a textbox field to a LoadedDocument
{% tabs %}
{% highlight C# %}

private void AddTextbox_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument.Form != null)
    {
        PdfLoadedPage page = pdfViewer.LoadedDocument.Pages[0] as PdfLoadedPage;
        //Create a textbox field and add the properties.
        PdfTextBoxField textBoxField = new PdfTextBoxField(page, "FirstName");
        textBoxField.Bounds = new RectangleF(0, 0, 100, 20);
        //Add the form field to the document.
        pdfViewer.LoadedDocument.Form.Fields.Add(textBoxField);
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub AddTextbox_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument.Form IsNot Nothing Then
        Dim page As PdfLoadedPage = TryCast(pdfViewer.LoadedDocument.Pages(0), PdfLoadedPage)
        `Create a textbox field and add the properties.
        Dim textBoxField As PdfTextBoxField = New PdfTextBoxField(page, "FirstName")
        textBoxField.Bounds = New RectangleF(0, 0, 100, 20)
        `Add the form field to the document.
        pdfViewer.LoadedDocument.Form.Fields.Add(textBoxField)
    End If
End Sub

{% endhighlight %}
{% endtabs %}

The below code snippet illustrates how to modify a textbox field to a LoadedDocument

{% tabs %}
{% highlight C# %}

private void Update_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument.Form != null)
	{
		if (pdfViewer.LoadedDocument.Form.Fields[0] is PdfLoadedTextBoxField)
		{
			(pdfViewer.LoadedDocument.Form.Fields[0] as PdfLoadedTextBoxField).Text = "Syncfusion";
		}
	}
}

{% endhighlight %}
{% highlight VB %}

Private Sub Update_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument Is Nothing OrElse pdfViewer.LoadedDocument.Form Is Nothing Then
        Return
    End If

    Dim form = pdfViewer.LoadedDocument.Form

    ' TextBox (Field 0)
    Dim textBox = TryCast(form.Fields(0), PdfLoadedTextBoxField)
    If textBox IsNot Nothing Then
        textBox.Text = "Syncfusion"
    End If
End Sub

{% endhighlight %}
{% endtabs %}

The below code snippet illustrates how to Remove a Form field to a LoadedDocument
{% tabs %}
{% highlight C# %}

private void RemoveAt_Click(object sender, RoutedEventArgs e)
{
	if (pdfViewer.LoadedDocument.Form.Fields.Count > 0)
		//Remove the field at index 0.
        pdfViewer.LoadedDocument.Form.Fields.RemoveAt(0); 
}

{% endhighlight %}
{% highlight VB %}

Private Sub RemoveAt_Click(sender As Object, e As RoutedEventArgs)
	If pdfViewer.LoadedDocument.Form.Fields.Count > 0 Then
		`Remove the field at index 0.
        pdfViewer.LoadedDocument.Form.Fields.RemoveAt(0)
    End If
End Sub

{% endhighlight %}
{% endtabs %}

## See also

-  [Overview](./overview)
- [Import form fields](./import-export-form-fields/import-form-fields)
- [Export form fields](./import-export-form-fields/export-form-fields)
- [Add form fields](./manage-form-fields/add-form-fields)
- [Modify form fields](./manage-form-fields/modify-form-fields)
- [Remove form fields](./manage-form-fields/remove-form-fields) 
- [Form fields events](./form-fields-events)