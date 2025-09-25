---
layout: post
title: Page Redaction in Blazor SfPdfViewer Component | Syncfusion
description: Checkout and learn here all about redaction annotations in Syncfusion Blazor SfPdfViewer component and more.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Add Page Redaction

The Blazor PDF Viewer provides support to redact entire pages containing sensitive or confidential information. Redaction can be done programmatically or through the built-in UI dialog that offers flexible page selection options.

![Redact Page Icon](redaction-annotations-images/redact-page-icon.png)

## Adding Redact Pages Using the UI

Users can redact entire pages using the Redact Pages option from the redaction toolbar. Upon clicking the redact pages icon, a Mark Page Range popup appears with the following options:

* **Current Page** – Redacts the currently visible page.

* **Odd Pages Only** – Redacts all odd-numbered pages.

* **Even Pages Only** – Redacts all even-numbered pages.

* **Specific Pages** – Allows the user to manually enter a list of specific page numbers to redact (e.g., 1, 3–5, 7).

After selecting the desired range, clicking the Save button applies redaction marks to the selected pages.

Refer to the Image below for details.

![Page Redaction Panel](redaction-annotations-images/page-redaction-panel.png)

## Adding Redact Pages Using Programmatically

Entire pages can be marked for redaction using the [`AddPageRedactionsAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.PdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_PdfViewer_SfPdfViewer2_AddPageRedactionsAsync_System_Collections_Generic_List_System_Int32__) method.

This is useful when the full page contains confidential data.

The following example adds redaction annotations to specific pages in a PDF using 0-based page indexes. Here, redaction is applied to the first and third pages.

```cshtml
@page "/"

<SfButton OnClick="RedactPages">Add Redact Pages</SfButton>

<SfPdfViewer2 @ref="SfPdfViewer2" DocumentPath="@DocumentPath" Height="800px" Width="100%">
</SfPdfViewer2>

@code{

    private string DocumentPath { get; set; } = "wwwroot/data/Annotations.pdf";

    private SfPdfViewer2? SfPdfViewer2;

    // Adds redaction annotations to entire pages using 0-based page indexes.
    // In this example, redaction is applied to the first (0) and third (2) pages.
    private async void RedactPages()
    {
        List<int> pagesToRedact = new() { 0, 2 }; // Page indexes start from 0
        await SfPdfViewer2.AddPageRedactionsAsync(pagesToRedact);
    }

}
```

Refer to the Image below for details.

![Add Page Redaction](redaction-annotations-images/add-page-redaction.png)
