---
layout: post
title: Change Document View Type in Blazor DocumentEditor | Syncfusion
description: Learn how to change the document view between Print Layout (Pages) and Web Layout (Continuous) in the Syncfusion Blazor DocumentEditor component.
platform: document-processing
control: DocumentEditor
documentation: ug
---

# Change Document View in Blazor DocumentEditor

The [Blazor Word Processor](https://www.syncfusion.com/blazor-components/blazor-word-processor) (Document Editor) provides two different layout options for viewing a document, controlled by the `LayoutType` property. This allows users to switch between a print-optimized view and a continuous web-based view.

The two available layout types are:

*   **Pages (Print Layout)**: This is the default view. It displays the document as a series of distinct pages, exactly as it would appear when printed. This layout is ideal for understanding the document's structure, including headers, footers, and page breaks.
*   **Continuous (Web Layout)**: This view displays the document as a single, continuous flowing page without any page breaks. This is similar to how a standard web page is rendered and is useful for continuous reading and editing without the interruption of page boundaries.

## Setting the Layout Type

The layout type can be set during component initialization. The following example demonstrates how to configure the Document Editor to use the `Continuous` (Web Layout) view.

```
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="Container" EnableToolbar="true" Height="590px" LayoutType="LayoutType.Continuous">
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer Container;
}
```

N> By default, the `LayoutType` is set to `LayoutType.Pages`, which provides a print layout view. To switch to a web layout, set the property to `LayoutType.Continuous`.
