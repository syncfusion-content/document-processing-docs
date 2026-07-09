---
layout: post
title: Load permission-restricted PDFs in Blazor SfPdfViewer | Syncfusion
description: Learn how Blazor SfPdfViewer enforces owner permissions in permission-restricted PDFs, controlling print, copy, and edit
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Permission-restricted documents (Owner password and permissions)

PDFs can be secured with an owner password and a set of permissions that restrict operations after the file is opened. Common restrictions include:

- Printing (allowed or disallowed)
- Copying content
- Editing pages
- Commenting and annotations

The viewer respects these permission flags and disables restricted actions in its UI. It cannot bypass or elevate document permissions. For example, when printing is disallowed, the print action is disabled; when copying is restricted, text selection is limited or copy commands are disabled.

**UI when a permission-restricted document is loaded:**

![Blazor PDF Viewer permission-restricted UI showing disabled print and copy actions when document permissions are restricted](../images/document-security.png)

## Prerequisites

Before proceeding, make sure the following are in place:

- Install the `Syncfusion.Blazor.SfPdfViewer` NuGet package (version 19.2.0.49 or later) in your Blazor application.
- Register Syncfusion Blazor services in `Program.cs`:

  ```csharp
  builder.Services.AddSyncfusionBlazor();
  ```

- Add the Syncfusion theme and script references in `wwwroot/index.html` (Blazor WebAssembly) or `Pages/_Host.cshtml` (Blazor Server). See [Getting started with SfPdfViewer2](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started) for the full setup.
- Create or obtain a permission-restricted PDF and place it under `wwwroot` so it can be served at runtime. To create one, you can use Syncfusion's PDF Library (`PdfDocument`) or any third-party tool to set the owner password and permission flags. See [Create a permission-protected PDF](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-security) for details.
- Compatibility: Blazor WebAssembly 3.2+ and Blazor Server .NET 5+ are supported by `SfPdfViewer2`.

## Load the permission-protected document programmatically

Use the [`LoadAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_LoadAsync_System_Byte___System_String_) method to load a PDF from a file path, URL, or base64 data at runtime. The supported overloads are:

- `LoadAsync(byte[] bytes, string password = null)` — load the PDF as a byte array
- `LoadAsync(string document, string password = null)` — load a URL or server-relative path

The `password` parameter is the **user (open) password** of the PDF, not the owner password. A permission-restricted PDF that does not require a user password can be loaded with no password argument; the permission flags are still enforced from the owner password configured on the document.

```csharp
@page "/permission-protected"
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<div style="height:600px;width:100%">
    <SfButton @onclick="Clicked">Load Document</SfButton>
    <SfPdfViewer2 Height="100%" Width="100%" @ref="Viewer">
    </SfPdfViewer2>
</div>

@code {
    private SfPdfViewer2? Viewer;

    private async Task Clicked()
    {
        if (Viewer is null)
        {
            return;
        }

        await Viewer.LoadAsync("wwwroot/permission-protected.pdf");
    }
}
```

```csharp
// Load from a URL
await Viewer.LoadAsync("https://example.com/permission-protected.pdf");

// Load from a base64-encoded byte array
byte[] pdfBytes = Convert.FromBase64String(base64Pdf);
await Viewer.LoadAsync(pdfBytes);
```

N> When loading from a `wwwroot/` path, this approach is appropriate for Blazor WebAssembly. For Blazor Server, load the file from a server-accessible location (for example, pass a byte array returned from an API) and use the `byte[]` overload.

## Permission to UI mapping

When the document loads, `SfPdfViewer2` reads the embedded permission flags and applies the following UI restrictions:

- `PrintAllowed = false` — the print toolbar button is hidden and the keyboard shortcut for print is disabled.
- `CopyAllowed = false` — text selection is restricted and the copy command is disabled.
- `EditAllowed = false` — page edit operations (insert, delete, rotate, rearrange) are disabled in the toolbar.
- `AnnotationsAllowed = false` — the annotation and form tools are disabled.

There is no public API to read the permission flags at runtime. To inspect the active flags, use Syncfusion's PDF Library (`PdfDocument.Security`) on the server before passing the file to the viewer.

## Error handling and troubleshooting

| Symptom | Likely cause | Suggested fix |
|---|---|---|
| `LoadAsync` throws an exception | The PDF is corrupted or the path is unreachable | Verify the file path; for Blazor Server, ensure the file is in a server-accessible location |
| Permissions are not enforced | The document was saved without an owner password | Re-create the PDF with an owner password and the desired permission flags |
| Wrong user password is supplied | The PDF has both an owner and a user password | Prompt the user for the password or use the [`DocumentLoadFailed`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.DocumentLoadFailedEventArgs.html) event to surface a custom error |
| Document loads but toolbar actions still appear | An outdated version of `Syncfusion.Blazor.SfPdfViewer` is in use | Upgrade to the latest `Syncfusion.Blazor.SfPdfViewer` NuGet package |

Subscribe to the [`DocumentLoadFailed`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.DocumentLoadFailedEventArgs.html) event to detect load errors and present a custom message:

```csharp
<SfPdfViewer2 DocumentLoadFailed="OnDocumentLoadFailed" ... />

@code {
    private void OnDocumentLoadFailed(DocumentLoadFailedEventArgs args)
    {
        // args.Error contains the failure reason (for example, "Incorrect password")
    }
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Load%20the%20Security%20Document).

## See Also

* [Password-protected documents](./password-protected)
* [Getting started with SfPdfViewer2](../getting-started/web-app)
* [SfPdfViewer2 API reference](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html)