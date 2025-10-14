---
layout: post
title: Perform print in same window using SfPdfViewer | Syncfusion
description: Learn how to print in the same window in the Syncfusion Blazor SfPdfViewer using PrintMode, with notes on browser behavior and pop-up blockers.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Perform print in same window in Blazor SfPdfViewer Component

Use the SfPdfViewer2 `PrintMode` enum to control whether printing occurs in the same window or a new window. Available values are `PrintMode.Default` and `PrintMode.NewWindow`.

* **Default** - Prints in the same window using `PrintMode.Default`.
* **NewWindow** - Opens printing in a new browser window or tab (may be affected by pop-up blockers) using `PrintMode.NewWindow`.

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

* [Printing options in Blazor SfPdfViewer](../print)

* [Print the SfPdfViewer inside a Dialog](./print-the-sfpdfiewer-inside-the-dialog-component)
