---
layout: post
title: Remove form fields in the Angular PDF Viewer component | Syncfusion
description: Learn how to remove PDF form fields using the UI and programmatically in the Syncfusion Angular PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Remove PDF Form Fields from a PDF in Angular

## Remove Form Fields Using the UI
**Steps:**
1.	Enable **Form Designer mode**.
2.	Select the form field.
3.	Click **Delete** in the toolbar or press the **Delete** key.
![Form Designer toolbar with Delete icon](../../../javascript-es6/images/ui-del-formfields.png)

## Remove Form Fields Programmatically
Use **deleteFormField()** with a field reference or ID.

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
      <button (click)="deleteAllFields()">Delete Form Fields</button>
      <button (click)="deleteById()">Delete First Field By ID</button>

      <ejs-pdfviewer #pdfViewer id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        style="height: 640px; display: block;">
      </ejs-pdfviewer>
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

  deleteAllFields(): void {
    const fields = [...this.pdfviewer.formFieldCollections];
    fields.forEach((field: any) => this.pdfviewer.formDesignerModule.deleteFormField(field));
  }

  deleteById(): void {
    const collections = this.pdfviewer.formFieldCollections;
    if (collections && collections.length > 0) {
      const id = collections[0].id;
      if (id) {
        this.pdfviewer.formDesignerModule.deleteFormField(id);
      }
    }
  }
}
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Modify form fields](./modify-form-fields)
- [Customize form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)