---
layout: post
title: Getting Started with Blazor Smart PDF Viewer using Ollama | Syncfusion
description: Step-by-step guide to add and configure the SfSmartPdfViewer in a Blazor with Ollama as the self-hosted AI provider, including smart redaction and form filling.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Getting Started with Smart PDF Viewer using Ollama

This section explains how to include the [Blazor Smart PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/blazor-smart-pdf-viewer) component in your Blazor Web App using [Visual Studio](https://visualstudio.microsoft.com/vs/) and Visual Studio Code, and configure [Ollama](https://ollama.com/) as the self-hosted AI service that powers the document summarizer, smart redaction, and smart fill features.

{% tabcontents %}

{% tabcontent Visual Studio %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* [Ollama](https://ollama.com/) installed on the host machine

N> The Blazor Smart PDF Viewer component supports Ollama as a self-hosted AI provider and works with Server interactivity mode apps.

## Create a new Blazor Web App in Visual Studio

Create a **Blazor Web App** using Visual Studio 2022 via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vs) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio).

## Install Blazor Smart PDF Viewer and Themes NuGet in the App

To add the **Blazor Smart PDF Viewer** component, open the NuGet Package Manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), search for and install [Syncfusion.Blazor.SfSmartPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfSmartPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/).

Alternatively, use the following package manager commands.

{% tabs %}
{% highlight c# tabtitle="Package Manager" %}

Install-Package Syncfusion.Blazor.SfSmartPdfViewer -Version {{ site.releaseversion }}
Install-Package Syncfusion.Blazor.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

N> Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). Refer to the [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for the full package list and component details. A valid Syncfusion license key must be registered in the application.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* [Ollama](https://ollama.com/) installed on the host machine

N> The Blazor Smart PDF Viewer component supports Ollama as a self-hosted AI provider and works with Server interactivity mode apps.

## Create a new Blazor Web App in Visual Studio Code

Create a **Blazor Web App** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vsc) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio).

Configure the appropriate [Interactive render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-8.0#render-modes) and [Interactivity location](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vsc) when creating the Blazor Web App.

For example, in a Blazor Web App with the `Server` interactive render mode, use the following commands.

{% tabs %}
{% highlight razor tabtitle="Blazor Web App" %}

dotnet new blazor -o BlazorWebApp -int Server
cd BlazorWebApp

{% endhighlight %}
{% endtabs %}

N> For more information on creating a Blazor Web App with various interactive modes and locations, refer to this [guide](https://blazor.syncfusion.com/documentation/getting-started/blazor-web-app?tabcontent=visual-studio-code#render-interactive-modes).

## Install Blazor Smart PDF Viewer and Themes NuGet in the App

When using the `Server` render mode in a Blazor Web App, install the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor component packages in the server project where the components execute.

* Press Ctrl+` to open the integrated terminal in Visual Studio Code.
* Ensure the current directory contains the project `.csproj` file.
* Run the following commands to install [Syncfusion.Blazor.SfSmartPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfSmartPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/), then restore the solution.

{% tabs %}
{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.SfSmartPdfViewer -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet restore

{% endhighlight %}
{% endtabs %}

N> Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). Refer to the [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for the full package list and component details.

{% endtabcontent %}

{% tabcontent .NET CLI %}

## Prerequisites

Install the latest version of [.NET SDK](https://dotnet.microsoft.com/en-us/download). If you previously installed the SDK, you can determine the installed version by executing the following command in a command prompt (Windows) or terminal (macOS) or command shell (Linux).

{% tabs %}
{% highlight c# tabtitle=".NET CLI" %}

dotnet --version

{% endhighlight %}
{% endtabs %}

## Create a new Blazor Web App using .NET CLI

Run the following command to create a new Blazor Web App in a command prompt (Windows) or terminal (macOS) or command shell (Linux). For detailed instructions, refer to the [Blazor Web App Getting Started](https://blazor.syncfusion.com/documentation/getting-started/blazor-web-app?tabcontent=.net-cli) documentation.

For example, in a Blazor Web App with the `Server` interactive render mode, use the following commands:

{% tabs %}
{% highlight c# tabtitle=".NET CLI" %}

dotnet new blazor -o BlazorWebApp -int Server
cd BlazorWebApp

{% endhighlight %}
{% endtabs %}

## Install Blazor SfSmartPdfViewer and Themes NuGet in the App

* Open a command prompt, terminal, or shell.
* Ensure you’re in the project root directory where your `.csproj` file is located (or the Client project if applicable).
* Run the following command to install a [Syncfusion.Blazor.SfSmartPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfSmartPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet package and ensure all dependencies are installed.

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.SfSmartPdfViewer -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet restore

{% endhighlight %}

{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service

| Interactive Render Mode | Description |
| -- | -- |
| Server | Open `~/_Imports.razor` file, which is located in the `Components` folder.|

Import the [Syncfusion.Blazor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.html) and [Syncfusion.Blazor.SmartPdfViewer](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SmartPdfViewer.html) namespaces.

{% tabs %}
{% highlight razor tabtitle="_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.SmartPdfViewer

{% endhighlight %}
{% endtabs %}

If the **Interactive Render Mode** is set to `Server`, the project contains a single `~/Program.cs` file. Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service in that `~/Program.cs` file. The configured SignalR maximum message size and memory cache support large document streaming and caching for better performance. Ensure the Syncfusion license is registered during application startup.

Add the `Syncfusion.Blazor` namespace to the `Program.cs` file.

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

using Syncfusion.Blazor;

{% endhighlight %}
{% endtabs %}

Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service in the `~/Program.cs` file after the **builder** is created in the Blazor Web App.

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

// Configure SignalR (with increased message size) and enable memory caching
builder.Services.AddSignalR(o => { o.MaximumReceiveMessageSize = 102400000; });
builder.Services.AddMemoryCache();
// Register Syncfusion Blazor service
builder.Services.AddSyncfusionBlazor();

{% endhighlight %}
{% endtabs %}

## To Configure Ollama for Self-Hosted AI Models

### Download and install Ollama

Install the Ollama application for your operating system from [Ollama’s official website](https://ollama.com/).

### Install the desired model

Explore the available models in the [Ollama Library](https://ollama.com/library) (for example, `llama2:13b`, `llama2:7b`, `mistral:7b`).

To download and run a model (for example, `llama2:7b`), run the following command in a terminal or command prompt:

{% tabs %}
{% highlight bash tabtitle="Command Line" %}

ollama run llama2:7b

{% endhighlight %}
{% endtabs %}

### Install OllamaSharp NuGet package

In **Visual Studio**, Go to Tools → NuGet Package Manager → Package Manager Console. Run this command:

{% tabs %}
{% highlight c# tabtitle="Package Manager" %}

Install-Package OllamaSharp -Version 5.3.6

{% endhighlight %}
{% endtabs %}

In **Visual Studio Code**, open the terminal in VS Code and run this command:

{% tabs %}
{% highlight c# tabtitle="Package Manager" %}

dotnet add package OllamaSharp --version 5.3.6

{% endhighlight %}
{% endtabs %}

### Add namespaces to Program.cs

Add the Ollama and AI service namespaces to the `Program.cs` file.

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

using Microsoft.Extensions.AI;
using OllamaSharp;
using Syncfusion.Blazor;
using Syncfusion.Blazor.AI;

{% endhighlight %}
{% endtabs %}

### Configure Ollama in Program.cs

Add the following settings to the `~/Program.cs` file in the Blazor Server app after the **builder** is created.

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

// Define the name of the AI model to use from Ollama (e.g., llama2:13b, mistral:7b, etc.)
string aiModel = "llama2:7b";

// By default, Ollama runs on port 11434, you can also customize this port manually.
HttpClient httpClient = new HttpClient
{
    BaseAddress = new Uri("http://localhost:11434"), // Ollama server address
    Timeout = Timeout.InfiniteTimeSpan // Supports extended processing time for AI responses
};

// Initialize the chat client using the Ollama API and the specified model
IChatClient chatClient = new OllamaApiClient(httpClient, aiModel);
builder.Services.AddChatClient(chatClient);
builder.Services.AddSingleton<IChatInferenceService, SyncfusionAIService>();

{% endhighlight %}
{% endtabs %}

Here,
* **aiModel**: Name of the Ollama model to use (for example, `llama2:7b`, `mistral:7b`).
* **httpClient.BaseAddress**: Address of the local Ollama server. Defaults to `http://localhost:11434`.

N> Running Ollama locally may lead to slower response times due to system resource usage. To accommodate this, the Syncfusion Smart PDF Viewer can disable timeout for AI Assist view operations by setting the timeout to 0. [Learn more](https://help.syncfusion.com/document-processing/pdf/smart-pdf-viewer/blazor/document-summarizer#timeout)

### Check the installed model and its details in Ollama

To verify which models are currently installed and available on the local Ollama server (for example, running on port 11434), run the following command in a terminal or command prompt:

{% tabs %}
{% highlight bash tabtitle="Curl" %}

curl http://localhost:11434/api/tags

{% endhighlight %}
{% endtabs %}

## Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets).

Include the stylesheet reference in the `<head>` section in the `~/Components/App.razor` file.

{% tabs %}
{% highlight html %}

<!-- Syncfusion Blazor Smart PDF Viewer control's theme style sheet -->
<link href="_content/Syncfusion.Blazor.Themes/fluent2.css" rel="stylesheet" />

{% endhighlight %}
{% endtabs %}


Add script reference at the end of the `<body>` in the `~/Components/App.razor` file as shown below.

{% tabs %}
{% highlight html %}

<!-- Syncfusion Blazor Smart PDF Viewer control's scripts -->
<script src="_content/Syncfusion.Blazor.SfSmartPdfViewer/scripts/syncfusion-blazor-sfsmartpdfviewer.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

N> Review the [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) topic to discover various methods ([Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets), [CDN](https://blazor.syncfusion.com/documentation/appearance/themes#cdn-reference), and [CRG](https://blazor.syncfusion.com/documentation/common/custom-resource-generator)) for referencing themes in a Blazor application. Also see [Adding script reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) for different approaches to include scripts.

## Add Blazor Smart PDF Viewer component

N> If the interactivity location is set to Global and the render mode is set to Auto, WebAssembly, or Server, the render mode is configured in the `App.razor` file by default.

If the interactivity location is set to Per page/component, define a render mode at the top of the ~Pages/.razor component as follows:

{% tabs %}
{% highlight razor %}

@* Your App render mode define here *@
@rendermode InteractiveServer

{% endhighlight %}
{% endtabs %}

Add the Blazor Smart PDF Viewer component in the `~Pages/Home.razor` file.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}
@rendermode InteractiveServer

<SfSmartPdfViewer Height="100%" Width="100%" DocumentPath="https://cdn.syncfusion.com/content/pdf/http-succinctly.pdf">
</SfSmartPdfViewer>

{% endhighlight %}
{% endtabs %}

* Press Ctrl+F5 (Windows) or ⌘+F5 (macOS) to launch the application. This renders the Blazor Smart PDF Viewer component in the default web browser.

![Blazor Smart PDF Viewer rendering a PDF document](gettingstarted-images/smart-pdf-viewer.png)

> [View sample in GitHub](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/tree/master/Getting%20Started).

## See also

* [Getting Started with Blazor Smart PDF Viewer Web App](web-app)
* [Custom AI Service Integration in Blazor Smart PDF Viewer](../custom-ai-service)
* [Document Summarizer in Blazor Smart PDF Viewer](../document-summarizer)
* [Smart Redaction in Blazor Smart PDF Viewer](../smart-redaction)
* [Smart Fill in Blazor Smart PDF Viewer](../smart-fill)
