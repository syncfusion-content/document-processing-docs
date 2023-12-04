---
title: Loading and saving the PowerPoint Presentation | Syncfusion
description: Learn here all about loading, saving,and modifying the Presentation of Syncfusion PowerPoint Library and more.
platform: file-formats
control: Presentation
documentation: UG
---
# Load and save the Presentation

## Opening an existing Presentation from file system

You can open an existing PowerPoint Presentation by using the file name and its physical path.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream("Sample.pptx", FileMode.Open);
//Loads or open an PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open(inputStream)
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing Presentation from file system 
IPresentation pptxDoc = Presentation.Open(fileName);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing Presentation from file system 
Dim pptxDoc As IPresentation = Presentation.Open(fileName)
{% endhighlight %}

{% highlight c# tabtitle="Xamarin" %}
//"App" is the class of Portable project
Assembly assembly = typeof(App).GetTypeInfo().Assembly;
Stream inputStream = assembly.GetManifestResourceStream("Sample.pptx");
//Loads or open an existing PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open(inputStream);
{% endhighlight %}

{% highlight c# tabtitle="UWP" %}
//Instantiates the File Picker
FileOpenPicker openPicker = new FileOpenPicker();
openPicker.SuggestedStartLocation = PickerLocationId.Desktop;
openPicker.FileTypeFilter.Add(".pptx");
//Creates a storage file from FileOpenPicker
StorageFile inputStorageFile = await openPicker.PickSingleFileAsync();
//Loads or open an PowerPoint Presentation
IPresentation pptxDoc = await Presentation.OpenAsync(inputStorageFile);
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint).

## Opening an existing Presentation from stream

You can open an existing PowerPoint Presentation from stream by using the overloads of [Open](https://help.syncfusion.com/cr/file-formats/Syncfusion.Presentation.Presentation.html#Syncfusion_Presentation_Presentation_Open_System_IO_Stream_) method.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName, FileMode.Open);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing Presentation from stream 
IPresentation pptxDoc = Presentation.Open(presentationStream);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing Presentation from stream 
Dim pptxDoc As IPresentation = Presentation.Open(presentationStream)
{% endhighlight %}

{% highlight c# tabtitle="Xamarin" %}
//Create new Presentation without slides.
Assembly assembly = typeof(App).GetTypeInfo().Assembly;
Stream inputStream = assembly.GetManifestResourceStream(inputFilePath);
//Loads or open an PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open(inputStream);
{% endhighlight %}

{% highlight c# tabtitle="UWP" %}
//Create new Presentation without slides.
Assembly assembly = typeof(App).GetTypeInfo().Assembly;
Stream inputStream = assembly.GetManifestResourceStream(inputFilePath);
//Loads or open an PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open(inputStream);
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint).

## Opening an encrypted Presentation

You can open an encrypted PowerPoint presentation from either file path or stream by using the following overloads of [Open](https://help.syncfusion.com/cr/file-formats/Syncfusion.Presentation.Presentation.html#Syncfusion_Presentation_Presentation_Open_System_IO_Stream_System_String_) method as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Essential Presentation Library does not provides support to Encryption and Decryption in C# [Cross-platform] platforms. 
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing encrypted Presentation from stream 
IPresentation pptxDoc = Presentation.Open(presentationStream, password);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing encrypted Presentation from stream 
Dim pptxDoc As IPresentation = Presentation.Open(presentationStream, password)
{% endhighlight %}

{% highlight c# tabtitle="Xamarin" %}
//Essential Presentation Library does not provides support to Encryption and Decryption in C# [Cross-platform] platforms.
{% endhighlight %}

{% highlight c# tabtitle="UWP" %}
//Opens an existing encrypted Presentation from stream 
IPresentation pptxDoc = Presentation.OpenAsync(presentationStream, password);
{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Essential Presentation Library does not provides support to Encryption and Decryption in C# [Cross-platform] platforms.
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing encrypted Presentation from file system 
IPresentation pptxDoc = Presentation.Open(fileName, password);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing encrypted Presentation from file system 
Dim pptxDoc As IPresentation = Presentation.Open(fileName, password)
{% endhighlight %}

{% highlight c# tabtitle="Xamarin" %}
//Essential Presentation Library does not provides support to Encryption and Decryption in C# [Cross-platform] platforms.
{% endhighlight %}

{% highlight c# tabtitle="UWP" %}
//Opens an existing encrypted Presentation from file system 
IPresentation pptxDoc = Presentation.OpenAsync(fileName, password);
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-encrypted-PowerPoint).

## Saving a PowerPoint Presentation to file system

You can save the created or manipulated PowerPoint Presentation to file system by using [Save()](https://help.syncfusion.com/cr/file-formats/Syncfusion.Presentation.IPresentation.html#Syncfusion_Presentation_IPresentation_Save_System_String_) method of [IPresentation](https://help.syncfusion.com/cr/file-formats/Syncfusion.Presentation.IPresentation.html) interface. Default format type is *.PPTX.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream(fileName, FileMode.Open);
//To-Do some manipulation
FileStream outputStream = new FileStream("output.pptx", FileMode.Create);
pptxDoc.SaveAs(outputStream);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing PowerPoint Presentation 
IPresentation pptxDoc = Presentation.Open(fileName);
//To-Do some manipulation
//Saves the Presentation in file system
pptxDoc.Save("Output.pptx");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing PowerPoint Presentation
Dim pptxDoc As IPresentation = Presentation.Open(fileName)
'To-Do some manipulation
'Saves the Presentation in file system
pptxDoc.Save("Output.pptx")
{% endhighlight %}

{% highlight c# tabtitle="Xamarin" %}
//"App" is the class of Portable project
Assembly assembly = typeof(App).GetTypeInfo().Assembly;
Stream inputStream = assembly.GetManifestResourceStream(inputFilePath);
//Loads or open an PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open(inputStream);
//To-Do some manipulation
//Create new memory stream to save Presentation.
MemoryStream stream = new MemoryStream();
//Save Presentation in stream format.
pptxDoc.Save(stream);
//Close the presentation
pptxDoc.Close();
stream.Position = 0;
//The operation in Save under Xamarin varies between Windows Phone, Android and iOS platforms. Please refer presentation/xamarin section for respective code samples.
if (Device.OS == TargetPlatform.WinPhone || Device.OS == TargetPlatform.Windows)
    Xamarin.Forms.DependencyService.Get<ISaveWindowsPhone>().Save("Output.pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation", stream);
else
    Xamarin.Forms.DependencyService.Get<ISave>().Save("Output.pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation", stream);
{% endhighlight %}

{% highlight c# tabtitle="UWP" %}
//Instantiates the File Picker
FileOpenPicker openPicker = new FileOpenPicker();
openPicker.SuggestedStartLocation = PickerLocationId.Desktop;
openPicker.FileTypeFilter.Add(".pptx");
//Creates a storage file from FileOpenPicker
StorageFile inputStorageFile = await openPicker.PickSingleFileAsync();
//Loads or open an PowerPoint Presentation
IPresentation pptxDoc = await Presentation.OpenAsync(inputStorageFile);
//To-Do some manipulation
//Initializes FileSavePicker
FileSavePicker savePicker = new FileSavePicker();
savePicker.SuggestedStartLocation = PickerLocationId.Desktop;
savePicker.SuggestedFileName = "Sample";
savePicker.FileTypeChoices.Add("PowerPoint Files", new List<string>() { ".pptx" });
//Creates a storage file from FileSavePicker
StorageFile storageFile = await savePicker.PickSaveFileAsync();
//Saves changes to the specified storage file
await pptxDoc.SaveAsync(storageFile);
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint).

## Saving a PowerPoint Presentation to stream

You can save the created or manipulated PowerPoint Presentation to stream by using overloads of [Save](https://help.syncfusion.com/cr/file-formats/Syncfusion.Presentation.IPresentation.html#Syncfusion_Presentation_IPresentation_Save_System_IO_Stream_) method.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName, FileMode.Open);
//To-Do some manipulation
FileStream outputStream = new FileStream(outputFileName, FileMode.Create);
pptxDoc.SaveAs(outputStream);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing PowerPoint Presentation 
IPresentation pptxDoc = Presentation.Open(fileName);
//To-Do some manipulation
//Creates an instance of memory stream
MemoryStream stream = new MemoryStream();
//Saves the Presentation to stream
pptxDoc.Save(stream);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing PowerPoint Presentation 
Dim pptxDoc As IPresentation = Presentation.Open(fileName)
'To-Do some manipulation
'Creates an instance of memory stream
Dim stream As New MemoryStream()
'Saves the Presentation to stream
pptxDoc.Save(stream)
{% endhighlight %}

{% highlight c# tabtitle="Xamarin" %}
//"App" is the class of Portable project
Assembly assembly = typeof(App).GetTypeInfo().Assembly;
Stream inputStream = assembly.GetManifestResourceStream(inputFilePath);
//Loads or open an PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open(inputStream);
//To-Do some manipulation
MemoryStream outputStream = new MemoryStream();
pptxDoc.Save(outputStream);
{% endhighlight %}

{% highlight c# tabtitle="UWP" %}
//Instantiates the File Picker
FileOpenPicker openPicker = new FileOpenPicker();
openPicker.SuggestedStartLocation = PickerLocationId.Desktop;
openPicker.FileTypeFilter.Add(".pptx");
//Creates a storage file from FileOpenPicker
StorageFile inputStorageFile = await openPicker.PickSingleFileAsync();
//Loads or open an PowerPoint Presentation
IPresentation pptxDoc = await Presentation.OpenAsync(inputStorageFile);
//To-Do some manipulation
//Saves changes to the specified storage file
MemoryStream outputStream = new MemoryStream();
await pptxDoc.SaveAsync(outputStream);
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint).

## Sending to a client browser

You can save and send the Presentation to a client browser from a website or web application by invoking the overload of [Save](https://help.syncfusion.com/cr/file-formats/Syncfusion.Presentation.IPresentation.html#Syncfusion_Presentation_IPresentation_Save_System_String_Syncfusion_Presentation_FormatType_System_Web_HttpResponse_) method. This method explicitly make use of an instance of HttpResponse as its parameter in order to stream the presentation to client browser. So, this overload is suitable for web application that refer to [System.Web](https://docs.microsoft.com/en-us/previous-versions/gg145018(v=vs.110)) assembly.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName, FileMode.Open);
//To-Do some manipulation
//Initialize content type
string ContentType = null;
//Save the PowerPoint Presentation to stream
MemoryStream outputStream = new MemoryStream();
pptxDoc.Save(outputStream);
outputStream.Position = 0;
//Return the file with content type
return File(outputStream, ContentType, outputFileName);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing PowerPoint Presentation 
IPresentation pptxDoc = Presentation.Open(fileName);
//To-Do some manipulation
//Saves the Presentation to the client browser
pptxDoc.Save("Output.pptx", FormatType.Pptx, Response);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing PowerPoint Presentation 
Dim pptxDoc As IPresentation = Presentation.Open(fileName)
'To-Do some manipulation
'Saves the Presentation to the client browser
pptxDoc.Save("Output.pptx", FormatType.Pptx, Response)
{% endhighlight %}

{% highlight c# tabtitle="Xamarin" %}
//Saving and sending the workbook to a client browser from a web site is suitable for web applications alone.
{% endhighlight %}

{% highlight c# tabtitle="UWP" %}
//Saving and sending the workbook to a client browser from a web site is suitable for web applications alone.
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Send-PowerPoint-to-client-browser).

## Closing a PowerPoint Presentation

When you are done with the Presentation instance, you should close the instance of [IPresentation](https://help.syncfusion.com/cr/file-formats/Syncfusion.Presentation.IPresentation.html) in order to release the memory consumed by Essential Presentation library. The following code example illustrates how to close an [IPresentation](https://help.syncfusion.com/cr/file-formats/Syncfusion.Presentation.IPresentation.html) instance.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName,FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
//To-Do some manipulation
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
//Close the instance of PowerPoint Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing Presentation from file system 
IPresentation pptxDoc = Presentation.Open(fileName);
//To-Do some manipulation
//Creates an instance of memory stream
MemoryStream stream = new MemoryStream();
//Saves the Presentation to stream
pptxDoc.Save(stream);
//Closes the Presentation instance and free the memory consumed.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing Presentation from file system 
Dim pptxDoc As IPresentation = Presentation.Open(fileName)
'To-Do some manipulation
'Creates an instance of memory stream
Dim stream As New MemoryStream()
'Saves the Presentation to stream
pptxDoc.Save(stream)
'Closes the Presentation instance and free the memory consumed.
pptxDoc.Close()
{% endhighlight %}

{% highlight c# tabtitle="Xamarin" %}
//"App" is the class of Portable project
Assembly assembly = typeof(App).GetTypeInfo().Assembly;
Stream inputStream = assembly.GetManifestResourceStream(inputFilePath);
//Loads or open an PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open(inputStream);
//To-Do some manipulation
//Create new memory stream to save Presentation.
MemoryStream stream = new MemoryStream();
//Save Presentation in stream format.
pptxDoc.Save(stream);
//Close the presentation
pptxDoc.Close();

stream.Position = 0;
//The operation in Save under Xamarin varies between Windows Phone, Android and iOS platforms. Please refer presentation/xamarin section for respective code samples.
if (Device.OS == TargetPlatform.WinPhone || Device.OS == TargetPlatform.Windows)
    Xamarin.Forms.DependencyService.Get<ISaveWindowsPhone>().Save("Sample.pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation", stream);
else
    Xamarin.Forms.DependencyService.Get<ISave>().Save("Sample.pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation", stream);
{% endhighlight %}

{% highlight c# tabtitle="UWP" %}
//Instantiates the File Picker
FileOpenPicker openPicker = new FileOpenPicker();
openPicker.SuggestedStartLocation = PickerLocationId.Desktop;
openPicker.FileTypeFilter.Add(".pptx");
//Creates a storage file from FileOpenPicker
StorageFile inputStorageFile = await openPicker.PickSingleFileAsync();
//Loads or open an PowerPoint Presentation
IPresentation pptxDoc = await Presentation.OpenAsync(inputStorageFile);
//MemoryStream outputStream = new MemoryStream();
//await pptxDoc.SaveAsync(outputStream);
//Initializes FileSavePicker
FileSavePicker savePicker = new FileSavePicker();
savePicker.SuggestedStartLocation = PickerLocationId.Desktop;
savePicker.SuggestedFileName = "Sample";
savePicker.FileTypeChoices.Add("PowerPoint Files", new List<string>() { ".pptx" });
//Creates a storage file from FileSavePicker
StorageFile storageFile = await savePicker.PickSaveFileAsync();
//Saves changes to the specified storage file
await pptxDoc.SaveAsync(storageFile);
//Close the instance of PowerPoint Presentation
pptxDoc.Close();
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint).
