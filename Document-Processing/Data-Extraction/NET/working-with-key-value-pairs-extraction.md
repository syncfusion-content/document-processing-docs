---
title: Key-Value Pair Extraction in .NET Smart Data Extractor | Syncfusion
description: Extract key-value pairs from PDFs and images using Smart Data Extractor. Output structured JSON with bounding boxes and confidence scores.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Key-Value Pair Extraction, Form Data Extraction, JSON Output
---

# Key-Value Pair Extraction in .NET Smart Data Extractor

## Extract Key-Value Pairs as JSON from PDF

The Syncfusion Smart Data Extractor library enables key-value pair extraction from PDF documents and scanned images. The extracted information is returned in JSON format, with each key-value pair containing the detected key text, corresponding value text, bounding region information, and confidence score.

The key-value pair extraction feature identifies related labels and values from structured, semi-structured, and form-based documents, making it suitable for extracting information from invoices, claims, applications, and other business documents.

To extract key-value pairs, use the following code snippet:

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using System.Text;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();

    //Extract data as Key-Value Pairs.
    string data = extractor.ExtractKeyValuePairs(stream);

    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}
{% endhighlight %}
{% endtabs %}

## JSON Output Structure and Attributes

The Syncfusion Smart Data Extractor library extracts key-value pairs from PDF documents and scanned images. The extracted output is returned as structured JSON containing page information, detected keys and values, their bounding coordinates, and confidence scores, making it easy to review, validate, and process the extracted data.

### Root Structure

Below is the root structure of the JSON result:

```json
{
  "Pages": [
    {
      "PageNumber": 1,
      "Width": 595.0,
      "Height": 842.0,
      "KeyValuePairs": [
        {
          "Key": "",
          "KeyBounds": [],
          "Value": "",
          "ValueBounds": [],
          "Confidence": 1.0
        }
      ]
    }
  ]
}
```

### JSON Attributes

#### Page Object

The Page Object represents the metadata of a page along with the key-value pairs detected on that page.

| Attribute | Type | Description |
|------------|------|-------------|
| PageNumber | Integer | Sequential number of the page in the document. |
| Width | Float | Page width in points/pixels. |
| Height | Float | Page height in points/pixels. |
| KeyValuePairs | Array | List of detected key-value pairs on the page. |

#### KeyValuePair Object

The KeyValuePair Object represents a key and its corresponding value detected on a page, along with their bounding coordinates and confidence score.

| Attribute | Type | Description |
|------------|------|-------------|
| Key | String | The extracted key or label text. |
| KeyBounds | Array of Floats | The bounding box coordinates `[X, Y, Width, Height]` representing the key's position and size on the page. |
| Value | String | The extracted value associated with the key. |
| ValueBounds | Array of Floats | The bounding box coordinates `[X, Y, Width, Height]` representing the value's position and size on the page. |
| Confidence | Float | Confidence score (0–1) indicating the accuracy of the key-value association. |

## Extract Key-Value Pairs with Table Detection and OCR Settings

To extract key-value pairs from PDF documents while enabling table detection and configuring OCR settings, use the following code example:

```csharp
using System.Text;
using Syncfusion.SmartDataExtractor;
using Syncfusion.OCRProcessor;

using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();

    // Enable table detection.
    extractor.EnableTableDetection = true;

    // Initialize the OCR processor.
    OCRProcessor processor = new OCRProcessor();

    // Set OCR language.
    processor.Settings.Language = Languages.English;

    // Set Tesseract OCR engine version.
    processor.Settings.TesseractVersion = TesseractVersion.Version5_0;

    // Assign the configured OCR processor to the Data Extractor.
    extractor.OCRProcessor = processor;

    // Extract data as Key-Value Pairs.
    string data = extractor.ExtractKeyValuePairs(stream);

    // Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}
```

## Table-to-Key-Value Mapping

When table detection is enabled, the extraction engine automatically converts table content into key-value pairs based on the table structure.

### Two-Column Tables

For tables containing exactly two columns:

- The first column is treated as the **Key**.
- The second column is treated as the **Value**.
- Each row is converted into a separate key-value pair.

**Example**

| Key | Value |
|------|------|
| Name | John Smith |
| Email | john@example.com |
| Phone | +1 234 567 890 |

JSON Output:

```json
{
  "Pages": [
    {
      "PageNumber": 1,
      "Width": 595.0,
      "Height": 842.0,
      "KeyValuePairs": [
        {
          "Key": "Name",
          "Value": "John Smith",
          "Confidence": 1.0
        },
        {
          "Key": "Email",
          "Value": "john@example.com",
          "Confidence": 1.0
        },
        {
          "Key": "Phone",
          "Value": "+1 234 567 890",
          "Confidence": 1.0
        }
      ]
    }
  ]
}
```

### Multi-Column Tables

For tables containing more than two columns:

- The header row is treated as the set of keys.
- Each subsequent row generates a collection of key-value pairs.
- Each cell value is mapped to its corresponding column header.

**Example**

| Employee ID | Name | Department | Location |
|-------------|------|------------|----------|
| E001 | John Smith | Sales | New York |
| E002 | Mary Jones | HR | London |

JSON Output:

```json
{
  "Pages": [
    {
      "PageNumber": 1,
      "Width": 595.0,
      "Height": 842.0,
      "KeyValuePairs": [
        {
          "Key": "Employee ID",
          "Value": "E001",
          "Confidence": 1.0
        },
        {
          "Key": "Name",
          "Value": "John Smith",
          "Confidence": 1.0
        },
        {
          "Key": "Department",
          "Value": "Sales",
          "Confidence": 1.0
        },
        {
          "Key": "Location",
          "Value": "New York",
          "Confidence": 1.0
        },
        {
          "Key": "Employee ID",
          "Value": "E002",
          "Confidence": 1.0
        },
        {
          "Key": "Name",
          "Value": "Mary Jones",
          "Confidence": 1.0
        },
        {
          "Key": "Department",
          "Value": "HR",
          "Confidence": 1.0
        },
        {
          "Key": "Location",
          "Value": "London",
          "Confidence": 1.0
        }
      ]
    }
  ]
}
```
