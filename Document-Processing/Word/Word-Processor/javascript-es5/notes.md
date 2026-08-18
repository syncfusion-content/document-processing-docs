---
layout: post
title: Footnotes and Endnotes in JavaScript DOCX Editor | Syncfusion
description: The footnote and endnote support in JavaScript DOCX Editor enables users to insert, edit, and manage references for additional document information.
platform: document-processing
control: Notes 
documentation: ug
domainurl: ##DomainURL##
---

# Footnotes and Endnotes in JavaScript DOCX Editor

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) Container component provides support for inserting footnotes and endnotes through the built-in toolbar. Refer to the following screenshot.

![Insert footnote endnote](images/note-toolbar.jpg)

Footnotes and endnotes are both ways of adding extra bits of information to your writing outside of the main text. You can use footnotes and endnotes to add side comments to your work or to cite other publications like books, articles, or websites.

## Insert footnotes

Document Editor exposes an API to insert footnotes at the cursor position programmatically, or they can be inserted at the end of selected text.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
//Inject require modules.
DocumentEditorContainer.Inject(Toolbar);
let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true,
    serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
container.appendTo('#DocumentEditor');
//Insert footnote.
container.documentEditor.editor.insertFootnote();
```

## Insert endnotes

Document Editor exposes an API to insert endnotes at the cursor position programmatically, or they can be inserted at the end of selected text.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
//Inject require modules.
DocumentEditorContainer.Inject(Toolbar);
let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true,
    serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
container.appendTo('#DocumentEditor');
//Insert endnote.
container.documentEditor.editor.insertEndnote();
```

## Update or edit footnotes and endnotes

You can update or edit the footnotes and endnotes using the built-in context menu shown by right-clicking the footnote or endnote. The Footnote/Endnote dialog box pops up, and you can customize the number format and the starting value. Refer to the following screenshot.

![Update or edit footnotes and endnotes](images/notes-option.jpg)

## Online demo

Explore how to add and manage notes in Word documents using the JavaScript (ES5) Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/material3/document-editor/notes.html).