---
layout: post
title: Getting Started with JavaScript Word Library in React app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Word Library in React and create Word documents without Microsoft Word.
control: Word
platform: document-processing
documentation: ug
keywords: javascript, word, react
---

# Getting Started with JavaScript Word Library in React app

The `JavaScript Word Library` facilitates the creation of Word documents with basic elements from scratch.

This guide explains how to integrate the `JavaScript Word Library` into a React application that runs in the browser. The generated Word document is downloaded directly from the browser; no server-side document processing is required.

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

This guide uses https://vitejs.dev/ to scaffold the React project. Run the following command in a terminal:

```bash
npm create vite@latest my-docx-app -- --template react
cd my-docx-app
```

After the project is created, install its dependencies:

```bash
npm install
```

## Install the JavaScript Word Library

All Syncfusion<sup>®</sup> JS 2 packages are published in the `npmjs.com` registry. The `npm install` command below resolves `@syncfusion/ej2-docx` to the latest stable version compatible with React 18 or later.

* To install the `JavaScript Word Library`, use the following command.

```bash
npm install @syncfusion/ej2-docx --save
```

## Create a Word Document

Replace the contents of `App.jsx` with the following code. The file imports the required classes from `@syncfusion/ej2-docx` and creates a Word document.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import React from 'react';
import {WordDocument} from '@syncfusion/ej2-docx';

export default function App() {

  let createDocument = async () => {

    // Creates a Word document.
    let document = WordDocument.create();
    let section = document.sections[0]!;
 
    // Add paragraph
    let paragraph = section.body.appendParagraph();
 
    // Add text run and format it
    let run = paragraph.appendTextRange();
    run.text = 'Hello World!!';
    run.characterFormat.bold = true;
    run.characterFormat.fontSize = 24;

    // Saves and downloads the document.
    await document.save('Output.docx');
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <button onClick={createDocument}>
        Create Word document
      </button>
    </div>
  );
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

> **Note:** This sample uses **named imports** from the npm package (`import { WordDocument } from '@syncfusion/ej2-docx'`). The npm package does not expose a global `ej` namespace; using `ej.docx.WordDocument` without an import will throw `ReferenceError: ej is not defined` in a Vite or Create-React-App build.

## Run the Application

Open a terminal in the project root and start the Vite development server:

```bash
npm run dev
```

Vite serves the application at `http://localhost:5173`. Open this URL in a browser and click **Create Word document** to download the generated file as `Output.docx`.

The generated Word document contains a single paragraph with the text **"Hello World!!!"**.

> **Note:** If you used Create-React-App instead of Vite, the run command is `npm start` and the default URL is `http://localhost:3000`.