---
layout: post
title: Getting started with Angular PDF Viewer (server-backed) | Syncfusion
description: Learn how to set up and use the Syncfusion Angular PDF Viewer in server-backed mode, including module injection and web service configuration.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular PDF Viewer (server-backed)

This guide explains how to create the PDF Viewer component and configure its features in Angular using the Essential JS 2 in server-backed mode.

## Set up the development environment

You can use the [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install the latest Angular CLI globally use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the Angular CLI command as follows.

```bash
ng new my-app
cd my-app
```

## Add Syncfusion JavaScript packages

All the available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install PDF Viewer component, use the following command.

```bash
npm install @syncfusion/ej2-angular-pdfviewer --save
```

## Import Syncfusion CSS styles

Add the component CSS in the `~/src/styles.css` file, as shown below:

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

## Add the PDF Viewer component

Import PDF Viewer module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-pdfviewer` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the PdfViewer Module for the PDF Viewer component
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';
import { AppComponent } from './app.component';

@NgModule({
  //declaration of ej2-angular-pdfviewer module into NgModule
  imports: [BrowserModule, PdfViewerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppModule { }
```

Add the Angular PDF Viewer by using `<ejs-pdfviewer>` selector in `template` section of the `src/app/app.component.ts` file to render the PDF Viewer component.

```typescript
import { Component, OnInit } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                       [serviceUrl]='service'
                       [documentPath]='document'
                       style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
  public service = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  ngOnInit(): void {
  }
}
```
N> The Web API link https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/ used in the `serviceUrl` property is intended for demonstration and evaluation only. For production, host your own web service with the required server configuration. You can reuse the [GitHub web service example](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/pdfviewer-server). **Standalone mode is strongly recommended.**

## Run the application

Use the following command to run the application in browser.

```javascript
ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

N> If you are using an Angular version below 17, you need import the **AppModule** in the **main.ts** file

```typescript

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```

{% previewsample "/document-processing/samples/pdfviewer/angular/getting-started-cs1" %}

> For PDF Viewer serviceUrl creation, follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/how-to/create-pdfviewer-service)

## Module injection

To enable additional features, inject the required modules. The following modules extend the PDF Viewer's functionality:

* `LinkAnnotationService`: Enables hyperlink navigation.
* `BookmarkViewService`: Displays and navigates document bookmarks.
* `MagnificationService`: Provides zoom in/out operations.
* `NavigationService`: Enables page navigation.
* `TextSelectionService`: Enables text selection.
* `ThumbnailViewService`: Displays page thumbnails for navigation.
* `ToolbarService`: Enables the built-in toolbar UI.
* `PrintService`: Enables printing.
* `AnnotationService`: Enables annotation features.
* `TextSearchService`: Enables text search.
* `FormFieldsService`: Enables form field support.
* `FormDesignerService`: Enables designing and editing of form fields.
* `PageOrganizerService`: Enables page organization features.

Inject modules using the `providers` property in `@NgModule`.

> To create a PDF Viewer `serviceUrl`, follow the steps in [Create PDF Viewer service](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/how-to/create-pdfviewer-service).

## Run the PDF Viewer web service

1. Download the sample from the [web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices).

2. Navigate to the `ASP.NET Core` folder and open it in a command prompt.

3. Navigate to the appropriate subfolder based on your .NET version:

   - .NET 6.0 → `PdfViewerWebService_6.0`
   - .NET 8.0 → `PdfViewerWebService_8.0`

4. Restore packages:

```
 dotnet restore
```

5. Run the web service:

```
 dotnet run
```

6. The PDF Viewer server instance runs at `https://localhost:5001`. Navigate to `https://localhost:5001/pdfviewer` to see the default GET response. Bind this URL to the `serviceUrl` property of the PDF Viewer as shown below.

   ```javascript
   export class AppComponent implements OnInit {
      public service = 'https://localhost:5001/pdfviewer';
      public document = 'PDF_Succinctly.pdf';
      ngOnInit(): void {
      }
   ```

N> In server-backed mode, do not include `pdfium.js` and `pdfium.wasm`. Unlike standalone mode, the server-backed PDF Viewer renders PDFs on the server. These files and their copy steps are not required for deployment in this context.

> Refer to the [Angular PDF Viewer feature tour](https://www.syncfusion.com/pdf-viewer-sdk) for an overview of capabilities. Explore the [Angular PDF Viewer example](https://document.syncfusion.com/demos/pdf-viewer/angular/#/tailwind3/pdfviewer/default.html) to see core features in action.

N> For hosting the web service on Linux, include [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1). For AWS environments, use the following packages:

| **Amazon Web Services (AWS)** |**NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.116.1)|

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Getting%20started%20-%20Server-Back).
