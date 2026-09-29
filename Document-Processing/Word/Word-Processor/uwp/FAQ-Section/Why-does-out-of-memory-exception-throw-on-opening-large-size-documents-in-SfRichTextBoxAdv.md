---
title: Memory Issues with Large Documents in UWP DOCX Editor | Syncfusion
description: Troubleshoot memory exceptions when opening large documents in Syncfusion® UWP DOCX Editor and learn techniques to improve document loading performance.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: out-of-memory-exception,out-of-memory,large-documents,ui-virtualization,memory-limit
---
# Memory Issues with Large Documents in UWP DOCX Editor

## Why does an out of memory exception occur in UWP SfRichTextBoxAdv?

This page explains why an `OutOfMemoryException` is thrown when opening large documents in the [UWP DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/uwp-docx-editor) (SfRichTextBoxAdv) control and provides guidance on how to avoid it.

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

## See also

- [UWP DOCX Editor Feature Tour](https://www.syncfusion.com/docx-editor-sdk/uwp-docx-editor)
- [UWP DOCX Editor Examples](https://github.com/syncfusion/docx-editor-sdk-uwp-demos)
