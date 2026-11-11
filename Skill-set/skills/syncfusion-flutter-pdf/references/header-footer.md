# Headers and Footers

> Add headers and footers to PDF documents using PdfPageTemplateElement with automatic fields for page number, page count, and date/time.

---

## Add Header and Footer with Automatic Fields

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();

//--- HEADER ---
//Create the header with specific bounds (width × height in points)
PdfPageTemplateElement header = PdfPageTemplateElement(
    Rect.fromLTWH(0, 0, document.pageSettings.size.width, 100));

//Create a date and time field for the header
PdfDateTimeField dateAndTimeField = PdfDateTimeField(
    font: PdfStandardFont(PdfFontFamily.timesRoman, 14),
    brush: PdfSolidBrush(PdfColor(0, 0, 0)));
dateAndTimeField.date = DateTime.now();
dateAndTimeField.dateFormatString = 'E, MM.dd.yyyy';

//Create a composite field combining date and static text
PdfCompositeField headerComposite = PdfCompositeField(
    font: PdfStandardFont(PdfFontFamily.timesRoman, 14),
    brush: PdfSolidBrush(PdfColor(0, 0, 0)),
    text: '{0}      My Document Header',
    fields: <PdfAutomaticField>[dateAndTimeField]);

//Draw the composite field into the header template
headerComposite.draw(header.graphics,
    Offset(0, 50 - PdfStandardFont(PdfFontFamily.timesRoman, 14).height));

//Assign the header template to the top of the document
document.template.top = header;

//--- FOOTER ---
//Create the footer with specific bounds
PdfPageTemplateElement footer = PdfPageTemplateElement(
    Rect.fromLTWH(0, 0, document.pageSettings.size.width, 50));

//Create page number field
PdfPageNumberField pageNumber = PdfPageNumberField(
    font: PdfStandardFont(PdfFontFamily.timesRoman, 14),
    brush: PdfSolidBrush(PdfColor(0, 0, 0)));
pageNumber.numberStyle = PdfNumberStyle.numeric;

//Create page count field
PdfPageCountField count = PdfPageCountField(
    font: PdfStandardFont(PdfFontFamily.timesRoman, 14),
    brush: PdfSolidBrush(PdfColor(0, 0, 0)));
count.numberStyle = PdfNumberStyle.numeric;

//Create a composite field combining page number and page count
PdfCompositeField compositeField = PdfCompositeField(
    font: PdfStandardFont(PdfFontFamily.timesRoman, 14),
    brush: PdfSolidBrush(PdfColor(0, 0, 0)),
    text: 'Page {0} of {1}',
    fields: <PdfAutomaticField>[pageNumber, count]);
compositeField.bounds = footer.bounds;

// Set string format
compositefields.stringFormat =
   PdfStringFormat(lineAlignment: PdfVerticalAlignment.middle);

//Draw the composite field into the footer template
compositeField.draw(footer.graphics,
    Offset(250, 50 - PdfStandardFont(PdfFontFamily.timesRoman, 14).height));

//Assign the footer template to the bottom of the document
document.template.bottom = footer;

//Add pages with content
for (int i = 1; i <= 5; i++) {
  document.pages.add().graphics.drawString(
      'Page $i content', PdfStandardFont(PdfFontFamily.timesRoman, 11),
      bounds: Rect.fromLTWH(250, 0, 615, 100));
}

//Save the document
File('HeaderAndFooter.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Add Header Only

```dart
PdfDocument document = PdfDocument();

PdfPageTemplateElement header = PdfPageTemplateElement(
    Rect.fromLTWH(0, 0, document.pageSettings.size.width, 60));

//Draw static header text
header.graphics.drawString(
    'My Company — Confidential',
    PdfStandardFont(PdfFontFamily.helvetica, 14, style: PdfFontStyle.bold),
    brush: PdfBrushes.darkBlue,
    bounds: Rect.fromLTWH(10, 15, 400, 30));

//Draw a horizontal line at the bottom of the header area
header.graphics.drawLine(
    PdfPen(PdfColor(0, 0, 128), width: 1),
    Offset(0, 55),
    Offset(document.pageSettings.size.width, 55));

document.template.top = header;

document.pages.add().graphics.drawString(
    'Document content here.',
    PdfStandardFont(PdfFontFamily.helvetica, 12),
    brush: PdfBrushes.black,
    bounds: Rect.fromLTWH(10, 10, 500, 30));

File('HeaderOnly.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Add Footer Only with Date and Time Automatic Fields

```dart
PdfDocument document = PdfDocument();

PdfPageTemplateElement footer = PdfPageTemplateElement(
    Rect.fromLTWH(0, 0, document.pageSettings.size.width, 50));

//Create date/time field
PdfDateTimeField dateTimeField = PdfDateTimeField(
    font: PdfStandardFont(PdfFontFamily.timesRoman, 12),
    brush: PdfSolidBrush(PdfColor(0, 0, 0)));
dateTimeField.date = DateTime.now();
dateTimeField.dateFormatString = 'MM/dd/yyyy hh:mm:ss';

//Create page number and count fields
PdfPageNumberField pageNum = PdfPageNumberField(
    font: PdfStandardFont(PdfFontFamily.timesRoman, 12),
    brush: PdfSolidBrush(PdfColor(0, 0, 0)));
PdfPageCountField pageCount = PdfPageCountField(
    font: PdfStandardFont(PdfFontFamily.timesRoman, 12),
    brush: PdfSolidBrush(PdfColor(0, 0, 0)));

//Compose footer text with all fields
PdfCompositeField composite = PdfCompositeField(
    font: PdfStandardFont(PdfFontFamily.timesRoman, 12),
    brush: PdfSolidBrush(PdfColor(0, 0, 0)),
    text: 'Date: {2}   |   Page {0} of {1}',
    fields: <PdfAutomaticField>[pageNum, pageCount, dateTimeField]);
composite.bounds = footer.bounds;
composite.draw(footer.graphics, Offset(150, 15));

document.template.bottom = footer;

document.pages.add().graphics.drawString(
    'Report content',
    PdfStandardFont(PdfFontFamily.helvetica, 12),
    brush: PdfBrushes.black,
    bounds: Rect.fromLTWH(10, 10, 500, 30));

File('FooterWithDate.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Automatic Fields Reference

| Class | Purpose |
|---|---|
| `PdfPageNumberField` | Current page number |
| `PdfPageCountField` | Total page count |
| `PdfDateTimeField` | Date and/or time |
| `PdfCompositeField` | Combines multiple automatic fields with static text using `{0}`, `{1}`, `{2}` placeholders |

### Number Styles for Page Fields

```dart
pageNumber.numberStyle = PdfNumberStyle.numeric;    // 1, 2, 3
pageNumber.numberStyle = PdfNumberStyle.upperRoman; // I, II, III
pageNumber.numberStyle = PdfNumberStyle.lowerRoman; // i, ii, iii
pageNumber.numberStyle = PdfNumberStyle.upperAlpha; // A, B, C
pageNumber.numberStyle = PdfNumberStyle.lowerAlpha; // a, b, c
```

---

## Notes

- Header/footer bounds are relative to the template's own coordinate system — start at `Offset(0, 0)`.
- `document.template.top` sets the header (top of every page).
- `document.template.bottom` sets the footer (bottom of every page).
- Header/footer are drawn before page content and do not affect the page's `getClientSize()` area automatically — account for margin if needed.
- Units are in **points** (1 inch = 72 points).
