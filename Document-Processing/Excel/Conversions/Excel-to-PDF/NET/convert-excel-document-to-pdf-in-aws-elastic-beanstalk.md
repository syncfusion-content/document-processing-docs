---
title: Convert Excel to PDF in AWS Elastic Beanstalk | Syncfusion
description: Convert Excel to PDF in AWS Elastic Beanstalk using .NET Core Excel (XlsIO) library without Microsoft Excel or interop dependencies.
platform: document-processing
control: XlsIO
documentation: UG
---

# Convert Excel document to PDF in AWS Elastic Beanstalk

Syncfusion<sup>&reg;</sup> XlsIO is a [.NET Core Excel library](https://www.syncfusion.com/document-processing/excel-framework/net-core) used to create, read, edit and **convert Excel documents** programmatically without **Microsoft Excel** or interop dependencies. Using this library, you can **convert a Excel document to PDF in AWS Elastic Beanstalk**.

## Steps to convert Excel document to PDF in AWS Elastic Beanstalk

Step 1: Create a new ASP.NET Core Web application (Model-View-Controller) project.

![Create ASP.NET Core Web application in Visual Studio](AWS_Images/Elastic_Beanstalk_Images/Elastic_Beanstalk_Img1.png)

Step 2: Install the following **Nuget packages** in your application from [Nuget.org](https://www.nuget.org/).

* [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) 
* [SkiaSharp.NativeAssets.Linux.NoDependencies v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.116.1)

![Install Syncfusion.XlsIORenderer.Net.Core NuGet package](AWS_Images/Elastic_Beanstalk_Images/Elastic_Beanstalk_Img2.png)
![Install SkiaSharp.NativeAssets.Linux.NoDependencies v3.116.1 NuGet Package](AWS_Images/Elastic_Beanstalk_Images/Elastic_Beanstalk_Img3.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Include the following namespaces in the **HomeController.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;
using Syncfusion.Pdf;
using Syncfusion.XlsIO.Implementation;

{% endhighlight %}
{% endtabs %}

Step 4: A default action method named Index will be present in HomeController.cs. Right click on Index method and select **Go To View** where you will be directed to its associated view page **Index.cshtml**.

Step 5: Add a new button in the **Index.cshtml** as shown below.

{% tabs %}
{% highlight c# tabtitle="C#" %}

@{
    Html.BeginForm("ConvertExceltoPDF", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Convert ExceltoPDF" style="width:150px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}
{% endtabs %}

Step 6: Include the below code snippet in the **Homecontroller.cs** file to **convert a Excel document to Pdf** and download it.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public IActionResult ConvertExceltoPDF()
{
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        //Initializes the SubstituteFont event to perform font substitution during Excel-to-PDF conversion
        application.SubstituteFont += new SubstituteFontEventHandler(SubstituteFont);

        FileStream excelStream = new FileStream(@"Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
        IWorkbook workbook = application.Workbooks.Open(excelStream);

        //Initialize XlsIO renderer.
        XlsIORenderer renderer = new XlsIORenderer();

        //Convert Excel document into PDF document 
        PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

        //Create the MemoryStream to save the converted PDF.      
        MemoryStream pdfStream = new MemoryStream();

        //Save the converted PDF document to MemoryStream.
        pdfDocument.Save(pdfStream);
        pdfStream.Position = 0;
        //Download PDF document in the browser
        return File(pdfStream, "application/pdf", "Sample.pdf");
    }
}

private static void SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    string filePath = string.Empty;
    FileStream fileStream = null;

    if (args.OriginalFontName == "Calibri")
    {
        filePath = Path.GetFullPath(@"Data/calibri.ttf");
        fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
        args.AlternateFontStream = fileStream;
    }
}

{% endhighlight %}
{% endtabs %}

## Steps to publish as AWS Elastic Beanstalk

Step 1: Right-click the project and select **Publish to AWS Elastic Beanstalk (Legacy)** option.
![Right-click the project and select the Publish option](AWS_Images/Elastic_Beanstalk_Images/Elastic_Beanstalk_Img4.png)

Step 2: Select the **Deployment Target** as **Create a new application environment** and click **Next** button.
![Deployment Target in AWS Ealastic Beanstalk](AWS_Images/Elastic_Beanstalk_Images/Elastic_Beanstalk_Img5.png)

Step 3: Choose the **Environment Name** in the dropdown list and the **URL** will be automatically assign and check the URL is available, if available click next otherwise change the **URL**. 
![Application Environment in AWS Elastic Beanstalk](AWS_Images/Elastic_Beanstalk_Images/Elastic_Beanstalk_Img6.png)

Step 4: Select the instance type in **t3a.micro** from the dropdown list and click next.
![Application Environment in AWS Elastic Beanstalk](AWS_Images/Elastic_Beanstalk_Images/Elastic_Beanstalk_Img7.png)

Step 5: Click the **Next** button to proceed further.
![Application Environment in AWS Elastic Beanstalk](AWS_Images/Elastic_Beanstalk_Images/Elastic_Beanstalk_Img8.png)

Step 6: Click the **Next** button.
![Application Options in AWS Elastic Beanstalk](AWS_Images/Elastic_Beanstalk_Images/Elastic_Beanstalk_Img9.png)

Step 7: Click the **Deploy** button to deploy the sample on AWS Elastic Beanstalk.
![Deploy the sample in AWS Elastic Beanstalk](AWS_Images/Elastic_Beanstalk_Images/Elastic_Beanstalk_Img10.png)

Step 8: After changing the status from **Updating** to **Environment is healthy**, click the **URL**.
![Status check in AWS Elastic Beanstalk](AWS_Images/Elastic_Beanstalk_Images/Elastic_Beanstalk_Img11.png)

Step 9: After opening the provided **URL**, click **Convert ExceltoPDF** button to download the PDF document.
![Click button to Convert Word to PDF](AWS_Images/Elastic_Beanstalk_Images/Elastic_Beanstalk_Img12.png)

You can download a complete working sample from [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/AWS/AWS%20Elastic%20Beanstalk/ConvertExceltoPDF).

By executing the program, you will get the **PDF document** as follows.

![Word to PDF in AWS Elastic Beanstalk](AWS_Images/Lambda_Images/ExcelToPDF_AWS_Lambda.png)

Click [here](https://www.syncfusion.com/document-processing/excel-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> Excel library (XlsIO) features.

An online sample link to [convert an Excel document to PDF](https://ej2.syncfusion.com/aspnetcore/Excel/ExcelToPDF#/material3) in ASP.NET Core.