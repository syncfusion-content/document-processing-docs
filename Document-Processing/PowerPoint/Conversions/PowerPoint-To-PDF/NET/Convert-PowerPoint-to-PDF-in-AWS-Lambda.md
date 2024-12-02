---
title: Convert PPTX to PDF in AWS Lambda | Syncfusion&reg;
description: Convert PPTX to PDF in AWS Lambda using .NET Core PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Convert PowerPoint Presentation to PDF in AWS Lambda

Syncfusion&reg; PowerPoint is a [.NET Core PowerPoint library](https://www.syncfusion.com/document-processing/powerpoint-framework/net-core) used to create, read, edit and **convert PowerPoint documents** programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **convert a PowerPoint Presentation to PDF in AWS Lambda**.

## Steps to convert PowerPoint Presentation to PDF in AWS Lambda

Step 1: Create a new **AWS Lambda project** as follows.
![AWS Lambda project](AWS_Images/Lambda_Images/Project-Template-PowerPoint-Presentation-to-PDF.png)

Step 2: Select Blueprint as Empty Function and click **Finish**.
![Select Blueprint as Empty Function](AWS_Images/Lambda_Images/Blueprint-AWS-PowerPoint-Presentation-to-PDF.png)

Step 3: Install the following **Nuget packages** in your application from [Nuget.org](https://www.nuget.org/).

* [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core)
* [SkiaSharp.NativeAssets.Linux.NoDependencies v2.88.8](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/2.88.8)

![Install Syncfusion.PresentationRenderer.Net.Core Nuget Package](Azure-Images/App-Service-Linux/Nuget_Package_PowerPoint_Presentation_to_PDF.png)

![Install SkiaSharp.NativeAssets.Linux.NoDependencies v2.88.8 Nuget Package](AWS_Images/Lambda_Images/SkiaSharp-Nuget-Package-PPTXtoPDF.png)

N> Starting with v16.2.0.x, if you reference Syncfusion&reg; assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion&reg; license key in your application to use our components.

Step 4: Create a folder and copy the required data files and include the files to the project.
![Create a folder](AWS_Images/Lambda_Images/Data-Folder-PowerPoint-Presentation-to-PDF.png)

Step 5: Set the **copy to output directory** to **Copy if newer** to all the data files.
![Property change for data files](AWS_Images/Lambda_Images/Property-PowerPoint-Presentation-to-PDF.png)

Step 6: Add the following environment variable in the **aws-lambda-tools-defaults.json** file to specify the library search paths for the AWS Lambda function. This configuration sets the **LD_LIBRARY_PATH**, allowing the application to locate the required native libraries at runtime.

{% tabs %}

{% highlight json tabtitle="JSON" %}

"environment-variables": "\"LD_LIBRARY_PATH\"=\"/var/task:/tmp:/lib64:/usr/lib64\""

{% endhighlight %}

{% endtabs %}

Step 7: Defining library paths in an AWS Lambda project enables the application to locate the necessary native libraries at runtime. This is essential for ensuring that the application functions correctly across different environments. The following code snippet illustrates how to define these paths.

{% tabs %}

{% highlight c# tabtitle="C#" %}

//Path to the original library file.
string originalLibraryPath = "/lib64/libdl.so.2";

//Path to the symbolic link where the library will be copied.
string symlinkLibraryPath = "/tmp/libdl.so";

{% endhighlight %}

{% endtabs %}

Step 8: Include the following namespaces in **Function.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;
using Syncfusion.PresentationRenderer;
using Syncfusion.Pdf;
using Syncfusion.Drawing;

{% endhighlight %}
{% endtabs %}

step 9: Add the following code snippet in **Function.cs** to **convert a PowerPoint Presentation to PDF**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

/// <summary>
/// A simple function that takes a string and does a ToUpper
/// </summary>
/// <param name="input"></param>
/// <param name="context"></param>
/// <returns></returns>
public string FunctionHandler(string input, ILambdaContext context)
{
    //Path to the original library file.
    string originalLibraryPath = "/lib64/libdl.so.2";

    //Path to the symbolic link where the library will be copied.
    string symlinkLibraryPath = "/tmp/libdl.so";

    //Check if the original library file exists.
    if (File.Exists(originalLibraryPath))
    {
        //Copy the original library file to the symbolic link path, overwriting if it already exists.
        File.Copy(originalLibraryPath, symlinkLibraryPath, true);
    }

    string filePath = Path.GetFullPath(@"Data/Input.pptx");
    //Open the file as Stream
    using (FileStream fileStreamInput = new FileStream(filePath, FileMode.Open, FileAccess.Read))
    {
        //Open the existing PowerPoint presentation with loaded stream.
        using (IPresentation pptxDoc = Presentation.Open(fileStreamInput))
        {
            //Hooks the font substitution event.
            pptxDoc.FontSettings.SubstituteFont += FontSettings_SubstituteFont;
            //Convert the PowerPoint document to PDF document.
            using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
            {
                //Create the MemoryStream to save the converted PDF.
                MemoryStream pdfStream = new MemoryStream();
                //Save the converted PDF document to MemoryStream.
                pdfDocument.Save(pdfStream);
                //Unhooks the font substitution event after converting to PDF.
                pptxDoc.FontSettings.SubstituteFont -= FontSettings_SubstituteFont;
                pdfStream.Position = 0;
                return Convert.ToBase64String(pdfStream.ToArray());
            }
        }           
    }
}

//Set the alternate font when a specified font is not installed in the production environment.
private void FontSettings_SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    if (args.OriginalFontName == "Calibri" && args.FontStyle == FontStyle.Regular)
        args.AlternateFontStream = new FileStream(Path.GetFullPath(@"Data/calibri.ttf"), FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
    else
        args.AlternateFontStream = new FileStream(Path.GetFullPath(@"Data/times.ttf"), FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
}

{% endhighlight %}
{% endtabs %}

Step 10: Right-click the project and select **Publish to AWS Lambda**.
![Publish to AWS Lambda](AWS_Images/Lambda_Images/Publish-PowerPoint-Presentation-to-PDF.png)

Step 11: Create a new AWS profile in the Upload Lambda Function Window. After creating the profile, add a name for the Lambda function to publish. Then, click **Next**.
![Upload Lambda Function](AWS_Images/Lambda_Images/Upload-Lampda-PowerPoint-Presentation-to-PDF.png)

Step 12: In the Advanced Function Details window, specify the **Role Name** as based on AWS Managed policy. After selecting the role, click the **Upload** button to deploy your application.
![Advance Function Details](AWS_Images/Lambda_Images/Advanced-AWS-PowerPoint-Presentation-to-PDF.png)

Step 13: After deploying the application, you can see the published Lambda function in **AWS console**.
![After deploying the application](AWS_Images/Lambda_Images/Function-PowerPoint-Presentation-to-PDF.png)

Step 14: Edit Memory size and Timeout as maximum in General configuration of the AWS Lambda function.
![AWS Lambda Function](AWS_Images/Lambda_Images/General-configuration-PowerPoint-Presentation-to-PDF.png)

## Steps to post the request to AWS Lambda

Step 1: Create a new console project.
![Create a console project](AWS_Images/Lambda_Images/Console-APP-PowerPoint-Presentation-to-PDF.png)

step 2: Install the following **Nuget packages** in your application from [Nuget.org](https://www.nuget.org/).

* [AWSSDK.Core](https://www.nuget.org/packages/AWSSDK.Core/)
* [AWSSDK.Lambda](https://www.nuget.org/packages/AWSSDK.Lambda/)
* [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/)
![Install AWSSDK.Core Nuget Package](AWS_Images/Lambda_Images/Nuget-Package-AWSSDK-Core-PowerPoint-Presentation-to-PDF.png)
![Install AWSSDK.Lambda Nuget Package](AWS_Images/Lambda_Images/Nuget-Package-AWSSDK-Lambda-PowerPoint-Presentation-to-PDF.png)
![Install Newtonsoft.Json Nuget Package](AWS_Images/Lambda_Images/Nuget-Package-Newton-Json-PowerPoint-Presentation-to-PDF.png)

Step 3: Include the following namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Amazon;
using Amazon.Lambda;
using Amazon.Lambda.Model;
using Newtonsoft.Json;

{% endhighlight %}
{% endtabs %}

Step 4: Add the following code snippet in **Program.cs** to invoke the published AWS Lambda function using the function name and access keys.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Create a new AmazonLambdaClient
AmazonLambdaClient client = new AmazonLambdaClient("awsaccessKeyID", "awsSecreteAccessKey", RegionEndpoint.USEast2);
//Create new InvokeRequest with published function name.
InvokeRequest invoke = new InvokeRequest
{
    FunctionName = "MyNewFunction",
    InvocationType = InvocationType.RequestResponse,
    Payload = "\"Test\""
};
//Get the InvokeResponse from client InvokeRequest.
InvokeResponse response = client.Invoke(invoke);
//Read the response stream
var stream = new StreamReader(response.Payload);
JsonReader reader = new JsonTextReader(stream);
var serilizer = new JsonSerializer();
var responseText = serilizer.Deserialize(reader);
//Convert Base64String into PDF document.
byte[] bytes = Convert.FromBase64String(responseText.ToString());
FileStream fileStream = new FileStream("Sample.pdf", FileMode.Create);
BinaryWriter writer = new BinaryWriter(fileStream);
writer.Write(bytes, 0, bytes.Length);
writer.Close();
System.Diagnostics.Process.Start("Sample.pdf");

{% endhighlight %}
{% endtabs %}

By executing the program, you will get the **PDF document** as follows.

![PPTX to PDF in AWS Lambda](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-PDF.png)

From GitHub, you can download the [console application](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Convert-PowerPoint-presentation-to-PDF/AWS/Console_Application) and [AWS Lambda](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Convert-PowerPoint-presentation-to-PDF/AWS/AWS_Lambda) project.

Click [here](https://www.syncfusion.com/document-processing/powerpoint-framework/net-core) to explore the rich set of Syncfusion&reg; PowerPoint Library (Presentation) features. 

An online sample link to [convert PowerPoint Presentation to PDF](https://ej2.syncfusion.com/aspnetcore/PowerPoint/PPTXToPDF#/material3) in ASP.NET Core.

