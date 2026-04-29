---
layout: post
title: Remove form fields in the WPF PDF Viewer component | Syncfusion
description: Learn how to remove PDF form fields programmatically using the Syncfusion WPF PDF Viewer API to simplify form handling and automate PDF form cleanup.
platform: document-processing
control: PDF Viewer
documentation: ug
---


# Remove Form Fields from a PDF 
The [WPF PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/wpf/overview) supports removing existing form fields from a PDF document exclusively through programmatic APIs. By accessing the loaded PDF document’s form fields collection, specific form fields can be identified and deleted as required.

## Remove Form Fields Programmatically
The `PDF Viewer` form fields be removed using code by accessing the loaded PDF document. This makes it easy to delete unwanted form fields when updating or managing PDF files.

The following code sample explains how to remove the form field during runtime.

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

- [Overview](../overview)
- [Add form fields](./add-form-fields)
- [Modify form fields](./modify-form-fields)
- [Form fields API](../form-fields-api)