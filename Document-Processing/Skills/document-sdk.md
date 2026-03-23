---
title: Syncfusion Document SDK Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion Document SDK Agent Skills to enable AI assistants to generate accurate document processing code using Syncfusion Document SDK libraries.
platform: document-processing
control: Document SDK
documentation: ug
keywords: Skills, AI Assistants, Document SDK, Agent Skills
---

# Syncfusion Document SDK Agent Skills for AI Assistants

This guide introduces **Syncfusion Document SDK Skills**, a knowledge package that enables AI assistants (GitHub Copilot, Code Studio, Cursor, Claude, etc.) to understand and generate accurate document processing code using Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK libraries. It also supports executing document operations directly via CSX scripts.

Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK Skills eliminate common issues with generic AI suggestions by grounding the assistant in accurate Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK library APIs, document processing patterns, and platform-specific configuration for the following libraries:

| Document Processing Libraries | Skills |
|---|---|
| [Word (DocIO)](https://help.syncfusion.com/document-processing/word/overview) | [syncfusion-dotnet-word](https://github.com/syncfusion/document-sdk-skills/tree/main/skills/syncfusion-dotnet-word) <br> [syncfusion-java-word](https://github.com/syncfusion/document-sdk-skills/tree/main/skills/syncfusion-java-word) |
| [PDF](https://help.syncfusion.com/document-processing/pdf/overview) | [syncfusion-dotnet-pdf](https://github.com/syncfusion/document-sdk-skills/tree/main/skills/syncfusion-dotnet-pdf) <br> [syncfusion-dotnet-pdf-to-image](https://github.com/syncfusion/document-sdk-skills/tree/main/skills/syncfusion-dotnet-pdf-to-image) <br> [syncfusion-flutter-pdf](https://github.com/syncfusion/document-sdk-skills/tree/main/skills/syncfusion-flutter-pdf) <br> [syncfusion-javascript-pdf](https://github.com/syncfusion/document-sdk-skills/tree/main/skills/syncfusion-javascript-pdf) |
| [Excel (XlsIO)](https://help.syncfusion.com/document-processing/excel/overview) | [syncfusion-dotnet-excel](https://github.com/syncfusion/document-sdk-skills/tree/main/skills/syncfusion-dotnet-excel) <br> [syncfusion-flutter-excel](https://github.com/syncfusion/document-sdk-skills/tree/main/skills/syncfusion-flutter-excel) |
| [PowerPoint (Presentation)](https://help.syncfusion.com/document-processing/powerpoint/overview) | [syncfusion-dotnet-powerpoint](https://github.com/syncfusion/document-sdk-skills/tree/main/skills/syncfusion-dotnet-powerpoint) |
| [Markdown](https://help.syncfusion.com/file-formats/markdown/overview) | [syncfusion-dotnet-markdown](https://github.com/syncfusion/document-sdk-skills/tree/main/skills/syncfusion-dotnet-markdown) |
| [Smart Data Extraction](https://help.syncfusion.com/document-processing/smart-data-extraction/overview) | [syncfusion-dotnet-smart-data-extraction](https://github.com/syncfusion/document-sdk-skills/tree/main/skills/syncfusion-dotnet-smart-data-extraction) |

## Prerequisites

Before installing Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK Skills, ensure the following tools are available on your machine:

- **[Node.js](https://nodejs.org/)** (v18 or later) — Required to run `npx` commands for installing skills.
- **[.NET SDK](https://dotnet.microsoft.com/download)** (8.0 or later) — Required for CSX script execution (Mode 2).
- **[dotnet-script](https://github.com/dotnet-script/dotnet-script)** — Required for CSX script execution (Mode 2). Install it globally by running: `dotnet tool install -g dotnet-script`.

## Installation

Choose one of the following commands to install [Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK Skills](https://github.com/syncfusion/document-sdk-skills) based on your preference. You can also explore Syncfusion<sup style="font-size:70%">&reg;</sup> skills from the [marketplace](https://skills.sh/syncfusion/).

To install all document SDK skills at once, use the following command:

```bash
npx skills add syncfusion/document-sdk-skills --all -y
```

To install a specific skill, use the following command (for example, to install PDF .Net skills):

```bash
npx skills add syncfusion/document-sdk-skills --skill syncfusion-dotnet-pdf
```

## What's Included

1. **Document SDK API Knowledge** — Curated, skill-based guidance for creating, editing, and converting PDF, Word, Excel, PowerPoint, and Markdown documents using Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK libraries. Covers key APIs, supported formats, and conversions.
2. **Dual-Mode Execution (.NET)** — Supports two operating modes:
   - **Mode 1** — Generate production-ready code for your project.
   - **Mode 2** — Execute a document task immediately via a CSX script without modifying your project.
3. **Patterns & Best Practices** — Practical recommendations for API usage, platform-specific NuGet package selection, and document processing workflows (for example, mail merge, PDF digital signatures, Excel pivot tables, and PowerPoint chart creation). All guidance is authored directly within the skill file rather than being fetched from external documentation.


## How Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK Agent Skills Work

1. **Read the relevant skill files and choose modes based on the user's query** The assistant retrieves library APIs, and code patterns from the installed Syncfusion<sup style="font-size:70%">&reg;</sup> Skills. It automatically chooses the appropriate operating mode based on the provided prompt.
2. **Enforces Syncfusion<sup style="font-size:70%">&reg;</sup> best practices**, including:
   - Suggesting the correct NuGet packages or JAR files based on the detected application type.
   - Using only APIs and code patterns explicitly present in the skill reference files.
   - Configuring the Syncfusion<sup style="font-size:70%">&reg;</sup> license key from `SyncfusionLicense.txt` or the `SYNCFUSION_LICENSE_KEY` environment variable.
3. **Operates in two modes** based on the user's intent:
   - **Mode 1 — Generate Code**: Produces production-ready code. No scripts are created or executed. Triggered by keywords such as `"code"`, `"snippet"`, `"how to"`, `"show me"`, `"sample"`, or `"example"`.
   - **Mode 2 — Execute via CSX Script**: Creates a temporary `.csx` script, runs it with `dotnet script`, produces the output document file, then cleans up — without modifying the user's project. Triggered by keywords such as `"create"`, `"generate"`, `"make"`, `"open"`, `"edit"`, `"modify"`, or a file path (e.g., `output/report.docx`).

## Using the AI Assistant

Once skills are installed, the assistant can generate Syncfusion<sup style="font-size:70%">&reg;</sup> document processing code or execute document generation tasks. Below are example prompts for each mode.

**Generate Code (Mode 1):**

- "How do I add a digital signature to a PDF?"
- "Give me a code snippet to create an Excel workbook with a pivot table using XlsIO."
- "Show me DocIO code to create a Word document with a title and a paragraph."
- "Generate a C# snippet to add a table to a PowerPoint slide."
- "Show me code to extract all fields and tables from a PDF as JSON using Smart Data Extraction."

**Execute Task (Mode 2):**

- "Create a PDF report with a title page and inventory table, save to output/report.pdf."
- "Create a sales summary workbook and save it to output/sales.xlsx."
- "Create a Word document about the top 5 programming languages in 2025."
- "Create a 5-slide meeting agenda presentation and save it to output/agenda.pptx."
- "Extract data from the PDF at Input/invoice.pdf using Smart Data Extraction and save to output/data.json."

## See also

- [Syncfusion Document SDK Documentation](https://help.syncfusion.com/document-processing/introduction)
- [Agent Skills Standards](https://agentskills.io/home)
- [Skills CLI](https://skills.sh/docs)

