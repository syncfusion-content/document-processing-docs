---
layout: post
title: Getting Started | In-Memory Mode | AI Agent Tools | Syncfusion
description: Learn how to get started with Syncfusion AI Agent Tools using in-memory Mode for fast, transient document processing without persistence.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Getting Started - In-Memory Mode

Documents are held as live objects in an in-memory dictionary. Each tool accesses and modifies the object directly without opening or saving files on each call. Unused documents are cleaned up automatically after a configurable timeout (default: 10 minutes).

The example below uses the Microsoft Agents Framework with OpenAI. The same steps apply to any [provider](https://learn.microsoft.com/en-us/agent-framework/agents/providers/?pivots=programming-language-csharp) that implements `IChatClient`.

![In-Memory Mode integration steps](in-memory-steps.png)

## Prerequisites

| Requirement | Details |
|---|---|
| .NET SDK | .NET 8.0, 9.0, or 10.0 |
| AI Provider API Key | Required to authenticate requests to the AI provider. This page uses OpenAI.|
| NuGet Package | [Microsoft.Agents.AI.OpenAI](https://www.nuget.org/packages/Microsoft.Agents.AI.OpenAI) |

> **Note:** Any [supported provider](https://learn.microsoft.com/en-us/agent-framework/agents/providers/?pivots=programming-language-csharp) works — just swap in that provider's API key or endpoint credentials.

## Integration

**Step 1: Install and License**

Install the [Syncfusion.DocumentSDK.AI.AgentTools](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools) NuGet package, then register your license key at application startup:

![Install NuGet package](Install_Nuget.png)

```csharp
string? licenseKey = Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY");
if (!string.IsNullOrEmpty(licenseKey))
    Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense(licenseKey);
```

**Step 2: Create Managers and Collection**

Create one document manager per document type. The `timeout` controls how long an unused document stays in memory. Register all managers in a `DocumentManagerCollection` so cross-format tools (such as `OfficeToPdfAgentTools`) can resolve the correct manager at runtime:

```csharp
using Syncfusion.AI.AgentTools.Core;
using Syncfusion.AI.AgentTools.Word;
using Syncfusion.AI.AgentTools.Excel;
using Syncfusion.AI.AgentTools.PDF;
using Syncfusion.AI.AgentTools.PowerPoint;

var timeout = TimeSpan.FromMinutes(5);
var wordManager         = new WordDocumentManager(timeout);
var excelManager        = new ExcelWorkbookManager(timeout);
var pdfManager          = new PdfDocumentManager(timeout);
var presentationManager = new PresentationManager(timeout);

var repoCollection = new DocumentManagerCollection();
repoCollection.AddManager(DocumentType.Word,       wordManager);
repoCollection.AddManager(DocumentType.Excel,      excelManager);
repoCollection.AddManager(DocumentType.PDF,        pdfManager);
repoCollection.AddManager(DocumentType.PowerPoint, presentationManager);
```

> **Note:** Tools that operate on a single document type are initialized directly with their own manager. Only cross-format tools like `OfficeToPdfAgentTools` require the `DocumentManagerCollection`.

**Step 3: Instantiate Tools**

Initialize each tool class with its manager and call `GetTools()` to collect `AITool` objects:

```csharp
using Syncfusion.AI.AgentTools.DataExtraction;
using Syncfusion.AI.AgentTools.OfficeToPDF;
using AITool = Syncfusion.AI.AgentTools.Core.AITool;

string outputDir = Environment.GetEnvironmentVariable("OUTPUT_DIR") ?? @"D:\Output";
Directory.CreateDirectory(outputDir);

var allTools = new List<AITool>();

// Word tools
allTools.AddRange(new WordDocumentAgentTools(wordManager, outputDir).GetTools());
allTools.AddRange(new WordOperationsAgentTools(wordManager).GetTools());
allTools.AddRange(new WordSecurityAgentTools(wordManager).GetTools());

// Excel tools
allTools.AddRange(new ExcelWorkbookAgentTools(excelManager, outputDir).GetTools());
allTools.AddRange(new ExcelWorksheetAgentTools(excelManager).GetTools());
allTools.AddRange(new ExcelSecurityAgentTools(excelManager).GetTools());

// PDF tools
allTools.AddRange(new PdfDocumentAgentTools(pdfManager, outputDir).GetTools());
allTools.AddRange(new PdfOperationsAgentTools(pdfManager).GetTools());
allTools.AddRange(new PdfSecurityAgentTools(pdfManager).GetTools());

// PowerPoint tools
allTools.AddRange(new PresentationDocumentAgentTools(presentationManager, outputDir).GetTools());
allTools.AddRange(new PresentationOperationsAgentTools(presentationManager).GetTools());
allTools.AddRange(new PresentationSecurityAgentTools(presentationManager).GetTools());

// Conversion and data extraction
allTools.AddRange(new OfficeToPdfAgentTools(repoCollection, outputDir).GetTools());
allTools.AddRange(new DataExtractionAgentTools(outputDir).GetTools());
```

> **Note:** Register only the tool classes your app needs. See the full list in the [Tools Reference](./tools).

**Step 4: Convert and Register Tools**

Wrap each `AITool` into a framework-compatible function using `AIFunctionFactory.Create`:

```csharp
using Microsoft.Extensions.AI;

var aiTools = allTools
    .Select(t => AIFunctionFactory.Create(
        t.Method,
        t.Instance,
        new AIFunctionFactoryOptions { Name = t.Name, Description = t.Description }))
    .Cast<Microsoft.Extensions.AI.AITool>()
    .ToList();
```

> **Note:** AI agents support a maximum of 128 tools. Register only the tools relevant to your scenario.

**Step 5: Build the Agent**

Create the agent with the chat client, system prompt, and registered tools:

```csharp
using Microsoft.Agents.AI;
using OpenAI;

string apiKey    = Environment.GetEnvironmentVariable("OPENAI_API_KEY")!;
string model     = Environment.GetEnvironmentVariable("OPENAI_MODEL") ?? "gpt-4o";
string inputDir  = Environment.GetEnvironmentVariable("INPUT_DIR")  ?? @"D:\Input";
string outputDir = Environment.GetEnvironmentVariable("OUTPUT_DIR") ?? @"D:\Output";

AIAgent agent = new OpenAIClient(apiKey)
    .GetChatClient(model)
    .AsIChatClient()
    .AsAIAgent(
        instructions: BuildSystemPrompt(inputDir, outputDir),
        tools: aiTools);
```

The system prompt sets the rules for how the agent works. For the full system prompt, see the [GitHub console example](https://github.com/syncfusion/document-sdk-ai-agent-tools/blob/master/Examples/Console/AgentChatConsole/Program.cs).

## Complete Example

For the full interactive chat loop, see the [GitHub console example](https://github.com/syncfusion/document-sdk-ai-agent-tools/blob/master/Examples/Console/AgentChatConsole/Program.cs).

## See Also

- [Overview](./overview)
- [Tools](./tools)
- [Customization](./customization)
- [Example Prompts](./example-prompts)
- [Example Use Cases](./example-use-cases)
