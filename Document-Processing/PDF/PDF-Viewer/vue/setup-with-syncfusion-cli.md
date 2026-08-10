---
layout: post
title: Set Up Vue PDF Viewer Using Syncfusion CLI | Syncfusion
description: Learn how to set up a Vue PDF Viewer project quickly using the Syncfusion CLI. This guide covers both non-interactive and interactive setup modes.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Set Up Vue PDF Viewer Using Syncfusion CLI

This guide shows you how to set up a Vue PDF Viewer project using the Syncfusion CLI in minutes. The Syncfusion CLI automates project scaffolding with predefined templates, themes, and styling formats.

## Prerequisites

Before you begin, ensure you have the following:

- **Node.js 24+ (LTS recommended)** — [Download Node.js](https://nodejs.org/en)
- A command-line terminal (PowerShell, Terminal, or Command Prompt)
- Basic familiarity with npm and Vue

## Step 1: Install the Syncfusion CLI

Install the Syncfusion CLI globally using the following command:

```bash
npm install -g @syncfusion/syncfusion-cli
```

## Step 2: Create a Vue PDF Viewer Project

The Syncfusion CLI provides two ways to create a project: **non-interactive** and **interactive** mode.

### Option A: Non-interactive Mode

Create a project directly with a single command:

```bash
sf new my-pdf-viewer-app --framework vue --template pdf-viewer
```

This command instantly creates a Vue Vite application configured with the EJ2 PDF Viewer component. Replace `my-pdf-viewer-app` with your desired project name.

### Option B: Interactive Mode

For a guided setup, run the CLI in interactive mode:

```bash
sf
```

The CLI will prompt you to select your project configuration. Follow these steps:

1. **Project name** — Enter your project name (e.g., `my-pdf-viewer-app`)
2. **Framework** — Select `Vue`
3. **Build Tool** — Select `Vite`
4. **Language** — Select `JavaScript` or `TypeScript`
5. **Template** — Select `PDF Viewer`
6. **Theme** — Choose your preferred theme (e.g., `Material3`)
7. **Style Format** — Select `CSS`, `SCSS`, or `Tailwind CSS`
8. **Syncfusion MCP Server** — Choose `yes` or `no` (for AI-powered development)
9. **Component Skills** — Choose `yes` or `no` (for AI-powered features)
10. **Install dependencies and start app?** — Select `yes` to run immediately, or `no` to set up manually

Example output:

```
✓ Project name? ... my-pdf-viewer-app
✓ Choose Framework: » Vue 
✓ Choose Build Tool: » Vite 
✓ Choose Language: » JavaScript 
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
npm run dev
```

Your Vue PDF Viewer application will start on `http://localhost:5173` (or the next available port). The browser will automatically open with your project.

After the application starts, you will see the Vue PDF Viewer in the browser with the sample PDF loaded and all toolbar controls ready to use. The output will appear as follows:

![Vue PDF Viewer Application](images/vue-cli-pdfviewer.png)

The Syncfusion CLI creates a fully configured project with a predefined PDF Viewer template. The `App.vue` file contains a basic PDF Viewer component initialized with all essential services (toolbar, annotations, search, form fields, etc.) and ready to use.

## Next Steps

After completing this guide, you will have a working Vue PDF Viewer project. You can now:

- **Customize the PDF Viewer** — See [Customize Toolbar](./toolbar-customization) to modify toolbars and controls
- **Handle Events** — Learn about PDF Viewer events in [Event Handling](./event)
- **Add Annotations** — Explore annotation features in [Annotations](./annotation/overview)
- **Open PDF Files** — See [Open PDF Files](./open-pdf-files) for file handling
- **Deploy Your App** — Refer to [Deployment Integration](./deployment-integration/overview) for production setup

For more information, visit the [Getting Started with Vue PDF Viewer](./getting-started) guide or the [PDF Viewer Overview](../overview).

