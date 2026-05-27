---
layout: post
title: Supported File Formats in JavaScript (ES5) DOCX Editor | Syncfusion
description: Learn more about the supported file formats in Syncfusion® JavaScript (ES5) DOCX Editor (Document Editor) for opening and exporting documents.
control: Supported File Formats
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Supported File Formats in JavaScript (ES5) DOCX Editor

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) DOCX Editor (Document Editor) supports a wide range of Microsoft Word and other document formats for opening and exporting, with both client-side and server-side capabilities.

## Supported File Formats

The following table describes supported formats and their conversion capabilities in the Document Editor.

| Operation | Formats | Server-Side Required | Details |
|-----------|---------|---------------------|---------|
| **Open (Server-side)** | **Word formats:**<br>• Word Document (.docx)<br>• Word 97-2003 Document (.doc)<br>• Word Template (.dotx)<br>• Word 97-2003 Template (.dot)<br>• Rich Text Format (.rtf)<br>• Word XML Document (.xml)<br><br>**Other formats:**<br>• HyperText Markup Language (.html)<br>• Plain Text (.txt) | Yes | Uses .NET Word Library (DocIO) for parsing documents |
| **Open (Client-side)** | • Syncfusion Document Text (.sfdt) | No | Native JSON-based document format |
| **Export (Client-side)** | • Word Document (.docx)<br>• Syncfusion Document Text (.sfdt)<br>• Word Template (.dotx)<br>• Plain Text (.txt) | No | Export handled directly in the browser |
| **Export (Server-side)** | **Word formats:**<br>• Word Document (.doc)<br>• Word 97-2003 Template (.dot)<br>• Rich Text Format (.rtf)<br>• Word XML Document (.xml)<br><br>**Other formats:**<br>• HyperText Markup Language (.html)<br>• OpenDocument Text (.odt)<br>• Portable Document Format (.pdf) | Yes | Uses .NET Word (DocIO) for document conversion, and both DocIO and .NET PDF libraries for PDF conversion. |

## Supported platforms for server-side dependencies

You can deploy web APIs for the server-side dependencies of the Document Editor component on the following platforms.

- 	[ASP.NET Core](./web-services/core)
- 	[ASP.NET MVC](./web-services/mvc)
- 	[Java](./web-services/java)

To know more about server-side dependencies, refer to this [page](./web-services-overview).

N> If you do not require these functionalities, you can deploy the component as a pure client-side solution without any server-side interaction.