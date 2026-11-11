# Working with Images

> Insert raster images (JPEG, PNG) into PDF pages using PdfBitmap. Apply transparency, rotation, and load from file or web URL.

---

## Supported Image Formats

- **JPEG** (.jpg, .jpeg)
- **PNG** (.png)

---

## Insert Image from File

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();

//Add a page to the document
PdfPage page = document.pages.add();

//Draw the image using PdfBitmap loaded from file bytes
page.graphics.drawImage(
    PdfBitmap(File('image.jpg').readAsBytesSync()),
    Rect.fromLTWH(
        0, 0, page.getClientSize().width, page.getClientSize().height));

//Save the document
File('Output.pdf').writeAsBytes(await document.save());

//Dispose the document
document.dispose();
```

### Placeholders
- `'image.jpg'` → Replace with the actual image file path
- `Rect.fromLTWH(0, 0, ...)` → Replace with actual image position and size (in points)

---

## Insert Image at Specific Position

```dart
//Draw image at specific position and size
page.graphics.drawImage(
    PdfBitmap(File('logo.png').readAsBytesSync()),
    Rect.fromLTWH(50, 50, 200, 100)); // x, y, width, height in points
```

---

## Insert Image from Base64 String

```dart
//Load image from base64 string
PdfImage image = PdfBitmap.fromBase64String('<base64-encoded-image-string>');

//Draw the image
page.graphics.drawImage(image, Rect.fromLTWH(0, 0, 200, 100));
```

---

## Apply Transparency to Image

```dart
//Save the current graphics state
PdfGraphicsState state = page.graphics.save();

//Apply transparency (0.0 = fully transparent, 1.0 = fully opaque)
page.graphics.setTransparency(0.5);

//Draw image with transparency
page.graphics.drawImage(
    PdfBitmap(File('image.jpg').readAsBytesSync()),
    Rect.fromLTWH(0, 0, 300, 200));

//Restore the graphics state
page.graphics.restore(state);
```

---

## Apply Rotation to Image

```dart
//Save the current graphics state
PdfGraphicsState state = page.graphics.save();

//Translate coordinate origin to desired draw position
page.graphics.translateTransform(20, 100);

//Rotate the coordinate system (negative = counter-clockwise)
page.graphics.rotateTransform(-45);

//Draw image (drawn relative to translated/rotated origin)
page.graphics.drawImage(
    PdfBitmap(File('image.jpg').readAsBytesSync()),
    Rect.fromLTWH(0, 0, 200, 150));

//Restore the graphics state
page.graphics.restore(state);
```

---

## Add height and width of an image

```dart
PdfImage image = PdfBitmap(imageData);
//Draw the image.
doc.pages
  .add()
  .graphics
  .drawImage(PdfBitmap(imageData), Rect.fromLTWH(0, 0, image.width, image.height));

//Gets the size of an image
Size size = image.physicalDimension;

//Draw the image with image's width and height.
doc.pages
  .add()
  .graphics
  .drawImage(image, Rect.fromLTWH(0, 0, size.width, size.height));
```

---

## Get the Resolution of an image

```dart
//Gets horizontal resolution
double horizontalResolution = image.horizontalResolution;

//Gets vertical resolution
double verticalResolution = image.verticalResolution;
```

---

## Apply Transparency and Rotation Together

```dart
PdfGraphicsState state = page.graphics.save();

page.graphics.translateTransform(20, 100);
page.graphics.setTransparency(0.5);
page.graphics.rotateTransform(-45);

page.graphics.drawImage(
    PdfBitmap(File('image.jpg').readAsBytesSync()),
    Rect.fromLTWH(0, 0, 200, 150));

page.graphics.restore(state);
```

---

## Insert Image from Web URL

```dart
// Required pubspec.yaml dependency:
// http: ^0.13.4

import 'package:http/http.dart' show get;

PdfDocument document = PdfDocument();
PdfPage page = document.pages.add();

//Fetch image data from web URL
final url = 'valid image url';
final response = await get(Uri.parse(url));
final data = response.bodyBytes;

//Create a bitmap from downloaded bytes
PdfBitmap image = PdfBitmap(data);

//Draw the image on the page
page.graphics.drawImage(
    image,
    Rect.fromLTWH(
        0, 0, page.getClientSize().width, page.getClientSize().height));

List<int> bytes = await document.save();
document.dispose();
```

> **Note:** Before building the application, update the `url` variable with a valid image URL to ensure the above code functions correctly.
---

## Notes

- All image positions and sizes are specified in **points** (1 inch = 72 points).
- Use `page.graphics.save()` and `page.graphics.restore(state)` around transform operations to avoid affecting other drawing operations.
- `PdfBitmap` accepts a `List<int>` (bytes) or a base64 string.
