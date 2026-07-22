---
title: Create Markdown document in ASP.NET MVC | Syncfusion
description: Create Markdown document without external dependencies in ASP.NET MVC application using Syncfusion<sup>&reg;</sup> .NET Markdown library.
platform: document-processing
control: Markdown
documentation: UG
---

# Create Markdown document in ASP.NET MVC

Syncfusion<sup>&reg;</sup> Essential<sup>&reg;</sup> Markdown is a `.NET Markdown library` used to create, read, and edit **Markdown** documents programmatically without external dependencies. Using this library, you can **create a Markdown document in ASP.NET MVC**.

## Steps to create Markdown document programmatically

**Prerequisites:**

* Visual Studio 2022 or later.
* Install the **.NET desktop development** workload with the **.NET Framework 4.6.2 SDK** or later.

Step 1: Create a new ASP.NET Web application project.

![Create ASP.NET Web application in Visual Studio](ASP-NET-MVC_images/CreateProjectforConversion.png)

Step 2: Select the MVC application.

![Select MVC application in Visual Studio](ASP-NET-MVC_images/MVC.png)

Step 3: Install the [Syncfusion.Markdown](https://www.nuget.org/packages/Syncfusion.Markdown) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.Markdown NuGet package](ASP-NET-Core_images/Install_Nuget.png)

N> **Starting with v34.x.x**, if you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or from the NuGet feed, you must add a reference to the **Syncfusion.Licensing** assembly and include a valid license key in your application.
N>
N> Install the https://www.nuget.org/packages/Syncfusion.Licensing NuGet package and register the license key during application startup.
N>
N> ```csharp
N> Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
N> ```
N>
N> For more information about generating and registering a license key, refer to the [Syncfusion licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview).

Step 4: Include the following namespace in that HomeController.cs file.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using Syncfusion.Office.Markdown;
using System.IO;

{% endhighlight %}

{% endtabs %}

Step 5: A default action method named **Index** will be present in HomeController.cs. Right-click on this action method and select **Go To View**. You will be directed to its associated view page **Index.cshtml**.

Step 6: Add a new button in the Index.cshtml as shown below.

{% tabs %}

{% highlight c# tabtitle="C#" %}

@{Html.BeginForm("CreateDocument", "Home", FormMethod.Get);
{
<div>
    <input type="submit" value="Create Document" style="width:150px;height:27px" />
</div>
}
Html.EndForm();
}

{% endhighlight %}

{% endtabs %}

Step 7: Add a new action method **CreateDocument** in HomeController.cs and include the below code snippet to **create Markdown document** and download it.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new instance of MarkdownDocument.
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a heading to the Markdown document.
MdParagraph mdHeadingParagraph = markdownDocument.AddParagraph();
// Applies the Heading 1 style to the paragraph.
mdHeadingParagraph.ApplyParagraphStyle("Heading 1");
MdTextRange mdHeadingTextRange = mdHeadingParagraph.AddTextRange();
mdHeadingTextRange.Text = "Adventure Works Cycles";
// Adds a paragraph to the Markdown document.
MdParagraph mdParagraph = markdownDocument.AddParagraph();
MdTextRange mdTextRange = mdParagraph.AddTextRange();
mdTextRange.Text = "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base.";
// Adds the first list item.
MdParagraph item1 = markdownDocument.AddParagraph();
item1.ListFormat = new MdListFormat();
item1.ListFormat.IsNumbered = false;
item1.ListFormat.ListLevel = 0;
item1.ListFormat.ListValue = "- ";
item1.AddTextRange().Text = "First item";
// Adds the second list item.
MdParagraph item2 = markdownDocument.AddParagraph();
item2.ListFormat = new MdListFormat();
item2.ListFormat.IsNumbered = false;
item2.ListFormat.ListLevel = 0;
item2.ListFormat.ListValue = "- ";
item2.AddTextRange().Text = "Second item";
// Adds the third list item.
MdParagraph item3 = markdownDocument.AddParagraph();
item3.ListFormat = new MdListFormat();
item3.ListFormat.IsNumbered = false;
item3.ListFormat.ListLevel = 0;
item3.ListFormat.ListValue = "- ";
item3.AddTextRange().Text = "Third item";
// Adds a table to the Markdown document.
MdTable table = markdownDocument.AddTable();
table.ColumnAlignments.Add(MdColumnAlignment.Left);
table.ColumnAlignments.Add(MdColumnAlignment.Left);
// Adds the header row.
MdTableRow headerRow = table.AddTableRow();
MdTableCell header1 = headerRow.AddTableCell();
header1.Items.Add(new MdTextRange { Text = "Profile picture" });
MdTableCell header2 = headerRow.AddTableCell();
header2.Items.Add(new MdTextRange { Text = "Description" });

// Adds a data row.
MdTableRow dataRow = table.AddTableRow();
MdTableCell cell1 = dataRow.AddTableCell();
MdPicture picture = new MdPicture();
picture.Url = "Data\\photo.jpg";
picture.AltText = "Profile picture";
cell1.Items.Add(picture);
MdTableCell cell2 = dataRow.AddTableCell();
cell2.Items.Add(new MdTextRange { Text = "AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company." });
// Saves the Markdown document as .md content to a MemoryStream
MemoryStream stream = new MemoryStream();
markdownDocument.Save(stream);
stream.Position = 0;
// Disposes the document
markdownDocument.Dispose();
// Downloads the Markdown document in the browser
return File(stream, "text/markdown", "Sample.md");

{% endhighlight %}

{% endtabs %}

Step 8: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 9: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app. When the page loads, click the **Create Document** button to generate and download the Markdown file.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Getting-Started/ASP.NET%20MVC).

N> The code sample references an image file (`photo.jpg`). Download this asset from the [GitHub sample Data folder](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Getting-Started/ASP.NET%20MVC/Create-Markdown-Document/App_Data) and place it in the application's `Data` folder (under the project root) so the `MdPicture.Url` value (`"Data/photo.jpg"`) resolves correctly at runtime.

By executing the program, you will get the Markdown document as follows.

![ASP.Net MVC output Markdown document](GettingStarted_images/GettingStarted_Output1.png)