---
title: Convert an Excel document to PDF in Linux Docker | Syncfusion
description: Convert an Excel document to PDF in Linux Docker using Sycfusion .NET Core Excel library (XlsIO) without Microsoft Excel or interop dependencies.
platform: document-processing
control: XlsIO
documentation: UG
---

# Convert an Excel document to PDF in Linux Docker

Docker is an open platform for developing, shipping, and running applications. You can use Essential<sup>&reg;</sup> XlsIO in a Docker container to create, read, edit, and convert Microsoft Excel documents to various formats. On this page, you will learn how to convert an Excel document to PDF in a Linux Docker container using the Syncfusion<sup>&reg;</sup> XlsIO library (Essential<sup>&reg;</sup> XlsIO).

## Steps to convert an Excel document to PDF in Linux Docker

Step 1: Create a new Core Console application.

![Create a Console Application in Visual Studio](Docker_Images/docker_images_img1.png)

Step 2: Name the project.

![Name the project](Docker_Images/docker_images_img2.png)

Step 3: Install the following NuGet packages as references to your project from [NuGet.org](https://www.nuget.org/).

* [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core)
* [SkiaSharp.NativeAssets.Linux v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1) (this package transitively pulls in `SkiaSharp`, `HarfBuzzSharp.NativeAssets.Linux`, and the native `.so` files for the target architecture)

![Install Syncfusion.XlsIORenderer.Net.Core NuGet Package](Docker_Images/docker_images_img3.png)
![Install SkiaSharp.NativeAssets.Linux v2.80.2 NuGet Package](Docker_Images/docker_images_img4.png)

N> 1. If you're deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/excel/excel-library/net/nuget-packages-required#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.

N> 2. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or from the NuGet feed, you must also add the `Syncfusion.Licensing` reference and register a license key. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn how to register the Syncfusion<sup>&reg;</sup> license key. The simplest approach is to add the following call at the top of **Program.cs** before constructing the `ExcelEngine`:
> ```csharp
> Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
> ```

Step 4: Add the following namespaces in **Program.cs**.

{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
using Syncfusion.Pdf;
using Syncfusion.XlsIORenderer;
{% endhighlight %}
{% endtabs %}

Step 5: Add the following code in **Program.cs**. Place `InputTemplate.xlsx` in the project's `bin\Debug\net8.0` folder (or set its **Copy to Output Directory** property to **Copy if newer**) so the relative path resolves at runtime. Inside the container the working directory is `/app`, so the file is included via the Dockerfile step shown later.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Open the existing Excel workbook.
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");

    //Initialize the XlsIO renderer.
    XlsIORenderer renderer = new XlsIORenderer();

    //Convert the Excel document to a PDF document.
    PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

    //Save the converted PDF document.
    pdfDocument.Save("Output.pdf");
}
{% endhighlight %}
{% endtabs %}

Step 6: Add Docker support to the application by right-clicking the project and choosing **Add → Docker Support**. Make sure **Docker Desktop** is installed and configured to run **Linux containers** (Windows defaults to Windows containers).

![Add Docker support to that console app](Docker_Images/docker_images_img5.png)

Step 7: Choose **Linux** so the application runs in a Linux Docker container.

![Choose Linux option](Docker_Images/docker_images_img6.png)

Step 8: Open the **Dockerfile** to view the default Docker commands shown below. This default Dockerfile installs `fontconfig` and a basic TTF font so that PDF text renders correctly. It also copies `InputTemplate.xlsx` into the image.
{% tabs %}
{% highlight Dockerfile %}

FROM mcr.microsoft.com/dotnet/runtime:3.1 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["Convert-Excel-to-PDF.csproj", "."]
RUN dotnet restore "./Convert-Excel-to-PDF.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "Convert-Excel-to-PDF.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Convert-Excel-to-PDF.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Convert-Excel-to-PDF.dll"]

{% endhighlight %}
{% endtabs %}

Step 9: Set the run target to **Docker** in the Visual Studio toolbar and run the application.

![Choose Docker and run the application](Docker_Images/docker_images_img7.png)

A complete working example of how to convert an Excel document to PDF in docker container is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/Docker).

By executing the program, you will get the **PDF document** as shown below.

![Output File](Docker_Images/docker_images_img8.png)

## Dockerfile Examples

The following examples demonstrate how the Dockerfile should be configured to convert an Excel document to PDF in different Linux distributions. All examples target **.NET 8** and install `fontconfig` plus a basic TTF font so that PDF text renders correctly. If your workbook contains CJK, Arabic, or other non-Latin text, install the appropriate `fonts-noto-*` package as well.

## Alpine

Use the following Dockerfile to convert an Excel document to PDF in Alpine Linux.

{% tabs %}
{% highlight Dockerfile %}

FROM mcr.microsoft.com/dotnet/aspnet:3.1-alpine3.12 AS base
RUN apk update && apk upgrade && apk add fontconfig
RUN apk add --update ttf-dejavu fontconfig
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:3.1-alpine3.12 AS build
WORKDIR /src
COPY ["Convert-Excel-to-PDF.csproj", "."]
RUN dotnet restore "./Convert-Excel-to-PDF.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "Convert-Excel-to-PDF.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Convert-Excel-to-PDF.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Convert-Excel-to-PDF.dll"]

{% endhighlight %}
{% endtabs %}

A complete working example of converting an Excel document to PDF in Alpine Linux Docker container is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/Docker/Alpine/Convert%20Excel%20to%20PDF).

## Debian

Use the following Dockerfile to convert an Excel document to PDF in Debian Linux.

{% tabs %}
{% highlight Dockerfile %}

FROM mcr.microsoft.com/dotnet/aspnet:3.1-buster-slim AS base
RUN apt-get update -y && apt-get install fontconfig -y
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:3.1-buster-slim AS build
WORKDIR /src
COPY ["Convert-Excel-to-PDF.csproj", "."]
RUN dotnet restore "./Convert-Excel-to-PDF.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "Convert-Excel-to-PDF.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Convert-Excel-to-PDF.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Convert-Excel-to-PDF.dll"]

{% endhighlight %}
{% endtabs %}

A complete working example of converting an Excel document to PDF in Debian Linux Docker container is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/Docker/Debian/Convert%20Excel%20to%20PDF).

## RHEL - Red Hat Enterprise Linux

Use the following Dockerfile to convert an Excel document to PDF in RHEL Linux.

{% tabs %}
{% highlight Dockerfile %}

FROM registry.access.redhat.com/ubi8/dotnet-31-runtime AS base
USER root
RUN yum -y install fontconfig --disablerepo=epel
WORKDIR /

FROM registry.access.redhat.com/ubi8/dotnet-31 AS build
WORKDIR /src
COPY ["Convert-Excel-to-PDF.csproj", ""]
RUN dotnet restore "./Convert-Excel-to-PDF.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "Convert-Excel-to-PDF.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Convert-Excel-to-PDF.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Convert-Excel-to-PDF.dll"]

{% endhighlight %}
{% endtabs %}

A complete working example of converting an Excel document to PDF in RHEL Linux Docker container is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/Docker/RHEL/Convert%20Excel%20to%20PDF).

## Ubuntu

Use the following Dockerfile to convert an Excel document to PDF in Ubuntu Linux.

{% tabs %}
{% highlight Dockerfile %}

FROM mcr.microsoft.com/dotnet/core/runtime:3.1-bionic AS base
RUN apt-get update -y && apt-get install fontconfig -y
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-bionic AS build
WORKDIR /src
COPY ["Convert-Excel-to-PDF.csproj", ""]
RUN dotnet restore "./Convert-Excel-to-PDF.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "Convert-Excel-to-PDF.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Convert-Excel-to-PDF.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Convert-Excel-to-PDF.dll"]

{% endhighlight %}
{% endtabs %}

A complete working example of converting an Excel document to PDF in Ubuntu Linux Docker container is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/Docker/Ubuntu/Convert%20Excel%20to%20PDF).

Click [here](https://www.syncfusion.com/document-processing/excel-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> Excel library (XlsIO) features.

An online sample link to [convert an Excel document to PDF](https://ej2.syncfusion.com/aspnetcore/Excel/ExcelToPDF#/material3) in ASP.NET Core.