---
layout: post
title: Improve performance using a CDN | Syncfusion
description: Learn how to improve performance in the Blazor SfPdfViewer by using versioned CDN script references.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Improve performance using a CDN in the Blazor SfPdfViewer

Referencing scripts from the application's hosted or NuGet location can add network overhead and slow initial rendering. To reduce latency, reference the scripts from a content delivery network (`CDN`). The browser will download the assets once and then reuse them from cache on subsequent loads (unless the version changes).

Improve load performance by injecting the following CDN links in **Components/App.razor**.

Use version-pinned URLs and update them when upgrading the package.

Add the theme stylesheet inside the `<head>` element.

```html
<head>
    <!-- Blazor PDF Viewer control's theme style sheet -->
    <link href="https://cdn.syncfusion.com/blazor/{{ site.releaseversion }}/styles/bootstrap5.css" rel="stylesheet" />
</head>
```

Add the script reference at the end of the `<body>` element.

```html
<body>
    <!-- Blazor PDF Viewer control's scripts -->
    <script src="https://cdn.syncfusion.com/blazor/{{ site.releaseversion }}/syncfusion-blazor-sfpdfviewer.min.js" type="text/javascript"></script>
</body>
```

The viewer depends on pdfium.js (and its companion pdfium.wasm). When scripts are referenced from the NuGet package or a hosted path, these files download from that location on first use. The following image shows the network behavior when scripts are referenced from the NuGet package.

![Network panel showing the request and file size of pdfium.js and pdfium.wasm when scripts are referenced from the NuGet package](../getting-started/gettingstarted-images/Filesize_using_NuGet.png)

When referencing scripts from a **CDN**, assets are fetched from the CDN on first load and then served from the browser cache on subsequent loads, improving perceived performance. The image below illustrates the file size and caching behavior when scripts are referenced from the CDN.

![Network panel showing assets served from the browser cache on subsequent loads when scripts are referenced from the CDN](../getting-started/gettingstarted-images/Filesize_using_CDN.png)

## See also

* [Reference SfPdfViewer scripts in a Blazor application](how-to-refer-SfPdfViewer-script-in-application)
* [SfPdfViewer getting started (Web App)](../getting-started/web-app)
