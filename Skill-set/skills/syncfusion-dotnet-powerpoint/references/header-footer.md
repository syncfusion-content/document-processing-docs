# Working with Headers and Footers

> Adding, editing, and removing headers and footers in PowerPoint presentations. Support for slide footers, headers in notes slides, date/time formatting, and slide numbers.

---

## Required Usings

```csharp
using Syncfusion.Presentation;
```

---

## Add Footer to Slide

### Minimal Code
```csharp
slide.HeadersFooters.Footer.Visible = true;
slide.HeadersFooters.Footer.Text = "Footer content";
```

### Placeholders
- `"Footer content"` → Replace with desired footer text

---

## Add Date and Time

### Minimal Code
```csharp
slide.HeadersFooters.DateAndTime.Visible = true;
slide.HeadersFooters.DateAndTime.Format = DateTimeFormatType.DateTimehmmssAMPM;
```


### Date and Time Format Options
```csharp
DateTimeFormatType.DateTimehmmssAMPM           // Date/Time with h:mm:ss AM/PM
DateTimeFormatType.DateTimeMMddyyhmmAMPM       // MM/dd/yy h:mm AM/PM
DateTimeFormatType.DateTimeMMMyy               // MMM yy
DateTimeFormatType.DateTimeddddMMMMddyyyy      // dddd, MMMM dd, yyyy
```

### Placeholders
- `DateTimeFormatType.DateTimehmmssAMPM` → Replace with desired date/time format

---

## Add Slide Number

### Minimal Code
```csharp
slide.HeadersFooters.SlideNumber.Visible = true;
```

---

## Add Headers and Footers to Master and Layout Slides

### Minimal Code
```csharp
IMasterSlide masterSlide = pptxDoc.Masters[0];
masterSlide.HeadersFooters.Footer.Visible = true;
masterSlide.HeadersFooters.Footer.Text = "Master Slide Footer";
```

### Placeholders
- `inputFileName` → Replace with actual input file path
- `"Master Slide Footer"` → Replace with desired master footer text
- `"Layout slide Footer"` → Replace with desired layout footer text
- `"Sample.pptx"` → Replace with desired output filename

---

## Add Headers and Footers to Notes Slide

### Minimal Code
```csharp
INotesSlide notesSlide = slide.AddNotesSlide();
notesSlide.HeadersFooters.Header.Visible = true;
notesSlide.HeadersFooters.Header.Text = "Header text";
notesSlide.HeadersFooters.Footer.Visible = true;
notesSlide.HeadersFooters.Footer.Text = "Footer text";
```

### Placeholders
- `"Header is added to Notes slide"` → Replace with desired header text
- `"Notes slide Footer"` → Replace with desired footer text
- `DateTimeFormatType.DateTimeMMMyy` → Replace with desired date/time format
- `"Sample.pptx"` → Replace with desired output filename

---

## Edit Footer Text

### Minimal Code
```csharp
slide.HeadersFooters.Footer.Text = "Modified footer content";
```

### Placeholders
- `inputFileName` → Replace with actual input file path
- `"Footer content modified"` → Replace with desired new footer text
- `"Sample.pptx"` → Replace with desired output filename

---

## Edit Header Text in Notes Slide

### Minimal Code
```csharp
INotesSlide notesSlide = pptxDoc.Slides[0].NotesSlide;
notesSlide.HeadersFooters.Header.Text = "Modified header content";
```

### Placeholders
- `"Header.pptx"` → Replace with actual input file path
- `[0]` → Replace with desired slide index
- `"Header content is modified"` → Replace with desired new header text
- `"Sample.pptx"` → Replace with desired output filename

---

## Modify Date and Time Format

### Minimal Code
```csharp
slide.HeadersFooters.DateAndTime.Format = DateTimeFormatType.DateTimeddddMMMMddyyyy;
```

### Available Date/Time Formats
```csharp
DateTimeFormatType.DateTimehmmssAMPM              // h:mm:ss AM/PM
DateTimeFormatType.DateTimeMMddyyhmmAMPM         // MM/dd/yy h:mm AM/PM
DateTimeFormatType.DateTimeMMMyy                  // MMM yy
DateTimeFormatType.DateTimeddddMMMMddyyyy        // dddd, MMMM dd, yyyy
```

### Placeholders
- `inputFileName` → Replace with actual input file path
- `[0]` → Replace with desired slide index
- `DateTimeFormatType.DateTimeddddMMMMddyyyy` → Replace with desired date/time format
- `"Sample.pptx"` → Replace with desired output filename

---

## Modify Footer Font

### Minimal Code
```csharp
foreach(IShape shape in slide.Shapes)
{
    if (shape.SlideItemType == SlideItemType.Placeholder && 
        shape.PlaceholderFormat.Type == PlaceholderType.Footer)
    {
        shape.TextBody.Paragraphs[0].Font.FontName = "Verdana";
        shape.TextBody.Paragraphs[0].Font.FontSize = 18;
    }
}
```

### Placeholders
- `inputFileName` → Replace with actual input file path
- `[0]` → Replace with desired slide index
- `"Verdana"` → Replace with desired font name
- `18` → Replace with desired font size
- `"Sample.pptx"` → Replace with desired output filename

---

## Remove Headers and Footers from Title Slides

### Minimal Code
```csharp
if (slide.LayoutSlide.LayoutType == SlideLayoutType.Title)
{
    slide.HeadersFooters.DateAndTime.Visible = false;
    slide.HeadersFooters.Footer.Visible = false;
    slide.HeadersFooters.SlideNumber.Visible = false;
}
```

---

## Headers and Footers Properties Reference

### Footer Properties
```csharp
slide.HeadersFooters.Footer.Visible = true;           // Show/hide footer
slide.HeadersFooters.Footer.Text = "Footer text";     // Set footer text
```

### Header Properties (Notes Slide only)
```csharp
notesSlide.HeadersFooters.Header.Visible = true;      // Show/hide header
notesSlide.HeadersFooters.Header.Text = "Header text";// Set header text
```

### Date and Time Properties
```csharp
slide.HeadersFooters.DateAndTime.Visible = true;      // Show/hide date/time
slide.HeadersFooters.DateAndTime.Format = format;     // Set date/time format
```

### Slide Number Properties
```csharp
slide.HeadersFooters.SlideNumber.Visible = true;      // Show/hide slide number
```

### Checking Placeholder Type
```csharp
if (shape.PlaceholderFormat.Type == PlaceholderType.Footer)      // Footer placeholder
if (shape.PlaceholderFormat.Type == PlaceholderType.Header)      // Header placeholder
if (shape.PlaceholderFormat.Type == PlaceholderType.SlideNumber)  // Slide number placeholder
```
