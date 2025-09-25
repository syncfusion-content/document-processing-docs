---
layout: post
title: Apply Redaction in Blazor SfPdfViewer Component | Syncfusion
description: Checkout and learn here all about redaction annotations in Syncfusion Blazor SfPdfViewer component and more.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Applying Redaction to the Document in Blazor SfPdfViewer Component

The Blazor PDF Viewer provides functionality to permanently apply redaction annotations to the document, removing the marked content and making the redaction irreversible. This can be done through the UI using the redact button or programmatically.

## Applying Redaction Using the Redact Button

The redact button in the toolbar allows users to permanently apply all redaction annotations present in the document.

* The redact button is disabled when no redaction annotations exist in the document.
* The button automatically enables when redaction annotations are present.

![Redact Button Icon](redaction-annotations-images/redact-button-icon.png)

A confirmation dialog is displayed before applying redaction to ensure users are aware that the redaction process is permanent and irreversible.

Refer to the Image below for details.

![Apply Redaction Dialog](redaction-annotations-images/apply-redaction-dialog.png)

## Applying Redaction Using Programmatically

Use the `RedactAsync` method to programmatically apply all redaction annotations.

```cshtml
@page "/"

<SfButton OnClick="ApplyRedaction">Apply Redaction</SfButton>

<SfPdfViewer2 @ref="SfPdfViewer2" DocumentPath="@DocumentPath" Height="800px" Width="100%">
</SfPdfViewer2>

@code{
    private string DocumentPath { get; set; } = "wwwroot/data/Annotations.pdf";
    private SfPdfViewer2? SfPdfViewer2;

    // Applies all redaction annotations permanently
    private async void ApplyRedaction()
    {
        await SfPdfViewer2.RedactAsync();
    }
}
```

Refer to the Image below for details.

![Programmatically Redact](redaction-annotations-images/programmatically-redact.png)

N> The redaction process is irreversible. Once applied, the original content cannot be recovered.

## See also

* [Overview of Redaction Annotation](./overview)
* [Page Redaction](./page-redaction)
* [Redaction Properties](./redaction-properties)