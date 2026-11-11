# Images

## Overview
Insert images into markdown documents using URLs or byte arrays with the MdPicture class. Supports alternative text, multiple image formats, and base64 encoding.

## MdPicture Class

### Properties
```csharp
public class MdPicture : IMdInline
{
    public string Url { get; set; }           // Image URL or path
    public string AltText { get; set; } // Alt text for accessibility
    public byte[] ImageBytes { get; set; }    // Image data as bytes
	public string ImageFormat { get; set; }    // Image format
}
```

## Creating Images

### Image from URL
```csharp
MdParagraph para = markdown.AddParagraph();
MdPicture image = new MdPicture();
para.Inlines.Add(image);
image.Url = "https://example.com/images/logo.png";
image.AltText = "Company Logo";

// Output: ![Company Logo](https://example.com/images/logo.png)
```

### Image from Relative Path
```csharp
MdParagraph para = markdown.AddParagraph();
MdPicture image = new MdPicture();
para.Inlines.Add(image);
image.Url = "./images/diagram.png";
image.AltText = "System Diagram";

// Output: ![System Diagram](./images/diagram.png)
```

### Image from Local File Path
```csharp
MdParagraph para = markdown.AddParagraph();
MdPicture image = new MdPicture();
para.Inlines.Add(image);
image.Url = "C:\\Images\\photo.jpg";
image.AltText = "Photo";

// Output: ![Photo](C:\Images\photo.jpg)
```

### Image without Alt Text
```csharp
MdPicture image = new MdPicture();
para.Inlines.Add(image);
image.Url = "https://example.com/icon.png";
// AltText is optional

// Output: ![](https://example.com/icon.png)
```

## Working with Image Bytes

### Load Image from File
```csharp

byte[] imageBytes = File.ReadAllBytes("C:\\Images\\photo.jpg");

MdParagraph para = markdown.AddParagraph();
MdPicture image = new MdPicture();
para.Inlines.Add(image);
image.ImageBytes = imageBytes;
image.AltText = "Photo from file";

// The library will encode as base64 in markdown output
```

### Create Image from Memory
```csharp
// Assume imageData is byte array from memory, network, or database
byte[] imageData = GetImageFromSource();

MdPicture image = new MdPicture();
para.Inlines.Add(image);
image.ImageBytes = imageData;
image.AltText = "Dynamic image";
```

### Base64 Encoded Image
When using ImageBytes, the markdown output contains a base64-encoded data URI:
```markdown
![Photo](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...)
```

## Supported Image Formats

Common formats supported:
- PNG (`.png`)
- JPEG (`.jpg`, `.jpeg`)
- GIF (`.gif`)
- BMP (`.bmp`)
- SVG (`.svg`)
- WebP (`.webp`)

## Practical Examples

### Documentation with Screenshots
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Installation Guide";

// Step 1
MdParagraph step1 = doc.AddParagraph();
step1.ApplyParagraphStyle("Heading 2");
step1.AddTextRange().Text = "Step 1: Download";

MdParagraph desc1 = doc.AddParagraph();
desc1.AddTextRange().Text = "Download the installer from our website:";

MdParagraph img1 = doc.AddParagraph();
MdPicture screenshot1 = new MdPicture();
img1.Inlines.Add(screenshot1);
screenshot1.Url = "./images/download-page.png";
screenshot1.AltText = "Download page screenshot";

// Step 2
MdParagraph step2 = doc.AddParagraph();
step2.ApplyParagraphStyle("Heading 2");
step2.AddTextRange().Text = "Step 2: Install";

MdParagraph desc2 = doc.AddParagraph();
desc2.AddTextRange().Text = "Run the installer:";

MdParagraph img2 = doc.AddParagraph();
MdPicture screenshot2 = new MdPicture();
img2.Inlines.Add(screenshot2);
screenshot2.Url = "./images/installer.png";
screenshot2.AltText = "Installer window";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Product Catalog
```csharp
MarkdownDocument doc = new MarkdownDocument();

string[][] products = {
    new[] { "Widget Pro", "./images/widget.png", "High-performance widget" },
    new[] { "Gadget Plus", "./images/gadget.png", "Multi-function gadget" },
    new[] { "Tool Master", "./images/tool.png", "Professional tool" }
};

foreach (string[] product in products)
{
    // Product name
    MdParagraph name = doc.AddParagraph();
    name.ApplyParagraphStyle("Heading 3");
    name.AddTextRange().Text = product[0];
    
    // Product image
    MdParagraph imgPara = doc.AddParagraph();
    MdPicture image = new MdPicture();
    imgPara.Inlines.Add(image);
    image.Url = product[1];
    image.AltText = product[0];
    
    // Description
    MdParagraph desc = doc.AddParagraph();
    desc.AddTextRange().Text = product[2];
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Image Gallery
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Gallery title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Photo Gallery";

string[] imageUrls = {
    "https://example.com/gallery/photo1.jpg",
    "https://example.com/gallery/photo2.jpg",
    "https://example.com/gallery/photo3.jpg"
};

for (int i = 0; i < imageUrls.Length; i++)
{
    MdParagraph para = doc.AddParagraph();
    MdPicture image = new MdPicture();
    para.Inlines.Add(image);
    image.Url = imageUrls[i];
    image.AltText = $"Photo {i + 1}";
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Technical Diagrams
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Architecture section
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "System Architecture";

MdParagraph intro = doc.AddParagraph();
intro.AddTextRange().Text = "The system consists of three main components:";

// Architecture diagram
MdParagraph diagram = doc.AddParagraph();
MdPicture archImage = new MdPicture();
diagram.Inlines.Add(archImage);
archImage.Url = "./diagrams/architecture.svg";
archImage.AltText = "System architecture diagram";

// Component diagram
MdParagraph compTitle = doc.AddParagraph();
compTitle.ApplyParagraphStyle("Heading 2");
compTitle.AddTextRange().Text = "Component Interaction";

MdParagraph compDiagram = doc.AddParagraph();
MdPicture compImage = new MdPicture();
compDiagram.Inlines.Add(compImage);
compImage.Url = "./diagrams/components.svg";
compImage.AltText = "Component interaction diagram";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Embedding Image with Caption
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Image
MdParagraph imgPara = doc.AddParagraph();
MdPicture image = new MdPicture();
imgPara.Inlines.Add(image);
image.Url = "./images/chart.png";
image.AltText = "Sales chart";

// Caption
MdParagraph caption = doc.AddParagraph();
MdTextRange captionText = caption.AddTextRange();
captionText.Text = "Figure 1: Annual sales growth";
captionText.TextFormat.Italic = true;

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Images in Lists

### Bulleted List with Images
```csharp
MarkdownDocument doc = new MarkdownDocument();

MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "Available Icons";

string[] icons = { "home", "settings", "user", "search" };

    foreach (string icon in icons)
    {
        MdParagraph item = doc.AddParagraph();
        item.ListFormat = new MdListFormat();
        item.ListFormat.IsNumbered = false;
        item.ListFormat.ListLevel = 0;
        item.ListFormat.ListValue = "- ";
        item.AddTextRange().Text = $"{icon}: ";
        MdPicture image = new MdPicture();
        item.Inlines.Add(image);
        image.Url = $"./icons/{icon}.png";
        image.AltText = $"{icon} icon";
    }

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// ## Available Icons
// - home: ![home icon](./icons/home.png)
// - settings: ![settings icon](./icons/settings.png)
// - user: ![user icon](./icons/user.png)
// - search: ![search icon](./icons/search.png)
```

### Numbered Steps with Images
```csharp
string[] steps = { "Login screen", "Dashboard", "Settings panel" };
string[] images = { "./screens/login.png", "./screens/dashboard.png", "./screens/settings.png" };

    for (int i = 0; i < steps.Length; i++)
    {
        MdParagraph item = markdown.AddParagraph();
        item.ListFormat = new MdListFormat();
        item.ListFormat.IsNumbered = true;
        item.ListFormat.ListLevel = 0;
        item.ListFormat.NumberedListMarker = "1.";
        item.ListFormat.ListValue = (i + 1).ToString() + ". ";
        item.AddTextRange().Text = steps[i] + ": ";
        MdPicture image = new MdPicture();
        item.Inlines.Add(image);
        image.Url = images[i];
        image.AltText = steps[i];
    }
```

## Images in Tables

### Product Table with Images
```csharp
MarkdownDocument doc = new MarkdownDocument();
MdTable table = doc.AddTable();

// Header
    MdTableRow header = table.AddTableRow();
    header.AddTableCell().Items.Add(new MdTextRange { Text = "Product" });
    header.AddTableCell().Items.Add(new MdTextRange { Text = "Image" });
    header.AddTableCell().Items.Add(new MdTextRange { Text = "Price" });

// Products
string[][] products = {
    new[] { "Widget", "./products/widget.png", "$10" },
    new[] { "Gadget", "./products/gadget.png", "$20" }
};

foreach (string[] product in products)
{
    MdTableRow row = table.AddTableRow();
    row.AddTableCell().Items.Add(new MdTextRange { Text = product[0] });
    var imgCell = row.AddTableCell();
    MdPicture image = new MdPicture();
    imgCell.Items.Add(image);
    image.Url = product[1];
    image.AltText = product[0];
    row.AddTableCell().Items.Add(new MdTextRange { Text = product[2] });
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Parsing Images

### Extract All Images
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

List<(string url, string alt, bool hasBytes)> images = new List<(string, string, bool)>();

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdPicture picture)
            {
                images.Add((picture.Url, picture.AltText, picture.ImageBytes != null));
            }
        }
    }
}

foreach (var (url, alt, hasBytes) in images)
{
    Console.WriteLine($"Image: {alt}");
    Console.WriteLine($"  URL: {url}");
    Console.WriteLine($"  Bytes: {(hasBytes ? "Yes" : "No")}");
}
```

### Find Images by URL Pattern
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

List<MdPicture> pngImages = new List<MdPicture>();

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdPicture picture && picture.Url.EndsWith(".png"))
            {
                pngImages.Add(picture);
            }
        }
    }
}

Console.WriteLine($"Found {pngImages.Count} PNG images");
```

### Download External Images
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdPicture picture)
            {
                // TODO:
                // Implement secure image handling logic if required by the application.
            }
        }
    }
}

string modified = doc.GetMarkdownText();
```

## Modifying Images

### Update Image URLs
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdPicture picture)
            {
                // Update domain
                if (picture.Url.Contains("oldsite.com"))
                {
                    picture.Url = picture.Url.Replace("oldsite.com", "newsite.com");
                }
            }
        }
    }
}

string modified = doc.GetMarkdownText();
```

### Add Alt Text
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdPicture picture && string.IsNullOrEmpty(picture.AltText))
            {
                // Extract filename as alt text
                string filename = Path.GetFileNameWithoutExtension(picture.Url);
                picture.AltText = filename.Replace("-", " ").Replace("_", " ");
            }
        }
    }
}
```

### Convert URLs to Embedded Images
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdPicture picture)
            {
                // TODO:
                // Implement secure image handling logic if required by the application.
            }
        }
    }
}
```

## Custom Image Handling with MdImportSettings

### Handle Image Paths During Parsing
```csharp
MdImportSettings settings = new MdImportSettings();

settings.ImageNodeVisited += (sender, args) =>
{
    // TODO:
    // Implement secure image handling logic if required by the application.
};

MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);
```

### Load Images During Parsing
```csharp
MdImportSettings settings = new MdImportSettings();

settings.ImageNodeVisited += (sender, args) =>
{
    // TODO:
    // Implement secure image handling logic if required by the application.
};

MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);
```

## Complete Example: Image-Rich Document

### User Profile Document
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "User Profile";

// Profile picture
MdParagraph profilePara = doc.AddParagraph();
MdPicture profilePic = new MdPicture();
profilePara.Inlines.Add(profilePic);
profilePic.Url = "./users/avatar.jpg";
profilePic.AltText = "User avatar";

// User info
MdParagraph name = doc.AddParagraph();
MdTextRange nameText = name.AddTextRange();
nameText.Text = "John Doe";
nameText.TextFormat.Bold = true;

MdParagraph email = doc.AddParagraph();
email.AddTextRange().Text = "Email: john.doe@example.com";

// Activity section
MdParagraph activityTitle = doc.AddParagraph();
activityTitle.ApplyParagraphStyle("Heading 2");
activityTitle.AddTextRange().Text = "Recent Activity";

// Activity chart
MdParagraph chartPara = doc.AddParagraph();
MdPicture chart = new MdPicture();
chartPara.Inlines.Add(chart);
chart.Url = "./charts/activity-chart.png";
chart.AltText = "User activity chart";

// Chart caption
MdParagraph caption = doc.AddParagraph();
MdTextRange captionText = caption.AddTextRange();
captionText.Text = "Last 30 days activity";
captionText.TextFormat.Italic = true;

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## HTML Conversion

Images are converted to HTML:
```html
<!-- URL-based image -->
<img src="https://example.com/image.png" alt="Company Logo" />

<!-- Base64-encoded image -->
<img src="data:image/png;base64,iVBORw0KG..." alt="Embedded image" />
```

## Best Practices

1. **Alt Text**: Always provide descriptive alternative text for accessibility
2. **Relative Paths**: Use relative paths for portable documentation
3. **Image Size**: Optimize images for web (compress, resize)
4. **Format Choice**: Use PNG for screenshots, JPEG for photos, SVG for diagrams
5. **Naming Convention**: Use descriptive filenames (not IMG001.png)
6. **Directory Structure**: Organize images in dedicated folders
7. **Base64 Caution**: Only embed small images (increases document size)

## Performance Considerations

- **Large Images**: Base64 encoding significantly increases document size
- **External URLs**: Images load from network (slower, requires internet)
- **Local Paths**: Fastest but requires files to exist at specified location
- **Embedded Images**: Self-contained but larger file size

## Troubleshooting

- **Image not displaying**: Verify URL/path is correct and accessible
- **Broken image icon**: Check file exists at specified location
- **Large file size**: Avoid embedding large images as base64
- **Encoding issues**: Ensure image file is valid and not corrupted
- **Path separators**: Use forward slashes (/) for cross-platform compatibility

## Common Mistakes

```csharp
// ❌ Wrong: Missing Url and ImageBytes
MdPicture image = new MdPicture();
para.Inlines.Add(image);
image.AltText = "Photo";
// Must set either Url or ImageBytes

// ✅ Correct: Set Url
MdPicture image = new MdPicture();
para.Inlines.Add(image);
image.Url = "./photo.jpg";
image.AltText = "Photo";

// ❌ Wrong: Backslashes in URL (Windows-specific)
image.Url = ".\\images\\photo.png";

// ✅ Correct: Forward slashes (cross-platform)
image.Url = "./images/photo.png";

// ❌ Wrong: Missing protocol for external URLs
image.Url = "example.com/image.png";

// ✅ Correct: Full URL with protocol
image.Url = "https://example.com/image.png";

// ❌ Wrong: Embedding large images
byte[] largeImage = File.ReadAllBytes("large-photo.jpg"); // 5MB
image.ImageBytes = largeImage; // Document becomes huge

// ✅ Correct: Use URL for large images
image.Url = "./large-photo.jpg"; // Reference instead of embedding
```

## Accessibility

Always provide meaningful alternative text:
```csharp
// ❌ Poor alt text
image.AltText = "image";

// ✅ Good alt text
image.AltText = "Bar chart showing quarterly sales growth from Q1 to Q4 2024";
```

## Image Formats Reference

| Format | Extension | Use Case | Notes |
|--------|-----------|----------|-------|
| PNG | .png | Screenshots, graphics with transparency | Lossless, larger file size |
| JPEG | .jpg, .jpeg | Photos, complex images | Lossy compression, smaller size |
| GIF | .gif | Simple animations, icons | Limited colors, supports animation |
| SVG | .svg | Diagrams, logos, icons | Vector format, scalable |
| WebP | .webp | Modern web images | Excellent compression, browser support |
| BMP | .bmp | Uncompressed images | Large file size, avoid for web |
