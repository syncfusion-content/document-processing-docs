---
layout: post
title: Mail Merge in React DOCX Editor | Syncfusion
description: Learn here to perform mail merge in Syncfusion React DOCX Editor component using the Word Library as a dependency.
control: Perform mail merge
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to perform mail merge in React DOCX Editor

You can perform mail merge in the [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) using the following approaches:

1. Insert merge fields programmatically using Document Editor APIs.

2. Execute the mail merge on the Word document using the server-side Word Library (DocIO).

3. Finally, view the merged document in the Document Editor.

## Insert merge fields

A field can be added to the document using the [insertField](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#insertfield) method in the [Editor](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor) module.

The following example demonstrates how to insert a merge field programmatically by providing the field code and field result.

{% tabs %}
{% highlight ts tabtitle="TS" %}

let fieldCode: string = 'MERGEFIELD  First Name  \\* MERGEFORMAT ';
let fieldResult: string = '«First Name»';
container.documentEditor.editor.insertField(fieldCode, fieldResult);

{% endhighlight %}
{% endtabs %}

For more information about Fields, refer to this [page](https://help.syncfusion.com/document-processing/word/word-processor/react/fields).

## Perform the mail merge

Once the necessary merge fields are inserted, the template is ready for mail merge. Perform the mail merge on the template using the supported data sources on the server side with DocIO. After the mail merge operation is completed, the merged document can be loaded into the Document Editor for viewing. The Document Editor also supports exporting the mail-merged document to [supported formats](../supported-fileformats).

For detailed information about mail merge functionality in DocIO, refer to this [page](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-mail-merge).

## Online Demo

Explore how to insert merge fields in the Document Editor and execute the mail merge using DocIO through the live demo provided [here](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/mail-merge).