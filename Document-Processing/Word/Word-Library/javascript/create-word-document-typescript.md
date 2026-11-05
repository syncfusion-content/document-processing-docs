---
layout: post
title: Create or Generate Word file in TypeScript | Syncfusion
description: Learn how to create a Word document in TypeScript with easy steps using Syncfusion TypeScript Word library.
platform: document-processing
control: Word Library
documentation: ug
keywords: word, docx, script, typescript
---

# Create or Generate Word document in TypeScript

The Syncfusion<sup>&reg;</sup> TypeScript Word library is used to create, read, and edit Word documents (DOCX).

This guide explains how to integrate the TypeScript Word library into a TypeScript application.

## Prerequisites

Before getting started, ensure you have the following installed:
* Node.js (version 14.x or later recommended)
* npm (Node Package Manager)

## Project Setup

1. Create a new directory for your project and navigate into it:

```bash
mkdir word-document-typescript
cd word-document-typescript
```

2. Initialize a new npm project:

```bash
npm init -y
```

3. Install TypeScript and required development dependencies:

```bash
npm install typescript webpack webpack-cli webpack-dev-server ts-loader --save-dev
```

## Configure the Start Script

Update the `scripts` section in `package.json` to configure the application start script:

```json
"scripts": {
  "start": "webpack serve --mode development"
}
```

## Install the JavaScript Word Library

Install the Syncfusion Word library package:

```bash
npm install @syncfusion/ej2-docx --save
```

## Create a Word document using TypeScript

1. Add a simple button to `index.html` and attach a click handler that uses the TypeScript Word API to create a new Word document.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<html>
  <head>
    <title>Button onclick Example</title>
  </head>
  <body>
    <button id="normalButton">Create Word document</button>
    <script src="dist/bundle.js"></script>
  </body>
</html>
{% endhighlight %}
{% endtabs %}

2. Include the following code in `index.ts` file to import the Word library.

{% tabs %}
{% highlight typescript tabtitle="index.ts" %}
import { WordDocument } from '@syncfusion/ej2-docx';
{% endhighlight %}
{% endtabs %}

3. Include the following code in the click event of the button in `index.ts` to generate a Word document.

{% tabs %}
{% highlight typescript tabtitle="index.ts" %}
document.getElementById('normalButton').onclick = (): void => {
  // Create a Word document
  const document = WordDocument.create();
  // Access the section
  const section = document.sections[0];
  // Access the paragraph
  const paragraph = section.body.paragraphs[0];
  // Add text to the paragraph
  paragraph.appendText('Hello World!!!');
  // Save and download the word document
  document.save('Output.docx');
};
{% endhighlight %}
{% endtabs %}

## Code Explanation

* **WordDocument.create()**: Creates a new instance of a Word document.
* **document.sections[0]**: Accesses the first section of the document.
* **section.body.paragraphs[0]**: Accesses the first paragraph within the body of the section.
* **paragraph.appendText()**: Appends text content to the paragraph.
* **document.save()**: Saves and downloads the Word document with the specified file name.

## Run the application

Use the following command to start the application:

```bash
npm start
```

## Troubleshooting

If you encounter issues during project setup or document generation, ensure that:
* All dependencies are installed correctly via `npm install`.
* The `@syncfusion/ej2-docx` package is installed and added to `package.json`.
* The development server is running without any build errors.

## See Also

* [Loading and Saving document](https://help.syncfusion.com/document-processing/word/word-library/javascript/loading-and-saving-document)
* [Working with Word document](https://help.syncfusion.com/document-processing/word/word-library/javascript/working-with-word-document)
* [Working with Sections](https://help.syncfusion.com/document-processing/word/word-library/javascript/working-with-sections)
* [Working with Paragraphs](https://help.syncfusion.com/document-processing/word/word-library/javascript/working-with-paragraph)
