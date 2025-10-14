---
layout: post
title: Form fields in Vue Document editor component | Syncfusion
description: Learn here all about Form fields in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Form fields 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Form fields in Vue Document editor component

Document Editor Container component provide support for inserting Text, CheckBox, DropDown form fields through in-built toolbar.

![Form Fields](images/toolbar-form-fields.png)

## Insert form field

Form fields can be inserted using [`insertFormField`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor#insertformfield) method in editor module.

```ts
//Insert Text form field
this.$refs.documenteditor.ej2Instances.editor.insertFormField('Text');
//Insert Checkbox form field
this.$refs.documenteditor.ej2Instances.editor.insertFormField('CheckBox');
//Insert Drop down form field
this.$refs.documenteditor.ej2Instances.editor.insertFormField('Dropdown');
```

## Get form field names

All the form fields names form current document can be retrieved using [`getFormFieldNames()`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#getformfieldnames).

```ts
this.$refs.documenteditor.ej2Instances.getFormFieldNames();
```

## Get form field properties

Form field properties can be retrieved using [`getFormFieldInfo()`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#getformfieldinfo).

```ts
//Text form field
var textfieldInfo = this.$refs.documenteditor.ej2Instances.getFormFieldInfo('Text1');
//Checkbox form field
var checkboxfieldInfo = this.$refs.documenteditor.ej2Instances.getFormFieldInfo('Check1');
//Dropdown form field
var dropdownfieldInfo = this.$refs.documenteditor.ej2Instances.getFormFieldInfo('Drop1');
```

## Set form field properties

Form field properties can be modified using [`setFormFieldInfo`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#setformfieldinfo).

```ts
// Set text form field properties
var textfieldInfo = this.$refs.documenteditor.ej2Instances.getFormFieldInfo('Text1');
textfieldInfo.defaultValue = "Hello";
textfieldInfo.format = "Uppercase";
textfieldInfo.type = "Text";
textfieldInfo.name = "Text2";
this.$refs.documenteditor.ej2Instances.setFormFieldInfo('Text1',textfieldInfo);

// Set checkbox form field properties
var checkboxfieldInfo = this.$refs.documenteditor.ej2Instances.getFormFieldInfo('Check1');
checkboxfieldInfo.defaultValue = true;
checkboxfieldInfo.name = "Check2";
this.$refs.documenteditor.ej2Instances.setFormFieldInfo('Check1',checkboxfieldInfo);

// Set checkbox form field properties
var dropdownfieldInfo = this.$refs.documenteditor.ej2Instances.getFormFieldInfo('Drop1');
dropdownfieldInfo.dropDownItems = ['One','Two', 'Three'];
dropdownfieldInfo.name = "Drop2";
this.$refs.documenteditor.ej2Instances.setFormFieldInfo('Drop1',dropdownfieldInfo);
```

>Note:If a form field already exists in the document with the new name specified, the old form field name property will be cleared and it will not be accessible. Ensure the new name is unique.

## Form Field Shading

You can customize form field shading at the application level using the [`formFieldSettings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#formFieldSettings) property.

The example code below demonstrates how to set a custom shading color and how to disable shading (by default, shading is enabled).

```ts
// Set a custom shading color (for example, white) 
this.$refs.doceditcontainer.ej2Instances.documentEditorSettings.formFieldSettings.shadingColor = '#ffffff';

// Disable form field shading entirely 
this.$refs.doceditcontainer.ej2Instances.documentEditorSettings.formFieldSettings.applyShading = false;
```

N> This customization only affects the application UI and will not be preserved when exporting the document.

## Export form field data

Data of the all the Form fields in the document can be exported using [`exportFormData`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#exportformdata).

```ts
var formFieldDate = this.$refs.documenteditor.ej2Instances.exportFormData();
```

## Import form field data

Form fields can be initialized with data using [`importFormData`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#importformdata).

```ts
var textformField = {fieldName: 'Text1', value: 'Hello World'};
var checkformField = {fieldName: 'Check1', value: true};
var dropdownformField = {fieldName: 'Drop1', value: 1};
//Import form field data
this.$refs.documenteditor.ej2Instances.importFormData([textformField,checkformField,dropdownformField]);
```

## Reset form fields

Reset all the form fields in current document to default value using [`resetFormFields`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#resetformfields).

```ts
this.$refs.documenteditor.ej2Instances.resetFormFields();
```

## Protect the document in form filling mode

Document Editor provides support for protecting the document with `FormFieldsOnly` protection. In this protection, user can only fill form fields in the document.

Document editor provides an option to protect and unprotect document using [`enforceProtection`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor#enforceprotection) and [`stopProtection`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor#stopprotection) API.

The following example code illustrates how to enforce and stop protection in Document editor container.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { onMounted, provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

provide('DocumentEditorContainer', [Toolbar])

onMounted(function () {
  //enforce protection
  this.$refs.container.ej2Instances.documentEditor.editor.enforceProtection('123', 'FormFieldsOnly');
  //stop the document protection
  this.$refs.container.ej2Instances.documentEditor.editor.stopProtection('123');
});
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return { serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  mounted() {
    //enforce protection
    this.$refs.container.ej2Instances.documentEditor.editor.enforceProtection('123', 'FormFieldsOnly');
    //stop the document protection
    this.$refs.container.ej2Instances.documentEditor.editor.stopProtection('123');
  }
}
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

>Note: In enforce Protection method, first parameter denotes password and second parameter denotes protection type. Possible values of protection type are `NoProtection |ReadOnly |FormFieldsOnly`. In stop protection method, parameter denotes the password.