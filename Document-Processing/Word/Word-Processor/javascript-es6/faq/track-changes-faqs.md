---
layout: post
title: FAQs about Track Changes in TypeScript DOCX Editor | Syncfusion
description: Find frequently asked questions about track changes in the TypeScript DOCX Editor control, including how to detect editable and non-editable regions.
control: Track Changes
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# FAQs about Track Changes in TypeScript DOCX Editor

The frequently asked questions about track changes in [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) are listed below:

## How do I detect whether the cursor is in an editable or non-editable region?

You can detect whether the current cursor position is in an editable or non-editable region by using the [`isSelectionInEditRegion`](https://ej2.syncfusion.com/documentation/api/document-editor/selection#isselectionineditregion) API within the [`selectionChange`](https://ej2.syncfusion.com/documentation/api/document-editor-container#selectionchange) event. This is useful when a document is protected with editable ranges, and you want to perform custom logic based on where the selection lies.

The following code snippet illustrates how to identify the selection region using the `selectionChange` event:

```ts
import { DocumentEditorContainer, Ribbon } from '@syncfusion/ej2-documenteditor';

let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true,
    toolbarMode: 'Ribbon',
    height: '590px',
});
DocumentEditorContainer.Inject(Ribbon);
container.appendTo('#container');

// Detect whether the selection is in an editable or non-editable region.
container.selectionChange = (): void => {
    if (container.documentEditor.selection.isSelectionInEditRegion()) {
        console.log('Selection in editable region');
    } else {
        console.log('Selection in non-editable region');
    }
};
```
