# Working with Notes Slides

> Adding, editing, and removing speaker notes in PowerPoint presentations. Notes appear in Presenter View and provide hints and key points for the speaker.

---

## Required Usings

```csharp
using Syncfusion.Presentation;
```
---

## Add Notes to Slide

### Minimal Code
```csharp
INotesSlide notesSlide = slide.AddNotesSlide();
notesSlide.NotesTextBody.AddParagraph("Notes content");
```

### Full Example
```csharp
// Creates a Presentation without slides
IPresentation pptxDoc = Presentation.Create();
// Adds new slide with blank slide layout type
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
// Adds new notes slide in the specified slide
INotesSlide notesSlide = slide.AddNotesSlide();
// Adds text content into the Notes Slide
notesSlide.NotesTextBody.AddParagraph("Notes content");
// Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
// Closes the Presentation
pptxDoc.Close();
```


### Placeholders
- `"Notes content"` → Replace with desired notes text
- `OutputFileName` → Replace with desired output filename

---

## Add Text with Formatting to Notes

### Minimal Code
```csharp
IParagraph paragraph = notesSlide.NotesTextBody.AddParagraph();
ITextPart textPart = paragraph.AddTextPart();
textPart.Text = "Your notes here";
textPart.Font.Bold = true;
textPart.Font.FontName = "Times New Roman";
textPart.Font.FontSize = 20;
```

### Full Example
```csharp
// Creates a Presentation without slides
IPresentation pptxDoc = Presentation.Create();
// Adds new slide with blank slide layout type
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
// Adds new notes slide in the specified slide
INotesSlide notesSlide = slide.AddNotesSlide();
// Adds Paragraph into the text body
IParagraph paragraph = notesSlide.NotesTextBody.AddParagraph();
// Adds text part into the Paragraph
ITextPart textPart = paragraph.AddTextPart();
textPart.Text = "The notes slide represents the contents and key notes of the corresponding slide. It is more useful when we use Presenter View while presenting the seminars through SlideShow.";
// Sets Bold format for text content
textPart.Font.Bold = true;
// Sets font style using font name
textPart.Font.FontName = "Times New Roman";
// Sets text content size using FontSize property
textPart.Font.FontSize = 20;
// Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
// Closes the Presentation
pptxDoc.Close();
```

### Text Formatting Options
```csharp
textPart.Font.Bold = true;                          // Bold text
textPart.Font.Italic = true;                        // Italic text
textPart.Font.Underline = TextUnderlineType.Single; // Underlined text
textPart.Font.FontName = "Times New Roman";         // Font name
textPart.Font.FontSize = 20;                        // Font size in points
textPart.Font.Color = ColorObject.Blue;             // Text color
```

### Placeholders
- `"Your notes here"` → Replace with desired notes text
- `"Times New Roman"` → Replace with desired font name
- `20` → Replace with desired font size
- `OutputFileName` → Replace with desired output filename

---

## Add Numbered List to Notes

### Minimal Code
```csharp
IParagraph paragraph = notesSlide.NotesTextBody.AddParagraph("List item text");
paragraph.ListFormat.Type = ListType.Numbered;
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod;
paragraph.ListFormat.StartValue = 1;
paragraph.IndentLevelNumber = 1;
paragraph.FirstLineIndent = -20;
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
- `"List item text"` → Replace with desired list item text
- `1` → Replace with desired starting number
- `NumberedListStyle.ArabicPeriod` → Replace with desired numbering style
- `OutputFileName` → Replace with desired output filename

---

## Add Bulleted List to Notes

### Minimal Code
```csharp
IParagraph paragraph = notesSlide.NotesTextBody.AddParagraph("Bullet item text");
paragraph.ListFormat.Type = ListType.Bulleted;
paragraph.ListFormat.BulletCharacter = Convert.ToChar(183);
paragraph.ListFormat.FontName = "Symbol";
paragraph.IndentLevelNumber = 1;
paragraph.FirstLineIndent = -20;
```

### Bullet Character Options
```csharp
paragraph.ListFormat.BulletCharacter = Convert.ToChar(183);   // Middle dot •
paragraph.ListFormat.BulletCharacter = Convert.ToChar(111);   // Circle ○
paragraph.ListFormat.BulletCharacter = Convert.ToChar(168);   // Diamond ◆
paragraph.ListFormat.BulletCharacter = Convert.ToChar(167);   // Section mark §
paragraph.ListFormat.BulletCharacter = Convert.ToChar(45);    // Dash -
```

### Placeholders
- `"Bullet item text"` → Replace with desired bullet item text
- `Convert.ToChar(183)` → Replace with desired bullet character code
- `"Symbol"` → Replace with desired font name
- `100` → Replace with desired bullet size (25-400)
- `OutputFileName` → Replace with desired output filename

---

## Access Notes from Existing Slide

### Minimal Code
```csharp
ISlide slide = pptxDoc.Slides[0];
INotesSlide notesSlide = slide.NotesSlide;
string notesText = notesSlide.NotesTextBody.Text;
```

### Placeholders
- `inputFileName` → Replace with actual input file path
- `[0]` → Replace with desired slide index
- `OutputFileName` → Replace with desired output filename

---

## Remove Notes from Slide

### Minimal Code
```csharp
ISlide slide = pptxDoc.Slides[0] as ISlide;
slide.RemoveNotesSlide();
```

### Placeholders
- `inputFileName` → Replace with actual input file path
- `[0]` → Replace with desired slide index
- `OutputFileName` → Replace with desired output filename

---

## Edit Existing Notes

### Minimal Code
```csharp
INotesSlide notesSlide = slide.NotesSlide;
IParagraph paragraph = notesSlide.NotesTextBody.Paragraphs[0];
paragraph.TextParts[0].Text = "Modified notes";
```

### Placeholders
- `inputFileName` → Replace with actual input file path
- `[0]` → Replace with desired paragraph/text part index
- `"Modified notes"` → Replace with desired new notes text
- `OutputFileName` → Replace with desired output filename

---

## Check if Notes Exist

### Minimal Code
```csharp
ISlide slide = pptxDoc.Slides[0];
INotesSlide notesSlide = slide.NotesSlide;
bool hasNotes = notesSlide != null;
```

### Placeholders
- `inputFileName` → Replace with actual input file path

---

## Notes TextBody Properties Reference

### Accessing Notes Content
```csharp
string allText = notesSlide.NotesTextBody.Text;           // Get all notes text
int paragraphCount = notesSlide.NotesTextBody.Paragraphs.Count;  // Get paragraph count
IParagraph paragraph = notesSlide.NotesTextBody.Paragraphs[0];   // Get specific paragraph
```

### Adding Content to Notes
```csharp
notesSlide.NotesTextBody.AddParagraph("Text");                   // Add paragraph with text
IParagraph para = notesSlide.NotesTextBody.AddParagraph();       // Add empty paragraph
ITextPart textPart = para.AddTextPart();                         // Add text part
```

### Iterating Through Notes
```csharp
foreach (IParagraph paragraph in notesSlide.NotesTextBody.Paragraphs)
{
    foreach (ITextPart textPart in paragraph.TextParts)
    {
        string text = textPart.Text;
        // Process text
    }
}
```

### Clearing Notes
```csharp
// Remove all paragraphs except the first one (which contains placeholders)
while (notesSlide.NotesTextBody.Paragraphs.Count > 1)
{
    notesSlide.NotesTextBody.Paragraphs.Remove(
        notesSlide.NotesTextBody.Paragraphs[1]);
}
```
