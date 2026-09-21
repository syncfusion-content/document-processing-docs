---
layout: post
title: Getting Started with React Spreadsheet in Replit | Syncfusion
description: Learn how to get started with the Syncfusion React Spreadsheet Editor component in Replit, a browser-based agentic UI builder. Explore setup and integration steps.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Getting Started with React Spreadsheet in Replit

This section provides a step-by-step guide for setting up a React application in [Replit](https://replit.com) and integrating the [Syncfusion® React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) component — without installing any local tools.

## What is Replit?

[Replit](https://replit.com) is a browser-based, AI-powered development environment (agentic UI builder) that lets you write, run, and deploy applications entirely in the cloud. It requires no local setup and is well suited for users who are new to software development, or who want to prototype and iterate quickly without configuring a local toolchain.

## Prerequisites

Before getting started, ensure the following:

* A free or paid [Replit account](https://replit.com/signup).
* A valid [Syncfusion license key](https://help.syncfusion.com/document-processing/licensing/overview). You can generate a trial key from the [Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate) page.

> **Note:** No local Node.js, npm, or IDE installation is required. All development happens inside the Replit browser environment.

## Create a React application in Replit

1. Sign in to [Replit](https://replit.com) and click **Create Repl**.
2. In the template search, select **React** (Vite) or search for **React** and choose the official React template.
3. Give your Repl a name (for example, `syncfusion-spreadsheet-app`) and click **Create Repl**.

Replit automatically scaffolds a React (Vite) project and opens the integrated editor with a live preview pane.

## Install Syncfusion® React Spreadsheet packages

In the Replit **Shell** tab (or **Console** panel), run the following commands to install the required Syncfusion packages:

```bash
npm install @syncfusion/ej2-react-spreadsheet --save
```

## Import the required CSS styles

Themes for Spreadsheet can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. Each component includes an `index.css` file that automatically loads all required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, run the following command in the Shell:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

Open `src/App.css` in the Replit editor and replace the existing content with the following theme import:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
```

## Register the Syncfusion® license key

Open `src/main.jsx` (or `src/main.tsx` for TypeScript projects) and add the license registration before the `createRoot` call:

{% tabs %}
{% highlight js tabtitle="main.jsx" %}
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('YOUR_LICENSE_KEY');
{% endhighlight %}
{% highlight ts tabtitle="main.tsx" %}
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('YOUR_LICENSE_KEY');
{% endhighlight %}
{% endtabs %}

Replace `YOUR_LICENSE_KEY` with your actual Syncfusion license key. See [How to generate a Syncfusion license key](https://help.syncfusion.com/document-processing/licensing/how-to-generate) for more details.

## Add the Syncfusion® React Spreadsheet component

Open `src/App.jsx` (or `src/App.tsx` for TypeScript) and replace the existing content with the following:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
import * as React from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective,
         ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import './App.css';

export default function App() {
  return (
    <SpreadsheetComponent>
      <SheetsDirective>
        <SheetDirective name="Sheet1">
          <ColumnsDirective>
            <ColumnDirective width={180} />
            <ColumnDirective width={180} />
            <ColumnDirective width={180} />
          </ColumnsDirective>
        </SheetDirective>
      </SheetsDirective>
    </SpreadsheetComponent>
  );
}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective,
         ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import './App.css';

export default function App(): JSX.Element {
  return (
    <SpreadsheetComponent>
      <SheetsDirective>
        <SheetDirective name="Sheet1">
          <ColumnsDirective>
            <ColumnDirective width={180} />
            <ColumnDirective width={180} />
            <ColumnDirective width={180} />
          </ColumnsDirective>
        </SheetDirective>
      </SheetsDirective>
    </SpreadsheetComponent>
  );
}
{% endhighlight %}
{% endtabs %}

## Run the application

Click the **Run** button (▶) at the top of the Replit workspace. Replit automatically starts the Vite development server and opens the live preview in the browser pane on the right.

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Spreadsheet Editor renders in the preview pane:

![React Spreadsheet rendered inside the Replit preview pane](../images/replit-output.png)

## Tips for working in Replit

* **Shell access:** Use the **Shell** tab to run any `npm` commands, such as installing additional packages or starting/stopping the dev server manually.
* **Persistent storage:** Replit persists your project files automatically. Changes are saved as you type.
* **Environment variables:** Store sensitive values such as your Syncfusion license key in **Replit Secrets** (the 🔒 **Secrets** tab in the sidebar) rather than hard-coding them. Access the value in code using `import.meta.env.VITE_SF_LICENSE_KEY` after defining it as a Vite env variable.
* **Deployment:** Use Replit's built-in **Deploy** feature to publish your application to a public URL with a single click.

## Using Replit Agent (AI assistant)

Replit includes an integrated AI assistant that can generate and modify code using natural language. To scaffold the Syncfusion Spreadsheet component automatically, open the **Replit Agent** panel and enter a prompt such as:

```
Add a Syncfusion React Spreadsheet Editor to my app using the Tailwind 3 theme.
Install the required packages and render an empty spreadsheet in App.jsx.
```

The agent will install the packages, update the component file, and apply the theme import for you. Review the generated code before running the application.

## Troubleshooting

| Issue | Resolution |
|---|---|
| **Blank output / component not visible** | Ensure the theme CSS is imported in `App.css` and that `App.css` is imported in `App.jsx`. |
| **License warning banner** | Verify that `registerLicense` is called before `createRoot` in `main.jsx`. |
| **Module not found errors** | Open the Shell and run `npm install` to restore all dependencies. |
| **Shell commands not working** | Wait for Replit to finish booting the environment, then retry. |
| **Slow first load** | Replit free-tier Repls may take a few seconds to wake up after inactivity. |

## See also

* [Getting Started with React Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started)
* [Getting Started with React Spreadsheet in Next.js](./nextjs-getting-started)
* [Getting Started with React Spreadsheet in Agentic UI Builder](./agentic-builder)
* [Open Excel files](../open-excel-files)
* [Save Excel files](../save-excel-files)
* [Data Binding](../data-binding)
