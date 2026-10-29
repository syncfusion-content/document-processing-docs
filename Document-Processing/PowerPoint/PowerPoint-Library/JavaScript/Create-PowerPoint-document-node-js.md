---
layout: post
title: Getting Started with JavaScript PowerPoint in Node.js app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript PowerPoint Library in a Node.js application. Steps to create PowerPoint presentations without Microsoft PowerPoint.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: node create powerpoint, node generate pptx, node powerpoint library, ej2 powerpoint node, express
canonical_url: https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/javascript/create-powerpoint-document-node-js
---

# Getting Started with JavaScript PowerPoint Library in Node.js app

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) facilitates the creation of a simple PowerPoint presentation with basic elements from scratch.

This guide explains how to integrate the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) into a Node.js server-side application that exposes a PowerPoint generation endpoint and delivers the file to the browser.

## Prerequisites

The following prerequisites are required to complete this guide:

- **Node.js** version 18.0 or later
- **npm** version 9.0 or later
- A code editor such as Visual Studio Code or Code Studio
- Basic familiarity with Node.js and the command line

To verify your Node.js and npm versions, run the following commands:

```bash
node --version
npm --version
```

## Create a Node.js Project

Create a new project folder and initialize it with `npm init`. The project uses CommonJS (the default `npm init` setting), so `require` syntax is used in `server.js`.

```bash
mkdir pptx-node-app
cd pptx-node-app
npm init -y
```

After initialization, the project root (`pptx-node-app`) contains a `package.json` file. The final project structure is:

```text
pptx-node-app/
├── public/
│   └── index.html
├── server.js
└── package.json
```

## Install Dependencies

Install the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) and Express. Express is required to host the HTTP endpoint that generates and serves the PowerPoint presentation.

```bash
npm install @syncfusion/ej2-pptx express --save
```

### Required Dependencies

The following packages are required to use the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) in a Node.js application:

- `@syncfusion/ej2-pptx` — the core JavaScript PowerPoint Library
- `express` — HTTP server used to expose the PowerPoint generation endpoint

## Create a Node.js Server Application to Generate a PowerPoint Presentation

* Create a `public` folder inside the project root. The Express server uses `express.static('public')` to serve files from this folder.

```bash
mkdir public
```

* Add a simple button to `public/index.html` and attach a click handler that calls the PowerPoint generation endpoint.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<html>
  <head>
    <title>PowerPoint Generator</title>
  </head>
  <body>
    <h2>Generate PowerPoint Example</h2>
    <button onclick="generatePowerPoint()">Create PowerPoint document</button>
    <script>
      async function generatePowerPoint() {
        const response = await fetch('/generate-powerpoint');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Output.pptx';
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

N> The `fetch` call uses a relative path (`/generate-powerpoint`) because the frontend is served by the same Express server. This avoids CORS configuration. If you host the frontend on a different origin, enable CORS in Express using the `cors` package and update the `fetch` URL to the full server origin.

* Create a new file named `server.js` in the project root (`pptx-node-app/server.js`) and include the following code to generate a PowerPoint presentation in the Node.js environment. In Node.js, `save()` returns the presentation bytes; the PowerPoint Library does not write a filesystem path directly.

{% tabs %}
{% highlight javascript tabtitle="server.js" %}

const express = require('express');
const { Presentation, HorizontalAlignmentType } = require('@syncfusion/ej2-pptx');

const app = express();
const PORT = 3000;
// Serve frontend files from the public directory
app.use(express.static('public'));
// PowerPoint generation API
app.get('/generate-powerpoint', async (req, res) => {
  // Creates a Presentation instance
  const pptxDoc = Presentation.create();
  // Adds a slide to the PowerPoint presentation
  const slide = pptxDoc.slides.add();
  // Adds a textbox for the title
  const titleShape = slide.shapes.addTextBox({
    bounds: {
      x: 55,
      y: 25,
      width: 850,
      height: 72
    }
  });
  // Adds a paragraph to the textbox
  const paragraph = titleShape.textBody.addParagraph();
  paragraph.horizontalAlignment = HorizontalAlignmentType.Center;
  // Adds text to the paragraph
  const textPart = paragraph.addTextPart('Hello World!!!');
  textPart.font.fontName = 'Calibri';
  textPart.font.bold = true;
  textPart.font.fontSize = 36;
  // Save the PowerPoint presentation as a Uint8Array of bytes
  const pptxBytes = await pptxDoc.save();
  // Send the PowerPoint presentation to the browser as a downloadable attachment
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
  res.setHeader('Content-Disposition', 'attachment; filename=Output.pptx');
  res.send(Buffer.from(pptxBytes));
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

{% endhighlight %}
{% endtabs %}

N> If you prefer ESM, add `"type": "module"` to `package.json` and replace the `require` calls with `import express from 'express'` and `import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx'`.

### Code Explanation

- `Presentation.create()` — creates a new PowerPoint presentation instance.
- `slides.add()` — adds a slide to the presentation.
- `shapes.addTextBox({ bounds })` — adds a text box to the slide at the specified position and size.
- `textBody.addParagraph()` — adds a paragraph to the text box.
- `HorizontalAlignmentType.Center` — centers the paragraph horizontally.
- `addTextPart(text)` — adds text content to the paragraph.
- `font.fontName`, `font.bold`, and `font.fontSize` — set the font name, bold style, and size of the text.
- `pptxDoc.save()` — returns the PowerPoint presentation as a `Uint8Array`. In a browser build, `save('filename')` triggers a client download; in Node, you receive the bytes and stream them yourself.
- `Buffer.from(pptxBytes)` — copies the `Uint8Array` into a Node `Buffer` for the HTTP response.

## Run the Application

Run the following command from the project root to start the Node.js server:

```bash
node server.js
```

The server listens on `http://localhost:3000`. Open this URL in a browser and click **Create PowerPoint document** to download the generated file as `Output.pptx`.

N> If the port is already in use, stop the conflicting process or change `PORT` in `server.js` to an available port. The error `EADDRINUSE` indicates a port conflict.

## Output

Clicking **Create PowerPoint document** triggers the `fetch('/generate-powerpoint')` call. The server responds with the PPTX bytes and the `Content-Disposition: attachment; filename=Output.pptx` header causes the browser to download the file as `Output.pptx`. The file contains a single slide with the text "Hello World!!!".

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `Error: Cannot find module 'express'` | Express is not installed | Run `npm install express` |
| `Error: Cannot find module '@syncfusion/ej2-pptx'` | The PowerPoint package is not installed | Run `npm install @syncfusion/ej2-pptx` |
| `EADDRINUSE` on port 3000 | Another process is using the port | Stop the process or change `PORT` in `server.js` |
| `require is not defined` | `package.json` has `"type": "module"` | Remove `"type": "module"` or convert `server.js` to ESM (`import` syntax) |
| Downloaded file cannot be opened | The server returned an error payload or the wrong content type | Check the terminal output and confirm `Content-Type` is the PresentationML MIME type |
| Browser blocks the download due to CORS | Frontend and backend are on different origins | Install the `cors` package and add `app.use(cors())` to `server.js` |
| `Output.pptx` does not download | The response headers are missing or incorrect | Confirm `Content-Disposition` includes `attachment; filename=Output.pptx` |

## See Also

- [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library)
- [JavaScript PowerPoint Library documentation](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/javascript/overview)
