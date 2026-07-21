---
layout: post
title: Text selection in React PDF Viewer | Syncfusion
description: Learn the text selection concepts, copy behavior, and interaction capabilities of the Syncfusion React PDF Viewer.
platform: document-processing
control: Text selection
documentation: ug
domainurl: ##DomainURL##
---

# Text selection in React PDF Viewer

The Text Selection module in the React PDF Viewer enables users to select and copy text from a loaded PDF document. Text selection is available by default and gives users direct interaction with the content through dragging, keyboard shortcuts, and context menus.

This overview explains the behavior of text selection, how copy actions work, and how it relates to other interaction features in the viewer.

## Capabilities of text selection

Text selection allows users to:

- Highlight text using mouse or touch
- Copy the selected text to the clipboard
- Access contextual commands through the built-in context menu
- Use keyboard shortcuts such as Ctrl+C or Cmd+C to copy text
- Trigger application behavior through selection events

The feature behaves consistently across single-page and multi-page documents.

## Copying text

Copying is available through user interaction and through code.

### Using the context menu

When text is selected, the built-in context menu shows a Copy option copies the highlighted text to the clipboard. See the [context menu](../context-menu/builtin-context-menu#text-menu-items) documentation for the complete list of text menu items.

### Using keyboard shortcuts

The following keyboard shortcuts copy the selected text:

- Ctrl+C (Windows and Linux)
- Cmd+C (macOS)

## Related topics

- **Security** - [Restricting copy operations (permissions)](../security/prevent-copy-and-print)
- **Configuration** - [Toggle text selection](./toggle-text-selection)
- **API** - [Text selection API and events](./text-selection-api-events)

Setting [`enableTextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextselection) to `false` overrides any copy permission granted by the PDF's security settings and prevents both selection and copy in the viewer UI.