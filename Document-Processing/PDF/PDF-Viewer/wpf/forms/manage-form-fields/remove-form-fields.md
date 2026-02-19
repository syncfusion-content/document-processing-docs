---
layout: post
title: Remove form fields in the WPF PDF Viewer component | Syncfusion
description: Learn how to remove PDF form fields programmatically in the Syncfusion WPF PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---


# Remove PDF Form Fields from a PDF in WPF

## Remove Form Fields Programmatically
The PDF Viewer allows users to programmatically remove form fields without user interaction at runtime.

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

-  [Overviewe](./overview)
- [Add form fields](./add-form-fields)
- [Modify form fields](./modify-form-fields)
- [Form fields API](../form-fields-api)