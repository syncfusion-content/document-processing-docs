---
title: Convert Word to PDF in Google Cloud Run | Syncfusion
description: Learn how to convert Word to PDF in Google Cloud Run using .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word to PDF in Google Cloud Run

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-sdk/net-word-library) that allows you to create, read, edit, and **convert Word documents** programmatically, without the need for **Microsoft Word** or interop dependencies. Using this library, you can **convert a Word document to a PDF in Google Cloud Run**.

## Set up Cloud Run

Step 1: Access Google Cloud Console

**Sign in** to the **Google Cloud Console** and navigate to Cloud Run from the left-hand menu.

![Access Google Cloud Console](GCP_Images/GCR_Images/Access-Google-Cloud-Console.png)


Step 2: Activate Cloud Shell

Click on the **Activate Cloud Shell** button in the top-right corner of the console. This opens a built-in terminal for running Google Cloud CLI commands without additional setup.

![Activate Cloud Shell](GCP_Images/GCR_Images/Activate-Cloud-Shell.png)

Step 3: Verify Authenticated Accounts

In the Cloud Shell terminal, enter the following **command** to list authenticated accounts and verify your active account:

{% tabs %}
{% highlight bash tabtitle="CLI" %}
gcloud auth list
{% endhighlight %}
{% endtabs %}

![Verify Authenticated Accounts](GCP_Images/GCR_Images/Verify-Authenticated-Accounts.png)

Step 4: Set Active Account

If multiple accounts are listed, **set the desired account as active** using:

{% tabs %}
{% highlight bash tabtitle="CLI" %}
gcloud config set account <your-email@example.com>
{% endhighlight %}
{% endtabs %}

Replace <your-email@example.com> with your actual Google Cloud email.

Step 5: Enable Cloud Run API

Enable the Cloud Run API using the following **command**:

{% tabs %}
{% highlight bash tabtitle="CLI" %}
gcloud services enable run.googleapis.com
{% endhighlight %}
{% endtabs %}

![Enable Cloud Run API](GCP_Images/GCR_Images/Enable-Cloud-Run.png)

This step ensures that Cloud Run is ready for deployment. If the API is already enabled, the command will confirm that no changes were needed.


## Create an application for Cloud Run

Step 1: In Visual Studio, create a **new ASP.NET Core Web App (Model-View-Controller)** project (for example, named **Convert-Word-Document-to-PDF**), select the **.NET 8.0** framework, and click **Create**. This project will be containerized and deployed in the steps below.

![Create ASP.NET Core Web application in Visual Studio](ASP-NET-Core_images/CreateProjectforConversion.png)

Step 2: Install the following NuGet packages as a reference to your project from [NuGet.org](https://www.nuget.org/).

* [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core)
* [SkiaSharp.NativeAssets.Linux.NoDependencies](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/)

N> The `SkiaSharp.NativeAssets.Linux.NoDependencies` package ships without native Skia libraries. The Dockerfile in Step 10 installs the required native dependencies (`fontconfig`, `libfreetype6`) at container build time.

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add the "Syncfusion.Licensing" assembly reference and include a license key in your projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering the Syncfusion<sup>&reg;</sup> license key in your application.

Step 3: Include the following namespaces in the HomeController.cs file.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Pdf;

{% endhighlight %}

{% endtabs %}

Step 4: A default action method named Index will be present in HomeController.cs. Right click on Index method and select **Go To View** where you will be directed to its associated view page **Index.cshtml**.

Step 5: Add a new button in the Index.cshtml as shown below.

{% tabs %}

{% highlight cshtml tabtitle="CSHTML" %}

@{Html.BeginForm("ConvertWordtoPDF", "Home", FormMethod.Get);
{
<div>
    <input type="submit" value="Convert Word Document to PDF" style="width:220px;height:27px" />
</div>
}
Html.EndForm();
}

{% endhighlight %}

{% endtabs %}

Step 6: Add a new action method **ConvertWordDocumentToPdf** in HomeController.cs and include the below code snippet to **convert the Word document to Pdf** and download it. Ensure the file has the following `using` directives at the top: `using System.IO;` and `using Microsoft.AspNetCore.Mvc;`.

{% tabs %}

{% highlight c# tabtitle="C#" %}

//Open the file as Stream
using (FileStream docStream = new FileStream(Path.GetFullPath("Data/Template.docx"), FileMode.Open, FileAccess.Read))
{
    //Loads file stream into Word document
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Instantiation of DocIORenderer for Word to PDF conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            //Converts Word document into PDF document
            PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);

            //Saves the PDF document to MemoryStream.
            MemoryStream stream = new MemoryStream();
            pdfDocument.Save(stream);
            stream.Position = 0;

            //Download PDF document in the browser.
            return File(stream, "application/pdf", "Sample.pdf");
        }
    }
}

{% endhighlight %}

{% endtabs %}

Step 7: Add the following code in Program.cs file.

N> The line `app.UseHttpsRedirection();` is included by the default MVC template. Cloud Run terminates TLS at the load balancer and serves plain HTTP to the container, so the redirect may not work as expected. You can safely remove this line for Cloud Run deployments.

{% tabs %}

{% highlight c# tabtitle="C#" %}

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
var url = $"http://0.0.0.0:{port}";

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run(url);

{% endhighlight %}

{% endtabs %}

Step 8: Create a Dockerfile in the project root and add the following content.

{% tabs %}
{% highlight Dockerfile %}

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
RUN apt-get update -y && apt-get install -y \
    fontconfig \
    libfontconfig1 \
    libfreetype6 \
    && rm -rf /var/lib/apt/lists/*

USER $APP_UID
WORKDIR /app

# This stage is used to build the service project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Convert-Word-Document-to-PDF.csproj", "."]
RUN dotnet restore "./Convert-Word-Document-to-PDF.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "./Convert-Word-Document-to-PDF.csproj" -c $BUILD_CONFIGURATION -o /app/build

# This stage is used to publish the service project to be copied to the final stage
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Convert-Word-Document-to-PDF.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# This stage is used in production or when running from VS in regular mode (default when not using the Debug configuration)
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Convert-Word-Document-to-PDF.dll"]

{% endhighlight %}
{% endtabs %}

## Upload application to Cloud Shell Editor

Step 1: Open **Cloud Shell Editor**

Open Cloud Shell Editor by clicking the pencil icon in Cloud Shell:

![Open Cloud Shell Editor](GCP_Images/GCR_Images/Open-Cloud-Shell-Editor.png)

Step 2: **Upload** the sample folder

Upload the Docker sample folder to Cloud Shell Editor by selecting the **Upload Files** option.

![Upload the sample folder](GCP_Images/GCR_Images/Upload-sample-folder.png)

Step 3: **Navigate** to the sample folder

After uploading, open the terminal in Cloud Shell Editor and move to the sample folder using:

{% tabs %}
{% highlight bash tabtitle="CLI" %}
cd <sample-folder-name>
{% endhighlight %}
{% endtabs %}

Replace <sample-folder-name> with the actual folder name.


## Create and Deploy Docker image in Cloud Run

Step 1: Enable the required APIs

Before building or deploying, enable the Cloud Run, Cloud Build, and Artifact Registry APIs in your project:

{% tabs %}
{% highlight bash tabtitle="CLI" %}
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
{% endhighlight %}
{% endtabs %}

Step 2: Build and submit the Docker image to **Google Container Registry (GCR)**

Run the following command to build and submit the Docker image to Google Container Registry (GCR):

{% tabs %}
{% highlight bash tabtitle="CLI" %}
gcloud builds submit --tag gcr.io/<your-project-id>/wordtopdf
{% endhighlight %}
{% endtabs %}

Replace `<your-project-id>` with your actual Google Cloud project ID.

![Build and submit Docker image](GCP_Images/GCR_Images/Add-Docker-Image.png)

N> **Google Container Registry is deprecated.** For new projects, prefer Artifact Registry. Replace the image tag with `REGION-docker.pkg.dev/<your-project-id>/wordtopdf-repo/wordtopdf` after creating a repository named `wordtopdf-repo` (`gcloud artifacts repositories create wordtopdf-repo --repository-format=docker --location=REGION`).

Step 3: List stored container images in **GCR**

Verify the stored container images using:

{% tabs %}
{% highlight bash tabtitle="CLI" %}
gcloud container images list
{% endhighlight %}
{% endtabs %}

![Stored container images in GCR](GCP_Images/GCR_Images/List-stored-container-images.png)

Step 4: **Build** the Docker image

Enter the following command to build the application.

{% tabs %}
{% highlight bash tabtitle="CLI" %}
docker build . --tag gcr.io/<your-project-id>/wordtopdf
{% endhighlight %}
{% endtabs %}

![Build the Docker image](GCP_Images/GCR_Images/Build.png)

Step 5: **Run** the sample locally

Run the container locally on port 8080 to verify it works before deploying:

{% tabs %}
{% highlight bash tabtitle="CLI" %}
docker run -p 8080:8080 gcr.io/<your-project-id>/wordtopdf
{% endhighlight %}
{% endtabs %}

To close the preview page, return to the terminal, and press **Ctrl+C** to stop the process.

![Run the sample](GCP_Images/GCR_Images/Run.png)

Step 6: **Deploy** the sample to Cloud Run

Deploy the container to Cloud Run using the following command. Replace the placeholders with your values:

{% tabs %}
{% highlight bash tabtitle="CLI" %}
gcloud run deploy wordtopdf \
  --image gcr.io/<your-project-id>/wordtopdf \
  --platform managed \
  --region <your-region> \
  --allow-unauthenticated
{% endhighlight %}
{% endtabs %}

![Deploy the sample to Cloud Run](GCP_Images/GCR_Images/Deploy.png)

Provide the following values when prompted (or replace the placeholders in the command above):

* **Container Image URL** – Enter `gcr.io/<your-project-id>/wordtopdf`.
* **Service Name** – Assign a name to your service (for example, `wordtopdf`).
* **Region** – Choose the deployment region (for example, `us-central1`).

![Provide deployment details](GCP_Images/GCR_Images/Provide-deployment-details.png)

Step 7: Retrieve the generated **Service URL**

Once deployment is complete, a Cloud Run service URL will be generated. Copy this URL to access your deployed service.

![Generated Service URL](GCP_Images/GCR_Images/Service-URL.png)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/GCP/Google-Cloud-Run).

By executing the program, you will get the **PDF document** as follows. The output is downloaded by the browser when the deployed service is invoked.

![Word to PDF in Google Cloud Run](WordToPDF_images/OutputImage.png)

Looking for the full .NET Word Library overview, features, pricing, and documentation? Visit the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) page.

An online sample link to [convert a Word document to PDF](https://document.syncfusion.com/demos/word/wordtopdf#/tailwind) in ASP.NET Core. 

## See also

* [Convert Word to PDF in Google App Engine](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-google-app-engine)
* [Convert Word to PDF in Google Cloud Platform (GCP)](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-google-cloud-platform) — overview of all supported GCP services.
