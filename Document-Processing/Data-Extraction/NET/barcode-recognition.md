---
title: Barcode Recognition in .NET Smart Data Extractor | Syncfusion
description: Extract and recognize barcodes from PDFs and images using Smart Data Extractor. Get structured barcode data in JSON and Markdown formats.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Barcode Recognition, Barcode Extraction

---

# Barcode Recognition in .NET Smart Data Extractor

## Recognize Barcode as JSON from PDF

The Syncfusion<sup>&reg;</sup> Smart Data Extractor library enables barcode extraction from PDF documents and scanned images. The extracted barcode information is returned in JSON format, including properties such as Type, BarcodeType, Content, Threshold, and Bounds.

Additionally, when the output is extracted in Markdown format, barcodes are returned as Base64‑encoded image values, enabling easy rendering and storage of barcode images.

To recognize barcodes, use the following code snippet:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.Text;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data as JSON.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
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
    //Extract data as JSON.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}
			
{% endhighlight %}

{% endtabs %}

N> When content is extracted to Markdown format, barcodes are preserved as images and cannot be retrieved as actual barcode objects.
