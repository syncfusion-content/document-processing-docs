---
layout: post
title: Add Custom Data to form fields in Blazor SfPdfViewer | Syncfusion
description: Learn how to attach, update, and read custom data on PDF form fields using programmatic APIs in the Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Add Custom Data to PDF Form Fields in Blazor SfPdfViewer

The Blazor `SfPdfViewer` allows you to attach **custom application-specific data** to form fields by using the CustomData property. This enables you to associate business identifiers, tags, validation hints, or workflow metadata with form fields.

Custom data remains associated with the form field for the duration of the viewer session and can be accessed or updated whenever the field is queried or modified.

This article explains how to:
- [Add custom data when creating form fields programmatically](#add-custom-data-while-creating-pdf-form-fields)
- [Update or replace custom data for existing fields](#update-or-replace-pdf-form-field-custom-data)
- [Read custom data from form fields](#read-custom-data-from-pdf-form-fields)
- [Apply best practices when using CustomData](#best-practices)

**Key Points**
- `CustomData` is a **free form object**; you control its structure.
- Use only **serializable values** such as JSON-serializable primitives, arrays, and plain objects.
- Custom data does not affect the field appearance or behavior unless consumed by your application logic.

## Add Custom Data While Creating PDF Form Fields

Attach custom data at field creation by passing a `CustomData` object to the form field when using [`AddFormFieldsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddFormFieldsAsync_System_Collections_Generic_List_Syncfusion_Blazor_SfPdfViewer_FormFieldInfo__).

{% tabs %}
{% highlight razor %} 

@using Syncfusion.Blazor.SfPdfViewer
@using System.Collections.Generic

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@AddFormFieldsWithCustomData"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-designer.pdf";

    private async Task AddFormFieldsWithCustomData()
    {
        if (viewer == null) return;

        // Define custom metadata
        Dictionary<string, object> customMetadata = new Dictionary<string, object>
        {
            { "businessId", "C-1024" },
            { "tags", new[] { "profile", "kiosk" } },
            { "requiredRole", "admin" }
        };

        // Create a TextBox field with custom data
        TextBoxField textField = new TextBoxField
        {
            Name = "Email",
            CustomData = customMetadata,
            Bounds = new Bound { X = 146, Y = 229, Width = 200, Height = 24 }
        };

        // Add the field to the document
        await viewer.AddFormFieldsAsync(new List<FormFieldInfo> { textField });
    }
}
{% endhighlight %}
{% endtabs %}

## Update or Replace Custom Data on PDF Form Fields

Modify an existing field's `CustomData` by using the [`UpdateFormFieldsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_UpdateFormFieldsAsync_System_Collections_Generic_List_Syncfusion_Blazor_SfPdfViewer_FormFieldInfo__) method. Retrieve fields using [`GetFormFieldsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetFormFieldsAsync) and update the CustomData property.

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons
@using System.Collections.Generic

<SfButton OnClick="@UpdateFirstFieldCustomData">Update First Field Custom Data</SfButton>

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-designer.pdf";

    private async Task UpdateFirstFieldCustomData()
    {
        if (viewer == null) return;

        // Get all form fields
        List<FormFieldInfo> fields = await viewer.GetFormFieldsAsync();
        if (fields.Count == 0) return;

        // Get the first field
        FormFieldInfo targetField = fields[0];

        // Merge new values into the existing CustomData to preserve existing metadata
        Dictionary<string, object> updatedCustomData = new Dictionary<string, object>
        {
            { "group", "profile" },
            { "flags", new[] { "pii", "masked" } },
            { "updatedAt", DateTime.Now.Ticks }
        };

        targetField.CustomData = updatedCustomData;

        // Update the field
        await viewer.UpdateFormFieldsAsync(new List<FormFieldInfo> { targetField });
    }
}
{% endhighlight %}
{% endtabs %}

N> Merge new values into the existing `CustomData` object before calling [`UpdateFormFieldsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_UpdateFormFieldsAsync_System_Collections_Generic_List_Syncfusion_Blazor_SfPdfViewer_FormFieldInfo__) to avoid unintentionally overwriting existing metadata.

## Read Custom Data from PDF Form Fields

Access the `CustomData` property from any form field at any point in the application flow using [`GetFormFieldsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetFormFieldsAsync), for example:
- after the document is loaded
- during save or submit operations
- while performing validation or conditional routing

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.SfPdfViewer
@using System.Collections.Generic

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@OnDocumentLoaded"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-designer.pdf";

    private async Task OnDocumentLoaded()
    {
        if (viewer == null) return;

        // Get all form fields
        List<FormFieldInfo> fields = await viewer.GetFormFieldsAsync();

        // Access custom data from each field
        foreach (FormFieldInfo field in fields)
        {
            Console.WriteLine($"Field: {field.Name}");
            if (field.CustomData != null)
            {
                Console.WriteLine($"Custom Data: {System.Text.Json.JsonSerializer.Serialize(field.CustomData)}");
            }
        }
    }
}
{% endhighlight %}
{% endtabs %}

## Best Practices

- Treat `CustomData` as application metadata, not display data.
- Use it to drive business rules, validation logic, and workflow decisions.
- Keep the data minimal and structured for easy processing.
- When cloning or copying form fields, ensure `CustomData` is copied or updated as required.

N> For a hands-on reference with working code examples, explore the sample projects available on [GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Form%20Designer/Components/Pages).

## See also

- [Programmatic Support for Form Designer](./create-programmatically)
- [Create form fields programmatically](./create-programmatically)
- [Update form fields programmatically](./create-programmatically)
- [Group form fields](./group-form-fields)
- [Form constraints](./form-constrain)
- [Read form field values](./read-form-field-values)