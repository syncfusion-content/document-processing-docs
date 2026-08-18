---
layout: post
title: Enable or disable text selection in Blazor PDF Viewer | Syncfusion
description: Learn how to enable or disable text selection in the Blazor PDF Viewer using the EnableTextSelection property.
control: SfPdfViewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable text selection in Blazor PDF Viewer

This guide explains how to enable or disable text selection in the Blazor PDF Viewer using both initialization-time settings and runtime toggling. Text selection is enabled by default; set `EnableTextSelection` to `false` to disable it.

## Disable or enable text selection at initialization

Use the [EnableTextSelection](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableTextSelection) property during initialization to disable or enable text selection. The default value is `true`. The following example disables the text selection during initialization.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Width="100%"
              Height="100%"
              DocumentPath="@DocumentPath"
              EnableTextSelection="false" />

@code {
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
{% endhighlight %}
{% endtabs %}

## Toggle text selection at runtime

The [`EnableTextSelection`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableTextSelection) property can be toggled at runtime using buttons to enable or disable text selection dynamically. The following example demonstrates how to toggle text selection using button click events while also updating the [`InteractionMode`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_InteractionMode) and reloading the document.

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
    private SfPdfViewer2? Viewer;
    private bool EnableTextSelection = true;
    private InteractionMode InteractionMode = InteractionMode.TextSelection;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private async Task EnableTextSelections()
    {
        EnableTextSelection = true;
        InteractionMode = InteractionMode.TextSelection;
        await Viewer.LoadAsync(DocumentPath, null);
    }

    private async Task DisableTextSelections()
    {
        EnableTextSelection = false;
        InteractionMode = InteractionMode.Pan;
        await Viewer.LoadAsync(DocumentPath, null);
    }
}
{% endhighlight %}
{% endtabs %}

## Use cases and considerations

- Document protection: Disable text selection to help prevent copying sensitive content.
- Read-only documents: Provide a cleaner viewing experience by preventing selection.
- Interactive apps: Toggle selection based on user roles or document states.

N> Text selection is enabled by default. Set `EnableTextSelection` to `false` to disable it.

## See also

- [Text Selection API reference](./text-selection-api-events)
- [Blazor PDF Viewer events](../events)
