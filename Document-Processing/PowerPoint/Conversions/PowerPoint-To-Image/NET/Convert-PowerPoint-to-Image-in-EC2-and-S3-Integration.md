--- 
title: Convert PPTX to Image in EC2 and S3 Integration | Syncfusion
description: Learn how to convert a PPTX to image in EC2 and S3 Integration using .NET Core PowerPoint library (Presentation) in C#. 
platform: document-processing
control: PowerPoint 
documentation: UG 
--- 

# Convert PowerPoint to Image in EC2 and S3 Integration 

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET Core PowerPoint library](https://www.syncfusion.com/document-processing/powerpoint-framework/net-core) used to create, read, edit and convert PowerPoint documents programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **convert a PowerPoint Presentation to image in EC2 and S3 Integration** within a few lines of code.

N> To run the sample without manually providing credentials, attach an IAM role with S3 access to your EC2 instance. The AWS SDK will automatically use this role, allowing secure access to S3 without storing access keys.

## Prerequisites 

* AWS S3 bucket for storing input and output files.
* Amazon Linux EC2 instance
* Install [Putty](https://www.putty.org/) for Linux VM
* GitHub repository

## AWS S3 Bucket Configuration

* Create an S3 bucket in your AWS account.
* Inside the bucket, create an input folder and upload the required PowerPoint files.
* Create an output folder in the S3 bucket where the converted images will be saved.

## Steps to Create the Application

Step 1: Create a new **.NET Core console application** project.
![Create a .NET Core Console application in Visual Studio](EC2_S3_images/Console-Template-Net-Core.png)

Step 2: Install the following NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).

* [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core)
* [AWSSDK.S3](https://www.nuget.org/packages/AWSSDK.S3)
* [Microsoft.VisualStudio.Azure.Containers.Tools.Targets](https://www.nuget.org/packages/Microsoft.VisualStudio.Azure.Containers.Tools.Targets)
* [SkiaSharp.NativeAssets.Linux.NoDependencies](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies)

![Install Syncfusion.PresentationRenderer.Net.Core Nuget Package](EC2_S3_images/Nuget_Package_PowerPoint_Presentation_to_PDF.png)


N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Include the following namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Amazon.S3;
using Amazon;
using Amazon.S3.Model;
using Syncfusion.Presentation;
using Syncfusion.PresentationRenderer;

{% endhighlight %}
{% endtabs %}

Step 4: Include the below code snippet in **Program.cs** to **convert PowerPoint to image**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

private static readonly RegionEndpoint bucketRegion = RegionEndpoint.USEast1;
private static IAmazonS3 s3Client;
static async Task Main()
{
    var config = new AmazonS3Config
    {
        RegionEndpoint = bucketRegion
    };
    s3Client = new AmazonS3Client(config);
    Console.WriteLine("Kindly enter the S3 bucket name: ");
    string bucketName = Console.ReadLine();
    Console.WriteLine("Kindly enter the input folder name that has the input PowerPoints: ");
    string inputFolderName = Console.ReadLine();
    Console.WriteLine("Kindly enter the output folder name in which the output images should be stored: ");
    string outputFolderName = Console.ReadLine();
    //Gets the list of imput files from the input folder.
    List<string> inputFileNames = await ListFilesAsync(inputFolderName, bucketName);

    for (int i = 0; i < inputFileNames.Count; i++)
    {
        //Converts PPTX to Image.
        await ConvertPptxToImage(inputFileNames[i], inputFolderName, bucketName, outputFolderName);
    }
}

{% endhighlight %}
{% endtabs %}

Step 5: Include the below code snippet in **Program.cs** to get the input files from S3 bucket.

{% tabs %}
{% highlight c# tabtitle="C#" %}
private static async Task<List<string>> ListFilesAsync(string inputFolderName, string bucketName)
{
    List<string> files = new List<string>();
    try
    {
        var request = new ListObjectsV2Request
        {
            BucketName = bucketName,
            Prefix = $"{inputFolderName}/",
            Delimiter = "/"
        };

        ListObjectsV2Response response;
        do
        {
            response = await s3Client.ListObjectsV2Async(request);
            foreach (S3Object entry in response.S3Objects)
            {
                // Skip the "folder" itself
                if (entry.Key.EndsWith("/"))
                    continue;

                // Extract the filename by removing the folder path prefix
                string fileName = entry.Key.Substring(inputFolderName.Length);
                files.Add(fileName);
            }
            request.ContinuationToken = response.NextContinuationToken;
        } while (response.IsTruncated);
        return files;
    }
    catch (AmazonS3Exception e)
    {
        Console.WriteLine("Error encountered on server. Message:'{0}' when listing objects", e.Message);
        return null;
    }
    catch (Exception e)
    {
        Console.WriteLine("Unknown encountered on server. Message:'{0}' when listing objects", e.Message);
        return null;
    }
}
{% endhighlight %}
{% endtabs %}

Step 6: Include the below code snippet in **Program.cs** to converts the PPTX to the image..

{% tabs %}
{% highlight c# tabtitle="C#" %}
static async Task ConvertPptxToImage(string inputFileName, string inputFolderName, string bucketName, string outputFolderName)
{
    try
    {
        //Download the file from S3 into the MemoryStream
        var response = await s3Client.GetObjectAsync(new Amazon.S3.Model.GetObjectRequest
        {
            BucketName = bucketName,
            Key = inputFolderName+inputFileName
        });
        using (Stream responseStream = response.ResponseStream)
        {
            MemoryStream fileStream = new MemoryStream();
            await responseStream.CopyToAsync(fileStream);
            //Open the existing PowerPoint presentation.
            using (IPresentation pptxDoc = Presentation.Open(fileStream))
            {
                //Initialize PresentationRenderer.
                pptxDoc.PresentationRenderer = new PresentationRenderer();
                //Convert the PowerPoint presentation as image streams.
                Stream[] images = pptxDoc.RenderAsImages(ExportImageFormat.Png);
                //Gets the file name without extension.
                string fileNameWithoutExt = Path.GetFileNameWithoutExtension(inputFileName);
                //Save the image streams to file.
                for (int i = 0; i < images.Length; i++)
                {
                    using (Stream stream = images[i])
                    {
                        //Uploads the image to the S3 bucket.
                        await UploadImageAsync(stream, $"{fileNameWithoutExt}" + i + ".png", bucketName, outputFolderName);
                    }
                }
            }
        }
    }
    catch (AmazonS3Exception e)
    {
        Console.WriteLine($"Error encountered on server. Message:'{e.Message}'");
    }
    catch (Exception e)
    {
        Console.WriteLine($"Unknown error encountered. Message:'{e.Message}'");
    }
}
{% endhighlight %}
{% endtabs %}

Step 6: Include the below code snippet in **Program.cs** to upload images to S3 bucket.

{% tabs %}
{% highlight c# tabtitle="C#" %}
 public static async Task UploadImageAsync(Stream imageStream, string outputFileName, string bucketName, string outputFolderName)
 {
     try
     {
         var key = $"{outputFolderName}/{outputFileName}"; // e.g., "images/your-image.png"

         var request = new PutObjectRequest
         {
             BucketName = bucketName,
             Key = key,
             InputStream = imageStream,
             ContentType = "image/png" // Adjust based on your image type
         };

         var response = await s3Client.PutObjectAsync(request);

         if (response.HttpStatusCode == System.Net.HttpStatusCode.OK)
         {
             Console.WriteLine("Image uploaded successfully.");
         }
         else
         {
             Console.WriteLine($"Failed to upload image. HTTP Status Code: {response.HttpStatusCode}");
         }
     }
     catch (AmazonS3Exception ex)
     {
         Console.WriteLine($"Error encountered on server. Message:'{ex.Message}'");
     }
     catch (Exception ex)
     {
         Console.WriteLine($"Unknown error encountered. Message:'{ex.Message}'");
     }
 }
{% endhighlight %}
{% endtabs %}

step 7: Create an Docker file which parallel to csproj file and add the following code.

```

# This stage is used when running from VS in fast mode (Default for Debug configuration)
FROM mcr.microsoft.com/dotnet/runtime:8.0 AS base
RUN apt-get update -y && apt-get install libfontconfig -y
USER $APP_UID
WORKDIR /app


# This stage is used to build the service project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["AWSConsoleApp.csproj", "."]
RUN dotnet restore "./AWSConsoleApp.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "./AWSConsoleApp.csproj" -c $BUILD_CONFIGURATION -o /app/build

# This stage is used to publish the service project to be copied to the final stage
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./AWSConsoleApp.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# This stage is used in production or when running from VS in regular mode (Default when not using the Debug configuration)
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AWSConsoleApp.dll"]

```

step 8: Create a new private GitHub repository and upload the sample. Refer [here](https://docs.github.com/en/get-started/start-your-journey/uploading-a-project-to-github) to create and upload in the GitHub repository.

## Steps to Connect EC2 instance in putty

step 1: Open PuTTY and enter the IP address.
![Open PuTTY, enter the IP address](EC2_S3_images/Open-PuTTY-enter-IP-address.png)

step 2: Go to Credentials category, Connections → SSH → Auth → Credentials.

step 3: Click the browse in the Private key file for authentication and add the .ppk file in it. 
![Add the .ppk file in Credentials](EC2_S3_images/In-credentials-add-ppk-file.png)

step 4: Click open button. It will be connected to the EC2 instance and ask to login.
![connect with EC2 instance](EC2_S3_images/Connected-with-PuTTY.png)

## Steps to deploy the sample in AWS Linux EC2 instance

step 1: Ensure the EC2 instance connected with PuTTY and the github sample must be ready.

step 2: Install the Microsoft package repository using below command.

```
sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
```

![Install Microsoft package](EC2_S3_images/Install-microsoft-package.png)

step 3: Install the .NET SDK or Runtime.
```
sudo yum install dotnet-sdk-8.0
```

![Install SDK](EC2_S3_images/Install-sdk.png)


step 4:	Install the git in the EC2 instance.
```
sudo yum install git -y
```

![Install git](EC2_S3_images/Install-git.png)

step 5:	Check whether the git is installed properly using below command.
```
git –version
```

![Ensure git installation](EC2_S3_images/ensure-git-installation.png)

step 6:	Clone the branch in the instance using below command.
```
git clone https://github.com/your-username/your-repository.git
```

![Clone git repo](EC2_S3_images/Clone-git-repo.png)

step 7: Once cloned, move into the folder.
```
cd samplename
```

![Move into the folder](EC2_S3_images/Move-to-sample-folder.png)

step 8:	Build and publish your .NET Core application.
```
dotnet publish -c Release
```

![Build and publish](EC2_S3_images/Build-and-publish.png)

step 9:	Navigate to the publish directory.
```
cd bin/Release/net8.0/publish
```

![Navigate to the publish directory](EC2_S3_images/Navigate-to-publish-directory.png)

step 10: Run your application.
```
dotnet your-application.dll --urls http://0.0.0.0:5000
```

![Run your application](EC2_S3_images/Run-the-sample.png)

step 11: Enter the Bucket name, input and output folder name to convert and add images.

![Enter Bucket name](EC2_S3_images/Enter-bucketname-foldername.png)
