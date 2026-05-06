---
layout: post
title: Form Field Events in Angular PDF Viewer control | Syncfusion
description: Learn here all about different form field in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field Events in Angular

The Syncfusion Angular PDF Viewer provides a set of form field events that report changes associated with creating, selecting, modifying, moving, resizing, or removing form fields. These events supply metadata related to the affected field and are raised during user interaction or programmatic updates.

Validation‑related events are emitted when the viewer performs operations that require confirmation of field completion, such as print or download actions.

## Supported PDF Form Field Events

The following table lists all supported form field events and their descriptions:

| Form Field events | Description | Arguments |
|---|---|---|
| [`formFieldAdd`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfieldadd) | Triggered when a new form field is added, either through the Form Designer UI or programmatically. | [`formFieldAddArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldAddArgs) |
| [`formFieldClick`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfieldclick) | Fired when a form field is clicked in the viewer. | [`formFieldClickArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldClickArgs) |
| [`formFieldDoubleClick`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfielddoubleclick) | Fired when a form field is double clicked. | [`formFieldDoubleClickArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldDoubleClickArgs) |
| [`formFieldFocusOut`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfieldfocusout) | Triggered when a form field loses focus after editing. | [`formFieldFocusOutEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldFocusOutEventArgs) |
| [`formFieldMouseLeave`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfieldmouseleave) | Fired when the mouse pointer leaves a form field. | [`formFieldMouseLeaveArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMouseLeaveArgs) |
| [`formFieldMouseOver`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfieldmouseover) | Fired when the mouse pointer moves over a form field. | [`formFieldMouseOverArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMouseoverArgs) |
| [`formFieldMove`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfieldmove) | Triggered when a form field is moved to a new position. | [`formFieldMoveArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfieldmove) |
| [`formFieldPropertiesChange`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfieldpropertieschange) | Fired when any form field property changes, such as font, color, or constraint values. | [`formFieldPropertiesChangeArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldPropertiesChangeArgs) |
| [`formFieldRemove`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfieldremove) | Triggered when a form field is deleted from the document. | [`formFieldRemoveArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldRemoveArgs) |
| [`formFieldResize`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfieldresize) | Fired when a form field is resized. | [`formFieldResizeArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldResizeArgs) |
| [`formFieldSelect`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfieldselect) | Fired when a form field is selected in the Form Designer. | [`formFieldSelectArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldSelectArgs) |
| [`formFieldUnselect`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#formfieldunselect) | Fired when a previously selected form field is unselected. | [`formFieldUnselectArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldUnselectArgs) |
| [`validateFormFields`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#validateformfields) | Fired when form field validation fails during print or download actions. | [`validateFormFieldsArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/validateFormFieldsArgs) |


## Example

Form field events can be wired on the PDF Viewer instance to execute custom logic when specific actions occur.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerModule,
  PdfViewerComponent,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        #pdfviewer
        id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        [enableFormFieldsValidation]="true"
        (formFieldAdd)="onFormFieldAdd($event)"
        (formFieldRemove)="onFormFieldRemove($event)"
        (formFieldPropertiesChange)="onFormFieldPropertiesChange($event)"
        (formFieldClick)="onFormFieldClick($event)"
        (formFieldDoubleClick)="onFormFieldDoubleClick($event)"
        (formFieldFocusOut)="onFormFieldFocusOut($event)"
        (formFieldMouseOver)="onFormFieldMouseOver($event)"
        (formFieldMouseLeave)="onFormFieldMouseLeave($event)"
        (formFieldMove)="onFormFieldMove($event)"
        (formFieldResize)="onFormFieldResize($event)"
        (formFieldSelect)="onFormFieldSelect($event)"
        (formFieldUnselect)="onFormFieldUnselect($event)"
        (validateFormFields)="validateFormFields($event)"
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
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  onFormFieldAdd(args: any) { console.log('formFieldAdd', args); }
  onFormFieldRemove(args: any) { console.log('formFieldRemove', args); }
  onFormFieldPropertiesChange(args: any) { console.log('formFieldPropertiesChange', args); }
  onFormFieldClick(args: any) { console.log('formFieldClick', args); }
  onFormFieldDoubleClick(args: any) { console.log('formFieldDoubleClick', args); }
  onFormFieldFocusOut(args: any) { console.log('formFieldFocusOut', args); }
  onFormFieldMouseOver(args: any) { console.log('formFieldMouseOver', args); }
  onFormFieldMouseLeave(args: any) { console.log('formFieldMouseLeave', args); }
  onFormFieldMove(args: any) { console.log('formFieldMove', args); }
  onFormFieldResize(args: any) { console.log('formFieldResize', args); }
  onFormFieldSelect(args: any) { console.log('formFieldSelect', args); }
  onFormFieldUnselect(args: any) { console.log('formFieldUnselect', args); }

  validateFormFields(args: any) {
    if (args && args.formField && args.formField.length > 0) {
      args.cancel = true;
      alert('Please fill all required fields. Missing: ' + args.formField[0].name);
    }
  }
}
{% endhighlight %}
{% endtabs %}

**Event Behavior Notes**

- Events triggered through the UI and programmatic APIs use the same event handlers.
- Property related events are raised immediately when changes occur.
- Validation events are triggered only during print or download operations.

[View Sample on GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples)

## See also

- [Form Designer overview](./overview)  
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)  
- [Create form fields](./manage-form-fields/create-form-fields)  
- [Edit form fields](./manage-form-fields/modify-form-fields)
- [Group form fields](./group-form-fields)  
- [Add custom data to form fields](./custom-data)  
- [Form Field Flags](./form-constrain) 
- [Form validation](./form-validation)  
- [Form fields API](./form-fields-api)