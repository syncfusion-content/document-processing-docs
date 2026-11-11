# Working with Pictures in Excel

> Insert, position, resize, align, and format pictures and images in Excel worksheets — local files, external links, SVG images, and merged regions using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `Syncfusion.XlsIO.Implementation`, `System`, `System.IO`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Add Picture from File

### Minimal Code
```csharp
FileStream imageStream = new FileStream(Path.GetFullPath("Data/Image.png"), FileMode.Open, FileAccess.Read);
IPictureShape shape = worksheet.Pictures.AddPicture(1, 1, imageStream);
imageStream.Dispose();
```

### Add to Specific Range
```csharp
FileStream imageStream = new FileStream("photo.png", FileMode.Open, FileAccess.Read);
// Add picture at row 2, column 3
IPictureShape shape = worksheet.Pictures.AddPicture(2, 3, imageStream);
imageStream.Dispose();
```

### Placeholders
- `"Data/Image.png"` → Replace with `"{image-file-path}"`
- `1, 1` → Replace with `"{start-row}`, `"{start-column}"`

---

## Position and Resize Picture

### Minimal Code
```csharp
IPictureShape shape = worksheet.Pictures.AddPicture(1, 1, imageStream);
shape.Top = 100;
shape.Left = 100;
shape.Height = 150;
shape.Width = 200;
```

### Pixel-Based Positioning
```csharp
FileStream imageStream = new FileStream("Image.png", FileMode.Open, FileAccess.Read);
IPictureShape shape = worksheet.Pictures.AddPicture(1, 1, imageStream);

// Set position (in pixels from top-left)
shape.Top = 50;    // 50 pixels from top
shape.Left = 50;   // 50 pixels from left

// Set dimensions (in pixels)
shape.Height = 200;
shape.Width = 300;
```

### Placeholders
- `100` → Replace with `"{position-value}"` or `"{size-value}"`

---

## Move and Size with Cells

### Minimal Code
```csharp
IPictureShape shape = worksheet.Pictures.AddPicture(1, 1, 5, 3, imageStream);
shape.IsMoveWithCell = true;
shape.IsSizeWithCell = true;
```

### Behavior
```csharp
FileStream imageStream = new FileStream("Data/Image.png", FileMode.Open, FileAccess.Read);
IPictureShape shape = worksheet.Pictures.AddPicture(1, 1, 5, 3, imageStream);

// When enabled, picture moves/resizes with cell changes
shape.IsMoveWithCell = true;   // Picture moves when row/col inserted/deleted
shape.IsSizeWithCell = true;   // Picture resizes when row/col width/height changes

worksheet.HideColumn(3);        // Picture will adapt accordingly
imageStream.Dispose();
```

---

## Place Picture in Cell

### Minimal Code
```csharp
IPictureShape shape = worksheet.Pictures.AddPicture(1, 1, imageStream);
shape.PlaceInCell = true;
```

### Place Picture Inside Cell Boundaries
```csharp
FileStream imageStream = new FileStream("Image.png", FileMode.Open, FileAccess.Read);
IPictureShape shape = worksheet.Pictures.AddPicture(2, 3, imageStream);

// When enabled, picture is placed within the cell boundaries
shape.PlaceInCell = true;

// The picture will be contained within the dimensions of cell C2
// If the cell is resized, the picture position may adjust accordingly

imageStream.Dispose();
```

### Placeholders
- `true` → Replace with `"{placement-option}"` (true to place inside cell, false for absolute positioning)

---

## Align Picture in Cell

### Minimal Code
```csharp
int scaleWidth = (int)application.ConvertUnits((int)worksheet["B1"].ColumnWidth, MeasureUnits.Millimeter, MeasureUnits.Pixel);
int scaleHeight = (int)application.ConvertUnits((int)worksheet["B1"].RowHeight, MeasureUnits.Millimeter, MeasureUnits.Pixel);

FileStream imageStream = new FileStream("Image.png", FileMode.Open, FileAccess.Read);
worksheet.Pictures.AddPicture(1, 2, imageStream, scaleWidth, scaleHeight);

worksheet.Range["B1"].RowHeight = 155;
worksheet.Range["B1"].ColumnWidth = 10;
```

### Scale to Cell Size
```csharp
// Convert cell dimensions to pixels for image scaling
int pixelWidth = (int)application.ConvertUnits((int)worksheet["C3"].ColumnWidth, MeasureUnits.Millimeter, MeasureUnits.Pixel);
int pixelHeight = (int)application.ConvertUnits((int)worksheet["C3"].RowHeight, MeasureUnits.Millimeter, MeasureUnits.Pixel);

worksheet.Pictures.AddPicture(3, 3, imageStream, pixelWidth, pixelHeight);
```

### Placeholders
- `MeasureUnits.Millimeter` → Source unit
- `MeasureUnits.Pixel` → Target unit

---

## Add Picture to Merged Region

### Minimal Code
```csharp
IRange mergedCell = worksheet.MergedCells[0];
FileStream imageStream = new FileStream("Picture.png", FileMode.Open, FileAccess.Read);

IPictureShape shape = worksheet.Pictures.AddPicture(mergedCell.Row, mergedCell.Column, imageStream);
(shape as ShapeImpl).BottomRow = mergedCell.MergeArea.LastRow;
(shape as ShapeImpl).RightColumn = mergedCell.MergeArea.LastColumn;

imageStream.Dispose();
```

### Multiple Images in Merged Cells
```csharp
IRange[] mergedCells = new IRange[3];
mergedCells[0] = worksheet.MergedCells[0];
mergedCells[1] = worksheet.MergedCells[1];
mergedCells[2] = worksheet.MergedCells[2];

string[] imagePaths = new string[3];
imagePaths[0] = "Picture1.png";
imagePaths[1] = "Picture2.png";
imagePaths[2] = "Picture3.png";

for (int i = 0; i < mergedCells.Length; i++)
{
    FileStream imageStream = new FileStream(imagePaths[i], FileMode.Open, FileAccess.Read);
    IPictureShape shape = worksheet.Pictures.AddPicture(mergedCells[i].Row, mergedCells[i].Column, imageStream);
    (shape as ShapeImpl).BottomRow = mergedCells[i].MergeArea.LastRow;
    (shape as ShapeImpl).RightColumn = mergedCells[i].MergeArea.LastColumn;
    imageStream.Dispose();
}
```

---

## Add Picture from External Link

### Minimal Code
```csharp
worksheet.Pictures.AddPictureAsLink(1, 1, 5, 7, "https://example.com/image.png");
```

### From Web URL
```csharp
// Image is downloaded when Excel opens the file (not embedded)
worksheet.Pictures.AddPictureAsLink(1, 1, 5, 7, 
    "https://cdn.syncfusion.com/content/images/company-logos/Syncfusion_Logo_Image.png");
```

### Placeholders
- `1, 1` → Replace with `"{start-row}`, `"{start-column}"`
- `5, 7` → Replace with `"{end-row}`, `"{end-column}"`
- `"https://..."` → Replace with `"{image-url}"`

---

## Add SVG Image with Fallback

### Minimal Code
```csharp
FileStream svgStream = new FileStream("Image.svg", FileMode.Open);
FileStream pngStream = new FileStream("Image.png", FileMode.Open);

worksheet.Pictures.AddPicture(1, 1, svgStream, pngStream);

svgStream.Dispose();
pngStream.Dispose();
```

### SVG with Raster Fallback
```csharp
// SVG provides sharp scaling, PNG provides compatibility fallback
FileStream svgStream = new FileStream(Path.GetFullPath("Data/Image.svg"), FileMode.Open);
FileStream pngStream = new FileStream(Path.GetFullPath("Data/Image.png"), FileMode.Open);

// Add SVG image with fallback raster image
worksheet.Pictures.AddPicture(1, 1, svgStream, pngStream);

svgStream.Dispose();
pngStream.Dispose();
```

### Placeholders
- `"Image.svg"` → Replace with `"{svg-file-path}"`
- `"Image.png"` → Replace with `"{fallback-raster-path}"`

---

## Format Picture (Advanced)

### Access Picture Properties
```csharp
IPictureShape shape = worksheet.Pictures[0];

// Access basic properties
int pictureHeight = shape.Height;
int pictureWidth = shape.Width;

// Access positioning (in pixels)
int topPosition = shape.Top;
int leftPosition = shape.Left;

// Check cell behavior
bool moveWithCell = shape.IsMoveWithCell;
bool sizeWithCell = shape.IsSizeWithCell;
```

### Modify Picture After Adding
```csharp
IPictureShape shape = worksheet.Pictures[0];

// Reposition
shape.Top = 200;
shape.Left = 150;

// Resize
shape.Height = 250;
shape.Width = 350;

// Set cell behavior
shape.IsMoveWithCell = true;
shape.IsSizeWithCell = false;
```

---

## Remove Picture

### Minimal Code
```csharp
worksheet.Pictures.RemoveAt(0);
```

### Remove All Pictures
```csharp
while (worksheet.Pictures.Count > 0)
{
    worksheet.Pictures.RemoveAt(0);
}
```

---

## Iterate All Pictures in Worksheet

### Minimal Code
```csharp
foreach (IPictureShape picture in worksheet.Pictures)
{
    Console.WriteLine($"Picture Address: {picture.Address}");
    Console.WriteLine($"Size: {picture.Width}x{picture.Height}");
}
```

### Get Picture by Index
```csharp
IPictureShape firstPicture = worksheet.Pictures[0];
int totalPictures = worksheet.Pictures.Count;

Console.WriteLine($"Total pictures: {totalPictures}");
Console.WriteLine($"First picture dimensions: {firstPicture.Width} x {firstPicture.Height}");
```

---

## Unit Conversion for Picture Sizing

### Minimal Code
```csharp
// Convert from Millimeter to Pixel
int pixelWidth = (int)application.ConvertUnits(100, MeasureUnits.Millimeter, MeasureUnits.Pixel);
int pixelHeight = (int)application.ConvertUnits(75, MeasureUnits.Millimeter, MeasureUnits.Pixel);
```

### Supported Unit Conversions
```csharp
// Available MeasureUnits
MeasureUnits.Millimeter
MeasureUnits.Pixel
MeasureUnits.Inch
MeasureUnits.Point
MeasureUnits.Centimeter

// Convert between any units
int inchToPixel = (int)application.ConvertUnits(2, MeasureUnits.Inch, MeasureUnits.Pixel);
int pointToMM = (int)application.ConvertUnits(72, MeasureUnits.Point, MeasureUnits.Millimeter);
```

### Placeholders
- `100` → Replace with `"{source-value}"`
- `MeasureUnits.Millimeter` → Source unit
- `MeasureUnits.Pixel` → Target unit
