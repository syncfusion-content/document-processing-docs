---
layout: post
title: Form Field Events in React Pdfviewer control | Syncfusion
description: Learn here all about different form field in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Form Field Events
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field Events in React

The Syncfusion React PDF Viewer provides a set of form field events that report changes associated with creating, selecting, modifying, moving, resizing, or removing form fields. These events supply metadata related to the affected field and are raised during user interaction or programmatic updates.

Validation‑related events are emitted when the viewer performs operations that require confirmation of field completion, such as print or download actions.

## Supported PDF Form Field Events

The following table lists all supported form field events and their descriptions:

| Form Field events | Description | Arguments |
|---|---|---|
| [`formFieldAdd`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfieldadd) | Triggered when a new form field is added, either through the Form Designer UI or programmatically. | [`formFieldAddArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldAddArgs) |
| [`formFieldClick`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfieldclick) | Fired when a form field is clicked in the viewer. | [`formFieldClickArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldClickArgs) |
| [`formFieldDoubleClick`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfielddoubleclick) | Fired when a form field is double clicked. | [`formFieldDoubleClickArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldDoubleClickArgs) |
| [`formFieldFocusOut`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfieldfocusout) | Triggered when a form field loses focus after editing. | [`formFieldFocusOutEventArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldFocusOutEventArgs) |
| [`formFieldMouseLeave`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfieldmouseleave) | Fired when the mouse pointer leaves a form field. | [`formFieldMouseLeaveArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldMouseLeaveArgs) |
| [`formFieldMouseOver`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfieldmouseover) | Fired when the mouse pointer moves over a form field. | [`formFieldMouseOverArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldMouseoverArgs) |
| [`formFieldMove`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfieldmove) | Triggered when a form field is moved to a new position. | [`formFieldMoveArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfieldmove) |
| [`formFieldPropertiesChange`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfieldpropertieschange) | Fired when any form field property changes, such as font, color, or constraint values. | [`formFieldPropertiesChangeArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldPropertiesChangeArgs) |
| [`formFieldRemove`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfieldremove) | Triggered when a form field is deleted from the document. | [`formFieldRemoveArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldRemoveArgs) |
| [`formFieldResize`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfieldresize) | Fired when a form field is resized. | [`formFieldResizeArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldResizeArgs) |
| [`formFieldSelect`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfieldselect) | Fired when a form field is selected in the Form Designer. | [`formFieldSelectArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldSelectArgs) |
| [`formFieldUnselect`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#formfieldunselect) | Fired when a previously selected form field is unselected. | [`formFieldUnselectArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldUnselectArgs) |
| [`validateFormFields`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#validateformfields) | Fired when form field validation fails during print or download actions. | [`validateFormFieldsArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/validateFormFieldsArgs) |

## Example

You can wire up form field events on the PDF Viewer instance to execute custom logic when specific actions occur.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';

import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  TextSelection,
  TextSearch,
  Print,
  Annotation,
  FormDesigner,
  FormFields,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

// Optional: If you want stronger typings for the event args, you can import from the core package:
// import type { FormFieldAddEventArgs, FormFieldRemoveEventArgs, ... } from '@syncfusion/ej2-pdfviewer';

function App(): JSX.Element {
  const viewerRef = React.useRef<PdfViewerComponent | null>(null);

  // ---------------------------
  // Form-field event handlers
  // ---------------------------

  const onFormFieldAdd = (args: any) => {
    console.log('formFieldAdd', args);
  };

  const onFormFieldRemove = (args: any) => {
    console.log('formFieldRemove', args);
  };

  const onFormFieldPropertiesChange = (args: any) => {
    console.log('formFieldPropertiesChange', args);
  };

  const onFormFieldClick = (args: any) => {
    console.log('formFieldClick', args);
  };

  const onFormFieldDoubleClick = (args: any) => {
    console.log('formFieldDoubleClick', args);
  };

  const onFormFieldFocusOut = (args: any) => {
    console.log('formFieldFocusOut', args);
  };

  const onFormFieldMouseOver = (args: any) => {
    console.log('formFieldMouseOver', args);
  };

  const onFormFieldMouseLeave = (args: any) => {
    console.log('formFieldMouseLeave', args);
  };

  const onFormFieldMove = (args: any) => {
    console.log('formFieldMove', args);
  };

  const onFormFieldResize = (args: any) => {
    console.log('formFieldResize', args);
  };

  const onFormFieldSelect = (args: any) => {
    console.log('formFieldSelect', args);
  };

  const onFormFieldUnselect = (args: any) => {
    console.log('formFieldUnselect', args);
  };

  // ---------------------------
  // Validation handler
  // ---------------------------
  const handleValidateFormFields = (args: any) => {
    if (args && args.formField && args.formField.length > 0) {
      // Prevent the pending action (submit/print/etc.)
      args.cancel = true;
      alert('Please fill all required fields. Missing: ' + args.formField[0].name);
      // Optionally: focus/scroll to the field here
    }
  };

  return (
    <div className="control-section">
      <PdfViewerComponent
        ref={viewerRef}
        id="pdfViewer"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
        style={{ height: '680px', width: '100%' }}
        // Enable validation pipeline
        enableFormFieldsValidation={true}
        validateFormFields={handleValidateFormFields}
        // Wire form-field events
        formFieldAdd={onFormFieldAdd}
        formFieldRemove={onFormFieldRemove}
        formFieldPropertiesChange={onFormFieldPropertiesChange}
        formFieldClick={onFormFieldClick}
        formFieldDoubleClick={onFormFieldDoubleClick}
        formFieldFocusOut={onFormFieldFocusOut}
        formFieldMouseOver={onFormFieldMouseOver}
        formFieldMouseLeave={onFormFieldMouseLeave}
        formFieldMove={onFormFieldMove}
        formFieldResize={onFormFieldResize}
        formFieldSelect={onFormFieldSelect}
        formFieldUnselect={onFormFieldUnselect}
      >
        <Inject
          services={[
            Toolbar,
            Magnification,
            Navigation,
            LinkAnnotation,
            BookmarkView,
            ThumbnailView,
            TextSelection,
            TextSearch,
            Print,
            Annotation,
            FormDesigner,
            FormFields
          ]}
        />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample') as HTMLElement);
root.render(<App />);
{% endhighlight %}
{% endtabs %}

**Event Behavior Notes**

- Events triggered through the UI and programmatic APIs use the same event handlers.
- Property related events are raised immediately when changes occur.
- Validation events are triggered only during print or download operations.

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

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