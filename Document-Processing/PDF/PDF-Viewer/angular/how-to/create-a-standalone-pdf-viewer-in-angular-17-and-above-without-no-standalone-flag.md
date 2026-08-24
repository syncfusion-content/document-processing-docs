---
layout: post
title: How to Create a Standalone PDF Viewer in Angular 17 | Syncfusion
description: Create a standalone Angular PDF Viewer in Angular 17 and above without the standalone flag using the Syncfusion Essential JS 2 PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Create a Standalone PDF Viewer in Angular 17 (no Flag) in

This section explains the steps required to create a simple Standalone Angular PDF Viewer in Angular 17 and above without --no-standalone flag.

## Set up Angular Environment

Use the Angular CLI to create and manage Angular applications.
To install the latest Angular CLI globally use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using the Angular CLI command as follows.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in `npmjs.com` registry.

* To install PDF Viewer component, use the following command.

```bash
npm install @syncfusion/ej2-angular-pdfviewer --save
```

* Copy the contents of the ej2-pdfviewer-lib folder from ./node_modules/@syncfusion/ej2-pdfviewer/dist to the src/assets directory using the command:

```bash
cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib  src/assets/ej2-pdfviewer-lib
```

On Windows, use an equivalent command or add an npm script to copy assets cross-platform. Ensure the development server serves WebAssembly with the `Content-Type: application/wasm` MIME type; see the [Troubleshooting](./troubleshooting/troubleshooting) section for details.

## Registering PDF Viewer Module and Adding PDF Viewer component

Import PDF Viewer module into Angular application from the package `@syncfusion/ej2-angular-pdfviewer` and add the Angular PDF Viewer by using `<ejs-pdfviewer>` selector in `template` section of the `src/app/app.component.ts` file to render the PDF Viewer component.

```typescript

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  PdfViewerModule, LinkAnnotationService, BookmarkViewService,
  MagnificationService, ThumbnailViewService, ToolbarService,
  NavigationService, TextSearchService, TextSelectionService,
  PrintService, FormDesignerService, FormFieldsService,
  AnnotationService, PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  //declaration of ej2-angular-pdfviewer module into imports
  imports: [RouterOutlet, PdfViewerModule],
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                    [documentPath]='document'
                    [resourceUrl]='resource'
                    style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  styleUrl: './app.css',
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    TextSearchService, TextSelectionService, PrintService,
    AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = "https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib";
  ngOnInit(): void {
  }
}

```

## Adding CSS reference

Themes for PDF Viewer can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/angular/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/angular/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example. Install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

Add the PDF Viewer theme style reference to `src/styles.css`. The `index.css` file automatically includes all required dependent component styles for the PDF Viewer. You do not need to import individual dependency styles such as Base, Buttons, Dropdowns, Inputs, Navigations, Popups, SplitButtons, and Notifications separately:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pdfviewer/index.css';
```
## Run the application

Use the following command to run the application in the browser.

```bash
ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  PdfViewerModule, LinkAnnotationService, BookmarkViewService,
  MagnificationService, ThumbnailViewService, ToolbarService,
  NavigationService, TextSearchService, TextSelectionService,
  PrintService, FormDesignerService, FormFieldsService,
  AnnotationService, PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PdfViewerModule],
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                    [documentPath]='document'
                    [resourceUrl]='resource'
                    style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  styleUrl: './app.css',
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    TextSearchService, TextSelectionService, PrintService,
    AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = "https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib";
  ngOnInit(): void {
  }
}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

{% endhighlight %}
{% endtabs %}
