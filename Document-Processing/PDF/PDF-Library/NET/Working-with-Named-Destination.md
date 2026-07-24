---
title: Working with Named Destinations | Syncfusion
description: This section explains how to add, remove, and modify named destinations in PDF documents using the Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Named Destinations

Syncfusion<sup>&reg;</sup> PDF provides support to add, remove, and modify named destinations in a PDF document. When you open a PDF file in a web browser, the first page of the PDF file is shown by default. By adding a named destination, you can open the PDF at a specific location and magnification.

The following link example shows how to open a PDF document with a named destination in a web page using the `nameddest` parameter in the URL.

e.g. [Named Destination document](https://www.syncfusion.com/downloads/support/directtrac/general/pd/mydocument-1524150305.pdf#nameddest=Chapter3)

**Points to remember:**

* Individual parameters, together with their values (separated by `&` or `#`), must not exceed 32 characters in length.
* You cannot use the reserved characters `=`, `#`, and `&`. There is no way to escape these special characters.
* The destination title must be unique within the document. Adding a destination with an existing title replaces the existing entry.

## Adding a named destination to a new PDF document

You can add a named destination to a PDF document by creating a [PdfNamedDestination](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfNamedDestination.html) instance and adding it to the [NamedDestinationCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_NamedDestinationCollection) of the document.

The following code example shows how to add a named destination in a new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Named%20Destination/Adding-named-destination-to-a-PDF-document/.NET/Adding-named-destination-to-a-PDF-document/Program.cs" %}

using System.IO;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();
//Create an instance for the named destination.
PdfNamedDestination destination = new PdfNamedDestination("TOC");
destination.Destination = new PdfDestination(page);
//Set the location.
destination.Destination.Location = new PointF(0, 500);
//Set the zoom factor to 400 percent.
destination.Destination.Zoom = 4;
//Add the named destination to the document.
doc.NamedDestinationCollection.Add(destination);
//Draw some content at the destination location.
page.Graphics.DrawString("Hello World!!", new PdfStandardFont(PdfFontFamily.Helvetica, 10), PdfBrushes.Black, new PointF(0, 500));

//Save and close the document.
using (FileStream outputStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write))
{
    doc.Save(outputStream);
}
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();
//Create an instance for the named destination.
PdfNamedDestination destination = new PdfNamedDestination("TOC");
destination.Destination = new PdfDestination(page);
//Set the location.
destination.Destination.Location = new PointF(0, 500);
//Set the zoom factor to 400 percent.
destination.Destination.Zoom = 4;
//Add the named destination to the document.
doc.NamedDestinationCollection.Add(destination);
//Draw some content at the destination location.
page.Graphics.DrawString("Hello World!!", new PdfStandardFont(PdfFontFamily.Helvetica, 10), PdfBrushes.Black, new PointF(0, 500));

//Save and close the document.
doc.Save("Output.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new PDF document.
Dim doc As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = doc.Pages.Add()
'Create an instance for the named destination.
Dim destination As New PdfNamedDestination("TOC")
destination.Destination = New PdfDestination(page)
'Set the location.
destination.Destination.Location = New PointF(0, 500)
'Set the zoom factor to 400 percent.
destination.Destination.Zoom = 4
'Add the named destination to the document.
doc.NamedDestinationCollection.Add(destination)
'Draw some content at the destination location.
page.Graphics.DrawString("Hello World!!", New PdfStandardFont(PdfFontFamily.Helvetica, 10), PdfBrushes.Black, New PointF(0, 500))

'Save and close the document.
doc.Save("Output.pdf")
doc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Named%20Destination/Adding-named-destination-to-a-PDF-document).

## Adding a named destination to an existing PDF document

The following code example shows how to add a named destination to an existing PDF document using the [PdfNamedDestination](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfNamedDestination.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Named%20Destination/Adding-named-destination-to-an-existing-PDF-document/.NET/Adding-named-destination-to-an-existing-PDF-document/Program.cs" %}

using System.IO;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputStream);
//Get the first page of the document.
PdfPageBase page = loadedDocument.Pages[0];
//Create an instance for named destination.
PdfNamedDestination destination = new PdfNamedDestination("TOC");
destination.Destination = new PdfDestination(page);
//Set the location.
destination.Destination.Location = new PointF(0, 500);
//Set the zoom factor to 400 percent.
destination.Destination.Zoom = 4;
//Add the named destination to the document.
loadedDocument.NamedDestinationCollection.Add(destination);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);
inputStream.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page of the document.
PdfPageBase page = loadedDocument.Pages[0];
//Create an instance for named destination.
PdfNamedDestination destination = new PdfNamedDestination("TOC");
destination.Destination = new PdfDestination(page);
//Set the location.
destination.Destination.Location = new PointF(0, 500);
//Set the zoom factor to 400 percent.
destination.Destination.Zoom = 4;
//Add the named destination to the document.
loadedDocument.NamedDestinationCollection.Add(destination);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Interactive

'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Get the first page of the document.
Dim page As PdfPageBase = loadedDocument.Pages(0)
'Create an instance for named destination.
Dim destination As New PdfNamedDestination("TOC")
destination.Destination = New PdfDestination(page)
'Set the location.
destination.Destination.Location = New PointF(0, 500)
'Set the zoom factor to 400 percent.
destination.Destination.Zoom = 4
'Add the named destination to the document.
loadedDocument.NamedDestinationCollection.Add(destination)

'Save and close the document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Named%20Destination/Adding-named-destination-to-an-existing-PDF-document).

## Removing or modifying a named destination

You can remove the named destination using the [Remove](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfNamedDestinationCollection.html#Syncfusion_Pdf_Interactive_PdfNamedDestinationCollection_Remove_System_String_) method of the [PdfNamedDestinationCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfNamedDestinationCollection.html). To modify an existing destination, retrieve it from the collection by index or title, update its properties, and then save the document. The following code example illustrates the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Named%20Destination/Remove-and-modify-the-named-destination-in-a-PDF/.NET/Remove-and-modify-the-named-destination-in-a-PDF/Program.cs" %}

using System.IO;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument lDoc = new PdfLoadedDocument(inputStream);
//Get the named destination collection.
PdfNamedDestinationCollection destinationCollection = lDoc.NamedDestinationCollection;
//Remove the named destination by title.
destinationCollection.Remove("TOC");
//Modify the existing named destination.
PdfNamedDestination destination = destinationCollection[0];
destination.Title = "POC";

//Save and close the document.
lDoc.Save("Output.pdf");
lDoc.Close(true);
inputStream.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument lDoc = new PdfLoadedDocument("Sample.pdf");
//Get the named destination collection.
PdfNamedDestinationCollection destinationCollection = lDoc.NamedDestinationCollection;
//Remove the named destination by title.
destinationCollection.Remove("TOC");

//Modify the existing named destination.
PdfNamedDestination destination = destinationCollection[0];
destination.Title = "POC";

//Save and close the document.
lDoc.Save("Output.pdf");
lDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Interactive

'Load the PDF document.
Dim lDoc As New PdfLoadedDocument("Sample.pdf")
'Get the named destination collection.
Dim destinationCollection As PdfNamedDestinationCollection = lDoc.NamedDestinationCollection
'Remove the named destination by title.
destinationCollection.Remove("TOC")

'Modify the existing named destination.
Dim destination As PdfNamedDestination = destinationCollection(0)
destination.Title = "POC"

'Save and close the document.
lDoc.Save("Output.pdf")
lDoc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Named%20Destination/Remove-and-modify-the-named-destination-in-a-PDF).

> **Note:** The `Zoom` value of a [PdfDestination](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfDestination.html) represents a multiplier on the standard zoom level, where `1.0` equals 100 percent. A value of `4` therefore corresponds to a zoom level of 400 percent.

## Adding a named destination to bookmarks

The following code example shows how to add a named destination to the [bookmarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-bookmarks) in the PDF document. When the named destination is assigned to a bookmark, the bookmark becomes navigable to the destination's location in the document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Named%20Destination/Adding-named-destination-to-the-bookmarks/.NET/Adding-named-destination-to-the-bookmarks/Program.cs" %}

using System.IO;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();
//Create an instance for the named destination.
PdfNamedDestination destination = new PdfNamedDestination("TOC");
destination.Destination = new PdfDestination(page);
//Set the location.
destination.Destination.Location = new PointF(0, 800);
//Set the zoom factor to 400 percent.
destination.Destination.Zoom = 4;
//Add the named destination to the collection.
doc.NamedDestinationCollection.Add(destination);
//Create a bookmark.
PdfBookmark bookmark = doc.Bookmarks.Add("TOC");
//Assign the named destination to the bookmark.
bookmark.NamedDestination = destination;

//Save and close the document.
using (FileStream outputStream = new FileStream("Sample.pdf", FileMode.Create, FileAccess.Write))
{
    doc.Save(outputStream);
}
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();
//Create an instance for the named destination.
PdfNamedDestination destination = new PdfNamedDestination("TOC");
destination.Destination = new PdfDestination(page);
//Set the location.
destination.Destination.Location = new PointF(0, 800);
//Set the zoom factor to 400 percent.
destination.Destination.Zoom = 4;
//Add the named destination to the collection.
doc.NamedDestinationCollection.Add(destination);
//Create a bookmark.
PdfBookmark bookmark = doc.Bookmarks.Add("TOC");
//Assign the named destination to the bookmark.
bookmark.NamedDestination = destination;

//Save and close the document.
doc.Save("Sample.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new PDF document.
Dim doc As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = doc.Pages.Add()
'Create an instance for the named destination.
Dim destination As New PdfNamedDestination("TOC")
destination.Destination = New PdfDestination(page)
'Set the location.
destination.Destination.Location = New PointF(0, 800)
'Set the zoom factor to 400 percent.
destination.Destination.Zoom = 4
'Add the named destination to the collection.
doc.NamedDestinationCollection.Add(destination)
'Create a bookmark.
Dim bookmark As PdfBookmark = doc.Bookmarks.Add("TOC")
'Assign the named destination to the bookmark.
bookmark.NamedDestination = destination

'Save and close the document.
doc.Save("Sample.pdf")
doc.Close(True)

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Named%20Destination/Adding-named-destination-to-the-bookmarks).
