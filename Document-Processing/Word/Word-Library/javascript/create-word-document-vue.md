---
layout: post
title: Getting Started with JavaScript Word in Vue app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Word Library in a Vue application. Steps to create Word documents without depend on Microsoft Word.
control: Word
platform: document-processing
documentation: ug
keywords: vue create word, vue generate docx, vue word library, ej2 word vue, javascript
canonical_url: https://help.syncfusion.com/document-processing/word/word-library/javascript/create-word-document-vue
---

# Getting Started with JavaScript Word Library in Vue app

The JavaScript Word Library is used to create, read, and edit Word documents.

This guide explains how to integrate the JavaScript Word Library into a Vue application that runs in the browser. The generated Word document is downloaded directly from the browser; no server-side rendering is required.

> Vue 2 reached end-of-life on December 31, 2023. This guide leads with **Vue 3** (recommended) and provides a separate Vue 2 path for legacy projects.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js 18 or later.
- npm 9 or later, or Yarn 1.22 or later.
- Visual Studio Code, Code Studio, or another code editor.
- A supported browser such as the latest versions of Microsoft Edge, Google Chrome, or Mozilla Firefox.

To verify your Node.js and npm versions, run:

```bash
node --version
npm --version
```

## Create a Vue 3 Project (Recommended)

Create a new Vue 3 project using the official scaffolding tool. This guide uses [Vite](https://vitejs.dev/) as the bundler.

```bash
npm create vue@latest my-word-app
cd my-word-app
npm install
```

When prompted, choose the default options (TypeScript is optional; this guide uses plain JavaScript).

The final project structure is:

```text
my-word-app/
├── public/
├── src/
│   ├── App.vue
│   ├── main.js
│   └── components/
├── index.html
└── package.json
```

## Create a Vue 2 Project (Legacy)

N> Vue 2 reached end-of-life on December 31, 2023. Use Vue 2 only for legacy projects.

To create a Vue 2 project using the legacy Vue CLI:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
```

When prompted, choose `Default ([Vue 2] babel, es-lint)`.

## Install the JavaScript Word Library

All Syncfusion<sup>&reg;</sup> JS 2 packages are published in the `npmjs.com` registry. The `npm install` command below resolves `@syncfusion/ej2-docx` to the latest stable version compatible with Vue 2.7+ or Vue 3.4+.

```bash
npm install @syncfusion/ej2-docx --save
```

* If you prefer Yarn, use the following command.

```bash
yarn add @syncfusion/ej2-docx
```

### Transitive Dependencies

The following package is included automatically by `@syncfusion/ej2-docx` and does not need to be installed separately:

- `@syncfusion/ej2-base` — common utilities used by the library.

## License Registration

If your project requires a Syncfusion license, register the license key before using the Word API. Add the following code at the top of `src/App.vue`'s `<script>` block:

```js
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY');
```

Replace `YOUR_LICENSE_KEY` with the key from your Syncfusion account. For more information, see the [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview).

## Create a Word Document

Replace the contents of `src/App.vue` with the following code. The script imports `WordDocument` as a named export from `@syncfusion/ej2-docx` and creates a Word document in a click handler. The same code works for both Vue 2 and Vue 3.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<script>
import { registerLicense } from '@syncfusion/ej2-base';
import { WordDocument } from '@syncfusion/ej2-docx';

// Optional: register the Syncfusion license key (required for commercial usage)
registerLicense('YOUR_LICENSE_KEY');

export default {
  name: 'App',
  methods: {
    createDocument() {
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
    }
  }
};
</script>

<template>
  <div id="app">
    <button @click="createDocument">Create Word document</button>
  </div>
</template>
{% endhighlight %}
{% endtabs %}

N> This sample uses **named imports** from the npm package (`import { WordDocument } from '@syncfusion/ej2-docx'`). The npm package does not expose a global `ej` namespace; using `ej.docx.WordDocument` without an import will throw `ReferenceError: ej is not defined` in a Vite or Vue CLI build. If you prefer the UMD-style global, load `ej2.min.js` from the Syncfusion CDN in `index.html` (or `public/index.html`) instead of importing the npm package.

N> A click handler is used in this example, so no additional setup is required. The Word classes load when the import runs at module evaluation time, which happens before any user interaction.

## Code Explanation

- `registerLicense(key)` — registers the Syncfusion license key at application startup. Required for commercial usage.
- `WordDocument.create()` — creates a new Word document instance.
- `document.section[0]` — accesses the first section of the document.
- `section.body.paragraphs[0]` — accesses the first paragraph in the section body.
- `appendText(text)` — adds text content to the paragraph.
- `save('Output.docx')` — saves the Word document and triggers a browser download with the specified file name. The file is sent to the browser's default downloads folder.

## Run the Application

### Vue 3 (Vite)

Open a terminal in the project root and start the Vite development server:

```bash
npm run dev
```

Vite serves the application at `http://localhost:5173`. Open this URL in a browser and click **Create Word document** to download the generated file as `Output.docx`.

### Vue 2 (Vue CLI)

Open a terminal in the project root and start the Vue CLI development server:

```bash
npm run serve
```

Vue CLI serves the application at `http://localhost:8080`. Open this URL in a browser and click **Create Word document** to download the generated file as `Output.docx`.

The generated Word document contains a single paragraph with the text "Hello World!!!".

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `ReferenceError: ej is not defined` | The code uses the global `ej.docx` namespace but the npm package does not expose it | Switch to a named import: `import { WordDocument } from '@syncfusion/ej2-docx'` |
| `Error: Cannot find module '@syncfusion/ej2-docx'` | The package is not installed | Run `npm install @syncfusion/ej2-docx --save` |
| Button click does nothing | The click handler is not wired | Confirm the button uses `@click="createDocument"` and that `createDocument` is defined in the `methods` block |
| `Output.docx` does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| `registerLicense` warning at runtime | The license key is missing or invalid | Confirm the key is set in `App.vue` and is the correct key for your Syncfusion account |
| Port already in use (`5173` or `8080`) | Another process is using the port | Stop the conflicting process or change the port in `vite.config.js` / `vue.config.js` |
| `npm install` warns about deprecated packages on Vue 2 | Vue 2 and `@vue/cli` are in maintenance / EOL | Migrate to Vue 3 using `npm create vue@latest` |

## See Also

- [JavaScript Word Library documentation](https://help.syncfusion.com/document-processing/word/word-library/javascript/overview)
- [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview)
