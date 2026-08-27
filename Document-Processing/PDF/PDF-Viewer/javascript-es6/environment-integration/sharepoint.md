---
layout: post
title: Integrate TypeScript PDF Viewer in SharePoint | Syncfusion
description: Learn how to deploy and integrate the Syncfusion PDF Viewer component in a SharePoint Framework (SPFx) TypeScript application.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Deploy and Integrate TypeScript PDF Viewer in SharePoint Framework

This guide shows you how to create a SharePoint Framework (SPFx) TypeScript web part and add the Syncfusion PDF Viewer component to a SharePoint Online page.

## Prerequisites

Before creating the SharePoint application, ensure that the following software is installed:

- [Node.js 22.x](https://nodejs.org/en/download)
- [Yeoman](https://yeoman.io/)
- [SharePoint Framework Generator](https://www.npmjs.com/package/@microsoft/generator-sharepoint)

References:

- [Set up your SharePoint Framework development environment](https://learn.microsoft.com/sharepoint/dev/spfx/set-up-your-development-environment)
- [Node.js release schedule](https://nodejs.org/en/about/previous-releases)

Install the required SharePoint Framework tools:

```bash
npm install -g yo
npm install -g @microsoft/generator-sharepoint
```

> Note: The examples in this topic were tested with **Node.js 22.x**, **@microsoft/generator-sharepoint 1.23.2**, and **@syncfusion/ej2-pdfviewer ^34.2.5**. Run `node -v`, `npm -v`, and `yo @microsoft/sharepoint --version` only if you need to confirm the installed versions match.

## Create a SharePoint Framework Project

Create a new project folder:

```bash
mkdir pdfviewer-spfx
cd pdfviewer-spfx
```

Generate the SharePoint Framework project:

```bash
yo @microsoft/sharepoint
```

Choose the following options when prompted:

```
Solution Name: pdfviewer-spfx

Target for component:
SharePoint Online only (latest)

Place files:
Use current folder

Deploy solution to all sites immediately:
No

Permissions:
No

Component Type:
WebPart

Web Part Name:
PdfViewer

Framework:
No Framework
```

> Note: The generated project uses TypeScript by default.

## Install Syncfusion PDF Viewer

```bash
npm install @syncfusion/ej2-pdfviewer
```

## Add PDF Viewer Resources

Download the following files:

- https://cdn.syncfusion.com/ej2/latest/dist/ej2-pdfviewer-lib/pdfium.js
- https://cdn.syncfusion.com/ej2/latest/dist/ej2-pdfviewer-lib/pdfium.wasm

Create the following folder in your SharePoint site assets:

```
SiteAssets
└── ej2-pdfviewer-lib
    ├── pdfium.js
    └── pdfium.wasm
```

Upload the downloaded files to the folder.

## Add PDF Viewer Component

Open:

```
src/webparts/pdfViewer/PdfViewerWebPart.ts
```

Add the required imports at the top of the file:

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
```

Replace the `render` method with the following:

```ts
public render(): void {

  this.domElement.innerHTML = `
   <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/34.2.5/tailwind3.css" />
   <div id="pdfViewer" style="height:800px;width:100%;"></div>
  `;

  PdfViewer.Inject(
    Toolbar,
    Magnification,
    Navigation,
    LinkAnnotation,
    BookmarkView,
    ThumbnailView,
    Print,
    TextSelection,
    TextSearch,
    Annotation,
    FormFields,
    FormDesigner
  );

  const viewer: PdfViewer = new PdfViewer({
    documentPath:
      'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:
      'https://your-sharepoint-site/SiteAssets/ej2-pdfviewer-lib'
  });

  viewer.appendTo('#pdfViewer');
}
```

Remember to replace `https://your-sharepoint-site` in `resourceUrl` with the URL of your SharePoint site before serving the web part.

## Configure SharePoint Workbench

Open `config/serve.json` and find the `initialPage` entry. Replace the URL with your SharePoint site:

```json
{
  "serveConfigurations": {
    "default": {
      "initialPage": "https://your-sharepoint-site/_layouts/15/workbench.aspx?debugManifestsFile=https://localhost:4321/temp/build/manifests.js&debug=true&noredir=true"
    }
  }
}
```

Replace `your-sharepoint-site` with the actual host name of your tenant so that the local debug bundle loads against the correct site.

## Run the Application

```bash
npm start
```

Open:

```
https://your-sharepoint-site/_layouts/15/workbench.aspx?debugManifestsFile=https://localhost:4321/temp/build/manifests.js&debug=true&noredir=true
```

Add the PdfViewer web part to the page.

>[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master).

## See Also

- [PDF Viewer Getting Started](../getting-started.md)
- [Toolbar Customization](../toolbar.md)
- [Annotations](../annotations.md)
- [Form Designer](../forms/)
- [Page Organizer](../organize-pdf.md)
