---
layout: post
title: Customize the Redaction Toolbar in Blazor PDF Viewer | Syncfusion
description: Learn how to customize the redaction toolbar in the Syncfusion Blazor PDF Viewer by showing or hiding default items with runnable examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Redaction Toolbar in Blazor PDF Viewer

## Overview

This guide shows how to show or hide the redaction toolbar and how to enable it on desktop and mobile devices.

**Outcome:** A working Blazor example that enables the redaction toolbar, controls its visibility, and displays redaction tools on both desktop and mobile platforms.

## Prerequisites

- Syncfusion Blazor PDF Viewer component installed and configured. See [getting started guide](../getting-started)
- Understanding of [ToolbarItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ToolbarItem.html) and [MobileToolbarItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.MobileToolbarItem.html)

## Enable the redaction toolbar on desktop

Show the redaction toolbar on desktop by including the required [ToolbarItem.Redaction](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ToolbarItem.html#Syncfusion_Blazor_SfPdfViewer_ToolbarItem_Redaction) in the [PdfViewerToolbarSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerToolbarSettings.html).

{% tabs %}
{% highlight razor tabtitle="Toolbar.razor" %}
@using Syncfusion.Blazor.SfPdfViewer

@page "/"

<SfPdfViewer2 Height="100%" Width="100%" DocumentPath="Annotations.pdf">
    <PdfViewerToolbarSettings ToolbarItems="ToolbarItems"></PdfViewerToolbarSettings>
</SfPdfViewer2>

@code {
    private List<ToolbarItem> ToolbarItems = new List<ToolbarItem>();
    protected override void OnInitialized()
    {
        ToolbarItems = new List<ToolbarItem>()
        {
            ToolbarItem.OpenOption,
            ToolbarItem.PageNavigationTool,
            ToolbarItem.MagnificationTool,
            ToolbarItem.SelectionTool,
            ToolbarItem.PanTool,
            ToolbarItem.UndoRedoTool,
            ToolbarItem.CommentTool,
            ToolbarItem.SubmitForm,
            ToolbarItem.SearchOption,
            ToolbarItem.AnnotationEditTool,
            ToolbarItem.Redaction,
            ToolbarItem.FormDesigner,
            ToolbarItem.PrintOption,
            ToolbarItem.DownloadOption
        };
    }
}
{% endhighlight %}
{% endtabs %}

Refer to the image below for the desktop view.

![Enable redaction toolbar for desktop](../redaction/redaction-annotations-images/enable-redaction-toolbar-for-desktop.png)

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Toolbar/Redaction%20Toolbar)

## Enable the redaction toolbar on mobile

Show the redaction toolbar on mobile by configuring the [MobileToolbarItem.Redaction](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.MobileToolbarItem.html#Syncfusion_Blazor_SfPdfViewer_MobileToolbarItem_Redaction) in the [PdfViewerToolbarSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerToolbarSettings.html).

{% tabs %}
{% highlight razor tabtitle="Toolbar.razor" %}
@using Syncfusion.Blazor.SfPdfViewer

@page "/"

<SfPdfViewer2 Height="100%" Width="100%" DocumentPath="Annotations.pdf">
    <PdfViewerToolbarSettings MobileToolbarItems="MobileToolbarItems"></PdfViewerToolbarSettings>
</SfPdfViewer2>

@code {
    private List<MobileToolbarItem> MobileToolbarItems = new List<MobileToolbarItem>();
    protected override void OnInitialized()
    {
        MobileToolbarItems = new List<MobileToolbarItem>()
        {
            MobileToolbarItem.Open,
            MobileToolbarItem.UndoRedo,
            MobileToolbarItem.EditAnnotation,
            MobileToolbarItem.Redaction,
            MobileToolbarItem.FormDesigner,
            MobileToolbarItem.Search
        };
    }
}
{% endhighlight %}
{% endtabs %}

Refer to the image below for the mobile view.

![Enable redaction toolbar for mobile](../redaction/redaction-annotations-images/mobile-redaction-toolbar.png)

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Toolbar/Redaction%20Toolbar)

## Show or hide the redaction toolbar

Use the [ShowRedactionToolbar](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_ShowRedactionToolbar) method on the viewer to control visibility.

### Display the redaction toolbar using the toolbar icon

When [ToolbarItem.Redaction](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ToolbarItem.html#Syncfusion_Blazor_SfPdfViewer_ToolbarItem_Redaction) or [MobileToolbarItem.Redaction](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.MobileToolbarItem.html#Syncfusion_Blazor_SfPdfViewer_MobileToolbarItem_Redaction) is enabled, selecting the redaction icon in the primary toolbar toggles the redaction toolbar.

Refer to the image below for details.

![Show redaction toolbar from the primary toolbar](../redaction/redaction-annotations-images/redaction-icon-toolbar.png)

### Display the redaction toolbar programmatically

Control visibility through application logic by invoking the `ShowRedactionToolbar` method on the viewer instance.

{% tabs %}
{% highlight razor tabtitle="Toolbar.razor" %}
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton @onclick="ToggleRedactionToolbar">Toggle Redaction Toolbar</SfButton>

<SfPdfViewer2 @ref="viewer" 
              DocumentPath="wwwroot/Data/Annotations.pdf" 
              Height="100%" 
              Width="100%">
    <PdfViewerToolbarSettings ToolbarItems="ToolbarItems"></PdfViewerToolbarSettings>
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private bool isRedactionToolbarVisible = true;

    private List<ToolbarItem> ToolbarItems = new List<ToolbarItem>();

    protected override void OnInitialized()
    {
        ToolbarItems = new List<ToolbarItem>()
        {
            ToolbarItem.OpenOption,
            ToolbarItem.UndoRedoTool,
            ToolbarItem.Redaction,
            ToolbarItem.PrintOption,
            ToolbarItem.DownloadOption
        };
    }

    private void ToggleRedactionToolbar()
    {
        isRedactionToolbarVisible = !isRedactionToolbarVisible;
        viewer.ShowRedactionToolbar(isRedactionToolbarVisible);
    }
}
{% endhighlight %}
{% endtabs %}

Refer to the image below for details.

![Programmatically show the Redaction toolbar](../redaction/redaction-annotations-images/show-redaction-toolbar.png)

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Toolbar/Redaction%20Toolbar)

## Complete example with redaction toolbar customization

The following is a complete, runnable example. It wires a toggle button and a viewer with the redaction toolbar enabled on desktop.

{% tabs %}
{% highlight razor tabtitle="Toolbar.razor" %}
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton @onclick="ToggleRedactionToolbar">Toggle Redaction Toolbar</SfButton>

<SfPdfViewer2 @ref="viewer" 
              DocumentPath="wwwroot/Data/Annotations.pdf" 
              Height="100%" 
              Width="100%">
    <PdfViewerToolbarSettings ToolbarItems="ToolbarItems"></PdfViewerToolbarSettings>
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private bool isRedactionToolbarVisible = true;

    private List<ToolbarItem> ToolbarItems = new List<ToolbarItem>();

    protected override void OnInitialized()
    {
        ToolbarItems = new List<ToolbarItem>()
        {
            ToolbarItem.OpenOption,
            ToolbarItem.PageNavigationTool,
            ToolbarItem.MagnificationTool,
            ToolbarItem.SelectionTool,
            ToolbarItem.PanTool,
            ToolbarItem.UndoRedoTool,
            ToolbarItem.CommentTool,
            ToolbarItem.SubmitForm,
            ToolbarItem.SearchOption,
            ToolbarItem.AnnotationEditTool,
            ToolbarItem.Redaction,
            ToolbarItem.FormDesigner,
            ToolbarItem.PrintOption,
            ToolbarItem.DownloadOption
        };
    }

    private void ToggleRedactionToolbar()
    {
        isRedactionToolbarVisible = !isRedactionToolbarVisible;
        viewer.ShowRedactionToolbar(isRedactionToolbarVisible);
    }
}
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- **Redaction toolbar does not appear**: Verify that [ToolbarItem.Redaction](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ToolbarItem.html#Syncfusion_Blazor_SfPdfViewer_ToolbarItem_Redaction) or [MobileToolbarItem.Redaction](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.MobileToolbarItem.html#Syncfusion_Blazor_SfPdfViewer_MobileToolbarItem_Redaction) is included in the toolbar items list and that the document has loaded successfully.
- **ShowRedactionToolbar method not working**: Ensure you have a reference to the PDF Viewer component using `@ref` and that the method is called after the component is initialized.
- **Toolbar visibility does not toggle**: Verify that the `ShowRedactionToolbar` method is properly invoked and the boolean state is correctly toggled.

## Related topics

- [Customize primary toolbar](./primary-toolbar)
- [Customize annotation toolbar](./annotation-toolbar)
- [Adding redaction annotations](../redaction/overview)