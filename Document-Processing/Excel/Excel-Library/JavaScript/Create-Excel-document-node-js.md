---
layout: post
title: Getting Started with JavaScript Excel in Node.js app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Excel in Node.js application. Easy steps to create Excel workbooks.
platform: document-processing
control: Excel
documentation: ug
keywords: excel, script, express, node
canonical_url: https://help.syncfusion.com/document-processing/excel/excel-library/javascript/create-excel-document-node-js
---

# Getting Started with JavaScript Excel in Node.js app

The [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) is used to create, read, and edit Microsoft Excel (`.xlsx`) workbooks. You can work with worksheets, cells, formulas, formatting, and other spreadsheet features without Microsoft Excel installed.

This guide explains how to integrate the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) into a Node.js server-side application that exposes an Excel generation endpoint and delivers the file to the browser.

## Prerequisites

The following prerequisites are required to complete this guide:

- **Node.js** version 18.0 or later
- **npm** version 9.0 or later
- A code editor such as Visual Studio Code
- Basic familiarity with Node.js and the command line

To verify your Node.js and npm versions, run the following commands:

```bash
node --version
npm --version
```

## Create a Node.js Project

Create a new project folder and initialize it with `npm init`. The project uses CommonJS (the default `npm init` setting), so `require` syntax is used in `server.js`.

```bash
mkdir excel-node-app
cd excel-node-app
npm init -y
```

After initialization, the project root (`excel-node-app`) contains a `package.json` file. The final project structure is:

```text
excel-node-app/
├── public/
│   └── index.html
├── server.js
└── package.json
```

## Install Dependencies

Install the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) and Express. Express is required to host the HTTP endpoint that generates and serves the Excel workbook.

```bash
npm install @syncfusion/ej2-xlsx express --save
```

### Required Dependencies

The following packages are required to use the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) in a Node.js application:

- `@syncfusion/ej2-xlsx` — the core JavaScript Excel Library
- `@syncfusion/ej2-base` — base utilities used by the Excel Library
- `@syncfusion/ej2-compression` — compression support used internally by the Excel Library
- `express` — HTTP server used to expose the Excel generation endpoint

## License Registration

If you are using a commercial Syncfusion license, register the license key at application startup. Add the following line near the top of `server.js`, before any other Syncfusion imports.

```javascript
require('@syncfusion/ej2-base').registerLicense('YOUR_LICENSE_KEY');
```

Replace `YOUR_LICENSE_KEY` with the key from your Syncfusion account. For more information, see the [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview).

## Create a Node.js Server Application to Generate an Excel Document

* Create a `public` folder inside the project root. The Express server uses `express.static('public')` to serve files from this folder.

```bash
mkdir public
```

* Add a simple button to `public/index.html` and attach a click handler that calls the Excel generation endpoint using the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library).

{% tabs %}
{% highlight html tabtitle="index.html" %}
<html>
  <head>
    <title>Excel Generator</title>
  </head>
  <body>
    <h2>Generate Excel Example</h2>
    <button onclick="generateExcel()">Create Excel</button>
    <script>
      async function generateExcel() {
        const response = await fetch('http://localhost:3000/generate-excel');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Output.xlsx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      }
    </script>
  </body>
</html>
{% endhighlight %}
{% endtabs %}

N> The `fetch` call uses a relative path (`/generate-excel`) because the frontend is served by the same Express server. This avoids CORS configuration. If you host the frontend on a different origin, enable CORS in Express using the `cors` package and update the `fetch` URL to the full server origin.

* Include the following namespaces in `server.js`. This guide uses CommonJS (the default `npm init` setting). If you prefer ESM, add `"type": "module"` to `package.json` and use the imports shown in the **Module imports (ESM)** tab below.

{% tabs %}
{% highlight javascript tabtitle="Module imports (CommonJS)" %}

const express = require('express');
const { Workbook } = require('@syncfusion/ej2-xlsx');

{% endhighlight %}
{% highlight typescript tabtitle="Module imports (ESM)" %}

import { Workbook } from '@syncfusion/ej2-xlsx';
import express from 'express';

{% endhighlight %}
{% endtabs %}

* Create a new file named `server.js` in the project root (`excel-node-app/server.js`) and include the following code to generate an Excel document in the Node.js environment using the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library).

{% tabs %}
{% highlight javascript tabtitle="server.js" %}

// Register the Syncfusion license key (required for commercial usage)
require('@syncfusion/ej2-base').registerLicense('YOUR_LICENSE_KEY');

const express = require('express');
const { Workbook } = require('@syncfusion/ej2-xlsx');

const app = express();
const PORT = 3000;

// Serve frontend files from the public directory
app.use(express.static('public'));

// Excel generation API
app.get('/generate-excel', async (req, res) => {
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

  // Release workbook resources if needed
  // Note: Unlike PDF, workbook resources are automatically managed in Node.js

  // Send the Excel file to the browser as a downloadable attachment
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=Output.xlsx');
  res.send(Buffer.from(bytes));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

{% endhighlight %}
{% endtabs %}

### Code Explanation

- `registerLicense(key)` — registers the Syncfusion license key at application startup. Required for commercial usage.
- `Workbook.create()` — creates a new workbook with one visible worksheet named `Sheet1`.
- `workbook.sheet(0)` — returns the worksheet at the zero-based index.
- `sheet.name` — sets the worksheet tab name. This example renames the first sheet to `Sales`.
- `sheet.cell('A1').value` — writes a cell value by A1 address. This example uses text and numbers for the Product, Quantity, and Price sample data.
- `await workbook.save()` — builds the `.xlsx` package and returns the file bytes as a `Uint8Array`. In Node.js, `save()` with no arguments returns bytes; `save(filePath)` writes directly to disk.
- `Buffer.from(bytes)` — copies the `Uint8Array` into a Node `Buffer` for the HTTP response.
- `res.setHeader('Content-Type', ...)` — sets the MIME type for Excel files.
- `res.setHeader('Content-Disposition', ...)` — specifies the filename for the browser download.
- `res.send(Buffer)` — sends the workbook bytes to the browser as an attachment.

## Run the Application

Run the following command from the project root to start the Node.js server:

```bash
node server.js
```

The server listens on `http://localhost:3000`. Open this URL in a browser and click **Create Excel** to download the generated file as `Output.xlsx`.

N> If the port is already in use, stop the conflicting process or change `PORT` in `server.js` to an available port. The error `EADDRINUSE` indicates a port conflict.

## Output

Clicking **Create Excel** triggers the `fetch('/generate-excel')` call. The server responds with the Excel bytes and the `Content-Disposition: attachment; filename=Output.xlsx` header causes the browser to download the file as `Output.xlsx`. The file contains a `Sales` worksheet with `Product`, `Quantity`, and `Price` headings and the `Notebook` and `Pen` sample rows.

N> The `Content-Disposition: inline` value can be used instead of `attachment` if you want the Excel workbook to open in a browser tab rather than download.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `Error: Cannot find module 'express'` | Express is not installed | Run `npm install express` |
| `Error: Cannot find module '@syncfusion/ej2-xlsx'` | The Excel package is not installed | Run `npm install @syncfusion/ej2-xlsx` |
| `EADDRINUSE` on port 3000 | Another process is using the port | Stop the process or change `PORT` in `server.js` |
| `require is not defined` | `package.json` has `"type": "module"` | Remove `"type": "module"` or convert `server.js` to ESM (`import` syntax) |
| Excel opens as a blank file | The server returned an error payload | Check the terminal output and confirm `workbook.save()` runs without throwing |
| Browser blocks the download due to CORS | Frontend and backend are on different origins | Install the `cors` package and add `app.use(cors())` to `server.js` |
| `Output.xlsx` does not download | The response headers are missing or incorrect | Confirm `Content-Type` is `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` and `Content-Disposition` includes `attachment; filename=Output.xlsx` |

## See Also

- [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library)
- [JavaScript Excel Library documentation](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview)
- [JavaScript Excel Library API reference](https://ej2.syncfusion.com/documentation/api/excel)
- [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview)
