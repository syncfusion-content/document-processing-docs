---
title: Annotation in JavaScript PDF library | Syncfusion
description: This section explains how to create, modify or remove different type of interactive Annotation by using JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Annotation in JavaScript PDF library

The PDF library provides support for interactive annotations. You can add, delete and modify the annotation from the PDF documents.

## Adding annotations to a PDF document

This example demonstrates how to add annotations to a PDF document using the `PdfAnnotation` class. Adding annotations allows users to include comments, highlights, shapes, and other interactive elements within a PDF, enhancing collaboration and document review.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfPopupAnnotation, PdfPopupIcon, PdfAnnotationBorder} from '@syncfusion/ej2-pdf';

// Creates a new PDF document
let document: PdfDocument = new PdfDocument();
// Adds a new page to the PDF
let page: PdfPage = document.addPage();
// Creates a new popup annotation
let popup = new PdfPopupAnnotation(
    'Test popup annotation',
    { x: 10, y: 40, width: 30, height: 30 },
    {
        author: 'Syncfusion',
        subject: 'General',
        color: { r: 255, g: 255, b: 0 },
        icon: PdfPopupIcon.newParagraph,
        open: true
    });
popup.border = new PdfAnnotationBorder({width: 4, hRadius: 20, vRadius: 30});
// Adds annotation to the page
page.annotations.add(popup);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Creates a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Creates a new popup annotation
var popup = new ej.pdf.PdfPopupAnnotation('Test popup annotation',{x:10,y:40,width:30,height:30},{
author:'Syncfusion',
subject:'General',
color:{r:255,g:255,b:0},
icon:ej.pdf.PdfPopupIcon.newParagraph,
open:true
});
popup.border = new ej.pdf.PdfAnnotationBorder({width:4,hRadius:20,vRadius:30});
// Adds annotation to the page
page.annotations.add(popup);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a popup annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfPopupAnnotation, PdfPopupIcon, PdfAnnotationBorder} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Creates a new popup annotation
let popup = new PdfPopupAnnotation(
    'Test popup annotation',
    { x: 10, y: 40, width: 30, height: 30 },
    {
        author: 'Syncfusion',
        subject: 'General',
        color: { r: 255, g: 255, b: 0 },
        icon: PdfPopupIcon.newParagraph,
        open: true
    });
popup.border = new PdfAnnotationBorder({width: 4, hRadius: 20, vRadius: 30});
// Adds annotation to the page
page.annotations.add(popup);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Creates a new popup annotation
var popup = new ej.pdf.PdfPopupAnnotation('Test popup annotation',{x:10,y:40,width:30,height:30},{
author:'Syncfusion',
subject:'General',
color:{r:255,g:255,b:0},
icon:ej.pdf.PdfPopupIcon.newParagraph,
open:true
});
popup.border = new ej.pdf.PdfAnnotationBorder({width:4,hRadius:20,vRadius:30});
// Adds annotation to the page
page.annotations.add(popup);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Supported annotation types

### File Link Annotation 

This example demonstrates how to add a file link annotation to a PDF page using the `PdfFileLinkAnnotation` class. A file link annotation allows linking to an external file from within a PDF document, enabling users to access related resources directly.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfFileLinkAnnotation} from '@syncfusion/ej2-pdf';

// Creates a new PDF document
let document: PdfDocument = new PdfDocument();
// Adds a new page to the PDF
let page: PdfPage = document.addPage();
// Creates a file link annotation
let fileLink = new PdfFileLinkAnnotation(
    { x: 100, y: 150, width: 120, height: 18 },
    'logo.png',
    {
        text: 'Open attachment',
        author: 'Syncfusion',
        subject: 'File Link Annotation',
        color: { r: 0, g: 0, b: 255 },
        action: "app.alert('Launching file');"
    });
// Adds annotation to the page
page.annotations.add(fileLink);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Creates a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Creates a file link annotation
var fileLink = new ej.pdf.PdfFileLinkAnnotation({x:100,y:150,width:120,height:18},'logo.png',{
text:'Open attachment',
author:'Syncfusion',
subject:'File Link Annotation',
color:{r:0,g:0,b:255},
action:"app.alert('Launching file');"
});
// Adds annotation to the page
page.annotations.add(fileLink);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a file link annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfFileLinkAnnotation} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Creates a file link annotation
let fileLink = new PdfFileLinkAnnotation(
    { x: 100, y: 150, width: 120, height: 18 },
    'logo.png',
    {
        text: 'Open attachment',
        author: 'Syncfusion',
        subject: 'File Link Annotation',
        color: { r: 0, g: 0, b: 255 },
        action: "app.alert('Launching file');"
    });
// Adds annotation to the page
page.annotations.add(fileLink);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Creates a file link annotation
var fileLink = new ej.pdf.PdfFileLinkAnnotation({x:100,y:150,width:120,height:18},'logo.png',{
text:'Open attachment',
author:'Syncfusion',
subject:'File Link Annotation',
color:{r:0,g:0,b:255},
action:"app.alert('Launching file');"
});
// Adds annotation to the page
page.annotations.add(fileLink);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Free Text Annotation

This example demonstrates how to add a free text annotation to a PDF page using the `PdfFreeTextAnnotation` class. A free text annotation allows placing text directly on a PDF page, enabling users to add comments or notes that remain visible without requiring interaction.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfFreeTextAnnotation, PdfTextAlignment, PdfAnnotationBorder, PdfBorderStyle, PdfFreeTextAnnotation, PdfLineEndingStyle, PdfStandardFont, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Creates a new PDF document
let document: PdfDocument = new PdfDocument();
// Adds a new page to the PDF
let page: PdfPage = document.addPage();
// Create new free text annotation
let freeText = new PdfFreeTextAnnotation({ x: 250, y: 260, width: 180, height: 80 },
    {
        text: 'Free Text with Callout',
        annotationIntent: PdfAnnotationIntent.freeTextCallout,
        calloutLines: [{ x: 200, y: 320 }, { x: 260, y: 300 }, { x: 260, y: 300 }],
        lineEndingStyle: PdfLineEndingStyle.openArrow,
        font: new PdfStandardFont(PdfFontFamily.helvetica, 9, PdfFontStyle.italic),
        textMarkUpColor: { r: 40, g: 40, b: 40 },
        innerColor: { r: 240, g: 248, b: 255 },
        borderColor: { r: 0, g: 0, b: 0 },
        textAlignment: PdfTextAlignment.left,
        opacity: 1,
        border: new PdfAnnotationBorder({ width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid })
    });
// Adds annotation to the page
page.annotations.add(freeText);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Creates a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Create new free text annotation
var freeText = new ej.pdf.PdfFreeTextAnnotation({x:250,y:260,width:180,height:80},{
text:'Free Text with Callout',
annotationIntent:ej.pdf.PdfAnnotationIntent.freeTextCallout,
calloutLines:[{x:200,y:320},{x:260,y:300},{x:260,y:300}],
lineEndingStyle:ej.pdf.PdfLineEndingStyle.openArrow,
font:new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica,9,ej.pdf.PdfFontStyle.italic),
textMarkUpColor:{r:40,g:40,b:40},
innerColor:{r:240,g:248,b:255},
borderColor:{r:0,g:0,b:0},
textAlignment:ej.pdf.PdfTextAlignment.left,
opacity:1,
border:new ej.pdf.PdfAnnotationBorder({width:1,hRadius:0,vRadius:0,style:ej.pdf.PdfBorderStyle.solid})
});
// Adds annotation to the page
page.annotations.add(freeText);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a free text annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfFreeTextAnnotation, PdfTextAlignment, PdfAnnotationBorder, PdfBorderStyle, PdfFreeTextAnnotation, PdfLineEndingStyle, PdfStandardFont, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Create new free text annotation
let freeText = new PdfFreeTextAnnotation({ x: 250, y: 260, width: 180, height: 80 },
    {
        text: 'Free Text with Callout',
        annotationIntent: PdfAnnotationIntent.freeTextCallout,
        calloutLines: [{ x: 200, y: 320 }, { x: 260, y: 300 }, { x: 260, y: 300 }],
        lineEndingStyle: PdfLineEndingStyle.openArrow,
        font: new PdfStandardFont(PdfFontFamily.helvetica, 9, PdfFontStyle.italic),
        textMarkUpColor: { r: 40, g: 40, b: 40 },
        innerColor: { r: 240, g: 248, b: 255 },
        borderColor: { r: 0, g: 0, b: 0 },
        textAlignment: PdfTextAlignment.left,
        opacity: 1,
        border: new PdfAnnotationBorder({ width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid })
    });
// Adds annotation to the page
page.annotations.add(freeText);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create new free text annotation
var freeText = new ej.pdf.PdfFreeTextAnnotation({x:250,y:260,width:180,height:80},{
  text:'Free Text with Callout',
  annotationIntent:ej.pdf.PdfAnnotationIntent.freeTextCallout,
  calloutLines:[{x:200,y:320},{x:260,y:300},{x:260,y:300}],
  lineEndingStyle:ej.pdf.PdfLineEndingStyle.openArrow,
  font:new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica,9,ej.pdf.PdfFontStyle.italic),
  textMarkUpColor:{r:40,g:40,b:40},
  innerColor:{r:240,g:248,b:255},
  borderColor:{r:0,g:0,b:0},
  textAlignment:ej.pdf.PdfTextAlignment.left,
  opacity:1,
  border:new ej.pdf.PdfAnnotationBorder({width:1,hRadius:0,vRadius:0,style:ej.pdf.PdfBorderStyle.solid})
});
// Adds annotation to the page
page.annotations.add(freeText);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Line Annotation 

This example demonstrates how to add a line annotation to a PDF page using the `PdfLineAnnotation` class. A line annotation allows drawing straight lines between two points on a PDF page, often used to highlight connections or indicate measurements.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfLineAnnotation, PdfAnnotationLineEndingStyle, PdfLineEndingStyle, PdfAnnotationCaption, PdfLineCaptionType} from '@syncfusion/ej2-pdf';

// Creates a new PDF document
let document: PdfDocument = new PdfDocument();
// Adds a new page to the PDF
let page: PdfPage = document.addPage();
// Creates a new line annotation.
let lineAnnotation: PdfLineAnnotation = new PdfLineAnnotation({ x: 80, y: 420 }, { x: 150, y: 420 }, {
    text: 'Line Annotation',
    author: 'Syncfusion',
    color: { r: 255, g: 0, b: 0 },
    innerColor: { r: 255, g: 255, b: 0 },
    lineEndingStyle: new PdfAnnotationLineEndingStyle({ begin: PdfLineEndingStyle.circle, end: PdfLineEndingStyle.diamond }),
    opacity: 0.5
});
// Assigns the leader line
lineAnnotation.leaderExt = 0;
lineAnnotation.leaderLine = 0;
// Assigns the line caption type
lineAnnotation.caption = new PdfAnnotationCaption({ cap: true, type: PdfLineCaptionType.inline });
// Adds annotation to the page
page.annotations.add(lineAnnotation);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Creates a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Creates a new line annotation.
var lineAnnotation = new ej.pdf.PdfLineAnnotation({x:80,y:420},{x:150,y:420},{
text:'Line Annotation',
author:'Syncfusion',
color:{r:255,g:0,b:0},
innerColor:{r:255,g:255,b:0},
lineEndingStyle:new ej.pdf.PdfAnnotationLineEndingStyle({begin:ej.pdf.PdfLineEndingStyle.circle,end:ej.pdf.PdfLineEndingStyle.diamond}),
opacity:0.5
});
// Assigns the leader line
lineAnnotation.leaderExt = 0;
lineAnnotation.leaderLine = 0;
// Assigns the line caption type
lineAnnotation.caption = new ej.pdf.PdfAnnotationCaption({cap:true,type:ej.pdf.PdfLineCaptionType.inline});
// Adds annotation to the page
page.annotations.add(lineAnnotation);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a line annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfLineAnnotation, PdfAnnotationLineEndingStyle, PdfLineEndingStyle, PdfAnnotationCaption, PdfLineCaptionType} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Creates a new line annotation.
let lineAnnotation: PdfLineAnnotation = new PdfLineAnnotation({ x: 80, y: 420 }, { x: 150, y: 420 }, {
    text: 'Line Annotation',
    author: 'Syncfusion',
    color: { r: 255, g: 0, b: 0 },
    innerColor: { r: 255, g: 255, b: 0 },
    lineEndingStyle: new PdfAnnotationLineEndingStyle({ begin: PdfLineEndingStyle.circle, end: PdfLineEndingStyle.diamond }),
    opacity: 0.5
});
// Assigns the leader line
lineAnnotation.leaderExt = 0;
lineAnnotation.leaderLine = 0;
// Assigns the line caption type
lineAnnotation.caption = new PdfAnnotationCaption({ cap: true, type: PdfLineCaptionType.inline });
// Adds annotation to the page
page.annotations.add(lineAnnotation);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Creates a new line annotation.
var lineAnnotation = new ej.pdf.PdfLineAnnotation({x:80,y:420},{x:150,y:420},{
text:'Line Annotation',
author:'Syncfusion',
color:{r:255,g:0,b:0},
innerColor:{r:255,g:255,b:0},
lineEndingStyle:new ej.pdf.PdfAnnotationLineEndingStyle({begin:ej.pdf.PdfLineEndingStyle.circle,end:ej.pdf.PdfLineEndingStyle.diamond}),
opacity:0.5
});
// Assigns the leader line
lineAnnotation.leaderExt = 0;
lineAnnotation.leaderLine = 0;
// Assigns the line caption type
lineAnnotation.caption = new ej.pdf.PdfAnnotationCaption({cap:true,type:ej.pdf.PdfLineCaptionType.inline});
// Adds annotation to the page
page.annotations.add(lineAnnotation);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Rubber stamp Annotation

This example demonstrates how to add a rubber stamp annotation to a PDF page using the `PdfRubberStampAnnotation` class. A rubber stamp annotation allows applying predefined or custom stamp to visually indicate the status or purpose of a document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfRubberStampAnnotation, PdfRubberStampAnnotationIcon} from '@syncfusion/ej2-pdf';

// Creates a new PDF document
let document: PdfDocument = new PdfDocument();
// Adds a new page to the PDF
let page: PdfPage = document.addPage();
// Creates a new rubber stamp annotation
let stamp: PdfRubberStampAnnotation = new PdfRubberStampAnnotation({ x: 40, y: 60, width: 80, height: 20 },
    {
        icon: PdfRubberStampAnnotationIcon.draft,
        text: 'Text Properties Rubber Stamp Annotation'
    });
// Adds annotation to the page
page.annotations.add(stamp);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Creates a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Creates a new rubber stamp annotation
var stamp = new ej.pdf.PdfRubberStampAnnotation({x:40,y:60,width:80,height:20},{
  icon:ej.pdf.PdfRubberStampAnnotationIcon.draft,
  text:'Text Properties Rubber Stamp Annotation'
});
// Adds annotation to the page
page.annotations.add(stamp);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a free text annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfRubberStampAnnotation, PdfRubberStampAnnotationIcon} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Creates a new rubber stamp annotation
let stamp: PdfRubberStampAnnotation = new PdfRubberStampAnnotation({ x: 40, y: 60, width: 80, height: 20 },
    {
        icon: PdfRubberStampAnnotationIcon.draft,
        text: 'Text Properties Rubber Stamp Annotation'
    });
// Adds annotation to the page
page.annotations.add(stamp);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Creates a new rubber stamp annotation
var stamp = new ej.pdf.PdfRubberStampAnnotation({x:40,y:60,width:80,height:20},{
  icon:ej.pdf.PdfRubberStampAnnotationIcon.draft,
  text:'Text Properties Rubber Stamp Annotation'
});
// Adds annotation to the page
page.annotations.add(stamp);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Ink Annotation

This example demonstrates how to add an ink annotation to a PDF page using the `PdfInkAnnotation` class. An ink annotation allows drawing freehand marks or sketches directly on a PDF page.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfInkAnnotation} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a new page to the PDF
let page: PdfPage = document.addPage();
// Create an ink annotation
let annotation = new PdfInkAnnotation(
    { x: 50, y: 100, width: 200, height: 150 },
    [
        { x: 60, y: 120 },
        { x: 120, y: 180 },
        { x: 200, y: 160 }
    ],
    {
        text: 'Ink',
        author: 'Syncfusion',
        subject: 'Ink Annotation',
        color: { r: 0, g: 0, b: 255 },
        thickness: 2,
        opacity: 0.8,
        pointsCollection: [
            [
                { x: 60, y: 120 },
                { x: 90, y: 130 },
                { x: 110, y: 140 }
            ],
            [
                { x: 120, y: 180 },
                { x: 150, y: 175 }
            ]
        ]
    }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a new page to the PDF
var page = document.addPage();
// Create an ink annotation
var annotation = new ej.pdf.PdfInkAnnotation(
  {x:50,y:100,width:200,height:150},
  [{x:60,y:120},{x:120,y:180},{x:200,y:160}],
  {
    text:'Ink',
    author:'Syncfusion',
    subject:'Ink Annotation',
    color:{r:0,g:0,b:255},
    thickness:2,
    opacity:0.8,
    pointsCollection:[
      [{x:60,y:120},{x:90,y:130},{x:110,y:140}],
      [{x:120,y:180},{x:150,y:175}]
    ]
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a ink annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfInkAnnotation} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Create an ink annotation
let annotation = new PdfInkAnnotation(
    { x: 50, y: 100, width: 200, height: 150 },
    [
        { x: 60, y: 120 },
        { x: 120, y: 180 },
        { x: 200, y: 160 }
    ],
    {
        text: 'Ink',
        author: 'Syncfusion',
        subject: 'Ink Annotation',
        color: { r: 0, g: 0, b: 255 },
        thickness: 2,
        opacity: 0.8,
        pointsCollection: [
            [
                { x: 60, y: 120 },
                { x: 90, y: 130 },
                { x: 110, y: 140 }
            ],
            [
                { x: 120, y: 180 },
                { x: 150, y: 175 }
            ]
        ]
    }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create an ink annotation
var annotation = new ej.pdf.PdfInkAnnotation(
  {x:50,y:100,width:200,height:150},
  [{x:60,y:120},{x:120,y:180},{x:200,y:160}],
  {
    text:'Ink',
    author:'Syncfusion',
    subject:'Ink Annotation',
    color:{r:0,g:0,b:255},
    thickness:2,
    opacity:0.8,
    pointsCollection:[
      [{x:60,y:120},{x:90,y:130},{x:110,y:140}],
      [{x:120,y:180},{x:150,y:175}]
    ]
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Pop-up Annotation

This example demonstrates how to add a popup annotation to a PDF document using the `PdfPopupAnnotation` class. A popup annotation allows you to display additional information or comments within the PDF at a specified position and size.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfPopupAnnotation, PdfPopupIcon, PdfAnnotationState, PdfAnnotationStateModel} from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Adds a new page to the PDF
    let page: PdfPage = document.addPage();
    // Create a new popup annotation
    let annotation = new PdfPopupAnnotation('Review this paragraph',
    {x: 10, y: 40, width: 30, height: 30},
    {
      author: 'Reviewer',
      subject: 'General',
      color: { r: 255, g: 255, b: 0 },
      icon: PdfPopupIcon.comment,
      open: true,
      state: PdfAnnotationState.accepted,
      stateModel: PdfAnnotationStateModel.review
    }
    );
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Create a new popup annotation
var annotation = new ej.pdf.PdfPopupAnnotation('Review this paragraph',{x:10,y:40,width:30,height:30},{
  author:'Reviewer',
  subject:'General',
  color:{r:255,g:255,b:0},
  icon:ej.pdf.PdfPopupIcon.comment,
  open:true,
  state:ej.pdf.PdfAnnotationState.accepted,
  stateModel:ej.pdf.PdfAnnotationStateModel.review
});
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a popup annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfPopupAnnotation, PdfPopupIcon, PdfAnnotationState, PdfAnnotationStateModel} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
     let annotation = new PdfPopupAnnotation('Review this paragraph',
    {x: 10, y: 40, width: 30, height: 30},
    {
      author: 'Reviewer',
      subject: 'General',
      color: { r: 255, g: 255, b: 0 },
      icon: PdfPopupIcon.comment,
      open: true,
      state: PdfAnnotationState.accepted,
      stateModel: PdfAnnotationStateModel.review
    }
    );
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create a new popup annotation
var annotation = new ej.pdf.PdfPopupAnnotation('Review this paragraph',{x:10,y:40,width:30,height:30},{
  author:'Reviewer',
  subject:'General',
  color:{r:255,g:255,b:0},
  icon:ej.pdf.PdfPopupIcon.comment,
  open:true,
  state:ej.pdf.PdfAnnotationState.accepted,
  stateModel:ej.pdf.PdfAnnotationStateModel.review
});
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### File Attachment Annotation

This example demonstrates how to add a file attachment annotation to a PDF page using the `PdfAttachmentAnnotation` class. A file attachment annotation allows embedding external files within a PDF document, enabling users to include supporting documents or resources for easy access.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfAttachmentAnnotation, PdfAttachmentIcon, PdfAnnotationBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Adds a new page to the PDF
    let page: PdfPage = document.addPage();
    // Create a new attachment annotation
    let annotation = new PdfAttachmentAnnotation(
      { x: 300, y: 200, width: 30, height: 30 },
      'Nature.jpg',
       imageData,
       { text: 'Attachment', icon: PdfAttachmentIcon.pushPin, color: { r: 255, g: 0, b: 0 }, opacity: 1,
        border: new PdfAnnotationBorder({width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid})}
    );
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Create a new attachment annotation
var annotation = new ej.pdf.PdfAttachmentAnnotation(
  {x:300,y:200,width:30,height:30},
  'Nature.jpg',
  imageData,
  {
    text:'Attachment',
    icon:ej.pdf.PdfAttachmentIcon.pushPin,
    color:{r:255,g:0,b:0},
    opacity:1,
    border:new ej.pdf.PdfAnnotationBorder({width:1,hRadius:0,vRadius:0,style:ej.pdf.PdfBorderStyle.solid})
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a attachment annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfAttachmentAnnotation, PdfAttachmentIcon, PdfAnnotationBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new attachment annotation
    let annotation = new PdfAttachmentAnnotation(
      { x: 300, y: 200, width: 30, height: 30 },
      'Nature.jpg',
       imageData,
       { text: 'Attachment', icon: PdfAttachmentIcon.pushPin, color: { r: 255, g: 0, b: 0 }, opacity: 1,
        border: new PdfAnnotationBorder({width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid})}
    );
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create a new attachment annotation
var annotation = new ej.pdf.PdfAttachmentAnnotation(
  {x:300,y:200,width:30,height:30},
  'Nature.jpg',
  imageData,
  {
    text:'Attachment',
    icon:ej.pdf.PdfAttachmentIcon.pushPin,
    color:{r:255,g:0,b:0},
    opacity:1,
    border:new ej.pdf.PdfAnnotationBorder({width:1,hRadius:0,vRadius:0,style:ej.pdf.PdfBorderStyle.solid})
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Sound Annotation

This example demonstrates how to access a sound annotation to a PDF page using the `PdfSoundAnnotation` class.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfSoundAnnotation} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Access the annotation at index 0
    let annotation: PdfSoundAnnotation = page.annotations.at(0) as PdfSoundAnnotation;
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Access the annotation at index 0
var annotation = page.annotations.at(0);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### URI Annotation

This example demonstrates how to add a URI annotation to a PDF page using the `PdfUriAnnotation` class. A URI annotation allows linking to a web address or online resource from within a PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfUriAnnotation} from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Adds a new page to the PDF
    let page: PdfPage = document.addPage();
    // Create a new URI annotation
    let annotation: PdfUriAnnotation = new PdfUriAnnotation({x: 100, y: 150, width: 200, height: 100}, 'http://www.google.com');
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Create a new URI annotation
var annotation = new ej.pdf.PdfUriAnnotation({x:100,y:150,width:200,height:100},'http://www.google.com');
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a URI annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfUriAnnotation} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new URI annotation
     let annotation: PdfUriAnnotation = new PdfUriAnnotation({x: 100, y: 150, width: 200, height: 100}, 'http://www.google.com');
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create a new URI annotation
var annotation = new ej.pdf.PdfUriAnnotation({x:100,y:150,width:200,height:100},'http://www.google.com');
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Document Link Annotation

This example demonstrates how to add a document link annotation to a PDF page using the `PdfDocumentLinkAnnotation` class. A document link annotation allows creating clickable links that navigate to a specific page or location within the same PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfDocumentLinkAnnotation, PdfDestinationMode, PdfBorderStyle} from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Adds a new page to the PDF
    let page: PdfPage = document.addPage();
    // Create new document link annotation
    let annotation = new PdfDocumentLinkAnnotation(
      { x: 80, y: 100, width: 120, height: 18 },
      new PdfDestination({page , location: { x: 0, y: 0 }, mode: PdfDestinationMode.fitToPage}),
      { color: { r: 0, g: 128, b: 0 }, opacity: 1,
     border: new PdfAnnotationBorder({width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid})}
    );
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Create new document link annotation
var annotation = new ej.pdf.PdfDocumentLinkAnnotation(
  {x:80,y:100,width:120,height:18},
  new ej.pdf.PdfDestination({page:page,location:{x:0,y:0},mode:ej.pdf.PdfDestinationMode.fitToPage}),
  {color:{r:0,g:128,b:0},opacity:1,border:new ej.pdf.PdfAnnotationBorder({width:1,hRadius:0,vRadius:0,style:ej.pdf.PdfBorderStyle.solid})}
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a document link annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfDocumentLinkAnnotation, PdfDestinationMode, PdfBorderStyle} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create new document link annotation
    let annotation = new PdfDocumentLinkAnnotation(
      { x: 80, y: 100, width: 120, height: 18 },
      new PdfDestination({page , location: { x: 0, y: 0 }, mode: PdfDestinationMode.fitToPage}),
      { color: { r: 0, g: 128, b: 0 }, opacity: 1,
     border: new PdfAnnotationBorder({width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid})}
    );
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create new document link annotation
var annotation = new ej.pdf.PdfDocumentLinkAnnotation(
  { x: 80, y: 100, width: 120, height: 18 },
  new ej.pdf.PdfDestination({
    page: page,
    location: { x: 0, y: 0 },
    mode: ej.pdf.PdfDestinationMode.fitToPage
  }),
  {
    color: { r: 0, g: 128, b: 0 },
    opacity: 1,
    border: new ej.pdf.PdfAnnotationBorder({
      width: 1,
      hRadius: 0,
      vRadius: 0,
      style: ej.pdf.PdfBorderStyle.solid
    })
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Redaction Annotation

This example demonstrates how to add a redaction annotation to a PDF page using the `PdfRedactionAnnotation` class. A redaction annotation allows marking areas of a PDF for permanent removal of sensitive content, ensuring confidentiality and compliance with privacy requirements.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfRedactionAnnotation, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Adds a new page to the PDF
    let page: PdfPage = document.addPage();
    // Create a new redaction annotation
    let annotation: PdfRedactionAnnotation = new PdfRedactionAnnotation({x: 100, y: 100, width: 100, height: 100},
        { borderColor: {r: 255, g: 0, b: 0},
          repeatText: true,
          overlayText: 'Sample Overlay',
          font: document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular),
          textColor: {r: 0, g: 0, b: 0},
          appearanceFillColor: {r: 255, g: 255, b: 255} 
        });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Create a new redaction annotation
var annotation = new ej.pdf.PdfRedactionAnnotation(
  { x: 100, y: 100, width: 100, height: 100 },
  {
    borderColor: { r: 255, g: 0, b: 0 },
    repeatText: true,
    overlayText: 'Sample Overlay',
    font: document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular),
    textColor: { r: 0, g: 0, b: 0 },
    appearanceFillColor: { r: 255, g: 255, b: 255 }
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a document link annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfRedactionAnnotation, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new redaction annotation
    let annotation: PdfRedactionAnnotation = new PdfRedactionAnnotation({x: 100, y: 100, width: 100, height: 100},
        { borderColor: {r: 255, g: 0, b: 0},
          repeatText: true,
          overlayText: 'Sample Overlay',
          font: document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular),
          textColor: {r: 0, g: 0, b: 0},
          appearanceFillColor: {r: 255, g: 255, b: 255} 
        });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create a new redaction annotation
var annotation = new ej.pdf.PdfRedactionAnnotation(
  { x: 100, y: 100, width: 100, height: 100 },
  {
    borderColor: { r: 255, g: 0, b: 0 },
    repeatText: true,
    overlayText: 'Sample Overlay',
    font: document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular),
    textColor: { r: 0, g: 0, b: 0 },
    appearanceFillColor: { r: 255, g: 255, b: 255 }
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Watermark Annotation

This example demonstrates how to add a watermark annotation to a PDF page using the `PdfWatermarkAnnotation` class. A watermark annotation allows overlaying text or images on a PDF page, typically used for branding, confidentiality notices, or document status indicators.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfWatermarkAnnotation} from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Adds a new page to the PDF
    let page: PdfPage = document.addPage();
    // Create a new water mark annotation
    let annotation: PdfWatermarkAnnotation = new PdfWatermarkAnnotation('Water Mark', {x: 50, y: 100, width: 100, height: 50});
    // Set the color of the annotation
    annotation.color = {r: 0, g: 0, b: 0};
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Create a new watermark annotation
var annotation = new ej.pdf.PdfWatermarkAnnotation('Water Mark', { x: 50, y: 100, width: 100, height: 50 });
// Set the color of the annotation
annotation.color = { r: 0, g: 0, b: 0 };
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a watermark annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfWatermarkAnnotation} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new water mark annotation
    let annotation: PdfWatermarkAnnotation = new PdfWatermarkAnnotation('Water Mark', {x: 50, y: 100, width: 100, height: 50});
    // Set the color of the annotation
    annotation.color = {r: 0, g: 0, b: 0};
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create a new watermark annotation
var annotation = new ej.pdf.PdfWatermarkAnnotation('Water Mark', { x: 50, y: 100, width: 100, height: 50 });
// Set the color of the annotation
annotation.color = { r: 0, g: 0, b: 0 };
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Text Markup Annotation

This example demonstrates how to add a text markup annotation to a PDF page using the `PdfTextMarkupAnnotation` class. A text markup annotation allows highlighting, underlining, or striking out text within a PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfTextMarkupAnnotation, PdfTextMarkupAnnotationType, PdfAnnotationBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Adds a new page to the PDF
    let page: PdfPage = document.addPage();
    // Create a new text markup annotation
    // Create a new text markup annotation
    let annotation = new PdfTextMarkupAnnotation('Water Mark', {x: 0, y: 0, width: 0, height: 0}, {
       boundsCollection: [{x: 50, y: 200, width: 120, height: 14}, {x: 50, y: 215, width: 90, height: 14}],
       textMarkupType: PdfTextMarkupAnnotationType.underline, author: 'Syncfusion', subject: 'Annotation',
       textMarkUpColor: {r: 0, g: 128, b: 255}, innerColor: {r: 0, g: 0, b: 255}, opacity: 0.5,
       border: new PdfAnnotationBorder({width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid})
     });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Create a new text markup annotation
var annotation = new ej.pdf.PdfTextMarkupAnnotation(
  'Water Mark',
  { x: 0, y: 0, width: 0, height: 0 },
  {
    boundsCollection: [
      { x: 50, y: 200, width: 120, height: 14 },
      { x: 50, y: 215, width: 90, height: 14 }
    ],
    textMarkupType: ej.pdf.PdfTextMarkupAnnotationType.underline,
    author: 'Syncfusion',
    subject: 'Annotation',
    textMarkUpColor: { r: 0, g: 128, b: 255 },
    innerColor: { r: 0, g: 0, b: 255 },
    opacity: 0.5,
    border: new ej.pdf.PdfAnnotationBorder({
      width: 1,
      hRadius: 0,
      vRadius: 0,
      style: ej.pdf.PdfBorderStyle.solid
    })
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a text markup annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfTextMarkupAnnotation, PdfTextMarkupAnnotationType, PdfAnnotationBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new text markup annotation
    // Create a new text markup annotation
    let annotation = new PdfTextMarkupAnnotation('Water Mark', {x: 0, y: 0, width: 0, height: 0}, {
       boundsCollection: [{x: 50, y: 200, width: 120, height: 14}, {x: 50, y: 215, width: 90, height: 14}],
       textMarkupType: PdfTextMarkupAnnotationType.underline, author: 'Syncfusion', subject: 'Annotation',
       textMarkUpColor: {r: 0, g: 128, b: 255}, innerColor: {r: 0, g: 0, b: 255}, opacity: 0.5,
       border: new PdfAnnotationBorder({width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid})
     });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create a new text markup annotation
var annotation = new ej.pdf.PdfTextMarkupAnnotation(
  'Water Mark',
  { x: 0, y: 0, width: 0, height: 0 },
  {
    boundsCollection: [
      { x: 50, y: 200, width: 120, height: 14 },
      { x: 50, y: 215, width: 90, height: 14 }
    ],
    textMarkupType: ej.pdf.PdfTextMarkupAnnotationType.underline,
    author: 'Syncfusion',
    subject: 'Annotation',
    textMarkUpColor: { r: 0, g: 128, b: 255 },
    innerColor: { r: 0, g: 0, b: 255 },
    opacity: 0.5,
    border: new ej.pdf.PdfAnnotationBorder({
      width: 1,
      hRadius: 0,
      vRadius: 0,
      style: ej.pdf.PdfBorderStyle.solid
    })
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Cloud border style Annotation

### PdfRectangleAnnotation

This example demonstrates how to add a rectangle annotation to a PDF page using the `PdfRectangleAnnotation` class. A rectangle annotation allows drawing rectangular shapes on a PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfRectangleAnnotation, PdfAnnotationBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Adds a new page to the PDF
    let page: PdfPage = document.addPage();
    // Create a new square annotation with bounds
    let annotation = new PdfRectangleAnnotation({ x: 50, y: 80, width: 200, height: 100 }, {
       text: 'Rect', author: 'Syncfusion', subject: 'Rectangle Annotation',
       color: { r: 255, g: 0, b: 0 },
       innerColor: { r: 255, g: 240, b: 240 },
       opacity: 0.6,
       border: new PdfAnnotationBorder({width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid})
    });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Create a new square annotation with bounds
var annotation = new ej.pdf.PdfRectangleAnnotation(
  { x: 50, y: 80, width: 200, height: 100 },
  {
    text: 'Rect',
    author: 'Syncfusion',
    subject: 'Rectangle Annotation',
    color: { r: 255, g: 0, b: 0 },
    innerColor: { r: 255, g: 240, b: 240 },
    opacity: 0.6,
    border: new ej.pdf.PdfAnnotationBorder({
      width: 1,
      hRadius: 0,
      vRadius: 0,
      style: ej.pdf.PdfBorderStyle.solid
    })
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a rectangle annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfRectangleAnnotation, PdfAnnotationBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new square annotation with bounds
    let annotation = new PdfRectangleAnnotation({ x: 50, y: 80, width: 200, height: 100 }, {
       text: 'Rect', author: 'Syncfusion', subject: 'Rectangle Annotation',
       color: { r: 255, g: 0, b: 0 },
       innerColor: { r: 255, g: 240, b: 240 },
       opacity: 0.6,
       border: new PdfAnnotationBorder({width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid})
    });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create a new square annotation with bounds
var annotation = new ej.pdf.PdfRectangleAnnotation(
  { x: 50, y: 80, width: 200, height: 100 },
  {
    text: 'Rect',
    author: 'Syncfusion',
    subject: 'Rectangle Annotation',
    color: { r: 255, g: 0, b: 0 },
    innerColor: { r: 255, g: 240, b: 240 },
    opacity: 0.6,
    border: new ej.pdf.PdfAnnotationBorder({
      width: 1,
      hRadius: 0,
      vRadius: 0,
      style: ej.pdf.PdfBorderStyle.solid
    })
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Polygon Annotation

This example demonstrates how to add a polygon annotation to a PDF page using the `PdfPolygonAnnotation` class. A polygon annotation allows drawing multi-sided shapes on a PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfPolygonAnnotation, PdfAnnotationBorder, PdfBorderStyle } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Adds a new page to the PDF
    let page: PdfPage = document.addPage();
    // Create a new polygon annotation with bounds
    let annotation = new PdfPolygonAnnotation(
    [{ x: 100, y: 300 }, { x: 150, y: 200 }, { x: 300, y: 200 }, { x: 350, y: 300 }, { x: 300, y: 400 }, { x: 150, y: 400 }],
       {
         text: 'Polygon', author: 'Syncfusion', subject: 'Polygon Annotation',
         color: { r: 0, g: 128, b: 255 },
         innerColor: { r: 220, g: 240, b: 255 },
         opacity: 0.7,
         border: new PdfAnnotationBorder({width: 2, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid})
    });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Create a new polygon annotation with bounds
var annotation = new ej.pdf.PdfPolygonAnnotation(
  [
    { x: 100, y: 300 },
    { x: 150, y: 200 },
    { x: 300, y: 200 },
    { x: 350, y: 300 },
    { x: 300, y: 400 },
    { x: 150, y: 400 }
  ],
  {
    text: 'Polygon',
    author: 'Syncfusion',
    subject: 'Polygon Annotation',
    color: { r: 0, g: 128, b: 255 },
    innerColor: { r: 220, g: 240, b: 255 },
    opacity: 0.7,
    border: new ej.pdf.PdfAnnotationBorder({
      width: 2,
      hRadius: 0,
      vRadius: 0,
      style: ej.pdf.PdfBorderStyle.solid
    })
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a polygon annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfPolygonAnnotation, PdfAnnotationBorder, PdfBorderStyle } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new polygon annotation with bounds
    let annotation = new PdfPolygonAnnotation(
    [{ x: 100, y: 300 }, { x: 150, y: 200 }, { x: 300, y: 200 }, { x: 350, y: 300 }, { x: 300, y: 400 }, { x: 150, y: 400 }],
       {
         text: 'Polygon', author: 'Syncfusion', subject: 'Polygon Annotation',
         color: { r: 0, g: 128, b: 255 },
         innerColor: { r: 220, g: 240, b: 255 },
         opacity: 0.7,
         border: new PdfAnnotationBorder({width: 2, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid})
    });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create a new polygon annotation with bounds
var annotation = new ej.pdf.PdfPolygonAnnotation(
  [
    { x: 100, y: 300 },
    { x: 150, y: 200 },
    { x: 300, y: 200 },
    { x: 350, y: 300 },
    { x: 300, y: 400 },
    { x: 150, y: 400 }
  ],
  {
    text: 'Polygon',
    author: 'Syncfusion',
    subject: 'Polygon Annotation',
    color: { r: 0, g: 128, b: 255 },
    innerColor: { r: 220, g: 240, b: 255 },
    opacity: 0.7,
    border: new ej.pdf.PdfAnnotationBorder({
      width: 2,
      hRadius: 0,
      vRadius: 0,
      style: ej.pdf.PdfBorderStyle.solid
    })
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### PdfCircleAnnotation

This example demonstrates how to add a circle annotation to a PDF page using the `PdfCircleAnnotation` class. A circle annotation allows drawing circular or oval shapes on a PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfCircleAnnotation, PdfAnnotationBorder, PdfBorderStyle, PdfMeasurementUnit, PdfCircleMeasurementType} from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Adds a new page to the PDF
    let page: PdfPage = document.addPage();
    // Create a new circle annotation with circle bounds
    let annotation = new PdfCircleAnnotation({ x: 50, y: 100, width: 120, height: 120 }, {
       text: 'Diameter',
       author: 'Syncfusion',
       color: {r: 255, g: 0, b: 0},
       innerColor: {r: 255, g: 255, b: 200},
       opacity: 0.9,
       border: new PdfAnnotationBorder({width: 2, hRadius: 0, vRadius: 0, style: PdfBorderStyle.dashed, dash: [3, 2]}),
       measure: { unit: PdfMeasurementUnit.centimeter, type: PdfCircleMeasurementType.diameter }
    });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Create a new circle annotation with circle bounds
var annotation = new ej.pdf.PdfCircleAnnotation(
  { x: 50, y: 100, width: 120, height: 120 },
  {
    text: 'Diameter',
    author: 'Syncfusion',
    color: { r: 255, g: 0, b: 0 },
    innerColor: { r: 255, g: 255, b: 200 },
    opacity: 0.9,
    border: new ej.pdf.PdfAnnotationBorder({
      width: 2,
      hRadius: 0,
      vRadius: 0,
      style: ej.pdf.PdfBorderStyle.dashed,
      dash: [3, 2]
    }),
    measure: { unit: ej.pdf.PdfMeasurementUnit.centimeter, type: ej.pdf.PdfCircleMeasurementType.diameter }
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a circle annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfCircleAnnotation, PdfAnnotationBorder, PdfBorderStyle, PdfMeasurementUnit, PdfCircleMeasurementType} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new circle annotation with circle bounds
    let annotation = new PdfCircleAnnotation({ x: 50, y: 100, width: 120, height: 120 }, {
       text: 'Diameter',
       author: 'Syncfusion',
       color: {r: 255, g: 0, b: 0},
       innerColor: {r: 255, g: 255, b: 200},
       opacity: 0.9,
       border: new PdfAnnotationBorder({width: 2, hRadius: 0, vRadius: 0, style: PdfBorderStyle.dashed, dash: [3, 2]}),
       measure: { unit: PdfMeasurementUnit.centimeter, type: PdfCircleMeasurementType.diameter }
    });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create a new circle annotation with circle bounds
var annotation = new ej.pdf.PdfCircleAnnotation(
  { x: 50, y: 100, width: 120, height: 120 },
  {
    text: 'Diameter',
    author: 'Syncfusion',
    color: { r: 255, g: 0, b: 0 },
    innerColor: { r: 255, g: 255, b: 200 },
    opacity: 0.9,
    border: new ej.pdf.PdfAnnotationBorder({
      width: 2,
      hRadius: 0,
      vRadius: 0,
      style: ej.pdf.PdfBorderStyle.dashed,
      dash: [3, 2]
    }),
    measure: {
      unit: ej.pdf.PdfMeasurementUnit.centimeter,
      type: ej.pdf.PdfCircleMeasurementType.diameter
    }
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### PdfEllipseAnnotation

This example demonstrates how to add an ellipse annotation to a PDF page using the `PdfEllipseAnnotation` class. An ellipse annotation allows drawing elliptical shapes on a PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfEllipseAnnotation, PdfAnnotationBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Adds a new page to the PDF
    let page: PdfPage = document.addPage();
    // Create a new ellipse annotation with bounds
    let annotation = new PdfEllipseAnnotation({ x: 80, y: 120, width: 160, height: 100 }, {
       text: 'Ellipse', author: 'Syncfusion', subject: 'Ellipse Annotation',
       color: {r: 0, g: 128, b: 255},
       innerColor: {r: 220, g: 240, b: 255},
       opacity: 0.7,
       border: new PdfAnnotationBorder({width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid})
    });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Adds a new page to the PDF
var page = document.addPage();
// Create a new ellipse annotation with bounds
var annotation = new ej.pdf.PdfEllipseAnnotation(
  { x: 80, y: 120, width: 160, height: 100 },
  {
    text: 'Ellipse',
    author: 'Syncfusion',
    subject: 'Ellipse Annotation',
    color: { r: 0, g: 128, b: 255 },
    innerColor: { r: 220, g: 240, b: 255 },
    opacity: 0.7,
    border: new ej.pdf.PdfAnnotationBorder({
      width: 1,
      hRadius: 0,
      vRadius: 0,
      style: ej.pdf.PdfBorderStyle.solid
    })
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a ellipse annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfEllipseAnnotation, PdfAnnotationBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new ellipse annotation with bounds
    let annotation = new PdfEllipseAnnotation({ x: 80, y: 120, width: 160, height: 100 }, {
       text: 'Ellipse', author: 'Syncfusion', subject: 'Ellipse Annotation',
       color: {r: 0, g: 128, b: 255},
       innerColor: {r: 220, g: 240, b: 255},
       opacity: 0.7,
       border: new PdfAnnotationBorder({width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid})
    });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create a new ellipse annotation with bounds
var annotation = new ej.pdf.PdfEllipseAnnotation(
  { x: 80, y: 120, width: 160, height: 100 },
  {
    text: 'Ellipse',
    author: 'Syncfusion',
    subject: 'Ellipse Annotation',
    color: { r: 0, g: 128, b: 255 },
    innerColor: { r: 220, g: 240, b: 255 },
    opacity: 0.7,
    border: new ej.pdf.PdfAnnotationBorder({
      width: 1,
      hRadius: 0,
      vRadius: 0,
      style: ej.pdf.PdfBorderStyle.solid
    })
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Measurement Annotations

This example demonstrates how to access a measurement annotation from a PDF page using the `PdfLineAnnotation` class. A measurement annotation allows defining and displaying dimensions such as distances or lengths within a PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfLineAnnotation, PdfMeasurementUnit} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Access the annotation at index 0
    let annotation: PdfLineAnnotation = page.annotations.at(0) PdfLineAnnotation;
    // Sets the measurement unit of line measurement annoation as centimeter
    annotation.unit = PdfMeasurementUnit.centimeter;
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Access the annotation at index 0
var annotation = page.annotations.at(0);
// Sets the measurement unit of line measurement annotation as centimeter
if (annotation instanceof ej.pdf.PdfLineAnnotation) {
  annotation.unit = ej.pdf.PdfMeasurementUnit.centimeter;
}
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Modifying the annotations

This example demonstrates how to modify an existing annotation in a PDF page using the PdfAnnotation class. Modifying annotations allows updating properties such as position, color, content, or appearance, enabling customization and refinement of the document’s interactive elements.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfPopupAnnotation} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Get the first annotation of the page
    let annotation: PdfPopupAnnotation = page.annotations.at(0) as PdfPopupAnnotation;
    // Modified its properties
    annotation.text ='Popup annotation';
    annotation.color = {r: 0, g: 128, b: 255};
    annotation.opacity = 0.5;
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Get the first annotation of the page
var annotation = page.annotations.at(0);
// Modify its properties (only if it's a Popup annotation)
if (annotation instanceof ej.pdf.PdfPopupAnnotation) {
  annotation.text = 'Popup annotation';
  annotation.color = { r: 0, g: 128, b: 255 };
  annotation.opacity = 0.5;
}
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Removing annotations from an existing PDF 

This example demonstrates how to remove an annotation from a PDF page using the PdfAnnotationCollection class. Removing annotations allows deleting comments, shapes, or other interactive elements from a PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfAnnotation} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Access first annotation from the PDF page
    let annotation: PdfAnnotation = page.annotations.at(0);
    // Remove an annotation from the collection
    page.annotations.remove(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Access first annotation from the PDF page
var annotation = page.annotations.at(0);
// Remove an annotation from the collection
page.annotations.remove(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Flatten annotation

This example demonstrates how to flatten annotations in a PDF document using the PdfAnnotation class. Flattening annotations converts interactive elements such as comments, highlights, and shapes into static content.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfLineAnnotation} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Get the first page
    let page: PdfPage = document.getPage(0) as PdfPage;
    // Get the first annotation of the page
    let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
    // Sets the boolean flag indicating whether the annotation have been flattened or not.
    annotation.flatten = true;
    // Destroy the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Get the first page
var page = document.getPage(0);
// Get the first annotation of the page
var annotation = page.annotations.at(0);
// Sets the boolean flag indicating whether the annotation has been flattened
if (annotation instanceof ej.pdf.PdfLineAnnotation) {
  annotation.flatten = true;
}
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Importing annotations

This example demonstrates how to import annotations into a PDF document using the PdfDocument. `importAnnotations` method.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, DataFormat} from '@syncfusion/ej2-pdf';

    // Load the base PDF document from resources
    let pdfDocument: PdfDocument = new PdfDocument(data, password);
    // Imports annotations from to the PDF document.
    document.importAnnotations('annotations.json', DataFormat.json);
    // Save the PDF document
    pdfDocument.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load the base PDF document from resources
var pdfDocument = new ej.pdf.PdfDocument(data, password);
// Import annotations into the PDF document
pdfDocument.importAnnotations('annotations.json', ej.pdf.DataFormat.json);
// Save the PDF document
pdfDocument.save('Output.pdf');
// Close the document
pdfDocument.destroy();

{% endhighlight %}
{% endtabs %}

## Exporting annotations

This example demonstrates how to export annotations from a PDF document using the PdfDocument.exportAnnotations method. 

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, Uint8Array} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Exports the annotations from the PDF document.
    let data: Uint8Array = document.exportAnnotations();
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Export the annotations from the PDF document
var data = document.exportAnnotations();
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}