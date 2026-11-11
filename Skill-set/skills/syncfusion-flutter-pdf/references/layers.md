# Layers

> Add, toggle, remove, and flatten optional content layers (PdfPageLayer / PdfLayer) in PDF documents. Supports nested layers and visibility control.

---

## Add Layers to a New PDF Page

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();

//Add a page
PdfPage page = document.pages.add();

//Add the first layer (visible by default)
PdfPageLayer layer1 = page.layers.add(name: 'Layer1');
PdfGraphics graphics1 = layer1.graphics;
graphics1.translateTransform(100, 60);

//Draw concentric arcs on Layer 1
graphics1.drawArc(Rect.fromLTWH(0, 0, 50, 50), 360, 360,
    pen: PdfPen(PdfColor(250, 0, 0), width: 50));
graphics1.drawArc(Rect.fromLTWH(0, 0, 50, 50), 360, 360,
    pen: PdfPen(PdfColor(0, 0, 250), width: 30));
graphics1.drawArc(Rect.fromLTWH(0, 0, 50, 50), 360, 360,
    pen: PdfPen(PdfColor(250, 250, 0), width: 20));
graphics1.drawArc(Rect.fromLTWH(0, 0, 50, 50), 360, 360,
    pen: PdfPen(PdfColor(0, 250, 0), width: 10));

//Add a second layer (hidden by default)
PdfPageLayer layer2 = page.layers.add(name: 'Layer2', visible: false);
PdfGraphics graphics2 = layer2.graphics;
graphics2.translateTransform(100, 180);

graphics2.drawArc(Rect.fromLTWH(0, 0, 50, 50), 360, 360,
    pen: PdfPen(PdfColor(250, 0, 0), width: 50));
graphics2.drawArc(Rect.fromLTWH(0, 0, 50, 50), 360, 360,
    pen: PdfPen(PdfColor(0, 0, 250), width: 30));
graphics2.drawArc(Rect.fromLTWH(0, 0, 50, 50), 360, 360,
    pen: PdfPen(PdfColor(0, 250, 0), width: 10));

//Save and dispose the document
File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Add Layers to an Existing PDF

```dart
//Load an existing PDF document
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Add a new visible layer to the first page
PdfPageLayer layer =
    document.pages[0].layers.add(name: 'Layer1', visible: true);

PdfGraphics graphics = layer.graphics;
graphics.translateTransform(300, 360);

graphics.drawArc(Rect.fromLTWH(0, 0, 50, 50), 360, 360,
    pen: PdfPen(PdfColor(250, 0, 0), width: 50));
graphics.drawArc(Rect.fromLTWH(0, 0, 50, 50), 360, 360,
    pen: PdfPen(PdfColor(0, 0, 250), width: 30));
```

---

## Toggle Layer Visibility

```dart
PdfDocument document = PdfDocument();
PdfPage page = document.pages.add();

//Visible layer
PdfPageLayer visibleLayer = page.layers.add(name: 'Visible', visible: true);
visibleLayer.graphics.translateTransform(100, 60);
visibleLayer.graphics.drawArc(Rect.fromLTWH(0, 0, 50, 50), 360, 360,
    pen: PdfPen(PdfColor(250, 0, 0), width: 50));

//Hidden layer
PdfPageLayer hiddenLayer = page.layers.add(name: 'Hidden', visible: false);
hiddenLayer.graphics.translateTransform(100, 180);
hiddenLayer.graphics.drawEllipse(Rect.fromLTWH(0, 0, 50, 50),
    pen: PdfPen(PdfColor(250, 0, 0), width: 50));

File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Remove a Layer from an Existing PDF

```dart
//Load existing PDF and remove the second layer (index 1) from the first page
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync())
      ..pages[0].layers.removeAt(1);

File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Add a Nested Layers (PdfLayer on Document Level)

```dart
//Add a top-level document layer
PdfLayer parentLayer =
    document.layers.add(name: 'Layer1', visible: true)
      ..createGraphics(page).drawRectangle(
          bounds: Rect.fromLTWH(0, 0, 200, 100),
          brush: PdfBrushes.red);

//Add a nested layer inside the parent
parentLayer.layers.add(name: 'Nested Layer1', visible: true)
  ..createGraphics(page).drawRectangle(
      bounds: Rect.fromLTWH(0, 120, 200, 100),
      brush: PdfBrushes.green);
```

---

## Flatten Layers (Remove from Layer Collection)

```dart
//Load existing PDF and flatten the first document-level layer
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync())
      ..layers.removeAt(0, false);

File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## API Reference

| Class / Member | Description |
|---|---|
| `page.layers.add(name, visible)` | Add a layer to a specific page |
| `page.layers.removeAt(index)` | Remove a layer from the page by index |
| `document.layers.add(name, visible)` | Add a document-level layer |
| `document.layers.removeAt(index, flatten)` | Remove / flatten a document-level layer |
| `PdfPageLayer.graphics` | `PdfGraphics` surface to draw layer content |
| `PdfLayer.createGraphics(page)` | Create a graphics surface for a document-level layer on a page |
| `PdfLayer.layers` | Nested sub-layers collection |

---

## Notes

- Layers are also called **Optional Content Groups (OCG)** in the PDF specification.
- `page.layers` manages layers per page; `document.layers` manages document-level layers that can span pages.
- `visible: false` hides the layer by default in viewers that support optional content (e.g., Adobe Reader).
- Not all PDF viewers display the layers panel — content is always present in the file regardless of visibility.
- Units are in **points** (1 inch = 72 points).