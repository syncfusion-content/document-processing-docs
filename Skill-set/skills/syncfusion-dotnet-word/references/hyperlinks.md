# Hyperlinks

> Create and manage hyperlinks — web links, email links, file links, bookmark links, image hyperlinks, and modify existing hyperlink URLs.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```

## Required usings for Windows-Specific

```csharp
using System.Drawing;
using System;
using System.IO;
```

## Web Hyperlink

Create a hyperlink to an external website or web address.
### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();
var para = section.AddParagraph();
para.AppendText("Web Hyperlink: ");
para = section.AddParagraph();
// Append web hyperlink to the paragraph
IWField field = para.AppendHyperlink("http://www.syncfusion.com", "Syncfusion", HyperlinkType.WebLink);
doc.Save(outputPath);
doc.Close();
```

### Placeholders
- `"http://www.syncfusion.com"` → Replace with `"{web-url}"`
- `"Syncfusion"` → Replace with `"{display-text}"`

---

## Email Hyperlink

Create a hyperlink that opens an email client to send an email to a specified address.
### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();
var para = section.AddParagraph();
para.AppendText("Email Hyperlink: ");
para = section.AddParagraph();
// Append email hyperlink to the paragraph
para.AppendHyperlink("mailto:sales@syncfusion.com", "Sales", HyperlinkType.EMailLink);
doc.Save(outputPath);
doc.Close();
```

### Placeholders
- `"mailto:sales@syncfusion.com"` → Replace with `"mailto:{email-address}"`
- `"Sales"` → Replace with `"{display-text}"`

### Email with Subject and CC/BCC

#### Common for Cross-Platform and Windows-Specific
```csharp
// Email with subject
para.AppendHyperlink("mailto:sales@syncfusion.com?subject=Hello", "Send Email", HyperlinkType.EMailLink);

// Email with subject and body
para.AppendHyperlink("mailto:sales@syncfusion.com?subject=Hello&body=Welcome", "Send Email", HyperlinkType.EMailLink);
```

---

## File Hyperlink

Create a hyperlink to a file that can be opened when clicked.
### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();
var para = section.AddParagraph();
para.AppendText("File Hyperlinks: ");
para = section.AddParagraph();
// Append file hyperlink to the paragraph
para.AppendHyperlink(@"Template.docx", "File", HyperlinkType.FileLink);
doc.Save(outputPath);
doc.Close();
```

### Placeholders
- `@"Template.docx"` → Replace with `@"{file-path}"`
- `"File"` → Replace with `"{display-text}"`

### File with Full Path

#### Common for Cross-Platform and Windows-Specific
```csharp
// Absolute file path
para.AppendHyperlink(@"C:\Documents\Report.pdf", "Open Report", HyperlinkType.FileLink);

// Network path
para.AppendHyperlink(@"\\server\share\Document.docx", "Network File", HyperlinkType.FileLink);
```

---

## Bookmark Hyperlink

Create a hyperlink that navigates to a bookmark within the same document or another document.

### Bookmark in Same Document

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();
var para = section.AddParagraph();

// Create a bookmark
para.AppendBookmarkStart("Introduction");
para.AppendText("Introduction Section");
para.AppendBookmarkEnd("Introduction");

para = section.AddParagraph();
para.AppendText("Go to section: ");
// Create hyperlink to the bookmark
para.AppendHyperlink("Introduction", "Bookmark", HyperlinkType.Bookmark);

doc.Save(outputPath);
doc.Close();
```

### Bookmark in External Document

#### Common for Cross-Platform and Windows-Specific
```csharp
// Link to bookmark in another document
para.AppendHyperlink("ExternalDocument.docx#BookmarkName", "External Bookmark", HyperlinkType.Bookmark);
```

### Placeholders
- `"Introduction"` → Replace with `"{bookmark-name}"`
- `"Bookmark"` → Replace with `"{display-text}"`
- `"ExternalDocument.docx#BookmarkName"` → Replace with `"{file}#{bookmark-name}"`

---

## Image Hyperlink

Use an image as the display content for a hyperlink instead of text.
### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();
var para = section.AddParagraph();
para.AppendText("Image Hyperlink");
para = section.AddParagraph();
// Create and load an image
WPicture picture = new WPicture(doc);
```
### Cross-Platform
```csharp
var imageStream = new FileStream(@"Image.png", FileMode.Open, FileAccess.Read);
picture.LoadImage(imageStream);
imageStream.Close();
```
### Windows-Specific
```csharp
picture.LoadImage(Image.FromFile("Image.png"));
```
### Common for Cross-Platform and Windows-Specific
```csharp
// Append image as hyperlink display content
para.AppendHyperlink("http://www.syncfusion.com", picture, HyperlinkType.WebLink);

doc.Save(outputPath);
doc.Close();
```

### Placeholders
- `@"Image.png"` → Replace with `@"{image-path}"`
- `"http://www.syncfusion.com"` → Replace with `"{hyperlink-url}"`

### Image Hyperlink to File

#### Common for Cross-Platform and Windows-Specific
```csharp
WPicture picture = new WPicture(doc);
```
#### Cross-Platform
```csharp
var imageStream = new FileStream(@"icon.png", FileMode.Open, FileAccess.Read);
picture.LoadImage(imageStream);
imageStream.Close();
```
#### Windows-Specific
```csharp
picture.LoadImage(Image.FromFile("icon.png"));
```
#### Common for Cross-Platform and Windows-Specific
```csharp
// Create file hyperlink with image
para.AppendHyperlink(@"Document.pdf", picture, HyperlinkType.FileLink);
```

---

## Modify Hyperlink

Locate and modify the URL or display text of an existing hyperlink in a document.

### Modify URL in Existing Document

#### Common for Cross-Platform and Windows-Specific
```csharp
var fileStream = new FileStream(@"Sample.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(fileStream, FormatType.Docx);
    
var para = doc.LastParagraph;
// Iterate through paragraph items to find hyperlinks
foreach (ParagraphItem item in para.ChildEntities)
{
    if (item is WField field && field.FieldType == FieldType.FieldHyperlink)
    {
        // Get the hyperlink field
        Hyperlink link = new Hyperlink(field);
        
        if (link.Type == HyperlinkType.WebLink)
        {
            // Modify the URL of the hyperlink
            link.Uri = "http://www.google.com";
            link.TextToDisplay = "Google";
            break;
        }
    }
}
    
doc.Save(outputPath);
fileStream.Close();
doc.Close();
```

### Modify Hyperlink in Document Body

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument(fileStream, FormatType.Docx);

// Iterate through all sections
foreach (WSection section in doc.Sections)
{
    // Iterate through body items
    foreach (var bodyItem in section.Body.ChildEntities)
    {
        if (bodyItem is WParagraph para)
        {
            foreach (ParagraphItem item in para.ChildEntities)
            {
                if (item is WField field && field.FieldType == FieldType.FieldHyperlink)
                {
                    Hyperlink link = new Hyperlink(field);
                    if (link.Uri.Contains("oldurl"))
                    {
                        link.Uri = "http://www.newurl.com";
                        link.TextToDisplay = "New Link";
                    }

                    //Optional: Retrieve other hyperlink properties
                    if (link.Type == HyperlinkType.Bookmark)
                    {
                        // Get or set bookmark name
                        string bookmarkName = link.BookmarkName;
                        link.BookmarkName = "NewBookmarkName";
                        // Get local reference (anchor)
                        string localReference = link.LocalReference;
                    }
                    else if (link.Type == HyperlinkType.FileLink)
                    {
                        // Get or set file path
                        string filePath = link.FilePath;
                        link.FilePath = @"Template.pdf";
                    }
                    else if (link.Type == HyperlinkType.WebLink && link.PictureToDisplay != null)
                    {
                        // Image hyperlink (Picture is used as display content)
   
                        // Get or set picture used for hyperlink display
                        WPicture picture = link.PictureToDisplay;
                    }
                }
            }
        }
    }
}
doc.Close();
```

### Placeholders
- `@"Sample.docx"` → Replace with `@"{input-file-path}"`
- `"http://www.google.com"` → Replace with `"{new-url}"`
- `"Google"` → Replace with `"{new-display-text}"`
- `"oldurl"` → Replace with `"{search-url-pattern}"`
- `"NewBookmarkName"` → Replace with `"{new-bookmark-name}"`
- `@"Template.pdf"` → Replace with `@"{new-file-path}"`

---

## Find All Hyperlinks

Traverse the document to find and collect all hyperlinks.

### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument(fileStream, FormatType.Docx);

List<Hyperlink> allHyperlinks = new List<Hyperlink>();

foreach (WSection section in doc.Sections)
{
    foreach (var bodyItem in section.Body.ChildEntities)
    {
        if (bodyItem is WParagraph para)
        {
            foreach (ParagraphItem item in para.ChildEntities)
            {
                if (item is WField field && field.FieldType == FieldType.FieldHyperlink)
                {
                    Hyperlink link = new Hyperlink(field);
                    allHyperlinks.Add(link);
                }
            }
        }
    }
}

// Display all hyperlinks
foreach (var link in allHyperlinks)
{
    Console.WriteLine($"URL: {link.Uri}, Display Text: {link.TextToDisplay}");
}
doc.Close();
```

---

## Remove Hyperlink

Delete a hyperlink while preserving the display text.
### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument(fileStream, FormatType.Docx);

var para = doc.LastParagraph;
foreach (ParagraphItem item in para.ChildEntities)
{
    if (item is WField field && field.FieldType == FieldType.FieldHyperlink)
    {
        Hyperlink link = new Hyperlink(field);
        // Remove the hyperlink field
        para.ChildEntities.Remove(field);
        break;
    }
}

doc.Save(outputPath);
doc.Close();
```

---

## Complete Example: Hyperlink Operations

### Full Example

#### Common for Cross-Platform and Windows-Specific
```csharp
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "HyperlinkOperations.docx");

var doc = new WordDocument();
var section = doc.AddSection();
section.PageSetup.Margins.All = 72f;

// Add title
var title = section.AddParagraph();
title.AppendText("Hyperlink Operations Demo");
title.ApplyStyle(BuiltinStyle.Heading1);
section.AddParagraph();

// Web hyperlink
var para = section.AddParagraph();
para.AppendText("1. Web Hyperlink: ");
para.AppendHyperlink("http://www.syncfusion.com", "Visit Syncfusion", HyperlinkType.WebLink);
section.AddParagraph();

// Email hyperlink
para = section.AddParagraph();
para.AppendText("2. Email Hyperlink: ");
para.AppendHyperlink("mailto:support@syncfusion.com", "Send Email", HyperlinkType.EMailLink);
section.AddParagraph();

// Bookmark
para = section.AddParagraph();
para.AppendBookmarkStart("SectionA");
para.AppendText("Section A - Content");
para.AppendBookmarkEnd("SectionA");
section.AddParagraph();

para = section.AddParagraph();
para.AppendText("3. Bookmark Hyperlink: ");
para.AppendHyperlink("SectionA", "Go to Section A", HyperlinkType.Bookmark);
section.AddParagraph();

// Image hyperlink
para = section.AddParagraph();
para.AppendText("4. Image Hyperlink: ");
WPicture picture = new WPicture(doc);
```
#### Cross-Platform
```csharp
var imageStream = new FileStream(@"image.jpg", FileMode.Open, FileAccess.Read);
picture.LoadImage(imageStream);
imageStream.Close();
```
#### Windows-Specific
```csharp
picture.LoadImage(Image.FromFile("Image.png"));
para.AppendHyperlink("http://www.example.com", picture, HyperlinkType.WebLink);
```
#### Common for Cross-Platform and Windows-Specific
```csharp
doc.Save(outputPath);
doc.Close();
Console.WriteLine($"SUCCESS: {outputPath}");
```

---

