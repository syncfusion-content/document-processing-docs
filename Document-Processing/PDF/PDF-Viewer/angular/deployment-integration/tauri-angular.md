---
layout: post
title: Tauri Integration with Angular PDF Viewer | Syncfusion
description: Learn how to create a Tauri desktop application and integrate the Syncfusion Angular PDF Viewer component.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Tauri Integration for Angular PDF Viewer

This guide shows you how to create a [Tauri](https://tauri.app/) desktop application and add the [Syncfusion Angular PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/angular-pdf-viewer) component to the web frontend. Tauri wraps a web view (WebView2 on Windows, WebKit on macOS, and WebKitGTK on Linux) in a lightweight native shell, so the same Angular code you ship to the browser can run as a desktop app with full filesystem and dialog access through Tauri plugin.

## Prerequisites

Before creating the Tauri application, ensure the following software is installed on your development machine:

- [Node.js 22+](https://nodejs.org/en/download) (LTS recommended)
- A package manager: `npm`, `yarn`, or `pnpm`
- [Angular CLI](https://angular.dev/tools/cli) (v20 or later) installed globally: `npm install -g @angular/cli`
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
tauri-angular-pdfviewer

Choose which language to use for your frontend:
TypeScript / JavaScript

Choose your package manager:
npm

Choose your UI template:
Angular
```

> Note: The exact wording of the prompts depends on the installed version of `create-tauri-app`. Pick **Angular** as the UI template and **TypeScript** as the flavor. The example below assumes a TypeScript Angular + Vite project.

After the scaffold finishes, install the dependencies and verify the project builds:

```bash
cd tauri-angular-pdfviewer
npm install
npm run tauri dev
```

> The first run of `npm run tauri dev` compiles the Rust back end, which may take a few minutes. Subsequent runs are much faster.

## Install Syncfusion Angular PDF Viewer

Install the Syncfusion Angular PDF Viewer package from npm:

```bash
npm install @syncfusion/ej2-angular-pdfviewer --save
```

## Import the Required CSS

Install the Tailwind 3 theme package and add the styles to your global stylesheet. If your project already uses a different Syncfusion theme, replace the import with that theme.

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

Open `src/app/app.component.css` (or your top-level global stylesheet) and add the following import:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pdfviewer/index.css';
```

> The `app.component.css` file automatically includes all required dependent component styles for the PDF Viewer. You do not need to import individual dependency styles such as Base, Buttons, Dropdowns, Inputs, Navigations, Popups, and SplitButtons separately.

## Add the Syncfusion Angular PDF Viewer

Open `src/app/app.component.ts` and replace its contents with the following code. The viewer is mounted inside an Angular standalone component and configured to load a public sample PDF and the runtime assets from the Syncfusion CDN.

{% tabs %}
{% highlight ts tabtitle="src/app/app.ts" %}
{% raw %}
import { Component } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               FormDesignerService, FormFieldsService, AnnotationService, PageOrganizerService],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourcesUrl"
      style="height:640px; display:block">
    </ejs-pdfviewer>
  `
})
export class App {
  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourcesUrl: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Run the Application in Development

Run the following command from the project root to launch the Tauri desktop app in development mode:

```bash
npm run tauri dev
```

Tauri compiles the Rust back end, starts the Angular dev server, and opens a native window. The Angular PDF Viewer loads with the following modules enabled:

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

## See Also

- [PDF Viewer Getting Started](../getting-started.md)
- [Tauri documentation](https://tauri.app/start/)
