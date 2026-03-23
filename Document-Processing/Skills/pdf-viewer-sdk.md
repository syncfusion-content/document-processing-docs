---
title: Syncfusion PDF Viewer SDK Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion PDF Viewer SDK Agent Skills to enable AI assistants to generate accurate pdf viewer code using Syncfusion PDF Viewer SDK libraries.
platform: document-processing
control: PDF Viewer SDK
documentation: ug
keywords: Skills, AI Assistants, PdfViewer SDK, Agent Skills
---

# Syncfusion PDF Viewer SDK Agent Skills for AI Assistants

This guide introduces **Syncfusion PDF Viewer SDK Skills**, a curated skill package that enables AI assistants (GitHub Copilot, Code Studio, Cursor, Claude, etc.) to generate accurate, productionready PDF Viewer integration code using the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer components across supported platforms. 

Unlike generic AI suggestions, these skills ground the assistant in official Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer APIs, configuration patterns, and platformspecific setup details—ensuring correct usage, faster onboarding, and fewer integration issues.

# Supported Platforms 

Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer SDK Agent Skills provide guidance for the following platforms: 

- **[Blazor](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/overview)**
- **[React](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started-overview)**
- **[Flutter](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/flutter/overview)**
- **[.NET MAUI](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/overview)**
- **[WinForms](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/winforms/overview)**
- **[WPF](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/wpf/overview)**

Each platform’s skill file includes component initialization, property configuration, event handling, and common usage patterns specific to that framework. 

## Prerequisites 

Before installing Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer SDK Skills, ensure the following: 

**[Node.js](https://nodejs.org/)** (v16 or later) - Required to run npx commands for installing skills.

## Installation

Choose one of the following commands to install the Syncfusion PDF Viewer SDK Agent Skills.

```bash
# Install all PDF Viewer SDK skills at once 
npx skills add syncfusion/pdf-viewer-sdk-skills -y 

# Choose and install skills interactively from the terminal 
npx skills add syncfusion/pdf-viewer-sdk-skills
```

Once installed, the skills are automatically registered and available to supported IDEs and AI assistants such as:

- **[Visual Studio Code (Copilot / Agent Mode)](https://code.visualstudio.com/docs/copilot/customization/agent-skills)**
- **[Code Studio](https://help.syncfusion.com/code-studio/reference/configure-properties/skills)**
- **[Cursor](https://cursor.com/docs/skills)**

To learn more about managing skills, see the [Skills CLI documentation](https://skills.sh/docs).

## What's Included

1. **PDF Viewer API Knowledge** - Curated, platform-specific guidance for working with Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer components, including:
    - Loading PDF documents from local files, URLs, and byte streams
    - Configuring toolbar items and viewer options
    - Zooming, scrolling, and navigation
    - Text selection and search
    - Annotations (shape, text markup, stamps, etc.)
    - Form field interaction
    - Event handling (document load, page change, annotation events)
2. **Platform-Specific Code Generation** — Generates production-ready code tailored to your platform without executing scripts or modifying your project structure. No files are generated on disk.
3. **Best Practices & Configuration Patterns** - The skills enforce Syncfusion<sup style="font-size:70%">&reg;</sup> recommended practices, including: 
    - Correct package / NuGet / npm selection per platform 
    - Proper component initialization and lifecycle usage
    - Platform-appropriate configuration for performance and UX 
    - Syncfusion license setup using:
        - SyncfusionLicense.txt, or
        - SYNCFUSION_LICENSE_KEY environment variable
Only APIs and patterns explicitly defined in the skill reference files are used.

## How Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer SDK Agent Skills Work 

1. **Reads the relevant platform-specific skill files** - Based on the user’s query (for example, React vs WPF), the assistant loads the appropriate PDF Viewer skill reference. 

2. **Generates accurate, platform-specific code** - The assistant: 
    - Uses the correct component names and APIs 
    - Applies valid configuration options

## Using the AI Assistant with PDF Viewer Skills 

Once installed, the assistant can help generate PDF Viewer integration code. Below are example prompts.

## Example Prompts  

- “Show me how to load a PDF file in Syncfusion PDF Viewer for React.” 
- “Give an example of enabling text search in Blazor PDF Viewer.” 
- “How do I add annotation support in WPF Syncfusion PDF Viewer?” 
- “Provide sample code to customize the toolbar in MAUI PDF Viewer.” 
- “Show how to load a PDF from a URL in Flutter PDF Viewer.” 
- “Example of handling page change events in WinForms PDF Viewer.” 

## Documentation Reference 

For detailed API documentation and feature explanations, refer to the official Syncfusion PDF Viewer documentation: 

- **[React PDF Viewer Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/overview)**

(Equivalent documentation is available for Blazor, Flutter, MAUI, WinForms, and WPF.)

## See Also 

- [Syncfusion PDF Viewer Documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/overview)
- [Skills CLI Documentation](https://skills.sh/docs)
- [Agent Skills Standards](https://agentskills.io/home)