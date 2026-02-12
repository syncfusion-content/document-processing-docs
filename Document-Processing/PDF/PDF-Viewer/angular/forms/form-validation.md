---
layout: post
title: Form validation in the Angular PDF Viewer component | Syncfusion
description: Learn how to enable built-in form field validation and validate missing required fields in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Validate PDF Form Fields in Angular PDF Viewer

The Syncfusion **Angular PDF Viewer** provides built-in support for **validating form fields** before end users perform actions such as **printing**, **downloading**, or **submitting** a PDF document. Validation ensures that all required form fields are completed before allowing these actions to proceed.
This feature helps enforce data completeness and improves the reliability of collected form data.

## How PDF Form Validation Works

Form field validation follows this flow:
- Enable validation using the [enableFormFieldsValidation](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) property.
- Handle the [validateFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#validateformfields) event to determine which required fields are not filled.
- When validation is enabled and an end user attempts to print, download, or submit the document:
- The [validateFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#validateformfields) event is triggered.
- Unfilled required fields are listed in `args.nonFillableFields`.
- The application can cancel the action, display an error message, or move focus to an invalid field.

## Enable PDF Form Field Validation

Enable validation by setting the [enableFormFieldsValidation](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#validateformfields) property to `true` and handling the `validateFormFields` event.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService,
  PdfViewerComponent,
} from '@syncfusion/ej2-angular-pdfviewer';

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
        [textFieldSettings]="textFieldSettings"
        (documentLoad)="documentLoad()"
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
  @ViewChild('pdfViewer') public pdfviewer: PdfViewerComponent;
  public document: string = '';
  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public textFieldSettings: any = { isRequired: true };

  ngOnInit(): void {
    this.document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  }

  documentLoad(): void {
    // Add a required textbox once the document is loaded
    this.pdfviewer.formDesignerModule.addFormField('Textbox', {
      name: 'Email',
      bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
      isRequired: true,
      tooltip: 'Email is required',
    } as any);
  }

  onValidateFormFields(args: any): void {
    // Triggers when required fields are empty on submit/validate
    if (args && args.formField && args.formField.length > 0) {
      // Example: prevent the pending action and notify the end user
      args.cancel = true;
      alert('Please fill all required fields. Missing: ' + args.formField[0].name);
    }
  }
}
{% endhighlight %}
{% endtabs %}

## Mark Fields as Required

Only fields marked as **required** participate in validation. Use the `isRequired` property when creating or updating a form field.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
// Creation of a required textbox (inside documentLoad) that blocks printing until it is filled.
this.pdfviewer.formDesignerModule.addFormField('Textbox', {
  name: 'Email',
  bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
  isRequired: true,
  tooltip: 'Email is required'
} as any);
{% endhighlight %}
{% endtabs %}

## Handle PDF Form Validation Results

In the [validateFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#validateformfields) event, the application can control the behavior when fields are missing. Typical actions include:
- Cancel the print or download operation
- Display an error message to the end user
- Set focus to the first unfilled required field

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
// Enable validation and handle the validateFormFields event in Angular
this.pdfviewer.enableFormFieldsValidation = true;
// Handler runs when required fields are missing; set args.cancel = true to prevent the action
onValidate(args: any): void {
  if (args && args.formField && args.formField.length > 0) {
    args.cancel = true;
    alert('Please fill all required fields. Missing: ' + args.formField[0].name);
  }
}
{% endhighlight %}
{% endtabs %}

## Tips

- Use `isRequired` to clearly mark mandatory fields.
- Validation is triggered only during [print](../print), [download](../download), or **submit** actions.
- For custom validation logic (such as validating an email format):
  - Retrieve all form fields using [retrieveFormFields()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#retrieveformfields).
  - Apply custom checks before allowing the action to proceed.

## See Also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./manage-form-fields/create-form-fields)
- [Modify form fields](./manage-form-fields/modify-form-fields)
- [Group form fields](./group-form-fields)
- [Add custom data to PDF form fields](./custom-data)
- [Form flags](./form-constrain)
- [Form fields API](./form-fields-api)