---
layout: post
title: FAQs about Track Changes in ASP.NET Core DOCX Editor | Syncfusion
description: Find frequently asked questions about track changes in the ASP.NET Core DOCX Editor control, including how to detect editable and non-editable regions.
control: Track Changes
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# FAQs about Track Changes in ASP.NET Core DOCX Editor

The frequently asked questions about track changes in [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) are listed below:

## How do I detect whether the cursor is in an editable or non-editable region?

You can detect whether the current cursor position is in an editable or non-editable region by using the `isSelectionInEditRegion` API within the `selectionChange` event. This is useful when a document is protected with editable ranges, and you want to perform custom logic based on where the selection lies.

The following code snippet illustrates how to identify the selection region using the `selectionChange` event:

```html
<ejs-documenteditorcontainer id="container" toolbarMode="Ribbon" enableToolbar="true" height="590px"></ejs-documenteditorcontainer>
<script>
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Ribbon);

    // For initialization before wiring the event
    setTimeout(function () {
        var container = document.getElementById('container').ej2_instances[0];

        // Detect whether the selection is in an editable or non-editable region.
        container.selectionChange = function () {
            if (container.documentEditor.selection.isSelectionInEditRegion()) {
                console.log('Selection in editable region');
            } else {
                console.log('Selection in non-editable region');
            }
        };
    });
</script>
```
