---
layout: post
title: Edit Form Fields in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to edit PDF form fields programmatically using the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Edit Form Fields in .NET MAUI PDF Viewer (SfPdfViewer)

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to programmatically set, modify, and read values for all supported form field types. Use the [FormFields](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_FormFields) collection to retrieve fields by name and cast them to the appropriate type before modifying.

## Editing form fields programmatically

All form field edits shown below should be placed in your page's code-behind (`MainPage.xaml.cs`). The document must be fully loaded before accessing `FormFields` — call these from the `DocumentLoaded` event handler or a button click after the document is open.

### Editing text form fields

A text form field can be modified using the [Text](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.TextFormField.html#Syncfusion_Maui_PdfViewer_TextFormField_Text) property. The following code snippet illustrates retrieving a text form field named "name" from the PDF Viewer.

{% tabs %}
{% highlight C# tabtitle="MainPage.xaml.cs" %}

// Call after DocumentLoaded fires, or from a button_Clicked handler.
FormField formField = pdfViewer.FormFields.Where(x => x.Name == "name").FirstOrDefault();

if (formField is TextFormField nameTextBox)
{
    // Set the value of the "name" text field.

{% endhighlight %}
{% endtabs %}

### Editing checkbox form fields

By modifying the [IsChecked](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.CheckboxFormField.html#Syncfusion_Maui_PdfViewer_CheckboxFormField_IsChecked) property, the checkbox field can be checked or unchecked programmatically. The following code snippet illustrates retrieving a checkbox form field named "newsletter" from the PDF Viewer. 

{% tabs %}
{% highlight C# %}

FormField formField = PdfViewer.FormFields.Where(x => x.Name == "newsletter").FirstOrDefault();

if (formField is CheckboxFormField checkBox)
{
    // Mark the checkbox as checked.
    checkBox.IsChecked = true;
}

{% endhighlight %}
{% endtabs %}

### Editing combo box form fields

The [SelectedItem](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ComboBoxFormField.html#Syncfusion_Maui_PdfViewer_ComboBoxFormField_SelectedItem) property can be used to programmatically choose an item from the combo box. The [SelectedItem](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ComboBoxFormField.html#Syncfusion_Maui_PdfViewer_ComboBoxFormField_SelectedItem) should be one of the values from the [ComboBoxFormField.Items](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ComboBoxFormField.html#Syncfusion_Maui_PdfViewer_ComboBoxFormField_Items) array. The following code snippet illustrates retrieving a combobox form field named "state" from the PDF Viewer.  

{% tabs %}
{% highlight C# %}

FormField formField = PdfViewer.FormFields.Where(x => x.Name == "state").FirstOrDefault();

if (formField is ComboBoxFormField comboBox)
{
    // Select the desired item from the combo box.
    comboBox.SelectedItem = comboBox.Items[4];
}

{% endhighlight %}
{% endtabs %}

### Editing list box form fields

The [SelectedItems](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ListBoxFormField.html#Syncfusion_Maui_PdfViewer_ListBoxFormField_SelectedItems) property can be used to programmatically choose an item from the list box. The [SelectedItems](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ListBoxFormField.html#Syncfusion_Maui_PdfViewer_ListBoxFormField_SelectedItems) should contain only the values from the [ListBoxFormFields.Items](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.ListBoxFormField.html#Syncfusion_Maui_PdfViewer_ListBoxFormField_Items) array. One or more selections are supported by the list box. The below code snippet illustrates modifying a single-select list box form field named "courses" from the PDF Viewer.

{% tabs %}
{% highlight C# %}

FormField formField = PdfViewer.FormFields.Where(x => x.Name == "courses").FirstOrDefault();

if (formField is ListBoxFormField listBox)
{
    // Select the desired item from the list box.
    listBox.SelectedItems = new ObservableCollection<string> { listBox.Items[0] };
}

{% endhighlight %}
{% endtabs %}

The below code snippet illustrates modifying a multi-select list box form field named "courses" from the PDF Viewer.

{% tabs %}
{% highlight C# %}

FormField formField = PdfViewer.FormFields.Where(x => x.Name == "courses").FirstOrDefault();

if (formField is ListBoxFormField listBox)
{
    // Select the desired item from the list box.
    listBox.SelectedItems = new System.Collections.ObjectModel.ObservableCollection<string> { listBox.Items[1], listBox.Items[2], listBox.Items[3] };
}

{% endhighlight %}
{% endtabs %}


### Editing radio button form fields

Programmatically select an item from the radio buttons using the [SelectedItem](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.RadioButtonFormField.html#Syncfusion_Maui_PdfViewer_RadioButtonFormField_SelectedItem) property. The [SelectedItem](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.RadioButtonFormField.html#Syncfusion_Maui_PdfViewer_RadioButtonFormField_SelectedItem) should be one of the values from the [RadioButtonFormField.Items](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.RadioButtonFormField.html#Syncfusion_Maui_PdfViewer_RadioButtonFormField_Items) array. The following code snippet illustrates retrieving a radio button form field named "gender" from the PDF Viewer.

{% tabs %}
{% highlight C# %}

FormField formField = PdfViewer.FormFields.Where(x => x.Name == "gender").FirstOrDefault();

if (formField is RadioButtonFormField radioButton)
{
    // Select the desired item from the radio buttons.
    radioButton.SelectedItem = radioButton.Items[0];
}

{% endhighlight %}
{% endtabs %}

### Editing signature form fields

Programmatically, add a signature to an unsigned signature field by creating and assigning an ink annotation to the [SignatureFormField.Signature](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SignatureFormField.html#Syncfusion_Maui_PdfViewer_SignatureFormField_Signature) property. The following code snippet illustrates retrieving a signature form field named "signature" from the PDF Viewer. 

{% tabs %}
{% highlight C# %}

SignatureFormField? signature = PdfViewer.FormFields.Where(x => x.Name == "signature").FirstOrDefault() as SignatureFormField;
if (signature != null)
{
    List<List<float>> inkPointsCollection = new();
    inkPointsCollection.Add(new List<float> { 10f, 10f, 10f, 20f, 20f, 20f, 30f, 30f, 30f, 40f, 40f, 40f, 50f, 60f });
    InkAnnotation inkSignature = new InkAnnotation(inkPointsCollection, signature.PageNumber);
    inkSignature.Color = Colors.Red;
    // Add the created handwritten signature to the signature form field.
    signature.Signature = inkSignature;
}

{% endhighlight %}
{% endtabs %}

The [Signature](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SignatureFormField.html#Syncfusion_Maui_PdfViewer_SignatureFormField_Signature) property is of type [InkAnnotation](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.InkAnnotation.html) and it will behave like an ink after signing. If the PDF document is saved, the signature will be preserved as an ink annotation in the saved document. 

#### Suppressing the signature modal view

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to suppress the signature modal view and use your own UI in its place. This can be achieved by setting the `FormFieldModalViewAppearingEventArgs.Cancel` property to `true` in the `SignatureModalViewAppearing` event handler. 

The below code snippet illustrates suppressing the signature modal view and using a UI implemented in the app in its place. In this illustration, it is assumed that the signature is produced in the form of an image stream when the user completes drawing the signature in the custom dialog. When the signing is completed using the custom dialog, a stamp annotation is created and assigned as the signature of the form field.   

{% tabs %}
{% highlight c# %}

SignatureFormField? signatureFormField;
pdfviewer.SignatureModalViewAppearing += PdfViewer_SignatureModalViewAppearing;

private void PdfViewer_SignatureModalViewAppearing(object? Sender, FormFieldModalViewAppearingEventArgs e)
{
    e.Cancel = true;
    signatureFormField = e.FormField as SignatureFormField;
    
    // Implement your own UI for creating a signature.
    ShowCustomDialog();
}

Private void customDialogOkButton_Clicked(object sender, EventArgs e)
{
   //Get the signature in the form of a Stream instance (possibly converted from an image of the user's freehand drawing) 
   signatureImageStream = GetSignatureImageStream();
   
   // Create a stamp annotation. The bounds values are not necessary since the stamp will be automatically fit over the signature form field. 
   StampAnnotation signatureStamp = new StampAnnotation(signatureImageStream, signatureFormField.PageNumber, new RectF(0, 0, 0, 0));
   
   signatureFormField.Signature = signatureStamp;
}

{% endhighlight %} 
{% endtabs %}

### Button form fields

Button form fields will be rendered in the PDF viewer. But the PDF viewer supports only the `GoTo` actions that navigates to a particular location in the PDF document alone. Other types of button actions are not supported.

## See Also
- [Form Filling Overview](../form-filling-overview)
- [Form Fields Collection](../form-filling-collection)
- [Show and Hide Form Fields](../form-filling-show-hide)
- [Customize Form Fields](../form-filling-customization)
- [Form Field Events](../form-filling-events)
- [Import and Export Form Data](../form-filling-import-export)
- [Electronic Signature](../signature)
