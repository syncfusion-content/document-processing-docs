---
layout: post
title: Syncfusion React PDF Viewer in SharePoint
description: Quickstart to integrate the Syncfusion React PDF Viewer into an SPFx React web part (standalone/client-side rendering).
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# React PDF Viewer in SharePoint Framework

## Overview

This quickstart shows how to integrate the Syncfusion React PDF Viewer into a SharePoint Framework (SPFx) React web part. It covers creating the web part, installing the `@syncfusion/ej2-react-pdfviewer` package, adding the required CSS, supplying runtime assets either from the Syncfusion CDN or from Site Assets, and a minimal TypeScript component that renders a PDF in the browser (client‑only).

## Prerequisites

- A SharePoint development environment and an Office 365 tenant (for testing/deployment).
- Node.js compatible with your SPFx version (check SPFx docs).
- Yeoman and the SPFx generator: `npm install -g yo @microsoft/generator-sharepoint`.
- Gulp: `npm install -g gulp-cli`.

## Step 1 — Create an SPFx React web part

Run the SharePoint generator and choose the React framework (TypeScript recommended). Example answers shown in parentheses.

```bash
yo @microsoft/sharepoint
# Solution name: pdfviewer-spfx
# Target: SharePoint Online only (latest)
# Component type: WebPart
# Web part name: PdfViewer
# Framework: React
```

This creates the usual SPFx project tree (no `src/`/`app/` ambiguity): React components live under `src/webparts/pdfViewer/components` and global web part assets are under `src/webparts/pdfViewer/assets`.

## Step 2 — Install Syncfusion package

In the project root run:

```bash
npm install @syncfusion/ej2-react-pdfviewer --save
```

Keep the package version aligned with the runtime assets you host (see Step 4).

## Step 3 — Add Syncfusion CSS

Import the Syncfusion theme CSS so the viewer styles are bundled with the web part. In your React component file (TypeScript example below) import the CSS from node_modules:

```ts
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-dropdowns/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';
import '@syncfusion/ej2-pdfviewer/styles/material.css';
```

If your SPFx build configuration forbids direct CSS imports from node_modules, add these `@import` lines to your component CSS (for example `PdfViewer.module.css`) using the appropriate path or deploy the CSS from a CDN.

## Step 4 — Provide runtime assets and choose rendering mode

SPFx web parts run in the browser (client-side). That makes standalone (client-only) rendering the natural default: the PDF Viewer runs in the user's browser and uses `resourceUrl` to load runtime assets (pdfium.js, pdfium.wasm and supporting files).

Two deployment options for those runtime assets:

- Recommended — Use Syncfusion CDN (fast, simplest): set `resourceUrl` to the CDN folder that matches your package version, e.g.:

```ts
resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";
```

- Self‑hosted — Upload `ej2-pdfviewer-lib` to a public CDN or to a SharePoint library (for example, Site Assets). If you upload to Site Assets, use the full site URL for `resourceUrl`, for example:

```ts
resourceUrl = "https://contoso.sharepoint.com/sites/YourSite/SiteAssets/ej2-pdfviewer-lib";
```

Notes on rendering modes and SPFx:

- Standalone (client-only): fully supported in SPFx — set `resourceUrl` as above and the viewer will render entirely in the browser. This is the recommended, simplest approach for SPFx web parts.
- Server‑backed (optional): to use server-side rendering, set `serviceUrl` (pointing to your PDF rendering web service) instead of `resourceUrl`.

Important: ensure any host you use serves `.wasm` files with Content-Type `application/wasm` and that tenant/content security policies permit fetching assets from the chosen host.

## Step 5 — Add the React component (TypeScript)

Create `PdfViewerClient.tsx` under `src/webparts/pdfViewer/components` and paste the minimal example below. This component is client-only and safe for SPFx (which runs in the browser):

```jsx
// src/webparts/pdfViewer/components/PdfViewerClient.tsx
import * as React from 'react';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';
import '@syncfusion/ej2-pdfviewer/styles/material.css';

export const PdfViewerClient: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="control-section">
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '640px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation]} />
      </PdfViewerComponent>
    </div>
  );
};

export default PdfViewerClient;
```

## Step 6 — Use the component in the web part

Open the web part main React file (for example `src/webparts/pdfViewer/components/PdfViewer.tsx` created by the generator) and render `PdfViewerClient`:

```jsx
import * as React from 'react';
import PdfViewerClient from './PdfViewerClient';

export default function PdfViewer(): JSX.Element {
  return (
    <div className="pdfViewer">
      <PdfViewerClient />
    </div>
  );
}
```

## Step 7 — Test and package

Run the local workbench for development:

```bash
gulp serve
# open the local workbench or use SharePoint Online workbench for hosted assets
```

To package for deployment (when using self‑hosted assets make sure they are uploaded to your CDN or Site Assets before installing the package):

```bash
gulp bundle --ship
gulp package-solution --ship
```

## See also

- [Getting started overview](../getting-started-overview)
- [Creating a Next.js application using Syncfusion React PDF Viewer](./nextjs-getting-started)
- [Getting started with Syncfusion React PDF Viewer in Preact](./nextjs-getting-started)
- [Getting started with Syncfusion React PDF Viewer in Remix](./nextjs-getting-started)