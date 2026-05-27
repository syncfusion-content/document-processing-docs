---
layout: post
title: AI Assist Server Connection in React Spreadsheet | Syncfusion
description: Learn how to set up and connect a Web API or Node.js server for the AI Assist feature in the Syncfusion React Spreadsheet component.
platform: document-processing
control: AI Assist Server Connection
documentation: ug
---

# AI Assist — Server Connection

The AI Assist feature requires a backend server to process prompts and return AI-generated responses. This page explains how to set up that server using either an **ASP.NET Core Web API** or a **Node.js + Express** service, both backed by **Azure OpenAI**.

---

## Prerequisites

Before you begin, ensure the following are in place.

### Azure OpenAI credentials

You need an active Azure OpenAI resource. Collect the following four values from the [Azure Portal](https://portal.azure.com):

| Credential | Description |
|---|---|
| **API Key** | Your Azure OpenAI service key |
| **Endpoint** | The base URL of your Azure OpenAI resource (e.g., `https://your-resource.openai.azure.com/`) |
| **API Version** | The REST API version to target (e.g., `2024-02-01`) |
| **Deployment Name** | The name of the model deployment (e.g., `gpt-4o`) |

These values map directly to the variables you will configure:

```
const azureOpenAIApiKey     = 'Your_Azure_OpenAI_API_Key';
const azureOpenAIEndpoint   = 'Your_Azure_OpenAI_Endpoint';
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
const azureDeploymentName   = 'Your_Deployment_Name';
```

### Runtime environment

{% tabs %}
{% highlight js tabtitle="Node.js" %}

* [Node.js](https://nodejs.org/) v18 or later
* npm v9 or later

{% endhighlight %}
{% highlight cs tabtitle="Web API (.NET)" %}

* [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) or later
* Visual Studio 2022 or the .NET CLI

{% endhighlight %}
{% endtabs %}

---

## Step 1 — Install dependencies

{% tabs %}
{% highlight js tabtitle="Node.js" %}

Inside your server project folder, install the required npm packages:

```
npm install express cors dotenv openai date-fns
```

| Package | Purpose |
|---|---|
| `express` | HTTP server framework |
| `cors` | Cross-Origin Resource Sharing middleware |
| `dotenv` | Loads credentials from a `.env` file |
| `openai` | Official Azure OpenAI client SDK |
| `date-fns` | Date formatting for token-reset messages |

Ensure your `package.json` includes `"type": "module"` to support ES module imports:

```json
{
  "name": "service",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "date-fns": "^4.1.0",
    "dotenv": "^16.4.5",
    "express": "^4.21.0",
    "openai": "4.50.0"
  }
}
```

{% endhighlight %}
{% highlight cs tabtitle="Web API (.NET)" %}

Inside your Web API project folder, install the required NuGet packages:

```
dotnet add package Azure.AI.OpenAI
dotnet add package Microsoft.Extensions.AI
dotnet add package Microsoft.Extensions.AI.OpenAI
```

| Package | Purpose |
|---|---|
| `Azure.AI.OpenAI` | Azure OpenAI client library |
| `Microsoft.Extensions.AI` | Abstractions for AI services in .NET |
| `Microsoft.Extensions.AI.OpenAI` | Bridges `IChatClient` with the Azure OpenAI client |

{% endhighlight %}
{% endtabs %}

---

## Step 2 — Configure credentials

{% tabs %}
{% highlight js tabtitle="Node.js" %}

Create a `.env` file at the root of your server project and add your Azure OpenAI credentials:

```dotenv
apiKey      = Your_Azure_OpenAI_API_Key
endpoint    = https://your-resource.openai.azure.com/
deployment  = Your_Deployment_Name
apiVersion  = Your_Azure_OpenAI_API_Version
```

> **Important:** Add `.env` to your `.gitignore` to avoid committing secrets to source control.

{% endhighlight %}
{% highlight cs tabtitle="Web API (.NET)" %}

Open `appsettings.json` and add your Azure OpenAI credentials under the `AI` section:

```json
{
  "AI": {
    "Endpoint":        "https://your-resource.openai.azure.com/",
    "Key":             "Your_Azure_OpenAI_API_Key",
    "DeploymentName":  "Your_Deployment_Name"
  }
}
```

> **Important:** For production, store secrets using [Azure Key Vault](https://learn.microsoft.com/azure/key-vault/) or [.NET Secret Manager](https://learn.microsoft.com/aspnet/core/security/app-secrets) instead of `appsettings.json`.

{% endhighlight %}
{% endtabs %}

---

## Step 3 — Configure required modules

{% tabs %}
{% highlight js tabtitle="Node.js" %}

Create `ai-model.js` to initialize the Azure OpenAI client using the credentials from `.env`:

```javascript
import { AzureOpenAI } from "openai";
import dotenv from 'dotenv';

dotenv.config();

const endpoint   = process.env.endpoint;
const apiKey     = process.env.apiKey;
const deployment = process.env.deployment;
const apiVersion = process.env.apiVersion;

const client = new AzureOpenAI({
    endpoint,
    apiKey,
    apiVersion,
    deployment
});

export async function getAzureChatAIRequest(options) {
    const result = await client.chat.completions.create({
        messages:          options.messages,
        model:             "",
        top_p:             options.topP,
        temperature:       options.temperature,
        max_tokens:        options.maxTokens,
        frequency_penalty: options.frequencyPenalty,
        presence_penalty:  options.presencePenalty,
        stop:              options.stopSequences
    });
    return result;
}
```

Then create `server.js` to expose the `/api/AIAssist/Chat` endpoint:

```javascript
import express from 'express';
import cors from 'cors';
import { getAzureChatAIRequest } from './ai-model.js';

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/AIAssist/Chat', async (req, res) => {
    const { visitorId, ...chatData } = req.body;
    const responseText = await getAzureChatAIRequest(chatData);
    if (responseText) {
        return res.status(200).json({
            response: responseText.choices[0].message.content
        });
    }
    return res.status(500).json({ error: 'Failed to generate response' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

{% endhighlight %}
{% highlight cs tabtitle="Web API (.NET)" %}

Open `Program.cs` and register the Azure OpenAI client and the chat controller:

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

Then add `AIAssistController.cs` under the `Controllers` folder to handle the `/api/AIAssist/Chat` route:

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

{% endhighlight %}
{% endtabs %}

---

## Step 4 — Start the server

{% tabs %}
{% highlight js tabtitle="Node.js" %}

Run the following command from your server project folder:

```
npm start
```

The server starts on `http://localhost:3000`. The AI Assist panel should point to:

```
http://localhost:3000/api/chat
```

{% endhighlight %}
{% highlight cs tabtitle="Web API (.NET)" %}

Run the following command from your Web API project folder:

```
dotnet run
```

The server starts on `https://localhost:{port}` (as defined in `launchSettings.json`). The AI Assist panel should point to:

```
https://localhost:{port}/api/AIAssist/Chat
```

{% endhighlight %}
{% endtabs %}

---

## Connect the server to the React Spreadsheet

Once the server is running, set the `requestUrl` inside `aiAssistSettings` to point to your server's chat endpoint:

{% tabs %}
{% highlight js tabtitle="Node.js (app.jsx / app.tsx)" %}
{% raw %}

import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export default function App() {
  return (
    <SpreadsheetComponent
      enableAIAssist={true}
      aiAssistSettings={{
        requestUrl: 'http://localhost:3000/api/chat'
      }}
      openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
      saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
    />
  );
}

{% endraw %}
{% endhighlight %}
{% highlight cs tabtitle="Web API (.NET) (app.jsx / app.tsx)" %}
{% raw %}

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

{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## Reference

### Node.js environment variables (`.env`)

| Variable | Description |
|---|---|
| `apiKey` | Your Azure OpenAI API key |
| `endpoint` | Your Azure OpenAI resource URL |
| `deployment` | Your model deployment name |
| `apiVersion` | The Azure OpenAI REST API version |

### .NET configuration keys (`appsettings.json`)

| Key | Description |
|---|---|
| `AI:Key` | Your Azure OpenAI API key |
| `AI:Endpoint` | Your Azure OpenAI resource URL |
| `AI:DeploymentName` | Your model deployment name |

### Chat endpoint contract

Both servers accept a `POST` request with the following JSON body:

```json
{
  "messages": [
    { "role": "system",    "content": "You are a spreadsheet assistant." },
    { "role": "user",      "content": "Make the header row bold." }
  ]
}
```

And return:

```json
{
  "ok": true,
  "response": "..."
}
```

---

## See also

* [AI Assist overview](./getting-started)
* [Web Services overview](../web-services/webservice-overview)
* [Getting Started with React Spreadsheet](../getting-started)
