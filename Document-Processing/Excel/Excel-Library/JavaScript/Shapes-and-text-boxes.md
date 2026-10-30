---
title: Shapes and Text Boxes in JavaScript Excel Library | Syncfusion
description: Add AutoShapes and text boxes to worksheets and configure size, fill, and text with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Shapes and Text Boxes in JavaScript Excel Library

Worksheets support DrawingML text boxes and preset AutoShapes. Sizes use **points** (72 pt = 1 inch). Anchors are **1-based** row and column.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

## Text boxes

Text boxes place free-form text as floating drawings on the worksheet. Use them for callouts, titles, or notes that sit outside the cell grid.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const box = sheet.addTextBox(2, 2, 144, 72, 'Quarterly notes');
// Configure text frame / alignment on the returned TextBox as needed

// Save the workbook.
await workbook.save('TextBoxes.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const box = sheet.addTextBox(2, 2, 144, 72, 'Quarterly notes');

// Save the workbook.
await workbook.save('TextBoxes.xlsx');
{% endhighlight %}
{% endtabs %}

## Format a text box

Text boxes can have a fill color, a font, and horizontal and vertical alignment. Set the formatting on the object that `addTextBox` returns. The anchor row and column, width, and height are set when you add the text box.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Arguments: row, column, width (points), height (points), text
const box = sheet.addTextBox(2, 2, 180, 80, 'Quarterly notes');

box.fillColor = 'FFF2CC';
box.fontName = 'Calibri';
box.fontSize = 14;
box.fontBold = true;
box.fontColor = '7F6000';

// Horizontal: 'left', 'center', 'right', or 'justify'
box.horizontalAlignment = 'center';
// Vertical: 'top', 'middle', or 'bottom'
box.verticalAlignment = 'middle';

// Save the workbook.
await workbook.save('FormatTextBox.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Arguments: row, column, width (points), height (points), text
const box = sheet.addTextBox(2, 2, 180, 80, 'Quarterly notes');

box.fillColor = 'FFF2CC';
box.fontName = 'Calibri';
box.fontSize = 14;
box.fontBold = true;
box.fontColor = '7F6000';

// Horizontal: 'left', 'center', 'right', or 'justify'
box.horizontalAlignment = 'center';
// Vertical: 'top', 'middle', or 'bottom'
box.verticalAlignment = 'middle';

// Save the workbook.
await workbook.save('FormatTextBox.xlsx');
{% endhighlight %}
{% endtabs %}

## Remove a text box

Remove a text box by reference or by its zero-based position in `sheet.textBoxes`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const draftNote = sheet.addTextBox(2, 2, 144, 72, 'Draft note');
sheet.addTextBox(6, 2, 144, 72, 'Quarterly summary');

// Remove by reference
sheet.removeTextBox(draftNote);

const remaining = sheet.textBoxes.length;

// Save the workbook.
await workbook.save('RemoveTextBox.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const draftNote = sheet.addTextBox(2, 2, 144, 72, 'Draft note');
sheet.addTextBox(6, 2, 144, 72, 'Quarterly summary');

// Remove by reference
sheet.removeTextBox(draftNote);

const remaining = sheet.textBoxes.length;

// Save the workbook.
await workbook.save('RemoveTextBox.xlsx');
{% endhighlight %}
{% endtabs %}

## AutoShapes

AutoShapes are preset geometric drawings such as rectangles, arrows, and stars. Add them to highlight content, build simple diagrams, or label areas of the sheet.

```ts
sheet.addShape(
  type,
  row,
  column,
  width,
  height,
  text?,
  name?,
  altText?,
  rotation?,
  moveWithCell?,
  sizeWithCell?,
)
```

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, AutoShapeType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const shape = sheet.addShape(
  AutoShapeType.RoundedRectangle,
  3,
  3,
  180,
  90,
  'Status',
  'StatusCallout',
);

// Optional: fill, outline, and text on the returned Shape

// Save the workbook.
await workbook.save('AutoShapes.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, AutoShapeType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const shape = sheet.addShape(
  AutoShapeType.RoundedRectangle,
  3,
  3,
  180,
  90,
  'Status',
  'StatusCallout',
);

// Save the workbook.
await workbook.save('AutoShapes.xlsx');
{% endhighlight %}
{% endtabs %}

## Shape fill and outline

Set a solid fill color and an outline on a shape. Colors are `RRGGBB` or `#RRGGBB` strings, and the outline weight is in points from 1 to 10.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, AutoShapeType, ShapeFillType, ShapeLineStyle } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const shape = sheet.addShape(AutoShapeType.Oval, 3, 3, 144, 90, 'Approved');

shape.fill = {
  type: ShapeFillType.Solid,
  foreColor: '70AD47',
  backColor: undefined,
  transparency: undefined,
};
shape.line = {
  color: '375623',
  weight: 2,
  dashStyle: ShapeLineStyle.Solid,
};

// Save the workbook.
await workbook.save('ShapeFillAndOutline.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, AutoShapeType, ShapeFillType, ShapeLineStyle } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const shape = sheet.addShape(AutoShapeType.Oval, 3, 3, 144, 90, 'Approved');

shape.fill = {
  type: ShapeFillType.Solid,
  foreColor: '70AD47',
  backColor: undefined,
  transparency: undefined,
};
shape.line = {
  color: '375623',
  weight: 2,
  dashStyle: ShapeLineStyle.Solid,
};

// Save the workbook.
await workbook.save('ShapeFillAndOutline.xlsx');
{% endhighlight %}
{% endtabs %}

## Shape text and alignment

A shape shows the text that you pass to `addShape`. To change the text or its alignment later, assign a complete `textFrame` object. Setting a single property on `shape.textFrame` does not change the shape.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, AutoShapeType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const shape = sheet.addShape(AutoShapeType.RoundedRectangle, 3, 3, 180, 90);

shape.textFrame = {
  text: 'Done',
  horizontalAlignment: 'center', // 'left', 'center', 'right', or 'justify'
  verticalAlignment: 'middle', // 'top', 'middle', or 'bottom'
  font: {
    name: 'Calibri',
    size: 14,
    bold: true,
    italic: false,
    color: 'FFFFFF',
  },
};

// Save the workbook.
await workbook.save('ShapeText.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, AutoShapeType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const shape = sheet.addShape(AutoShapeType.RoundedRectangle, 3, 3, 180, 90);

shape.textFrame = {
  text: 'Done',
  horizontalAlignment: 'center', // 'left', 'center', 'right', or 'justify'
  verticalAlignment: 'middle', // 'top', 'middle', or 'bottom'
  font: {
    name: 'Calibri',
    size: 14,
    bold: true,
    italic: false,
    color: 'FFFFFF',
  },
};

// Save the workbook.
await workbook.save('ShapeText.xlsx');
{% endhighlight %}
{% endtabs %}

## Shape position, rotation, and behavior

Use the optional arguments of `addShape` to set the alternative text, rotation, and whether the shape moves or resizes with its cells. You can also change `row`, `column`, `width`, `height`, `rotation`, `name`, and `altText` on the returned shape.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, AutoShapeType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Arguments: type, row, column, width, height, text, name, altText,
// rotation (degrees clockwise), moveWithCell, sizeWithCell
const arrow = sheet.addShape(
  AutoShapeType.RightArrow,
  3,
  3,
  144,
  72,
  'Next',
  'NextArrow',
  'Arrow that points to the next step',
  15,
  true,
  false,
);

arrow.width = 180;
arrow.rotation = 30;

// Save the workbook.
await workbook.save('ShapePositionAndRotation.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, AutoShapeType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Arguments: type, row, column, width, height, text, name, altText,
// rotation (degrees clockwise), moveWithCell, sizeWithCell
const arrow = sheet.addShape(
  AutoShapeType.RightArrow,
  3,
  3,
  144,
  72,
  'Next',
  'NextArrow',
  'Arrow that points to the next step',
  15,
  true,
  false,
);

arrow.width = 180;
arrow.rotation = 30;

// Save the workbook.
await workbook.save('ShapePositionAndRotation.xlsx');
{% endhighlight %}
{% endtabs %}

## Remove a shape

Remove a shape by reference or by its zero-based position in `sheet.shapes.shapes`. The shapes collection is `sheet.shapes`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, AutoShapeType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const draftShape = sheet.addShape(AutoShapeType.Rectangle, 3, 3, 144, 72, 'Draft note');
sheet.addShape(AutoShapeType.Oval, 8, 3, 144, 72, 'Quarterly summary');

// Remove by reference
sheet.removeShape(draftShape);

const remaining = sheet.shapes.shapes.length;

// Save the workbook.
await workbook.save('RemoveShape.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, AutoShapeType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const draftShape = sheet.addShape(AutoShapeType.Rectangle, 3, 3, 144, 72, 'Draft note');
sheet.addShape(AutoShapeType.Oval, 8, 3, 144, 72, 'Quarterly summary');

// Remove by reference
sheet.removeShape(draftShape);

const remaining = sheet.shapes.shapes.length;

// Save the workbook.
await workbook.save('RemoveShape.xlsx');
{% endhighlight %}
{% endtabs %}

## Common `AutoShapeType` values

Common preset shapes cover rectangles, polygons, stars, arrows, and basic three-dimensional forms. Choose the type that matches the callout or diagram you need.

* Rectangles and ovals: `Rectangle`, `RoundedRectangle`, `Oval`, `Circle`
* Polygons: `Triangle`, `Diamond`, `Pentagon`, `Hexagon`, `Octagon`
* Stars and symbols: `Star5`, `Star10`, `Heart`, `Moon`, `Sun`, `Cloud`, `Arc`
* 3-D-style: `Cube`, `Cylinder`, `Cone`, `Pyramid`
* Arrows: `RightArrow`, `LeftArrow`, `UpArrow`, `DownArrow`

Use `ShapeLineStyle` and fill-related exports when styling outline and fill through the shape’s formatting objects.
