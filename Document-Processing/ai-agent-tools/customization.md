---
layout: post
title: Customization | AI Agent Tools | Syncfusion
description: Learn how to extend and customize the Syncfusion Document SDK Agent Tool library by creating custom agent tool classes and registering them with an AI agent.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Customize the Agent Tool Library

The Syncfusion Document SDK Agent Tool library is designed to be extensible. This guide walks you through creating a custom agent tool class and registering the tools with an AI agent so they are callable alongside the built-in tools.


## Creating a Custom Agent Tool Class

Follow these steps to expose new document operations to the AI agent.

**Step 1: Create a Custom Agent Tool by Inheriting AgentToolBase**

Create a new class that inherits from `AgentToolBase` (in the `Syncfusion.AI.AgentTools.Core` namespace) and accepts a document Manager through its constructor:

```csharp
using Syncfusion.AI.AgentTools.Core;
using Syncfusion.DocIO.DLS;

public class WordWatermarkAgentTools : AgentToolBase
{
    private readonly WordDocumentManager _Manager;

    public WordWatermarkAgentTools(WordDocumentManager Manager)
    {
        ArgumentNullException.ThrowIfNull(Manager);
        _Manager = Manager;
    }
}
```

**Step 2: Add Tool Methods with [Tool]**

Add `public` instance methods and decorate each one with `[Tool]`, providing a name and a description that the AI agent will use to understand when to call it:

```csharp
[Tool(
    Name = "AddTextWatermark",
    Description = "Adds a text watermark to the specified Word document.")]
public AgentToolResult AddTextWatermark(...)
{
    // implementation
}
```

**Step 3: Annotate Parameters with [ToolParameter]**

Decorate each method parameter with `[ToolParameter]` to give the AI a natural-language description of what value to pass:

```csharp
public AgentToolResult AddTextWatermark(
    [ToolParameter(Description = "The document ID of the Word document.")]
    string documentId,
    [ToolParameter(Description = "The watermark text to display (e.g., 'DRAFT', 'CONFIDENTIAL').")]
    string watermarkText,
    [ToolParameter(Description = "Optional: the font size of the watermark. Defaults to 72.")]
    float fontSize = 72f)
```

**Step 4: Return AgentToolResult**

All tool methods must return `AgentToolResult`. Use the static factory methods to signal success or failure:

```csharp
// Success
return AgentToolResult.Ok("Operation completed successfully.");

// Failure
return AgentToolResult.Fail("Reason the operation failed.");
```

**Example**

```csharp
using Syncfusion.AI.AgentTools.Core;
using Syncfusion.DocIO.DLS;

public class WordWatermarkAgentTools : AgentToolBase
{
    private readonly WordDocumentManager _Manager;

    public WordWatermarkAgentTools(WordDocumentManager Manager)
    {
        ArgumentNullException.ThrowIfNull(Manager);
        _Manager = Manager;
    }

    [Tool(
        Name = "AddTextWatermark",
        Description = "Adds a text watermark to the specified Word document.")]
    public AgentToolResult AddTextWatermark(
        [ToolParameter(Description = "The document ID of the Word document.")]
        string documentId,
        [ToolParameter(Description = "The watermark text to display (e.g., 'DRAFT', 'CONFIDENTIAL').")]
        string watermarkText)
    {
        try
        {
            WordDocument? doc = _Manager.GetDocument(documentId);
            if (doc == null)
                return AgentToolResult.Fail($"Document not found: {documentId}");

            TextWatermark watermark = new TextWatermark(watermarkText, "", 250, 100);
            watermark.Color = Syncfusion.Drawing.Color.LightGray;
            watermark.Layout = WatermarkLayout.Diagonal;
            doc.Watermark = watermark;

            return AgentToolResult.Ok(
                $"Watermark '{watermarkText}' applied to document '{documentId}'.");
        }
        catch (Exception ex)
        {
            return AgentToolResult.Fail(ex.Message);
        }
    }

    [Tool(
        Name = "RemoveWatermark",
        Description = "Removes the watermark from the specified Word document.")]
    public AgentToolResult RemoveWatermark(
        [ToolParameter(Description = "The document ID of the Word document.")]
        string documentId)
    {
        try
        {
            WordDocument? doc = _Manager.GetDocument(documentId);
            if (doc == null)
                return AgentToolResult.Fail($"Document not found: {documentId}");

            doc.Watermark = null;
            return AgentToolResult.Ok($"Watermark removed from document '{documentId}'.");
        }
        catch (Exception ex)
        {
            return AgentToolResult.Fail(ex.Message);
        }
    }
}
```


## Registering Custom Tools with the AI Agent

Once your custom tool class is created, register it alongside the built-in tools in your host application.

**Step 1: Instantiate the Custom Tool Class**

```csharp
var wordRepo = new WordDocumentManager(TimeSpan.FromMinutes(5));

// Built-in tools
var wordDocTools = new WordDocumentAgentTools(wordRepo, outputDirectory);

// Your custom tool class
var wordWatermarkTools = new WordWatermarkAgentTools(wordRepo);
```

**Step 2: Collect All Tools**

```csharp
var allSyncfusionTools = new List<Syncfusion.AI.AgentTools.Core.AITool>();
allSyncfusionTools.AddRange(wordDocTools.GetTools());
allSyncfusionTools.AddRange(wordWatermarkTools.GetTools()); // <-- custom tools
```

**Step 3: Convert to Microsoft.Extensions.AI Tools**

```csharp
using Microsoft.Extensions.AI;

var msAiTools = allSyncfusionTools
    .Select(t => AIFunctionFactory.Create(t.Method, t.Instance, new AIFunctionFactoryOptions
    {
        Name = t.Name,
        Description = t.Description
    }))
    .Cast<AITool>()
    .ToList();
```

**Step 4: Build the Agent**

```csharp
var agent = openAIClient.AsAIAgent(
    model:        openAIModel,
    tools:        msAiTools,
    systemPrompt: "You are a helpful document-processing assistant.");
```

Your custom tool methods are now callable by the AI agent the same way as all built-in tools.

## Example Prompts

Once the custom watermark tools are registered, you can interact with the AI agent using natural language. The following examples show typical prompts and the tool calls the agent will make in response.

**Add a watermark:**

> *"Open the file at C:\Documents\report.docx and add a 'CONFIDENTIAL' watermark to it, then save it."*

The agent will call `Word_CreateDocument` to load the file, then `Word_AddTextWatermark` with `watermarkText = "CONFIDENTIAL"`, and finally `Word_ExportDocument` to save the result.


## Customizing the System Prompt

The system prompt shapes how the AI agent uses the tools. Tailor it to your use case:

```csharp
string systemPrompt = "You are an expert document-processing assistant with access to tools for Word operations.";
```

## See Also

- [Overview](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/overview)
- [Tools](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/tools)
- [Getting Started](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/getting-started)
