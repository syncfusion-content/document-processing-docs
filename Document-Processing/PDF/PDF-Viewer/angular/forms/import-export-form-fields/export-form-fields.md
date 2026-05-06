---
layout: post
title: Export form data in the Angular PDF Viewer component | Syncfusion
description: Learn how to export PDF form field data (FDF, XFDF, JSON, and as an object) using the Syncfusion Angular PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export PDF Form Data from Angular PDF Viewer

This guide shows concise, actionable steps to export PDF form field data for storage or integration. It covers:

- Exporting as [FDF](#3-export-as-fdf), [XFDF](#4-export-as-xfdf), and [JSON](#5-export-as-json) using [`exportFormFields()`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#exportformfields).
- Exporting as a [JavaScript object](#6-export-as-a-javascript-object) using [`exportFormFieldsAsObject()`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#exportformfieldsasobject).

## Steps

### 1. Configure the PDF Viewer 

Install and import the viewer with required services.

{% highlight ts %}
import {
    PdfViewerComponent, ToolbarService, MagnificationService, NavigationService,
    AnnotationService, TextSelectionService, TextSearchService, FormFieldsService,
    FormDesignerService, PdfViewerModule, FormFieldDataFormat
} from '@syncfusion/ej2-angular-pdfviewer';
import { Component, ViewChild } from '@angular/core';
{% endhighlight %}

### 2. Initialize reference 

Initialize the viewer with a `@ViewChild` so you can call export methods.

{% highlight ts %}
@ViewChild('pdfViewer') public pdfviewer!: PdfViewerComponent;
{% endhighlight %}

### 3. Export as FDF

Use [`exportFormFields(destination?, FormFieldDataFormat.Fdf)`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#exportformfields) to download an FDF file.

{% highlight ts %}
this.pdfviewer.exportFormFields('FormData', FormFieldDataFormat.Fdf);
{% endhighlight %}

### 4. Export as XFDF

Use [`FormFieldDataFormat.Xfdf`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formfielddataformat) to export XFDF.

{% highlight ts %}
this.pdfviewer.exportFormFields('FormData', FormFieldDataFormat.Xfdf);
{% endhighlight %}


### 5. Export as JSON

Use [`FormFieldDataFormat.Json`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formfielddataformat) to export form data as a JSON file.

{% highlight ts %}
this.pdfviewer.exportFormFields('FormData', FormFieldDataFormat.Json);
{% endhighlight %}

### 6. Export as a JavaScript object

Use [`exportFormFieldsAsObject(format)`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#exportformfieldsasobject) to get data for API calls or storing in a database.

{% highlight ts %}
const data = await this.pdfviewer.exportFormFieldsAsObject();
{% endhighlight %}

## Complete example

The example below provides a single page with buttons to export in all supported formats. It uses the same imports shown above and is ready to run in a typical Angular app.

{% tabs %}
{% highlight ts %}
import { Component, ViewChild } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService,
  PdfViewerModule,
  PdfViewerComponent,
  FormFieldDataFormat,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="control-section">
      <div style="margin-bottom: 12px">
        <button (click)="exportFdf()" id="exportFdf">Export FDF</button>
        <button (click)="exportXfdf()" id="exportXfdf">Export XFDF</button>
        <button (click)="exportJson()" id="exportJson">Export JSON</button>
        <button (click)="exportObj()" id="exportObj">Export Object</button>
      </div>
      <ejs-pdfviewer #pdfViewer id="container"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        style="height: 680px; width: 100%"></ejs-pdfviewer>
    </div>
  `,
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService,
  ],
})
export class AppComponent {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  @ViewChild('pdfViewer') public pdfviewer!: PdfViewerComponent;

  exportedData: object | undefined;

  exportFdf(): void {
    this.pdfviewer.exportFormFields('FormData', FormFieldDataFormat.Fdf);
  }

  exportXfdf(): void {
    this.pdfviewer.exportFormFields('FormData', FormFieldDataFormat.Xfdf);
  }

  exportJson(): void {
    this.pdfviewer.exportFormFields('FormData', FormFieldDataFormat.Json);
  }

  exportObj(): void {
    this.pdfviewer.exportFormFieldsAsObject(FormFieldDataFormat.Fdf).then(data => {
      this.exportedData = data;
      console.log('Exported object:', this.exportedData);
    });
  }
}
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- Ensure `FormFieldsService` and [`FormDesignerService`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formdesigner) are injected when using form APIs.
- Confirm [`resourceUrl`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#resourceurl) points to the matching `ej2-pdfviewer-lib` version.
- If exports fail in restrictive browsers, check popup/download settings and CORS for hosted endpoints.
- For server-side persistence, use [`exportFormFieldsAsObject()`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#exportformfieldsasobject) and send the result to your API.

[View Sample on GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Import form fields](./import-form-fields)
- [Import Export Events](./import-export-events)
- [Create form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)