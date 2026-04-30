---
title: Example Use Cases | Syncfusion AI Agent Tools
description: Explore example use cases for building a Blog Generator agent using Syncfusion Word tools, the Microsoft Agent Framework, and OpenAI.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Create Custom Blog Generator Agent

## Overview

This example use case demonstrates building a **Blog Generator** that uses the [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview?pivots=programming-language-csharp), OpenAI (text and image generation), and Syncfusion Word Agent Tools to convert a single user‑provided topic into a fully formatted blog ebook. The agent generates a title and structured outline, creates detailed content with relevant images, and outputs the final result in **HTML** and **Word (.docx)** formats. This sample application runs using [in‑memory mode](./getting-started-in-memory-mode.md) for document processing.

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

## Configure OpenAI Credentials and Syncfusion Document SDK AI Agent Tools

Integrating the Blog Generator agent into a console application involves the following step: configuring OpenAI credentials, registering the Syncfusion license, initializing the OpenAI client, setting up the Word Document Manager, and enabling Syncfusion Document SDK AI Agent tools for document creation and export.

```csharp
using Syncfusion.AI.AgentTools.Core;
using Syncfusion.AI.AgentTools.Word;
using Microsoft.Extensions.AI;

// Register Syncfusion license
string? licenseKey = Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY");
if (!string.IsNullOrEmpty(licenseKey))
{
    Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense(licenseKey);
}

// Read OpenAI credentials and model configuration
var apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY")
          ?? PromptRequired("OpenAI API key");

var textModel  = Environment.GetEnvironmentVariable("OPENAI_TEXT_MODEL")  ?? "gpt-4o";
var imageModel = Environment.GetEnvironmentVariable("OPENAI_IMAGE_MODEL") ?? "gpt-image-1.5";

// Create OpenAI client and chat client
var openAiClient = new OpenAIClient(new System.ClientModel.ApiKeyCredential(apiKey));
var chatClient   = openAiClient.GetChatClient(textModel);

// Create Word Document Manager (in-memory with timeout)
var wordManager = new WordDocumentManager(TimeSpan.FromMinutes(10));

// Instantiate Syncfusion Word AI Agent tools
using AITool = Syncfusion.AI.AgentTools.Core.AITool;

var outputDir = Path.GetFullPath(Environment.CurrentDirectory + @"..\..\..\..\Data\Output\");

var allSyncfusionTools = new List<AITool>();
allSyncfusionTools.AddRange(new WordDocumentAgentTools(wordManager, outputDirectory: outputDir).GetTools());
allSyncfusionTools.AddRange(new WordImportExportAgentTools(wordManager).GetTools());

// Convert Syncfusion tools to Microsoft.Extensions.AI compatible tools
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

## Build Blog Generator Custom AI Agent Workflow

This step builds the custom Blog Generator AI agent, generates blog content and images from a single topic, assembles the content into HTML, and finally converts the HTML into a Word document using Syncfusion Word AI Agent tools-all through a single agent‑driven workflow.

```csharp
// Build the Blog Generator AI agent, generate blog content & images,
// assemble HTML, and convert the HTML blog into a Word document via AI tools.
using Microsoft.Agents.AI;

// Build the AI agent with strict JSON output and Word tool execution rules
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

// Initialize content and image generation helpers
var blogAgent      = new BlogGenerationAgent(aiAgent);
var imageGenerator = new ImageGenerator(openAiClient, imageModel);

// Generate blog sections, images (if required), and assemble HTML
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

// Save assembled HTML blog
var html     = HtmlAssembler.Assemble(outline.Title, blogSections);
var filename = HtmlAssembler.DeriveFilename(outline.Title) + ".html";
var filePath = Path.Combine(outputDir, filename);
HtmlAssembler.SaveToFile(filePath, html);

//Convert the HTML blog into a Word document using the AI agent
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

1. **Ask blog topic.** Request the user to enter a blog topic from the console.
2. **Provide the blog title and outline for confirmation.** The agent drafts a title and 6–10 section outline which is displayed for the user to approve, regenerate, or cancel (`[Y/n/r]`).
3. **Draft blog content as HTML.** For each section, the agent generates structured HTML content with consistent styling.
4. **Generate images for this blog using the `gpt-image-1.5` model.**  For the required sections, the AI generates PNG images and embeds the generated images as Base64.
5. **Convert the HTML to Word by using the Syncfusion AI Agent Tools library.** The AI agent autonomously chains `CreateDocument` → `ImportHtml` → `ExportDocument` from `WordDocumentAgentTools` and `WordImportExportAgentTools`.
6. **Save both HTML and DOCX files.** The assembled self-contained HTML and the converted Word document are saved to the output folder.

## Complete Startup Code

For a complete, runnable example combining all steps, refer to the console
application in this repository:

[Examples/Console/BlogGenerator/Program.cs](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main)

## See Also

* [Getting Started - In-Memory Mode](./getting-started-in-memory-mode)
* [AI Agent Tools Overview](./overview)
* [Tools](./tools)
* [Customization](./customization)
* [Example Prompts](./example-prompts)
* [Microsoft Agent Framework – C# Providers](https://learn.microsoft.com/en-us/agent-framework/agents/providers/?pivots=programming-language-csharp)
