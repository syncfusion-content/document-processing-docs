---
layout: post
title: Accessibility in Blazor DOCX Editor Component | Syncfusion
description: Check out and learn all about accessibility in Syncfusion Blazor Document Editor component and more.
platform: document-processing
control: Document Editor
documentation: ug
---

# Accessibility in Blazor Document Editor Component

The [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WCAG roles](https://www.w3.org/TR/wai-aria#roles) used to evaluate accessibility compliance.

The accessibility compliance for the Blazor Document Editor component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](https://blazor.syncfusion.com/documentation/common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](https://blazor.syncfusion.com/documentation/common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](https://blazor.syncfusion.com/documentation/common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Right-To-Left Support](https://blazor.syncfusion.com/documentation/common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](https://blazor.syncfusion.com/documentation/common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](https://blazor.syncfusion.com/documentation/common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> |
| [Keyboard Navigation Support](https://blazor.syncfusion.com/documentation/common/accessibility#keyboard-navigation-support) |<img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Axe-core Accessibility Validation](https://blazor.syncfusion.com/documentation/common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## Keyboard interaction

The Document Editor supports a wide range of keyboard shortcuts to facilitate common actions, including text formatting, paragraph formatting, navigation, and editing.

### Text formatting

The following table lists the default keyboard shortcuts in the Document Editor for formatting text:

| Windows | Mac | Description |
|-----------------|------|-------|
|<kbd>Ctrl</kbd> + <kbd>B</kbd> | <kbd>⌘</kbd> + <kbd>B</kbd> |Toggles the bold property of selected text.|
|<kbd>Ctrl</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>I</kbd> | Toggles the italic property of selected text.|
|<kbd>Ctrl</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd> + <kbd>U</kbd> | Toggles the underline property of selected text.|
|<kbd>Ctrl</kbd> + <kbd>+</kbd> | <kbd>⌘</kbd> + <kbd>+</kbd> | Toggles the subscript formatting of selected text.|
|<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>+</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> +<kbd>+</kbd> | Toggles the superscript formatting of selected contents.|
| <kbd>Ctrl</kbd> + <kbd>}</kbd> | <kbd>⌘</kbd> + <kbd>}</kbd> | Increases the actual font size of selected text by one point.|
| <kbd>Ctrl</kbd> + <kbd>{</kbd> | <kbd>⌘</kbd> + <kbd>{</kbd> | Decreases the actual font size of selected text by one point.|

### Paragraph formatting

The following table lists the default keyboard shortcuts for formatting the paragraph:

| Windows | Mac | Description |
|---------|--------|-------------|
|<kbd>Ctrl</kbd> + <kbd>E</kbd> | <kbd>⌘</kbd> + <kbd>E</kbd> | Selected paragraphs are center aligned.|
|<kbd>Ctrl</kbd> + <kbd>J</kbd> | <kbd>⌘</kbd> + <kbd>J</kbd> |Selected paragraphs are justified.|
|<kbd>Ctrl</kbd> + <kbd>L</kbd> | <kbd>⌘</kbd> + <kbd>L</kbd> | Selected paragraphs are left aligned.|
|<kbd>Ctrl</kbd> + <kbd>R</kbd> | <kbd>⌘</kbd> + <kbd>R</kbd> | Selected paragraphs are right aligned.|
|<kbd>Ctrl</kbd> + <kbd>1</kbd> | <kbd>⌘</kbd> + <kbd>1</kbd> | Single line spacing is applied for selected paragraphs.|
|<kbd>Ctrl</kbd> + <kbd>5</kbd> | <kbd>⌘</kbd> + <kbd>5</kbd> | 1.5 line spacing is applied for selected paragraphs.|
|<kbd>Ctrl</kbd> + <kbd>2</kbd> | <kbd>⌘</kbd> + <kbd>2</kbd> | Double spacing is applied for selected paragraphs.|
|<kbd>Ctrl</kbd> + <kbd>0</kbd> | <kbd>⌘</kbd> + <kbd>0</kbd> | No spacing is applied before the selected paragraphs.|
|<kbd>Ctrl</kbd> + <kbd>M</kbd> | <kbd>⌘</kbd> + <kbd>M</kbd> | Increases the left indent of selected paragraphs by a factor of 36 points.|
|<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>M</kbd> | Decreases the left indent of selected paragraphs by a factor of 36 points.|
|<kbd>Ctrl</kbd> + <kbd>*</kbd> | <kbd>⌘</kbd> + <kbd>*</kbd> | Show/Hide the hidden characters like spaces, tab, paragraph marks, and breaks.|

### Clipboard

|Windows |Mac| Description |
|--------|-------|-------------|
|<kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>⌘</kbd> + <kbd>C</kbd> | Copies selected contents to the clipboard.|
|<kbd>Ctrl</kbd> + <kbd>V</kbd> | <kbd>⌘</kbd> + <kbd>V</kbd> | Pastes plain text content from the clipboard.|
|<kbd>Ctrl</kbd> + <kbd>X</kbd> | <kbd>⌘</kbd> + <kbd>X</kbd> | Moves selected content to the clipboard.|

### Keyboard shortcut to navigate around the document

|Windows | Mac | Description |
|--------|-------|-------------|
|<kbd>←</kbd> | <kbd>←</kbd> | Moves the cursor position one character to the left.|
|<kbd>→</kbd> | <kbd>→</kbd> | Moves the cursor position one character to the right.|
|<kbd>↓</kbd> | <kbd>↓</kbd> | Moves the cursor position down one line.|
|<kbd>↑</kbd> | <kbd>↑</kbd> | Moves the cursor position up one line.|
|<kbd>Ctrl</kbd> + <kbd>←</kbd> | <kbd>⌘</kbd> + <kbd>←</kbd> | Moves the cursor position one word to the left.|
|<kbd>Ctrl</kbd> + <kbd>→</kbd> | <kbd>⌘</kbd> + <kbd>→</kbd> | Moves the cursor position one word to the right.|
|<kbd>Ctrl</kbd> + <kbd>↑</kbd> | <kbd>⌘</kbd> + <kbd>↑</kbd> | Moves the cursor position one paragraph up.|
|<kbd>Ctrl</kbd> + <kbd>↓</kbd> | <kbd>⌘</kbd> + <kbd>↓</kbd> | Moves the cursor position one paragraph down.|
|<kbd>Tab</kbd> (in table) | <kbd>Tab</kbd> | Moves the cursor position one cell to the right.|
|<kbd>Shift</kbd> + <kbd>Tab</kbd> (in table) | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves the cursor position one cell to the left.|
|<kbd>Home</kbd> | <kbd>Home</kbd> | Moves the cursor position to the start of a line.|
|<kbd>End</kbd> | <kbd>End</kbd> | Moves the cursor position to the end of a line.|
|<kbd>Page up</kbd> | <kbd>Page up</kbd> | Moves the cursor position one screen up.|
|<kbd>Page down</kbd> | <kbd>Page down</kbd> | Moves the cursor position one screen down.|
|<kbd>Ctrl</kbd> + <kbd>Home</kbd> | <kbd>⌘</kbd> + <kbd>Home</kbd> | Moves the cursor position to the start of a document.|
|<kbd>Ctrl</kbd> + <kbd>End</kbd> | <kbd>⌘</kbd> + <kbd>End</kbd> | Moves the cursor position to the end of a document.|

### Keyboard shortcut to extend selection

|Windows | Mac | Description|
|--------|-------|------------|
|<kbd>Shift</kbd> + <kbd>←</kbd> | <kbd>⇧</kbd> + <kbd>←</kbd> | Extends selection one character to the left.|
|<kbd>Shift</kbd> + <kbd>→</kbd> | <kbd>⇧</kbd> + <kbd>→</kbd> | Extends selection one character to the right.|
|<kbd>Shift</kbd> + <kbd>↓</kbd> | <kbd>⇧</kbd> + <kbd>↓</kbd> | Extends selection one line downward.|
|<kbd>Shift</kbd> + <kbd>↑</kbd> | <kbd>⇧</kbd> + <kbd>↑</kbd> | Extends selection one line upward.|
|<kbd>Shift</kbd> + <kbd>Home</kbd> | <kbd>⇧</kbd> + <kbd>Home</kbd> | Extends selection to the start of a line.|
|<kbd>Shift</kbd> + <kbd>End</kbd> | <kbd>⇧</kbd> + <kbd>End</kbd> | Extends Selection to the end of a line.|
|<kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>⌘</kbd> + <kbd>A</kbd> | Extends selection to the entire document.|
|<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>←</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>←</kbd> | Extends selection one word to the left.|
|<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>→</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>→</kbd> | Extends selection one word to the right.|
|<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>↓</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>↓</kbd> | Extends selection to the end of a paragraph.|
|<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>↑</kbd> | Extends selection to the start of a paragraph.|
|<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>Home</kbd> | Extends selection to the start of a document.|
|<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>End</kbd> | Extends selection to the end of a document.|

### Find and Replace

|Windows | Mac |Description|
|--------|-------|-----------|
|<kbd>Ctrl</kbd> + <kbd>F</kbd> | <kbd>⌘</kbd> + <kbd>F</kbd> | Opens options pane.|
|<kbd>Ctrl</kbd> + <kbd>H</kbd> | <kbd>⌘</kbd> + <kbd>H</kbd> | Opens replace tab in options pane.|

### Print document

|Windows | Mac |Description|
|--------|-------|-----------|
|<kbd>Ctrl</kbd> + <kbd>P</kbd> | <kbd>⌘</kbd> + <kbd>P</kbd> | Prints the document.|

### Edit operations

| Windows | Mac | Description |
|---------|------|-----------|
|<kbd>Backspace</kbd> | <kbd>Backspace</kbd> | Deletes the character to the left of the cursor.|
|<kbd>Delete</kbd> | <kbd>Delete</kbd> | Deletes the character to the right of the cursor.|
|<kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> | Undoes the last performed action.|
|<kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd> + <kbd>Y</kbd> | Redoes the last undo action.|

### Insert special characters

| Windows | Mac | Description |
|---------|------|-----------|
|<kbd>Ctrl</kbd> + <kbd>Enter</kbd> | <kbd>⌘</kbd> + <kbd>Enter</kbd> | Inserts page break.|
|<kbd>Shift</kbd> + <kbd>Enter</kbd> | <kbd>⇧</kbd> + <kbd>Enter</kbd> | Inserts line break.|

### Dialog

| Windows | Mac | Description |
|--------|-------|-----------|
|<kbd>Ctrl</kbd> + <kbd>F</kbd> | <kbd>⌘</kbd> + <kbd>F</kbd> | Opens the options pane.|
|<kbd>Ctrl</kbd> + <kbd>D</kbd> | <kbd>⌘</kbd> + <kbd>D</kbd> | Opens the font dialog.|
|<kbd>Ctrl</kbd> + <kbd>K</kbd> | <kbd>⌘</kbd> + <kbd>K</kbd> | Opens the hyperlink dialog.|

Refer to the Blazor Document Editor feature tour page for its groundbreaking feature representations. You can also explore our [Blazor Word Processor example](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/default-functionalities) to learn how to render and configure the Document Editor.

## Ensuring accessibility

The Blazor Document Editor component accessibility levels are ensured through an [axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) software tool during automated testing.

The accessibility compliance of the Blazor Document Editor component is shown in the following sample. Open the [sample](https://blazor.syncfusion.com/accessibility/document-editor) in a new window to evaluate the accessibility of the Document Editor component with accessibility tools.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components](https://blazor.syncfusion.com/documentation/common/accessibility)
