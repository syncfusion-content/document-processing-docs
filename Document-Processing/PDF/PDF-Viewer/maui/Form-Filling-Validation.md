---
layout: post
title: Form Data Validation in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to validate form field data before saving a PDF document using the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Form Data Validation in .NET MAUI PDF Viewer (SfPdfViewer)

Before saving a filled PDF form, you may want to validate that all required fields contain acceptable values. Validation is performed by iterating the [FormFields](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_FormFields) collection, checking each field's value against your rules, and only proceeding with save if all criteria are met.

## Validation example

The following example validates a registration form before saving. It checks the criteria listed in the table below. If all criteria pass, the document is saved. Otherwise, an error dialog is shown.

| Field | Validation Rules |
|---|---|
| Name | Required. 3–30 characters. No numbers or special characters. |
| Email | Required. Must match standard email format. |
| Date of birth | Required. Must be in `dd/MM/yyyy` format. |
| Course | At least one item must be selected. |
| Signature | Must not be empty. |

{% tabs %}
{% highlight C# %}
async void ValidateAndSaveForm()
{
    ReadOnlyObservableCollection<FormField> _formFields = PdfViewer.FormFields;

    if (_formFields == null || _formFields.Count == 0)
        return;

    List<string> errors = new List<string>();

    foreach (FormField formField in _formFields)
    {
        if (formField is TextFormField textFormField)
        {
            if (textFormField.Name == "Name")
            {
                if (string.IsNullOrEmpty(textFormField.Text))
                    errors.Add("Name is required.");
                else if (textFormField.Text.Length < 3)
                    errors.Add("Name should have at least 3 characters.");
                else if (textFormField.Text.Length > 30)
                    errors.Add("Name should not exceed 30 characters.");
                else if (Regex.IsMatch(textFormField.Text, @"[0-9]"))
                    errors.Add("Name should not contain numbers.");
                else if (Regex.IsMatch(textFormField.Text, @"[!@#$%^&*(),.?""{|}|<>]"))
                    errors.Add("Name should not contain special characters.");
            }
            else if (textFormField.Name == "dob")
            {
                if (string.IsNullOrEmpty(textFormField.Text))
                    errors.Add("Date of birth is required.");
                else if (!DateTime.TryParseExact(textFormField.Text, "dd/MM/yyyy",
                         CultureInfo.InvariantCulture, DateTimeStyles.None, out _))
                    errors.Add("Date of birth should be in dd/MM/yyyy format.");
            }
            else if (textFormField.Name == "email")
            {
                if (string.IsNullOrEmpty(textFormField.Text))
                    errors.Add("Email is required.");
                else if (!Regex.IsMatch(textFormField.Text, @"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"))
                    errors.Add("Email should be in the correct format.");
            }
        }
        else if (formField is ListBoxFormField listBoxFormField)
        {
            if (listBoxFormField.SelectedItems.Count == 0)
                errors.Add("Please select at least one course from the list.");
        }
        else if (formField is SignatureFormField signatureFormField)
        {
            if (signatureFormField.Signature == null)
                errors.Add("Please sign in the signature field.");
        }
    }

    if (errors.Count > 0)
    {
        await DisplayAlert("Validation Errors", string.Join("\n", errors), "Try Again");
    }
    else
    {
        string fileName = Path.Combine(FileSystem.Current.AppDataDirectory, "FilledForm.pdf");
        using FileStream fileStream = File.Create(fileName);
        PdfViewer.SaveDocument(fileStream);
        await DisplayAlert("Success", "Form submitted successfully.", "OK");
    }
}
{% endhighlight %}
{% endtabs %}

## See Also

* [Form Field Events](https://help.syncfusion.com/maui/pdf-viewer/form-filling-events)
* [Form Fields Collection](https://help.syncfusion.com/maui/pdf-viewer/form-filling-collection)
* [Import and Export Form Data](https://help.syncfusion.com/maui/pdf-viewer/form-filling-import-export)
* [Save a Document](https://help.syncfusion.com/maui/pdf-viewer/save-a-document)
