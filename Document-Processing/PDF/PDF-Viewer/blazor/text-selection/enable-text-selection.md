---
layout: post
title: Enable or disable text selection in Blazor PDF Viewer | Syncfusion
description: Learn how to enable or disable text selection in the Blazor PDF Viewer using the EnableTextSelection property.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable text selection in Blazor PDF Viewer

This guide explains how to enable or disable text selection in the Syncfusion Blazor PDF Viewer using both initialization-time settings and runtime toggling.

**Outcome:** By the end of this guide, you will be able to control whether users can select text in the PDF Viewer.

## Steps to toggle text selection

### 1. Disable text selection at initialization

Use the [EnableTextSelection](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableTextSelection) property during initialization to disable or enable text selection. The following example disables the text selection during initialization.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Width="100%"
              Height="100%"
              DocumentPath="@DocumentPath"
              EnableTextSelection="false" />

@code {
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
{% highlight %}
{% endtabs %}

### 2. Toggle text selection at runtime

The [EnableTextSelection](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableTextSelection) property can be toggled at runtime using buttons to enable or disable text selection dynamically. The following example demonstrates how to toggle text selection using button click events while also updating the [InteractionMode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_InteractionMode) and reloading the document.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="EnableTextSelections">Enable Text Selection</SfButton>
<SfButton OnClick="DisableTextSelections">Disable Text Selection</SfButton>
<SfPdfViewer2 Width="100%"
              Height="100%"
              DocumentPath="@DocumentPath"
              EnableTextSelection="@EnableTextSelection"
              InteractionMode="@InteractionMode"
              @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public Boolean EnableTextSelection=true;
    public InteractionMode InteractionMode=InteractionMode.TextSelection;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public void EnableTextSelections()
    {
        EnableTextSelection=true;
        InteractionMode=InteractionMode.TextSelection;
        Viewer.LoadAsync(DocumentPath,null);
    }

    public void DisableTextSelections()
    {
        EnableTextSelection=false;
         InteractionMode=InteractionMode.Pan;
        Viewer.LoadAsync(DocumentPath,null);
    }
}
{% highlight %}
{% endtabs %}

## Use cases and considerations

- Document protection: Disable text selection to help prevent copying sensitive content.
- Read-only documents: Provide a cleaner viewing experience by preventing selection.
- Interactive apps: Toggle selection based on user roles or document states.

N> Text selection is enabled by default. Set `EnableTextSelection` to `false` to disable it.

## Troubleshooting

If text selection remains active, ensure that the [EnableTextSelection](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableTextSelection) property is set to `false`.

## See also

- [Text Selection API reference](./text-selection-api-events)
- [Blazor PDF Viewer events](../events)
