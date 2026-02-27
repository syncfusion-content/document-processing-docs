---
layout: post
title: Modify form fields values in the WPF PDF Viewer | Syncfusion
description: Learn how to modify PDF form fields values using the UI and programmatically with APIs in the Syncfusion WPF PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Modify PDF Form Field values in WPF

You can modify form fields values using the **UI** or **API**.

## Modify PDF Form Field values using the UI
The Syncfusion WPF PDF Viewer allows users to modify PDF form fields values directly through the user interface without using code. Users can click on form fields and enter or select values based on the field type.

![Modify Form fields](./images/FormFillingUI.gif)

The WPF PDF Viewer supports common form fields such as text boxes, check boxes, radio buttons,list boxes, and signature fields. Filled values can be edited at any time, and the entered data is retained during the viewing session.

## Modify PDF Form Field values programmatically
You can Modify PDF form fields values programmatically by acessing the existing Form fields. This approach is useful when form data needs to be set dynamically based on application logic.

## Modify PDF Form Field values 

### Textbox
Update TextBox Field Through the UI
You can modify text box fields at runtime from UI.
![TextboxField](../images/TextBoxField.png)

Update TextBox Field Programmatically (Code‑Behind)

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

### CheckBox
Update CheckBox Field Through the UI
You can set checkbox fields at runtime from UI.
![CheckboxField](../images/CheckBoxField.png)

Update CheckBox Field Programmatically (Code‑Behind)

{% tabs %}
{% highlight C# %}

private void UpdateCheckBox_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument == null || pdfViewer.LoadedDocument.Form == null) return;

    var cb = pdfViewer.LoadedDocument.Form.Fields[2] as PdfLoadedCheckBoxField; // replace index
    if (cb != null)
    {
        cb.Checked = true; // or false
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub UpdateCheckBox_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument Is Nothing OrElse pdfViewer.LoadedDocument.Form Is Nothing Then Return

    Dim cb = TryCast(pdfViewer.LoadedDocument.Form.Fields(2), PdfLoadedCheckBoxField)
    If cb IsNot Nothing Then
        cb.Checked = True
    End If
End Sub
{% endhighlight %}
{% endtabs %}

### RadioButton
Update Radio Button Field Through the UI
You can change radio button selections at runtime from UI.
![RadioButtonField](./images/Radiobutton.gif)

Update Radio Button Field Programmatically (Code‑Behind)

{% tabs %}
{% highlight C# %}

private void UpdateRadio_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument == null || pdfViewer.LoadedDocument.Form == null) return;

    var radioList = pdfViewer.LoadedDocument.Form.Fields[3] as PdfLoadedRadioButtonListField; // replace index
    if (radioList != null)
    {
        radioList.SelectedIndex = 1; // 0-based index
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub UpdateRadio_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument Is Nothing OrElse pdfViewer.LoadedDocument.Form Is Nothing Then Return

    Dim radioList = TryCast(pdfViewer.LoadedDocument.Form.Fields(3), PdfLoadedRadioButtonListField)
    If radioList IsNot Nothing Then
        radioList.SelectedIndex = 1
    End If
End Sub

{% endhighlight %}
{% endtabs %}

### ListBox
Update ListBox Field Through the UI
You can set list box selections at runtime from UI.
![ListBoxField](./images/ListBoxField.gif)

Update ListBox Field Programmatically (Code‑Behind)

{% tabs %}
{% highlight C# %}

private void UpdateListBox_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument == null || pdfViewer.LoadedDocument.Form == null) return;

    var listBox = pdfViewer.LoadedDocument.Form.Fields[4] as PdfLoadedListBoxField; // replace index
    if (listBox != null)
    {
        listBox.SelectedIndex = new int[] { 1, 2 }; // select multiple indices
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub UpdateListBox_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument Is Nothing OrElse pdfViewer.LoadedDocument.Form Is Nothing Then Return

    Dim listBox = TryCast(pdfViewer.LoadedDocument.Form.Fields(4), PdfLoadedListBoxField)
    If listBox IsNot Nothing Then
        listBox.SelectedIndex = New Integer() {1, 2}
    End If
End Sub

{% endhighlight %}
{% endtabs %}

### ComboBox
Update ComboBox Field Through the UI
You can set combo box selections at runtime from UI.
![ComboBoxField](./images/ComboboxField.png)

Update ComboBox Field Programmatically (Code‑Behind)

{% tabs %}
{% highlight C# %}

private void UpdateComboBox_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument == null || pdfViewer.LoadedDocument.Form == null) return;

    var combo = pdfViewer.LoadedDocument.Form.Fields[5] as PdfLoadedComboBoxField; // replace index
    if (combo != null)
    {
        combo.SelectedIndex = 1;
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub UpdateComboBox_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument Is Nothing OrElse pdfViewer.LoadedDocument.Form Is Nothing Then Return

    Dim combo = TryCast(pdfViewer.LoadedDocument.Form.Fields(5), PdfLoadedComboBoxField)
    If combo IsNot Nothing Then
        combo.SelectedIndex = 1
    End If
End Sub

{% endhighlight %}
{% endtabs %}

### Signature Field
You can apply or update signature fields at runtime from UI.
#### Add a signature from signature field in UI

Clicking the signature box will open the signature pad, requesting the user to draw the signature. clicking on the apply button will add the drawn signature to the signature field.

![WPF PDF Viewer Delete a Signature from Signature field](form-filling-images/wpf-pdf-viewer-signature-form-field-add.png)

#### Deleting a signature from signature field in UI

Selecting the delete option from the context menu, which is displayed when right-clicking on the selected signature, would delete the respective signature from the signature field.

![WPF PDF Viewer Delete a Signature from Signature field](form-filling-images/wpf-pdf-viewer-signature-form-field-delete.png)

Update Signature Field Programmatically (Code‑Behind)

{% tabs %}
{% highlight C# %}

private void UpdateSignature_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument == null || pdfViewer.LoadedDocument.Form == null) return;

    var sigField = pdfViewer.LoadedDocument.Form.Fields[6] as PdfLoadedSignatureField; // replace index
    if (sigField != null)
    {
        PdfLoadedPage page = pdfViewer.LoadedDocument.Pages[0] as PdfLoadedPage;

        using (FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read))
        {
            PdfCertificate certificate = new PdfCertificate(certificateStream, "certPassword");

            PdfSignature signature = new PdfSignature(pdfViewer.LoadedDocument, page, certificate, "Signature", sigField);
            signature.Certificate = certificate;
            signature.Reason = "Approved";
            sigField.Signature = signature;

            using (FileStream imageStream = new FileStream(Path.GetFullPath("signature.jpg"), FileMode.Open, FileAccess.Read))
            {
                PdfBitmap image = new PdfBitmap(imageStream);
                signature.Appearance.Normal.Graphics.DrawImage(
                    image,
                    new PointF(0, 0),
                    new SizeF(sigField.Bounds.Width, sigField.Bounds.Height)
                );
            }

            pdfViewer.LoadedDocument.Save(Path.GetFullPath("Output/Output.pdf"));
        }
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub UpdateSignature_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument Is Nothing OrElse pdfViewer.LoadedDocument.Form Is Nothing Then Return

    Dim sigField = TryCast(pdfViewer.LoadedDocument.Form.Fields(6), PdfLoadedSignatureField)
    If sigField IsNot Nothing Then
        Dim page = TryCast(pdfViewer.LoadedDocument.Pages(0), PdfLoadedPage)

        Using certificateStream As New FileStream("PDF.pfx", FileMode.Open, FileAccess.Read)
            Dim certificate As New PdfCertificate(certificateStream, "certPassword")

            Dim signature As New PdfSignature(pdfViewer.LoadedDocument, page, certificate, "Signature", sigField)
            signature.Certificate = certificate
            signature.Reason = "Approved"
            sigField.Signature = signature

            Using imageStream As New FileStream(Path.GetFullPath("signature.jpg"), FileMode.Open, FileAccess.Read)
                Dim image As New PdfBitmap(imageStream)
                signature.Appearance.Normal.Graphics.DrawImage(image, New PointF(0, 0), New SizeF(sigField.Bounds.Width, sigField.Bounds.Height))
            End Using

            pdfViewer.LoadedDocument.Save(Path.GetFullPath("Output/Output.pdf"))
        End Using
    End If
End Sub

{% endhighlight %}
{% endtabs %}

N > To ensure the signature appears in the document, save the loaded PDF after applying the signature.

## See also

-  [Overview](../overview)
- [Add form fields](./add-form-fields)
- [Remove form Fields](./remove-form-fields)
- [Form fields API](../form-fields-api)