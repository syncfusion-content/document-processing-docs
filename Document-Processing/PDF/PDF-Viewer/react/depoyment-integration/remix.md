---
layout: post
title: Getting started with Syncfusion React PDF Viewer with React Router
description: Short quickstart for integrating the Syncfusion React PDF Viewer into a React application using React Router v7 (standalone/client-only rendering).
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# React Router v7 (Remix) Quickstart

## Overview

N> Remix's framework features were merged into React Router v7 and later. This guide targets React Router v7's framework-mode and shows a client-only (standalone) integration of the Syncfusion React PDF Viewer. Keep the viewer client-only to avoid SSR/runtime errors.

## Tutorial — Quickstart

## Prerequisites

- Node.js (recommended >= 18)
- A React Router app (see steps below) or an existing React Router project
- React 18+
- See the [System requirements](../../../../System-Requirements) for platform details.

## Project layout (which starter you used)

Different starters create different folder layouts. Pick the mapping that matches your project and follow the file locations shown below.

- create-react-router (framework-mode — `app/` tree)
  - Global CSS: `app/app.css` (imported by `root.ts`)
  - Component: `app/components/PdfViewerClient.ts`
  - Route: `app/routes/home.ts` or `app/routes/index.ts`

- Vite / plain React (traditional — `src/` tree)
  - Global CSS: `src/index.css` (imported from `src/main.ts`)
  - Component: `src/components/PdfViewerClient.ts`
  - Route wrapper: `src/App.ts` + `BrowserRouter` in `src/main.ts`

Use the file paths that match your project layout when following the steps below.

## Step 1 — Create a Remix or React Router v7 app

If you want the React Router framework-mode project (creates an `app/` tree), use the official scaffolding tool:

```bash
npx create-react-router@latest remix-pdf-viewer
# follow prompts (pick your preferred package manager and options)
cd remix-pdf-viewer
npm install
npm run dev
```

If you prefer a Vite-based React project (creates a `src/` tree), create it with Vite and add React Router v7:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm install react-router@7 react-router-dom@7
npm run dev
```

## Step 2 — Install the PDF Viewer package

```bash
npm install @syncfusion/ej2-react-pdfviewer --save
```

## Step 3 — Copy viewer runtime assets to `public`

The PDF Viewer requires runtime assets (pdfium.js, pdfium.wasm, supporting files). Copy them from the `ej2-pdfviewer` package to your `public` folder so `resourceUrl` can point to `/ej2-pdfviewer-lib`.

Unix/macOS (or Git Bash / WSL):

```bash
cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib public/ej2-pdfviewer-lib
```

Windows PowerShell:

```powershell
Copy-Item -Path .\node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib -Destination .\public\ej2-pdfviewer-lib -Recurse
```

Confirm `public/ej2-pdfviewer-lib` contains `pdfium.js` and `pdfium.wasm`.

## Step 4 — Add global CSS for the viewer

Place the Syncfusion CSS imports in your project's global stylesheet. Choose the path that matches your project layout.

create-react-router (`app/` tree)

 - File: `app/app.css` (or similar global CSS imported by `root.ts`)

Vite / plain React (`src/` tree)

 - File: `src/index.css` (imported from `src/main.ts`)

Example CSS (same for both):

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
```

Then import the stylesheet according to your starter:

create-react-router (`app/root.ts` or `app/root.ts`): ensure the global CSS is imported or linked from `root` following the starter conventions.

Vite / plain React (`src/main.ts`):

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## Step 5 — Client-only rendering

The PDF Viewer depends on browser APIs and WebAssembly; avoid server-side rendering it. Render it only after the component mounts. Create a client-only component in the folder that matches your project layout.

create-react-router (`app/` tree)

 - `app/components/PdfViewerClient.ts`

Vite / plain React (`src/` tree)

 - `src/components/PdfViewerClient.ts`

Example component (works in either location):

```ts
// components/PdfViewerClient.ts
import React, { useEffect, useState } from 'react';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';

export default function PdfViewerClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="control-section">
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl={`${window.location.origin}/ej2-pdfviewer-lib`}
        style={{ height: '640px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation]} />
      </PdfViewerComponent>
    </div>
  );
}
```

Routing / usage examples:

create-react-router (`app/routes/home.ts` or `app/routes/index.ts`):

```ts
import PdfViewerClient from '../components/PdfViewerClient';

export default function Home() {
  return <PdfViewerClient />;
}
```

Vite / plain React (`src/App.ts`):

```ts
import { Routes, Route } from 'react-router-dom';
import PdfViewerClient from './components/PdfViewerClient';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PdfViewerClient />} />
    </Routes>
  );
}
```

## Step 6 — Run the app

```bash
npm run dev
# open the URL printed by the dev server (usually http://localhost:3000)
```

## See also

- [Getting started overview](../getting-started-overview)
- [Creating a Next.js application using Syncfusion React PDF Viewer](./nextjs-getting-started)