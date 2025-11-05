---
layout: post
title: Control file downloads in TypeScript PDF Viewer | Syncfusion
description: Learn how to intercept and control file downloads in the TypeScript PDF Viewer using the downloadStart event.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Control file downloads in PDF Viewer

Use the downloadStart event to intercept the start of a download and optionally cancel it. In the event handler, set `args.cancel = true` to prevent the download.

```ts
pdfviewer.downloadStart = (args: any) => {
    // Custom logic
    args.cancel = true; // Prevent download action
};
```

By default, `args.cancel` is `false`, so the download proceeds unless explicitly canceled.

### Flexibility

Leverage the [downloadStart](https://ej2.syncfusion.com/documentation/api/pdfviewer/#downloadstart) event to apply custom rules for allowing or preventing downloads based on application needs.
