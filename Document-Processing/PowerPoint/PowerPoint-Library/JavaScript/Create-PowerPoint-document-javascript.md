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

The `JavaScript PowerPoint Library` facilitates the creation of a simple PowerPoint presentation with basic elements from scratch.

This guide explains how to integrate the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) into a JavaScript application using NPM and a module bundler like **Parcel**. The generated PowerPoint presentation is downloaded directly from the browser; no server-side PowerPoint rendering is required.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js 18 or later.
- npm 9 or later.
- A modern web browser such as the latest versions of Microsoft Edge, Google Chrome, Mozilla Firefox, or Safari.
- A text editor such as Visual Studio Code, Code Studio, or Notepad.

To verify your Node.js and npm versions, run the following commands:

```bash
node --version
npm --version
```

## Project Setup

Create a folder for your project and initialize it with npm. Then install the required dependencies:

```bash
mkdir my-pptx-app
cd my-pptx-app
npm init -y
npm install @syncfusion/ej2-pptx
npm install -D parcel
```

## Create a PowerPoint Presentation Document

Create `index.html` in your project root with a button to generate the PowerPoint file. Use the following code with ES modules to import the PowerPoint library:

{% tabs %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create PowerPoint Document</title>
</head>
<body>
    <h1>Create PowerPoint Document</h1>
    <button id="createPptx">Generate PowerPoint Document</button>

    <script type="module">
        import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';

        document.getElementById('createPptx').addEventListener('click', async function () {
            // Creates a Presentation instance
            const pptxDoc = Presentation.create();
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
            const paragraph = titleShape.textBody?.addParagraph();
            paragraph.horizontalAlignment = HorizontalAlignmentType.Center;
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

N> The `save()` method saves the presentation and returns the bytes, which are then converted to a Blob for browser download. The file is sent to the browser's default downloads folder.

## Run the Application

Update the `package.json` to add a dev script for Parcel:

```json
"scripts": {
  "start": "parcel index.html --port 5000"
}
```

Then start the development server:

```bash
npm start
```

Parcel serves the application at `http://localhost:5000`. Open this URL in a browser and click **Generate PowerPoint document** to download the generated file as `Output.pptx`.

The generated PowerPoint presentation contains a single slide with the text "Hello World!!!".

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `Cannot find module '@syncfusion/ej2-pptx'` | The package is not installed | Run `npm install @syncfusion/ej2-pptx --save` |
| Button click does nothing | The script runs before the button is in the DOM | Ensure the `<script type="module">` tag is at the end of `<body>` |
| `Output.pptx` does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| Build fails with module errors | Parcel is not installed or the project structure is incorrect | Run `npm install -D parcel` and confirm `index.html` is in the project root |

## See Also

- [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library)
- [JavaScript PowerPoint Library documentation](https://help.syncfusion.com/document-processing/presentation/pptx-library/javascript/overview)
- [JavaScript PowerPoint Library API reference](https://ej2.syncfusion.com/documentation/api/powerpoint)
- [JavaScript PowerPoint Library examples](https://document.syncfusion.com/demos/powerpoint/react/#/fluent2/powerpoint/default)

For build-tool-based workflows (React, Vue, Angular, TypeScript, Node.js), see the corresponding guides in the [JavaScript PowerPoint Library documentation](https://help.syncfusion.com/document-processing/presentation/pptx-library/javascript/overview).
