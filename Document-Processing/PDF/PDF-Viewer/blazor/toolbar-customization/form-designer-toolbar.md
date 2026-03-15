---
layout: post
title: Customize the form designer toolbar in Blazor SfPdfViewer | Syncfusion
description: Learn how to customize the form designer toolbar in the Syncfusion Blazor SfPdfViewer by showing or hiding default items.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Form designer toolbar customization

Customize which tools appear in the form designer toolbar, control their order, and toggle visibility programmatically.

## Show or hide the form designer toolbar

Toggle the form designer toolbar using the [EnableFormDesigner](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableFormDesigner) property.

Example: disable the form designer toolbar.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 EnableFormDesigner="false" Height="100%" Width="100%" >
</SfPdfViewer2>

```

## Customize form designer toolbar items

Use [PdfViewerToolbarSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerToolbarSettings.html) to specify which form-design tools are shown and their order. The property accepts a list of [FormDesignerToolbarItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerToolbarSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerToolbarSettings_FormDesignerToolbarItems) values; only listed items are rendered, and the displayed order follows the list sequence.

Example: configure a custom set of form designer tools.

```cshtml

<SfPdfViewer2 @ref="PdfViewerInstance" EnableFormDesigner="true" 
                  DocumentPath="wwwroot/data/Form_Designer.pdf"
                  Height="650px"
                  Width="100%">          
                  <!-- Configuring the Form Designer Toolbar items -->
                  <PdfViewerToolbarSettings FormDesignerToolbarItems="FormDesignerToolbarItems"></PdfViewerToolbarSettings>
</SfPdfViewer2>

@code {
    // Reference to the SfPdfViewer2 instance
    SfPdfViewer2 PdfViewerInstance { get; set; }

    // Define a list of form designer toolbar items to be displayed and usable
    List<FormDesignerToolbarItem> FormDesignerToolbarItems { get; set; } = new List<FormDesignerToolbarItem>() 
    {
        FormDesignerToolbarItem.TextBox,   
        FormDesignerToolbarItem.CheckBox,  
        FormDesignerToolbarItem.ListBox,   
        FormDesignerToolbarItem.Delete    
    };
}

```

Refer to the image below for the desktop view.

![Form designer toolbar with selected tools on desktop](../images/Form_Designer_Toolbar_Customization_Desktop.png)

Refer to the image below for the mobile view.

![Form designer toolbar with selected tools on mobile](../images/Form_Designer_Toolbar_Customization_Mobile.png)

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/CustomFormDesignerToolbar.razor).

## See also

* [Form designer in PDF viewer](../form-designer/overview)