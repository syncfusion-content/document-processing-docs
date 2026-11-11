# Hyperlinks

> Add, retrieve, and manage hyperlinks in PowerPoint presentations. Support for web URLs, email links, file references, and internal slide navigation.

---
## Required Usings

```csharp
using Syncfusion.Presentation;
```

---
## Add Hyperlink to Shape (Internal Slide Navigation)
### Minimal Code

```csharp
ISlide slide1 = pptxDoc.Slides.Add(SlideLayoutType.Blank);
ISlide slide2 = pptxDoc.Slides.Add();

// Add a shape to the first slide
IShape shape = slide1.Shapes.AddShape(AutoShapeType.Rectangle, 100, 20, 200, 100);

// Set hyperlink to target another slide (index-based, 0 to slides count - 1)
IHyperLink hyperLink = shape.SetHyperlink("{target-slide-index}");

// Get the target slide of the hyperlink
ISlide targetSlide = hyperLink.TargetSlide;
```

### Placeholders

- `"{target-slide-index}"` → Replace with the target slide index (e.g., `"1"` for the second slide, 0-based)
- `AutoShapeType.Rectangle` → Replace with desired shape type
- `100, 20, 200, 100` → Replace with position (x, y) and size (width, height) values

---

## Add Hyperlink to Text (Web URL)

### Minimal Code

```csharp

// Add a shape
IShape shape = slide.Shapes.AddShape(AutoShapeType.Rectangle, 100, 20, 200, 100);

// Add paragraph and text
IParagraph paragraph = shape.TextBody.AddParagraph();
paragraph.Text = "{link-text}";

// Set web URL hyperlink to text
IHyperLink hyperLink = paragraph.TextParts[0].SetHyperlink("{url}");

```

### Placeholders

- `"{link-text}"` → Replace with the text to display (e.g., `"Syncfusion"`)
- `"{url}"` → Replace with the web URL (e.g., `"http://www.syncfusion.com"`)
- `100, 20, 200, 100` → Replace with shape position and size values

---

## Add Email Hyperlink to Picture

### Minimal Code

```csharp

// Add a picture to the slide
using (FileStream pictureStream = new FileStream("Image.png", FileMode.Open))
{
    IPicture picture = slide.Pictures.AddPicture(pictureStream, 0, 0, 250, 250);
    
    // Set email hyperlink to the picture
    IHyperLink hyperLink = (picture as IShape).SetHyperlink("mailto:{email-address}");
}

```

### Placeholders

- `"Image.png"` → Replace with your image file path
- `"{email-address}"` → Replace with the email address (e.g., `"sales@syncfusion.com"`)
- `0, 0, 250, 250` → Replace with picture position (x, y) and size (width, height)

---

## Add File Hyperlink to Picture

### Minimal Code

```csharp


// Add a picture to the slide
using (FileStream pictureStream = new FileStream("Image.png", FileMode.Open))
{
    IPicture picture = slide.Pictures.AddPicture(pictureStream, 0, 0, 250, 250);
    
    // Set file path as hyperlink to the picture
    IHyperLink hyperLink = (picture as IShape).SetHyperlink("{file-path}");
}

```

### Placeholders

- `"Image.png"` → Replace with your image file path
- `"{file-path}"` → Replace with the target file path (e.g., `"WordDocument.docx"`)
- Note: Use absolute paths to avoid "file not found" errors when sharing presentations

---

## Get Hyperlink Details from Shape

### Minimal Code

```csharp

// Get hyperlink from shape
IHyperLink hyperlink = shape.Hyperlink;

// Get hyperlink details
HyperLinkType hyperlinkType = hyperlink.Action;
ISlide targetSlide = hyperlink.TargetSlide;
string url = hyperlink.Url;
string screenTip = hyperlink.ScreenTip;
```

### Placeholders

- Properties accessed:
  - `hyperlink.Action` → Type of hyperlink action
  - `hyperlink.TargetSlide` → Target slide for internal navigation
  - `hyperlink.Url` → URL address of the hyperlink
  - `hyperlink.ScreenTip` → Screen tip text

---

## Get Hyperlink Details from Text

### Minimal Code

```csharp

// Get the first paragraph
IParagraph paragraph = shape.TextBody.Paragraphs[0];

// Get the first text part
ITextPart textPart = paragraph.TextParts[0];

// Get hyperlink from text
IHyperLink hyperlink = textPart.Hyperlink;

// Get hyperlink details
HyperLinkType hyperlinkType = hyperlink.Action;
ISlide targetSlide = hyperlink.TargetSlide;
string url = hyperlink.Url;
string screenTip = hyperlink.ScreenTip;
```

### Placeholders

- `shape.TextBody.Paragraphs[0]` → Replace index to access different paragraphs
- `paragraph.TextParts[0]` → Replace index to access different text parts

---

## Remove Hyperlink from Shape

### Minimal Code

```csharp
// Open an existing presentation
// Remove the hyperlink from the shape
shape.RemoveHyperlink();
```

### Placeholders

- `shape` → refers to shape in slide

---

## Remove Hyperlink from Text

### Minimal Code

```csharp
// Open an existing presentation
// Get the first paragraph
IParagraph paragraph = shape.TextBody.Paragraphs[0];

// Get the first text part
ITextPart textPart = paragraph.TextParts[0];

// Remove the hyperlink from the text
textPart.RemoveHyperLink();
```

### Placeholders

- `shape.TextBody.Paragraphs[0]` → Replace index to access different paragraphs
- `paragraph.TextParts[0]` → Replace index to access different text parts

---
