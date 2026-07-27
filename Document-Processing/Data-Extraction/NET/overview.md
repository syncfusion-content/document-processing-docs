---
title: Extract Structured Data in .NET | Syncfusion
canonical_url: "https://www.syncfusioninternal.com/document-sdk/net-pdf-data-extraction"
description: Syncfusion® Data Extraction is a .NET library that extracts tables, forms, text, and images from PDF documents.
platform: document-processing
control: DataExtraction
documentation: UG
keywords: Assemblies
---

# Overview of Smart Data Extractor

.NET **Smart Data Extractor** is a high‑performance, deterministic C# library for extracting structured document content from **PDFs** and **images**. Tailored for modern .NET workflows, it interprets visual layout patterns—lines, boxes, labels, and alignment—to accurately identify and extract **tables**, **text elements**, **images**, **headers**, **footers**, and **form fields**. Each extracted element includes per‑field confidence scores, ensuring reliable validation, seamless export, and smooth integration into applications.

## Key Features of Syncfusion<sup>&reg;</sup> Smart Data Extractor

The following list highlights the core capabilities of the Syncfusion<sup>&reg;</sup> Smart Data Extractor:

* **Document structure extraction:** detects text elements, images, headers/footers, and complete table structures (regions, header rows, columns, cell boundaries, merged cells).  
* **File format support:** works with PDF and common image formats such as JPEG and PNG.  
* **Table extraction:** specialized parsing to recover table rows, columns, header detection, and cell spans.  
* **Form recognition:** detects and extracts form fields (text inputs, checkboxes, radio buttons) with field types and values.  
* **Page‑level control:** extract data from specific pages or defined page ranges.  
* **Confidence thresholding:** filters results based on a configurable confidence score (0.0–1.0).  
* **Deterministic performance:** ensures predictable, repeatable extraction across environments including Windows, Linux, Azure, and Docker.  
 
## JSON Output Structure and Attributes

The Syncfusion® Data Extraction libraries process PDFs and scanned images to extract structured document data—including tables, form fields, text elements, images, headers, and footers—by analyzing layout patterns, table regions, borders, alignment cues, and cell structures. The extracted output is returned as structured JSON with per‑field and per‑cell confidence scores, along with complete document and table hierarchies, making it ready for immediate review, export, or integration into downstream workflows.

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

N> In the Smart Table Extractor root structure, the **FormObjects** element will not be present.

### JSON Attributes

#### Page Object

The Page Object represents the metadata of a page along with all the detected elements it contains in the **Smart Data Extractor**, and the table elements it contains in the **Smart Table Extractor.**

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
<td>List of detected form fields (checkboxes, text boxes, radio buttons, signatures etc.)</td>
</tr>
</tbody>
</table>

N> The **FormObjects** array is not included in the **Smart Table Extractor** output structure, as it is specific to the **Smart Data Extractor** and **Smart Form Recognizer**.

#### PageObjects

PageObjects represent the metadata of a page along with the detected elements it contains—such as text, headers, footers, tables, images, and numbers—in the Smart Data Extractor, while in the Smart Table Extractor they represent the detected table elements on a page.

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
<td>Specifies the row type (for example, tr).</td>
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

FormObjects represent interactive form fields detected on the page, such as text boxes, checkboxes, radio buttons, and signature regions. Each object includes positional data, dimensions, field type, and a confidence score that indicates detection reliability.

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
<td>Numeric identifier for the form field type (for example, 0 = TextArea, 1 = Checkbox, 2 = Radio Button, 3 = Signature).</td>
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
