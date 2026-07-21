---
title: Create or Generate PDF document in AWS Elastic Beanstalk | Syncfusion
description: Learn how to create or generate a PDF file in AWS Elastic Beanstalk using Syncfusion .NET Core PDF library without the dependency of Adobe Acrobat. 
platform: document-processing
control: PDF
documentation: UG
keywords: aws elastic beanstalk create pdf, aws edit pdf, merge, pdf form, fill form, digital sign, table, c#, dotnet core pdf, asp generate pdf, aspx generate pdf
---

# Create a PDF Document in AWS Elastic Beanstalk

The [.NET Core PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) creates, reads, and edits PDF documents programmatically, with no dependency on Adobe Acrobat. You can use this library to create, read, and edit PDF documents in AWS Elastic Beanstalk.

## Prerequisites

- An active **Amazon Web Services (AWS) account**. If you don't have one, [create an account](https://aws.amazon.com/) before starting.
- **.NET SDK 8.0** or later installed locally.
- **Visual Studio 2022** with the **ASP.NET and web development** workload, or **Visual Studio Code** with the C# Dev Kit extension.
- **AWS Toolkit for Visual Studio**, installed from the [AWS Visual Studio download page](https://aws.amazon.com/visualstudio/) or from the **Extensions > Manage Extensions** dialog. Configure an AWS credential profile in **AWS Explorer** (or run `aws configure` from the AWS CLI) before proceeding.
- A **Syncfusion<sup>&reg;</sup> license key** — register it in your application using `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")`. For Elastic Beanstalk, store the key in an environment variable (for example, `SYNCFUSION_LICENSE_KEY`) and read it at application startup. For details, see the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview).
- The **[Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core)** NuGet package installed in the project.
- A sample input PDF named `Input.pdf` placed in the project's `Data/` folder with **Copy to Output Directory** set to **Copy if newer**.

## Step to create a PDF document in AWS Elastic Beanstalk

**Step 1:** In Visual Studio, create a new **ASP.NET Core Web Application** project and choose the **MVC** template.
![Create ASP.NET Core Web Application in Visual Studio](GettingStarted_images/Create-Project.png)

**Step 2:** In the configuration window, name your project and select **Next**. On the next screen, leave the default settings (Authentication: No Authentication, Configure for HTTPS: checked) and select **Create**.
![Configure the project name](GettingStarted_images/AWS-Elastic-Beanstalk-Project.png)

![Select additional project settings](GettingStarted_images/AWS-Elastic-Beanstalk-Configuration.png)

**Step 3:** Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core/) NuGet package from [NuGet.org](https://www.nuget.org/). Use the latest stable version compatible with .NET 6 or later.
![Install the Syncfusion.Pdf.Net.Core NuGet package](GettingStarted_images/NuGet-Package-AWS-Elastic-Beanstalk.png)

**Step 4:** When you choose the MVC template, Visual Studio adds a default `HomeController.cs`. Include the following namespaces in that file. The `Syncfusion.Pdf.Parsing` namespace provides the `PdfLoadedDocument` and `PdfLoadedPage` types used to open and edit an existing PDF; `Syncfusion.Drawing` provides `RectangleF` on .NET Core.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Drawing;

{% endhighlight %}
{% endtabs %}

**Step 5:** In `Index.cshtml`, add the following button.

N> The `Html.BeginForm` / `Html.EndForm` HTML helpers used below are the legacy syntax. Modern ASP.NET Core supports tag helpers; consider `<form asp-action="CreatePDF" asp-controller="Home" method="get">` for new projects.

{% tabs %}
{% highlight CSHTML %}

@{
Html.BeginForm("CreatePDF", "Home", FormMethod.Get);
{
    <div>
        <input type="submit" value="Create PDF" style="width:150px;height:27px" />
        <br />
        <div class="text-danger">
            @ViewBag.Message
        </div>
    </div>
}
Html.EndForm();
}

{% endhighlight %}
{% endtabs %}

**Step 6:** In `HomeController.cs`, add a new action method named `CreatePDF` and include the following code. The action opens an existing PDF (`Data/Input.pdf`), draws a `PdfGrid` of sample data on the first page, and returns the result as a downloadable PDF. The `RectangleF(40, 400, page.Size.Width - 80, 0)` coordinates place the grid 40 px from the page edges and 400 px from the top.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public IActionResult CreatePDF()
{
    //Open an existing PDF document.
    FileStream fileStream = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
    PdfLoadedDocument document = new PdfLoadedDocument(fileStream);

    //Get the first page from a document.
    PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

    //Create PDF graphics for the page.
    PdfGraphics graphics = page.Graphics;

    //Create a PdfGrid.
    PdfGrid pdfGrid = new PdfGrid();
    //Add values to the list.
    List<object> data = new List<object>();
    data.Add(new { Product_ID = "1001", Product_Name = "Bicycle", Price = "10,000" });
    data.Add(new { Product_ID = "1002", Product_Name = "Head Light", Price = "3,000" });
    data.Add(new { Product_ID = "1003", Product_Name = "Break wire", Price = "1,500" });

    //Assign data source.
    pdfGrid.DataSource = data;

    //Apply built-in table style.
    pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent3);

    //Draw the grid to the page of PDF document.
    pdfGrid.Draw(graphics, new RectangleF(40, 400, page.Size.Width - 80, 0));
    //Create the memory stream.
    MemoryStream stream = new MemoryStream();
    //Save the document to the memory stream.
    document.Save(stream);
    //Close the document
    document.Close(true); 
    //Return the PDF file as a download
    return File(stream.ToArray(), System.Net.Mime.MediaTypeNames.Application.Pdf, "Output.pdf");
}

{% endhighlight %}
{% endtabs %}

**Step 7:** Right-click the project and choose **Publish to AWS Elastic Beanstalk (Legacy)** to open the deployment wizard.

N> AWS Elastic Beanstalk for .NET is in maintenance mode. For new projects, consider the [AWS Deploy Tool for .NET](https://docs.aws.amazon.com/sdk-for-net/v4/developer-guide/welcome.html) (`dotnet aws deploy`), or [deploy as a container to Amazon ECS / Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html).

![Publish to AWS Elastic Beanstalk menu option](GettingStarted_images/Publish-AWS-Elastic-Beanstalk.png)

**Step 8:** In the **Publish to AWS Elastic Beanstalk** window, select an existing AWS profile (or create one via **AWS Explorer**), then choose **Create a new application environment** for a fresh deployment or **Re-deploy to an existing environment** to update a running app. Click **Next** to continue.
![Publish to AWS Elastic Beanstalk window](GettingStarted_images/Publish-to-AWS-Elastic-Beanstalk.png)

**Step 9:** On the **Application Options** screen, verify the environment name, URL, and instance type, then click **Next**.
![Application Options window](GettingStarted_images/Application-Options-Window.png)

**Step 10:** On the **Review** screen, verify the configuration, then click **Deploy** to upload and start the environment.
![Deploy from the Review window](GettingStarted_images/Deploy-From-the-Review-Window.png)

**Step 11:** After deployment, wait until the environment status changes to **Healthy**, then click the URL to launch the application.
![Launch application window](GettingStarted_images/Launch-Application-Window.png)

**Step 12:** The application opens in the browser. Click **Create PDF** to download the generated PDF document.
![Console page of the deployed application](GettingStarted_images/Console-Page-AWS-Elastic-Beanstalk.png)

Running the program produces the following PDF document.
![Output PDF document](GettingStarted_images/Output.png)

Download the [complete Elastic Beanstalk sample from GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/AWS/AWSElasticBeanstalk).

Explore the [Syncfusion<sup>&reg;</sup> PDF library features](https://www.syncfusion.com/document-sdk/net-pdf-library) to learn more about merging, splitting, securing, and stamping PDF files.

An online sample demonstrating how to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.

## Troubleshooting

- **Watermark appears in the output PDF** — Your Syncfusion<sup>&reg;</sup> license key is not registered. Call `SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` at application startup, or load the key from the `SYNCFUSION_LICENSE_KEY` environment variable configured in **Elastic Beanstalk > Configuration > Software > Environment properties**.
- **Environment status is `Severe` / `Degraded`** — Open the **Logs** tab in the Elastic Beanstalk console to download the instance log bundle. Common causes: missing `libgdiplus` / `libfontconfig` on the Linux instance, or the Syncfusion license key not being read from the environment variable.
- **Deployment fails with `dotnet publish` errors** — Ensure the project's target framework matches the Elastic Beanstalk platform version (for example, .NET 6 on **64-bit Amazon Linux 2** running .NET 6).
- **`Data/Input.pdf` not found at runtime** — Verify the file is in the project's `Data/` folder and that **Copy to Output Directory** is set to **Copy if newer**.
- **AWS Toolkit does not detect credentials** — Run `aws configure` from the AWS CLI, or set the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables before opening Visual Studio.
- **Deployment succeeds but the application URL returns 502 / 504** — Increase the instance type in **Application Options** (for example, from `t3.micro` to `t3.small`) or enable [rolling deployments](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html) to avoid downtime.
- **`TypeInitializationException` for SkiaSharp** — Install the `SkiaSharp.NativeAssets.Linux` package alongside `Syncfusion.Pdf.Net.Core` so the native binaries are deployed to the Amazon Linux 2 instance.

## See also

- [Create a PDF File on AWS Lambda](create-pdf-file-in-aws-lambda)
- [Create a PDF File on AWS](create-pdf-file-in-aws)
- [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required)
- [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required)
- [Syncfusion<sup>&reg;</sup> Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
- [Create a PDF file in ASP.NET Core](create-pdf-file-in-asp-net-core)
- [Create a PDF file in Docker](create-pdf-document-in-docker)
- [Open and read PDF files](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/open-pdf-files)
- [Merge PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/merge-documents)
- [Split PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/split-documents)
- [Working with PDF forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-forms)
- [Working with security and permissions](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-security)
- [Working with stamps and watermarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-watermarks)
- [Syncfusion<sup>&reg;</sup> PDF library — Demos](https://document.syncfusion.com/demos/pdf/default)