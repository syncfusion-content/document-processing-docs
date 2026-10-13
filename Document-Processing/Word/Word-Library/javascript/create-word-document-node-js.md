---
layout: post
title: Getting Started with JavaScript Word in Node.js app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Word Library in a Node.js application. Steps to create Word documents without depend on Microsoft Word.
platform: document-processing
control: Word
documentation: ug
keywords: node create word, node generate docx, node word library, ej2 word node, express
canonical_url: https://help.syncfusion.com/document-processing/word/word-library/javascript/create-word-document-node-js
---

# Getting Started with JavaScript Word Library in Node.js app

The JavaScript Word Library is used to create, read, and edit Word documents.

This guide explains how to integrate the JavaScript Word Library into a Node.js server-side application that exposes a Word generation endpoint and delivers the file to the browser.

## Prerequisites

The following prerequisites are required to complete this guide:

- **Node.js** version 18.0 or later
- **npm** version 9.0 or later
- A code editor such as Visual Studio Code
- Basic familiarity with Node.js and the command line

To verify your Node.js and npm versions, run the following commands:

```bash
node --version
npm --version
```

## Create a Node.js Project

Create a new project folder and initialize it with `npm init`. The project uses CommonJS (the default `npm init` setting), so `require` syntax is used in `server.js`.

```bash
mkdir word-node-app
cd word-node-app
npm init -y
```

After initialization, the project root (`word-node-app`) contains a `package.json` file. The final project structure is:

```text
word-node-app/
├── public/
│   └── index.html
├── server.js
└── package.json
```

## Install Dependencies

Install the JavaScript Word Library and Express. Express is required to host the HTTP endpoint that generates and serves the Word document.

```bash
npm install @syncfusion/ej2-docx express --save
```

### Required Dependencies

The following packages are required to use the JavaScript Word Library in a Node.js application:

- `@syncfusion/ej2-docx` — the core JavaScript Word Library
- `express` — HTTP server used to expose the Word generation endpoint

## Create a Node.js Server Application to Generate a Word Document

* Create a `public` folder inside the project root. The Express server uses `express.static('public')` to serve files from this folder.

```bash
mkdir public
```

* Add a simple button to `public/index.html` and attach a click handler that calls the Word generation endpoint.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<html>
  <head>
    <title>Word Generator</title>
  </head>
  <body>
    <h2>Generate Word Example</h2>
    <button onclick="generateWord()">Create Word document</button>
    <script>
      async function generateWord() {
        const response = await fetch('/generate-word');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Output.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      }
    </script>
  </body>
</html>
{% endhighlight %}
{% endtabs %}

N> The `fetch` call uses a relative path (`/generate-word`) because the frontend is served by the same Express server. This avoids CORS configuration. If you host the frontend on a different origin, enable CORS in Express using the `cors` package and update the `fetch` URL to the full server origin.

* Create a new file named `server.js` in the project root (`word-node-app/server.js`) and include the following code to generate a Word document in the Node.js environment. In Node.js, `save()` returns the document bytes; the Word Library does not write a filesystem path directly.

{% tabs %}
{% highlight javascript tabtitle="server.js" %}

const express = require('express');
const { WordDocument } = require('@syncfusion/ej2-docx');

const app = express();
const PORT = 3000;
// Serve frontend files from the public directory
app.use(express.static('public'));
// Word generation API
app.get('/generate-word', async (req, res) => {
  // Create a Word document
  const document = WordDocument.create();
  // Access the section
  const section = document.section[0];
  // Access the paragraph
  const paragraph = section.body.paragraphs[0];
  // Add text to the paragraph
  paragraph.appendText('Hello World!!!');
  // Save the Word document as a Uint8Array of bytes
  const docxBytes = await document.save();
  // Send the Word document to the browser as a downloadable attachment
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  res.setHeader('Content-Disposition', 'attachment; filename=Output.docx');
  res.send(Buffer.from(docxBytes));
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

{% endhighlight %}
{% endtabs %}

N> If you prefer ESM, add `"type": "module"` to `package.json` and replace the `require` calls with `import express from 'express'` and `import { WordDocument } from '@syncfusion/ej2-docx'`.

### Code Explanation

- `WordDocument.create()` — creates a new Word document instance.
- `document.section[0]` — accesses the first section of the document.
- `section.body.paragraphs[0]` — accesses the first paragraph in the section body.
- `appendText(text)` — adds text content to the paragraph.
- `document.save()` — returns the Word document as a `Uint8Array`. In a browser build, `document.save('filename')` triggers a client download; in Node, you receive the bytes and stream them yourself. Use `saveSync()` when a synchronous call is required.
- `Buffer.from(docxBytes)` — copies the `Uint8Array` into a Node `Buffer` for the HTTP response.

## Run the Application

Run the following command from the project root to start the Node.js server:

```bash
node server.js
```

The server listens on `http://localhost:3000`. Open this URL in a browser and click **Create Word document** to download the generated file as `Output.docx`.

N> If the port is already in use, stop the conflicting process or change `PORT` in `server.js` to an available port. The error `EADDRINUSE` indicates a port conflict.

## Output

Clicking **Create Word document** triggers the `fetch('/generate-word')` call. The server responds with the DOCX bytes and the `Content-Disposition: attachment; filename=Output.docx` header causes the browser to download the file as `Output.docx`. The file contains a single paragraph with the text "Hello World!!!".

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `Error: Cannot find module 'express'` | Express is not installed | Run `npm install express` |
| `Error: Cannot find module '@syncfusion/ej2-docx'` | The Word package is not installed | Run `npm install @syncfusion/ej2-docx` |
| `EADDRINUSE` on port 3000 | Another process is using the port | Stop the process or change `PORT` in `server.js` |
| `require is not defined` | `package.json` has `"type": "module"` | Remove `"type": "module"` or convert `server.js` to ESM (`import` syntax) |
| Downloaded file cannot be opened | The server returned an error payload or the wrong content type | Check the terminal output and confirm `Content-Type` is the WordprocessingML MIME type |
| Browser blocks the download due to CORS | Frontend and backend are on different origins | Install the `cors` package and add `app.use(cors())` to `server.js` |
| `Output.docx` does not download | The response headers are missing or incorrect | Confirm `Content-Disposition` includes `attachment; filename=Output.docx` |

## See Also

- [JavaScript Word Library documentation](https://help.syncfusion.com/document-processing/word/word-library/javascript/overview)
