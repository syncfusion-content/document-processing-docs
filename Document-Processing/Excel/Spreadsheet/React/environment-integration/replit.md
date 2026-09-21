---
layout: post
title: Getting Started with React Spreadsheet in Replit | Syncfusion
description: Learn how to get started with the Syncfusion React Spreadsheet Editor component in Replit. Explore setup and integration steps.
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

## Key Features to Explore

Once your Spreadsheet is running, you can enhance it with:

- **Data Binding**: Bind data from APIs, databases, or CSV files
- **Formulas**: Add Excel-like formulas for calculations
- **Cell Formatting**: Apply styles, colors, and borders
- **Data Validation**: Restrict data entry with validation rules
- **Filters & Sorting**: Enable filtering and sorting on columns
- **Charts**: Visualize data with built-in chart support
- **Export/Import**: Save and load Excel files

## Tips for working in Replit

* **Shell access:** Use the **Shell** tab to run any `npm` commands, such as installing additional packages or starting/stopping the dev server manually.
* **Persistent storage:** Replit persists your project files automatically. Changes are saved as you type.

## Using Replit Agent (AI assistant)

Replit includes an integrated AI assistant that can generate and modify code using natural language. To scaffold the Syncfusion Spreadsheet component automatically, open the **Replit Agent** panel and enter a prompt such as:

```
Add a Syncfusion React Spreadsheet Editor to my app using the Tailwind 3 theme.
Install the required packages and render an empty spreadsheet in App.jsx.
```

The agent will install the packages, update the component file, and apply the theme import for you. Review the generated code before running the application.

## Environment Variables in Replit

If you need to store sensitive information (API keys, database URLs), use Replit Secrets:

1. Click the **Secrets** icon (lock icon) in the left sidebar
2. Add your secret with a key and value (e.g., `API_KEY=your_key_here`)
3. Access it in your code using `process.env.API_KEY`

## Deploy the application in Replit

Replit allows you to publish your application to a live public URL without leaving the browser. To deploy the spreadsheet application:

1. Click the **Deploy** button (🚀) in the top-right corner of the Replit workspace.
2. Select a deployment type based on your needs:
   * **Autoscale** — Best for web apps and APIs that scale automatically with traffic. Recommended for most React applications.
   * **Reserved VM** — Provides a dedicated virtual machine for apps that need persistent processes or long-running build steps.
   * **Static** — Serves the pre-built production output (`dist/` folder) with fast global hosting. Ensure `npm run build` runs as the build command.
3. Configure the build and run commands (for a Vite React app, the defaults are `npm run build` and `npm run dev`).
4. Click **Deploy** and wait for the build to complete. Replit provides a public URL, such as `https://syncfusion-spreadsheet-app.<your-username>.repl.co`, that you can share with users.

> **Note:** Deployment options and availability depend on your Replit plan. The development Repl remains free, and you can continue editing and redeploying after publishing. For the latest deployment types and pricing, refer to the [Replit deployment documentation](https://docs.replit.com/deployments/about-deployments).

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
* [Getting Started with React Spreadsheet in Create React App](./create-react-app)
* [Getting Started with React Spreadsheet in Next.js](./nextjs-getting-started)
* [Getting Started with React Spreadsheet in Remix](./remix)
* [Getting Started with React Spreadsheet in Preact](./preact)
* [Getting Started with React Spreadsheet in Agentic UI Builder](./agentic-builder)
* [Open Excel files](../open-excel-files)
* [Save Excel files](../save-excel-files)
* [Data Binding](../data-binding)
* [Formulas and Calculations](../formulas-and-calculations)
* [Spreadsheet Appearance and Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme)
* [How to generate a Syncfusion license key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
* [How to register a Syncfusion license key in an application](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application)
* [Replit documentation](https://docs.replit.com/)
* [Replit deployment overview](https://docs.replit.com/deployments/about-deployments)
