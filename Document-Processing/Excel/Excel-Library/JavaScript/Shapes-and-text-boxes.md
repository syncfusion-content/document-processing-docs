---
title: Shapes and Text Boxes in JavaScript Excel | Syncfusion
description: Add AutoShapes and text boxes to worksheets and configure size, fill, and text with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Shapes and Text Boxes in JavaScript Excel

Worksheets support DrawingML text boxes and preset AutoShapes. Sizes use **points** (72 pt = 1 inch). Anchors are **1-based** row and column.

## Text boxes

Text boxes place free-form text as floating drawings on the worksheet. Use them for callouts, titles, or notes that sit outside the cell grid.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const box = sheet.addTextBox(2, 2, 144, 72, 'Quarterly notes');
// Configure text frame / alignment on the returned TextBox as needed

sheet.removeTextBox(box);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const box = sheet.addTextBox(2, 2, 144, 72, 'Quarterly notes');

sheet.removeTextBox(box);
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
sheet.removeShape(shape);
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

sheet.removeShape(shape);
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
