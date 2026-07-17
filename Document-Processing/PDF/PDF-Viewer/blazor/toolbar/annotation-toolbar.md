---
layout: post
title: Customize the Annotation Toolbar in Blazor PDF Viewer | Syncfusion
description: Learn how to show, hide, and customize the annotation toolbar in the Blazor PDF Viewer, including tool visibility, order, and runtime control.
platform: document-processing
control: SfPdfViewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Annotation Toolbar in Blazor PDF Viewer

This guide shows how to show or hide the annotation toolbar and how to customize the annotation toolbar by selecting which tools to display, arranging their order, and controlling its visibility programmatically.

## Show or hide the annotation toolbar

Use the [`ShowAnnotationToolbar`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_ShowAnnotationToolbar_System_Boolean_) method on the viewer to control visibility. Use the [`EnableAnnotationToolbar`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableAnnotationToolbar) property during initialization, or call the ShowAnnotationToolbar method at runtime.

{% tabs %}
{% highlight razor tabtitle="Toolbar.razor" %}
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton @onclick="ToggleToolbar">Show/Hide Annotation Toolbar</SfButton>

<SfPdfViewer2 @ref="viewer" 
              DocumentPath="wwwroot/Data/PDF_Succinctly.pdf" 
              Height="100%" 
              Width="100%">
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private bool show = true;

    private void ToggleToolbar()
    {
        viewer.ShowAnnotationToolbar(show);
        show = !show;
    }
}
{% endhighlight %}
{% endtabs %}

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Toolbar/Annotation%20Toolbar/Show%20or%20hide%20on%20loading).

## Customize annotation toolbar items

Use [PdfViewerToolbarSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerToolbarSettings.html) to specify which annotation tools are shown and their order. The property accepts a list of [AnnotationToolbarItem](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationToolbarItem.html) values; only listed items are rendered, and the displayed order follows the list sequence.

Include the `CloseTool` so users can exit the annotation toolbar when needed.

{% tabs %}
{% highlight razor tabtitle="Toolbar.razor" %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="PdfViewerInstance" 
              DocumentPath="wwwroot/Data/PDF_Succinctly.pdf" 
              Height="100%" 
              Width="100%">
    <PdfViewerToolbarSettings AnnotationToolbarItems="AnnotationToolbarItems"></PdfViewerToolbarSettings>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 PdfViewerInstance;

    List<AnnotationToolbarItem> AnnotationToolbarItems = new List<AnnotationToolbarItem>()
    {
        AnnotationToolbarItem.HighlightTool,
        AnnotationToolbarItem.UnderlineTool,
        AnnotationToolbarItem.StrikethroughTool,
        AnnotationToolbarItem.ColorEditTool,
        AnnotationToolbarItem.OpacityEditTool,
        AnnotationToolbarItem.AnnotationDeleteTool,
        AnnotationToolbarItem.CommentPanelTool,
        AnnotationToolbarItem.CloseTool
    };
}
{% endhighlight %}
{% endtabs %}

The desktop view shows items in the order configured.

![Desktop view of the annotation toolbar with the selected tools in the configured order](../images/Annotation_Toolbar_Customization_Desktop.png)

On mobile devices, the toolbar adapts responsively to the available width.

![Mobile view of the annotation toolbar with the selected tools in the configured order](../images/Annotation_Toolbar_Customization_Mobile.png)

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/CustomAnnotationToolbar.razor)

N>
* Property tools (color, opacity, thickness, font, etc.) now appear only after you select or add the related annotation. Until you select or add an annotation, these tools are hidden.
* This change reduces clutter and shows options only when they're relevant to the selected annotation.

## See also

- [Customize primary toolbar](./primary-toolbar)
- [Customize form designer toolbar](./form-designer-toolbar)
- [Adding shape annotations](../annotation/shape/rectangle-annotation)
