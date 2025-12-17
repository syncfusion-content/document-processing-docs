---
title: Watermarks in JavaScript PDF library | Syncfusion
description: This section explains how to add text and image watermarks to both new and existing PDF documents using the JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Watermarks in JavaScript PDF library

The PDF provides support to add watermark or stamp with text and images in the PDF document.

## Adding text watermark in PDF document

This example demonstrates how to add a text watermark using standard fonts in a PDF document by utilizing the `drawString` method of the `PdfGraphics` class along with predefined font types from the `PdfStandardFont` class. The transparency can be applied to the text using `setTransparency` method and rotation can be applied using `rotateTransform` method.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfStandardFont, PdfGraphicsState, PdfFontFamily, PdfFontStyle, PdfBrush} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument();
// Access first page
let page: PdfPage = document.addPage();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 20, PdfFontStyle.regular);
// Save the graphics state
let state: PdfGraphicsState = graphics.save();
// Set graphics transparency
graphics.setTransparency(0.25);
// Set the rotate transform
graphics.rotateTransform(-45);
// Draw the string
graphics.drawString('Created by Syncfusion PDF', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
// Restore the graphics state
graphics.restore(state);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument();
// Access first page
var page= document.addPage();
// Gets the graphics of the PDF page
var graphics = page.graphics;
// Create a new font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 20, ej.pdf.PdfFontStyle.regular);
// Save the graphics state
var state = graphics.save();
// Set graphics transparency
graphics.setTransparency(0.25);
// Set the rotate transform
graphics.rotateTransform(-45);
// Draw the string
graphics.drawString('Created by Syncfusion PDF', font, {x: 10, y: 20, width: 100, height: 200}, new ej.pdf.({r: 0, g: 0, b: 255}));
// Restore the graphics state
graphics.restore(state);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how add a text watermark in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access first page
let page: PdfPage = document.getPage(0);
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new font
let font: PdfFont = document.embedFont(PdfFontFamily.helvetica, 20, PdfFontStyle.regular);
// Save the graphics state
let state: PdfGraphicsState = graphics.save();
// Set graphics transparency
graphics.setTransparency(0.25);
// Set the rotate transform
graphics.rotateTransform(-45);
graphics.drawImage
// Draw the string
graphics.drawString('Created by Syncfusion PDF', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
// Restore the graphics state
graphics.restore(state);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access first page
var page = document.getPage(0);
// Gets the graphics of the PDF page
var graphics = page.graphics;
// Create a new font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 20, ej.pdf.PdfFontStyle.regular);
// Save the graphics state
var state = graphics.save();
// Set graphics transparency
graphics.setTransparency(0.25);
// Set the rotate transform
graphics.rotateTransform(-45);
graphics.drawImage
// Draw the string
graphics.drawString('Created by Syncfusion PDF', font, {x: 10, y: 20, width: 100, height: 200}, new ej.pdf.PdfBrush({r: 0, g: 0, b: 255}));
// Restore the graphics state
graphics.restore(state);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Adding image watermark in PDF document

This example demonstrates how to add a image watermark using standard fonts in a PDF document by utilizing the `drawImage` method of the `PdfGraphics` class. The transparency can be applied to the images using `setTransparency` method.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfBitmap} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument();
// Access the first page
let page: PdfPage = document.addPage();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new image object using JPEG image data as a Base64 string
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Save the graphics state
let state: PdfGraphicsState = graphics.save();
// Set graphics transparency
graphics.setTransparency(0.25);
// Draw the image on the page graphics with specified width and height
graphics.drawImage(image, {x: 10, y: 20, width: 400, height: 400});
// Restore the graphics state
graphics.restore(state);
//Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument();
// Access the first page
var page = document.addPage();
// Gets the graphics of the PDF page
var graphics = page.graphics;
// Create a new image object using JPEG image data as a Base64 string
var image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Save the graphics state
var state = graphics.save();
// Set graphics transparency
graphics.setTransparency(0.25);
// Draw the image on the page graphics with specified width and height
graphics.drawImage(image, {x: 10, y: 20, width: 400, height: 400});
// Restore the graphics state
graphics.restore(state);
//Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

The following code snippet explains how add a image watermark in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfBitmap} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access first page
let page: PdfPage = document.getPage(0);
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new image object using JPEG image data as a Base64 string
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Save the graphics state
let state: PdfGraphicsState = graphics.save();
// Set graphics transparency
graphics.setTransparency(0.25);
// Draw the image on the page graphics with specified width and height
graphics.drawImage(image, {x: 10, y: 20, width: 400, height: 400});
// Restore the graphics state
graphics.restore(state);
//Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access first page
var page = document.getPage(0);
// Gets the graphics of the PDF page
var graphics = page.graphics;
// Create a new image object using JPEG image data as a Base64 string
var image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Save the graphics state
var state = graphics.save();
// Set graphics transparency
graphics.setTransparency(0.25);
// Draw the image on the page graphics with specified width and height
graphics.drawImage(image, { x: 10, y: 20, width: 400, height: 400 });
// Restore the graphics state
graphics.restore(state);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Adding Watermark Annotation

This example demonstrates how to add a text watermark to an existing PDF document using the `PdfWatermarkAnnotation` class. The annotation allows you to specify the watermark text, color, opacity, and position to visually mark the document as confidential or draft.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfWatermarkAnnotation} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument();
// Get the first page
let page: PdfPage = document.addPage();
// Create new watermark annotation
let annotation: PdfWatermarkAnnotation = new PdfWatermarkAnnotation('CONFIDENTIAL', {x: 100, y: 300, width: 200, height: 40}, {
  author : 'Name',
  color: { r: 255, g: 0, b: 0 }, innerColor: {r: 0, g: 255, b: 255},
  opacity: 0.3
});
// Add annotation to the page
page.annotations.add(watermark);
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument();
// Add a new page (first page)
var page = document.addPage();
// Create new watermark annotation
var annotation = new ej.pdf.PdfWatermarkAnnotation(
  'CONFIDENTIAL',
  { x: 100, y: 300, width: 200, height: 40 },
  {
    author: 'Name',
    color: { r: 255, g: 0, b: 0 },
    innerColor: { r: 0, g: 255, b: 255 },
    opacity: 0.3
  }
);
// Add annotation to the page
page.annotations.add(annotation);
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

The following code snippet explains how add a watermark annotation in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfWatermarkAnnotation} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Get the first page
let page: PdfPage = document.getPage(0);
// Create new watermark annotation
let annotation: PdfWatermarkAnnotation = new PdfWatermarkAnnotation('WaterMark', {x: 100, y: 300, width: 200, height: 40}, {
  author : 'Name',
  color: { r: 255, g: 0, b: 0 }, innerColor: {r: 0, g: 255, b: 255},
  opacity: 0.3
});
// Add annotation to the page
page.annotations.add(watermark);
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Get the first page
var page = document.getPage(0);
// Create new watermark annotation
var annotation = new ej.pdf.PdfWatermarkAnnotation('WaterMark',{x:100,y:300,width:200,height:40},{
author:'Name',
color:{r:255,g:0,b:0},innerColor:{r:0,g:255,b:255},
opacity:0.3
});
// Add annotation to the page
page.annotations.add(annotation);
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Removing Watermark Annotation

Remove a watermark annotation from the page's annotation collection using the `PdfAnnotationCollection` of the loaded page. The following example demonstrates how to achieve this.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfAnnotation} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access first page
let page: PdfPage = document.getPage(0);
// Get the first annotation is a watermark
let annotation: PdfAnnotation = page.annotations.at(0);
// Remove an annotation
page.annotations.remove(annotation);
// Remove an annotation from the collection
page.annotations.removeAt(1);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access first page
var page = document.getPage(0);
// Get the first annotation is a watermark
var annotation = page.annotations.at(0);
// Remove an annotation
page.annotations.remove(annotation);
// Remove an annotation from specific index
page.annotations.removeAt(1);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}