---
layout: post
title: Style form fields in the Blazor SfPdfViewer | Syncfusion
description: Learn how to configure typography, colors, borders, alignment, and other style settings for form fields using the UI and Programmatically.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Customize the appearance of PDF Form Fields in Blazor SfPdfViewer

**Styling** customizes appearance only (font, color, alignment, border, background, indicator text).

## Customize appearance of form fields using the UI
Use the **Properties** panel to adjust:
- Font family and size, text color, and alignment
- Border color and thickness
- Background color
![Textbox style from UI showing font, color, and border settings](../../../javascript-es6/images/ui-textbox-style.png)

## Customize appearance of form fields programmatically
Use [UpdateFormFieldsAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_UpdateFormFieldsAsync_System_Collections_Generic_List_Syncfusion_Blazor_SfPdfViewer_FormFieldInfo__) to apply styles:

```cshtml
@page "/"
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton @onclick="OnEditTextbox">Apply Textbox Changes</SfButton>

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-designer.pdf";

    private async Task OnEditTextbox()
    {
        if (viewer == null) return;

        List<FormFieldInfo> fields = await viewer.GetFormFieldsAsync();
        
        var field = fields?.FirstOrDefault(f => f.Name == "FirstName");
        
        if (field != null)
        {
            (field as TextBoxField).Value = "John";
            field.FontFamily = "Courier";
            field.FontSize = 12;
            field.Color = "black";
            field.BackgroundColor = "white";
            field.BorderColor = "black";
            field.Thickness = 2;
            field.TextAlignment = TextAlignment.Left;

            await viewer.UpdateFormFieldsAsync(new List<FormFieldInfo> { field });
        }
    }
}
```

## Set Default Styles for New Form Fields
Define defaults so fields added from the toolbar inherit styles:

```cshtml
@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <FormFieldSettings FontFamily="Courier"
                       FontSize="10"
                       Color="black"
                       BackgroundColor="White"
                       BorderColor="black"
                       Thickness="4">
    </FormFieldSettings>
</SfPdfViewer2>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-designer.pdf";
}
```

[View Sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Modify form fields](./modify-form-fields)
- [Remove form fields](./remove-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)