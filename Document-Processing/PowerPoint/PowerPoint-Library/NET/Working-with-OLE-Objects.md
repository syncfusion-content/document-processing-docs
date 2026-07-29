---
title: Create and edit OLE Objects in PowerPoint files | Syncfusion
description: Create and edit OLE Objects in PowerPoint files; Insert and extract an embedded OLE object in PowerPoint Presentation
platform: document-processing
control: Presentation
documentation: UG
keywords: OLE Object in PowerPoint presentation
---
# Working with OLE Objects

The OLE Object enables sharing of application objects written in different file formats. In a PowerPoint presentation, the application data can be inserted into a PowerPoint slide using the [programmatic identifier](https://msdn.microsoft.com/en-us/library/aa171170(v=office.11).aspx#) of each file format.

## Prerequisites

Before using OLE objects in your project, ensure the following:

- Install the required Syncfusion assemblies. Refer to the [Assemblies-Required](Assemblies-Required.md) and [NuGet-Packages-Required](NuGet-Packages-Required.md) pages for details.
- Keep the input files (such as `OleTemplate.xlsx`, `OleTemplate.docx`, and `OlePicture.png`) in the application's working directory. You can download them from the [GitHub sample](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/OLE-objects).
- For the extraction and link-path examples, the input presentation must already contain an embedded or linked OLE object.

## Supported File Types and ProgIDs

| Source file | ProgID |
|-------------|--------|
| Excel workbook (.xlsx) | `Excel.Sheet.12` |
| Word document (.docx) | `Word.Document.12` |
| PowerPoint presentation (.pptx) | `PowerPoint.Show.12` |
| PDF document (.pdf) | `AcroExch.Document.DC` |

## Inserting an OLE Object into a Slide

The following code example demonstrates how to add an Excel worksheet into a slide. Use the **C# [Cross-platform]** tab when targeting .NET on Windows, Linux, or macOS; use the **Windows-specific** tabs when using .NET Framework on Windows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/OLE-objects/Add-Excel-in-PowerPoint-slide/.NET/Add-Excel-in-PowerPoint-slide/Program.cs" %}
//Create a new instance of the PowerPoint presentation.
IPresentation pptxDoc = Presentation.Create();
//Add a slide with a blank layout to the presentation.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Add an OLE object to the slide.
//Parameters:
//  imagePath - The path to the image that represents the icon/preview of the OLE object.
//  progId    - The programmatic identifier of the source file (for example, "Excel.Sheet.12").
//  filePath  - The path to the source file that is embedded into the presentation.
IOleObject oleObject = slide.Shapes.AddOleObject("OlePicture.png", "Excel.Sheet.12", "OleTemplate.xlsx");
//Set the size and position of the OLE object.
oleObject.Left = 10;
oleObject.Top = 10;
oleObject.Width = 400;
oleObject.Height = 300;
//Save the PowerPoint presentation to a file.
pptxDoc.Save("OleObjectSample.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a new instance of the PowerPoint presentation.
IPresentation pptxDoc = Presentation.Create();
//Add a slide with a blank layout to the presentation.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Open the Excel file as a stream.
Stream excelStream = File.Open("OleTemplate.xlsx", FileMode.Open);
//Image to be displayed. This can be any image.
Stream imageStream = File.Open("OlePicture.png", FileMode.Open);
//Add an OLE object to the slide.
IOleObject oleObject = slide.Shapes.AddOleObject(imageStream, "Excel.Sheet.12", excelStream);
//Set the size and position of the OLE object.
oleObject.Left = 10;
oleObject.Top = 10;
oleObject.Width = 400;
oleObject.Height = 300;
//Save the presentation.
pptxDoc.Save("OleObjectSample.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a new instance of the PowerPoint presentation.
Dim pptxDoc As IPresentation = Presentation.Create()
'Add a slide with a blank layout to the presentation.
Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Open the Excel file as a stream.
Dim excelStream As Stream = File.Open("OleTemplate.xlsx", FileMode.Open)
'Image to be displayed. This can be any image.
Dim imageStream As Stream = File.Open("OlePicture.png", FileMode.Open)
'Add an OLE object to the slide.
Dim oleObject As IOleObject = slide.Shapes.AddOleObject(imageStream, "Excel.Sheet.12", excelStream)
'Set the size and position of the OLE object.
oleObject.Left = 10
oleObject.Top = 10
oleObject.Width = 400
oleObject.Height = 300
'Save the presentation.
pptxDoc.Save("OleObjectSample.pptx")
'Close the presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/OLE-objects/Add-Excel-in-PowerPoint-slide).

### `AddOleObject` Overloads

| Overload | Description |
|----------|-------------|
| [`AddOleObject(Stream imageStream, string progId, Stream oleData)`](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IShapes.html#Syncfusion_Presentation_IShapes_AddOleObject_System_IO_Stream_System_String_System_IO_Stream_) |Creates an IOleObject instance with the specified image, program id, and data, then adds it to the IShapes collection. |
| [`AddOleObject(string imagePath, string progId, string pathLink)`[(https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IShapes.html#Syncfusion_Presentation_IShapes_AddOleObject_System_IO_Stream_System_String_System_String_) | Creates an IOleObject instance with the specified image, program id, and data, then adds it to the IShapes collection.|

## Inserting an OLE Object into a Slide with the DisplayAsIcon Property

The following code example demonstrates how to add a Microsoft Word document into a slide with the `DisplayAsIcon` property enabled. When `DisplayAsIcon` is `true`, the OLE object is rendered as an icon, and the embedded document opens in its default application when the icon is double-clicked.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/OLE-objects/Add-Microsoft-Word-document-in-slide/.NET/Add-Microsoft-Word-document-in-slide/Program.cs" %}
//Create a new instance of the PowerPoint presentation.
IPresentation pptxDoc = Presentation.Create();
//Add a slide with a blank layout to the presentation.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Get the Word document file as stream
FileStream wordDocumentStream = new FileStream("OleTemplate.docx", FileMode.Open);
//Image to be displayed, This can be any image
FileStream imageStream = new FileStream("OlePicture.png", FileMode.Open);
//Add an OLE object to the slide
IOleObject oleObject = slide.Shapes.AddOleObject(imageStream, "Word.Document.12", wordDocumentStream);
//Set size and position of the OLE object
oleObject.Left = 10;
oleObject.Top = 10;
oleObject.Width = 400;
oleObject.Height = 300;
//Set DisplayAsIcon to true so the embedded document opens in its default application.
oleObject.DisplayAsIcon = true;
//Save the PowerPoint presentation to a file.
pptxDoc.Save("OleObjectSample.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a new instance of the PowerPoint presentation.
IPresentation pptxDoc = Presentation.Create();
//Add a slide with a blank layout to the presentation.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Open the Word document as a stream.
Stream wordDocumentStream = File.Open("OleTemplate.docx", FileMode.Open);
//Image to be displayed. This can be any image.
Stream imageStream = File.Open("OlePicture.png", FileMode.Open);
//Add an OLE object to the slide.
IOleObject oleObject = slide.Shapes.AddOleObject(imageStream, "Word.Document.12", wordDocumentStream);
//Set the size and position of the OLE object.
oleObject.Left = 10;
oleObject.Top = 10;
oleObject.Width = 400;
oleObject.Height = 300;
//Set DisplayAsIcon to true so the embedded document opens in its default application.
oleObject.DisplayAsIcon = true;
//Save the presentation.
pptxDoc.Save("OleObjectSample.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a new instance of the PowerPoint presentation.
Dim pptxDoc As IPresentation = Presentation.Create()
'Add a slide with a blank layout to the presentation.
Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Open the Word document as a stream.
Dim wordDocumentStream As Stream = File.Open("OleTemplate.docx", FileMode.Open)
'Image to be displayed. This can be any image.
Dim imageStream As Stream = File.Open("OlePicture.png", FileMode.Open)
'Add an OLE object to the slide.
Dim oleObject As IOleObject = slide.Shapes.AddOleObject(imageStream, "Word.Document.12", wordDocumentStream)
'Set the size and position of the OLE object.
oleObject.Left = 10
oleObject.Top = 10
oleObject.Width = 400
oleObject.Height = 300
'Set DisplayAsIcon to true so the embedded document opens in its default application.
oleObject.DisplayAsIcon = True
'Save the presentation.
pptxDoc.Save("OleObjectSample.pptx")
'Close the presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/OLE-objects/Add-Microsoft-Word-document-in-slide).

## Extracting Embedded OLE Object Data

The following code example demonstrates how to extract the embedded OLE Object data.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/OLE-objects/Extract-embedded-OLE-Object-data/.NET/Extract-embedded-OLE-Object-data/Program.cs" %}
//Open the specified PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("EmbeddedOleObject.pptx");
//Get the first slide of the presentation.
ISlide slide = pptxDoc.Slides[0];
//Get the OLE object from the slide. The shape index 2 is used in this sample.
IOleObject oleObject = slide.Shapes[2] as IOleObject;
//Get the file data of the embedded OLE object.
byte[] array = oleObject.ObjectData;
//Get the file name of the OLE object.
string outputFile = oleObject.FileName;
//Save the extracted OLE data to the file system.
MemoryStream memoryStream = new MemoryStream(array);
FileStream fileStream = File.Create(outputFile);
memoryStream.CopyTo(fileStream);
memoryStream.Dispose();
fileStream.Dispose();
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open the specified PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("EmbeddedOleObject.pptx");
//Get the first slide of the presentation.
ISlide slide = pptxDoc.Slides[0];
//Get the OLE object from the slide. The shape index 2 is used in this sample.
IOleObject oleObject = slide.Shapes[2] as IOleObject;
//Get the file data of the embedded OLE object.
byte[] array = oleObject.ObjectData;
//Get the file name of the OLE object.
string outputFile = oleObject.FileName;
//Save the extracted OLE data to the file system.
MemoryStream memoryStream = new MemoryStream(array);
FileStream fileStream = File.Create(outputFile);
memoryStream.CopyTo(fileStream);
memoryStream.Dispose();
fileStream.Dispose();
//Close the presentation
pptxDoc.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open the specified PowerPoint presentation.
Dim pptxDoc As IPresentation = Presentation.Open("EmbeddedOleObject.pptx")
'Get the first slide of the presentation.
Dim slide As ISlide = pptxDoc.Slides(0)
'Get the OLE object from the slide. The shape index 2 is used in this sample.
Dim oleObject As IOleObject = CType(slide.Shapes(2), IOleObject)
'Get the file data of the embedded OLE object.
Dim array() As Byte = oleObject.ObjectData
'Get the file name of the OLE object.
Dim outputFile As String = oleObject.FileName
'Save the extracted OLE data to the file system.
Dim memoryStream As MemoryStream = New MemoryStream(array)
Dim fileStream As FileStream = File.Create(outputFile)
memoryStream.CopyTo(fileStream)
memoryStream.Dispose
fileStream.Dispose
'Close the presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/OLE-objects/Extract-embedded-OLE-Object-data).

## Getting the File Path of a Linked OLE Object

The following code example demonstrates how to get the file path of a linked OLE Object.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/OLE-objects/Get-file-path-of-linked-OLE-Object/.NET/Get-file-path-of-linked-OLE-Object/Program.cs" %}
//Open the specified PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("EmbeddedOleObject.pptx");
//Get the first slide of the presentation.
ISlide slide = pptxDoc.Slides[0];
//Get the OLE object from the slide. The shape index 1 is used in this sample.
IOleObject oleObject = slide.Shapes[1] as IOleObject;
//Get the path of the linked OLE object.
string linkOlePath = oleObject.LinkPath;
//Save the PowerPoint Presentation as stream
pptxDoc.Save("OleObjectSample.pptx");
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open the specified PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("EmbeddedOleObject.pptx");
//Get the first slide of the presentation.
ISlide slide = pptxDoc.Slides[0];
//Get the OLE object from the slide. The shape index 1 is used in this sample.
IOleObject oleObject = slide.Shapes[1] as IOleObject;

//Get the path of the linked OLE object.
string linkOlePath = oleObject.LinkPath;
//Save the presentation
pptxDoc.Save("OleObjectSample.pptx");
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open the specified PowerPoint presentation.
Dim pptxDoc As IPresentation = Presentation.Open("EmbeddedOleObject.pptx")
'Get the first slide of the presentation.
Dim slide As ISlide = pptxDoc.Slides(0)
'Get the OLE object from the slide. The shape index 1 is used in this sample.
Dim oleObject As IOleObject = CType(slide.Shapes(1), IOleObject)
'Get the path of the linked OLE object.
Dim linkOlePath As String = oleObject.LinkPath
'Save the presentation
pptxDoc.Save("OleObjectSample.pptx")
'Close the presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/OLE-objects/Get-file-path-of-linked-OLE-Object).

## Getting the OLE Image Data

The following code example demonstrates how to get the OLE image data.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/OLE-objects/Get-OLE-image-data/.NET/Get-OLE-image-data/Program.cs" %}
//Open the specified PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("EmbeddedOleObject.pptx");
//Get the first slide of the presentation.
ISlide slide = pptxDoc.Slides[0];
//Get the OLE object from the slide. The shape index 1 is used in this sample.
IOleObject oleObject = slide.Shapes[1] as IOleObject;
//Get the data of the OLE image.
byte[] array = oleObject.ImageData;
//Save the extracted OLE data to the file system as an EMF image.
MemoryStream memoryStream = new MemoryStream(array);
FileStream fileStream = File.Create("OleImage.emf");
memoryStream.CopyTo(fileStream);
memoryStream.Dispose();
fileStream.Dispose();
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open the specified PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("EmbeddedOleObject.pptx");
//Get the first slide of the presentation.
ISlide slide = pptxDoc.Slides[0];
//Get the OLE object from the slide. The shape index 1 is used in this sample.
IOleObject oleObject = slide.Shapes[1] as IOleObject;
//Get the data of the OLE image.
byte[] array = oleObject.ImageData;
//Save the extracted OLE data to the file system as an EMF image.
MemoryStream memoryStream = new MemoryStream(array);
//Extracted ole data saved as image
FileStream fileStream = File.Create("OleImage.emf");
memoryStream.CopyTo(fileStream);
memoryStream.Dispose();
fileStream.Dispose();
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open the specified PowerPoint presentation.
Dim pptxDoc As IPresentation = Presentation.Open("EmbeddedOleObject.pptx")
'Get the first slide of the presentation.
Dim slide As ISlide = pptxDoc.Slides(0)
'Get the OLE object from the slide. The shape index 1 is used in this sample.
Dim oleObject As IOleObject = CType(slide.Shapes(1), IOleObject)
'Gets the data of Ole Image
Dim array() As Byte = oleObject.ImageData
'Save the extracted Ole data into file system
Dim memoryStream As MemoryStream = New MemoryStream(array)
'Extracted ole data saved as image
Dim fileStream As FileStream = File.Create("OleImage.emf")
memoryStream.CopyTo(fileStream)
memoryStream.Dispose()
fileStream.Dispose()
'Close the presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/OLE-objects/Get-OLE-image-data).

## Online Demo

* Explore how to insert and extract an OLE object in a PowerPoint presentation using the [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) (Presentation) in a live demo [here](https://document.syncfusion.com/demos/powerpoint/oleobject#/tailwind).

## See Also
* [How to replace all OLE objects with text in PowerPoint using C#?](https://support.syncfusion.com/kb/article/15653/how-to-replace-all-ole-objects-with-text-in-powerpoint-using-c)
