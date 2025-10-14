---
layout: post
title: Update form fields using a context menu in SfPdfViewer | Syncfusion
description: Learn how to update PDF form fields at runtime using a context menu with the Syncfusion Blazor SfPdfViewer component, including event handling and updates.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Update form fields using a context menu in Blazor SfPdfViewer

Update PDF form fields at runtime by handling the [FormFieldClick event](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormFieldClickArgs.html) and invoking the [UpdateFormFieldsAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_UpdateFormFieldsAsync_Syncfusion_Blazor_SfPdfViewer_FormField_) method of the SfPdfViewer. The following example shows how to open a context menu on form-field click and apply the selected menu item text as the form field value. This example uses the Syncfusion Blazor ContextMenu component to update the field value.

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
                         FormFieldClick="@formFeildClick">
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
    SfPdfViewer2 Viewer;
    SfContextMenu<CustomItem> contextMenuObj;

    private class CustomItem
    {
        public string Content { get; set; }
        public string Id { get; set; }
    }

    //Sets the PDF document path for initial loading.
    private string DocumentPath { get; set; } = "wwwroot/FF1.pdf";

    double x = 0; double y = 0;
    private string feildId = "";
    FormField formField;
    private CustomItem SelectedItem;

    private void mouseOver(MouseEventArgs args)
    {
        x = args.ClientX;
        y = args.ClientY;
    }

    //This method will get invoked when the menu item is clicked.
    private async void selectedHandler(MenuEventArgs<CustomItem> args)
    {
        SelectedItem = args.Item;
        Dictionary<string, string> param = new Dictionary<string, string>();
        param.Add(feildId, SelectedItem.Content);
        formField.Value = SelectedItem.Content;
        //This method is used to update the isReadOnly property of the form field.
        await Viewer.UpdateFormFieldsAsync(formField);
    }

    //This method will get invoked when you click on the form field like name.
    private void formFeildClick(FormFieldClickArgs args)
    {
        feildId = args.Field.Id;
        formField = args.Field;
        //This method will open the context menu on the specified position.
        contextMenuObj.Open(x, y);
    }

    //Represents the collection to hold the menu items.
    private List<CustomItem> menuItems = new List<CustomItem>();

    //This method will get invoked once the SfPdfViewer is loaded.
    private async void documentLoad(LoadEventArgs args)
    {
        //Perform export annotations action in the SfPdfViewer.
        Dictionary<string, string> feilds = await Viewer.ExportFormFieldsAsObjectAsync();
        if (feilds.Keys.Count > 0)
        {
            foreach (KeyValuePair<string, string> feild in feilds)
            {
                if (menuItems.Count < 10)
                {
                    //Add custom menu item to the menuitems list.
                    menuItems.Add(new CustomItem() { Content = feild.Key, Id = feild.Key });
                }
            }

        }
    }
}

```

[View sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Update%20form%20fileds%20using%20Context%20Menu).

## See also

* [Form filling in Blazor SfPdfViewer component](../form-filling)
