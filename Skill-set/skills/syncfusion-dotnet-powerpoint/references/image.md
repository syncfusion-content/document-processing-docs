# Working with Images

> Adding, replacing, cropping, and removing images in PowerPoint presentations. Support for raster images and SVG images with fallback support.

---

## Required Usings

```csharp
using Syncfusion.Presentation;
```

---

## Add Image

### Minimal Code
```csharp
FileStream pictureStream = new FileStream("Image.png", FileMode.Open);
IPicture picture = slide.Pictures.AddPicture(pictureStream, 0, 0, 250, 250);
pictureStream.Dispose();
```

### Picture Parameters
```csharp
slide.Pictures.AddPicture(pictureStream, left, top, width, height);
// Parameters: (FileStream, LeftPosition, TopPosition, Width, Height)
// All position and size parameters are in EMU (English Metric Units)
```

### Placeholders
- `"Image.png"` → Replace with actual image file path
- `0, 0` → Replace with desired left and top position in EMU
- `250, 250` → Replace with desired width and height in EMU
- `"Sample.pptx"` → Replace with desired output filename

---

## Replace Image

### Minimal Code
```csharp
IPicture picture = slide.Pictures[0];
FileStream pictureStream = new FileStream("NewImage.png", FileMode.Open);
MemoryStream memoryStream = new MemoryStream();
pictureStream.CopyTo(memoryStream);
picture.ImageData = memoryStream.ToArray();
```

### Placeholders
- `"Sample.pptx"` → Replace with actual input file path
- `[0]` → Replace with desired picture index
- `"Image.png"` → Replace with new image file path
- `"Output.pptx"` → Replace with desired output filename

---

## Add SVG Image

### Minimal Code
```csharp
FileStream svgImageStream = new FileStream("Image.svg", FileMode.Open);
FileStream fallbackImageStream = new FileStream("Image.png", FileMode.Open);
IPicture icon = slide.Pictures.AddPicture(svgImageStream, fallbackImageStream, 0, 0, 250, 250);
fallbackImageStream.Dispose();
svgImageStream.Dispose();
```

### About SVG Images
SVG images can be inserted in PowerPoint slides for displaying images with accuracy when scaling or zooming. SVG images should include a fallback image for compatibility.

### SVG Parameters
```csharp
slide.Pictures.AddPicture(svgStream, fallbackStream, left, top, width, height);
// Parameters: (SVGFileStream, FallbackImageStream, LeftPosition, TopPosition, Width, Height)
```

### Placeholders
- `"Image.svg"` → Replace with actual SVG file path
- `"Image.png"` → Replace with fallback raster image file path
- `0, 0` → Replace with desired left and top position in EMU
- `250, 250` → Replace with desired width and height in EMU
- `"Sample.pptx"` → Replace with desired output filename

---

## Replace SVG Image

### Minimal Code
```csharp
IPicture icon = slide.Pictures[0];
FileStream pictureStream = new FileStream("NewImage.svg", FileMode.Open);
MemoryStream memoryStream = new MemoryStream();
pictureStream.CopyTo(memoryStream);
icon.SvgData = memoryStream.ToArray();
```

### Important Note
The `SvgData` property will return null if the image is not an SVG image.

### Placeholders
- `"Sample.pptx"` → Replace with actual input file path
- `[0]` → Replace with desired picture index
- `"Image.svg"` → Replace with new SVG file path
- `"Output.pptx"` → Replace with desired output filename

---

## Crop Image

### Minimal Code
```csharp
IPicture picture = slide.Pictures[0];
picture.Crop.ContainerWidth = 114.48f;
picture.Crop.ContainerHeight = 56.88f;
picture.Crop.ContainerLeft = 94.32f;
picture.Crop.ContainerTop = 128.16f;
picture.Crop.Width = 900.72f;
picture.Crop.Height = 74.88f;
picture.Crop.OffsetX = 329.04f;
picture.Crop.OffsetY = -9.36f;
```

### Crop Properties

#### Container (Bounding Box) Properties
```csharp
picture.Crop.ContainerWidth = 114.48f;   // Width of the visible area
picture.Crop.ContainerHeight = 56.88f;   // Height of the visible area
picture.Crop.ContainerLeft = 94.32f;     // Left position of the visible area
picture.Crop.ContainerTop = 128.16f;     // Top position of the visible area
picture.Crop.ContainerRight = 100f;      // Right position of the visible area (optional)
picture.Crop.ContainerBottom = 100f;     // Bottom position of the visible area (optional)
```

#### Crop Properties
```csharp
picture.Crop.Width = 900.72f;      // Total width of the image
picture.Crop.Height = 74.88f;      // Total height of the image
picture.Crop.OffsetX = 329.04f;    // Horizontal offset for cropping
picture.Crop.OffsetY = -9.36f;     // Vertical offset for cropping
```

### Placeholders
- `"Sample.pptx"` → Replace with actual input file path
- `[0]` → Replace with desired picture index
- `114.48f`, `56.88f`, etc. → Replace with desired crop values
- `"Output.pptx"` → Replace with desired output filename

---

## Remove Image

### Minimal Code
```csharp
IPicture picture = slide.Pictures[0];
slide.Pictures.Remove(picture);
```

### Remove All Images
```csharp
// Get all pictures from the slide
while (slide.Pictures.Count > 0)
{
    // Remove the first picture until no pictures remain
    slide.Pictures.Remove(slide.Pictures[0]);
}
```

### Placeholders
- `"Sample.pptx"` → Replace with actual input file path
- `[0]` → Replace with desired picture index
- `"Output.pptx"` → Replace with desired output filename

---

## Common Image Operations Reference

### Accessing Picture Properties

```csharp
// Access picture by index
IPicture picture = slide.Pictures[0];

// Access picture properties
float width = picture.Width;           // Get picture width
float height = picture.Height;         // Get picture height
float left = picture.Left;             // Get left position
float top = picture.Top;               // Get top position

// Modify picture properties
picture.Width = 300;                   // Set new width
picture.Height = 200;                  // Set new height
picture.Left = 50;                     // Set new left position
picture.Top = 50;                      // Set new top position

// Access image data
byte[] imageData = picture.ImageData;  // Get image data
```

### Picture Count
```csharp
// Get total number of pictures in a slide
int pictureCount = slide.Pictures.Count;
```

### Iterate Through Pictures
```csharp
foreach (IPicture picture in slide.Pictures)
{
    // Perform operations on each picture
    Console.WriteLine($"Picture size: {picture.Width} x {picture.Height}");
}
```

### Placeholders
- `300`, `200` → Replace with desired width and height values
- `50` → Replace with desired position values
