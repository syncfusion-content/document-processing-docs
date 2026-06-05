---
layout: post
title: Form filling in Blazor SfPdfViewer Component | Syncfusion
description: Learn to view, fill, export, and import PDF form fields in Syncfusion Blazor SfPdfViewer, including disabling interaction and handling signatures.
platform: document-processing
control: SfPdfViewer
documentation: ug
domainurl: ##DomainURL##
---

# Fill PDF form fields in Blazor SfPdfViewer

This guide shows how to update, import, and validate PDF form fields in the Blazor SfPdfViewer so you can pre-fill forms or accept user input.

**Outcome** Programmatically set field values, allow UI-driven filling, import form data, and validate fields on submit.

## Steps to fill forms

### 1. Fill form fields programmatically

Update form field values programmatically with [`UpdateFormFieldsAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_UpdateFormFieldsAsync_Syncfusion_Blazor_SfPdfViewer_FormField_).

Use the example below as a complete, runnable example for a Blazor app. It retrieves form fields and updates a named field or the first available field.

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="pdfViewer"
              DocumentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
              Height="600px">
</SfPdfViewer2>

<button @onclick="UpdateFormFields">Update Form Fields</button>

@code {
    SfPdfViewer2? pdfViewer;

    async Task UpdateFormFields()
    {
        if (pdfViewer == null)
            return;

        // Get fields
        List<FormFieldInfo> formFields = await pdfViewer.GetFormFieldsAsync();

        if (formFields == null || formFields.Count == 0)
            return;

        // Find textbox safely
        var textField = formFields
            .OfType<TextBoxField>()
            .FirstOrDefault(f => f.Name == "name") 
            ?? formFields.OfType<TextBoxField>().FirstOrDefault();

        if (textField != null)
        {
            textField.Value = "John Doe";
            textField.TooltipText = "First Name";

            // Update using SAME TYPE (FormFieldInfo)
            await pdfViewer.UpdateFormFieldsAsync(new List<FormFieldInfo>()
            {
                textField
            });
        }
    }
}
{% endhighlight %}
{% endtabs %}

**Expected result:** Clicking the *Fill Form Fields* button sets the first or named field's value to *John Doe* in the viewer.

### 2. Fill form fields via UI

Users can click form controls and enter/select values. Supported field types include textboxes, checkboxes, radio buttons, dropdowns, list boxes, and signature fields. Edits are retained during the viewing session.

![Form filling in Blazor SfPdfViewer](../images/blazor-pdfviewer-form-filling.png)

### 3. Fill form fields through imported data

Use [`ImportFormFieldsAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_ImportFormFieldsAsync_System_IO_Stream_Syncfusion_Blazor_SfPdfViewer_FormFieldDataFormat_) to map external data into PDF fields by name. The example below shows how to trigger import from a button handler.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer;
@using Syncfusion.Blazor.Buttons;

<SfButton OnClick="ExportFormFieldData">Export Data</SfButton>
<SfButton OnClick="ImportFormFieldData">Import Data</SfButton>

<SfPdfViewer2 @ref="PdfViewerInstance" DocumentPath="wwwroot/data/FormFillingDocument.pdf"
              Height="650px"
              Width="100%">
</SfPdfViewer2>

@code { 
    // Reference to the SfPdfViewer2 instance
    SfPdfViewer2 PdfViewerInstance { get; set; }

    // Stream to store exported form field data in FDF format
    Stream FDFStream = new MemoryStream();

    // List to store form field information
    List<FormFieldInfo> FormFields = new List<FormFieldInfo>();

    // Exports form field data from the PDF viewer in FDF format
    private async void ExportFormFieldData()
    {
        // Retrieve form field information from the PDF viewer
        FormFields = await PdfViewerInstance.GetFormFieldsAsync(); 
        if (FormFields != null && FormFields.Count > 0)
        {
            // Export form fields as FDF data
            FDFStream = await PdfViewerInstance.ExportFormFieldsAsync(FormFieldDataFormat.Fdf); 
        }
    }

    // Imports form field data from FDF format into the PDF viewer
    private async void ImportFormFieldData()
    {
        if (FDFStream != null)
        {
            // Import FDF data into the viewer
            await PdfViewerInstance.ImportFormFieldsAsync(FDFStream, FormFieldDataFormat.Fdf); 
        }
    }
}
{% endhighlight %}
{% endtabs %}

For more details, see [Import and Export Form Data](./form-filling#export-and-import-form-fields).

### 4. Validate form fields on submit

Enable form field validation and handle the validation event to check required fields and cancel submission when necessary. Example below shows adding required fields programmatically and validating them.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer;
@using Syncfusion.Blazor.Buttons;

<SfPdfViewer2 @ref="Viewer"
              DocumentPath="wwwroot/data/PDF_Succinctly.pdf"
              Height="650px"
              Width="100%"
              EnableFormFieldsValidation=true>
<PdfViewerEvents DocumentLoaded="@AddFormFields" ValidateFormFields="@OnValidateFormFields" ></PdfViewerEvents>  
</SfPdfViewer2>

@code { 
    SfPdfViewer2 Viewer;
    // Method triggered when the document is loaded
    private async Task AddFormFields()
    {
        // Define various form fields with their properties and positions
        List<FormFieldInfo> formFields = new List<FormFieldInfo>
        {
            new TextBoxField { Name = "TextBox Field", Bounds = new Bound { X = 278, Y = 247, Width = 200, Height = 24 }, IsRequired=true},
            new PasswordField { Name = "Password Field", Bounds = new Bound { X = 278, Y = 323, Width = 200, Height = 24 }, IsRequired=true},
            new SignatureField { Name = "Signature Field", Bounds = new Bound { X = 278, Y = 686, Width = 200, Height = 63 }, IsRequired=true }
        };
        
        // Add form fields asynchronously to the PDF Viewer
        await Viewer.AddFormFieldsAsync(formFields);
    }
   void OnValidateFormFields(ValidateFormFieldsArgs args)
   {
       Dictionary<string, object> unfilledFields = args.UnfilledFields;
       foreach (var field in unfilledFields)
       {
           Console.WriteLine($"Field Name: {field.Key}, Default Value: {field.Value}");
           // Further processing of unfilled fields
       }
   }
}
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- If fields are not editable, confirm that the SfPdfViewer2 component is properly configured.
- If form fields don't display, verify your `DocumentPath` points to a PDF with form fields.
- For import issues, ensure JSON keys match the PDF field `Name` property values.

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create](./manage-form-fields/create-form-fields), [edit](./manage-form-fields/modify-form-fields), [style](./manage-form-fields/customize-form-fields) and [remove](./manage-form-fields/remove-form-fields) form fields
- [Edit form fields](./manage-form-fields/edit-form-fields)
- [Group form fields](./group-form-fields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)