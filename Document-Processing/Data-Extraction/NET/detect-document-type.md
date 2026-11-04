---
title: Detect Document Type in .NET Smart Data Extractor | Syncfusion
description: Detect and classify document types from PDFs and images using Smart Data Extractor. The DetectDocumentType API automatically identifies the document category.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Detect Document Type, Document Classification, Document Detection

---

# Detect Document Type in .NET Smart Data Extractor

## Detect Document Type from PDF

The Syncfusion<sup>&reg;</sup> Smart Data Extractor library enables document type detection from PDF documents and images. The DetectDocumentType API examines document content to determine its type.

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

N> The DetectDocumentType API returns the detected document type as a string, enabling intelligent document routing and automated processing in document management systems.
