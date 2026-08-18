---
layout: post
title: How to Display Custom Tooltips for Annotations | Syncfusion
description: Display custom tooltips for annotations in the JavaScript (ES6) PDF Viewer so users can see helpful information when they hover over each annotation.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Display Custom Tooltips for Annotations in JavaScript (ES6)

Display custom tooltips for annotations by handling the [annotationMouseover] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationmouseover) and `annotationMouseLeave` events.

- Include the JavaScript PDF Viewer script and the `Annotation` module on the page.
- Include the `ej.popups` module or equivalent tooltip library used in the example.
- Ensure the viewer instance is initialized before attaching the event handlers.

## Example: show a tooltip on mouse over

```ts

viewer.annotationSettings.author = "syncfusion";

let tooltip: Tooltip = new Tooltip({
    mouseTrail: true,
    opensOn: "Custom"
});

viewer.annotationMouseOver = args => {
    tooltip.appendTo("#pdfViewer_pageDiv_" + (viewer.currentPageNumber - 1));
    tooltip.content = args.annotation.author;
    tooltip.open();
    let ele: any = document.getElementsByClassName("e-tooltip-wrap")[0];
    ele.style.top = args.Y + 100 + "px";
    ele.style.left = args.X + "px";
};

viewer.annotationMouseLeave = args => {
    tooltip.close();
};

```

Sample: [Display a custom tooltip for annotations sample on GitHub/StackBlitz](https://stackblitz.com/edit/cervhy-s9fh48?file=index.ts)
