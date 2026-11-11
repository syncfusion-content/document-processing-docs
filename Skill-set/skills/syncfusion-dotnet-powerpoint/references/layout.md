# Working with Master and Layout Slides

> Creating, accessing, and customizing master slides and layout slides to control presentation themes, layouts, backgrounds, fonts, and positioning.

---

## Required Usings

```csharp
using Syncfusion.Presentation;
```
---

## Access Master Slide

### Minimal Code
```csharp
IPresentation pptxDoc = Presentation.Create();
IMasterSlide masterSlide = pptxDoc.Masters[0];
```

### Full Example
```csharp
// Create a PowerPoint presentation
IPresentation pptxDoc = Presentation.Create();
// Access the first master slide in PowerPoint file
IMasterSlide masterSlide = pptxDoc.Masters[0];
// Get the first shape name from the master slide
string shapeName = masterSlide.Shapes[0].ShapeName;
// Save the PowerPoint file
pptxDoc.Save("Sample.pptx");
// Close the Presentation instance
pptxDoc.Close();
```

### Placeholders
- `pptxDoc.Masters[0]` → Replace with desired master slide index
- `"Sample.pptx"` → Replace with desired output filename

---

## Change Master Slide Background

### Minimal Code
```csharp
IMasterSlide masterSlide = pptxDoc.Masters[0];
IBackground background = masterSlide.Background;
background.Fill.FillType = FillType.Solid;
ISolidFill solidFill = background.Fill.SolidFill;
solidFill.Color = ColorObject.Green;
```


### Fill Type Options
```csharp
background.Fill.FillType = FillType.Solid;           // Solid color fill
background.Fill.FillType = FillType.Gradient;        // Gradient fill
background.Fill.FillType = FillType.Picture;         // Picture fill
```

### Color Options
```csharp
solidFill.Color = ColorObject.Green;                 // Named color
solidFill.Color = ColorObject.FromArgb(78, 89, 90);  // RGB color
```

### Placeholders
- `ColorObject.Green` → Replace with desired color
- `(78, 89, 90)` → Replace with desired RGB values

---

## Create Custom Layout Slide

### Minimal Code
```csharp
IMasterSlide masterSlide = pptxDoc.Masters[0];
ILayoutSlide layoutSlide = masterSlide.LayoutSlides.Add(SlideLayoutType.Blank, "CustomLayout");
```


### Slide Layout Types
```csharp
SlideLayoutType.Blank                  // Blank layout
SlideLayoutType.TitleOnly              // Title only layout
SlideLayoutType.TitleAndContent        // Title and content layout
SlideLayoutType.TwoContent             // Two content layout
SlideLayoutType.Comparison             // Comparison layout
SlideLayoutType.Centered               // Centered layout
```

### Auto Shape Types
```csharp
AutoShapeType.Diamond      // Diamond shape
AutoShapeType.Rectangle    // Rectangle shape
AutoShapeType.Ellipse      // Ellipse shape
AutoShapeType.Triangle     // Triangle shape
AutoShapeType.Circle       // Circle shape
```

### Shape Parameters
```csharp
layoutSlide.Shapes.AddShape(AutoShapeType.Diamond, 30, 20, 400, 300);
// Parameters: (ShapeType, LeftPosition, TopPosition, Width, Height)
```

### Placeholders
- `"CustomLayout"` → Replace with desired layout name
- `AutoShapeType.Diamond` → Replace with desired shape type
- `30, 20, 400, 300` → Replace with desired position and size in points
- `(78, 89, 90)` → Replace with desired RGB color values
- `"LayoutSlide.pptx"` → Replace with desired output filename

---

## Add Shape to Layout Slide

### Minimal Code
```csharp
IShape shape = layoutSlide.Shapes.AddShape(AutoShapeType.Rectangle, 50, 50, 200, 100);
```

### Customize Shape
```csharp
// Add a shape to the layout slide
IShape shape = layoutSlide.Shapes.AddShape(AutoShapeType.Rectangle, 50, 50, 200, 100);
// Access shape fill properties
shape.Fill.FillType = FillType.Solid;
shape.Fill.SolidFill.Color = ColorObject.Blue;
// Access shape line properties
shape.LineFormat.Fill.FillType = FillType.Solid;
shape.LineFormat.Fill.SolidFill.Color = ColorObject.Black;
```

### Placeholders
- `50, 50, 200, 100` → Replace with desired left, top, width, height in points
- `ColorObject.Blue` → Replace with desired color

---

## Use Custom Layout Slide

### Minimal Code
```csharp
ILayoutSlide customLayout = pptxDoc.Masters[0].LayoutSlides.Add(SlideLayoutType.Blank, "MyCustomLayout");
ISlide slide = pptxDoc.Slides.Add(customLayout);
```


### Placeholders
- `customLayout` → Replace with the ILayoutSlide instance to use

---

## Access Layout Slides

### Minimal Code
```csharp
IMasterSlide masterSlide = pptxDoc.Masters[0];
ILayoutSlide layoutSlide = masterSlide.LayoutSlides[0];
```

### Get All Layout Slides
```csharp
// Access the first master slide
IMasterSlide masterSlide = pptxDoc.Masters[0];
// Iterate through all layout slides
foreach (ILayoutSlide layout in masterSlide.LayoutSlides)
{
    // Access layout slide properties
    string layoutName = layout.Name;
    int shapeCount = layout.Shapes.Count;
}
```

### Placeholders
- `masterSlide.LayoutSlides[0]` → Replace with desired layout index
