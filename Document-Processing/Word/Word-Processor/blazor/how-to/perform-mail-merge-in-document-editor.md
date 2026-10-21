---
layout: post
title: How to Perform Mail Merge in Blazor DOCX Editor | Syncfusion
description: Perform mail merge in Syncfusion® Blazor DOCX Editor using the Word Library to generate personalized documents from data sources.
control: Perform mail merge
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Perform Mail Merge in Blazor DOCX Editor

You can perform mail merge in the [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) using the following approaches:

1. Insert merge fields programmatically using DOCX Editor APIs.

2. Execute the mail merge on the Word document using the server-side Word Library (DocIO).

3. Finally, view the merged document in the DOCX Editor.

## Insert merge fields

A field can be added to the document using the [`InsertFieldAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_InsertFieldAsync_System_String_System_String_) method in the Editor module.

The following example demonstrates how to insert a merge field programmatically by providing the field code and field result.

{% tabs %}
{% highlight c# tabtitle="C#" %}

string fieldCode = "MERGEFIELD  First Name  \\* MERGEFORMAT ";
string fieldResult = "«First Name»";
await container.DocumentEditor.Editor.InsertFieldAsync(fieldCode, fieldResult);

{% endhighlight %}
{% endtabs %}

For more information about Fields, refer to this [page](https://help.syncfusion.com/document-processing/word/word-processor/blazor/fields).

## Perform the mail merge

Once the necessary merge fields are inserted, the template is ready for mail merge. Perform the mail merge on the template using the supported data sources on the server side with DocIO. After the mail merge operation is completed, the merged document can be loaded into the DOCX Editor for viewing. The DOCX Editor also supports exporting the mail-merged document to [supported formats](../supported-fileformats).

For detailed information about mail merge functionality in DocIO, refer to this [page](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-mail-merge).

## Online Demo

Explore how to insert merge fields in the DOCX Editor and execute the mail merge using DocIO through the live demo provided [here](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/mail-merge?theme=tailwind3).
