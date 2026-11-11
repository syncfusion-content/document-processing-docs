# Watermarks

> Add text or image watermarks to PDF documents by drawing semi-transparent content using PdfGraphics with rotation and transparency.

---

## Add a Text Watermark

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();

//Add a page and get the graphics context
PdfGraphics graphics = document.pages.add().graphics;

//Save the current graphics state
PdfGraphicsState state = graphics.save();

//Set transparency (0.0 = fully transparent, 1.0 = fully opaque)
graphics.setTransparency(0.25);

//Rotate the transform to create diagonal watermark
graphics.rotateTransform(-40);

//Draw watermark text
graphics.drawString(
    'Confidential',
    PdfStandardFont(PdfFontFamily.helvetica, 20),
    pen: PdfPens.red,
    brush: PdfBrushes.red,
    bounds: Rect.fromLTWH(-150, 450, 0, 0));

//Restore the graphics state to remove transparency/rotation effects
graphics.restore(state);

//Save and dispose the PDF document
File('SampleOutput.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Add a Text Watermark with Custom Font and Color

```dart
PdfGraphics graphics = document.pages.add().graphics;

PdfGraphicsState state = graphics.save();
graphics.setTransparency(0.20);
graphics.rotateTransform(-45);

graphics.drawString(
    'DRAFT',
    PdfStandardFont(PdfFontFamily.helvetica, 48, style: PdfFontStyle.bold),
    brush: PdfSolidBrush(PdfColor(128, 128, 128)),
    bounds: Rect.fromLTWH(-200, 400, 0, 0));

graphics.restore(state);

File('DraftWatermark.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Add an Image Watermark

```dart
//Add a page and get the graphics context
PdfGraphics graphics = document.pages.add().graphics;

//Load image bytes and encode to base64
File imageFile = File('image.jpg');
Uint8List imagebytes = await imageFile.readAsBytes();
String imageBase64 = base64.encode(imagebytes);

//Save graphics state
PdfGraphicsState state = graphics.save();

//Set transparency for the watermark
graphics.setTransparency(0.25);

//Draw image covering the full page
graphics.drawImage(
    PdfBitmap.fromBase64String(imageBase64),
    Rect.fromLTWH(
        0, 0, graphics.clientSize.width, graphics.clientSize.height));

//Restore graphics state
graphics.restore(state);
```

---

## Add a Watermark on an Existing PDF

```dart
//Load an existing PDF document
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Apply watermark to every page
for (int i = 0; i < document.pages.count; i++) {
  PdfGraphics graphics = document.pages[i].graphics;

  PdfGraphicsState state = graphics.save();
  graphics.setTransparency(0.25);
  graphics.rotateTransform(-40);

  graphics.drawString(
      'WATERMARK',
      PdfStandardFont(PdfFontFamily.helvetica, 20),
      pen: PdfPens.red,
      brush: PdfBrushes.red,
      bounds: Rect.fromLTWH(-150, 450, 0, 0));

  graphics.restore(state);
}

File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Add a Watermark Using PDF Page Template (Stamp)

```dart
PdfPage page = document.pages.add();

//Create a template element over the full page
final PdfPageTemplateElement stampTemplate =
    PdfPageTemplateElement(Offset(0, 0) & page.getClientSize(), page);
stampTemplate.dock = PdfDockStyle.fill;

PdfGraphicsState state = stampTemplate.graphics.save();
stampTemplate.graphics.rotateTransform(-40);
stampTemplate.graphics.setTransparency(0.25);
stampTemplate.graphics.drawString(
    'STAMP PDF DOCUMENT',
    PdfStandardFont(PdfFontFamily.helvetica, 20),
    pen: PdfPens.red,
    brush: PdfBrushes.red,
    bounds: Rect.fromLTWH(-150, 450, 400, 400));
stampTemplate.graphics.restore(state);

//Add the stamp template to all pages
document.template.stamps.add(stampTemplate);

//Draw content on the page
page.graphics.drawRectangle(
    pen: PdfPen(PdfColor(0, 0, 0), width: 5),
    brush: PdfBrushes.lightGray,
    bounds: Offset(0, 0) & page.getClientSize());
```

---

## Notes

- Always use `graphics.save()` before and `graphics.restore(state)` after applying transparency/rotation so they don't affect other page content.
- `graphics.setTransparency(value)` — value range: `0.0` (invisible) to `1.0` (fully opaque). Use `0.20`–`0.35` for watermarks.
- `graphics.rotateTransform(degrees)` rotates the coordinate system — negative values create a diagonal watermark going up-left.
- The `Rect.fromLTWH` origin shifts due to rotation; adjust the X/Y offsets to center text after rotation.
- Units are in **points** (1 inch = 72 points).