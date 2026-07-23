---
title: Loading and Saving Excel in Azure App Service on Windows | Syncfusion
description: Explains how to load and save an Excel files in Azure App Service on Windows using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---
# Loading and Saving Excel files in Azure App Service on Windows

[.NET Excel Library for ASP.NET Core platform](https://www.syncfusion.com/document-processing/excel-framework/net-core/excel-library) can be used to create, read, and edit Excel files in Azure App Service on Windows.

## Prerequisites

* An active Azure subscription with permission to create App Services.
* Visual Studio 2022 (17.0 or later) with the **ASP.NET and web development** workload installed.
* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package in your project.
* Register your Syncfusion<sup>&reg;</sup> license key in your project. Refer to the [licensing overview](https://help.syncfusion.com/document-processing/licensing/overview) for details.
* A sample input file (for example, `Data/InputTemplate.xlsx`) added to the project and configured with **Build Action: Content** and **Copy to Output Directory: Copy if newer** so the file is deployed to Azure.

## Steps to Load and Save an Excel document in Azure App Service on Windows

The steps below illustrate how to load and save a simple Invoice-formatted Excel document in Azure App Service on Windows.

Step 1: Create a new ASP.NET Core Web Application (Model-View-Controller).

![Create ASP.NET Core web application in Visual Studio](Loading-and-Saving_images/Loading-and-Saving_images_img1.png)

Step 2: Name the project.

![Name the project](Loading-and-Saving_images/Loading-and-Saving_images_img17.png)

Step 3: Select the framework and click **Create** button.

![Framework version](Loading-and-Saving_images/Loading-and-Saving_images_img18.png)

Step 4: Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package as a reference to your ASP.NET Core application from [NuGet.org](https://www.nuget.org).

![Install Syncfusion.XlsIO.Net.Core Nuget Package](Loading-and-Saving_images/Loading-and-Saving_images_img19.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add the "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/document-processing/licensing/overview) to know about registering the Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

Step 5: Include the following namespaces in **HomeController.cs**.

{% tabs %}  
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
{% endhighlight %}

{% highlight c# tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO
{% endhighlight %}
{% endtabs %}  

Step 6: Add a new button in the **Index.cshtml** as shown below.

{% tabs %}  
{% highlight CSHTML %}
@{
    Html.BeginForm("LoadingandSaving", "Home", FormMethod.Get);
    {
        <div>
            <br>
            <input type="submit" value="Loading and Saving Document" style="width:230px;height:27px" />
        </div>
    }
    Html.EndForm();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
@Code
    Html.BeginForm("LoadingandSaving", "Home", FormMethod.Get)
End Code
<div>
    <br />
    <input type="submit" value="Loading and Saving Document" style="width:230px;height:27px" />
</div>
@Code
    Html.EndForm()
End Code
{% endhighlight %}
{% endtabs %}

Step 7: Include the following code snippet in **HomeController.cs** to **load and save an Excel file and download it**.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
public ActionResult LoadingandSaving()
{
    // Create an instance of ExcelEngine
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        // Load an existing Excel document
        IWorkbook workbook = application.Workbooks.Open("Data/InputTemplate.xlsx");

        // Access first worksheet from the workbook
        IWorksheet worksheet = workbook.Worksheets[0];

        // Set text in cell A3
        worksheet.Range["A3"].Text = "Hello World";

        // Save the Excel to a MemoryStream
        using (MemoryStream outputStream = new MemoryStream())
        {
            workbook.SaveAs(outputStream);
            outputStream.Position = 0;

            // Download the Excel document in the browser
            return File(outputStream, "application/msexcel", "Output.xlsx");
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
public ActionResult LoadingandSaving()
{
	//Create an instance of ExcelEngine
	using (ExcelEngine excelEngine = new ExcelEngine())
	{
	    IApplication application = excelEngine.Excel;
	    application.DefaultVersion = ExcelVersion.Xlsx;

	    //Load an existing Excel document
		IWorkbook workbook = application.Workbooks.Open("Data/InputTemplate.xlsx");

	    //Access first worksheet from the workbook.
	    IWorksheet worksheet = workbook.Worksheets[0];

	    //Set Text in cell A3.
	    worksheet.Range["A3"].Text = "Hello World";

	    //Save the Excel to MemoryStream 
	    MemoryStream outputStream = new MemoryStream();
	    workbook.SaveAs(outputStream);

	    //Set the position
	    outputStream.Position = 0;

	    //Download the Excel document in the browser.
	    return File(outputStream, "application/msexcel", "Output.xlsx");
	}
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Public Function LoadingandSaving() As ActionResult
    ' Create an instance of ExcelEngine
    Using excelEngine As New ExcelEngine()
        Dim application As IApplication = excelEngine.Excel
        application.DefaultVersion = ExcelVersion.Xlsx

        ' Load an existing Excel document
        Dim inputStream As New FileStream(Server.MapPath("~/Data/InputTemplate.xlsx"), FileMode.Open, FileAccess.Read)
        Dim workbook As IWorkbook = application.Workbooks.Open(inputStream)

        ' Access first worksheet
        Dim worksheet As IWorksheet = workbook.Worksheets(0)

        ' Set text in cell A3
        worksheet.Range("A3").Text = "Hello World"

        ' Save to a memory stream
        Using outputStream As New MemoryStream()
            workbook.SaveAs(outputStream)
            outputStream.Position = 0

            ' Download the Excel document
            Return File(outputStream, "application/msexcel", "Output.xlsx")
        End Using
    End Using
End Function
{% endhighlight %}
{% endtabs %}

## Steps to publish as Azure App Service on Windows

Step 1: Right-click the project and select **Publish** option.

![Publish](Loading-and-Saving_images/Loading-and-Saving_images_img20.png)

Step 2: Select the publish target as **Azure**.

![Add a Publish Profile](Loading-and-Saving_images/Loading-and-Saving_images_img21.png)

Step 3: Select the Specific target as **Azure App Service (Windows)**.

![Select the publish target](Loading-and-Saving_images/Loading-and-Saving_images_img22.png)

Step 4: To create a new app service, click **Create new** option.

![Click create new option](Loading-and-Saving_images/Loading-and-Saving_images_img23.png)

Step 5: Click the **Create** button to proceed with **App Service** creation.

![Hosting](Loading-and-Saving_images/Loading-and-Saving_images_img24.png)

Step 6: Click the **Finish** button to finalize the **App Service** creation.

![App Service](Loading-and-Saving_images/Loading-and-Saving_images_img25.png)

Step 7: Click **Close** button.

![Profile created](Loading-and-Saving_images/Loading-and-Saving_images_img26.png)

Step 8: Click the **Publish** button.

![Start publish](Loading-and-Saving_images/Loading-and-Saving_images_img27.png)

Step 9: The publish has succeeded.

![Publish has succeeded](Loading-and-Saving_images/Loading-and-Saving_images_img28.png)

Step 10: The published web page opens in the browser.

![Browser will open after publish](Loading-and-Saving_images/Loading-and-Saving_images_img29.png)

Step 11: Click **Loading and Saving Document** to load and save a simple Excel document. You will get the output Excel document as follows.

![Output File](Loading-and-Saving_images/Loading-and-Saving_images_img30.png)

A complete working example of how to load and save an Excel document in Azure App Service on Windows in C# is available on the [SyncfusionExamples/XlsIO-Examples GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Loading%20and%20Saving/Azure/Azure%20App%20Service/Loading%20and%20Saving).

Click [here](https://www.syncfusion.com/document-processing/excel-framework/net-core) to explore the rich set of Syncfusion&reg; Excel library (XlsIO) features.

An online sample link to [create an Excel document in ASP.NET Core](https://ej2.syncfusion.com/aspnetcore/Excel/Create#/material3) is also available.

## See Also

* [Create, read, and edit Excel files in ASP.NET Core](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-asp-net-core-c-sharp)
* [Assemblies Required for XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/assemblies-required)
* [NuGet Packages for XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/nuget-packages-required)
* [Licensing Overview](https://help.syncfusion.com/document-processing/licensing/overview)