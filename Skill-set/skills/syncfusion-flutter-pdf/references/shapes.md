# Working with Shapes

> Draw geometric shapes on PDF pages: polygon, line, curve, path, rectangle, pie, arc, bezier, and ellipse.

---

## Supported Shapes

- Polygon
- Line
- Curve (Bezier curve via `PdfBezierCurve`)
- Path
- Rectangle
- Pie
- Arc
- Bezier (via `drawBezier`)
- Ellipse

---

## Draw a Polygon with a custom brush and pen

```dart
PdfDocument document = PdfDocument();

//Draw a filled polygon with a custom brush and black pen
document.pages.add().graphics.drawPolygon(
    [Offset(10, 100), Offset(10, 200), Offset(100, 100), Offset(55, 150)],
    pen: PdfPens.black,
    brush: PdfSolidBrush(PdfColor(165, 42, 42)));

File('Polygon.pdf').writeAsBytes(await document.save());
document.dispose();
```

### Placeholders
- `[Offset(...), ...]` → Replace with your polygon vertex points
- `PdfColor(165, 42, 42)` → Replace with desired RGB fill color

---

## /Draw a Line with a colored pen and custom width

```dart
//Draw a line with a colored pen and custom width
document.pages.add().graphics.drawLine(
    PdfPen(PdfColor(165, 42, 42), width: 5),
    Offset(10, 100),   // start point
    Offset(200, 200)); // end point

File('Line.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Draw a Curve (PdfBezierCurve)

```dart
PdfDocument document = PdfDocument();

//Create a Bezier curve (point1, controlPoint1, controlPoint2, point2)
PdfBezierCurve bezier = PdfBezierCurve(
    Offset(100, 10),   // start point
    Offset(150, 50),   // first control point
    Offset(50, 80),    // second control point
    Offset(200, 100)); // end point

//Draw the curve on a page
bezier.draw(page: document.pages.add(), bounds: Rect.fromLTWH(0, 0, 0, 0));

File('Curve.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Draw a Path

```dart
//Create a path and add lines/shapes to it
PdfPath path = PdfPath();
path.addLine(Offset(10, 100), Offset(10, 200));
path.addLine(Offset(100, 100), Offset(100, 200));
path.addLine(Offset(100, 200), Offset(55, 150));

//Draw the path
path.draw(page: document.pages.add(), bounds: Rect.zero);

File('Path.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Draw a Rectangle with custom brush and bounds

```dart
//Draw a filled rectangle
document.pages.add().graphics.drawRectangle(
    brush: PdfBrushes.chocolate,
    bounds: Rect.fromLTWH(10, 10, 100, 50)); // x, y, width, height

File('Rectangle.pdf').writeAsBytes(await document.save());
document.dispose();
```

### Draw a Rectangle with Pen (Border) and Brush (Fill)

```dart
document.pages.add().graphics.drawRectangle(
    pen: PdfPen(PdfColor(0, 0, 255), width: 2),
    brush: PdfSolidBrush(PdfColor(173, 216, 230)),
    bounds: Rect.fromLTWH(20, 20, 200, 100));

File('RectangleStyling.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Draw a Pie with custom brush and pen

```dart
//Draw a pie (bounds, startAngle, sweepAngle)
document.pages.add().graphics.drawPie(
    Rect.fromLTWH(10, 50, 200, 200), // bounding rectangle
    90,                                // start angle in degrees
    180,                               // sweep angle in degrees
    pen: PdfPen(PdfColor(165, 42, 42), width: 5),
    brush: PdfBrushes.green);

File('Pie.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Draw an Arc with custom brush

```dart
//Draw an arc (bounds, startAngle, sweepAngle)
document.pages.add().graphics.drawArc(
    Rect.fromLTWH(100, 140, 200, 400), // bounding rectangle
    70,                                  // start angle in degrees
    190,                                 // sweep angle in degrees
    pen: PdfPen(PdfColor(165, 42, 42), width: 5));

File('Arc.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Draw a Bezier (drawBezier) with pen

```dart
//Draw a Bezier curve directly via graphics
document.pages.add().graphics.drawBezier(
    Offset(100, 10),   // start point
    Offset(150, 50),   // first control point
    Offset(50, 80),    // second control point
    Offset(100, 10),   // end point
    pen: PdfPen(PdfColor(165, 42, 42), width: 1));

File('Bezier.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Draw an Ellipse with custom brush and pen

```dart
//Draw an ellipse
document.pages.add().graphics.drawEllipse(
    Rect.fromLTWH(10, 200, 450, 150), // bounding rectangle
    pen: PdfPen(PdfColor(165, 42, 42), width: 5),
    brush: PdfBrushes.darkOrange);

File('Ellipse.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Using Pens and Brushes

### Predefined Pens

```dart
PdfPen blackPen = PdfPens.black;
PdfPen redPen = PdfPens.red;
PdfPen bluePen = PdfPens.blue;
```

### Custom Pen

```dart
//PdfPen(color, width)
PdfPen customPen = PdfPen(PdfColor(128, 0, 128), width: 3);

//Dashed pen
PdfPen dashedPen = PdfPen(PdfColor(0, 0, 0))
  ..dashStyle = PdfDashStyle.dash;
```

### Predefined Brushes

```dart
PdfBrush blackBrush = PdfBrushes.black;
PdfBrush redBrush = PdfBrushes.red;
PdfBrush yellowBrush = PdfBrushes.yellow;
```

### Custom Solid Brush

```dart
//PdfSolidBrush(PdfColor(r, g, b))
PdfBrush customBrush = PdfSolidBrush(PdfColor(0, 128, 0));
```

---

## Notes

- All coordinates and sizes are in **points** (1 inch = 72 points).
- Use `PdfGraphicsState` with `save()` / `restore()` around transform operations to isolate their effects.
- Shapes can be drawn with only a `pen` (outline only), only a `brush` (fill only), or both.
