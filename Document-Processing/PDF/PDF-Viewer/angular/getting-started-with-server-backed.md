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

This guide explains how to create the PDF Viewer component and configure its features in Angular 21 using the Essential JS 2 in server-backed mode.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Set up the development environment

You can use the [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install the latest Angular CLI globally use the following command.

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

### Installing a specific version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create an Angular application

Start a new Angular application using the Angular CLI command as follows.

```bash
ng new my-app
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

![Initial_setup](images/getting-started-styles.png)

* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new my-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial_setup](images/getting-started-ssr.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](images/getting-started-ai.png)

* Navigate to your newly created application directory:

```bash
cd my-app
```

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer package

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

Add the Angular PDF Viewer by using `<ejs-pdfviewer>` selector in `template` section of the `src/app/app.ts` file to render the PDF Viewer component.

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
  imports: [ PdfViewerModule ],
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class App implements OnInit {
  public service = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  ngOnInit(): void {
  }
}
```
N> The Web API endpoint at https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/ used in the `serviceUrl` property is provided for demonstration and evaluation only. For production, host a dedicated web service with the appropriate server configuration. Reusable deployment options include the [GitHub web service example](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) and the official [Docker image](https://hub.docker.com/r/syncfusion/pdfviewer-server). Standalone mode is strongly recommended for production deployments.

## Run the application

Use the following command to run the application in browser.

```javascript
ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/pdfviewer/angular/getting-started-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}


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

N> To create a PDF Viewer `serviceUrl`, follow the steps in [Create PDF Viewer service](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/how-to/create-pdfviewer-service).

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

6. The PDF Viewer server instance runs at `https://localhost:7255`. Navigate to `https://localhost:7255/pdfviewer` to see the default GET response. Bind this URL to the `serviceUrl` property of the PDF Viewer as shown below.

   ```javascript
   export class App implements OnInit {
      public service = 'https://localhost:7255/pdfviewer';
      public document = 'PDF_Succinctly.pdf';
      ngOnInit(): void {
      }
   ```

N> In server-backed mode, do not include `pdfium.js` and `pdfium.wasm`. Unlike standalone mode, the server-backed PDF Viewer renders PDFs on the server; these files and their copy steps are not required for deployment in this context.

N> Refer to the [Angular PDF Viewer feature tour](https://www.syncfusion.com/pdf-viewer-sdk) for an overview of capabilities. Explore the [Angular PDF Viewer example](https://document.syncfusion.com/demos/pdf-viewer/angular/#/tailwind3/pdfviewer/default.html) to see core features in action.

N> For hosting the web service on Linux, include the [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1) package. For AWS environments, consider the NuGet packages listed below.

| **Amazon Web Services (AWS)** |**NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.116.1)|

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Getting%20started%20-%20Server-Back).
