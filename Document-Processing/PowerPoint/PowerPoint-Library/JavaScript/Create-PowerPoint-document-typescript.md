---
layout: post
title: Getting Started with JavaScript PowerPoint in TypeScript app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript PowerPoint in TypeScript application. Easy steps to create presentations without depending on Microsoft Office.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: powerpoint, typescript, javascript powerpoint library
canonical_url: https://help.syncfusion.com/document-processing/presentation/pptx-library/javascript/create-powerpoint-document-typescript
---

# Getting Started with JavaScript PowerPoint in TypeScript app

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) is used to create, read, and edit PowerPoint presentations. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) also offers functionality to insert shapes, images, text, and paragraphs with rich formatting.

This guide explains how to integrate the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) into a TypeScript application that runs in the browser. The generated PowerPoint presentation is downloaded directly from the browser; no server-side PowerPoint rendering is required.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js 18 or later.
- npm 9 or later, or Yarn 1.22 or later.
- TypeScript 4.5 or later.
- Code Studio, Visual Studio Code, or another code editor.
- A browser-based bundler or dev server.

To verify your Node.js and npm versions, run:

```bash
node --version
npm --version
```

## Project Setup

Create a new project folder and initialize it:

```bash
mkdir powerpoint-typescript-app
cd powerpoint-typescript-app
npm init -y
```

Install TypeScript and the Vite dev server as development dependencies:

```bash
npm install typescript vite --save-dev
```

Initialize the TypeScript configuration:

```bash
npx tsc --init
```

The following minimal configuration is sufficient for this guide:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["DOM", "ES2020"],
    "strict": true,
    "moduleResolution": "bundler"
  }
}
```

N> The `outDir` setting is ignored by Vite; the bundled output is emitted to `dist/` automatically.

## Configure the Start Script

Add a `start` script to `package.json` so you can launch the Vite dev server with `npm start`:

```json
{
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Install the JavaScript PowerPoint Library

All Syncfusion<sup>&reg;</sup> JS 2 packages are published in the `npmjs.com` registry. The `npm install` command below resolves `@syncfusion/ej2-pptx` to the latest stable version compatible with TypeScript 4.5 or later.

* To install the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library), use the following command.

```bash
npm install @syncfusion/ej2-pptx --save
```

## Create a PowerPoint Document

This sample is intended for **browser-based** TypeScript applications. It is not designed for server-side rendering or Node.js-only execution.

### Step 1: Create the HTML

Add a simple button to `index.html` and a `<script type="module">` tag that loads `index.ts`. The button must exist before the click handler in `index.ts` runs.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<html>
  <head>
    <title>PowerPoint Button Example</title>
  </head>
  <body>
    <button id="normalButton">Create PowerPoint document</button>
    <script type="module" src="/src/index.ts"></script>
  </body>
</html>
{% endhighlight %}
{% endtabs %}

### Step 2: Add the Imports and Code

Include the following namespaces in `index.ts` file.

{% tabs %}
{% highlight typescript tabtitle="index.ts" %}

import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';

{% endhighlight %}
Include the following code example in the click event of the button in `index.ts` to generate a PowerPoint document:

* Include the following code example in the click event of the button in `index.ts` to generate a PowerPoint document

{% tabs %}
{% highlight typescript tabtitle="index.ts" %}

document.getElementById('normalButton').onclick = async (): Promise<void> => {
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
  const paragraph = titleShape.textBody.addParagraph();
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
};

{% endhighlight %}
{% endtabs %}

## Run the Application

The quickstart project is configured to compile and run in the browser. Use the following command from the project root to start the application:

```bash
npm start
```

Vite serves the application at `http://localhost:5173`. Open this URL in a browser and click **Create PowerPoint document** to download the generated file as `Output.pptx`.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `TS2304: Cannot find name 'Presentation'` (or similar) | The import line is missing or the package is not installed | Confirm `npm install @syncfusion/ej2-pptx` ran successfully and that the import is in `index.ts` |
| `Error: Cannot find module '@syncfusion/ej2-pptx'` | The package is not installed | Run `npm install @syncfusion/ej2-pptx --save` |
| Button click does nothing | The button ID does not match the ID used in `getElementById` | Confirm the button's `id` is `normalButton` |
| PowerPoint file does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| Build fails with TypeScript errors | The TypeScript version is incompatible with the PowerPoint package | Update TypeScript to 4.5 or later and run `npm install` again |
| `registerLicense` warning at runtime | The license key is missing or invalid | Confirm the key is set in `index.ts` and is the correct key for your Syncfusion account |

## Additional Resources

- [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library)
- [JavaScript PowerPoint Library documentation](https://help.syncfusion.com/document-processing/presentation/pptx-library/javascript/overview)
- [JavaScript PowerPoint Library API reference](https://ej2.syncfusion.com/documentation/api/powerpoint)
- [JavaScript PowerPoint Library examples](https://document.syncfusion.com/demos/powerpoint/typescript/#/fluent2/powerpoint/default)
- [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview)
