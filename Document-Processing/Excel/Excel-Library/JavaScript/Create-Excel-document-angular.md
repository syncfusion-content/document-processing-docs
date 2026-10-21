---
layout: post
title: Getting Started with JavaScript Excel in Angular app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Excel in Angular application. Easy steps to create Excel workbooks.
platform: document-processing
control: Excel
documentation: ug
keywords: angular create excel, angular generate excel, angular excel library, ej2 excel angular, javascript
canonical_url: https://help.syncfusion.com/document-processing/excel/excel-library/javascript/create-excel-document-angular
---

# Getting Started with JavaScript Excel in Angular app

The [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) is used to create, read, and edit Microsoft Excel (`.xlsx`) workbooks. You can work with worksheets, cells, formulas, formatting, and other spreadsheet features without Microsoft Excel installed.

This guide explains how to integrate the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) into an Angular application that runs in the browser. The generated workbook is downloaded directly from the browser; no server-side Excel processing is involved.

## Video Tutorial

Watch the following video to learn how to create an Excel file in an Angular application using the JavaScript Excel Library.

{% youtube "https://www.youtube.com/watch?v=cJHZz4k6fZM" %}

## Prerequisites

Before you begin, make sure you have the following installed:

- Angular 20 or later.
- Node.js 18 or later.
- npm 9 or later, or Yarn 1.22 or later.
- Visual Studio Code or another code editor.
- A supported browser such as the latest versions of Microsoft Edge, Google Chrome, or Mozilla Firefox.

To verify your Node.js and npm versions, run the following commands:

```bash
node --version
npm --version
```

## Project Setup

This guide includes all the steps needed to create and run the sample in an Angular application. You can either create a new project or use an existing one.

### Option A: Create a New Angular Project

If you do not have an Angular project, create one by using the Angular CLI:

```bash
npm install -g @angular/cli
ng new my-excel-app
cd my-excel-app
```

### Option B: Use an Existing Angular Project

If you already have an Angular project, open its root folder and continue with the package installation steps:

```bash
cd path/to/your-existing-app
```

## Installing the JavaScript Excel Library package

All Syncfusion<sup>&reg;</sup> JS 2 packages are published in `npmjs.com` registry. The `npm install` command below resolves `@syncfusion/ej2-xlsx` to the latest stable version that is compatible with Angular 20 or later.

* To install the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library), use the following command.

```bash
npm install @syncfusion/ej2-xlsx --save
```

* If you prefer Yarn, use the following command.

```bash
yarn add @syncfusion/ej2-xlsx
```

N> The JavaScript Excel Library does not require additional setup for image or data extraction in Excel files. Install only the main package `@syncfusion/ej2-xlsx` for basic workbook creation and manipulation.

## Add the Syncfusion License Key

If your project requires a Syncfusion license, register the license key before using the Excel API. Add the license registration code in your startup file, such as `main.ts`.

```ts
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY');
```

Replace `YOUR_LICENSE_KEY` with the key from your Syncfusion account. For more information, see the [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview).

## Browser and Environment Compatibility

| Environment | Supported version |
| --- | --- |
| Angular | 20 or later |
| Node.js | 18.x or later |
| TypeScript | Installed with Angular |
| Visual Studio Code | Latest version recommended |
| Chrome | Latest two major versions |
| Edge | Latest two major versions |
| Firefox | Latest two major versions |

> For server-side rendering or Angular Universal, create the Excel document only in browser execution paths. The sample in this guide uses a click handler that runs in the browser, so no additional lifecycle handling is required.

## Create an Excel Document

Add a button to the Angular template and attach a click handler that uses the [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) to create a new Excel workbook.

* Add the following button to `app.component.html`.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
<button id="normalButton">Create Excel document</button>
{% endhighlight %}
{% endtabs %}

* Include the following namespaces in `app.component.ts`.

{% tabs %}
{% highlight ts tabtitle="~/app.component.ts" %}
import { Workbook } from '@syncfusion/ej2-xlsx';
{% endhighlight %}
{% endtabs %}

* Include the following code in the click event of the button in `app.component.ts` to generate an Excel document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
document.getElementById('normalButton').onclick = async (): Promise<void> => {
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
};
{% endhighlight %}
{% endtabs %}

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

Use the following command to run the application in the browser:

```bash
ng serve --open
```

When you click **Create Excel document**, the Excel file is generated in the browser and downloaded as `Output.xlsx` to your default downloads folder.

The workbook contains a `Sales` worksheet with `Product`, `Quantity`, and `Price` headings and the `Notebook` and `Pen` sample rows.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `TS2304: Cannot find name 'Workbook'` (or similar) | The import line is missing or the package is not installed | Confirm `npm install @syncfusion/ej2-xlsx` ran successfully and that the import is in `app.component.ts` |
| `Error: Cannot find module '@syncfusion/ej2-xlsx'` | The package is not installed | Run `npm install @syncfusion/ej2-xlsx --save` |
| Button click does nothing | The button ID does not match the ID used in `getElementById` | Confirm the button's `id` is `normalButton` |
| Excel file does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| Build fails with TypeScript errors | The Angular TypeScript version is incompatible with the Excel package | Update Angular to 20 or later and run `npm install` again |
| `registerLicense` warning at runtime | The license key is missing or invalid | Confirm the key is set in `main.ts` and is the correct key for your Syncfusion account |

## Additional Resources

- [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library)
- [JavaScript Excel Library documentation](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview)
- [JavaScript Excel Library API reference](https://ej2.syncfusion.com/documentation/api/excel)
- [JavaScript Excel Library examples](https://document.syncfusion.com/demos/excel/angular/#/fluent2/excel/default)
- [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview)
