---
layout: post
title: Getting started with Syncfusion React PDF Viewer in Preact Application
description: Provides a short overview and essential task links for integrating and using the Syncfusion React PDF Viewer within Preact.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---


# Getting started with Syncfusion React PDF Viewer in Preact

This page is a short, task-focused overview for integrating the Syncfusion React PDF Viewer into a [Preact](https://preactjs.com/) app. Use the short sections below for quick tasks; a minimal full example is provided as an optional reference.

[Preact](https://preactjs.com/) is a lightweight React alternative that preserves the React-compatible API. Use Preact when you want smaller bundle size while reusing the React viewer components.
## Setup

How‑to: Create a Preact project and install the Syncfusion package.

```bash
npm init preact   # choose JavaScript or TypeScript as needed
cd my-project
npm install @syncfusion/ej2-react-pdfviewer --save
# or
yarn init preact
yarn add @syncfusion/ej2-react-pdfviewer
```

## Import CSS

How‑to: Add the required Syncfusion theme and component CSS to `src/style.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-react-pdfviewer/styles/material3.css';
```

Note: keep import order consistent with component dependencies.

## Add component

How‑to: Render a minimal `PdfViewerComponent` in `src/index.js`.

Prefer a single `Add component` example using the CDN `resourceUrl` (no server required). Replace the CDN version as needed.

```js
import { render } from 'preact';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';
import './style.css';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib"
      style={{ height: '640px' }}>
      <Inject services={[Toolbar, Magnification, Navigation, Annotation]} />
    </PdfViewerComponent>
  );
}

render(<App />, document.getElementById('app'));
```

**See also**

- [Getting started with the Syncfusion React PDF Viewer](./getting-started-overview)
- [System requirements for Syncfusion React PDF Viewer](https://help.syncfusion.com/document-processing/system-requirements)