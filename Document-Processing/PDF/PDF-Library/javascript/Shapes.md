---
title: Shapes in JavaScript PDF library | Syncfusion
description: This section explains how to add shapes such as lines, curves, paths, text, rectangles, pies, arcs, Beziers, and ellipses by using the JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Shapes in JavaScript PDF library

The PDF has support for adding the below shapes.

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

The JavaScript PDF library supports shape rendering exclusively with PDF solid brushes.

### Line

This example demonstrates how to draw a straight line in a PDF document using the `drawLine` method of the `PdfGraphics` class.

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

This example demonstrates how to draw a rectangle in a PDF document using the `drawRectangle` method of the `PdfGraphics` class.

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

This example demonstrates how to draw a rounded rectangle in a PDF document using the `drawRoundedRectangle` method of the `PdfGraphics` class.

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

This example demonstrates how to draw a ellipse in a PDF document using the `drawEllipse` method of the `PdfGraphics` class.

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

This example demonstrates how to draw a polygon shape in a PDF document using the `drawPolygon` method of the `PdfGraphics` class.

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

This example demonstrates how to draw a pie in a PDF document using the `drawPie` method of the `PdfGraphics` class.

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

This example demonstrates how to draw a arc in a PDF document using the `drawArc` method of the `PdfGraphics` class.

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

This example demonstrates how to draw a bezier in a PDF document using the `drawBezier` method of the `PdfGraphics` class.

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

This example demonstrates how to draw a path in a PDF document using the `drawPath` method of the `PdfGraphics` class.

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