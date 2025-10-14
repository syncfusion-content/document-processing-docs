---
layout: post
title: Change rectangle annotations border color in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Change rectangle annotations border color in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Change rectangle annotations border color
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Change rectangle annotations border color in Javascript Pdfviewer control

The Essential JavaScript PDF Viewer supports customizing the rectangle annotation's property by using the [rectangleSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/#rectanglesettings) API.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) to create simple PDF Viewer sample.

**Step 2:** Add the following code snippet to change the rectangle annotation's border color using the [rectangleSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/#rectanglesettings) API.

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

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Annotations/How%20to%20change%20the%20rectangle%20annotation's%20border%20color)