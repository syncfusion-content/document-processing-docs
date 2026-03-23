---
title: Syncfusion Spreadsheet Editor SDK Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion Spreadsheet Editor SDK Agent Skills to enable AI assistants to generate accurate spreadsheet editor code using Syncfusion Spreadsheet Editor SDK libraries.
platform: spreadsheet-editor
control: Spreadsheet Editor SDK
documentation: ug
keywords: Skills, AI Assistants, Spreadsheet Editor SDK, Agent Skills
---

# Syncfusion Spreadsheet Editor SDK Agent Skills for AI Assistants

This guide introduces **Syncfusion Spreadsheet Editor SDK Skills**, a knowledge package that enables AI assistants (GitHub Copilot, Code Studio, Cursor, Claude, etc.) to understand and generate accurate spreadsheet editor code using Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK libraries. It also supports executing spreadsheet operations directly via platform-specific scripts.

Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Skills eliminate common issues with generic AI suggestions by grounding the assistant in accurate Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK library APIs, spreadsheet editor patterns, and platform-specific configuration for the following platforms:

- **[React Spreadsheet Editor](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/overview)**
- **[Angular Spreadsheet Editor](https://help.syncfusion.com/document-processing/excel/spreadsheet/angular/overview)**
- **[Blazor Spreadsheet Editor](https://help.syncfusion.com/document-processing/excel/spreadsheet/blazor/overview)**
- **[ASP.NET Core Spreadsheet Editor](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-core/overview)**
- **[TypeScript Spreadsheet Editor](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/overview)**
- **[Vue Spreadsheet Editor](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/overview)**

## Prerequisites

Before installing Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Skills, ensure the following tools are available on your machine:

- **[Node.js](https://nodejs.org/)** (v16 or later) — Required to run `npx` commands for installing skills.
- **Platform-specific SDKs** — Required based on your target platform:
  - **.NET SDK** (6.0 or later) for Blazor and ASP.NET Core
  - **React development environment** for React Spreadsheet Editor
  - **Angular CLI** for Angular Spreadsheet Editor
  - **TypeScript** for TypeScript Spreadsheet Editor
  - **Vue CLI** for Vue Spreadsheet Editor

## Installation

Choose one of the following commands to install [Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Skills](https://github.com/syncfusion/spreadsheet-editor-sdk-skills) based on your preference. You can also explore Syncfusion<sup style="font-size:70%">&reg;</sup> skills from the [marketplace](https://skills.sh/syncfusion/).

```bash
# Install all spreadsheet editor SDK skills at once
npx skills add syncfusion/spreadsheet-editor-sdk-skills -y

# Choose and install skills interactively from the terminal
npx skills add syncfusion/spreadsheet-editor-sdk-skills
```

This registers the Syncfusion<sup style="font-size:70%">&reg;</sup> skill pack so your AI assistant can automatically load it in supported IDEs such as [Code Studio](https://help.syncfusion.com/code-studio/reference/configure-properties/skills), [Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills), and [Cursor](https://cursor.com/docs/skills).

To learn more, refer to the [Skills CLI documentation](https://skills.sh/docs).

## What's Included

1. **Spreadsheet Editor SDK API Knowledge** — Curated, skill-based guidance for creating, editing, and managing spreadsheets using Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK libraries across multiple platforms. Covers key APIs, component integration, cell operations, formatting, data binding, and import/export features.
2. **Platform-Specific Code Generation** — Generates production-ready code tailored to your platform (React, Angular, Blazor, ASP.NET Core, TypeScript, or Vue) without executing scripts or modifying your project structure.
3. **Patterns & Best Practices** — Practical recommendations for API usage, platform-specific package selection, component configuration, and spreadsheet editor workflows (for example, cell styling, conditional formatting, data validation, chart creation, formula calculation, and protection settings). All guidance is authored directly within the skill file rather than being fetched from external documentation.

## How Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Agent Skills Work

1. **Reads the relevant skill files based on the user's query.** The assistant retrieves library APIs and code patterns from the installed Syncfusion<sup style="font-size:70%">&reg;</sup> Skills. It automatically chooses the appropriate platform based on the detected workspace or user prompt.
2. **Enforces Syncfusion<sup style="font-size:70%">&reg;</sup> best practices**, including:
   - Suggesting the correct npm packages or NuGet packages based on the detected platform.
   - Using only APIs and code patterns explicitly present in the skill reference files.
   - Configuring the Syncfusion<sup style="font-size:70%">&reg;</sup> license key from `SyncfusionLicense.txt` or the `SYNCFUSION_LICENSE_KEY` environment variable.
   - Following platform-specific component initialization and lifecycle patterns.
3. **Generates code only** — Unlike Document SDK skills with dual-mode execution, Spreadsheet Editor skills focus exclusively on generating production-ready code that can be integrated directly into your application files (for example, `App.tsx`, `Home.razor`, `app.component.ts`, or `Program.cs`).

## Using the AI Assistant

Once skills are installed, the assistant can generate Syncfusion<sup style="font-size:70%">&reg;</sup> spreadsheet editor code. Below are example prompts for code generation.

**Generate Code Examples:**

- "Show me React code to create a Spreadsheet component with basic formatting options."
- "How to apply conditional formatting to highlight cells greater than $15,000 in Angular Spreadsheet Editor?"
- "Give me a code snippet to protect a worksheet and allow editing only specific cells using Blazor Spreadsheet Editor."
- "Show me how to insert a chart into the Spreadsheet Editor using ASP.NET Core."
- "Example of importing CSV data into TypeScript Spreadsheet Editor."
- "How to export the spreadsheet as PDF using Vue Spreadsheet Editor?"
- "Show me code to apply number formatting to currency columns in React Spreadsheet Editor."
- "How do I enable cell editing and data validation in Angular Spreadsheet Editor?"

**Feature-Specific Examples:**

- "Wrap text in the Customer Name column using Blazor Spreadsheet Editor."
- "Insert a new row at position 5 and hide column C in React Spreadsheet Editor."
- "Apply bold and center alignment to header row using TypeScript Spreadsheet Editor."
- "Create a pivot table from sales data using ASP.NET Core Spreadsheet Editor."
- "Enable freeze panes for the first row and first column in Vue Spreadsheet Editor."
- "Show me how to implement custom context menu items in Angular Spreadsheet Editor."

## See also

- [Syncfusion Spreadsheet Editor SDK Documentation](https://www.syncfusion.com/spreadsheet-editor-sdk)
- [React Spreadsheet Editor Documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/overview)
- [Angular Spreadsheet Editor Documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/angular/overview)
- [Blazor Spreadsheet Editor Documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/blazor/overview)
- [ASP.NET Core Spreadsheet Editor Documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-core/overview)
- [TypeScript Spreadsheet Editor Documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/overview)
- [Vue Spreadsheet Editor Documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/overview)
- [Agent Skills Standards](https://agentskills.io/home)
- [Skills CLI](https://skills.sh/docs)
- [Syncfusion Community License](https://www.syncfusion.com/products/communitylicense)