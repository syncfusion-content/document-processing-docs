---
layout: post
title: Customize the annotation toolbar in Blazor SfPdfViewer | Syncfusion
description: Learn how to customize the annotation toolbar in the Syncfusion Blazor SfPdfViewer by showing or hiding default items.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Annotation toolbar customization

The annotation toolbar can be customized by showing or hiding default items and by controlling the order in which the items appear.

## Show or hide the annotation toolbar

Show or hide the annotation toolbar programmatically during initialization or at runtime.

Use the [EnableAnnotationToolbar](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableAnnotationToolbar) property or the [ShowAnnotationToolbar](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_ShowAnnotationToolbar_System_Boolean_) method to toggle visibility.

The following code snippet explains how to show or hide the annotation toolbar using the ShowAnnotationToolbar method.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="viewer" Height="100%" Width="100%" DocumentPath="@documentPath">
    <PdfViewerEvents DocumentLoaded="DocumentLoad"></PdfViewerEvents>
</SfPdfViewer2>

@code {

    private string documentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    SfPdfViewer2 viewer;

    //Invokes while loading document in the PDFViewer.
    public void DocumentLoad(LoadEventArgs args)
    {
        //Shows the annotation toolbar on initial loading.
        viewer.ShowAnnotationToolbar(true);
        //Code to hide the annoatation toolbar.
        //viewer.ShowAnnotationToolbar(false);
    }
}

```
[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Toolbar/Annotation%20Toolbar/Show%20or%20hide%20on%20loading).

## How to customize the annotation toolbar

Choose which tools appear and control their order in the annotation toolbar.

Use [PdfViewerToolbarSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerToolbarSettings.html) with the [AnnotationToolbarItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerToolbarSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerToolbarSettings_AnnotationToolbarItems) property to choose which tools are displayed in the annotation toolbar. The property accepts a list of [AnnotationToolbarItem](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationToolbarItem.html) values. Only the items included in this list are shown; any item not listed is hidden. The rendered order follows the sequence of items in the list.

The annotation toolbar is presented when entering annotation mode in SfPdfViewer2 and adapts responsively based on the available width. Include the Close tool to allow users to exit the annotation toolbar when needed.

The following example demonstrates how to customize the annotation toolbar by specifying a selected set of tools using `AnnotationToolbarItem`.

```cshtml

<!-- Container for the PDF Viewer -->
<div class="Pdf-viewer-container">
    <!-- SfPdfViewer2 component with annotation toolbar enabled -->
    <SfPdfViewer2 @ref="PdfViewerInstance" EnableFormDesigner="true" 
                  DocumentPath="wwwroot/data/Form_Designer.pdf"
                  Height="650px"
                  Width="100%">
                  
                  <!-- Configuring the annotation toolbar items -->
                  <PdfViewerToolbarSettings AnnotationToolbarItems="AnnotationToolbarItems"></PdfViewerToolbarSettings>
    </SfPdfViewer2>
</div>

@code {
    // Reference to the SfPdfViewer2 instance
    SfPdfViewer2 PdfViewerInstance { get; set; }

    // Define a list of annotation toolbar items to be displayed and usable
    List<AnnotationToolbarItem> AnnotationToolbarItems { get; set; } = new List<AnnotationToolbarItem>() 
    {
        AnnotationToolbarItem.UnderlineTool,
        AnnotationToolbarItem.StampAnnotationTool,
        AnnotationToolbarItem.FreeTextAnnotationTool,
        AnnotationToolbarItem.FontSizeAnnotationTool,
        AnnotationToolbarItem.CloseTool
    };
}

```
Refer to the image below for the desktop view (items shown in the order configured).

![Annotation toolbar with selected tools on desktop](../images/Annotation_Toolbar_Customization_Desktop.png)

Refer to the image below for the mobile view (responsive layout adapts to width).

![Annotation toolbar with selected tools on mobile](../images/Annotation_Toolbar_Customization_Mobile.png)

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/CustomAnnotationToolbar.razor)
 
N> Properties tools (color, opacity, thickness, font, etc.) now appear only after you select or add the related annotation. Until you select or add one, these tools are hidden.
N> This change reduces clutter and shows options only when they’re relevant to the selected annotation.

## See also

* [Adding the shape annotation in PDF viewer](../annotation/shape-annotation)