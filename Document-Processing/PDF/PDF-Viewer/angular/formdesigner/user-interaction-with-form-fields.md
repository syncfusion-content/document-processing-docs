---
layout: post
title: User interaction in Angular Pdfviewer component | Syncfusion
description: Learn here all about User interaction with form fields in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: User interaction with form fields
documentation: ug
domainurl: ##DomainURL##
---

# User interaction with form fields

The PDF Viewer component supports interacting with form fields, such as dragging and resizing. A form field can be drawn dynamically by clicking the Form Field icon on the toolbar and drawing it on the PDF document. The supported form field types are:

* Textbox
* Password
* CheckBox
* RadioButton
* ListBox
* DropDown
* SignatureField
* InitialField

## Enable or disable the form designer toolbar

Inject the FormDesigner module and set enableFormDesignerToolbar to true to show the Form Designer icon on the toolbar. By default, enableFormDesignerToolbar is true. Use the following code to inject the FormDesigner module and enable the enableFormDesignerToolbar property.

```html
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, AnnotationService, FormDesignerService,
         FormFieldsService
       } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // Specifies the template string for the PDF Viewer component.
  template: `<div class="content-wrapper">
                 <ejs-pdfviewer id="pdfViewer"
                        [serviceUrl]='service'
                        [documentPath]='document'
                        [enableFormDesignerToolbar]='true'
                        style="height:640px;display:block">
                 </ejs-pdfviewer>
             </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfviewer')
  public pdfviewerControl: PdfViewerComponent;
  public service: string = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
  public document: string = 'FormDesigner.pdf';
  ngOnInit(): void {
  }
}
```

## Add a form field dynamically

Click the Form Field icon on the toolbar, then click on the PDF document to draw a form field. See the following GIF for reference.

![Add form field in PDF Viewer](../images/addformfield.gif)

## Drag the form field

Dragging a selected form field within the PDF document is supported. See the following GIF for reference.

![Drag form field in PDF Viewer](../images/dragformfield.gif)

## Resize the form field

Resizing a selected form field within the PDF document is supported. See the following GIF for reference.

![Resize form field in PDF Viewer](../images/resizeformfield.gif)

## Edit or update a form field dynamically

Form field properties can be edited using the Form Field Properties window. Open it by choosing Properties from the context menu that appears when a form field is selected. The following images show the available properties.

![Form field general properties panel](../images/generalproperties.png)

![Form field appearance properties panel](../images/appearanceproperties.png)

![Dropdown form field properties panel](../images/dropdownproperties.png)

## Clipboard operations with form fields

The PDF Viewer component supports clipboard operations such as cut, copy, and paste for form fields. Right-click a form field to open the context menu and choose the desired clipboard option. See the following image for the available options.

![Form field clipboard context menu options](../images/clipboardformfield.png)

## Undo and redo

Form field actions can be undone and redone at runtime. Use the following code to perform undo/redo actions.

```html
<script>
    window.onload = function () {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.undo();
        pdfViewer.redo();
    }
</script>

```