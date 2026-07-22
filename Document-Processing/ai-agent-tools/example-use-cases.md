---
title: Example Use Cases | Syncfusion AI Agent Tools
description: Explore example use cases for building document automation agents using Syncfusion AI Agent Tools, the Microsoft Agent Framework, and OpenAI.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Example Use Cases with AI Agent Tools

## Automated PDF Redaction Agent

### Overview

This example demonstrates an **Automated PDF Redaction Agent** that uses the [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/?pivots=programming-language-csharp), OpenAI, and Syncfusion PDF Tools to automatically detect and permanently redact sensitive information from PDF documents. The agent accepts a natural language request, identifies all sensitive data, and outputs a clean redacted PDF - with no manual intervention required. This sample runs using [In-Memory Mode](./getting-started#in-memory-mode).

### Prerequisites

| Requirement | Details |
|---|---|
| .NET SDK | .NET 8.0, 9.0, or 10.0 |
| AI Provider API Key | Required to authenticate requests to the AI provider. This page uses OpenAI. |
| NuGet Packages | [Syncfusion.DocumentSDK.AI.AgentTools](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools), [Microsoft.Agents.AI.OpenAI](https://www.nuget.org/packages/Microsoft.Agents.AI.OpenAI) |

### How It Works

At runtime the application performs the following steps:

1. **Load PDF:** The agent loads the specified PDF document into memory.
2. **Extract text:** All text content is extracted from the PDF.
3. **Detect sensitive data:** The AI identifies and categorizes sensitive information such as personal information, financial data, and other identifiers.
4. **Locate and redact:** All identified items are located using bounding box coordinates and permanently redacted with black boxes.
5. **Export:** The redacted PDF is saved to the output folder with a `_redacted.pdf` suffix. The original file remains unchanged.

### Syncfusion setup

The snippet below shows only the Syncfusion-specific configuration. You can find the complete code snippet [here](https://github.com/syncfusion/document-sdk-ai-agent-tools/blob/master/Examples/Console/AutomatedPDFRedaction/Program.cs).

```csharp
using Syncfusion.AI.AgentTools.Core;
using Syncfusion.AI.AgentTools.PDF;
using Microsoft.Extensions.AI;
using Microsoft.Agents.AI;
using OpenAI;
using AITool = Syncfusion.AI.AgentTools.Core.AITool;

// Register Syncfusion license
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense(
    Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY")!);

// Set up PDF Document Manager and tools
var pdfManager = new PdfDocumentManager(TimeSpan.FromMinutes(5));
var outputDir  = Path.GetFullPath(Environment.CurrentDirectory + @"..\..\..\..\Data\Output\");

var allTools = new List<AITool>();
allTools.AddRange(new PdfDocumentAgentTools(pdfManager, outputDir).GetTools());
allTools.AddRange(new PdfContentExtractionAgentTools(pdfManager).GetTools());
allTools.AddRange(new PdfSecurityAgentTools(pdfManager).GetTools());

// Convert to Microsoft.Extensions.AI functions
var aiTools = allTools
    .Select(t => AIFunctionFactory.Create(t.Method, t.Instance,
        new AIFunctionFactoryOptions { Name = t.Name, Description = t.Description }))
    .Cast<Microsoft.Extensions.AI.AITool>()
    .ToList();

// Build the agent
AIAgent agent = new OpenAIClient(Environment.GetEnvironmentVariable("OPENAI_API_KEY")!)
    .GetChatClient(Environment.GetEnvironmentVariable("OPENAI_MODEL") ?? "gpt-4o")
    .AsIChatClient()
    .AsAIAgent(instructions: BuildSystemMessage(inputDir, outputDir), tools: aiTools);
```

### Example Prompts

Once the agent is running, use natural language prompt to trigger redaction:

> *"Load 'case_filing.pdf' from the input folder and redact all sensitive information including names, addresses, and ID numbers. Save the result as 'case_filing_redacted.pdf'."*

### Complete Example

You can download a complete working sample from [GitHub](https://github.com/syncfusion/document-sdk-ai-agent-tools/blob/master/Examples/Console/AutomatedPDFRedaction/).

## Blog Generator Agent

### Overview

This example demonstrates a **Blog Generator** that uses the [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview?pivots=programming-language-csharp), OpenAI (text and image generation), and Syncfusion Word Agent Tools to convert a single user-provided topic into a fully formatted blog ebook. The agent generates a title and structured outline, creates detailed content with relevant images, and outputs the final result in **HTML** and **Word (.docx)** formats. This sample runs using [In-Memory Mode](./getting-started#in-memory-mode).

### Prerequisites

| Requirement | Details |
|---|---|
| .NET SDK | .NET 8.0, 9.0, or 10.0 |
| AI Provider API Key | Required to authenticate requests to the AI provider. This page uses OpenAI. |
| OpenAI Models | A text model (default **gpt-4o**) and an image model (default **gpt-image-1.5**) |
| NuGet Packages | [Syncfusion.DocumentSDK.AI.AgentTools](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools), [Microsoft.Agents.AI.OpenAI](https://www.nuget.org/packages/Microsoft.Agents.AI.OpenAI) |

### How It Works

At runtime the application performs the following steps:

1. **Ask blog topic.** The user enters a topic via the console.
2. **Generate title and outline.** The agent drafts a title and 6–10 section outline for user confirmation (`[Y/n/r]`).
3. **Draft blog content as HTML.** For each section the agent generates structured HTML with consistent styling.
4. **Generate images.** For sections that need visuals, the **gpt-image-1.5** model generates PNG images embedded as Base64.
5. **Convert HTML to Word.** The AI agent autonomously chains [CreateDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.AI.AgentTools.Word.WordDocumentAgentTools.html#Syncfusion_AI_AgentTools_Word_WordDocumentAgentTools_CreateDocument_System_String_System_String_) → [ImportHtml](https://help.syncfusion.com/cr/document-processing/Syncfusion.AI.AgentTools.Word.WordImportExportAgentTools.html#Syncfusion_AI_AgentTools_Word_WordImportExportAgentTools_ImportHtml_System_String_System_String_System_String_) → [ExportDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.AI.AgentTools.Word.WordDocumentAgentTools.html#Syncfusion_AI_AgentTools_Word_WordDocumentAgentTools_ExportDocument_System_String_System_String_System_String_) using [WordDocumentAgentTools](https://help.syncfusion.com/cr/document-processing/Syncfusion.AI.AgentTools.Word.WordDocumentAgentTools.html) and [WordImportExportAgentTools](https://help.syncfusion.com/cr/document-processing/Syncfusion.AI.AgentTools.Word.WordImportExportAgentTools.html).
6. **Save output.** Both the assembled HTML and the converted Word document are saved to the output folder.

### Syncfusion setup

The snippet below shows only the Syncfusion-specific configuration. You can find the complete code snippet [here](https://github.com/syncfusion/document-sdk-ai-agent-tools/blob/master/Examples/Console/BlogGenerator/Program.cs).

```csharp
using Syncfusion.AI.AgentTools.Core;
using Syncfusion.AI.AgentTools.Word;
using Microsoft.Extensions.AI;
using Microsoft.Agents.AI;
using AITool = Syncfusion.AI.AgentTools.Core.AITool;

// Register Syncfusion license
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense(
    Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY")!);

// Word Document Manager and tools
var wordManager = new WordDocumentManager(TimeSpan.FromMinutes(10));
var outputDir   = Path.GetFullPath(Environment.CurrentDirectory + @"..\..\..\..\Data\Output\");

var allSyncfusionTools = new List<AITool>();
allSyncfusionTools.AddRange(new WordDocumentAgentTools(wordManager, outputDir).GetTools());
allSyncfusionTools.AddRange(new WordImportExportAgentTools(wordManager).GetTools());

// Convert to Microsoft.Extensions.AI functions
var aiTools = allSyncfusionTools
    .Select(t => AIFunctionFactory.Create(t.Method, t.Instance,
        new AIFunctionFactoryOptions { Name = t.Name, Description = t.Description }))
    .Cast<Microsoft.Extensions.AI.AITool>()
    .ToList();

// Configure AI API key and model
var apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY")
          ?? PromptRequired("OpenAI API key");
var textModel = Environment.GetEnvironmentVariable("OPENAI_TEXT_MODEL") ?? "gpt-4o";

// Build the AIAgent (Microsoft Agent Framework)
var openAiClient = new OpenAIClient(new System.ClientModel.ApiKeyCredential(apiKey));
var chatClient   = openAiClient.GetChatClient(textModel);

// Build agent with Word document rules
AIAgent aiAgent = chatClient.AsIChatClient().AsAIAgent(
    instructions: BuildSystemMessage(),
    name: "BlogGenerationAgent",
    tools: aiTools);
```

### Example Prompts

Once the agent is running, enter a topic at the console prompt to start the blog generation workflow:

> *"Write a blog post about the future of AI in health care."*

The agent will draft a title and outline for your review before generating the full content and images.

### Complete Example

You can download a complete working sample from [GitHub](https://github.com/syncfusion/document-sdk-ai-agent-tools/blob/master/Examples/Console/BlogGenerator/).

## See Also

- [AI Agent Tools Overview](./overview)
- [Tools](./tools)
- [Customization](./customization)
- [Example Prompts](./example-prompts)
