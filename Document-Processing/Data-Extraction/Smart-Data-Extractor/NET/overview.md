---
title: Overview for SmartDataExtractor | Syncfusion
description: Learn how to detects form data from PDFs and scanned images using Syncfusion&reg; Essential Studio&reg; SmartDataExtractor.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Assemblies
---

# Overview of Smart Data Extractor

Syncfusion® Smart Data Extractor is a high performance, deterministic C# library that extracts complete document structures from PDFs and images. Designed for .NET workflows, it analyzes visual layout lines, boxes, labels, and alignment to locate and extract elements such as table structure, text elements, images, headers, footers, and form fields with per field confidence scores for immediate review, export, or integration.

## Key Features of Essential<sup>&reg;</sup> Smart Data Extractor

The following list shows the key features available in the Essential<sup>&reg;</sup> SmartDataExtractor.

* **Document structure extraction:** Detects text elements, images, headers/footers, and complete table structure (regions, header rows, columns, cell boundaries, merged cells).
* **File format support:** Works with PDF and common image formats (JPEG, PNG).
* **Table extraction:** Specialized parsing to recover table rows, columns, header detection and cell spans.
* **Form recognition:** Detects and extracts form fields (text inputs, checkboxes, radio buttons) with field types and values.
* **Page-level control:** Extract data from specific pages or defined page ranges.
* **Confidence thresholding:** Results are filtered based on a configurable confidence score (0.0–1.0).
* **Deterministic performance:** Designed for predictable, repeatable extraction across environments (Windows, Linux, Azure, Docker).

## JSON Output Structure and Attributes

The Smart Data Extractor library processes PDFs and scanned images to extract structured document data including tables, form fields, text elements, images, headers, and footers. The extracted output is returned as structured JSON that includes per-field confidence scores and a complete document hierarchy, making it ready for immediate review, export, or integration into downstream workflows.

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

### JSON Attributes

#### Page Object

The Page Object represents the metadata of a page along with all the detected elements it contains.

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

#### PageObjects

PageObjects represent detected elements on a page such as text, headers, footers, tables, images, and numbers.

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
<td>String</td>
<td>Extracted text or value associated with the object (if applicable).</td>
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

