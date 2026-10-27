---
layout: post
title: Getting started with Angular PPTX Editor | Syncfusion
description: Learn how to get started with the Syncfusion Angular PPTX Editor control. Explore setup, features, examples, and customization options.
control: Getting started 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular PPTX Editor

[Angular PPTX Editor](https://www.syncfusion.com/powerpoint-editor-sdk/angular-powerpoint-editor) enables you to view and print PowerPoint presentations in web applications. This section guides you through the steps to get started and create a PPTX Editor in an Angular application.

## Prerequisites

* [System requirements for Angular components](https://ej2.syncfusion.com/angular/documentation/system-requirement)
* [Browser Compatibility](https://ej2.syncfusion.com/angular/documentation/browser)

## Setup Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular application. To install Angular CLI, use the following command:

```bash
npm install -g @angular/cli
```

## Create an Angular application

**Step 1:** Start a new Angular application using the Angular CLI command below:

```bash
ng new pptxeditor-app
```

**Step 2:** This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

```text
? Which stylesheet system would you like to use?
❯ CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Tailwind CSS    [ https://tailwindcss.com                                        ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]
```

In this guide, CSS is selected as the stylesheet format.

**Step 3:** Navigate to the created project folder.

```bash
cd pptxeditor-app
```

## Install the PPTX Editor packages

The PPTX Editor package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/package/@syncfusion/ej2-angular-pptxeditor).

To install the PPTX Editor component, use the following command:

```bash
npm install @syncfusion/ej2-angular-pptxeditor --save
```

## Register a Syncfusion License Key

Before initializing the Angular PPTX Editor control, generate a Syncfusion license key and register it in your application.

- [Generate a Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
- [Register a Syncfusion License Key in Angular](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#angular)

## Import the required CSS styles

Themes for PPTX Editor can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/angular/documentation/appearance/overview#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/angular/documentation/appearance/overview).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

By default, projects include an `src/styles.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `src/styles.css` file to prevent style conflicts.

The required styles for the PPTX Editor are imported in the **src/styles.css** file:

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pptx-editor/index.css";

{% endhighlight %}
{% endtabs %}

## Initialize the PPTX Editor

Modify `src/app/app.ts` to render the PPTX Editor component by adding the Angular PPTX Editor selector in its template section.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Component, ViewChild } from '@angular/core';
import {
  PptxEditorComponent,
  Toolbar,
  ThumbnailView,
  Magnification,
  Navigation,
  Print,
  SlideShow
} from '@syncfusion/ej2-angular-pptxeditor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PptxEditorComponent],
  providers: [Toolbar, ThumbnailView, Magnification, Navigation, Print, SlideShow],
  template: `
    <div class="control-section">
      <ejs-pptxeditor id="container" #default_editor height="590px" style="display:block">
      </ejs-pptxeditor>
    </div>
  `
})
export class App {
  @ViewChild('default_editor')
  public editor: PptxEditorComponent;
}

{% endhighlight %}
{% endtabs %}

To open a local PPTX file in the PPTX Editor, fetch the file as a blob and load it using the `openFromBlob` method:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import samplePptxUrl from '../sample.pptx?url';

fetch(samplePptxUrl)
  .then((response) => response.blob())
  .then((blob) => this.editor.openFromBlob(blob, 'sample.pptx'));

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application using the following command:

```bash
ng serve --open
```

After the application starts, open the localhost URL shown in the terminal. The Angular PPTX Editor is rendered in the browser with a toolbar, thumbnail pane, and a slide area, as shown below.

![Output of Angular PPTX Editor](./images/angular_getting_started.png)