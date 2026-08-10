---
layout: post
title: Set Up Angular PDF Viewer Using Syncfusion CLI | Syncfusion
description: Learn how to set up an Angular PDF Viewer project using the Syncfusion CLI with both interactive and non-interactive modes
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Set Up Angular PDF Viewer Using Syncfusion CLI

This guide shows you how to set up an Angular PDF Viewer project using the Syncfusion CLI in minutes. The Syncfusion CLI automates project scaffolding with predefined templates, themes, and styling formats.

## Prerequisites

Before you begin, ensure you have the following:

- **Node.js 24+ (LTS recommended)** — [Download Node.js](https://nodejs.org/en)
- A command-line terminal (PowerShell, Terminal, or Command Prompt)
- Basic familiarity with npm and Angular

## Step 1: Install the Syncfusion CLI

Install the Syncfusion CLI globally using the following command:

```bash
npm install -g @syncfusion/syncfusion-cli
```

## Step 2: Create an Angular PDF Viewer Project

The Syncfusion CLI provides two ways to create a project: **non-interactive** and **interactive** mode.

### Option A: Non-interactive Mode

Create a project directly with a single command:

```bash
sf new my-pdf-viewer-app --framework angular --template pdf-viewer
```

This command instantly creates an Angular application configured with the EJ2 PDF Viewer component. Replace `my-pdf-viewer-app` with your desired project name.

### Option B: Interactive Mode

For a guided setup, run the CLI in interactive mode:

```bash
sf
```

The CLI will prompt you to select your project configuration. Follow these steps:

1. **Project name** — Enter your project name (e.g., `my-pdf-viewer-app`)
2. **Framework** — Select `Angular`
3. **Build Tool** — Select `Webpack` or your preferred build tool
4. **Language** — Select `TypeScript` or `JavaScript`
5. **Template** — Select `PDF Viewer`
6. **Theme** — Choose your preferred theme (e.g., `Material3`)
7. **Style Format** — Select `CSS`, `SCSS`, or `Tailwind CSS`
8. **Syncfusion MCP Server** — Choose `yes` or `no` (for AI-powered development)
9. **Component Skills** — Choose `yes` or `no` (for AI-powered features)
10. **Install dependencies and start app?** — Select `yes` to run immediately, or `no` to set up manually

Example output:

```
✓ Project name? ... my-pdf-viewer-app
✓ Choose Framework: » Angular 
✓ Choose Build Tool: » Webpack 
✓ Choose Language: » TypeScript 
✓ Choose Template: » PDF Viewer 
✓ Choose Theme: » Material3 
✓ Choose Style Format: » CSS 
✓ Would you like to integrate the Syncfusion MCP Server? ... no 
✓ Would you like to install Component Skills? ... no 
✓ Install dependencies and start app now? ... yes
```

## Step 3: Run Your Project

If you selected `no` for automatic setup, navigate to your project and start the development server:

```bash
cd my-pdf-viewer-app
npm install
npm start
```

Your Angular PDF Viewer application will start on `http://localhost:4200` (or the next available port). The browser will automatically open with your project.

After the application starts, you will see the Angular PDF Viewer in the browser with the sample PDF loaded and all toolbar controls ready to use. The output will appear as follows:

![Angular PDF Viewer Application](images/angular-cli-pdfviewer.png)

The Syncfusion CLI creates a fully configured project with a predefined PDF Viewer template. The component files contain a basic PDF Viewer component initialized with all essential services (toolbar, annotations, search, form fields, etc.) and ready to use.

## Next Steps

After completing this guide, you will have a working Angular PDF Viewer project. You can now:

- **Customize the PDF Viewer** — See [Customize Toolbar](./toolbar-customization) to modify toolbars and controls
- **Handle Events** — Learn about PDF Viewer events in [Event Handling](./events)
- **Add Annotations** — Explore annotation features in [Annotation](./annotation/overview)
- **Open PDF Files** — See [Open PDF Files](./open-pdf-files) for file handling
- **Deploy Your App** — Refer to [Deployment Integration](./deployment-integration/overview) for production setup

For more information, visit the [Getting Started with Angular PDF Viewer](./getting-started) guide or the [PDF Viewer Overview](../overview).

