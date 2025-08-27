---
layout: post
title: RTL in Blazor Smart PDF Viewer | Syncfusion
description: Learn how to enable and use Right-to-Left (RTL) text support in Blazor SfSmartPdfViewer for multilingual PDF viewing.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# RTL in Blazor Smart PDF Viewer

The Blazor Smart PDF Viewer supports Right-to-Left (RTL) rendering to accommodate languages that are read from right to left, such as Arabic and Hebrew. By default, RTL support is disabled. You can enable it by setting the `EnableRtl` property to `true`.

![RTL Desktop](images/rtl-desktop.png)

## Example

```cshtml
@* Enables Right-to-Left layout support for languages like Arabic and Hebrew *@

<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
EnableRtl="true">
</SfSmartPdfViewer>
```
[View sample in GitHub]()

In this example, the `EnableRtl` property is set to `true`, enabling RTL layout for the PDF viewer.