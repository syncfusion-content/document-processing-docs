# Shapes

> Add, iterate, format, and remove shapes (AutoShapes, pictures, text boxes, group shapes) in a PowerPoint slide.
> **Shape Dimensions Rule:** By default, newly created presentations have a slide size of 960 × 540 pts (Custom type). Always scale shape dimensions proportionally based on the slide width and height to ensure proper visual layout and prevent content overflow or misalignment.
> **Color Type Rule:** When using Syncfusion Presentation color APIs, treat factory-created colors such as **ColorObject.FromArgb(...)** or **ColorObject.Blue** as IColor in reusable helper methods and intermediate variables. Only use ColorObject where the reference explicitly requires that concrete type. For assignments like **textPart.Font.Color**, **shape.Fill.SolidFill.Color**, and similar properties, helper signatures should prefer IColor to avoid type mismatch errors.


---
## Required Usings

```csharp
using Syncfusion.Presentation;
```

---
## Add an AutoShape and Picture to a Slide

### Minimal Code
```csharp
// Add an AutoShape (x, y, width, height — all in points)
slide.Shapes.AddShape(AutoShapeType.Cube, 50, 200, 300, 300);
// Add a picture from a stream (x, y, width, height)
FileStream imageStream = new FileStream(imagePath, FileMode.Open);
IPicture picture = slide.Shapes.AddPicture(imageStream, 373, 83, 526, 382);

```

### Placeholders
- `AutoShapeType.Cube` → Replace with any `AutoShapeType` enum value (e.g., `Rectangle`, `RoundedRectangle`, `Oval`, `Arrow`, etc.)
- `(50, 200, 300, 300)` → Replace with `({x}, {y}, {width}, {height})` in points
- `imagePath` → Replace with the image file path
- `"Sample.pptx"` → Replace with `"{output-file-path}"`

---

## Add a Text Box to a Slide

### Minimal Code
```csharp

// Add a text box (x, y, width, height)
IShape textBox = slide.Shapes.AddTextBox(50, 50, 400, 100);
textBox.TextBody.AddParagraph("Hello, Presentation!");

```

### Placeholders
- `(50, 50, 400, 100)` → Replace with `({x}, {y}, {width}, {height})` in points
- `"Hello, Presentation!"` → Replace with the desired text content

---

## Iterate Through Shapes in a Slide

### Minimal Code
```csharp
// Iterate all shapes on the first slide
foreach (IShape shape in pptxDoc.Slides[0].Shapes)
{
    if (shape is IPicture)
        shape.Title = "Picture";
    else if (shape is IShape)
        shape.Title = "AutoShape";
}
FileStream outputStream = new FileStream("Output.pptx", FileMode.Create);
pptxDoc.Save(outputStream);
pptxDoc.Close();
```

### Placeholders
- `pptxDoc.Slides[0]` → Replace `0` with the target slide index
- Title assignment logic → Replace with your own property modifications

---

## Apply Shape Formatting (Line, Fill)

### Minimal Code
```csharp

IShape shape = slide.Shapes[0] as IShape;
// Set shape name
shape.ShapeName = "Shape1";
// Configure line format
ILineFormat lineFormat = shape.LineFormat;
lineFormat.DashStyle = LineDashStyle.DashDotDot;
lineFormat.Weight = 3;
// Configure pattern fill
shape.Fill.FillType = FillType.Pattern;
shape.Fill.PatternFill.Pattern = PatternFillType.DashedDownwardDiagonal;
shape.Fill.PatternFill.ForeColor = ColorObject.AliceBlue;
shape.Fill.PatternFill.BackColor = ColorObject.DarkSalmon;

```

### Placeholders
- `slide.Shapes[0]` → Replace `0` with the target shape index
- `LineDashStyle.DashDotDot` → Replace with any `LineDashStyle` enum value
- `lineFormat.Weight = 3` → Replace `3` with the desired line weight in points
- `FillType.Pattern` → Replace with `FillType.Solid`, `FillType.Gradient`, or `FillType.Picture` as needed
- `PatternFillType.DashedDownwardDiagonal` → Replace with any `PatternFillType` enum value
- `ColorObject.AliceBlue` / `ColorObject.DarkSalmon` → Replace with desired `ColorObject` colors or `ColorObject.FromArgb(r, g, b)`

---

## Remove a Shape

### Minimal Code
```csharp
// Remove by instance
IShape shape = slide.Shapes[0] as IShape;
slide.Shapes.Remove(shape);

```

### Placeholders
- `slide.Shapes[0]` → Replace `0` with the index of the shape to remove

---

## Create a Group Shape

### Minimal Code
```csharp

// Add a group shape container (x, y, width, height)
IGroupShape groupShape = slide.GroupShapes.AddGroupShape(20, 20, 450, 300);
// Add a text box to the group
groupShape.Shapes.AddTextBox(30, 25, 100, 100).TextBody.AddParagraph("My TextBox");
// Add a picture to the group
FileStream pictureStream = new FileStream(imagePath, FileMode.Open);
groupShape.Shapes.AddPicture(pictureStream, 40, 100, 100, 100);
// Add an AutoShape to the group
groupShape.Shapes.AddShape(AutoShapeType.Rectangle, 200, 200, 90, 30);
```

### Placeholders
- `(20, 20, 450, 300)` → Replace with `({x}, {y}, {width}, {height})` for the group container
- `"My TextBox"` → Replace with the desired text content
- `imagePath` → Replace with the image file path
- `AutoShapeType.Rectangle` → Replace with any `AutoShapeType` enum value

---

## Iterate and Modify a Group Shape

### Minimal Code
```csharp
// Get the first group shape on the slide
IGroupShape groupShape = slide.GroupShapes[0];
IShapes shapes = groupShape.Shapes;
// Remove the first picture found inside the group
foreach (IShape shape in shapes)
{
    if (shape.SlideItemType == SlideItemType.Picture)
    {
        shapes.Remove(shape);
        break;
    }
}

```

### Placeholders
- `slide.GroupShapes[0]` → Replace `0` with the target group shape index
- `SlideItemType.Picture` → Replace with the `SlideItemType` to search for (e.g., `AutoShape`, `Table`, `Chart`)

---

## Remove a Group Shape

### Minimal Code
```csharp
ISlide slide = pptxDoc.Slides[0];
// Get and remove the first group shape
IGroupShape groupShape = slide.GroupShapes[0];
slide.GroupShapes.Remove(groupShape);

```

### Placeholders
- `slide.GroupShapes[0]` → Replace `0` with the index of the group shape to remove
