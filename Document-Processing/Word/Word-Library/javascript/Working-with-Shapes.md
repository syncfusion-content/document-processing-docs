---
title: Working with Shapes in JavaScript Word | Syncfusion
description: Learn how to add, format, and rotate shapes in a Word document using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# Working with Shapes in JavaScript Word Library

Shapes are drawing objects that can include lines, curves, circles, rectangles, and more. A shape can use preset geometry. You can create and manipulate preset shapes in DOCX documents with the JavaScript Word library.

## Adding shapes

The following code example shows how to add preset shapes to a document and insert text into a shape body.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { BreakType, Color, WordDocument, AutoShapeType } from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();
// Access section
let section = document.sections[0]!;
// Add a rounded rectangle shape
let rectangleParagraph = section.body.appendParagraph();
let rectangle = rectangleParagraph.appendShape(
    AutoShapeType.RoundedRectangle,
    150,
    100,
);

// Set shape position (points)
rectangle.horizontalPosition = 72;
rectangle.verticalPosition = 72;

// Add text content inside the shape
let rectangleTextParagraph = rectangle.textBody.appendParagraph();
let rectangleText = rectangleTextParagraph.appendText(
    'This text is in rounded rectangle shape',
);
rectangleText.characterFormat.textColor = Color.Green;
rectangleText.characterFormat.bold = true;

// Add a pentagon shape in the first section body
let pentagonParagraph = document.sections[0]!.body.appendParagraph();
pentagonParagraph.appendBreak(BreakType.LineBreak);

let pentagon = pentagonParagraph.appendShape(AutoShapeType.Pentagon, 100, 100);
pentagon.horizontalPosition = 72;
pentagon.verticalPosition = 200;

let pentagonTextParagraph = pentagon.textBody.appendParagraph();
pentagonTextParagraph.appendText('This text is in pentagon shape');

// Save the Word document
document.save('Output.docx'); 
{% endhighlight %}
{% endtabs %}

### Format shapes

A shape can have formatting such as fill color, line style, position, and wrap format. You can also set internal text-frame margins.

N> `fillFormat.transparency` accepts a value from 0 to 100 (percentage).

The following code example shows how to apply formatting options to a shape.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Color, WordDocument, AutoShapeType,
    HorizontalOrigin,
    LineDashing,
    TextWrappingStyle,
    TextWrappingType,
    VerticalOrigin, } from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();
// Access section
let section = document.sections[0]!;
// Add a rounded rectangle shape
let paragraph = section.body.appendParagraph();
let rectangle = paragraph.appendShape(
    AutoShapeType.RoundedRectangle,
    150,
    100,
);

rectangle.horizontalPosition = 72;
rectangle.verticalPosition = 72;

// Add text inside the shape
let textParagraph = rectangle.textBody.appendParagraph();
let text = textParagraph.appendText(
    'This text is in rounded rectangle shape',
);
text.characterFormat.textColor = Color.Green;
text.characterFormat.bold = true;

// Apply fill color and transparency
rectangle.fillFormat.fill = true;
rectangle.fillFormat.color = Color.LightGray;
rectangle.fillFormat.transparency = 75;

// Apply wrap formats
rectangle.wrapFormat.textWrappingStyle = TextWrappingStyle.Square;
rectangle.wrapFormat.textWrappingType = TextWrappingType.Right;

// Set horizontal and vertical origin
rectangle.horizontalOrigin = HorizontalOrigin.Margin;
rectangle.verticalOrigin = VerticalOrigin.Page;

// Set line format
rectangle.lineFormat.dashStyle = LineDashing.Dot;
rectangle.lineFormat.color = Color.DarkGray;

// Set internal margins for the shape text frame
rectangle.textFrame.internalMargin.left = 30;
rectangle.textFrame.internalMargin.right = 24;
rectangle.textFrame.internalMargin.top = 6;
rectangle.textFrame.internalMargin.bottom = 18;

// Save the Word document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

### Rotate shapes

You can rotate a shape and apply horizontal or vertical flipping.

The following code example shows how to rotate and flip a shape.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, AutoShapeType } from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();
// Access section
let section = document.sections[0]!;
// Add a rounded rectangle shape
let paragraph = section.body.appendParagraph();
let rectangle = paragraph.appendShape(
    AutoShapeType.RoundedRectangle,
    150,
    100,
);

// Set shape position
rectangle.verticalPosition = 72;
rectangle.horizontalPosition = 72;

// Set 90 degree rotation
rectangle.rotation = 90;

// Set horizontal flip
rectangle.flipHorizontal = true;

// Add text to the shape
let textParagraph = rectangle.textBody.appendParagraph();
textParagraph.appendText('This text is in rounded rectangle shape');

// Save the Word document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}