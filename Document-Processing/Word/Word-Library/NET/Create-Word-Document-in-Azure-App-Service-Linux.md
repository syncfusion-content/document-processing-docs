---
title: Create Word document in Azure App Service on Linux | Syncfusion
description: Create Word document in Azure App Service on Linux using .NET Core Word (DocIO) library without Microsoft Word or interop dependencies. 
platform: document-processing
control: DocIO
documentation: UG
---

# Create Word document in Azure App Service on Linux

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-sdk/net-word-library) used to create, read, edit and convert Word documents programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **create a Word document in Azure App Service on Linux**.

## Prerequisites

* Visual Studio 2022 with the "ASP.NET and web development" workload.
* An active Azure subscription with permission to create an App Service and App Service plan.
* A Syncfusion license key — generate one as described in [registering a Syncfusion license key in an application](https://help.syncfusion.com/common/essential-studio/licensing/how-to-register-in-an-application) before you build the project. The `Syncfusion.DocIO.Net.Core` package (v16.2.0.x and later) requires it; without it the trial warning is appended to the generated document.
* [.NET 6.0 SDK or later](https://dotnet.microsoft.com/download).

## Steps to create Word document in Azure App Service on Linux

Step 1: Create a new ASP.NET Core Web App (Model-View-Controller) targeting .NET 6.0 or later.
![Create a ASP.NET Core Web App project](Azure-Images/App-Service-Linux/Create-Project-WordtoPDF.png)

Step 2: Create a project name and select the location.
![Configure your new project](Azure-Images/App-Service-Linux/Configure_Project_WordtoPDF.png)

Step 3: Click the **Create** button.
![Additional Information](Azure-Images/App-Service-Linux/Additional_Information_WordtoPDF.png)

Step 4: Install the [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.DocIO.Net.Core NuGet package](ASP-NET-Core_images/Install_Nuget.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or the NuGet feed, you also have to add the `Syncfusion.Licensing` assembly reference and register a license key in your project. Refer to [how to register a Syncfusion license key in an application](https://help.syncfusion.com/common/essential-studio/licensing/how-to-register-in-an-application) for details.

Step 5: Add the image assets used by the sample. Create a `Data` folder under `wwwroot` and add the following images to it:
* `AdventureCycle.jpg`
* `Mountain-200.jpg`

The code in Step 8 reads these images from `wwwroot/Data/` at runtime. You can obtain the images from the complete working sample linked at the end of this article.

Step 6: Add a new button in **Index.cshtml** as shown below.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    Html.BeginForm("CreateWordDocument", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Create Word Document" style="width:200px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}
{% endtabs %}

Step 7: Include the following namespaces in **HomeController.cs**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using System.IO;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;

{% endhighlight %}
{% endtabs %}

Step 8: Include the below code snippet in **HomeController.cs** to create a Word document.

{% tabs %}
{% highlight c# tabtitle="C#" %}

private readonly IWebHostEnvironment _hostingEnvironment;
public HomeController(IWebHostEnvironment hostingEnvironment)
{
  _hostingEnvironment = hostingEnvironment;
}

public ActionResult CreateWordDocument()
{
    //Creating a new document.
    using (WordDocument document = new WordDocument())
    {
        //Adding a new section to the document.
        WSection section = document.AddSection() as WSection;
        //Set Margin of the section.
        section.PageSetup.Margins.All = 72;
        //Set page size of the section.
        section.PageSetup.PageSize = new Syncfusion.Drawing.SizeF(612, 792);

        //Create Paragraph styles.
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
        IWParagraph paragraph = section.HeadersFooters.Header.AddParagraph();

        //Appends picture to the paragraph.
        string imagePath = Path.Combine(_hostingEnvironment.WebRootPath, "Data/AdventureCycle.jpg");
        using FileStream imageStream = new FileStream(imagePath, FileMode.Open, FileAccess.Read);           
        IWPicture picture = paragraph.AppendPicture(imageStream);
        picture.TextWrappingStyle = TextWrappingStyle.InFrontOfText;
        picture.VerticalOrigin = VerticalOrigin.Margin;
        picture.VerticalPosition = -45;
        picture.HorizontalOrigin = HorizontalOrigin.Column;
        picture.HorizontalPosition = 263.5f;
        picture.WidthScale = 20;
        picture.HeightScale = 15;

        paragraph.ApplyStyle("Normal");
        paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left;
        WTextRange textRange = paragraph.AppendText("Adventure Works Cycles") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Calibri";
        textRange.CharacterFormat.TextColor = Syncfusion.Drawing.Color.Red;

        //Appends paragraph.
        paragraph = section.AddParagraph();
        paragraph.ApplyStyle("Heading 1");
        paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
        textRange = paragraph.AppendText("Adventure Works Cycles") as WTextRange;
        textRange.CharacterFormat.FontSize = 18f;
        textRange.CharacterFormat.FontName = "Calibri";

        //Appends paragraph.
        paragraph = section.AddParagraph();
        paragraph.ParagraphFormat.FirstLineIndent = 36;
        paragraph.BreakCharacterFormat.FontSize = 12f;
        textRange = paragraph.AppendText("Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base.") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;

        //Appends paragraph.
        paragraph = section.AddParagraph();
        paragraph.ParagraphFormat.FirstLineIndent = 36;
        paragraph.BreakCharacterFormat.FontSize = 12f;
        textRange = paragraph.AppendText("In 2000, AdventureWorks Cycles bought a small manufacturing plant, Importadores Neptuno, located in Mexico. Importadores Neptuno manufactures several critical subcomponents for the AdventureWorks Cycles product line. These subcomponents are shipped to the Bothell location for final product assembly. In 2001, Importadores Neptuno, became the sole manufacturer and distributor of the touring bicycle product group.") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;

        paragraph = section.AddParagraph();
        paragraph.ApplyStyle("Heading 1");
        paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left;
        textRange = paragraph.AppendText("Product Overview") as WTextRange;
        textRange.CharacterFormat.FontSize = 16f;
        textRange.CharacterFormat.FontName = "Calibri";
        //Appends table.
        IWTable table = section.AddTable();
        table.ResetCells(3, 2);
        table.TableFormat.Borders.BorderType = BorderStyle.None;
        table.TableFormat.IsAutoResized = true;

        //Appends paragraph.
        paragraph = table[0, 0].AddParagraph();
        paragraph.ParagraphFormat.AfterSpacing = 0;
        paragraph.BreakCharacterFormat.FontSize = 12f;
        //Appends picture to the paragraph.
        string imagePath1 = Path.Combine(_hostingEnvironment.WebRootPath, "Data/Mountain-200.jpg");
        using FileStream image1 = new FileStream(imagePath1, FileMode.Open, FileAccess.Read);
        picture = paragraph.AppendPicture(image1);
        picture.TextWrappingStyle = TextWrappingStyle.TopAndBottom;
        picture.VerticalOrigin = VerticalOrigin.Paragraph;
        picture.VerticalPosition = 4.5f;
        picture.HorizontalOrigin = HorizontalOrigin.Column;
        picture.HorizontalPosition = -2.15f;
        picture.WidthScale = 79;
        picture.HeightScale = 79;

        //Appends paragraph.
        paragraph = table[0, 1].AddParagraph();
        paragraph.ApplyStyle("Heading 1");
        paragraph.ParagraphFormat.AfterSpacing = 0;
        paragraph.ParagraphFormat.LineSpacing = 12f;
        paragraph.AppendText("Mountain-200");
        //Appends paragraph.
        paragraph = table[0, 1].AddParagraph();
        paragraph.ParagraphFormat.AfterSpacing = 0;
        paragraph.ParagraphFormat.LineSpacing = 12f;
        paragraph.BreakCharacterFormat.FontSize = 12f;
        paragraph.BreakCharacterFormat.FontName = "Times New Roman";

        textRange = paragraph.AppendText("Product No: BK-M68B-38\r") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Times New Roman";
        textRange = paragraph.AppendText("Size: 38\r") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Times New Roman";
        textRange = paragraph.AppendText("Weight: 25\r") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Times New Roman";
        textRange = paragraph.AppendText("Price: $2,294.99\r") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Times New Roman";
        //Appends paragraph.
        paragraph = table[0, 1].AddParagraph();
        paragraph.ParagraphFormat.AfterSpacing = 0;
        paragraph.ParagraphFormat.LineSpacing = 12f;
        paragraph.BreakCharacterFormat.FontSize = 12f;

        //Appends paragraph.
        paragraph = table[1, 0].AddParagraph();
        paragraph.ApplyStyle("Heading 1");
        paragraph.ParagraphFormat.AfterSpacing = 0;
        paragraph.ParagraphFormat.LineSpacing = 12f;
        paragraph.AppendText("Mountain-300 ");
        //Appends paragraph.
        paragraph = table[1, 0].AddParagraph();
        paragraph.ParagraphFormat.AfterSpacing = 0;
        paragraph.ParagraphFormat.LineSpacing = 12f;
        paragraph.BreakCharacterFormat.FontSize = 12f;
        paragraph.BreakCharacterFormat.FontName = "Times New Roman";
        textRange = paragraph.AppendText("Product No: BK-M47B-38\r") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Times New Roman";
        textRange = paragraph.AppendText("Size: 35\r") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Times New Roman";
        textRange = paragraph.AppendText("Weight: 22\r") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Times New Roman";
        textRange = paragraph.AppendText("Price: $1,079.99\r") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Times New Roman";
        //Appends paragraph.
        paragraph = table[1, 0].AddParagraph();
        paragraph.ParagraphFormat.AfterSpacing = 0;
        paragraph.ParagraphFormat.LineSpacing = 12f;
        paragraph.BreakCharacterFormat.FontSize = 12f;

        //Appends paragraph.
        paragraph = table[1, 1].AddParagraph();
        paragraph.ApplyStyle("Heading 1");
        paragraph.ParagraphFormat.LineSpacing = 12f;
        //Appends picture to the paragraph.
        string imagePath2 = Path.Combine(_hostingEnvironment.WebRootPath, "Data/Mountain-200.jpg");
        using FileStream image2 = new FileStream(imagePath2, FileMode.Open, FileAccess.Read);
        picture = paragraph.AppendPicture(image2);
        picture.TextWrappingStyle = TextWrappingStyle.TopAndBottom;
        picture.VerticalOrigin = VerticalOrigin.Paragraph;
        picture.VerticalPosition = 8.2f;
        picture.HorizontalOrigin = HorizontalOrigin.Column;
        picture.HorizontalPosition = -14.95f;
        picture.WidthScale = 75;
        picture.HeightScale = 75;

        //Appends paragraph.
        paragraph = table[2, 0].AddParagraph();
        paragraph.ApplyStyle("Heading 1");
        paragraph.ParagraphFormat.LineSpacing = 12f;
        //Appends picture to the paragraph.
        string imagePath3 = Path.Combine(_hostingEnvironment.WebRootPath, "Data/Mountain-200.jpg");
        using FileStream image3 = new FileStream(imagePath3, FileMode.Open, FileAccess.Read);     
        picture = paragraph.AppendPicture(image3);
        picture.TextWrappingStyle = TextWrappingStyle.TopAndBottom;
        picture.VerticalOrigin = VerticalOrigin.Paragraph;
        picture.VerticalPosition = 3.75f;
        picture.HorizontalOrigin = HorizontalOrigin.Column;
        picture.HorizontalPosition = -5f;
        picture.WidthScale = 92;
        picture.HeightScale = 92;

        //Appends paragraph.
        paragraph = table[2, 1].AddParagraph();
        paragraph.ApplyStyle("Heading 1");
        paragraph.ParagraphFormat.AfterSpacing = 0;
        paragraph.ParagraphFormat.LineSpacing = 12f;
        paragraph.AppendText("Road-150 ");
        //Appends paragraph.
        paragraph = table[2, 1].AddParagraph();
        paragraph.ParagraphFormat.AfterSpacing = 0;
        paragraph.ParagraphFormat.LineSpacing = 12f;
        paragraph.BreakCharacterFormat.FontSize = 12f;
        paragraph.BreakCharacterFormat.FontName = "Times New Roman";
        textRange = paragraph.AppendText("Product No: BK-R93R-44\r") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Times New Roman";
        textRange = paragraph.AppendText("Size: 44\r") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Times New Roman";
        textRange = paragraph.AppendText("Weight: 14\r") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Times New Roman";
        textRange = paragraph.AppendText("Price: $3,578.27\r") as WTextRange;
        textRange.CharacterFormat.FontSize = 12f;
        textRange.CharacterFormat.FontName = "Times New Roman";
        //Appends paragraph.
        section.AddParagraph();

        //Saves the Word document to MemoryStream.
        MemoryStream stream = new MemoryStream();
        document.Save(stream, FormatType.Docx);
        stream.Position = 0;

        //Download Word document in the browser.
        return File(stream, "application/msword", "Sample.docx");
    }
}

{% endhighlight %}
{% endtabs %}

Step 9: Build and run the project locally (F5) to verify the **Create Word Document** button generates and downloads `Sample.docx` before publishing.

## Steps to publish to Azure App Service on Linux

An active Azure subscription, a resource group, and an App Service plan are required. You can create them during publishing if you have the necessary permissions.

Step 1: Right-click the project and select the **Publish** option.
![Right-click the project and select the Publish option](Azure-Images/App-Service-Windows/Publish-Create-Word-Document.png)

Step 2: Click the **Add a Publish Profile** button.
![Click the Add a Publish Profile](Azure-Images/App-Service-Linux/Publish_Profile_WordtoPDF.png)

Step 3: Select the publish target as **Azure**.
![Select the publish target as Azure](Azure-Images/App-Service-Linux/Publish_Target_WordtoPDF.png)

Step 4: Select the Specific target as **Azure App Service (Linux)**.
![Select the publish target](Azure-Images/App-Service-Linux/Specific_Target_WordtoPDF.png)

Step 5: To create a new app service, click the **Create new** option.
![Click create new option](Azure-Images/App-Service-Linux/Create_New_App_Service_WordtoPDF.png)

Step 6: Click the **Create** button to proceed with **App Service** creation.
![Click the Create button](Azure-Images/App-Service-Linux/Hosting-Plan-Create-Word-Document.png)

Step 7: Click the **Finish** button to finalize the **App Service** creation.
![Click the Finish button](Azure-Images/App-Service-Linux/Publish-Finish-Create-Word-Document.png)

Step 8: Click the **Close** button.
![Finish the publish profile](Azure-Images/App-Service-Linux/Publish_Finish_WordtoPDF.png)

Step 9: Click the **Publish** button.
![Click the Publish button](Azure-Images/App-Service-Linux/Before-Publish-Create-Word-Document.png)

Step 10: Publish has succeeded.
![Publish succeeded](Azure-Images/App-Service-Linux/After-Publish-Create-Word-Document.png)

Step 11: The published webpage will open in the **browser**.
![Browser will open after publish](Azure-Images/App-Service-Linux/Browser-Create-Word-Document.png)

Step 12: Click the **Create Word Document** button to create a Word document. You will get the output **Word document** as follows:

![Create Word document in Azure App Service on Linux](ASP-NET-Core_images/GettingStartedOutput.jpg)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Getting-Started/Azure/Azure_App_Service).

Looking for the full .NET Word Library overview, features, pricing, and documentation? Visit the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) page. 
