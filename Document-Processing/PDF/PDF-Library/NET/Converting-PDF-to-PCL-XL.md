---
title: Convert PDF to PCL XL in .NET PDF Library | Syncfusion
description: Learn how to convert PDF documents to PCL XL (PCL 6) print jobs using the SaveAsPcl method of the Syncfusion .NET PDF Library.
platform: document-processing
control: PDF
documentation: UG
keywords: PDF to PCL, PCL XL, SaveAsPcl, PclSettings, printer, pxl
---

# Convert PDF to PCL XL in .NET PDF Library

Essential<sup>&reg;</sup> PDF can convert an existing PDF document to [PCL XL](https://www.hp.com/), the page-description language used by the majority of monochrome and colour laser printers. The generated PCL XL job can be sent straight to a PCL XL–aware printer, written to a `.pxl` file for later replay, or streamed into any caller-owned `System.IO.Stream`.

The conversion is implemented with the `SaveAsPcl` method of the [PdfDocumentBase](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html) class. Every produced job is wrapped in a PJL envelope and carries the fixed PCL XL stream header `) HP-PCL XL;2;1;Comment Syncfusion PDF`, so the output can be handed to a printer or a print spooler without any post-processing.

## Prerequisites

### Assemblies required

The PCL XL conversion is part of the PDF library itself and requires no additional package or renderer. The following assembly provides the conversion support.

<table>
<thead>
<tr>
<th>
Assembly Name<br/><br/></th><th>
Description<br/><br/></th></tr>
</thead>
<tbody>
<tr>
<td>
Syncfusion.Pdf.Base<br/><br/></td><td>
This assembly contains the core PDF features, including the PCL XL export support.<br/><br/></td></tr>
</tbody>
</table>

N> The PCL XL conversion path is fully managed. It does not use PDFium, SkiaSharp, System.Drawing, GhostPCL, or the Syncfusion.PdfToImageConverter package, so no additional native or third-party dependency has to be deployed.

### Namespaces required

The following namespaces must be included in your application to convert a PDF document to PCL XL. The `Syncfusion.Pdf` namespace provides the `SaveFormat` enumeration and the PCL XL exception types, the `Syncfusion.Pdf.Exporting` namespace provides the `PclSettings` class, and the `Syncfusion.Pdf.Parsing` namespace provides the `PdfLoadedDocument` class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Parsing;

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Parsing;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Exporting
Imports Syncfusion.Pdf.Parsing

{% endhighlight %}

{% endtabs %}

## Converting a PDF document to PCL XL

Load the existing PDF document using the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class and call the `SaveAsPcl` method with the [SaveFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.SaveFormat.html) value `SaveFormat.PclXL`.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Convert the PDF document to a PCL XL job.
document.SaveAsPcl("Output.pxl", SaveFormat.PclXL);
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Convert the PDF document to a PCL XL job.
document.SaveAsPcl("Output.pxl", SaveFormat.PclXL);
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")
'Convert the PDF document to a PCL XL job.
document.SaveAsPcl("Output.pxl", SaveFormat.PclXL)
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

N> The `SaveAsPcl` method is available on both `PdfLoadedDocument` and `PdfDocument`. When a newly created `PdfDocument` is passed, the library works on an internal copy of the document, and the original document is never modified.

### Saving to a file path

The `SaveAsPcl(string, SaveFormat)` overload writes the PCL XL job to the file system. If the supplied file name does not contain an extension, the extension for the selected format is appended automatically, so `Output` becomes `Output.pxl`. An existing file with the same name is overwritten.

If the conversion fails, the partially written file is deleted from the disk before the exception is propagated, so a truncated print job is never left behind.

### Saving to a stream

Use the `SaveAsPcl(Stream, SaveFormat)` overload to write the PCL XL job into a stream that you own. The library writes the bytes from the current position of the stream and never closes it, so you can append further data or dispose the stream yourself.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Create a memory stream.
MemoryStream stream = new MemoryStream();
//Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Convert the PDF document to a PCL XL job.
document.SaveAsPcl(stream, SaveFormat.PclXL);
//Close the document.
document.Close(true);
//The stream is still open and holds the PCL XL job.
byte[] pxl = stream.ToArray();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Create a memory stream.
MemoryStream stream = new MemoryStream();
//Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Convert the PDF document to a PCL XL job.
document.SaveAsPcl(stream, SaveFormat.PclXL);
//Close the document.
document.Close(true);
//The stream is still open and holds the PCL XL job.
byte[] pxl = stream.ToArray();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Create a memory stream.
Dim stream As New MemoryStream()
'Load an existing PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")
'Convert the PDF document to a PCL XL job.
document.SaveAsPcl(stream, SaveFormat.PclXL)
'Close the document.
document.Close(True)
'The stream is still open and holds the PCL XL job.
Dim pxl As Byte() = stream.ToArray()

{% endhighlight %}

{% endtabs %}

## Configuring the PCL XL output

The optional [PclSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Exporting.PclSettings.html) class controls the resolution, paper size, orientation, input tray, scaling mode, job name, and the number of copies of the produced job. Pass the settings instance to the `SaveAsPcl` overload that accepts a `PclSettings` argument. Passing `null` uses the default settings.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Create the PCL XL settings.
PclSettings settings = new PclSettings();
settings.Resolution = PclResolutionDpiValue.Dpi600;
settings.PaperSize = PclPaperSize.A4;
settings.Orientation = PclOrientation.Auto;
settings.InputTray = PclInputTray.UpperCassette;
settings.ScalingMode = PclScalingMode.Fit;
settings.JobName = "QuarterlyReport";
settings.Copies = 2;
//Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Convert the PDF document to a PCL XL job.
document.SaveAsPcl("Output.pxl", SaveFormat.PclXL, settings);
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Create the PCL XL settings.
PclSettings settings = new PclSettings();
settings.Resolution = PclResolutionDpiValue.Dpi600;
settings.PaperSize = PclPaperSize.A4;
settings.Orientation = PclOrientation.Auto;
settings.InputTray = PclInputTray.UpperCassette;
settings.ScalingMode = PclScalingMode.Fit;
settings.JobName = "QuarterlyReport";
settings.Copies = 2;
//Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Convert the PDF document to a PCL XL job.
document.SaveAsPcl("Output.pxl", SaveFormat.PclXL, settings);
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Create the PCL XL settings.
Dim settings As New PclSettings()
settings.Resolution = PclResolutionDpiValue.Dpi600
settings.PaperSize = PclPaperSize.A4
settings.Orientation = PclOrientation.Auto
settings.InputTray = PclInputTray.UpperCassette
settings.ScalingMode = PclScalingMode.Fit
settings.JobName = "QuarterlyReport"
settings.Copies = 2
'Load an existing PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")
'Convert the PDF document to a PCL XL job.
document.SaveAsPcl("Output.pxl", SaveFormat.PclXL, settings)
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

### PclSettings properties

The following table lists the properties of the `PclSettings` class and their default values.

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| `Resolution` | `PclResolutionDpiValue` | `Dpi300` | The device resolution used for the generated job. The supported values are `Dpi300`, `Dpi600`, and `Dpi1200`. |
| `PaperSize` | `PclPaperSize` | `Auto` | The paper medium requested on the `BeginPage` operator. `Auto` derives the nearest standard medium from the PDF page box. |
| `Orientation` | `PclOrientation` | `Auto` | The orientation of the output pages. `Auto` honours the `/Rotate` entry of each page and prints a page that is wider than it is tall in landscape. `Portrait` and `Landscape` force the orientation. |
| `InputTray` | `PclInputTray` | `Auto` | The source paper tray. `Auto` omits the `MediaSource` attribute, and the remaining values request the corresponding tray. |
| `ScalingMode` | `PclScalingMode` | `None` | Determines how the page content is fitted to the selected medium. The supported values are `None`, `Fit`, `Fill`, and `Stretch`. |
| `JobName` | `string` | `"PDF"` | The name of the print job, written into the PJL header as `NAME="…"`. |
| `Copies` | `int` | `1` | The number of copies to print. The valid range is `1` to `999`. |

### Resolution

The `Resolution` property selects the device resolution of the produced job. It affects every PCL XL operator that accepts a measurement.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

PclSettings settings = new PclSettings();
settings.Resolution = PclResolutionDpiValue.Dpi1200;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim settings As New PclSettings()
settings.Resolution = PclResolutionDpiValue.Dpi1200

{% endhighlight %}

{% endtabs %}

### Paper size

The `PaperSize` property selects the physical medium of the output pages. When it is set to `Auto`, the library compares the PDF page box against the standard PCL XL media and picks the nearest one.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

PclSettings settings = new PclSettings();
settings.PaperSize = PclPaperSize.A3;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim settings As New PclSettings()
settings.PaperSize = PclPaperSize.A3

{% endhighlight %}

{% endtabs %}

The following table lists the supported paper sizes.

| Value | Emitted PCL XL medium |
|:---|:---|
| `Auto` | The nearest standard medium derived from the PDF page box. |
| `Letter` | `LetterPaper` |
| `Legal` | `LegalPaper` |
| `Ledger` | `LedgerPaper` |
| `A3` | `A3Paper` |
| `A4` | `A4Paper` |
| `A5` | `A5Paper` |
| `Executive` | `ExecPaper` |

### Orientation

The `Orientation` property controls how each page is placed on the medium.

* `Auto` – The `/Rotate` entry of the page is honoured, and a page that is wider than it is tall is printed in landscape.
* `Portrait` – Every page is printed in portrait, and the `/Rotate` entry is ignored.
* `Landscape` – Every page is printed in landscape, and the `/Rotate` entry is ignored.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

PclSettings settings = new PclSettings();
settings.Orientation = PclOrientation.Landscape;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim settings As New PclSettings()
settings.Orientation = PclOrientation.Landscape

{% endhighlight %}

{% endtabs %}

### Input tray

The `InputTray` property requests a specific source tray on the printer. When it is set to `Auto`, the `MediaSource` attribute is omitted from the `BeginPage` operator, and the printer selects the default tray.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

PclSettings settings = new PclSettings();
settings.InputTray = PclInputTray.LowerCassette;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim settings As New PclSettings()
settings.InputTray = PclInputTray.LowerCassette

{% endhighlight %}

{% endtabs %}

The following table lists the supported input trays.

| Value | Emitted PCL XL media source |
|:---|:---|
| `Auto` | The `MediaSource` attribute is omitted. |
| `Manual` | `ManualFeed` |
| `MultiPurpose` | `MultiPurposeTray` |
| `UpperCassette` | `UpperCassette` |
| `LowerCassette` | `LowerCassette` |
| `Envelope` | `EnvelopeFeeder` |

### Scaling mode

The `ScalingMode` property determines how the page content is fitted to the selected medium.

* `None` – The content is emitted at its original size.
* `Fit` – The content is scaled down until it fits completely on the medium.
* `Fill` – The content is scaled up until it fills the medium.
* `Stretch` – The content is scaled independently along each axis so that it fills the medium.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

PclSettings settings = new PclSettings();
settings.ScalingMode = PclScalingMode.Fit;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim settings As New PclSettings()
settings.ScalingMode = PclScalingMode.Fit

{% endhighlight %}

{% endtabs %}

### Job name

The `JobName` property sets the name of the print job, which is written into the PJL header as `@PJL JOB NAME="…"`. The library normalizes the value before it is written, so the value returned by the getter is exactly the name carried by the header.

* `null` is converted to an empty string.
* Quotes, control characters, and non-ASCII characters are removed.
* The result is truncated to 80 characters.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

PclSettings settings = new PclSettings();
settings.JobName = "Invoice #2026";

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim settings As New PclSettings()
settings.JobName = "Invoice #2026"

{% endhighlight %}

{% endtabs %}

### Copies

The `Copies` property sets the number of copies of the job to print. The valid range is `1` to `999`, and the default value is `1`. Assigning a value outside this range throws an `ArgumentOutOfRangeException`.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

PclSettings settings = new PclSettings();
settings.Copies = 3;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim settings As New PclSettings()
settings.Copies = 3

{% endhighlight %}

{% endtabs %}

## Sending the job to a printer

On Windows, the produced PCL XL job can be sent directly to a printer that supports PCL XL by using the raw printing support of the `System.Drawing.Printing` namespace. The following example converts a PDF document and writes the job to the default printer.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing.Printing;

//Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Create the PCL XL settings.
PclSettings settings = new PclSettings();
settings.Resolution = PclResolutionDpiValue.Dpi600;
settings.PaperSize = PclPaperSize.A4;
settings.Copies = 1;
//Create the printer job.
using (PrinterJob job = new PrinterJob())
{
    //Set the document name that is shown in the printer queue.
    job.DocumentName = "QuarterlyReport";
    //Set the printer that receives the job.
    job.PrinterSettings.PrinterName = "HP LaserJet";
    //Send the PCL XL job to the printer.
    document.SaveAsPcl(job.JobStream, SaveFormat.PclXL, settings);
}
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing.Printing

'Load an existing PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")
'Create the PCL XL settings.
Dim settings As New PclSettings()
settings.Resolution = PclResolutionDpiValue.Dpi600
settings.PaperSize = PclPaperSize.A4
settings.Copies = 1
'Create the printer job.
Using job As New PrinterJob()
    'Set the document name that is shown in the printer queue.
    job.DocumentName = "QuarterlyReport"
    'Set the printer that receives the job.
    job.PrinterSettings.PrinterName = "HP LaserJet"
    'Send the PCL XL job to the printer.
    document.SaveAsPcl(job.JobStream, SaveFormat.PclXL, settings)
End Using
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

N> The `JobStream` of the `PrinterJob` class is owned by the printer subsystem, so the library writes the job to it and leaves the stream open. The job is submitted to the printer when the `PrinterJob` instance is disposed.

N> The `System.Drawing.Printing` namespace is used only to submit the finished job to the printer; the PCL XL conversion itself does not depend on it. This namespace is available on Windows platforms only. On Linux and macOS, write the produced job to a file or to a spooler directory instead.

## Handling errors

The PCL XL conversion throws the [PdfPclException](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPclException.html) when the conversion fails, and the [PdfPclNotSupportedException](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPclNotSupportedException.html) when the requested format or option combination cannot be emitted as PCL XL. Both exceptions derive from [PdfException](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfException.html), so a single `catch` clause handles every PCL XL failure.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

try
{
    PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
    document.SaveAsPcl("Output.pxl", SaveFormat.PclXL);
    document.Close(true);
}
catch (PdfPclNotSupportedException exception)
{
    //The requested format or option combination is not supported.
    Console.WriteLine(exception.Message);
}
catch (PdfPclException exception)
{
    //The PCL XL conversion failed.
    Console.WriteLine(exception.Message);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Try
    Dim document As New PdfLoadedDocument("Input.pdf")
    document.SaveAsPcl("Output.pxl", SaveFormat.PclXL)
    document.Close(True)
Catch ex As PdfPclNotSupportedException
    'The requested format or option combination is not supported.
    Console.WriteLine(ex.Message)
Catch ex As PdfPclException
    'The PCL XL conversion failed.
    Console.WriteLine(ex.Message)
End Try

{% endhighlight %}

{% endtabs %}

The following table lists the exceptions that the PCL XL conversion can raise.

| Exception | Raised when |
|:---|:---|
| `ArgumentNullException` | The `stream` argument of the stream overload is `null`. |
| `ArgumentOutOfRangeException` | The `Copies` property is assigned a value outside the range `1` to `999`. |
| `PdfPclNotSupportedException` | The `format` argument is not a supported PCL format, or the option combination cannot be emitted as PCL XL. |
| `PdfPclException` | The conversion of the document failed. |

## Best practices

* **Reuse a single settings instance.** The `PclSettings` object is read during the conversion only, so it can be shared between saves as long as the values are not modified concurrently.
* **Dispose the loaded document.** Call the `Close` method of the `PdfLoadedDocument` class after the conversion to release the memory consumed by the PDF DOM.
* **Keep the caller-owned stream open.** The library never closes a stream that you pass to the `SaveAsPcl` method, so you decide when the stream is disposed.
* **Do not modify the source document.** The conversion never mutates the document that you pass, so the same document can be converted repeatedly or saved as PDF in parallel with a PCL XL export.

## See also

* [PDF to Image conversion](https://help.syncfusion.com/document-processing/pdf/conversions/pdf-to-image/overview)
* [Save a PDF file](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/save-pdf-file)
* [Open a PDF file](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/open-pdf-file)
