---
layout: post
title: Perform print in the same window using SfPdfViewer | Syncfusion
description: Learn here all about how to print in the same window in the Blazor SfPdfViewer Component using PrintMode.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Perform print in the same window in Blazor SfPdfViewer Component

Use the `PrintMode` property on `SfPdfViewer2` to control whether printing occurs in the same window or a new window. The `PrintMode` enum supports the following values:

* **Default** - Prints from the same window.
* **NewWindow** - Opens printing in a new browser window or tab (may be affected by pop-up blockers).

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 PrintMode="PrintMode.Default"
              DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%"></SfPdfViewer2>

@code {
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

## See also

* [Print in Blazor SfPdfViewer Component](../print)
* [Print the SfPdfViewer inside a Dialog](./how-to-print-the-sfpdfiewer-inside-the-dialog-component)
