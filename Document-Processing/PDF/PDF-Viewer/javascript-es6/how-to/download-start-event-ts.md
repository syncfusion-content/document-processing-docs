---
layout: post
title: How to Control File Downloads in JavaScript (ES6) PDF | Syncfusion
description: Intercept and control file downloads in the JavaScript (ES6) PDF Viewer using the downloadStart event to add custom headers or cancel the action.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Control File Downloads in JavaScript (ES6) PDF Viewer

Use the `downloadStart` event to intercept the start of a viewer download and optionally cancel it. Set `args.cancel = true` in the event handler to prevent the download.

- Include the JavaScript PDF Viewer script and the `Download`/`Toolbar` modules if the download feature is used.
- Ensure the viewer instance is initialized before assigning the `downloadStart` handler.

```ts
viewer.downloadStart = (args: any) => {
    // Custom logic
    args.cancel = true; // Prevent download action
};
```

By default, `args.cancel` is `false`, so the download proceeds unless explicitly canceled.

### Flexibility

Leverage the [downloadStart] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#downloadstart) event to apply custom rules for allowing or preventing downloads based on application logic.
