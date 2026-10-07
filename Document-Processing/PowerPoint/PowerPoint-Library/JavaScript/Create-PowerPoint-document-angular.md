---
layout: post
title: Getting Started with JavaScript PowerPoint in Angular app | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript PowerPoint in Angular application. Easy steps to create presentations without depending on Microsoft Office.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: angular create pptx, angular generate powerpoint, angular powerpoint library, ej2 powerpoint angular, javascript
canonical_url: https://help.syncfusion.com/document-processing/presentation/pptx-library/javascript/create-powerpoint-document-angular
---

# Getting Started with JavaScript PowerPoint in Angular app

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) is used to create, read, and edit PowerPoint presentations. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) also offers functionality to insert shapes, images, text, and paragraphs with rich formatting.

This guide explains how to integrate the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) into an Angular application that runs in the browser. The generated PowerPoint presentation is downloaded directly from the browser; no server-side PowerPoint rendering is involved.

## Video Tutorial

Watch the following video to learn how to create a PowerPoint file in an Angular application using the JavaScript PowerPoint Library.

{% youtube "https://www.youtube.com/watch?v=..." %}

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
ng new my-pptx-app
cd my-pptx-app
```

### Option B: Use an Existing Angular Project

If you already have an Angular project, open its root folder and continue with the package installation steps:

```bash
cd path/to/your-existing-app
```

## Installing the JavaScript PowerPoint Library package

All Syncfusion<sup>&reg;</sup> JS 2 packages are published in `npmjs.com` registry. The `npm install` command below resolves `@syncfusion/ej2-pptx` to the latest stable version that is compatible with Angular 20 or later.

* To install the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library), use the following command.

```bash
npm install @syncfusion/ej2-pptx --save
```

* If you prefer Yarn, use the following command.

```bash
yarn add @syncfusion/ej2-pptx
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

> For server-side rendering or Angular Universal, create the PowerPoint document only in browser execution paths. The sample in this guide uses a click handler that runs in the browser, so no additional lifecycle handling is required.

## Create a PowerPoint Document

Add a button to the Angular template and attach a click handler that uses the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) to create a new PowerPoint document.

### Step 1: Create the Template

Add the following button to `app.component.html`:

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
<button id="normalButton">Create PowerPoint document</button>
{% endhighlight %}
{% endtabs %}

### Step 2: Add the Imports

Include the following namespaces in `app.component.ts`:

{% tabs %}
{% highlight ts tabtitle="~/app.component.ts" %}
import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';
{% endhighlight %}
### Step 3: Add the Code Handler

Include the following code in the click event of the button in `app.component.ts` to generate a PowerPoint document:

* Include the following code in the click event of the button in `app.component.ts` to generate a PowerPoint document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
document.getElementById('normalButton').onclick = async (): Promise<void> => {
    // Creates a Presentation instance
    const pptxDoc = Presentation.create();
    // Adds a slide to the presentation
    const slide = pptxDoc.slides.add();
    // Adds a textbox for the title
    const titleShape = slide.shapes.addTextBox({
        name: 'Title',
        bounds: {
            x: 55,
            y: 25,
            width: 850,
            height: 72
        }
    });
    // Adds a paragraph to the textbox
    const paragraph = titleShape.textBody.addParagraph();
    paragraph.horizontalAlignment = HorizontalAlignmentType.Center;
    // Adds text to the paragraph
    const textPart = paragraph.addTextPart('Hello World!!!');
    textPart.font.fontName = 'Calibri';
    textPart.font.bold = true;
    textPart.font.fontSize = 36;

    try {
        // Saves the presentation
        const bytes = await pptxDoc.save();

        // Creates a blob from the bytes
        const blob = new Blob([bytes], {
            type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        });

        // Creates a download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Output.pptx';

        // Triggers the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error creating PowerPoint file:', error);
    }
};
{% endhighlight %}
{% save()` — saves the presentation and triggers a browser download with the specified file name. The file is sent to the browser's default downloads folder.

## Run the Application

Use the following command to run the application in the browser:

```bash
ng serve --open
```

When you click **Create PowerPoint document**, the PowerPoint file is generated in the browser and downloaded as `Output.pptx` to your default downloads folder.

## Troubleshooting

| Problem | Cause | Resolution |
|---|---|---|
| `TS2304: Cannot find name 'Presentation'` (or similar) | The import line is missing or the package is not installed | Confirm `npm install @syncfusion/ej2-pptx` ran successfully and that the import is in `app.component.ts` |
| `Error: Cannot find module '@syncfusion/ej2-pptx'` | The package is not installed | Run `npm install @syncfusion/ej2-pptx --save` |
| Button click does nothing | The button ID does not match the ID used in `getElementById` | Confirm the button's `id` is `normalButton` |
| PowerPoint file does not download | The browser blocks the download | Check the browser's download settings and the downloads folder |
| Build fails with TypeScript errors | The Angular TypeScript version is incompatible with the PowerPoint package | Update Angular to 20 or later and run `npm install` again |
| `registerLicense` warning at runtime | The license key is missing or invalid | Confirm the key is set in `main.ts` and is the correct key for your Syncfusion account |

## Additional Resources

- [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library)
- [JavaScript PowerPoint Library documentation](https://help.syncfusion.com/document-processing/presentation/pptx-library/javascript/overview)
- [JavaScript PowerPoint Library API reference](https://ej2.syncfusion.com/documentation/api/powerpoint)
- [JavaScript PowerPoint Library examples](https://document.syncfusion.com/demos/powerpoint/angular/#/fluent2/powerpoint/default)
- [Syncfusion licensing documentation](https://help.syncfusion.com/document-processing/licensing/overview)
