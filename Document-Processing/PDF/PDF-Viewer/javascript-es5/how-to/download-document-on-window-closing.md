---
layout: post
title: How to Download the PDF When the Window Is Closing | Syncfusion
description: Save or download the current PDF in the JavaScript (ES5) PDF Viewer when the browser window is closing so users do not lose unsaved changes.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Download the PDF When the Window Is Closing in JavaScript

The JavaScript PDF Viewer can automatically download the loaded PDF document when the browser window is refreshed or closed by handling the [before unload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event.

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