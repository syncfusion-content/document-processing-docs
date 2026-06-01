---
title: Syncfusion PDF Viewer SDK Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion PDF Viewer SDK Agent Skills to help AI assistants generate accurate PDF Viewer code using PDF Viewer SDK libraries
platform: document-processing
control: PDF Viewer SDK
documentation: ug
keywords: Skills, AI Assistants, PdfViewer SDK, Agent Skills
---

# Syncfusion PDF Viewer SDK Agent Skills for AI Assistants

This guide introduces **Syncfusion PDF Viewer SDK Skills**, a curated skill package that enables AI assistants (GitHub Copilot, Code Studio, Cursor, Claude, etc.) to generate accurate, production ready PDF Viewer integration code using the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer components across supported platforms. 

Unlike generic AI suggestions, these skills ground the assistant in official Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer APIs, configuration patterns, and platform specific setup details—ensuring correct usage, faster Onboarding, and fewer integration issues.

## Supported Platforms 

Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer SDK Agent Skills provide guidance for the following platforms: 

| Framework | Skills |
|---|---|
| [Blazor](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/overview) | [syncfusion-blazor-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-blazor-pdf-viewer)<br/>[syncfusion-blazor-smart-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-blazor-smart-pdf-viewer) |
| [ASP.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/overview) | [syncfusion-aspnetcore-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-aspnetcore-pdf-viewer) |
| [ASP.NET MVC](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/overview) | [syncfusion-aspnetmvc-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-aspnetmvc-pdf-viewer) |
| [Angular](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/overview) | [syncfusion-angular-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-angular-pdf-viewer) |
| [React](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/overview) | [syncfusion-react-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-react-pdf-viewer) |
| [Vue](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/overview) | [syncfusion-vue-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-vue-pdf-viewer) |
| [JavaScript (ES6)](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/overview) | [syncfusion-javascript-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-javascript-pdf-viewer) |
| [.NET MAUI](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/overview) | [syncfusion-maui-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-maui-pdf-viewer) |
| [UWP](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/overview) | [syncfusion-uwp-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-uwp-pdf-viewer) |
| [WinForms](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/winforms/overview) | [syncfusion-winforms-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-winforms-pdf-viewer) |
| [WPF](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/wpf/overview) | [syncfusion-wpf-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-wpf-pdf-viewer) |
| [Flutter](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/flutter/overview) | [syncfusion-flutter-pdf-viewer](https://github.com/syncfusion/pdf-viewer-sdk-skills/tree/master/skills/syncfusion-flutter-pdf-viewer) |

Each platform’s skill file includes component initialization, property configuration, event handling, and common usage patterns specific to that framework. 

## Prerequisites 

Before installing Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer SDK Skills, ensure the following: 

- **[Node.js]("https://nodejs.org/")** (v18 or later) — Required to run `npx` commands for installing skills.
- A supported AI agent or IDE that integrates with the Skills CLI (VS Code, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio, Cursor, etc.)

## Installation

Choose one of the following commands to install the [Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer SDK Skills](https://github.com/syncfusion/pdf-viewer-sdk-skills).

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/pdf-viewer-sdk-skills --all -y

{% endhighlight %}
{% endtabs %}

To install a specific skill, use the following command (for example, to install React PDF Viewer skills):

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/pdf-viewer-sdk-skills --skill syncfusion-react-pdf-viewer

{% endhighlight %}
{% endtabs %}

Choose and install skills interactively from the terminal:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/pdf-viewer-sdk-skills

{% endhighlight %}
{% endtabs %}

The terminal will show a list of available skills. Use the arrow keys to navigate, space bar to select the skills you want, and Enter to confirm.

{% tabs %}
{% highlight bash tabtitle="npm" %}

Select skills to install (space to toggle)
│  ◻ syncfusion-blazor-pdf-viewer
│  ◻ syncfusion-aspnetcore-pdf-viewer
│  ◻ syncfusion-aspnetmvc-pdf-viewer
│  ◻ syncfusion-angular-pdf-viewer
│  ◻ syncfusion-react-pdf-viewer
│  ◻ syncfusion-vue-pdf-viewer
│  ◻ syncfusion-javascript-pdf-viewer
│  ◻ syncfusion-maui-pdf-viewer
│  ◻ syncfusion-uwp-pdf-viewer
│  ◻ syncfusion-winforms-pdf-viewer
│  ◻ syncfusion-wpf-pdf-viewer
│  ◻ syncfusion-flutter-pdf-viewer
│  ◻ syncfusion-blazor-smart-pdf-viewer
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

## How Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer SDK Agent Skills Work 

1. **Read the relevant skill files and choose modes based on the user's query** The assistant retrieves library APIs, and code patterns from the installed Syncfusion<sup style="font-size:70%">&reg;</sup> Skills. It automatically chooses the appropriate operating mode based on the provided prompt.

2. **Platform-Specific Code Generation** — Generates production-ready code tailored to your platform without executing scripts or modifying your project structure. No files are generated on disk.

3. **Register licensing key** Configuring the Syncfusion<sup style="font-size:70%">&reg;</sup> license key from `SyncfusionLicense.txt` or the `SYNCFUSION_LICENSE_KEY` environment variable.

### Using the AI Assistant

Once skills are installed, the assistant can generate Syncfusion<sup style="font-size:70%">&reg;</sup> pdf viewer code. Below are example prompts for each mode.

## Skills CLI Commands

After installation, manage Syncfusion<sup style="font-size:70%">&reg;</sup> Agent Skills using the following commands:

## Example Prompts  

- “Show me how to load a PDF file in Syncfusion PDF Viewer for React.” 
- “Give an example of enabling text search in Blazor PDF Viewer.” 
- “How do I add annotation support in WPF Syncfusion PDF Viewer?” 
- “Provide sample code to customize the toolbar in MAUI PDF Viewer.” 
- “Show how to load a PDF from a URL in Flutter PDF Viewer.” 
- “How to navigate to a specific page in Winforms PdfViewer?” 

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

Replace `<skill-name>` with the name of the skill you want to remove (for example, `syncfusion-react-pdf-viewer`).

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

## See Also 

- [Syncfusion PDF Viewer Documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/overview)
- [Skills CLI Documentation](https://skills.sh/docs)
- [Agent Skills Standards](https://agentskills.io/home)