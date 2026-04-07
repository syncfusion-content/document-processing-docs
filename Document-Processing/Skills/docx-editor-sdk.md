---
title: Syncfusion DOCX Editor SDK Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion DOCX Editor Agent Skills to help AI assistants generate accurate DOCX Editor code with DOCX Editor SDK libraries
platform: document-processing
control: DOCX Editor SDK
documentation: ug
keywords: Skills, AI Assistants, DOCX Editor SDK, Agent Skills
---

# Syncfusion DOCX Editor SDK Agent Skills for AI Assistants

This guide introduces **Syncfusion DOCX Editor SDK Skills**, a knowledge package that enables AI assistants (GitHub Copilot, Code Studio, Cursor, Claude, etc.) to understand and generate accurate docx editor code using Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor SDK libraries. It also supports executing document editor operations directly via platform-specific scripts.

Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor SDK Skills eliminate common issues with generic AI suggestions by grounding the assistant in accurate Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor SDK library APIs, supported features, and platform-specific configuration for the following platforms:


| Framework  | Skills |
|---|---|
| [React](https://help.syncfusion.com/document-processing/word/word-processor/react/overview) | [syncfusion-react-docx-editor](https://github.com/syncfusion/docx-editor-sdk-skills/tree/master/skills/syncfusion-react-docx-editor) |
| [Angular](https://help.syncfusion.com/document-processing/word/word-processor/angular/overview) | [syncfusion-angular-docx-editor](https://github.com/syncfusion/docx-editor-sdk-skills/tree/master/skills/syncfusion-angular-docx-editor) |
| [Blazor](https://help.syncfusion.com/document-processing/word/word-processor/blazor/overview) | [syncfusion-blazor-docx-editor](https://github.com/syncfusion/docx-editor-sdk-skills/tree/master/skills/syncfusion-blazor-docx-editor) |
| [ASP.NET Core](https://help.syncfusion.com/document-processing/word/word-processor/asp-net-core/overview) | [syncfusion-aspnetcore-docx-editor](https://github.com/syncfusion/docx-editor-sdk-skills/tree/master/skills/syncfusion-aspnetcore-docx-editor) |
| [ASP.NET MVC](https://help.syncfusion.com/document-processing/word/word-processor/asp-net-mvc/overview) | [syncfusion-aspnetmvc-docx-editor](https://github.com/syncfusion/docx-editor-sdk-skills/tree/master/skills/syncfusion-aspnetmvc-docx-editor) |
| [TypeScript](https://help.syncfusion.com/document-processing/word/word-processor/javascript-es6/overview) | [syncfusion-javascript-docx-editor](https://github.com/syncfusion/docx-editor-sdk-skills/tree/master/skills/syncfusion-javascript-docx-editor) |
| [Vue](https://help.syncfusion.com/document-processing/word/word-processor/vue/overview) | [syncfusion-vue-docx-editor](https://github.com/syncfusion/docx-editor-sdk-skills/tree/master/skills/syncfusion-vue-docx-editor) |
| [UWP](https://help.syncfusion.com/document-processing/word/word-processor/uwp/overview) | [syncfusion-uwp-docx-editor](https://github.com/syncfusion/docx-editor-sdk-skills/tree/master/skills/syncfusion-uwp-docx-editor) |
| [WPF](https://help.syncfusion.com/document-processing/word/word-processor/wpf/overview) | [syncfusion-wpf-docx-editor](https://github.com/syncfusion/docx-editor-sdk-skills/tree/master/skills/syncfusion-wpf-docx-editor) |

## Prerequisites

Before installing Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor SDK Skills, ensure the following tools are available on your machine:

- **[Node.js](https://nodejs.org/en)** (v18 or later) — Required to run `npx` commands for installing skills.
- A supported AI agent or IDE that integrates with the Skills CLI (VS Code, Syncfusion® Code Studio, Cursor, etc.)

## Installation

Use one of the following commands to install [Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor SDK Skills](https://github.com/syncfusion/docx-editor-sdk-skills). You can also browse Syncfusion<sup style="font-size:70%">&reg;</sup> skills in the [marketplace](https://skills.sh/syncfusion/).

To install all DOCX Editor SDK skills at once, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/docx-editor-sdk-skills -y

{% endhighlight %}
{% endtabs %}

To install a specific platform skill, use the following command (for example, to install DOCX editor Blazor skills):

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/docx-editor-sdk-skills --skill syncfusion-blazor-docx-editor

{% endhighlight %}
{% endtabs %}

Choose and install skills interactively from the terminal:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/docx-editor-sdk-skills

{% endhighlight %}
{% endtabs %}

The terminal will show a list of available skills. Use the arrow keys to navigate, space bar to select the skills you want, and Enter to confirm.

{% tabs %}
{% highlight bash tabtitle="npm" %}

Select skills to install (space to toggle)
│  ◻ syncfusion-react-docx-editor
│  ◻ syncfusion-angular-docx-editor
│  ◻ syncfusion-blazor-docx-editor
│  ◻ syncfusion-aspnetcore-docx-editor
│  ◻ syncfusion-aspnetmvc-docx-editor
│  ◻ syncfusion-javascript-docx-editor
│  ◻ syncfusion-vue-docx-editor
│  ◻ syncfusion-uwp-docx-editor
│  ◻ syncfusion-wpf-docx-editor
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

## How Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor SDK Agent Skills Work

1. **Read the relevant skill files and choose modes based on the user's query** - The assistant retrieves component APIs and code patterns from the installed Syncfusion<sup style="font-size:70%">&reg;</sup> Skills, automatically selecting the appropriate platform based on your workspace or prompt.
2. **Enforces Syncfusion<sup style="font-size:70%">&reg;</sup> best practices** including:
   - Suggesting the correct NuGet packages or npm packages based on the detected application type.
   - Using only APIs and code patterns explicitly present in the skill reference files.
   - Configuring the Syncfusion<sup style="font-size:70%">&reg;</sup> license key from `SyncfusionLicense.txt` or the `SYNCFUSION_LICENSE_KEY` environment variable.
3. **Generates platform-specific code** based on the user's intent:
   - Produces production-ready React, Angular, Blazor, ASP.NET Core, TypeScript, or Vue code and inserts it into the user's project files.
   - Triggered by keywords such as `"create"`, `"add"`, `"insert"`, `"apply"`, `"code"`, `"snippet"`, `"how to"`, `"show me"`, `"sample"`, or `"example"`.

## Using the AI Assistant

Once skills are installed, the assistant can generate docx editor code. Below are some example prompts.

**Example Prompts:**

- "Create a DOCX Editor and enable track changes"
- "How to protect documents with comments only restriction in ASP.NET Core DOCX editor?"
- "How to enable spell checking in DOCX editor?"
- "How to search for text and replace it in React DOCX editor?"

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

Replace `<skill-name>` with the name of the skill you want to remove (for example, `syncfusion-blazor-docx-editor`).

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

- [Syncfusion DOCX Editor Documentation](https://help.syncfusion.com/document-processing/word/word-processor/overview)
- [Agent Skills Standards](https://agentskills.io/home)
- [SKills CLI](https://skills.sh/docs)

