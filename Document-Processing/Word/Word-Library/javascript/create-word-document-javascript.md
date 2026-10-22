---
layout: post
title: Getting Started with JavaScript Word in JavaScript app | Syncfusion
canonical_url: https://help.syncfusion.com/document-processing/word/word-library/javascript/create-word-document-javascript
description: Learn how to get started with the Syncfusion JavaScript Word Library in a JavaScript app. Steps to create Word documents without depend on Microsoft Word.
platform: document-processing
control: Word
documentation: ug
keywords: javascript create word, javascript generate docx, javascript word library, ej2 word javascript, cdn
appliesto: Document SDK
---

# Getting Started with JavaScript Word Library in JavaScript app

Syncfusion<sup>&reg;</sup> JS 2 (global script) is an ES5-formatted distribution of the JavaScript Word Library that runs directly in any modern web browser without a build step or bundler. The all-in-one `ej2.min.js` bundle exposes the `ej.docx` namespace, which contains the Word document classes.

This guide explains how to integrate the JavaScript Word Library into a static HTML page. The generated Word document is downloaded directly from the browser; no server-side rendering is required.

## Prerequisites

Before you begin, make sure you have the following:

- A modern web browser such as the latest versions of Microsoft Edge, Google Chrome, Mozilla Firefox, or Safari.
- A static file server. The page must be served over `http://` or `https://` (not opened directly from disk) because the CDN scripts and the Word download use APIs that are restricted under the `file://` protocol.
- A text editor such as Visual Studio Code, Code Studio, or Notepad.

Common static-server options include:

- **Node.js** (recommended): `npx serve` (no install required)
- **VS Code**: the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

## CDN Syntax

The JS 2 global scripts are hosted on the Syncfusion CDN in the following format:

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/33.1.44/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/33.1.44/dist/ej2.min.js)

N> The example uses the all-in-one `ej2.min.js` bundle, which exposes the `ej.docx` namespace along with other Essential JS 2 controls. Replace `33.1.44` with the latest available version when starting a new project.

## Create the HTML Page

Step 1: Create a folder named `my-app` for your project.

Step 2: Create `index.html` inside `my-app`. The CDN reference is loaded in the `<head>` and the Word generation script is placed at the end of `<body>` so the button exists before the click handler is attached.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Word document</title>
    <!-- JavaScript Word Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/33.1.44/dist/ej2.min.js"></script>
</head>
<body>
    <div>
        <h1>Create Word document</h1>
        <p>Click the button to generate and download a Word document.</p>
        <button id="normalButton">Create Word document</button>
    </div>
    <script>
        document.getElementById('normalButton').onclick = function () {
            // Create a Word document
            var document = ej.docx.WordDocument.create();
            // Access the section
            var section = document.section[0];
            // Access the paragraph
            var paragraph = section.body.paragraphs[0];
            // Add text to the paragraph
            paragraph.appendText('Hello World!!!');
            // Save and download the Word document
            document.save('Output.docx');
        };
    </script>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> The script tag is placed at the end of `<body>` so that `document.getElementById('normalButton')` finds the button. If you prefer to put the script in `<head>`, wrap the listener registration in a `DOMContentLoaded` event. Name the Word instance something other than `document` (for example, `wordDocument`) if this handler is nested inside a function that still needs the browser `document` object. The sample above does not, so the local name `document` matches the Angular getting-started snippet.

## Code Explanation

- `ej.docx.WordDocument.create()` — creates a new Word document instance.
- `document.section[0]` — accesses the first section of the document.
- `section.body.paragraphs[0]` — accesses the first paragraph in the section body.
- `appendText(text)` — adds text content to the paragraph.
- `save('Output.docx')` — saves the Word document and triggers a client-side browser download with the specified file name. The file is sent to the browser's default downloads folder; nothing is written to the server.

## Run the Sample

Step 3: Open a terminal in the `my-app` folder and start a static file server.

```bash
npx serve
```

Step 4: Open the served URL in your browser. For `npx serve`, the default URL is `http://localhost:3000`.

Click **Create Word document**. The browser downloads `Output.docx`, which contains a single paragraph with the text "Hello World!!!".

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `ej is not defined` in the browser console | The CDN script tag is missing or blocked | Confirm the `<script src="https://cdn.syncfusion.com/ej2/.../ej2.min.js"></script>` reference is reachable |
| Button click does nothing | The script runs before the button is in the DOM | Move the `<script>` tag to the end of `<body>`, or wrap the listener in a `DOMContentLoaded` event |
| `Output.docx` does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| CORS or `file://` errors | The page is opened directly from disk | Serve the folder over `http://` using `npx serve` or a similar static server |
| CDN version mismatch with other Syncfusion packages | The CDN version is out of sync with installed Syncfusion packages | Use the same Syncfusion version across CDN and any other Syncfusion packages you reference |

## See Also

- [JavaScript Word Library documentation](https://help.syncfusion.com/document-processing/word/word-library/javascript/overview)

For build-tool-based workflows (React, Vue, Angular, TypeScript, Node.js), see the corresponding guides in the [JavaScript Word Library documentation](https://help.syncfusion.com/document-processing/word/word-library/javascript/overview).
