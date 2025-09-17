---
layout: post
title: Deploy SfSmartPdfViewer in Blazor MAUI in windows | Syncfusion
description: Learn how to deploy SfSmartPdfViewer in Blazor MAUI Application on Windows in Syncfusion Blazor SfSmartPdfViewer component and much more details.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Using Smart PDF Viewer Component in the Blazor MAUI app 

In this section, we'll guide you through the process of adding Syncfusion&reg; Blazor Smart PDF Viewer component to your Blazor Maui app. We'll break it down into simple steps to make it easy to follow.

## Prerequisites

To use the MAUI project templates, install the Mobile development with the .NET extension for Visual Studio. For more details, refer to [here](https://learn.microsoft.com/en-us/dotnet/MAUI/get-started/installation?tabs=vswin).

## Create a new Blazor MAUI App in Visual Studio

Create a new Blazor MAUI app and by selecting the template **.NET MAUI Blazor Hybrid APP ** in VS.

## Install Smart PDF Viewer NuGet package in Blazor Maui App

Add the following NuGet packages into the Blazor Maui app.

* [Syncfusion.Blazor.SfSmartPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfSmartPdfViewer) 
* [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes)

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service

* In the **~/_Imports.razor** file, add the following namespaces:

{% tabs %}
{% highlight razor tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor 
@using Syncfusion.Blazor.SmartPdfViewer

{% endhighlight %}
{% endtabs %}

* Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service in the **~/MauiProgram.cs** file.

{% tabs %}
{% highlight c# tabtitle="~/MauiProgram.cs" hl_lines="3 20 28" %}

using Microsoft.Extensions.Logging;
using MauiBlazorWindow.Data;
using Syncfusion.Blazor;

namespace MauiBlazorWindow;

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts =>
            {
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
            });

        builder.Services.AddMauiBlazorWebView();
        builder.Services.AddMemoryCache();

#if DEBUG
        builder.Services.AddBlazorWebViewDeveloperTools();
        builder.Logging.AddDebug();
#endif

        builder.Services.AddSingleton<WeatherForecastService>();
        builder.Services.AddSyncfusionBlazor();
		
        return builder.Build();
    }
}

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

To configure the AI service, add the following settings to the **~/MauiProgram.cs** file in your Blazor Server app. 

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

## Adding stylesheet and script

Add the following stylesheet and script to the head section of the **~/wwwroot/index.html** file.

{% tabs %}
{% highlight html %}

<head>
    <!-- Syncfusion Blazor Smart PDF Viewer control's theme style sheet -->
    <link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
    <!-- Syncfusion Blazor Smart PDF Viewer control's scripts -->
    <script src="_content/Syncfusion.Blazor.SfSmartPdfViewer/scripts/syncfusion-blazor-sfsmartpdfviewer.min.js" type="text/javascript"></script>
</head>

{% endhighlight %}
{% endtabs %}

## Add Smart PDF Viewer component

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer (Next Gen) component in the **~/Pages/Index.razor** file.

{% tabs %}
{% highlight razor %}

@page "/"

<SfSmartPdfViewer Height="100%" Width="100%" DocumentPath="https://cdn.syncfusion.com/content/pdf/http-succinctly.pdf">
</SfSmartPdfViewer>

{% endhighlight %}
{% endtabs %}

## Run on Windows

Run the sample in Windows Machine mode, and it will run Blazor MAUI in Windows.

![Run Windows machine](gettingstarted-images/Windows-machine.png)

Upon successfully launching the application, the PDF Viewer component will seamlessly render the specified PDF document within its interface.

![Blazor SfSmartPdfViewerPdfViewer Component](gettingstarted-images/Windows-maui-output.png)

## Run on Android

To run the PDF Viewer in a Blazor Android MAUI application using the Android emulator, follow these steps:

1. Add the following Assets files in your Project by creating Assets folder(Platform -> Android -> Assets)
	[model](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/blob/master/Common/LocalEmbeddingsModel/model.onnx) & [vocab](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/blob/master/Common/LocalEmbeddingsModel/vocab.txt)
	
2. Right click the Added files and go to (Properties -> BuildAction) set as AndroidAsset.
3. Add the following code in your .csproj file	
```
<ItemGroup>
	<AndroidAsset Include="Platforms\Android\Assets\model.onnx" />
	<AndroidAsset Include="Platforms\Android\Assets\vocab.txt" />
</ItemGroup>
```
4. Add the following code in your MauiProgram.cs file

{% tabs %}
{% highlight c# tabtitle="~/MauiProgram.cs" hl_lines="7 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25" %}

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

![Run Windows machine](gettingstarted-images/android-maui.png)

Refer [here](https://learn.microsoft.com/en-us/dotnet/maui/android/emulator/device-manager#android-device-manager-on-windows) to install and launch Android emulator.

N> If you encounter any errors while using the Android Emulator, refer to the following link for troubleshooting guidance[Troubleshooting Android Emulator](https://learn.microsoft.com/en-us/dotnet/maui/android/emulator/troubleshooting).

![Blazor SfPdfViewer Component](gettingstarted-images/android-emulator.png)

>[View Sample in GitHub](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/tree/master/GettingStartedMAUI).

## See also

* [Document Summarizer in Blazor Smart PDF Viewer](../document-summarizer)
* [Smart Redaction in Blazor Smart PDF Viewer](../smart-redaction)
* [Smart Fill in Blazor Smart PDF Viewer](../smart-fill).
* [Render PDF Document from embedded source in the MAUI Android app](../how-to/deploy-maui-using-android-emulator).