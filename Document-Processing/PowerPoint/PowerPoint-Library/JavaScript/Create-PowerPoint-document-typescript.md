---
layout: post
title: Getting Started with JavaScript PowerPoint for TypeScript | Syncfusion
description: Learn how to create PowerPoint presentations in a TypeScript app using the Syncfusion JavaScript PowerPoint Library without Microsoft Office.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: powerpoint, typescript, javascript powerpoint library
canonical_url: https://help.syncfusion.com/document-processing/presentation/pptx-library/javascript/create-powerpoint-document-typescript
appliesto: Document SDK
---

# Getting Started with JavaScript PowerPoint in TypeScript app

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) is used to create, read, and edit PowerPoint presentations. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) also offers functionality to insert shapes, images, text, and paragraphs with rich formatting.

This guide explains how to integrate the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) into a TypeScript application that runs in the browser. The sample saves the generated PowerPoint presentation with `save('Output.pptx')`.

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
{% endtabs %}
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

  // Saves the Presentation to the file system.
  await pptxDoc.save('Output.pptx');
};

{% endhighlight %}
{% endtabs %}

## Run the Application

The quickstart project is configured to compile and run in the browser. Use the following command from the project root to start the application:

```bash
npm start
```

Vite serves the application at `http://localhost:5173`. Open this URL in a browser and click **Create PowerPoint document**. The sample saves the presentation as `Output.pptx`.


## Additional Resources

- [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library)
- [JavaScript PowerPoint Library documentation](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/javascript/overview)
- [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview)
