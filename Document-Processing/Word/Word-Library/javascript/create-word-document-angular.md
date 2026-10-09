---
layout: post
title: Getting Started with JavaScript Word in Angular app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Word Library in Angular application. Easy steps to create Word documents without depending on Microsoft Office.
platform: document-processing
control: Word
documentation: ug
keywords: angular create word, angular generate docx, angular word library, ej2 word angular, javascript
canonical_url: https://help.syncfusion.com/document-processing/word/word-library/javascript/create-word-document-angular
---

# Getting Started with JavaScript Word Library in Angular app

The JavaScript Word Library is used to create, read, and edit Word documents.

This guide explains how to integrate the JavaScript Word Library into an Angular application that runs in the browser. The generated Word document is downloaded directly from the browser; no server-side rendering is involved.

## Prerequisites

Before you begin, make sure you have the following installed:

- Angular 20 or later.
- Node.js 18 or later.
- npm 9 or later, or Yarn 1.22 or later.
- Visual Studio Code or another code editor.
- A supported browser such as the latest versions of Microsoft Edge, Google Chrome, or Mozilla Firefox.

To verify your Node.js and npm versions, run the following commands:

```bash
node --version
npm --version
```

## Project Setup

This guide includes all the steps needed to create and run the sample in an Angular application. You can either create a new project or use an existing one.

### Option A: Create a New Angular Project

If you do not have an Angular project, create one by using the Angular CLI:

```bash
npm install -g @angular/cli
ng new my-word-app
cd my-word-app
```

### Option B: Use an Existing Angular Project

If you already have an Angular project, open its root folder and continue with the package installation steps:

```bash
cd path/to/your-existing-app
```

## Installing the JavaScript Word Library package

All Syncfusion<sup>&reg;</sup> JS 2 packages are published in `npmjs.com` registry. The `npm install` command below resolves `@syncfusion/ej2-docx` to the latest stable version that is compatible with Angular 20 or later.

* To install the JavaScript Word Library, use the following command.

```bash
npm install @syncfusion/ej2-docx --save
```

* If you prefer Yarn, use the following command.

```bash
yarn add @syncfusion/ej2-docx
```

## Browser and Environment Compatibility

| Environment | Supported version |
| --- | --- |
| Angular | 20 or later |
| Node.js | 18.x or later |
| TypeScript | Installed with Angular |
| Visual Studio Code | Latest version recommended |
| Chrome | Latest two major versions |
| Edge | Latest two major versions |
| Firefox | Latest two major versions |

> For server-side rendering or Angular Universal, create the Word document only in browser execution paths. The sample in this guide uses a click handler that runs in the browser, so no additional lifecycle handling is required.

## Create a Word Document

Add a button to the Angular template and attach a click handler that uses the JavaScript Word Library to create a new Word document.

* Add the following button to `app.component.html`.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
<button id="normalButton">Create Word document</button>
{% endhighlight %}
{% endtabs %}

* Include the following namespaces in `app.component.ts`.

{% tabs %}
{% highlight ts tabtitle="~/app.component.ts" %}
import { WordDocument } from '@syncfusion/ej2-docx';
{% endhighlight %}
{% endtabs %}

* Include the following code in the click event of the button in `app.component.ts` to generate a Word document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
document.getElementById('normalButton').onclick = (): void => {
    // Create a Word document
    const document = WordDocument.create();
    // Access the section
    const section = document.section[0];
    // Access the paragraph
    const paragraph = section.body.paragraphs[0];
    // Add text to the paragraph
    paragraph.appendText('Hello World!!!');
    // Save and download Word document
    document.save('Output.docx');
};
{% endhighlight %}
{% endtabs %}

## Code Explanation

- `WordDocument.create()` — creates a new Word document instance.
- `document.section[0]` — accesses the first section of the document.
- `section.body.Paragraphs[0]` — accesses the first paragraph in the section body.
- `appendText(text)` — adds text content to the paragraph.
- `save('Output.docx')` — saves the Word document and triggers a browser download with the specified file name. The file is sent to the browser's default downloads folder.

## Run the Application

Use the following command to run the application in the browser:

```bash
ng serve --open
```

When you click **Create Word document**, the Word file is generated in the browser and downloaded as `Output.docx` to your default downloads folder.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `TS2304: Cannot find name 'WordDocument'` (or similar) | The import line is missing or the package is not installed | Confirm `npm install @syncfusion/ej2-docx` ran successfully and that the import is in `app.component.ts` |
| `Error: Cannot find module '@syncfusion/ej2-docx'` | The package is not installed | Run `npm install @syncfusion/ej2-docx --save` |
| Button click does nothing | The button ID does not match the ID used in `getElementById` | Confirm the button's `id` is `normalButton` |
| Word document does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| Build fails with TypeScript errors | The Angular TypeScript version is incompatible with the Word package | Update Angular to 20 or later and run `npm install` again |

## Additional Resources

- [JavaScript Word Library documentation](https://help.syncfusion.com/document-processing/word/word-library/javascript/overview)
