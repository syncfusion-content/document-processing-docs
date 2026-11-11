# Presentation Structure

> Presentation lifecycle & slide layout — creating, saving, closing presentations and configuring slides.
> **Slide Dimensions:** By default, newly created presentations have a slide size of 960 × 540 pts (Custom type). Always scale shape dimensions proportionally based on the slide width and height to ensure proper visual layout and prevent content overflow or misalignment.

---
## Required Usings

```csharp
using Syncfusion.Presentation;
using System.IO;
```

---
## Create Presentation

### Minimal Code
```csharp
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "presentation.pptx");
using IPresentation presentation = Presentation.Create();

// Add content here

presentation.Save(outputPath);
presentation.Close();
Console.WriteLine($"SUCCESS: {outputPath}");
```

### Placeholders
- `"presentation.pptx"` → Replace with `"{filename}.pptx"`
- Add content operations between presentation creation and save

---

## Open Presentation

### Open from File Path
```csharp
FileStream inputStream = new FileStream("Sample.pptx", FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
```

### Open, Modify, and Save
```csharp
// Open an existing PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName, FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);

// Add content / make modifications here

// Save the modified presentation
FileStream outputStream = new FileStream(outputFileName, FileMode.Create);
pptxDoc.Save(outputStream);

// Close the presentation
pptxDoc.Close();
```

### Placeholders
- `"Sample.pptx"` → Replace with the actual input file path or variable `inputFileName`
- `outputFileName` → Replace with the desired output file path

---

## Save Presentation

### Save to File Path
```csharp
pptxDoc.Save("output/presentation.pptx");
```

### Save to Stream
```csharp
using var stream = new FileStream("output/presentation.pptx", FileMode.Create);
pptxDoc.Save(stream);
```

---

## Close Presentation

### Minimal Code
```csharp
pptxDoc.Close();
```

> Always call `Close()` after saving to release resources. When using `using`, disposal is automatic.

---

## Add Slide

### Minimal Code
```csharp
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
```

### Slide Layout Options
```csharp
// Common layout types
ISlide titleSlide    = pptxDoc.Slides.Add(SlideLayoutType.TitleOnly);
ISlide contentSlide  = pptxDoc.Slides.Add(SlideLayoutType.TitleAndContent);
ISlide blankSlide    = pptxDoc.Slides.Add(SlideLayoutType.Blank);
ISlide twoContent    = pptxDoc.Slides.Add(SlideLayoutType.TwoContent);
```

---

## Slide Size (Page Setup)

> By default, newly created presentations are set to Type = Custom with Width = 960 pts and Height = 540 pts.

### Minimal Code
```csharp
// Standard widescreen
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.OnScreen;

// Custom size (in points: 1 inch = 72 points)
(pptxDoc as Presentation).SlideSize.Width  = 960;  // 13.3 inches
(pptxDoc as Presentation).SlideSize.Height = 540;  // 7.5 inches
```

### Common Presets
```csharp
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.A3Paper;           // A3Paper (1008 x 756 pts)
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.A4Paper;           // A4Paper (780 x 540 pts)
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.B4IsoPaper;        // B4IsoPaper (852.5 x 639.38 pts)
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.B5IsoPaper;        // B5IsoPaper (564.5 x 423.38 pts)
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.Banner;            // Banner (576 x 72 pts)
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.Custom;            // Custom (960 x 540 pts default)
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.Ledger;            // Ledger (958.97 x 719.25 pts)
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.LetterPaper;       // LetterPaper (720 x 540 pts)
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.OnScreen;          // OnScreen (720 x 540 pts)
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.Overhead;          // Overhead
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.OnScreen16X10;     // OnScreen16X10 (720 x 450 pts)
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.OnScreen16X9;      // OnScreen16X9 (720 x 405 pts)
(pptxDoc as Presentation).SlideSize.Type = SlideSizeType.Slide35Mm;         // Slide 35mm (810 x 540 pts)
```

---

## Clone Presentation

### Minimal Code
```csharp
IPresentation clonedPresentation = pptxDoc.Clone();
```

### Full Example
```csharp
// Loads or open a PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName, FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
// Clones the Presentation
IPresentation clonedPresentation = pptxDoc.Clone();
// Gets the first slide from the cloned PowerPoint presentation
ISlide firstSlide = clonedPresentation.Slides[0];
// Adds a textbox in a slide by specifying its position and size
IShape textShape = firstSlide.AddTextBox(100, 75, 756, 200);
// Adds a paragraph in the body of the textShape
IParagraph paragraph = textShape.TextBody.AddParagraph();
// Adds a textPart in the paragraph
ITextPart textPart = paragraph.AddTextPart("Essential Presentation");
// Save the PowerPoint Presentation to stream
FileStream outputStream = new FileStream(outputFileName, FileMode.Create);
clonedPresentation.SaveAs(outputStream);
```

### Placeholders
- `inputFileName` → Replace with actual input file path
- `outputFileName` → Replace with desired output file path
- `"Essential Presentation"` → Replace with desired text content

---

## Built-in Document Properties

### Access Built-in Document Properties

#### Minimal Code
```csharp
string title = pptxDoc.BuiltInDocumentProperties.Title;
string author = pptxDoc.BuiltInDocumentProperties.Author;
```

#### Full Example
```csharp
// Opens a PowerPoint presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
// Accesses the built-in document properties
Console.WriteLine("Title - {0}", pptxDoc.BuiltInDocumentProperties.Title);
Console.WriteLine("Author - {0}", pptxDoc.BuiltInDocumentProperties.Author);
// Closes the PowerPoint presentation
pptxDoc.Close();
```

### Modify Built-in Document Properties

#### Minimal Code
```csharp
pptxDoc.BuiltInDocumentProperties.Category = "Sales reports";
pptxDoc.BuiltInDocumentProperties.Company = "Northwind traders";
```

#### Full Example
```csharp
// Loads or open a PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName, FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
// Modifies the Built-in document properties
pptxDoc.BuiltInDocumentProperties.Category = "Sales reports";
pptxDoc.BuiltInDocumentProperties.Company = "Northwind traders";
// Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
// Close the instance of PowerPoint Presentation
pptxDoc.Close();
```

### Common Built-in Properties
```csharp
pptxDoc.BuiltInDocumentProperties.Title              // Document title
pptxDoc.BuiltInDocumentProperties.Author             // Document author
pptxDoc.BuiltInDocumentProperties.Category           // Document category
pptxDoc.BuiltInDocumentProperties.Company            // Company name
pptxDoc.BuiltInDocumentProperties.Subject            // Document subject
pptxDoc.BuiltInDocumentProperties.Keywords           // Document keywords
```

### Placeholders
- `"Sales reports"` → Replace with desired category
- `"Northwind traders"` → Replace with desired company name

---

## Custom Document Properties

### Add Custom Document Properties

#### Minimal Code
```csharp
ICustomDocumentProperties documentProperty = pptxDoc.CustomDocumentProperties;
documentProperty.Add("PropertyA");
documentProperty["PropertyA"].Text = "Value";
```

#### Full Example
```csharp
// Loads or open a PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName, FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
// Adds custom document properties 
ICustomDocumentProperties documentProperty = pptxDoc.CustomDocumentProperties;
documentProperty.Add("PropertyA");
documentProperty["PropertyA"].Text = "@!123";
documentProperty.Add("PropertyB");
documentProperty["PropertyB"].Text = "B";
// Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
// Closes the PowerPoint presentation
pptxDoc.Close();
```

### Access and Modify Custom Document Properties

#### Minimal Code
```csharp
IDocumentProperty property = pptxDoc.CustomDocumentProperties["PropertyA"];
property.Value = "Hello world";
```

#### Full Example
```csharp
// Loads or open a PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName, FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
// Accesses an existing custom document property
IDocumentProperty property = pptxDoc.CustomDocumentProperties["PropertyA"];
// Modifies the value of DocumentProperty
property.Value = "Hello world";
// Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
```

### Placeholders
- `"PropertyA"` → Replace with desired property name
- `"@!123"` → Replace with desired property value
- `"Hello world"` → Replace with desired new value

---

## Mark Presentation as Final

### Minimal Code
```csharp
pptxDoc.Final = true;
```

### Full Example
```csharp
// Create an instance for PowerPoint presentation
IPresentation pptxDoc = Presentation.Create();
// Add slide to the presentation
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
// Mark the presentation as final
pptxDoc.Final = true;
// Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
// Close the presentation
pptxDoc.Close();
```

> Note: Marking as final makes the presentation read-only to prevent inadvertent changes, but this is not a security feature. Anyone can disable the final status and edit the presentation.

---

