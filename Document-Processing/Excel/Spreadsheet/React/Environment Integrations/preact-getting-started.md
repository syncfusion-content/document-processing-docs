---
layout: post
title: React Spreadsheet getting started with Preact | Syncfusion
description: Integrate and use the Syncfusion React Spreadsheet component within a Preact app (Diátaxis-compliant).
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Getting started with Syncfusion React Spreadsheet in Preact

**Purpose**
- Quick tutorial and task-focused how‑to for integrating Syncfusion React Spreadsheet into a Preact app, plus short explanations and references.

**Audience & prerequisites**
- Developers familiar with Node.js and basic React/Preact concepts.
- Node.js 18+ and a package manager (npm/yarn/pnpm).
- A valid Syncfusion license key (optional for evaluation but recommended).

## Tutorial (step-by-step quickstart)
1. Create a new Preact project (Preact CLI or Vite + Preact). Example using Preact CLI:
```bash
npm init preact
cd my-project
npm install
```
2. Install the Spreadsheet package:
```bash
npm install @syncfusion/ej2-react-spreadsheet --save
```
3. Configure the bundler to alias React → preact/compat (see How‑to below).
4. Add Syncfusion styles and render the component (example below).
5. Start the dev server:
```bash
npm run dev
```
6. Open the app in the browser and verify the Spreadsheet renders.

## How-to add styles and render spreadsheet

**Task**: Add component CSS (recommended import in entry stylesheet)
- Create or update `src/style.css`:
```css
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-inputs/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-splitbuttons/styles/material.css';
@import '@syncfusion/ej2-lists/styles/material.css';
@import '@syncfusion/ej2-navigations/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
@import '@syncfusion/ej2-dropdowns/styles/material.css';
@import '@syncfusion/ej2-grids/styles/material.css';
@import '@syncfusion/ej2-react-spreadsheet/styles/material.css';
```

**Task**: Minimal app rendering the Spreadsheet (`src/index.jsx`)
```js
import { render } from 'preact';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import './style.css';

function App() {
  return <SpreadsheetComponent height={500} />;
}

render(<App />, document.getElementById('app'));
```

**Task**: Register Syncfusion license (client-side)
- In your client entry (e.g., `src/main.jsx`) run registerLicense on mount:
```js
import { registerLicense } from '@syncfusion/ej2-base';

if (typeof window !== 'undefined') {
  const key = import.meta?.env?.VITE_SYNCFUSION_LICENSE_KEY || process.env.SYNCFUSION_LICENSE_KEY;
  if (key) registerLicense(key);
}
```

**How-to: Configure bundler alias (React → Preact)**
**Vite (vite.config.js / ts):**
```js
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat'
    }
  }
});
```

**Webpack (webpack.config.js):**
```js
resolve: {
  alias: {
    react: 'preact/compat',
    'react-dom/test-utils': 'preact/test-utils',
    'react-dom': 'preact/compat'
  }
}
```

**Explanation**: Why this is needed
- Syncfusion React components target the React API. `preact/compat` provides a compatible layer so React-based components work in Preact without rewriting code.
- The alias ensures imports of `react`/`react-dom` resolve to Preact implementations at build time.
- Client-only APIs (e.g., window) must run in browser context; register license and any window-dependent code during client mount.

## Reference snippets / dependency tree
Dependencies installed by the package (for reference):
```
@syncfusion/ej2-react-spreadsheet
  ├─ @syncfusion/ej2-react-base
  ├─ @syncfusion/ej2-spreadsheet
  ├─ @syncfusion/ej2-base
  ├─ @syncfusion/ej2-dropdowns
  ├─ @syncfusion/ej2-navigations
  ├─ @syncfusion/ej2-grids
  └─ ...
```

## Reference (quick links)
- [Syncfusion React Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started)
- [System requirements for Syncfusion React PDF Viewer](../../../../System-Requirements)
- [Preact](https://preactjs.com)
- [Preact/compat](https://preactjs.com/guide/v10/compat)
- [Vite + Preact preset](https://github.com/preactjs/preset-vite)