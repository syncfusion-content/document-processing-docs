---
layout: post
title: FAQs about SFDT in Blazor DOCX Editor | Syncfusion
description: Learn all about FAQs on SFDT in the Syncfusion Blazor Document Editor component, including its structure and usage.
control: SFDT format
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# FAQs about SFDT in Blazor Document Editor

The frequently asked questions about SFDT in [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) are listed below:

## What is SFDT format?

SFDT (Syncfusion Document Text) is a JSON-based representation of a DOCX document used internally by the Document Editor. It is not a new file format; instead, it is a structured JSON equivalent of a DOCX file, designed to represent the same content as the original document. SFDT uses a hierarchical key-value structure to describe document elements such as sections, paragraphs, text, styles, tables, and images, closely matching the structure of a Word document.

## Is it possible to modify SFDT?

It is not recommended to modify SFDT directly (either manually or programmatically). The format is designed for internal use by the Document Editor, and even small changes can break the document structure or cause unexpected behavior.

## What are the advantages of SFDT over DOCX?

SFDT is optimized for web-based document editing scenarios.

- It is lightweight and easier to process.

- Since SFDT is a Base64 string by default, you can store it directly in databases.

- Server-side dependencies are not required for loading and saving SFDT.

## When should I use SFDT in real-time scenarios?

SFDT is suitable in the following scenarios:

- Applications where documents are edited within the browser using the Document Editor, and the document state needs to be saved and reopened later in the same editor.

- Use cases that require efficient storage in a database and quick reloading for further editing.

## Can SFDT be converted back to DOCX?

Yes. You can convert SFDT back to DOCX or other [supported formats](../supported-fileformats) in the Document Editor.

## Are any features unavailable when using SFDT?

No. SFDT fully represents the document structure in a manner similar to DOCX, so all Document Editor features are supported when working with SFDT.