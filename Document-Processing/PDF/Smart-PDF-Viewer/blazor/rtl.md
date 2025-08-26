---
layout: post
title: RTL in Blazor Smart PDF Viewer | Syncfusion
description: Checkout and learn about RTL in Blazor Smart PDF Viewer and much more details.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# RTL in Blazor Smart PDF Viewer

The Blazor Smart PDF Viewer supports Right-to-Left (RTL) rendering to accommodate languages that are read from right to left, such as Arabic and Hebrew. By default, RTL support is disabled. You can enable it by setting the `EnableRtl` property to `true`.

## Example

```cshtml
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" EnableRtl="true">
</SfSmartPdfViewer>
```

## RTL View in Desktop and Mobile Modes
### RTL View in Desktop Mode
![RTL Desktop](images/rtl-desktop.png)
###  RTL View in Mobile Mode
![RTL Mobile](images/rtl-mobile.png)

In this example, the `EnableRtl` property is set to `true`, enabling RTL layout for the PDF viewer.