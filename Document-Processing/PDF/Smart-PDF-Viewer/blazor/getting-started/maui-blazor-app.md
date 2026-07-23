---
layout: post
title: Use Smart PDF Viewer in Blazor MAUI in Windows | Syncfusion
description: Learn how to add and run the Syncfusion Blazor Smart PDF Viewer in a .NET MAUI Blazor app on Windows and Android, including package installation.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Getting Started with Smart PDF Viewer in Blazor MAUI App

This section explains how to add the Syncfusion&reg; Blazor Smart PDF Viewer component to a .NET MAUI Blazor app and run it on Windows and Android.

## Prerequisites

To use MAUI project templates, install the Mobile development with .NET workload for Visual Studio. For detailed steps, see [Install .NET MAUI](https://learn.microsoft.com/en-us/dotnet/MAUI/get-started/installation?tabs=vswin) on Windows in the Microsoft documentation. For more information, see the [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements).

## Create a new Blazor MAUI App in Visual Studio

Create a new .NET MAUI Blazor App in Visual Studio by selecting the template named **.NET MAUI Blazor Hybrid APP**.

## Install Smart PDF Viewer NuGet package in Blazor MAUI App

To add NuGet packages into the Blazor MAUI app, open the NuGet package manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), search and install [Syncfusion.Blazor.SfSmartPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfSmartPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/). See the [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for the full package list and component details.

Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight c# tabtitle="Package Manager" %}

Install-Package Syncfusion.Blazor.SfSmartPdfViewer -Version {{ site.releaseversion }}
Install-Package Syncfusion.Blazor.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service

* In the `~/_Imports.razor` file, add the following namespaces:

{% tabs %}
{% highlight razor tabtitle="_Imports.razor" %}

@using Syncfusion.Blazor 
@using Syncfusion.Blazor.SmartPdfViewer

{% endhighlight %}
{% endtabs %}

* Add the `Syncfusion.Blazor` namespace to the `~/MauiProgram.cs` file.

{% tabs %}
{% highlight c# tabtitle="MauiProgram.cs" %}

using Syncfusion.Blazor;

{% endhighlight %}
{% endtabs %}

* Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service in the `~/MauiProgram.cs` file.

{% tabs %}
{% highlight c# tabtitle="MauiProgram.cs" %}

// Enable memory caching
builder.Services.AddMemoryCache();
// Register Syncfusion Blazor service
builder.Services.AddSyncfusionBlazor();

{% endhighlight %}
{% endtabs %}

N> Ensure the Syncfusion<sup style="font-size:70%">&reg;</sup> license is registered in the application before using Syncfusion<sup style="font-size:70%">&reg;</sup> components. See the [Licensing overview](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Licensing.html) for details on registering a license key.

## Configure Azure OpenAI Service

This article is required only when enabling AI-powered features in Smart PDF Viewer (such as document summarization, smart redaction, or smart fill). It is not required for basic PDF rendering.

In **Visual Studio**, Go to Tools → NuGet Package Manager → Package Manager Console. Run these commands one by one:

{% tabs %}
{% highlight c# tabtitle="Package Manager" %}

Install-Package Azure.AI.OpenAI
Install-Package Microsoft.Extensions.AI
Install-Package Microsoft.Extensions.AI.OpenAI

{% endhighlight %}
{% endtabs %}

In **Visual Studio Code**, open the terminal and run these commands:

{% tabs %}
{% highlight c# tabtitle=".NET CLI" %}

dotnet add package Azure.AI.OpenAI
dotnet add package Microsoft.Extensions.AI
dotnet add package Microsoft.Extensions.AI.OpenAI

{% endhighlight %}
{% endtabs %}

Add the following namespaces to the `~/MauiProgram.cs` file.

{% tabs %}
{% highlight c# tabtitle="MauiProgram.cs" %}

using Azure.AI.OpenAI;
using Microsoft.Extensions.AI;
using Syncfusion.Blazor.AI;
using System.ClientModel;

{% endhighlight %}
{% endtabs %}

To configure the AI service, add the following settings to the *`~/MauiProgram.cs` file in your MAUI Blazor app.

{% tabs %}
{% highlight c# tabtitle="MauiProgram.cs" %}

// Azure OpenAI configuration values
string azureOpenAiKey = "api-key";
string azureOpenAiEndpoint = "endpoint URL";
string azureOpenAiModel = "deployment-name";
// Configure Azure OpenAI client and register chat with Syncfusion AI services
AzureOpenAIClient azureOpenAIClient = new AzureOpenAIClient(new Uri(azureOpenAiEndpoint), new ApiKeyCredential(azureOpenAiKey));
IChatClient azureOpenAiChatClient = azureOpenAIClient.GetChatClient(azureOpenAiModel).AsIChatClient();
builder.Services.AddChatClient(azureOpenAiChatClient);
builder.Services.AddSingleton<IChatInferenceService, SyncfusionAIService>();

{% endhighlight %}
{% endtabs %}

Here,
* **apiKey**: Azure OpenAI API key.
* **deploymentName**: Azure OpenAI deployment name.
* **endpoint**: Azure OpenAI deployment endpoint URL.

For **Azure OpenAI**, first [deploy an Azure OpenAI Service resource and model](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/create-resource?pivots=web-portal), then the values for `azureOpenAiKey`, `azureOpenAiModel`, and `azureOpenAiEndpoint` will be available.

## Add stylesheet and script resources

Add the following stylesheet and script to the `~/wwwroot/index.html` file.

Include the stylesheet reference in the `<head>` of the `~/wwwroot/index.html` file.

{% tabs %}
{% highlight html %}

<!-- Syncfusion Blazor Smart PDF Viewer control's theme style sheet -->
<link href="_content/Syncfusion.Blazor.Themes/fluent2.css" rel="stylesheet" />

{% endhighlight %}
{% endtabs %}

Add the script reference at the end of the `<body>` in the `~/wwwroot/index.html` file.

{% tabs %}
{% highlight html %}

<!-- Syncfusion Blazor Smart PDF Viewer control's scripts -->
<script src="_content/Syncfusion.Blazor.SfSmartPdfViewer/scripts/syncfusion-blazor-sfsmartpdfviewer.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

## Add Smart PDF Viewer component

Add the Syncfusion Blazor Smart PDF Viewer component in the **~/Pages/Index.razor** file.

{% tabs %}
{% highlight razor %}

<SfSmartPdfViewer Height="100%" Width="100%" DocumentPath="https://cdn.syncfusion.com/content/pdf/http-succinctly.pdf">
</SfSmartPdfViewer>

{% endhighlight %}
{% endtabs %}

The following parameters are used in the `SfSmartPdfViewer` component:

* **Height**: Height of the PDF Viewer (for example, `"100%"`).
* **Width**: Width of the PDF Viewer (for example, `"100%"`).
* **DocumentPath**: URL of the PDF document to be loaded. The host must allow CORS requests, or the document must be served from the same origin.

## Run on Windows

Run the sample in Windows Machine mode. The application will run the Blazor MAUI app targeting Windows.

![Run MAUI app on Windows target](gettingstarted-images/Windows-machine.png)

After the application launches, the PDF Viewer component renders the specified PDF document within its interface.

![Blazor Smart PDF Viewer rendered on Windows](gettingstarted-images/Windows-maui-output.png)

## Run on Android

Set the debug target to the Android emulator in Visual Studio and run the application. The Blazor MAUI app launches on the Android emulator and the Smart PDF Viewer renders the PDF document.

1. Add the following asset files to the project by creating an Assets folder (Platforms → Android → Assets):  
   [model](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/blob/master/Common/LocalEmbeddingsModel/model.onnx) and [vocab](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/blob/master/Common/LocalEmbeddingsModel/vocab.txt).
	
2. Right-click the added files and set Properties → Build Action to AndroidAsset.
3. Add the following entries to the project .csproj file:

    {% tabs %} 
    {% highlight xml tabtitle="project .csproj file" %}

    <ItemGroup>
        <AndroidAsset Include="Platforms\Android\Assets\model.onnx" />
        <AndroidAsset Include="Platforms\Android\Assets\vocab.txt" />
    </ItemGroup>

    {% endhighlight %} 
    {% endtabs %}

4. Add the following code in `MauiProgram.cs`:

{% tabs %}
{% highlight c# tabtitle="MauiProgram.cs" hl_lines="7 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25" %}

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
       ...
       builder.Services.AddSyncfusionBlazor();
#if ANDROID	   
       EnsureModelExistsAsync();
#endif	   
       return builder.Build();
    }
    private static async void EnsureModelExistsAsync()
    {
        string[] requiredFiles = { "model.onnx", "vocab.txt" };
        string targetDir = Path.Combine(FileSystem.AppDataDirectory, "LocalEmbeddingsModel/default");
        Directory.CreateDirectory(targetDir);
        foreach (string fileName in requiredFiles)
        {
            string targetPath = Path.Combine(targetDir, fileName);
            if (!File.Exists(targetPath))
            {
                using Stream assetStream = await FileSystem.OpenAppPackageFileAsync(fileName);
                using FileStream fileStream = File.Create(targetPath);
                await assetStream.CopyToAsync(fileStream);
            }
        }
    }
}
{% endhighlight %}
{% endtabs %}

N> Refer [here](https://learn.microsoft.com/en-us/dotnet/maui/android/emulator/device-manager#android-device-manager-on-windows) to set up the Android emulator with Android Device Manager.

![Run MAUI app on Android emulator](gettingstarted-images/android-maui.png)

N> If any errors occur while using the Android Emulator, see [Troubleshooting the Android Emulator](https://learn.microsoft.com/en-us/dotnet/maui/android/emulator/troubleshooting).

![Blazor Smart PDF Viewer rendered on Android emulator](gettingstarted-images/android-emulator.png)

> [View Sample in GitHub](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/tree/master/Getting%20Started/MAUI%20Blazor%20App).

## See also

* [Document Summarizer in Blazor Smart PDF Viewer](../document-summarizer)
* [Smart Redaction in Blazor Smart PDF Viewer](../smart-redaction)
* [Smart Fill in Blazor Smart PDF Viewer](../smart-fill)