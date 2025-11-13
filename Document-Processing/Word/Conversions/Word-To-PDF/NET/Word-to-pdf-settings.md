---
title: Customizing Word to PDF Conversion in C# | DocIO | Syncfusion
description: Learn about the customization settings for Word to PDF conversion using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Customization settings for Word to PDF conversion

The Essential<sup>&reg;</sup> DocIO provides settings while performing Word to PDF conversion mentioned below, 

## Embedding fonts

You can customize the TrueType fonts embedding in two ways as follows:

### Embed Subset Fonts

This setting allows you to **embed the particular font information** (glyphs) from the TrueType fonts used for the rendered characters in converted PDF document.

The following code sample shows how to embed the TrueType fonts into the converted PDF document.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Embed-subset-fonts/.NET/Embed-subset-fonts/Program.cs" %}
//Open the file as Stream
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
//Loads file stream into Word document
WordDocument wordDocument = new WordDocument(docStream, Syncfusion.DocIO.FormatType.Automatic);
//Instantiation of DocIORenderer for Word to PDF conversion
DocIORenderer render = new DocIORenderer();
//Sets true to embed TrueType fonts
render.Settings.EmbedFonts = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
//Releases all resources used by the Word document and DocIO Renderer objects
render.Dispose();
wordDocument.Dispose();
//Saves the PDF file
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = new ChartToImageConverter();
//Sets the scaling mode for charts (Normal mode reduces the Pdf file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Sets true to embed TrueType fonts
converter.Settings.EmbedFonts = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = New ChartToImageConverter()
'Sets the scaling mode for charts (Normal mode reduces the Pdf file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal
'creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
Dim converter As New DocToPDFConverter()
'Sets true to embed TrueType fonts 
converter.Settings.EmbedFonts = true
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Embed-subset-fonts).

### Embed Complete Fonts

This setting allows you to embed the complete font information (glyphs) from the TrueType fonts used in converted PDF document.

The following code sample shows how to embed the complete TrueType fonts into the converted PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Embed-complete-fonts/.NET/Embed-complete-fonts/Program.cs" %}
//Open the file as Stream
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
//Loads file stream into Word document
WordDocument wordDocument = new WordDocument(docStream, Syncfusion.DocIO.FormatType.Automatic);
//Instantiation of DocIORenderer for Word to PDF conversion
DocIORenderer render = new DocIORenderer();
//Sets true to embed complete TrueType fonts
render.Settings.EmbedCompleteFonts = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
//Releases all resources used by the Word document and DocIO Renderer objects
render.Dispose();
wordDocument.Dispose();
//Saves the PDF file
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = new ChartToImageConverter();
//Sets the scaling mode for charts (Normal mode reduces the Pdf file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Sets true to embed complete TrueType fonts
converter.Settings.EmbedCompleteFonts = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = New ChartToImageConverter()
'Sets the scaling mode for charts (Normal mode reduces the Pdf file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal
'creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
Dim converter As New DocToPDFConverter()
'Sets true to embed complete TrueType fonts 
converter.Settings.EmbedCompleteFonts = true
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Embed-complete-fonts).

## Accessible PDF document

This setting allows you to determine whether to preserve document structured tags in the converted **PDF document for accessibility (508 compliance) support**. This property will set the title and description for images, diagrams and other objects in the generated PDF document. This information will be useful for **people with vision or cognitive impairments** who may not able to see or understand the object

The following code sample shows how to preserve document structured tags in the converted PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Convert-Word-into-accessible-PDF/.NET/Convert-Word-into-accessible-PDF/Program.cs" %}
//Open the file as Stream
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
//Loads file stream into Word document
WordDocument wordDocument = new WordDocument(docStream, Syncfusion.DocIO.FormatType.Automatic);
//Instantiation of DocIORenderer for Word to PDF conversion
DocIORenderer render = new DocIORenderer();
//Sets true to preserve document structured tags in the converted PDF document 
render.Settings.AutoTag = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
//Releases all resources used by the Word document and DocIO Renderer objects
render.Dispose();
wordDocument.Dispose();
//Saves the PDF file
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Sets true to preserve document structured tags in the converted PDF document 
converter.Settings.AutoTag = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
Dim converter As New DocToPDFConverter()
'Sets true to preserve document structured tags in the converted PDF document 
converter.Settings.AutoTag = True
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-into-accessible-PDF).

## Word document headings to PDF bookmarks

This setting allows you to determine whether to **preserve Word document headings** (i.e., paragraph with heading style and outline level) as bookmarks in the converted PDF document. As per Microsoft Word behavior, either Word document headings or bookmarks can be exported as PDF bookmarks. By default, DocIO preserves Word documents bookmarks as PDF bookmarks in converted PDF document.

The following code sample shows how to preserve Word document headings as bookmarks in the converted PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Export-Word-headings-into-PDF/.NET/Export-Word-headings-into-PDF/Program.cs" %}
//Open the file as Stream
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
//Loads file stream into Word document
WordDocument wordDocument = new WordDocument(docStream, Syncfusion.DocIO.FormatType.Automatic);
//Instantiation of DocIORenderer for Word to PDF conversion
DocIORenderer render = new DocIORenderer();
//Sets ExportBookmarks for preserving Word document headings as PDF bookmarks
render.Settings.ExportBookmarks = Syncfusion.DocIO.ExportBookmarkType.Headings;
//Converts Word document into PDF document
PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
//Releases all resources used by the Word document and DocIO Renderer objects
render.Dispose();
wordDocument.Dispose();
//Saves the PDF file
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Sets ExportBookmarks for preserving Word document headings as PDF bookmarks
converter.Settings.ExportBookmarks = Syncfusion.DocIO.ExportBookmarkType.Headings;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
Dim converter As New DocToPDFConverter()
'Sets ExportBookmarks for preserving Word document headings as PDF bookmarks
converter.Settings.ExportBookmarks = Syncfusion.DocIO.ExportBookmarkType.Headings
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Export-Word-headings-into-PDF).

The following code sample shows how to preserve both Word document headings and Bookmarks as PDF bookmarks in the converted PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Export-Word-bookmarks-into-PDF/.NET/Export-Word-bookmarks-into-PDF/Program.cs" %}
//Open the file as Stream
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
//Loads file stream into Word document
WordDocument wordDocument = new WordDocument(docStream, Syncfusion.DocIO.FormatType.Automatic);
//Instantiation of DocIORenderer for Word to PDF conversion
DocIORenderer render = new DocIORenderer();
//Sets ExportBookmarks for preserving Word document headings as PDF bookmarks
render.Settings.ExportBookmarks = Syncfusion.DocIO.ExportBookmarkType.Headings | Syncfusion.DocIO.ExportBookmarkType.Bookmarks;
//Converts Word document into PDF document
PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
//Releases all resources used by the Word document and DocIO Renderer objects
render.Dispose();
wordDocument.Dispose();
//Saves the PDF file
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Sets ExportBookmarks for preserving Word document headings as PDF bookmarks
converter.Settings.ExportBookmarks = Syncfusion.DocIO.ExportBookmarkType.Headings | Syncfusion.DocIO.ExportBookmarkType.Bookmarks;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
Dim converter As New DocToPDFConverter()
'Sets ExportBookmarks for preserving Word document headings as PDF bookmarks
converter.Settings.ExportBookmarks = Syncfusion.DocIO.ExportBookmarkType.Headings | Syncfusion.DocIO.ExportBookmarkType.Bookmarks
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Export-Word-bookmarks-into-PDF).

## Word document form field to PDF form field.

This setting allows you to determine whether to **preserve Word document form fields** (Text form field, Checkbox form field and Drop-down form field) as PDF form fields in the converted PDF document. This features helps in **creating fillable PDF forms from Word document**.

The following code sample shows how to preserve Word document form field as PDF form field in the converted PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Create-fillable-PDF-from-Word/.NET/Create-fillable-PDF-from-Word/Program.cs" %}
// Open the file as Stream
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
//Loads file stream into Word document
WordDocument wordDocument = new WordDocument(docStream, Syncfusion.DocIO.FormatType.Automatic);
//Instantiation of DocIORenderer for Word to PDF conversion
DocIORenderer render = new DocIORenderer();
//Sets true to preserve the Word document form field as editable PDF form field in PDF document
render.Settings.PreserveFormFields = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
//Releases all resources used by the Word document and DocIO Renderer objects
render.Dispose();
wordDocument.Dispose();
//Saves the PDF file
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Sets true to preserve the Word document form field as editable PDF form field in PDF document
converter.Settings.PreserveFormFields = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
Dim converter As New DocToPDFConverter()
'Sets true to preserve the Word document form field as editable PDF form field in PDF document
converter.Settings.PreserveFormFields = True
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Create-fillable-PDF-from-Word).

## Image quality 

This setting allows you to determine the **quality of the charts and JPEG images** in the converted PDF document.

The following code sample shows how to customize the image quality of charts and JPEG images in the converted PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//DocIO supports Word to PDF Image in Windows forms, WPF, ASP.NET and ASP.NET MVC platform alone
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = new ChartToImageConverter();
//Sets the scaling mode for charts (Normal mode reduces the Pdf file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Sets the jpeg image quality to reduce the Pdf file size
converter.Settings.ImageQuality = 100;
//Sets the image resolution
converter.Settings.ImageResolution = 640;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = New ChartToImageConverter()
'Sets the scaling mode for charts (Normal mode reduces the Pdf file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal
'creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
Dim converter As New DocToPDFConverter()
'Sets the jpeg image quality to reduce the Pdf file size
converter.Settings.ImageQuality = 100
'Sets the image resolution
converter.Settings.ImageResolution = 640
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Adjust-image-quality).

## Recreate Nested Metafile

This setting allows you to regenerate the nested EMF images present in the Word document during PDF conversion.

This property is recommended to resolve the scaling problem of nested metafile images by regenerating the nested metafile images present in the Word document.

The following code sample shows how to use this property to regenerate the nested EMF images present in the Word document during PDF conversion.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//DocIO supports to Recreate Nested Metafile in Windows forms, WPF, ASP.NET and ASP.NET MVC platform alone, and it's also supported in .NET Core 3.0, but it requires DocToPDFConverter assembly instead of DocIORenderer.
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);     
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Sets RecreateNestedMetafile property to true to Recreate the Nested Metafile automatically
converter.Settings.RecreateNestedMetafile = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = New ChartToImageConverter()
'Creates an instance of the DocToPDFConverter
Dim converter As New DocToPDFConverter()
'Sets RecreateNestedMetafile property to true to Recreate the Nested Metafile automatically
converter.Settings.RecreateNestedMetafile = True
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file 
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Recreate-nested-metafile).

## Identical image optimization 

This setting **reduces the Main Memory usage** in Word to PDF conversion by reusing the identical images.

The following code sample shows how to reduce the Main Memory usage while converting Word to PDF by reusing the identical images.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Optimize-identical-images/.NET/Optimize-identical-images/Program.cs" %}
//Open the file as Stream
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
//Loads file stream into Word document
WordDocument wordDocument = new WordDocument(docStream, Syncfusion.DocIO.FormatType.Automatic);
//Instantiation of DocIORenderer for Word to PDF conversion
DocIORenderer render = new DocIORenderer();
//Sets true to optimize the memory usage for identical images
render.Settings.OptimizeIdenticalImages = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
//Releases all resources used by the Word document and DocIO Renderer objects
render.Dispose();
wordDocument.Dispose();
//Saves the PDF file
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = new ChartToImageConverter();
//Sets the scaling mode for charts (Normal mode reduces the Pdf file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Sets true to embed TrueType fonts
converter.Settings.EmbedFonts = true;
//Sets true to optimize the memory usage for identical images
converter.Settings.OptimizeIdenticalImages = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = New ChartToImageConverter()
'Sets the scaling mode for charts (Normal mode reduces the Pdf file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal
'creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
Dim converter As New DocToPDFConverter()
'Sets true to optimize the memory usage for identical images
converter.Settings.OptimizeIdenticalImages = True
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Optimize-identical-images).

## PDF Conformance Level

This setting allows you to convert a Word document to PDF/A with a specified PDF conformance level.

The following code sample shows how to set the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocToPDFConverter.DocToPDFConverterSettings.html#Syncfusion_DocToPDFConverter_DocToPDFConverterSettings_PdfConformanceLevel) while converting Word to PDF.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/PDF-conformance-level/.NET/PDF-conformance-level/Program.cs" %}
//Open the file as Stream
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
//Loads file stream into Word document
WordDocument wordDocument = new WordDocument(docStream, Syncfusion.DocIO.FormatType.Automatic);
//Instantiation of DocIORenderer for Word to PDF conversion
DocIORenderer render = new DocIORenderer();
//Set the conformance for PDF/A-1b conversion.
render.Settings.PdfConformanceLevel = PdfConformanceLevel.Pdf_A1B;
//Converts Word document into PDF document
PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
//Releases all resources used by the Word document and DocIO Renderer objects
render.Dispose();
wordDocument.Dispose();
//Saves the PDF file
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = new ChartToImageConverter();
//Sets the scaling mode for charts (Normal mode reduces the Pdf file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Set the conformance for PDF/A-1b conversion.
converter.Settings.PdfConformanceLevel = PdfConformanceLevel.Pdf_A1B;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = New ChartToImageConverter()
'Sets the scaling mode for charts (Normal mode reduces the Pdf file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal
'creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
Dim converter As New DocToPDFConverter()
'Set the conformance for PDF/A-1b conversion.
converter.Settings.PdfConformanceLevel = PdfConformanceLevel.Pdf_A1B
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/PDF-conformance-level).

## Enable Alternate Chunks

In the Word document, another Word documents are embedded in it and referred as AltChunks. This setting allows you to include the alternate chunks while converting Word to PDF conversion. As default, it includes alternate chunks.

The following code sample shows how to exclude the alternate chunk parts in Word to PDF conversion.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Disable-alternate-chunks/.NET/Disable-alternate-chunks/Program.cs" %}
//Open the file as Stream
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
//Loads file stream into Word document
WordDocument wordDocument = new WordDocument(docStream, Syncfusion.DocIO.FormatType.Automatic);
//Instantiation of DocIORenderer for Word to PDF conversion
DocIORenderer render = new DocIORenderer();
//Sets false to disable converting the alternate chunks present in Word document to PDF.
render.Settings.EnableAlternateChunks = false;
//Converts Word document into PDF document
PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
//Releases all resources used by the Word document and DocIO Renderer objects
render.Dispose();
wordDocument.Dispose();
//Saves the PDF file
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = new ChartToImageConverter();
//Sets the scaling mode for charts (Normal mode reduces the Pdf file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Sets false to disable converting the alternate chunks present in Word document to PDF.
converter.Settings.EnableAlternateChunks = false;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = New ChartToImageConverter()
'Sets the scaling mode for charts (Normal mode reduces the Pdf file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal
'creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
Dim converter As New DocToPDFConverter()
'Sets false to disable converting the alternate chunks present in Word document to PDF.
converter.Settings.EnableAlternateChunks = false
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Disable-alternate-chunks).

## Complex Script Text

This setting allows you to **preserve the complex script text** in the converted PDF document.

The following code sample shows how to preserve the complex script text in the converted PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Preserve-complex-script-text-in-PDF/.NET/Preserve-complex-script-text-in-PDF/Program.cs" %}
FileStream fileStream = new FileStream("Template.docx", FileMode.Open);
//Loads an existing Word document
WordDocument wordDocument = new WordDocument(fileStream, FormatType.Docx);
//Instantiates DocIORenderer instance for Word to PDF conversion
DocIORenderer renderer = new DocIORenderer();
//Sets AutoDetectComplexScript property to true to detect the complex scripts automatically
renderer.Settings.AutoDetectComplexScript = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = renderer.ConvertToPDF(wordDocument);
//Closes the instance of Word document object
wordDocument.Close();
//Releases the resources occupied by DocIORenderer instance
renderer.Dispose();
//Saves the PDF file  
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);     
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Sets AutoDetectComplexScript property to true to detect the complex scripts automatically
converter.Settings.AutoDetectComplexScript = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = New ChartToImageConverter()
'Creates an instance of the DocToPDFConverter
Dim converter As New DocToPDFConverter()
'Sets AutoDetectComplexScript property to true to detect the complex scripts automatically
converter.Settings.AutoDetectComplexScript = True
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file 
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Preserve-complex-script-text-in-PDF).

## Hyphenation in Word-to-PDF conversion

Essential<sup>&reg;</sup> DocIO now allows hyphenating text in a Word document while converting it to PDF format based on the given language dictionaries. These dictionaries prescribe where words of a specific language can be hyphenated. Use the dictionary files as OpenOffice format dictionary.

N> 1. If automatic hyphenation is not enabled in the Word document, you can enable it by using [WordDocument.Properties.Hyphenation.AutoHyphenation](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.Hyphenation.html#Syncfusion_DocIO_DLS_Hyphenation_AutoHyphenation) of DocIO.
N> 2. After converting Word documents to PDF, release any dictionary file streams to avoid memory leaks. Call [Hyphenator.UnloadDictionaries()](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.Hyphenator.html#Syncfusion_DocIO_DLS_Hyphenator_UnloadDictionaries) to free hyphenation resources and optimize performance.

The following code sample shows how to hyphenate text in a Word document while converting it to PDF format.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Hyphenation-in-Word-to-PDF/.NET/Hyphenation-in-Word-to-PDF/Program.cs" %}
FileStream fileStream = new FileStream("Template.docx", FileMode.Open);
//Loads an existing Word document
WordDocument wordDocument = new WordDocument(fileStream, FormatType.Docx);
//Instantiates DocIORenderer instance for Word to PDF conversion
DocIORenderer renderer = new DocIORenderer();
//Reads the language dictionary for hyphenation
FileStream dictionaryStream = new FileStream("hyphen_en_US.dic", FileMode.Open);
//Adds the hyphenation dictionary of the specified language
Hyphenator.Dictionaries.Add("en-US", dictionaryStream);
//Converts Word document into PDF document
PdfDocument pdfDocument = renderer.ConvertToPDF(wordDocument);
//Closes the instance of Word document object
wordDocument.Close();
//Releases the resources occupied by DocIORenderer instance
renderer.Dispose();
//Saves the PDF file  
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = new ChartToImageConverter();
//Creates an instance of the DocToPDFConverter
DocToPDFConverter converter = new DocToPDFConverter();
//Adds the hyphenation dictionary of the specified language
FileStream dictionaryStream = new FileStream("hyphen_en_US.dic", FileMode.Open, FileAccess.Read);
//Adds the hyphenation dictionary of the specified language
Hyphenator.Dictionaries.Add("en-US", dictionaryStream);
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file 
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
wordDocument.Close();
pdfDocument.Close(true);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = New ChartToImageConverter()
'Creates an instance of the DocToPDFConverter
Dim converter As New DocToPDFConverter()
'Adds the hyphenation dictionary of the specified language
Dim dictionaryStream As New FileStream("hyphen_en_US .dic", mode:=FileMode.Open)
'Adds the hyphenation dictionary of the specified language
Hyphenator.Dictionaries.Add("en-US", dictionaryStream)
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file 
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Hyphenation-in-Word-to-PDF).

## Track changes in Word-to-PDF conversion

The following code sample shows how to **preserve revision marks in a generated PDF** when converting Word documents with tracked changes or revisions.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Track-changes-in-Word-to-PDF/.NET/Track-changes-in-Word-to-PDF/Program.cs" %}
FileStream fileStream = new FileStream("Template.docx", FileMode.Open);
//Loads an existing Word document
WordDocument wordDocument = new WordDocument(fileStream, FormatType.Docx);
//Sets revision types to preserve track changes in  Word when converting to PDF.
wordDocument.RevisionOptions.ShowMarkup = RevisionType.Deletions | RevisionType.Formatting | RevisionType.Insertions;
//Instantiates DocIORenderer instance for Word to PDF conversion
DocIORenderer renderer = new DocIORenderer();
//Converts Word document into PDF document
PdfDocument pdfDocument = renderer.ConvertToPDF(wordDocument);
//Closes the instance of Word document object
wordDocument.Close();
//Releases the resources occupied by DocIORenderer instance
renderer.Dispose();
//Saves the PDF file  
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Sets revision types to preserve track changes in Word when converting to PDF
wordDocument.RevisionOptions.ShowMarkup = RevisionType.Deletions | RevisionType.Formatting | RevisionType.Insertions;
//Creates an instance of the DocToPDFConverter
DocToPDFConverter converter = new DocToPDFConverter();
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Closes the instance of Word document object
wordDocument.Close();
//Releases the resources occupied by DocToPDFConverter instance
converter.Dispose();
//Saves the PDF file
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Sets revision types to preserve track changes in when converting to PDF conversion.
wordDocument.RevisionOptions.ShowMarkup = RevisionType.Deletions Or
RevisionType.Formatting Or RevisionType.Insertions
'Creates an instance of the DocToPDFConverter
Dim converter As New DocToPDFConverter()
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Closes the instance of Word document object
wordDocument.Close()
'Releases the resources occupied by DocToPDFConverter instance
converter.Dispose()
'Saves the PDF file
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of PDF document object
pdfDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Track-changes-in-Word-to-PDF).

### Change the Track Changes Color

You can customize how track changes markup appears in a generated PDF when converting Word documents into PDF. The following code sample shows how to customize revision marks colors.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Change-track-changes-color/.NET/Change-track-changes-color/Program.cs" %}
FileStream fileStream = new FileStream("Template.docx", FileMode.Open);
//Loads an existing Word document
WordDocument wordDocument = new WordDocument(fileStream, FormatType.Docx);
//Sets revision types to preserve track changes in  Word when converting to PDF.
wordDocument.RevisionOptions.ShowMarkup = RevisionType.Deletions | RevisionType.Formatting | RevisionType.Insertions;
//Sets the color to be used for revision bars that identify document lines containing revised information
wordDocument.RevisionOptions.RevisionBarsColor = RevisionColor.Blue;
//Sets the color to be used for inserted content Insertion
wordDocument.RevisionOptions.InsertedTextColor = RevisionColor.ClassicBlue;
//Sets the color to be used for deleted content Deletion
wordDocument.RevisionOptions.DeletedTextColor = RevisionColor.ClassicRed;
//Sets the color to be used for content with changes of formatting properties
wordDocument.RevisionOptions.RevisedPropertiesColor = RevisionColor.DarkYellow;
//Instantiates DocIORenderer instance for Word to PDF conversion
DocIORenderer renderer = new DocIORenderer();
//Converts Word document into PDF document
PdfDocument pdfDocument = renderer.ConvertToPDF(wordDocument);
//Closes the instance of Word document object
wordDocument.Close();
//Releases the resources occupied by DocIORenderer instance
renderer.Dispose();
//Saves the PDF file  
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Sets revision types to preserve track changes in Word when converting to PDF
wordDocument.RevisionOptions.ShowMarkup = RevisionType.Deletions | RevisionType.Formatting | RevisionType.Insertions;
//Sets the color to be used for revision bars that identify document lines containing revised information
wordDocument.RevisionOptions.RevisionBarsColor = RevisionColor.Blue;
//Sets the color to be used for inserted content Insertion
wordDocument.RevisionOptions.InsertedTextColor = RevisionColor.ClassicBlue;
//Sets the color to be used for deleted content Deletion
wordDocument.RevisionOptions.DeletedTextColor = RevisionColor.ClassicRed;
//Sets the color to be used for content with changes of formatting properties
wordDocument.RevisionOptions.RevisedPropertiesColor = RevisionColor.DarkYellow;
//Creates an instance of the DocToPDFConverter
DocToPDFConverter converter = new DocToPDFConverter();
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Closes the instance of Word document object
wordDocument.Close();
//Releases the resources occupied by DocToPDFConverter instance
converter.Dispose();
//Saves the PDF file
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Sets revision types to preserve track changes in when converting to PDF conversion
wordDocument.RevisionOptions.ShowMarkup = RevisionType.Deletions Or
RevisionType.Formatting Or RevisionType.Insertions
'Sets the color to be used for revision bars that identify document lines containing revised information
wordDocument.RevisionOptions.RevisionBarsColor = RevisionColor.Blue
'Sets the color to be used for inserted content Insertion
wordDocument.RevisionOptions.InsertedTextColor = RevisionColor.ClassicBlue
'Sets the color to be used for deleted content Deletion
wordDocument.RevisionOptions.DeletedTextColor = RevisionColor.ClassicRed
'Sets the color to be used for content with changes of formatting properties
wordDocument.RevisionOptions.RevisedPropertiesColor = RevisionColor.DarkYellow
'Creates an instance of the DocToPDFConverter
Dim converter As New DocToPDFConverter()
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Closes the instance of Word document object
wordDocument.Close()
'Releases the resources occupied by DocToPDFConverter instance
converter.Dispose()
'Saves the PDF file
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of PDF document object
pdfDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Change-track-changes-color).

### Show or Hide Revisions in Balloons

The default Word to PDF conversion renders the deletion and formatting changes in balloons when enabling [ShowMarkup](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.RevisionOptions.html#Syncfusion_DocIO_DLS_RevisionOptions_ShowMarkup) property. However, you can hide revisions in balloons by using following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Show-or-hide-revisions-in-balloons/.NET/Show-or-hide-revisions-in-balloons/Program.cs" %}
FileStream fileStream = new FileStream("Template.docx", FileMode.Open);
//Loads an existing Word document
WordDocument wordDocument = new WordDocument(fileStream, FormatType.Docx);
//Sets revision types to preserve track changes in Word when converting to PDF
wordDocument.RevisionOptions.ShowMarkup = RevisionType.Deletions | RevisionType.Formatting | RevisionType.Insertions;
//Hides showing revisions in balloons when converting Word documents to PDF
wordDocument.RevisionOptions.ShowInBalloons = RevisionType.None;
//Instantiates DocIORenderer instance for Word to PDF conversion
DocIORenderer renderer = new DocIORenderer();
//Converts Word document into PDF document
PdfDocument pdfDocument = renderer.ConvertToPDF(wordDocument);
//Closes the instance of Word document object
wordDocument.Close();
//Releases the resources occupied by DocIORenderer instance
renderer.Dispose();
//Saves the PDF file  
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Sets revision types to preserve track changes in Word when converting to PDF
wordDocument.RevisionOptions.ShowMarkup = RevisionType.Deletions | RevisionType.Formatting | RevisionType.Insertions;
//Hides showing revisions in balloons when converting Word documents to PDF
wordDocument.RevisionOptions.ShowInBalloons = RevisionType.None;
//Creates an instance of the DocToPDFConverter
DocToPDFConverter converter = new DocToPDFConverter();
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Closes the instance of Word document object
wordDocument.Close();
//Releases the resources occupied by DocToPDFConverter instance
converter.Dispose();
//Saves the PDF file
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Sets revision types to preserve track changes in when converting to PDF conversion
wordDocument.RevisionOptions.ShowMarkup = RevisionType.Deletions Or
RevisionType.Formatting Or RevisionType.Insertions
'Hides showing revisions in balloons when converting Word documents to PDF
wordDocument.RevisionOptions.ShowInBalloons = RevisionType.None
'Creates an instance of the DocToPDFConverter
Dim converter As New DocToPDFConverter()
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Closes the instance of Word document object
wordDocument.Close()
'Releases the resources occupied by DocToPDFConverter instance
converter.Dispose()
'Saves the PDF file
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of PDF document object
pdfDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Show-or-hide-revisions-in-balloons).

## Comments in Word-to-PDF conversion
The following code sample shows how to **preserve comments balloon in a generated PDF** when converting Word documents with comments. Also you can customize how comments balloon color appears in a generated PDF.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Preserve-comments-in-Word-to-PDF/.NET/Preserve-comments-in-Word-to-PDF/Program.cs" %}
using (FileStream fileStream = new FileStream("Template.docx", FileMode.Open))
{
    //Loads an existing Word document.
    using (WordDocument wordDocument = new WordDocument(fileStream,FormatType.Docx))
    {
        //Sets ShowInBalloons to render a document comments in converted PDF document.
        wordDocument.RevisionOptions.CommentDisplayMode = CommentDisplayMode.ShowInBalloons;
        //Sets the color to be used for Comment Balloon.
        wordDocument.RevisionOptions.CommentColor = RevisionColor.Blue;
        //Creates an instance of DocIORenderer.
        using (DocIORenderer renderer = new DocIORenderer())
        {
            //Converts Word document into PDF document.
            using (PdfDocument pdfDocument = renderer.ConvertToPDF(wordDocument))
            {
                //Saves the PDF file to file system.    
                using (FileStream outputStream = new FileStream("Sample.pdf", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite))
                {
                    pdfDocument.Save(outputStream);
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document.
using (WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx))
{
    //Sets ShowInBalloons to render a document comments in converted PDF document.
    wordDocument.RevisionOptions.CommentDisplayMode = CommentDisplayMode.ShowInBalloons;
    //Sets the color to be used for Comment Balloon.
    wordDocument.RevisionOptions.CommentColor = RevisionColor.Blue;
    //Initializes the ChartToImageConverter for converting charts during Word to pdf conversion.
    wordDocument.ChartToImageConverter = new ChartToImageConverter();
    //Sets the scaling mode for charts.
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
    //Creates an instance of the DocToPDFConverter.
    using (DocToPDFConverter converter = new DocToPDFConverter())
    {
        //Converts Word document into PDF document.
        using (PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument))
        {
            //Saves the PDF file to file system.
            pdfDocument.Save("Sample.pdf");
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document.
Using wordDocument As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Sets ShowInBalloons to render a document comments in converted PDF document.
    wordDocument.RevisionOptions.CommentDisplayMode = CommentDisplayMode.ShowInBalloons
    'Sets the color to be used for Comment Balloon.
    wordDocument.RevisionOptions.CommentColor = RevisionColor.Blue
    'Initializes the ChartToImageConverter for converting charts during Word to pdf conversion.
    wordDocument.ChartToImageConverter = New ChartToImageConverter
    'Sets the scaling mode for charts.
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal
    'Creates an instance of the DocToPDFConverter.
    Using converter As New DocToPDFConverter()
        'Converts Word document into PDF document.
        Using pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
            'Saves the PDF file to file system.
            pdfDocument.Save("Sample.pdf")
        End Using
    End Using
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Preserve-comments-in-Word-to-PDF).

## Preserve Ole Equation as bitmap image

This setting allows you to preserve Ole Equation as bitmap image in the converted PDF document.

The following code sample shows how to preserve Ole Equation as bitmap image in the converted PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//DocIO supports to preserve the Ole Equation as bitmap image in the converted PDF document in Windows forms, WPF, ASP.NET and ASP.NET MVC platform alone.
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);     
//Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
//Sets a value indicating whether to preserve the Ole Equation as bitmap image while converting a Word document to PDF
converter.Settings.PreserveOleEquationAsBitmap = true;
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file to file system
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = New ChartToImageConverter()
'Creates an instance of the DocToPDFConverter
Dim converter As New DocToPDFConverter()
'Sets a value indicating whether to preserve the Ole Equation as bitmap image while converting a Word document to PDF
converter.Settings.PreserveOleEquationAsBitmap = true
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file 
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Ole-Equation-as-bitmap).

## Restrict all permission in a PDF document

You can restrict all the permission in a PDF document using [PdfPermissionsFlags](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfPermissionsFlags.html).

The below code example shows how to restrict Copying and Printing permission of the PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Restrict-permission-in-PDF/.NET/Restrict-permission-in-PDF/Program.cs" %}
//Open the file as Stream
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
//Loads file stream into Word document
WordDocument wordDocument = new WordDocument(docStream, FormatType.Automatic);
docStream.Dispose();
//Instantiation of DocIORenderer for Word to PDF conversion
DocIORenderer render = new DocIORenderer();
//Converts Word document into PDF document
PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
//Document security.
PdfSecurity security = pdfDocument.Security;
//Specifies key size and encryption algorithm using 256-bit key in AES mode.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = Syncfusion.Pdf.Security.PdfEncryptionAlgorithm.AES;
security.OwnerPassword = "syncfusion";
//It restrict printing and copying of PDF document
security.Permissions = ~(PdfPermissionsFlags.CopyContent | PdfPermissionsFlags.Print);
//Releases all resources used by the Word document and DocIO Renderer objects
render.Dispose();
wordDocument.Dispose();
//Saves the PDF file
FileStream outputFile = new FileStream("Output.docx", FileMode.OpenOrCreate, FileAccess.ReadWrite);
pdfDocument.Save(outputFile);
//Closes the instance of PDF document object
pdfDocument.Close();
outputFile.Dispose();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates an instance of WordDocument class
WordDocument document = new WordDocument("Template.docx");
//Creates an instance of the DocToPDFConverter
DocToPDFConverter converter = new DocToPDFConverter();
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(document);
//Document security.
PdfSecurity security = pdfDocument.Security;
//Specifies key size and encryption algorithm using 256-bit key in AES mode.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = Syncfusion.Pdf.Security.PdfEncryptionAlgorithm.AES;
security.OwnerPassword = "syncfusion";
//It restrict printing and copying of PDF document
security.Permissions =  ~(PdfPermissionsFlags.CopyContent | PdfPermissionsFlags.Print);
pdfDocument.Save("Output.pdf");
pdfDocument.Close();
converter.Dispose();
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates an instance of WordDocument class
Dim document As WordDocument = New WordDocument("Template.docx")
'Creates an instance of the DocToPDFConverter
Dim converter As DocToPDFConverter = New DocToPDFConverter()
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(document)
'Document security.
Dim security As PdfSecurity = pdfDocument.Security
'Specifies key size and encryption algorithm using 256-bit key in AES mode.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = Syncfusion.Pdf.Security.PdfEncryptionAlgorithm.AES
security.OwnerPassword = "syncfusion"
'It restrict printing and copying of PDF document
security.Permissions = Not (PdfPermissionsFlags.CopyContent Or PdfPermissionsFlags.Print)
pdfDocument.Save("Output.pdf")
pdfDocument.Close()
converter.Dispose()
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Restrict-permission-in-PDF).

## Apply Matte to Transparent Images

This setting allows you to determine whether to **apply a matte color to transparent images** during Word to PDF conversion, ensuring they render cleanly without unwanted borders or artifacts in the final PDF.

The following code sample shows how to apply a matte color to transparent images during Word to PDF conversion.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

FileStream fileStream = new FileStream("Template.docx", FileMode.Open);
// Loads an existing Word document
WordDocument wordDocument = new WordDocument(fileStream, FormatType.Docx);
// Instantiates DocIORenderer instance for Word to PDF conversion
DocIORenderer renderer = new DocIORenderer();
// Set to true to apply a matte color to transparent images.
renderer.Settings.ApplyMatteToTransparentImages = true;
// Converts Word document into PDF document
PdfDocument pdfDocument = renderer.ConvertToPDF(wordDocument);
// Closes the instance of Word document object
wordDocument.Close();
// Releases the resources occupied by DocIORenderer instance
renderer.Dispose();
// Saves the PDF file  
pdfDocument.Save(@"../../../Output/Result.pdf");
// Closes the instance of PDF document object
pdfDocument.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
 
// Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx");
// Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
DocToPDFConverter converter = new DocToPDFConverter();
// Set to true to apply a matte color to transparent images.
converter.Settings.ApplyMatteToTransparentImages = true;
// Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
// Closes the instance of Word document object
wordDocument.Close();
// Releases the resources occupied by DocToPDFConverter instance
converter.Dispose();
// Saves the PDF file  
pdfDocument.Save(@"../../../Output/Result.pdf");
// Closes the instance of PDF document object
pdfDocument.Close();
 
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx")
' Creates an instance of the DocToPDFConverter - responsible for Word to PDF conversion
Dim converter As New DocToPDFConverter()
' Set to true to apply a matte color to transparent images
converter.Settings.ApplyMatteToTransparentImages = True
' Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
' Closes the instance of Word document object
wordDocument.Close()
' Releases the resources occupied by DocToPDFConverter instance
converter.Dispose()
' Saves the PDF file
pdfDocument.Save("../../../Output/Result.pdf")
' Closes the instance of PDF document object
pdfDocument.Close()

{% endhighlight %}

{% endtabs %}