---
layout: post
title: Deepseek AI Service with Smart PDF Viewer in Blazor App | Syncfusion
description: Learn how to integrate and use the Syncfusion Smart PDF Viewer in a Blazor Web App with DeepSeek AI services.
platform: Blazor
control: Smart PDF Viewer
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

## Step 1: Create a DeepSeek AI Service

The `DeepSeekAIService` class is responsible for managing all interactions with the DeepSeek API. This service:

### Implementation Steps

1. Create a new file named `DeepSeekAIService.cs`
2. Add the following using statements for required dependencies
3. Implement the service class as shown below

```csharp
using System.Text;
using System.Text.Json;
using System.Net;
using Microsoft.Extensions.AI;
// Define the DeepSeekAIService class to interact with the DeepSeek API
public class DeepSeekAIService
{
    // Constants for API configuration
    private const string ApiKey = "Your API Key";
    private const string ModelName = "Your Model Name";
    private const string Endpoint = "https://api.deepseek.com/v1/chat/completions";

    private static readonly HttpClient HttpClient = new(new SocketsHttpHandler
    {
        PooledConnectionLifetime = TimeSpan.FromMinutes(30),
        EnableMultipleHttp2Connections = true,
    })
    {
        DefaultRequestVersion = HttpVersion.Version30
    };

    // Set JSON serialization options to use camelCase naming
    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
    };

    // Constructor to initialize the HttpClient with authorization header
    public DeepSeekAIService()
    {
        if (!HttpClient.DefaultRequestHeaders.Contains("Authorization"))
        {
            HttpClient.DefaultRequestHeaders.Clear();
            HttpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {ApiKey}");
        }
    }

    // Method to send chat messages to DeepSeek API and receive a response
    public async Task<string> CompleteAsync(IList<ChatMessage> chatMessages)
    {
        DeepSeekChatRequest requestBody = new DeepSeekChatRequest
        {
            Model = ModelName,
            Temperature = 0.7f,
            Messages = chatMessages.Select(m => new DeepSeekMessage
            {
                Role = m.Role == ChatRole.User ? "user" : "system",
                Content = m.Text
            }).ToList()
        };

        // Serialize the request body to JSON
        string json = JsonSerializer.Serialize(requestBody, JsonOptions);
        StringContent content = new StringContent(json, Encoding.UTF8, "application/json");

        try
        {
            // Send POST request to DeepSeek API/ Send POST request to DeepSeek API
            HttpResponseMessage response = await HttpClient.PostAsync(Endpoint, content);
            response.EnsureSuccessStatusCode();

            // Read and deserialize the response
            string responseString = await response.Content.ReadAsStringAsync();
            DeepSeekChatResponse? responseObject = JsonSerializer.Deserialize<DeepSeekChatResponse>(responseString, JsonOptions);

            return responseObject?.Choices?.FirstOrDefault()?.Message?.Content ?? "No response from DeepSeek.";
        }
        catch (Exception ex) when (ex is HttpRequestException || ex is JsonException)
        {
                
            throw new InvalidOperationException("Failed to communicate with DeepSeek API.", ex);
        }
    }
}
```

## Step 2: Define Request and Response Models

To effectively communicate with DeepSeek's API, we need to create strongly-typed models that represent the request and response data structures. 

Create a new file named `DeepSeekModels.cs` with the following models:

```CSharp
// Represents a single message in the chat conversation
public class DeepSeekMessage
{
    public string Role { get; set; }
    public string Content { get; set; }
}

// Represents the request payload sent to the DeepSeek API
public class DeepSeekChatRequest
{
    public string Model { get; set; }
    public float Temperature { get; set; }
    public List<DeepSeekMessage> Messages { get; set; }
}

// Represents the response received from the DeepSeek API
public class DeepSeekChatResponse
{
    public List<DeepSeekChoice> Choices { get; set; }
}

// Represents a single choice in the response
public class DeepSeekChoice
{
    public DeepSeekMessage Message { get; set; }
}
```

## Step 3: Create a Custom AI Service

To integrate DeepSeek with Syncfusion Smart PDF Viewer, we'll create a custom implementation of the `IChatInferenceService` interface. This interface acts as a bridge between Syncfusion Smart PDF Viewer and your AI service.

The `IChatInferenceService` interface is the bridge between Syncfusion Smart PDF Viewer and AI services:S

1. Create a new file named `MyCustomService.cs`
2. Add the following implementation:

```csharp
using Syncfusion.Blazor.AI;
// Custom implementation of the IChatInferenceService interface
public class MyCustomService : IChatInferenceService
{
    private readonly DeepSeekAIService _DeepSeekService;

    // Constructor injection of DeepSeekAIService
    public MyCustomService(DeepSeekAIService DeepSeekService)
    {
        _DeepSeekService = DeepSeekService;
    }

    public Task<string> GenerateResponseAsync(ChatParameters options)
    {
        return _DeepSeekService.CompleteAsync(options.Messages);
    }
}
```

## Step 4: Configure the Blazor App

Configure your Blazor application to use the DeepSeek AI service with Syncfusion Smart PDF Viewer. This involves registering necessary services and setting up the dependency injection container.

```CSharp

using Syncfusion.Blazor.AI;
var builder = WebApplication.CreateBuilder(args);

....

builder.Services.AddSyncfusionBlazor();
builder.Services.AddSingleton<DeepSeekAIService>();
builder.Services.AddSingleton<IChatInferenceService, MyCustomService>();

var app = builder.Build();
....

```

[View sample in GitHub]()

## See also

* [Custom AI Service Integration in Blazor Smart PDF Viewer](./custom-ai-service)
* [Gemini AI Service in Blazor Smart PDF Viewer](./gemini-service)
* [Groq AI Service in Blazor Smart PDF Viewer](./groq-service)