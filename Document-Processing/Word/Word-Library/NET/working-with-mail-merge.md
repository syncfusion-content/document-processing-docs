---
title: Mail merge a Word document in C# | DocIO | Syncfusion
description: Learn how to mail merge Word document to create reports (letters, envelopes, labels, invoice, payroll) using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Working with Mail merge

Mail merge is a process of merging data from data source to a Word template document. The [WMergeField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WMergeField.html) class provides support to bind template document and data source. The [WMergeField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WMergeField.html) instance is replaced with the actual data retrieved from data source for the given merge field name in a template document.

The following data sources are supported by Essential<sup>&reg;</sup> DocIO for performing Mail merge:

<table>
<tr>
<th>Data Source<br/><br/></th>
<th>Examples<br/><br/></th>
</tr>
<tbody>
<tr>
<td>String arrays</td>
<td>{{'[Mail merge with string arrays](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Mail-merge-with-string-arrays)'| markdownify }}</td>
</tr>
<tr>
<td>DataRow</td>
<td>{{'[Generate multiple Word documents](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Generate-multiple-Word-documents)'| markdownify }}</td>
</tr>
<tr>
<td>DataSet</td>
<td>{{'[Product catalog](https://github.com/SyncfusionExamples/Mail-Merge-Examples/tree/master/Product-catalog)'| markdownify }}</td>
</tr>
<tr>
<td>DataTable</td>
<td>{{'[Mail merge using DataTable](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Mail-merge-for-group)'| markdownify }}</td>
</tr>
<tr>
<td>DataView</td>
<td>{{'[Generate letter for filtered contacts](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Generate-letter-for-filtered-contacts)'| markdownify }}</td>
</tr>
<tr>
<td>DbConnection</td>
<td>{{'[Mail merge using OleDbConnection](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Mail-merge-using-OleDbConnection)'| markdownify }}</td>
</tr>
<tr>
<td>IDataReader</td>
<td>{{'[Generate payroll for employees](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Generate-payroll-for-employees)'| markdownify }}</td>
</tr>
<tr>
<td>OleDbDataReader</td>
<td>{{'[Generate certificate for employees](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Generate-certificate-for-employees)'| markdownify }}</td>
</tr>
<tr>
<td>Dynamic</td>
<td>{{'[Mail merge with dynamic objects](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Mail-merge-with-dynamic-objects)'| markdownify }}</td>
</tr>
<tr>
<td>IEnumerable </td>
<td>{{'[Create Envelopes for mailing](https://github.com/SyncfusionExamples/Mail-Merge-Examples/tree/master/Create-Envelopes-for-mailing)'| markdownify }}</td>
</tr>
<tr>
<td>XML</td>
<td>{{'[Generate order details of customer from XML](https://github.com/SyncfusionExamples/Mail-Merge-Examples/tree/master/Generate-order-details-of-customer)'| markdownify }}</td>
</tr>
<tr>
<td>JSON</td>
<td>{{'[Create and send email messages using JSON](https://github.com/SyncfusionExamples/Mail-Merge-Examples/tree/master/Create-and-send-email-messages)'| markdownify }}</td>
</tr>
<tr>
<td>MailMergeDataTable </td>
<td>{{'[Mail merge using MailMergeDataTable](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Mail-merge-with-.NET-objects)'| markdownify }}</td>
</tr>
<tr>
<td>MailMergeDataSet</td>
<td>{{'[Mail merge using MailMergeDataSet](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Mail-merge-with-dynamic-objects)'| markdownify }}</td>
</tr>
</tbody>
</table>

To quickly get started with performing a mail merge in a Word document, please check out this video:
{% youtube "https://www.youtube.com/watch?v=F1VvcPAtlrA" %}

## Assemblies and NuGet packages required

Refer to the following links for assemblies and NuGet packages required based on platforms for performing mail merge using the .NET Word Library (DocIO).

* [Mail merge assemblies](https://help.syncfusion.com/document-processing/word/word-library/net/assemblies-required)
* [Mail merge NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required)

## Mail merge process

The mail merge process involves three documents:

1. **Template Word document**: This document contains the static or templated text and graphics along with the merge fields (that are placeholders) for replacing dynamic data.

2. **Data source**: This represents file or database containing data to replace the merge fields in template Word document.

3. **Final merged document**: This resultant document is a combination of the template Word document and the data from data source.

T> 1. You can use conditional fields ([IF](https://support.microsoft.com/en-us/office/field-codes-if-field-9f79e82f-e53b-4ff5-9d2c-ae3b22b7eb5e?ui=en-us&rs=en-us&ad=us), [Formula](https://support.microsoft.com/en-us/office/field-codes-formula-field-32d5c9de-3516-4ec3-80ed-d1fc2b5bc21d?ui=en-us&rs=en-us&ad=us)) combined with merge fields, when you require intelligent decisions in addition to simple mail merge (replace merge fields with result text). To use conditional fields, execute mail merge and then update fields in the Word document using [UpdateDocumentFields](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_UpdateDocumentFields) API.
T> 2. You can replace the fields ([IF](https://support.microsoft.com/en-us/office/field-codes-if-field-9f79e82f-e53b-4ff5-9d2c-ae3b22b7eb5e?ui=en-us&rs=en-us&ad=us), [Formula](https://support.microsoft.com/en-us/office/field-codes-formula-field-32d5c9de-3516-4ec3-80ed-d1fc2b5bc21d?ui=en-us&rs=en-us&ad=us)) combined with merge fields, with its most recent result and **generates the plain Word document** by unlinking the fields. Refer to this [link](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-fields#unlink-fields) for more information. 

### Create Word document template

You can create a template document with merge fields by using any Word editor application, like Microsoft Word. By using Word editor application, you can take the advantage of the visual interface to design unique layout, formatting, and more for your Word document template interactively. 

The following screenshot shows how to insert a merge field in the Word document by **using the Microsoft Word.**

![Word template document](MailMerge_images/MailMerge_template.png)

You need to add a prefix (“Image:”) to the merge field name for merging an image in the place of a merge field.

**For example:** The merge field name should be like “Image:Photo” (<<Image:MergeFieldName>>)

You can **create Word document template programmatically** by adding merge fields to the Word document using Essential<sup>&reg;</sup> DocIO.

The following code example shows how to create a merge field in the Word document.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Mail-Merge/Create-merge-field/.NET/Create-merge-field/Program.cs" %}
//Creates an instance of a WordDocument 
WordDocument document = new WordDocument();
//Adds a section and a paragraph in the document
document.EnsureMinimal();
//Appends merge field to the last paragraph.
document.LastParagraph.AppendField("FullName", FieldType.FieldMergeField);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the Word document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates an instance of a WordDocument 
WordDocument document = new WordDocument();
//Adds a section and a paragraph in the document
document.EnsureMinimal();
//Appends merge field to the last paragraph.
document.LastParagraph.AppendField("FullName", FieldType.FieldMergeField);
//Saves and closes the WordDocument instance.
document.Save("Template.docx");
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates an instance of a WordDocument 
Dim document As WordDocument = New WordDocument
'Adds a section and a paragraph in the document
document.EnsureMinimal()
'Appends merge field to the last paragraph.
document.LastParagraph.AppendField("FullName", FieldType.FieldMergeField)
'Saves and closes the WordDocument instance.
document.Save("Template.docx")
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Create-merge-field).

### Execute mail merge

The following code example shows how to perform mail merge in above Word document template using string arrays as data source.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Mail-Merge/Getting-started-mail-merge/.NET/Getting-started-mail-merge/Program.cs" %}
//Opens the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
string[] fieldNames = new string[] { "FullName" };
string[] fieldValues = new string[] { "Nancy Davolio" };
//Performs the mail merge
document.MailMerge.Execute(fieldNames, fieldValues);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the Word document
document.Close();
{% endhighlight %}
 
{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens the template document
WordDocument document = new WordDocument("Template.docx");
string[] fieldNames = new string[] { "FullName" };
string[] fieldValues = new string[] { "Nancy Davolio" };
//Performs the mail merge
document.MailMerge.Execute(fieldNames, fieldValues);
//Saves and closes the WordDocument instance
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens the template document
Dim document As New WordDocument("Template.docx")
Dim fieldNames As String() = New String() {"FullName"}
Dim fieldValues As String() = New String() {"Nancy Davolio"}
'Performs the mail merge
document.MailMerge.Execute(fieldNames, fieldValues)
'Saves and closes the WordDocument instance
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Getting-started-mail-merge).

By executing the previous code example, it generates the resultant Word document as follows.

![Mail merge Word document](MailMerge_images/MailMerge_output.png)

## Simple Mail merge

The [MailMerge](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MailMerge.html) class provides various overloads for the [Execute](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MailMerge.html#Syncfusion_DocIO_DLS_MailMerge_Execute_System_String___System_String___) method to perform Mail merge from various data sources. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/simple-mail-merge). 

## Performing Mail merge for a group

You can perform Mail merge and append multiple records from data source within a specified region to a template document. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-for-group).

## Performing Nested Mail merge for group

You can perform nested Mail merge with relational or hierarchical data source and independent data tables in a template document. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-for-nested-groups).

## Performing Mail merge with dynamic objects

Essential<sup>&reg;</sup> DocIO allows you to perform Mail merge with the dynamic objects. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-for-nested-groups#mail-merge-with-dynamic-objects).

## Performing Mail merge with business objects

You can perform Mail merge with business objects in a template document. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-for-group#mail-merge-with-.NET-objects).

## Performing Nested Mail merge with relational data objects

Essential<sup>&reg;</sup> DocIO supports performing nested Mail merge with implicit relational data objects without any explicit relational commands by using the [ExecuteNestedGroup](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MailMerge.html#Syncfusion_DocIO_DLS_MailMerge_ExecuteNestedGroup_Syncfusion_DocIO_DLS_MailMergeDataTable_) overload method. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-for-nested-groups#mail-merge-with-implicit-relational-data).

## Event support for mail merge

The [MailMerge](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MailMerge.html) class provides event support to customize the document contents and merging image data during the Mail merge process. The following events are supported by Essential<sup>&reg;</sup> DocIO in Mail merge process:

* [MergeField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MergeFieldEventHandler.html): Occurs when a **Mail merge field** except image Mail merge field is encountered.

* [MergeImageField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MergeImageFieldEventHandler.html): Occurs when an **image Mail merge field** is encountered.

* [BeforeClearField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.BeforeClearFieldEventHandler.html): Occurs when an **unmerged field** is encountered.

* [BeforeClearGroupField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.BeforeClearGroupFieldEventHandler.html): Occurs when an **unmerged group field** is encountered.

### MergeField event

You can customize the merging text during Mail merge process by using the [MergeField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MergeFieldEventHandler.html) event. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-events#mergefield-event).

### MergeImageField event

You can customize the merging image during Mail merge process by using the [MergeImageField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MergeImageFieldEventHandler.html) event. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-events#mergeimagefield-event).

### BeforeClearField event

You can get the unmerged fields during Mail merge process by using the [BeforeClearField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.BeforeClearFieldEventHandler.html) event. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-events#beforeclearfield-event).

### BeforeClearGroupField event

You can get the unmerged groups during Mail merge process by using the [BeforeClearGroupField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.BeforeClearGroupFieldEventHandler.html) event. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-events#beforecleargroupfield-event).

## Mail merge options

The [MailMerge](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MailMerge.html) class allows you to customize the Mail merge process with the following options:

### Field mapping

You can automatically map the merge field names with data source column names during Mail merge process. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-options#field-mapping).

### Retrieving the merge field names

You can retrieve the merge field names and also merge field group names in the Word document. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-options#retrieve-the-merge-field-names).

### Removing empty paragraphs

You can remove the empty paragraphs when the paragraph has a merge field item without any data during Mail merge process. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-options#remove-empty-paragraphs).

### Removing empty merge fields

You can remove or keep the unmerged merge fields in the output document based on the [ClearFields](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MailMerge.html#Syncfusion_DocIO_DLS_MailMerge_ClearFields) property on each mail merge execution. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-options#remove-empty-merge-fields).

### Restart numbering in lists

You can restart the list numbering in a Word document during Mail merge. For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-options#restart-numbering-in-lists).

## Online Demo

* Explore how to generate a letter using mail merge functionality using the .NET Word Library (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/letterformat#/tailwind).

## See Also

* [How to mail merge Word document in Azure functions v1](https://support.syncfusion.com/kb/article/9196/how-to-mail-merge-word-document-in-azure-functions-v1)
* [How to display mail merge result using format switch in the Word document](https://support.syncfusion.com/kb/article/11272/how-to-display-mail-merge-result-using-format-switch-in-the-word-document)
* [Is this possible to mail merge using csv data source](https://support.syncfusion.com/kb/article/1294/is-this-possible-to-mail-merge-using-csv-data-source)
* [How to mail merge Word document in Linux (Mono)](https://support.syncfusion.com/kb/article/9194/how-to-mail-merge-word-document-in-linux-mono-in-aspnet-core)
* [How to replace merge field with HTML string using Mail merge](https://support.syncfusion.com/kb/article/10252/how-to-replace-merge-field-with-html-string-using-mail-merge)
* [How to mail merge Word document in Docker](https://support.syncfusion.com/kb/article/9397/how-to-mail-merge-word-document-in-docker)
* [Is it possible to merge outer group fields placed within inner nested group using nested mail merge?](https://support.syncfusion.com/kb/article/12362/is-it-possible-to-merge-outer-group-fields-placed-within-inner-nested-group-using-nested)
* [How to replace merge field with table using mail merge in Word document?](https://support.syncfusion.com/kb/article/15801/how-to-replace-merge-field-with-table-using-mail-merge-in-word-document)
*  [How to use multiple documents as data sources for mail merge in a Word document?](https://support.syncfusion.com/kb/article/15775/how-to-use-multiple-documents-as-data-sources-for-mail-merge-in-a-word-document)
* [How to remove an empty column after mail merge in a Word document](https://support.syncfusion.com/kb/article/17514/how-to-remove-empty-column-after-mail-merge-in-core-word-document)
* [How to throw an exception if data for a merge field does not exist?](https://support.syncfusion.com/kb/article/17535/how-to-throw-an-exception-if-data-for-a-merge-field-does-not-exist)
* [How to modify the font during a mail merge in a Word document](https://support.syncfusion.com/kb/article/17567/how-to-modify-the-font-during-a-mail-merge-in-core-word-document)
* [How to replace merge field with RTF using mail merge in Word document](https://support.syncfusion.com/kb/article/17816/how-to-replace-merge-field-with-rtf-using-mail-merge-in-word-document)
* [How to skip a range of records during mail merge in a Word document](https://support.syncfusion.com/kb/article/17718/how-to-skip-a-range-of-records-during-mail-merge-in-a-word-document?isInternalRefresh=False)
* [How to replace a merge field with an image from an HTML string in a Word document](https://support.syncfusion.com/kb/article/17810/how-to-replace-a-merge-field-with-an-image-from-an-html-string-in-a-word-document)
* [How to use conditional fields to add checkboxes during mail merge in a Word document?](https://support.syncfusion.com/kb/article/17847/how-to-use-conditional-fields-to-add-checkboxes-during-mail-merge-in-a-word-document)
* [How to Set Size Images While Performing Mail Merge in ASP.NET Word?](https://support.syncfusion.com/kb/article/19132/how-to-set-size-images-while-performing-mail-merge-in-aspnet-word?)
* [How to Display Field Result Horizontally in .NET Core Word?](https://support.syncfusion.com/kb/article/19130/how-to-display-field-result-horizontally-in-net-core-word?)
* [Generate ID Card in Multi-Column Page by Mail Merge in ASP.NET Word.](https://support.syncfusion.com/kb/article/19133/generate-id-card-in-multi-column-page-by-mail-merge-in-aspnet-word?)
* [How to Replace Merge Field with Markdown in .NET Core Word Document?](https://support.syncfusion.com/kb/article/19144/how-to-replace-merge-field-with-markdown-in-net-core-word-document?)
* [Change the Date Format to German during Mail Merge in ASP.NET Word](https://support.syncfusion.com/kb/article/19141/change-the-date-format-to-german-during-mail-merge-in-aspnet-word?)
* [How to Merge Two Records Per Page during Mail Merge in ASP.NET Word?](https://support.syncfusion.com/kb/article/17857/how-to-merge-two-records-per-page-during-mail-merge-in-aspnet-word?)
* [How to Fill a Single-Column Table with Rows in .NET Core Word](https://support.syncfusion.com/kb/article/19104/how-to-fill-a-single-column-table-with-rows-in-net-core-word?)
* [How to perform mail merge in Word document and convert it as PDF in WinForms?](https://support.syncfusion.com/kb/article/19782/how-to-perform-mail-merge-in-word-document-and-convert-it-as-pdf-in-winforms)
* [How to remove empty rows after mail merge in a Word document?](https://support.syncfusion.com/kb/article/19766/how-to-remove-empty-rows-after-mail-merge-in-a-word-document)
* [How to insert images into mail merge fields from different sources in a Word document?](https://support.syncfusion.com/kb/article/19108/how-to-insert-images-into-mail-merge-fields-from-different-sources-in-a-word-document)
* [How to apply multiple colors to a single merge field in a Word document?](https://support.syncfusion.com/kb/article/19780/how-to-apply-multiple-colors-to-a-single-merge-field-in-a-word-document)
* [How to replace merge field with HTML string in ASP.NET Core Word?](https://support.syncfusion.com/kb/article/19568/how-to-replace-merge-field-with-html-string-in-aspnet-core-word)
* [How to perform mail merge in column wise in a Word document?](https://support.syncfusion.com/kb/article/19767/how-to-perform-mail-merge-in-column-wise-in-a-word-document)
* [How to perform mail merge and generate separate Word documents for each record?](https://support.syncfusion.com/kb/article/19753/how-to-perform-mail-merge-and-generate-separate-word-documents-for-each-record)
* [How to resize image during mail merge in a Word document?](https://support.syncfusion.com/kb/article/19772/how-to-resize-image-during-mail-merge-in-a-word-document)
* [How to merge outer group fields within an inner nested group using nested mail merge in a Word document?](https://support.syncfusion.com/kb/article/19770/how-to-merge-outer-group-fields-within-an-inner-nested-group-using-nested-mail-merge-in-a-word-document)
* [How to insert multiple images into a single merge field during mail merge in a Word document?](https://support.syncfusion.com/kb/article/19775/how-to-insert-multiple-images-into-a-single-merge-field-during-mail-merge-in-a-word-document)
* [How to execute mail merge fields in a textbox, header, or footer in a Word document?](https://support.syncfusion.com/kb/article/19773/how-to-execute-mail-merge-fields-in-a-textbox-header-or-footer-in-a-word-document)
* [How to sum repeating merge field values during mail merge in a Word document?](https://support.syncfusion.com/kb/article/19784/how-to-sum-repeating-merge-field-values-during-mail-merge-in-a-word-document)
* [How to Execute Nested Group Mail Merge with JSON in ASP.NET Core Word?](https://support.syncfusion.com/kb/article/19550/how-to-execute-nested-group-mail-merge-with-json-in-aspnet-core-word?)
* [How to Replace Merge Fields with Markdown and URLs in .NET Core Word?](https://support.syncfusion.com/kb/article/19622/how-to-replace-merge-fields-with-markdown-and-urls-in-net-core-word?isInternalRefresh=False)
* [How to Replace Merge Fields with Markdown Content in .NET Core Word?](https://support.syncfusion.com/kb/article/19630/how-to-replace-merge-fields-with-markdown-content-in-net-core-word?)
* [How to generate a QR code from a URL and insert it into a Word document during mail merge?](https://support.syncfusion.com/kb/article/19819/how-to-generate-a-qr-code-from-a-url-and-insert-it-into-a-word-document-during-mail-merge)
* [How to change the font of hindi text during mail merge in a Word document?](https://support.syncfusion.com/kb/article/19789/how-to-change-the-font-of-hindi-text-during-mail-merge-in-a-word-document)
* [How to Mail Merge Two Data Sources in a Word Document .NET Core?](https://support.syncfusion.com/kb/article/20360/how-to-mail-merge-two-data-sources-in-a-word-document-net-core)
* [How to Generate Invoices with Dynamic in Word Document .NET Core?](https://support.syncfusion.com/kb/article/20106/how-to-generate-invoices-with-dynamic-in-word-document-net-core)
* [How to Convert Mail Merge to PDF in ASP.NET Core?](https://support.syncfusion.com/kb/article/20107/how-to-convert-mail-merge-to-pdf-in-aspnet-core)
* [How to perform mail merge in Word with XML data containing HTML tags in C#?](https://support.syncfusion.com/kb/article/20109/how-to-perform-mail-merge-in-word-with-xml-data-containing-html-tags-in-c)
* [How to Change the Merge Field Name in ASP.NET Word?](https://support.syncfusion.com/kb/article/19117/how-to-change-the-merge-field-name-in-aspnet-word)
* [How to Generate Invoices from XML Data in .NET Core Word Document?](https://support.syncfusion.com/kb/article/22139/how-to-generate-invoices-from-xml-data-in-net-core-word-document)
* [How to Insert Hyperlink during Mail Merge in .NET Core Word Document?](https://support.syncfusion.com/kb/article/22223/how-to-insert-hyperlink-during-mail-merge-in-net-core-word-document)
* [How to Modify Number or Date Formats in Word Mail Merge Fields at Runtime using C# .NET Core?](https://support.syncfusion.com/kb/article/22487/how-to-modify-number-or-date-formats-in-word-mail-merge-fields-at-runtime-using-c-net-core)