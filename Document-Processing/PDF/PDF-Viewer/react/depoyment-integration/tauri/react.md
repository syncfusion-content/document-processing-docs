---
layout: post
title: Tauri Integration with React PDF Viewer | Syncfusion
description: Learn how to create a Tauri desktop application and integrate the Syncfusion React PDF Viewer component.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Tauri Integration for React PDF Viewer

This guide shows you how to create a [Tauri](https://tauri.app/) desktop application and add the [Syncfusion React PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/react-pdf-viewer) component to the web frontend. Tauri wraps a web view (WebView2 on Windows, WebKit on macOS, and WebKitGTK on Linux) in a lightweight native shell, so the same React code you ship to the browser can run as a desktop app with full filesystem and dialog access through Tauri plugin.

## Prerequisites

Before creating the Tauri application, ensure the following software is installed on your development machine:

- [Node.js 22+](https://nodejs.org/en/download) (LTS recommended)
- A package manager: `npm`, `yarn`, or `pnpm`
- [Rust tool chain](https://tauri.app/start/prerequisites/#rust) (install via [rust up](https://rust-lang.org/tools/install/))
- Platform-specific Tauri prerequisites (see the [Tauri prerequisites](https://tauri.app/start/prerequisites/) page for Windows / macOS / Linux requirements such as WebView2, Xcode Command Line Tools, or `webkit2gtk-4.1`)

References:

- [Tauri prerequisites](https://tauri.app/start/prerequisites/#rust)
- [Rust installation](https://rust-lang.org/tools/install/)
- [Create a Tauri project](https://tauri.app/start/create-project/)

Verify the installed versions:

```bash
node -v
```

## Create a Tauri Project

Tauri ships a project scaffold that creates a desktop shell around a frontend framework. The official scaffold is interactive, so the prompts vary by tool. Run the following command to start the scaffold:

```bash
npm create tauri-app@latest
```

Choose the following options when prompted:

```
Project name:
tauri-react-pdfviewer

Choose which language to use for your frontend:
TypeScript / JavaScript

Choose your package manager:
npm

Choose your UI template:
React

Choose your UI flavor:
TypeScript
```

> Note: The exact wording of the prompts depends on the installed version of `create-tauri-app`. Pick **React** as the UI template and **TypeScript** (or JavaScript) as the flavor. The example below assumes a TypeScript Vite + React project.

After the scaffold finishes, install the dependencies and verify the project builds:

```bash
cd tauri-react-pdfviewer
npm install
npm run tauri dev
```

> The first run of `npm run tauri dev` compiles the Rust back end, which may take a few minutes. Subsequent runs are much faster.

## Install Syncfusion React PDF Viewer

Install the Syncfusion React PDF Viewer package from npm:

```bash
npm install @syncfusion/ej2-react-pdfviewer --save
```

## Import the Required CSS

Install the Tailwind 3 theme package and add the styles to your global stylesheet. If your project already uses a different Syncfusion theme, replace the import with that theme.

```bash
npm install @syncfusion/ej2-tailwind3-theme --save
```

Open `src/App.css` (or your top-level global stylesheet) and add the following import:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pdfviewer/index.css';
```

> The `App.css` file automatically includes all required dependent component styles for the PDF Viewer. You do not need to import individual dependency styles such as Base, Buttons, Dropdowns, Inputs, Navigations, Popups, and SplitButtons separately.

## Add the Syncfusion React PDF Viewer

Open `src/App.tsx` and replace its contents with the following code. The viewer is mounted inside a React component and configured to load a public sample PDF and the runtime assets copied to `public/ej2-pdfviewer-lib`.

{% tabs %}
{% highlight ts tabtitle="src/App.tsx" %}
{% raw %}
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
         PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
 
export default function App() {
  return (
    <PdfViewerComponent id="container"
      // Specifies the URL (for example, a file from the public folder) or a Base64-encoded PDF.
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      // Specifies the path to the PDFium resource files required for the PDF Viewer to function.
      resourceUrl="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib">
      <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
                          BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
                          FormFields, FormDesigner, PageOrganizer ]}/>
    </PdfViewerComponent>
  );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Run the Application in Development

Run the following command from the project root to launch the Tauri desktop app in development mode:

```bash
npm run tauri dev
```

Tauri compiles the Rust back end, starts the Vite dev server, and opens a native window. The React PDF Viewer loads with the following modules enabled:

- Toolbar
- Navigation
- Magnification
- Text Selection
- Text Search
- Print
- Annotations
- Form Fields
- Form Designer

## Build the Application for Production

Run the following command from the project root to produce a release build of the Tauri desktop app:

```bash
npm run tauri build
```

Tauri compiles the Rust back end in release mode, bundles the frontend assets, and outputs platform-specific installers (such as `.msi` on Windows, `.dmg` on macOS, and `.deb`/`.AppImage` on Linux) under `src-tauri/target/release/bundle/`.

## Use with Preact

The same viewer also works in a Tauri app that uses [Preact](https://preactjs.com/) as the frontend, because Preact provides React compatibility through the `preact/compact` shim — no changes to the viewer's code or props are required.

## See Also

- [PDF Viewer Getting Started](../../getting-started)
- [Tauri documentation](https://tauri.app/start/)
