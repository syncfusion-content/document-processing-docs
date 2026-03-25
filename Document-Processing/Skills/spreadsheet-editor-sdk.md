---
title: Spreadsheet Editor SDK Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion Spreadsheet Editor SDK Agent Skills to help AI assistants generate accurate code with Syncfusion Spreadsheet components
platform: document-processing
control: Spreadsheet Editor SDK
documentation: ug
keywords: Skills, AI Assistants, Spreadsheet Editor SDK, Agent Skills
---

# Syncfusion Spreadsheet Editor SDK Agent Skills for AI Assistants

This guide introduces **Syncfusion Spreadsheet Editor SDK Skills**, a curated knowledge package that empowers AI assistants (such as GitHub Copilot, Code Studio, Cursor, Claude, and others) to generate accurate code for Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK components across supported platforms. 

Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Skills address common issues with generic AI code suggestions by grounding the assistant in precise Spreadsheet Editor SDK Component APIs, spreadsheet editor patterns, and platform-specific configuration for the following platforms:

| Framework | Skills |
|---|---|
| [React](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/overview) | syncfusion-react-spreadsheet-editor |
| [Angular](https://help.syncfusion.com/document-processing/excel/spreadsheet/angular/overview) | syncfusion-angular-spreadsheet-editor |
| [Blazor](https://help.syncfusion.com/document-processing/excel/spreadsheet/blazor/overview) | syncfusion-blazor-spreadsheet-editor |
| [ASP.NET Core](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-core/overview) | syncfusion-aspnetcore-spreadsheet-editor |
| [ASP.NET MVC](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-mvc/overview) | syncfusion-aspnetmvc-spreadsheet-editor |
| [TypeScript](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/overview) | syncfusion-javascript-spreadsheet-editor |
| [Vue](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/overview) | syncfusion-vue-spreadsheet-editor |

Each platform's skill file includes component initialization, property configuration, event handling, cell operations, formatting, data binding, and common spreadsheet usage patterns specific to that framework.

## Prerequisites

Before installing Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Skills, ensure the following tools are available on your machine:

- **[Node.js](https://nodejs.org/en)** (v18 or later) — Required to run `npx` commands for installing skills.

## Installation

Use one of the following commands to install Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Skills. You can also browse Syncfusion<sup style="font-size:70%">&reg;</sup> skills in the [marketplace](https://skills.sh/syncfusion/).

```bash
# Install all spreadsheet editor SDK skills at once
npx skills add syncfusion/spreadsheet-editor-sdk-skills -y

# Choose and install skills interactively from the terminal
npx skills add syncfusion/spreadsheet-editor-sdk-skills
```

This registers the Syncfusion<sup style="font-size:70%">&reg;</sup> skill pack, enabling your AI assistant to load it automatically in supported IDEs such as [Code Studio](https://help.syncfusion.com/code-studio/reference/configure-properties/skills), [Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills), and [Cursor](https://cursor.com/docs/skills).

For more details, see the [Skills CLI documentation](https://skills.sh/docs).

## What's Included

1. **Spreadsheet Editor SDK API Knowledge** — Skill-based, curated guidance for creating, editing, and managing spreadsheets using Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK UI Components across supported platforms. Covers key APIs, component integration, cell operations, formatting, data binding, and import/export features.
2. **Platform-Specific Code Generation** — Produces production-ready code tailored to your platform (React, Angular, Blazor, ASP.NET Core, ASP.NET MVC, TypeScript, or Vue) without executing scripts or altering your project structure.
3. **Patterns & Best Practices** — Practical recommendations for API usage, platform-specific package selection, component configuration, and spreadsheet editor workflows (such as cell styling, conditional formatting, data validation, chart creation, formula calculation, and protection settings). All guidance is authored directly within the skill files, not fetched from external documentation.

## How Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Agent Skills Work

1. **Reads relevant skill files based on your query.** The assistant retrieves component APIs and code patterns from the installed Syncfusion<sup style="font-size:70%">&reg;</sup> Skills, automatically selecting the appropriate platform based on your workspace or prompt.
2. **Enforces Syncfusion<sup style="font-size:70%">&reg;</sup> best practices**, including:
   - Recommending the correct npm or NuGet packages for your platform.
   - Using only APIs and code patterns explicitly present in the skill reference files.
3. **Generates code only** — Spreadsheet Editor skills focus exclusively on generating production-ready code that can be integrated directly into your application files (for example, `Home.razor`, `app.component.ts`, or `Program.cs`).

## Using the AI Assistant

Once skills are installed, the assistant can generate spreadsheet editor code. Below are some example prompts.

**Example Prompts:**

- "Show me React code to create a Spreadsheet component with basic formatting options."
- "How to apply conditional formatting to highlight cells greater than $15,000 in Angular Spreadsheet Editor?"
- "Give me a code snippet to protect a worksheet and allow editing only specific cells using Blazor Spreadsheet Editor."
- "Show me how to insert a chart into the Spreadsheet Editor using ASP.NET Core."
- "How to export the spreadsheet as PDF using Vue Spreadsheet Editor?"
- "Show me code to apply number formatting to currency columns in React Spreadsheet Editor."
- "How do I enable cell editing and data validation in Angular Spreadsheet Editor?"

## See also

- [Syncfusion Spreadsheet Editor Documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/overview)
- [Agent Skills Standards](https://agentskills.io/home)
- [Skills CLI](https://skills.sh/docs)
