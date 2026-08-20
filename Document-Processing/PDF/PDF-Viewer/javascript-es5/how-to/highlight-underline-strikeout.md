---
layout: post
title: How to Highlight, Underline, or Strike Out Text | Syncfusion
description: Highlight, underline, and strike out text in the JavaScript (ES5) PDF Viewer using the built-in text markup tools in the annotation toolbar.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Highlight, Underline, or Strike Out Text in JavaScript (ES5)

Use the [setAnnotationMode()](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation#setannotationmode) method to programmatically highlight, underline, and strike through text in a loaded PDF document.

**Step 1:** Follow the steps in the [Get started with JavaScript ES5 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) guide to create a sample.

**Step 2:** Add the following code snippet to highlight, underline, and strikeout text with button click events.

```javascript

    document.getElementById('setHighlight').addEventListener('click', ()=> {
    viewer.annotation.setAnnotationMode('Highlight');
    });
    document.getElementById('setUnderline').addEventListener('click', ()=> {
    viewer.annotation.setAnnotationMode('Underline');
    });
    document.getElementById('setStrikeout').addEventListener('click', ()=> {
    viewer.annotation.setAnnotationMode('Strikethrough');
    });
    document.getElementById('setNone').addEventListener('click', ()=> {
    viewer.annotation.setAnnotationMode('None');
    });

```

Find the sample: [Highlight, underline, and strikeout text programmatically](https://stackblitz.com/edit/bf3k6y?devtoolsheight=33&file=index.js)