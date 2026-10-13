---
title: Convert PDF to Excel in .NET Smart Data Extractor |Syncfusion
description: Extract structured data from PDF documents and images as Excel using Smart Data Extractor Library in .NET.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Assemblies
---

# Extract data as Excel from PDF or Image

The **Smart Data Extractor** enables you to process PDF documents or scanned images and export the structured content as **Excel (XLSX DOM)**.

This section covers two scenarios:

- Extracting data as Excel from a PDF document.
- Extracting data as Excel from an image.

## Extract Data as Excel from PDF

To extract structured data from a PDF document using the **ExtractDataAsExcel** method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.SmartDataExtractor;
using Syncfusion.XlsIO;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data as Excel.
    IWorkbook excel = extractor.ExtractDataAsExcel(stream);
    //Save the extracted Excel data into an output file.
    excel.SaveAs("Output.xlsx");
    excel.Close();
}
{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Convert-data-as-Excel-from-PDF/.NET).

## Extract Data as Excel from Image

To extract structured data from an image file using the **ExtractDataAsExcel** method of the **DataExtractor** class, refer to the following code example:

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.SmartDataExtractor;
using Syncfusion.XlsIO;

//Open the input image file as a stream.
using (FileStream stream = new FileStream("Input.png", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data as Excel.
    IWorkbook excel = extractor.ExtractDataAsExcel(stream);
    //Save the extracted Excel data into an output file.
    excel.SaveAs("Output.xlsx");
    excel.Close();
}
{% endhighlight %}
{% endtabs %}


## Supported and Unsupported PDF Elements

The following table lists the PDF elements and their preservation details in the PowerPoint presentation.

<table>
  <thead>
    <tr>
      <th><b>PDF Elements</b></th>
      <th><b>Supported</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Header, Paragraph Title, Document Title</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Image</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Table</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Text Inline Styles</td>
      <td>Yes (Bold and Italic)</td>
    </tr>
    <tr>
      <td>Subscript, Superscript</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Underline, Strikethrough</td>
      <td>No</td>
    </tr>
    <tr>
      <td>List</td>
      <td>Yes (Converted as bullet points)</td>
    </tr>
    <tr>
      <td>Charts and Barcodes</td>
      <td>Yes (Preserved as images)</td>
    </tr>
    <tr>
      <td>Code blocks, Footer, Page Number</td>
      <td>Yes (Preserved as text)</td>
    </tr>
    <tr>
      <td>Link</td>
      <td>No (Preserved as plain text)</td>
    </tr>
  </tbody>
</table>
