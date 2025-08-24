---
layout: post
title: Fields in Angular Document editor component | Syncfusion
description: Learn here all about Fields in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Fields 
documentation: ug
domainurl: ##DomainURL##
---

# Fields in Angular Document editor component

Document Editor has preservation support for all types of fields in an existing word document without any data loss.

## Adding Fields

You can add a field to the document by using [`insertField`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#insertfield) method in [`Editor`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/) module.

The following example code illustrates how to insert merge field programmatically by providing the field code and field result.

```typescript
let fieldCode: string = 'MERGEFIELD  First Name  \\* MERGEFORMAT ';
let fieldResult: string = '«First Name»';
this.documentEditor.editor.insertField(fieldCode, fieldResult);
```

>Note: Document editor does not validate/process the field code/field result. it simply inserts the field with specified field information.

## Update fields

Document Editor provides support for updating bookmark cross reference field. The following example code illustrates how to update bookmark cross reference field.

```typescript
//Update all the bookmark cross reference field in the document.
this.documentEditor.updateFields();
```

Bookmark cross reference fields can be updated through UI by using update fields option in `Toolbar`.

![Update bookmark cross reference field.](images/updatefields.png)

The following type of fields are automatically updated in Document Editor.

* NUMPAGES
* SECTION
* PAGE

## Get field info

You can get field code and field result of the current selected field by using [`getFieldInfo`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#getfieldinfo) method in the [`Selection`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/) module.

```typescript
//Gets the field information of the selected field.
let fieldInfo: FieldInfo = this.documentEditor.selection.getFieldInfo();
```

>Note: For nested fields, this method returns combined field code and result.

## Set field info

You can modify the field code and field result of the current selected field by using [`setFieldInfo`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#setfieldinfo) method in the [`Editor`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/) module.

```typescript
//Gets the field information for the selected field.
let fieldInfo: FieldInfo = this.documentEditor.selection.getFieldInfo();

//Modify field code
fieldInfo.code = 'MERGEFIELD  First Name  \\* MERGEFORMAT ';

//Modify field result
fieldInfo.result = '«First Name»';

//Modify field code and result of the current selected field.
this.documentEditor.editor.setFieldInfo(fieldInfo);
```

>Note: For nested field, entire field gets replaced completely with the specified field information.

## See Also

[Mail merge using Word library (DocIO)](https://help.syncfusion.com/file-formats/docio/working-with-mail-merge)
[Mail merge demo](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices)