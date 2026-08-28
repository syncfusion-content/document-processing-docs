---
layout: post
title: Form Fields in ASP.NET MVC DOCX Editor | Syncfusion
description: Form fields in ASP.NET MVC DOCX Editor allow users to create, update, and protect fillable fields for structured data entry.
platform: document-processing
control: Form Fields
documentation: ug
---


# Form Fields in ASP.NET MVC DOCX Editor

[ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor) provides support for inserting Text, CheckBox, and DropDown form fields through the built-in toolbar.

![Form Fields](images/toolbar-form-fields.png)

## Insert form field

Form fields can be inserted using the `insertFormField` method in the editor module.

```typescript
//Insert Text form field
documentEditor.editor.insertFormField('Text');
//Insert Checkbox form field
documentEditor.editor.insertFormField('CheckBox');
//Insert Drop down form field
documentEditor.editor.insertFormField('Dropdown');
```

## Get form field names

All the form field names from the current document can be retrieved using `getFormFieldNames()`.

```typescript
var formFieldsNames = documentEditor.getFormFieldNames();
```

## Get form field properties

Form field properties can be retrieved using `getFormFieldInfo()`.

```typescript
//Text form field
var textfieldInfo = documentEditor.getFormFieldInfo('Text1');
//Checkbox form field
var checkboxfieldInfo = documentEditor.getFormFieldInfo('Check1');
//Dropdown form field
var dropdownfieldInfo = documentEditor.getFormFieldInfo('Drop1');
```

## Set form field properties

Form field properties can be modified using `setFormFieldInfo`.

```typescript
// Set text form field properties
var textfieldInfo = documentEditor.getFormFieldInfo('Text1');
textfieldInfo.defaultValue = "Hello";
textfieldInfo.format = "Uppercase";
textfieldInfo.type = "Text";
documentEditor.setFormFieldInfo('Text1',textfieldInfo);

// Set checkbox form field properties
var checkboxfieldInfo = documentEditor.getFormFieldInfo('Check1');
checkboxfieldInfo.defaultValue = true;
documentEditor.setFormFieldInfo('Check1',checkboxfieldInfo);

// Set dropdown form field properties
var dropdownfieldInfo = documentEditor.getFormFieldInfo('Drop1');
dropdownfieldInfo.dropDownItems = ['One','Two', 'Three'];
documentEditor.setFormFieldInfo('Drop1',dropdownfieldInfo);
```

## Export form field data

Data of all the form fields in the document can be exported using `exportFormData`.

```typescript
var formFieldData = documentEditor.exportFormData();
```

## Import form field data

Form fields can be prefilled with data using `importFormData`.

```typescript
var textformField = {fieldName: 'Text1', value: 'Hello World'};
var checkformField = {fieldName: 'Check1', value: true};
var dropdownformField = {fieldName: 'Drop1', value: 1};
//Import form field data
documentEditor.importFormData([textformField,checkformField,dropdownformField]);
```

## Reset form fields

Reset all the form fields in the current document to their default values using `resetFormFields`.

```typescript
documentEditor.resetFormFields();
```

## Protect the document in form filling mode

DOCX Editor provides support for protecting the document with `FormFieldsOnly` protection. In this protection, the user can only fill form fields in the document.

DOCX Editor provides an option to protect and unprotect the document using `enforceProtection` and `stopProtection` API.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/protect-unprotect/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Protect-unprotect.cs" %}
{% endhighlight %}
{% endtabs %}


N> In the enforceProtection method, the first parameter denotes the password and the second parameter denotes the protection type. Possible values of protection type are `NoProtection |ReadOnly |FormFieldsOnly |CommentsOnly`. In the stopProtection method, the parameter denotes the password.

## Online Demo

Explore how to insert and manage form fields in Word documents using the ASP.NET MVC DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/formfields#/tailwind3).
