---
title: Working with named destination | Syncfusion
description: This section explains about how to add, remove and modify the named destination in the Essential PDF document with example.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Named Destination

Essential<sup>&reg;</sup> PDF provides support to add, remove and modify the named destination in the PDF document. When you open a PDF file in a web browser, the first page of the PDF file will be shown by default. By adding a named destination, you can open the PDF with the desired location and magnification. The following link example shows how to open a PDF document with named destination in a web page.

Another example that uses "nameddest" parameter in URL:

e.g. [Named Destination document](https://www.syncfusion.com/downloads/support/directtrac/general/pd/mydocument-1524150305.pdf#nameddest=Chapter3)

**Points to remembers:**

* Individual parameters, together with their values (separated by & or #), can be no greater than 32 characters in length.
* You cannot use the reserved characters =, #, and &. There is no way to escape these special characters.

## Adding Named Destination to a PDF document

You can add, remove and modify the named destination using [PdfNamedDestination](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfNamedDestination.html) class. 

The following code example shows how to add named destination in a new PDF document.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Named%20Destination/Adding-named-destination-to-a-PDF-document/.NET/Adding-named-destination-to-a-PDF-document/Program.cs" %}	

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();
//Create an instance for named destination.
PdfNamedDestination destination = new PdfNamedDestination("TOC");
destination.Destination = new PdfDestination(page);
//Set the location.
destination.Destination.Location = new PointF(0, 500);
//Set zoom factor to 400 percentage.
destination.Destination.Zoom = 4;
doc.NamedDestinationCollection.Add(destination);
//Draw the text.
page.Graphics.DrawString("Hello World!!", new PdfStandardFont(PdfFontFamily.Helvetica, 10), PdfBrushes.Black, new PointF(0, 500));

//Save the document.
doc.Save("Output.pdf");
//Close the document.
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
//Create an instance for named destination.
PdfNamedDestination destination = new PdfNamedDestination("TOC");
destination.Destination = new PdfDestination(page);
//Set the location.
destination.Destination.Location = new PointF(0, 500);
//Set zoom factor to 400 percentage.
destination.Destination.Zoom = 4;
doc.NamedDestinationCollection.Add(destination);
//Draw the text.
page.Graphics.DrawString("Hello World!!", new PdfStandardFont(PdfFontFamily.Helvetica, 10), PdfBrushes.Black, new PointF(0, 500));

//Save the document.
doc.Save("Output.pdf");
//Close the document.
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
'Create an instance for named destination.
Dim destination As New PdfNamedDestination("TOC")
destination.Destination = New PdfDestination(page)
'Set the location
destination.Destination.Location = New PointF(0, 500)
'Set zoom factor to 400 percentage
destination.Destination.Zoom = 4
doc.NamedDestinationCollection.Add(destination)
'Draw the text.
page.Graphics.DrawString("Hello World!!", New PdfStandardFont(PdfFontFamily.Helvetica, 10), PdfBrushes.Black, New PointF(0, 500))

'Save the document.
doc.Save("Output.pdf")
'Close the document.
doc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Named%20Destination/Adding-named-destination-to-a-PDF-document).

## Adding Named Destination to an existing PDF document

The following code example shows how to add named destination in an existing PDF document using the [PdfNamedDestination](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfNamedDestination.html) class.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Named%20Destination/Adding-named-destination-to-an-existing-PDF-document/.NET/Adding-named-destination-to-an-existing-PDF-document/Program.cs" %}	

using Syncfusion.Drawing;
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
//Set zoom factor to 400 percentage
destination.Destination.Zoom = 4;
loadedDocument.NamedDestinationCollection.Add(destination);

//Save the document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

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
//Set zoom factor to 400 percentage.
destination.Destination.Zoom = 4;
loadedDocument.NamedDestinationCollection.Add(destination);

//Save the document.
loadedDocument.Save("Output.pdf");
//Close the document.
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
'Set zoom factor to 400 percentage.
destination.Destination.Zoom = 4
loadedDocument.NamedDestinationCollection.Add(destination)

'Save the document.
loadedDocument.Save("Output.pdf")
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Named%20Destination/Adding-named-destination-to-an-existing-PDF-document).

## Removing/Modifying the named destination

You can remove the named destination using [Remove](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfNamedDestinationCollection.html#Syncfusion_Pdf_Interactive_PdfNamedDestinationCollection_Remove_System_String_) method of [PdfNamedDestinationCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfNamedDestinationCollection.html). The following code snippet illustrates the same.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Named%20Destination/Remove-and-modify-the-named-destination-in-a-PDF/.NET/Remove-and-modify-the-named-destination-in-a-PDF/Program.cs" %}	

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument lDoc = new PdfLoadedDocument("Input.pdf");
//Get the named destination collection.
PdfNamedDestinationCollection destinationCollection = lDoc.NamedDestinationCollection;
//Remove the named destination by title.
destinationCollection.Remove("TOC");
//Modify the exiting named destination.
PdfNamedDestination destination = destinationCollection[0];
destination.Title = "POC";

//Save the document.
lDoc.Save("Output.pdf");
//Close the document.
lDoc.Close(true);

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
            
//Modify the exiting named destination.
PdfNamedDestination destination = destinationCollection[0];
destination.Title = "POC";
            
//Save the document.
lDoc.Save("Output.pdf");
//Close the document.
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

'Modify the exiting named destination.
Dim destination As PdfNamedDestination = destinationCollection(0)
destination.Title = "POC"

'Save the document.
lDoc.Save("Output.pdf")
'Close the document.
lDoc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Named%20Destination/Remove-and-modify-the-named-destination-in-a-PDF).

## Adding named destination to the bookmarks

The following code example shows how to add named destination to the [Bookmarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-bookmarks) in the PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Named%20Destination/Adding-named-destination-to-the-bookmarks/.NET/Adding-named-destination-to-the-bookmarks/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();
//Create an instance for named destination.
PdfNamedDestination destination = new PdfNamedDestination("TOC");
destination.Destination = new PdfDestination(page);
//Set the location.
destination.Destination.Location = new PointF(0, 800);
//Set zoom factor to 400 percentage
destination.Destination.Zoom = 4;
//Add the named destination to the collection
doc.NamedDestinationCollection.Add(destination);
//Create a bookmark.
PdfBookmark bookmark = doc.Bookmarks.Add("TOC");
//Assign the named destination to the bookmark.
bookmark.NamedDestination = destination;

//Save the document.
doc.Save("Sample.pdf");
//Close the document.
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();
//Create an instance for named destination.
PdfNamedDestination destination = new PdfNamedDestination("TOC");
destination.Destination = new PdfDestination(page);
//Set the location.
destination.Destination.Location = new PointF(0, 800);
//Set zoom factor to 400 percentage.
destination.Destination.Zoom = 4;
//Add the named destination to the collection
doc.NamedDestinationCollection.Add(destination);
//Create a bookmark.
PdfBookmark bookmark = doc.Bookmarks.Add("TOC");
//Assign the named destination to the bookmark.
bookmark.NamedDestination = destination;

//Save the document.
doc.Save("Sample.pdf");
//Close the document.
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
'Create an instance for named destination.
Dim destination As New PdfNamedDestination("TOC")
destination.Destination = New PdfDestination(page)
'Set the location.
destination.Destination.Location = New PointF(0, 800)
'Set zoom factor to 400 percentage.
destination.Destination.Zoom = 4
'Add the named destination to the collection.
doc.NamedDestinationCollection.Add(destination)
'Create a bookmark.
Dim bookmark As PdfBookmark = doc.Bookmarks.Add("TOC")
'Assign the named destination to the bookmark.
bookmark.NamedDestination = destination

'Save the document.
doc.Save("Sample.pdf")
'Close the document.
doc.Close(True)

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Named%20Destination/Adding-named-destination-to-the-bookmarks).
