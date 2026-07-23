---
title: Watermarks in JavaScript PDF Library | Syncfusion
description: This section explains how to add text and image watermarks to both new and existing PDF documents using the JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---
# Watermarks in JavaScript PDF Library

JavaScript PDF Library supports adding text and image watermarks (stamps) to PDF documents. You can apply watermarks to new or existing PDFs, and add, customize, or remove watermark annotations programmatically.

## Adding text watermark in PDF document

This example demonstrates how to add a text watermark using standard fonts in a PDF document by utilizing the [drawString](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawstring) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class along with predefined font types from the [PdfStandardFont](https://ej2.syncfusion.com/documentation/api/pdf/pdfstandardfont) class. Apply transparency using the [setTransparency](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#settransparency) method, and rotation using the [rotateTransform](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#rotatetransform) method.

## Adding image watermark in PDF document

This example demonstrates how to add an image watermark in a PDF document by utilizing the [drawImage](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawimage) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class. Apply transparency to the image using the [setTransparency](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#settransparency) method.

### Supported image formats

The `PdfBitmap` class accepts image data as a Base64 string and supports the following formats:

- JPEG
- PNG

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfBitmap, PdfGraphicsState } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add the first page
let page: PdfPage = document.addPage();
// Get the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Read the image file as a Base64 string (replace 'logo.png' with your image file path)
let imageData: string = fs.readFileSync('logo.png').toString('base64');
// Create a new image object using the Base64 string
let image: PdfBitmap = new PdfBitmap(imageData);
// Save the graphics state
let state: PdfGraphicsState = graphics.save();
// Set graphics transparency
graphics.setTransparency(0.25);
// Draw the image on the page graphics with specified width and height
graphics.drawImage(image, {x: 10, y: 20, width: 400, height: 400});
// Restore the graphics state
graphics.restore(state);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add the first page
var page = document.addPage();
// Get the graphics of the PDF page
var graphics = page.graphics;
// Read the image file as a Base64 string (replace 'logo.png' with your image file path)
var imageData = fs.readFileSync('logo.png').toString('base64');
// Create a new image object using the Base64 string
var image = new ej.pdf.PdfBitmap(imageData);
// Save the graphics state
var state = graphics.save();
// Set graphics transparency
graphics.setTransparency(0.25);
// Draw the image on the page graphics with specified width and height
graphics.drawImage(image, {x: 10, y: 20, width: 400, height: 400});
// Restore the graphics state
graphics.restore(state);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

---

## Adding watermark annotation

This example demonstrates how to add a watermark annotation to a PDF document using the [PdfWatermarkAnnotation](https://ej2.syncfusion.com/documentation/api/pdf/pdfwatermarkannotation) class. The annotation allows you to specify the watermark text, color, opacity, and position to visually mark the document as confidential or draft.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfWatermarkAnnotation} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Get the first page
let page: PdfPage = document.addPage();
// Create a new watermark annotation
let annotation: PdfWatermarkAnnotation = new PdfWatermarkAnnotation('CONFIDENTIAL', {x: 100, y: 300, width: 200, height: 40}, {
  author: 'Name',
  color: { r: 255, g: 0, b: 0 },
  innerColor: { r: 0, g: 255, b: 255 },
  opacity: 0.3
});
// Add the annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a new page
var page = document.addPage();
// Create a new watermark annotation
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
// Add the annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

---

## Removing watermark annotation

Removes all watermark annotations from a document by iterating through every page in the loaded document and filtering annotations with the [PdfAnnotationCollection](https://ej2.syncfusion.com/documentation/api/pdf/pdfannotationcollection) of each page. The following example demonstrates how to achieve this.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfWatermarkAnnotation} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Loop through all pages in the PDF document
for (let pageIndex = 0; pageIndex < document.pageCount; pageIndex++) {
  // Get the current page by its index
  const page: PdfPage = document.getPage(pageIndex);
  // Iterate through the annotations on the page in reverse order
  for (let i: number = page.annotations.count - 1; i >= 0; i--) {
    // Get the annotation at the current index
    const annotation: PdfWatermarkAnnotation = page.annotations.at(i);
    // Check if the annotation is a watermark annotation
    if (annotation instanceof PdfWatermarkAnnotation) {
        // Remove the watermark annotation from the page
        page.annotations.removeAt(i);
    }
  }
}
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Loop through all pages in the PDF document
for (var pageIndex = 0; pageIndex < document.pageCount; pageIndex++) {
  // Get the current page by its index
  var page = document.getPage(pageIndex);
  // Iterate through the annotations on the page in reverse order
  for (var i = page.annotations.count - 1; i >= 0; i--) {
    // Get the annotation at the current index
    var annotation = page.annotations.at(i);
    // Check if the annotation is a watermark annotation
    if (annotation instanceof ej.pdf.PdfWatermarkAnnotation) {
        // Remove the watermark annotation from the page
        page.annotations.removeAt(i);
    }
  }
}
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)