---
layout: post
title: Getting Started with ASP.NET Core Spreadsheet in Replit | Syncfusion
description: Learn how to get started with the Syncfusion ASP.NET Core Spreadsheet Editor control in Replit. Explore setup and integration steps.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Getting Started with ASP.NET Core Spreadsheet in Replit

This section provides a step-by-step guide for setting up an ASP.NET Core application in [Replit](https://replit.com) and integrating the [Syncfusion® ASP.NET Core Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/asp-net-core-spreadsheet-editor) control — without installing any local tools.

## What is Replit?

[Replit](https://replit.com) is a browser-based, AI-powered development environment (agentic UI builder) that lets you write, run, and deploy applications entirely in the cloud. It requires no local setup and is well suited for users who are new to software development, or who want to prototype and iterate quickly without configuring local development tools.

## Prerequisites

Before getting started, ensure the following:

* A free or paid [Replit account](https://replit.com).
* A valid [**Syncfusion license key**](https://help.syncfusion.com/document-processing/licensing/overview) (licensed or trial).

> **Note:** No local .NET SDK or IDE installation is required. All development happens inside the Replit browser environment.

## Create an Empty Project in Replit

1. Sign in to [Replit](https://replit.com).
2. Click **New** and select **Empty project**.

![Empty Project in Replit](../images/empty-project-replit.png)

3. Replit creates an empty project with a default generated name.
4. To rename the project, click the project name dropdown located at the top of the Replit workspace, select **Edit project details**, and enter a name such as `spreadsheet-app`.

   ![Edit project details in Replit](../images/edit-project-details-replit.png)

## Create an ASP.NET Core Spreadsheet Application in Replit

This section explains how to add a simple ASP.NET Core Spreadsheet application to the current Replit project and integrate the [ASP.NET Core Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/asp-net-core-spreadsheet-editor) control with the minimum required setup using either of the following approaches.

Before proceeding, click the **+** icon in the tab bar and select **Shell** from the new tab. The Shell is required for both the Agent Skills and .NET CLI approaches described in the following sections.

![Shell tab in Replit](../images/shell-tab-replit.png)

{% tabcontents %}

{% tabcontent Using Agent Skills %}

## Install Syncfusion® ASP.NET Core Spreadsheet Editor SDK Skills

In the Shell tab, run the following command to install the Syncfusion® ASP.NET Core Spreadsheet Editor SDK [skills](https://github.com/syncfusion/spreadsheet-editor-sdk-skills/tree/master/skills/syncfusion-aspnetcore-spreadsheet-editor):

{% tabs %}
{% highlight bash tabtitle="npm" %}
npx skills add syncfusion/spreadsheet-editor-sdk-skills --skill syncfusion-aspnetcore-spreadsheet-editor
{% endhighlight %}
{% endtabs %}

## How Syncfusion® Spreadsheet Editor SDK Skills Work

Once skills are installed, the Replit Agent automatically:

1. **Reads the skill files** — The agent retrieves control APIs, best practices, and code patterns from the installed Syncfusion skills.
2. **Grounds code generation** — The agent uses skill-based knowledge instead of generic AI suggestions, ensuring accurate Syncfusion APIs and patterns.
3. **Generates production-ready code** — The agent generates complete, working implementations that can be directly integrated into your application.
4. **Enforces best practices** — The agent recommends correct packages, proper license registration, theme setup, and configuration.

## Use the Replit Agent with Skills

Once skills are installed, the Replit Agent can generate Spreadsheet control code automatically. Open the **Replit Agent** panel and enter a prompt such as:

**Example Prompts:**

```
Create a Syncfusion ASP.NET Core Spreadsheet application using the Tailwind 3 theme. Install all required packages and render an empty Spreadsheet control.
```

![Replit Agent panel](../images/replit-agent-panel.png)

The agent will:

- Create an ASP.NET Core application.
- Install the required Syncfusion package (`Syncfusion.EJ2.AspNet.Core`).
- Register the license key before control initialization if mentioned.
- Add the theme CSS and script references in the correct file.
- Generate the complete Spreadsheet control implementation with your requested features.
- Create sample data and configuration based on your requirements.

You can use the agent to apply different spreadsheet actions by entering prompts for data validation, formatting, conditional formatting, open/save operations, and other Spreadsheet features.

**Review and Modify:** Review the generated code by opening the **Library** panel on the right side. Click the **Files** tab to view all project files. Then, click files such as `Program.cs`, `Pages/_ViewImports.cshtml`, `Pages/Shared/_Layout.cshtml`, and `Pages/Index.cshtml` to view and edit the generated code if needed. You can also press **Ctrl + Shift + L** to quickly toggle the Library panel.

![Files Panel in Replit](../images/files-tab-replit.png)

## Run the Application

Once the agent finishes generating the application code, click the **Run** button (▶) at the top of the Replit workspace. The ASP.NET Core Spreadsheet Editor application will be built and rendered in the preview pane, as shown below.

![ASP.NET Core Spreadsheet rendered inside the Replit preview pane](../images/replit-aspnet-core-agent.png)

For more information about Spreadsheet Editor SDK Skills, including:

- See Supported platforms
- Comprehensive example prompts
- Troubleshooting tips

See [Agent Skills in Spreadsheet Editor SDK](../../../../Skills/spreadsheet-editor-sdk/component-skills.md).

{% endtabcontent %}

{% tabcontent .NET CLI %}

## Initialize an ASP.NET Core Application with .NET CLI

In the Shell, run the following commands to create a new ASP.NET Core Razor Pages application named `spreadsheet-app`:

{% tabs %}
{% highlight bash tabtitle=".NET CLI" %}
dotnet new webapp -o spreadsheet-app
cd spreadsheet-app
{% endhighlight %}
{% endtabs %}

This scaffolds an ASP.NET Core Razor Pages project in your current Replit workspace. After the project is created, open the **Library** panel on the right side of the workspace.

You can open it by clicking the **Open Library** option or by pressing **Ctrl + Shift + L** on your keyboard. Then, click the **Files** tab to view, create, edit, and manage the generated project files, such as `Program.cs`, `Pages/Index.cshtml`, `Pages/_ViewImports.cshtml`, and `Pages/Shared/_Layout.cshtml`.

![Files Panel in Replit](../images/files-tab-replit.png)

## Install Syncfusion® ASP.NET Core Spreadsheet Package

Install the Syncfusion ASP.NET Core package:

```bash
dotnet add package Syncfusion.EJ2.AspNet.Core
```

## Register the Syncfusion® License Key

Open `Program.cs` and add the license registration before the `builder.Build()` call:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

Replace `YOUR_LICENSE_KEY` with your actual Syncfusion license key. See [How to generate a Syncfusion license key](https://help.syncfusion.com/document-processing/licensing/how-to-generate) for more details.

## Add the Syncfusion® ASP.NET Core Tag Helper

Open `Pages/_ViewImports.cshtml` and add the Syncfusion ASP.NET Core Tag Helper:

```cshtml
@addTagHelper *, Syncfusion.EJ2
```

## Add the Required CSS and Script Resources

Open `Pages/Shared/_Layout.cshtml` and add the Tailwind 3 theme and script references inside the `<head>` element:

```html
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/35.1.37/tailwind3.css" />
<script src="https://cdn.syncfusion.com/ej2/35.1.37/dist/ej2.min.js"></script>
```

## Add the Syncfusion® ASP.NET Core Spreadsheet Control

Open `Pages/Index.cshtml` and replace the existing content with the following:

```cshtml
@page
@model IndexModel

<ejs-spreadsheet id="spreadsheet"
                 openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
                 saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
</ejs-spreadsheet>
```

Open `Pages/Shared/_Layout.cshtml` and add the Syncfusion script manager at the end of the `<body>` element:

```cshtml
<ejs-scripts></ejs-scripts>
```

> **Note:** The [`openUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_OpenUrl) and [`saveUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_SaveUrl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`Open and Save`](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-core/open-save) section.

## Run the Application

Click the **Run** button (▶) at the top of the Replit workspace. Once the application starts running, the ASP.NET Core Spreadsheet Editor is rendered in the preview pane, as shown below.

![ASP.NET Core Spreadsheet rendered inside the Replit preview pane](../images/replit-aspnet-core-dotnet.png)

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

* **Shell access:** Use the **Shell** tab to run any `dotnet` commands, such as installing additional packages or starting/stopping the application manually.
* **Persistent storage:** Replit persists your project files automatically. Changes are saved as you type.
* **View and manage project files:** Use the **Library** panel to access applications, documents, images, and other resources generated by Replit Agent. To view and edit project files, switch to the **Files** tab. You can also use the **...** (More options) menu to create, edit, and manage files. Press **Ctrl + Shift + L** to quickly open the Library panel.

## Environment Variables in Replit

If you need to store sensitive information (API keys, database URLs), use Replit Secrets:

1. Click the **Secrets** icon (lock icon) in the left sidebar.
2. Add your secret with a key and value (for example, `SYNCFUSION_LICENSE_KEY=your_key_here`).
3. Access it in `Program.cs` using `Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY")`.

## Publish the Application in Replit

Replit allows you to publish your application to a live public URL without leaving the browser. To deploy your application:

1. Click the **Publish** button in the top-right corner of the Replit workspace.

   **Note:** Publishing options and availability depend on your Replit plan. Replit automatically recommends the most appropriate publishing option based on your project type. For the latest publishing guidance, refer to the [Replit documentation](https://docs.replit.com/home/publish-the-site).

2. Once the publishing process is complete, Replit provides a public URL, such as `https://syncfusion-spreadsheet-app.replit.app`, that you can share with users.

## Troubleshooting

| Issue | Resolution |
|---|---|
| **Preview shows "Your app is not running"** | If the issue persists, open the Agent panel and enter the error text shown in the preview: `My ASP.NET Core app is not starting in Preview. Check the workflow, start the application, and fix any runtime errors.` |
| **Blank output / control not visible** | Ensure the theme CSS and script references are included in `Pages/Shared/_Layout.cshtml`, and that `<ejs-scripts></ejs-scripts>` is added at the end of the `<body>` element. |
| **License warning banner** | Verify that `SyncfusionLicenseProvider.RegisterLicense` is called before `builder.Build()` in `Program.cs`. |
| **Package not found errors** | Open the Shell and run `dotnet restore` to restore all dependencies. |
| **Tag Helper not recognized** | Ensure `@addTagHelper *, Syncfusion.EJ2` is included in `Pages/_ViewImports.cshtml`. |
| **Shell commands not working** | Wait for Replit to finish booting the environment, then retry. |
| **Slow first load** | Replit free-tier projects may take a few seconds to wake up after inactivity. |

## See also

* [Getting Started with ASP.NET Core Spreadsheet](../getting-started-core.md)
* [Agent Skills in Spreadsheet Editor SDK](../../../../Skills/spreadsheet-editor-sdk/component-skills.md)
* [Replit documentation](https://docs.replit.com/)
