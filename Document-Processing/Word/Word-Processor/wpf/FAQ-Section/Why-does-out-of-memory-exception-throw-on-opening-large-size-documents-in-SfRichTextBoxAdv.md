---
title: Out of memory exception in WPF SfRichTextBoxAdv | Syncfusion
description: Learn why an OutOfMemoryException occurs when opening large documents in the WPF SfRichTextBoxAdv control and the recommended workarounds to avoid it.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: out-of-memory-exception
---

# Why does an out of memory exception occur in WPF SfRichTextBoxAdv?

This page explains why an `OutOfMemoryException` is thrown when opening large documents in the [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) (SfRichTextBoxAdv) control and provides guidance on how to avoid it.

## Cause

The SfRichTextBoxAdv control keeps the entire rich text content of the document in memory. This includes the text, images, tables, and all other supported elements along with their formatting, as well as the information required for rendering.

When opening a DOCX file, you may notice that the file size on disk is small, yet the SfRichTextBoxAdv uses a large amount of memory. This is because a DOCX file is a zip archive with the `.docx` extension, and the SfRichTextBoxAdv control internally decompresses it and populates the content in the document object model by using a significant amount of memory.

## Impact

The SfRichTextBoxAdv control supports UI Virtualization. UI elements are created only for the content that is visible in the viewer, and additional UI elements are created for the content that becomes visible while scrolling. This reduces memory usage and also improves UI performance.

However, even with UI Virtualization in place, memory utilization increases with the size and complexity of the content. The memory used by a document instance will not be released until the document instance is removed. When memory utilization exceeds the maximum allowed level as the document content grows, an `OutOfMemoryException` can be thrown.

## Resolution

To avoid an `OutOfMemoryException` when working with large documents, consider the following workarounds:

- **Split large documents** — Break the content into several smaller documents and open them individually instead of loading the entire document at once.
- **Use a high-configuration machine** — Run the application on a machine with sufficient RAM and CPU resources to comfortably load and edit the document.
- **Release document instances** — Dispose of document instances as soon as they are no longer needed so that the memory they occupy is released promptly. See [Memory cleanup](#memory-cleanup) for details.

### Memory cleanup

Memory used by a document instance is held until that instance is unloaded. To reclaim memory programmatically, do the following when a document is no longer needed:

- Detach the document from the `SfRichTextBoxAdv` by setting the [Document](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_Document) property to `null` or by clearing the underlying `DocumentStream`.
- If your application owns the `Stream` or `WordDocument` instance used to load the content, dispose of it as well.
- For long-running scenarios that load several documents, close each `SfRichTextBoxAdv` window or unload the control's content before opening the next document so that the previous document instance is eligible for garbage collection.
