---
title: Syncfusion Document SDK Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion Document SDK Agent Skills to help AI assistants generate accurate document processing code with Document SDK libraries
platform: document-processing
control: Document SDK
documentation: ug
keywords: Skills, AI Assistants, Document SDK, Agent Skills
---

# Syncfusion Document SDK Agent Skills for AI Assistants

This guide introduces **Syncfusion Document SDK Skills**, a knowledge package that enables AI assistants (GitHub Copilot, Code Studio, Cursor, Claude, etc.) to understand and generate accurate document processing code using Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK libraries. It also supports executing document operations directly via CSX scripts.

Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK Skills eliminate common issues with generic AI suggestions by grounding the assistant in accurate Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK library APIs, document processing patterns, and platform-specific configuration for the following libraries:

<table>
  <thead>
    <tr>
      <th>Document Processing Libraries</th>
      <th>Skills</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://help.syncfusion.com/document-processing/word/word-library/overview">Word (DocIO)</a></td>
      <td>
        <a href="https://github.com/syncfusion/document-sdk-skills/tree/master/skills/syncfusion-dotnet-word">syncfusion-dotnet-word</a><br>
        <a href="https://github.com/syncfusion/document-sdk-skills/tree/master/skills/syncfusion-java-word">syncfusion-java-word</a>
      </td>
    </tr>
    <tr>
      <td><a href="https://help.syncfusion.com/document-processing/pdf/pdf-library/overview">PDF</a></td>
      <td>
        <a href="https://github.com/syncfusion/document-sdk-skills/tree/master/skills/syncfusion-dotnet-pdf">syncfusion-dotnet-pdf</a><br>
        <a href="https://github.com/syncfusion/document-sdk-skills/tree/master/skills/syncfusion-dotnet-pdf-to-image">syncfusion-dotnet-pdf-to-image</a><br>
        <a href="https://github.com/syncfusion/document-sdk-skills/tree/master/skills/syncfusion-flutter-pdf">syncfusion-flutter-pdf</a><br>
        <a href="https://github.com/syncfusion/document-sdk-skills/tree/master/skills/syncfusion-javascript-pdf">syncfusion-javascript-pdf</a>
      </td>
    </tr>
    <tr>
      <td><a href="https://help.syncfusion.com/document-processing/excel/excel-library/overview">Excel (XlsIO)</a></td>
      <td>
        <a href="https://github.com/syncfusion/document-sdk-skills/tree/master/skills/syncfusion-dotnet-excel">syncfusion-dotnet-excel</a><br>
        <a href="https://github.com/syncfusion/document-sdk-skills/tree/master/skills/syncfusion-flutter-excel">syncfusion-flutter-excel</a>
      </td>
    </tr>
    <tr>
      <td><a href="https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/overview">PowerPoint (Presentation)</a></td>
      <td><a href="https://github.com/syncfusion/document-sdk-skills/tree/master/skills/syncfusion-dotnet-powerpoint">syncfusion-dotnet-powerpoint</a></td>
    </tr>
    <tr>
      <td><a href="https://help.syncfusion.com/document-processing/word/word-library/net/convert-markdown-to-word-document-in-csharp">Markdown</a></td>
      <td><a href="https://github.com/syncfusion/document-sdk-skills/tree/master/skills/syncfusion-dotnet-markdown">syncfusion-dotnet-markdown</a></td>
    </tr>
    <tr>
      <td><a href="https://help.syncfusion.com/document-processing/data-extraction/overview">Smart Data Extraction</a></td>
      <td><a href="https://github.com/syncfusion/document-sdk-skills/tree/master/skills/syncfusion-dotnet-smart-data-extraction">syncfusion-dotnet-smart-data-extraction</a></td>
    </tr>
    <tr>
      <td><a href="https://help.syncfusion.com/windowsforms/calculation-engine/overview">Calculate</a></td>
      <td><a href="https://github.com/syncfusion/document-sdk-skills/tree/master/skills/syncfusion-dotnet-calculate">syncfusion-dotnet-calculate</a></td>
    </tr>
  </tbody>
</table>

## Prerequisites

Before installing Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK Skills, ensure the following tools are available on your machine:

- **[Node.js](https://nodejs.org/en)** (v18 or later) — Required to run `npx` commands for installing skills.
- **[.NET SDK](https://dotnet.microsoft.com/en-us/download)** (8.0 or later) — Required for CSX script execution (Mode 2).
- **[dotnet-script](https://github.com/dotnet-script/dotnet-script)** — Required for CSX script execution (Mode 2). Install it globally by running: `dotnet tool install -g dotnet-script`.
- A supported AI agent or IDE that integrates with the Skills CLI (VS Code, Syncfusion® Code Studio, Cursor, etc.)

## Installation

Use one of the following commands to install [Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK Skills](https://github.com/syncfusion/document-sdk-skills) based on your preference. You can also explore Syncfusion<sup style="font-size:70%">&reg;</sup> skills from the [marketplace](https://skills.sh/syncfusion/).

To install all document SDK skills at once, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/document-sdk-skills -y

{% endhighlight %}
{% endtabs %}

To install a specific skill, use the following command (for example, to install PDF .NET skills):

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/document-sdk-skills --skill syncfusion-dotnet-pdf

{% endhighlight %}
{% endtabs %}

Choose and install skills interactively from the terminal:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/document-sdk-skills

{% endhighlight %}
{% endtabs %}

The terminal will show a list of available skills. Use the arrow keys to navigate, space bar to select the skills you want, and Enter to confirm.

{% tabs %}
{% highlight bash tabtitle="npm" %}

Select skills to install (space to toggle)
│  ◻ syncfusion-dotnet-pdf
│  ◻ syncfusion-dotnet-word
│  ◻ syncfusion-dotnet-excel
│  ◻ syncfusion-dotnet-powerpoint
│  ◻ syncfusion-dotnet-markdown
│  ◻ syncfusion-dotnet-smart-data-extraction
│  ◻ syncfusion-dotnet-calculate
│  ◻ syncfusion-java-word
│  ◻ syncfusion-flutter-pdf
│  ◻ syncfusion-javascript-pdf
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

## How Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK Agent Skills Work
 
1. **Read the relevant skill files and choose modes based on the user's query** The assistant retrieves library APIs, and code patterns from the installed Syncfusion<sup style="font-size:70%">&reg;</sup> Skills. It automatically chooses the appropriate operating mode based on the provided prompt.
 
2. **Operates in two modes** based on the user's intent:
   - **Mode 1 — Generate Code**:

       - Triggered when the prompt includes keywords such as `"code"`, `"snippet"`, `"how to"`, `"show me"`, `"sample"`, or `"example"`.
       - Detects the application type and recommends the required NuGet packages.
       - Generates production-ready code by referencing the appropriate `references/*.md` files for the requested functionalities.
   - **Mode 2 — Execute via CSX Script**:
   
       - Triggered when the prompt includes keywords such as `"create"`, `"generate"`, `"make"`, `"open"`, `"edit"`, `"modify"`, or when a file path is provided (e.g., `output/report.docx`).
       - Creates a temporary `.csx` script by inserting the appropriate code snippet from the relevant `references/*.md` files.
       - Executes the script using dotnet script and generates the output document.
       - Performs cleanup by deleting the temporary `.csx` script.
 
3. **Register licensing key** Configuring the Syncfusion<sup style="font-size:70%">&reg;</sup> license key from `SyncfusionLicense.txt` file at workspace root folder or the `SYNCFUSION_LICENSE_KEY` environment variable.

### Using the AI Assistant

Once skills are installed, the assistant can generate Syncfusion<sup style="font-size:70%">&reg;</sup> document processing code or execute document generation tasks. Below are example prompts for each mode.

**Generate Code (Mode 1):**

- "How do I add a digital signature to a PDF?"
- "Give me a code snippet to create an Excel workbook with a pivot table using XlsIO."
- "Show me DocIO code to create a Word document with a title and a paragraph."
- "Generate a C# snippet to add a table to a PowerPoint slide."
- "Show me code to extract all fields and tables from a PDF as JSON using Smart Data Extraction."
- "Show me how to parse and compute formulas using CalcQuickBase"

**Execute Task (Mode 2):**

- "Create a PDF report with a title page and inventory table, save to output/report.pdf."
- "Create a sales summary workbook and save it to output/sales.xlsx."
- "Create a Word document about the top 5 programming languages in 2025."
- "Create a 5-slide meeting agenda presentation and save it to output/agenda.pptx."
- "Extract data from the PDF at Input/invoice.pdf using Smart Data Extraction and save to output/data.json."

## Skills CLI Commands

After installation, manage Syncfusion<sup style="font-size:70%">&reg;</sup> Agent Skills using the following commands:

### List Skills

View all installed skills in your current project or global environment:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills list

{% endhighlight %}
{% endtabs %}

> **Note:** If you installed Syncfusion skills globally, add the `--global` flag at the end of the command (for example, `npx skills list --global`, `npx skills remove <skill-name> --global` ).

### Remove a Skill

Uninstall a specific skill from your environment:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills remove <skill-name>

{% endhighlight %}
{% endtabs %}

Replace `<skill-name>` with the name of the skill you want to remove (for example, `syncfusion-dotnet-pdf`).

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

- [Syncfusion Document SDK Documentation](https://help.syncfusion.com/document-processing/introduction)
- [Agent Skills Standards](https://agentskills.io/home)
- [Skills CLI](https://skills.sh/docs)

