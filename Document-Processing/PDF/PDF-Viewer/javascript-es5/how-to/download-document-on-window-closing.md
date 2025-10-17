---
layout: post
title: Download document on window closing in JavaScript PDF Viewer control | Syncfusion
description: Learn how to download a PDF document when the browser window closes or refreshes in the Syncfusion JavaScript PDF Viewer control by handling the onbeforeunload event.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Download document on window closing in JavaScript PDF Viewer

The JavaScript PDF Viewer can automatically download the loaded PDF document when the browser window is refreshed or closed by handling the [onbeforeunload](https://ej2.syncfusion.com/documentation/api/pdfviewer/#unload) event.

**Step 1:** Configure a working sample by following the instructions in [Getting started with the JavaScript PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/).

**Step 2:** Add the following script to prompt the user when the window closes or refreshes and trigger the document download.

```ts

//The event triggers while closing or refreshing the window.
window.onbeforeunload = function(e){
        var message = "Do you want to close the page?"
        e = e || window.event;
        //For IE and Firefox.
        if (e) {
        e.returnValue = message;
        //Method to download the document.
        viewer.download();
        }
    }

```

[View the sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Download/Download%20the%20pdf%20document%20before%20closing%20window%20or%20refresh)