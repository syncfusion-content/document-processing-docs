---
layout: post
title: Import form data in the Angular PDF Viewer component | Syncfusion
description: Learn how to import PDF form field data (FDF, XFDF, JSON, and from an object) using the Syncfusion Angular PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import PDF Form Data into Angular PDF Viewer

This guide shows how to import form field values into an already loaded PDF in the EJ2 Angular PDF Viewer. **Supported import formats**: FDF, XFDF, JSON, and importing from a JavaScript object.

## Steps to import data

1. Import the viewer, inject `FormFieldsService` / `FormDesignerService`, and create a `@ViewChild` to call `importFormFields`.

2. Call [`importFormFields(data, format)`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#importformfields) where `format` is one of `FormFieldDataFormat.Fdf`, `FormFieldDataFormat.Xfdf`, or `FormFieldDataFormat.Json`. `data` may be a file path (for server/file-based imports) / base64 string or a JavaScript object mapping field names to values.

3. Verify the form fields are populated after the import completes. For server-backed imports, ensure [`serviceUrl`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#serviceurl) is configured and the import file is accessible by the server.

## Example

The example below provides a minimal Angular app with four buttons to import FDF, XFDF, JSON, or an object. Replace the import file identifiers (`'File'`) with your file path or implement a file upload to pass a Blob/stream.

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
        <button (click)="importFdf()" style="margin-right: 8px">Import FDF</button>
        <button (click)="importXfdf()" style="margin-right: 8px">Import XFDF</button>
        <button (click)="importJson()" style="margin-right: 8px">Import JSON</button>
        <button (click)="importFromObject()">Import from Object</button>
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
  public document: string = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  @ViewChild('pdfViewer') public pdfviewer!: PdfViewerComponent;

  // The file for importing should be accessible at the given path or as a base 64 string depending on your integration
  importFdf(): void {
    this.pdfviewer.importFormFields('File', FormFieldDataFormat.Fdf as any);
  }

  importXfdf(): void {
    this.pdfviewer.importFormFields('File', FormFieldDataFormat.Xfdf as any);
  }

  importJson(): void {
    this.pdfviewer.importFormFields('File', FormFieldDataFormat.Json as any);
  }

  // Import from a JavaScript object (fieldName: value)
  importFromObject(): void {
    const formDataObject = {
      'fullname': 'Jane Doe',
      'email': 'jane.doe@example.com',
      'agreeTerms': 'yes'
    };
    this.pdfviewer.importFormFields(JSON.stringify(formDataObject), FormFieldDataFormat.Json as any);
  }
}
{% endhighlight %}
{% endtabs %}

**Expected result**: The loaded PDF's interactive form fields are populated with the values from the imported file/object. For object imports, fields matching the object keys receive the provided values.

## Troubleshooting

- If imports do not populate fields, confirm the field names in the source match the PDF form field names.
- For file-based imports, ensure you use server mode and that the import file is accessible to the viewer.
- If using a Blob, pass the encoded base64 string of Blob/stream instead of the string `'File'`.
- Check browser console for network errors when the viewer attempts to fetch import files.

[View Sample on GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Export form fields](./export-form-fields)
- [Import Export Events](./import-export-events)
- [Create Edit form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)