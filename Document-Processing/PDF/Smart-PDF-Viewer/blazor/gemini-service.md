---
layout: post
title: Gemini AI Service with Smart PDF Viewer in Blazor App | Syncfusion
description: Learn how to implement a custom AI service using Google's Gemini API with Syncfusion Smart PDF Viewer in a Blazor App.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Getting Started with Smart PDF Viewer using Gemini AI Service

This article provides step-by-step instructions for integrating and using the Syncfusion Blazor Smart PDF Viewer with Gemini AI services in a Blazor app.

## Prerequisites

Before you begin, ensure you have:

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* [Gemini API key](https://ai.google.dev/gemini-api/docs/api-key) — obtain an API key from Google AI Studio
* Syncfusion Blazor packages installed and a valid license key registered.

## Models

For a complete list of models and their capabilities, see the [Gemini models documentation](https://ai.google.dev/gemini-api/docs/models).

## Getting Started for Gemini AI with Smart PDF Viewer

After completing this setup, you can:

1. [Add Smart PDF Viewer to your Blazor pages](../blazor/getting-started/web-app)

---
## Install the following NuGet packages to your project:

Open the NuGet Package Manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), then search for and install the following packages:

1. [Microsoft.Extensions.AI](https://www.nuget.org/packages/Microsoft.Extensions.AI).
2. [Microsoft.SemanticKernel](https://www.nuget.org/packages/Microsoft.SemanticKernel).
3. [Microsoft.SemanticKernel.Connectors.Google](https://www.nuget.org/packages/Microsoft.SemanticKernel.Connectors.Google/).

## Step 1: Create a Custom AI Service

The Syncfusion Smart PDF Viewer is designed to work with different AI backends through the `IChatInferenceService` interface. This section explains how to create a custom implementation that connects the Smart PDF Viewer to the Gemini AI service.

### Understanding the Interface

The `IChatInferenceService` interface acts as the bridge between the Syncfusion Blazor Smart PDF Viewer and AI services.

1. Create a new file named `MyCustomService.cs`.
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

Configure the Blazor app to use the Gemini AI service with the Syncfusion Blazor Smart PDF Viewer. This involves registering the necessary services and setting up dependency injection.

{% tabs %}
{% highlight c# tabtitle="~/Program.cs" hl_lines="10 11 12 13 14 15 16 17 18 19 20 21" %}

using Syncfusion.Blazor.AI;
using Microsoft.Extensions.AI;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.ChatCompletion;
var builder = WebApplication.CreateBuilder(args);

....

builder.Services.AddSyncfusionBlazor();
string geminiApiKey = "Your API Key" ?? throw new InvalidOperationException("GEMINI_API_KEY environment variable is not set.");
string geminiAiModel = "Your Model Name";
#pragma warning disable SKEXP0070
var kernelBuilder = Kernel.CreateBuilder().AddGoogleAIGeminiChatCompletion(geminiAiModel, geminiApiKey);
Kernel kernel = kernelBuilder.Build();
#pragma warning disable SKEXP0001
IChatClient geminiChatClient = kernel.GetRequiredService<IChatCompletionService>().AsChatClient();
builder.Services.AddChatClient(geminiChatClient);
builder.Services.AddScoped<IChatInferenceService, MyCustomService>(sp =>
{
    return new MyCustomService(geminiChatClient);
});

var app = builder.Build();
....

{% endhighlight %}
{% endtabs %}

N> [View sample in GitHub](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/tree/master/Custom%20Services/GeminiService)

## See also

* [Custom AI Service Integration in Blazor Smart PDF Viewer](./custom-ai-service)
* [Groq AI Service in Blazor Smart PDF Viewer](./groq-service)
* [DeepSeek AI Service in Blazor Smart PDF Viewer](./deepseek-service)