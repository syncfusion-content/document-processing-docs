---
title: Open and save Word document in Azure Functions v1 | Syncfusion
description: Open and save Word document in Azure Functions v1 using .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: file-formats
control: DocIO
documentation: UG
---

# Open and save Word document in Azure Functions v1

Syncfusion DocIO is a [.NET Word library](https://www.syncfusion.com/document-processing/word-framework/net/word-library) used to create, read, edit and convert Word documents programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **open and save Word document in Azure Functions v1**.

## Steps to open and save Word document in Azure Functions v1

Step 1: Create a new Azure Functions project.
![Create a Azure Functions project](Azure_Images/Functions_v1/Azure_Function_WordtoPDF.png)

Step 2: Create a project name and select the location.
![Create a project name](Azure_Images/Functions_v1/Configuration-Open-and-Save-Word-Document.png)

Step 3: Select function worker as **.NET Framework**. 
![Select function worker](Azure_Images/Functions_v1/Additional_Information_WordtoPDF.png)

Step 4: Install the [Syncfusion.DocIO.AspNet](https://www.nuget.org/packages/Syncfusion.DocIO.AspNet) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).
![Install Syncfusion.DocIO.AspNet NuGet package](Azure_Images/Functions_v1/Nuget-Open-and-Save-Word-Document.png)

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.

Step 5: Include the following namespaces in the **Function1.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;

{% endhighlight %}
{% endtabs %}

Step 6: Add the following code snippet in **Run** method of **Function1** class to perform ***open an existing Word document**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Gets the input Word document as stream from request
Stream stream = req.Content.ReadAsStreamAsync().Result;
//Loads an existing Word document
using WordDocument document = new WordDocument(stream);
       
{% endhighlight %}
{% endtabs %}

Step 7: Add below code example to add a paragraph in the Word document.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Access the section in a Word document.
IWSection section = document.Sections[0];
//Add a new paragraph to the section.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.FirstLineIndent = 36;
paragraph.BreakCharacterFormat.FontSize = 12f;
IWTextRange text = paragraph.AppendText("In 2000, Adventure Works Cycles bought a small manufacturing plant, Importadores Neptuno, located in Mexico. Importadores Neptuno manufactures several critical subcomponents for the Adventure Works Cycles product line. These subcomponents are shipped to the Bothell location for final product assembly. In 2001, Importadores Neptuno, became the sole manufacturer and distributor of the touring bicycle product group.");
text.CharacterFormat.FontSize = 12f;

{% endhighlight %}
{% endtabs %}

Step 8: Add below code example to **save the Word document**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

MemoryStream memoryStream = new MemoryStream();
//Saves the Word document file.
document.Save(memoryStream, FormatType.Docx);
//Reset the memory stream position.
memoryStream.Position = 0;
//Create the response to return.
HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
//Set the Word document saved stream as content of response.
response.Content = new ByteArrayContent(memoryStream.ToArray());
//Set the contentDisposition as attachment.
response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
{
    FileName = "Sample.docx"
};
//Set the content type as Word document mime type.
response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/docx");
//Return the response with output Word document stream.
return response;

{% endhighlight %}
{% endtabs %}

Step 9: Right click the project and select **Publish**. Then, create a new profile in the Publish Window.
![Create a new profile in the Publish Window](Azure_Images/Functions_v4/Publish-Open-and-Save-Word-Document.png)

Step 10: Select the target as **Azure** and click **Next** button.
![Select the target as Azure](Azure_Images/Functions_v1/Target_WordtoPDF.png)

Step 11: Select the **Create new** button.
![Configure Hosting Plan](Azure_Images/Functions_v1/Function-Instance-Open-and-Save-Word-Document.png)

Step 12: Click **Create** button. 
![Select the plan type](Azure_Images/Functions_v1/Subscription-Open-and-Save-Word-Document.png)

Step 13: After creating app service then click **Finish** button. 
![Creating app service](Azure_Images/Functions_v1/App-service-Created-Open-and-Save-Word-Document.png)

Step 14: Click the **Publish** button.
![Click Publish Button](Azure_Images/Functions_v1/Before-Publish-Open-and-Save-Word-Document.png)

Step 15: Publish has been succeed.
![Publish succeeded](Azure_Images/Functions_v1/After-Publish-Open-and-Save-Word-Document.png)

Step 16: Now, go to Azure portal and select the App Services. After running the service, click **Get function URL by copying it**. Then, paste it in the below client sample (which will request the Azure Functions, to perform **open and save Word document**. You will get the output Word document as follows.

![Open and Save in Azure Functions v1](ASP-NET-Core_images/OpenAndSaveOutput.png)

## Steps to post the request to Azure Functions

Step 1: Create a console application to request the Azure Functions API.

Step 2: Add the following code snippet into **Main** method to post the request to Azure Functions with template Word document and get the resultant Word document.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Reads the template Word document.
FileStream fs = new FileStream(@"../../Data/Input.docx", FileMode.Open, FileAccess.ReadWrite, FileShare.ReadWrite);
fs.Position = 0;
//Saves the Word document in memory stream.
MemoryStream inputStream = new MemoryStream();
fs.CopyTo(inputStream);
inputStream.Position = 0;
try
{
    Console.WriteLine("Please enter your Azure Functions URL :");
    string functionURL = Console.ReadLine();

    //Create HttpWebRequest with hosted azure functions URL.    
    HttpWebRequest req = (HttpWebRequest)WebRequest.Create(functionURL);
    //Set request method as POST.
    req.Method = "POST";
    //Get the request stream to save the Word document stream.
    Stream stream = req.GetRequestStream();
    //Write the Word document stream into request stream.
    stream.Write(inputStream.ToArray(), 0, inputStream.ToArray().Length);

    //Gets the responce from the Azure Functions.
    HttpWebResponse res = (HttpWebResponse)req.GetResponse();

    //Saves the Word document stream.
    FileStream fileStream = File.Create("Sample.docx");
    res.GetResponseStream().CopyTo(fileStream);
    //Dispose the streams.
    inputStream.Dispose();
    fileStream.Dispose();
}
catch (Exception ex)
{
    throw;
}

{% endhighlight %}
{% endtabs %}

From GitHub, you can download the [console application](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Read-and-Save-document/Open-and-save-Word-document/Azure/Azure_Functions/Console_Application) and [Azure Functions v1](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Read-and-Save-document/Open-and-save-Word-document/Azure/Azure_Functions/Azure_Functions_v1).

Click [here](https://www.syncfusion.com/document-processing/word-framework/net) to explore the rich set of Syncfusion Word library (DocIO) features.
