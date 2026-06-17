---
title: Setup for Server-Backed Angular PDF Viewer | Syncfusion
description: Learn how to set up and run the Syncfusion Angular PDF Viewer in server-backed mode using Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular PDF Viewer (Server-Backed)

This guide explains how to create and run the **Angular PDF Viewer in server-backed mode**. In this mode, PDF rendering is handled by a server-side web service, while the Angular application acts as the client.

## Prerequisites

Ensure that your development environment meets the [Syncfusion Angular system requirements](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Create an Angular application

Use [Angular CLI](https://angular.dev/installation) to create a new Angular application, as it provides a standardized project structure, built-in testing tools, and simplified deployment.

Install Angular CLI globally, using the following command:

```
npm install -g @angular/cli
```

Create a new Angular application using the following commands:

```
ng new pdfviewer-app
cd pdfviewer-app
```

> **Note:** When prompted during project creation, select the default options: **CSS** for stylesheet, **No** for SSR/SSG, and **None** for AI tools.

## Installing Syncfusion® PDF Viewer package

Install the Syncfusion Angular PDF Viewer package from npm:

```
{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-angular-pdfviewer --save

{% endhighlight %}
{% endtabs %}
```

## Adding CSS references

Add the required Syncfusion styles to the `src/styles.css` file:

{% tabs %}
{% highlight css tabtitle="~/src/styles/styles.css" %}
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
{% endhighlight %}
{% endtabs %}

> **Note:** Refer to the [Themes topic](https://ej2.syncfusion.com/angular/documentation/appearance/overview) to learn more about built-in themes and different ways to refer to themes in an Angular project.

## Add the PDF Viewer component

Add the PDF Viewer component to your Angular application in server-backed mode. In this mode, the PDF Viewer communicates with a server-side web service through the `serviceUrl` property.

Update `src/app/app.ts` as shown below:

{% tabs %}
{% highlight ts tabtitle="~/src/app/app.ts" %}
import { Component } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
   providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [serviceUrl]="serviceUrl"
      [documentPath]="documentPath"
      style="height:640px; display:block">
    </ejs-pdfviewer>
  `
})
export class App {
  public serviceUrl: string =
    'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
{% endhighlight %}
{% endtabs %}

N> The `documentPath` property sets the PDF file path to be loaded. You can provide a remote URL, Base64 string, or local file path (e.g., `'assets/sample.pdf'`) and the `serviceUrl` property specifies the server-side PDF Viewer web service endpoint for PDF rendering. The service URL shown above is for evaluation purposes only. For production, host your own PDF Viewer web service. 

## Run the application

Run the following command to start the Angular application:

```bash
ng serve --open
```

After the application starts, open the localhost URL shown in the terminal to view the Angular PDF Viewer component in the browser. The output will appear as follows:

![Rendered PDF Viewer in browser](images/pdfviewer-control.png)

{% previewsample "/document-processing/samples/pdfviewer/angular/getting-started-cs1" %}

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Getting%20started%20-%20Server-Back)

## Run the PDF Viewer web service

To host your own PDF Viewer service:

1. Download the web service sample from GitHub:
   [GitHub Web Service Sample](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices)
2. Navigate to the appropriate folder based on your .NET version:
   - .NET 6.0 → [PdfViewerWebService_6.0](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices/tree/main/ASP.NET%20Core/PdfViewerWebService_6.0)
   - .NET 8.0 → [PdfViewerWebService_8.0](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices/tree/main/ASP.NET%20Core/PdfViewerWebService_8.0)
3. Restore dependencies and run the service:

```bash
dotnet restore
dotnet run
```

The service will run at `https://localhost:7255/pdfviewer`. Configure this URL in the `serviceUrl` property.

> **Note:** In server-backed mode, `pdfium.js` and `pdfium.wasm` are not required because all PDF rendering happens on the server.

## Angular version compatibility and older versions

For detailed compatibility information, refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility).

* [Create a Standalone PDF Viewer in Angular 17 and above with-no-standalone-flag](./how-to/create-a-standalone-pdf-viewer-in-angular-17-and-above-with-no-standalone-flag).
* [Create a Standalone PDF Viewer in Angular 17 and above without --no-standalone flag](./how-to/create-a-standalone-pdf-viewer-in-angular-17-and-above-without-no-standalone-flag).
* [Create a Standalone PDF Viewer in Angular 12](./how-to/create-a-standalone-pdf-viewer-in-angular-12)

For older Angular versions, refer to the respective Angular PDF Viewer guides.

## See also

- [Getting started Angular PDF Viewer](./getting-started)
- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)