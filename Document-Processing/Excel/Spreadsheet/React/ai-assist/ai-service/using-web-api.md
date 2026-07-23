---
layout: post
title: AI Assist Web API Server Setup in React Spreadsheet | Syncfusion
description: Learn how to set up and connect an ASP.NET Core Web API server for the AI Assist feature in the Syncfusion React Spreadsheet component.
platform: document-processing
control: AI Assist Web API Server Setup
documentation: ug
---

# AI Assist — Web API (.NET) Server Setup

AI Assist requires a backend service to process prompts and return AI-generated responses. This topic explains how to create an **ASP.NET Core Web API** using **Azure OpenAI** credentials.

## Prerequisites

Ensure the following are available before you begin.

### Azure OpenAI credentials

You must have an Azure OpenAI resource. Collect the following values from the [Azure Portal](https://portal.azure.com):

| Credential | Description |
|---|---|
| **API Key** | Azure OpenAI service key |
| **Endpoint** | Base URL of your Azure OpenAI resource (e.g., `https://your-resource.openai.azure.com/`) |
| **API Version** | REST API version (e.g., `2024-02-01`) |
| **Deployment Name** | Model deployment name (e.g., `gpt-4o`) |

These values correspond to the configuration used in the application:

```
const azureOpenAIApiKey     = 'Your_Azure_OpenAI_API_Key';
const azureOpenAIEndpoint   = 'Your_Azure_OpenAI_Endpoint';
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
const azureDeploymentName   = 'Your_Deployment_Name';
```

### Runtime environment

* .NET 8 SDK or later
* Visual Studio 2022 or the .NET CLI

## Install dependencies

Run the following commands in your Web API project to install the required NuGet packages:

```bash
dotnet add package Azure.AI.OpenAI
dotnet add package Microsoft.Extensions.AI
dotnet add package Microsoft.Extensions.AI.OpenAI
```

| Package | Purpose |
|---|---|
| `Azure.AI.OpenAI` | Azure OpenAI client library |
| `Microsoft.Extensions.AI` | Abstractions for AI services in .NET |
| `Microsoft.Extensions.AI.OpenAI` | Bridges `IChatClient` with the Azure OpenAI client |

## Configure credentials

Add the Azure OpenAI credentials in `appsettings.json` under the `AI` section:

```json
{
  "AI": {
    "Endpoint":        "https://your-resource.openai.azure.com/",
    "Key":             "Your_Azure_OpenAI_API_Key",
    "DeploymentName":  "Your_Deployment_Name"
  }
}
```

## Configure required modules

Update `Program.cs` to register the Azure OpenAI client and required services:

```csharp
using Azure.AI.OpenAI;
using Microsoft.Extensions.AI;
using System.ClientModel;
using WebService.Services;

var builder = WebApplication.CreateBuilder(args);

// Load configuration
builder.Configuration
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", policy =>
        policy.WithOrigins("http://localhost:5173")   // your React dev origin
              .AllowAnyMethod()
              .AllowAnyHeader());
});

// Register Azure OpenAI client
string key            = builder.Configuration["AI:Key"]            ?? throw new InvalidOperationException("AI Key missing");
string endpoint       = builder.Configuration["AI:Endpoint"]       ?? throw new InvalidOperationException("AI Endpoint missing");
string deploymentName = builder.Configuration["AI:DeploymentName"] ?? throw new InvalidOperationException("AI DeploymentName missing");

AzureOpenAIClient azureClient = new AzureOpenAIClient(
    new Uri(endpoint),
    new ApiKeyCredential(key)
);
IChatClient chatClient = azureClient.GetChatClient(deploymentName).AsIChatClient();

builder.Services.AddSingleton<IChatClient>(chatClient);
builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigins");
app.UseAuthorization();
app.MapControllers();
app.Run();
```

## Create the AI Assist controller

Add `AIAssistController.cs` under the `Controllers` folder to handle the `/api/AIAssist/Chat` route:

```csharp
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.AI;
using System.Text.Json;

namespace WebService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AIAssistController : ControllerBase
    {
        private readonly IChatClient _chatClient;

        public AIAssistController(IChatClient chatClient)
        {
            _chatClient = chatClient;
        }

        [HttpPost("Chat")]
        [EnableCors("AllowSpecificOrigins")]
        public async Task<IActionResult> Chat()
        {
            var root = await Request.ReadFromJsonAsync<JsonElement?>();
            if (root == null || root.Value.ValueKind == JsonValueKind.Undefined)
                return BadRequest("Invalid or empty JSON payload.");

            if (!root.Value.TryGetProperty("messages", out var messagesProperty))
                return BadRequest("Invalid messages format.");

            var messagesArray = messagesProperty.ValueKind == JsonValueKind.Array
                ? messagesProperty
                : messagesProperty.TryGetProperty("messages", out var nested)
                    ? nested
                    : default;

            var chatMessages = new List<ChatMessage>();
            foreach (var m in messagesArray.EnumerateArray())
            {
                var content = m.TryGetProperty("content", out var c) ? c.GetString() : null;
                if (string.IsNullOrWhiteSpace(content)) continue;

                var role = m.TryGetProperty("role", out var r) ? r.GetString() : "user";
                ChatRole chatRole = role?.ToLower() switch
                {
                    "system"    => ChatRole.System,
                    "assistant" => ChatRole.Assistant,
                    _           => ChatRole.User
                };
                chatMessages.Add(new ChatMessage(chatRole, content));
            }

            if (chatMessages.Count == 0)
                return BadRequest("No valid messages to send.");

            var result = await _chatClient.GetResponseAsync(chatMessages);
            return Ok(new { ok = true, response = result?.Text });
        }
    }
}
```

## Run the application

Run the following command to start the Web API server:

```bash
dotnet run
```

The server runs on `https://localhost:{port}` (as defined in `launchSettings.json`). Update the AI Assist endpoint like below:

```
https://localhost:{port}/api/AIAssist/Chat
```

## Connect to the React Spreadsheet

Once the server is listening, configure the `requestUrl` inside [`aiAssistSettings`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#aiassistsettings) to point to the server endpoint:

{% raw %}

```js
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export default function App() {
  return (
    <SpreadsheetComponent
      enableAIAssist={true}
      aiAssistSettings={{
        requestUrl: 'https://localhost:{port}/api/AIAssist/Chat'
      }}
      openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
      saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
    />
  );
}
```

{% endraw %}

## Reference

### Configuration keys (`appsettings.json`)

| Key | Description |
|---|---|
| `AI:Key` | Your Azure OpenAI API key |
| `AI:Endpoint` | Your Azure OpenAI resource URL |
| `AI:DeploymentName` | Your model deployment name |

### Chat endpoint contract

The server accepts a `POST` request with the following JSON body:

```json
{
  "messages": [
    { "role": "system",    "content": "You are a spreadsheet assistant." },
    { "role": "user",      "content": "Make the header row bold." }
  ]
}
```

And returns:

```json
{
  "ok": true,
  "response": "..."
}
```

## Sample

A Web API server sample project is available for quick setup. Extract the archive, update the Azure OpenAI credentials in `appsettings.json`, and start the server using the following command:

```bash
dotnet run
```

* [Web API Server](https://drive.google.com/file/d/13K7a89Vk4Xt7dgd4wt49q272bSVSVuz3/view?usp=drive_link)
* [Live Demo](https://document.syncfusion.com/demos/spreadsheet-editor/react/#/tailwind3/spreadsheet/ai-smart-spreadsheets)

## See also

* [Node.js server setup](./using-node-js-server)
