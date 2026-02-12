---
layout: post
title: Form filling in Angular PDF Viewer Control | Syncfusion
description: Learn to view, fill, export, and import form fields in Syncfusion Angular PDF Viewer, including disabling interaction and handling signatures.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Filling PDF Forms in Angular PDF Viewer

The Syncfusion PDF Viewer supports three form-filling approaches:

1.	[Filling Form Fields Programmatically](#fill-pdf-forms-programmatically)

  Form fields can be filled or updated programmatically using the [updateFormFieldsValue](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#updateformfieldsvalue) API. This approach is useful when form data must be set dynamically by application logic.

2.	[Form Filling Through User Interface](#fill-pdf-forms-through-the-user-interface)

  End users can fill PDF form fields directly through the PDF Viewer interface by typing text, selecting options, or interacting with supported form elements.

3.	[Importing Form Field Data](#fill-pdf-forms-through-import-data)

  The PDF Viewer can import form field data into an existing PDF document to prefill fields from external data sources.

## Fill PDF forms programmatically 

Form field values can be updated programmatically using the [updateFormFieldsValue](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#updateformfieldsvalue) API. This method allows applications to set or modify form field values dynamically without end-user interaction.

The following example demonstrates how to update PDF form field values programmatically:
 
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

## Fill PDF forms through the User Interface

The PDF Viewer enables end users to complete form fields directly in the interface without code. Fields accept input appropriate to their type.

![Form Filling](../../javascript-es6/images/FormFields.gif)

The PDF Viewer supports common form fields such as text boxes, check boxes, radio buttons, drop-down lists, list boxes, and signature fields. Entered values remain editable during the viewing session.

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es6/prefilledforms-cs1" %}

## Fill PDF forms through Import Data 

The PDF Viewer can import form field data into an existing PDF document using the [importFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#importformfields) API. This enables prefilling fields from external data sources without manual entry.

Imported data is mapped to PDF form fields by field name. The imported values appear in the viewer and remain editable if the document permits modification. Refer to Import Form Data for details about expected data formats and mapping rules.

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
    this.pdfviewer.importFormFields('File', FormFieldDataFormat.Json);
  }
}
{% endhighlight %}
{% endtabs %}

For more details, see [Import Form Data](./import-export-form-fields/import-form-fields).

## How to get the filled data and store it to a backing system

Filled form field data can be exported from the PDF Viewer and stored in a backing system such as a database or file storage. Exported data can be re-imported later to restore form state. See Export Form Data for supported export formats and recommended persistence patterns.

For more details, see [Export Form Data](./import-export-form-fields/export-form-fields).

## How to Validate Form Fields using `validateFormFields` Event

The [validateFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#validateformfields) event fires when a download or submit action is attempted while validation is enabled. The [retrieveFormFields()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#retrieveformfields) API returns all form fields so the application can validate values before proceeding.

Validation applies to all field types: a textbox is considered empty if it contains no text; a list box or dropdown is empty when no item is selected; a signature or initial field is empty if no signature exists; and radio buttons or checkboxes are empty when none are chosen.

Enable [enableFormFieldsValidation](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) and handle the event to cancel submit/download actions when required fields are missing.

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

  onDocumentLoad(): void {
    this.pdfviewer.formDesignerModule.addFormField('Textbox', {
      name: 'Email',
      bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
      isRequired: true,
      tooltip: 'Email is required',
    } as TextFieldSettings);

    this.pdfviewer.formDesignerModule.addFormField('Textbox', {
      name: 'Phone',
      bounds: { X: 146, Y: 300, Width: 220, Height: 24 },
      isRequired: true,
      tooltip: 'Phone number is required',
    } as TextFieldSettings);
  }

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
