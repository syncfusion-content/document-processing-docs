---
layout: post
title: Customization | AI Agent Tools | Syncfusion
description: Learn how to extend and customize the Syncfusion Document SDK Agent Tool library by creating custom agent tool classes and registering them with an AI agent.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Customize the AI Agent Tool Library

The [Syncfusion Document SDK AI Agent Tool library](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core) is designed to be extensible. This guide walks you through creating a custom agent tool class and registering the tools with an AI agent so they are callable alongside the built-in tools.


## Creating a Custom AI Agent Tool Class

Follow these steps to enable new document operations to the AI agent tool library.

**Step 1: Create a Custom AI Agent Tool by Inheriting AgentToolBase**

Create a new class that inherits from `AgentToolBase` (in the `Syncfusion.AI.AgentTools.Core` namespace) and accepts a document manager through its constructor:

```csharp
using Syncfusion.AI.AgentTools.Core;
using Syncfusion.DocIO.DLS;


namespace Syncfusion.AI.AgentTools.Word
{
    public class WordWatermarkAgentTools : AgentToolBase<WordDocument>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="WordWatermarkAgentTools"/> class (Mode 1 — InMemory).
        /// </summary>
        /// <param name="manager">The document manager for managing Word documents.</param>
        public WordWatermarkAgentTools(WordDocumentManager manager)
            : base(manager, DocumentType.Word) { }

        /// <summary>
        /// Initializes a new instance of the <see cref="WordWatermarkAgentTools"/> class (Mode 2 — DocumentStorage).
        /// </summary>
        /// <param name="manager">The document storage manager.</param>
        public WordWatermarkAgentTools(DocumentStorageManager manager)
            : base(manager, DocumentType.Word) { }
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
        [ToolParameter(Description = "The document ID (InMemory mode) or input file path (DocumentStorage mode)")]
        string documentIdOrFilePath,
        [ToolParameter(Description = "The watermark text to display (e.g., 'DRAFT', 'CONFIDENTIAL').")]
        string watermarkText,
        [ToolParameter(Description = "Output file path for saving the result (DocumentStorage mode only).")]
        string? outputFilePath = null)
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


namespace Syncfusion.AI.AgentTools.Word
{
    /// <summary>
    /// Provides agent tools for managing watermarks in Word documents.
    /// Supports both InMemory and DocumentStorage modes.
    /// </summary>
    public class WordWatermarkAgentTools : AgentToolBase<WordDocument>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="WordWatermarkAgentTools"/> class (Mode 1 — InMemory).
        /// </summary>
        /// <param name="manager">The document manager for managing Word documents.</param>
        public WordWatermarkAgentTools(WordDocumentManager manager)
            : base(manager, DocumentType.Word) { }

        /// <summary>
        /// Initializes a new instance of the <see cref="WordWatermarkAgentTools"/> class (Mode 2 — DocumentStorage).
        /// </summary>
        /// <param name="manager">The document storage manager.</param>
        public WordWatermarkAgentTools(DocumentStorageManager manager)
            : base(manager, DocumentType.Word) { }

        [Tool(
            Name = "AddTextWatermark",
            Description = "Adds a text watermark to the specified Word document. documentIdOrFilePath: The document ID (InMemory mode) or input file path (DocumentStorage mode).")]
        public AgentToolResult AddTextWatermark(
            [ToolParameter(Description = "The document ID (InMemory mode) or input file path (DocumentStorage mode)")]
            string documentIdOrFilePath,
            [ToolParameter(Description = "The watermark text to display (e.g., 'DRAFT', 'CONFIDENTIAL').")]
            string watermarkText,
            [ToolParameter(Description = "Output file path for saving the result (DocumentStorage mode only).")]
            string? outputFilePath = null)
        {
            try
            {
                var document = OpenDocument(documentIdOrFilePath);
                if (document == null)
                    return AgentToolResult.Fail($"Document not found: {documentIdOrFilePath}");

                TextWatermark watermark = new TextWatermark(watermarkText, "", 250, 100);
                watermark.Color = Syncfusion.Drawing.Color.LightGray;
                watermark.Layout = WatermarkLayout.Diagonal;
                document.Watermark = watermark;

                // ── Save ────────────────────────────────────────────────────────
                if (outputFilePath == null && Mode == DocumentManagerMode.DocumentStorage)
                    outputFilePath = "output_watermark_added.docx";
                string outputKey = outputFilePath;
                SaveDocument(outputKey, document);
                if (Mode == DocumentManagerMode.InMemory)
                    outputKey = documentIdOrFilePath; // InMemory mode always updates the same document ID

                return AgentToolResult.Ok(
                    $"Watermark '{watermarkText}' applied to document '{outputKey}'.");
            }
            catch (Exception ex)
            {
                return AgentToolResult.Fail($"Failed to add watermark: {ex.Message}");
            }
        }

        [Tool(
            Name = "RemoveWatermark",
            Description = "Removes the watermark from the specified Word document. documentIdOrFilePath: The document ID (InMemory mode) or input file path (DocumentStorage mode).")]
        public AgentToolResult RemoveWatermark(
            [ToolParameter(Description = "The document ID (InMemory mode) or input file path (DocumentStorage mode)")]
            string documentIdOrFilePath,
            [ToolParameter(Description = "Output file path for saving the result (DocumentStorage mode only).")]
            string? outputFilePath = null)
        {
            try
            {
                var document = OpenDocument(documentIdOrFilePath);
                if (document == null)
                    return AgentToolResult.Fail($"Document not found: {documentIdOrFilePath}");

                document.Watermark = null;

                // ── Save ────────────────────────────────────────────────────────
                if (outputFilePath == null && Mode == DocumentManagerMode.DocumentStorage)
                    outputFilePath = "output_watermark_removed.docx";
                string outputKey = outputFilePath;
                SaveDocument(outputKey, document);
                if (Mode == DocumentManagerMode.InMemory)
                    outputKey = documentIdOrFilePath; // InMemory mode always updates the same document ID

                return AgentToolResult.Ok($"Watermark removed from document '{outputKey}'.");
            }
            catch (Exception ex)
            {
                return AgentToolResult.Fail($"Failed to remove watermark: {ex.Message}");
            }
        }
    }
}
```


## Registering Custom Tools with the AI Agent

Once your custom tool class is created, register it alongside the built-in tools in your host application.

Documents can be handled using either in‑memory Mode or Storage Mode during AI agent execution. In in‑memory Mode, documents are loaded into memory and shared across tool calls. In Storage Mode, documents are loaded per tool call from external storage and must be explicitly saved to persist changes.

**Step 1: Registering a Custom Tool with the Syncfusion AI Agent Tools**

#### In-Memory Mode

```csharp
//Instantiate the Custom Tool Class
var wordRepo = new WordDocumentManager(TimeSpan.FromMinutes(5));

// Built-in tools
var wordDocTools = new WordDocumentAgentTools(wordRepo, outputDirectory);

// Your custom tool class
var wordWatermarkTools = new WordWatermarkAgentTools(wordRepo);

// Collect All Tools
var allSyncfusionTools = new List<Syncfusion.AI.AgentTools.Core.AITool>();
allSyncfusionTools.AddRange(wordDocTools.GetTools());
allSyncfusionTools.AddRange(wordWatermarkTools.GetTools()); // <-- custom tools
```

#### Storage Mode

```csharp
var storageManager = new DocumentStorageManager(BlobStorage);

// Add Custom tool
syncfusionTools.AddRange(new WordWatermarkAgentTools(storageManager).GetTools());
```
**Step 2: Convert to Microsoft.Extensions.AI Tools**

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

**Step 3: Build the AI Agent**

```csharp
var agent = openAIClient.AsAIAgent(
    model: openAIModel,
    tools: msAiTools,
    systemPrompt: "You are a helpful document-processing assistant.");
```

Your custom tool methods are now callable by the AI agent the same way as all built-in tools.

## Example Prompts

Once the custom watermark tools are registered, you can interact with the AI agent using natural language. The following examples show typical prompts and the tool calls the agent will make in response.

**Add a watermark:**

> *"Open the file at C:\Documents\report.docx and add a 'CONFIDENTIAL' watermark to it, then save it."*

The agent will call `Word_CreateDocument` to load the file, then `Word_AddTextWatermark` with `watermarkText = "CONFIDENTIAL"`, and finally `Word_ExportDocument` to save the result.


## See Also

- [Overview](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/overview)
- [Tools](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/tools)
- [Getting Started](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/getting-started)
- [Example Prompts](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/example-prompts)
