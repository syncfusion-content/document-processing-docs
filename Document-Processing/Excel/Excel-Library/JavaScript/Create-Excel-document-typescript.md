---
layout: post
title: Getting Started with Excel Library in TypeScript | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Excel in TypeScript application. Easy steps to create Excel workbooks.
platform: document-processing
control: Excel
documentation: ug
---

# Getting Started with JavaScript Excel Library in TypeScript

The [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) is used to create, read, and edit Microsoft Excel (`.xlsx`) workbooks. You can work with worksheets, cells, formulas, formatting, and other spreadsheet features without Microsoft Excel installed.

This guide explains how to integrate the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) into a TypeScript application that runs in the browser. The generated workbook is downloaded directly from the browser; no server-side Excel processing is required.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js 18 or later.
- npm 9 or later, or Yarn 1.22 or later.
- TypeScript 5.0 or later.
- Code Studio, Visual Studio Code, or another code editor.
- A browser-based bundler or development server.

To verify your Node.js and npm versions, run:

```bash
node --version
npm --version
```

## Project setup

Create a new project folder and initialize it:

```bash
mkdir excel-typescript-app
cd excel-typescript-app
npm init -y
```

Install TypeScript and the Vite development server as development dependencies:

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

N> The `moduleResolution: "bundler"` option requires TypeScript 5.0 or later. Vite compiles the TypeScript files itself, so you do not need to compile the files manually to start the application.

## Configure the start script

Add a `start` script to `package.json` so you can launch the Vite development server with `npm start`:

```json
{
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Install the JavaScript Excel Library

All Syncfusion<sup>&reg;</sup> JS 2 packages are published in the `npmjs.com` registry. The following `npm install` command resolves `@syncfusion/ej2-xlsx` to the latest stable version compatible with TypeScript 5.0 or later.

* To install the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library), use the following command.

```bash
npm install @syncfusion/ej2-xlsx --save
```

N> The JavaScript Excel Library includes TypeScript type definitions, so no additional `@types/` package is required. All types are exported from the main package.

### Transitive dependencies

The following package is included automatically by `@syncfusion/ej2-xlsx` and does not need to be installed separately:

- `@syncfusion/ej2-base` — common utilities used by the library.

## Create an Excel document using TypeScript

This sample is intended for **browser-based** TypeScript applications. It does not support server-side rendering or Node.js-only execution.

* Create a `src` folder in the project root, and add an `index.html` file to the project root. Add a button and a `<script type="module">` tag that loads `src/index.ts`. The script tag is placed after the button so that the button exists before the click handler is attached.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<html>
  <head>
    <title>Create Excel document</title>
  </head>
  <body>
    <button id="normalButton">Create Excel document</button>
    <script type="module" src="/src/index.ts"></script>
  </body>
</html>
{% endhighlight %}
{% endtabs %}

* Import the `Workbook` class in `src/index.ts`.

{% tabs %}
{% highlight typescript tabtitle="index.ts" %}

import { Workbook } from '@syncfusion/ej2-xlsx';
{% endhighlight %}
{% endtabs %}

* Add the following code to `src/index.ts` to generate an Excel document when the button is clicked.

{% tabs %}
{% highlight typescript tabtitle="index.ts" %}

document.getElementById('normalButton')!.onclick = async (): Promise<void> => {
  // Create a new workbook
  const workbook: Workbook = Workbook.create();
  
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
  const bytes: Uint8Array = await workbook.save();
  
  // Download the workbook
  // Copy the bytes into a new Uint8Array so that Blob accepts the ArrayBuffer type
  const buffer = new Uint8Array(bytes);
  const blob = new Blob([buffer], {
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
};
{% endhighlight %}
{% endtabs %}

## Code explanation

- `Workbook.create()` — creates a new workbook with one visible worksheet named `Sheet1`.
- `workbook.sheet(0)` — returns the worksheet at the zero-based index.
- `sheet.name` — sets the worksheet tab name. This example renames the first sheet to `Sales`.
- `sheet.cell('A1').value` — writes a cell value by A1 address. This example uses text and numbers for the Product, Quantity, and Price sample data.
- `await workbook.save()` — builds the `.xlsx` package and returns the file bytes as a `Uint8Array`. This call is asynchronous.
- `Blob`, `URL.createObjectURL`, and an anchor element — package the saved bytes and start a browser download with the file name `Output.xlsx`.
- `document.body.appendChild(anchor)` — attaches the temporary anchor before the download click.
- `anchor.remove()` — removes the temporary anchor element after the download click.
- `URL.revokeObjectURL(url)` — releases the temporary object URL after the download starts.

## Run the application

Run the following command from the project root to start the Vite development server:

```bash
npm start
```

Vite serves the application at `http://localhost:5173`. Open this URL in a browser and click **Create Excel document** to download the generated file as `Output.xlsx`.

The workbook contains a `Sales` worksheet with `Product`, `Quantity`, and `Price` headings and the `Notebook` and `Pen` sample rows.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `TS2304: Cannot find name 'Workbook'` (or similar) | The import line is missing or the package is not installed | Confirm `npm install @syncfusion/ej2-xlsx` ran successfully and that the import is in `index.ts` |
| `Error: Cannot find module '@syncfusion/ej2-xlsx'` | The package is not installed | Run `npm install @syncfusion/ej2-xlsx --save` |
| Button click does nothing | The script runs before the button is in the DOM | Move the `<script>` tag to the end of `<body>`, or wrap the listener in a `DOMContentLoaded` event |
| `Output.xlsx` does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| TypeScript compilation errors | The TypeScript configuration is incompatible with the Excel package | Update TypeScript to 5.0 or later and verify the compiler options in `tsconfig.json` |
| Vite development server fails to start | Port `5173` is in use | Stop the conflicting process or change the port in `vite.config.js` |