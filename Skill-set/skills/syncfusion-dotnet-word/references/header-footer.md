# Headers & Footers

> Headers and footers — add headers/footers (odd, even, first page), page numbers with fields, borders, images, and remove headers/footers.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```

## Required usings for Windows-Specific

```csharp
using System;
using System.IO;
```

## Add Headers & Footers

### Add Default Header & Footer

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
IWSection section = document.AddSection();

// Add default header (odd pages)
IWParagraph headerPara = section.HeadersFooters.OddHeader.AddParagraph();
headerPara.AppendText("[ Default Page Header ]");

// Add default footer (odd pages)
IWParagraph footerPara = section.HeadersFooters.OddFooter.AddParagraph();
footerPara.AppendText("[ Default Page Footer ]");

// Add content to document
IWParagraph para = section.AddParagraph();
para.AppendText("AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.");
```

---

## Different First Page Header & Footer

### Set Different First Page Header/Footer

#### Common for Cross-Platform and Windows-Specific
```csharp
IWSection section = document.Sections[0];
section.PageSetup.DifferentFirstPage = true;

IWParagraph firstPageHeader = section.HeadersFooters.FirstPageHeader.AddParagraph();
firstPageHeader.AppendText("[First Page Header]");

IWParagraph firstPageFooter = section.HeadersFooters.FirstPageFooter.AddParagraph();
firstPageFooter.AppendText("[ First Page Footer ]");

IWParagraph defaultHeader = section.HeadersFooters.OddHeader.AddParagraph();
defaultHeader.AppendText("[ Default Page Header ]");

IWParagraph defaultFooter = section.HeadersFooters.OddFooter.AddParagraph();
defaultFooter.AppendText("[ Default Page Footer ]");
```

---

## Different Odd & Even Page Headers/Footers

### Set Different Headers for Odd and Even Pages

#### Common for Cross-Platform and Windows-Specific
```csharp
IWSection section = document.Sections[0];
section.PageSetup.DifferentOddAndEvenPages = true;

IWParagraph oddHeader = section.HeadersFooters.OddHeader.AddParagraph();
oddHeader.AppendText("[ Odd Page Header ]");

IWParagraph oddFooter = section.HeadersFooters.OddFooter.AddParagraph();
oddFooter.AppendText("[ Odd Page Footer ]");

IWParagraph evenHeader = section.HeadersFooters.EvenHeader.AddParagraph();
evenHeader.AppendText("[Even Page Header ]");

IWParagraph evenFooter = section.HeadersFooters.EvenFooter.AddParagraph();
evenFooter.AppendText("[ Even Page Footer ]");
```

---

## Link Headers/Footers to Previous Section

### Use Previous Section Header/Footer

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();

IWSection section1 = document.AddSection();
section1.HeadersFooters.Header.AddParagraph().AppendText("[ First Section Header ]");
section1.HeadersFooters.Footer.AddParagraph().AppendText("[ First Section Footer ]");
IWParagraph para1 = section1.AddParagraph();
para1.AppendText("First section content");
// Second section (linked to previous)
IWSection section2 = document.AddSection();
section2.HeadersFooters.Header.AddParagraph().AppendText("[ Second Section Header ]");
section2.HeadersFooters.Footer.AddParagraph().AppendText("[ Second Section Footer ]");
section2.HeadersFooters.LinkToPrevious = true; // Inherit header/footer
IWParagraph para2 = section2.AddParagraph();
para2.AppendText("Second section content");
// Third section (unlink from previous)
IWSection section3 = document.AddSection();
section3.HeadersFooters.Header.AddParagraph().AppendText("[ Third Section Header ]");
section3.HeadersFooters.Footer.AddParagraph().AppendText("[ Third Section Footer ]");
IWParagraph para3 = section3.AddParagraph();
para3.AppendText("Third section content");
```

### Options

| API | Effect |
|---|---|
| HeadersFooters.LinkToPrevious | Links **all** headers & footers |
| HeadersFooters.Header.LinkToPrevious | Links **only header** |
| HeadersFooters.Footer.LinkToPrevious | Links **only footer** |

---

## Add Page Numbers

### Add Simple Page Number

#### Common for Cross-Platform and Windows-Specific
```csharp
IWSection section = document.Sections[0];

IWParagraph footerPara = section.HeadersFooters.Footer.AddParagraph();
footerPara.AppendText("Page ");
footerPara.AppendField("Page", FieldType.FieldPage);
```

### Add Page Number with Total Pages

#### Common for Cross-Platform and Windows-Specific
```csharp
IWSection section = document.Sections[0];
section.PageSetup.PageStartingNumber = 1;
section.PageSetup.RestartPageNumbering = true;
section.PageSetup.PageNumberStyle = PageNumberStyle.Arabic;

IWParagraph footerPara = section.HeadersFooters.Footer.AddParagraph();
footerPara.ParagraphFormat.Tabs.AddTab(523f, TabJustification.Right, TabLeader.NoLeader);
footerPara.AppendText("Copyright Northwind Inc. 2001 - 2015\t");
footerPara.AppendText(" Page ");
footerPara.AppendField("CurrentPageNumber", FieldType.FieldPage);
footerPara.AppendText(" of ");
footerPara.AppendField("TotalNumberOfPages", FieldType.FieldNumPages);
```

### Page Number Field Types

#### Common for Cross-Platform and Windows-Specific
```csharp
FieldType.FieldPage      // Current page number
FieldType.FieldNumPages  // Total number of pages
FieldType.FieldDate      // Current date field
FieldType.FieldTime      // Current time field
```

### Page Number Style Options

#### Common for Cross-Platform and Windows-Specific
```csharp
PageNumberStyle.Arabic        // 1, 2, 3...
PageNumberStyle.RomanUpper    // I, II, III...
PageNumberStyle.RomanLower    // i, ii, iii...
```

---

## Add Images to Headers/Footers

### Add Logo to Header

#### Common Setup
```csharp
IWSection section = document.Sections[0];
IWParagraph headerPara = section.HeadersFooters.Header.AddParagraph();
```

#### Cross-Platform
```csharp
FileStream imageStream = new FileStream("logo.jpg", FileMode.Open, FileAccess.Read);
IWPicture picture = headerPara.AppendPicture(imageStream);
picture.Width = 50;
picture.Height = 50;

headerPara.AppendText("  Company Logo");
imageStream.Close();
```

#### Windows-Specific
```csharp
Image img = Image.FromFile("logo.jpg");
IWPicture pictureWin = headerPara.AppendPicture(img);
pictureWin.Width = 50;
pictureWin.Height = 50;
headerPara.AppendText("  Company Logo");
img.Dispose();
```
---

## Adjust Header/Footer Distance

### Set Header & Footer Distance

#### Common for Cross-Platform and Windows-Specific
```csharp
IWSection section = document.Sections[0];

section.PageSetup.HeaderDistance = 100;

section.PageSetup.FooterDistance = 100;
```

---

## Add Borders to Page

### Apply Page Borders

#### Common for Cross-Platform and Windows-Specific
```csharp
IWSection section = document.Sections[0];

section.PageSetup.Borders.BorderType = BorderStyle.Single;
section.PageSetup.Borders.Color = Color.Blue;
section.PageSetup.Borders.LineWidth = 0.75f;

section.PageSetup.Borders.Top.Space = 5f;
section.PageSetup.Borders.Bottom.Space = 5f;
section.PageSetup.Borders.Right.Space = 5f;
section.PageSetup.Borders.Left.Space = 5f;
```

### Border Style Options

#### Common for Cross-Platform and Windows-Specific
```csharp
BorderStyle.Single      // Single line
BorderStyle.Double      // Double line
BorderStyle.Dot         // Dotted line
BorderStyle.DotDash     // Dot-dash line
BorderStyle.Triple      // Triple line
```

---

## Remove Headers & Footers

### Remove All Headers and Footers

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();

foreach (WSection section in document.Sections)
{
    section.HeadersFooters.FirstPageHeader.ChildEntities.Clear();
    section.HeadersFooters.FirstPageFooter.ChildEntities.Clear();
    section.HeadersFooters.OddHeader.ChildEntities.Clear();
    section.HeadersFooters.OddFooter.ChildEntities.Clear();
    section.HeadersFooters.EvenHeader.ChildEntities.Clear();
    section.HeadersFooters.EvenFooter.ChildEntities.Clear();
}
```

### Remove Headers from Specific Section

#### Common for Cross-Platform and Windows-Specific
```csharp
IWSection section = document.Sections[0];

section.HeadersFooters.OddHeader.ChildEntities.Clear();
section.HeadersFooters.EvenHeader.ChildEntities.Clear();
section.HeadersFooters.FirstPageHeader.ChildEntities.Clear();
```

### Remove Footers from Specific Section

#### Common for Cross-Platform and Windows-Specific
```csharp
IWSection section = document.Sections[0];

section.HeadersFooters.OddFooter.ChildEntities.Clear();
section.HeadersFooters.EvenFooter.ChildEntities.Clear();
section.HeadersFooters.FirstPageFooter.ChildEntities.Clear();
```

---

## Open Existing Document and Modify Headers/Footers

### Open and Modify Headers

#### Cross-Platform
```csharp
FileStream inputStream = new FileStream("input.docx", FileMode.Open, FileAccess.Read);
WordDocument document = new WordDocument(inputStream, FormatType.Docx);

IWParagraph headerPara = document.Sections[0].HeadersFooters.Header.AddParagraph();
headerPara.AppendText("Modified Header");

MemoryStream outputStream = new MemoryStream();
document.Save(outputStream, FormatType.Docx);
document.Close();
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("input.docx");

IWParagraph headerPara = document.Sections[0].HeadersFooters.Header.AddParagraph();
headerPara.AppendText("Modified Header");

document.Save("output.docx");
document.Close();
```

---

## Practical Example: Complete Document with Header/Footer

### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
IWSection section = document.AddSection();

// Configure page setup
section.PageSetup.PageStartingNumber = 1;
section.PageSetup.PageNumberStyle = PageNumberStyle.Arabic;

// Add header with company name
IWParagraph headerPara = section.HeadersFooters.Header.AddParagraph();
headerPara.AppendText("Company Report");
headerPara.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;

// Add footer with page numbers
IWParagraph footerPara = section.HeadersFooters.Footer.AddParagraph();
footerPara.ParagraphFormat.Tabs.AddTab(523f, TabJustification.Right, TabLeader.NoLeader);
footerPara.AppendText("Copyright 2025\t");
footerPara.AppendText("Page ");
footerPara.AppendField("Page", FieldType.FieldPage);
footerPara.AppendText(" of ");
footerPara.AppendField("NumPages", FieldType.FieldNumPages);

// Add document content
IWParagraph contentPara = section.AddParagraph();
contentPara.AppendText("This is the document body content.");
contentPara.ParagraphFormat.PageBreakAfter = true;

IWParagraph contentPara2 = section.AddParagraph();
contentPara2.AppendText("This is content on the second page.");
```

---

## Placeholders
- `"{input-document}"` → Replace with `"input.docx"` or file path
- `"{output-filename}"` → Replace with `"output.docx"` or desired file path
- `"{image-file-path}"` → Replace with `"logo.jpg"` or image path
- Header/footer text like `"[ Default Page Header ]"` → Replace with actual header/footer content
- Border width values in points (0.75f = 0.75 point, 0.5f = 0.5 point)
- Tab position `523f` is in twips (1/20th of a point) for right alignment
