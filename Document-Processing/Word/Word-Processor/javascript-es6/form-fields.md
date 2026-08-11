---
layout: post
title: Form Fields in JavaScript (ES6) DOCX Editor | Syncfusion
description: Learn how to insert and configure Text, CheckBox, and DropDown form fields in Syncfusion JavaScript (ES6) Document Editor.
platform: document-processing
control: Form Fields
documentation: ug
domainurl: ##DomainURL##
---

# Form Fields in JavaScript (ES6) Document Editor

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) Container component provides support for inserting Text, CheckBox, and DropDown form fields through the built-in toolbar.

![Form Fields](images/toolbar-form-fields.png)

## Insert form field

Form fields can be inserted using the [`insertFormField`](https://ej2.syncfusion.com/documentation/api/document-editor/editor#insertformfield) method in the editor module.

```ts
//Insert Text form field
documentEditor.editor.insertFormField('Text');
//Insert CheckBox form field
documentEditor.editor.insertFormField('CheckBox');
//Insert DropDown form field
documentEditor.editor.insertFormField('DropDown');
```

## Get form field names

All the form field names from the current document can be retrieved using [`getFormFieldNames()`](https://ej2.syncfusion.com/documentation/api/document-editor#getformfieldnames).

```ts
let formFieldsNames: string[] = documentEditor.getFormFieldNames();
```

## Get form field properties

Form field properties can be retrieved using [`getFormFieldInfo()`](https://ej2.syncfusion.com/documentation/api/document-editor#getformfieldinfo).

```ts
//Get Text form field by using the bookmark name.
let textfieldInfo: TextFormFieldInfo = documentEditor.getFormFieldInfo('Text1') as TextFormFieldInfo;
//CheckBox form field by using the bookmark name.
let checkboxfieldInfo: CheckBoxFormFieldInfo = documentEditor.getFormFieldInfo('Check1') as CheckBoxFormFieldInfo;
//DropDown form field by using the bookmark name.
let dropdownfieldInfo: DropDownFormFieldInfo = documentEditor.getFormFieldInfo('Drop1') as DropDownFormFieldInfo;
```

## Set form field properties

Form field properties can be modified using [`setFormFieldInfo`](https://ej2.syncfusion.com/documentation/api/document-editor#setformfieldinfo).

```ts
// Set text form field properties
let textfieldInfo: TextFormFieldInfo = documentEditor.getFormFieldInfo('Text1') as TextFormFieldInfo;
textfieldInfo.defaultValue = "Hello";
textfieldInfo.format = "Uppercase";
textfieldInfo.type = "Text";
textfieldInfo.name = "Text2";
documentEditor.setFormFieldInfo('Text1', textfieldInfo);

// Set checkbox form field properties
let checkboxfieldInfo: CheckBoxFormFieldInfo = documentEditor.getFormFieldInfo('Check1') as CheckBoxFormFieldInfo;
checkboxfieldInfo.defaultValue = true;
checkboxfieldInfo.name = "Check2";
documentEditor.setFormFieldInfo('Check1', checkboxfieldInfo);

// Set DropDown form field properties
let dropdownfieldInfo: DropDownFormFieldInfo = documentEditor.getFormFieldInfo('Drop1') as DropDownFormFieldInfo;
dropdownfieldInfo.dropdownItems = ['One', 'Two', 'Three'];
dropdownfieldInfo.name = "Drop2";
documentEditor.setFormFieldInfo('Drop1', dropdownfieldInfo);
```

N> If a form field already exists in the document with the new name specified, the old form field name property will be cleared and it will not be accessible. Ensure the new name is unique.

## Form Field Shading

You can customize form field shading at the application level using the [`formFieldSettings`](https://ej2.syncfusion.com/documentation/api/document-editor#formFieldSettings) property.

The example code below demonstrates how to set a custom shading color and how to disable shading (by default, shading is enabled).

```ts
// Set a custom shading color (for example, white) 
container.documentEditorSettings.formFieldSettings.shadingColor = '#ffffff';

// Disable form field shading entirely 
container.documentEditorSettings.formFieldSettings.applyShading = false;
```

N> This customization only affects the application UI and will not be preserved when exporting the document.

## Export form field data

Data of all the form fields in the document can be exported using [`exportFormData`](https://ej2.syncfusion.com/documentation/api/document-editor#exportformdata).

```ts
let formFieldData: FormFieldData[] = documentEditor.exportFormData();
```

## Import form field data

Form fields can be prefilled with data using [`importFormData`](https://ej2.syncfusion.com/documentation/api/document-editor#importformdata).

```ts
let textformField: FormFieldData = { fieldName: 'Text1', value: 'Hello World' };
let checkformField: FormFieldData = { fieldName: 'Check1', value: true };
let dropdownformField: FormFieldData = { fieldName: 'Drop1', value: 1 };
//Import form field data
this.container.documentEditor.importFormData([textformField, checkformField, dropdownformField]);
```

## Reset form fields

Reset all the form fields in the current document to their default values using [`resetFormFields`](https://ej2.syncfusion.com/documentation/api/document-editor#resetformfields).

```ts
documentEditor.resetFormFields();
```

## Protect the document in form-filling mode

The Document Editor provides support for protecting the document with `FormFieldsOnly` protection. In this protection, the user can only fill form fields in the document.

The Document Editor provides an option to protect and unprotect the document using [`enforceProtection`](https://ej2.syncfusion.com/documentation/api/document-editor/editor#enforceprotection) and [`stopProtection`](https://ej2.syncfusion.com/documentation/api/document-editor/editor#stopprotection) API.

The following example code illustrates how to enforce and stop protection in the Document Editor container.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({
  enableToolbar: true,
  height: '590px',
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl =
  'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.appendTo('#container');

//enforce protection
container.documentEditor.editor.enforceProtection('123', 'FormFieldsOnly');

//stop the document protection
container.documentEditor.editor.stopProtection('123');
```
N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

N> In the enforce Protection method, the first parameter denotes the password and the second parameter denotes the protection type. Possible values of protection type are `NoProtection |ReadOnly |FormFieldsOnly |CommentsOnly`. In the stop protection method, the parameter denotes the password.

## Online Demo

Explore how to insert and manage form fields in Word documents using the JavaScript DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript/#/material3/document-editor/form-fields.html).