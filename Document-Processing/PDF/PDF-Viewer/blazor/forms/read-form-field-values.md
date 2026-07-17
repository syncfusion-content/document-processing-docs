---
layout: post
title: Read and Extract PDF Form Field Values in Blazor | Syncfusion
description: Learn how to read and extract values from PDF form fields in the Blazor SfPdfViewer, including text, checkboxes, radio buttons, dropdowns, and signatures.
platform: document-processing
control: SfPdfViewer
documentation: ug
domainurl: ##DomainURL##
---

# Read and Extract PDF Form Field Values in Blazor SfPdfViewer

The Blazor SfPdfViewer allows you to read the values of interactive PDF form fields including textboxes, checkboxes, radio buttons, dropdowns, signatures, and more. Use the APIs below to retrieve form data programmatically for validation, submission, or syncing with your app state.

This guide shows common patterns with concise code snippets you can copy into your Blazor components.

## Access the Form Field Collection

Get all available form field data by using the [GetFormFieldsAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetFormFieldsAsync) method.

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

<SfButton OnClick="@GetAllFormFields">Get Form Fields</SfButton>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-document.pdf";

    private async Task GetAllFormFields()
    {
        if (viewer == null) return;
        List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();
        Console.WriteLine($"Total form fields: {formFields.Count}");
    }
}
{% endhighlight %}
{% endtabs %}

## Read Text Field Values

Find the text field by name and read its value property.

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

<SfButton OnClick="@ReadTextFields">Read Text Field</SfButton>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-document.pdf";

    private async Task ReadTextFields()
    {
        if (viewer == null) return;
        List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();
        TextBoxField? nameField = formFields.FirstOrDefault(field => field is TextBoxField && field.Name == "name") as TextBoxField;
        string nameValue = nameField?.Value ?? string.Empty;
        Console.WriteLine($"Name field value: {nameValue}");
    }
}
{% endhighlight %}
{% endtabs %}

## Read Checkbox / Radio Button Values

Check whether a checkbox or radio button is selected by reading its `IsChecked` or `IsSelected` property.

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

<SfButton OnClick="@ReadCheckboxValues">Read Checkbox Values</SfButton>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-document.pdf";

    private async Task ReadCheckboxValues()
    {
        if (viewer == null) return;
        List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();
        List<RadioButtonField> radioButtons = formFields.OfType<RadioButtonField>().Where(field => field.Name == "gender").ToList();
        RadioButtonField? checkedField = radioButtons.FirstOrDefault(field => field.IsSelected);
        string fieldName = checkedField?.Name ?? string.Empty;
        Console.WriteLine($"Selected radio button: {fieldName}");
    }
}
{% endhighlight %}
{% endtabs %}

## Read Dropdown Values

Read the dropdown's selected option by accessing the `Value` property.

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

<SfButton OnClick="@ReadDropdownValues">Read Dropdown Value</SfButton>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-document.pdf";

    private async Task ReadDropdownValues()
    {
        if (viewer == null) return;

        try
        {
            List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();
            DropDownField? dropdownField = formFields?.FirstOrDefault(field => field is DropDownField && field.Name == "state") as DropDownField;

            if (dropdownField != null && dropdownField.Items != null && dropdownField.Items.Count > 0)
            {
                // Read ALL values in dropdown
                Console.WriteLine("=== All Dropdown Values ===");
                for (int i = 0; i < dropdownField.Items.Count; i++)
                {
                    Console.WriteLine($"Index {i}: Name = {dropdownField.Items[i].Name}, Value = {dropdownField.Items[i].Value}");
                }

                // Get selected item using SelectedIndex
                int selectedIndex = dropdownField.SelectedIndex;
                string selectedValue = selectedIndex >= 0 ? dropdownField.Items[selectedIndex].Value : string.Empty;
                Console.WriteLine($"\nCurrently Selected: Index={selectedIndex}, Value={selectedValue}");

                // Update dropdown with new items
                dropdownField.Items = new List<ListItem>
                {
                    new ListItem { Name = "USA", Value = "US" },
                    new ListItem { Name = "Canada", Value = "CA" },
                    new ListItem { Name = "Mexico", Value = "MX" }
                };
                dropdownField.SelectedIndex = 0; // Set default selection

                await viewer.UpdateFormFieldsAsync(new List<FormFieldInfo> { dropdownField });
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
}
{% endhighlight %}
{% endtabs %}

## Read Signature Field Data

This reads the signature path data stored in a signature field so it can be later converted to an image.

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

<SfButton OnClick="@ReadSignatureData">Read Signature Data</SfButton>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-document.pdf";

    private async Task ReadSignatureData()
    {
        if (viewer == null) return;
        List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();
        SignatureField? signatureField = formFields.FirstOrDefault(field => field is SignatureField && field.Name == "signature") as SignatureField;
        string signatureData = signatureField?.Value ?? string.Empty;
        Console.WriteLine($"Signature data: {signatureData}");
    }
}
{% endhighlight %}
{% endtabs %}

## Extract All Form Field Values

This iterates every field in the collection and logs each field's name and value, useful for exporting or validating all form data.

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

<SfButton OnClick="@ExtractAllFieldValues">Extract All Values</SfButton>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-document.pdf";

    private async Task ExtractAllFieldValues()
    {
        if (viewer == null) return;
        List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();

        foreach (FormFieldInfo field in formFields)
        {
            if (field is CheckBoxField checkBoxField)
            {
                Console.WriteLine($"{field.Name}: {checkBoxField.IsChecked}");
            }
            else if (field is RadioButtonField radioButtonField)
            {
                Console.WriteLine($"{field.Name}: {radioButtonField.IsSelected}");
            }
            else if (field is TextBoxField textBoxField)
            {
                Console.WriteLine($"{field.Name}: {textBoxField.Value}");
            }
            else if (field is DropDownField dropDownField)
            {
                ListItem? selectedItem = dropDownField.Items.ElementAtOrDefault(dropDownField.SelectedIndex);
                Console.WriteLine($"{field.Name}: {selectedItem?.Value}");
            }
            else
            {
                Console.WriteLine($"{field.Name}: (unknown type)");
            }
        }
    }
}
{% endhighlight %}
{% endtabs %}

## Extract Form Data After Document Loaded

Place your form-reading logic inside the `DocumentLoaded` event handler, so values are read after the PDF is loaded in the viewer.

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@OnDocumentLoaded"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-document.pdf";

    private async Task OnDocumentLoaded()
    {
        if (viewer == null) return;

        // Access form data right after the PDF loads
        List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();
        TextBoxField? emailField = formFields.FirstOrDefault(field => field is TextBoxField && field.Name == "email") as TextBoxField;
        string email = emailField?.Value ?? string.Empty;
        
        Console.WriteLine($"Email: {email}");
    }
}
{% endhighlight %}
{% endtabs %}

N> For a hands-on reference with working code examples, explore the sample projects available on [GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Form%20Designer/Components/Pages).

## Use Cases

- Validate and pre-fill form fields in your application before user submission.
- Submit filled form data from the viewer to a back end service for processing or storage.
- Synchronize form field values with external UI components to keep application state in sync.
- Export form data for reporting, archival, or integration with other systems.

## Troubleshooting

- Use the exact field names defined in the PDF when searching through the `formFields` collection.
- If a field might be missing in some documents, add null checks.

## See also

- [Programmatic Support for Form Designer](./create-programmatically)
- [Form Designer Events](./events)