---
layout: post
title: Deepseek AI Service with Smart PDF Viewer in Blazor App | Syncfusion
description: Learn how to integrate and use the Syncfusion Smart PDF Viewer in a Blazor Web App with DeepSeek AI services.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Getting Started with Smart PDF Viewer using DeepSeek AI

This guide demonstrates how to integrate DeepSeek's powerful AI capabilities with Syncfusion Smart PDF Viewer in your Blazor App. 

## Prerequisites

Before you begin, ensure you have:

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* DeepSeek account and API key (see setup instructions below)

### Setting Up DeepSeek

1. **DeepSeek API Access**
   * Create a DeepSeek account at [platform.deepseek.com](https://platform.deepseek.com)
   * Navigate to [API Keys](https://platform.deepseek.com/api_keys)

2. **DeepSeek Models**

   For detailed specifications and pricing, visit the [DeepSeek Models Documentation](https://api-docs.deepseek.com/quick_start/pricing).


---

## Getting Started for DeepSeek AI with Smart PDF Viewer

After completing this setup, you can:

1. [Add Smart PDF Viewer to your Blazor pages](../blazor/getting-started/web-app.md)

---

## Install the following NuGet packages to your project:

open the NuGet package manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), search and install the following packages

1.[Microsoft.Extensions.AI](https://www.nuget.org/packages/Microsoft.Extensions.AI).
2.[Microsoft.SemanticKernel](https://www.nuget.org/packages/Microsoft.SemanticKernel).
3.[Microsoft.SemanticKernel.Connectors.AzureOpenAI](https://www.nuget.org/packages/Microsoft.SemanticKernel.Connectors.AzureOpenAI).

## Step 1: Create a Custom AI Service

To integrate DeepSeek with Syncfusion Smart PDF Viewer, we'll create a custom implementation of the `IChatInferenceService` interface. This interface acts as a bridge between Syncfusion Smart PDF Viewer and your AI service.

The `IChatInferenceService` interface is the bridge between Syncfusion Smart PDF Viewer and AI services:S

1. Create a new file named `MyCustomService.cs`
2. Add the following implementation:

{% tabs %}
{% highlight c# tabtitle="~/MyCustomService.cs" %}

using Syncfusion.Blazor.AI;
using Microsoft.Extensions.AI;

public class MyCustomService : IChatInferenceService
{
     private IChatClient _chatClient;

     public MyCustomService(IChatClient client)
     {
         this._chatClient = client ?? throw new ArgumentNullException(nameof(client));
     }

     /// <summary>
     /// Sends the chat parameters to the AI client and returns the response.
     /// Also checks and updates token usage.
     /// </summary>
     /// <param name="options">Chat parameters including messages and settings.</param>
     /// <returns>AI-generated response text.</returns
     public async Task<string> GenerateResponseAsync(ChatParameters options)
     {
         ChatOptions completionRequest = new ChatOptions
         {
             Temperature = options.Temperature ?? 0.5f,
             TopP = options.TopP ?? 1.0f,
             MaxOutputTokens = options.MaxTokens ?? 2000,
             FrequencyPenalty = options.FrequencyPenalty ?? 0.0f,
             PresencePenalty = options.PresencePenalty ?? 0.0f,
             StopSequences = options.StopSequences
         };
         try
         {
             ChatResponse completion = await _chatClient.GetResponseAsync(options.Messages[0].Text, completionRequest);
             string rawResponse = completion.Text.ToString();
             if (rawResponse.Contains("```html") || rawResponse.Contains("```"))
             {
                 rawResponse = rawResponse.Replace("```html", "").Replace("```", "").Trim();
             }
             return rawResponse;
         }
         catch (Exception ex)
         {
             throw new ApplicationException("Error generating AI response", ex);
         }
     }

}

{% endhighlight %}
{% endtabs %}

## Step 2: Configure the Blazor App

Configure your Blazor application to use the DeepSeek AI service with Syncfusion Smart PDF Viewer. This involves registering necessary services and setting up the dependency injection container.

{% tabs %}
{% highlight c# tabtitle="~/Program.cs" hl_lines="10 11 12 13 14 15 16 17 18 19 20 21 22 23" %}

using Syncfusion.Blazor.AI;
using Microsoft.Extensions.AI;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.ChatCompletion;
var builder = WebApplication.CreateBuilder(args);

....

builder.Services.AddSyncfusionBlazor();
string deepSeekApiKey = "Your API Key" ?? throw new InvalidOperationException("DEEPSEEK_API_KEY environment variable is not set.");
string deploymentName = "Your Modle Name"; // This must match your Azure deployment name
string endpoint = "https://deepseek-resourceres.services.ai.azure.com/"; // Base endpoint only
var kernelBuilder = Kernel.CreateBuilder().AddAzureOpenAIChatCompletion(
        deploymentName: deploymentName,
        endpoint: endpoint,
        apiKey: deepSeekApiKey);
Kernel kernel = kernelBuilder.Build();
IChatClient deepSeekChatClient = kernel.GetRequiredService<IChatCompletionService>().AsChatClient();
builder.Services.AddChatClient(deepSeekChatClient);
builder.Services.AddScoped<IChatInferenceService, MyCustomService>(sp =>
{
    return new MyCustomService(deepSeekChatClient);
});
 
var app = builder.Build();
....

{% endhighlight %}
{% endtabs %}

[View sample in GitHub]()

## See also

* [Custom AI Service Integration in Blazor Smart PDF Viewer](./custom-ai-service)
* [Gemini AI Service in Blazor Smart PDF Viewer](./gemini-service)
* [Groq AI Service in Blazor Smart PDF Viewer](./groq-service)