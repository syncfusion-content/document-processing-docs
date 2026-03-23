---
layout: post
title: Syncfusion Spreadsheet Editor SDK Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion Spreadsheet Editor SDK Agent Skills to enable AI assistants to generate accurate spreadsheet editor code using Syncfusion libraries.
control: Spreadsheet Editor SDK
platform: file-formats
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion Spreadsheet Editor SDK Agent Skills for AI Assistants

This guide introduces **Syncfusion Spreadsheet Editor SDK Skills**, a knowledge package that enables AI assistants (GitHub Copilot, Code Studio, Cursor, Claude, etc.) to understand and generate accurate spreadsheet editor code using Syncfusion<sup style="font-size:70%">&reg;</sup> platform-specific libraries, and execute spreadsheet operations efficiently.

Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Skills eliminate common issues with generic AI suggestions by grounding the assistant in accurate Syncfusion<sup style="font-size:70%">&reg;</sup> library APIs, spreadsheet editor patterns, and platform-specific configuration for **[React Spreadsheet Editor](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/overview)**, **[Angular Spreadsheet Editor](https://help.syncfusion.com/document-processing/excel/spreadsheet/angular/overview)**, **[Blazor Spreadsheet Editor](https://help.syncfusion.com/document-processing/excel/spreadsheet/blazor/overview)**, **[ASP.NET Core Spreadsheet Editor](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-core/overview)**, **[TypeScript Spreadsheet Editor](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/overview)**, and **[Vue Spreadsheet Editor](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/overview)**.

## Installation

Choose one of the following commands to install [Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Skills](https://github.com/syncfusion/spreadsheet-editor-sdk-skills) based on your preference. Users can also explore Syncfusion<sup style="font-size:70%">&reg;</sup> skills from the [marketplace](https://skills.sh/syncfusion/).

```bash
# Install all spreadsheet editor SDK skills at once
npx skills add syncfusion/spreadsheet-editor-sdk-skills -y

# Choose and install skills interactively from the terminal
npx skills add syncfusion/spreadsheet-editor-sdk-skills
```

This registers the Syncfusion<sup style="font-size:70%">&reg;</sup> skill pack so your AI assistant can automatically load it in supported IDEs such as [Code Studio](https://help.syncfusion.com/code-studio/reference/configure-properties/skills), [Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills), and [Cursor](https://cursor.com/docs/skills).

To learn more about the Skills CLI, refer [here](https://skills.sh/docs).

## What's Included

1. **Spreadsheet Editor & API Knowledge** — Curated, skill-based guidance that captures how to create, edit, and manage spreadsheet operations using Syncfusion<sup style="font-size:70%">&reg;</sup> platform-specific libraries (React, Angular, Blazor, ASP.NET Core, TypeScript, Vue), including key APIs, supported features, and common usage patterns.
2. **Platform-Specific Code Generation** — Each skill supports generating production-ready platform-specific code for your project. The assistant automatically detects the project type and provides code snippets that can be inserted directly into your application files (e.g., `Program.cs`, `Home.razor`, `app.ts`).
3. **Patterns & Best Practices** — Practical recommendations for API usage, platform-specific package selection, and spreadsheet editor workflows (for example, cell formatting, data binding, formula calculation, chart creation, and worksheet protection). All guidance is authored directly within the Skill file rather than being fetched from documentation.

## How Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Agent Skills Work

1. **Reads the relevant Skill files based on the user's query**, with the assistant retrieving library APIs, code patterns, and best-practice guidance from the installed Syncfusion<sup style="font-size:70%">&reg;</sup> Skills, and automatically chooses the appropriate platform based on the detected project type.
2. **Enforces Syncfusion<sup style="font-size:70%">&reg;</sup> best practices**, including:
   - Suggesting the correct NuGet packages or npm packages based on the detected application type.
   - Using only APIs and code patterns explicitly present in the skill reference files.
   - Configuring the Syncfusion<sup style="font-size:70%">&reg;</sup> license key from `SyncfusionLicense.txt` or the `SYNCFUSION_LICENSE_KEY` environment variable.
3. **Generates platform-specific code** based on the user's intent:
   - Produces production-ready React, Angular, Blazor, ASP.NET Core, TypeScript, or Vue code and inserts it into the user's project files.
   - Triggered by keywords such as `"create"`, `"add"`, `"insert"`, `"apply"`, `"code"`, `"snippet"`, `"how to"`, `"show me"`, `"sample"`, or `"example"`.

### Using the AI Assistant

Once skills are installed, the assistant can be used to generate and update Syncfusion<sup style="font-size:70%">&reg;</sup> spreadsheet editor code for tasks such as:

- "Create a spreadsheet with customer data and apply bold formatting to the header row."
- "Add a column chart to visualize sales data by region."
- "Apply conditional formatting to highlight cells with values greater than $15,000 in green."
- "Protect Sheet1 and allow editing only in the first and last columns."
- "Show me how to wrap text in the Customer Name column and apply currency format to the Amount column."

## See also

- [Syncfusion Spreadsheet Editor SDK Documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/overview)
- [Agent Skills Standards](https://agentskills.io/home)
- [Skills CLI](https://skills.sh/docs)