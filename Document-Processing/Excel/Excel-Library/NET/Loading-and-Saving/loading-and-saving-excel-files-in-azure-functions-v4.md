---
title: Loading and Saving Excel in Azure Functions v4 | Syncfusion
description: Explains how to load and save an Excel files in Azure Functions v4 using Syncfusion Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---
# Loading and Saving Excel files in Azure Functions v4

Syncfusion<sup>&reg;</sup> XlsIO is a [.NET Excel library](https://www.syncfusion.com/document-processing/excel-framework/net) can be used to create, read, edit Excel files in Azure Functions v4.

## Steps to Load and Save an Excel document in Azure Functions v4

The below steps illustrates loading and saving a simple Invoice formatted Excel document in Azure Functions v4.

Step 1: Create a new Azure Functions project.

![Create an Azure Functions project in visual studio](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img1.png)

Step 2: Name the project.

![Name the project](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img2.png)

Step 3: Select the framework and click **Create** button.

![Framework version](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img3.png)

Step 4: Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package as reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org).

![Install Syncfusion.XlsIO.Net.Core Nuget Package](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img4.png)

N> Starting with v16.2.0.x, if you reference Syncfusion&reg; assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion&reg; license key in your applications to use our components. 

Step 5: Include the following namespaces in the Function1.cs file.

{% tabs %}  
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
{% endhighlight %}
{% endtabs %}  

Step 6: Add the following code snippet in **Run** method of **Function1** class to perform **Loading and Saving Excel files** in Azure Functions v4.

{% tabs %}  
{% highlight c# tabtitle="C#" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Load an existing Excel document
    FileStream inputStream = new FileStream("Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);

    //Access first worksheet from the workbook
    IWorksheet worksheet = workbook.Worksheets[0];

    //Set Text in cell A3
    worksheet.Range["A3"].Text = "Hello World";

    MemoryStream outputStream = new MemoryStream();
    workbook.SaveAs(outputStream);
    outputStream.Position = 0;

    //Set headers
    response.Headers.Add("Content-Disposition", "attachment; filename=Output.xlsx");

    //Set the content type as Excel document mime type
    response.Headers.Add("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

    await response.Body.WriteAsync(outputStream.ToArray());

    //Return the response with output Excel document stream
    return response;
}
{% endhighlight %}
{% endtabs %} 

## Steps to publish as Azure Functions v4

Step 1: Right-click the project and select **Publish** option.

![Publish](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img5.png)

Step 2: Select the publish target as **Azure**.

![Add a Publish Profile](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img6.png)

Step 3: Select the Specific target as **Azure Function App (Windows)**.

![Select the publish target](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img7.png)

Step 4: Select the **Create new** button.

![Click create new option](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img8.png)

Step 5: Click the **Create** button to proceed with creation. 

![Hosting](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img9.png)

Step 6: Click the **Finish** button to finalize the **Azure Function** creation. 

![Creating app service](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img10.png)

Step 7: Click **Close** button.

![Profile created](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img11.png)

Step 8: Click the **Publish** button.

![Click Publish Button](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img12.png)

Step 15: Publish has been succeeded.

![Publish succeeded](Loading-and-Saving_images/Loadind-and-Saving-Azure-Functions-v4_img13.png)

Step 16: Now, go to Azure portal and select the App Services. After running the service, click **Get function URL by copying it**. Then, paste it in the below client sample (which will request the Azure Functions, to perform **Loading and Saving Excel files** using the template Excel document). You will get the output PDF document as follows.   

![Output File](Loading-and-Saving_images/Loading-and-Saving_images_img30.png)

A complete working example of how to load and save an Excel document in Azure Functions v4 in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Loading%20and%20Saving/Azure/Azure%20Functions%20v4/Loading%20and%20Saving).

Click [here](https://www.syncfusion.com/document-processing/excel-framework/net-core) to explore the rich set of Syncfusion&reg; Excel library (XlsIO) features.

An online sample link to [create an Excel document](https://ej2.syncfusion.com/aspnetcore/Excel/Create#/material3) in ASP.NET Core.