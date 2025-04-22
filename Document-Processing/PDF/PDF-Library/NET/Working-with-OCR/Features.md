---
title: Perform OCR on PDF and image files | Syncfusion
description: Learn how to perform OCR on scanned PDF documents and images with different tesseract version using Syncfusion .NET OCR library.
platform: document-processing
control: PDF
documentation: UG
keywords: Assemblies
--- 

# OCR Processor Features 

## Performing OCR for an entire document

To perform OCR for an entire PDF document using [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class. Refer to the following code example. 

{% tabs %}   

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/OCR/.NET/Perform-OCR-for-the-entire-PDF-document/Perform-OCR-for-the-entire-PDF-document/Program.cs, 300" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document);
    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor.
Using processor As OCRProcessor = New OCRProcessor()
    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)
    'Set OCR language. 
    processor.Settings.Language = Languages.English
    'Perform OCR with input document and tessdata (Language packs). 
    processor.PerformOCR(document)
    'Create file stream.
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %} 

N> The [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method returns only the text OCRed by OCRProcessor. Other existing text in the PDF page will not be returned in this method. Please check [text extraction](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-text-extraction) feature for this.

You can downloaded a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/OCR/.NET/Perform-OCR-for-the-entire-PDF-document).

## Performing OCR for a region of the document

To perform OCR on a particular region or several regions of a PDF page with the help of [PageRegion](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.PageRegion.html) class in [OCRSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRSettings.html), refer to the following code sample. 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/OCR/.NET/Perform-OCR-on-particular-region-of-PDF-document/Perform-OCR-on-particular-region-of-PDF-document/Program.cs, 300" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);

    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Assign rectangles to the page.
    RectangleF rect = new RectangleF(0, 100, 950, 150);
    List<PageRegion> pageRegions = new List<PageRegion>();
    //Create page region.
    PageRegion region = new PageRegion();
    //Set page index.
    region.PageIndex = 0;
    //Set page region.
    region.PageRegions = new RectangleF[] { rect };
    //Add region to page region.
    pageRegions.Add(region);
    //Set page regions.
    processor.Settings.Regions = pageRegions;

    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor. 
Using processor As OCRProcessor = New OCRProcessor()
    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)

    'Set OCR language. 
    processor.Settings.Language = Languages.English
    'Assign rectangles to the page.
    Dim rect As RectangleF = New RectangleF(0, 100, 950, 150)
    Dim pageRegions As List(Of PageRegion) = New List(Of PageRegion)()
    'Create page region. 
    Dim region As PageRegion = New PageRegion()
    'Set page index.
    region.PageIndex = 0
    'Set page region.
    region.PageRegions = New RectangleF() {rect}
    'Add region to page region.
    pageRegions.Add(region)
    'Set page regions.
    processor.Settings.Regions = pageRegions

    'Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document)

    'Create file stream.
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document. 
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %}  

You can downloaded a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/OCR/.NET/Perform-OCR-on-particular-region-of-PDF-document).

## Performing OCR with tesseract version 3.05

The [TesseractVersion](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRSettings.html#Syncfusion_OCRProcessor_OCRSettings_TesseractVersion) property is used to switch the tesseract version between 3.02 and 3.05. By default, OCR works with tesseract version 3.02.

N> The starting supported version of tesseract in ASP.NET Core is 4.0. So the lower tesseract versions 3.02 and 3.05 are not supported and we don't have the property called ``TesseractVersion`` in ASP.NET Core platform.

The following code sample demonstrates the OCR processor with Tesseract version 3.05 for PDF documents.
 
{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);

    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Set tesseract OCR Engine.
    processor.Settings.TesseractVersion = TesseractVersion.Version3_05;
    //Perform OCR with input document, tessdata (Language packs) and enabling isMemoryOptimized property.
    processor.PerformOCR(document);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor with tesseract binaries folder path. 
Using processor As OCRProcessor = New OCRProcessor("TesseractBinaries/3.05/")
    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)

    'Set OCR language. 
    processor.Settings.Language = Languages.English
    'Set tesseract OCR Engine. 
    processor.Settings.TesseractVersion = TesseractVersion.Version3_05
    'Perform OCR with input document, tessdata (Language packs) and enabling isMemoryOptimized property.
    processor.PerformOCR(document)

    'Create file stream. 
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document. 
    document.Close(True)
End Using
			
{% endhighlight %}

{% endtabs %}

## Performing OCR with Tesseract Version 4.0

The [TesseractVersion](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRSettings.html#Syncfusion_OCRProcessor_OCRSettings_TesseractVersion) property is used to switch the tesseract version to 4.0. By default, OCR will be performed with tesseract version 3.02.

N> In ASP.NET Core platform, the default and starting supported version of tesseract is 4.0. So we did not have the property called ``TesseractVersion`` in ASP.NET Core platform. 

The following code sample explains the OCR processor with Tesseract version 4.0 for PDF documents.
 
{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);

    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Set tesseract OCR Engine.
    processor.Settings.TesseractVersion = TesseractVersion.Version4_0;
    //Perform OCR with input document, tessdata (Language packs) and enabling isMemoryOptimized property.
    processor.PerformOCR(document);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor with tesseract binaries folder path. 
Using processor As OCRProcessor = New OCRProcessor("TesseractBinaries/4.0/")
    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)

    'Set OCR language. 
    processor.Settings.Language = Languages.English
    'Set tesseract OCR Engine. 
    processor.Settings.TesseractVersion = TesseractVersion.Version4_0
    'Perform OCR with input document, tessdata (Language packs) and enabling isMemoryOptimized property.
    processor.PerformOCR(document)

    'Create file stream. 
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document. 
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %}  

## Performing OCR on image

The below code example illustrates how to perform OCR on image file using [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_System_Drawing_Bitmap_System_String_) method in [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/OCR/.NET/Perform-OCR-on-image-file/Perform-OCR-on-image-file/Program.cs, 300" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load the input image. 
    FileStream imageStream = new FileStream("Input.jpg", FileMode.Open);
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Perform OCR with input document, tessdata (Language packs) and enabling isMemoryOptimized property.
    String OCRText = processor.PerformOCR(imageStream);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor. 
Using processor As OCRProcessor = New OCRProcessor()
    'Load the input image. 
    Dim imageStream As FileStream = New FileStream("Input.jpg", FileMode.Open)
    'Set OCR language.
    processor.Settings.Language = Languages.English
    'Perform OCR with input document, tessdata (Language packs) and enabling isMemoryOptimized property.
    Dim ocrText As String = processor.PerformOCR(imageStream)
End Using

{% endhighlight %}

{% endtabs %}  

You can downloaded a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/OCR/.NET/Perform-OCR-on-image-file).

You can get the OCRed Unicode text from an image file by using the ``UnicodeFont`` property in [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html). For more information, refer to the following code sample. 

{% tabs %} 

{% highlight c# tabtitle="ASP.NET Core" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load the input image. 
    FileStream imageStream = new FileStream("Input.jpg", FileMode.Open);

    //Set OCR language.
    processor.Settings.Language = Languages.English;

    //Get stream from the font file. 
    FileStream fontStream = new FileStream(@"ARIALUNI.ttf", FileMode.Open);
    //Sets Unicode font to preserve the Unicode characters in a PDF document.
    processor.UnicodeFont = new PdfTrueTypeFont(fontStream, 8);

    //Perform OCR with input document, tessdata (Language packs) and enabling isMemoryOptimized property.
    String OCRText = processor.PerformOCR(imageStream);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//By default, Unicode characters can be extracted from image file in .NET Framework applications like WF, WPF, ASP.NET and ASP.NET MVC.

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

//By default, Unicode characters can be extracted from image file in .NET Framework applications like WF, WPF, ASP.NET and ASP.NET MVC.

{% endhighlight %}

{% endtabs %}  

## Performing OCR for large PDF documents

To optimize memory to performing OCR on large PDF documents, enable the ``isMemoryOptimized`` property in [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_System_Boolean_) method of [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class. Optimization will be effective only with Multithreading environment or PDF document with more images. For more details, refer to the following code examples.

N> Memory optimization for performing OCR on large PDF documents is not supported in ASP.NET Core platform. 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Perform OCR with input document, tessdata (Language packs) and enable isMemoryOptimized property.
    processor.PerformOCR(document);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor. 
Using processor As OCRProcessor = New OCRProcessor()

    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)
    'Set OCR language. 
    processor.Settings.Language = Languages.English
    'Perform OCR with input document, tessdata (Language packs) and enable isMemoryOptimized property. 
    processor.PerformOCR(document)

    'Create file stream. 
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using

    'Close the document.  
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %}  

## Performing OCR on rotated page of PDF document

You can get the OCRed text from the rotated page of PDF document using the [PageSegment](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRSettings.html#Syncfusion_OCRProcessor_OCRSettings_PageSegment) property by specifying ``AutoOsd`` through [PageSegmentMode](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.PageSegmentMode.html) Enum. For more details, refer to the following code sample. 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Set OCR page auto detection rotation.
    processor.Settings.PageSegment = PageSegMode.AutoOsd;
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor. 
Using processor As OCRProcessor = New OCRProcessor()

    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)
    'Set OCR language. 
    processor.Settings.Language = Languages.English
    'Set OCR page auto detection rotation. 
    processor.Settings.PageSegment = PageSegMode.AutoOsd
    'Perform OCR with input document and tessdata (Language packs). 
    processor.PerformOCR(document)

    'Create file stream. 
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream. 
        document.Save(outputFileStream)
    End Using

    'Close the document.
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %}  

You can downloaded a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/OCR/.NET/Perform-OCR-on-the-rotated-page-of-the-PDF-document).

## Optimizing OCR Performance

We can improve the speed and accuracy of the OCR process by using the [tessdata_fast](https://github.com/tesseract-ocr/tessdata_fast) or [tessdata_best](https://github.com/tesseract-ocr/tessdata_best) trained data files. Download the tessdata_best or tessdata_fast binaries and set the directory path in the TessDataPath property of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class.

For more details, refer to the following code sample.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{

    // Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
    PdfLoadedDocument pdfLoadedDocument = new PdfLoadedDocument(stream);

    // Set the path to the tessdata folder.
    processor.TessDataPath = @"/path/to/tessdata-fast/or/tessdata-best";

    // Perform OCR on the loaded PDF document.
    processor.PerformOCR(pdfLoadedDocument);

    // Create a file stream to save the processed PDF document.
    using (FileStream outputFileStream = new FileStream(@"Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        // Save the processed PDF document to the specified file stream.
        pdfLoadedDocument.Save(outputFileStream);
    }
    // Close the loaded PDF document.
    pdfLoadedDocument.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Initialize the OCR processor.
Using processor As New OCRProcessor()

    ' Load an existing PDF document.
    Dim stream As New FileStream("Input.pdf", FileMode.Open, FileAccess.Read)
    Dim pdfLoadedDocument As New PdfLoadedDocument(stream)

    ' Set the path to the tessdata folder.
    processor.TessDataPath = "/path/to/tessdata-fast/or/tessdata-best"

    ' Perform OCR on the loaded PDF document.
    processor.PerformOCR(pdfLoadedDocument)

    ' Create a file stream to save the processed PDF document.
    Using outputFileStream As New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        ' Save the processed PDF document to the specified file stream.
        pdfLoadedDocument.Save(outputFileStream)
    End Using

    ' Close the loaded PDF document.
    pdfLoadedDocument.Close(True)

End Using

{% endhighlight %}

{% endtabs %} 

## Layout result from OCR

You can get the OCRed text and its bounds from a scanned PDF document by using the [OCRLayoutResult](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRLayoutResult.html) Class. Refer to the following code sample. 
 
{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);

    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Create the layout result. 
    OCRLayoutResult layoutResult = new OCRLayoutResult();
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document, @"Tessdata/", out layoutResult);
    //Get OCRed line collection from first page.
    OCRLineCollection lines = layoutResult.Pages[0].Lines;
    //Get each OCR'ed line and its bounds.
    foreach (Line line in lines)
    {
        string text = line.Text;
        RectangleF bounds = line.Rectangle;
    }

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor. 
Using processor As OCRProcessor = New OCRProcessor()

    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)
    'Set OCR language.
    processor.Settings.Language = Languages.English
    'Create the layout result. 
    Dim layoutResult As OCRLayoutResult = New OCRLayoutResult()
    'Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document, "Tessdata/", layoutResult)
    'Get OCR'ed line collection from first page. 
    Dim lines As OCRLineCollection = layoutResult.Pages(0).Lines
    'Get each OCR'ed line and its bounds. 
    For Each line As Line In lines
        Dim text As String = line.Text
        Dim bounds As RectangleF = line.Rectangle
    Next

    'Create file stream. 
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document.
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %} 

You can downloaded a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/OCR/.NET/Get-the-OCR'ed-text-and-its-bounds-from-an-input-PDF).

## Native call

Enabling native calls will not launch any temporary process for OCR processing; instead, it will invoke the native calls.

N> The starting supported version of tesseract in ASP.NET Core is 4.0. So, the lower tesseract versions 3.02 and 3.05 are not supported and we don't have the property called ``TesseractVersion`` and ``EnableNativeCall ``  in ASP.NET Core platform. 

### Tesseract 3.02

Tesseract 3.02 supports only 32-bit version. By default, OCR works with this tesseract version 3.02. 

N> Enabling native calls will not work in 64-bit tesseract 3.02 version. Instead, a temporary process will be launched for OCR processing.

The following code sample demonstrates the OCR processor with native call support of tesseract 3.02 by setting [TesseractVersion](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRSettings.html#Syncfusion_OCRProcessor_OCRSettings_TesseractVersion) as 3.02. 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Set tesseract OCR Engine.
    processor.Settings.TesseractVersion = TesseractVersion.Version3_02;
    //Perform OCR with input document, tessdata (Language packs) and enabling isMemoryOptimized property.
    processor.PerformOCR(document);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor. 
Using processor As OCRProcessor = New OCRProcessor()

    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)
    'Set OCR language. 
    processor.Settings.Language = Languages.English
    'Set tesseract OCR Engine. 
    processor.Settings.TesseractVersion = TesseractVersion.Version3_02
    'Perform OCR with input document, tessdata (Language packs) and enabling isMemoryOptimized property.
    processor.PerformOCR(document)

    'Create file stream. 
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document. 
    document.Close(True)
End Using
			
{% endhighlight %}

{% endtabs %}

### Tesseract 3.05

Tesseract 3.05 supports the native call for both x86 and x64 architectures. By default, the x86 tesseract binaries are available with Syncfusion<sup>&reg;</sup> NuGet package or the tesseract installer. 

You can download the x64 supporting tesseract binaries from the following link.
[Tesseract 64-bit binaries](http://www.syncfusion.com/downloads/support/directtrac/general/ze/Tesseract3.05_x641904984914)

N> This 64-bit binaries are required only when the native call property is enabled.
N> Make sure to provide the 64-bit binaries path while using the 64-bit environment.

The following code sample demonstrates the OCR processor with native call support of tesseract 3.05 by setting [TesseractVersion](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRSettings.html#Syncfusion_OCRProcessor_OCRSettings_TesseractVersion) as 3.05.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Set tesseract OCR Engine.
    processor.Settings.TesseractVersion = TesseractVersion.Version3_05;
    //Set enable native call.
    processor.Settings.EnableNativeCall = true;
    //Perform OCR with input document, tessdata (Language packs) and enabling isMemoryOptimized property.
    processor.PerformOCR(document);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor with tesseract binaries folder path. 
Using processor As OCRProcessor = New OCRProcessor()

    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)
    'Set OCR language. 
    processor.Settings.Language = Languages.English
    'Set tesseract OCR Engine. 
    processor.Settings.TesseractVersion = TesseractVersion.Version3_05
    'Set enable native call
    processor.Settings.EnableNativeCall = True
    'Perform OCR with input document, tessdata (Language packs) and enabling isMemoryOptimized property.
    processor.PerformOCR(document)

    'Create file stream. 
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document. 
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %}  

### Advantages of Native Call over Normal API 

Enabling this property will process OCR with native calls (PInvoke) instead of surrogate process.
For surrogate process, it requires permission for creating and executing a process, whereas the native calls (PInvoke) does not required. And also, performance will be better in PInvoke instead of surrogate process.

## Customizing temp folder

While performing OCR on an existing scanned PDF document, the OCR Processor will create temporary files (.temp, .tiff, .txt) and the files are deleted after the process is completed. You can change this temporary files folder location using the [TempFolder](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRSettings.html#Syncfusion_OCRProcessor_OCRSettings_TempFolder) property available in the [OCRSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRSettings.html) Instance. Refer to the following code sample to change the path of temp folder when performing the OCR. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Set custom temp file path location.
    processor.Settings.TempFolder = "D:/Temp/";
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document);
    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor. 
Using processor As OCRProcessor = New OCRProcessor()

    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)
    'Set OCR language. 
    processor.Settings.Language = Languages.English
    'Set custom temp file path location.
    processor.Settings.TempFolder = "D:/Temp/"
    'Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document)

    'Create file stream. 
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document. 
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %} 

You can downloaded a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/OCR/.NET/Set-temp-folder-while-performing-OCR).

## Performing OCR with different Page Segmentation Mode

The [PageSegment](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRSettings.html#Syncfusion_OCRProcessor_OCRSettings_PageSegment) property is used to set the page segmentation mode. By default, OCR works with the "Auto" page segmentation mode. Kindly refer to the following code example to perform OCR with different page segmentation mode.

The following table explains page segmentation modes and their purposes.

<table>
<thead>
<tr>
<th>
Page Segment Mode<br/><br/></th><th>
Description<br/><br/></th></tr>
</thead>
<tbody>
<tr>
<td>
OsdOnly<br/><br/></td><td>
Detects orientation and script of the page without performing OCR.<br/><br/></td></tr>
<tr>
<td>
AutoOsd<br/><br/></td><td>
Automatically performs OCR with orientation and script detection.<br/><br/></td></tr>
<tr>
<td>
AutoOnly<br/><br/></td><td>
Automatically detects the text layout but skips orientation and script detection.<br/><br/></td></tr>
<tr>
<td>
Auto<br/><br/></td><td>
Fully automatic page layout analysis for OCR.<br/><br/></td></tr>
<tr>
<td>
SingleColumn<br/><br/></td><td>
Processes the page as a single column of text.<br/><br/></td></tr>
<tr>
<td>
SingleBlock<br/><br/></td><td>
Treats the page as a single uniform block of text and graphics.<br/><br/></td></tr>
<tr>
<td>
SingleLine<br/><br/></td><td>
Processes a single line of text.<br/><br/></td></tr>
<tr>
<td>
SingleWord<br/><br/></td><td>
Recognizes a single word on the page.<br/><br/></td></tr>
<tr>
<td>
CirclesWord<br/><br/></td><td>
Detects a word inside a circle (used for specific OCR tasks).<br/><br/></td></tr>
<tr>
<td>
SingleChar<br/><br/></td><td>
Processes a single character from the page.<br/><br/></td></tr>
<tr>
<td>
SparseText<br/><br/></td><td>
Recognizes sparse text scattered across the page, suitable for partial text detection.<br/><br/></td></tr>
<tr>
<td>
RawLine<br/><br/></td><td>
Treats the page as a single line, avoiding text layout analysis and assuming uniform spacing.<br/><br/></td></tr>
</tbody>
</table>

N> The page segmentation mode is supported only in the Tesseract version 4.0 and above.
 
{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //** For .NET Framework only **.
    //processor.Settings.TesseractVersion = TesseractVersion.Version4_0;
    //Set OCR Page segment mode to process.
    processor.Settings.PageSegment = PageSegMode.AutoOsd;
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor. 
Using processor As OCRProcessor = New OCRProcessor()

    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)
    'Set OCR language. 
    processor.Settings.Language = Languages.English
    ' ** For .NET Framework only **.
    'processor.Settings.TesseractVersion = TesseractVersion.Version4_0
    'Set OCR Page segment mode to process.
    processor.Settings.PageSegment = PageSegMode.AutoOsd
    'Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document)

    'Create file stream. 
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document. 
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %} 

## Performing OCR with different OCR Engine Mode

The [OCREngineMode](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRSettings.html#Syncfusion_OCRProcessor_OCRSettings_OCREngineMode) property is used to set the OCR Engine modes. By default, OCR works with OCR Engine mode "Default". Refer to the following code example to perform OCR with different OCR engine mode. 
 
{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Set tesseract version. ** For .NET Framework only. **
    //processor.Settings.TesseractVersion = TesseractVersion.Version4_0;
    //Set OCR engine mode to process.
    processor.Settings.OCREngineMode = OCREngineMode.LSTMOnly;
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor. 
Using processor As OCRProcessor = New OCRProcessor()

    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)
    'Set OCR language. 
    processor.Settings.Language = Languages.English
    'Set tesseract version. ** For .NET Framework only. **
    'processor.Settings.TesseractVersion = TesseractVersion.Version4_0
    'Set OCR engine mode to process.
    processor.Settings.OCREngineMode = OCREngineMode.LSTMOnly
    'Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document)

    'Create file stream. 
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document. 
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %} 

N> The OCR Engine Mode is supported only in the Tesseract version 4.0 and above.

## White List

The [WhiteList](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRSettings.html#Syncfusion_OCRProcessor_OCRSettings_WhiteList) property specifies a list of characters that the OCR engine is only allowed to recognize. If a character is not on the white list, it will not be included in the output OCR results. For more information, refer to the following code sample. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Set tesseract version. ** For .NET Framework only. **
    //processor.Settings.TesseractVersion = TesseractVersion.Version4_0;
    //Set OCR engine mode to process.
    processor.Settings.OCREngineMode = OCREngineMode.LSTMOnly;
    //Set WhiteList Property.
    processor.Settings.WhiteList = "PDF";
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor. 
Using processor As OCRProcessor = New OCRProcessor()

    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)
    'Set OCR language. 
    processor.Settings.Language = Languages.English
    'Set tesseract version. ** For .NET Framework only. **
    'processor.Settings.TesseractVersion = TesseractVersion.Version4_0
    'Set OCR engine mode to process.
    processor.Settings.OCREngineMode = OCREngineMode.LSTMOnly
    'Set WhiteList Property.
    processor.Settings.WhiteList = "PDF"
    'Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document)

    'Create file stream. 
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document. 
    document.Close(True)
End Using

{% endhighlight %}
{% endtabs %} 

## Black List

The [BlackList](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRSettings.html#Syncfusion_OCRProcessor_OCRSettings_BlackList) property specifies the characters that exclude from the character set used for recognition and the OCR will not return any of the characters you are specified in the list. For more information, refer to the following code sample.
{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Set tesseract version. ** For .NET Framework only. **
    //processor.Settings.TesseractVersion = TesseractVersion.Version4_0;
    //Set OCR engine mode to process.
    processor.Settings.OCREngineMode = OCREngineMode.LSTMOnly;
    //Set BlackList Property.
    processor.Settings.BlackList = "PDF";
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor. 
Using processor As OCRProcessor = New OCRProcessor()

    'Load an existing PDF document. 
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)
    'Set OCR language. 
    processor.Settings.Language = Languages.English
    'Set tesseract version. ** For .NET Framework only. **
    'processor.Settings.TesseractVersion = TesseractVersion.Version4_0
    'Set OCR engine mode to process.
    processor.Settings.OCREngineMode = OCREngineMode.LSTMOnly
    'Set BlackList Property.
    processor.Settings.BlackList = "PDF"
    'Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document)

    'Create file stream. 
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document. 
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %} 

## OCR an Image to PDF

You can perform OCR on an image and convert it to a searchable PDF document. It is also possible to specify the conformance level through [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum to the output PDF document using OCR processor settings. 

N> This PDF conformance option only applies for image OCR to PDF documents.

The following code sample illustrates how to OCR an image to a PDF document:

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/OCR/.NET/OCR_Image_to_PDF/OCR_Image_to_PDF/Program.cs, 300" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Get stream from an image file. 
    FileStream imageStream = new FileStream(@"Input.jpg", FileMode.Open);    
    //Set OCR language to process.
    processor.Settings.Language = Languages.English;
    //Sets Unicode font to preserve the Unicode characters in a PDF document.
    FileStream fontStream = new FileStream(@"ARIALUNI.ttf", FileMode.Open);
    //Set the unicode font. 
    processor.UnicodeFont = new PdfTrueTypeFont(fontStream, true, PdfFontStyle.Regular, 10);
    //Set the PDF conformance level.
    processor.Settings.Conformance = PdfConformanceLevel.Pdf_A1B;
    //Process OCR by providing the bitmap image.  
    PdfDocument document = processor.PerformOCR(imageStream);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream(@"Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor. 
Using processor As OCRProcessor = New OCRProcessor()

    'Get stream from an image file.  
    Dim imageStream As FileStream = New FileStream("Input.jpg", FileMode.Open)
    'Set OCR language to process. 
    processor.Settings.Language = Languages.English
    'Sets Unicode font to preserve the Unicode characters in a PDF document. 
    Dim fontStream As FileStream = New FileStream("ARIALUNI.ttf", FileMode.Open)
    'Set the unicode font.  
    processor.UnicodeFont = New PdfTrueTypeFont(fontStream, True, PdfFontStyle.Regular, 10)
    'Set the PDF conformance level. 
    processor.Settings.Conformance = PdfConformanceLevel.Pdf_A1B
    'Process OCR by providing the bitmap image.   
    Dim document As PdfDocument = processor.PerformOCR(imageStream)

    'Create file stream.
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document.
    document.Close(True)
End Using

{% endhighlight %}
{% endtabs %} 

You can downloaded a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/OCR/.NET/OCR_Image_to_PDF).

## Performing OCR with Unicode characters

You can perform OCR on Images with Unicode characters. To preserve the Unicode characters in the PDF document, use the ``UnicodeFont`` property. For more information, refer to the following code sample.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/OCR/.NET/Perform-OCR-an-image-and-convert-it-to-a-PDF-document/Perform-OCR-an-image-and-convert-it-to-a-PDF-document/Program.cs, 300" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Sets Unicode font to preserve the Unicode characters in a PDF document.
    FileStream fontStream = new FileStream(@"ARIALUNI.ttf", FileMode.Open);
    processor.UnicodeFont = new PdfTrueTypeFont(fontStream, 8);
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//By default unicode characters can be extracted from image file in .NET Framework applications like WF, WPF, ASP.NET and ASP.NET MVC.

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

//By default unicode characters can be extracted from image file in .NET Framework applications like WF, WPF, ASP.NET and ASP.NET MVC.

{% endhighlight %}
{% endtabs %} 

You can downloaded a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/OCR/.NET/Perform-OCR-an-image-and-convert-it-to-a-PDF-document).

## Best Practices

**You can improve the accuracy of the OCR process by choosing the correct compression method when converting the scanned paper to a TIFF image and then to a PDF document.**

* Use (zip) lossless compression for color or gray-scale images.
* Use CCITT Group 4 or JBIG2 (lossless) compression for monochrome images. This ensures that optical character recognition works on the highest-quality image, thereby improving the OCR accuracy. This is especially useful in low-resolution scans.
* In addition, rotated images and skewed images can also affect the accuracy and readability of the OCR process.

**Tesseract works best with text when at least 300 dots per inch (DPI) are used, so it is beneficial to resize images.**

For more details regarding quality improvement, refer to the following link.

[https://github.com/tesseract-ocr/tesseract/wiki/ImproveQuality](https://github.com/tesseract-ocr/tesseract/wiki/ImproveQuality )

**You can set the different performance level to the OCRProcessor using [Performance](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.Performance.html) enumeration.**

* Rapid - high speed OCR performance and provide normal OCR accuracy.
* Fast - provides moderate OCR processing speed and accuracy.
* Slow - Slow OCR performance and provide best OCR accuracy.

Refer to the following code sample to set the performance of the OCR.

{% tabs %}  

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Initialize the OCR processor
OCRProcessor processor = new OCRProcessor();

//set the OCR performance
processor.Settings.Performance = Performance.Fast;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor
Dim processor As New OCRProcessor()

'Set the OCR performance
processor.Settings.Performance = Performance.Fast

{% endhighlight %}

{% endtabs %}  

## TesseractBinaries Paths and Tesseract Language Data

Starting with v21.1.x, TesseractBinaries, and Tesseract language data folder paths are added by default. So, there is no need to provide these paths explicitly. However, you can refer to TesseractBinaries and Tessdata paths manually in your application as per the requirement.

N> You can get the TesseractBinaries or TessData files from the NuGet package run times folder or bin folder of the application.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Initialize the OCR processor by providing the path of the tesseract binaries (SyncfusionTesseract.dll and liblept168.dll)
using (OCRProcessor processor = new OCRProcessor(@"TesseractBinaries\"))
{
    //Load an existing PDF document.
    FileStream stream = new FileStream("Input.pdf", FileMode.Open);
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set OCR language to process.
    processor.Settings.Language = Languages.English;
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document, @"TessData\");
    
    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor 
Using processor As OCRProcessor = New OCRProcessor("TesseractBinaries\")
    'Load an existing PDF document.
    Dim stream As FileStream = New FileStream("Input.pdf", FileMode.Open)
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream)
    'Set OCR language to process.
    processor.Settings.Language = Languages.English
    'Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document, "TessData\")

    'Create file stream.
    Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
    'Close the document.
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %}  

## Get image rotation angle from OCR processor

To get the Image rotation angle, you can rotate the image with 4 angles (0,90,180, and 360) from the OCR Processor. This feature works in multiple Images and multiple pages. The following code sample illustrates support for the Image Rotation angle from the OCR Processor.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/OCR/.NET/Get-image-rotation-angle-from-OCR/Get-image-rotation-angle-from-OCR/Program.cs, 300" %}

//Initialize the OCR processor.@
using (OCRProcessor processor = new OCRProcessor())
{
    //Get the stream from an image file. 
    FileStream stream = new FileStream(@"D:\Input.pdf", FileMode.Open);
    //Set the OCR language to process.
    PdfLoadedDocument document = new PdfLoadedDocument(stream);
    //Set the OCR language.
    processor.Settings.Language = Languages.English;
    //Set the Unicode font to preserve the Unicode characters in a PDF document.
    processor.TesseractPath = @"D:\Tesseractbinaries_core\Windows\x64";
    processor.PerformOCR(document, 0, 0, @"D:\tessdata", out OCRLayoutResult result);
    float angle = 0;
    if (result != null)
    {
        foreach (var page in result.Pages)
        {
            angle = page.ImageRotation;
            if (angle == 180)
            {
                document.Pages[0].Rotation = PdfPageRotateAngle.RotateAngle180;
            }
        }
    }    
    //Create file stream.
    using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        document.Save(outputFileStream);
    }
}


{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Initialize the OCR processor
Using processor As OCRProcessor = New OCRProcessor()
    'Get the stream from an image file. 
    Dim stream As FileStream = New FileStream(@"D:\Input.pdf", FileMode.Open);
    'Set the OCR language to process.
    Dim document As PdfLoadedDocument = New PdfLoadedDocument(stream);
    'Set the OCR language.
    processor.Settings.Language = Languages.English;
    'Set the Unicode font to preserve the Unicode characters in a PDF document.
    processor.TesseractPath = @"D:\Tesseractbinaries_core\Windows\x64";
    processor.PerformOCR(document, 0, 0, @"D:\tessdata", out OCRLayoutResult result);
    float angle = 0;
    If result IsNot Nothing Then
    For Each page As var In result.Pages
        angle = page.ImageRotation
        If angle = 180 Then
            document.Pages(0).Rotation = PdfPageRotateAngle.RotateAngle180
        End If
    Next
	End If  
    'Create file stream.
     Using outputFileStream As FileStream = New FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite)
        'Save the PDF document to file stream.
        document.Save(outputFileStream)
    End Using
	'Close the document.
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %}  

You can downloaded a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/OCR/.NET/Get-image-rotation-angle-from-OCR).

## Image Enhancement in OCR Processor library

We have support to improve the image quality while performing OCR for an image or PDF document. In this process, we can enhance the image quality by using binarization, grayscale, and resolution enhancement methods with third-party libraries. Please refer to the code snippet below.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %}

    //Initialize the OCR processor. 
    using (OCRProcessor processor = new OCRProcessor()) 
    { 
        //Load an existing PDF document. 
        FileStream stream = new FileStream("../../../document.pdf", FileMode.Open); 
        PdfLoadedDocument lDoc = new PdfLoadedDocument(stream); 
        //Set the OCR language. 
        processor.Settings.Language = Languages.English; 
        processor.ImageProcessor = new ImageProcessor(); 
        //Perform OCR with input document. 
        string text = processor.PerformOCR(lDoc); 
        //Create file stream. 
        FileStream fileStream = new FileStream("../../../OCR.pdf", FileMode.CreateNew); 
        //Save the document into stream. 
        lDoc.Save(fileStream); 
        //Close the document. 
        lDoc.Close(true); 
        stream.Dispose(); 
        fileStream.Dispose(); 
    } 

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

    ' Initialize the OCR processor.
    Using processor As New OCRProcessor()
        ' Load an existing PDF document.
        Dim stream As New FileStream("../../../document.pdf", FileMode.Open)
        Dim lDoc As New PdfLoadedDocument(stream)
        
        ' Set the OCR language.
        processor.Settings.Language = Languages.English
        processor.ImageProcessor = New ImageProcessor()
        
        ' Perform OCR with input document.
        Dim text As String = processor.PerformOCR(lDoc)
        
        ' Create file stream.
        Dim fileStream As New FileStream("../../../OCR.pdf", FileMode.CreateNew)
        
        ' Save the document into stream.
        lDoc.Save(fileStream)
        
        ' Close the document.
        lDoc.Close(true)
        stream.Dispose()
        fileStream.Dispose()
    End Using

{% endhighlight %}

{% endtabs %}  



N> Note: In this sample, we are using the SixLabors.ImageSharp library to improve the image quality. You can any image processing library as per your requirement.

You can downloaded a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/OCR/.NET/Perform-OCR-ImageEnhancement).


## OCR with multiple languages

Syncfusion<sup>&reg;</sup> OCR processor does support multiple languages in C#. You can configure the OCR processor to recognize text in multiple languages by specifying the required language files.

Here's a general outline of how to enable multiple languages in Syncfusion<sup>&reg;</sup> OCR processor:

<b> Install Required Dependencies: </b> 
Ensure you have installed the necessary NuGet packages, including `Syncfusion.OCRProcessor` and `Tesseract`, for OCR functionalities.

<b> Set Up OCR Processor: </b>
You need to download the language data files ([.traineddata](https://github.com/tesseract-ocr/tessdata)) for the languages you want to use. These files are required by the OCR engine to recognize different languages.

<b> Load the Language Files:</b>
You can set up multiple languages by specifying the language codes (e.g., "eng" for English, "fra" for French) and ensuring that the trained data for those languages is available.

Here is a basic example of using Syncfusion<sup>&reg;</sup> OCR processor with multiple languages in C#:

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %}

    // Initialize the OCR processor within a using block to ensure resources are properly disposed
    using (OCRProcessor ocrProcessor = new OCRProcessor())
    {
        // Set the Unicode font for the OCR processor using a TrueType font file
        ocrProcessor.UnicodeFont = new Syncfusion.Pdf.Graphics.PdfTrueTypeFont(
            new FileStream("arialuni.ttf", FileMode.Open), // Path to the TrueType font file
            12 // Font size
        );

        // Open the PDF file to be processed
        FileStream fileStream = new FileStream("Input.pdf", FileMode.Open);

        // Load the PDF document from the file stream
        PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fileStream);

        // Configure OCR settings
        OCRSettings ocrSettings = new OCRSettings();

        // Specify the languages to be used for OCR
        ocrSettings.Language = "eng+deu+ara+ell+fra"; // English, German, Arabic, Greek, French

        // Apply the OCR settings to the OCR processor
        ocrProcessor.Settings = ocrSettings;

        // Perform OCR on the loaded PDF document, providing the path to the tessdata directory
        ocrProcessor.PerformOCR(loadedDocument, "tessdata");

        // Create a file stream to save the OCR-processed PDF
        FileStream outputFileStream = new FileStream("OCR_Output.pdf", FileMode.Create);

        // Save the OCR-processed document to the file stream
        loadedDocument.Save(outputFileStream);

        // Close the loaded document and commit changes
        loadedDocument.Close(true);

        // Close the file streams
        outputFileStream.Close();
        fileStream.Close();
    }

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

    // Initialize the OCR processor within a using block to ensure resources are properly disposed
    using (OCRProcessor ocrProcessor = new OCRProcessor())
    {
        // Set the Unicode font for the OCR processor using a TrueType font file
        ocrProcessor.UnicodeFont = new Syncfusion.Pdf.Graphics.PdfTrueTypeFont(
            new FileStream("arialuni.ttf", FileMode.Open), // Path to the TrueType font file
            12 // Font size
        );

        // Open the PDF file to be processed
        FileStream fileStream = new FileStream("Input.pdf", FileMode.Open);

        // Load the PDF document from the file stream
        PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fileStream);

        // Configure OCR settings
        OCRSettings ocrSettings = new OCRSettings();

        // Specify the languages to be used for OCR
        ocrSettings.Language = "eng+deu+ara+ell+fra"; // English, German, Arabic, Greek, French

        // Apply the OCR settings to the OCR processor
        ocrProcessor.Settings = ocrSettings;

        // Perform OCR on the loaded PDF document, providing the path to the tessdata directory
        ocrProcessor.PerformOCR(loadedDocument, "tessdata");

        // Save the OCR-processed document to the file save
        loadedDocument.Save("OCR_Output.pdf");

        // Close the loaded document and commit changes
        loadedDocument.Close(true);
        
    }

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

    ' Initialize the OCR processor within a Using block to ensure resources are properly disposed
    Using ocrProcessor As New OCRProcessor()
        ' Set the Unicode font for the OCR processor using a TrueType font file
        ocrProcessor.UnicodeFont = New Syncfusion.Pdf.Graphics.PdfTrueTypeFont(
            New FileStream("arialuni.ttf", FileMode.Open), ' Path to the TrueType font file
            12 ' Font size
        )

        ' Open the PDF file to be processed
        Using fileStream As New FileStream("Input.pdf", FileMode.Open)
            ' Load the PDF document from the file stream
            Dim loadedDocument As New PdfLoadedDocument(fileStream)

            ' Configure OCR settings
            Dim ocrSettings As New OCRSettings()

            ' Specify the languages to be used for OCR
            ocrSettings.Language = "eng+deu+ara+ell+fra" ' English, German, Arabic, Greek, French

            ' Apply the OCR settings to the OCR processor
            ocrProcessor.Settings = ocrSettings

            ' Perform OCR on the loaded PDF document, providing the path to the tessdata directory
            ocrProcessor.PerformOCR(loadedDocument, "tessdata")

            ' Save the OCR-processed document to the specified file
            Using fileSaveStream As New FileStream("OCR_Output.pdf", FileMode.Create)
                loadedDocument.Save(fileSaveStream)
            End Using

            ' Close the loaded document and commit changes
            loadedDocument.Close(True)
        End Using
    End Using


{% endhighlight %}

{% endtabs %}  

You can find the `.traineddata` files for different languages on the [Tesseract GitHub page](https://github.com/tesseract-ocr/tessdata).

You can downloaded a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/OCR/.NET/OCR-with-multiple-langauages).

##  Adding Line Breaks Using OCRLayoutResult

Line breaks can be added to OCRed text using the [OCRLayoutResult](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRLayoutResult.html) API, which provides a collection of text lines detected during OCR processing. Since OCR does not inherently retain line breaks, extracting the text line by line allows you to manually insert them, ensuring proper formatting when combining the lines into a single string. This feature is particularly useful when converting scanned documents into editable text, preserving the original document layout and ensuring readability in the resulting text file.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Initialize the OCR processor
using (OCRProcessor processor = new OCRProcessor())
{
    // Load the existing PDF document
    using (FileStream stream = new FileStream(@"Input.pdf", FileMode.Open))
    {
        // Load the PDF document from the file stream
        PdfLoadedDocument pdfLoadedDocument = new PdfLoadedDocument(stream);

        // Set OCR language to English
        processor.Settings.Language = Languages.English;

        // Set the page segmentation mode to process sparse text with orientation and script detection
        processor.Settings.PageSegment = PageSegMode.SparseTextOsd;

        // Perform OCR on the loaded PDF document to extract text
        processor.PerformOCR(pdfLoadedDocument, processor.TessDataPath, out OCRLayoutResult layoutResult);

        // Extract the OCRed text from the first page and join lines with newline characters
        string ocrText = string.Join("\n", layoutResult.Pages[0].Lines.Select(line => line.Text));

        // Create a file stream for saving the processed PDF document
        using (FileStream outputFileStream = new FileStream(@"Output.pdf", FileMode.Create, FileAccess.ReadWrite))
        {
            // Save the PDF document to the file stream
            pdfLoadedDocument.Save(outputFileStream);
        }

        // Close the PDF document
        pdfLoadedDocument.Close(true);

        // Write the extracted OCR text to an output text file
        File.WriteAllText("Output.txt", ocrText);
    }
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Initialize the OCR processor
using (OCRProcessor processor = new OCRProcessor())
{
    // Load the PDF document from the file stream
    PdfLoadedDocument pdfLoadedDocument = new PdfLoadedDocument("Input.pdf");

    // Set OCR language to English
    processor.Settings.Language = Languages.English;

    // Set the page segmentation mode to process sparse text with orientation and script detection
    processor.Settings.PageSegment = PageSegMode.SparseTextOsd;

    // Perform OCR on the loaded PDF document to extract text
    processor.PerformOCR(pdfLoadedDocument, processor.TessDataPath, out OCRLayoutResult layoutResult);

    // Extract the OCRed text from the first page and join lines with newline characters
    string ocrText = string.Join("\n", layoutResult.Pages[0].Lines.Select(line => line.Text));

    // Save the PDF document to the file stream
    pdfLoadedDocument.Save("Output.pdf");

    // Close the PDF document
    pdfLoadedDocument.Close(true);

    // Write the extracted OCR text to an output text file
    File.WriteAllText("Output.txt", ocrText);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Initialize the OCR processor
Using processor As New OCRProcessor()
    ' Load the PDF document from the file stream
    Dim pdfLoadedDocument As New PdfLoadedDocument("Input.pdf")

    ' Set OCR language to English
    processor.Settings.Language = Languages.English

    ' Set the page segmentation mode to process sparse text with orientation and script detection
    processor.Settings.PageSegment = PageSegMode.SparseTextOsd

    ' Perform OCR on the loaded PDF document to extract text
    Dim layoutResult As OCRLayoutResult
    processor.PerformOCR(pdfLoadedDocument, processor.TessDataPath, layoutResult)

    ' Extract the OCRed text from the first page and join lines with newline characters
    Dim ocrText As String = String.Join(Environment.NewLine, layoutResult.Pages(0).Lines.Select(Function(line) line.Text))

    ' Save the PDF document to the file stream
    pdfLoadedDocument.Save("Output.pdf")

    ' Close the PDF document
    pdfLoadedDocument.Close(True)

    ' Write the extracted OCR text to an output text file
    File.WriteAllText("Output.txt", ocrText)
End Using

{% endhighlight %}

{% endtabs %}

You can downloaded a complete working sample from GitHub.