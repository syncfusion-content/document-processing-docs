# Hyperlinks

> Add web navigation hyperlinks and internal document navigation links to PDF pages using PdfTextWebLink and PdfDocumentLinkAnnotation.

---

## Create a Web Navigation Hyperlink (PdfTextWebLink) and Configure Url, Text, Font, Brush and Format

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();

//Create and draw a text web link on the page
PdfTextWebLink(
        url: 'www.google.co.in',
        text: 'google',
        font: PdfStandardFont(PdfFontFamily.timesRoman, 14),
        brush: PdfSolidBrush(PdfColor(0, 0, 0)),
        pen: PdfPens.brown,
        format: PdfStringFormat(
            alignment: PdfTextAlignment.center,
            lineAlignment: PdfVerticalAlignment.middle))
    .draw(document.pages.add(), Offset(50, 40));

//Save and dispose the document
File('Hyperlink.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Create a Custom Styled Web Hyperlink and Configure Url, Text, Font, Brush and Format

```dart
PdfPage page = document.pages.add();

//Bold blue hyperlink with underline pen
PdfTextWebLink(
        url: 'https://www.syncfusion.com',
        text: 'Visit Syncfusion',
        font: PdfStandardFont(PdfFontFamily.helvetica, 12,
            style: PdfFontStyle.bold),
        brush: PdfBrushes.blue,
        pen: PdfPen(PdfColor(0, 0, 255)))
    .draw(page, Offset(10, 50));
```

---

## Add an URI Annotation Hyperlink (Invisible Click Area)

```dart
//Draw custom text on the page
page.graphics.drawString(
    'Click here to visit Syncfusion',
    PdfStandardFont(PdfFontFamily.helvetica, 12),
    brush: PdfBrushes.blue,
    bounds: Rect.fromLTWH(10, 10, 200, 20));

//Add a URI annotation as an invisible link region over the text
PdfUriAnnotation uriAnnotation = PdfUriAnnotation(
    bounds: Rect.fromLTWH(10, 10, 200, 20),
    uri: 'https://www.syncfusion.com');

page.annotations.add(uriAnnotation);
```

---

## Create a Internal Document Navigation (PdfDocumentLinkAnnotation)

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();

//Page 1 — contains the link
PdfPage page1 = document.pages.add();

//Page 2 — the destination
PdfPage page2 = document.pages.add();

//Draw content on page 2
page2.graphics.drawString(
    'You navigated to Page 2!',
    PdfStandardFont(PdfFontFamily.helvetica, 14),
    brush: PdfBrushes.black,
    bounds: Rect.fromLTWH(10, 10, 300, 30));

//Create a destination pointing to page 2 at position (10, 0)
PdfDestination destination = PdfDestination(page2, Offset(10, 0));
destination.mode = PdfDestinationMode.fitToPage;

//Create a document link annotation on page 1 pointing to page 2
PdfDocumentLinkAnnotation docLink = PdfDocumentLinkAnnotation(
    Rect.fromLTWH(10, 40, 150, 25), destination);

page1.annotations.add(docLink);

//Draw label for the link on page 1
page1.graphics.drawString(
    'Go to Page 2',
    PdfStandardFont(PdfFontFamily.helvetica, 12),
    brush: PdfBrushes.blue,
    bounds: Rect.fromLTWH(10, 40, 150, 25));

File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Create a Internal Navigation and Configure PdfDestinationMode

```dart
PdfDocumentLinkAnnotation docLink = PdfDocumentLinkAnnotation(
    Rect.fromLTWH(10, 40, 30, 30),
    PdfDestination(document.pages.add(), Offset(10, 0)));

//Set the destination mode
docLink.destination!.mode = PdfDestinationMode.fitToPage;

page.annotations.add(docLink);
```

### Destination Modes
```dart
PdfDestinationMode.location    // Navigate to exact (x, y) position
PdfDestinationMode.fitToPage   // Fit the destination page to the viewer
PdfDestinationMode.fitR        // Fit to a rectangular region
PdfDestinationMode.fitH        // Fit horizontal position
```

---

## API Reference

| Class | Description |
|---|---|
| `PdfTextWebLink` | Renders a clickable text label that opens a web URL |
| `PdfUriAnnotation` | Invisible click region that opens a web URL |
| `PdfDocumentLinkAnnotation` | Internal navigation link to another page in the same document |
| `PdfDestination` | Defines the target page and position for internal navigation |

---

## Notes

- `PdfTextWebLink.draw(page, offset)` renders the text and the link simultaneously.
- `PdfUriAnnotation` can be placed over any content (images, shapes, text) as an invisible click area.
- `PdfDocumentLinkAnnotation` requires a `PdfDestination` with a target page reference.
- Units are in **points** (1 inch = 72 points).