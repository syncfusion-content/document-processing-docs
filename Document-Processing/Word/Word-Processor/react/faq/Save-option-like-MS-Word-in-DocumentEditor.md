---
layout: post
title: Why no direct file saving like in Microsoft Word? | Syncfusion
description: Learn here about Why the Document Editor does not support saving files directly like Microsoft Word
control: Unsupported file 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Why direct saving like Word is not available in Document Editor?

The Syncfusion Document Editor is a **web-based component** and, unlike desktop applications such as Microsoft Word, it does not have direct access to a user’s local file system. Due to browser security restrictions, web applications cannot access file paths, remember original file locations, or overwrite files on a user’s machine using actions such as Ctrl + S.

When a document is opened in the Document Editor, a copy of the file is loaded, converted, and maintained entirely in application memory. The editor does not retain any association with the original file or its location.

As a result, saving changes directly to the original local file is not supported. Instead, the recommended approach is to export or download the document, which allows you to save the updated version to your desired location.

You can refer to this [`link`](https://help.syncfusion.com/document-processing/word/word-processor/react/export) for more details about document exporting in the Document Editor. 