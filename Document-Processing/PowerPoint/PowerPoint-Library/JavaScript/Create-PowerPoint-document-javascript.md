---
layout: post
title: Getting Started with JavaScript PowerPoint in JavaScript app | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-powerpoint-library
description: Learn how to get started with the Syncfusion JavaScript PowerPoint Library in JavaScript application. Easy steps to create presentations without depending on Microsoft Office.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, cdn
---

# Getting Started with JavaScript PowerPoint in JavaScript app

Syncfusion<sup>&reg;</sup> JS 2 (global script) is an ES5-formatted distribution of the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) that runs directly in any modern web browser without a build step or bundler. The all-in-one `ej2.min.js` bundle exposes the `ej.pptx` namespace, which contains the Presentation, Slide, Shape, and TextPart classes.

This guide explains how to integrate the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) into a static HTML page. The generated PowerPoint presentation is downloaded directly from the browser; no server-side PowerPoint rendering is required.

## Prerequisites

Before you begin, make sure you have the following:

- A modern web browser such as the latest versions of Microsoft Edge, Google Chrome, Mozilla Firefox, or Safari.
- A static file server. The page must be served over `http://` or `https://` (not opened directly from disk) because the CDN scripts and the presentation download use APIs that are restricted under the `file://` protocol.
- A text editor such as Visual Studio Code, Code Studio, or Notepad.

Common static-server options include:

- **Node.js** (recommended): `npx serve` (no install required)
- **VS Code**: the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

## CDN Syntax

The JS 2 global scripts and styles are hosted on the Syncfusion CDN in the following format:

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js)

N> The example uses the all-in-one `ej2.min.js` bundle, which exposes the `ej.pptx` namespace along with other Essential JS 2 controls. A PowerPoint-only CDN bundle is not provided separately. Replace `31.2.15` with the latest available version when starting a new project.

## Create a PowerPoint Presentation

### Step 1: Create the HTML Page

Create a folder named `my-app` for your project. Add the CDN reference in the `<head>` of `index.html` (the file is created in the next step).

{% tabs %}
{% highlight html tabtitle="index.html" %}
<head>
    <!-- JavaScript PowerPoint Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>
{% endhighlight %}
{% endtabs %}

### Step 2: Create the HTML and Script

Create a complete `index.html` inside `my-app` with the following content. The CDN reference is loaded in the `<head>` and the PowerPoint generation script is placed at the end of `<body>` so the button exists before the click handler is attached.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create PowerPoint document</title>
    <!-- JavaScript PowerPoint Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>
<body>
    <div class="container py-4">
        <h1 class="h4 mb-3">Create PowerPoint document</h1>
        <p class="text-muted">Click the button to generate and download a PowerPoint presentation.</p>
        <button id="createPptx" class="btn btn-primary">Generate PowerPoint document</button>
    </div>
    <script>
        document.getElementById('createPptx').addEventListener('click', async function () {
            // Creates a Presentation instance
            const pptxDoc = ej.pptx.Presentation.create();
            // Adds a slide to the presentation
            const slide = pptxDoc.slides.add();
            // Adds a textbox for the title
            const titleShape = slide.shapes.addTextBox({
                name: 'Title',
                bounds: {
                    x: 55,
                    y: 25,
                    width: 850,
                    height: 72
                }
            });
            // Adds a paragraph to the textbox
            const paragraph = titleShape.textBody.addParagraph();
            paragraph.horizontalAlignment = ej.pptx.HorizontalAlignmentType.Center;
            // Adds text to the paragraph
            const textPart = paragraph.addTextPart('Hello World!!!');
            textPart.font.fontName = 'Calibri';
            textPart.font.bold = true;
            textPart.font.fontSize = 36;

            try {
                // Saves the presentation
                const bytes = await pptxDoc.save();

                // Creates a blob from the bytes
                const blob = new Blob([bytes], {
                    type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
                });

                // Creates a download link
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Output.pptx';

                // Triggers the download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Error creating PowerPoint file:', error);
            }
        });
    </script>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> save()` — saves the presentation as bytes and **triggers a client-side browser download** with the specified file name. The file is sent to the browser's default downloads folder; nothing is written to the server.

## Run the Sample

Step 4: Open a terminal in the `my-app` folder and start a static file server.

Using `npx serve` (no install required):

```bash
npx serve
```

Step 5: Open the served URL in your browser. For `npx serve`, the default URL is `http://localhost:3000`. For Python, the default URL is `http://localhost:8000`.
### Step 3: Start the Server


Click **Generate PowerPoint document**. The browser downloads `Output.pptx`, which contains a single slide with the text "Hello World!!!" in the title area.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `ej is not defined` in the browser console | The CDN script tag is missing or blocked | Confirm the `<script src="https://cdn.syncfusion.com/ej2/.../ej2.min.js"></script>` reference is reachable and not blocked by an ad blocker or network policy |
### Step 4: View the Result

 click does nothing | The script runs before the button is in the DOM | Move the `<script>` tag to the end of `<body>`, or wrap the listener in a `DOMContentLoaded` event |
| `Output.pptx` does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| CORS or `file://` errors | The page is opened directly from disk | Serve the folder over `http://` using `npx serve` or a similar static server |
| CDN version mismatch with other Syncfusion packages | The CDN version is out of sync with installed Syncfusion packages | Use the same Syncfusion version across CDN and any other Syncfusion packages you reference |

## See Also

- [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library)
- [JavaScript PowerPoint Library documentation](https://help.syncfusion.com/document-processing/presentation/pptx-library/javascript/overview)
- [JavaScript PowerPoint Library API reference](https://ej2.syncfusion.com/documentation/api/powerpoint)
- [JavaScript PowerPoint Library examples](https://document.syncfusion.com/demos/powerpoint/react/#/fluent2/powerpoint/default)

For build-tool-based workflows (React, Vue, Angular, TypeScript, Node.js), see the corresponding guides in the [JavaScript PowerPoint Library documentation](https://help.syncfusion.com/document-processing/presentation/pptx-library/javascript/overview).
