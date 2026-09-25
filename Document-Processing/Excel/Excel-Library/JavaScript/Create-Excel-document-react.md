---
layout: post
title: Getting Started with JavaScript Excel in React app | Syncfusion
description: Learn how to create and download an Excel workbook in a React application using the Syncfusion JavaScript Excel Library.
control: Excel
platform: document-processing
documentation: ug
---

# Getting Started with JavaScript Excel in React app

The <a href="https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview" aria-label="JavaScript Excel Library overview documentation"> JavaScript Excel Library</a> is used to create, read, and edit Microsoft Excel (`.xlsx`) workbooks. You can work with worksheets, cells, formulas, formatting, and other spreadsheet features without Microsoft Excel installed.

This guide explains how to integrate the <a href="https://helpstaging.syncfusion.com/document-processing/excel/excel-library/javascript/overview" aria-label="JavaScript Excel Library overview documentation on staging">JavaScript Excel Library</a> into a React application that runs in the browser. The generated workbook is downloaded directly from the browser; no server-side Excel processing is required.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js 18 or later.
- npm 9 or later, or Yarn 1.22 or later.
- React 18 or later.
- Visual Studio Code, Code Studio, or another code editor.
- A supported browser such as the latest versions of Microsoft Edge, Google Chrome, or Mozilla Firefox.

To verify your Node.js and npm versions, run:

```bash
node --version
npm --version
```

## Create a React Project

This guide uses <a href="https://vitejs.dev/" aria-label="Vite official website">Vite</a> to scaffold the React project. Run the following command in a terminal:

```bash
npm create vite@latest my-excel-app -- --template react
cd my-excel-app
```

After the project is created, install its dependencies:

```bash
npm install
```

## Install the JavaScript Excel Library

All Syncfusion<sup>&reg;</sup> JS 2 packages are published in the `npmjs.com` registry. The `npm install` command below resolves `@syncfusion/ej2-xlsx` to the latest stable version compatible with React 18 or later.

* To install the <a href="https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview" aria-label="JavaScript Excel Library overview documentation">JavaScript Excel Library</a>, use the following command.

```bash
npm install @syncfusion/ej2-xlsx --save
```

### Transitive Dependencies

The following package is included automatically by `@syncfusion/ej2-xlsx` and does not need to be installed separately:

- `@syncfusion/ej2-base` — common utilities used by the library, including license registration.

## License Registration

If your project requires a Syncfusion license, register the license key before using the Excel API. Add the following code at the top of `App.jsx`:

```javascript
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY');
```

Replace `YOUR_LICENSE_KEY` with the key from your Syncfusion account. For more information, see the <a href="https://help.syncfusion.com/document-processing/licensing/overview" aria-label="Syncfusion licensing overview documentation">Syncfusion licensing documentation</a>.

N> A valid Syncfusion license is required for commercial use.

## Create an Excel Workbook

Replace the contents of `App.jsx` with the following code. The file imports `Workbook` from `@syncfusion/ej2-xlsx`, writes sample cell values, saves the workbook as bytes, and downloads the result as an `.xlsx` file from the browser.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}

import React from 'react';
import { registerLicense } from '@syncfusion/ej2-base';
import { Workbook } from '@syncfusion/ej2-xlsx';

// Register the Syncfusion license key.
registerLicense('YOUR_LICENSE_KEY');

export default function App() {
  const createExcel = async () => {
    // Create the workbook
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

    // Save the workbook
    const bytes = await workbook.save();

    // Download the workbook
    const blob = new Blob([bytes], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
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

  return (
    <div style={{ padding: '1.5rem' }}>
      <button type="button" onClick={createExcel}>
        Create Excel document
      </button>
    </div>
  );
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

N> Import `Workbook` as a named export from `@syncfusion/ej2-xlsx`.

N> In the browser, call the parameterless `save()` overload, which returns a `Promise<Uint8Array>`. Saving to a file system path with `save(filePath)` requires the Node.js file system module and is not available in browser apps.

## Code Explanation

- `registerLicense(key)` - registers the Syncfusion license key at application startup. Required for commercial usage.
- `Workbook.create()` - creates a new workbook with one visible worksheet named `Sheet1`.
- `workbook.sheet(0)` - returns the worksheet at the zero-based index.
- `sheet.name` - sets the worksheet tab name. This example renames the first sheet to `Sales`.
- `sheet.cell('A1').value` - writes a cell value by A1 address. This example uses text and numbers for the Product, Quantity, and Price sample data.
- `await workbook.save()` - builds the `.xlsx` package and returns the file bytes as a `Uint8Array`. This call is asynchronous.
- `Blob`, `URL.createObjectURL`, and an anchor element - package the saved bytes and start a browser download with the file name `Output.xlsx`.
- `document.body.appendChild(anchor)` - attaches the temporary anchor before the download click.
- `anchor.remove()` - removes the temporary anchor element after the download click.
- `URL.revokeObjectURL(url)` - releases the temporary object URL after the download starts.

## Run the Application

Open a terminal in the project root and start the Vite development server:

```bash
npm run dev
```

Vite serves the application at `http://localhost:5173`. Open this URL in a browser and click **Create Excel document** to download the generated file as `Output.xlsx`.

`Output.xlsx` contains a `Sales` worksheet with `Product`, `Quantity`, and `Price` headings and the `Notebook` and `Pen` sample rows.

N> If you used Create-React-App instead of Vite, the run command is `npm start` and the default URL is `http://localhost:3000`.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `SyntaxError: Unexpected token ':'` in `App.jsx` | TypeScript type annotations were left in a `.jsx` file | Remove type annotations, or rename `App.jsx` to `App.tsx` and add TypeScript |
| `Error: Cannot find module '@syncfusion/ej2-xlsx'` | The package is not installed | Run `npm install @syncfusion/ej2-xlsx --save` |
| Button click does nothing | The click handler is not wired, or an error is thrown inside the async function | Confirm the button uses `onClick={createExcel}` and check the browser console for errors |
| `save(filePath) requires the Node.js filesystem and is not available in this environment` | A path was passed to `save()` in the browser | Use `const bytes = await workbook.save()` with no arguments, then download the bytes |
| `Output.xlsx` does not download | The browser blocks the download, or the click handler did not finish | Check the browser download settings, allow downloads for the site, and confirm `await workbook.save()` completed |
| `registerLicense` warning at runtime | The license key is missing or invalid | Confirm the key is set in `App.jsx` and is the correct key for your Syncfusion account |
| Vite dev server fails to start | Port `5173` is in use | Stop the conflicting process or change the port in `vite.config.js` |