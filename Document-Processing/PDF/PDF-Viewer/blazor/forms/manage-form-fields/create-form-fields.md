---
layout: post
title: Create form fields in the Blazor SfPdfViewer | Syncfusion
description: Learn how to add each PDF form field using the PDF Viewer UI and how to create them programmatically in the Syncfusion Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Create PDF Form Fields in Blazor SfPdfViewer

Create or add new form fields visually with the Form Designer UI or programmatically using the Blazor SfPdfViewer API. This guide explains both methods and shows field‑specific examples and a complete runnable example.

**Outcome:**

The guide explains the following:
- How to add fields with the Form Designer UI.
- How to add and edit fields programmatically (API).
- How to add common field types: Textbox, Password, CheckBox, RadioButton, ListBox, DropDown, Signature, Initial.

## Steps

### 1. Create form fields using Form Designer UI.

- Enable the Form Designer mode in the PDF Viewer. See [Form Designer overview](../overview).
- Select a field type from the toolbar and click the PDF page to place it.
- Move/resize the field and configure properties in the **Properties** panel.

![Adding a form field using the Form Designer UI](../form-designer-images/add-formfields-formdesigner-sfpdfviewer.gif)

### 2. Create Form fields programmatically

Use the [AddFormFieldsAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddFormFieldsAsync_System_Collections_Generic_List_Syncfusion_Blazor_SfPdfViewer_FormFieldInfo__) method inside the viewer's [`DocumentLoaded`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentLoaded) event handler or in response to user actions.

Use this approach to generate form fields dynamically based on data or application logic.

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@AddFormFields"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath = "wwwroot/data/form-filling-document.pdf";

    private async Task AddFormFields()
    {
        // Create a text box form field
        TextBoxField textBoxField = new TextBoxField()
        {
            Name = "FirstName",
            Bounds = new Bound() { X = 146, Y = 229, Width = 150, Height = 24 }
        };

        // Add the form field to the PDF document
        await viewer.AddFormFieldsAsync(new List<FormFieldInfo> { textBoxField });
    }
}
{% endhighlight %}
{% endtabs %}

**Use programmatic creation when:**

- Building dynamic forms
- Pre-filling forms from databases
- Automating form creation workflows

## Field‑specific instructions

Below are concise UI steps and the programmatic examples for each common field type. The code samples below are complete per‑field examples you can reuse unchanged.

### Textbox

**Add via UI**: Open Form Designer toolbar → select Textbox → click page → configure properties

![Add Textbox](../form-designer-images/blazor-pdfviewer-textbox.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@AddTextBox"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath = "wwwroot/data/form-filling-document.pdf";

    private async Task AddTextBox()
    {
        // Create a text box field with properties
        TextBoxField textBoxField = new TextBoxField()
        {
            Name = "FirstName",
            Bounds = new Bound() { X = 100, Y = 150, Width = 200, Height = 24 },
            IsRequired = true,
            TooltipText = "Enter your first name",
            MaxLength = 40
        };

        // Add the text box field to the PDF document
        await viewer.AddFormFieldsAsync(new List<FormFieldInfo> { textBoxField });
    }
}
{% endhighlight %}
{% endtabs %}

### Button

**Add via UI**: Open form designer toolbar → Select Button → place → configure properties

![Add Button](../form-designer-images/blazor-pdfviewer-button.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@AddButtonField"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath = "wwwroot/data/form-filling-document.pdf";

    private async Task AddButtonField()
    {
        // Create a button field with properties
        ButtonField buttonField = new ButtonField()
        {
            Name = "SubmitButton",
            Bounds = new Bound() { X = 100, Y = 190, Width = 150, Height = 40 },
            TooltipText = "Click to submit the form"
        };

        // Add the button field to the PDF document
        await viewer.AddFormFieldsAsync(new List<FormFieldInfo> { buttonField });
    }
}
{% endhighlight %}
{% endtabs %}

### Password

**Add via UI**: Open form designer toolbar → Select Password → place → configure properties

![Add Password](../form-designer-images/blazor-pdfviewer-password.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@AddPasswordField"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath = "wwwroot/data/form-filling-document.pdf";

    private async Task AddPasswordField()
    {
        // Create a password field with properties
        PasswordField passwordField = new PasswordField()
        {
            Name = "AccountPassword",
            Bounds = new Bound() { X = 100, Y = 190, Width = 200, Height = 24 },
            IsRequired = true,
            MaxLength = 32,
            TooltipText = "Enter a secure password"
        };

        // Add the password field to the PDF document
        await viewer.AddFormFieldsAsync(new List<FormFieldInfo> { passwordField });
    }
}
{% endhighlight %}
{% endtabs %}

### CheckBox

**Add via UI**: Open form designer toolbar → Select CheckBox → click to place → duplicate for options.

![Add CheckBox](../form-designer-images/blazor-pdfviewer-checkbox.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@AddCheckBoxField"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath = "wwwroot/data/form-filling-document.pdf";

    private async Task AddCheckBoxField()
    {
        // Create a checkbox field with properties
        CheckBoxField checkBoxField = new CheckBoxField()
        {
            Name = "AgreeTerms",
            Bounds = new Bound() { X = 100, Y = 230, Width = 18, Height = 18 },
            IsChecked = false,
            TooltipText = "I agree to the terms"
        };

        // Add the checkbox field to the PDF document
        await viewer.AddFormFieldsAsync(new List<FormFieldInfo> { checkBoxField });
    }
}
{% endhighlight %}
{% endtabs %}

### RadioButton

**Add via UI**: Open form designer toolbar → Select RadioButton → place buttons using the same `name` to group them.

![Add RadioButton](../form-designer-images/blazor-pdfviewer-radiobutton.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@AddRadioButtonFields"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath = "wwwroot/data/form-filling-document.pdf";

    private async Task AddRadioButtonFields()
    {
        // Create radio button fields grouped by name 'Gender'
        RadioButtonField maleRadioButton = new RadioButtonField()
        {
            Name = "Gender",
            Value = "Male",
            Bounds = new Bound() { X = 100, Y = 270, Width = 16, Height = 16 }
        };

        RadioButtonField femaleRadioButton = new RadioButtonField()
        {
            Name = "Gender",
            Value = "Female",
            Bounds = new Bound() { X = 160, Y = 270, Width = 16, Height = 16 }
        };

        // Add the radio button fields to the PDF document
        await viewer.AddFormFieldsAsync(new List<FormFieldInfo> { maleRadioButton, femaleRadioButton });
    }
}
{% endhighlight %}
{% endtabs %}

### ListBox

**Add via UI**: Open form designer toolbar → Select ListBox → place → add items in Properties.

![Add ListBox](../form-designer-images/blazor-pdfviewer-listbox.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@AddListBoxField"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath = "wwwroot/data/form-filling-document.pdf";

    private async Task AddListBoxField()
    {
        // Create list items for the list box
        List<ListItem> items = new List<ListItem>()
        {
            new ListItem() { Name = "Item 1", Value = "item1" },
            new ListItem() { Name = "Item 2", Value = "item2" },
            new ListItem() { Name = "Item 3", Value = "item3" }
        };

        // Create a list box field with items
        ListBoxField listBoxField = new ListBoxField()
        {
            Name = "States",
            Bounds = new Bound() { X = 100, Y = 310, Width = 220, Height = 70 },
            Items = items
        };

        // Add the list box field to the PDF document
        await viewer.AddFormFieldsAsync(new List<FormFieldInfo> { listBoxField });
    }
}
{% endhighlight %}
{% endtabs %}

### DropDown

**Add via UI**: Open form designer toolbar → Select DropDown → place → add items → set default value.

![Add DropDown](../form-designer-images/blazor-pdfviewer-dropdown.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@AddDropDownField"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath = "wwwroot/data/form-filling-document.pdf";

    private async Task AddDropDownField()
    {
        // Create list items for the dropdown
        List<ListItem> options = new List<ListItem>()
        {
            new ListItem() { Name = "Item 1", Value = "item1" },
            new ListItem() { Name = "Item 2", Value = "item2" },
            new ListItem() { Name = "Item 3", Value = "item3" }
        };

        // Create a dropdown field with items
        DropDownField dropDownField = new DropDownField()
        {
            Name = "Country",
            Bounds = new Bound() { X = 560, Y = 320, Width = 150, Height = 24 },
            Items = options
        };

        // Add the dropdown field to the PDF document
        await viewer.AddFormFieldsAsync(new List<FormFieldInfo> { dropDownField });
    }
}
{% endhighlight %}
{% endtabs %}

### Signature Field

**Add via UI**: Open form designer toolbar → select Signature Field → place where signing is required → configure indicator text/thickness/tooltip/isRequired.

![Add Signature](../form-designer-images/blazor-pdfviewer-signature.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@AddSignatureField"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath = "wwwroot/data/form-filling-document.pdf";

    private async Task AddSignatureField()
    {
        // Create a signature field
        SignatureField signatureField = new SignatureField()
        {
            Name = "Sign",
            Bounds = new Bound() { X = 57, Y = 923, Width = 200, Height = 43 },
            TooltipText = "sign Here",
            IsRequired = true
        };

        // Add the signature field to the PDF document
        await viewer.AddFormFieldsAsync(new List<FormFieldInfo> { signatureField });
    }
}
{% endhighlight %}
{% endtabs %}

## Add fields dynamically with SetFormDrawingModeAsync

Use [`SetFormDrawingModeAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SetFormDrawingModeAsync_System_Nullable_Syncfusion_Blazor_SfPdfViewer_FormFieldType__) to switch the designer into a specific field mode and let users add fields on the fly.

### Edit Form Fields in Blazor SfPdfViewer

You can edit form fields using the UI or API.

#### Edit Using the UI
- Right click a field → **Properties** to update settings.
- Drag to move; use handles to resize.
- Use the toolbar to toggle field mode or add new fields.

#### Edit Programmatically

{% tabs %}
{% highlight razor %}
@page "/"
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton @onclick="EditTextBox">Edit TextBox</SfButton>
<SfButton @onclick="AddPasswordField">Add Password Field</SfButton>

<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@AddSignatureFields"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2? viewer;
    private string DocumentPath = "wwwroot/data/form-filling-document.pdf";

    private async Task AddSignatureFields()
    {
        // Create initial form field
        SignatureField signatureField = new SignatureField()
        {
            Name = "Sign",
            Bounds = new Bound() { X = 57, Y = 923, Width = 200, Height = 43 },
            TooltipText = "sign Here",
            IsRequired = true
        };

        await viewer.AddFormFieldsAsync(new List<FormFieldInfo> { signatureField });
    }

    private async Task EditTextBox()
    {
        // Retrieve all form fields
        List<FormFieldInfo> fields = await viewer.GetFormFieldsAsync();
        
        // Find and update the first name field
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

    private async Task EditButton()
    {
        // Retrieve all form fields
        List<FormFieldInfo> fields = await viewer.GetFormFieldsAsync();
        
        // Find and update the submit button field
        var field = fields?.FirstOrDefault(f => f.Name == "SubmitButton");
        if (field != null)
        {
            field.BackgroundColor = "#008000";
            field.Color = "white";
            field.FontFamily = "Arial";
            field.FontSize = 12;
            field.BorderColor = "black";
            field.Thickness = 2;
            
            await viewer.UpdateFormFieldsAsync(new List<FormFieldInfo> { field });
        }
    }

    private async Task AddPasswordField()
    {
        // Set form drawing mode to Password to allow users to draw password fields
        await viewer.SetFormDrawingModeAsync(FormFieldType.Password);
    }
}
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples)

## Troubleshooting

- If fields do not appear, verify that the PDF document path is correct and the document loads successfully in the SfPdfViewer2 component.
- Ensure the form field types (TextBoxField, PasswordField, etc.) are properly imported from the Syncfusion.Blazor.SfPdfViewer namespace.
- Check that the Bounds coordinates are within the PDF page dimensions to ensure fields are placed correctly.
- If using async operations, ensure proper error handling and null checks on the viewer reference.

## Related topics

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Modify form fields](./modify-form-fields)
- [Style form fields](./customize-form-fields)
- [Remove form fields](./remove-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form Fields API](../form-fields-api)