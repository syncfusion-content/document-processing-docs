---
title: Extract Form Data in ASP.NET MVC Application | Syncfusion
description: Learn how to extract form data in an ASP.NET MVC application with easy steps using the Syncfusion Smart Form Recognizer library.
platform: document-processing
control: SmartFormRecognizer
documentation: UG
keywords: Assemblies

---

# Recognizing Form Data in ASP.NET MVC

The Syncfusion<sup>&reg;</sup> Smart Form Recognizer is a deterministic, on‑premise C# library for .NET that extracts form data from PDFs and scanned images. It uses visual layout heuristics like lines, boxes, and markers to consistently identify form structures. The library supports text fields, checkboxes, radio buttons, and signature regions, producing structured JSON for workflow integration.

## Steps to Recognize Form Data PDF document in ASP.NET MVC

Step 1: Create a new C# ASP.NET Web Application (.NET Framework) project.
![Create ASP.NET MVC application](GettingStarted_images/MVC_Creation.png)   

Step 2: In the project configuration windows, name your project and select Create.
![Configuration window1](GettingStarted_images/MVC_Form1.png)   
![Configuration window2](GettingStarted_images/MVC2.png)   

Step 3: Install [Syncfusion.SmartFormRecognizer.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.SmartFormRecognizer.AspNet.Mvc5)  NuGet package as reference to your .NET applications from [NuGet.org](https://www.nuget.org/).
![NuGet package installation](GettingStarted_images/MVC_Form3.png)  

Step 4: Include the following namespaces in the HomeController.cs file.

{% highlight c# tabtitle="C#" %}

using Syncfusion.SmartFormRecognizer;
using System.IO;
using System.Text;

{% endhighlight %}

Step 5: Add a new button in the Index.cshtml as shown below.

@{
	ViewBag.Title = "Home Page";
}

<div style="margin-top:20px;">
	@using (Html.BeginForm("RecognizeForm", "Home", FormMethod.Get))
	{
		<input type="submit" value="Recognize Form from PDF" style="width:250px;height:30px" />
	}
</div>

{% endhighlight %}

Step 6: Add a new action method named RecognizeForm in `HomeController.cs` and include the below code example to recognize form data from a PDF document using the **RecognizeFormAsJson** method in the **FormRecognizer** class. 

{% highlight c# tabtitle="C#" %}

// Resolve the path to the input PDF file inside the App_Data folder.
string inputPath = Server.MapPath("~/App_Data/Input.pdf");
// Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream(inputPath, FileMode.Open, FileAccess.ReadWrite))
{
    // Initialize the Smart Form Recognizer.
    FormRecognizer smartFormRecognizer = new FormRecognizer();
    // Recognize the form and get the output as JSON string.
    string outputJson = smartFormRecognizer.RecognizeFormAsJson(inputStream);
    // Convert JSON string into a MemoryStream for download.
    MemoryStream outputStream = new MemoryStream(Encoding.UTF8.GetBytes(outputJson));
    outputStream.Position = 0;
    // Return JSON file as download in browser.
    return File(outputStream, "application/json", "Output.json");
}

{% endhighlight %}

By executing the program, you will get the PDF document as follows.
![HTML to PDF output document](GettingStarted_images/ASPCore_Output.png)  

A complete working sample can be downloaded from [Github](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Getting-Started/ASP.NETMVC/Recognize_Forms).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-data-extraction) to explore the rich set of Syncfusion<sup>&reg;</sup> Data Extraction library features. 
 