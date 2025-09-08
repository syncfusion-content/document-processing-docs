---
layout: post
title: Getting Started with SmartPdfViewer in Blazor Web App | Syncfusion
description: Learn how to get started with SfSmartPdfViewer in Blazor Web App using AI interaction, smart redaction, and form filling.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Getting Started with Smart PDF Viewer

This section briefly explains how to include [Blazor Smart PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/blazor-smart-pdf-viewer) component in your Blazor Web App using [Visual Studio](https://visualstudio.microsoft.com/vs/) and Visual Studio code.

{% tabcontents %}

{% tabcontent Visual Studio %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/create-resource?pivots=web-portal)

N> Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Smart PDF Viewer Component is compatible with both `OpenAI` and `Azure OpenAI`, and fully support Server Interactivity mode apps.

## Create a new Blazor Web App in Visual Studio

You can create a **Blazor Web App** using Visual Studio 2022 via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vs) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio).

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Smart PDF Viewer and Themes NuGet in the App

To add **Blazor Smart PDF Viewer** component in the app, open the NuGet package manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), search and install [Syncfusion.Blazor.SfSmartPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfSmartPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/).

Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight razor tabtitle="Package Manager" %}

Install-Package Syncfusion.Blazor.SfSmartPdfViewer -Version 31.1.17
Install-Package Syncfusion.Blazor.Themes -Version 31.1.17

{% endhighlight %}
{% endtabs %}

N> Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components are available in [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). Refer to NuGet packages topic for available [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) list with component details.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/create-resource?pivots=web-portal)

N> Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Smart PDF Viewer Component is compatible with both `OpenAI` and `Azure OpenAI`, and fully support Server Interactivity mode apps.

## Create a new Blazor Web App in Visual Studio Code

You can create a **Blazor Web App** using Visual Studio 2022 via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vs) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio).

You need to configure the corresponding [Interactive render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-8.0#render-modes) and [Interactivity location](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vsc) while creating a Blazor Web Application.

For example, in a Blazor Web App with the `Server` interactive render mode, use the following commands.

{% tabs %}
{% highlight razor tabtitle="Blazor Web App" %}

dotnet new blazor -o BlazorWebApp -int Server
cd BlazorWebApp
cd BlazorWebApp.Client

{% endhighlight %}
{% endtabs %}

N> For more information on creating a Blazor Web App with various interactive modes and locations, refer to this [link](https://blazor.syncfusion.com/documentation/getting-started/blazor-web-app?tabcontent=visual-studio-code#render-interactive-modes).

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Smart PDF Viewer and Themes NuGet in the App

If you utilize `Server` render modes in the Blazor Web App need to be install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components NuGet packages within the server project.

* Press Ctrl+` to open the integrated terminal in Visual Studio Code.
* Ensure you’re in the project root directory where your `.csproj` file is located.
* Run the following command to install a `Syncfusion.Blazor.SfSmartPdfViewer` and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet package and ensure all dependencies are installed.

{% tabs %}
{% highlight razor tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.SfSmartPdfViewer -v 31.2.*
dotnet add package Syncfusion.Blazor.Themes -v 31.2.*
dotnet restore

{% endhighlight %}
{% endtabs %}

N> Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components are available in [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). Refer to NuGet packages topic for available [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) list with component details.

{% endtabcontent %}

{% endtabcontents %}

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service

| Interactive Render Mode | Description |
| -- | -- |
| Server | Open **~/_Imports.razor** file, which is located in the `Components` folder.|

Import the [Syncfusion.Blazor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.html) and [Syncfusion.Blazor.SmartPdfViewer](https://help.syncfusion.com//cr/blazor/Syncfusion.Blazor.SmartPdfViewer.html) namespace.

{% tabs %}
{% highlight razor tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.SmartPdfViewer

{% endhighlight %}
{% endtabs %}

If the **Interactive Render Mode** is set to `Server`, your project will contain a single **~/Program.cs** file. So, you should register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service only in that **~/Program.cs** file.

{% tabs %}
{% highlight razor tabtitle="Blazor Server App" hl_lines="5 7 10" %}

using Syncfusion.Blazor;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR(o => { o.MaximumReceiveMessageSize = 102400000; });

builder.Services.AddMemoryCache();

// Add service to the container.
builder.Services.AddSyncfusionBlazor();

var app = builder.Build();
....

{% endhighlight %}
{% endtabs %}

## To Configure Azure OpenAI Service

In **Visual Studio**, Go to Tools → NuGet Package Manager → Package Manager Console. Run these commands one by one:

{% tabs %}
{% highlight razor tabtitle="Package Manager" %}

Install-Package Azure.AI.OpenAI
Install-Package Microsoft.Extensions.AI
Install-Package Microsoft.Extensions.AI.OpenAI -Version 9.8.0-preview.1.25412.6

{% endhighlight %}
{% endtabs %}

In **Visual Studio Code**, Open terminal in VS Code. Run these commands:

{% tabs %}
{% highlight razor tabtitle="Package Manager" %}

dotnet add package Azure.AI.OpenAI
dotnet add package Microsoft.Extensions.AI
dotnet add package Microsoft.Extensions.AI.OpenAI --version 9.8.0-preview.1.25412.6

{% endhighlight %}
{% endtabs %}

To configure the AI service, add the following settings to the **~/Program.cs** file in your Blazor Server app. 

{% tabs %}
{% highlight razor tabtitle="Blazor Server App" hl_lines="10 11 12 13 14 15 17" %}

using Azure.AI.OpenAI;
using Microsoft.Extensions.AI;
using Sample.Components;
using Syncfusion.Blazor;
using Syncfusion.Blazor.AI;
using System.ClientModel;

var builder = WebApplication.CreateBuilder(args);

string azureOpenAiKey = "api-key";
string azureOpenAiEndpoint = "endpoint URL";
string azureOpenAiModel = "deployment-name";
AzureOpenAIClient azureOpenAIClient = new AzureOpenAIClient(new Uri(azureOpenAiEndpoint), new ApiKeyCredential(azureOpenAiKey));
IChatClient azureOpenAiChatClient = azureOpenAIClient.GetChatClient(azureOpenAiModel).AsIChatClient();
builder.Services.AddChatClient(azureOpenAiChatClient);

builder.Services.AddSingleton<IChatInferenceService, SyncfusionAIService>();

var app = builder.Build();
....

{% endhighlight %}
{% endtabs %}

Here,
* **apiKey**: “Azure OpenAI API Key”;
* **deploymentName**: “Azure OpenAI deployment name”;
* **endpoint**: “Azure OpenAI deployment end point URL”;

For **Azure OpenAI**, first [deploy an Azure OpenAI Service resource and model](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/create-resource?pivots=web-portal), then values for `apiKey`, `deploymentName` and `endpoint` will all be provided to you.

## To Configure Ollama for Self-Hosted AI Models

To use Ollama for running self-hosted models:

* **Download and install Ollama**
Visit [Ollama’s official website](https://ollama.com/) and install the application appropriate for your operating system.

* **Install the desired model from the Ollama library**
You can explore available models from the [Ollama Library](https://ollama.com/library) (e.g., llama2:13b, llama2:7b, mistral:7b, etc.).

To download and run a model (e.g., llama2:7b), use the following command:

```bash
ollama run llama2:7b
```

In **Visual Studio**, Go to Tools → NuGet Package Manager → Package Manager Console. Run these command:

{% tabs %}
{% highlight razor tabtitle="Package Manager" %}

Install-Package OllamaSharp -Version 5.3.6

{% endhighlight %}
{% endtabs %}

In **Visual Studio Code**, Open terminal in VS Code. Run these commands:

{% tabs %}
{% highlight razor tabtitle="Package Manager" %}

dotnet add package OllamaSharp --version 5.3.6

{% endhighlight %}
{% endtabs %}

Add the following settings to the **~/Program.cs** file in your Blazor Server app.

{% tabs %}
{% highlight razor tabtitle="Blazor Server App" hl_lines="11 14 15 16 17 18 21 22 23" %}

using Microsoft.Extensions.AI;
using OllamaSharp;
using Syncfusion.Blazor;
using Syncfusion.Blazor.AI;
...
var builder = WebApplication.CreateBuilder(args);
...
builder.Services.AddSyncfusionBlazor();

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

var app = builder.Build();
...

{% endhighlight %}
{% endtabs %}

N> Running Ollama locally may lead to slower response times due to system resource usage.
To accommodate this, you can configure the Syncfusion Smart PDF Viewer to disable timeout for AI assist view operations by setting the timeout to 0.
[Learn more](https://help.syncfusion.com/document-processing/pdf/smart-pdf-viewer/blazor/document-summarizer#timeout)

### To Check the Installed Model and Its Details in Ollama
- To verify which models are currently installed and available on your local Ollama server (example: running on port 11434), run the following command in your terminal or command prompt:

```bash

curl http://localhost:11434/api/tags

```

## Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Include the stylesheet reference in the `<head>` section and the script reference at the end of the `<body>` in the ~/Components/App.razor file as shown below:


```html
<head>
    ....
    <!-- Syncfusion Blazor Smart PDF Viewer control's theme style sheet -->
    <link href="_content/Syncfusion.Blazor.Themes/fluent2.css" rel="stylesheet" />
</head>

<body>
    ....
    <!-- Syncfusion Blazor Smart PDF Viewer control's scripts -->
    <script src="_content/Syncfusion.Blazor.SfSmartPdfViewer/scripts/syncfusion-blazor-sfsmartpdfviewer.min.js" type="text/javascript"></script>
</body>
```

N> Check out the [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) topic to discover various methods ([Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets), [CDN](https://blazor.syncfusion.com/documentation/appearance/themes#cdn-reference), and [CRG](https://blazor.syncfusion.com/documentation/common/custom-resource-generator)) for referencing themes in your Blazor application. Also, check out the [Adding Script Reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your Blazor application.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Smart PDF Viewer component

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Smart PDF Viewer component in the **~Pages/Home.razor** file.

{% tabs %}
{% highlight razor tabtitle="~/Home.razor" %}

@page "/"

<SfSmartPdfViewer Height="100%" Width="100%" DocumentPath="https://cdn.syncfusion.com/content/pdf/http-succinctly.pdf">
</SfSmartPdfViewer>

{% endhighlight %}
{% endtabs %}

* Press Ctrl+F5 (Windows) or ⌘+F5 (macOS) to launch the application. This will render the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Smart PDF Viewer component in your default web browser.

![Syncfusion Blazor Smart PDF Viewer](gettingstarted-images/smart-pdf-viewer.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/tree/master/GettingStarted).

## See also

* [Custom AI Service Integration in Blazor Smart PDF Viewer](../custom-ai-service)
* [Document Summarizer in Blazor Smart PDF Viewer](../document-summarizer)
* [Smart Redaction in Blazor Smart PDF Viewer](../smart-redaction)
* [Smart Fill in Blazor Smart PDF Viewer](../smart-fill)
