---
title: Opening large size documents in UWP SfRichTextBoxAdv | Syncfusion
description: Understand why out of memory exceptions occur in Syncfusion UWP SfRichTextBoxAdv when opening large documents and how to resolve them.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: out-of-memory-exception,out-of-memory,large-documents,ui-virtualization,load,loadasync,memory-limit,docx,format-type
---
# Why does SfRichTextBoxAdv throw an out-of-memory exception on large documents

This page explains why an out-of-memory exception can occur when opening large documents in the UWP [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) control and how to mitigate it.

## Why the exception occurs

The SfRichTextBoxAdv control keeps the entire rich-text content of the document — including text, images, tables, and all other supported elements together with their formatting — in memory. The corresponding rendering information is also retained.

When opening a DOCX file, the on-disk file size may be small, but the file is actually a ZIP archive with the `.docx` extension. SfRichTextBoxAdv decompresses the archive and populates the resulting content in the document object model, which can use a significant amount of memory.

The SfRichTextBoxAdv control supports UI virtualization, which means that UI elements are created only for the content currently visible in the viewer. As the user scrolls, UI elements are created (and discarded) for the content that comes into (and leaves) view. This reduces memory usage and improves UI performance.

Even with UI virtualization, memory usage still grows as the document's content and complexity increase. The memory used by a document instance is not released until the document is replaced or the control is unloaded. Therefore, an out-of-memory exception can occur when memory usage exceeds the available memory as the document's content grows.

N> The UWP process model limits each app to a per-process memory budget. The exact limit depends on the device family and the OS version, but for desktop and IoT devices it is typically 2 GB per process.

## How to mitigate the issue

The following mitigations are recommended when working with very large documents:

* Split the content into several smaller documents using [DocIO](https://help.syncfusion.com/file-formats/docio/overview) and load each part in turn.

* Use the asynchronous [`LoadAsync`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#loadasync) method to keep the UI thread responsive while the document is being parsed.

* Free the previous document before loading a new one (replace `richTextBoxAdv.Document` or unload the control) to release the memory held by the previous instance.

* Run the application on a higher-specification device with more RAM, or enable the UWP app's `extendedExecutionUnconstrained` capability for long-running sessions.

* Reduce the document's complexity (fewer embedded images, fewer tables) before loading it into SfRichTextBoxAdv.

N> The `LoadAsync` method and UI virtualization are supported from Syncfusion UWP RichTextBox v17.4.0.X onwards.

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [Importing and exporting documents in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/import-and-export)
- [Getting started with UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/getting-started)
