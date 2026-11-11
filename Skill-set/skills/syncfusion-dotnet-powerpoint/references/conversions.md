# PDF and Image Conversions

> Convert PowerPoint presentations, individual slides, and charts to images or PDF.

---
# PDF Conversion
### Cross-platform (Required Usings)

```csharp
using Syncfusion.Pdf;
using Syncfusion.Presentation;
using Syncfusion.PresentationRenderer;

```
### Windows-specific (Required Usings)
```csharp
using Syncfusion.OfficeChartToImageConverter;
using Syncfusion.Presentation;
using Syncfusion.PresentationToPdfConverter;
using Syncfusion.Pdf;
```

## Convert Entire Presentation to PDF
### Cross-platform (Minimal Code)
```csharp
using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
{
    //Save the PDF file to file system. 
    using (FileStream outputStream = new FileStream("output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        pdfDocument.Save(outputStream);
    }
}
```
### Windows-specific (Minimal Code)
```csharp
pptxDoc.ChartToImageConverter = new ChartToImageConverter();
//Converts the PowerPoint Presentation into PDF document
using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
{
    //Save the PDF file to file system. 
    using (FileStream outputStream = new FileStream("output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        pdfDocument.Save(outputStream);
    }
}
```
### Placeholders
 - `"Template.pptx"` → Replace with input file path
 - `"output.pdf"` → Replace with desired output file path
---
## Convert notes pages to PDF
### Windows-specific (Minimal Code)
```csharp
//Enable the include hidden slides option in converter settings.
PresentationToPdfConverterSettings pdfConverterSettings = new PresentationToPdfConverterSettings();
pdfConverterSettings.PublishOptions = PublishOptions.NotesPages;
//Convert the documents by passing the settings as parameter.
PdfDocument pdfDoc = PresentationToPdfConverter.Convert(pptxDoc, pdfConverterSettings);
//Save the converted PDF file.
pdfDoc.Save("Sample.pdf");
//Close the PDF instance
pdfDoc.Close();
```
### Placeholders
- `"Sample.pdf"` → Replace with output path
- `PublishOptions.NotesPages` → Replace with any `PublishOptions` enum value
### Common Presets
```csharp
pdfConverterSettings.PublishOptions = PublishOptions.NotesPages // Allows convert the notes in the slides to PDF
pdfConverterSettings.PublishOptions = PublishOptions.Slides // Allows convert all the slides in a Presentation to PDF
pdfConverterSettings.PublishOptions = PublishOptions.Handouts // Allows the PDF pages in the converted PDF document to hold more than one slides
```

# Image Conversion

### Cross-platform (Minimal Code)
```csharp
using Syncfusion.Presentation;
using Syncfusion.PresentationRenderer;
using System.IO;
```
### Windows-specific
```csharp
using Syncfusion.Presentation;
using Syncfusion.OfficeChartToImageConverter;
using System.IO;
using Syncfusion.Drawing;
```

## Convert Entire Presentation to Images

### Cross-platform (Minimal Code)
```csharp

pptxDoc.PresentationRenderer = new PresentationRenderer();
// Returns one image stream per slide
Stream[] images = pptxDoc.RenderAsImages(ExportImageFormat.Jpeg);
for (int i = 0; i < images.Length; i++)
{
    using (Stream stream = images[i])
    using (FileStream output = File.Create("Output" + i + ".jpg"))
        stream.CopyTo(output);
}
```
### Windows-specific (Minimal Code)
```csharp
//Creates instance of ChartToImageConverter
pptxDoc.ChartToImageConverter = new ChartToImageConverter();
//Sets the scaling mode as best
pptxDoc.ChartToImageConverter.ScalingMode = Syncfusion.OfficeChart.ScalingMode.Best;
//Converts entire Presentation to images
Image[] images = pptxDoc.RenderAsImages(Syncfusion.Drawing.ImageType.Metafile);
//Save the image streams to file.
for (int i = 0; i < images.Length; i++)
{ 
    images[i].Save("Output" + i + ".png");
}
```
### Placeholders
- `"Sample.pptx"` → Replace with the input file path
- `ExportImageFormat.Jpeg` → Replace with `Png`, `Bmp`, or `Emf` as needed
- `"Output" + i + ".jpg"` → Replace with the desired output naming pattern

---

## Convert a Single Slide to Image

### Cross-platform (Minimal Code)
```csharp
using (IPresentation pptxDoc = Presentation.Open(fileStreamInput))
{
    pptxDoc.PresentationRenderer = new PresentationRenderer();
    // Convert slide at index 0 to image stream
    using (Stream stream = pptxDoc.Slides[0].ConvertToImage(ExportImageFormat.Jpeg))
    using (FileStream output = File.Create("Output.jpg"))
        stream.CopyTo(output);
}
```
### Windows-specific (Minimal Code)
```csharp
//Creates an instance of ChartToImageConverter
pptxDoc.ChartToImageConverter = new ChartToImageConverter();
//Sets the scaling mode as best
pptxDoc.ChartToImageConverter.ScalingMode = Syncfusion.OfficeChart.ScalingMode.Best;
//Converts the first slide into image
System.Drawing.Image image = pptxDoc.Slides[0].ConvertToImage(Syncfusion.Drawing.ImageType.Metafile);
//Saves the image as file
image.Save("slide1.png");
```

### Placeholders
- `pptxDoc.Slides[0]` → Replace `0` with the target slide index
- `ExportImageFormat.Jpeg` → Use `Emf` for best resolution quality

---

## Convert Slides to Images Based on Animation Sequence

### Cross-platform (Minimal Code)
```csharp
using ExportImageFormat = Syncfusion.Presentation.ExportImageFormat;


using (PresentationAnimationConverter animationConverter = new PresentationAnimationConverter())
{
    int i = 0;
    foreach (ISlide slide in pptxDoc.Slides)
    {
        // Each entrance-animated element produces a separate image
        Stream[] imageStreams = animationConverter.Convert(slide, ExportImageFormat.Png);
        foreach (Stream stream in imageStreams)
        {
            i++;
            stream.Position = 0;
            using (FileStream output = File.Create("Output" + i + ".png"))
                stream.CopyTo(output);
        }
    }
}
```
### Windows-specific (Minimal Code)
```csharp
using (PresentationAnimationConverter animationConverter = new PresentationAnimationConverter())
{
    int i = 0;
    foreach (ISlide slide in pptxDoc.Slides)
    {
        // Each entrance-animated element produces a separate image
        Stream[] imageStreams = animationConverter.Convert(slide, Syncfusion.Drawing.ImageFormat.Png);
        foreach (Stream stream in imageStreams)
        {
            i++;
            stream.Position = 0;
            using (FileStream output = File.Create("Output" + i + ".png"))
                stream.CopyTo(output);
        }
    }
}
```

### Placeholders
- `ExportImageFormat.Png`,`Syncfusion.Drawing.ImageFormat.Png` → Replace with desired format
- Only **entrance** animation effects generate separate images; all other content appears in the first image

---

## Convert a Chart to Image

### Cross-platform (Minimal Code)
```csharp
pptxDoc.PresentationRenderer = new PresentationRenderer();
// Get a chart from the slide
IPresentationChart chart = pptxDoc.Slides[0].Charts[0];
using (Stream image = new FileStream("ChartToImage.jpg", FileMode.Create, FileAccess.ReadWrite))
{
    pptxDoc.PresentationRenderer.ConvertToImage(chart, image);
}
pptxDoc.Close();
inputStream.Close();
```

### Windows-specific (Minimal Code)
```csharp
pptxDoc.ChartToImageConverter = new ChartToImageConverter();
//Sets the scaling mode for quality
pptxDoc.ChartToImageConverter.ScalingMode = Syncfusion.OfficeChart.ScalingMode.Best;
//Gets the first slide
ISlide slide = pptxDoc.Slides[0];
//Gets the chart in slide
IPresentationChart chart = slide.Shapes[0] as IPresentationChart;
//Creates a stream instance to store the image
MemoryStream stream = new MemoryStream();
//Saves the image to stream
chart.SaveAsImage(stream);
//Saves the stream to a file
using (FileStream fileStream = File.Create("ChartImage.png", (int)stream.Length))
    fileStream.Write(stream.ToArray(), 0, stream.ToArray().Length);
//Closes the stream
stream.Close();
```

### Placeholders
- `pptxDoc.Slides[0].Charts[0]` → Replace indices with the target slide and chart
- `slide.Shapes[0]` → Replace `0` with the index of the chart shape on the slide
- `"ChartToImage.jpg"` / `"ChartImage.png"` → Replace with the desired output image path
- `ScalingMode.Best` → Replace with any `ScalingMode` enum value (`Normal`, `Best`)

---
