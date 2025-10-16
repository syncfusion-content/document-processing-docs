---
layout: post
title: Create a standalone PDF Viewer in Angular 17+ without --no-standalone flag | Syncfusion
description: Learn how to create a standalone PDF Viewer in Angular 17 and above without the `--no-standalone` flag using Syncfusion Essential JS 2 features.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Create a PDF Viewer in Angular 17+ without --no-standalone flag

This section explains the steps required to create a simple standalone Angular PDF Viewer in Angular 17 and above without the `--no-standalone` flag.

## Setup Angular environment

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to set up Angular applications. To install the latest Angular CLI globally, use the following command:

```bash
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the Angular CLI command as follows:

```bash
ng new my-app
cd my-app
```

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer package

All available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the `npmjs.com` registry.

* To install the PDF Viewer component, use the following command:

```bash
npm install @syncfusion/ej2-angular-pdfviewer --save
```

* Copy the contents of the `ej2-pdfviewer-lib` folder from `./node_modules/@syncfusion/ej2-pdfviewer/dist` to the `src/assets` directory using the command:

```bash
cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib  src/assets/ej2-pdfviewer-lib
```

* Confirm that an `ej2-pdfviewer-lib` directory exists within the public directory, housing the assets of the PDF Viewer library.

* Validate that the server has been configured to utilize the `Content-Type: application/wasm` MIME type. Additional information can be found in the [Troubleshooting section](./troubleshooting/troubleshooting).

## Register PDF Viewer Module and add PDF Viewer component

Import the PDF Viewer module into the Angular application from the package `@syncfusion/ej2-angular-pdfviewer`, and add the Angular PDF Viewer by using the `<ejs-pdfviewer>` selector in the `template` section of the `src/app/app.component.ts` file to render the PDF Viewer component.

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
  styleUrl: './app.component.css',
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

## Add CSS reference

Add the Angular PDF Viewer component’s styles as shown below in the `src/styles.css` file.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
```
## Run the application

Use the following command to run the application in a browser:

```javascript
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
  styleUrl: './app.component.css',
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
