# Conversions

> Format conversions — converting Word documents to image formats.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```

## Required usings for Cross-Platform

```csharp
using Syncfusion.DocIORenderer;
```

## Required usings for Windows-Specific

```csharp
using System;
using System.Drawing;
using System.Drawing.Imaging;
using Syncfusion.OfficeChart;
using Syncfusion.OfficeChartToImageConverter;
```

## Convert Word to Image

### Minimal Code - Convert Entire Document

#### Cross-Platform
```csharp
var inputPath = Path.Combine(Directory.GetCurrentDirectory(), "output/document.docx");
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output");

if (!File.Exists(inputPath))
{
    throw new FileNotFoundException($"Input file not found: {inputPath}");
}

using (FileStream docStream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
{
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        using (DocIORenderer render = new DocIORenderer())
        {
            Stream[] imageStreams = wordDocument.RenderAsImages();
            for (int i = 0; i < imageStreams.Length; i++)
            {
                var imageOutputPath = Path.Combine(outputPath, $"WordToImage_{i}.jpeg");
                using (FileStream fileStreamOutput = File.Create(imageOutputPath))
                {
                    imageStreams[i].CopyTo(fileStreamOutput);
                }
            }
        }
        wordDocument.Close();
    }
}

Console.WriteLine($"SUCCESS: Document converted to images in {outputPath}");
```

#### Windows-Specific
```csharp
using(WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx))
{
    wordDocument.ChartToImageConverter = new ChartToImageConverter();
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
    Image[] images = wordDocument.RenderAsImages(ImageType.Bitmap);
    for (int i = 0; i < images.Length; i++)
    {
        images[i].Save("WordToImage_" + i + ".jpeg", ImageFormat.Jpeg);
    }
}

Console.WriteLine("SUCCESS: Document converted to images");
```

### Convert Specific Page

#### Cross-Platform
```csharp
using (FileStream docStream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
{
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        using (DocIORenderer render = new DocIORenderer())
        {
            Stream imageStream = wordDocument.RenderAsImages(0, ExportImageFormat.Jpeg);
            imageStream.Position = 0;
            
            using (FileStream fileStreamOutput = File.Create(outputPath))
            {
                imageStream.CopyTo(fileStreamOutput);
            }
        }
        wordDocument.Close();
    }
}

Console.WriteLine($"SUCCESS: {outputPath}");
```

#### Windows-Specific
```csharp
using(WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx))
{
    wordDocument.ChartToImageConverter = new ChartToImageConverter();
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
    Image image = wordDocument.RenderAsImages(0, ImageType.Bitmap);
    image.Save("WordToImage.jpeg", ImageFormat.Jpeg);
}

Console.WriteLine("SUCCESS: Page converted to image");
```

### Convert Page Range

#### Cross-Platform
```csharp
using (FileStream docStream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
{
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        using (DocIORenderer render = new DocIORenderer())
        {
            Stream[] imageStreams = wordDocument.RenderAsImages(1, 2);
            int i = 0;
            foreach (Stream stream in imageStreams)
            {
                stream.Position = 0;
                var imageOutputPath = Path.Combine(outputPath, $"WordToImage_{i}.jpeg");
                using (FileStream fileStreamOutput = File.Create(imageOutputPath))
                {
                    stream.CopyTo(fileStreamOutput);
                }
                i++;
            }
        }
        wordDocument.Close();
    }
}

Console.WriteLine($"SUCCESS: Document pages converted to images in {outputPath}");
```

#### Windows-Specific
```csharp
using(WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx))
{
    wordDocument.ChartToImageConverter = new ChartToImageConverter();
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
    Image[] images = wordDocument.RenderAsImages(1, 2, ImageType.Bitmap);
    int i = 0;
    foreach (Image image in images)
    {
        image.Save("WordToImage_" + i + ".jpeg", ImageFormat.Jpeg);
        i++;
    }
}

Console.WriteLine("SUCCESS: Document pages converted to images");
```

### Custom Image Resolution

#### Windows-Specific
```csharp
using (WordDocument wordDocument = new WordDocument(@"Template.docx", FormatType.Docx))
{
    wordDocument.ChartToImageConverter = new ChartToImageConverter();
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
    Image[] images = wordDocument.RenderAsImages(ImageType.Metafile);
    int customWidth = 1500;
    int customHeight = 1500;
    foreach (Image image in images)
    {
        MemoryStream stream = new MemoryStream();
        image.Save(stream, ImageFormat.Png);
        Bitmap bitmap = new Bitmap(customWidth, customHeight, PixelFormat.Format32bppPArgb);
        Graphics graphics = Graphics.FromImage(bitmap);
        bitmap.SetResolution(300, 300);
        graphics.DrawImage(System.Drawing.Image.FromStream(stream), new Rectangle(0, 0, bitmap.Width, bitmap.Height));
        bitmap.Save(@"ImageOutput" + Guid.NewGuid().ToString() + ".png");
    }
}
```
## Custom Font Registration

Register custom fonts for Word-to-Image conversion when they are not installed on the system.

### Required common usings

```csharp
using Syncfusion.Drawing.Fonts;
```

### Supported Font Formats

- TrueType Fonts (.ttf)
- OpenType Fonts (.otf)

### Register Fonts from a Folder

```csharp
//Specify the path to the folder containing font files.
FontManager.RegisterFonts(@"C:\CustomFonts");
```

> Supported in .NET 8.0 and later. The folder must be accessible; otherwise this method throws `DirectoryNotFoundException`.

### Full Example

#### Cross-Platform

```csharp
//Register custom fonts before conversion
FontManager.RegisterFonts(@"C:\CustomFonts");

using (FileStream docStream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
{
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        using (DocIORenderer render = new DocIORenderer())
        {
            Stream[] imageStreams = wordDocument.RenderAsImages();
            for (int i = 0; i < imageStreams.Length; i++)
            {
                var imageOutputPath = Path.Combine(outputPath, $"WordToImage_{i}.jpeg");
                using (FileStream fileStreamOutput = File.Create(imageOutputPath))
                {
                    imageStreams[i].CopyTo(fileStreamOutput);
                }
            }
        }
    }
}

//Clear all registered fonts after conversion
FontManager.ClearRegisteredFonts(true);
```

#### Windows-Specific

```csharp
//Register custom fonts before conversion
FontManager.RegisterFonts(@"C:\CustomFonts");

using (WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx))
{
    wordDocument.ChartToImageConverter = new ChartToImageConverter();
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
    Image[] images = wordDocument.RenderAsImages(ImageType.Bitmap);
    for (int i = 0; i < images.Length; i++)
    {
        images[i].Save("WordToImage_" + i + ".jpeg", ImageFormat.Jpeg);
    }
}

//Clear all registered fonts after conversion
FontManager.ClearRegisteredFonts(true);
```

### Register Custom Fonts from Streams

```csharp
List<Stream> fontStreams = new List<Stream>();
fontStreams.Add(File.OpenRead("Arial.ttf"));
fontStreams.Add(File.OpenRead("Calibri.ttf"));

FontManager.RegisterFonts(fontStreams);
```

### Get Registered Font Names

```csharp
List<string> registeredFontNames = FontManager.RegisteredFontNames;
foreach (string registeredFontName in registeredFontNames)
{
    Console.WriteLine(registeredFontName);
}
```

### Clear Registered Fonts

```csharp
// Clear all registered fonts and dispose the associated font streams.
FontManager.ClearRegisteredFonts(true);
```

### Placeholders
- `@"C:\CustomFonts"` → Replace with `"{font-folder-path}"`
- `"Arial.ttf"`, `"Calibri.ttf"` → Replace with `"{font-file-path}"`
- `"Fonts"` → Replace with `"{font-folder-path}"`

### Key Features
- **Convert entire document** to multiple image files
- **Convert specific page** to single image (useful for thumbnails)
- **Convert page range** to multiple images
- **Custom font registration** for fonts not installed on the system
- **Custom image resolution** support
- **Multiple formats** supported: JPEG, PNG, BMP, TIFF
- **Fallback fonts** for missing glyphs
- **No external dependencies** (Adobe/Microsoft Office not required)

### Supported Image Formats
- `ExportImageFormat.Jpeg`
- `ExportImageFormat.Png`
- `ExportImageFormat.Bmp`
- `ExportImageFormat.Tiff`

### Supported Input Formats
- DOC, DOCX, Word Processing XML (2003 & 2007)
- DOT, DOTX, DOCM, DOTM
- RTF, Text, Markdown, HTML

### Method Overloads

| Method | Parameters | Description |
|--------|-----------|-------------|
| `RenderAsImages()` | - | Converts entire document to images |
| `RenderAsImages(pageIndex, format)` | `int pageIndex`, `ExportImageFormat format` | Converts specific page to image |
| `RenderAsImages(startIndex, endIndex)` | `int startIndex`, `int endIndex` | Converts page range to images |

### Placeholders
- `"output/document.docx"` → Replace with `"{input-path}"`
- `"output"` (or `Path.Combine(..., "output")`) → Replace with `"{output-directory}"`
- `"Template.docx"` → Replace with `"{input-path}"` or `"{template-path}"`
- `"WordToImage_<i>.jpeg"` / `"WordToImage.jpeg"` → Replace with `"{output-file-pattern}"` (e.g. `{output-directory}/WordToImage_{index}.jpeg`)
- `0` → Replace with `"{page-index}"` (use an integer variable)
- `1`, `2` → Replace with `"{start-index}"`, `"{end-index}"`
- `ExportImageFormat.Jpeg`, `ExportImageFormat.Png`, etc. → Replace with `"{export-image-format}"`
- `ImageType.Bitmap`, `ImageType.Metafile` → Replace with `"{image-type}"`
- `ImageFormat.Jpeg`, `ImageFormat.Png` → Replace with `"{image-format}"`
- `customWidth`, `customHeight` → Replace with `"{custom-width}"`, `"{custom-height}"`
- `ChartToImageConverter.ScalingMode.Normal` → Replace with `"{scaling-mode}"` (e.g. `Normal`)

