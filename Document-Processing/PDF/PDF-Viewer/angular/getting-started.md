---
title: Getting Started with Angular Standalone PDF Viewer | Syncfusion
description: Learn how to set up and run the Angular Standalone PDF Viewer component using Syncfusion Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Standalone PDF Viewer Component

This section explains how to create a simple Angular application and add the standalone [Syncfusion® Angular PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/angular-pdf-viewer) component with the minimum required setup.

## Prerequisites

[System requirements for Syncfusion® Angular components](https://ej2.syncfusion.com/angular/documentation/system-requirement)

## Create an Angular application

Use [Angular CLI](https://angular.dev/installation) to create a new Angular application, as it provides a standardized project structure, built-in testing tools, and simplified deployment. Use an Angular CLI version that matches the target Angular version (e.g., Angular CLI 17 for Angular 17 projects).

Install Angular CLI globally using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install -g @angular/cli

{% endhighlight %}
{% endtabs %}

Create a new Angular application using the following commands:

{% tabs %}
{% highlight bash tabtitle="CLI" %}

ng new pdfviewer-app
cd pdfviewer-app

{% endhighlight %}
{% endtabs %}

> **Note:** When prompted during project creation, select the default options: **CSS** for stylesheet, **No** for SSR/SSG, and **None** for AI tools. The available prompts may vary by Angular CLI version; accept the default values for any prompts not listed here.

## Install the Syncfusion® Angular PDF Viewer package

Install the Syncfusion [Angular PDF Viewer](https://www.npmjs.com/package/@syncfusion/ej2-angular-pdfviewer) package from npm:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-angular-pdfviewer --save

{% endhighlight %}
{% endtabs %}

## Add CSS references

Add the following PDF Viewer and dependent component style references to the `src/styles.css` file.

{% tabs %}
{% highlight css tabtitle="styles.css" %}

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

## Add the Syncfusion® Angular PDF Viewer component to the application

Add the PDF Viewer component to your Angular application to render and interact with PDF documents. The component requires the **PdfViewerModule** and its associated services (for full functionality).

Update `src/app/app.ts` as shown below:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

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
               FormDesignerService, FormFieldsService, AnnotationService, PageOrganizerService],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourcesUrl"
      style="height:640px; display:block">
    </ejs-pdfviewer>
  `
})
export class App {
  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourcesUrl: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
}

{% endhighlight %}
{% endtabs %}

N> The `documentPath` property sets the PDF file path to be loaded. You can provide a remote URL, Base64 string, or local file path (e.g., `'assets/sample.pdf'`) and the `resourceUrl` property specifies the PDFium library resources path required for PDF rendering. This example uses CDN-hosted resources. For local resources, refer to [Load PDF Viewer with Local Resources](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/how-to/load-pdf-viewer-with-local-resources).

## Run the application

Run the following command to start the Angular application:

{% tabs %}
{% highlight bash tabtitle="CLI" %}

ng serve --open

{% endhighlight %}
{% endtabs %}

After the application starts, open `http://localhost` (the default dev server URL) in the browser to view the Angular PDF Viewer component. The output will appear as follows:

![Rendered PDF Viewer in browser](images/pdfviewer-control.png)

{% previewsample "/document-processing/samples/pdfviewer/angular/getting-started-cs1-standalone" %}

> [View Sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Getting%20started%20-%20Standalone)

## Video tutorial

If you prefer a video walkthrough, watch the following tutorial to get started quickly with the Angular PDF Viewer.

{% youtube "https://www.youtube.com/watch?v=r8IPr_nTiHo&t=1s" %}

## Angular version compatibility

For detailed compatibility information, refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility).

## Older versions

For older Angular versions, refer to the following guides:
* [Create a Standalone PDF Viewer in Angular 17 and above with the --no-standalone flag](./how-to/create-a-standalone-pdf-viewer-in-angular-17-and-above-with-no-standalone-flag).
* [Create a Standalone PDF Viewer in Angular 17 and above without the --no-standalone flag](./how-to/create-a-standalone-pdf-viewer-in-angular-17-and-above-without-no-standalone-flag).
* [Create a Standalone PDF Viewer in Angular 12](./how-to/create-a-standalone-pdf-viewer-in-angular-12)

## See also

- [Getting started with Server-Backed Angular PDF Viewer](./getting-started-with-server-backed)
- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)
