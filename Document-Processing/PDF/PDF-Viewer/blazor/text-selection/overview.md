---
layout: post
title: Text selection in Blazor PDF Viewer | Syncfusion
description: Learn the text selection concepts, copy behavior, and interaction capabilities of the Blazor PDF Viewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
domainurl: ##DomainURL##
---

# Text selection in Blazor PDF Viewer

The Text Selection module in the Blazor PDF Viewer enables users to select and copy text from a loaded PDF document. Text selection is available by default and gives users direct interaction with the content through dragging, keyboard shortcuts, and context menus.

This overview explains the behavior of text selection, how copy actions work, and how it relates to other interaction features in the viewer.

## Capabilities of text selection

Text selection allows users to:

- Highlight text using mouse or touch
- Copy the selected text to the clipboard
- Access contextual commands such as Copy through the built-in context menu
- Use keyboard shortcuts such as Ctrl+C or Cmd+C to copy text
- Respond to selection events such as [OnTextSelectionStart](./text-selection-api-events#ontextselectionstart) and [OnTextSelectionEnd](./text-selection-api-events#ontextselectionend)

The feature behaves consistently across single-page and multi-page documents.

## Copying text

You can copy selected text using the following options:

### Using the context menu

When text is selected, the built-in context menu shows a Copy option. Selecting this option copies the highlighted text to the clipboard. See the [context menu](../context-menu) documentation for more information.

### Using keyboard shortcuts

The following keyboard shortcuts copy the selected text:

- Ctrl+C (Windows and Linux)
- Cmd+C (macOS)
- Ctrl+A (Windows, Linux, and macOS) to select all text on the current page

## See also

These topics describe how selection interacts with other features or how copy behavior may be limited depending on viewer configuration or PDF security settings.

- [Blazor PDF Viewer overview](../overview)
- [Toggle text selection](./enable-text-selection)
- [Text selection API and events](./text-selection-api-events)
