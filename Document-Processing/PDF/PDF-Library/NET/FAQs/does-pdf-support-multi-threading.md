---
title: PDF support for multi threading | Syncfusion
description: This page explains whether the Syncfusion .NET PDF library provides support for multi threading.
platform: document-processing
control: PDF
documentation: UG
---

# Does PDF library support multithreading and thread-safe?

Yes, Essential PDF allows you to create or modify PDF documents simultaneously in multi-threading environment using [EnableThreadSafe](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_EnableThreadSafe) property of [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class.

The following code sample illustrates how to create a PDF document in multi-threading environment.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
IEnumerable<int> works = Enumerable.Range(0, 100);

Parallel.ForEach(works, index => GeneratePDF(index));

private void GeneratePDF(int index)
{
//Enable the thread safe in PDF document.
PdfDocument.EnableThreadSafe = true;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
string name = Guid.NewGuid().ToString();

//Save the document.
document.Save(name+".pdf");
//Close the document.
document.Close(true);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
IEnumerable<int> works = Enumerable.Range(0, 100);

Parallel.ForEach(works, index => GeneratePDF(index));

private void GeneratePDF(int index)
{
//Enable the thread safe in PDF document.
PdfDocument.EnableThreadSafe = true;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
string name = Guid.NewGuid().ToString();

//Save the document.
document.Save(name+".pdf");
//Close the document.
document.Close(true);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim works As IEnumerable(Of Integer) = Enumerable.Range(0, 100)
Parallel.ForEach(works, Sub(index) GeneratePDF(index))
Private Sub GeneratePDF(ByVal index As Integer)
'Enable the thread safe in PDF document.
PdfDocument.EnableThreadSafe = True

'Create a new PDF document.
Dim document As PdfDocument = New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = document.Pages.Add()

'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the standard font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 20)
'Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))
Dim name As String = Guid.NewGuid().ToString()

'Save the document.
document.Save(name + ".pdf")
'Close the document.
document.Close(True)

End Sub
{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Create-a-PDF-in-multi-threading-environment).

To modify the existing PDF document in multi-threading environment [EnableThreadSafe](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_EnableThreadSafe) property to an existing PDF document using [PDFLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. The following code example explain this.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
IEnumerable<int> works = Enumerable.Range(0, 100);
Parallel.ForEach(works, index => GeneratePDF(index));

private void GeneratePDF(int index)
{
//Enable the thread safe in PDF document.
PdfDocument.EnableThreadSafe = true;
//Load a PDF document.
PdfLoadedDocument doc = new PdfLoadedDocument("input.pdf");
//Get first page from document
PdfLoadedPage page = doc.Pages[0] as PdfLoadedPage;

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
string name = Guid.NewGuid().ToString();

//Save the document.
doc.Save(name+".pdf");
//Close the document.
doc.Close(true);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
IEnumerable<int> works = Enumerable.Range(0, 100);
Parallel.ForEach(works, index => GeneratePDF(index));

private void GeneratePDF(int index)
{
//Enable the thread safe in PDF document.
PdfDocument.EnableThreadSafe = true;
//Load a PDF document.
PdfLoadedDocument doc = new PdfLoadedDocument("input.pdf");
//Get first page from document
PdfLoadedPage page = doc.Pages[0] as PdfLoadedPage;

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
string name = Guid.NewGuid().ToString();

//Save the document.
doc.Save(name+".pdf");
//Close the document.
doc.Close(true);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim works As IEnumerable(Of Integer) = Enumerable.Range(0, 100)
Parallel.ForEach(works, Sub(index) GeneratePDF(index))
Private Sub GeneratePDF(ByVal index As Integer)
'Enable the thread safe in PDF document.
PdfDocument.EnableThreadSafe = True

'Load a PDF document.
Dim doc As PdfLoadedDocument = New PdfLoadedDocument("input.pdf")
'Get first page from document.
Dim page As PdfLoadedPage = doc.Pages(0)

'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the standard font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 20)
'Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))
Dim name As String = Guid.NewGuid().ToString()

'Save the document.
doc.Save(name + ".pdf")
'Close the document.
doc.Close(True)

End Sub
{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Modify-existing-PDF-in-multi-threading/).