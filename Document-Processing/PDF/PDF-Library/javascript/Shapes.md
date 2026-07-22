---
title: Shapes in JavaScript PDF Library | Syncfusion
description: This section explains how to add shapes such as lines, paths, rectangles, rounded rectangles, pies, arcs, Beziers, polygons, and ellipses by using the JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---
# Shapes in JavaScript PDF Library

The JavaScript PDF Library supports adding the following shapes.

* [Line](#line)
* [Rectangle](#rectangle)
* [Rounded rectangle](#rounded-rectangle)
* [Ellipse](#ellipse)
* [Polygon](#polygon)
* [Pie](#pie)
* [Arc](#arc)
* [Bezier](#bezier)
* [Path](#path)

## Adding Shapes to a PDF document

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports shape rendering with PDF pens (outlines) and solid `PdfBrush` fills.

> **Coordinate system:** All coordinates are expressed in PDF points (1 point = 1/72 inch). The origin (0, 0) is the top-left corner of the page. X increases to the right; Y increases downward.

The setup boilerplate (creating a document, adding a page, obtaining graphics, and saving) is identical in every example below. See the [Common setup](#common-setup) block for the canonical snippet; the per-shape samples include the same lines for clarity and can be run as-is.

### Common setup

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page.
let page: PdfPage = document.addPage();
// Get the page graphics.
let graphics: PdfGraphics = page.graphics;
// Create a new pen (black, 1pt).
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);

// ...draw the shape here...

// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document.
var document = new ej.pdf.PdfDocument();
// Add a page.
var page = document.addPage();
// Get the page graphics.
var graphics = page.graphics;
// Create a new pen (black, 1pt).
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);

// ...draw the shape here...

// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% endtabs %}

> In a browser, the `save` method returns a `Blob` and triggers a download. In Node.js, it writes the file to disk. To customize the browser download:
> ```javascript
> document.save('Output.pdf').then((blob) => {
>   const url = URL.createObjectURL(blob);
>   const a = document.createElement('a');
>   a.href = url;
>   a.download = 'Output.pdf';
>   a.click();
>   URL.revokeObjectURL(url);
> });
> ```
>
> In browser environments, `await` the `save` promise before calling `document.destroy()` to ensure the file is fully flushed.

### Line

This example demonstrates how to draw a straight line in a PDF document using the [drawLine](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

**Parameters for `drawLine`:**
- `pen` — outline pen.
- `start` — start point `{ x, y }` in PDF points.
- `end` — end point `{ x, y }` in PDF points.

**Returns:** void. **Throws:** `Error` if `pen` is null.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page.
let page: PdfPage = document.addPage();
// Get the page graphics.
let graphics: PdfGraphics = page.graphics;
// Create a new pen (black, 1pt).
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line on the page graphics.
graphics.drawLine(pen, { x: 10, y: 200 }, { x: 100, y: 100 });
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document.
var document = new ej.pdf.PdfDocument();
// Add a page.
var page = document.addPage();
// Get the page graphics.
var graphics = page.graphics;
// Create a new pen (black, 1pt).
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line on the page graphics.
graphics.drawLine(pen, { x: 10, y: 200 }, { x: 100, y: 100 });
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% endtabs %}

### Rectangle

This example demonstrates how to draw a rectangle in a PDF document using the [drawRectangle](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

**Parameters for `drawRectangle`:**
- `rect` — bounding rectangle `{ x, y, width, height }` in PDF points.
- `pen` — outline pen.

**Returns:** void. **Throws:** `Error` if `pen` is null.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page.
let page: PdfPage = document.addPage();
// Get the page graphics.
let graphics: PdfGraphics = page.graphics;
// Create a new pen (black, 1pt).
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a rectangle on the page graphics.
graphics.drawRectangle({ x: 10, y: 20, width: 100, height: 200 }, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document.
var document = new ej.pdf.PdfDocument();
// Add a page.
var page = document.addPage();
// Get the page graphics.
var graphics = page.graphics;
// Create a new pen (black, 1pt).
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a rectangle on the page graphics.
graphics.drawRectangle({ x: 10, y: 20, width: 100, height: 200 }, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% endtabs %}

### Rounded rectangle

This example demonstrates how to draw a rounded rectangle in a PDF document using the `drawRoundedRectangle` method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

**Parameters for `drawRoundedRectangle`:**
- `rect` — bounding rectangle `{ x, y, width, height }` in PDF points.
- `radius` — corner radius in PDF points. Must be non-negative and typically ≤ `min(width, height) / 2`.
- `pen` — outline pen.
- `brush` — optional `PdfBrush` for the fill. `PdfBrush` accepts an RGB color object `{ r, g, b }` with each channel in the range `0`–`255`.

**Returns:** void. **Throws:** `Error` if `pen` is null or `radius` is negative.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfPen, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page.
let page: PdfPage = document.addPage();
// Get the page graphics.
let graphics: PdfGraphics = page.graphics;
// Create a new pen (black, 1pt).
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Create a new brush (blue fill).
let brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 255 });
// Draw a rounded rectangle on the page graphics.
graphics.drawRoundedRectangle(
  { x: 10, y: 20, width: 100, height: 200 },
  5,
  pen,
  brush
);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document.
var document = new ej.pdf.PdfDocument();
// Add a page.
var page = document.addPage();
// Get the page graphics.
var graphics = page.graphics;
// Create a new pen (black, 1pt).
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Create a new brush (blue fill).
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 });
// Draw a rounded rectangle on the page graphics.
graphics.drawRoundedRectangle(
  { x: 10, y: 20, width: 100, height: 200 },
  5,
  pen,
  brush
);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% endtabs %}

### Ellipse

This example demonstrates how to draw an ellipse in a PDF document using the [drawEllipse](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

**Parameters for `drawEllipse`:**
- `rect` — bounding rectangle `{ x, y, width, height }` in PDF points. The ellipse is inscribed in this rectangle.
- `pen` — outline pen.

**Returns:** void. **Throws:** `Error` if `pen` is null.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page.
let page: PdfPage = document.addPage();
// Get the page graphics.
let graphics: PdfGraphics = page.graphics;
// Create a new pen (black, 1pt).
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw an ellipse on the page graphics.
graphics.drawEllipse({ x: 10, y: 20, width: 100, height: 200 }, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document.
var document = new ej.pdf.PdfDocument();
// Add a page.
var page = document.addPage();
// Get the page graphics.
var graphics = page.graphics;
// Create a new pen (black, 1pt).
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw an ellipse on the page graphics.
graphics.drawEllipse({ x: 10, y: 20, width: 100, height: 200 }, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% endtabs %}

### Polygon

This example demonstrates how to draw a polygon shape in a PDF document using the [drawPolygon](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

`Point` represents a 2D coordinate `{ x: number; y: number }` in PDF points. It is imported from `@syncfusion/ej2-pdf`.

**Parameters for `drawPolygon`:**
- `points` — array of `Point` values (at least three) defining the polygon vertices in order.
- `pen` — outline pen.

The overload `drawPolygon(points, pen, brush)` additionally accepts a `PdfBrush` to fill the polygon.

**Returns:** void. **Throws:** `Error` if `pen` is null or `points` has fewer than three entries.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfPen, Point } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page.
let page: PdfPage = document.addPage();
// Get the page graphics.
let graphics: PdfGraphics = page.graphics;
// Create a new pen (black, 1pt).
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Define the polygon points.
let points: Point[] = [{x: 10, y: 100}, { x: 10, y: 200}, { x: 100, y: 100}, { x: 100, y: 200}, { x: 55, y: 150}];
// Draw the polygon on the page graphics.
graphics.drawPolygon(points, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document.
var document = new ej.pdf.PdfDocument();
// Add a page.
var page = document.addPage();
// Get the page graphics.
var graphics = page.graphics;
// Create a new pen (black, 1pt).
var pen = new ej.pdf.PdfPen({r:0, g:0, b:0}, 1);
// Define the polygon points.
var points = [{x:10, y:100}, {x:10, y:200}, {x:100, y:100}, {x:100, y:200}, {x:55, y:150}];
// Draw the polygon on the page graphics.
graphics.drawPolygon(points, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% endtabs %}

### Pie

This example demonstrates how to draw a pie in a PDF document using the [drawPie](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

**Parameters for `drawPie`:**
- `rect` — bounding rectangle `{ x, y, width, height }` in PDF points. The full ellipse is inscribed in this rectangle.
- `startAngle` — angle (in degrees) at which the pie begins, measured clockwise from the positive X-axis.
- `sweepAngle` — angle (in degrees) swept clockwise from `startAngle`.
- `pen` — outline pen.

**Returns:** void. **Throws:** `Error` if `pen` is null.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page.
let page: PdfPage = document.addPage();
// Get the page graphics.
let graphics: PdfGraphics = page.graphics;
// Create a new pen (black, 1pt).
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a pie slice on the page graphics.
graphics.drawPie({ x: 10, y: 50, width: 200, height: 200 }, 180, 60, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document.
var document = new ej.pdf.PdfDocument();
// Add a page.
var page = document.addPage();
// Get the page graphics.
var graphics = page.graphics;
// Create a new pen (black, 1pt).
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a pie slice on the page graphics.
graphics.drawPie({ x: 10, y: 50, width: 200, height: 200 }, 180, 60, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% endtabs %}

### Arc

This example demonstrates how to draw an arc in a PDF document using the [drawArc](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

**Parameters for `drawArc`:**
- `rect` — bounding rectangle `{ x, y, width, height }` in PDF points.
- `startAngle` — angle (in degrees) at which the arc begins, measured clockwise from the positive X-axis.
- `sweepAngle` — angle (in degrees) swept clockwise from `startAngle`.
- `pen` — outline pen.

**Returns:** void. **Throws:** `Error` if `pen` is null.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page.
let page: PdfPage = document.addPage();
// Get the page graphics.
let graphics: PdfGraphics = page.graphics;
// Create a new pen (black, 1pt).
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw an arc slice on the page graphics.
graphics.drawArc({ x: 10, y: 20, width: 100, height: 200 }, 20, 30, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document.
var document = new ej.pdf.PdfDocument();
// Add a page.
var page = document.addPage();
// Get the page graphics.
var graphics = page.graphics;
// Create a new pen (black, 1pt).
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw an arc slice on the page graphics.
graphics.drawArc({ x: 10, y: 20, width: 100, height: 200 }, 20, 30, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% endtabs %}

### Bezier

This example demonstrates how to draw a Bezier in a PDF document using the [drawBezier](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

**Parameters for `drawBezier`:**
- `start` — start point `{ x, y }` in PDF points.
- `control1` — first control point `{ x, y }`.
- `control2` — second control point `{ x, y }`.
- `end` — end point `{ x, y }`.
- `pen` — outline pen.

**Returns:** void. **Throws:** `Error` if `pen` is null.

> A Bezier curve can also be appended to a `PdfPath` as a sub-path using `path.addBezier(start, control1, control2, end)`. See the [Path](#path) section.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page.
let page: PdfPage = document.addPage();
// Get the page graphics.
let graphics: PdfGraphics = page.graphics;
// Create a new pen (black, 1pt).
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a Bezier curve on the page graphics.
graphics.drawBezier({ x: 50, y: 100 }, { x: 200, y: 50 }, { x: 100, y: 150 }, { x: 150, y: 100 }, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document.
var document = new ej.pdf.PdfDocument();
// Add a page.
var page = document.addPage();
// Get the page graphics.
var graphics = page.graphics;
// Create a new pen (black, 1pt).
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a Bezier curve on the page graphics.
graphics.drawBezier({ x: 50, y: 100 }, { x: 200, y: 50 }, { x: 100, y: 150 }, { x: 150, y: 100 }, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% endtabs %}

### Path

This example demonstrates how to draw a path in a PDF document using the [drawPath](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class.

**Parameters for `drawPath`:**
- `path` — a `PdfPath` object containing the sub-paths to render.
- `pen` — outline pen.

**Returns:** void. **Throws:** `Error` if `pen` or `path` is null.

**`PdfPath` methods:**
- `addLine(start, end)` — adds a straight line segment.
- `addBezier(start, control1, control2, end)` — adds a cubic Bezier segment.
- `addRectangle(rect)` — adds a closed rectangular sub-path.
- `addEllipse(rect)` — adds a closed elliptical sub-path.
- `closePath()` — closes the current sub-path.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfPen, PdfPath } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page.
let page: PdfPage = document.addPage();
// Get the page graphics.
let graphics: PdfGraphics = page.graphics;
// Create a new pen (black, 1pt).
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Create a new path.
let path: PdfPath = new PdfPath();
// Add lines to the path.
path.addLine({ x: 10, y: 50 }, { x: 200, y: 250 });
path.addLine({ x: 10, y: 150 }, { x: 220, y: 250 });
path.addLine({ x: 10, y: 200 }, { x: 240, y: 250 });
// Draw the path on the page graphics.
graphics.drawPath(path, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document.
var document = new ej.pdf.PdfDocument();
// Add a page.
var page = document.addPage();
// Get the page graphics.
var graphics = page.graphics;
// Create a new pen (black, 1pt).
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Create a new path.
var path = new ej.pdf.PdfPath();
// Add lines to the path.
path.addLine({ x: 10, y: 50 }, { x: 200, y: 250 });
path.addLine({ x: 10, y: 150 }, { x: 220, y: 250 });
path.addLine({ x: 10, y: 200 }, { x: 240, y: 250 });
// Draw the path on the page graphics.
graphics.drawPath(path, pen);
// Save the document.
document.save('Output.pdf');
// Close the document.
document.destroy();
{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)