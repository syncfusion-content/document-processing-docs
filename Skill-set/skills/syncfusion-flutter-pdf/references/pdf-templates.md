# PDF Templates

> Create reusable drawing surfaces using PdfTemplate, extract page content as templates, and add stamp overlays using PdfPageTemplateElement.

---

## Create a New PDF Template and Draw on a Page

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();

//Create a PDF template with specified width and height (in points)
PdfTemplate template = PdfTemplate(100, 50);

//Draw a rectangle on the template
template.graphics!.drawRectangle(
    brush: PdfBrushes.burlyWood,
    bounds: Rect.fromLTWH(0, 0, 100, 50));

//Draw text on the template
template.graphics!.drawString(
    'Hello World', PdfStandardFont(PdfFontFamily.helvetica, 14),
    brush: PdfBrushes.black,
    bounds: Rect.fromLTWH(5, 5, 0, 0));

//Draw the template onto a new page at position (0, 0)
document.pages.add().graphics.drawPdfTemplate(template, Offset(0, 0));

//Save and dispose
File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Draw Template at a Specific Position and Size

```dart
//Create a template (e.g., a logo/badge)
PdfTemplate template = PdfTemplate(120, 60);
template.graphics!.drawRectangle(
    brush: PdfSolidBrush(PdfColor(0, 102, 204)),
    bounds: Rect.fromLTWH(0, 0, 120, 60));
template.graphics!.drawString(
    'CERTIFIED',
    PdfStandardFont(PdfFontFamily.helvetica, 14, style: PdfFontStyle.bold),
    brush: PdfBrushes.white,
    bounds: Rect.fromLTWH(10, 20, 0, 0));

PdfPage page = document.pages.add();

//Draw template at a specific position (x=200, y=300)
page.graphics.drawPdfTemplate(template, Offset(200, 300));

//Draw template again at a different position (reuse)
page.graphics.drawPdfTemplate(template, Offset(50, 100));
```

---

## Create Template from an Existing PDF Page

```dart
//Load an existing PDF document
PdfDocument loadedDocument =
    PdfDocument(inputBytes: File('Input.pdf').readAsBytesSync());

//Get the first page of the loaded document
PdfPage loadedPage = loadedDocument.pages[0];

//Create a PDF template from the existing page
PdfTemplate template = loadedPage.createTemplate();

//Create a new PDF document
PdfDocument document = PdfDocument();

//Add a page
PdfPage page = document.pages.add();

//Draw the extracted template onto the new page
page.graphics.drawPdfTemplate(template, Offset(0, 0));

//Save and dispose
File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Create Header and Footer with Template using PdfPageTemplateElement

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();

PdfPage page = document.pages.add();

Rect bounds = Rect.fromLTWH(0, 0, page.getClientSize().width, 50);
PdfFont font = PdfStandardFont(PdfFontFamily.helvetica, 7);

//--- Header ---
PdfPageTemplateElement header = PdfPageTemplateElement(bounds);

//Load and draw a logo image in the header
File imageFile = File('image.jpg');
Uint8List imagebytes = await imageFile.readAsBytes();
String imageData = base64.encode(imagebytes);
header.graphics.drawImage(
    PdfBitmap.fromBase64String(imageData),
    Rect.fromLTWH(0, 0, 100, 50));

document.template.top = header;

//--- Footer with page number ---
PdfPageTemplateElement footer = PdfPageTemplateElement(bounds);

PdfCompositeField compositeField = PdfCompositeField(
    font: font,
    brush: PdfBrushes.black,
    text: 'Page {0} of {1}',
    fields: <PdfAutomaticField>[
      PdfPageNumberField(font: font, brush: PdfBrushes.black),
      PdfPageCountField(font: font, brush: PdfBrushes.black)
    ]);
compositeField.bounds = footer.bounds;
compositeField.draw(footer.graphics, Offset(470, 40));

document.template.bottom = footer;

File('SampleOutput.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Add a Stamp Overlay to All Pages

```dart
PdfDocument document = PdfDocument();
PdfPage page = document.pages.add();

//Create a stamp template covering the full page
final PdfPageTemplateElement stampTemplate =
    PdfPageTemplateElement(Offset(0, 0) & page.getClientSize(), page);
stampTemplate.dock = PdfDockStyle.fill;

PdfGraphicsState state = stampTemplate.graphics.save();
stampTemplate.graphics.rotateTransform(-40);
stampTemplate.graphics.drawString(
    'STAMP PDF DOCUMENT',
    PdfStandardFont(PdfFontFamily.helvetica, 20),
    pen: PdfPens.red,
    brush: PdfBrushes.red,
    bounds: Rect.fromLTWH(-150, 450, 400, 400));
stampTemplate.graphics.restore(state);

//Add the stamp to all pages
document.template.stamps.add(stampTemplate);

//Draw page content below the stamp
page.graphics.drawRectangle(
    pen: PdfPen(PdfColor(0, 0, 0), width: 5),
    brush: PdfBrushes.lightGray,
    bounds: Offset(0, 0) & page.getClientSize());

File('StampOutput.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## API Reference

| Class | Description |
|---|---|
| `PdfTemplate(width, height)` | Creates a blank reusable drawing surface |
| `PdfTemplate.graphics` | The `PdfGraphics` to draw content on the template |
| `PdfPage.createTemplate()` | Extracts an existing page's content as a `PdfTemplate` |
| `PdfGraphics.drawPdfTemplate(template, offset)` | Renders a template at a given position on a page |
| `PdfPageTemplateElement(bounds)` | Template element for header, footer, or stamp |
| `document.template.top` | Assigns a template as the page header |
| `document.template.bottom` | Assigns a template as the page footer |
| `document.template.stamps` | Collection of stamp overlays applied to every page |

---

## Notes

- `PdfTemplate` can be drawn multiple times on the same or different pages (reuse).
- `PdfPageTemplateElement` with `dock = PdfDockStyle.fill` covers the entire page area.
- Use `stamps.add()` for overlays (e.g., "DRAFT", company logos) applied to all pages automatically.
- Units are in **points** (1 inch = 72 points).