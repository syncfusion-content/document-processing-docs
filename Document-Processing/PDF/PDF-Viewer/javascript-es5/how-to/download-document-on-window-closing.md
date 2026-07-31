---
layout: post
title: Auto-download PDF on window close in PDF Viewer | Syncfusion
description: Learn how to download a PDF document when the browser window closes or refreshes in the JavaScript PDF Viewer control.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Download document on window closing in JavaScript PDF Viewer

The JavaScript PDF Viewer can automatically download the loaded PDF document when the browser window is refreshed or closed by handling the before unload event (also called the `window.onbeforeunload` API).

## Prerequisites

- Include the JavaScript PDF Viewer script and initialize the viewer instance on the page.
- Confirm the viewer has finished loading the document before attaching the event handler.

**Step 1:** Create a working sample by following the getting-started guide: [Getting started with JavaScript PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started).

**Step 2:** Attach a before unload event handler that prompts the user and calls `viewer.download()` to download the document. Note: browser behavior for this event varies between browsers and some modern browsers restrict prompts; use this pattern judiciously.

```js
// The event triggers when closing or refreshing the window.
window.onbeforeunload = function (e) {
    var message = 'Do you want to close the page?';
    e = e || window.event;
    // For IE and some older browsers
    if (e) {
        e.returnValue = message;
        // Trigger the viewer download method
        viewer.download();
    }
    // For modern browsers, returning a value is not always required
    return message;
};
```

View the sample on GitHub: [Download PDF before closing or refreshing window sample](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Download/Download%20the%20pdf%20document%20before%20closing%20window%20or%20refresh)