# Images

<!-- [PLACEHOLDER: Insert, resize, flip, and rotate images (JPEG, PNG) in Excel worksheets] -->

## Adding Images to Worksheet

Insert JPEG and PNG format images into a worksheet:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

// Add image from file
final List<int> imageBytes = File('image.jpeg').readAsBytesSync();
sheet.pictures.addStream(1, 1, imageBytes);

final List<int> bytes = workbook.saveSync();
workbook.dispose();
File('AddImage.xlsx').writeAsBytes(bytes);
```

### Placeholders
- `'image.jpeg'` → Replace with `'{image-file-path}'` (path to image file)
- `1, 1` → Replace with `'{row}, {column}'` (cell position)
- `'AddImage.xlsx'` → Replace with `'{output-file}'` (output file name)

## Resizing Images

Set custom height and width for images:

```dart
final Picture picture = sheet.pictures[0];

// Set width and height (in pixels)
picture.width = 200;
picture.height = 200;
```

### Placeholders
- `200` → Replace with `'{width-pixels}'` (image width in pixels)
- `200` → Replace with `'{height-pixels}'` (image height in pixels)

## Rotating Images

Apply rotation to images (degrees):

```dart
final Picture picture = sheet.pictures[0];

// Rotate image
picture.rotation = 100; // degrees
```

### Placeholders
- `100` → Replace with `'{rotation-degrees}'` (rotation angle in degrees)

## Flipping Images

Mirror images horizontally or vertically:

```dart
final Picture picture = sheet.pictures[0];

// Horizontal flip
picture.horizontalFlip = true;

// Vertical flip (if supported)
picture.verticalFlip = true;
```

### Placeholders
- `true` → Keep as is (set to `false` to disable horizontal flip)
- `true` → Keep as is (set to `false` to disable vertical flip)

## Complete Image Manipulation Example

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

// Add image
final List<int> imageBytes = File('image.jpeg').readAsBytesSync();
sheet.pictures.addStream(1, 1, imageBytes);

final Picture picture = sheet.pictures[0];

// Resize
picture.width = 300;
picture.height = 300;

// Rotate
picture.rotation = 45;

// Flip horizontally
picture.horizontalFlip = true;

// Save workbook
final List<int> bytes = workbook.saveSync();
workbook.dispose();
File('ImageManipulation.xlsx').writeAsBytes(bytes);
```

### Placeholders
- `'image.jpeg'` → Replace with `'{image-file-path}'` (path to image file)
- `1, 1` → Replace with `'{row}, {column}'` (cell position)
- `300` → Replace with `'{width-pixels}'` (image width in pixels)
- `45` → Replace with `'{rotation-degrees}'` (rotation angle in degrees)
- `'ImageManipulation.xlsx'` → Replace with `'{output-file}'` (output file name)

## Accessing Inserted Images

Access pictures after adding them to the worksheet:

```dart
// Add multiple images
sheet.pictures.addStream(1, 1, imageBytes1);
sheet.pictures.addStream(5, 1, imageBytes2);

// Access first picture
final Picture pic1 = sheet.pictures[0];

// Access second picture
final Picture pic2 = sheet.pictures[1];
```

### Placeholders
- `1, 1` and `5, 1` → Replace with `'{row}, {column}'` (cell positions)
- `0`, `1` → Replace with index numbers to access specific pictures

## Supported Formats

- JPEG (.jpg, .jpeg)
- PNG (.png)

## Notes

- Images are positioned at the specified row and column
- Width and height values are in pixels
- Rotation is specified in degrees
- Multiple images can be added to a single worksheet
- Use `readAsBytesSync()` to read image file as bytes
- Call `workbook.dispose()` after saving to release memory
