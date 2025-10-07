---
layout: post
title: Programmatic Support for Form Designer in SfPdfViewer | Syncfusion
description: Learn how to create, modify, and manage form fields programmatically in the Syncfusion Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Programmatic Support for Form Designer in Blazor PDF Viewer

The Blazor SfPdfViewer component provides programmatic control over PDF form fields, enabling creation, update, and management entirely through code for automated and reliable form workflows.

N> Programmatic operations do not require enabling the Form Designer UI. Ensure a document is loaded and an instance reference (for example, SfPdfViewer2 via @ref) is available before invoking API methods.

## Adding Form Fields Programmatically

The Blazor SfPdfViewer offers a way to add form fields programmatically using the [`AddFormFieldsAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddFormFieldsAsync_System_Collections_Generic_List_Syncfusion_Blazor_SfPdfViewer_FormFieldInfo__) method. This method accepts a list of [`FormFieldInfo`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html) objects, where each object represents a form field (for example, ButtonField, TextBoxField, PasswordField, CheckBoxField, RadioButtonField, DropDownField, ListBoxField, SignatureField) with specific properties and [`Bound`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.Bound.html) coordinates.

The example below demonstrates how to add form fields in the SfPdfViewer2 component:

```cshtml
@page "/"

<!-- PDF Viewer component with reference binding and document loading -->
<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@AddFormFields"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    // Reference to the PDF Viewer instance
    private SfPdfViewer2 viewer;
    
    // Path to the PDF document
    private string DocumentPath = "wwwroot/data/formDesigner_Empty.pdf";

    // Method triggered when the document is loaded
    private async Task AddFormFields()
    {
        // Define various form fields with their properties and positions
        List<FormFieldInfo> formFields = new List<FormFieldInfo>
        {
            new ButtonField { Name = "Button Field", Bounds = new Bound { X = 278, Y = 157, Width = 150, Height = 40 } },
            new TextBoxField { Name = "TextBox Field", Bounds = new Bound { X = 278, Y = 247, Width = 200, Height = 24 } },
            new PasswordField { Name = "Password Field", Bounds = new Bound { X = 278, Y = 323, Width = 200, Height = 24 } },
            new CheckBoxField { Name = "CheckBox Field1", IsChecked = false, Bounds = new Bound { X = 278, Y = 398, Width = 20, Height = 20 } },
            new CheckBoxField { Name = "CheckBox Field2", IsChecked = false, Bounds = new Bound { X = 386, Y = 398, Width = 20, Height = 20 } },
            new RadioButtonField { Name = "RadioButton", Value = "Value1", IsSelected = false, Bounds = new Bound { X = 278, Y = 470, Width = 20, Height = 20 } },
            new RadioButtonField { Name = "RadioButton", Value = "Value2", IsSelected = false, Bounds = new Bound { X = 386, Y = 470, Width = 20, Height = 20 } },
            new DropDownField { Name = "DropDown Field", Bounds = new Bound { X = 278, Y = 536, Width = 200, Height = 24 } },
            new ListBoxField { Name = "ListBox Field", Bounds = new Bound { X = 278, Y = 593, Width = 198, Height = 66 } },
            new SignatureField { Name = "Signature Field", Bounds = new Bound { X = 278, Y = 686, Width = 200, Height = 63 } }
        };
        
        // Add form fields asynchronously to the PDF Viewer
        await viewer.AddFormFieldsAsync(formFields);
    }
}
```
The following image illustrates the programmatic addition of form fields in Blazor SfPdfViewer:

![Programmatic addition of form fields in Blazor SfPdfViewer](../form-designer/form-designer-images/blazor-pdfviewer-form-designer-add.png)

N> Form fields can also be added interactively using the Form Designer UI for an intuitive, point-and-click experience.  
[Interactively Add Form Fields](./ui-interactions)

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/AddFormField.razor).

## Form Field Settings  

The Blazor SfPdfViewer provides [`FormFieldSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldSettings.html) to configure form field appearance, including borders, background, text styles, and related properties.

The example below demonstrates configuring [thickness](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldSettings.html#Syncfusion_Blazor_SfPdfViewer_FormFieldSettings_Thickness). Additional options include **[background color](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldSettings.html#Syncfusion_Blazor_SfPdfViewer_FormFieldSettings_BackgroundColor), [border color](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldSettings.html#Syncfusion_Blazor_SfPdfViewer_FormFieldSettings_BorderColor), [text color](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldSettings.html#Syncfusion_Blazor_SfPdfViewer_FormFieldSettings_Color), [font family](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldSettings.html#Syncfusion_Blazor_SfPdfViewer_FormFieldSettings_FontFamily), [font size](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldSettings.html#Syncfusion_Blazor_SfPdfViewer_FormFieldSettings_FontSize), and [font style](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldSettings.html#Syncfusion_Blazor_SfPdfViewer_FormFieldSettings_FontStyle)**.

```cshtml
@page "/"

<!-- PDF Viewer component with reference binding and document loading -->
<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <!-- Form field settings with specified thickness -->
    <FormFieldSettings Thickness="@thickness"></FormFieldSettings>
    <!-- Event triggered when the document is loaded -->
    <PdfViewerEvents DocumentLoaded="@AddFormFields"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    // Reference to the PDF Viewer instance
    private SfPdfViewer2 viewer;

    // Default thickness value for form fields
    private double thickness { get; set; } = 4;

    // Path to the PDF document to be loaded in the viewer
    private string DocumentPath = "wwwroot/data/formDesigner_Empty.pdf";

    // Method triggered when the document is loaded
    private async Task AddFormFields()
    {
        // Define a new ListBox form field with specified name and position
        ListBoxField listBox = new ListBoxField 
        { 
            Name = "ListBox Field", 
            Bounds = new Bound { X = 278, Y = 593, Width = 198, Height = 66 } 
        };

        // Add the form field asynchronously to the PDF Viewer
        await viewer.AddFormFieldsAsync(new List<FormFieldInfo> { listBox });
    }
}

```
The following image illustrates the listbox field thickness customization in Blazor SfPdfViewer:

![Form Field Thickness Customization in Blazor SfPdfViewer](../form-designer/form-designer-images/blazor-pdfviewer-form-designer-setting-thickness.png)

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/FieldSetting.razor).

## Activating and Deactivating Form Field Mode

The [`SetFormDrawingModeAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SetFormDrawingModeAsync_System_Nullable_Syncfusion_Blazor_SfPdfViewer_FormFieldType__) method defines the type of form field that can be drawn interactively in the viewer. This controls the UI drawing behavior and is independent of programmatic creation via `AddFormFieldsAsync`.

- **Setting Form Field Mode:** Specify a [`FormFieldType`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldType.html) to allow adding a specific form field.
- **Clearing Form Field Mode:** Reset the form field selection by calling [`SetFormDrawingModeAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SetFormDrawingModeAsync_System_Nullable_Syncfusion_Blazor_SfPdfViewer_FormFieldType__) without parameters.

### Example

Below is an example demonstrating how to set and clear the form field drawing mode:

```cshtml
@page "/"
@using Syncfusion.Blazor.Buttons

<!-- Buttons to set and clear the form field drawing mode -->
<SfButton @onclick="SetFormDrawingMode">Set Form Field Type</SfButton>
<SfButton @onclick="ClearFormDrawingMode">Clear Form Field Type</SfButton>

<!-- PDF Viewer component -->
<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

@code {
    // Reference to the PDF Viewer instance
    private SfPdfViewer2 viewer;

    // Path to the PDF document to be loaded in the viewer
    private string DocumentPath = "wwwroot/data/formDesigner_Empty.pdf";

    // Method to enable form field drawing mode with a specific field type
    async Task SetFormDrawingMode()
    {
        // Sets the form field drawing mode to DropDown, allowing users to add dropdown fields
        await viewer.SetFormDrawingModeAsync(FormFieldType.DropDown);
    }

    // Method to disable form field drawing mode
    async Task ClearFormDrawingMode()
    {
        // Clears the form field drawing mode, preventing further form field additions
        await viewer.SetFormDrawingModeAsync();
    }
}
```
The following image illustrates setting and clearing the form field mode in Blazor SfPdfViewer:  

![Set and Clear Form Field Mode in Blazor SfPdfViewer](../form-designer/form-designer-images/blazor-pdfviewer-form-designer-setmode.gif)

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/SetMode.razor).

## Update Form Fields

Form fields can be modified dynamically by retrieving them with [`GetFormFieldsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetFormFieldsAsync) and applying changes using [`UpdateFormFieldsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_UpdateFormFieldsAsync_Syncfusion_Blazor_SfPdfViewer_FormField_). Use null/empty checks and batch updates to efficiently apply multiple changes.

### Appearance Properties
Controls the visual aspects of form fields, including [background color](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html#Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_BackgroundColor), [border color](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html#Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_BorderColor), [text color](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html#Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_Color), [thickness](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html#Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_Thickness), [maxLength](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.TextBoxField.html#Syncfusion_Blazor_SfPdfViewer_TextBoxField_MaxLength), [visibility](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html#Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_Visibility), [font size](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html#Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_FontSize), [font family](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html#Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_FontFamily), [font style](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html#Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_FontStyle), and [text alignment](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html#Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_TextAlignment). These properties customize the visual presentation of fields.

```cshtml
@page "/"

<!-- PDF Viewer component with reference binding and document loading -->
<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <!-- Event triggered when the document is loaded -->
    <PdfViewerEvents DocumentLoaded="@UpdateFormField"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    // Reference to the PDF Viewer instance
    private SfPdfViewer2 viewer;

    // Path to the PDF document to be loaded in the viewer
    private string DocumentPath = "wwwroot/data/formDesigner_Document.pdf";

    // Method triggered when the document is loaded
    private async Task UpdateFormField()
    {
        // Retrieve the list of added form fields from the PDF Viewer
        List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();

        // Access the first form field in the list (assuming it is a button field)
        FormFieldInfo buttonField = formFields[0];

        // Modify the appearance properties of the form field
        buttonField.BackgroundColor = "#008000";
        buttonField.BorderColor = "#FFFF00";     
        buttonField.Thickness = 2;                

        // Update the form field in the PDF Viewer with the new properties
        await viewer.UpdateFormFieldsAsync(new List<FormFieldInfo> { buttonField });
    }
}

```
The following image illustrates updating the appearance of a button form field in Blazor SfPdfViewer:  

![Update form field appearance in Blazor SfPdfViewer](../form-designer/form-designer-images/blazor-pdfviewer-form-designer-update-apperance.png)

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/UpdateApperanceProperties.razor).

### Identification & Metadata Properties
Use [name](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ListItem.html#Syncfusion_Blazor_SfPdfViewer_ListItem_Name) (identifier) and [value](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ListItem.html#Syncfusion_Blazor_SfPdfViewer_ListItem_Value) (display/value data) on dropdown [ListItem] entries to define item metadata. These properties help organize options and manage related form fields effectively.

```cshtml
@page "/"

<!-- PDF Viewer component with reference binding and document loading -->
<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@UpdateFormField"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath = "wwwroot/data/formDesigner_Document.pdf";

    private async Task UpdateFormField()
    {
        // Retrieve the list of added form fields
        List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();
        foreach (FormFieldInfo field in formFields)
        {
            if (field is DropDownField dropDown)
            {
                dropDown.Items = new List<ListItem> {
                        new ListItem { Name = "option 1", Value = "Option 1" },
                        new ListItem { Name = "option 2", Value = "Option 2" },
                        new ListItem { Name = "option 3", Value = "Option 3" }
                    };
                // Update form fields in the viewer with new properties
                await viewer.UpdateFormFieldsAsync(new List<FormFieldInfo> { dropDown });
            }
        }
    }
}
```
The following image illustrates updating the metadata of a dropdown field in Blazor SfPdfViewer:  

![Update Form Field Metadata in Blazor SfPdfViewer](../form-designer/form-designer-images/blazor-pdfviewer-form-designer-update-value.png)

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/UpdateValueProperties.razor).

### Grouping and Synchronizing Form Fields Properties

When multiple fields share the same name, changes apply to all linked fields. Updates to **[Value](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.TextBoxField.html#Syncfusion_Blazor_SfPdfViewer_TextBoxField_Value), [Required](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html#Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_IsRequired), [Readonly](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html#Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_IsReadOnly), [Multiline](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.TextBoxField.html#Syncfusion_Blazor_SfPdfViewer_TextBoxField_IsMultiline), and [Tooltip](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldInfo.html#Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_TooltipText)** reflect instantly. This ensures consistency across the document.

```cshtml
@page "/"

<!-- PDF Viewer component with reference binding and document loading -->
<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="@UpdateFormField"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath = "wwwroot/data/formDesigner_Document.pdf";

    private async Task UpdateFormField()
    {
        // Retrieve the list of added form fields
        List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();
        FormFieldInfo radioButton = formFields[6];
        radioButton.IsReadOnly = true;
        radioButton.IsRequired = true;
        await viewer.UpdateFormFieldsAsync(new List<FormFieldInfo> { radioButton });
    }
}
```
The following image illustrates updating linked properties of a radio button form field in Blazor SfPdfViewer:  

![Update Linked Field Properties in Blazor SfPdfViewer](../form-designer/form-designer-images/blazor-pdfviewer-form-designer-linked-properties.png)

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/UpdateLinkedProperties.razor).

N> Users can also update form fields through the UI in SfPdfViewer for an intuitive, interactive experience.  
[Interactively Update Form Fields](./ui-interactions)

## Delete Form Fields

The [`DeleteFormFieldsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DeleteFormFieldsAsync_System_Boolean_) method enables the removal of form fields from the document, allowing users to manage and modify form structures efficiently.  

### Delete All Form Fields  
Removes all form fields from the document using [`DeleteFormFieldsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DeleteFormFieldsAsync_System_Boolean_) , clearing all interactive elements at once.

```cshtml
@page "/"
@using Syncfusion.Blazor.Buttons

<!-- Button to delete all form fields -->
<SfButton onclick="@DeleteAllFormFields">Delete All Form Fields</SfButton>

<!-- PDF Viewer component with reference binding and document loading -->
<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

@code {
    // Reference to the PDF Viewer instance
    private SfPdfViewer2 viewer;
    
    // Path to the PDF document
    private string DocumentPath = "wwwroot/data/formDesigner_Document.pdf";
    
    private async Task DeleteAllFormFields() 
    {
        // Deletes all form fields from the PDF Viewer.
        await viewer.DeleteFormFieldsAsync(true);
    }
}
```
The following image illustrates deleting all form fields in Blazor SfPdfViewer:  

![Delete All Form Fields in Blazor SfPdfViewer](../form-designer/form-designer-images/blazor-pdfviewer-form-designer-delete-all.png)

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/DeleteAllFields.razor).

### Delete Selected Form Fields  
Deletes only the currently selected form field using [`DeleteFormFieldsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DeleteFormFieldsAsync_System_Boolean_), enabling users to modify the document while keeping the rest of the form structure intact.

```cshtml
@page "/"
@using Syncfusion.Blazor.Buttons

<!-- Button to delete the selected form fields -->
<SfButton onclick="@DeleteSelectedFormField">Delete Selected Form Field</SfButton>

<!-- PDF Viewer component with reference binding and document loading -->
<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

@code {
    // Reference to the PDF Viewer instance
    private SfPdfViewer2 viewer;
    
    // Path to the PDF document
    private string DocumentPath = "wwwroot/data/formDesigner_Document.pdf";
    
    private async Task DeleteSelectedFormField() 
    {
        // Delete selected form field from the PDF Viewer.
        await viewer.DeleteFormFieldsAsync(false);
    }
}
```
The following image illustrates deleting a selected password field in Blazor SfPdfViewer:  

![Delete Selected Password Field in Blazor SfPdfViewer](../form-designer/form-designer-images/blazor-pdfviewer-form-designer-delete-selected.png)

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/DeleteSelectedField.razor).

### Delete Form Fields by IDs  
Removes specific form fields using [`DeleteFormFieldsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DeleteFormFieldsAsync_System_Collections_Generic_List_System_String__) based on their unique identifiers, allowing precise control over which fields are deleted without affecting others. The example below deletes a single field by ID; pass multiple IDs to delete several fields at once.  

```cshtml
@page "/"
@using Syncfusion.Blazor.Buttons

<!-- Delete form fields by ID -->
<SfButton @onclick="DeleteFormFields">Delete Form Field By ID</SfButton>

<!-- PDF Viewer component with reference binding and document loading -->
<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

@code {
    // Reference to the PDF Viewer instance
    private SfPdfViewer2 viewer;

    // Path to the PDF document that will be loaded into the viewer
    private string DocumentPath = "wwwroot/data/formDesigner_Document.pdf";

    // Method to delete form fields based on their ID
    private async Task DeleteFormFields()
    {
        List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();
        await viewer.DeleteFormFieldsAsync(new List<string> {formFields[0].Id}); // Delete form fields by ID
    }
}
```
The following image illustrates deleting form fields by their IDs in Blazor SfPdfViewer:  

![Delete Form Fields by IDs in Blazor SfPdfViewer](../form-designer/form-designer-images/blazor-pdfviewer-form-designer-delete-ids.png)

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/DeleteById.razor).

N> Users can also delete form fields through the UI in SfPdfViewer for an intuitive, interactive experience.  
[Interactively Delete Form Fields](./ui-interactions)

## Select Form Field

Form fields can be programmatically selected using the [`SelectFormFieldAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SelectFormFieldAsync_Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_) method. Selection is supported either by unique ID or by passing the form field object reference.

### Select Form Field by ID

The following example demonstrates selecting a form field by passing the form field object reference to [`SelectFormFieldAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SelectFormFieldAsync_Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_). To select by unique ID instead, use the string overload of [`SelectFormFieldAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SelectFormFieldAsync_System_String_).

```cshtml
@page "/"
@using Syncfusion.Blazor.Buttons

<!-- Button to select a form field by its ID -->
<SfButton @onclick="SelectFormFieldByID">Select Form Field By ID</SfButton>

<!-- PDF Viewer component with reference binding and document loading -->
<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

@code {
    // Reference to the PDF Viewer instance
    private SfPdfViewer2 viewer;

    // Path to the PDF document that will be loaded in the viewer
    private string DocumentPath = "wwwroot/data/formDesigner_Document.pdf";

    // Method to select a form field by ID
    private async Task SelectFormFieldByID()
    {
        // Retrieve all form fields currently present in the PDF
        List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();
        // Select the form field asynchronously using its ID
        await viewer.SelectFormFieldAsync(formFields[0]);
  
    }
}
```
The following image illustrates selecting a button field in Blazor SfPdfViewer:  

![Select Button Field by ID in Blazor SfPdfViewer](../form-designer/form-designer-images/blazor-pdfviewer-form-designer-select-id.png)

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/SelectFieldById.razor).

### Select Form Field by Object Reference

Optionally, retrieve all available form fields using [`GetFormFieldsAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetFormFieldsAsync), and then select a specific field by passing its object reference to [`SelectFormFieldAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SelectFormFieldAsync_Syncfusion_Blazor_SfPdfViewer_FormFieldInfo_).

```cshtml
@page "/"
@using Syncfusion.Blazor.Buttons

<!-- Button to trigger form field selection -->
<SfButton @onclick="SelectFormField">Select Form Field</SfButton>

<!-- PDF Viewer component with reference binding and document loading -->
<SfPdfViewer2 @ref="@viewer" Height="100%" Width="100%" DocumentPath="@DocumentPath">
</SfPdfViewer2>

@code {
    // Reference to the PDF Viewer instance
    private SfPdfViewer2 viewer;

    // Path to the PDF document that will be loaded in the viewer
    private string DocumentPath = "wwwroot/data/formDesigner_Document.pdf";

    // Method to select the first available form field in the document
    private async Task SelectFormField()
    {
        // Retrieve all form fields present in the PDF
        List<FormFieldInfo> formFields = await viewer.GetFormFieldsAsync();
        // Select the first form field from the list
        FormFieldInfo formField = formFields[3];
        await viewer.SelectFormFieldAsync(formField);

    }
}
```
The following image shows selecting a checkbox field in the Blazor PDF Viewer (SfPdfViewer):  

![Select CheckBox Field in Blazor SfPdfViewer](../form-designer/form-designer-images/blazor-pdfviewer-form-designer-select-field.png)

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/SelectByField.razor).

N> Enable the form field interaction mode before selecting a field.
For details, see [Interaction mode](./overview).

## See also

* [Overview of Form Designer](./overview)
* [UI interactions in form Designer](./ui-interactions)
* [Events in Form Designer](./events)