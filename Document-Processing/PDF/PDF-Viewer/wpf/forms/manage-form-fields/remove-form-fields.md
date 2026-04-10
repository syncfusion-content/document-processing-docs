---
layout: post
title: Remove form fields in the WPF PDF Viewer component | Syncfusion
description: Learn how to remove PDF form fields programmatically using the Syncfusion WPF PDF Viewer API to simplify form handling and automate PDF form cleanup.
platform: document-processing
control: PDF Viewer
documentation: ug
---


# Remove PDF Form Fields from a PDF in WPF
Remove PDF Form Fields from a PDF in WPF pdfviewer supports deleting existing form fields from a PDF document exclusively through programmatic APIs. This capability is useful for restructuring forms, removing unwanted fields, and managing PDF documents dynamically within WPF applications without relying on the user interface.
## Remove Form Fields Programmatically
The PDF Viewer enables form fields to be removed programmatically at runtime without requiring any user interaction.

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