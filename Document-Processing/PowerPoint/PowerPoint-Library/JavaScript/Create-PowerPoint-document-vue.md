---
layout: post
title: Getting Started with JavaScript PowerPoint in Vue app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript PowerPoint in Vue application. Easy steps to create presentations without depending on Microsoft Office.
control: PowerPoint
platform: document-processing
documentation: ug
keywords: powerpoint, vue, vue 3, vue 2, javascript
canonical_url: https://help.syncfusion.com/document-processing/presentation/pptx-library/javascript/create-powerpoint-document-vue
---

# Getting Started with JavaScript PowerPoint in Vue app

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) is used to create, read, and edit PowerPoint presentations. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) also offers functionality to insert shapes, images, text, and paragraphs with rich formatting.

This guide explains how to integrate the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) into a Vue application that runs in the browser. The generated PowerPoint presentation is downloaded directly from the browser; no server-side PowerPoint rendering is required.

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
npm create vue@latest my-pptx-app
cd my-pptx-app
npm install
```

When prompted, choose the default options (TypeScript is optional; this guide uses plain JavaScript).

The final project structure is:

```text
my-pptx-app/
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

![Vue 2 project](Getting_started_images/vue2-terminal.png)

## Install the JavaScript PowerPoint Library

All Syncfusion<sup>&reg;</sup> JS 2 packages are published in the `npmjs.com` registry. The `npm install` command below resolves `@syncfusion/ej2-pptx` to the latest stable version compatible with Vue 2.7+ or Vue 3.4+.

* To install the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library), use the following command.

```bash
npm install @syncfusion/ej2-pptx --save
```

* If you prefer Yarn, use the following command.

```bash
yarn add @syncfusion/ej2-pptx
```

## Create a PowerPoint Document

### Step 1: Create the Vue Component

Replace the contents of `src/App.vue` with the following code. The script imports the PowerPoint classes as named exports from `@syncfusion/ej2-pptx` and creates a one-slide presentation in a click handler. The same code works for both Vue 2 and Vue 3:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<script>
import { registerLicense } from '@syncfusion/ej2-base';
import {
  Presentation,
  HorizontalAlignmentType
} from '@syncfusion/ej2-pptx';

// Optional: register the Syncfusion license key (required for commercial usage)
registerLicense('YOUR_LICENSE_KEY');

export default {
  name: 'App',
  methods: {
    async createPptx() {
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
    }
  }
};
</script>

<template>
  <div id="app">
    <button @click="createPptx">Create PowerPoint document</button>
  </div>
</template>
{% endhighlight %}
{% endtabs %}

N> This sample uses **named imports** from the npm package (`import { Presentation, ... } from '@syncfusion/ej2-pptx'`). The npm package does not expose a global `ej` namespace; using `ej.pptx.Presentation` without an import will throw `ReferenceError: ej is not defined` in a Vite or Vue CLI build. If you prefer the UMD-style global, load `ej2.min.js` from the Syncfusion CDN in `index.html` (or `public/index.html`) instead of importing the npm package.

N> A click handler is used in this example, so no additional setup is required. The PowerPoint classes load when the import runs at module evaluation time, which happens before any user interaction.

## Run the Application

### Vue 3 (Vite)

Open a terminal in the project root and start the Vite development server:

```bash
npm run dev
```

Vite serves the application at `http://localhost:5173`. Open this URL in a browser and click **Create PowerPoint document** to download the generated file as `Output.pptx`.

### Vue 2 (Vue CLI)

Open a terminal in the project root and start the Vue CLI development server:

```bash
npm run serve
```

Vue CLI serves the application at `http://localhost:8080`. Open this URL in a browser and click **Create PowerPoint document** to download the generated file as `Output.pptx`.

The generated PowerPoint contains a single slide with the text "Hello World!!!" in the title area.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `ReferenceError: ej is not defined` | The code uses the global `ej.pptx` namespace but the npm package does not expose it | Switch to named imports: `import { Presentation, ... } from '@syncfusion/ej2-pptx'` |
| `SyntaxError: Unexpected token ':'` in `App.vue` | TypeScript type annotations were left in a plain `<script>` block | Remove the `: ej.pptx.PresentationType` annotations, or add `lang="ts"` to the `<script>` tag and configure TypeScript in the project |
| `Error: Cannot find module '@syncfusion/ej2-pptx'` | The package is not installed | Run `npm install @syncfusion/ej2-pptx --save` |
| Button click does nothing | The click handler is not wired | Confirm the button uses `@click="createPptx"` and that `createPptx` is defined in the `methods` block |
| `Output.pptx` does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| `registerLicense` warning at runtime | The license key is missing or invalid | Confirm the key is set in `App.vue` and is the correct key for your Syncfusion account |
| Port already in use (`5173` or `8080`) | Another process is using the port | Stop the conflicting process or change the port in `vite.config.js` / `vue.config.js` |
| `npm install` warns about deprecated packages on Vue 2 | Vue 2 and `@vue/cli` are in maintenance / EOL | Migrate to Vue 3 using `npm create vue@latest` |

## See Also

- [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library)
- [JavaScript PowerPoint Library documentation](https://help.syncfusion.com/document-processing/presentation/pptx-library/javascript/overview)
- [JavaScript PowerPoint Library API reference](https://ej2.syncfusion.com/documentation/api/powerpoint)
- [JavaScript PowerPoint Library examples](https://document.syncfusion.com/demos/powerpoint/vue/#/fluent2/powerpoint/default)
- [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview)
