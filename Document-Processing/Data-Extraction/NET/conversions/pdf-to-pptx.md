---
title: Convert PDF to PowerPoint in .NET Smart Data Extractor | Syncfusion
description: Convert PDF documents to PowerPoint using Smart Data Extractor. Transform PDF content into editable, structured PowerPoint presentations in .NET.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Assemblies
---

# Convert PDF to PowerPoint in .NET Smart Data Extractor

PowerPoint (PPTX) is a widely used format for creating and editing professional presentations. The Syncfusion<sup>&reg;</sup> Smart Data Extractor library supports converting PDF and Images into PowerPoint format in .NET, enabling seamless transformation of PDF files into fully editable PowerPoint presentations while preserving the original layout, tables, images, and content structure. This feature makes it easier to repurpose content, create presentations from documents, and integrate document data into .NET applications and business workflows.

## Assemblies and NuGet packages required

Refer to the following links for the assemblies and NuGet packages required based on your target platform to convert PDF or Image as a PowerPoint file using the Syncfusion® Smart Data Extractor library.

* [PDF to PowerPoint Conversion assemblies](/document-processing/data-extraction/net/Assemblies-required)
* [PDF to PowerPoint Conversion NuGet packages](/document-processing/data-extraction/net/Nuget-packages-required)

## Convert PDF or Image to PowerPoint Presentation

To convert a PDF document or Image into a PowerPoint using the **ExtractDataAsPresentation** method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/refs/heads/master/Data-Extraction/Smart-Data-Extractor/Convert-data-as-Presentation-from-PDF/.NET/Convert-data-as-Presentation-from-PDF/Program.cs" %}

using Syncfusion.SmartDataExtractor;
using Syncfusion.Presentation;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
  //Initialize the Data Extractor.
  DataExtractor extractor = new DataExtractor();
  //Extract data as IPresentation.
  IPresentation presentation = extractor.ExtractDataAsPresentation(stream);
  using MemoryStream saveStream = new MemoryStream();
  //Save the extracted PowerPoint data into an output file.
  presentation.Save(saveStream);
  presentation.Close();
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.SmartDataExtractor;
using Syncfusion.Presentation;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
  //Initialize the Data Extractor.
  DataExtractor extractor = new DataExtractor();
  //Extract data as IPresentation.
  IPresentation presentation = extractor.ExtractDataAsPresentation(stream);
  using MemoryStream saveStream = new MemoryStream();
  //Save the extracted PowerPoint data into an output file.
  presentation.Save(saveStream);
  presentation.Close();
}

{% endhighlight %}

{% endtabs %}

N> If you want to convert an image instead of a PDF, replace the input stream with the image file (for example, Input.jpg or Input.png). The rest of the code remains unchanged.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Convert-data-as-Presentation-from-PDF/.NET).

## Convert a range of PDF pages to PowerPoint

To convert a specific range of PDF pages from the PDF document into PowerPoint by using the **ExtractDataAsPresentation** method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using Syncfusion.Presentation;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Set the page range for conversion (example: pages 2 to 4).
    extractor.PageRange = new int[,] { { 2, 4 } };
    //Convert the selected pages into a PowerPoint presentation.
    IPresentation presentation = extractor.ExtractDataAsPresentation(stream);
    using MemoryStream saveStream = new MemoryStream();
    //Save the extracted PowerPoint data into an output file.
	presentation.Save(saveStream);
    presentation.Close();
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using Syncfusion.Presentation;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Set the page range for conversion (example: pages 2 to 4).
    extractor.PageRange = new int[,] { { 2, 4 } };
    //Convert the selected pages to a PowerPoint presentation.
    IPresentation presentation = extractor.ExtractDataAsPresentation(stream);
    //Save the PowerPoint presentation.
    using MemoryStream saveStream = new MemoryStream();
    //Save the extracted PowerPoint data into an output file.
	presentation.Save(saveStream);
    presentation.Close();
}

{% endhighlight %}

{% endtabs %}

N> If you want to convert an image instead of a PDF, replace the input stream with the image file (for example, Input.jpg or Input.png). The rest of the code remains unchanged.



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
