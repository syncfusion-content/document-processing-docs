---
layout: post
title: Change rectangle annotation border color in JavaScript PDF Viewer control | Syncfusion
description: Learn how to change the rectangle annotation border color in the Syncfusion JavaScript PDF Viewer control by configuring rectangleSettings.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Change rectangle annotation border color in JavaScript PDF Viewer

The JavaScript PDF Viewer enables customizing rectangle annotation appearance through the [rectangleSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/#rectanglesettings) API, including border color updates.

**Step 1:** Follow the [Getting started with the JavaScript PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) guide to create a working sample.

**Step 2:** Insert the following interface elements and script to change the rectangle annotation border color by using the [rectangleSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/#rectanglesettings) API.

```

<button id="changeColor">Change Color(Blue)</button>
<button id="addRectangleAnnotation">Add Rectangle Annotation</button>

```

```ts

//Event triggers while clicking the Change Color(Blue) button.
document.getElementById("changeColor").addEventListener('click', function () {
    //API to change the rectangle annotation's stroke color.
    viewer.rectangleSettings.strokeColor = "blue";
});

//Event triggers while clicking the Add Rectangle Annotation button.
document.getElementById("addRectangleAnnotation").addEventListener('click', function () {
    //API to set the rectangle annotation mode.
    viewer.annotation.setAnnotationMode('Rectangle');
});

```

[View the sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Annotations/How%20to%20change%20the%20rectangle%20annotation's%20border%20color)