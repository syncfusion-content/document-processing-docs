# Working with Paragraphs

> Adding, formatting, and managing paragraphs within textboxes and shapes in PowerPoint presentations.
> **Color Type Rule:** When using Syncfusion Presentation color APIs, treat factory-created colors such as **ColorObject.FromArgb(...)** or **ColorObject.Blue** as IColor in reusable helper methods and intermediate variables. Only use ColorObject where the reference explicitly requires that concrete type. For assignments like **textPart.Font.Color**, **shape.Fill.SolidFill.Color**, and similar properties, helper signatures should prefer IColor to avoid type mismatch errors.
---

## Required Usings

```csharp
using Syncfusion.Office;
using Syncfusion.Presentation;
```
---

## Add Paragraph to Slide

### Minimal Code
```csharp
IPresentation pptxDoc = Presentation.Create();
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
IShape textboxShape = slide.AddTextBox(0, 0, 500, 500);
IParagraph paragraph = textboxShape.TextBody.AddParagraph();
ITextPart textPart = paragraph.AddTextPart();
textPart.Text = "Your text content here";
```

### Placeholders
- `(0, 0, 500, 500)` → Replace with desired textbox position and size coordinates
- `"Your text content here"` → Replace with actual text content
- `"Output.pptx"` → Replace with desired output filename

---

## Paragraph Formatting

### Minimal Code
```csharp
IParagraph paragraph = textboxShape.TextBody.Paragraphs[0];
paragraph.FirstLineIndent = 10;
paragraph.LeftIndent = 8;
paragraph.HorizontalAlignment = HorizontalAlignmentType.Left;
paragraph.EndParagraphFont.FontName = "Times New Roman";
```

### Formatting Options
```csharp
// Horizontal Alignment
paragraph.HorizontalAlignment = HorizontalAlignmentType.Left;       // Left alignment
paragraph.HorizontalAlignment = HorizontalAlignmentType.Center;     // Center alignment
paragraph.HorizontalAlignment = HorizontalAlignmentType.Right;      // Right alignment
paragraph.HorizontalAlignment = HorizontalAlignmentType.Justify;    // Justified alignment
```

### Placeholders
- `"Sample.pptx"` → Replace with actual input file path
- `10`, `8` → Replace with desired indent values in points
- `"Times New Roman"` → Replace with desired font name

---

## Working with Text Parts

### Add Text with Different Formatting

```csharp
// Create or open file
IShape textboxShape = slide.AddTextBox(500, 0, 400, 500);
// Adds paragraph to the textbody of textbox
IParagraph paragraph = textboxShape.TextBody.AddParagraph();
// Adds a TextPart to the paragraph
ITextPart textPart = paragraph.AddTextPart();
// Adds text to the TextPart
textPart.Text = "Your text here";
// Sets the underline color
textPart.UnderlineColor = ColorObject.AliceBlue;
// Retrieves the existing font for modification
IFont font = textPart.Font;
// Sets the font name
font.FontName = "Arial";
// Sets the font size
font.FontSize = 26f;
// Sets the underline type
font.Underline = TextUnderlineType.Single;
// Sets the font weight
font.Bold = true;
// Sets the font slant
font.Italic = true;
// Sets the font color
font.Color = ColorObject.BlanchedAlmond;
```

### Text Underline Options
```csharp
font.Underline = TextUnderlineType.Single;          // Single underline
font.Underline = TextUnderlineType.Double;          // Double underline
font.Underline = TextUnderlineType.WavyDouble;      // Wavy double underline
```

---

## Modify Text

### Minimal Code
```csharp
ITextPart textPart = paragraph.TextParts[0];
textPart.Text = "New text content";
```

### Full Example
```csharp
// Loads or open a PowerPoint Presentation
FileStream inputStream = new FileStream("Sample.pptx", FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
// Retrieves the first slide from Presentation
ISlide slide = pptxDoc.Slides[0];
// Retrieves the first shape
IShape shape = slide.Shapes[0] as IShape;
// Retrieves the first paragraph of the shape
IParagraph paragraph = shape.TextBody.Paragraphs[0];
// Retrieves the first TextPart of the shape
ITextPart textPart = paragraph.TextParts[0];
// Modifies the text content of the TextPart
textPart.Text = "Hello Presentation";

```

### Placeholders
- `"Sample.pptx"` → Replace with actual input file path
- `"Hello Presentation"` → Replace with desired new text
- `"Output.pptx"` → Replace with desired output filename

---

## Set TextPart Language

### Minimal Code
```csharp
textPart.Font.LanguageID = (short)LocaleIDs.es_AR;
```

### Full Example
```csharp
// Create a Microsoft PowerPoint instance
IPresentation pptxDoc = Presentation.Create();
// Add the slide for Presentation
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
// Adds textbox to the slide
IShape textboxShape = slide.AddTextBox(500, 0, 400, 500);
// Adds paragraph to the textbody of textbox
IParagraph paragraph = textboxShape.TextBody.AddParagraph();
// Adds a TextPart to the paragraph
ITextPart textPart = paragraph.AddTextPart();
// Adds text to the TextPart
textPart.Text = "AdventureWorks Cycles";
// Sets a language as "Spanish (Argentina)" for TextPart
textPart.Font.LanguageID = (short)LocaleIDs.es_AR;
// Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream("Output.pptx", FileMode.Create);
pptxDoc.Save(outputStream);
// Closes the Presentation
pptxDoc.Close();
```

### Common Language IDs
```csharp
LocaleIDs.en_US      // English (US)
LocaleIDs.es_AR      // Spanish (Argentina)
LocaleIDs.fr_FR      // French (France)
LocaleIDs.de_DE      // German (Germany)
LocaleIDs.ja_JP      // Japanese (Japan)
```

### Placeholders
- `LocaleIDs.es_AR` → Replace with desired language locale
- `"AdventureWorks Cycles"` → Replace with actual text content

---

## Remove Paragraph

### Minimal Code
```csharp
shape.TextBody.Paragraphs.Remove(paragraph);
```

### Full Example
```csharp
// Loads or open a PowerPoint Presentation
FileStream inputStream = new FileStream("Sample.pptx", FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
// Retrieves the first slide from Presentation
ISlide slide = pptxDoc.Slides[0];
// Retrieves the first shape
IShape shape = slide.Shapes[0] as IShape;
// Retrieves the first paragraph of the shape
IParagraph paragraph = shape.TextBody.Paragraphs[0];
// Removes the first paragraph from the textbody of the shape
shape.TextBody.Paragraphs.Remove(paragraph);
// Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream("Output.pptx", FileMode.Create);
pptxDoc.Save(outputStream);
// Closes the Presentation
pptxDoc.Close();
```

### Placeholders
- `"Sample.pptx"` → Replace with actual input file path
- `[0]` → Replace with the index of the paragraph to remove
- `"Output.pptx"` → Replace with desired output filename
