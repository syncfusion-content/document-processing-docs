---
layout: post
title: Integrate JavaScript PDF Viewer in SharePoint | Syncfusion
description: Learn how to deploy and integrate the JavaScript Syncfusion PDF Viewer component in a SharePoint Framework (SPFx)
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Deploy and Integrate JavaScript PDF Viewer in SharePoint Framework

This guide shows you how to create a SharePoint Framework (SPFx) web part and add the Syncfusion PDF Viewer component to a SharePoint Online page using the JavaScript (ES5) distribution and CDN-hosted scripts.

## Prerequisites

Before creating the SharePoint application, ensure that the following software is installed:

- [Node.js 22.x](https://nodejs.org/en/download)
- [Yeoman](https://yeoman.io)
- [Gulp CLI](https://www.npmjs.com/package/gulp-cli)
- [SharePoint Framework Generator](https://www.npmjs.com/package/@microsoft/generator-sharepoint)

References:

- [Set up your SharePoint Framework development environment](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment)
- [Node.js release schedule](https://nodejs.org/en/about/previous-releases)

Install the required SharePoint Framework tools:

```bash
npm install -g yo
npm install -g @microsoft/generator-sharepoint
```

Verify the installed versions:

```bash
node -v
npm -v
yo --version
```

> Note: The examples in this topic were tested with **Node.js 22.x** and the **SharePoint Framework generator 1.23.2**.

## Create a SharePoint Framework Project

Create a new project folder:

```bash
mkdir pdfviewer-spfx-js
cd pdfviewer-spfx-js
```

Generate the SharePoint Framework project:

```bash
yo @microsoft/sharepoint
```

Choose the following options when prompted:

```
Solution Name:
pdfviewer-spfx-js

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

> Note: SPFx generates a TypeScript project even when **No Framework** is selected. The JavaScript PDF Viewer bundle is loaded at runtime from a CDN script, so the SPFx web part only needs to mount the host element and reference the script.

## Add Required Resources

Download the following files:

- https://cdn.syncfusion.com/ej2/latest/dist/ej2.min.js
- https://cdn.syncfusion.com/ej2/latest/dist/ej2-pdfviewer-lib/pdfium.js
- https://cdn.syncfusion.com/ej2/latest/dist/ej2-pdfviewer-lib/pdfium.wasm

Create the following folder structure in your SharePoint site assets:

```
SiteAssets
├── ej2.min.js
└── ej2-pdfviewer-lib
    ├── pdfium.js
    └── pdfium.wasm
```

Upload the downloaded files to the matching folders. For example:

- `https://your-site.sharepoint.com/sites/PdfViewerDemo/SiteAssets/ej2.min.js`
- `https://your-site.sharepoint.com/sites/PdfViewerDemo/SiteAssets/ej2-pdfviewer-lib`

## Add PDF Viewer Component

Open:

```
src/webparts/pdfViewer/PdfViewerWebPart.ts
```

Replace the `render` method with the following code. It injects the EJ2 stylesheet, mounts the host element, loads `ej2.min.js` from SharePoint Site Assets, and initializes the PDF Viewer once the script is ready:

```ts
public render(): void {

  this.domElement.innerHTML = `
    <link rel="stylesheet"
      href="https://cdn.syncfusion.com/ej2/34.1.29/tailwind3.css" />

    <div id="PdfViewer"
         style="height:800px;width:100%;">
    </div>
  `;

  const script = document.createElement('script');

  script.src =
    'https://your-site.sharepoint.com/sites/PdfViewerDemo/SiteAssets/ej2.min.js';

  script.onload = () => {

    const ej = (window as any).ej;

    ej.pdfviewer.PdfViewer.Inject(
      ej.pdfviewer.TextSelection,
      ej.pdfviewer.TextSearch,
      ej.pdfviewer.Print,
      ej.pdfviewer.Navigation,
      ej.pdfviewer.Toolbar,
      ej.pdfviewer.Magnification,
      ej.pdfviewer.Annotation,
      ej.pdfviewer.FormDesigner,
      ej.pdfviewer.FormFields
    );

    const pdfviewer = new ej.pdfviewer.PdfViewer({
      documentPath:
        'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',

      resourceUrl:
        'https://your-site.sharepoint.com/sites/PdfViewerDemo/SiteAssets/ej2-pdfviewer-lib'
    });

    pdfviewer.appendTo('#PdfViewer');
  };

  document.head.appendChild(script);
}
```

Remember to replace `your-site.SharePoint.com/sites/PdfViewerDemo` in both the `script.src` and `resourceUrl` with the actual URL of your SharePoint site before serving the web part.

## Configure SharePoint Workbench

Open `config/serve.json` and update the `pageUrl` (or `initialPage`) entry to point to your SharePoint site:

```json
{
  "pageUrl": "https://your-site.sharepoint.com/sites/PdfViewerDemo/_layouts/15/workbench.aspx"
}
```

Replace `your-site.SharePoint.com/sites/PdfViewerDemo` with the actual host name and site path of your tenant so that the local debug bundle loads against the correct site.

## Run the Application

```bash
npm start
```

Open:

```
https://your-site.sharepoint.com/sites/PdfViewerDemo/_layouts/15/workbench.aspx
```


> [View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master).

## See Also

- [PDF Viewer Getting Started](../getting-started)
- [Toolbar Customization](../toolbar)
- [Annotations](../annotations)
- [Form Designer](../forms/overview)
- [Page Organizer](../organize-pdf)