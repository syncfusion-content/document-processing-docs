---
layout: post
title: Use extractText in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to use the extractText method in the Syncfusion ASP.NET Core PDF Viewer to extract text and bounds from one or more pages.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Extract text using extractText in the ASP.NET Core PDF Viewer

The `extractText` APIs let you retrieve text from one or more pages, returning either plain text or text with bounds for each element. Use them on the server or in the standalone viewer depending on your scenario.

N>From Volume 2 2019 release Syncfusion.Pdf.Net.Core and Syncfusion.Compression.Net.Core packages are added as dependency for PDF Viewer control. Ensure the dependency packages are referred in your application properly.

## Extract text on the server (optional)

The server-side `ExtractText()` method returns text along with bounds so you can process it outside the viewer.

```cs

//Uses the Syncfusion.EJ2.PdfViewer assembly
PdfRenderer pdfExtractText = new PdfRenderer();
pdfExtractText.Load(@"currentDirectory\..\..\..\..\Data\HTTP Succinctly.pdf");
//Returns the bounds of the text
List<Syncfusion.EJ2.PdfViewer.TextData> textCollection = new List<Syncfusion.EJ2.PdfViewer.TextData>();
//Extracts the text from the first page of the PDF document along with its bounds
string text = pdfExtractText.ExtractText(0, out textCollection);
System.IO.File.WriteAllText(@"currentDirectory\..\..\..\..\Data\data.txt", text);

```

N> From Volume 2 2019, the control depends on `Syncfusion.Pdf.Net.Core` and `Syncfusion.Compression.Net.Core`. Ensure all dependency packages are referenced correctly.

Sample: [Download ExtractText sample](http://www.syncfusion.com/downloads/support/directtrac/general/ze/ExtractText-1972118166)

N> Ensure the document path and output locations are updated for your application.

## extractText method (standalone mode)

The viewer’s `extractText` method retrieves text from a single page or a range of pages. Use the optional arguments to choose between plain text (`TextOnly`) and detailed text data (`TextAndBounds`).

### Parameters
- **startIndex:** The starting page index (0-based).

- **endIndex or isOptions:** Either the ending page index for multi-page extraction or an option for single-page extraction.

- **options (optional):** Additional settings such as `'TextOnly'` or `'TextAndBounds'`.

- **TextOnly:** Extracts only the plain text content without bounds or additional information.

- **TextAndBounds:** Extracts text content along with its bounds (coordinates) within the PDF.

### Returns
A Promise that resolves with:
- **textData:** An array of `TextDataSettingsModel` entries containing detailed text information, including bounds.

- **pageText:** A concatenated string of text from the requested page range.

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

### Explanation
- **Single page extraction:** Extracts text from page 1 (`startIndex = 1`) using the `'TextOnly'` option.

- **Multiple page extraction:** Extracts text from pages 0–2 (`startIndex = 0`, `endIndex = 2`) using the `'TextOnly'` option.

[Use extractText in ASP.NET Core](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
