---
layout: post
title: Increase buffer size in Blazor SfPdfViewer | Syncfusion
description: Learn how to increase the SignalR connection buffer size (MaximumReceiveMessageSize) for the Blazor SfPdfViewer to handle large PDF documents.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Increase the connection buffer size in Blazor SfPdfViewer Component

The Blazor SfPdfViewer supports increasing the SignalR connection buffer size by configuring the `MaximumReceiveMessageSize` in the `Program.cs`. This setting applies to Blazor Server and does not apply to purely client-side Blazor WebAssembly apps.

```cshtml
builder.Services.AddSignalR(o => { o.MaximumReceiveMessageSize = 102400000; });
```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Load%20larger%20document%20without%20error).

## See also

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](./how-to-processing-large-files-without-increasing-maximum-message-size)
* [SfPdfViewer getting started (Web App)](../getting-started/web-app)
