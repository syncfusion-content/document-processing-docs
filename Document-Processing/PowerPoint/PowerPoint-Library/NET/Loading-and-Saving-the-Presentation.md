---
title: Load and Save the PowerPoint Presentation | Syncfusion
description: Learn here all about loading, saving, and modifying the presentation using the PowerPoint library and more.
platform: document-processing
control: Presentation
documentation: UG
---
# Load and Save the PowerPoint Presentation

## Prerequisites

Before you start, ensure the required Syncfusion assemblies or NuGet packages are installed. For more information, see [Assemblies-Required](Assemblies-Required.md) and [NuGet-Packages-Required](NuGet-Packages-Required.md).


## Opening an existing presentation from the file system

You can open an existing PowerPoint presentation by using the file name and its physical path.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint/.NET/Open-and-save-PowerPoint/Program.cs" %}
//Opens an existing PowerPoint presentation from the file system
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing presentation from the file system 
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing presentation from the file system 
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint).

## Opening an existing presentation from a stream

You can open an existing PowerPoint presentation from a stream by using the overloads of the [Open](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.Presentation.html#Syncfusion_Presentation_Presentation_Open_System_IO_Stream_) method. Always dispose the stream after opening to release the file handle.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint/.NET/Open-and-save-PowerPoint/Program.cs" %}
FileStream inputStream = new FileStream(inputFileName, FileMode.Open)
//Opens an existing PowerPoint presentation from a stream
IPresentation pptxDoc = Presentation.Open(inputStream);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
FileStream inputStream = new FileStream(inputFileName, FileMode.Open)
//Opens an existing presentation from a stream 
IPresentation pptxDoc = Presentation.Open(presentationStream);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim inputStream As New FileStream(inputFileName, FileMode.Open)
'Opens an existing presentation from a stream 
Dim pptxDoc As IPresentation = Presentation.Open(presentationStream)
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint).

## Opening an encrypted presentation

You can open an encrypted PowerPoint presentation from either a file path or a stream by using the following overloads of the [Open](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.Presentation.html#Syncfusion_Presentation_Presentation_Open_System_IO_Stream_System_String_) method.


### Opening from a stream

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
FileStream presentationStream = new FileStream(inputFileName, FileMode.Open)
//Opens an existing encrypted presentation from a stream
IPresentation pptxDoc = Presentation.Open(presentationStream, password);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
FileStream presentationStream = new FileStream(inputFileName, FileMode.Open)
//Opens an existing encrypted presentation from a stream
IPresentation pptxDoc = Presentation.Open(presentationStream, password);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim inputStream As New FileStream(inputFileName, FileMode.Open)
'Opens an existing encrypted presentation from a stream
Dim pptxDoc As IPresentation = Presentation.Open(presentationStream, password)
{% endhighlight %}

{% endtabs %}

### Opening from the file system

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Opens an existing encrypted presentation from the file system
IPresentation pptxDoc = Presentation.Open(fileName, password);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing encrypted presentation from the file system
IPresentation pptxDoc = Presentation.Open(fileName, password);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing encrypted presentation from the file system
Dim pptxDoc As IPresentation = Presentation.Open(fileName, password)
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-encrypted-PowerPoint).

## Saving a PowerPoint presentation to the file system

You can save the created or manipulated PowerPoint presentation to the file system by using the [Save()](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IPresentation.html#Syncfusion_Presentation_IPresentation_Save_System_String_) method of the [IPresentation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IPresentation.html) interface. The default format type is `.pptx`. To save in a different format, pass a `FormatType` value (for example, `FormatType.Ppt` or `FormatType.Pdf`).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint/.NET/Open-and-save-PowerPoint/Program.cs" %}
//Opens an existing PowerPoint presentation
IPresentation pptxDoc = Presentation.Open(fileName);
//To-Do some manipulation
//Saves the presentation to the file system
pptxDoc.Save("Output.pptx");
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing PowerPoint presentation
IPresentation pptxDoc = Presentation.Open(fileName);
//To-Do some manipulation
//Saves the presentation to the file system
pptxDoc.Save("Output.pptx");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing PowerPoint presentation
Dim pptxDoc As IPresentation = Presentation.Open(fileName)
'To-Do some manipulation
'Saves the presentation to the file system
pptxDoc.Save("Output.pptx")
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint).

## Saving a PowerPoint presentation to a stream

You can save the created or manipulated PowerPoint presentation to a stream by using the overloads of the [Save](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IPresentation.html#Syncfusion_Presentation_IPresentation_Save_System_IO_Stream_) method.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint/.NET/Open-and-save-PowerPoint/Program.cs" %}
//Opens an existing PowerPoint presentation
IPresentation pptxDoc = Presentation.Open(inputFileName);
//To-Do some manipulation
MemoryStream stream = new MemoryStream();
pptxDoc.Save(stream);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing PowerPoint presentation
IPresentation pptxDoc = Presentation.Open(fileName);
//To-Do some manipulation
//Creates an instance of memory stream
MemoryStream stream = new MemoryStream();
//Saves the presentation to a stream
pptxDoc.Save(stream);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing PowerPoint presentation
Dim pptxDoc As IPresentation = Presentation.Open(fileName)
'To-Do some manipulation
'Creates an instance of memory stream
Dim stream As New MemoryStream()
'Saves the presentation to a stream
pptxDoc.Save(stream)
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint).

## Sending to a client browser

You can save and send the presentation to a client browser from a website or web application by invoking the overload of the [Save](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IPresentation.html#Syncfusion_Presentation_IPresentation_Save_System_String_Syncfusion_Presentation_FormatType_System_Web_HttpResponse_) method. This method explicitly makes use of an instance of `HttpResponse` as its parameter in order to stream the presentation to the client browser. So, this overload is suitable for a web application that references the [System.Web](https://docs.microsoft.com/en-us/previous-versions/gg145018(v=vs.110)) assembly.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Opens an existing PowerPoint presentation
IPresentation pptxDoc = Presentation.Open(inputFileName);
//To-Do some manipulation
//Saves the PowerPoint presentation to a memory stream
using (MemoryStream outputStream = new MemoryStream())
{
    pptxDoc.Save(outputStream);
    outputStream.Position = 0;
    //Set the response content type and return the file
    string contentType = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    return File(outputStream, contentType, outputFileName);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing PowerPoint presentation
IPresentation pptxDoc = Presentation.Open(fileName);
//To-Do some manipulation
//Saves the presentation to the client browser
pptxDoc.Save("Output.pptx", FormatType.Pptx, Response);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing PowerPoint presentation
Dim pptxDoc As IPresentation = Presentation.Open(fileName)
'To-Do some manipulation
'Saves the presentation to the client browser
pptxDoc.Save("Output.pptx", FormatType.Pptx, Response)
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Send-PowerPoint-to-client-browser).

## Closing a PowerPoint presentation

When you are done with the `Presentation` instance, you should close the instance of [IPresentation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IPresentation.html) in order to release the memory consumed by the Syncfusion PowerPoint library. The following code example illustrates how to close an [IPresentation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IPresentation.html) instance.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint/.NET/Open-and-save-PowerPoint/Program.cs" %}
//Opens an existing PowerPoint presentation
IPresentation pptxDoc = Presentation.Open(inputFileName);
//To-Do some manipulation
//Saves the PowerPoint presentation to the file system
pptxDoc.Save(OutputFileName);
//Closes the instance of the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing presentation from the file system
IPresentation pptxDoc = Presentation.Open(fileName);
//To-Do some manipulation
//Creates an instance of memory stream
MemoryStream stream = new MemoryStream();
//Saves the presentation to a stream
pptxDoc.Save(stream);
//Closes the presentation instance and frees the memory consumed
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing presentation from the file system
Dim pptxDoc As IPresentation = Presentation.Open(fileName)
'To-Do some manipulation
'Creates an instance of memory stream
Dim stream As New MemoryStream()
'Saves the presentation to a stream
pptxDoc.Save(stream)
'Closes the presentation instance and frees the memory consumed
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint).

## See also

- [Getting-Started](Getting-Started)
- [Document-Object-Model](Document-Object-Model)
- [Assemblies-Required](Assemblies-Required)
- [NuGet-Packages-Required](NuGet-Packages-Required)
- [Create-PowerPoint-Presentation-in-ASP-NET-Core](Create-PowerPoint-Presentation-in-ASP-NET-Core-WEB-API)
- [FAQ](FAQ)
