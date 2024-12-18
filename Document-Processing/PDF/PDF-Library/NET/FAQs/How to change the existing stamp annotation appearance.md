---
title: How to change the existing stamp annotation appearance | Syncfusion 
description: This section explains how to change a stamp annotation's appearance by updating its text, replacing images, and modifying size, position, or opacity
platform: document-processing
control: PDF
documentation: UG
---

# How to change the existing stamp annotation appearance

[PdfLoadedRubberStampAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedRubberStampAnnotation.html) allows you to load and modify an existing rubber stamp annotation in a PDF document.

You can be implemented by setting the visibility of the existing rubber stamp annotation to 'invisible' and adding a new custom rubber stamp annotation at the same position. This method allows you to effectively customize the appearance of the annotation.

The following code example explain this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Load the existing PDF document
FileStream fileStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument ldoc = new PdfLoadedDocument(fileStream);

// Load the custom image for the rubber stamp
FileStream paraphImage = new FileStream("image.jpg", FileMode.Open, FileAccess.Read);
PdfBitmap paraphBitmap = new PdfBitmap(paraphImage);

// Loop through each page in the document
for (int i = 0; i < ldoc.Pages.Count; i++)
{
PdfLoadedPage lpage = ldoc.Pages[i] as PdfLoadedPage;
PdfLoadedAnnotationCollection annotations = ldoc.Pages[i].Annotations;

// Iterate through annotations in the page
foreach (PdfLoadedAnnotation annotation in annotations)
{
if (annotation is PdfLoadedRubberStampAnnotation rubberStamp)
{
// Get the annotation bounds
RectangleF rectangleF = rubberStamp.Bounds;

// Make the existing annotation invisible and remove it
rubberStamp.AnnotationFlags = PdfAnnotationFlags.Invisible;
annotations.Remove(rubberStamp);

// Create a new rubber stamp annotation at the same location
PdfRubberStampAnnotation rubberStampAnnotation = new PdfRubberStampAnnotation(rectangleF, "Text Rubber Stamp Annotation");
rubberStampAnnotation.Icon = PdfRubberStampAnnotationIcon.Draft;
rubberStampAnnotation.Text = "Text Properties Rubber Stamp Annotation";

// Add custom graphics (image) to the annotation
rubberStampAnnotation.Appearance.Normal.Graphics.DrawImage(paraphBitmap, 0, 0, rubberStampAnnotation.Bounds.Width, rubberStampAnnotation.Bounds.Height);

// Add the new annotation to the page
lpage.Annotations.Add(rubberStampAnnotation);
break;
}
}
}

// Save the updated PDF document
MemoryStream ms2 = new MemoryStream();
ldoc.Save(ms2);
// Close the document
ldoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load the existing PDF document
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");

// Load the custom image for the rubber stamp
FileStream paraphImage = new FileStream("image.jpg", FileMode.Open, FileAccess.Read);
PdfBitmap paraphBitmap = new PdfBitmap(paraphImage);

// Loop through each page in the document
for (int i = 0; i < ldoc.Pages.Count; i++)
{
PdfLoadedPage lpage = ldoc.Pages[i] as PdfLoadedPage;
PdfLoadedAnnotationCollection annotations = ldoc.Pages[i].Annotations;

// Iterate through annotations in the page
foreach (PdfLoadedAnnotation annotation in annotations)
{
if (annotation is PdfLoadedRubberStampAnnotation rubberStamp)
{
// Get the annotation bounds
RectangleF rectangleF = rubberStamp.Bounds;

// Make the existing annotation invisible and remove it
rubberStamp.AnnotationFlags = PdfAnnotationFlags.Invisible;
annotations.Remove(rubberStamp);

// Create a new rubber stamp annotation at the same location
PdfRubberStampAnnotation rubberStampAnnotation = new PdfRubberStampAnnotation(rectangleF, "Text Rubber Stamp Annotation");
rubberStampAnnotation.Icon = PdfRubberStampAnnotationIcon.Draft;
rubberStampAnnotation.Text = "Text Properties Rubber Stamp Annotation";

// Add custom graphics (image) to the annotation
rubberStampAnnotation.Appearance.Normal.Graphics.DrawImage(paraphBitmap, 0, 0, rubberStampAnnotation.Bounds.Width, rubberStampAnnotation.Bounds.Height);

// Add the new annotation to the page
lpage.Annotations.Add(rubberStampAnnotation);
break;
}
}
}
// Save the PDF document
ldoc.Save("RubberStampAnnotation.pdf");
// Close the document
ldoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim fileStream As New FileStream("Input.pdf", FileMode.Open, FileAccess.Read)
Dim ldoc As New PdfLoadedDocument(fileStream)

Dim paraphImage As New FileStream("image.jpg", FileMode.Open, FileAccess.Read)
Dim paraphBitmap As New PdfBitmap(paraphImage)

For i As Integer = 0 To ldoc.Pages.Count - 1
Dim lpage As PdfLoadedPage = CType(ldoc.Pages(i), PdfLoadedPage)
Dim annotations As PdfLoadedAnnotationCollection = ldoc.Pages(i).Annotations

' Iterate the annotations in the page
For Each annotation As PdfLoadedAnnotation In annotations
If TypeOf annotation Is PdfLoadedRubberStampAnnotation Then
Dim rubberStamp As PdfLoadedRubberStampAnnotation = CType(annotation, PdfLoadedRubberStampAnnotation)Dim rectangleF As RectangleF = rubberStamp.Bounds
rubberStamp.AnnotationFlags = PdfAnnotationFlags.Invisible
annotations.Remove(rubberStamp)
Dim rubberStampAnnotation As New PdfRubberStampAnnotation(rectangleF, "Text Rubber Stamp Annotation")
rubberStampAnnotation.Icon = PdfRubberStampAnnotationIcon.Draft
rubberStampAnnotation.Text = "Text Properties Rubber Stamp Annotation"
rubberStampAnnotation.Appearance.Normal.Graphics.DrawImage(paraphBitmap, 0, 0, rubberStampAnnotation.Bounds.Width, rubberStampAnnotation.Bounds.Height)

' Adds annotation to the page
lpage.Annotations.Add(rubberStampAnnotation)
Exit For
End If               
Next
Next
Dim ms2 As New MemoryStream()
ldoc.Save(ms2)
ldoc.Close(True)

{% endhighlight %}

{% endtabs %}