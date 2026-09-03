---
layout: post
title: Integrate React PDF Viewer in SharePoint | Syncfusion
description: Learn how to deploy and integrate the Syncfusion React PDF Viewer component in a SharePoint Framework (SPFx) React web part.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Deploy and Integrate React PDF Viewer in SharePoint Framework

This guide shows you how to create a SharePoint Framework (SPFx) React web part and add the Syncfusion React PDF Viewer component to a SharePoint Online page.

## Prerequisites

Before creating the SharePoint application, ensure that the following software is installed:

- [Node.js 22.x](https://nodejs.org/en/download)
- [Yeoman](https://yeoman.io/)
- [Gulp CLI](https://www.npmjs.com/package/gulp-cli)
- [SharePoint Framework Generator](https://www.npmjs.com/package/@microsoft/generator-sharepoint)

References:

- [Set up your SharePoint Framework development environment](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment)
- [Node.js release schedule](https://nodejs.org/en/about/previous-releases)

Install the required SharePoint Framework tools:

```bash
npm install -g yo
npm install -g gulp-cli
npm install -g @microsoft/generator-sharepoint
```

Verify the installed versions:

```bash
node -v
npm -v
yo --version
```

> Note: The examples in this topic were tested with **Node.js 22.x** and the **SharePoint Framework generator 1.23.2**.

## Create a SharePoint Framework React Project

Create a new project folder:

```bash
mkdir pdfviewer-spfx-react
cd pdfviewer-spfx-react
```

Generate the SharePoint Framework project:

```bash
yo @microsoft/sharepoint
```

Choose the following options when prompted:

```
Solution Name:
pdfviewer-spfx-react

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
React
```

> Note: The generated project uses TypeScript by default, with the React framework selected.

## Install Syncfusion React PDF Viewer

```bash
npm install @syncfusion/ej2-react-pdfviewer --save
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

Upload the downloaded files to the folder. For example:

```
https://your-site.sharepoint.com/sites/PdfViewerDemo/SiteAssets/ej2-pdfviewer-lib
```

## Update Component Interface

Open:

```
src/webparts/pdfViewer/components/IPdfViewerProps.ts
```

Replace the file contents with an empty props interface:

```ts
export interface IPdfViewerProps {
}
```

## Add the PDF Viewer React Component

Open:

```
src/webparts/pdfViewer/components/PdfViewer.tsx
```

Replace the entire file with the following:

```tsx
import * as React from 'react';
import type { IPdfViewerProps } from './IPdfViewerProps';

import {
  PdfViewerComponent,
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
  FormDesigner,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

export default class PdfViewer extends React.Component<IPdfViewerProps> {
  public render(): React.ReactElement {

    return (
      <PdfViewerComponent
        id="PdfViewer"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://your-site.sharepoint.com/sites/PdfViewerDemo/SiteAssets/ej2-pdfviewer-lib"
        style={{ height: '800px', width: '100%' }}
      >
        <Inject services={[
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
        ]} />
      </PdfViewerComponent>
    );
  }
}
```

Remember to replace `your-site.sharepoint.com/sites/PdfViewerDemo` in `resourceUrl` with the URL of your SharePoint site before serving the web part.

## Update the Web Part

Open:

```
src/webparts/pdfViewer/PdfViewerWebPart.ts
```

Add a helper method to load the Tailwind 3 theme stylesheet from the Syncfusion CDN at runtime. Place it inside the class:

```ts
private loadStyles(): void {

  const linkId = 'ej2-tailwind3-theme';

  if (!document.getElementById(linkId)) {

    const link = document.createElement('link');

    link.id = linkId;
    link.rel = 'stylesheet';
    link.href =
      'https://cdn.syncfusion.com/ej2/34.1.29/tailwind3.css';

    document.head.appendChild(link);
  }
}
```

Update the `render` method so it loads the styles and mounts the React component into the web part's DOM element. Replace the existing element creation code (the block that passes `description`, `isDarkTheme`, `environmentMessage`, and `userDisplayName` props) with an empty props object:

```ts
public render(): void {

  this.loadStyles();

  const element: React.ReactElement = React.createElement(
    PdfViewer,
    {}
  );

  ReactDom.render(element, this.domElement);
}
```

## Configure SharePoint Workbench

Open `config/serve.json` and update the `pageUrl` (or `initialPage`) entry to point to your SharePoint site:

```json
{
  "pageUrl": "https://your-site.sharepoint.com/sites/PdfViewerDemo/_layouts/15/workbench.aspx"
}
```

Replace `your-site.sharepoint.com/sites/PdfViewerDemo` with the actual host name and site path of your tenant so that the local debug bundle loads against the correct site.

## Run the Application

```bash
npm start
```

Open:

```
https://your-site.sharepoint.com/sites/PdfViewerDemo/_layouts/15/workbench.aspx
```

Add the `PdfViewer` web part to the page. The React PDF Viewer loads with the following modules enabled:

- Toolbar
- Navigation
- Magnification
- Text Selection
- Text Search
- Print
- Annotations
- Form Fields
- Form Designer

> [View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master).

## See Also

- [PDF Viewer Getting Started](../getting-started)
- [Toolbar Customization](../toolbar)
- [Annotations](../annotations)
- [Form Designer](../forms/overview)
- [Page Organizer](../organize-pdf)
