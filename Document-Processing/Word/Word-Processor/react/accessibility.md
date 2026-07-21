---
layout: post
title: Accessibility in React Document Editor component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Document Editor component of Essential JS 2 and more.
control: Accessibility
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Document Editor component

The accessibility compliance for the [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (also referred to as the Document Editor) component is outlined below.

For keyboard accessibility, the Document Editor supports a range of [keyboard shortcuts](./keyboard-shortcut) for navigation and editing without a mouse, including tab navigation, cursor movement, and shortcut key combinations for common editing actions such as copy, paste, undo, and redo.

The following accessibility compliance summary applies to the `@syncfusion/ej2-react-documenteditor` package.

| Accessibility Criteria | Conformance | Compatibility |
| -- | -- | -- |
| [WCAG 2.2 Support](https://ej2.syncfusion.com/react/documentation/common/accessibility#accessibility-standards) | Level AA | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](https://ej2.syncfusion.com/react/documentation/common/accessibility#accessibility-standards) | — | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](https://ej2.syncfusion.com/react/documentation/common/accessibility#screen-reader-support) | — | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](https://ej2.syncfusion.com/react/documentation/common/accessibility#right-to-left-support) | — | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](https://ej2.syncfusion.com/react/documentation/common/accessibility#color-contrast) | AA | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](https://ej2.syncfusion.com/react/documentation/common/accessibility#mobile-device-support) | — | <img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> |
| [Keyboard Navigation Support](https://ej2.syncfusion.com/react/documentation/common/accessibility#keyboard-navigation-support) | — | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Accessibility Checker Validation](https://ej2.syncfusion.com/react/documentation/common/accessibility#ensuring-accessibility) | — | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Axe-core Accessibility Validation](https://ej2.syncfusion.com/react/documentation/common/accessibility#ensuring-accessibility) | — | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |

> **Note:** Criteria marked as **Intermediate** indicate partial compliance — some features of the Document Editor do not fully meet the requirement. For example, complex content structures within the editing surface (such as nested tables, custom form fields, and dialog-based interactions) may not be fully navigable by screen readers or keyboard alone in all scenarios.

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## Ensuring Accessibility

The Document Editor component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Document editor component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/wordprocessor.html) in a new window to evaluate the accessibility of the Document editor component with accessibility tools.

{% previewsample "/document-processing/code-snippet/document-editor/react/accessibility-cs1" %}

### Prerequisites

Before running accessibility checks against the Document Editor, ensure the following packages are installed in your test environment:

* `@syncfusion/ej2-react-documenteditor` — the Document Editor component

## See Also

- [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](https://ej2.syncfusion.com/react/documentation/common/accessibility)
- [Keyboard shortcuts in React Document Editor component](./keyboard-shortcut)
- [Right-to-left support in Syncfusion React components](https://ej2.syncfusion.com/react/documentation/common/accessibility#right-to-left-support)
- [Getting Started with React DOCX Editor component](./getting-started)