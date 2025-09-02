---
layout: post
title: Custom AI Service Integration with Syncfusion Smart PDF Viewer
description: Learn how to use IChatInferenceService to integrate custom AI services with Syncfusion Smart PDF Viewer
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Custom AI Service Integration

## Overview

Syncfusion Smart PDF Viewer provide built-in support for OpenAI and Azure OpenAI services. However, you can also integrate other AI services using the `IChatInferenceService` interface, which acts as a bridge between Smart PDF Viewer and your custom AI service.


## IChatInferenceService Interface

The `IChatInferenceService` interface defines a simple contract for AI service integration:

```csharp
public interface IChatInferenceService
{
    Task<string> GenerateResponseAsync(ChatParameters options);
}
```

This interface enables:
- Consistent communication between components and AI services
- Easy switching between different AI providers


## Implemented AI Services

Here are examples of AI services integrated using the `IChatInferenceService` interface:

| Service | Documentation |
|---------|---------------|
| DeepSeek | [DeepSeek Integration](deepseek-service) |
| Gemini | [Gemini Integration](gemini-service) |
| Groq | [Groq Integration](groq-service) |


## Service Registration

Register your custom implementation in `Program.cs`:

```csharp
using Syncfusion.Blazor.AI;
builder.Services.AddSingleton<IChatInferenceService, YourCustomService>();
```

## See also

* [Gemini AI Service in Blazor Smart PDF Viewer](./gemini-service)
* [Groq AI Service in Blazor Smart PDF Viewer](./groq-service)