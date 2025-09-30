---
layout: post
title: Getting started with Angular PDF Viewer component | Syncfusion
description: Checkout and learn about Getting started with Angular PDF Viewer component of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular PDF Viewer

This section explains the steps required to create a simple Angular PDF Viewer and demonstrates basic usage of the component in an Angular CLI application.

## Set up the Angular environment

The [`Angular CLI`](https://github.com/angular/angular-cli) can be used to set up Angular applications.
To install the latest Angular CLI globally, use the following command.

```bash
npm install -g @angular/cli
```

N> Use the command **npm install --save @angular/cli@12.0.2** to install the Angular CLI version 12.0.2

## Create an Angular application

Start a new Angular application using the Angular CLI command, as follows.

```bash
ng new my-app
cd my-app
```

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer package

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the `npmjs.com` registry. To install the PDF Viewer component, use the following command.

```bash
npm install @syncfusion/ej2-angular-pdfviewer --save
```

## Register the PDF Viewer module

Import the PDF Viewer module into the Angular application (app.module.ts) from the package `@syncfusion/ej2-angular-pdfviewer` [src/app/app.module.ts].

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

## Add CSS references

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

## Add the PDF Viewer component

Add the Angular PDF Viewer using the `<ejs-pdfviewer>` selector in the `template` section of the `src/app/app.component.ts` file to render the component.

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
N> The Web API hosted link https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer used in the PDF viewer's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, host a web service with the required server configurations. The [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/pdfviewer-server) can be used as a starting point for hosting a web service and assigning the serviceUrl property. **Standalone mode is strongly recommended.**

## Run the application

Use the following command to run the application in a browser.

```javascript
ng serve --open
```

The output appears as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

N> For Angular versions below 17, import the **AppModule** in the **main.ts** file.

```typescript

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```

{% previewsample "Document-Processing/samples/pdfviewer/angular/getting-started-cs1/index.html" %}

> For PDF Viewer serviceUrl creation, follow the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/how-to/create-pdfviewer-service).

## Run the PDF Viewer web service

1. Download the sample from the [Web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) link.

2. Navigate to the `ASP.NET Core` folder and open it in the command prompt.

3. Navigate to the appropriate subfolder based on your .NET version:

   - .NET 6.0 → `PdfViewerWebService_6.0`
   - .NET 8.0 → `PdfViewerWebService_8.0`

4. Use the below command to restore the required packages.

   ```sh
   dotnet restore
   ```

5. Use the below command to run the web service.

   ```sh
   dotnet run
   ```

6. The PDF Viewer server instance runs on `localhost:5001`. Navigate to the PDF Viewer web control at `localhost:5001/pdfviewer`, which returns the default GET response. The link can be bound to the `serviceUrl` property of the PDF Viewer as shown below.

   ```javascript
   export class AppComponent implements OnInit {
      public service = 'https://localhost:5001/pdfviewer';
      public document = 'PDF_Succinctly.pdf';
      ngOnInit(): void {
      }
   ```
N> When configuring the server-backed PDF Viewer, including the pdfium.js and pdfium.wasm files is not required. Unlike the standalone PDF Viewer, which relies on these files for local rendering, the server-backed PDF Viewer fetches and renders PDFs on the server. Consequently, the copy command for deployment can be excluded, as these files are not required in this context.

N> For hosting the web service on the Linux platform, ensure to include the [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1). Additionally, for AWS environments, utilize the following packages:

| **Amazon Web Services (AWS)** |**NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.116.1)|

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Getting%20started%20-%20Server-Back).
