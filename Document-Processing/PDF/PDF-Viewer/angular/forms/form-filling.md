---
layout: post
title: Form filling in Angular PDF Viewer Control | Syncfusion
description: Learn to view, fill, export, and import form fields in Syncfusion Angular PDF Viewer, including disabling interaction and handling signatures.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Fill PDF form fields in Angular PDF Viewer

This guide shows how to update, import, and validate PDF form fields in the Angular PDF Viewer so you can pre-fill forms or accept user input.

**Outcome** Programmatically set field values, allow UI-driven filling, import form data, and validate fields on submit.

## Steps to fill forms

### 1. Fill form fields programmatically 

Update form field values programmatically with [`updateFormFieldsValue`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#updateformfieldsvalue).

Use the example below as a complete, runnable example for your Angular app. It retrieves form fields and updates a named field or the first available field.
{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService,
  PdfViewerComponent,
  PdfViewerModule,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="fillForm()">Fill Form Fields</button>
      <ejs-pdfviewer
        #pdfViewer
        id="pdfViewer"
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
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer') pdfviewer!: PdfViewerComponent;
  public document: string = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {}

  fillForm(): void {
    const fields =
      this.pdfviewer?.retrieveFormFields?.() || (this.pdfviewer as any).formFieldCollection || [];
    const field = fields.find((f: any) => f?.name === 'name') || fields[0];

    if (field) {
      field.value = 'John Doe';
      field.tooltip = 'First';
      this.pdfviewer.updateFormFieldsValue(field);
    } else {
      console.warn('No form fields available to update.');
    }
  }
}
{% endhighlight %}
{% endtabs %}

**Expected result:** Clicking the *Fill Form Fields* button sets the first or named field's value to *John Doe* in the viewer.

### 2. Fill form fields via UI

Users can click form controls and enter/select values. Supported field types include textboxes, checkboxes, radio buttons, dropdowns, list boxes, and signature fields. Edits are retained during the viewing session.

![Form Filling](../../javascript-es6/images/FormFields.gif)

### 3. Fill form fields through imported data

Use [`importFormFields`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#importformfields) to map external data into PDF fields by name. The example below shows how to trigger import from a button handler.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService,
  PdfViewerComponent,
  PdfViewerModule,
} from '@syncfusion/ej2-angular-pdfviewer';
import { FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="importJson()">Import JSON</button>
      <ejs-pdfviewer
        #pdfViewer
        id="pdfViewer"
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
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer') pdfviewer!: PdfViewerComponent;
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {}

  importJson(): void {
    // NOTE:
    // The first parameter can be:
    //  - a file path/url (in server mode),
    //  - or a base64 encoded File/Blob stream from an <input type="file"> in real apps.
    // Replace 'File' with your actual file or path as per your integration.
    this.pdfviewer.importFormFields('File', FormFieldDataFormat.Json);
  }
}
{% endhighlight %}
{% endtabs %}

For more details, see [Import Form Data](./import-export-form-fields/import-form-fields).

### 4. Validate form fields on submit

Enable [`enableFormFieldsValidation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) and handle [`validateFormFields`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#validateformfields) to check required fields and cancel submission when necessary. Example below shows adding required fields and validating them.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService,
  PdfViewerComponent,
  PdfViewerModule,
} from '@syncfusion/ej2-angular-pdfviewer';
import { TextFieldSettings } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        #pdfViewer
        id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        [enableFormFieldsValidation]="true"
        (documentLoad)="onDocumentLoad()"
        (validateFormFields)="onValidateFormFields($event)"
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
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer') pdfviewer!: PdfViewerComponent;
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {}

  // Runs after the document is loaded into the viewer
  onDocumentLoad(): void {
    // Add a required Email field
    this.pdfviewer.formDesignerModule.addFormField('Textbox', {
      name: 'Email',
      bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
      isRequired: true,
      tooltip: 'Email is required',
    } as TextFieldSettings);

    // Add a required Phone field
    this.pdfviewer.formDesignerModule.addFormField('Textbox', {
      name: 'Phone',
      bounds: { X: 146, Y: 300, Width: 220, Height: 24 },
      isRequired: true,
      tooltip: 'Phone number is required',
    } as TextFieldSettings);
  }

  // Validates the added fields on form submit/validate trigger
  onValidateFormFields(args: any): void {
    const fields = this.pdfviewer.retrieveFormFields();

    fields.forEach((field: any) => {
      if ((field.name === 'Email' || field.name === 'Phone') && !field.value) {
        alert(field.name + ' field cannot be empty.');
        args.isFormSubmitCancelled = true;
      }
    });
  }
}
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- If fields are not editable, confirm `FormFields` module is injected into PDF Viewer.
- If examples fail to load, verify your [`resourceUrl`](https://helpej2.syncfusion.com/angular/documentation/api/pdfviewer#resourceurl) matches the installed PDF Viewer version.
- For import issues, ensure JSON keys match the PDF field `name` values.

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create](./manage-form-fields/create-form-fields), [edit](./manage-form-fields/modify-form-fields), [style](./manage-form-fields/customize-form-fields) and [remove](./manage-form-fields/remove-form-fields) form fields
- [Edit form fields](./manage-form-fields/edit-form-fields)
- [Group form fields](./group-form-fields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./form-fields-api)
