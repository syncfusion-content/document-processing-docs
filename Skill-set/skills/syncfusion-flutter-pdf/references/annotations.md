# Annotations

> Add, modify, flatten, and remove interactive annotations in PDF documents. Supports rectangle, ellipse, line, polygon, URI, document link, text web link, text markup, and popup annotations. Also covers import/export in FDF, XFDF, and JSON formats.

---

## Add a Rectangle Annotation and Configure Color, InnerColor, Border, SetAppearance, Author and ModifiedDate

```dart
PdfDocument document = PdfDocument();
PdfPage page = document.pages.add();

//Create a rectangle annotation
PdfRectangleAnnotation rectangleAnnotation = PdfRectangleAnnotation(
    Rect.fromLTWH(40, 70, 80, 80), 'Rectangle Annotation',
    author: 'Syncfusion',
    color: PdfColor(255, 0, 0),
    innerColor: PdfColor(0, 0, 255),
    border: PdfAnnotationBorder(10),
    setAppearance: true,
    modifiedDate: DateTime.now());

page.annotations.add(rectangleAnnotation);

File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Add a Ellipse Annotation and Configure Color, InnerColor, Border, SetAppearance, Author and ModifiedDate

```dart
PdfEllipseAnnotation ellipseAnnotation = PdfEllipseAnnotation(
    Rect.fromLTWH(40, 70, 80, 80), 'Ellipse Annotation',
    author: 'Syncfusion',
    color: PdfColor(255, 0, 0),
    innerColor: PdfColor(0, 0, 255),
    border: PdfAnnotationBorder(10),
    setAppearance: true,
    modifiedDate: DateTime.now());

page.annotations.add(ellipseAnnotation);
```

---

## Add a Line Annotation and Configure Color, Opacity, Border, SetAppearance, Author, LineIntent and ModifiedDate

```dart
//Create a line annotation ([x1, y1, x2, y2] coordinate array)
PdfLineAnnotation lineAnnotation = PdfLineAnnotation(
    [80, 420, 250, 420], 'Line Annotation',
    author: 'Syncfusion',
    opacity: 0.95,
    border: PdfAnnotationBorder(1),
    lineIntent: PdfLineIntent.lineDimension,
    beginLineStyle: PdfLineEndingStyle.butt,
    endLineStyle: PdfLineEndingStyle.square,
    innerColor: PdfColor(0, 255, 0),
    color: PdfColor(0, 0, 255),
    leaderLineExt: 10,
    leaderLine: 2,
    lineCaption: true,
    setAppearance: true,
    captionType: PdfLineCaptionType.top,
    modifiedDate: DateTime.now());

page.annotations.add(lineAnnotation);
```

---

## Add a Polygon Annotation and Configure Color, InnerColor, SetAppearance, Author and ModifiedDate

```dart
//Create a polygon annotation with coordinate points
PdfPolygonAnnotation polygonAnnotation = PdfPolygonAnnotation(
    [50, 298, 100, 325, 200, 355, 300, 230, 180, 230], 'Polygon Annotation',
    author: 'Syncfusion',
    color: PdfColor(255, 0, 0),
    innerColor: PdfColor(255, 0, 255),
    setAppearance: true,
    modifiedDate: DateTime.now());

page.annotations.add(polygonAnnotation);
```

---

## Add a URI Annotation (Hyperlink) and Configure Bounds and Uri

```dart
//Create a URI annotation — clicking the bounds area opens the URL
PdfUriAnnotation uriAnnotation = PdfUriAnnotation(
    bounds: Rect.fromLTWH(10, 10, 100, 30),
    uri: 'https://www.syncfusion.com');

page.annotations.add(uriAnnotation);
```

---

## Add a Text Web Link Annotation and Configure Text, Url, Font, Brush and Pen

```dart
//Create a clickable text hyperlink
PdfTextWebLink textWebLink = PdfTextWebLink(
    url: 'https://www.syncfusion.com',
    text: 'Visit Syncfusion',
    font: PdfStandardFont(PdfFontFamily.helvetica, 12,
        style: PdfFontStyle.bold),
    brush: PdfBrushes.blue,
    pen: PdfPen(PdfColor(0, 0, 255)));

textWebLink.draw(page, Offset(10, 50));
```

---

## Add a Document Link Annotation (Internal Navigation) and Configure Bounds and Destination

```dart
//Create a document link that navigates to a target page
PdfDocumentLinkAnnotation documentLinkAnnotation =
    PdfDocumentLinkAnnotation(
        Rect.fromLTWH(10, 40, 100, 30),
        PdfDestination(document.pages.add(), Offset(10, 0)));

page.annotations.add(documentLinkAnnotation);
```

---

## Add a Text Markup Annotation (Highlight / Underline / Strikethrough / Squiggly) and Configure Bounds, Text, Color, Author and TextMarkupAnnotationType

```dart
PdfFont font = PdfStandardFont(PdfFontFamily.courier, 14,
    style: PdfFontStyle.bold);
String markupText = 'Highlighted Text';
Size textSize = font.measureString(markupText);

//Draw the text to the page first
page.graphics.drawString(markupText, font,
    brush: PdfBrushes.black,
    bounds: const Rect.fromLTWH(50, 50, 0, 0));

//Create a text markup annotation over the text
PdfTextMarkupAnnotation markupAnnotation = PdfTextMarkupAnnotation(
    Rect.fromLTWH(50, 50, textSize.width, textSize.height),
    'Markup Annotation',
    PdfColor(255, 255, 0),
    author: 'Syncfusion',
    subject: 'Text Markup',
    textMarkupAnnotationType: PdfTextMarkupAnnotationType.highlight, // highlight, underline, strikethrough, squiggly
    setAppearance: true,
    modifiedDate: DateTime.now());

page.annotations.add(markupAnnotation);
```

### TextMarkupAnnotation Options
```dart
PdfTextMarkupAnnotationType.highlight
PdfTextMarkupAnnotationType.squiggly
PdfTextMarkupAnnotationType.strikethrough
PdfTextMarkupAnnotationType.underline
```

---

## Add a Popup Annotation and Configure a Bounds, Subject, Icon, Author and SetAppearance

```dart
PdfPopupAnnotation popup = PdfPopupAnnotation(
    Rect.fromLTWH(10, 40, 30, 30), 'Popup Note',
    author: 'Syncfusion',
    subject: 'Important Note',
    open: true,
    icon: PdfPopupIcon.comment,
    setAppearance: true);

page.annotations.add(popup);
```

### Popup Icon Options
```dart
PdfPopupIcon.comment
PdfPopupIcon.help
PdfPopupIcon.insert
PdfPopupIcon.key
PdfPopupIcon.newParagraph
PdfPopupIcon.note
PdfPopupIcon.paragraph
```

---

## Add Annotation to Existing PDF

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());
PdfPage page = document.pages[0];

PdfRectangleAnnotation annotation = PdfRectangleAnnotation(
    Rect.fromLTWH(40, 70, 80, 80), 'Added Annotation',
    color: PdfColor(255, 0, 0),
    setAppearance: true,
    modifiedDate: DateTime.now());

page.annotations.add(annotation);
bool exists = page.annotations.contains(annotation);
print('Annotation exists: $exists');

File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Modify Annotation

```dart
//Get the first annotation and modify its properties
PdfRectangleAnnotation annotation =
    page.annotations[0] as PdfRectangleAnnotation;
annotation.border = PdfAnnotationBorder(4);
annotation.bounds = Rect.fromLTWH(300, 300, 100, 100);
annotation.color = PdfColor(0, 0, 255);
annotation.innerColor = PdfColor(0, 255, 0);
annotation.text = 'Modified Annotation';
annotation.author = 'Updated Author';
annotation.modifiedDate = DateTime.now();
```

---

## Remove Annotation

```dart
//Remove the first annotation
PdfAnnotationCollection collection = page.annotations;
collection.remove(collection[0]);
```

---

## Flatten All Annotations

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

for (int i = 0; i < document.pages.count; i++) {
  PdfPage page = document.pages[i];
  page.annotations.flattenAllAnnotations();
}

File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Add Annotation Flags to Annotation

```dart
PdfRectangleAnnotation annotation = PdfRectangleAnnotation(
    Rect.fromLTWH(40, 70, 80, 80), 'Flagged Annotation',
    flags: <PdfAnnotationFlags>[
      PdfAnnotationFlags.print,
      PdfAnnotationFlags.readOnly
    ],
    color: PdfColor(255, 0, 0),
    setAppearance: true,
    modifiedDate: DateTime.now());
```

---

## Add appearance of an annotation

```dart
PdfRectangleAnnotation annotation = PdfRectangleAnnotation(
  Rect.fromLTWH(40, 70, 80, 80),
  'Added Annotation',
  color: PdfColor(255, 0, 0),
  setAppearance: true,
  modifiedDate: DateTime.now(),
);

PdfAppearance appearance = PdfAppearance(annotation);
appearance.pressed = PdfTemplate(50, 50);
```

### Available Flags
```dart
PdfAnnotationFlags.defaultFlag
PdfAnnotationFlags.invisible
PdfAnnotationFlags.hidden
PdfAnnotationFlags.print
PdfAnnotationFlags.noZoom
PdfAnnotationFlags.noRotate
PdfAnnotationFlags.noView
PdfAnnotationFlags.readOnly
PdfAnnotationFlags.locked
PdfAnnotationFlags.toggleNoView
```

---

## Import Annotations from FDF/XFDF/JSON

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Import from FDF
document.importAnnotation(
    File('import.fdf').readAsBytesSync(), PdfAnnotationDataFormat.fdf);

//Import from XFDF
document.importAnnotation(
    File('import.xfdf').readAsBytesSync(), PdfAnnotationDataFormat.xfdf);

//Import from JSON
document.importAnnotation(
    File('import.json').readAsBytesSync(), PdfAnnotationDataFormat.json);

File('output.pdf').writeAsBytesSync(await document.save());
document.dispose();
```

---

## Export Annotations to FDF/XFDF/JSON

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Export to FDF
List<int> fdfBytes = document.exportAnnotation(PdfAnnotationDataFormat.fdf);
File('export.fdf').writeAsBytesSync(fdfBytes);

//Export to XFDF
List<int> xfdfBytes = document.exportAnnotation(PdfAnnotationDataFormat.xfdf);
File('export.xfdf').writeAsBytesSync(xfdfBytes);

//Export to JSON
List<int> jsonBytes = document.exportAnnotation(PdfAnnotationDataFormat.json);
File('export.json').writeAsBytesSync(jsonBytes);

document.dispose();
```
