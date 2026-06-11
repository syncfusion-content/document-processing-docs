---
layout: post
title: Customize the Form Designer Toolbar in Blazor PDF Viewer | Syncfusion
description: Learn how to show or hide and customize the Form Designer toolbar in the Syncfusion Blazor PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Form Designer Toolbar in Blazor PDF Viewer

## Overview

This guide shows how to show or hide the form designer toolbar, and how to configure which tools appear and their order.

**Outcome**: A working Blazor example customizing the form designer toolbar.

## Prerequisites

- Syncfusion Blazor PDF Viewer component installed and configured. See [getting started guide](../getting-started)

## Show or hide Form Designer toolbar at initialization

Set the [EnableFormDesigner](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableFormDesigner) property to `true` or `false` to control initial visibility.

{% tabs %}
{% highlight razor tabtitle="Toolbar.razor" %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 EnableFormDesigner="true" 
              Height="100%" 
              Width="100%" 
              DocumentPath="wwwroot/Data/Form_Designer.pdf">
</SfPdfViewer2>
{% endhighlight %}
{% endtabs %}

## Show or hide form designer toolbar at runtime

Use the [EnableFormDesigner](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableFormDesigner) property to toggle visibility at runtime.

{% tabs %}
{% highlight razor tabtitle="Toolbar.razor" %}
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton @onclick="HideFormDesignerToolbar">Show/Hide Form Designer Toolbar</SfButton>

<SfPdfViewer2 @ref="viewer" 
              EnableFormDesigner="true"
              IsDesignerMode="@IsDesignerMode"
              Height="100%" 
              Width="100%" 
              DocumentPath="wwwroot/Data/Form_Designer.pdf">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private bool IsDesignerMode = false;

    public void HideFormDesignerToolbar()
    {
        IsDesignerMode = !IsDesignerMode;
    }
}
{% endhighlight %}
{% endtabs %}

## Customize form designer toolbar items

Use [PdfViewerToolbarSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerToolbarSettings.html) to specify which form-design tools are shown and their order. The property accepts a list of [FormDesignerToolbarItem](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.FormDesignerToolbarItem.html) values; only listed items are rendered, and the displayed order follows the list sequence.

{% tabs %}
{% highlight razor tabtitle="Toolbar.razor" %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="PdfViewerInstance" 
              EnableFormDesigner="true"
              DocumentPath="wwwroot/Data/Form_Designer.pdf" 
              Height="100%" 
              Width="100%">
    <PdfViewerToolbarSettings FormDesignerToolbarItems="FormDesignerToolbarItems"></PdfViewerToolbarSettings>
</SfPdfViewer2>

@code {
    SfPdfViewer2 PdfViewerInstance;

    List<FormDesignerToolbarItem> FormDesignerToolbarItems = new List<FormDesignerToolbarItem>()
    {
        FormDesignerToolbarItem.TextBox,
        FormDesignerToolbarItem.CheckBox,
        FormDesignerToolbarItem.RadioButton,
        FormDesignerToolbarItem.DropDown,
        FormDesignerToolbarItem.ListBox,
        FormDesignerToolbarItem.Signature,
        FormDesignerToolbarItem.Delete
    };
}
{% endhighlight %}
{% endtabs %}

Refer to the image below for the desktop view.

![Form designer toolbar with selected tools on desktop](../images/Form_Designer_Toolbar_Customization_Desktop.png)

Refer to the image below for the mobile view.

![Form designer toolbar with selected tools on mobile](../images/Form_Designer_Toolbar_Customization_Mobile.png)

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Form%20Designer/Components/Pages/CustomFormDesignerToolbar.razor).

## Complete example with form designer toolbar customization

The following is a complete, runnable example. It wires a toggle button and a viewer with a custom form designer toolbar list.

{% tabs %}
{% highlight razor tabtitle="Toolbar.razor" %}
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton @onclick="HideFormDesignerToolbar">Hide Form Designer Toolbar</SfButton>

<SfPdfViewer2 @ref="viewer" 
              EnableFormDesigner="true"
              IsDesignerMode="@IsDesignerMode"
              DocumentPath="wwwroot/Data/Form_Designer.pdf" 
              Height="100%" 
              Width="100%">
    <PdfViewerToolbarSettings FormDesignerToolbarItems="FormDesignerToolbarItems"></PdfViewerToolbarSettings>
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private bool IsDesignerMode = false;

    List<FormDesignerToolbarItem> FormDesignerToolbarItems = new List<FormDesignerToolbarItem>()
    {
        FormDesignerToolbarItem.TextBox,
        FormDesignerToolbarItem.RadioButton,
        FormDesignerToolbarItem.CheckBox,
        FormDesignerToolbarItem.DropDown,
        FormDesignerToolbarItem.ListBox,
        FormDesignerToolbarItem.Signature,
        FormDesignerToolbarItem.Delete
    };

    public void HideFormDesignerToolbar()
    {
        IsDesignerMode = !IsDesignerMode;
    }
}
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- **Toolbar or form designer tools do not appear**: Ensure that [EnableFormDesigner](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableFormDesigner) is set to `true` and you have a valid form-enabled PDF document.
- **FormDesignerToolbarItems not recognized**: Verify that [FormDesignerToolbarItems](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerToolbarSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerToolbarSettings_FormDesignerToolbarItems) is properly defined in the [PdfViewerToolbarSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerToolbarSettings.html).
- **Items are valid but not showing**: Ensure the document path points to a valid PDF file.

## Related topics

- [Customize primary toolbar](./primary-toolbar)
- [Customize annotation toolbar](./annotation-toolbar)
- [Form designer in PDF viewer](../form-designer/overview)
