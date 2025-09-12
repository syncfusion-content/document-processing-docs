---
layout: post
title: Download document on window closing in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Download document on window closing in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Download document on window closing
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Download document on window closing in Javascript Pdfviewer control

The PDF Viewer library allows you to download a PDF document rendered in the viewer while refreshing the window or clicking the close window using the [onbeforeunload](https://ej2.syncfusion.com/documentation/api/pdfviewer/#unload) event.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Add the following code sample to download a PDF document while refreshing or closing the window.

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

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Download/Download%20the%20pdf%20document%20before%20closing%20window%20or%20refresh)