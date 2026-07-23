---
title: Working with Silverlight
description: This section explains how to load and save PDF documents in Silverlight applications using Essential PDF.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Silverlight

In your Silverlight application, please add the required assemblies in order to use Essential<sup>&reg;</sup> PDF. [Refer here for assemblies required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required).

## Loading the document

The following code example illustrates how to load a PDF file by using a URI in a Silverlight application.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System;
using System.IO;
using System.Reflection;
using System.Windows.Controls;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Base;

//Load the file as a relative URI from the application's resource pack
Uri uri = new Uri("/Syncfusion.SampleBrowser.Samples.Pdf;component/Assets/Sample.pdf", UriKind.Relative);
Stream docStream = Application.GetResourceStream(uri).Stream;

//Load the PDF document from the stream
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(docStream);

//Create a booklet with two sides
PdfDocument document = PdfBookletCreator.CreateBooklet(loadedDocument, new SizeF(1000, 700), true);

//Save the document to a user-selected file
document.Save("Output.pdf");

//Close the documents
document.Close(true);
loadedDocument.Close(true);

public static class Extensions

{

public static void Save(this PdfDocument document)

{

SaveFileDialog sfd = new SaveFileDialog()

{

DefaultExt = ".pdf",

Filter = "Adobe PDF Files(*.pdf)|*.pdf",

FilterIndex = 1

};

if (sfd.ShowDialog() == true)

{

using (Stream stream = sfd.OpenFile())

{

document.Save(stream);

}

}

}

public static void Save(this PdfLoadedDocument document)

{

SaveFileDialog sfd = new SaveFileDialog()

{

DefaultExt = ".pdf",

Filter = "Adobe PDF Files(*.pdf)|*.pdf",

FilterIndex = 1

};

if (sfd.ShowDialog() == true)

{

using (Stream stream = sfd.OpenFile())

{

document.Save(stream);

}

}

}

}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports System
Imports System.IO
Imports System.Reflection
Imports System.Windows.Controls
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Base

'Load the file as a relative URI from the application's resource pack
Dim uri As New Uri("/Syncfusion.SampleBrowser.Samples.Pdf;component/Assets/Sample.pdf", UriKind.Relative)
Dim docStream As Stream = Application.GetResourceStream(uri).Stream

'Load the PDF document from the stream
Dim loadedDocument As New PdfLoadedDocument(docStream)

'Create a booklet with two sides
Dim document As PdfDocument = PdfBookletCreator.CreateBooklet(loadedDocument, New SizeF(1000, 700), True)

'Save the document to a user-selected file
document.Save("Output.pdf")

'Close the documents
document.Close(True)
loadedDocument.Close(True)

Public Module Extensions

<System.Runtime.CompilerServices.Extension> _

Public Sub Save(ByVal document As PdfDocument)

Dim sfd As New SaveFileDialog() With {.DefaultExt = ".pdf", .Filter = "Adobe PDF Files(*.pdf)|*.pdf", .FilterIndex = 1}

If sfd.ShowDialog() = True Then

Using stream As Stream = sfd.OpenFile()

document.Save(stream)

End Using

End If

End Sub

<System.Runtime.CompilerServices.Extension> _

Public Sub Save(ByVal document As PdfLoadedDocument)

Dim sfd As New SaveFileDialog() With {.DefaultExt = ".pdf", .Filter = "Adobe PDF Files(*.pdf)|*.pdf", .FilterIndex = 1}

If sfd.ShowDialog() = True Then

Using stream As Stream = sfd.OpenFile()

document.Save(stream)

End Using

End If

End Sub

End Module

{% endhighlight %}

{% endtabs %}

The following code example illustrates how to load a PDF file from an embedded resource stream in Silverlight.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System;
using System.IO;
using System.Reflection;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Base;

//Load the file as a manifest resource stream
Stream docStream = Assembly.GetExecutingAssembly().GetManifestResourceStream("Sample.Resources.Data.Sample.pdf");

//Load the PDF document from the stream
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(docStream);

//Create a booklet with two sides
PdfDocument document = PdfBookletCreator.CreateBooklet(loadedDocument, new SizeF(1000, 700), true);

//Save the document to a user-selected file
document.Save("Output.pdf");

//Close the documents
document.Close(true);
loadedDocument.Close(true);

public static class Extensions

{

public static void Save(this PdfDocument document)

{

SaveFileDialog sfd = new SaveFileDialog()

{

DefaultExt = ".pdf",

Filter = "Adobe PDF Files(*.pdf)|*.pdf",

FilterIndex = 1

};

if (sfd.ShowDialog() == true)

{

using (Stream stream = sfd.OpenFile())

{

document.Save(stream);

}

}

}

public static void Save(this PdfLoadedDocument document)

{

SaveFileDialog sfd = new SaveFileDialog()

{

DefaultExt = ".pdf",

Filter = "Adobe PDF Files(*.pdf)|*.pdf",

FilterIndex = 1

};

if (sfd.ShowDialog() == true)

{

using (Stream stream = sfd.OpenFile())

{

document.Save(stream);

}

}

}

}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports System
Imports System.IO
Imports System.Reflection
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Base

'Load the file as a manifest resource stream
Dim docStream As Stream = System.Reflection.Assembly.GetExecutingAssembly().GetManifestResourceStream("Sample.Resources.Data.Sample.pdf")

'Load the PDF document from the stream
Dim loadedDocument As New PdfLoadedDocument(docStream)

'Create a booklet with two sides
Dim document As PdfDocument = PdfBookletCreator.CreateBooklet(loadedDocument, New SizeF(1000, 700), True)

'Save the document to a user-selected file
document.Save("Output.pdf")

'Close the documents
document.Close(True)
loadedDocument.Close(True)

Public Module Extensions

<System.Runtime.CompilerServices.Extension> _

Public Sub Save(ByVal document As PdfDocument)

Dim sfd As New SaveFileDialog() With {.DefaultExt = ".pdf", .Filter = "Adobe PDF Files(*.pdf)|*.pdf", .FilterIndex = 1}

If sfd.ShowDialog() = True Then

Using stream As Stream = sfd.OpenFile()

document.Save(stream)

End Using

End If

End Sub

<System.Runtime.CompilerServices.Extension> _

Public Sub Save(ByVal document As PdfLoadedDocument)

Dim sfd As New SaveFileDialog() With {.DefaultExt = ".pdf", .Filter = "Adobe PDF Files(*.pdf)|*.pdf", .FilterIndex = 1}

If sfd.ShowDialog() = True Then

Using stream As Stream = sfd.OpenFile()

document.Save(stream)

End Using

End If

End Sub

End Module

{% endhighlight %}

{% endtabs %}

## Saving the document

Silverlight applications run in a sandboxed environment and do not have direct access to the file system. To save a generated PDF, use the `SaveFileDialog` from `System.Windows.Controls` to let the user pick a target file. The following helper extensions wrap the dialog so that `PdfDocument.Save("Output.pdf")` and `PdfLoadedDocument.Save("Output.pdf")` can be called from anywhere in the application.

The following code example illustrates how to create a new PDF document and save it in a Silverlight application.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System;
using System.IO;
using System.Windows.Controls;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Base;
using Syncfusion.Pdf.Graphics;

//Create a new document
PdfDocument document = new PdfDocument();

//Add a page
PdfPage page = document.Pages.Add();

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Create a solid brush
PdfBrush brush = new PdfSolidBrush(Color.FromArgb(0, 0, 0, 0));

//Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);

//Draw the text
graphics.DrawString("Hello world!", font, brush, new PointF(20, 20));

//Save the document to a user-selected file
document.Save("Output.pdf");

//Close the document
document.Close(true);

//Extension methods that wrap SaveFileDialog so Save("Output.pdf") can be called without arguments
public static class PdfSaveExtensions
{

public static void Save(this PdfDocument document)

{

SaveFileDialog sfd = new SaveFileDialog()

{

DefaultExt = ".pdf",

Filter = "Adobe PDF Files(*.pdf)|*.pdf",

FilterIndex = 1

};

if (sfd.ShowDialog() == true)

{

using (Stream stream = sfd.OpenFile())

{

document.Save(stream);

}

}

}

public static void Save(this PdfLoadedDocument document)

{

SaveFileDialog sfd = new SaveFileDialog()

{

DefaultExt = ".pdf",

Filter = "Adobe PDF Files(*.pdf)|*.pdf",

FilterIndex = 1

};

if (sfd.ShowDialog() == true)

{

using (Stream stream = sfd.OpenFile())

{

document.Save(stream);

}

}

}

}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports System
Imports System.IO
Imports System.Runtime.CompilerServices
Imports System.Windows.Controls
Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Base
Imports Syncfusion.Pdf.Graphics

'Create a new document
Dim document As New PdfDocument()

'Add a page
Dim page As PdfPage = document.Pages.Add()

'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Create a solid brush
Dim brush As PdfBrush = New PdfSolidBrush(Color.FromArgb(0, 0, 0, 0))

'Set the font
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 20)

'Draw the text
graphics.DrawString("Hello world!", font, brush, New PointF(20, 20))

'Save the document to a user-selected file
document.Save("Output.pdf")

'Close the document
document.Close(True)

'Extension methods that wrap SaveFileDialog so Save("Output.pdf") can be called without arguments
Public Module PdfSaveExtensions

    <Extension()>
    Public Sub Save(ByVal document As PdfDocument, ByVal fileName As String)
        Dim sfd As New SaveFileDialog() With {
            .DefaultExt = ".pdf",
            .Filter = "Adobe PDF Files(*.pdf)|*.pdf",
            .FilterIndex = 1
        }
        If sfd.ShowDialog() = True Then
            Using stream As Stream = sfd.OpenFile()
                document.Save(stream)
            End Using
        End If
    End Sub

    <Extension()>
    Public Sub Save(ByVal document As PdfLoadedDocument, ByVal fileName As String)
        Dim sfd As New SaveFileDialog() With {
            .DefaultExt = ".pdf",
            .Filter = "Adobe PDF Files(*.pdf)|*.pdf",
            .FilterIndex = 1
        }
        If sfd.ShowDialog() = True Then
            Using stream As Stream = sfd.OpenFile()
                document.Save(stream)
            End Using
        End If
    End Sub

End Module

{% endhighlight %}

{% endtabs %}

## Troubleshooting

| Issue | Possible cause | Resolution |
|-------|----------------|------------|
| `SecurityException` when accessing the file system | Silverlight runs in a sandbox and restricts direct file access. | Use `SaveFileDialog` for the user to pick the destination, or write to `IsolatedStorage` as shown above. |
| `GetManifestResourceStream` returns `null` | The file is not marked as an embedded resource, or the resource name does not match. | In Visual Studio, set **Build Action** to **Resource** for `Sample.pdf` and use the default namespace followed by the file path (for example, `Sample.Resources.Data.Sample.pdf`). |
| `Application.GetResourceStream` returns `null` | The pack URI is incorrect or the file is not part of the `Resource` build action. | Verify the pack URI uses the format `/AssemblyName;component/Path/To/File.pdf` and that the file is set to **Resource** in the project. |
| `PdfLoadedDocument` throws an exception about unsupported content | The input PDF uses features not supported by the Silverlight version of Essential<sup>&reg;</sup> PDF. | Refer to [Supported and Unsupported Features](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/supported-and-unsupported-features) for a list of supported PDF features. |
| License warnings appear in the generated document | The Syncfusion license has not been registered. | Register the license at application startup using `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("your license key")`. Refer to the [licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for more information. |

## See also

* [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required)
* [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required)
* [Supported and Unsupported Features](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/supported-and-unsupported-features)
* [Working with Document](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-document)
* [Open PDF file](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/open-pdf-file)
* [Save PDF file](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/save-pdf-file)
