---
layout: post
title: React Spreadsheet getting started with Next.js | Syncfusion
description: Check out and learn about how to use React Spreadsheet component of Syncfusion Essential JS 2 in the Next.js project.
control: Next.js
platform: document-processing
documentation: ug
---

# Creating a Spreadsheet Application in Next.js
This section provides a step-by-step guide for setting up a Next.js application and integrating the React Spreadsheet component.

## What is Next.js?

[Next.js](https://nextjs.org) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 18.17](https://nodejs.org/en) or later.

* The application is compatible with macOS, Windows, and Linux operating systems.

## Create a Next.js application

To create a new `Next.js` application, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

Using one of the above commands will lead you to set up additional configurations for the project as below:

1. Define the project name: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-next-js-spreadsheet`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-next-js-spreadsheet

{% endhighlight %}
{% endtabs %}

2. Select the required packages.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-next-js-spreadsheet
√ Would you like to use TypeScript? ... No / `Yes`
√ Would you like to use ESLint? ... No / `Yes`
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like to use `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the default import alias? ... `No`/ Yes
Creating a new Next.js app in D:\ej2-next-js-spreadsheet.

{% endhighlight %}
{% endtabs %}

3. After completing the above steps to create `ej2-next-js-spreadsheet`, navigate to the directory using the below command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-next-js-spreadsheet

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Now, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npm js](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

Here, the [React Spreadsheet component](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) is used in the project. To install the React Spreadsheet component, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-spreadsheet

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-spreadsheet

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Add the following Spreadsheet and dependent component style references to the `src/app/globals.css` file. Replace the existing content with the theme import code below.

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import '@syncfusion/ej2-base/styles/tailwind3.css';
@import '@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '@syncfusion/ej2-lists/styles/tailwind3.css';
@import '@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '@syncfusion/ej2-popups/styles/tailwind3.css';
@import '@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '@syncfusion/ej2-grids/styles/tailwind3.css';
@import '@syncfusion/ej2-react-spreadsheet/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

> **Note:** This example uses the `Tailwind3` theme. To use a different built-in theme, replace the `tailwind3.css` references with the corresponding theme stylesheets. Refer to the [Themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme) for information about the available themes and the different ways to include theme styles in a Next.js application.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow the below steps to add the [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) component to the Next.js project:

1.Before adding the Spreadsheet component to your markup, create a `datasource.tsx` file within the **src/app/** folder and add the Spreadsheet component data.

{% tabs %}
{% highlight ts tabtitle="datasource.tsx" %}

export let defaultData: object[] = [
    {
        "Customer Name": "Romona Heaslip",
        "Model": "Taurus",
        "Color": "Aquamarine",
        "Payment Mode": "Debit Card",
        "Delivery Date": "07/11/2015",
        "Amount": "8529.22"
    },
    {
        "Customer Name": "Clare Batterton",
        "Model": "Sparrow",
        "Color": "Pink",
        "Payment Mode": "Cash On Delivery",
        "Delivery Date": "7/13/2016",
        "Amount": "17866.19"
    },
    {
        "Customer Name": "Eamon Traise",
        "Model": "Grand Cherokee",
        "Color": "Blue",
        "Payment Mode": "Net Banking",
        "Delivery Date": "09/04/2015",
        "Amount": "13853.09"
    },
    {
        "Customer Name": "Julius Gorner",
        "Model": "GTO",
        "Color": "Aquamarine",
        "Payment Mode": "Credit Card",
        "Delivery Date": "12/15/2017",
        "Amount": "2338.74"
    },
    {
        "Customer Name": "Jenna Schoolfield",
        "Model": "LX",
        "Color": "Yellow",
        "Payment Mode": "Credit Card",
        "Delivery Date": "10/08/2014",
        "Amount": "9578.45"
    },
    {
        "Customer Name": "Marylynne Harring",
        "Model": "Catera",
        "Color": "Green",
        "Payment Mode": "Cash On Delivery",
        "Delivery Date": "7/01/2017",
        "Amount": "19141.62"
    },
    {
        "Customer Name": "Vilhelmina Leipelt",
        "Model": "7 Series",
        "Color": "Goldenrod",
        "Payment Mode": "Credit Card",
        "Delivery Date": "12/20/2015",
        "Amount": "6543.30"
    },
    {
        "Customer Name": "Barby Heisler",
        "Model": "Corvette",
        "Color": "Red",
        "Payment Mode": "Credit Card",
        "Delivery Date": "11/24/2014",
        "Amount": "13035.06"
    },
    {
        "Customer Name": "Karyn Boik",
        "Model": "Regal",
        "Color": "Indigo",
        "Payment Mode": "Debit Card",
        "Delivery Date": "05/12/2014",
        "Amount": "18488.80"
    },
    {
        "Customer Name": "Jeanette Pamplin",
        "Model": "S4",
        "Color": "Fuscia",
        "Payment Mode": "Net Banking",
        "Delivery Date": "12/30/2014",
        "Amount": "12317.04"
    },
    {
        "Customer Name": "Cristi Espinos",
        "Model": "TL",
        "Color": "Aquamarine",
        "Payment Mode": "Credit Card",
        "Delivery Date": "12/18/2013",
        "Amount": "6230.13"
    },
    {
        "Customer Name": "Issy Humm",
        "Model": "Club Wagon",
        "Color": "Pink",
        "Payment Mode": "Cash On Delivery",
        "Delivery Date": "02/02/2015",
        "Amount": "9709.49"
    },
    {
        "Customer Name": "Tuesday Fautly",
        "Model": "V8 Vantage",
        "Color": "Crimson",
        "Payment Mode": "Debit Card",
        "Delivery Date": "11/19/2014",
        "Amount": "9766.10"
    },
    {
        "Customer Name": "Rosemaria Thomann",
        "Model": "Caravan",
        "Color": "Violet",
        "Payment Mode": "Net Banking",
        "Delivery Date": "02/08/2014",
        "Amount": "7685.49"
    },
    {
        "Customer Name": "Lyell Fuentez",
        "Model": "Bravada",
        "Color": "Violet",
        "Payment Mode": "Debit Card",
        "Delivery Date": "08/05/2016",
        "Amount": "18012.45"
    },
    {
        "Customer Name": "Raynell Layne",
        "Model": "Colorado",
        "Color": "Pink",
        "Payment Mode": "Credit Card",
        "Delivery Date": "05/30/2016",
        "Amount": "2785.49"
    },
    {
        "Customer Name": "Raye Whines",
        "Model": "4Runner",
        "Color": "Red",
        "Payment Mode": "Debit Card",
        "Delivery Date": "12/10/2016",
        "Amount": "9967.74"
    },
    {
        "Customer Name": "Virgina Aharoni",
        "Model": "TSX",
        "Color": "Pink",
        "Payment Mode": "Cash On Delivery",
        "Delivery Date": "10/23/2014",
        "Amount": "5584.33"
    },
    {
        "Customer Name": "Peta Cheshir",
        "Model": "Pathfinder",
        "Color": "Red",
        "Payment Mode": "Net Banking",
        "Delivery Date": "12/24/2015",
        "Amount": "5286.53"
    },
    {
        "Customer Name": "Jule Urion",
        "Model": "Charger",
        "Color": "Violet",
        "Payment Mode": "Debit Card",
        "Delivery Date": "11/20/2013",
        "Amount": "13511.91"
    },
    {
        "Customer Name": "Lew Gilyatt",
        "Model": "Bonneville",
        "Color": "Crimson",
        "Payment Mode": "Credit Card",
        "Delivery Date": "11/19/2013",
        "Amount": "6498.19"
    },
    {
        "Customer Name": "Jobey Fortun",
        "Model": "B-Series",
        "Color": "Blue",
        "Payment Mode": "Net Banking",
        "Delivery Date": "10/30/2014",
        "Amount": "10359.67"
    },
    {
        "Customer Name": "Blondie Crump",
        "Model": "Voyager",
        "Color": "Turquoise",
        "Payment Mode": "Credit Card",
        "Delivery Date": "04/06/2018",
        "Amount": "8118.39"
    },
    {
        "Customer Name": "Florentia Binns",
        "Model": "Grand Prix",
        "Color": "Orange",
        "Payment Mode": "Cash On Delivery",
        "Delivery Date": "10/13/2016",
        "Amount": "10204.37"
    },
    {
        "Customer Name": "Jaquelin Galtone",
        "Model": "Sunbird",
        "Color": "Red",
        "Payment Mode": "Net Banking",
        "Delivery Date": "10/22/2013",
        "Amount": "6528.06"
    },
    {
        "Customer Name": "Hakeem Easseby",
        "Model": "Mirage",
        "Color": "Crimson",
        "Payment Mode": "Debit Card",
        "Delivery Date": "9/12/2014",
        "Amount": "5619.25"
    },
    {
        "Customer Name": "Nickolaus Gidman",
        "Model": "XK",
        "Color": "Orange",
        "Payment Mode": "Debit Card",
        "Delivery Date": "05/12/2016",
        "Amount": "5091.43"
    },
    {
        "Customer Name": "Jenine Iglesia",
        "Model": "Accord",
        "Color": "Orange",
        "Payment Mode": "Debit Card",
        "Delivery Date": "09/03/2018",
        "Amount": "14566.08"
    },
    {
        "Customer Name": "Fax Witherspoon",
        "Model": "Range Rover Sport",
        "Color": "Orange",
        "Payment Mode": "Credit Card",
        "Delivery Date": "2/22/2018",
        "Amount": "5284.87"
    }
];

{% endhighlight %}
{% endtabs %}

2.Then, import and define the Spreadsheet component in the **src/app/page.tsx** file, as shown below: 

> The Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet component relies on browser APIs (DOM, events) and does not support server-side rendering. Add the `'use client'` directive at the top of `page.tsx` to mark the file as a Client Component so the Spreadsheet renders only on the client side and avoids Next.js hydration errors.

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import { SpreadsheetComponent, SheetsDirective, SheetDirective, ColumnsDirective, RangesDirective, RangeDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, CellStyleModel, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

export default function Home() {
  let spreadsheet!: SpreadsheetComponent;
  const boldRight: CellStyleModel = { fontWeight: 'bold', textAlign: 'right' };
  const bold: CellStyleModel = { fontWeight: 'bold' };

  function onCreated(): void {
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
    spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
  }

  return (
    <>
      <h2>React Spreadsheet Editor</h2>
      <SpreadsheetComponent openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
        saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
        ref={(Obj) => { spreadsheet = Obj as SpreadsheetComponent }} created={onCreated} >
        <SheetsDirective>
          <SheetDirective name="Car Sales Report">
            <RangesDirective>
              <RangeDirective dataSource={defaultData}></RangeDirective>
            </RangesDirective>
            <RowsDirective>
              <RowDirective index={30}>
                <CellsDirective>
                  <CellDirective index={4} value="Total Amount:" style={boldRight}></CellDirective>
                  <CellDirective formula="=SUM(F2:F30)" style={bold}></CellDirective>
                </CellsDirective>
              </RowDirective>
            </RowsDirective>
            <ColumnsDirective>
              <ColumnDirective width={180}></ColumnDirective>
              <ColumnDirective width={130}></ColumnDirective>
              <ColumnDirective width={130}></ColumnDirective>
              <ColumnDirective width={180}></ColumnDirective>
              <ColumnDirective width={130}></ColumnDirective>
              <ColumnDirective width={120}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </>
  )
}

{% endhighlight %}
{% endtabs %}

> **Note:** The [`openUrl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`Web Services`](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/web-services/webservice-overview) section.

## Run the application

To run the application, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

To learn more about the functionality of the Spreadsheet component, refer to the [documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/feature-list).

## Troubleshooting

Common setup and runtime issues are listed below with their cause and a resolution.

| Issue | Likely cause | Resolution |
|---|---|---|
| **`use client` / hydration error**: `Text content did not match` or error referencing server-rendered HTML. | The Spreadsheet uses browser APIs (DOM, events) and cannot be server-rendered. | Ensure the `'use client'` directive is present at the top of `src/app/page.tsx`. If the component is imported into a Server Component, move it to a separate Client Component file. See [React Server and Client Components](https://react.dev/reference/rsc/use-client). |
| **CSS not applied / unstyled component** (plain HTML layout, broken toolbar icons). | Theme stylesheets were not imported or imported with the wrong relative path. | Verify the `@import` blocks for all dependency CSS files (`ej2-base`, `ej2-inputs`, etc.) are present in `src/app/globals.css` and the paths resolve from the `src/app/` location. Restart the dev server after editing CSS. |
| **`Cannot find module '@syncfusion/ej2...'` or peer dependency warnings during `npm install`.** | Package not installed, or React version mismatch. | Re-run `npm install @syncfusion/ej2-react-spreadsheet`. For peer dependency conflicts, ensure React is on a version supported by the package (see the [NuGet package / npm version](../../../../NuGet-Packages) notes) and use `--legacy-peer-deps` only as a temporary workaround. |
| **License warning or toolbar shows a license banner at runtime.** | Syncfusion license key not registered, or registered after the component renders. | Register the license key in the application entry point **before** rendering any Syncfusion component. See [Register the Syncfusion License Key](../../register-the-syncfusion-license-key) and [Licensing FAQ](../../../../Licensing/licensing-faq). |
| **Open/Save actions fail with network or CORS errors.** | The `openUrl` / `saveUrl` endpoints are unreachable from the browser, or in production the Syncfusion demo services are rate-limited / blocked. | Host your own Spreadsheet open/save web service and ensure CORS is enabled. Refer to the [Web Services](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/web-services/webservice-overview) section. |


N> Looking for the full React Spreadsheet Editor component overview, features, pricing, and documentation? Visit the [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) page.