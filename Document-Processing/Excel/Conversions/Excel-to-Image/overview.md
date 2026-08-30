---
title: About Syncfusion .NET Excel to Image Conversion | Syncfusion
description: Learn about overview of converting Excel worksheets into images using the Syncfusion .NET Excel Library and more details.
platform: document-processing
control: XlsIO
documentation: UG
---

# About Syncfusion .NET Excel to Image Conversion

To quickly start converting an Excel document to an image, see this short video: [Convert an Excel worksheet to an image with XlsIO](https://www.youtube.com/watch?v=WgugutAaxBk&t=3s).

N> IMPORTANT: Before running the samples on this page, install the required NuGet package for your target platform and register your Syncfusion license key. For more information, see the [Licensing overview](https://help.syncfusion.com/document-processing/licensing/overview).

## Assemblies Required

The following links list the assemblies and NuGet packages required to convert a worksheet to an image, per platform:

* [Assemblies Information](https://help.syncfusion.com/file-formats/xlsio/assemblies-required#converting-excel-worksheet-to-image)
* [NuGet Information](https://help.syncfusion.com/file-formats/xlsio/nuget-packages-required#converting-excel-worksheet-to-image)

N> Worksheet-to-image conversion can be performed by referring to the [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) NuGet package in UWP platform.

## Convert as bitmap

The following code shows how to convert a specified range of rows and columns in the worksheet to a bitmap image. The four integer parameters are `firstRow`, `firstColumn`, `lastRow`, and `lastColumn` (1-based).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// The following snippet assumes `application` and `worksheet` are already initialized
// (see the "Complete code" tab below for the full setup).
// Initialize XlsIORenderer
application.XlsIORenderer = new XlsIORenderer();

// Create a new memory stream to save the image
Stream stream = new MemoryStream();

// Convert worksheet to image and save it to the stream.
worksheet.ConvertToImage(1, 1, 10, 20, stream);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// The following snippet assumes `sheet` is already initialized (see the
// "Complete code" tab below for the full setup).
// Convert as bitmap
Image image = sheet.ConvertToImage(1, 1, 10, 20);
image.Save("Sample.png", ImageFormat.Png);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'The following snippet assumes `sheet` is already initialized (see the
'"Complete code" tab below for the full setup).
'Convert as bitmap
Dim image As Image = sheet.ConvertToImage(1, 1, 10, 20)
image.Save("Sample.png", ImageFormat.Png)
{% endhighlight %}
{% endtabs %}  

## Save as stream

The following code snippet shows how to save a sheet as a stream. On Windows, you can choose the output [ImageType](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ImageType.html) (such as `Bitmap`, `Metafile`, or `EMF`); on .NET Standard the format is controlled by `ExportImageOptions`.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// The following snippet assumes `application` and `sheet` are already initialized
// (see the "Complete code" tab below for the full setup).
// Initialize XlsIORenderer
application.XlsIORenderer = new XlsIORenderer();

// Convert and save as a stream
using (MemoryStream stream = new MemoryStream())
{
    sheet.ConvertToImage(1, 1, 10, 20, stream);
    // stream.Position = 0; // reset before reading, if needed
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Convert and save as a stream with a specific ImageType
using (MemoryStream stream = new MemoryStream())
{
    sheet.ConvertToImage(1, 1, 10, 20, ImageType.Metafile, stream);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Convert and save as a stream with a specific ImageType
Using stream As MemoryStream = New MemoryStream()
    sheet.ConvertToImage(1, 1, 10, 20, ImageType.Metafile, stream)
End Using
{% endhighlight %}
{% endtabs %}  

The complete code snippet of the previous options is given below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20to%20Image/Worksheet%20to%20Image/.NET/Worksheet%20to%20Image/Worksheet%20to%20Image/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	// Open the input workbook.
	using (FileStream inputStream = new FileStream(Path.GetFullPath(@"Data/InputTemplate.xlsx"), FileMode.Open, FileAccess.Read))
	{
		IWorkbook workbook = application.Workbooks.Open(inputStream);
		IWorksheet sheet = workbook.Worksheets[0];

		//Initialize XlsIORenderer
		application.XlsIORenderer = new XlsIORenderer();

		#region Save
		// Save the worksheet as a PNG image.
		using (FileStream outputStream = new FileStream(Path.GetFullPath("Output/Image.png"), FileMode.Create, FileAccess.Write))
		{
			sheet.ConvertToImage(sheet.UsedRange, outputStream);
		}
		#endregion
	}
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  // Convert the worksheet range to a bitmap image and save it as PNG.
  Image image = sheet.ConvertToImage(1, 1, 10, 20);
  image.Save("Sample.png", ImageFormat.Png);

  // Convert the worksheet range to a Metafile image and save it to a stream.
  using (MemoryStream stream = new MemoryStream())
  {
    sheet.ConvertToImage(1, 1, 10, 20, ImageType.Metafile, stream);
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  ' Convert the worksheet range to a bitmap image and save it as PNG.
  Dim image As Image = sheet.ConvertToImage(1, 1, 10, 20)
  image.Save("Sample.png", ImageFormat.Png)

  ' Convert the worksheet range to a Metafile image and save it to a stream.
  Using stream As MemoryStream = New MemoryStream()
    sheet.ConvertToImage(1, 1, 10, 20, ImageType.Metafile, stream)
  End Using
End Using
{% endhighlight %}
{% endtabs %} 

A complete working example to convert Excel worksheet to image in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20to%20Image/Worksheet%20to%20Image/.NET/Worksheet%20to%20Image). 

N> 1. Instance of [XlsIORenderer](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.XlsIORenderer.XlsIORenderer.html) class is mandatory to convert the worksheet to image using .NET Standard assemblies.
N> 2. In .NET Standard, the Image format and quality can be specified using the **ExportImageOptions** class. By default the [ImageFormat](https://help.syncfusion.com/cr/file-formats/Syncfusion.Drawing.ImageFormat.html) is set to PNG and [ScalingMode](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ScalingMode.html) is set to Best.
N> 3. Worksheet to image conversion is supported from .NET Framework 2.0 and .NET Standard 1.4 onwards.

**Non****-****Supported** **Features****:**

* Subscript/Superscript
* Shrink to fit
* Complex conditional formatting

## Register custom fonts

The .NET Excel library allows TrueType (`.ttf`) and OpenType (`.otf`) font files to be registered as custom fonts. The registered fonts are used during Excel-to-Image conversion when the required fonts are not installed on the system.

The following code example shows how to register custom fonts and use them during Excel-to-Image conversion.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20to%20Image/Custom%20Font/.NET/Custom%20Font/Custom%20Font/Program.cs,180" %}
// Create a collection to store the custom font streams
List<Stream> fontStreams = new List<Stream>();

// Retrieve all font files from the specified directory
foreach (string file in Directory.GetFiles(Path.GetFullPath(@"Data/MyFonts")))
{
    string extension = Path.GetExtension(file);

    // Load only TrueType and OpenType font files
    if (extension.Equals(".ttf", StringComparison.OrdinalIgnoreCase) ||
        extension.Equals(".otf", StringComparison.OrdinalIgnoreCase))
    {
        // Read the font file and copy its content to a memory stream
        FileStream fileStream = new FileStream(file, FileMode.OpenOrCreate, FileAccess.Read);
        Stream stream = new MemoryStream();
        fileStream.CopyTo(stream);
        stream.Position = 0;
        fontStreams.Add(stream);
    }
}

// Register the custom fonts for use during Excel-to-Image conversion
FontManager.RegisterFonts(fontStreams);

using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet sheet = workbook.Worksheets[0];

    application.XlsIORenderer = new XlsIORenderer();

    using (FileStream outputStream = new FileStream(Path.GetFullPath("Output/Image.png"), FileMode.Create, FileAccess.Write))
    {
        sheet.ConvertToImage(sheet.UsedRange, outputStream);
    }
}

// Clear the registered fonts and dispose their associated streams
FontManager.ClearRegisteredFonts(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Create a collection to store the custom font streams
List<Stream> fontStreams = new List<Stream>();

// Retrieve all font files from the specified directory
foreach (string file in Directory.GetFiles(Path.GetFullPath(@"Data/MyFonts")))
{
    string extension = Path.GetExtension(file);

    // Load only TrueType and OpenType font files
    if (extension.Equals(".ttf", StringComparison.OrdinalIgnoreCase) ||
        extension.Equals(".otf", StringComparison.OrdinalIgnoreCase))
    {
        // Read the font file and copy its content to a memory stream
        FileStream fileStream = new FileStream(file, FileMode.OpenOrCreate, FileAccess.Read);
        Stream stream = new MemoryStream();
        fileStream.CopyTo(stream);
        stream.Position = 0;
        fontStreams.Add(stream);
    }
}

// Register the custom fonts for use during Excel-to-Image conversion
FontManager.RegisterFonts(fontStreams);

using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath("Data/Input.xlsx"));

    IWorksheet worksheet = workbook.Worksheets[0];

    // Convert the specified Excel range to an image
    Image image = worksheet.ConvertToImage(1, 1, 20, 7);
        
    image.Save(Path.GetFullPath("Output/Sample.jpeg"),ImageFormat.Jpeg);
        
    workbook.Close();
}

// Clear the registered fonts and dispose their associated streams
FontManager.ClearRegisteredFonts(true);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' Create a collection to store the custom font streams
Dim fontStreams As New List(Of Stream)()

' Retrieve all font files from the specified directory
For Each file As String In Directory.GetFiles(Path.GetFullPath("Data/MyFonts"))

    Dim extension As String = Path.GetExtension(file)

    ' Load only TrueType and OpenType font files.
    If extension.Equals(".ttf", StringComparison.OrdinalIgnoreCase) OrElse
extension.Equals(".otf", StringComparison.OrdinalIgnoreCase) Then

        ' Read the font file and copy its content to a memory stream
        Dim fileStream As New FileStream(file, FileMode.OpenOrCreate, FileAccess.Read)

        Dim stream As Stream = New MemoryStream()
        fileStream.CopyTo(stream)
        stream.Position = 0
        fontStreams.Add(stream)

        fileStream.Dispose()
    End If
Next

' Register the custom fonts for use during Excel-to-image conversion
FontManager.RegisterFonts(fontStreams)

Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Open(Path.GetFullPath("Data/Input.xlsx"))

    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Convert the specified Excel range to an image
    Dim image As Image = worksheet.ConvertToImage(1, 1, 20, 7)

    ' Save the converted image in JPEG format
    image.Save(Path.GetFullPath("Output/Sample.jpeg"), ImageFormat.Jpeg)

    workbook.Close()
End Using

' Clear the registered fonts and dispose their associated streams
FontManager.ClearRegisteredFonts(True)
{% endhighlight %}
{% endtabs %}

A complete working example of registering custom fonts in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20to%20Image/Custom%20Font/.NET/Custom%20Font">this GitHub page</a>.

## See also

* [Worksheet to Image conversion in .NET](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-image/net/worksheet-to-image-conversion) — runnable code samples for each platform.
* [Assemblies Required for Excel to PDF conversion](../Excel-to-PDF/NET/assemblies-required-for-excel-to-pdf) — manual assembly references.
* [NuGet Packages Required for Excel to PDF conversion](../Excel-to-PDF/NET/nuget-packages-required-for-excel-to-pdf) — install the right package for your target platform.
* [Licensing overview](https://help.syncfusion.com/document-processing/licensing/overview) — register your license key.
