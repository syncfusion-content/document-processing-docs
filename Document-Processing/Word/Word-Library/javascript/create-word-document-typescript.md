---
layout: post
title: Getting Started with JavaScript Word in TypeScript app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Word Library in a TypeScript app. Steps to create Word documents without depend on Microsoft Word.
platform: document-processing
control: Word
documentation: ug
keywords: typescript create word, typescript generate docx, typescript word library, ej2 word typescript, javascript
canonical_url: https://help.syncfusion.com/document-processing/word/word-library/javascript/create-word-document-typescript
---

# Getting Started with JavaScript Word Library in TypeScript app

The JavaScript Word Library is used to create, read, and edit Word documents.

This guide explains how to integrate the JavaScript Word Library into a TypeScript application that runs in the browser. The generated Word document is downloaded directly from the browser; no server-side rendering is required.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js 18 or later.
- npm 9 or later, or Yarn 1.22 or later.
- TypeScript 4.5 or later.
- Code Studio, Visual Studio Code, or another code editor.
- A browser-based bundler or Dev server.

To verify your Node.js and npm versions, run:

```bash
node --version
npm --version
```

## Project Setup

Create a new project folder and initialize it:

```bash
mkdir word-typescript-app
cd word-typescript-app
npm init -y
```

Install TypeScript and the Vite Dev server as development dependencies:

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

Add a `start` script to `package.json` so you can launch the Vite Dev server with `npm start`:

```json
{
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Install the JavaScript Word Library

All Syncfusion<sup>&reg;</sup> JS 2 packages are published in the `npmjs.com` registry. The `npm install` command below resolves `@syncfusion/ej2-docx` to the latest stable version compatible with TypeScript 4.5 or later.

```bash
npm install @syncfusion/ej2-docx --save
```

### Transitive Dependencies

The following package is included automatically by `@syncfusion/ej2-docx` and does not need to be installed separately:

- `@syncfusion/ej2-base` — common utilities used by the library.

## License Registration

If your project requires a Syncfusion license, register the license key before using the Word API. Add the following code at the top of your entry point (for example, `index.ts`):

```ts
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY');
```

Replace `YOUR_LICENSE_KEY` with the key from your Syncfusion account. For more information, see the [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview).

## Create a Word document using TypeScript

This sample is intended for **browser-based** TypeScript applications. It is not designed for server-side rendering or Node.js-only execution.

* Add a simple button to `index.html` and a `<script type="module">` tag that loads `index.ts`. The button must exist before the click handler in `index.ts` runs.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<html>
  <head>
    <title>Create Word document</title>
  </head>
  <body>
    <button id="normalButton">Create Word document</button>
    <script type="module" src="/src/index.ts"></script>
  </body>
</html>
{% endhighlight %}
{% endtabs %}

* Include the following namespaces in the `index.ts` file.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { WordDocument } from '@syncfusion/ej2-docx';
{% endhighlight %}
{% endtabs %}

* Include the following code in the click event of the button in `index.ts` to generate a Word document.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
document.getElementById('normalButton').onclick = (): void => {
    // Create a Word document
    const document = WordDocument.create();
    // Access the section
    const section = document.section[0];
    // Access the paragraph
    const paragraph = section.body.paragraphs[0];
    // Add text to the paragraph
    paragraph.appendText('Hello World!!!');
    // Save and download the Word document
    document.save('Output.docx');
};
{% endhighlight %}
{% endtabs %}

## Code Explanation

- `registerLicense(key)` — registers the Syncfusion license key at application startup. Required for commercial usage.
- `WordDocument.create()` — creates a new Word document instance.
- `document.section[0]` — accesses the first section of the document.
- `section.body.paragraphs[0]` — accesses the first paragraph in the section body.
- `appendText(text)` — adds text content to the paragraph.
- `save('Output.docx')` — saves the Word document and triggers a browser download with the specified file name. The file is sent to the browser's default downloads folder.

## Run the application

Use the following command from the project root to start the application:

```bash
npm start
```

Vite serves the application at `http://localhost:5173`. Open this URL in a browser and click **Create Word document** to download the generated file as `Output.docx`.

The generated Word document contains a single paragraph with the text "Hello World!!!".

N> The first run may take a few seconds while Vite optimizes dependencies. Subsequent runs are faster.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `Error: Cannot find module '@syncfusion/ej2-docx'` | The package is not installed | Run `npm install @syncfusion/ej2-docx --save` |
| `TS2304: Cannot find name 'WordDocument'` | The import line is missing | Confirm the `import` block at the top of `index.ts` is present |
| Button click does nothing | The button ID does not match | Confirm the button's `id` is `normalButton` |
| `Failed to resolve import "@syncfusion/ej2-docx"` | The bundler cannot resolve the package | Confirm `node_modules/` exists and that you ran `npm install` |
| `ReferenceError: document is not defined` | The code ran in a Node-only context | This sample is browser-only; run it in a browser via `npm start` |
| `Cannot GET /` | The dev server is not running | Run `npm start` and wait for the local URL |
| Word document does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| `registerLicense` warning at runtime | The license key is missing or invalid | Confirm the key is set in `index.ts` and is the correct key for your Syncfusion account |

## See Also

- [JavaScript Word Library documentation](https://help.syncfusion.com/document-processing/word/word-library/javascript/overview)
- [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview)
