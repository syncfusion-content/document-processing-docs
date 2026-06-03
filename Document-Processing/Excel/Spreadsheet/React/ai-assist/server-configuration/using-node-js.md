---
layout: post
title: AI Assist Node.js Server Setup in React Spreadsheet | Syncfusion
description: Learn how to set up and connect a Node.js + Express server for the AI Assist feature in the Syncfusion React Spreadsheet component.
platform: document-processing
control: AI Assist Node.js Server Setup
documentation: ug
---

# AI Assist — Node.js Server Setup

The AI Assist feature requires a backend server to process prompts and return AI-generated responses. This page explains how to set up that server using a **Node.js + Express** service backed by **Azure OpenAI**.

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

* Node.js v18 or later
* npm v9 or later

---

## Step 1 — Install dependencies

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

---

## Step 2 — Configure credentials

Create a `.env` file at the root of your server project and add your Azure OpenAI credentials:

```dotenv
apiKey      = Your_Azure_OpenAI_API_Key
endpoint    = https://your-resource.openai.azure.com/
deployment  = Your_Deployment_Name
apiVersion  = Your_Azure_OpenAI_API_Version
```

> **Important:** Add `.env` to your `.gitignore` to avoid committing secrets to source control.

---

## Step 3 — Configure required modules

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

---

## Step 4 — Start the server

Run the following command from your server project folder:

```
npm start
```

The server starts on `http://localhost:3000`. The AI Assist panel should point to:

```
http://localhost:3000/api/chat
```

---

## Connect the server to the React Spreadsheet

Once the server is running, set the `requestUrl` inside `aiAssistSettings` to point to your server's chat endpoint:

{% raw %}

```jsx
import { SpreadsheetComponent, Spreadsheet, AIAssist } from '@syncfusion/ej2-react-spreadsheet';

Spreadsheet.Inject(AIAssist);

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
```

{% endraw %}

---

## Reference

### Environment variables (`.env`)

| Variable | Description |
|---|---|
| `apiKey` | Your Azure OpenAI API key |
| `endpoint` | Your Azure OpenAI resource URL |
| `deployment` | Your model deployment name |
| `apiVersion` | The Azure OpenAI REST API version |

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

---

## See also

* [AI Assist overview](./getting-started)
* [Web API (.NET) server setup](./using-web-api)
* [Web Services overview](../web-services/webservice-overview)
* [Getting Started with React Spreadsheet](../getting-started)
