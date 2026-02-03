---
layout: post
title: Group form fields in the Angular PDF Viewer component | Syncfusion
description: Learn how to group PDF form fields in the Syncfusion Angular PDF Viewer by assigning the same name to multiple widgets.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Group form fields in Angular PDF Viewer

The Syncfusion **Angular PDF Viewer** allows you to **group multiple form fields into a single logical field** by assigning the **same Name** to them. Grouped form fields share their values and states automatically based on the field type. You can group form fields using the **Form Designer UI** or **programmatically using APIs**, making it easy to keep related fields synchronized across the PDF document.

This page covers:
- [How form field grouping works](#how-grouping-works)
- [Field behavior based on type](#field-behavior-by-type)
- [How to group form fields using the UI](#group-using-the-form-designer-ui)
- [How to group form fields programmatically](#group-pdf-form-fields-programmatically)
- [Related references and samples](#example-scenarios)


## How grouping works

In a PDF form, multiple PDF Form Fields can represent the same logical form field. When PDF Form Fields share the same **Name**, they are treated as a group and stay synchronized.

## Field behavior by type

- **Textbox and Password** — Text entered in one widget appears in all widgets with the same Name.  
- **CheckBox** — Checking one widget sets the checked state for all checkboxes with the same Name.  
- **RadioButton** — Widgets with the same Name form a radio group; only one option can be selected.  
- **ListBox and DropDown** — The selected value is shared across widgets with the same Name.  
- **Signature and Initial fields** — Applied signature/initial is mirrored across grouped widgets.

N>Form field grouping is controlled by the **Name** property. The position of each widget is determined only by its bounds; grouping is not affected by location.

## Group using the Form Designer UI

**Steps**
1. Enable the [Form Designer toolbar](../toolbar-customization/form-designer-toolbar).
2. Add the form fields you want to group.
3. Select a form field, open **Properties**, and set the **Name** value.
4. Assign the same **Name** to all PDF Form Field that belong to the group.
5. Apply the changes and verify that updates in one widget reflect in the others.

![Grouping textboxes with the same name](../../javascript-es6/images/groupTextFileds.png)

![Grouping radio buttons with the same name](../../javascript-es6/images/groupRadiobutton.png)

## Group PDF Form Fields Programmatically

You can also group form fields during creation by assigning the same **Name** through code.

### Example Scenarios
- Two textboxes named **EmployeeId** share the same value.
- A radio button group named **Gender** allows single selection.
- Two checkboxes named **Subscribe** share the checked state.

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
        (documentLoad)="documentLoad()"
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
  public document: string =
    'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {}

  documentLoad(): void {
    // Textbox group: same name => mirrored value
    this.pdfviewer.formDesignerModule.addFormField('Textbox', {
      name: 'EmployeeId',
      bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
    } as any);

    this.pdfviewer.formDesignerModule.addFormField('Textbox', {
      name: 'EmployeeId',
      bounds: { X: 338, Y: 229, Width: 150, Height: 24 }
    } as any);

    // Radio group: same name => exclusive selection
    this.pdfviewer.formDesignerModule.addFormField('RadioButton', {
      name: 'Gender',
      bounds: { X: 148, Y: 289, Width: 18, Height: 18 },
      isSelected: false
    } as any);

    this.pdfviewer.formDesignerModule.addFormField('RadioButton', {
      name: 'Gender',
      bounds: { X: 292, Y: 289, Width: 18, Height: 18 },
      isSelected: false
    } as any);

    // CheckBox group: same name => mirrored checked state
    this.pdfviewer.formDesignerModule.addFormField('CheckBox', {
      name: 'Subscribe',
      bounds: { X: 56, Y: 664, Width: 20, Height: 20 },
      isChecked: false
    } as any);

    this.pdfviewer.formDesignerModule.addFormField('CheckBox', {
      name: 'Subscribe',
      bounds: { X: 242, Y: 664, Width: 20, Height: 20 },
      isChecked: false
    } as any);
  }
}
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./manage-form-fields/create-form-fields)
- [Modify form fields](./manage-form-fields/modify-form-fields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./form-fields-api)