# Pages

> Add, insert, remove, rotate pages and work with sections having different page settings in a PDF document.

---

## Add a New Page

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();

//Add a page and draw text
document.pages.add().graphics.drawString(
    'Hello World!!!', PdfStandardFont(PdfFontFamily.helvetica, 27),
    brush: PdfBrushes.darkBlue,
    bounds: const Rect.fromLTWH(170, 100, 0, 0));

//Save and dispose the PDF document
File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Insert a Page at a Specific Index in an Existing PDF

```dart
//Load an existing PDF document
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Insert a blank page at index 0 (before the first page)
document.pages.insert(0);

//Save and dispose
File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Draw Graphicspath, Apply skewTransform, and Set Clipping in a PDF

```dart
// Draw a GraphicsPath
PdfDocument document = PdfDocument();
  ..pages
      .add()
      .graphics
      .drawPath(
          PdfPath()
            ..addRectangle(Rect.fromLTWH(10, 10, 100, 100))
            ..addEllipse(Rect.fromLTWH(100, 100, 100, 100)),
          pen: PdfPens.black,
          brush: PdfBrushes.red);

//Set skew transform
PdfDocument document = PdfDocument();
document.pages.add().graphics
  ..save()
  ..skewTransform(10, 10)
  ..drawString('Hello world!', PdfStandardFont(PdfFontFamily.helvetica, 12),
      pen: PdfPens.red)
  ..restore();

// Set the clipping region of the Graphics
document.pages.add().graphics
  ..setClip(bounds: Rect.fromLTWH(0, 0, 50, 12), mode: PdfFillMode.alternate)
  ..drawString('Hello world!', PdfStandardFont(PdfFontFamily.helvetica, 12),
      pen: PdfPens.red);
```

---

## Customize Pen Appearance Using Dash and Line Properties

```dart
//Set pen dash offset.
PdfDocument document = PdfDocument()
  ..pages.add().graphics.drawRectangle(
      pen: PdfPen(PdfColor(255, 0, 0))..dashOffset = 0.5,
      bounds: Rect.fromLTWH(10, 10, 200, 100));

//Set pen dash pattern.
PdfDocument document = PdfDocument()
  ..pages.add().graphics.drawRectangle(
      pen: PdfPen(PdfColor(255, 0, 0))..dashPattern = [4, 2, 1, 3],
      bounds: Rect.fromLTWH(10, 10, 200, 100));

//Set pen dash style and line join
PdfDocument document = PdfDocument()
  ..pages.add().graphics.drawRectangle(
      pen: PdfPen(PdfColor(255, 0, 0),
          dashStyle: PdfDashStyle.custom, lineJoin: PdfLineJoin.bevel)
        ..dashPattern = [4, 2, 1, 3],
      bounds: Rect.fromLTWH(0, 0, 200, 100));

//Set line cap of the pen.
PdfDocument document = PdfDocument()
  ..pages.add().graphics.drawRectangle(
      pen: PdfPen(PdfColor(255, 0, 0),
          dashStyle: PdfDashStyle.custom, lineCap: PdfLineCap.round)
        ..dashPattern = [4, 2, 1, 3],
      bounds: Rect.fromLTWH(0, 0, 200, 100));

//Set miter limit.
PdfDocument document = PdfDocument()
  ..pages.add().graphics.drawRectangle(
      pen: PdfPen(PdfColor(255, 0, 0), width: 4)
        ..miterLimit = 2,
      bounds: Rect.fromLTWH(10, 10, 200, 100));
```

---

## Get Page Count from an Existing PDF

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Get the total number of pages
int pageCount = document.pages.count;

document.dispose();
```

---

## Remove Pages from an Existing PDF

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Get the second page
PdfPage page = document.pages[1];

//Remove by page reference
document.pages.remove(page);

//Remove the first page by index
document.pages.removeAt(0);

File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Set a Specific Color Channel in a PDF

```dart
//sets the blue channel value.
PdfDocument document = PdfDocument()
  ..pages.add().graphics.drawRectangle(
      pen: PdfPen(PdfColor(0, 0, 0)..b = 255),
      bounds: Rect.fromLTWH(10, 10, 200, 100));

//sets the green channel value.
PdfDocument document = PdfDocument()
  ..pages.add().graphics.drawRectangle(
      pen: PdfPen(PdfColor(0, 0, 0)..g = 255),
      bounds: Rect.fromLTWH(10, 10, 200, 100));

//sets the red channel value.
PdfDocument document = PdfDocument()
  ..pages.add().graphics.drawRectangle(
      pen: PdfPen(PdfColor(0, 0, 0)..r = 255),
      bounds: Rect.fromLTWH(10, 10, 200, 100));
```

---

## Get whether the PDFColor is Empty or not.

```dart
//Create a new PDF pen instance.
PdfColor color = PdfColor.empty;
//Draw rectangle with the pen.
document.pages.add().graphics.drawString('Color present: ${color.isEmpty}',
    PdfStandardFont(PdfFontFamily.helvetica, 12),
    pen: PdfPen(color));
```

---

## Get the default layer of the page (Read only)

```dart
//Create a new PDF page and gets the default layer
PdfPageLayer defaultLayer = document.pages.add().defaultLayer;
```

---

## Get the index of the default layer (Read only).

```dart
//Create a new PDF page and gets the default layer index
int layerIndex = document.pages.add().defaultLayerIndex;
```

---

## Rotate a Page

```dart
PdfDocument document = PdfDocument();

PdfSection section = document.sections!.add();
section.pageSettings.rotate = PdfPageRotateAngle.rotateAngle180;
section.pageSettings.size = PdfPageSize.a4;

section.pages.add().graphics.drawString(
    'Rotated by 180 degrees',
    PdfStandardFont(PdfFontFamily.helvetica, 14),
    brush: PdfBrushes.black,
    bounds: const Rect.fromLTWH(20, 20, 0, 0));

File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Apply a Section Template to PDF Pages

```dart
PdfSection section = document.sections!.add();
//Sets the page settings of the section
section.pageSettings =
    PdfPageSettings(PdfPageSize.a4, PdfPageOrientation.portrait);
//Sets the template for the page in the section
section.template = PdfSectionTemplate();
//Create a new PDF page and draw the text
section.pages.add().graphics.drawString(
    'Hello World!!!', PdfStandardFont(PdfFontFamily.helvetica, 27),
    brush: PdfBrushes.darkBlue, bounds: const Rect.fromLTWH(170, 100, 0, 0));
```

---

## Configure a Page Template for a PDF Section

```dart
PdfSection section = document.sections!.add();
// Create a section template
// Bottom page template
PdfSectionTemplate template = PdfSectionTemplate()..bottomTemplate = false;
// Left page template
PdfSectionTemplate template = PdfSectionTemplate()..leftTemplate = false;
// Right page template
PdfSectionTemplate template = PdfSectionTemplate()..rightTemplate = false;
// Top page template
PdfSectionTemplate template = PdfSectionTemplate()..topTemplate = false;

// Sets the template for the page in the section
section.template = template;
```

---

## Get the rotation of PDF page.

```dart
//Rotation of the PDF page
PdfPageRotateAngle rotation = document.pages[0].rotation;
```

---


### Rotation Angles
```dart
PdfPageRotateAngle.rotateAngle0    // 0° (default)
PdfPageRotateAngle.rotateAngle90   // 90°
PdfPageRotateAngle.rotateAngle180  // 180°
PdfPageRotateAngle.rotateAngle270  // 270°
```

---

## Add Margin to All Pages

```dart
PdfDocument document = PdfDocument();

//Apply a uniform margin of 200 points to all pages
document.pageSettings.margins.all = 200;

document.pages.add().graphics.drawString(
    'Hello World!!!', PdfStandardFont(PdfFontFamily.helvetica, 27),
    brush: PdfBrushes.darkBlue);

List<int> bytes = await document.save();
document.dispose();
```

---

## Add Sections with Different Page Settings

```dart
PdfFont font = PdfStandardFont(PdfFontFamily.helvetica, 14);

//Section 1 — no rotation, custom size
PdfSection section = document.sections!.add();
section.pageSettings.rotate = PdfPageRotateAngle.rotateAngle0;
section.pageSettings.size = const Size(300, 400);
section.pages.add().graphics.drawString(
    'Rotated by 0 degrees', font,
    brush: PdfBrushes.black,
    bounds: const Rect.fromLTWH(20, 20, 0, 0));

//Section 2 — rotated 90°
section = document.sections!.add();
section.pageSettings.rotate = PdfPageRotateAngle.rotateAngle90;
section.pageSettings.size = const Size(300, 400);
section.pages.add().graphics.drawString(
    'Rotated by 90 degrees', font,
    brush: PdfBrushes.black,
    bounds: const Rect.fromLTWH(20, 20, 0, 0));

//Section 3 — rotated 180°, wide format
section = document.sections!.add();
section.pageSettings.rotate = PdfPageRotateAngle.rotateAngle180;
section.pageSettings.size = const Size(500, 200);
section.pages.add().graphics.drawString(
    'Rotated by 180 degrees', font,
    brush: PdfBrushes.black,
    bounds: const Rect.fromLTWH(20, 20, 0, 0));

//Section 4 — rotated 270°
section = document.sections!.add();
section.pageSettings.rotate = PdfPageRotateAngle.rotateAngle270;
section.pageSettings.size = const Size(300, 200);
section.pages.add().graphics.drawString(
    'Rotated by 270 degrees', font,
    brush: PdfBrushes.black,
    bounds: const Rect.fromLTWH(20, 20, 0, 0));
```

---

## Create a document using the page template element.

```dart
//Set margins.
document.pageSettings.setMargins(25);
//Create the page template with specific bounds
PdfPageTemplateElement custom = PdfPageTemplateElement(
    Rect.fromLTWH(0, 0, 100, 100), document.pages.add());
document.template.stamps.add(custom);
//Gets or sets  X co-ordinate.
custom.x = 10.10;
//Gets or sets  Y co-ordinate.
custom.y = 10.10;
//Gets or sets  location.
custom.location = Offset(5, 5);
//Draw template into pdf page.
custom.graphics.drawRectangle(
    pen: PdfPen(PdfColor(255, 165, 0), width: 3),
    brush: PdfSolidBrush(PdfColor(173, 255, 47)),
    bounds: Rect.fromLTWH(0, 0, 100, 100));

```

---

## Get Page Client Size

```dart
PdfPage page = document.pages.add();

//Get usable width and height after margins
Size clientSize = page.getClientSize();
double width = clientSize.width;
double height = clientSize.height;
```

---

## Page Properties Reference

| Property | Description |
|---|---|
| `document.pages.count` | Total number of pages |
| `document.pages.add()` | Add a new page at the end |
| `document.pages.insert(index)` | Insert a blank page at a given index |
| `document.pages.remove(page)` | Remove a page by reference |
| `document.pages.removeAt(index)` | Remove a page by index |
| `page.getClientSize()` | Returns usable drawing area (after margins) |
| `document.pageSettings.size` | Set the default page size for all pages |
| `document.pageSettings.orientation` | `portrait` or `landscape` |
| `document.pageSettings.rotate` | Page rotation angle |
| `document.pageSettings.margins` | Page margins (top, bottom, left, right, all) |

---

## Notes

- Pages are zero-indexed: `document.pages[0]` is the first page.
- `pages.add()` always appends to the end; use `pages.insert(index)` to add at a specific position.
- `page.getClientSize()` returns the size minus margins — use this for accurate drawing bounds.
- Units are in **points** (1 inch = 72 points).