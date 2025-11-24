---
title: PDF Working with EJ2 Shapes | Syncfusion
description: This section explains how to add shapes such as Line, curve, path, text, rectangle, pie, arc, Bezier, ellipse in the EJ2 PDF document
platform: document-processing
control: PDF
documentation: UG
---
# Working with EJ2 Shapes in PDF Documents

Essential<sup>&reg;</sup> PDF has support for adding the below shapes.

* Line
* Curve
* Path
* Text 
* Rectangle
* Pie
* Arc
* Bezier
* Ellipse

## Adding Shapes to a PDF document

Essential<sup>&reg;</sup> EJ2 PDF supports adding shapes with different types of brushes like solid bush, gradient brush, tiling brush, and image brush along with various color spaces and transparency levels.

### Polygon

This example demonstrates how to draw a polygon shape in a PDF document using the `drawPolygon` method of the `PdfGraphics` class.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
    // Get graphics from the page
    let graphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Define the polygon points
    let points: number[][] = [[10, 100], [10, 200], [100, 100], [100, 200], [55, 150]];
    // Draw the polygon on the page graphics
    graphics.drawPolygon(points, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to draw a polygon in an existing PDF document.

{% tabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Get graphics from the page
    let graphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Define the polygon points
    let points: number[][] = [[10, 100], [10, 200], [100, 100], [100, 200], [55, 150]];
    // Draw the polygon on the page graphics
    graphics.drawPolygon(points, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

### Line

This example demonstrates how to draw a straight line in a PDF document using the `drawLine` method of the `PdfGraphics` class.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
    // Get graphics from the page
    let graphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Draw a line on the page graphics
    graphics.drawLine(pen, 10, 10, 100, 100);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to draw a line in an existing PDF document.

{% tabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Get graphics from the page
    let graphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Draw a line on the page graphics
    graphics.drawLine(pen, 10, 10, 100, 100);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

### Path

This example demonstrates how to draw a path in a PDF document using the `drawPath` method of the `PdfGraphics` class.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
    // Create a new path
    let path: PdfPath = new PdfPath();
    // Gets the graphics of the PDF page
    let graphics: PdfGraphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Add lines to the path
    path.addLine(10, 100, 50, 100);
    path.addLine(50, 100, 50, 150);
    path.addLine(50, 150, 10, 100);
    // Draw the path on the page graphics
    graphics.drawPath(path, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to draw path in an existing PDF document.

 {% tabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new path
    let path: PdfPath = new PdfPath();
    // Gets the graphics of the PDF page
    let graphics: PdfGraphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Add lines to the path
    path.addLine(10, 100, 50, 100);
    path.addLine(50, 100, 50, 150);
    path.addLine(50, 150, 10, 100);
    // Draw the path on the page graphics
    graphics.drawPath(path, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

### Text

This example demonstrates how to draw a text in a PDF document using the `drawString` method of the `PdfGraphics` class.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
    // Get graphics from the page
    let graphics = page.graphics;
    // Set font
    let font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10);
    // Draw text
    graphics.drawString('Hello World!!!', font, [70, 10, 200, 50], new PdfPen([255, 0, 0], 1), new PdfBrush([0, 0, 255]));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

The following code snippet explains how to draw text in an existing PDF document.

 {% tabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Get graphics from the page
    let graphics = page.graphics;
    // Set font
    let font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10);
    // Draw text
    graphics.drawString('Hello World!!!', font, [70, 10, 200, 50], new PdfPen([255, 0, 0], 1), new PdfBrush([0, 0, 255]));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

### Rectangle

This example demonstrates how to draw a rectangle in a PDF document using the `drawRectangle` method of the `PdfGraphics` class.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
    // Gets the graphics of the PDF page
    let graphics: PdfGraphics = page.graphics;
    // Create a new pen.
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Draw a rectangle on the page graphics.
    graphics.drawRectangle(10, 20, 100, 200, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

The following code snippet explains how to draw rectangle in an existing PDF document.

 {% tabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Access the first page
    let page: PdfPage = document.getPage(0);
      // Gets the graphics of the PDF page
    let graphics: PdfGraphics = page.graphics;
    // Create a new pen.
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Draw a rectangle on the page graphics.
    graphics.drawRectangle(10, 20, 100, 200, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

### Pie

This example demonstrates how to draw a pie in a PDF document using the `drawPie` method of the `PdfGraphics` class.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
    // Gets the graphics of the PDF page
    let graphics: PdfGraphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Draw a pie slice on the page graphics
    graphics.drawPie(10, 50, 200, 200, 180, 60, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

The following code snippet explains how to draw pie in an existing PDF document.

 {% tabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Gets the graphics of the PDF page
    let graphics: PdfGraphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Draw a pie slice on the page graphics
    graphics.drawPie(10, 50, 200, 200, 180, 60, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

### Arc

This example demonstrates how to draw a arc in a PDF document using the `drawArc` method of the `PdfGraphics` class.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
    // Gets the graphics of the PDF page
    let graphics: PdfGraphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Draw a arc slice on the page graphics
    graphics.drawArc(10, 20, 100, 200, 20, 30, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

The following code snippet explains how to draw arc in an existing PDF document.

 {% tabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Gets the graphics of the PDF page
    let graphics: PdfGraphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Draw a aec slice on the page graphics
    graphics.drawArc(10, 20, 100, 200, 20, 30, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

### Bezier

This example demonstrates how to draw a bezier in a PDF document using the `drawBezier` method of the `PdfGraphics` class.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
    // Gets the graphics of the PDF page
    let graphics: PdfGraphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Draw a Bezier curve on the page graphics
    graphics.drawBezier(50, 100, 200, 50, 100, 150, 150, 100, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

The following code snippet explains how to draw bezier in an existing PDF document.

 {% tabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Gets the graphics of the PDF page
    let graphics: PdfGraphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Draw a Bezier curve on the page graphics
    graphics.drawBezier(50, 100, 200, 50, 100, 150, 150, 100, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

### Ellipse

This example demonstrates how to draw a ellipse in a PDF document using the `drawEllipse` method of the `PdfGraphics` class.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
    // Gets the graphics of the PDF page
    let graphics: PdfGraphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Draw an ellipse on the page graphics
    graphics.drawEllipse(10, 20, 100, 200, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

The following code snippet explains how to draw ellipse in an existing PDF document.

 {% tabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Gets the graphics of the PDF page
    let graphics: PdfGraphics = page.graphics;
    // Create a new pen
    let pen: PdfPen = new PdfPen([0, 0, 0], 1);
    // Draw an ellipse on the page graphics
    graphics.drawEllipse(10, 20, 100, 200, pen);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}