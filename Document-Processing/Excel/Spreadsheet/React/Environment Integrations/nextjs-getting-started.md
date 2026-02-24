---
layout: post
title: React Spreadsheet getting started with Next.js | Syncfusion
description: Checkout and learn about how to use React Spreadsheet component of Syncfusion Essential JS 2 in the Next.js project.
control: Next.js
platform: document-processing
documentation: ug
---

# Creating a Spreadsheet Application in Next.js
This section provides a step-by-step guide for setting up a Next.js application and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> React Spreadsheet component.

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

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

1.Define the project name: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-next-js-spreadsheet`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-next-js-spreadsheet

{% endhighlight %}
{% endtabs %}

2.Select the required packages.

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

3.Once complete the above mentioned steps to create `ej2-next-js-spreadsheet`, navigate to the directory using the below command:

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

npm install @syncfusion/ej2-react-spreadsheet --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-spreadsheet

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> React components come with [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme), which are available in the installed packages. It’s easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components to match the style of your application by referring to one of the built-in themes.

Import the `Material` theme into the **src/app/globals.css** file and removed the existing styles in that file, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-react-spreadsheet/styles/material.css';

{% endhighlight %}
{% endtabs %}

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) section.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow the below steps to add the React Spreadsheet component to the Next.js project:

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

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import { SpreadsheetComponent, SheetsDirective, SheetDirective, ColumnsDirective, RangesDirective, RangeDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, CellStyleModel, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

export default function Home(this: any) {
  let spreadsheet!: SpreadsheetComponent;
  const boldRight: CellStyleModel = { fontWeight: 'bold', textAlign: 'right' };
  const bold: CellStyleModel = { fontWeight: 'bold' };

  function onCreated(): void {
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
    spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
  }

  return (
    <>
      <h2>Syncfusion React Spreadsheet Component</h2>
      <SpreadsheetComponent openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
        saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
        ref={(Obj) => { spreadsheet = Obj as SpreadsheetComponent }} created={onCreated.bind(this)} >
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