---
layout: post
title: Use extractText in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to use the extractText method in the Syncfusion ASP.NET Core PDF Viewer to extract text and bounds from one or more pages.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Extract text from PDFs in ASP.NET Core PDF Viewer

Retrieve text content from one or more pages using the `extractText` method. The viewer supports both plain text extraction and detailed text extraction with positional bounds information. You can extract text on the server side or client side depending on your use case.

N> From the Volume 2 2019 release, the PDF Viewer depends on the `Syncfusion.Pdf.Net.Core` and `Syncfusion.Compression.Net.Core` NuGet packages. Ensure these dependencies are properly referenced in your project.

## Extract text on the server side

Use the server-side `ExtractText()` method to retrieve text with bounds information for processing outside the viewer.

```cs
// Uses the Syncfusion.EJ2.PdfViewer assembly
PdfRenderer pdfExtractText = new PdfRenderer();
pdfExtractText.Load(@"currentDirectory\..\..\..\..\Data\HTTP Succinctly.pdf");
//Returns the bounds of the text
List<Syncfusion.EJ2.PdfViewer.TextData> textCollection = new List<Syncfusion.EJ2.PdfViewer.TextData>();
// Extract text from the first page along with its bounds
string text = pdfExtractText.ExtractText(0, out textCollection);
// Save the extracted text to a file
System.IO.File.WriteAllText(@"currentDirectory\..\..\..\..\Data\data.txt", text);
```

N> Ensure all required dependency packages (`Syncfusion.Pdf.Net.Core` and `Syncfusion.Compression.Net.Core`) are properly referenced in the project. Update the document path and output locations according to the application configuration.

**Sample:** [Download ExtractText sample](http://www.syncfusion.com/downloads/support/directtrac/general/ze/ExtractText-1972118166)

## Extract text in standalone mode

The `extractText()` method in the PDF Viewer retrieves text from a single page or multiple pages. Use optional parameters to specify the extraction format: plain text only or text with positional bounds.

### Method parameters

- **startIndex:** The starting page index (0-based).

- **endIndex or isOptions:** Either the ending page index for multi-page extraction or an option for single-page extraction.

- **options (optional):** Additional settings such as `'TextOnly'` or `'TextAndBounds'`.

- **TextOnly:** Extracts only the plain text content without bounds or additional information.

- **TextAndBounds:** Extracts text content along with its bounds (coordinates) within the PDF.

### Return value

Returns a Promise that resolves with an object containing:
- **textData:** An array of `TextDataSettingsModel` objects with detailed text information, including bounding box coordinates.
- **pageText:** A concatenated string containing all extracted text from the specified page range.

### Usage example

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <button onclick="ExtractText()">Extract Text</button>
    <button onclick="ExtractTexts()">Extract Texts</button>
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
    function ExtractText(){
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.extractText(1, 'TextOnly').then((val) => {
            console.log('Extracted Text from Page 1:');
            console.log(val);  // Logs the extracted text from page 1
        });
    }
     function ExtractTexts(){
         var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.extractText(0, 2, 'TextOnly').then((val) => {
            console.log('Extracted Text from Pages 0 to 2:');
            console.log(val);  // Logs the extracted text from pages 0 to 2
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

### Example explanation

The code examples above demonstrate:

- **Single-page extraction:** Retrieves text from page 1 using `startIndex = 1` with the `'TextOnly'` option, returning plain text without positional data.
- **Multi-page extraction:** Retrieves text from pages 0 through 2 using `startIndex = 0` and `endIndex = 2` with the `'TextOnly'` option.

[Use extractText in ASP.NET Core](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
