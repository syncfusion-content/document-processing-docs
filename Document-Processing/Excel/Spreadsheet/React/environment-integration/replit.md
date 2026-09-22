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

* A free or paid [Replit account](https://replit.com).
* A valid [Syncfusion license key](https://help.syncfusion.com/document-processing/licensing/overview). You can generate a trial key from the [Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate) page.

> **Note:** No local Node.js, npm, or IDE installation is required. All development happens inside the Replit browser environment.

## Create a React application in Replit

This section explains how to create a simple React application and add the [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) component with the minimum required setup using two approaches.

## Create an Empty Project

1. Sign in to [Replit](https://replit.com).
2. Click **New**.
3. Select **Empty project**.
4. Enter a project name (for example, `spreadsheet-react-skills` or use the default generated name).
6. Once the project opens, click the **+** (New Tab) icon in the workspace.
7. Select **Shell**.

{% tabcontents %}

{% tabcontent Using Agent Skills %}

## Install Syncfusion® Spreadsheet Editor SDK Skills

In the Shell tab, you can install Syncfusion Spreadsheet Editor SDK skills using one of the following methods:

### Method 1: Quick Installation (All Skills)

To install all Spreadsheet Editor SDK skills at once:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npx skills add syncfusion/spreadsheet-editor-sdk-skills -y
{% endhighlight %}
{% endtabs %}

This command installs all available framework skills (React, Angular, Blazor, ASP.NET Core, etc.) to your default agent with no prompts.

### Method 2: Install Specific Platform Skill (React Only)

To install only the React Spreadsheet Editor skill for Replit:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npx skills add syncfusion/spreadsheet-editor-sdk-skills --skill syncfusion-react-spreadsheet-editor
{% endhighlight %}
{% endtabs %}

This command installs only the React skill, keeping your setup lightweight and focused.

### Method 3: Interactive Installation (Recommended)

To install skills interactively and select which skills and agent to use:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npx skills add syncfusion/spreadsheet-editor-sdk-skills
{% endhighlight %}
{% endtabs %}

When prompted:
1. **Select skills to install:** Use arrow keys to navigate the list, press **space** to select **syncfusion-react-spreadsheet-editor**, then press **Enter** to confirm.
2. **Choose your AI agent:** Select the agent where skills should be installed (e.g., **Claude Code**, **Augment**, **Continue**, etc.).
3. **Installation scope:** Choose between:
   - **Project** (Install in current directory, committed with your project)
   - **Global** (Install globally on your machine)
4. **Confirm installation:** Press **Enter** to complete.

The skills will be stored in your selected agent's directory (e.g., `.claude/skills`, `.augment/skills`, or `.continue/skills` or `skills-lock.json`) and automatically loaded by the agent.

## How Syncfusion® Spreadsheet Editor SDK Skills Work

Once skills are installed, the Replit Agent automatically:

1. **Reads the skill files** — The agent retrieves component APIs, best practices, and code patterns from the installed Syncfusion skills.
2. **Grounds code generation** — The agent uses skill-based knowledge instead of generic AI suggestions, ensuring accurate Syncfusion APIs and patterns.
3. **Generates production-ready code** — The agent generates complete, working implementations that can be directly integrated into your application.
4. **Enforces best practices** — The agent recommends correct packages, proper license registration, theme setup, and configuration.

## Use the Replit Agent with Skills

Once skills are installed, the Replit Agent can generate Spreadsheet component code automatically. Open the **Replit Agent** panel and enter a prompt such as:

**Example Prompts:**

```
Create a Syncfusion React Spreadsheet Editor using the Tailwind 3 theme.Install the required packages and render an empty spreadsheet in App.jsx.
```

The agent will:
- Install the required Syncfusion packages (@syncfusion/ej2-react-spreadsheet, @syncfusion/ej2-tailwind3-theme, etc.)
- Register the license key before component initialization if mention
- Import the theme CSS in the correct file
- Generate the complete Spreadsheet component implementation with your requested features
- Create sample data and configuration based on your requirements

You can use the agent to apply different spreadsheet actions by entering prompts for data validation, formatting, conditional formatting, open/save operations, and other Spreadsheet features.

**Review and Apply:** Review the generated code and apply it to your project files (`src/App.jsx`, `src/main.jsx`, `src/index.css`, etc.).

## Run the Application

Once the agent finishes generating the code, click the **Run** button (▶) at the top of the Replit workspace. The Spreadsheet Editor will render in the preview pane.

![React Spreadsheet rendered inside the Replit preview pane](../images/replit-react-agent.png)

### Next Steps

For more information about Spreadsheet Editor SDK Skills, including:
- Advanced installation options
- See Supported platforms
- Skills CLI commands (list, remove, update)
- Comprehensive example prompts
- Troubleshooting tips

For More information, See [Agent Skills in Spreadsheet Editor SDK](../../../../Skills/spreadsheet-editor-sdk/component-skills.md)

{% tabcontent Vite CLI %}

## Initialize a React Application with Vite

In the Shell tab, run the following command to create a new React application using Vite:

{% tabs %}
{% highlight bash tabtitle="JavaScript" %}
npm create vite@latest . -- --template react
{% endhighlight %}
{% highlight bash tabtitle="TypeScript" %}
npm create vite@latest . -- --template react-ts
{% endhighlight %}
{% endtabs %}

When prompted, confirm the installation by pressing **Enter**. This scaffolds a React Vite project in your current Replit workspace.

## Install Dependencies

Run the following command to install the generated project dependencies:

```bash
npm install
```

## Install Syncfusion® React Spreadsheet Packages

Install the Syncfusion React Spreadsheet component package:

```bash
npm install @syncfusion/ej2-react-spreadsheet --save
```

## Register the Syncfusion® License Key

Open `src/main.jsx` (or `src/main.tsx` for TypeScript) and add the license registration before the `createRoot` call:

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

## Import the Required CSS Styles

Themes for Spreadsheet can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example. Install the theme package:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

Open `src/index.css` and replace the existing content with the theme import:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
```

## Add the Syncfusion® React Spreadsheet Component

Open `src/App.jsx` (or `src/App.tsx` for TypeScript) and replace the existing content with the following:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}

import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export default function App() {
    return (<SpreadsheetComponent openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' 
                saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' />);
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% raw %}

import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export default function App(): JSX.Element {
  return (<SpreadsheetComponent openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' 
            saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' />);
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

> **Note:** The [`openUrl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`Web Services`](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/web-services/webservice-overview) section.

## Run the Application

Click the **Run** button (▶) at the top, or wait for Replit to auto-start the dev server. The React Spreadsheet Editor will render in the preview pane on the right:

![React Spreadsheet rendered inside the Replit preview pane](../images/replit-react_vite.png)

{% endtabcontent %}

{% endtabcontents %}

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
* **View and manage files:** Use the **Library** panel on the right side of the Replit workspace to view all your created files. Click the **Library** option to switch between files, or use the **...** (menu) option to manually create and edit new files. You can also press **Ctrl + Shift + L** to quickly open the Library panel.

## Environment Variables in Replit

If you need to store sensitive information (API keys, database URLs), use Replit Secrets:

1. Click the **Secrets** icon (lock icon) in the left sidebar
2. Add your secret with a key and value (e.g., `SYNCFUSION_LICENSE_KEY=your_key_here`)
3. Access it in your code using `process.env.SYNCFUSION_LICENSE_KEY`

## Deploy the Application in Replit

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
| **Preview shows "Your app is not running"** | If the issue persists, Open the Agent panel and enter error text in preview<br/> <br/>My Vite React app is not starting in Preview. Check the workflow, start the development server, and fix any runtime errors.
| **Preview shows "Blocked request. This host is not allowed"** | Open the Agent panel and enter error text in preview <br/> <br/>The preview shows "Blocked request. This host is not allowed\". Update vite.config.js to allow Replit hosts by configuring server.allowedHosts or server.host and restart the application.|
| **Blank output / component not visible** | Ensure the theme CSS is imported in `App.css` and that `App.css` is imported in `App.jsx`. |
| **License warning banner** | Verify that `registerLicense` is called before `createRoot` in `main.jsx`. |
| **Module not found errors** | Open the Shell and run `npm install` to restore all dependencies. |
| **Shell commands not working** | Wait for Replit to finish booting the environment, then retry. |
| **Slow first load** | Replit free-tier Repls may take a few seconds to wake up after inactivity. |

## See also

* [Getting Started with React Spreadsheet](../getting-started.md)
[Agent Skills in Spreadsheet Editor SDK](../../../../Skills/spreadsheet-editor-sdk/component-skills.md)
* [Getting Started with React Spreadsheet in Create React App](./create-react-app)
* [Replit documentation](https://docs.replit.com/)
* [Replit deployment overview](https://docs.replit.com/deployments/about-deployments)
