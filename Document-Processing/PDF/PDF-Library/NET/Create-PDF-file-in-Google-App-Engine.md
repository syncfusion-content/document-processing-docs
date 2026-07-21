---
title: Create or Generate PDF document in Google App Engine| Syncfusion
description: Learn how to create or generate a PDF file in the Google App Engine using Syncfusion .NET Core PDF library without the dependency of Adobe Acrobat. 
platform: document-processing
control: PDF
documentation: UG
keywords: google app engine save pdf, app engine load pdf, c# save pdf, c# load pdf
---

# Create a PDF Document on Google App Engine

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) creates, reads, and edits PDF documents programmatically, with no dependency on Adobe Acrobat. You can use this library to create, read, and edit PDF documents on Google App Engine.

N> This tutorial targets **App Engine Flexible** (`env: flex`) because `Syncfusion.Pdf.Net.Core` depends on SkiaSharp native assets. App Engine **Standard** does not support custom native binaries. If you prefer a fully managed environment, see [Create a PDF File on Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service).

## Prerequisites

- A **GCP account** with billing enabled. If you don't have one, [create a GCP account](https://cloud.google.com/free) before starting.
- **.NET SDK 8.0** or later installed locally.
- **Visual Studio 2022** with the **ASP.NET and web development** workload.
- The **Google Cloud SDK (`gcloud`)** installed and authenticated. Install it from the [Google Cloud SDK page](https://cloud.google.com/sdk/docs/install), then run `gcloud init` to configure your project and `gcloud auth login` to authenticate.
- The **App Engine Admin API** enabled for your project. Enable it with `gcloud services enable appengine.googleapis.com` in the Cloud Shell.
- An **App Engine app** created in your region of choice. Run `gcloud app create --region <region>` (for example, `us-central`) before the first deploy.
- A **Syncfusion<sup>&reg;</sup> license key** — register it in your application using `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")`. For App Engine, store the key in an environment variable (for example, `SYNCFUSION_LICENSE_KEY`) and read it at application startup. For details, see the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview).
- The **[Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core)** NuGet package installed in the project.

## Set up the App Engine environment

**Step 1:** Open the **Google Cloud Console** and click the **Activate Cloud Shell** button (the `>_` icon in the top toolbar).
![Activate Cloud Shell](GettingStarted_images/Google_Cloud_Console.png)

Step 2: Click the **Cloud Shell Editor** button to view the **Workspace**.
![Open Editor in Cloud Shell](GettingStarted_images/Cloud_Shell.png)

Step 3: Open **Cloud Shell Terminal**, and run the following **command** to confirm authentication.
{% tabs %}
{% highlight c# tabtitle="CLI" %}

gcloud auth list

{% endhighlight %}
{% endtabs %}

![Authentication for App Engine](GettingStarted_images/Authorize_Command.png)

Step 4: Click the **Authorize** button.
![Click Authorize button](GettingStarted_images/Authorize_Button.png)

**Create an application for App Engine**

Step 1: Open Visual Studio and select the ASP.NET Core Web app (Model-View-Controller) template.
![Create ASP.NET Core Web application in Visual Studio](GettingStarted_images/Create-Project.png)

Step 2: Configure your new project according to your requirements.
![Create ASP.NET Core Web application in Visual Studio](GettingStarted_images/Project-Name.png)

Step 3: Click the **Create** button.
![Create ASP.NET Core Web application in Visual Studio](GettingStarted_images/Additional-Information.png)

Step 4: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core/) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).
![Install Syncfusion.Pdf.Net.Core NuGet package](GettingStarted_images/Google-NuGet-Package.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or from the NuGet feed, you also have to add the "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn about registering the Syncfusion<sup>&reg;</sup> license key in your application to use our components.

**Step 5:** Include the following namespaces in `HomeController.cs`.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System.IO;

{% endhighlight %}
{% endtabs %}

**Step 6:** A default action method named `Index` is present in `HomeController.cs`. Right-click the `Index` action and choose **Go To View** to open `Index.cshtml`.

**Step 7:** In `Index.cshtml`, add the following button.

N> The `Html.BeginForm` / `Html.EndForm` HTML helpers used below are the legacy syntax. Modern ASP.NET Core supports tag helpers; consider `<form asp-action="CreateDocument" asp-controller="Home" method="get">` for new projects.

{% tabs %}
{% highlight CSHTML %}

@{Html.BeginForm("CreateDocument", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Create PDF Document" style="width:200px;height:27px" />
        </div>
    }
    Html.EndForm();
}
{% endhighlight %}
{% endtabs %}

**Step 8:** In `HomeController.cs`, add a new action method named `CreateDocument` and include the following code to create a PDF document. The `RectangleF(40, 400, loadedPage.Size.Width - 80, 0)` coordinates place the grid 40 px from the page edges and 400 px from the top. Add the `Data/Input.pdf` file to the project with **Copy to Output Directory** set to **Copy if newer**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public ActionResult CreateDocument()
{
    //Load PDF document as stream.
    using FileStream docStream = new FileStream(@"Data/Input.pdf", FileMode.Open, FileAccess.Read);
    //Load an existing PDF document.
    PdfLoadedDocument document = new PdfLoadedDocument(docStream);

    //Load the existing page.
    PdfLoadedPage loadedPage = document.Pages[0] as PdfLoadedPage;
    //Create PDF graphics for the page.
    PdfGraphics graphics = loadedPage.Graphics;

    //Create a PdfGrid.
    PdfGrid pdfGrid = new PdfGrid();
    //Add values to the list.
    List<object> data = new List<object>();
    Object row1 = new { Product_ID = "1001", Product_Name = "Bicycle", Price = "10,000" };
    Object row2 = new { Product_ID = "1002", Product_Name = "Head Light", Price = "3,000" };
    Object row3 = new { Product_ID = "1003", Product_Name = "Break wire", Price = "1,500" };
    data.Add(row1);
    data.Add(row2);
    data.Add(row3);
    //Add list to IEnumerable.
    IEnumerable<object> dataTable = data;
    //Assign data source.
    pdfGrid.DataSource = dataTable;
    //Apply built-in table style.
    pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent3);
    //Draw the grid to the page of PDF document.
    pdfGrid.Draw(graphics, new RectangleF(40, 400, loadedPage.Size.Width - 80, 0));

    //Create memory stream. 
    MemoryStream stream = new MemoryStream();
    //Save the PDF document to stream.
    document.Save(stream);
    //If the position is not set to '0' then the PDF will be empty.
    stream.Position = 0;
    //Close the document.
    document.Close(true);
    //Download PDF document in the browser.
    return File(stream, "application/pdf", "Sample.pdf");
}

{% endhighlight %}
{% endtabs %}

## Move the application to App Engine

**Step 1:** Open the **Cloud Shell editor**.

![Cloud Shell editor](GettingStarted_images/Cloud_Shell_Editor.png)

Step 2: Drag and drop the sample from your local machine to **Workspace**.

![Add Project](GettingStarted_images/Add_Project.png)

N> If you have your sample application in your local machine, drag and drop it into the Workspace. If you created the sample using the Cloud Shell terminal command, it will be available in the Workspace.

Step 3: Open the Cloud Shell Terminal and run the following **command** to view the files and directories within your **current Workspace**.

{% tabs %}
{% highlight bash %}

ls

{% endhighlight %}
{% endtabs %}

![ls command](GettingStarted_images/ls_Command.png)

Step 4: Run the following **command** to navigate which sample you want to run.

{% tabs %}
{% highlight bash %}

cd Web_Application

{% endhighlight %}
{% endtabs %}

![Project Folder](GettingStarted_images/Project_Folder.png)

**Step 5 (Verify locally):** To ensure that the sample works correctly, run the application using the following command. The Cloud Shell's `localhost:8080` is not the same as your machine's localhost; use the **Web View -> Preview on port 8080** option in the Cloud Shell to view the app.

{% tabs %}
{% highlight bash %}

dotnet run --urls=http://localhost:8080

{% endhighlight %}
{% endtabs %}

![Run Application](GettingStarted_images/Run_Application.png)

Step 6: Verify that the application is running properly by accessing the **Web View -> Preview on port 8080**.

![Preview on Port](GettingStarted_images/Preview.png)

Step 7: Now you can see the sample output on the preview page.

![Output Button](GettingStarted_images/Console_Page.png)

Step 8: Close the preview page and return to the terminal then press **Ctrl+C** for which will typically stop the process.

![Work space](GettingStarted_images/Run_View.png)

## Publish the application

**Step 1:** Run the following command in the **Cloud Shell Terminal** to publish the application.

{% tabs %}
{% highlight bash %}

dotnet publish -c Release

{% endhighlight %}
{% endtabs %}

![Release](GettingStarted_images/Publish_GCP.png)

Step 2: Run the following command in the **Cloud Shell Terminal** to navigate to the publish folder.

{% tabs %}
{% highlight bash %}

cd bin/Release/net8.0/publish/

{% endhighlight %}
{% endtabs %}

![Publish Folder](GettingStarted_images/Publish_Folder.png)

## Configure app.yaml and the Dockerfile

**Step 1:** Add the `app.yaml` file to the publish folder with the following contents. The `env: flex` line tells App Engine to use the Flexible environment, and `runtime: custom` tells it to use the `Dockerfile` you create in the next step.

{% tabs %}
{% highlight bash %}

cat <<EOT >> app.yaml
env: flex
runtime: custom   
EOT

{% endhighlight %}
{% endtabs %}

![yaml file to publish](GettingStarted_images/App_yaml.png)


**Step 2:** Add the `Dockerfile` to the publish folder with the following contents. The `RUN apt-get install libfontconfig -y` line installs the font-rendering dependency required by `Syncfusion.Pdf.Net.Core`; for legacy fonts, also install `libgdiplus` in the same `apt-get install` line. The `ENV ASPNETCORE_URLS=http://*:8080` line tells ASP.NET Core to listen on port 8080, which is the port App Engine Flexible expects.

{% tabs %}
{% highlight bash %}

cat <<EOT >> Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0
RUN apt-get update -y && apt-get install libfontconfig -y
ADD / /app
EXPOSE 8080
ENV ASPNETCORE_URLS=http://*:8080
WORKDIR /app
ENTRYPOINT [ "dotnet", "Web_Application.dll"]
EOT

{% endhighlight %}
{% endtabs %}

![Docker file to publish](GettingStarted_images/Docker_File.png)

**Step 3:** Verify that the `Dockerfile` and `app.yaml` files are present in the **Workspace**.

![Docker file](GettingStarted_images/Docker.png)

## Deploy to App Engine

**Step 1:** To deploy the application to App Engine, run the following command in the Cloud Shell Terminal. The `--version v0` flag names this deployment; omit it to use an auto-generated version label.

{% tabs %}
{% highlight bash %}

gcloud app deploy --version v0

{% endhighlight %}
{% endtabs %}

![Deploy](GettingStarted_images/Deploy.png)
![Get URL](GettingStarted_images/Get_deploy_url.png)

**Step 2:** Open the URL printed by `gcloud app deploy` to access the application, which has been successfully deployed. Click **Create PDF Document** to download the generated PDF.

![Output Console](GettingStarted_images/Console_Page.png)

You can download a complete working sample from the [Google_App_Engine folder on GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/GCP/Google_App_Engine).

Running the program produces the following PDF document. The deployed service returns the PDF as a download, not a file in the `bin` folder.
![Output PDF document](GettingStarted_images/Open_and_save_output.png)

Explore the [Syncfusion<sup>&reg;</sup> PDF library features](https://www.syncfusion.com/document-sdk/net-pdf-library) to learn more about merging, splitting, securing, and stamping PDF files.

An online sample demonstrating how to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.

## Troubleshooting

- **Watermark appears in the output PDF** — Your Syncfusion<sup>&reg;</sup> license key is not registered. Call `SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` at application startup, or load the key from the `SYNCFUSION_LICENSE_KEY` environment variable. To set the env var on App Engine, add it to `app.yaml` under `env_variables` (for example, `env_variables: SYNCFUSION_LICENSE_KEY: "your-key"`) or use the App Engine **Settings > Environment variables** UI.
- **`TypeInitializationException` or `DllNotFoundException` for SkiaSharp** — The native SkiaSharp assets are missing from the container. Add `libfontconfig` and `libgdiplus` to the Dockerfile: `RUN apt-get update -y && apt-get install -y libfontconfig1 libgdiplus`.
- **Deployment fails with `API appengine.googleapis.com not enabled`** — Enable the App Engine Admin API with `gcloud services enable appengine.googleapis.com` and retry.
- **`App Engine app does not exist` on first deploy** — Create the App Engine app in your region with `gcloud app create --region <region>` (for example, `us-central`) before deploying.
- **Cloud Shell runs out of memory during `dotnet publish`** — Free disk space with `rm -rf ~/.cache/*` and `rm -rf /tmp/*`, or run the publish on your local machine and upload the result.
- **`libgdiplus` warnings on container start** — Add `libgdiplus` to the Dockerfile's `apt-get install` line; `libfontconfig` alone is not sufficient for some font rendering scenarios.
- **The deployed URL returns 502 / 504** — Inspect the instance logs with `gcloud app logs tail -s default` and check for the above SkiaSharp / `libgdiplus` errors. Increase the instance class in `app.yaml` (for example, `resources: cpu: 1, memory_gb: 2, disk_size_gb: 10`) for memory-intensive PDF generation.
- **Drag-and-drop upload to the Cloud Shell fails** — Use `git clone <repository-url>` instead, or use the **Upload** button in the Cloud Shell toolbar to upload a `.zip` file.

## See also

- [Create a PDF File on GCP](create-pdf-file-in-gcp)
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