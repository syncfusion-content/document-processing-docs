---
layout: post
title: Save option in React DOCX Editor | Syncfusion
description: Find frequently asked question about why the DOCX Editor does not support saving files directly like Microsoft Word
control: Save option
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Why is a MS Word–style "Save" option not available in Document Editor?

Syncfusion Document Editor is a web-based document editing component that runs within a browser. Unlike desktop applications such as Microsoft Word, web applications do not have direct access to a user's local file system due to browser security restrictions.

When a document is opened in the Document Editor, the original file is loaded into the editor and its content is maintained in the application's memory. The editor does not retain any connection to the original file location, file path, or storage destination. Because of this, it cannot directly overwrite or update the source file when changes are made.

As a result, operations similar to Microsoft Word's Save (Ctrl+S) behavior, where changes are written back to the same local file, are not feasible in a browser-based environment.

You can refer to this [`link`](https://help.syncfusion.com/document-processing/word/word-processor/react/export) for more details about document exporting in the Document Editor. 

This approach aligns with standard web application security practices and ensures compatibility across browsers and platforms.
