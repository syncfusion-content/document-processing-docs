---
title: Convert Word to Image in AWS Lambda | Syncfusion&reg;
description: Convert Word to image in AWS Lambda using .NET Core Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word Document to Image in AWS Lambda

Syncfusion&reg; DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-processing/word-framework/net-core/word-library) used to create, read, edit and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **convert a Word document to image in AWS Lambda**.

## Steps to convert Word document to Image in AWS Lambda

Step 1: Create a new **AWS Lambda project** as follows.
![AWS Lambda project](AWS_Images/Lambda_Images/Project-Template-WordtoPDF.png)

Step 2: Select Blueprint as Empty Function and click **Finish**.
![Select Blueprint as Empty Function](AWS_Images/Lambda_Images/Blueprint-AWS-WordtoPDF.png)

Step 3: Install the following **Nuget packages** in your application from [Nuget.org](https://www.nuget.org/).

* [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) 
* [SkiaSharp.NativeAssets.Linux.NoDependencies v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.116.1)

![Install Syncfusion.DocIORenderer.Net.Core Nuget Package](ASP-NET-Core_images/NugetPackage.png)
![Install SkiaSharp.NativeAssets.Linux.NoDependencies Nuget Package](AWS_Images/Lambda_Images/SkiaSharp-Nuget-Package-WordtoPDF.png)

N> Starting with v16.2.0.x, if you reference Syncfusion&reg; assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion&reg; license key in your application to use our components.

Step 4: Create a folder and copy the required data files and include the files to the project.
![Create a folder](AWS_Images/Lambda_Images/Data-Folder-WordtoPDF.png)

Step 5: Set the **copy to output directory** to **Copy if newer** to all the data files.
![Property change for data files](AWS_Images/Lambda_Images/Property-WordtoPDF.png)

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

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Drawing;

{% endhighlight %}
{% endtabs %}

step 9: Add the following code snippet in **Function.cs** to **convert a Word document to image**.

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

    string filePath = Path.GetFullPath(@"Data/Input.docx");
    //Open the file as Stream.
    using (FileStream docStream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
    {
        //Loads file stream into Word document.
        using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
        {
            //Hooks the font substitution event.
            wordDocument.FontSettings.SubstituteFont += FontSettings_SubstituteFont;
            //Instantiation of DocIORenderer.
            using (DocIORenderer render = new DocIORenderer())
            {
                //Convert the first page of the Word document into an image.
                Stream imageStream = wordDocument.RenderAsImages(0, ExportImageFormat.Jpeg);
                //Unhooks the font substitution event after converting to image.
                wordDocument.FontSettings.SubstituteFont -= FontSettings_SubstituteFont;
                //Reset the stream position.
                imageStream.Position = 0;
                //Save the document into stream
                MemoryStream stream = new MemoryStream();
                imageStream.CopyTo(stream);
                return Convert.ToBase64String(stream.ToArray());
            }
        }
    }
}

//Set the alternate font when a specified font is not installed in the production environment.
private void FontSettings_SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    if (args.OriginalFontName == "Calibri" && args.FontStyle == FontStyle.Regular)
        args.AlternateFontStream = new FileStream(Path.GetFullPath(@"Data/calibri.ttf"), FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
    else if (args.OriginalFontName == "Calibri" && args.FontStyle == FontStyle.Bold)
        args.AlternateFontStream = new FileStream(Path.GetFullPath(@"Data/calibrib.ttf"), FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
    else
        args.AlternateFontStream = new FileStream(Path.GetFullPath(@"Data/times.ttf"), FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
}

{% endhighlight %}
{% endtabs %}

Step 10: Right-click the project and select **Publish to AWS Lambda**.
![Publish to AWS Lambda](AWS_Images/Lambda_Images/Publish-WordtoPDF.png)

Step 11: Create a new AWS profile in the Upload Lambda Function Window. After creating the profile, add a name for the Lambda function to publish. Then, click **Next**.
![Upload Lambda Function](AWS_Images/Lambda_Images/Upload-Lampda-WordtoPDF.png)

Step 12: In the Advanced Function Details window, specify the **Role Name** as based on AWS Managed policy. After selecting the role, click the **Upload** button to deploy your application.
![Advance Function Details](AWS_Images/Lambda_Images/Advanced-AWS-WordtoPDF.png)

Step 13: After deploying the application, you can see the published Lambda function in **AWS console**.
![After deploying the application](AWS_Images/Lambda_Images/Function-WordtoPDF.png)

Step 14: Edit Memory size and Timeout as maximum in General configuration of the AWS Lambda function.
![AWS Lambda Function](AWS_Images/Lambda_Images/General-configuration-WordtoPDF.png)

## Steps to post the request to AWS Lambda

Step 1: Create a new console project.
![Create a console project](AWS_Images/Lambda_Images/Console-APP-WordtoPDF.png)

step 2: Install the following **Nuget packages** in your application from [Nuget.org](https://www.nuget.org/).

* [AWSSDK.Core](https://www.nuget.org/packages/AWSSDK.Core/)
* [AWSSDK.Lambda](https://www.nuget.org/packages/AWSSDK.Lambda/)
* [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/)
![Install AWSSDK.Core Nuget Package](AWS_Images/Lambda_Images/Nuget-Package-AWSSDK-Core-WordtoPDF.png)
![Install AWSSDK.Lambda Nuget Package](AWS_Images/Lambda_Images/Nuget-Package-AWSSDK-Lambda-WordtoPDF.png)
![Install Newtonsoft.Json Nuget Package](AWS_Images/Lambda_Images/Nuget-Package-Newton-Json-WordtoPDF.png)

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
//Get the InvokeResponse from client InvokeRequest.
InvokeResponse response = client.Invoke(invoke);
//Read the response stream
var stream = new StreamReader(response.Payload);
JsonReader reader = new JsonTextReader(stream);
var serilizer = new JsonSerializer();
var responseText = serilizer.Deserialize(reader);
//Convert Base64String into image file.
byte[] bytes = Convert.FromBase64String(responseText.ToString());
FileStream fileStream = new FileStream("WordtoImage.Jpeg", FileMode.Create);
BinaryWriter writer = new BinaryWriter(fileStream);
writer.Write(bytes, 0, bytes.Length);
writer.Close();
System.Diagnostics.Process.Start("WordtoImage.Jpeg");

{% endhighlight %}
{% endtabs %}

By executing the program, you will get the **image** as follows.

![Word to Image in AWS Lambda](WordToPDF_images/Output-WordtoImage.png)

From GitHub, you can download the [console application](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/AWS/Console_Application) and [AWS Lambda](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/AWS/AWS_Lambda) project.

Click [here](https://www.syncfusion.com/document-processing/word-framework/net-core) to explore the rich set of Syncfusion&reg; Word library (DocIO) features. 

An online sample link to [convert Word document to image](https://ej2.syncfusion.com/aspnetcore/Word/WordToImage#/material3) in ASP.NET Core. 