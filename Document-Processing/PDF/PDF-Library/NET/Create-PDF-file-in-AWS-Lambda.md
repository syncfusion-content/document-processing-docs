---
title: Create or Generate PDF document in AWS Lambda | Syncfusion
description: Learn how to create or generate a PDF file in AWS Lambda using Syncfusion .NET Core PDF library without the dependency of Adobe Acrobat. 
platform: document-processing
control: PDF
documentation: UG
keywords: aws lambda create pdf, aws edit pdf, merge, pdf form, fill form, digital sign, table, c#, dotnet core pdf, asp generate pdf, aspx generate pdf
---

# Create PDF document in AWS Lambda

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents programmatically without the dependency of Adobe Acrobat. Using this library, you can open and save PDF documents in AWS Lambda.

## Prerequisites

* An active **Amazon Web Services (AWS) account** is required. If you don't have one, please [create an account](https://aws.amazon.com/) before starting.
* Download and install the **AWS Toolkit** for Visual Studio from this [link](https://aws.amazon.com/visualstudio/). You can install the toolkit from the **Extensions > Manage Extensions** option in Visual Studio.
* Visual Studio 2022 with the **AWS development** workload.
* An active Syncfusion license. If you do not have one, request a free 30-day trial at [https://www.syncfusion.com/sales/communitylicense](https://www.syncfusion.com/sales/communitylicense).

## Steps to create a PDF document in AWS Lambda

Step 1: Create a new **AWS Lambda project** as follows.
![AWS Lambda project](GettingStarted_images/AWS_Project.png)

Step 2: Select Blueprint as Empty Function and click **Finish**.
![Select Blueprint as Empty Function](GettingStarted_images/Blueprint_AWS.png)

Step 3: Install the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages?q=Syncfusion.Pdf.Imaging.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).
![Install NuGet package](GettingStarted_images/NuGetPackageAWSLambda.png)

Step 4: Register the Syncfusion<sup>&reg;</sup> license key. A trial watermark is added to every page of the generated PDF until a valid key is registered. Include the license key in **Function.cs** before initializing any Syncfusion<sup>&reg;</sup> component:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using6Syncfusion.Licensing;

public class Function
{
    public string FunctionHandler(string input)
    {
        // Register the Syncfusion license
        Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");

        // ... rest of the function body ...
    }
}

{% endhighlight %}
{% endtabs %}

Replace `"YOUR LICENSE KEY"` with the license key associated with your Syncfusion<sup>&reg;</sup> account. If you do not have a license key, you can request a free 30-day trial or apply for a Community License from the Syncfusion<sup>&reg;</sup> website. For more information about registering a license key in your application, refer to the [Syncfusion<sup>&reg;</sup> Licensing Documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview).

Step 5: Create a folder and copy the required data files and include the files in the project.
![Create a folder](GettingStarted_images/Data-Folder.png)

Step 6: Set the copy to output directory to Copy if newer to all the data files.
![Property change for data files](GettingStarted_images/Document-property-AWS-lambda.png)

Step 7: Include the following namespaces in the **Function.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Grid;

{% endhighlight %}
{% endtabs %}

Step 8: Add the following code in Function.cs to open the PDF document and update in AWS Lambda.

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

N> The function returns the PDF as a base64-encoded string. When the Lambda is invoked synchronously, AWS wraps the return value in a JSON string, so the caller receives a JSON-quoted base64 string (e.g., `"JVBERi0xLjQK..."`). Strip the surrounding quotes before calling `Convert.FromBase64String` in the caller.

Step 9: Right-click the project and select Publish to AWS Lambda.
![Publish to AWS Lambda](GettingStarted_images/Publish.png)

Step 10: Add the AWS profile in the Upload Lambda Function Window. After creating the profile, Choose Create new function or Re-deploy to the existing Lambda function to publish. Then, click Next.
![Upload Lambda Function](GettingStarted_images/Upload-Lampda.png)

Step 11: In the Advanced Function Details window, specify the Role Name based on AWS Managed policy. And edit the memory size and Timeout as maximum in Basic settings of the AWS Lambda function. Then, click Upload to deploy your application.
![Advance Function Details](GettingStarted_images/Advanced-AWS.png)

Step 12: See the published Lambda function in the AWS console after deploying the application.
![After deploying the application](GettingStarted_images/AWS-Lambda-Function.png)


**Steps to post the request to AWS Lambda**

Follow these steps to submit a request to the AWS Lambda function.

Step 1: Create a new console project.
![Create a console project](GettingStarted_images/Console-APP.png)

Step 2: Install the following NuGet packages in your application from [NuGet.org](https://www.nuget.org/).

* [AWSSDK.Core](https://www.nuget.org/packages/AWSSDK.Core/)
* [AWSSDK.Lambda](https://www.nuget.org/packages/AWSSDK.Lambda/)
* [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/)

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

By executing the program, you will get the PDF document as follows.

![Open and save a PDF document in AWS Lambda](GettingStarted_images/Output.png)

Users can download the [console application](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/AWS/ConsoleApp) and [AWS Lambda](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/AWS/AWSLambdaProject) project from GitHub.

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.

An online sample link to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind).

## Next steps

* [Create a PDF in AWS Elastic Beanstalk](Create-PDF-file-in-AWS-Elastic-Beanstalk.md)
* [Create a PDF in ASP.NET Core MVC](Create-PDF-file-in-ASP-NET-Core.md)
* [Create a PDF in Docker](Create-PDF-document-in-Docker.md)
* [Open and read an existing PDF document](Open-PDF-file.md)
* [Save the generated PDF to a file or stream](Save-PDF-file.md)