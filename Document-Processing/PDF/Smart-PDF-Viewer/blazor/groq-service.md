---
layout: post
title: Groq AI service with Smart PDF Viewer in a Blazor app | Syncfusion
description: Learn how to integrate a custom AI service using the Groq API with Syncfusion Smart PDF Viewer in a Blazor app.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Getting Started with Smart PDF Viewer using Groq AI Service

This article provides step-by-step instructions for integrating and using Syncfusion Smart PDF Viewer with the Groq AI service in a Blazor app.

## Prerequisites

Before you begin, ensure you have:

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* A Groq account and API key (see setup instructions below)
* Syncfusion Blazor packages installed and a valid license registered if required

### Setting Up Groq

1. **Create a Groq account**
   * Visit [Groq Cloud Console](https://console.groq.com)
   * Sign up for a new account or sign in
   * Complete the verification process

2. **Get your API key**
   * Navigate to [API Keys](https://console.groq.com/keys) in the Groq Console
   * Click "Create API Key"

### Models

For detailed model specifications and capabilities, visit the [Groq Models documentation](https://console.groq.com/docs/models).

## Getting Started for Groq AI with Smart PDF Viewer

After completing this setup, you can:

1. [Add Smart PDF Viewer to your Blazor pages](../blazor/getting-started/web-app)

---

## Install the following NuGet packages to your project:

Open the NuGet Package Manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), then search for and install the following packages:

1. [Microsoft.Extensions.AI](https://www.nuget.org/packages/Microsoft.Extensions.AI)
2. [Microsoft.SemanticKernel](https://www.nuget.org/packages/Microsoft.SemanticKernel)
3. [Microsoft.SemanticKernel.Connectors.OpenAI](https://www.nuget.org/packages/Microsoft.SemanticKernel.Connectors.OpenAI)

## Step 1: Create a Custom AI Service

Create a bridge between Syncfusion Smart PDF Viewer and the Groq service. This enables Smart PDF Viewer to use Groq's AI capabilities through the `IChatInferenceService` interface.

The `IChatInferenceService` interface is part of the Syncfusion infrastructure that allows Smart PDF Viewer to work with different AI providers:

1. Create a new file named `MyCustomService.cs`
2. Add the required Syncfusion and Microsoft namespaces
3. Implement the interface as shown below

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

Configure the Blazor app to use the Groq AI service with Syncfusion Smart PDF Viewer. This involves registering the necessary services and setting up the dependency injection container.

{% tabs %}
{% highlight c# tabtitle="~/Program.cs" hl_lines="10 11 12 13 14 15 16 17 18 19 20 21 22" %}

using Syncfusion.Blazor.AI;
using Microsoft.Extensions.AI;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.ChatCompletion;
var builder = WebApplication.CreateBuilder(args);

....

builder.Services.AddSyncfusionBlazor();
string groqApiKey = "Your API Key"?? throw new InvalidOperationException("GROQ_API_KEY environment variable is not set.");
string groqModel = "Your Model Name";
var kernelBuilder = Kernel.CreateBuilder().AddOpenAIChatCompletion(
        modelId: groqModel,
        endpoint: new Uri("https://api.groq.com/openai/v1"),
        apiKey: groqApiKey);
Kernel kernel = kernelBuilder.Build();
IChatClient groqChatClient = kernel.GetRequiredService<IChatCompletionService>().AsChatClient();
builder.Services.AddChatClient(groqChatClient);
builder.Services.AddScoped<IChatInferenceService, MyCustomService>(sp =>
{
    return new MyCustomService(groqChatClient);
});

var app = builder.Build();
....

{% endhighlight %}
{% endtabs %}

N> [View sample in GitHub](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/tree/master/Custom%20Services/GroqService)

## See also

* [Custom AI Service Integration in Blazor Smart PDF Viewer](./custom-ai-service)
* [Gemini AI Service in Blazor Smart PDF Viewer](./gemini-service)
* [DeepSeek AI Service in Blazor Smart PDF Viewer](./deepseek-service)

