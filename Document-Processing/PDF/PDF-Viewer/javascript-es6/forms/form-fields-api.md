---
layout: post
title: Form Fields API in TypeScript PDF Viewer | Syncfusion
description:  Learn How to use Form Fields API to enable, update, retrieve and clear in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form fields API in TypeScript PDF Viewer

The PDF Viewer exposes APIs to create, edit, validate, navigate, export, and manage form fields programmatically. The following APIs are available:

| API | Description |
|---|---|
| [updateFormFieldsValue](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfieldsvalue) | Updates the value for one or more form fields.|
| [updateFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) | Updates the properties of one or more form fields.|
| [retrieveFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#retrieveformfields) | Retrieves all form fields or by specific criteria.|
| [resetFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#resetformfields) | Resets the specified or all form fields to their default values.|
| [importFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importformfields) | Imports values and states for form fields from a JSON object or file stream.|
| [focusFormField](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#focusformfield) | Sets focus to a form field by name or ID.|
| [exportFormFieldsAsObject](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfieldsasobject) | Exports form fields as a JSON object.|
| [exportFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfields) | Exports form fields as a downloadable file.|
| [clearFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#clearformfields) | Clears values of specified or all form fields without removing them.|
| [isFormFieldDocument](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#isformfielddocument) | Indicates whether the loaded document contains form fields.|
| [isFormDesignerToolbarVisible](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#isformdesignertoolbarvisible) | Gets whether the Form Designer toolbar is currently visible.|
| [formFieldCollections](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#formfieldcollections) | Gets the collection of current form fields with their properties.|
| [enableFormFieldsValidation](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) | Enables or disables form field validation.|
| [enableFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enableformfields) | Enables or disables interaction with form fields.|
| [enableFormDesignerToolbar](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enableformdesignertoolbar) | Shows or hides the Form Designer toolbar.|

## updateFormFieldsValue

Updates the value of one or more form fields programmatically.

```html
<button id="updateFormFieldsValue">updateFormFieldsValue</button>
```
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
const btn = document.getElementById('updateFormFields');
if (btn) {
  btn.onclick = () => {
   // Retrieve form fields collection
  const fields = pdfviewer.retrieveFormFields();
  // Find the textbox field by name (Here field name is FIrst Name)
  const field = fields.find((f: any) => f.name === 'First Name') || fields[0]; //Update Name accordingly
  if (field) {
    // give value to be updated in teh for
    field.value='John Doe';
    field.tooltip='First'
    pdfviewer.updateFormFieldsValue(field);
  }
  };
}
{% endhighlight %}
{% endtabs %}

## updateFormFields

Updates form field properties such as bounds, color, font, isReadOnly, required, and more.

```html
<button id="updateFormFields">updateFormFields</button>
```
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
const btn = document.getElementById('updateFormFields');
if (btn) {
  btn.onclick = () => {
   // Retrieve form fields collection
  const fields = pdfviewer.retrieveFormFields();
  // Find the textbox field by name (Here field name is FIrst Name)
  const field = fields.find((f: any) => f.name === 'First Name') || fields[0]; //Update Name accordingly
  if (field) {
    // Update textbox field styling and value
    pdfviewer.formDesignerModule.updateFormField(field, {
      value: 'John',
      fontFamily: 'Courier',
      fontSize: 12,
      color: 'black',
      backgroundColor: 'white',
      borderColor: 'black',
      thickness: 2,
      alignment: 'Left',
      maxLength: 50
    } as TextFieldSettings);
  }
  };
}
{% endhighlight %}
{% endtabs %}

## retrieveFormFields

Retrieves all form fields and their properties or filters by type/name.

```html
<button id="retrieveFormFields">retrieveFormFields</button>
```
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
const btn = document.getElementById('retrieveFormFields');
if (btn) {
  btn.onclick = () => {
    const fields = pdfviewer.retrieveFormFields();
    console.log(fields);
  };
}
{% endhighlight %}
{% endtabs %}

## resetFormFields

Resets specified form fields or all fields to their default values.

```html
<button id="resetFormFields">resetFormFields</button>
```
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
const btn = document.getElementById('resetFormFields');
if (btn) {
  btn.onclick = () => {
    pdfviewer.resetFormFields();
  };
}
{% endhighlight %}
{% endtabs %}

## importFormFields

Imports form field data from an object or file into the current document.

```html
<button id="importFormFields">importFormFields</button>
```
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
const btn = document.getElementById('importFormFields');
if (btn) {
  btn.onclick = () => {
     // The file for importing should be accessible at the given path or as a file stream depending on your integration
  pdfviewer.importFormFields('File', FormFieldDataFormat.Json);
  };
}
{% endhighlight %}
{% endtabs %}

N> Supported import/export formats include `FDF`, `XFDF`, and `JSON`. Ensure the format token passed to import/export APIs matches one of these values.

## focusFormField

Moves focus to a form field by name or ID.

```html
<button id="focusFormField">focusFormField</button>
```
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
const btn = document.getElementById('focusFormField');
if (btn) {
  btn.onclick = () => {
    // This API returns a Promise that resolves with the exported data object
    pdfviewer.focusFormField('FirstName');
  };
}
{% endhighlight %}
{% endtabs %}

## exportFormFieldsAsObject

Exports current form field values and states as a JSON object.

```html
<button id="exportFormFieldsAsObject">exportFormFieldsAsObject</button>
```
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
const btn = document.getElementById('exportFormFieldsAsObject');
if (btn) {
  let exportedData: Object|undefined;
  btn.onclick = () => {
    pdfviewer.exportFormFieldsAsObject(FormFieldDataFormat.Fdf).then(data => {
    exportedData = data; // Save or send to server
    console.log('Exported object:', exportedData);
  });
  };
}
{% endhighlight %}
{% endtabs %}

## exportFormFields

Exports form field data to a file for download.

```html
<button id="exportFormFields">exportFormFields</button>
```
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
const btn = document.getElementById('exportFormFields');
if (btn) {
  btn.onclick = () => {
    pdfviewer.exportFormFields('FormData', FormFieldDataFormat.Json);
  };
}
{% endhighlight %}
{% endtabs %}

## clearFormFields

Clears values of specified or all fields without removing the fields themselves.

```html
<button id="clearformfield">clearformfield</button>
```
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
const btn = document.getElementById('clearFormFields');
if (btn) {
  btn.onclick = () => {
  let field=pdfviewer.retrieveFormFields();
  pdfviewer.clearFormFields(field[0]);
  };
}
{% endhighlight %}
{% endtabs %}

## isFormFieldDocument

Returns true if the loaded document contains one or more form fields.

```html
<button id="checkFormFieldDocument">checkFormFieldDocument</button>
```
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
const element = document.getElementById('checkFormFieldDocument');
if (element) {
    element.onclick = () => {
        console.log(pdfviewer.isFormFieldDocument);
    }
}
{% endhighlight %}
{% endtabs %}

## isFormDesignerToolbarVisible

Opens the form designer toolbar when the PDF document is loaded in the PDF Viewer control initially
and get the form designer Toolbar Visible status.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
// Open the Form Designer toolbar and read its visibility state
pdfviewer.enableFormDesignerToolbar(true);
console.log(pdfviewer.isFormDesignerToolbarVisible);
{% endhighlight %}
{% endtabs %}

## formFieldCollections

Gets the current collection of form fields with their properties from the viewer instance.

```html
<button id="formfieldcollection">formfieldcollection</button>
```
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
const element = document.getElementById('formfieldcollection');
if (element) {
    element.onclick = () => {
        console.log(pdfviewer.formFieldCollections);
    }
}
{% endhighlight %}
{% endtabs %}

## enableFormFieldsValidation

Enables or disables built-in validation for required and constrained fields.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
pdfviewer.enableFormFieldsValidation = true; // enable form fields validation
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableFormFields

Enables or disables user interaction with form fields globally.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
pdfviewer.enableFormFields = false;  // Disable interaction with all fields
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableFormDesignerToolbar

Shows or hides the Form Designer toolbar at runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
// Show or hide the Form Designer toolbar at runtime
pdfviewer.enableFormDesignerToolbar(true); // show
// pdfviewer.enableFormDesignerToolbar(false); // hide
{% endhighlight %}
{% endtabs %}

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./manage-form-fields/create-form-fields)
- [Edit form fields](./manage-form-fields/modify-form-fields)
- [Group form fields](./group-form-fields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form fields Validation](./form-validation)