# Images, shapes, and text boxes

Drawing objects anchored to worksheet cells.

## Table of contents

- [Images](#images)
- [Shapes (auto shapes)](#shapes-auto-shapes)
- [Text boxes](#text-boxes)
- [Shared geometry rules](#shared-geometry-rules)
- [Gotchas](#gotchas)

## Images

```ts
import { Workbook } from '@syncfusion/ej2-xlsx';
import { readFile } from 'node:fs/promises';

const wb = Workbook.create();
const sheet = wb.sheet(0);

const bytes = new Uint8Array(await readFile('./logo.png'));

const picture = sheet.addImage(
  bytes, // format sniffed from bytes
  2,     // row 1-based
  2,     // column 1-based
  144,   // width points (2 in)
  72,    // height points (1 in)
);

// sheet.images — collection
sheet.removeImage(picture);
// sheet.removeImage(0);
```

Notes:

- Pass raw file bytes (`Uint8Array`); content type is detected from the payload.
- Supported image kinds follow `Image` / `ImageContentTypes` package definitions.
- Pictures float above cells at the anchor.

## Shapes (auto shapes)

```ts
import { Workbook, AutoShapeType } from '@syncfusion/ej2-xlsx';

const wb = Workbook.create();
const sheet = wb.sheet(0);

const shape = sheet.addShape(
  AutoShapeType.Rectangle, // type
  3,    // row
  3,    // column
  120,  // width pt
  60,   // height pt
  'Status', // optional text
  'StatusBox', // optional name
  'Status indicator', // optional alt text
  0,    // rotation degrees clockwise
  true, // moveWithCell (default true)
  false // sizeWithCell (default false)
);

// Fill / line / text frame on Shape, ShapeFill, ShapeLineFormat, …
// ShapeFillType, ShapeLineStyle, ExcelGradientStyle as needed

sheet.removeShape(shape);
```

Use `AutoShapeType` presets (rectangle, ellipse, arrows, and other presets exported by the package).

## Text boxes

```ts
const box = sheet.addTextBox(
  5,     // row
  1,     // column
  200,   // width pt
  80,    // height pt
  'Notes go here',
);

// TextBoxHorizontalAlignment / TextBoxVerticalAlignment for alignment
// sheet.textBoxes collection
sheet.removeTextBox(box);
```

## Shared geometry rules

| Parameter | Unit / basis |
|-----------|----------------|
| `row`, `column` | **1-based** cell anchor |
| `width`, `height` | **Points** (72 pt = 1 inch) |
| rotation | Degrees clockwise (shapes) |

Invalid geometry throws `InvalidArgumentError`. Non-worksheet sheet kinds throw `InvalidWorksheetError`.

Collections:

```ts
sheet.images;
sheet.shapes;
sheet.textBoxes;
```

## Gotchas

- Browser apps must obtain `Uint8Array` themselves (fetch/file input); path helpers are Node-side concerns.
- Do not confuse CSS pixels with Excel points when matching layouts.
- `moveWithCell` / `sizeWithCell` affect how Excel reflows drawings with row/column changes.
- Prefer public `addImage` / `addShape` / `addTextBox` over fabricating drawing XML.
