---
layout: post
title: Load Password Protected PDFs in Blazor PDF Viewer | Syncfusion
description: Learn how to open password-protected PDF files in the Syncfusion Blazor PDF Viewer by providing the password in the documentPath object.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Load a Password-Protected PDF in Blazor

This article explains how to open password-protected PDF files in the Syncfusion Blazor PDF Viewer. The viewer supports both user‑interactive loading (Open File dialog) and programmatic loading using APIs.

## 1. Opening a Password-Protected PDF Using the **Open File** Dialog

When the user selects a password-protected PDF using the built‑in **Open File** option:

- The viewer detects that the document is encrypted

![Open PDF Document](../../react/images/open-pdf.png)

- A **password input popup** is automatically displayed

![Password Protected Pop-up](../../react/images/password-popup.png)

- The user enters the password

- The document is decrypted and loaded

No additional configuration or code is required.

This approach works for all password-protected PDFs opened locally by the user.

## 2. Opening a Password-Protected PDF Programmatically

If you load a password-protected PDF from a URL or through custom logic, the viewer provides two behaviors depending on how the file is loaded.

### 2.1 Load the Document Using `LoadAsync(byte[] bytes, string password = null)`

You can directly pass the password in the [`load`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_LoadAsync_System_Byte___System_String_) method:

```cs
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton @onclick="clicked">Load Document</SfButton>
<SfPdfViewer2 Height="100%" Width="100%" @ref="Viewer">
</SfPdfViewer2>

@code{
    SfPdfViewer2 Viewer;

    public async void clicked()
    {
        await Viewer.LoadAsync("wwwroot/pdf-succinctly-password-protected.pdf", "password");
    }
}
```

- If the password is correct → the PDF loads immediately
- If the password is incorrect → the viewer displays the incorrect password popup
- If no password is provided → the password popup is shown automatically

This is useful when the password is known beforehand.

### 2.2 Loading a Password-Protected Document's URL Using `documentPath`

If the [`documentPath`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DocumentPath) points to a password-protected PDF:

```cs
@using Syncfusion.Blazor
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    //Load URL for Passwrod-Protected Document in DocumentPath
    public string DocumentPath { get; set; } = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
}
```

The viewer will:

- Detect encryption
- Show the **password popup automatically**
- Allow the user to enter the correct password
- Then load the PDF

![Password Protected Pop-up](../../react/images/password-popup.png)

N> No password should be passed inside `documentPath`.