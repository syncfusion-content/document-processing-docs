---
title: Overview for SmartTableExtractor | Syncfusion
description: Learn how to detects form data from PDFs and scanned images using Syncfusion&reg; Essential Studio&reg; SmartTableExtractor.
platform: document-processing
control: PDF
documentation: UG
keywords: Assemblies
---

# Overview of Smart Table Extractor

Syncfusion® Smart Table Extractor is a high accuracy, deterministic C# library that detects and extracts tabular data from PDFs and scanned images for .NET workflows, It detects table regions, header rows, columns, and cell spans (merged cells) and provides per-cell confidence scores and structured exports ready for downstream processing.

## Key Features of Essential<sup>&reg;</sup> Smart Table Extractor

The following list shows the key features available in the Essential<sup>&reg;</sup> SmartTableExtractor.

* **Table structure extraction:** Identifies table regions, header rows, columns, row and column spans, and cell boundaries.
* **File format support:** Works with PDF and common image formats (JPEG, PNG).
* **Border type handling:** Extract both bordered and border-less tables.
* **Page-level control:** Extract tables from specific pages or defined page ranges.
* **Confidence thresholding:** Results are filtered based on a configurable confidence score (0.0–1.0).
* **Deterministic performance:** Designed for predictable, repeatable extraction across environments (Windows, Linux, Azure, Docker).

## JSON Output Structure and Attributes

The Smart Table Extractor library extracts tabular data from PDFs and scanned images by analyzing table regions, borders, alignment patterns, and cell structures. It returns structured JSON with per-cell confidence scores and complete table hierarchy information.

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
      "PageObjects": []
    }
  ]
}

{% endhighlight %}

{% endtabs %}

### JSON Attributes

#### Page Object

The Page Object represents the metadata of a page along with the table elements it contains.

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
</tbody>
</table>

#### PageObjects

PageObjects represent detected table elements on a page.

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