---
layout: post
title: AI Assist Node.js Server Setup in Vue Spreadsheet | Syncfusion
description: Learn how to set up and connect a Node.js + Express server for the AI Assist feature in the Syncfusion Vue Spreadsheet component.
platform: document-processing
control: AI Assist Node.js Server Setup
documentation: ug
---

# AI Assist Node.js Server Setup in Vue Spreadsheet

AI Assist requires a backend service to process prompts and return AI-generated responses. This topic explains how to create a **Node.js** server with **Azure OpenAI** credentials.

## Prerequisites

Ensure the following are available before you begin.

### Azure OpenAI credentials

You must have an Azure OpenAI resource. Collect these values from the [Azure Portal](https://portal.azure.com):

| Credential | Description |
|---|---|
| **API Key** | Azure OpenAI service key |
| **Endpoint** | Base URL of your Azure OpenAI resource (e.g., `https://your-resource.openai.azure.com/`) |
| **API Version** | REST API version (e.g., `2024-02-01`) |
| **Deployment Name** | Model deployment name (e.g., `gpt-4o`) |

These values correspond to the configuration used in the application:

```js
const azureOpenAIApiKey     = 'Your_Azure_OpenAI_API_Key';
const azureOpenAIEndpoint   = 'Your_Azure_OpenAI_Endpoint';
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
const azureDeploymentName   = 'Your_Deployment_Name';
```

### Runtime environment

* Node.js v18 or later
* npm v9 or later

## Install dependencies

Run the following command in your server project:

```bash
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

## Configure credentials

Create a `.env` file in the project root and add your Azure OpenAI credentials:

```csharp
apiKey      = Your_Azure_OpenAI_API_Key
endpoint    = https://your-resource.openai.azure.com/
deployment  = Your_Deployment_Name
apiVersion  = Your_Azure_OpenAI_API_Version
```

> **Important:** Add `.env` to `.gitignore` to prevent exposing secrets.

## Configure required modules

Create `ai-model.js` to initialize the Azure OpenAI client using the credentials from `.env`:

```js
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

Create `server.js` to expose the AI Assist API:

```js
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

## Run the server

Run the following command to start the server:

```bash
npm start
```

The server runs on `http://localhost:3000`. Update the AI Assist endpoint like below:

```
http://localhost:3000/api/AIAssist/Chat
```

## Connect to the Vue Spreadsheet

Once the server is listening, configure the `requestUrl` inside [`aiAssistSettings`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#aiassistsettings) to point to the server endpoint:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

```html
<template>
  <ejs-spreadsheet
    :enableAIAssist="true"
    :aiAssistSettings="aiAssistSettings"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
  </ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent, Spreadsheet, AIAssist } from '@syncfusion/ej2-vue-spreadsheet';

Spreadsheet.Inject(AIAssist);

export default {
  name: 'App',
  components: {
    'ejs-spreadsheet': SpreadsheetComponent
  },
  data() {
    return {
      aiAssistSettings: {
        requestUrl: 'http://localhost:3000/api/AIAssist/Chat'
      }
    };
  }
}
</script>
```

{% endhighlight %}
{% endtabs %}

## Reference

### Environment variables (`.env`)

| Variable | Description |
|---|---|
| `apiKey` | Your Azure OpenAI API key |
| `endpoint` | Your Azure OpenAI resource URL |
| `deployment` | Your model deployment name |
| `apiVersion` | Azure OpenAI REST API version |

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

A Node.js server sample project is available for quick setup. Extract the archive, update the Azure OpenAI credentials in the `.env` file, and start the server using the following command:

```bash
npm start
```

[Download Node.js Server](https://drive.google.com/file/d/1V3TlO_6GS3dV986I7sDizmE9kwojkOrx/view?usp=drive_link)

## See also

* [Web API (.NET) server setup](./using-web-api)
