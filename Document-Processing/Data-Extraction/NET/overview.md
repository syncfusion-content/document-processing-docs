---
title: Extract Structured Data and Perform OCR in .NET | Syncfusion
description: Syncfusion Data Extraction is a .NET library that extracts tables, forms, text, and images from documents, and recognizes form data to produce outputs such as PDFs and JSON.
platform: document-processing
control: DataExtraction
documentation: UG
keywords: Assemblies
---

## Overview of Smart Data Extractor

Syncfusion® Smart Data Extractor is a high performance, deterministic C# library that extracts complete document structures from PDFs and images. Designed for .NET workflows, it analyzes visual layout lines, boxes, labels, and alignment to locate and extract elements such as table structure, text elements, images, headers, footers, and form fields with per field confidence scores for immediate review, export, or integration.


### Key Features of Essential<sup>&reg;</sup> Smart Data Extractor

The following list shows the key features available in the Essential<sup>&reg;</sup> SmartDataExtractor.

* **Document structure extraction:** Detects text elements, images, headers/footers, and complete table structure (regions, header rows, columns, cell boundaries, merged cells).
* **File format support:** Works with PDF and common image formats (JPEG, PNG).
* **Table extraction:** Specialized parsing to recover table rows, columns, header detection and cell spans.
* **Form recognition:** Detects and extracts form fields (text inputs, checkboxes, radio buttons) with field types and values.
* **Page-level control:** Extract data from specific pages or defined page ranges.
* **Confidence thresholding:** Results are filtered based on a configurable confidence score (0.0–1.0).
* **Deterministic performance:** Designed for predictable, repeatable extraction across environments (Windows, Linux, Azure, Docker).

### JSON Output Structure and Attributes

The Syncfusion® Data Extraction libraries process PDFs and scanned images to extract structured document data—including tables, form fields, text elements, images, headers, and footers—by analyzing layout patterns, table regions, borders, alignment patterns, and cell structures. The extracted output is returned as structured JSON with per‑field and per‑cell confidence scores, along with complete document and table hierarchies, making it ready for immediate review, export, or integration into downstream workflows.

### Root Structure

Below is the root structure of the JSON result:

{% tabs %}

{% highlight json tabtitle="JSON" %}

{
  "Pages": [
    {
      "PageNumber": 1,
      "Width": 0,
      "Height": 0,
      "PageObjects": [],
      "FormObjects": [] 
    }
  ]
}

{% endhighlight %}

{% endtabs %}

N> In the Smart Table Extractor root structure, the **form** object will not be present.

### JSON Attributes

#### Page Object

The Page Object represents the metadata of a page along with all the detected elements it contains in Smart Data Extractor, and with the table elements it contains in Smart Table Extractor.

<table>
<thead>
<tr>
<th><b>Attribute</b></th>
<th><b>Type</b></th>
<th><b>Description</b></th>
</tr>
</thead>
<tbody>
<tr>
<td>PageNumber</td>
<td>Integer</td>
<td>Sequential number of the page in the document.</td>
</tr>
<tr>
<td>Width</td>
<td>Float</td>
<td>Page width in points/pixels.</td>
</tr>
<tr>
<td>Height</td>
<td>Float</td>
<td>Page height in points/pixels.</td>
</tr>
<tr>
<td>PageObjects</td>
<td>Array</td>
<td>List of detected objects (table).</td>
</tr>
<tr>
<td>FormObjects</td>
<td>Array</td>
<td>List of detected form fields (checkboxes, text boxes, radio button, signature etc..)</td>
</tr>
</tbody>
</table>

N> The **FormObjects** array is not included in the Smart Table Extractor output structure, as it is specific to Smart Data Extractor and Smart Form Recognizer.

#### PageObjects

PageObjects represent the metadata of a page along with the detected elements it contains—such as text, headers, footers, tables, images, and numbers—in Smart Data Extractor, while in Smart Table Extractor they represent the detected table elements on a page.

<table>
<thead>
<tr>
<th><b>Attribute</b></th>
<th><b>Type</b></th>
<th><b>Description</b></th>
</tr>
</thead>
<tbody>
<tr>
<td>Type</td>
<td>String</td>
<td>Defines the kind of object detected on the page (Table).</td>
</tr>
<tr>
<td>Bounds</td>
<td>Array of Floats</td>
<td>The bounding box coordinates [X, Y, Width, Height] representing the object's position and size on the page.</td>
</tr>
<tr>
<td>Content</td>
<td>Object</td>
<td>Holds the extracted textual content along with its style attributes (FontName, FontStyle, FontSize) that describe the appearance of the text.</td>
</tr>
<tr>
<td>Confidence</td>
<td>Float</td>
<td>Confidence score (0–1) indicating the accuracy of detection.</td>
</tr>
<tr>
<td>TableFormat (only for tables)</td>
<td>Object</td>
<td>Metadata about table detection, including detection score and label.</td>
</tr>
<tr>
<td>Rows (only for tables)</td>
<td>Array</td>
<td>Collection of row objects that make up the table.</td>
</tr>
</tbody>
</table>

#### Row Object

The Row Object represents a single horizontal group of cells within a table, along with its bounding box.

<table>
<thead>
<tr>
<th><b>Attribute</b></th>
<th><b>Type</b></th>
<th><b>Description</b></th>
</tr>
</thead>
<tbody>
<tr>
<td>Type</td>
<td>String</td>
<td>Row type (e.g., tr).</td>
</tr>
<tr>
<td>Rect</td>
<td>Array</td>
<td>Bounding box coordinates for the row.</td>
</tr>
<tr>
<td>Cells</td>
<td>Array</td>
<td>Collection of cell objects contained in the row.</td>
</tr>
</tbody>
</table>

#### Cell Object

The Cell Object represents an individual table entry, containing text values, spanning details, and positional coordinates.

<table>
<thead>
<tr>
<th><b>Attribute</b></th>
<th><b>Type</b></th>
<th><b>Description</b></th>
</tr>
</thead>
<tbody>
<tr>
<td>Type</td>
<td>String</td>
<td>Cell type (e.g., td).</td>
</tr>
<tr>
<td>Rect</td>
<td>Array</td>
<td>Bounding box coordinates for the cell.</td>
</tr>
<tr>
<td>RowSpan / ColSpan</td>
<td>Integer</td>
<td>Number of rows or columns spanned by the cell.</td>
</tr>
<tr>
<td>RowStart / ColStart</td>
<td>Integer</td>
<td>Starting row and column index of the cell.</td>
</tr>
<tr>
<td>Content.Value</td>
<td>String</td>
<td>Text content inside the cell.</td>
</tr>
</tbody>
</table>

#### FormObjects

FormObjects represent interactive form fields detected on the page, such as text boxes, checkboxes, radio buttons, and signature regions. Each object includes positional data, field dimensions, field type, and a confidence score that reflects the reliability of the detection.

<table>
<thead>
<tr>
<th><b>Attribute</b></th>
<th><b>Type</b></th>
<th><b>Description</b></th>
</tr>
</thead>
<tbody>
<tr>
<td>X / Y</td>
<td>Float</td>
<td>Coordinates of the form field on the page.</td>
</tr>
<tr>
<td>Width / Height</td>
<td>Float</td>
<td>Dimensions of the form field.</td>
</tr>
<tr>
<td>Type</td>
<td>Integer</td>
<td>Numeric identifier for the form field type (e.g., 0 = TextArea, 1 = Checkbox, 2 = Radio Button, 3 = Signature).</td>
</tr>
<tr>
<td>Confidence</td>
<td>Float</td>
<td>Confidence score (0–1) indicating detection accuracy.</td>
</tr>
</tbody>
</table>

N> The **FormObjects** structure is not available in the Smart Table Extractor output.

### Text Attribute 

Represents the text formatting attributes (font family, font style, font size) applied to the extracted text.
<table>
<thead>
<tr>
<th><b>Attribute</b></th>
<th><b>Type</b></th>
<th><b>Description</b></th>
</tr>
</thead>
<tbody>
<tr>
<td>FontName</td>
<td>String</td>
<td>Specifies the font family name used for the text (for example, "Arial").</td>
</tr>
<tr>
<td>FontStyle</td>
<td>Integer</td>
<td>Specifies the numeric identifier for the font style (for example, 0 = Regular, 1 = Bold, 2 = Italic).
</td>
</tr>
<tr>
<td>FontSize</td>
<td>Float</td>
<td>Specifies the font size used for the text.</td>
</tr>
</tbody>
</table>

## Overview of Optical Character Recognition (OCR)

Optical character recognition (OCR) is a technology used to convert scanned paper documents in the form of PDF files or images into searchable and editable data.  

The [Syncfusion<sup>&reg;</sup> OCR processor library](https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library/ocr-process) has extended support to process OCR on scanned PDF documents and images with the help of Google’s [Tesseract](https://github.com/tesseract-ocr/tesseract) Optical Character Recognition engine.

An inbuilt `image preprocessor` has been added to the OCR to prepare images for optimal recognition. This step ensures cleaner input and reduces OCR errors. The preprocessor supports the following enhancements:

* **Convert to Grayscale** – Simplifies image data by removing color information, making text easier to detect.
* **Deskew** – Corrects tilted or rotated text for proper alignment.
* **Denoise** – Removes speckles and artifacts that can interfere with character recognition.
* **Apply Contrast Adjustment** – Enhances text visibility against the background.
* **Apply Binarize** – Converts images to black-and-white for sharper text edges, using advanced thresholding methods

The Syncfusion<sup>&reg;</sup> OCR processor library works seamlessly in various platforms: Azure App Services, Azure Functions, AWS Textract, Docker, WinForms, WPF, Blazor, ASP.NET MVC, ASP.NET Core with Windows, MacOS and Linux. 

N> Starting with v20.1.0.x, if you reference Syncfusion<sup>&reg;</sup> OCR processor assemblies from the trial setup or the NuGet feed, you also have to include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn more about registering the Syncfusion<sup>&reg;</sup> license key in your application to use its components.

### Key features 

* Create a searchable PDF from scanned PDF.
* Zonal text extraction from the scanned PDF.
* Preserve Unicode characters.
* Extract text from the image.
* Create a searchable PDF from large scanned PDF documents. 
* Create a searchable PDF from rotated scanned PDF.
* Get OCRed text and its bounds from a scanned PDF document. 
* Native call.
* Customizing the temp folder.
* Performing OCR with different Page Segmentation Mode.
* Performing OCR with different OCR Engine Mode.
* White List.
* Black List.
* Image into searchable PDF or PDF/A.
* Improved accessibility.
* Post-processing.
* Compatible with .NET Framework 4.5 and above.
* Compatible with .NET Core 2.0 and above.