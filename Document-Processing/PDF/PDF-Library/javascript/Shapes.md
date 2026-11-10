---
title: PDF Shapes in JavaScript PDF | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Draw lines, rectangles, polygons, curves, and other shapes in PDF documents using the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---
# PDF Shapes in JavaScript PDF

The JavaScript PDF Library supports adding the following shapes.

* Line
* Rectangle
* Rounded rectangle
* Ellipse
* Polygon
* Pie
* Arc
* Bezier
* Path

## Adding Shapes to a PDF document

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports shape rendering with PDF pens (outlines) and solid `PdfBrush` fills.

### Line

This example demonstrates how to draw a straight line in a PDF document using the [drawLine](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawline) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line on the page graphics
graphics.drawLine(pen, { x: 10, y: 200}, { x: 100, y: 100});
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Get graphics from the page
var graphics = page.graphics;
// Create a new pen
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line on the page graphics
graphics.drawLine(pen, { x: 10, y: 200 }, { x: 100, y: 100 });
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Rectangle

This example demonstrates how to draw a rectangle in a PDF document using the [drawRectangle](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawrectangle) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen.
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a rectangle on the page graphics.
graphics.drawRectangle({ x: 10, y: 20, width: 100, height: 200}, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Gets the graphics of the PDF page
var graphics = page.graphics;
// Create a new pen.
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a rectangle on the page graphics.
graphics.drawRectangle({ x: 10, y: 20, width: 100, height: 200 }, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Rounded rectangle

This example demonstrates how to draw a rounded rectangle in a PDF document using the `drawRoundedRectangle` method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawroundedrectangle) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfGraphics, PdfPen, PdfBrush, drawRoundedRectangle } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument();
// Access the first page
let page: PdfPage = document.addPage();
// Get the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen (black, 1pt)
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Create a new brush (blue fill)
let brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 255 });
// Draw a rounded rectangle on the page graphics
graphics.drawRoundedRectangle(
  { x: 10, y: 20, width: 100, height: 200 },
  5,
  pen,
  brush
);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a PDF document
var document = new ej.pdf.PdfDocument();
// Access the first page
var page = document.addPage();
// Get the graphics of the PDF page
var graphics = page.graphics;
// Create a new pen
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Create a new brush
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 });
// Draw a rounded rectangle on the page graphics
graphics.drawRoundedRectangle(
  { x: 10, y: 20, width: 100, height: 200 },
  5,
  pen,
  brush
);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Ellipse

This example demonstrates how to draw an ellipse in a PDF document using the [drawEllipse](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawellipse) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw an ellipse on the page graphics
graphics.drawEllipse({ x: 10, y: 20, width: 100, height: 200}, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Gets the graphics of the PDF page
var graphics = page.graphics;
// Create a new pen
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw an ellipse on the page graphics
graphics.drawEllipse({ x: 10, y: 20, width: 100, height: 200 }, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Polygon

This example demonstrates how to draw a polygon shape in a PDF document using the [drawPolygon](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawpolygon) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Define the polygon points
let points: Point[] = [{x: 10, y: 100}, { x: 10, y: 200}, { x: 100, y: 100}, { x: 100, y: 200}, { x: 55, y: 150}];
// Draw the polygon on the page graphics
graphics.drawPolygon(points, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Get graphics from the page
var graphics = page.graphics;
// Create a new pen
var pen = new ej.pdf.PdfPen({r:0,g:0,b:0},1);
// Define the polygon points
var points=[{x:10,y:100}, {x:10,y:200}, {x:100,y:100}, {x:100,y:200}, {x:55,y:150}];
// Draw the polygon on the page graphics
graphics.drawPolygon(points,pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Pie

This example demonstrates how to draw a pie in a PDF document using the [drawPie](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawpie) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a pie slice on the page graphics
graphics.drawPie({ x: 10, y: 50, width: 200, height: 200}, 180, 60, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Gets the graphics of the PDF page
var graphics = page.graphics;
// Create a new pen
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a pie slice on the page graphics
graphics.drawPie({ x: 10, y: 50, width: 200, height: 200 }, 180, 60, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Arc

This example demonstrates how to draw an arc in a PDF document using the [drawArc](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawarc) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a arc slice on the page graphics
graphics.drawArc({ x: 10, y: 20, width: 100, height: 200}, 20, 30, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Gets the graphics of the PDF page
var graphics = page.graphics;
// Create a new pen
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw an arc slice on the page graphics
graphics.drawArc({ x: 10, y: 20, width: 100, height: 200 }, 20, 30, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Bezier

This example demonstrates how to draw a Bezier in a PDF document using the [drawBezier](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawbezier) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a Bezier curve on the page graphics
graphics.drawBezier({ x: 50, y: 100}, { x: 200, y: 50}, { x: 100, y: 150}, { x: 150, y: 100}, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Gets the graphics of the PDF page
var graphics = page.graphics;
// Create a new pen
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a Bezier curve on the page graphics
graphics.drawBezier({ x: 50, y: 100 }, { x: 200, y: 50 }, { x: 100, y: 150 }, { x: 150, y: 100 }, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Path

This example demonstrates how to draw a path in a PDF document using the [drawPath](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawpath) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfPen, PdfPath } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Create a new path
let path: PdfPath = new PdfPath();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Add lines to the path
path.addLine({ x: 10, y: 50}, { x: 200, y: 250});
path.addLine({ x: 10, y: 150}, { x: 220, y: 250});
path.addLine({ x: 10, y: 200}, { x: 240, y: 250});
// Draw the path on the page graphics
graphics.drawPath(path, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Create a new path
var path = new ej.pdf.PdfPath();
// Gets the graphics of the PDF page
var graphics = page.graphics;
// Create a new pen
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Add lines to the path
path.addLine({ x: 10, y: 50 }, { x: 200, y: 250 });
path.addLine({ x: 10, y: 150 }, { x: 220, y: 250 });
path.addLine({ x: 10, y: 200 }, { x: 240, y: 250 });
// Draw the path on the page graphics
graphics.drawPath(path, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Working with shape pagination

### Overview

Shape pagination allows a large shape that exceeds the available page bounds to continue across multiple PDF pages. Describe the shape, its drawing style, and its pagination settings in a `PdfShapeElement`, and then draw it using the [drawShapeElement](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage#drawshapeelement) method of the [PdfPage](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage) class. The method returns a `PdfLayoutResult` that contains the last page used and the occupied bounds.

Pagination is supported for all shape types listed at the beginning of this page.

### Paginating a shape across multiple PDF pages

When the shape is taller than the available page area, the portion that fits on the current page is drawn, and the remaining portion continues on the next page. If the document has no further page, a new page with the same page settings is added automatically.

### Configuring the layout type and layout break type

Pagination is configured through the `layoutFormat` property of the shape element.

* `layoutType` – Specifies the `PdfLayoutType`. Use `PdfLayoutType.paginate` to continue the shape across multiple pages, or `PdfLayoutType.onePage` to draw the shape on a single page without pagination.
* `breakType` – Specifies the `PdfLayoutBreakType`. Use `PdfLayoutBreakType.fitPage` to draw the shape on the first page and continue it on the following pages, or `PdfLayoutBreakType.fitElement` to start the shape on the next page when it does not fit on the first page.
* `paginationBounds` – Optionally specifies the bounds used on the continuation pages.

The shape bounds (`x`, `y`, `width`, and `height`) define the starting position and size of the shape. The shape is drawn from the specified `x` and `y` coordinates on the first page, and the remaining portion continues on the next page.

### Drawing a large ellipse across multiple PDF pages

This example demonstrates how to draw an ellipse whose height exceeds the page height across multiple pages using the [drawShapeElement](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage#drawshapeelement) method of the [PdfPage](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfBrush, PdfShapeElement, PdfShapeType, PdfLayoutType, PdfLayoutBreakType } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Create an ellipse shape element whose height is greater than the page height
// The x and y values of the bounds define the starting position of the ellipse
let element: PdfShapeElement = {
    shape: {
        type: PdfShapeType.Ellipse,
        bounds: { x: 20, y: 20, width: 100, height: 1000 }
    },
    // Apply a brush to fill the ellipse
    brush: new PdfBrush({ r: 165, g: 42, b: 42 }),
    // Enable pagination and configure the break behavior
    layoutFormat: {
        layoutType: PdfLayoutType.paginate,
        breakType: PdfLayoutBreakType.fitPage
    }
};
// Draw the ellipse across multiple pages
page.drawShapeElement(element);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Create an ellipse shape element whose height is greater than the page height
// The x and y values of the bounds define the starting position of the ellipse
var element = {
    shape: {
        type: ej.pdf.PdfShapeType.Ellipse,
        bounds: { x: 20, y: 20, width: 100, height: 1000 }
    },
    // Apply a brush to fill the ellipse
    brush: new ej.pdf.PdfBrush({ r: 165, g: 42, b: 42 }),
    // Enable pagination and configure the break behavior
    layoutFormat: {
        layoutType: ej.pdf.PdfLayoutType.paginate,
        breakType: ej.pdf.PdfLayoutBreakType.fitPage
    }
};
// Draw the ellipse across multiple pages
page.drawShapeElement(element);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Expected output

The generated PDF document contains the ellipse starting at the position (20, 20) on the first page and continuing on the following pages until the full height of 1000 points is drawn.

### Notes

* The shape is positioned using the `x` and `y` values of its bounds.
* Shape content that is taller than the available page area is continued on the next pages. Content that is wider than the page is clipped at the page margin.
* The available area is calculated from the page size and page margins, so the number of pages depends on the page settings and the shape height.
* A pen, a brush, or both can be applied to the shape. Line, Bezier, and Arc shapes require a pen, and a rounded rectangle requires both a pen and a brush.
* With `PdfLayoutBreakType.fitElement`, a shape that does not fit on the first page is not drawn on that page and starts from the next page.
* The `drawShapeElement` method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class draws the shape on the current page and does not paginate it.

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)