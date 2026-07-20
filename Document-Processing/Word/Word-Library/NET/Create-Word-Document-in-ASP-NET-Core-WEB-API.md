---
title: Create Word documents in ASP.NET Core Web API | Syncfusion
description: Create Word document without Microsoft Word or interop dependencies in ASP.NET Core Web API applications using Syncfusion® .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# Create Word documents in ASP.NET Core Web API

Syncfusion<sup>&reg;</sup> Essential<sup>&reg;</sup> DocIO is a [.NET Word library](https://www.syncfusion.com/document-sdk/net-word-library) used to create, read, and edit **Word** documents programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **create a Word document in ASP.NET Core Web API**.

## Steps to create Word document programmatically:

The below steps illustrate creating a simple Word document in ASP.NET Core Web API.

Step 1: Create a new C# ASP.NET Core Web API project.

![Create ASP.NET Core Web API project in Visual Studio](ASP-NET-Core-WEB-API-images/ASP-NET-Core-Web-API-template.png)

Step 2: Install the [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org).

![Install Syncfusion.DocIO.Net.Core NuGet Package](ASP-NET-Core-WEB-API-images/Nuget-Package-NET-Core.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add the Syncfusion.Licensing assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering the Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Add a new empty API controller file named **ValuesController.cs** to the project.

![Add empty API controller to the project](ASP-NET-Core-WEB-API-images/Empty-API-Controller.png)

Step 4: Include the following namespaces and the controller scaffolding with the controller-level route attribute in the **ValuesController.cs** file. The `[Route("api/Values")]` attribute on the controller combines with the action route to form the endpoint URL `api/Values/api/Word` used by the client later.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using Microsoft.AspNetCore.Mvc;
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;

[ApiController]
[Route("api/Values")]
public class ValuesController : ControllerBase
{
    // Action methods will be added here.
}

{% endhighlight %}

{% endtabs %}

Step 5: Add a new action method `CreateDocument` inside `ValuesController` and include the below code snippet to create a Word document and download it. The `contentType` constant is the MIME type for the `.docx` format.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 [HttpGet]
 [Route("api/Word")]
 public IActionResult CreateDocument()
 {
     try
     {
         var fileDownloadName = "Output.docx";
         // MIME type for .docx (Open XML Word document)
         const string contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
         var stream = GenerateWordDocument();
         stream.Position = 0;
         return File(stream, contentType, fileDownloadName);
     }
     catch (Exception ex)
     {
         // Log or handle the exception
         return BadRequest("Error occurred while creating Word document: " + ex.Message);
     }
 }
 
 {% endhighlight %}

{% endtabs %}

Step 6: Implement the `GenerateWordDocument` method inside `ValuesController`. Define it as a `static` method within the same class. The section below is broken into sub-steps: create the document, define paragraph styles, add a header, append body paragraphs, and save the document to a memory stream.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 public static MemoryStream GenerateWordDocument()
 {
     //Creating a new document
     WordDocument document = new WordDocument();
     //Adding a new section to the document
     WSection section = document.AddSection() as WSection;
     //Set Margin of the section
     section.PageSetup.Margins.All = 72;
     //Set page size of the section
     section.PageSetup.PageSize = new Syncfusion.Drawing.SizeF(612, 792);

     //Create Paragraph styles
     WParagraphStyle style = document.AddParagraphStyle("Normal") as WParagraphStyle;
     style.CharacterFormat.FontName = "Calibri";
     style.CharacterFormat.FontSize = 11f;
     style.ParagraphFormat.BeforeSpacing = 0;
     style.ParagraphFormat.AfterSpacing = 8;
     style.ParagraphFormat.LineSpacing = 13.8f;

     style = document.AddParagraphStyle("Heading 1") as WParagraphStyle;
     style.ApplyBaseStyle("Normal");
     style.CharacterFormat.FontName = "Calibri Light";
     style.CharacterFormat.FontSize = 16f;
     style.CharacterFormat.TextColor = Syncfusion.Drawing.Color.FromArgb(46, 116, 181);
     style.ParagraphFormat.BeforeSpacing = 12;
     style.ParagraphFormat.AfterSpacing = 0;
     style.ParagraphFormat.Keep = true;
     style.ParagraphFormat.KeepFollow = true;
     style.ParagraphFormat.OutlineLevel = OutlineLevel.Level1;

     //Add the header paragraph
     IWParagraph paragraph = section.HeadersFooters.Header.AddParagraph();
     paragraph.ApplyStyle("Normal");
     paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left;
     WTextRange textRange = paragraph.AppendText("Adventure Works Cycles") as WTextRange;
     textRange.CharacterFormat.FontSize = 12f;
     textRange.CharacterFormat.FontName = "Calibri";
     textRange.CharacterFormat.TextColor = Syncfusion.Drawing.Color.Red;

     //Appends paragraph
     paragraph = section.AddParagraph();
     paragraph.ApplyStyle("Heading 1");
     paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
     textRange = paragraph.AppendText("Adventure Works Cycles") as WTextRange;
     textRange.CharacterFormat.FontSize = 18f;
     textRange.CharacterFormat.FontName = "Calibri";

     //Appends paragraph
     paragraph = section.AddParagraph();
     paragraph.ParagraphFormat.FirstLineIndent = 36;
     paragraph.BreakCharacterFormat.FontSize = 12f;
     textRange = paragraph.AppendText("Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base.") as WTextRange;
     textRange.CharacterFormat.FontSize = 12f;

     //Appends paragraph
     paragraph = section.AddParagraph();
     paragraph.ParagraphFormat.FirstLineIndent = 36;
     paragraph.BreakCharacterFormat.FontSize = 12f;
     textRange = paragraph.AppendText("In 2000, AdventureWorks Cycles bought a small manufacturing plant, Importadores Neptuno, located in Mexico. Importadores Neptuno manufactures several critical subcomponents for the AdventureWorks Cycles product line. These subcomponents are shipped to the Bothell location for final product assembly. In 2001, Importadores Neptuno, became the sole manufacturer and distributor of the touring bicycle product group.") as WTextRange;
     textRange.CharacterFormat.FontSize = 12f;

     //Saving the Word Document to the MemoryStream
     MemoryStream stream = new MemoryStream();
     document.Save(stream, FormatType.Docx);
     document.Close();
     //Set the position as '0'.
     stream.Position = 0;
     return stream;
 }

{% endhighlight %}

{% endtabs %}

Step 7: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 8: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.

N> If a Syncfusion license is not registered, a license exception may be thrown at runtime. Refer to the [Syncfusion licensing](https://help.syncfusion.com/common/essential-studio/licensing/overview) topic to register the license key before running the app.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Getting-Started/ASP.NET-Core-Web-API/Create-Word-Document).

## Steps for accessing the Web API using HTTP requests

Step 1: Create a console application.
![Create a Console application in Visual Studio](ASP-NET-Core-WEB-API-images/Console-Template-Net-Core.png)

N> Ensure your ASP.NET Core Web API is running on the specified port before running this client. The port number `7152` below comes from the Web API's `launchSettings.json`; adjust it to match your environment.

Step 2: Add the below code snippet in the **Program.cs** file for accessing the Web API using HTTP requests. This example uses C# top-level statements with `await` (supported in .NET 6+). Replace the port number in the URL to match your Web API host.

This method sends a GET request to the Web API endpoint to retrieve and save the generated Word document.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 using System.IO;
 using System.Net.Http;

 // Create an HttpClient instance
 using (HttpClient client = new HttpClient())
 {
     try
     {
         // Send a GET request to the Web API endpoint.
         // Adjust the port (7152) to match your ASP.NET Core Web API launch settings.
         HttpResponseMessage response = await client.GetAsync("https://localhost:7152/api/Values/api/Word");
         // Check if the response is successful
         if (response.IsSuccessStatusCode)
         {
             // Read the response content as a stream
             Stream responseBody = await response.Content.ReadAsStreamAsync();
             // Ensure the Output directory exists before writing
             string outputDir = Path.Combine(AppContext.BaseDirectory, "Output");
             Directory.CreateDirectory(outputDir);
             string outputPath = Path.Combine(outputDir, "Output.docx");
             using (FileStream fileStream = File.Create(outputPath))
             {
                 responseBody.CopyTo(fileStream);
             }
             Console.WriteLine("Word document saved to: " + outputPath);
         }
         else
         {
             Console.WriteLine("HTTP error status code: " + response.StatusCode);
         }
     }
     catch (HttpRequestException e)
     {
         Console.WriteLine("Request exception: " + e.Message);
     }
 }

{% endhighlight %}

{% endtabs %}

Step 3: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 4: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Getting-Started/ASP.NET-Core-Web-API/Client%20Application).

Upon executing the program, the **Word document** will be generated as follows.

**Figure 1:** Output Word document generated by the ASP.NET Core Web API.

![ASP .NET Core WEB API output Word document](ASP-NET-Core-WEB-API-images/ASP-NET-Core-Web-API-Output.png)

## See also

- [.NET Word Library overview, features, pricing, and documentation](https://www.syncfusion.com/document-sdk/net-word-library)
- [Online demo: Create a Word document in ASP.NET Core](https://document.syncfusion.com/demos/word/helloworld#/tailwind)
- [Troubleshooting](https://help.syncfusion.com/document-processing/word/faq) for common errors (license exceptions, route 404s, file download issues) 
