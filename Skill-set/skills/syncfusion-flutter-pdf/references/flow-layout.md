# Flow Layout

> Chain PDF elements (text, images, tables) using PdfLayoutResult to avoid content overlap and flow content naturally across pages.

---

## Flow Model Using PdfLayoutResult

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();
PdfPage page = document.pages.add();

//Draw image at a fixed position
page.graphics.drawImage(
    PdfBitmap(File('AdventureCycle.jpg').readAsBytesSync()),
    Rect.fromLTWH(150, 30, 200, 100));

//Create a paragraph text element
PdfTextElement textElement = PdfTextElement(
    text:
        'Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets.',
    font: PdfStandardFont(PdfFontFamily.helvetica, 12));

//Draw the paragraph and capture layout result (position tracking)
PdfLayoutResult layoutResult = textElement.draw(
    page: page,
    bounds: Rect.fromLTWH(
        0, 150, page.getClientSize().width, page.getClientSize().height))!;

//Draw a header below the paragraph using the tracked position
textElement.text = 'Top 5 Sales Stores';
textElement.font = PdfStandardFont(PdfFontFamily.helvetica, 14,
    style: PdfFontStyle.bold);

layoutResult = textElement.draw(
    page: page,
    bounds: Rect.fromLTWH(0, layoutResult.bounds.bottom + 20, 0, 0))!;

//Draw a table below the header
PdfGrid grid = PdfGrid();
grid.columns.add(count: 3);
grid.headers.add(1);
PdfGridRow header = grid.headers[0];
header.cells[0].value = 'ID';
header.cells[1].value = 'Name';
header.cells[2].value = 'Salary';
PdfGridRow row1 = grid.rows.add();
row1.cells[0].value = 'E01';
row1.cells[1].value = 'Clay';
row1.cells[2].value = '\$10,000';
PdfGridRow row2 = grid.rows.add();
row2.cells[0].value = 'E02';
row2.cells[1].value = 'Thomas';
row2.cells[2].value = '\$10,500';

//Draw grid below the header, using last layout result
grid.draw(
    page: page,
    bounds: Rect.fromLTWH(0, layoutResult.bounds.bottom + 20, 0, 0));

//Save and dispose the document
File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Paginating Text Across Pages

```dart
PdfDocument document = PdfDocument();
PdfPage page = document.pages.add();

String longText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. '
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. '
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui '
    'officia deserunt mollit anim id est laborum. ' * 20;

PdfTextElement textElement = PdfTextElement(
    text: longText,
    font: PdfStandardFont(PdfFontFamily.timesRoman, 14));

//Configure pagination format
PdfLayoutFormat layoutFormat = PdfLayoutFormat(
    layoutType: PdfLayoutType.paginate,
    breakType: PdfLayoutBreakType.fitPage);

//Draw with automatic pagination across pages
PdfLayoutResult result = textElement.draw(
    page: page,
    bounds: Rect.fromLTWH(
        0, 0, page.getClientSize().width, page.getClientSize().height),
    format: layoutFormat)!;

File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Chain Multiple Elements in Sequence

```dart
PdfDocument document = PdfDocument();
PdfPage page = document.pages.add();

//Element 1 — Title
PdfTextElement title = PdfTextElement(
    text: 'Invoice #INV-0042',
    font: PdfStandardFont(PdfFontFamily.helvetica, 18,
        style: PdfFontStyle.bold));
title.brush = PdfBrushes.black;
PdfLayoutResult result =
    title.draw(page: page, bounds: Rect.fromLTWH(10, 10, 0, 0))!;

//Element 2 — Subheading (positioned below title)
PdfTextElement subHeading = PdfTextElement(
    text: 'Billing Details',
    font: PdfStandardFont(PdfFontFamily.helvetica, 13,
        style: PdfFontStyle.bold));
subHeading.brush = PdfBrushes.darkBlue;
result = subHeading.draw(
    page: page,
    bounds: Rect.fromLTWH(10, result.bounds.bottom + 15, 0, 0))!;

//Element 3 — Body text below subheading
PdfTextElement body = PdfTextElement(
    text: 'Customer: John Doe\nAddress: 123 Main St, Springfield\nDue: 2026-04-01',
    font: PdfStandardFont(PdfFontFamily.helvetica, 11));
body.brush = PdfBrushes.black;
result = body.draw(
    page: page,
    bounds: Rect.fromLTWH(10, result.bounds.bottom + 10,
        page.getClientSize().width, 0))!;

File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## PdfLayoutResult Properties

| Property | Type | Description |
|---|---|---|
| `result.bounds` | `Rect` | The actual drawn bounds of the element |
| `result.bounds.bottom` | `double` | Y-coordinate immediately after the element — use as the next element's top |
| `result.page` | `PdfPage` | The page on which the last part of the element was drawn (useful after pagination) |

---

## PdfLayoutFormat Options

```dart
PdfLayoutFormat layoutFormat = PdfLayoutFormat(
    //paginate: flows across pages; onePage: stays on one page
    layoutType: PdfLayoutType.paginate,
    //fitPage: breaks at page bottom; fitElement: breaks when element doesn't fit
    breakType: PdfLayoutBreakType.fitPage);
```

| Enum | Values |
|---|---|
| `PdfLayoutType` | `paginate`, `onePage` |
| `PdfLayoutBreakType` | `fitPage`, `fitElement`, `fitColumnsToPage` |

---

## Notes

- `PdfLayoutResult` is returned by `.draw()` on `PdfTextElement`, `PdfGrid`, `PdfList`, etc.
- Always use `layoutResult.bounds.bottom + gap` to position the next element below the previous one.
- After pagination, use `layoutResult.page` to get the page where the content ended.
- Units are in **points** (1 inch = 72 points).