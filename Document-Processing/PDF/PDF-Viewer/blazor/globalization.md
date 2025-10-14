---
layout: post
title: Globalization and RTL in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to localize UI text and enable RTL layout in the Syncfusion Blazor SfPdfViewer, including culture setup and API references.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Globalization and RTL in Blazor SfPdfViewer Component

## Localization

The [Blazor SfPdfViewer](https://www.syncfusion.com/pdf-viewer-sdk/blazor-pdf-viewer) component can be localized to display culture-specific text. Refer to the [Blazor Localization](https://blazor.syncfusion.com/documentation/common/localization) guide for steps to add culture resource files, register localization services, and set the current culture.

N>
* Provide localized string resources for the viewer’s UI texts (such as toolbar tooltips, dialog messages).
* Ensure the app culture (CurrentCulture and CurrentUICulture) is set before the component renders for correct resource lookup.
* Localization applies to the viewer UI; it does not translate the PDF document content.

## Right to Left

To enable right-to-left (RTL) rendering for the viewer UI, set the [EnableRtl](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableRtl) property to true. This mirrors the layout and aligns UI elements for RTL languages such as Arabic, Hebrew, Azerbaijani, Persian, and Urdu. The following code snippet demonstrates how to enable RTL rendering.

By setting EnableRtl to `true`, the control will adjust its layout and appearance to align text, icons, and other elements from right to left, providing an optimized user experience for RTL language users.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%"
              Width="100%"
              DocumentPath="@DocumentPath"
              EnableRtl="true" />

@code {
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

```

## See also

* [Events in Blazor SfPdfViewer Component](./events)