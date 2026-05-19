---
title: Example Use Cases | Syncfusion AI Agent Tools
description: Explore example use cases for building document automation agents using Syncfusion AI Agent Tools, the Microsoft Agent Framework, and OpenAI.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Example Use Cases

## Automated PDF Redaction Agent

### Overview

This example demonstrates an **Automated PDF Redaction Agent** that uses the [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/?pivots=programming-language-csharp), OpenAI, and Syncfusion PDF Agent Tools to automatically detect and permanently redact sensitive information from PDF documents. The agent accepts a natural language request, identifies all sensitive data, and outputs a clean redacted PDF — with no manual intervention required. This sample runs using [In-Memory Mode](./getting-started-in-memory-mode).

### Prerequisites

| Requirement | Details |
|---|---|
| .NET SDK | .NET 8.0, 9.0, or 10.0 |
| AI Provider API Key | Required to authenticate requests to the AI provider. This page uses OpenAI — generate a key at [platform.openai.com/api-keys](https://platform.openai.com/api-keys). |
| NuGet Packages | [Syncfusion.DocumentSDK.AI.AgentTools](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools), [Microsoft.Agents.AI.OpenAI](https://www.nuget.org/packages/Microsoft.Agents.AI.OpenAI) |

### How it works

At runtime the application performs the following steps:

1. **Load PDF.** The agent loads the specified PDF document into memory.
2. **Extract text.** All text content is extracted from the PDF, including layout and position information.
3. **Detect sensitive data.** The AI identifies and categorizes sensitive information, including:
   - **Personal Information (PII):** Names, email addresses, phone numbers, physical addresses, dates of birth.
   - **Financial Data:** Social Security numbers, credit card numbers, bank account numbers, employee IDs.
   - **Other Identifiers:** Passport numbers, driver's license numbers, IP addresses.
4. **Locate and redact.** All identified items are located using bounding box coordinates and permanently redacted with black boxes.
5. **Export.** The redacted PDF is saved to the output folder with a `_redacted.pdf` suffix. The original file remains unchanged.

### Syncfusion setup

The snippet below shows only the Syncfusion-specific configuration. For the full setup and the interactive chat loop, see [GitHub](https://github.com/syncfusion/document-sdk-ai-agent-tools/blob/master/Examples/Console/AutomatedPDFRedaction/Program.cs).

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
var outputDir  = @"Data\Output";

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

Once the agent is running, use natural language to trigger redaction:

> *"Load 'case_filing.pdf' from the input folder and redact all sensitive information including names, addresses, and ID numbers. Save the result as 'case_filing_redacted.pdf'."*

> *"Load 'financial_data.pdf' and automatically redact all PII and financial information, then save the redacted file to the output folder."*

### Complete Example

For the full runnable example, refer to:

[Examples/Console/AutomatedPDFRedaction/Program.cs](https://github.com/syncfusion/document-sdk-ai-agent-tools/blob/master/Examples/Console/AutomatedPDFRedaction/Program.cs)

---

## Blog Generator Agent

### Overview

This example demonstrates a **Blog Generator** that uses the [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview?pivots=programming-language-csharp), OpenAI (text and image generation), and Syncfusion Word Agent Tools to convert a single user-provided topic into a fully formatted blog ebook. The agent generates a title and structured outline, creates detailed content with relevant images, and outputs the final result in **HTML** and **Word (.docx)** formats. This sample runs using [In-Memory Mode](./getting-started-in-memory-mode).

### Prerequisites

| Requirement | Details |
|---|---|
| .NET SDK | .NET 8.0, 9.0, or 10.0 |
| AI Provider API Key | Required to authenticate requests to the AI provider. This page uses OpenAI — generate a key at [platform.openai.com/api-keys](https://platform.openai.com/api-keys). |
| OpenAI Models | A text model (default `gpt-4o`) and an image model (default `gpt-image-1.5`) |
| NuGet Packages | [Syncfusion.DocumentSDK.AI.AgentTools](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools), [Microsoft.Agents.AI.OpenAI](https://www.nuget.org/packages/Microsoft.Agents.AI.OpenAI), [OpenAI](https://www.nuget.org/packages/OpenAI) |

### How it works

![Blog Generator pipeline](blog-generator-pipeline.png)

At runtime the application performs the following steps:

1. **Ask blog topic.** The user enters a topic from the console.
2. **Generate title and outline.** The agent drafts a title and 6–10 section outline for user confirmation (`[Y/n/r]`).
3. **Draft blog content as HTML.** For each section the agent generates structured HTML with consistent styling.
4. **Generate images.** For sections that need visuals, the `gpt-image-1.5` model generates PNG images embedded as Base64.
5. **Convert HTML to Word.** The AI agent autonomously chains `CreateDocument` → `ImportHtml` → `ExportDocument` using `WordDocumentAgentTools` and `WordImportExportAgentTools`.
6. **Save output.** Both the assembled HTML and the converted Word document are saved to the output folder.

### Syncfusion setup

The snippet below shows only the Syncfusion-specific configuration. For the full credential setup and the blog generation loop, see [GitHub](https://github.com/syncfusion/document-sdk-ai-agent-tools/blob/master/Examples/Console/BlogGenerator/Program.cs).

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

// Build agent with Word document rules
AIAgent aiAgent = chatClient.AsIChatClient().AsAIAgent(
    instructions: """
        You are an expert technical blogger and document designer.
        You always return only valid JSON when asked, with no markdown fences,
        no extra commentary, and no trailing text outside the JSON object.

        You also have access to Syncfusion Word document tools.
        When asked to create a Word document:
        1. Call CreateDocument to create a new Word document (filePath=null).
        2. Call ImportHtml with the HTML content or file path and the documentId.
        3. Call ExportDocument with the documentId and the output file path (format "Docx").
        Always follow this sequence and wait for each result before proceeding.
        """,
    name: "BlogGenerationAgent",
    tools: aiTools);
```

### Example Prompts

Once the agent is running, enter a topic at the console prompt to start the blog generation workflow:

> *"Write a blog post about the future of AI in healthcare."*

> *"Generate a blog post on best practices for cloud security in enterprise applications."*

The agent will draft a title and outline for your review before generating the full content and images.

### Complete Example

For the full runnable example, refer to:

[Examples/Console/BlogGenerator/Program.cs](https://github.com/syncfusion/document-sdk-ai-agent-tools/blob/master/Examples/Console/BlogGenerator/Program.cs)

---

## See Also

- [Getting Started - In-Memory Mode](./getting-started-in-memory-mode)
- [AI Agent Tools Overview](./overview)
- [Tools](./tools)
- [Customization](./customization)
- [Example Prompts](./example-prompts)
- [Microsoft Agent Framework – C# Providers](https://learn.microsoft.com/en-us/agent-framework/agents/providers/?pivots=programming-language-csharp)
