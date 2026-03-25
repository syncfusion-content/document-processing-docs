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
| [React](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/overview) | [syncfusion-react-spreadsheet-editor](https://github.com/syncfusion/spreadsheet-editor-sdk-skills/tree/main/skills/syncfusion-react-spreadsheet-editor) |
| [Angular](https://help.syncfusion.com/document-processing/excel/spreadsheet/angular/overview) | [syncfusion-angular-spreadsheet-editor](https://github.com/syncfusion/spreadsheet-editor-sdk-skills/tree/main/skills/syncfusion-angular-spreadsheet-editor) |
| [Blazor](https://help.syncfusion.com/document-processing/excel/spreadsheet/blazor/overview) | [syncfusion-blazor-spreadsheet-editor](https://github.com/syncfusion/spreadsheet-editor-sdk-skills/tree/main/skills/syncfusion-blazor-spreadsheet-editor) |
| [ASP.NET Core](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-core/overview) | [syncfusion-aspnetcore-spreadsheet-editor](https://github.com/syncfusion/spreadsheet-editor-sdk-skills/tree/main/skills/syncfusion-aspnetcore-spreadsheet-editor) |
| [ASP.NET MVC](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-mvc/overview) | [syncfusion-aspnetmvc-spreadsheet-editor](https://github.com/syncfusion/spreadsheet-editor-sdk-skills/tree/main/skills/syncfusion-aspnetmvc-spreadsheet-editor) |
| [TypeScript](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/overview) | [syncfusion-javascript-spreadsheet-editor](https://github.com/syncfusion/spreadsheet-editor-sdk-skills/tree/main/skills/syncfusion-javascript-spreadsheet-editor) |
| [Vue](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/overview) | [syncfusion-vue-spreadsheet-editor](https://github.com/syncfusion/spreadsheet-editor-sdk-skills/tree/main/skills/syncfusion-vue-spreadsheet-editor) |

## Prerequisites

Before installing Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Skills, ensure the following tools are available on your machine:

- **[Node.js](https://nodejs.org/en)** (v18 or later) — Required to run `npx` commands for installing skills.
- A supported AI agent or IDE that integrates with the Skills CLI (VS Code, Syncfusion® Code Studio, Cursor, etc.)

## Installation

Use one of the following commands to install [Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Skills](https://github.com/syncfusion/spreadsheet-editor-sdk-skills). You can also browse Syncfusion<sup style="font-size:70%">&reg;</sup> skills in the [marketplace](https://skills.sh/syncfusion/).

To install all Spreadsheet Editor SDK skills at once, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/spreadsheet-editor-sdk-skills -y

{% endhighlight %}
{% endtabs %}

To install a specific platform skill, use the following command (for example, to install Spreadsheet Blazor skills):

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/spreadsheet-editor-sdk-skills --skill syncfusion-blazor-spreadsheet-editor

{% endhighlight %}
{% endtabs %}

Choose and install skills interactively from the terminal:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/spreadsheet-editor-sdk-skills

{% endhighlight %}
{% endtabs %}

The terminal will show a list of available skills. Use the arrow keys to navigate, space bar to select the skills you want, and Enter to confirm.

{% tabs %}
{% highlight bash tabtitle="npm" %}

Select skills to install (space to toggle)
│  ◻ syncfusion-react-spreadsheet-editor
│  ◻ ssyncfusion-angular-spreadsheet-editor
│  ◻ syncfusion-blazor-spreadsheet-editor
│  ◻ syncfusion-aspnetcore-spreadsheet-editor
│  ◻ ssyncfusion-aspnetmvc-spreadsheet-editor
│  ◻ syncfusion-javascript-spreadsheet-editor
│  ◻ syncfusion-vue-spreadsheet-editor
│  .....

{% endhighlight %}
{% endtabs %}

Next, select which AI agent you're using and where to store the skills.
{% tabs %}
{% highlight bash tabtitle="npm" %}

│  ── Additional agents ─────────────────────────────
│  Search:  
│  ↑↓ move, space select, enter confirm
│
│ ❯ ○ Augment (.augment/skills)
│   ○ Claude Code (.claude/skills)
│   ○ OpenClaw (skills)
│   ○ CodeBuddy (.codebuddy/skills)
│   ○ Command Code (.commandcode/skills)
│   ○ Continue (.continue/skills)
│   ○ Cortex Code (.cortex/skills)
│   ○ Crush (.crush/skills)
|   ....

{% endhighlight %}
{% endtabs %}

Choose your installation scope (project-level or global), then confirm to complete the installation.

{% tabs %}
{% highlight bash tabtitle="npm" %}

◆  Installation scope
│  ● Project (Install in current directory (committed with your project))
│  ○ Global

◆  Proceed with installation?
│  ● Yes / ○ No

{% endhighlight %}
{% endtabs %}

This registers the Syncfusion<sup style="font-size:70%">&reg;</sup> skill pack so your AI assistant can automatically load it in supported IDEs such as [Code Studio](https://help.syncfusion.com/code-studio/reference/configure-properties/skills), [Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills), and [Cursor](https://cursor.com/docs/skills).

To learn more about the Skills CLI, refer [here](https://skills.sh/docs).

## How Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet Editor SDK Agent Skills Work

1. **Read the relevant skill files and choose modes based on the user's query** - The assistant retrieves component APIs and code patterns from the installed Syncfusion<sup style="font-size:70%">&reg;</sup> Skills, automatically selecting the appropriate platform based on your workspace or prompt.
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

## Skills CLI Commands

After installation, manage Syncfusion<sup style="font-size:70%">&reg;</sup> Agent Skills using the following commands:

### List Skills

View all installed skills in your current project or global environment:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills list

{% endhighlight %}
{% endtabs %}

### Remove a Skill

Uninstall a specific skill from your environment:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills remove <skill-name>

{% endhighlight %}
{% endtabs %}

Replace `<skill-name>` with the name of the skill you want to remove (for example, `syncfusion-blazor-spreadsheet-editor`).

### Check for Updates

Check if updates are available for your installed skills:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills check

{% endhighlight %}
{% endtabs %}

### Update All Skills

Update all installed skills to their latest versions:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills update

{% endhighlight %}
{% endtabs %} 

## FAQ

**Which agents and IDEs are supported?**

Any Skills compatible agent or IDE that loads local skill files (Visual Studio Code, Cursor, CodeStudio, etc.).

**Are skills loaded automatically?**

Yes. Once installed, supported agents automatically detect and load relevant skills for Syncfusion‑related queries without requiring additional configuration.

**Skills are not being loaded**

Verify that skills are installed in the correct agent directory, restart the IDE, and confirm that the agent supports external skill files.

## See also

- [Syncfusion Spreadsheet Editor Documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/overview)
- [Agent Skills Standards](https://agentskills.io/home)
- [Skills CLI](https://skills.sh/docs)
