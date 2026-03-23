---
layout: post
title: Syncfusion Document SDK Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion Document SDK Agent Skills to enable AI assistants to generate accurate document processing code using Syncfusion libraries.
control: Document SDK
platform: file-formats
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion Document SDK Agent Skills for AI Assistants

This guide introduces **Syncfusion Document SDK Skills**, a knowledge package that enables AI assistants (GitHub Copilot, Code Studio, Cursor, Claude, etc.) to understand and generate accurate document processing code using Syncfusion<sup style="font-size:70%">&reg;</sup> .NET and Java libraries, and also execute document operations efficiently using a CSX script.

Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK Skills eliminate common issues with generic AI suggestions by grounding the assistant in accurate Syncfusion<sup style="font-size:70%">&reg;</sup> library APIs, document processing patterns, and platform-specific configuration for **[Word (DocIO)](https://help.syncfusion.com/document-processing/word/overview)**, **[PDF](https://help.syncfusion.com/document-processing/pdf/overview)**, **[Excel (XlsIO)](https://help.syncfusion.com/document-processing/excel/overview)**, **[PowerPoint (Presentation)](https://help.syncfusion.com/document-processing/powerpoint/overview)**, **[Markdown](https://help.syncfusion.com/file-formats/markdown/overview)**, and **[Smart Data Extraction](https://help.syncfusion.com/document-processing/smart-data-extraction/overview)**.

## Installation

Choose one of the following commands to install [Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK Skills](https://github.com/syncfusion/document-sdk-skills) based on your preference. Users can also explore Syncfusion<sup style="font-size:70%">&reg;</sup> skills from the [marketplace](https://skills.sh/syncfusion/).

```bash
# Install all document SDK skills at once
npx skills add syncfusion/document-sdk-skills -y

# Choose and install skills interactively from the terminal
npx skills add syncfusion/document-sdk-skills
```

This registers the Syncfusion<sup style="font-size:70%">&reg;</sup> skill pack so your AI assistant can automatically load it in supported IDEs such as [Code Studio](https://help.syncfusion.com/code-studio/reference/configure-properties/skills), [Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills), and [Cursor](https://cursor.com/docs/skills).

To learn more about the Skills CLI, refer [here](https://skills.sh/docs).

## What's Included

1. **Document Processing & API Knowledge** — Curated, skill-based guidance that captures how to create, edit, and convert Word, PDF, Excel, PowerPoint, and Markdown documents using Syncfusion<sup style="font-size:70%">&reg;</sup> .NET and Java libraries, including key APIs, supported formats, and common usage patterns.
2. **Dual-Mode Execution** — Each .NET skill supports generating production-ready C# code for your project (Mode 1), or executing a document task immediately via a temporary CSX script without modifying your project (Mode 2). The Java Word skill supports Mode 1 only.2.
3. **Patterns & Best Practices** — Practical recommendations for API usage, platform-specific NuGet package selection, and document processing workflows (for example, mail merge, PDF digital signatures, Excel pivot tables, and PowerPoint chart creation). All guidance is authored directly within the Skill file rather than being fetched from documentation.
3.

## How Syncfusion<sup style="font-size:70%">&reg;</sup> Document SDK Agent Skills Work

1. **Reads the relevant Skill files based on the user's query**, with the assistant retrieving library APIs, code patterns, and best-practice guidance from the installed Syncfusion<sup style="font-size:70%">&reg;</sup> Skills, and automatically chooses the appropriate operating mode based on the provided prompt.
2. **Enforces Syncfusion<sup style="font-size:70%">&reg;</sup> best practices**, including:
   - Suggesting the correct NuGet packages or JAR files based on the detected application type.
   - Using only APIs and code patterns explicitly present in the skill reference files.
   - Configuring the Syncfusion<sup style="font-size:70%">&reg;</sup> license key from `SyncfusionLicense.txt` or the `SYNCFUSION_LICENSE_KEY` environment variable.
3. **Operates in two modes** based on the user's intent:
   - **Mode 1 — Generate C# / Java Code** *(default)*: Produces production-ready C# or Java code and inserts it into the user's project files (e.g., `Program.cs`). No scripts are created or executed. Triggered by keywords such as `"code"`, `"snippet"`, `"how to"`, `"show me"`, `"sample"`, or `"example"`.
   - **Mode 2 — Execute via CSX Script** *(.NET only)*: Creates a temporary `.csx` script, runs it with `dotnet script`, produces the output document file, then cleans up — without modifying the user's project. Triggered by keywords such as `"create"`, `"generate"`, `"make"`, `"open"`, `"edit"`, `"modify"`, or a file path (e.g., `output/report.docx`). The Java Word skill supports Mode 1 only.

### Using the AI Assistant

Once skills are installed, the assistant can be used to generate and update Syncfusion<sup style="font-size:70%">&reg;</sup> document processing code for tasks such as:

- "Create a Word document with a mail merge table and save to output/report.docx."
- "Add a digital signature to the PDF at output/invoice.pdf."
- "Show me XlsIO code to create an Excel workbook with a pivot table."
- "Create a 5-slide meeting agenda presentation and save it to output/agenda.pptx."
- "Show me how to create a Markdown document with a table and task list using Syncfusion."


## See also

- [Syncfusion Document SDK Documentation](https://help.syncfusion.com/document-processing/introduction)
- [Agent Skills Standards](https://agentskills.io/home)
- [SKills CLI](https://skills.sh/docs)

