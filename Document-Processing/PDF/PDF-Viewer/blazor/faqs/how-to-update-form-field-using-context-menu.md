---
layout: post
title: Update form fields using a context menu in SfPdfViewer | Syncfusion
description: Learn how to update PDF form fields at runtime using a context menu with the Blazor SfPdfViewer component, including event handling and updates.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Update form fields using a context menu in Blazor SfPdfViewer

Update PDF form fields at runtime by handling the [FormFieldClick event](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldClickArgs.html) and invoking the [UpdateFormFieldsAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_UpdateFormFieldsAsync_Syncfusion_Blazor_SfPdfViewer_FormField_) method of the SfPdfViewer. The following example shows how to open a context menu on a form field click and apply the selected menu item text as the form field value.

```cshtml

@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Navigations

<div id="target" class="e-pdfviewer-signatureformfields"
     @onmousemove="mouseOver"
     style="position:absolute;left:0;right:0;top:0;bottom:0;z-index:100">

    <SfPdfViewer2 @ref="@Viewer"
                  DocumentPath="@DocumentPath"
                  Height="100%"
                  Width="100%">
        <PdfViewerEvents DocumentLoaded="@documentLoad"
                         FormFieldClick="@formFieldClick">
        </PdfViewerEvents>
    </SfPdfViewer2>

</div>

<SfContextMenu @ref="contextMenuObj"
               Target="#target"
               Items="@menuItems">
    <MenuFieldSettings Text="Content"></MenuFieldSettings>
    <MenuEvents TValue="CustomItem"
                ItemSelected="@selectedHandler"></MenuEvents>
</SfContextMenu>

@code {
    private SfPdfViewer2 Viewer;
    private SfContextMenu<CustomItem> contextMenuObj;

    private class CustomItem
    {
        private string Content { get; set; }
        private string Id { get; set; }
    }

    //Sets the PDF document path for initial loading.
    private string DocumentPath { get; set; } = "wwwroot/FF1.pdf";

    double x = 0; double y = 0;
    private FormField formField;
    private CustomItem SelectedItem;

    private void mouseOver(MouseEventArgs args)
    {
        x = args.ClientX;
        y = args.ClientY;
    }

    //Invoked when a menu item is clicked.
    private async Task selectedHandler(MenuEventArgs<CustomItem> args)
    {
        SelectedItem = args.Item;
        formField.Value = SelectedItem.Content;
        //Updates the form field with the selected menu item's text.
        await Viewer.UpdateFormFieldsAsync(formField);
    }

    //Invoked when a form field such as a name field is clicked.
    private void formFieldClick(FormFieldClickArgs args)
    {
        formField = args.Field;
        //Opens the context menu at the captured mouse position.
        contextMenuObj.Open(x, y);
    }

    //Represents the collection to hold the menu items.
    private List<CustomItem> menuItems = new List<CustomItem>();

    //Invoked once the SfPdfViewer is loaded.
    private async Task documentLoad(LoadEventArgs args)
    {
        //Exports form fields from the SfPdfViewer.
        Dictionary<string, string> fields = await Viewer.ExportFormFieldsAsObjectAsync();
        if (fields.Keys.Count > 0)
        {
            foreach (KeyValuePair<string, string> field in fields)
            {
                if (menuItems.Count < 10)
                {
                    //Adds a menu item for each exported form field.
                    menuItems.Add(new CustomItem() { Content = field.Key, Id = field.Key });
                }
            }

        }
    }
}

```

[View sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Update%20form%20fileds%20using%20Context%20Menu).

## See also

* [Form filling in Blazor SfPdfViewer component](../forms/form-filling)
