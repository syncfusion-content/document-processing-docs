---
layout: post
title: Getting Started | Storage Mode | AI Agent Tools | Syncfusion
description: Learn how to get started with Syncfusion AI Agent Tools in Storage Mode for consistent, storage-based document operations.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Getting Started - Storage Mode

Documents are read from and written to storage (Azure Blob, S3, local disk, etc.) on each tool invocation. No in-memory objects are maintained between tool calls - each operation opens the document from storage, processes it, and saves it back. This mode is ideal for distributed systems, serverless architectures, and scenarios where document persistence is required.

The example below uses Azure Blob Storage. The same pattern works with any storage backend by implementing the `IDocumentStorage` interface.

## Prerequisites

| Requirement | Details |
|---|---|
| .NET SDK | .NET 8.0, 9.0, or 10.0 |
| AI Provider API Key | Required to authenticate requests to the AI provider. This page uses OpenAI.|
| Azure Storage Account | Create from [Azure Portal](https://portal.azure.com) with a blob container |
| NuGet Packages | [Microsoft.Agents.AI.OpenAI](https://www.nuget.org/packages/Microsoft.Agents.AI.OpenAI), [Azure.Storage.Blobs](https://www.nuget.org/packages/Azure.Storage.Blobs) |

## Integration

**Step 1: Install and License**

Install the [Syncfusion.DocumentSDK.AI.AgentTools](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools) NuGet package, then register your license key at application startup:

![Install NuGet package](Install_Nuget.png)

```csharp
string? licenseKey = Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY");
if (!string.IsNullOrEmpty(licenseKey))
    Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense(licenseKey);
```

**Step 2: Implement Storage**

Implement `IDocumentStorage` for your storage backend. Below is the class signature and method placeholders for Azure Blob Storage - You can download a complete working sample from [GitHub](https://github.com/syncfusion/document-sdk-ai-agent-tools/blob/master/Examples/ASP.NET-Core/AgentChatWeb/):

```csharp
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Syncfusion.AI.AgentTools.Core;

public class AzureBlobStorage : IDocumentStorage
{
    private readonly BlobContainerClient _containerClient;

    public AzureBlobStorage(string connectionString, string containerName)
    {
        _containerClient = new BlobContainerClient(connectionString, containerName);
        _containerClient.CreateIfNotExists(PublicAccessType.None);
    }

    public Stream Read(string filePath) { /* download blob to MemoryStream */ }

    public bool Write(string filePath, Stream documentStream) { /* upload stream to blob */ }

    public bool Exists(string filePath) { /* check if blob exists */ }
}
```

Then initialize it with your connection string and container:

```csharp
string connectionString = Environment.GetEnvironmentVariable("AZURE_BLOB_CONNECTION_STRING")!;
string containerName    = Environment.GetEnvironmentVariable("AZURE_BLOB_CONTAINER") ?? "documents";

IDocumentStorage storage = new AzureBlobStorage(connectionString, containerName);
```

N> For other storage providers (AWS S3, local disk, etc.), implement the same `IDocumentStorage` interface with the appropriate SDK or file system operations.

**Step 3: Create DocumentStorageManager**

Unlike In-Memory Mode which uses separate managers per document type, Storage Mode uses a single `DocumentStorageManager` for all document types:

```csharp
using Syncfusion.AI.AgentTools.DocumentManagers;

var storageManager = new DocumentStorageManager(storage);
```

**Step 4: Instantiate Tools**

Initialize each tool class with the storage manager and collect [AITool](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.ai.aitool) objects:

```csharp
using Syncfusion.AI.AgentTools.Word;
using Syncfusion.AI.AgentTools.Excel;
using Syncfusion.AI.AgentTools.PDF;
using Syncfusion.AI.AgentTools.PowerPoint;
using Syncfusion.AI.AgentTools.OfficeToPDF;
using Syncfusion.AI.AgentTools.DataExtraction;
using AITool = Syncfusion.AI.AgentTools.Core.AITool;

var allTools = new List<AITool>();

// Word tools
allTools.AddRange(new WordImportExportAgentTools(storageManager).GetTools());
allTools.AddRange(new WordOperationsAgentTools(storageManager).GetTools());
allTools.AddRange(new WordSecurityAgentTools(storageManager).GetTools());

// Excel tools
allTools.AddRange(new ExcelWorksheetAgentTools(storageManager).GetTools());
allTools.AddRange(new ExcelSecurityAgentTools(storageManager).GetTools());
allTools.AddRange(new ExcelDataValidationAgentTools(storageManager).GetTools());

// PDF tools
allTools.AddRange(new PdfOperationsAgentTools(storageManager).GetTools());
allTools.AddRange(new PdfSecurityAgentTools(storageManager).GetTools());
allTools.AddRange(new PdfContentExtractionAgentTools(storageManager).GetTools());

// PowerPoint tools
allTools.AddRange(new PresentationOperationsAgentTools(storageManager).GetTools());
allTools.AddRange(new PresentationSecurityAgentTools(storageManager).GetTools());
allTools.AddRange(new PresentationContentAgentTools(storageManager).GetTools());
allTools.AddRange(new PresentationFindAndReplaceAgentTools(storageManager).GetTools());

// Conversion and data extraction
allTools.AddRange(new OfficeToPdfAgentTools(storageManager).GetTools());
allTools.AddRange(new DataExtractionAgentTools().GetTools());
```

N> 1. The following tool classes are not supported in Storage mode:
N>    * WordDocumentAgentTools
N>    * ExcelWorkbookAgentTools
N>    * PdfDocumentAgentTools
N>    * PresentationDocumentAgentTools   
N>    All other tool classes work identically in both modes
N> 2. Register only the tool classes your app needs. See the full list in the [Tools Reference](./tools#available-tools).  

**Step 5: Convert and Register Tools**

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

N> AI agents support a maximum of 128 tools. Register only the tools relevant to your scenario.

**Step 6: Build the Agent**

Create the agent with the chat client, system prompt, and registered tools:

```csharp
using Microsoft.Agents.AI;
using OpenAI;

string apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY")!;
string model  = Environment.GetEnvironmentVariable("OPENAI_MODEL") ?? "gpt-4o";

AIAgent agent = new OpenAIClient(apiKey)
    .GetChatClient(model)
    .AsIChatClient()
    .AsAIAgent(
        instructions: BuildSystemPrompt(@"Input\", @"Output\"),
        tools: aiTools);
```

The system prompt sets the rules for how the agent works. For the full system prompt, see [here](https://github.com/syncfusion/document-sdk-ai-agent-tools/blob/master/Examples/ASP.NET-Core/AgentChatWeb/Services/AgentService.cs#L228).

## Complete Example

You can download a complete working sample from [GitHub](https://github.com/syncfusion/document-sdk-ai-agent-tools/tree/master/Examples/ASP.NET-Core/AgentChatWeb).

## See Also

- [Overview](./overview)
- [Tools](./tools)
- [Customization](./customization)
- [Example Prompts](./example-prompts)
- [Example Use Cases](./example-use-cases)
