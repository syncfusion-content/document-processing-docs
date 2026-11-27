---
title: Detect Document Type in .NET Smart Data Extractor | Syncfusion
description: Detect and classify document types from PDFs and images using Smart Data Extractor. The DetectDocumentType API automatically identifies the document category.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Detect Document Type, Document Classification, Document Detection

---

# Detect Document Type in .NET Smart Data Extractor

## Detect Document Type from PDF or Image

The Syncfusion<sup>&reg;</sup> Smart Data Extractor library can detect the type of a PDF document or image, such as an invoice, receipt, or contract. It compares the text in the document with the keywords defined for each document type and returns the best match, or "Unknown" if no type matches.

Use document type detection to classify incoming files before you extract data or route them to the right processing workflow.

The `DetectDocumentType` method has two forms:

* `DetectDocumentType(stream)` returns the document type name as a string.
* `DetectDocumentType(stream, true)` returns a `DocumentTypeResult` that also contains the confidence score, the matched keywords, and the score of every document type.

To detect the document type, use the following code snippet:

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Detect the document type. Returns "Unknown" if no type matches.
    string documentType = extractor.DetectDocumentType(stream);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Detect the document type. Returns "Unknown" if no type matches.
    string documentType = extractor.DetectDocumentType(stream);
}

{% endhighlight %}

{% endtabs %}

### Get Detection Details

To get more than the type name, pass `true` for the `includeDetectionDetails` parameter. The method then returns a `DocumentTypeResult` with the following properties:

| Property | Type | Description |
|---|---|---|
| `DocumentType` | `string` | The detected document type name, or "Unknown" if no type matches. |
| `Confidence` | `double` | How closely the document matches the detected type, from 0 to 1. A higher value indicates a closer match. The value is 0 for "Unknown". |
| `MatchedKeywords` | `IReadOnlyList<string>` | The keywords found in the document that matched the detected type. Empty when no keywords matched or when `includeDetectionDetails` is `false`. |
| `Scores` | `IReadOnlyDictionary<string, double>` | The score of each document type that was checked. The key is the type name and the value is its score. Empty when `includeDetectionDetails` is `false`. |

The following code snippet reads the result. Use `Confidence` to decide whether to process a document automatically or send it for review.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.Collections.Generic;
using System.IO;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Detect the document type with details.
    DocumentTypeResult result = extractor.DetectDocumentType(stream, true);
    if (result.DocumentType == "Unknown")
    {
        //No document type matched. Handle the file manually.
    }
    else
    {
        string docType = result.DocumentType;
        double confidence = result.Confidence;
        //Keywords that matched the detected type.
        foreach (string keyword in result.MatchedKeywords)
        {
            //Use the keyword for validation or logging.
        }
        //Scores of all checked document types.
        foreach (KeyValuePair<string, double> score in result.Scores)
        {
            string typeName = score.Key;
            double typeScore = score.Value;
        }
    }
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Collections.Generic;
using System.IO;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Detect the document type with details.
    DocumentTypeResult result = extractor.DetectDocumentType(stream, true);
    if (result.DocumentType == "Unknown")
    {
        //No document type matched. Handle the file manually.
    }
    else
    {
        string docType = result.DocumentType;
        double confidence = result.Confidence;
        //Keywords that matched the detected type.
        foreach (string keyword in result.MatchedKeywords)
        {
            //Use the keyword for validation or logging.
        }
        //Scores of all checked document types.
        foreach (KeyValuePair<string, double> score in result.Scores)
        {
            string typeName = score.Key;
            double typeScore = score.Value;
        }
    }
}

{% endhighlight %}

{% endtabs %}

## Customize Document Type Detection

You can change which document types Smart Data Extractor recognizes by using the `DocumentTypes` property. You can add custom types, edit the keywords of existing types, and remove types you do not need. Changes apply only to the `DataExtractor` instance you modify.

### Built-in Document Types

Smart Data Extractor recognizes the following document types by default:

* `Invoice`
* `Receipt`
* `Contract`
* `LeaseAgreement`
* `InsuranceClaim`
* `IDDocument`
* `Form`

To view the keywords of each type, see [List All Document Types](#list-all-document-types).

### Access Document Types

The `DocumentTypes` collection is available on the `DataExtractor` instance:

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.SmartDataExtractor;

DataExtractor extractor = new DataExtractor();
DocumentTypeDefinitionCollection definitions = extractor.DocumentTypes;

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.SmartDataExtractor;

DataExtractor extractor = new DataExtractor();
DocumentTypeDefinitionCollection definitions = extractor.DocumentTypes;

{% endhighlight %}

{% endtabs %}

### Add Custom Document Types

Add a custom document type with its keywords. Choose keywords that are specific to the document type.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Add a custom document type with keywords.
    extractor.DocumentTypes.Add("PurchaseOrder", new[] { "purchase order", "po number", "ship to", "order quantity" });
    //Detection now recognizes PurchaseOrder documents.
    DocumentTypeResult result = extractor.DetectDocumentType(stream, true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Add a custom document type with keywords.
    extractor.DocumentTypes.Add("PurchaseOrder", new[] { "purchase order", "po number", "ship to", "order quantity" });
    //Detection now recognizes PurchaseOrder documents.
    DocumentTypeResult result = extractor.DetectDocumentType(stream, true);
}

{% endhighlight %}

{% endtabs %}

N> Document type names must not be empty or whitespace, must be unique, and cannot be "Unknown", which is reserved. Keywords are not case-sensitive. Keywords shared with another type, such as "total" or "vendor", can lower the confidence of the result.

### Modify Existing Keywords

Add or remove keywords for any document type, built-in or custom:

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.SmartDataExtractor;

DataExtractor extractor = new DataExtractor();
//Get an existing definition.
DocumentTypeDefinition invoice = extractor.DocumentTypes["Invoice"];
//Add keywords.
invoice.Keywords.Add("bill no");
invoice.Keywords.Add("invoice amount");
//Remove a keyword that does not apply to your documents.
invoice.Keywords.Remove("price");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.SmartDataExtractor;

DataExtractor extractor = new DataExtractor();
//Get an existing definition.
DocumentTypeDefinition invoice = extractor.DocumentTypes["Invoice"];
//Add keywords.
invoice.Keywords.Add("bill no");
invoice.Keywords.Add("invoice amount");
//Remove a keyword that does not apply to your documents.
invoice.Keywords.Remove("price");

{% endhighlight %}

{% endtabs %}

### Remove Document Types

Remove a built-in or custom document type from the collection. The method returns `true` if the type was removed.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.SmartDataExtractor;

DataExtractor extractor = new DataExtractor();
bool removed = extractor.DocumentTypes.Remove("LeaseAgreement");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.SmartDataExtractor;

DataExtractor extractor = new DataExtractor();
bool removed = extractor.DocumentTypes.Remove("LeaseAgreement");

{% endhighlight %}

{% endtabs %}

### Check Whether a Document Type Exists

The check is not case-sensitive.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.SmartDataExtractor;

DataExtractor extractor = new DataExtractor();
if (extractor.DocumentTypes.Contains("Invoice"))
{
    //The Invoice type is available.
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.SmartDataExtractor;

DataExtractor extractor = new DataExtractor();
if (extractor.DocumentTypes.Contains("Invoice"))
{
    //The Invoice type is available.
}

{% endhighlight %}

{% endtabs %}

### Reset to Built-in Types

Restore all built-in document types and remove custom types:

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.SmartDataExtractor;

DataExtractor extractor = new DataExtractor();
//Make customizations.
extractor.DocumentTypes.Add("PurchaseOrder", new[] { "purchase order", "po number", "ship to", "order quantity" });
extractor.DocumentTypes.Remove("Receipt");
//Reset to the built-in types.
extractor.DocumentTypes.Reset();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.SmartDataExtractor;

DataExtractor extractor = new DataExtractor();
//Make customizations.
extractor.DocumentTypes.Add("PurchaseOrder", new[] { "purchase order", "po number", "ship to", "order quantity" });
extractor.DocumentTypes.Remove("Receipt");
//Reset to the built-in types.
extractor.DocumentTypes.Reset();

{% endhighlight %}

{% endtabs %}

### List All Document Types

List each document type and its keywords:

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.SmartDataExtractor;

DataExtractor extractor = new DataExtractor();
foreach (DocumentTypeDefinition definition in extractor.DocumentTypes)
{
    string typeName = definition.Name;
    foreach (string keyword in definition.Keywords)
    {
        //Use the keyword for validation or logging.
    }
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.SmartDataExtractor;

DataExtractor extractor = new DataExtractor();
foreach (DocumentTypeDefinition definition in extractor.DocumentTypes)
{
    string typeName = definition.Name;
    foreach (string keyword in definition.Keywords)
    {
        //Use the keyword for validation or logging.
    }
}

{% endhighlight %}

{% endtabs %}
