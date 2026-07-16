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

The [SfPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to programmatically set, modify, and read values for all supported form field types. Use the [FormFields](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_FormFields) collection to retrieve fields by name and cast them to the appropriate type before modifying.

## Editing form fields programmatically

All form field edits shown below should be placed in your page's code-behind (`MainPage.xaml.cs`). The document must be fully loaded before accessing [FormFields](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_FormFields) — call these from the [DocumentLoaded](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_DocumentLoaded) event handler or a button click handler after the document is open.

### Editing text form fields

A text form field can be modified using the [Text](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.TextFormField.html#Syncfusion_Maui_PdfViewer_TextFormField_Text) property. The following code snippet illustrates retrieving a text form field named "name" from the PDF Viewer.

{% tabs %}
{% highlight C# tabtitle="MainPage.xaml.cs" %}

// Call after the DocumentLoaded event fires, or from an OnEditButtonClicked handler.
FormField formField = PdfViewer.FormFields.Where(x => x.Name == "name").FirstOrDefault();

if (formField is TextFormField nameTextBox)
{
    // Set the value of the "name" text field.
}
{% endhighlight %}
{% endtabs %}

### Editing checkbox form fields

By modifying the [IsChecked](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.CheckboxFormField.html#Syncfusion_Maui_PdfViewer_CheckboxFormField_IsChecked) property, the checkbox field can be checked or unchecked programmatically. The following code snippet illustrates retrieving a checkbox form field named "newsletter" from the PDF Viewer. 

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

The [SelectedItem](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.ComboBoxFormField.html#Syncfusion_Maui_PdfViewer_ComboBoxFormField_SelectedItem) property can be used to programmatically choose an item from the combo box. The [SelectedItem](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.ComboBoxFormField.html#Syncfusion_Maui_PdfViewer_ComboBoxFormField_SelectedItem) should be one of the values from the [ComboBoxFormField.Items](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.ComboBoxFormField.html#Syncfusion_Maui_PdfViewer_ComboBoxFormField_Items) array. The following code snippet illustrates retrieving a combobox form field named "state" from the PDF Viewer.  

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

The [SelectedItems](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.ListBoxFormField.html#Syncfusion_Maui_PdfViewer_ListBoxFormField_SelectedItems) property can be used to programmatically choose an item from the list box. The [SelectedItems](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.ListBoxFormField.html#Syncfusion_Maui_PdfViewer_ListBoxFormField_SelectedItems) should contain only the values from the [ListBoxFormFields.Items](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.ListBoxFormField.html#Syncfusion_Maui_PdfViewer_ListBoxFormField_Items) array. One or more selections are supported by the list box. The below code snippet illustrates modifying a single-select list box form field named "courses" from the PDF Viewer.

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

Programmatically select an item from the radio buttons using the [SelectedItem](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.RadioButtonFormField.html#Syncfusion_Maui_PdfViewer_RadioButtonFormField_SelectedItem) property. The [SelectedItem](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.RadioButtonFormField.html#Syncfusion_Maui_PdfViewer_RadioButtonFormField_SelectedItem) should be one of the values from the [RadioButtonFormField.Items](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.RadioButtonFormField.html#Syncfusion_Maui_PdfViewer_RadioButtonFormField_Items) array. The following code snippet illustrates retrieving a radio button form field named "gender" from the PDF Viewer.

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

You can programmatically add a signature to an unsigned signature field by creating and assigning an ink annotation to the [SignatureFormField.Signature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SignatureFormField.html#Syncfusion_Maui_PdfViewer_SignatureFormField_Signature) property. The following code snippet illustrates retrieving a signature form field named "signature" from the PDF Viewer.

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

The [Signature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SignatureFormField.html#Syncfusion_Maui_PdfViewer_SignatureFormField_Signature) property is of type [InkAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.InkAnnotation.html) and it behaves like an ink annotation after signing. If the PDF document is saved, the signature will be preserved as an ink annotation in the saved document. 

#### Suppressing the signature modal view

The [SfPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to suppress the signature modal view and use your own UI in its place. This can be achieved by setting the `FormFieldModalViewAppearingEventArgs.Cancel` property to `true` in the [SignatureModalViewAppearing](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_SignatureModalViewAppearing) event handler.

The following code snippet illustrates suppressing the signature modal view and using a UI implemented in the app in its place. In this illustration, it is assumed that the signature is produced in the form of an image stream when the user completes drawing the signature in the custom dialog. When the signing is completed using the custom dialog, a stamp annotation is created and assigned as the signature of the form field.

{% tabs %}
{% highlight c# %}

SignatureFormField? signatureFormField;
PdfViewer.SignatureModalViewAppearing += PdfViewer_SignatureModalViewAppearing;

private void PdfViewer_SignatureModalViewAppearing(object? sender, FormFieldModalViewAppearingEventArgs e)
{
    e.Cancel = true;
    signatureFormField = e.FormField as SignatureFormField;
    
    // Implement your own UI for creating a signature.
    ShowCustomDialog();
}

private void customDialogOkButton_Clicked(object sender, EventArgs e)
{
   //Get the signature in the form of a Stream instance (possibly converted from an image of the user's freehand drawing) 
   Stream signatureImageStream = GetSignatureImageStream();
   
   // Create a stamp annotation. The bounds values are not necessary since the stamp will be automatically fit over the signature form field. 
   StampAnnotation signatureStamp = new StampAnnotation(signatureImageStream, signatureFormField.PageNumber, new RectF(0, 0, 0, 0));
   
   signatureFormField.Signature = signatureStamp;
}

{% endhighlight %} 
{% endtabs %}

### Button form fields behavior

Button form fields will be rendered in the PDF Viewer. The PDF Viewer supports only the `GoTo` actions that navigate to a particular location in the PDF document. Other types of button actions are not supported.

## Flatten form fields only on save

The [FlattenOnSave](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.FormField.html#Syncfusion_Maui_PdfViewer_FormField_FlattenOnSave) property converts form fields into non-editable content only when the PDF document is saved. This means the form fields remain editable while the document is open, and are flattened (made part of the document content) during the save operation, preventing any further modification afterward.

### Flatten specific form fields

You can selectively flatten specific form fields, such as signature fields, by iterating through the form field collection.

{% tabs %}
{% highlight c# %}

foreach (var item in PdfViewer.FormFields)
{
    //Iterate Only signature form field and flatten it
    if (item is SignatureFormField signature)
    {
        item.FlattenOnSave = true;
    }
}

{% endhighlight %} 
{% endtabs %}

### Flatten all form fields

To flatten all form fields in the document, set the FlattenOnSave property for each field:

{% tabs %}
{% highlight c# %}

//Iterate all the form fields and set flatten
foreach (var item in PdfViewer.FormFields)
{
    item.FlattenOnSave = true;
}

{% endhighlight %} 
{% endtabs %}

## Controlling form field editing at the viewer level

The `AllowEditFormFields` property is used to control form field editing at the viewer level. By default, editing is enabled, allowing users to interact with all supported form fields. When this property is set to false, all form fields become non-editable, making the document effectively read-only without modifying individual field properties. This behavior applies to all form field types and takes effect immediately on the loaded document.

You can disable editing programmatically using the following:

{% tabs %}
{% highlight xaml %}
<syncfusion:SfPdfViewer 
    x:Name="PdfViewer"
    AllowEditFormFields="False" />
{% endhighlight %}

{% highlight c# %}
// Disable form field editing
PdfViewer.AllowEditFormFields = false;
{% endhighlight %}
{% endtabs %}

This property supports dynamic changes at runtime, meaning you can enable or disable form field editing at the viewer level based on requirements, and the changes will be applied instantly.

N> Setting `AllowEditFormFields` to false does not modify the `ReadOnly` property of individual form fields. It acts as an additional layer of control, and a field remains non-editable if either its `ReadOnly` property is true or viewer-level editing is disabled.

## See Also

- [Form Filling Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-overview)
- [Form Fields Collection](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-collection)
- [Show and Hide Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-show-hide)
- [Customize Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-customization)
- [Form Field Events](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-events)
- [Import and Export Form Data](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-import-export)
- [Electronic Signature](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/signature)
- [Form Field Validation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-validation)
- [Save a Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/save-a-document)
- [Form Fields Collection](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-collection)
- [Show and Hide Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-show-hide)
- [Customize Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-customization)
- [Form Field Events](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-events)
- [Import and Export Form Data](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-import-export)
- [Electronic Signature](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/signature)
