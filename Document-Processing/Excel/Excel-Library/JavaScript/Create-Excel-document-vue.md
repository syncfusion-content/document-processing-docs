---
layout: post
title: Getting Started with JavaScript Excel in Vue app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Excel in Vue application. Easy steps to create Excel workbooks.
control: Excel
platform: document-processing
documentation: ug
---

# Getting Started with JavaScript Excel in Vue app

The [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) is used to create, read, and edit Microsoft Excel (`.xlsx`) workbooks. You can work with worksheets, cells, formulas, formatting, and other spreadsheet features without Microsoft Excel installed.

This guide explains how to integrate the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) into a Vue application that runs in the browser. The generated workbook is downloaded directly from the browser; no server-side Excel processing is required.

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
npm create vue@latest my-excel-app
cd my-excel-app
npm install
```

When prompted, choose the default options (TypeScript is optional; this guide uses plain JavaScript).

The final project structure is:

```text
my-excel-app/
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

## Install the JavaScript Excel Library

All Syncfusion<sup>&reg;</sup> JS 2 packages are published in the `npmjs.com` registry. The `npm install` command below resolves `@syncfusion/ej2-xlsx` to the latest stable version compatible with Vue 2.7+ or Vue 3.4+.

* To install the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library), use the following command.

```bash
npm install @syncfusion/ej2-xlsx --save
```

* If you prefer Yarn, use the following command.

```bash
yarn add @syncfusion/ej2-xlsx
```

N> The JavaScript Excel Library does not require additional setup for image or data extraction. Install only the main package `@syncfusion/ej2-xlsx` for basic workbook creation and manipulation.

### Transitive Dependencies

The following packages are included automatically by `@syncfusion/ej2-xlsx` and do not need to be installed separately:

- `@syncfusion/ej2-base` — common utilities used by the library.
- `@syncfusion/ej2-compression` — compression support used by Excel features.

## Create an Excel Document

Replace the contents of `src/App.vue` with the following code. The script imports the Excel classes as named exports from `@syncfusion/ej2-xlsx` and creates an Excel workbook in a click handler. The same code works for both Vue 2 and Vue 3.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<script>
import { Workbook } from '@syncfusion/ej2-xlsx';

export default {
  name: 'App',
  methods: {
    async createExcel() {
      // Create a new workbook
      const workbook = Workbook.create();

      // Access and rename the worksheet
      const sheet = workbook.sheet(0);
      sheet.name = 'Sales';

      // Add sample data
      sheet.cell('A1').value = 'Product';
      sheet.cell('B1').value = 'Quantity';
      sheet.cell('C1').value = 'Price';

      sheet.cell('A2').value = 'Notebook';
      sheet.cell('B2').value = 12;
      sheet.cell('C2').value = 4.5;

      sheet.cell('A3').value = 'Pen';
      sheet.cell('B3').value = 40;
      sheet.cell('C3').value = 1.25;

      // Save the workbook as bytes
      const bytes = await workbook.save();

      // Download the workbook
      const blob = new Blob([bytes.buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'Output.xlsx';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
    }
  }
};
</script>

<template>
  <div id="app">
    <button @click="createExcel">Create Excel document</button>
  </div>
</template>
{% endhighlight %}
{% endtabs %}

N> This sample uses **named imports** from the npm package (`import { Workbook, ... } from '@syncfusion/ej2-xlsx'`). The npm package does not expose a global `ej` namespace; using `ej.xlsx.Workbook` without an import will throw `ReferenceError: ej is not defined` in a Vite or Vue CLI build. If you prefer the UMD-style global, load `ej2.min.js` from the Syncfusion CDN in `index.html` (or `public/index.html`) instead of importing the npm package.

N> A click handler is used in this example, so no additional setup is required. The Excel classes load when the import runs at module evaluation time, which happens before any user interaction.

## Code Explanation

- `Workbook.create()` — creates a new workbook with one visible worksheet named `Sheet1`.
- `workbook.sheet(0)` — returns the worksheet at the zero-based index.
- `sheet.name` — sets the worksheet tab name. This example renames the first sheet to `Sales`.
- `sheet.cell('A1').value` — writes a cell value by A1 address. This example uses text and numbers for the Product, Quantity, and Price sample data.
- `await workbook.save()` — builds the `.xlsx` package and returns the file bytes as a `Uint8Array`. This call is asynchronous.
- `Blob`, `URL.createObjectURL`, and an anchor element — package the saved bytes and start a browser download with the file name `Output.xlsx`.
- `document.body.appendChild(anchor)` — attaches the temporary anchor before the download click.
- `anchor.remove()` — removes the temporary anchor element after the download click.
- `URL.revokeObjectURL(url)` — releases the temporary object URL after the download starts.

## Run the Application

### Vue 3 (Vite)

Open a terminal in the project root and start the Vite development server:

```bash
npm run dev
```

Vite serves the application at `http://localhost:5173`. Open this URL in a browser and click **Create Excel document** to download the generated file as `Output.xlsx`.

### Vue 2 (Vue CLI)

Open a terminal in the project root and start the Vue CLI development server:

```bash
npm run serve
```

Vue CLI serves the application at `http://localhost:8080`. Open this URL in a browser and click **Create Excel document** to download the generated file as `Output.xlsx`.

The generated Excel workbook contains a `Sales` worksheet with `Product`, `Quantity`, and `Price` headings and the `Notebook` and `Pen` sample rows.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `ReferenceError: ej is not defined` | The code uses the global `ej.xlsx` namespace but the npm package does not expose it | Switch to named imports: `import { Workbook, ... } from '@syncfusion/ej2-xlsx'` |
| `SyntaxError: Unexpected token ':'` in `App.vue` | TypeScript type annotations were left in a plain `<script>` block | Remove the type annotations, or add `lang="ts"` to the `<script>` tag and configure TypeScript in the project |
| `Error: Cannot find module '@syncfusion/ej2-xlsx'` | The package is not installed | Run `npm install @syncfusion/ej2-xlsx --save` |
| Button click does nothing | The click handler is not wired | Confirm the button uses `@click="createExcel"` and that `createExcel` is defined in the `methods` block |
| `Output.xlsx` does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| Port already in use (`5173` or `8080`) | Another process is using the port | Stop the conflicting process or change the port in `vite.config.js` / `vue.config.js` |
| `npm install` warns about deprecated packages on Vue 2 | Vue 2 and `@vue/cli` are in maintenance / EOL | Migrate to Vue 3 using `npm create vue@latest` |