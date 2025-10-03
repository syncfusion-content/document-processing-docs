---
layout: post
title: Increase buffer size in Blazor SfPdfViewer | Syncfusion
description: Learn how to increase the SignalR connection buffer size (MaximumReceiveMessageSize) for the Syncfusion Blazor SfPdfViewer to handle large PDF documents.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Increase the connection buffer size in Blazor SfPdfViewer Component

The Syncfusion&reg; Blazor SfPdfViewer supports increasing the SignalR connection buffer size by configuring MaximumReceiveMessageSize in `Program.cs`. This setting applies to Blazor Server and it does not apply to purely client-side WebAssembly apps.

```cshtml
builder.Services.AddSignalR(o => { o.MaximumReceiveMessageSize = 102400000; });
```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Load%20larger%20document%20without%20error).

## See also

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)