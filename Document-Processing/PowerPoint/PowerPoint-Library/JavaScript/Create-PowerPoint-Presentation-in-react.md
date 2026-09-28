---
layout: post
title: Getting Started with JavaScript PowerPoint in React app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript PowerPoint Library in React and create PowerPoint presentations without Microsoft PowerPoint.
control: PowerPoint
platform: document-processing
documentation: ug
keywords: javascript, powerpoint, react
---

# Getting Started with JavaScript PowerPoint Library in React app

The `JavaScript PowerPoint Library` facilitates the creation of a simple PowerPoint presentation with basic elements from scratch.

This guide explains how to integrate the `JavaScript PowerPoint Library` into a React application that runs in the browser. The generated PowerPoint presentation is downloaded directly from the browser; no server-side PowerPoint rendering is required.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js 18 or later.
- npm 9 or later, or Yarn 1.22 or later.
- React 18 or later.
- Visual Studio Code, Code Studio, or another code editor.
- A supported browser such as the latest versions of Microsoft Edge, Google Chrome, or Mozilla Firefox.

To verify your Node.js and npm versions, run:

```bash
node --version
npm --version
```

## Create a React Project

This guide uses [Vite](https://vitejs.dev/) to scaffold the React project. Run the following command in a terminal:

```bash
npm create vite@latest my-pptx-app -- --template react
cd my-pptx-app
```

After the project is created, install its dependencies:

```bash
npm install
```

## Install the JavaScript PowerPoint Library

All Syncfusion<sup>&reg;</sup> JS 2 packages are published in the `npmjs.com` registry. The `npm install` command below resolves `@syncfusion/ej2-pptx` to the latest stable version compatible with React 18 or later.

* To install the `JavaScript PowerPoint Library`, use the following command.

```bash
npm install @syncfusion/ej2-pptx --save
```

### Transitive Dependencies

The following packages are included automatically by `@syncfusion/ej2-pptx` and do not need to be installed separately:

- `@syncfusion/ej2-base` — common utilities used by the library.
- `@syncfusion/ej2-compression` — compression support used by PowerPoint features.

## License Registration

If your project requires a Syncfusion license, register the license key before using the PowerPoint API. Add the following code at the top of `App.jsx`:

```javascript
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY');
```

Replace `YOUR_LICENSE_KEY` with the key from your Syncfusion account. For more information, see the [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview).

## Create a PowerPoint Presentation Document

Replace the contents of `App.jsx` with the following code. The file imports the Presentation classes as named exports from `@syncfusion/ej2-pptx` and creates a PowerPoint presentation.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}

import React from 'react';
import { registerLicense } from '@syncfusion/ej2-base';
import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';

// Optional: register the Syncfusion license key (required for commercial usage)
registerLicense('YOUR_LICENSE_KEY');
export default function App() {
const createPPTX = async () => {
// Creates a Presentation instance.
const pptxDoc = Presentation.create();
// Adds a slide to the PowerPoint presentation.
const slide = pptxDoc.slides.add();
// Adds a textbox for the title.
const titleShape = slide.shapes.addTextBox({
    name: 'Title',
    bounds: {
                x: 55,
                y: 25,
                width: 850,
                height: 72,
        },
    });
const paragraph = titleShape.textBody.addParagraph();
paragraph.horizontalAlignment = HorizontalAlignmentType.Center; 
const textPart1 = paragraph.addTextPart('Hello World!!!');
textPart1.font.fontName = 'Calibri';
textPart1.font.bold = true;
textPart1.font.fontSize = 36;
 
const bytes = await pptxDoc.save("Output.pptx");
};
  return (
    <div style={{ padding: '1.5rem' }}>
      <button onClick={createPPTX}>Create PowerPoint document</button>
    </div>
  );
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

N> This sample uses **named imports** from the npm package (`import { Presentation, ... } from '@syncfusion/ej2-pptx'`). The npm package does not expose a global `ej` namespace; using `ej.pptx.Presentation` without an import will throw `ReferenceError: ej is not defined` in a Vite or Create-React-App build. If you prefer the UMD-style global, load `ej2.min.js` from the Syncfusion CDN in `index.html` instead of importing the npm package.

## Run the Application

Open a terminal in the project root and start the Vite development server:

```bash
npm run dev
```

Vite serves the application at `http://localhost:5173`. Open this URL in a browser and click **Create PowerPoint document** to download the generated file as `Output.pptx`.

The generated PowerPoint presentation contains a single slide with the text "Hello World!!!".

N> If you used Create-React-App instead of Vite, the run command is `npm start` and the default URL is `http://localhost:3000`.
