---
layout: post
title: Getting Started with JavaScript PowerPoint in Angular app | Syncfusion
description: Learn how to create PowerPoint presentations in an Angular app using the Syncfusion JavaScript PowerPoint Library without Microsoft Office.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: angular create pptx, angular generate powerpoint, angular powerpoint library, ej2 powerpoint angular, javascript
canonical_url: https://help.syncfusion.com/document-processing/presentation/pptx-library/javascript/create-powerpoint-document-angular
appliesto: Document SDK
---

# Getting Started with JavaScript PowerPoint in Angular app

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) is used to create, read, and edit PowerPoint presentations. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) also offers functionality to insert shapes, images, text, and paragraphs with rich formatting.

This guide explains how to integrate the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) into an Angular application that runs in the browser. The sample saves the generated PowerPoint presentation with `save('Output.pptx')`.


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
cd my-pptx-app
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
<button (click)="createPowerPoint()">Create PowerPoint document</button>
{% endhighlight %}
{% endtabs %}

### Step 2: Add the Component Code

Update `app.component.ts` with the following code that imports the Presentation classes and creates a PowerPoint presentation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component } from '@angular/core';
import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  async createPowerPoint(): Promise<void> {
    // Creates a Presentation instance
    const pptxDoc = Presentation.create();
    // Adds a slide to the presentation
    const slide = pptxDoc.slides.add();
    // Adds a textbox for the title
    const titleShape = slide.shapes.addTextBox({
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

    // Saves the Presentation to the file system.
    await pptxDoc.save('Output.pptx');
  }
}
{% endhighlight %}
{% endtabs %}

N> The `save()` method saves the presentation to the specified file.

## Run the Application

Use the following command to run the application in the browser:

```bash
ng serve --open
```

When you click **Create PowerPoint document**, the sample saves the presentation as `Output.pptx`.


## Additional Resources

- [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library)
- [JavaScript PowerPoint Library documentation](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/javascript/overview)
