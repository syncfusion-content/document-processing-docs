---
layout: post
title: Customization | AI Agent Tools | Syncfusion
description: Learn how to extend and customize the Syncfusion Document SDK Agent Tool library by creating custom agent tool classes and registering them with an AI agent.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Customize the AI Agent Tool Library

The [Syncfusion Document SDK AI Agent Tool](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools) library is designed to be extensible. This guide walks you through creating a custom agent tool class and registering the tools with an AI agent so they are callable alongside the built-in tools.


## Creating a Custom AI Agent Tool Class

Follow these steps to enable new document operations to the [AI agent tool library](https://github.com/syncfusion/document-sdk-ai-agent-tools/tree/master/Syncfusion.DocumentSDK.AI.AgentTools).

**Step 1: Clone the repository**

```bash
git clone https://github.com/syncfusion/document-sdk-ai-agent-tools.git
cd Document-SDK-AI-Agent-Tools
```

**Step 2: Create the tool class**

Open the [Syncfusion.DocumentSDK.AI.AgentTools](https://github.com/syncfusion/document-sdk-ai-agent-tools/tree/master/Syncfusion.DocumentSDK.AI.AgentTools) library project. Create a new class inside the [Tools](https://github.com/syncfusion/document-sdk-ai-agent-tools/tree/master/Syncfusion.DocumentSDK.AI.AgentTools/Tools) folder. The example below adds a watermark tool for Word documents:

```csharp
using Syncfusion.AI.AgentTools.Core;
using Syncfusion.DocIO.DLS;

namespace Syncfusion.AI.AgentTools.Word
{
    // Step: Inherit AgentToolBase<TDocument> and accept a manager in each constructor
    public class WordWatermarkAgentTools : AgentToolBase<WordDocument>
    {
        // In-Memory mode constructor
        public WordWatermarkAgentTools(WordDocumentManager manager)
            : base(manager, DocumentType.Word) { }

        // Storage mode constructor
        public WordWatermarkAgentTools(DocumentStorageManager manager)
            : base(manager, DocumentType.Word) { }

        // Step: Decorate each method with [Tool] - name and description guide the AI
        [Tool(
            Name = "AddTextWatermark",
            Description = "Adds a text watermark to the specified Word document.")]
        public AgentToolResult AddTextWatermark(
            // Step: Decorate each parameter with [ToolParameter] for natural-language hints
            [ToolParameter(Description = "The document ID (InMemory mode) or input file path (Storage mode)")]
            string documentIdOrFilePath,
            [ToolParameter(Description = "The watermark text to display (e.g., 'DRAFT', 'CONFIDENTIAL').")]
            string watermarkText,
            [ToolParameter(Description = "Output file path for saving the result (Storage mode only).")]
            string? outputFilePath = null)
        {
            try
            {
                var document = OpenDocument(documentIdOrFilePath);
                if (document == null)
                    return AgentToolResult.Fail($"Document not found: {documentIdOrFilePath}");

                TextWatermark watermark = new TextWatermark(watermarkText, "", 250, 100);
                watermark.Color  = Syncfusion.Drawing.Color.LightGray;
                watermark.Layout = WatermarkLayout.Diagonal;
                document.Watermark = watermark;

                if (outputFilePath == null && Mode == DocumentManagerMode.DocumentStorage)
                    outputFilePath = "output_watermark_added.docx";

                string outputKey = outputFilePath;
                SaveDocument(outputKey, document);

                if (Mode == DocumentManagerMode.InMemory)
                    outputKey = documentIdOrFilePath;

                // Step: Return AgentToolResult.Ok() on success, AgentToolResult.Fail() on error
                return AgentToolResult.Ok($"Watermark '{watermarkText}' applied to document '{outputKey}'.");
            }
            catch (Exception ex)
            {
                return AgentToolResult.Fail($"Failed to add watermark: {ex.Message}");
            }
        }
    }
}
```

## Registering Custom Tools with the AI Agent

Build the agent tool library, add the DLL or project reference to your host application, then register your custom tool alongside the built-in tools.

**Step 1: Instantiate and collect tools**

#### In-Memory Mode

```csharp
var wordManager = new WordDocumentManager(TimeSpan.FromMinutes(5));

var allTools = new List<Syncfusion.AI.AgentTools.Core.AITool>();
allTools.AddRange(new WordDocumentAgentTools(wordManager, outputDirectory).GetTools());
allTools.AddRange(new WordWatermarkAgentTools(wordManager).GetTools()); // custom tools
```

#### Storage Mode

```csharp
var storageManager = new DocumentStorageManager(storage);

allTools.AddRange(new WordWatermarkAgentTools(storageManager).GetTools());
```

**Step 2: Convert to Microsoft.Extensions.AI tools and build the agent**

```csharp
using Microsoft.Extensions.AI;

var msAiTools = allTools
    .Select(t => AIFunctionFactory.Create(t.Method, t.Instance, new AIFunctionFactoryOptions
    {
        Name        = t.Name,
        Description = t.Description
    }))
    .Cast<AITool>()
    .ToList();

var agent = openAIClient.AsAIAgent(
    model: openAIModel,
    tools: msAiTools,
    systemPrompt: "You are a helpful document-processing assistant.");
```

Your custom tool methods are now callable by the AI agent the same way as all built-in tools.

## Example Prompts

Once the custom watermark tools are registered, you can interact with the agent using natural language:

> *"Open the file ‘report.docx’ and add a 'CONFIDENTIAL' watermark to it, then save it."*

The agent will call `Word_CreateDocument` to load the file, then `Word_AddTextWatermark` with `watermarkText = "CONFIDENTIAL"`, and finally `Word_ExportDocument` to save the result.

## See Also

- [Overview](./overview)
- [Tools](./tools)
- [Getting Started](./getting-started)
- [Example Prompts](./example-prompts)
- [Example Use Cases](./example-use-cases)
