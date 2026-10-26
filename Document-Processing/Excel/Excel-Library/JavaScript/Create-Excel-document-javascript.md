---
layout: post
title: Getting Started with JavaScript Excel Library in a JavaScript Application | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-excel-library
description: Learn how to get started with the Syncfusion JavaScript Excel in JavaScript application. Easy steps to create Excel workbooks.
platform: document-processing
control: Excel
documentation: ug
---

# Getting Started with JavaScript Excel Library in a JavaScript Application

Syncfusion<sup>&reg;</sup> JS 2 (global script) is an ES5-formatted distribution of the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) that runs directly in any modern web browser without a build step or bundler. The all-in-one `ej2.min.js` bundle exposes the `ej.xlsx` namespace, which contains the Workbook class and related Excel APIs.

This guide explains how to integrate the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) into a static HTML page. The generated Excel workbook is downloaded directly from the browser; no server-side Excel processing is required.

## Prerequisites

Before you begin, make sure you have the following:

- A modern web browser such as the latest versions of Microsoft Edge, Google Chrome, Mozilla Firefox, or Safari.
- A static file server. The page must be served over `http://` or `https://` (not opened directly from disk) because the CDN scripts and the Excel download use APIs that are restricted under the `file://` protocol.
- A text editor such as Visual Studio Code, Code Studio, or Notepad.

Common static-server options include:

- **Node.js** (recommended): `npx serve` (no install required)
- **VS Code**: the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

## CDN syntax

The JS 2 global scripts and styles are hosted on the Syncfusion CDN in the following format:

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js)

N> The example uses the all-in-one `ej2.min.js` bundle, which exposes the `ej.xlsx` namespace along with other Essential JS 2 controls. An Excel-only CDN bundle is not provided separately. Replace `31.2.15` with the latest available version when starting a new project.

## Create the HTML page

Step 1: Create a folder named `my-app` for your project.

Step 2: Add the CDN reference to the `<head>` of `index.html`. You create the complete file in the next step.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<head>
    <!-- JavaScript Excel Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>
{% endhighlight %}
{% endtabs %}

Step 3: Create `index.html` in the `my-app` folder with the following content. The CDN reference is loaded in the `<head>`, and the Excel generation script is placed at the end of `<body>` so that the button exists before the click handler is attached.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Excel document</title>
    <!-- JavaScript Excel Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>
<body>
    <div>
        <h1>Create Excel document</h1>
        <p>Click the button to generate and download an Excel workbook.</p>
        <button id="createExcel">Create Excel document</button>
    </div>
    <script>
        document.getElementById('createExcel').addEventListener('click', async function () {
            // Create a new workbook
            const workbook = ej.xlsx.Workbook.create();
            
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
            const blob = new Blob([bytes], {
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
        });
    </script>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> The script tag is placed at the end of `<body>` so that `document.getElementById('createExcel')` finds the button. To put the script in `<head>` instead, wrap the listener registration in a `DOMContentLoaded` event.

## Code explanation

- `ej.xlsx.Workbook.create()` — creates a new workbook with one visible worksheet named `Sheet1`.
- `workbook.sheet(0)` — returns the worksheet at the zero-based index.
- `sheet.name` — sets the worksheet tab name. This example renames the first sheet to `Sales`.
- `sheet.cell('A1').value` — writes a cell value by A1 address. This example uses text and numbers for the Product, Quantity, and Price sample data.
- `await workbook.save()` — builds the `.xlsx` package and returns the file bytes as a `Uint8Array`. This call is asynchronous.
- `Blob`, `URL.createObjectURL`, and an anchor element — package the saved bytes and start a browser download with the file name `Output.xlsx`.
- `document.body.appendChild(anchor)` — attaches the temporary anchor before the download click.
- `anchor.remove()` — removes the temporary anchor element after the download click.
- `URL.revokeObjectURL(url)` — releases the temporary object URL after the download starts.

## Run the sample

Step 4: Open a terminal in the `my-app` folder and start a static file server.

Using `npx serve` (no install required):

```bash
npx serve
```

Step 5: Open the served URL in your browser. For `npx serve`, the default URL is `http://localhost:3000`.

Click **Create Excel document**. The browser downloads `Output.xlsx`, which contains a `Sales` worksheet with `Product`, `Quantity`, and `Price` headings and the `Notebook` and `Pen` sample rows.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `ej is not defined` in the browser console | The CDN script tag is missing or blocked | Confirm the `<script src="https://cdn.syncfusion.com/ej2/.../ej2.min.js"></script>` reference is reachable and not blocked by an ad blocker or network policy |
| Button click does nothing | The script runs before the button is in the DOM | Move the `<script>` tag to the end of `<body>`, or wrap the listener in a `DOMContentLoaded` event |
| `Output.xlsx` does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| CORS or `file://` errors | The page is opened directly from disk | Serve the folder over `http://` using `npx serve` or a similar static server |
| CDN version mismatch with other Syncfusion packages | The CDN version is out of sync with installed Syncfusion packages | Use the same Syncfusion version across CDN and any other Syncfusion packages you reference |