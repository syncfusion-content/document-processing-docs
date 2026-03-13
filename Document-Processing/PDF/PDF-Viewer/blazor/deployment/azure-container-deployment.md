---
layout: post
title: Deploy SfPdfViewer to Azure Container (Linux) | Syncfusion
description: Containerize and deploy the Syncfusion Blazor PDF Viewer (Server and WebAssembly) to Azure using Azure Container Registry and App Service for Containers.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Deploy SfPdfViewer to Azure Container (Linux)

This article shows how to containerize and deploy a Blazor PDF Viewer application (both Server and WebAssembly scenarios) to Azure using Azure Container Registry (ACR) and Azure App Service for Containers. It combines the application architecture and registration steps from the Blazor web app guide with practical containerization and Azure deployment steps.

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

* An Azure subscription and permission to create resource groups, ACR instances, and App Services.

## Create a new Blazor App in Visual Studio

Create a new Blazor Server app and name it **PDFViewerGettingStarted**.

N> The PDF Viewer component is supported on .NET 8.0 and later.

## Install Blazor PDF Viewer NuGet package in Blazor Server App

Add the following NuGet packages to the Blazor Server app.

* [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) 
* [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes)

If using the WebAssembly or Auto interactive render mode, install the NuGet packages in the client project to add the component to the Web App.

N> Syncfusion&reg; uses SkiaSharp.Views.Blazor version 3.119.1. Ensure this version is referenced.
* [SkiaSharp.Views.Blazor](https://www.nuget.org/packages/SkiaSharp.Views.Blazor)

![SkiaSharp Views Blazor](../getting-started/gettingstarted-images/skia-sharp-image.png)

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

* If using an interactive render mode such as WebAssembly or Auto, ensure the required .NET workloads are installed for SkiaSharp usage in a Blazor Web App. Run the following command:
    * dotnet workload install wasm-tools

N> The above code will only install the latest available workload on the machine, such as .NET 10. If you need to install a specific .NET version like .NET 9 or .NET 8, please use a command such as `dotnet workload install wasm-tools-net8`.

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service

* In the **~/_Imports.razor** file, add the following namespaces:

{% tabs %}
{% highlight razor tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor;
@using Syncfusion.Blazor.SfPdfViewer;

{% endhighlight %}
{% endtabs %}

* Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service in the **~/Program.cs** file.

{% tabs %}
{% highlight c# tabtitle=".NET 9 & .NET 8 (~/Program.cs) Server" hl_lines="2 9 11 13" %}

using BlazorWebAppServer.Components;
using Syncfusion.Blazor;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorComponents() 
        .AddInteractiveServerComponents();

builder.Services.AddSignalR(o => { o.MaximumReceiveMessageSize = 102400000; });

builder.Services.AddMemoryCache();
//Add Syncfusion Blazor service to the container.
builder.Services.AddSyncfusionBlazor();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();

{% endhighlight %}

{% highlight c# tabtitle=".NET 9 & .NET 8 (~/Program.cs) WebAssembly" hl_lines="3 9 11" %}

using BlazorWebApp.Client.Pages;
using BlazorWebApp.Components;
using Syncfusion.Blazor;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorComponents()
.AddInteractiveWebAssemblyComponents();

builder.Services.AddMemoryCache();
//Add Syncfusion Blazor service to the container
builder.Services.AddSyncfusionBlazor();

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
app.UseWebAssemblyDebugging();
}
else
{
app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveWebAssemblyRenderMode()
    .AddAdditionalAssemblies(typeof(Counter).Assembly);

app.Run();

{% endhighlight %}
{% endtabs %}

## Adding stylesheet and script

Add the following stylesheet and script to the head section of the **~/Pages/_Host.cshtml** file.

{% tabs %}
{% highlight cshtml hl_lines="3 7" %}

<head>
    <!-- Syncfusion Blazor PDF Viewer control's theme style sheet -->
    <link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
</head>
<body>
    <!-- Syncfusion Blazor PDF Viewer control's scripts -->
    <script src="_content/Syncfusion.Blazor.SfPdfViewer/scripts/syncfusion-blazor-sfpdfviewer.min.js" type="text/javascript"></script>
</body>

{% endhighlight %}
{% endtabs %}

## Adding Blazor PDF Viewer Component

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer (Next-Gen) component in the **~/Pages/Index.razor** file.

{% tabs %}
{% highlight razor %}

@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

N> If the `DocumentPath` property is not set, the PDF Viewer renders without loading a PDF document. Users can use the **Open** option in the toolbar to browse and open a PDF as needed.

## Run the application

Run the application to display the PDF file in the Syncfusion&reg; Blazor PDF Viewer component in the browser.

{% previewsample "https://blazorplayground.syncfusion.com/embed/hZVzNWqXLSZpnuzc?appbar=false&editor=false&result=true&errorlist=false&theme=bootstrap5" backgroundimage "[Blazor Server SfPdfViewer rendering in browser](aws-benstalk-deployment-images/blazor-pdfviewer.png)" %}

## Dockerizing the Server app (recommended for Server and hosted WASM)

Use a multi-stage Dockerfile to build and publish the app with the .NET 10 SDK, then run the published output on the ASP.NET runtime image.

Example `Dockerfile` for an Blazor Server (or hosted) app:

```dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base

RUN ln -s /lib/x86_64-linux-gnu/libdl-2.24.so /lib/x86_64-linux-gnu/libdl.so
# install System.Drawing native dependencies
RUN apt-get update && apt-get install -y --allow-unauthenticated libgdiplus libc6-dev libx11-dev
RUN ln -s libgdiplus.so gdiplus.dll

USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081


# This stage is used to build the service project
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["YourServerApp/YourServerApp.csproj", "YourServerApp/"]
RUN dotnet restore "./YourServerApp/YourServerApp.csproj"
COPY . .
WORKDIR "/src/YourServerApp"
RUN dotnet build "./YourServerApp.csproj" -c $BUILD_CONFIGURATION -o /app/build

# This stage is used to publish the service project to be copied to the final stage
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./YourServerApp.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# This stage is used in production or when running from VS in regular mode (Default when not using the Debug configuration)
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "YourServerApp.dll"]
```

N>
- Replace `YourServerApp.dll` with your actual assembly name.

### Local build and run

Build and run the container locally to verify behavior:

```bash
docker build -t pdfviewerwebservice:latest .
docker run -d -p 6002:80 pdfviewerwebservice:latest
```

If you see script errors or documents fail to load, verify the container image contains the `libdl.so` symlink and `libgdiplus` installed (see Dockerfile notes).

## Dockerizing a standalone WebAssembly app (nginx)

If you built a standalone WebAssembly client (no hosting server project), publish the client and serve the static output from nginx.

Example `Dockerfile` for static WASM (nginx):

```dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base

RUN ln -s /lib/x86_64-linux-gnu/libdl-2.24.so /lib/x86_64-linux-gnu/libdl.so
# install System.Drawing native dependencies
RUN apt-get update && apt-get install -y --allow-unauthenticated libgdiplus libc6-dev libx11-dev
RUN ln -s libgdiplus.so gdiplus.dll

USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081


# This stage is used to build the service project
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
# Install Python required for WASM tools
RUN apt-get update && apt-get install -y \
        python3 \
        python3-pip \
        python3-venv \
    && ln -s /usr/bin/python3 /usr/bin/python || true
# Install WASM tools
RUN dotnet workload install wasm-tools
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["YourServerApp/YourServerApp/YourServerApp.csproj", "YourServerApp/YourServerApp/"]
COPY ["YourServerApp/YourServerApp.Client/YourServerApp.Client.csproj", "YourServerApp/YourServerApp.Client/"]
RUN dotnet restore "./YourServerApp/YourServerApp/YourServerApp.csproj"
COPY . .
WORKDIR "/src/YourServerApp/YourServerApp"
RUN dotnet build "./YourServerApp.csproj" -c $BUILD_CONFIGURATION -o /app/build

# This stage is used to publish the service project to be copied to the final stage
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./YourServerApp.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# This stage is used in production or when running from VS in regular mode (Default when not using the Debug configuration)
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "YourServerApp.dll"]
```

N>
* Replace `YourServerApp.dll` and `YourServerApp.csproj` with your actual assembly name.

Then run locally:

```bash
docker build -t pdfviewer-wasm:latest .
docker run -d -p 6003:80 pdfviewer-wasm:latest
# Open http://localhost:6003
```

## Push image to Azure Container Registry (ACR)

Follow these UI-driven steps in the Azure portal (or use the CLI steps below):

1. Create a Container Registry
    * In the Azure portal, click **Create a resource** → search for **Container Registry** → **Create**.
    * Fill in the basic details: **Registry name**, **Subscription**, **Resource group** (use **Create new** if needed), and **Location**.
    * Choose a **SKU** (Basic is fine for testing). Click **Review + create**, then **Create**.

2. Enable credentials
    * Open the newly created Container Registry resource.
    * Under **Settings**, select **Access keys**.
    * Toggle **Admin user** to **Enabled** and note the **Login server** (e.g., myacr.azurecr.io), **Username**, and **Password** shown.

3. Tag and push your image from your build machine
    * Open PowerShell or a terminal on the machine where you built the Docker image.
    * Log in to the registry using the login server and admin credentials from the portal:

```bash
docker login <login-server>
# Enter username and password (from Access keys in the portal)

# Tag the image for your registry and push it:

docker tag pdfviewerwebservice:latest <login-server>/pdfviewerwebservice:latest
docker push <login-server>/pdfviewerwebservice:latest
```

![Push the docker into Azure container](../images/push_docker_into_azure_container.png)

## Create an App Service that runs your container

Follow these UI-focused steps in the Azure portal to create an App Service (Linux) and configure it to run your container image from ACR.

## Create an App Service that runs your container

Follow these UI-focused steps in the Azure portal to create an App Service (Linux) and configure it to run your container image from ACR.

1. Create the App Service
    * In the Azure portal click **Create a resource** → search **Web App** → **Create**.

    ![Create Azure Container](../images/create_azure_container.png)

    * Under **Basics**, set the **Subscription**, **Resource group** (use **Create new** if needed), and **Name** (this will form the app URL `https://<name>.azurewebsites.net`).

    ![Update bascis details](../images/update_bascis_details.png)

    * For **Publish**, choose **Docker Container**. For **Runtime stack** choose **Linux**.

    ![update the docker container for publish](../images/update_the_docker_container_for_publish.png)

    * Choose a hosting plan: click **Change size** and pick a plan (Basic/B1 or higher recommended for container workloads). Click **Review + create**, then **Create**.

    ![udpate hosting plan and review](../images/update_hosting_plan_and_review.png)

2. Configure the container settings
    * Open the App Service you created, then go to **Deployment** → **Container settings** (or **Settings** → **Container settings** in some portal views).
    * For **Image source** select **Azure Container Registry**.
    * Select your **Subscription** and the **Registry** you created earlier.
    * Under **Image and tag**, select the repository (for example `pdfviewerwebservice`) and the tag (for example `latest`).

    ![udpate container configuration](../images/udpate_container_configuration.png)

N> troubleshooting <br />
* Check container logs and the image locally if the app fails to start. <br />
* Ensure the container listens on port 80 (or configure the App Service container port setting to match your container). <br />
* Ensure native dependencies (SkiaSharp, `libgdiplus`, `libdl` symlinks) are present in the image; missing native libs commonly cause rendering/script errors. <br />
* For static WASM images served by nginx, confirm wasm MIME types and caching are working.

## Using Rancher Desktop / Docker on Windows

* Rancher Desktop (with dockerd/Moby) can be used in place of Docker Desktop. If using Rancher Desktop, select the `dockerd (moby)` runtime so standard `docker` commands behave as expected.
* If you encounter WSL or Rancher errors during installation, consult Rancher Desktop docs and community threads; a common issue and workaround is documented in the internal notes.

## Additional guidance

* If your project uses SkiaSharp.Views.Blazor on the server or client, double-check native runtime requirements and test rendering in the container.
* For Server interactive scenarios, register Syncfusion services and ensure SignalR message size settings match large-file processing requirements (see Getting Started examples).
* For WebAssembly interactive render modes, ensure `wasm-tools` workload is available when building locally or in CI: `dotnet workload install wasm-tools`.

![Published blazor server sample](../images/azure_container_published_blazor_webapps.png)

N> [View the Blazor Webapps Sample](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/ES-1015670-DockerPublish/Azure%20Container).

## See also

- [Getting started with SfPdfViewer in a Blazor Web App](../getting-started/web-app)
