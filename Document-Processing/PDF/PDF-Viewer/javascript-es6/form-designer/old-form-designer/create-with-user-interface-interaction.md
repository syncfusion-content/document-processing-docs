---
layout: post
title: Design form fields in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to add, drag, resize, edit, and manage form fields using the UI in the Syncfusion TypeScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Create with user interface interaction for TypeScript

The PDF Viewer component supports interactive form field design, including drawing, dragging, and resizing fields directly on the page. Click the Form Field icon on the toolbar to add a field and place it on the document. Supported form field types include:

- Textbox
- Password
- CheckBox
- RadioButton
- ListBox
- DropDown
- Signature field
- Initial field

## Enable or Disable form designer toolbar

Inject the FormDesigner module and set enableFormDesignerToolbar to true to display the Form Designer icon on the toolbar. The default value is true. Use the following code to enable the toolbar option.

```ts
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.enableFormDesignerToolbar= true;

```

## Add the form field dynamically

Click the Form Field icon on the toolbar, then click on the PDF to draw a form field. See the following GIF for reference.

![Add a form field using the toolbar](../images/addformfield.gif)

## Drag the form field

Drag the selected form field to reposition it within the PDF document. See the following GIF for reference.

![Drag a selected form field in the PDF Viewer](../images/dragformfield.gif)

## Resize the form field

Resize the selected form field using the resize handles on the field boundary. See the following GIF for reference.

![Resize a selected form field in the PDF Viewer](../images/resizeformfield.gif)

## Edit or Update the form field dynamically

Edit form field properties using the Form Field Properties dialog. Open it by right-clicking a form field and selecting Properties from the context menu. The following images show examples of available settings.

![Form field general properties dialog](../images/generalproperties.png)

![Form field appearance properties dialog](../images/appearanceproperties.png)

![DropDown field properties dialog](../images/dropdownproperties.png)

## Clipboard operation with form field

The PDF Viewer supports clipboard operations such as cut, copy, and paste for form fields. Right-click a form field to open the context menu and choose the desired clipboard action. The following image shows the available options.

![Clipboard options for a form field in the context menu](../images/clipboardformfield.png)

## Undo and Redo

Undo and redo actions are supported for runtime changes made to form fields. Use the following code to perform undo and redo operations.

```ts
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.undo();
pdfviewer.redo();

```