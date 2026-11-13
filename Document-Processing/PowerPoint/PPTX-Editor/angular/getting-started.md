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

Angular PPTX Editor enables you to view and print PowerPoint presentations in web applications. This section guides you through the steps to get started and create a PPTX Editor in an Angular application.

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
ng new pptx-editor-app
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

**Step 3:** During project setup, when prompted for the server-side rendering (SSR) option, choose the appropriate configuration.

```text
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N) N
```

**Step 4:** Select the required AI tool or 'none' if you do not need any AI tool.

```text
? Which AI tools do you want to configure with Angular best practices? https://angular.dev/ai/develop-with-ai
❯ None
  Agents.md      [ https://agents.md/                                               ]
  Claude         [ https://docs.anthropic.com/en/docs/claude-code/memory            ]
  Cursor         [ https://docs.cursor.com/en/context/rules                         ]
  Gemini         [ https://ai.google.dev/gemini-api/docs                            ]
  GitHub Copilot [ https://code.visualstudio.com/docs/copilot/copilot-customization ]
  JetBrains AI   [ https://www.jetbrains.com/help/junie/customize-guidelines.html   ]
```

**Step 5:** Navigate to the created project folder.

```bash
cd pptx-editor-app
```

## Install the PPTX Editor packages

The PPTX Editor package is available in the public npm registry and can be installed directly from `npmjs.com`.

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

The required styles for the PPTX Editor are imported in the **src/styles.css** file:

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pptxeditor/index.css";

{% endhighlight %}
{% endtabs %}

## Initialize the PPTX Editor

Modify `src/app/app.ts` to render the PPTX Editor component by adding the Angular PPTX Editor selector in its template section.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Component, ViewEncapsulation } from '@angular/core';
import {
    PptxEditorComponent, MagnificationService, NavigationService,
    PrintService, SlideShowService, ThumbnailViewService, ToolbarService
} from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    selector: 'app-root',
    template: `<div class="content-wrapper">
        <ejs-pptxeditor id="container" theme="tailwind3" documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx">
        </ejs-pptxeditor>
    </div>`,
    encapsulation: ViewEncapsulation.None,
    styleUrl: './app.css',
    standalone: true,
    imports: [PptxEditorComponent],
    providers: [ToolbarService, ThumbnailViewService, MagnificationService, NavigationService, PrintService, SlideShowService]
})

export class App { }

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application using the following command:

```bash
ng serve --open
```

After the application starts, open the localhost URL shown in the terminal. The Angular PPTX Editor is rendered in the browser with a toolbar, thumbnail pane, and a slide area.