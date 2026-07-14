---
layout: post
title: Globalization and RTL in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to localize UI text and enable RTL layout in the Blazor SfPdfViewer, including culture setup and API references.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Globalization and RTL in Blazor SfPdfViewer Component

## Localization

The [Blazor SfPdfViewer](https://www.syncfusion.com/pdf-viewer-sdk/blazor-pdf-viewer) component can be localized to display culture-specific text. Refer to the [Blazor Localization](https://blazor.syncfusion.com/documentation/common/localization) guide for steps to add culture resource files, register localization services, and set the current culture.

N>
* Provide localized string resources for the viewer’s UI text (for example, toolbar tooltips and dialog messages).
* Ensure the application culture (`CurrentCulture` and `CurrentUICulture`) is set before the component renders for correct resource lookup.
* Localization applies to the viewer UI only; it does not translate PDF document content.

## Right-to-Left (RTL)

Set the [EnableRtl](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableRtl) property to `true` to mirror the layout and align UI elements for RTL languages such as Arabic, Hebrew, Azerbaijani, Persian, and Urdu.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%"
              EnableRtl="true" />

@code {
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

## See also

* [Events in Blazor SfPdfViewer Component](./events)