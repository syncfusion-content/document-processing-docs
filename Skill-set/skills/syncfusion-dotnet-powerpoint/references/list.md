# Working with Lists

> Creating and managing simple lists, bulleted lists, numbered lists, picture lists, and multi-level lists in PowerPoint presentations.

---

## Required Usings

```csharp
using Syncfusion.Presentation;
```
---

## Numbered List

### Minimal Code
```csharp
IParagraph paragraph = textBoxShape.TextBody.AddParagraph("Your text here");
paragraph.ListFormat.Type = ListType.Numbered;
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod;
paragraph.IndentLevelNumber = 1;
paragraph.FirstLineIndent = -20;
```

### Full Example
```csharp
// Creates a new Presentation instance
IPresentation pptxDoc = Presentation.Create();
// Adds a blank slide into the Presentation
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
// Adds a textbox to hold the list
IShape textBoxShape = slide.AddTextBox(65, 140, 410, 270);
// Adds a new paragraph with the text
IParagraph paragraph = textBoxShape.TextBody.AddParagraph("AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.");
// Sets the list type as Numbered
paragraph.ListFormat.Type = ListType.Numbered;
// Sets the numbered style as Arabic number following by period
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod;
// Sets the starting value as 1
paragraph.ListFormat.StartValue = 1;
// Sets the list level as 1
paragraph.IndentLevelNumber = 1;
// Sets the hanging value
paragraph.FirstLineIndent = -20;
// Sets the bullet character size (100 means 100% of its text, range 25-400)
paragraph.ListFormat.Size = 100;
// Adds another paragraph
paragraph = textBoxShape.TextBody.AddParagraph("The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets.");
paragraph.ListFormat.Type = ListType.Numbered;
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod;
paragraph.IndentLevelNumber = 1;
paragraph.FirstLineIndent = -20;
paragraph.ListFormat.Size = 100;
// Save the PowerPoint Presentation
FileStream outputStream = new FileStream("Sample.pptx", FileMode.Create);
pptxDoc.Save(outputStream);
// Closes the Presentation
pptxDoc.Close();
```

### Numbered List Styles
```csharp
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod;        // 1. 2. 3.
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicParenthesis;   // 1) 2) 3)
paragraph.ListFormat.NumberStyle = NumberedListStyle.AlphaUcPeriod;       // A. B. C.
paragraph.ListFormat.NumberStyle = NumberedListStyle.AlphaLcPeriod;       // a. b. c.
paragraph.ListFormat.NumberStyle = NumberedListStyle.RomanUcPeriod;       // I. II. III.
paragraph.ListFormat.NumberStyle = NumberedListStyle.RomanLcPeriod;       // i. ii. iii.
```

### Placeholders
- `"Your text here"` → Replace with actual text content
- `1` → Replace with desired starting value
- `100` → Replace with desired size (25-400)

---

## Bulleted List

### Minimal Code
```csharp
IParagraph paragraph = textBoxShape.TextBody.AddParagraph("Your text here");
paragraph.ListFormat.Type = ListType.Bulleted;
paragraph.ListFormat.BulletCharacter = Convert.ToChar(183);
paragraph.ListFormat.FontName = "Symbol";
paragraph.IndentLevelNumber = 1;
paragraph.FirstLineIndent = -20;
```

### Full Example
```csharp
// Creates a new Presentation instance
IPresentation pptxDoc = Presentation.Create();
// Adds the slide into the Presentation
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
// Adds a textbox to hold the list
IShape textBoxShape = slide.AddTextBox(65, 140, 410, 250);
// Adds a new paragraph with the text
IParagraph paragraph = textBoxShape.TextBody.AddParagraph("AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.");
// Sets the list type as bulleted
paragraph.ListFormat.Type = ListType.Bulleted;
// Sets the bullet character for this list
paragraph.ListFormat.BulletCharacter = Convert.ToChar(183);
// Sets the hanging value
paragraph.FirstLineIndent = -20;
// Sets the list level as 1
paragraph.IndentLevelNumber = 1;
// Sets the font for the bullet character
paragraph.ListFormat.FontName = "Symbol";
// Sets the bullet character size (100 means 100% of its text, range 25-400)
paragraph.ListFormat.Size = 100;
// Adds another paragraph
paragraph = textBoxShape.TextBody.AddParagraph("The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets.");
paragraph.ListFormat.Type = ListType.Bulleted;
paragraph.ListFormat.BulletCharacter = Convert.ToChar(183);
paragraph.FirstLineIndent = -20;
paragraph.IndentLevelNumber = 1;
paragraph.ListFormat.FontName = "Symbol";
paragraph.ListFormat.Size = 100;
// Save the PowerPoint Presentation
FileStream outputStream = new FileStream("Sample.pptx", FileMode.Create);
pptxDoc.Save(outputStream);
// Closes the Presentation
pptxDoc.Close();
```

### Common Bullet Characters
```csharp
paragraph.ListFormat.BulletCharacter = Convert.ToChar(183);   // Middle dot •
paragraph.ListFormat.BulletCharacter = Convert.ToChar(111);   // Circle ○
paragraph.ListFormat.BulletCharacter = Convert.ToChar(168);   // Diamond ◆
paragraph.ListFormat.BulletCharacter = Convert.ToChar(167);   // Section mark §
paragraph.ListFormat.BulletCharacter = Convert.ToChar(45);    // Dash -
```

### Placeholders
- `"Your text here"` → Replace with actual text content
- `Convert.ToChar(183)` → Replace with desired bullet character code
- `"Symbol"` → Replace with desired font name
- `100` → Replace with desired size (25-400)

---

## Picture List

### Minimal Code
```csharp
IParagraph paragraph = textBoxShape.TextBody.AddParagraph("Your text here");
paragraph.ListFormat.Type = ListType.Picture;
paragraph.ListFormat.Picture(pictureStream);
paragraph.ListFormat.Size = 150;
paragraph.IndentLevelNumber = 1;
paragraph.FirstLineIndent = -20;
```

### Placeholders
- `"Your text here"` → Replace with actual text content
- `pictureStream` → Replace with FileStream pointing to the image file
- `150` → Replace with desired picture size (25-400)

---

## Multi-level List

### Minimal Code
```csharp
// Level 1
paragraph.ListFormat.Type = ListType.Numbered;
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod;
paragraph.IndentLevelNumber = 1;

// Level 2
paragraph.ListFormat.Type = ListType.Numbered;
paragraph.ListFormat.NumberStyle = NumberedListStyle.AlphaLcPeriod;
paragraph.IndentLevelNumber = 2;

// Level 3
paragraph.ListFormat.Type = ListType.Numbered;
paragraph.ListFormat.NumberStyle = NumberedListStyle.RomanLcPeriod;
paragraph.IndentLevelNumber = 3;
```

### Indent Levels
```csharp
paragraph.IndentLevelNumber = 1;    // Level 1 (parent level)
paragraph.IndentLevelNumber = 2;    // Level 2 (sub-item)
paragraph.IndentLevelNumber = 3;    // Level 3 (sub-sub-item)
paragraph.IndentLevelNumber = 8;    // Level 8 (maximum level)
```

### Placeholders
- `1` → Replace with desired starting value
- `-20` → Replace with desired hanging indent value
- `paragraph.IndentLevelNumber` → Replace with level between 1-8

---

## List Formatting Properties

### Common List Properties

```csharp
// Set list type
paragraph.ListFormat.Type = ListType.Numbered;        // Numbered list
paragraph.ListFormat.Type = ListType.Bulleted;        // Bulleted list
paragraph.ListFormat.Type = ListType.Picture;         // Picture list

// Set list level
paragraph.IndentLevelNumber = 1;                      // Set indentation level (1-8)

// Set hanging indent
paragraph.FirstLineIndent = -20;                      // Create hanging indent

// Set list size
paragraph.ListFormat.Size = 100;                      // Size as percentage (25-400)

// Set starting value (for numbered lists)
paragraph.ListFormat.StartValue = 1;                  // Start numbering from 1
```

### Placeholders
- `ListType.Numbered` → Replace with `ListType.Bulleted` or `ListType.Picture` as needed
- `1` to `8` → Valid indent level range
- `100` → Size percentage (25-400 range)
