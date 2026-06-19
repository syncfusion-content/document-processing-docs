---
layout: post
title: Mail Merge in React DOCX Editor | Syncfusion
description: Learn here to perform mail merge in Syncfusion React DOCX Editor component using the Word Library as a dependency
control: Perform mail merge
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to perform mail merge in React DOCX Editor

You can perform mail merge in the React DOCX Editor (Document Editor) using the following approach:

1. Insert merge fields programmatically using Document Editor APIs.

2. Execute the mail merge on the Word document using the server-side Word Library (DocIO).

3. Finally, view the merged document in the Document Editor.


## Mail merge architecture overview

Mail merge allows users to insert merge fields in a document template, provide data sources, and generate personalized documents by executing the merge operation on the server using DocIO.

```
User inserts merge fields in template
   ↓
CLIENT: Document Editor stores merge field codes
   ↓
CLIENT: Sends template document and data source to server
   ↓
HTTP Request (Template + data source sent to server)
   ↓
SERVER: Receives template and data source
   ↓
SERVER: DocIO loads and parses template document
   ↓
SERVER: Identifies merge field codes and iterates through data records
   ↓
SERVER: Maps data values to merge fields and replaces them
   ↓
SERVER: Maintains formatting and generates merged document
   ↓
HTTP Response (Merged document returned to client)
   ↓
CLIENT: Document Editor loads and displays merged document
   ↓
User views, edits, and exports personalized document
```

## Insert merge field

A field can be added to the document by using the [insertField](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#insertfield) method in the [Editor](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor) module.

The following example demonstrates how to insert a merge field programmatically by providing the field code and field result.

{% tabs %}
{% highlight ts tabtitle="TS" %}

let fieldCode: string = 'MERGEFIELD  First Name  \\* MERGEFORMAT ';
let fieldResult: string = '«First Name»';
container.documenteditor.editor.insertField(fieldCode, fieldResult);

{% endhighlight %}
{% endtabs %}

For more information about Fields, refer this [page](https://help.syncfusion.com/document-processing/word/word-processor/react/fields).

## Perform mail merge 

Once the necessary merge fields are inserted, the template is ready for mail merge. Perform the mail merge on the template using supported data sources on the server side with DocIO. After the mail merge operation is completed, the merged document can be loaded into the Document Editor for viewing. The Document Editor also supports exporting the mail-merged document to supported formats.

For detailed information about mail merge functionality in DocIO, refer to this [page](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-mail-merge).

## Online demo 

Explore how to insert merge fields in the Document Editor and execute the mail merge using DocIO through the live demo provided [here](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/mail-merge).