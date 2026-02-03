---
layout: post
title: Export form data in the Angular PDF Viewer component | Syncfusion
description: Learn how to export PDF form field data (FDF, XFDF, JSON, and as an object) using the Syncfusion Angular PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export PDF Form Data from Angular PDF Viewer

The PDF Viewer allows you to export form field data in multiple formats for easy storage or integration. Supported formats:

- [FDF](#export-as-fdf)
- [XFDF](#export-as-xfdf)
- [JSON](#export-as-json)
- [JavaScript Object](#export-as-object) (for custom persistence)

## Available methods

- [exportFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportformfields)(destination?, format) — Exports data to a file in the specified format.
- [exportFormFieldsAsObject](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportformfieldsasobject)(format) — Exports data as a JavaScript object for custom handling.
- [importFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#importformfields)(sourceOrObject, format) — Import data back into the PDF.

## How to export

Use [exportFormFields()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportformfields) with an optional destination path and the format type.

### Export as FDF
The following example exports form field data as FDF.

{% highlight ts tabtitle="Standalone" %}
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
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="exportFdf()">Export FDF</button>
      <ejs-pdfviewer #pdfViewer id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        style="height: 640px; width: 100%"></ejs-pdfviewer>
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
  public document: string = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  @ViewChild('pdfViewer') public pdfviewer!: PdfViewerComponent;

  exportFdf(): void {
    // Destination is optional; if omitted the browser will prompt.
    this.pdfviewer.exportFormFields('FormData', FormFieldDataFormat.Fdf);
  }
}
{% endhighlight %}

### Export as XFDF
The following example exports form field data as XFDF.

{% highlight ts tabtitle="Standalone" %}
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
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="exportXfdf()">Export XFDF</button>
      <ejs-pdfviewer #pdfViewer id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        style="height: 640px; width: 100%"></ejs-pdfviewer>
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
  public document: string = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  @ViewChild('pdfViewer') public pdfviewer!: PdfViewerComponent;

  exportXfdf(): void {
    this.pdfviewer.exportFormFields('FormData', FormFieldDataFormat.Xfdf);
  }
}
{% endhighlight %}


### Export as JSON
The following example exports form field data as JSON.

{% highlight ts tabtitle="Standalone" %}
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
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="exportJson()">Export JSON</button>
      <ejs-pdfviewer #pdfViewer id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        style="height: 640px; width: 100%"></ejs-pdfviewer>
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
  public document: string = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  @ViewChild('pdfViewer') public pdfviewer!: PdfViewerComponent;

  exportJson(): void {
    this.pdfviewer.exportFormFields('FormData', FormFieldDataFormat.Json);
  }
}
{% endhighlight %}

### Export as Object

Use [exportFormFieldsAsObject()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportformfieldsasobject) to obtain form data as a JavaScript object for database or API integration.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
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
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="exportObj()">Export Object</button>
      <ejs-pdfviewer #pdfViewer id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        style="height: 640px; width: 100%"></ejs-pdfviewer>
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
  public document: string = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  @ViewChild('pdfViewer') public pdfviewer!: PdfViewerComponent;

  exportedData: object | undefined;

  exportObj(): void {
    this.pdfviewer.exportFormFieldsAsObject(FormFieldDataFormat.Fdf).then(data => {
      this.exportedData = data; // Persist or send to server
      console.log('Exported object:', this.exportedData);
    });
    // Alternatives:
    // this.pdfviewer.exportFormFieldsAsObject(FormFieldDataFormat.Xfdf).then(...)
    // this.pdfviewer.exportFormFieldsAsObject(FormFieldDataFormat.Json).then(...)
  }
}
{% endhighlight %}
{% endtabs %}

## Common Use Cases

- Save user-entered data to your server without altering the original PDF.
- Export as JSON for REST API integration.
- Export as FDF/XFDF for compatibility with other PDF tools.
- Export as Object to merge with app state or store securely.
- Automate exports after [validation](../form-validation) using [validateFormFields()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#validateformfields)

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