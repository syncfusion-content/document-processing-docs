---
title: Detect Document Type in .NET Smart Data Extractor | Syncfusion
description: Detect and classify document types from PDFs and images using Smart Data Extractor. Automatically identify document format and type using the DetectDocumentType API.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Detect Document Type, Document Classification, Document Detection

---

# Detect Document Type in .NET Smart Data Extractor

## Detect Document Type from PDF

The Syncfusion<sup>&reg;</sup> Smart Data Extractor library enables document type detection from PDF documents and images. The DetectDocumentType API automatically identifies and classifies the document format, including properties such as DocumentType, Confidence, and Format.

This feature is useful for automated document processing workflows where you need to classify incoming documents before extracting specific data or routing them to appropriate processing pipelines.

To detect document type, use the following code snippet:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.Text;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Detect document type.
    string documentType = extractor.DetectDocumentType(stream);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Text;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Detect document type.
    string documentType = extractor.DetectDocumentType(stream);
}
			
{% endhighlight %}

{% endtabs %}

N> The DetectDocumentType API returns structured information about the identified document type, enabling intelligent document routing and automated processing in document management systems.
