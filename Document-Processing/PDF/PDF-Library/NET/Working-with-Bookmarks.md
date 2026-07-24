---
title: Working with Bookmarks | PDF library | Syncfusion
description: This section explains how to add, modify, and remove bookmarks in a PDF document using the Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Bookmarks

Essential<sup>&reg;</sup> PDF provides support to insert, remove, and modify the bookmarks in a PDF document.

To quickly get started with adding, modifying, and removing PDF bookmarks in .NET using the Syncfusion<sup>&reg;</sup> PDF library, refer to this video tutorial:
{% youtube "https://youtu.be/A6Tdkqr6Wfs?si=koRFBG6FgTJYEsSw" %}

## Adding Bookmarks in a PDF

The [PdfBookmarkBase](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfBookmarkBase.html) collection represents the bookmarks in a PDF document. You can add a bookmark in a new PDF document using [PdfBookmark](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfBookmark.html) class. Please refer the following code example.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Bookmarks/Adding-bookmarks-in-a-PDF-document/.NET/Adding-bookmarks-in-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();
// Create the document bookmark
PdfBookmark bookmark = document.Bookmarks.Add("Page 1");
// Set the destination page
bookmark.Destination = new PdfDestination(page);
// Set the destination location
bookmark.Destination.Location = new PointF(20, 20);
// Set the text style and color
bookmark.TextStyle = PdfTextStyle.Bold;
bookmark.Color = Color.Red;

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();
// Create the document bookmark
PdfBookmark bookmark = document.Bookmarks.Add("Page 1");
// Set the destination page
bookmark.Destination = new PdfDestination(page);
// Set the destination location
bookmark.Destination.Location = new PointF(20, 20);
// Set the text style and color
bookmark.TextStyle = PdfTextStyle.Bold;
bookmark.Color = Color.Red;

// Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

' Create a new PDF document
Dim document As New PdfDocument()
' Add a page to the document
Dim page As PdfPage = document.Pages.Add()
' Create the document bookmark
Dim bookmark As PdfBookmark = document.Bookmarks.Add("Page 1")
' Set the destination page
bookmark.Destination = New PdfDestination(page)
' Set the destination location
bookmark.Destination.Location = New PointF(20, 20)
' Set the text style and color
bookmark.TextStyle = PdfTextStyle.Bold
bookmark.Color = Color.Red

' Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Bookmarks/Adding-bookmarks-in-a-PDF-document/).

## Adding bookmarks in an existing PDF document

To add bookmarks to an existing PDF document, use the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Bookmarks/Adding-bookmarks-in-an-existing-PDF-document/.NET/Adding-bookmarks-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Create the document bookmark
PdfBookmark bookmark = document.Bookmarks.Add("Page 1");
// Set the destination page
bookmark.Destination = new PdfDestination(document.Pages[0]);
// Set the text style and color
bookmark.TextStyle = PdfTextStyle.Bold;
bookmark.Color = Color.Red;
// Set the destination location
bookmark.Destination.Location = new PointF(20, 20);

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Create the document bookmark
PdfBookmark bookmark = document.Bookmarks.Add("Page 1");
// Set the destination page
bookmark.Destination = new PdfDestination(document.Pages[0]);
// Set the text style and color
bookmark.TextStyle = PdfTextStyle.Bold;
bookmark.Color = Color.Red;
// Set the destination location
bookmark.Destination.Location = new PointF(20, 20);

// Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load the PDF document
Dim document As New PdfLoadedDocument("Input.pdf")
' Create the document bookmark
Dim bookmark As PdfBookmark = document.Bookmarks.Add("Page 1")
' Set the destination page
bookmark.Destination = New PdfDestination(document.Pages(0))
' Set the text style and color
bookmark.TextStyle = PdfTextStyle.Bold
bookmark.Color = Color.Red
' Set the destination location
bookmark.Destination.Location = New PointF(20, 20)

' Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Bookmarks/Adding-bookmarks-in-an-existing-PDF-document/).

## Adding a child to the bookmarks

You can add a child bookmark by using the [Insert](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfBookmarkBase.html#Syncfusion_Pdf_Interactive_PdfBookmarkBase_Insert_System_Int32_System_String_) method of the [PdfBookmarkBase](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfBookmarkBase.html) class. The following code example illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Bookmarks/Adding-a-child-to-the-bookmarks-in-a-PDF/.NET/Adding-a-child-to-the-bookmarks-in-a-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();
// Create the parent bookmark
PdfBookmark bookmark = document.Bookmarks.Add("Page 1");
// Set the destination page
bookmark.Destination = new PdfDestination(page);
// Set the destination location
bookmark.Destination.Location = new PointF(20, 20);
// Add a child bookmark to the parent
PdfBookmark childBookmark = bookmark.Insert(0, "heading 1");
childBookmark.Destination = new PdfDestination(page);
childBookmark.Destination.Location = new PointF(400, 300);
childBookmark.Destination.Zoom = 2F;
// Set the text style and color
bookmark.TextStyle = PdfTextStyle.Bold;
bookmark.Color = Color.Red;

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();
// Create the parent bookmark
PdfBookmark bookmark = document.Bookmarks.Add("Page 1");
// Set the destination page
bookmark.Destination = new PdfDestination(page);
// Set the destination location
bookmark.Destination.Location = new PointF(20, 20);
// Add a child bookmark to the parent
PdfBookmark childBookmark = bookmark.Insert(0, "heading 1");
childBookmark.Destination = new PdfDestination(page);
childBookmark.Destination.Location = new PointF(400, 300);
childBookmark.Destination.Zoom = 2F;
// Set the text style and color
bookmark.TextStyle = PdfTextStyle.Bold;
bookmark.Color = Color.Red;

// Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

' Create a new PDF document
Dim document As New PdfDocument()
' Add a page to the document
Dim page As PdfPage = document.Pages.Add()
' Create the parent bookmark
Dim bookmark As PdfBookmark = document.Bookmarks.Add("Page 1")
' Set the destination page
bookmark.Destination = New PdfDestination(page)
' Set the destination location
bookmark.Destination.Location = New PointF(20, 20)
' Add a child bookmark to the parent
Dim childBookmark As PdfBookmark = bookmark.Insert(0, "heading 1")
childBookmark.Destination = New PdfDestination(page)
childBookmark.Destination.Location = New PointF(400, 300)
childBookmark.Destination.Zoom = 2.0F
' Set the text style and color
bookmark.TextStyle = PdfTextStyle.Bold
bookmark.Color = Color.Red

' Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Bookmarks/Adding-a-child-to-the-bookmarks-in-a-PDF).

## Inserting bookmarks in an existing PDF

When loading an existing document, Essential<sup>&reg;</sup> PDF loads all bookmarks of the document.

Each loaded bookmark is represented by the [PdfLoadedBookmark](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedBookmark.html) object. The following code example illustrates how to insert new bookmarks in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Bookmarks/Inserting-bookmarks-in-an-existing-PDF/.NET/Inserting-bookmarks-in-an-existing-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Insert a new bookmark into the existing bookmark collection
PdfBookmark bookmark = document.Bookmarks.Insert(1, "New Page 2");
// Set the destination page and location
bookmark.Destination = new PdfDestination(document.Pages[1]);
bookmark.Destination.Location = new PointF(0, 300);

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Insert a new bookmark into the existing bookmark collection
PdfBookmark bookmark = document.Bookmarks.Insert(1, "New Page 2");
// Set the destination page and location
bookmark.Destination = new PdfDestination(document.Pages[1]);
bookmark.Destination.Location = new PointF(0, 300);
// Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load the PDF document
Dim document As New PdfLoadedDocument("Input.pdf")
' Insert a new bookmark into the existing bookmark collection
Dim bookmark As PdfBookmark = document.Bookmarks.Insert(1, "New Page 2")
' Set the destination page and location
bookmark.Destination = New PdfDestination(document.Pages(1))
bookmark.Destination.Location = New PointF(0, 300)
' Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Bookmarks/Inserting-bookmarks-in-an-existing-PDF/).

## Removing bookmarks from an existing PDF

You can remove bookmarks from an existing PDF document by using the [Remove](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfBookmarkBase.html#Syncfusion_Pdf_Interactive_PdfBookmarkBase_Remove_System_String_) method of the [PdfBookmarkBase](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfBookmarkBase.html) class. The following code example illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Bookmarks/Remove-bookmarks-from-an-existing-PDF-document/.NET/Remove-bookmarks-from-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Get the bookmark collection
PdfBookmarkBase bookmarks = document.Bookmarks;
// Remove a bookmark by its name
bookmarks.Remove("Page 1");
// Remove a bookmark by its index
bookmarks.RemoveAt(1);

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Get the bookmark collection
PdfBookmarkBase bookmarks = document.Bookmarks;
// Remove a bookmark by its name
bookmarks.Remove("Page 1");
// Remove a bookmark by its index
bookmarks.RemoveAt(1);

// Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load the PDF document
Dim document As New PdfLoadedDocument("Input.pdf")
' Get the bookmark collection
Dim bookmarks As PdfBookmarkBase = document.Bookmarks
' Remove a bookmark by its name
bookmarks.Remove("Page 1")
' Remove a bookmark by its index
bookmarks.RemoveAt(1)

' Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Bookmarks/Remove-bookmarks-from-an-existing-PDF-document/).

## Modifying the bookmarks

Essential<sup>&reg;</sup> PDF allows you to modify the bookmarks in an existing PDF document. The following modifications can be made to bookmarks in an existing document:

* Modify the bookmark style, color, title, and destination.
* Add or insert new bookmarks into the root collection.
* Add or insert new bookmarks as a child of another bookmark.
* Assign the destination of the added bookmarks to a loaded page or a new page of the document.

The following code example shows how to modify the [Destination](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedBookmark.html#Syncfusion_Pdf_Interactive_PdfLoadedBookmark_Destination), [Color](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedBookmark.html#Syncfusion_Pdf_Interactive_PdfLoadedBookmark_Color), [TextStyle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedBookmark.html#Syncfusion_Pdf_Interactive_PdfLoadedBookmark_TextStyle), and [Title](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedBookmark.html#Syncfusion_Pdf_Interactive_PdfLoadedBookmark_Title) of an existing bookmark.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Bookmarks/Modify-the-bookmarks-in-an-existing-PDF-document/.NET/Modify-the-bookmarks-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Get the bookmark collection
PdfBookmarkBase bookmarks = document.Bookmarks;
// Get the first bookmark and modify its properties
PdfLoadedBookmark bookmark = bookmarks[0] as PdfLoadedBookmark;
bookmark.Destination = new PdfDestination(document.Pages[0]);
bookmark.Color = Color.Green;
bookmark.TextStyle = PdfTextStyle.Bold;
bookmark.Title = "Changed title";

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Get the bookmark collection
PdfBookmarkBase bookmarks = document.Bookmarks;
// Get the first bookmark and modify its properties
PdfLoadedBookmark bookmark = bookmarks[0] as PdfLoadedBookmark;
bookmark.Destination = new PdfDestination(document.Pages[0]);
bookmark.Color = Color.Green;
bookmark.TextStyle = PdfTextStyle.Bold;
bookmark.Title = "Changed title";

// Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load the PDF document
Dim document As New PdfLoadedDocument("Input.pdf")
' Get the bookmark collection
Dim bookmarks As PdfBookmarkBase = document.Bookmarks
' Get the first bookmark and modify its properties
Dim bookmark As PdfLoadedBookmark = TryCast(bookmarks(0), PdfLoadedBookmark)
bookmark.Destination = New PdfDestination(document.Pages(0))
bookmark.Color = Color.Green
bookmark.TextStyle = PdfTextStyle.Bold
bookmark.Title = "Changed title"

' Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Bookmarks/Modify-the-bookmarks-in-an-existing-PDF-document/).

## Getting the bookmark page index from an existing PDF document

You can get the page index of a bookmark from an existing PDF document using the [PageIndex](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfDestination.html#Syncfusion_Pdf_Interactive_PdfDestination_PageIndex) property of the [PdfDestination](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfDestination.html) class, as shown in the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Bookmarks/Get-bookmark-page-index-from-the-existing-PDF-document/.NET/Get-bookmark-page-index-from-the-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Get the bookmark collection
PdfBookmarkBase bookmarks = loadedDocument.Bookmarks;
// Get the page index of the first bookmark
int index = bookmarks[0].Destination.PageIndex;

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Get the bookmark collection
PdfBookmarkBase bookmarks = loadedDocument.Bookmarks;
// Get the page index of the first bookmark
int index = bookmarks[0].Destination.PageIndex;

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load the PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
' Get the bookmark collection
Dim bookmarks As PdfBookmarkBase = loadedDocument.Bookmarks
' Get the page index of the first bookmark
Dim index As Integer = bookmarks(0).Destination.PageIndex

' Save and close the document
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Bookmarks/Get-bookmark-page-index-from-the-existing-PDF-document/). 