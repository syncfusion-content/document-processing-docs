---
layout: post
title: Form validation in the React PDF Viewer component | Syncfusion
description: Learn how to enable built-in form field validation and validate missing required fields in the Syncfusion React PDF Viewer.
platform: react
control: PDF Viewer
documentation: ug
---

# Validate PDF Form Fields in React PDF Viewer

The Syncfusion React PDF Viewer provides built-in support for validating form fields before users perform actions such as printing, downloading, or submitting a PDF document. Validation ensures that required form fields are completed before allowing these actions. This improves data completeness and reliability.

## How PDF Form Validation Works

Form field validation follows this flow:
- Enable validation using the [enableFormFieldsValidation](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) property.
- Handle the [validateFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#validateformfields) event to determine which required fields are not filled.
- When validation is enabled and a user attempts to print, download, or submit the document:
  - The [validateFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#validateformfields) event is triggered.
  - Unfilled required fields are provided in the event arguments (typically as `args.formField`; older versions may use `args.nonFillableFields`).
  - You can cancel the action, show an error message, or move focus to an invalid field.

## Enable PDF Form Field Validation

To enable validation, set the [enableFormFieldsValidation](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#validateformfields) property to true and wire the validateFormFields event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
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

function App() {
  const viewerRef = React.useRef(null);

  // 1) Default for new Textbox fields: isRequired = true
  React.useEffect(() => {
    const viewer = viewerRef.current;
    if (viewer) {
      viewer.textFieldSettings = { isRequired: true };
    }
  }, []);

  // 2) Validation wiring
  const handleValidateFormFields = (args) => {
    // Triggers when required fields are empty on submit/validate
    if (args && args.formField && args.formField.length > 0) {
      alert('Please fill all required fields. Missing: ' + args.formField[0].name);
      // If you want to prevent submission:
      // args.isFormSubmitCancelled = true;
    }
  };

  // 3) Add a Textbox on document load
  const handleDocumentLoad = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    viewer.formDesignerModule.addFormField('Textbox', {
      name: 'Email',
      bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
      isRequired: true,
      tooltip: 'Email is required'
    });
  };

  return (
    <div className="control-section">
      <PdfViewerComponent
        ref={viewerRef}
        id="pdfViewer"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
        enableFormFieldsValidation={true}
        validateFormFields={handleValidateFormFields}
        documentLoad={handleDocumentLoad}
        style={{ height: '680px', width: '100%' }}
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

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Mark Fields as Required

Only fields marked as **required** participate in validation. Use the **isRequired** property when creating or updating a form field.

{% tabs %}
{% highlight js tabtitle="index.js" %}
const handleDocumentLoad = () => {
  const viewer = viewerRef.current;
  if (!viewer) return;

  // Creation of a required textbox that blocks printing until filled
  viewer.formDesignerModule.addFormField('Textbox', {
    name: 'Email',
    bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
    isRequired: true,
    tooltip: 'Email is required'
  });
};
{% endhighlight %}
{% endtabs %}

## Handle PDF Form Validation Results

In the [validateFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#validateformfields) event, you can control the behavior when fields are missing. Typical actions include:
- Cancel the print or download operation
- Display an error message to the user
- Set focus to the first unfilled required field

{% tabs %}
{% highlight js tabtitle="index.js" %}
// 1) Define the handler in your React component
const handleValidateFormFields = (args) => {
  if (args && args.formField && args.formField.length > 0) {
    // Prevent the pending action (submit/print/etc.)
    args.cancel = true;
    alert('Please fill all required fields. Missing: ' + args.formField[0].name);
    // Optionally: focus/scroll to the field here if needed
  }
};
{% endhighlight %}
{% endtabs %}

## Tips

- Use isRequired to clearly mark mandatory fields.
- Validation is triggered only during [print](../print), [download](../download), or **submit** actions.
- For custom validation logic (such as validating an email format):
  - Retrieve all form fields using [retrieveFormFields()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#retrieveformfields).
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