---
title: Create or Generate PDF document in AWS Lambda | Syncfusion
description: Learn how to create or generate a PDF file in AWS Lambda using Syncfusion .NET Core PDF library without the dependency of Adobe Acrobat. 
platform: document-processing
control: PDF
documentation: UG
keywords: aws lambda create pdf, aws edit pdf, merge, pdf form, fill form, digital sign, table, c#, dotnet core pdf, asp generate pdf, aspx generate pdf
---

# Create a PDF Document in AWS Lambda

The [.NET Core PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) creates, reads, and edits PDF documents programmatically, with no dependency on Adobe Acrobat. You can use this library to create, read, and edit PDF documents in AWS Lambda.

## Prerequisites

- An active **Amazon Web Services (AWS) account**. If you don't have one, [create an account](https://aws.amazon.com/) before starting.
- **.NET SDK 8.0** or later installed locally.
- **Visual Studio 2022** with the **AWS Toolkit for Visual Studio** extension, installed from the [AWS Visual Studio download page](https://aws.amazon.com/visualstudio/) or from the **Extensions > Manage Extensions** dialog. Configure an AWS credential profile in **AWS Explorer** (or run `aws configure` from the AWS CLI) before proceeding.
- A **Syncfusion<sup>&reg;</sup> license key** — register it in your application using `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")`. For Lambda, store the key in an environment variable (for example, `SYNCFUSION_LICENSE_KEY`) and read it at function startup. For details, see the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview).
- The **[Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core)** NuGet package installed in the project. (`Syncfusion.Pdf.Imaging.Net.Core` is a smaller imaging-only package; for the full API surface used in this tutorial, use `Syncfusion.Pdf.Net.Core`.)
- A sample input PDF named `Input.pdf` placed in the project's `Data/` folder with **Copy to Output Directory** set to **Copy if newer**.

## Step to create a PDF document in AWS Lambda

**Step 1:** In Visual Studio, create a new **AWS Lambda Project (.NET Core)**.
![Create an AWS Lambda project in Visual Studio](GettingStarted_images/AWS_Project.png)

**Step 2:** Select **Empty Function** as the blueprint, then click **Finish**.
![Select Empty Function blueprint](GettingStarted_images/Blueprint_AWS.png)

**Step 3:** Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) NuGet package from [NuGet.org](https://www.nuget.org/). Use the latest stable version compatible with .NET 6 or later.
![Install the Syncfusion.Pdf.Net.Core NuGet package](GettingStarted_images/NuGetPackageAWSLambda.png)

N> If you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or the NuGet feed, you must add a reference to the `Syncfusion.Licensing` assembly and include a valid license key in your project. See the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details on registering the license key.

**Step 4:** Create a folder named `Data`, copy the sample `Input.pdf` into it, and include the folder in the project. (`Input.pdf` is provided in the [GitHub sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/AWS/AWSLambdaProject).)
![Create the Data folder](GettingStarted_images/Data-Folder.png)

**Step 5:** Select each data file in **Solution Explorer**, open the **Properties** window, and set **Copy to Output Directory** to **Copy if newer**.
![Set Copy to Output Directory to Copy if newer](GettingStarted_images/Document-property-AWS-lambda.png)

**Step 6:** Include the following namespaces in `Function.cs`. The `Syncfusion.Pdf.Parsing` namespace provides the `PdfLoadedDocument` and `PdfLoadedPage` types used to open and edit an existing PDF; `Syncfusion.Drawing` provides `RectangleF` on .NET Core.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Grid;

{% endhighlight %}
{% endtabs %}

**Step 7:** In `Function.cs`, add the following code inside the `FunctionHandler` method to open `Data/Input.pdf`, draw a `PdfGrid` of sample data on the first page, and return the result as a base64 string. The `RectangleF(40, 400, page.Size.Width - 80, 0)` coordinates place the grid 40 px from the page edges and 400 px from the top.

{% tabs %}
{% highlight c# tabtitle="C#" %}

string filePath = Path.GetFullPath(@"Data/Input.pdf");
//Open an existing PDF document.
using (FileStream stream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
{
    PdfLoadedDocument document = new PdfLoadedDocument(stream);

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

    //Save the document into stream.
    MemoryStream memoryStream = new MemoryStream();
    document.Save(memoryStream);
    //Close the document.
    document.Close(true);
    //return the stream as base64 string
    return Convert.ToBase64String(memoryStream.ToArray());
}

{% endhighlight %}
{% endtabs %}

**Step 8:** Right-click the project and choose **Publish to AWS Lambda**.

N> AWS Lambda runs on Amazon Linux 2. `Syncfusion.Pdf.Net.Core` depends on SkiaSharp native assets, so add the `SkiaSharp.NativeAssets.Linux` package (or a Lambda Layer) and install `libfontconfig` and `libgdiplus` in the deployment package. Without these, the function fails at runtime with `DllNotFoundException` or font-rendering errors.

![Publish to AWS Lambda menu option](GettingStarted_images/Publish.png)

**Step 9:** In the **Upload Lambda Function** window, select an existing AWS profile (or create one via **AWS Explorer**), then choose **Create new function** for a fresh deployment or **Re-deploy to the existing Lambda function** to update a running app. Click **Next** to continue.
![Upload Lambda Function window](GettingStarted_images/Upload-Lampda.png)

**Step 10:** On the **Advanced Function Details** screen, choose an existing IAM role or create a new one based on the `AWSLambdaBasicExecutionRole` AWS managed policy (required for CloudWatch Logs access). In the **Basic settings** section, set **Memory** to at least 512 MB and **Timeout** to at least 30 s. Click **Upload** to deploy.
![Advanced Function Details window](GettingStarted_images/Advanced-AWS.png)

**Step 11:** After deployment, open the function in the AWS console to verify the status, then create a test event (for example, with the payload `"\"Test\""`) and click **Test** to invoke it.
![Published Lambda function in the AWS console](GettingStarted_images/AWS-Lambda-Function.png)


## Step to invoke the Lambda function from a console application

**Step 1:** In Visual Studio, create a new .NET 6+ console project.
![Create a console project in Visual Studio](GettingStarted_images/Console-APP.png)

**Step 2:** Install the following NuGet packages from [NuGet.org](https://www.nuget.org/).

* [AWSSDK.Core](https://www.nuget.org/packages/AWSSDK.Core/)
* [AWSSDK.Lambda](https://www.nuget.org/packages/AWSSDK.Lambda/)
* [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) (optional on .NET 6+ if you prefer the built-in `System.Text.Json`)

N> The AWS access keys are loaded from the default credential chain by leaving the `AmazonLambdaClient` constructor empty. Hard-coding credentials in source code is a security risk; prefer IAM roles, environment variables, or the AWS shared credentials file.

![Install Nuget Package](GettingStarted_images/AWSSDKCore-nuget.png)

![Install Nuget Package](GettingStarted_images/AWSSDKLambda-nuget.png)

![Install Nuget Package](GettingStarted_images/NewtonsoftJson-nuget.png)

Step 3: Include the following namespaces in Program.cs file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Amazon;
using Amazon.Lambda;
using Amazon.Lambda.Model;
using Newtonsoft.Json;
using System.IO;

{% endhighlight %}
{% endtabs %}

Step 4: Add the following code sample in Program.cs to invoke the published AWS Lambda function using the function name and access keys.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Create a new AmazonLambdaClient
AmazonLambdaClient client = new AmazonLambdaClient("awsaccessKeyID", "awsSecreteAccessKey", RegionEndpoint.USEast1);
//Create new InvokeRequest with published function name.
InvokeRequest invoke = new InvokeRequest
{
    FunctionName = "MyNewFunction", //Add your lambda function name here
    InvocationType = InvocationType.RequestResponse,
    Payload = "\"Test\""
};
//Get the InvokeResponse from client InvokeRequest
InvokeResponse response = await client.InvokeAsync(invoke);
//Read the response stream
var stream = new StreamReader(response.Payload);
//Deserialize the response stream
JsonReader reader = new JsonTextReader(stream);
JsonSerializer serializer = new JsonSerializer();
var responseText = serializer.Deserialize(reader);

//Convert Base64String into byte array
byte[] bytes = Convert.FromBase64String(responseText.ToString());

//Write the byte array into a file
FileStream fileStream = new FileStream("Sample.pdf", FileMode.Create);
fileStream.Write(bytes, 0, bytes.Length);
fileStream.Flush();
fileStream.Dispose();

System.Diagnostics.Process.Start(new System.Diagnostics.ProcessStartInfo() { FileName = "Sample.pdf", UseShellExecute = true });

{% endhighlight %}
{% endtabs %}

Running the program produces the following PDF document.
![Output PDF document](GettingStarted_images/Output.png)

Download the [console application sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/AWS/ConsoleApp) and the [AWS Lambda sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/AWS/AWSLambdaProject) from GitHub.

Explore the [Syncfusion<sup>&reg;</sup> PDF library features](https://www.syncfusion.com/document-sdk/net-pdf-library) to learn more about merging, splitting, securing, and stamping PDF files.

An online sample demonstrating how to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.

## Troubleshooting

- **Watermark appears in the output PDF** — Your Syncfusion<sup>&reg;</sup> license key is not registered. Call `SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` at function startup, or load the key from the `SYNCFUSION_LICENSE_KEY` environment variable configured in the Lambda function's **Configuration > Environment variables**.
- **`Task timed out after X seconds`** — Increase the Lambda function **Timeout** (recommended: 30 s for typical PDF generation) and **Memory** (recommended: 512 MB minimum) in the **Basic settings** panel.
- **`TypeInitializationException` or `DllNotFoundException` for SkiaSharp** — Add the `SkiaSharp.NativeAssets.Linux` NuGet package and deploy it together with the function. On Amazon Linux 2, also include `libfontconfig` and `libgdiplus` in a Lambda Layer.
- **`Data/Input.pdf` not found at runtime** — Verify the file is in the project's `Data/` folder, included in the deployment package, and that **Copy to Output Directory** is set to **Copy if newer**.
- **`AccessDeniedException` when calling the Lambda** — Attach an IAM role to the console caller with `lambda:InvokeFunction` permission on the target function.
- **Cold start latency** — Enable [Provisioned Concurrency](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html) for production workloads, or move to a container-based service (ECS / Fargate) for consistent startup times.
- **AWS Toolkit does not detect credentials** — Run `aws configure` from the AWS CLI, or set the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables before opening Visual Studio.
- **`System.Diagnostics.Process.Start` fails on Linux** — The `UseShellExecute` option is Windows-only. On Linux, write the PDF to a file and let the user open it manually, or use `xdg-open` via `Process.Start("xdg-open", filePath)`.

## See also

- [Create a PDF File on AWS](create-pdf-file-in-aws)
- [Create a PDF File in AWS Elastic Beanstalk](create-pdf-file-in-aws-elastic-beanstalk)
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