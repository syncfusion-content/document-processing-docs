# Slides

> Manage presentation slides — add, clone, merge, remove, iterate elements, and set backgrounds.
> **Color Type Rule:** When using Syncfusion Presentation color APIs, treat factory-created colors such as **ColorObject.FromArgb(...)** or **ColorObject.Blue** as IColor in reusable helper methods and intermediate variables. Only use ColorObject where the reference explicitly requires that concrete type. For assignments like **slide.Background.Fill.SolidFill.Color**, **shape.Fill.SolidFill.Color**, and similar properties, helper signatures should prefer IColor to avoid type mismatch errors.
---

## Required Usings

```csharp
using Syncfusion.Presentation;
```
---

## Add a Blank Slide

### Minimal Code
```csharp
IPresentation pptxDoc = Presentation.Create();
// Add a default blank slide
ISlide slide = pptxDoc.Slides.Add();
FileStream outputStream = new FileStream("Sample.pptx", FileMode.Create);
pptxDoc.Save(outputStream);
pptxDoc.Close();
```

### Placeholders
- `"Sample.pptx"` → Replace with `"{output-file-path}"`

---

## Change Slide Background

### Minimal Code
```csharp
ISlide slide = pptxDoc.Slides[0];
IBackground background = slide.Background;
// Set gradient fill
background.Fill.FillType = FillType.Gradient;
IGradientFill gradient = background.Fill.GradientFill;
gradient.GradientStops.Add(ColorObject.Green, 20);
gradient.GradientStops.Add(ColorObject.Yellow, 50);

```

### Placeholders
- `FillType.Gradient` → Replace with `FillType.Solid`, `FillType.Pattern`, or `FillType.Picture` as needed
- `ColorObject.Green` / `ColorObject.Yellow` → Replace with desired `ColorObject` colors
- Gradient stop positions (`20`, `50`) → Replace with values between `0` and `100`

---

## Add a Slide with a Predefined Layout

### Minimal Code
```csharp
IPresentation pptxDoc = Presentation.Create();
// Add a slide using a specific predefined layout type
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
FileStream outputStream = new FileStream("Sample.pptx", FileMode.Create);
pptxDoc.Save(outputStream);
pptxDoc.Close();
```

### All Predefined Layout Types
```csharp
pptxDoc.Slides.Add(SlideLayoutType.Blank);
pptxDoc.Slides.Add(SlideLayoutType.Comparison);
pptxDoc.Slides.Add(SlideLayoutType.ContentWithCaption);
pptxDoc.Slides.Add(SlideLayoutType.PictureWithCaption);
pptxDoc.Slides.Add(SlideLayoutType.SectionHeader);
pptxDoc.Slides.Add(SlideLayoutType.Title);
pptxDoc.Slides.Add(SlideLayoutType.TitleAndContent);
pptxDoc.Slides.Add(SlideLayoutType.TitleAndVerticalText);
pptxDoc.Slides.Add(SlideLayoutType.TitleOnly);
pptxDoc.Slides.Add(SlideLayoutType.TwoContent);
pptxDoc.Slides.Add(SlideLayoutType.VerticalTitleAndText);
```

### Placeholders
- `SlideLayoutType.Blank` → Replace with any `SlideLayoutType` enum value from the list above

---

## Add a Slide with a Custom Layout

### Minimal Code
```csharp

// Create a custom layout slide in the first master
ILayoutSlide layoutSlide = pptxDoc.Masters[0].LayoutSlides.Add(SlideLayoutType.Blank, "CustomLayout");
// Set background color for the layout
layoutSlide.Background.Fill.SolidFill.Color = ColorObject.FromArgb(78, 89, 90);
// Add a picture to the layout
FileStream pictureStream = new FileStream(inputImagePath, FileMode.Open);
layoutSlide.Shapes.AddPicture(pictureStream, 100, 100, 100, 100);
// Add a slide using the custom layout
ISlide slide = pptxDoc.Slides.Add(layoutSlide);

```

### Placeholders
- `"CustomLayout"` → Replace with `"{layout-name}"`
- `ColorObject.FromArgb(78, 89, 90)` → Replace with the desired background color
- `inputImagePath` → Replace with the image file path

---

## Add a Slide with an Existing Custom Layout by Name

### Minimal Code
```csharp

ILayoutSlides layoutSlides = pptxDoc.Masters[0].LayoutSlides;
ILayoutSlide slideLayout = null;
// Find the layout by name
foreach (ILayoutSlide layout in layoutSlides)
{
    if (layout.Name == "CustomSlideLayout")
    {
        slideLayout = layout;
        break;
    }
}
// Add a slide using the matched layout
ISlide slide = pptxDoc.Slides.Add(slideLayout);

```

### Placeholders
- `"CustomSlideLayout"` → Replace with the name of the desired custom layout

---

## First Slide Number

### Minimal Code
```csharp
pptxDoc.FirstSlideNumber = 10;
```

### Full Example
```csharp
// Open an existing PowerPoint Presentation
using (FileStream inputStream = new FileStream("Data/Input.pptx", FileMode.Open))
{
    using (IPresentation pptxDoc = Presentation.Open(inputStream))
    {
        // Get the FirstSlideNumber of Presentation
        int firstSlideNumber = pptxDoc.FirstSlideNumber;
        // Modify the value for the FirstSlideNumber
        pptxDoc.FirstSlideNumber = 10;
        // Save the PowerPoint Presentation
        using (FileStream outputStream = new FileStream("Result.pptx", FileMode.Create))
        {
            pptxDoc.Save(outputStream);
        }
    }
}
```

### Valid Range
```csharp
// The first slide number can be set from 0 to 9999
pptxDoc.FirstSlideNumber = 0;     // Start from 0
pptxDoc.FirstSlideNumber = 10;    // Start from 10
pptxDoc.FirstSlideNumber = 9999;  // Maximum value
```

### Placeholders
- `10` → Replace with desired starting slide number (0-9999)
- `"Data/Input.pptx"` → Replace with actual input file path

## Iterate Slide Elements

### Minimal Code
```csharp

foreach (ISlide slide in pptxDoc.Slides)
{
    // Iterate master slide shapes
    foreach (IShape shape in slide.LayoutSlide.MasterSlide.Shapes)
        ModifySlideElements(shape);

    // Iterate layout slide shapes
    foreach (IShape shape in slide.LayoutSlide.Shapes)
        ModifySlideElements(shape);

    // Iterate slide shapes
    foreach (IShape shape in slide.Shapes)
        ModifySlideElements(shape);
}



// Helper: dispatch by shape type
static void ModifySlideElements(IShape shape)
{
    switch (shape.SlideItemType)
    {
        case SlideItemType.AutoShape:
            if (!string.IsNullOrEmpty(shape.TextBody.Text))
                ModifyTextPart(shape.TextBody);
            else if (shape.AutoShapeType == AutoShapeType.Rectangle)
                shape.SetHyperlink("www.example.com");
            break;

        case SlideItemType.Placeholder:
            if (!string.IsNullOrEmpty(shape.TextBody.Text))
                ModifyTextPart(shape.TextBody);
            break;

        case SlideItemType.Picture:
            IPicture picture = shape as IPicture;
            picture.Height = 160;
            picture.Width = 130;
            break;

        case SlideItemType.Table:
            ITable table = shape as ITable;
            foreach (IRow row in table.Rows)
                foreach (ICell cell in row.Cells)
                    ModifyTextPart(cell.TextBody);
            break;

        case SlideItemType.GroupShape:
            IGroupShape groupShape = shape as IGroupShape;
            foreach (IShape child in groupShape.Shapes)
                ModifySlideElements(child);
            break;

        case SlideItemType.Chart:
            IPresentationChart chart = shape as IPresentationChart;
            chart.ChartTitle = "Purchase Details";
            chart.ChartTitleArea.Bold = true;
            chart.ChartTitleArea.Color = OfficeKnownColors.Red;
            chart.ChartTitleArea.Size = 20;
            break;

        case SlideItemType.SmartArt:
            ISmartArt smartArt = shape as ISmartArt;
            foreach (ISmartArtNode node in smartArt.Nodes)
                ModifyTextPart(node.TextBody);
            break;

        case SlideItemType.OleObject:
            IOleObject oleObject = shape as IOleObject;
            oleObject.Width = 300;
            break;
    }
}

// Helper: replace all text parts in a text body
static void ModifyTextPart(ITextBody textBody)
{
    foreach (IParagraph paragraph in textBody.Paragraphs)
        foreach (ITextPart textPart in paragraph.TextParts)
            textPart.Text = "Adventure Works";
}
```

### Placeholders
- `"Adventure Works"` → Replace with the desired replacement text
- Shape-specific property assignments → Customize per use case

---

## Clone a Slide

### Minimal Code
```csharp
// open the presentation

ISlide slideClone = pptxDoc.Slides[0].Clone();
IShape textBox = slideClone.AddTextBox(0, 0, 250, 250);
textBox.TextBody.AddParagraph("Hello Presentation");
pptxDoc.Slides.Add(slideClone);

```

### Placeholders
- `pptxDoc.Slides[0]` → Replace `0` with the index of the slide to clone

---

## Merge a Slide — Destination Formatting

### Minimal Code
```csharp
IPresentation sourcePresentation = Presentation.Open(sourcePresentationStream);
IPresentation destinationPresentation = Presentation.Open(destinationPresentationStream);
// Clone a slide from the source
ISlide clonedSlide = sourcePresentation.Slides[0].Clone();
// Merge using destination theme/formatting
destinationPresentation.Slides.Add(clonedSlide, PasteOptions.UseDestinationTheme);

```

### Placeholders
- `sourcePresentation.Slides[0]` → Replace `0` with the source slide index
- `PasteOptions.UseDestinationTheme` → Use `PasteOptions.SourceFormatting` to keep source theme instead

---

## Merge a Slide — Source Formatting

### Minimal Code
```csharp
IPresentation sourcePresentation = Presentation.Open(sourcePresentationFileName);
IPresentation destinationPresentation = Presentation.Open(destinationPresentationFileName);
// Clone a slide from the source
ISlide clonedSlide = sourcePresentation.Slides[0].Clone();
// Merge preserving source formatting
destinationPresentation.Slides.Add(clonedSlide, PasteOptions.SourceFormatting);

```

### Placeholders
- `PasteOptions.SourceFormatting` → Use `PasteOptions.UseDestinationTheme` to apply destination theme instead
- `sourcePresentationFileName`,`destinationPresentationFileName` → Replace with source file name and destintation file name

---

## Remove a Slide

### Minimal Code
```csharp

// Remove by instance
ISlide slide = pptxDoc.Slides[0];
pptxDoc.Slides.Remove(slide);
// OR remove by index
pptxDoc.Slides.RemoveAt(1);

```

### Placeholders
- `pptxDoc.Slides[0]` → Replace `0` with the index of the slide to remove by instance
- `RemoveAt(1)` → Replace `1` with the index to remove directly by position

---