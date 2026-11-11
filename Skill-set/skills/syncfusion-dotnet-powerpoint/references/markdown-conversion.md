# PowerPoint and Markdown Conversion

> Convert PowerPoint presentations to Markdown documents with support for slide content, images, notes, custom image paths, and encoding options

### Common code for Cross-Platform and Windows-Specific (Required Usings)

```csharp
using Syncfusion.Presentation;
using System.Text.Json;
using System.Text;
using Syncfusion.Office.Markdown;
```

### Required using for Cross-Platform

```csharp
using Syncfusion.PresentationRenderer;
```

### Required usings for Windows-Specific

```csharp
using Syncfusion.OfficeChartToImageConverter;
```

---

## Convert PowerPoint Presentation to Markdown

### Export Markdown Document to Powerpoint

#### Cross-Platform
```csharp
//Open an existing Presentation document.
using (IPresentation presentation = Presentation.Open("Input.pptx"))
{
    //Initialize the PresentationRenderer to preserve Word elements (including charts) as fallback images.
    presentation.PresentationRenderer = new PresentationRenderer();

    //Save the PowerPoint Presentation as a Markdown file.
    presentation.Save("Output.md");
}
```

#### Windows-Specific
```csharp
//Open an existing Presentation document.
using (IPresentation presentation = Presentation.Open("Input.pptx"))
{
    //Initialize the ChartToImageConverter to preserve charts as fallback images.
    presentation.ChartToImageConverter = new ChartToImageConverter();

    //Save the PowerPoint Presentation as a Markdown file.
    presentation.Save("Output.md");
}
```

### Export Markdown Instance from Powerpoint

#### Cross-Platform
```csharp
    //Open an existing Presentation document.
    IPresentation presentation = Presentation.Open("Input.pptx");
    // Initialize the PresentationRenderer to preserve Word elements (including charts) as fallback images.
    presentation.PresentationRenderer = new PresentationRenderer();
    // Convert the Presentation document to Markdown Instance.
    MarkdownDocument markdownDocument = presentation.GetMarkdownDocument();
    // Save the Markdown document to a file.
    markdownDocument.Save("Output.md");
    // Dispose the Markdown document instance.
    markdownDocument.Dispose();
    // Dispose the Presentation instance.
    presentation.Dispose();
```

#### Windows-Specific
```csharp
    //Open an existing Presentation document.
    IPresentation presentation = Presentation.Open("Input.pptx");
    // Initialize the ChartToImageConverter to preserve charts as fallback images.
    presentation.ChartToImageConverter = new ChartToImageConverter();
    // Convert the Presentation document to Markdown Instance.
    MarkdownDocument markdownDocument = presentation.GetMarkdownDocument();
    // Save the Markdown document to a file.
    markdownDocument.Save("Output.md");
    // Dispose the Markdown document instance.
    markdownDocument.Dispose();
    // Dispose the Presentation instance.
    presentation.Dispose();
```
### Placeholders

- `"Input.pptx"` → Replace with the input PowerPoint presentation path
- `"Output.md"` → Replace with the desired Markdown output path

---

## Convert Markdown to Powerpoint Presentation

### Import Markdown Document to Powerpoint

#### Common code for Cross-Platform and Windows-Specific

```csharp
using (IPresentation presentation = Presentation.Open("Input.md"))
{
    //Save the PowerPoint Presentation as a Markdown file.
    presentation.Save("Output.pptx");
}
```

### Import Markdown Instance to Powerpoint

#### Common for Cross-Platform and Windows-Specific
```csharp
    //Open a Markdown document.
    MarkdownDocument markdownDocument = new MarkdownDocument("Template.md");
    // Import markdown instances to a presentation.
    IPresentation presentation = Presentation.Open(markdownDocument);
    // Create stream to save the file.
    FileStream stream = new FileStream("Output.pptx", FileMode.Create, FileAccess.ReadWrite);
    // Save the presentation to a stream
    presentation.Save(stream, Syncfusion.Presentation.FormatType.Pptx);
    // Dispose the presentation instance
    presentation.Dispose();
    // Dispose the markdown document instance
    markdownDocument.Dispose();


```

## Save Options
Customize Markdown output by configuring image export settings, character encoding, and other save behaviors.

### Customize Image path
Control how images are saved and referenced in the generated Markdown file.

#### Cross-Platform
```csharp
// Open an existing Presentation document.
using (IPresentation presentation = Presentation.Open("Input.pptx"))
{
    // Initialize the PresentationRenderer to preserve Word elements (including charts) as fallback images.
    presentation.PresentationRenderer = new PresentationRenderer();
	 // Hook the event to customize the image.
    presentation.MdSaveOptions.ImageNodeVisited += SaveImage;
    // Save the PowerPoint Presentation as a Markdown file.
    presentation.Save(@"Output.md");
}

static void SaveImage(object sender, MdImageNodeVisitedEventArgs args)
{
    string imagepath = @"D:\Temp\Image1.png";
	 // Save the image stream as a file.
	using (FileStream fileStreamOutput = File.Create(imagepath))
		args.ImageStream.CopyTo(fileStreamOutput);
	 // Set the URI to be used for the image in the output Markdown. 
	args.Uri = imagepath;
}
```

#### Windows-Specific
```csharp
// Open an existing Presentation document.
using (IPresentation presentation = Presentation.Open("Input.pptx"))
{
    // Initialize the ChartToImageConverter to preserve charts as fallback images.
    presentation.ChartToImageConverter = new ChartToImageConverter();
    // Save the PowerPoint Presentation as a Markdown file.
    presentation.Save(@"Output.md");
}

static void SaveImage(object sender, MdImageNodeVisitedEventArgs args)
{
    string imagepath = @"D:\Temp\Image1.png";
	// Save the image stream as a file.
	using (FileStream fileStreamOutput = File.Create(imagepath))
		args.ImageStream.CopyTo(fileStreamOutput);
	// Set the URI to be used for the image in the output Markdown. 
	args.Uri = imagepath;
}
```


### Encoding

Specify the character encoding used when saving the Markdown file, including UTF-8, UTF-16, ASCII, and other supported encodings.

#### Cross-Platform
```csharp
// Open an existing Presentation document.
 using (IPresentation presentation = Presentation.Open("Input.pptx"))
 {
    // Initialize the PresentationRenderer to preserve Word elements (including charts) as fallback images.
    presentation.PresentationRenderer = new PresentationRenderer();
    // Set the encoding for the Markdown file.
    presentation.MdSaveOptions.Encoding = Encoding.ASCII;
    // Save the PowerPoint Presentation as a Markdown file.
    presentation.Save("Output.md");
 }
```

#### Windows-Specific
```csharp
// Open an existing Presentation document.
 using (IPresentation presentation = Presentation.Open("Input.pptx"))
 {
    // Initialize the ChartToImageConverter to preserve charts as fallback images.
    presentation.ChartToImageConverter = new ChartToImageConverter();
    // Set the encoding for the Markdown file.
    presentation.MdSaveOptions.Encoding = Encoding.ASCII;
    // Save the PowerPoint Presentation as a Markdown file.
    presentation.Save("Output.md");
 }
```

### Placeholders

- `"Input.pptx"` → Replace with the input PowerPoint presentation path
- `"Output.md"` → Replace with the desired Markdown output path
- `"Input.md"` → Replace with the input Markdown file path
- `"Output.pptx"` → Replace with the desired Markdown output file path
- `Encoding.ASCII` → Replace with the desired encoding type
- `@"D:\Temp\Image1.png"` → Replace with the desired image save location
- `args.Uri` → Set a custom image path or URL to be referenced in the Markdown output