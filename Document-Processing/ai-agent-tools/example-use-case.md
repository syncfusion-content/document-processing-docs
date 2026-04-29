---
title: Create Custom Blog Generator Agent | Syncfusion AI Agent Tools
description: Learn how to build a custom Blog Generator agent using Syncfusion Word tools, Microsoft Agent Framework, and OpenAI to create rich blog ebooks.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Create Custom Blog Generator Agent

This use case walks through building a **Blog Generator** that
combines the [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview?pivots=programming-language-csharp),
OpenAI (text + image), and Syncfusion Word Agent Tools to produce a
fully-formatted blog ebook in both **HTML** and **Word (.docx)** formats from a
single topic entered by the user.

## Overview

The Blog Generator turns a single topic into a complete, ebook‑quality document through five simple steps. It starts by creating a clear title and structured outline, then plans each section and decides where visuals are helpful. Next, it writes detailed, well‑formatted content and adds suitable images where needed. Finally, everything is combined and delivered as a clean Word document ready for use. This sample application uses an [in‑memory mode](./getting-started-in-memory-mode.md).

## Prerequisites

<table>
<tr>
<td>.NET SDK</td>
<td>.NET 8.0 or .NET 9.0 or .NET 10.0</td>
</tr>
<tr>
<td>OpenAI API Key</td>
<td>Obtain from <a href="https://platform.openai.com">platform.openai.com</a></td>
</tr>
<tr>
<td>OpenAI Models</td>
<td>A text model (default <code>gpt-4o</code>) and an image model (default <code>gpt-image-1.5</code>)</td>
</tr>
<tr>
<td>NuGet Packages</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core">Syncfusion.DocumentSDK.AI.AgentTools</a><br/>
<a href="https://www.nuget.org/packages/Microsoft.Agents.AI.OpenAI">Microsoft.Agents.AI.OpenAI</a><br/>
<a href="https://www.nuget.org/packages/OpenAI">OpenAI</a>
</td>
</tr>
</table>

>**Note:** The OpenAI API key is mandatory for this sample because the guide demonstrates the integration using the **Microsoft Agents Framework with OpenAI**. The same integration steps work with any other [provider](https://learn.microsoft.com/en-us/agent-framework/agents/providers/?pivots=programming-language-csharp) (Azure OpenAI, Anthropic, Google Gemini, Ollama, etc.) — just swap in that provider’s API key or endpoint credentials.

## Integration

Integrating the Blog Generator agent into a console application involves the
following steps.

**Step 1: Install all the required NuGet packages as a reference to your project from [NuGet.org](https://www.nuget.org/).**

![Install DocIO .NET Core NuGet package](Install_Nuget.png)

**Step 2: Register the Syncfusion License**

Register your Syncfusion license key at application startup before performing any document operations:

```csharp
string? licenseKey = Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY");
if (!string.IsNullOrEmpty(licenseKey))
{
    Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense(licenseKey);
}
```

**Step 3: Configure OpenAI Credentials**

The application reads the OpenAI API key and model names from environment variables.
If the API key is not found, the user is prompted to enter it, while default models are used automatically.

```csharp
var apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY")
          ?? PromptRequired("OpenAI API key");

var textModel  = Environment.GetEnvironmentVariable("OPENAI_TEXT_MODEL")  ?? "gpt-4o";
var imageModel = Environment.GetEnvironmentVariable("OPENAI_IMAGE_MODEL") ?? "gpt-image-1.5";
```

**Step 4: Create the OpenAI Chat Client**

The same `OpenAIClient` instance is reused for both the chat agent and the image
generator:

```csharp
var openAiClient = new OpenAIClient(new System.ClientModel.ApiKeyCredential(apiKey));
var chatClient   = openAiClient.GetChatClient(textModel);
```

**Step 5: Create the Word Document Manager**

The `WordDocumentManager` keeps live Word document instances in memory across
tool calls. A 10-minute idle timeout automatically cleans up unused documents:

```csharp
using Syncfusion.AI.AgentTools.Core;
using Syncfusion.AI.AgentTools.Word;

var wordManager = new WordDocumentManager(TimeSpan.FromMinutes(10));
```

**Step 6: Instantiate the Word Agent Tool Classes and Collect Tools**

The Blog Generator uses **two** Syncfusion Word tool classes:

* `WordDocumentAgentTools` – Creates, loads, and exports Word documents.
* `WordImportExportAgentTools` – Imports HTML (or other formats) into an existing document.

Both must share the **same** `WordDocumentManager` instance so the document
created by `CreateDocument` is visible to `ImportHtml` and `ExportDocument`:

```csharp
using AITool = Syncfusion.AI.AgentTools.Core.AITool;

var outputDir = Path.GetFullPath(Environment.CurrentDirectory + @"..\..\..\..\Data\Output\");

var allSyncfusionTools = new List<AITool>();
allSyncfusionTools.AddRange(new WordDocumentAgentTools(wordManager, outputDirectory: outputDir).GetTools());
allSyncfusionTools.AddRange(new WordImportExportAgentTools(wordManager).GetTools());
```

**Step 7: Convert Syncfusion Tools to `Microsoft.Extensions.AI` Functions**

Syncfusion `AITool` objects expose a `MethodInfo` and target instance. Wrap
them with `AIFunctionFactory.Create` so they are recognized by the Microsoft
Agent Framework:

```csharp
using Microsoft.Extensions.AI;

var aiTools = allSyncfusionTools
    .Select(t => AIFunctionFactory.Create(
        t.Method,
        t.Instance,
        new AIFunctionFactoryOptions
        {
            Name        = t.Name,
            Description = t.Description
        }))
    .Cast<Microsoft.Extensions.AI.AITool>()
    .ToList();
```

**Step 8: Build the `AIAgent`**

Create the agent with a system prompt that defines **two responsibilities**:

1. Always return **valid JSON** when asked.
2. When asked to build a Word document, strictly follow the
   `CreateDocument` → `ImportHtml` → `ExportDocument` tool sequence.

```csharp
using Microsoft.Agents.AI;

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

**Step 9: Content Generation Wrapper**

`BlogGenerationAgent` is a simple wrapper that handles all four(Title & Outline, Layout Planning and  HTML Content, Image Prompt) content‑generation phases in one place.

```csharp
var blogAgent      = new BlogGenerationAgent(aiAgent);
var imageGenerator = new ImageGenerator(openAiClient, imageModel);
```

**Step 10: Generate Blog Sections and Assemble HTML**

After generating the outline, the user reviews and approves it using an interactive [Y/n/r] prompt (Yes / No / Regenerate).
Once approved, the app generates content for each section, creates images when required, and combines everything into a single HTML blog file saved locally.

```csharp
var blogSections = new List<BlogSection>();
for (int idx = 0; idx < sections.Count; idx++)
{
    var plan = sections[idx];

    var htmlFragment = await blogAgent.GenerateSectionHtmlAsync(
        outline.Title, plan, idx, sections.Count);

    string? imageBase64 = null;
    if (plan.NeedsImage)
    {
        var imagePrompt = await blogAgent.GenerateImagePromptAsync(outline.Title, plan);
        imageBase64 = await imageGenerator.GenerateBase64Async(imagePrompt);
    }

    blogSections.Add(new BlogSection
    {
        Plan         = plan,
        HtmlFragment = htmlFragment,
        ImageBase64  = imageBase64,
        ImageCaption = plan.ImagePurpose
    });
}

var html     = HtmlAssembler.Assemble(outline.Title, blogSections);
var filename = HtmlAssembler.DeriveFilename(outline.Title) + ".html";
var filePath = Path.Combine(outputDir, filename);
HtmlAssembler.SaveToFile(filePath, html);
```

**Step 11: Convert the HTML Blog to a Word Document via the AI Agent (Phase 5)**

This is where the Syncfusion Word Agent Tools handle the document workflow. A single natural‑language prompt allows the agent to automatically invoke the required tools in the correct sequence.

```csharp
using ChatMessage = Microsoft.Extensions.AI.ChatMessage;
using ChatRole    = Microsoft.Extensions.AI.ChatRole;

var wordFilePath = Path.Combine(outputDir,
    HtmlAssembler.DeriveFilename(outline.Title) + ".docx");

var history = new List<ChatMessage>();
var userPrompt =
    $"Create a new Word document, import the HTML from the file '{filePath}' " +
    $"into it, and then export/save it as '{wordFilePath}' in Docx format.";
history.Add(new ChatMessage(ChatRole.User, userPrompt));

var response = await aiAgent.RunAsync(history).ConfigureAwait(false);

foreach (var message in response.Messages)
{
    foreach (var content in message.Contents)
    {
        if (content is TextContent text && !string.IsNullOrEmpty(text.Text))
            Console.WriteLine($"    AI: {text.Text}");
        else if (content is FunctionCallContent call)
            Console.WriteLine($"    [Tool call : {call.Name}]");
        else if (content is FunctionResultContent result)
            Console.WriteLine($"    [Tool result: {result.Result}]");
    }
}
```

## How it works

At runtime, the console application performs the following actions:

1. **Ask blog topic.** Prompt the user to enter a blog topic from the console.
2. **Provide the blog title and outline for confirmation.** The agent drafts a title and 6–10 section outline which is displayed for the user to approve, regenerate, or cancel (`[Y/n/r]`).
3. **Draft blog content as HTML.** For each approved section, the agent generates structured HTML content with consistent styling.
4. **Generate images for this blog using the `gpt-image-1.5` model.**  For required sections, the AI returns PNG images and embedded as Base64.
5. **Convert the HTML to Word by using the Syncfusion AI Agent Tools library.** The AI agent autonomously chains `CreateDocument` → `ImportHtml` → `ExportDocument` from `WordDocumentAgentTools` and `WordImportExportAgentTools`.
6. **Save both HTML and DOCX files.** The assembled self-contained HTML and the converted Word document are written to the output folder.

## Complete Startup Code

For a complete, runnable example combining all steps, refer to the console
application in this repository:

Examples/Console/BlogGenerator/Program.cs

## See Also

* [Getting Started - In-Memory Mode](./getting-started-in-memory-mode)
* [AI Agent Tools Overview](./overview)
* [Tools](./tools)
* [Customization](./customization)
* [Example Prompts](./example-prompts)
* [Microsoft Agent Framework – C# Providers](https://learn.microsoft.com/en-us/agent-framework/agents/providers/?pivots=programming-language-csharp)
