---
layout: post
title: Accessibility in ASP.NET Core DOCX Editor | Syncfusion
description: The accessibility support in ASP.NET Core DOCX Editor ensures keyboard navigation, screen reader compatibility, and an inclusive document editing experience.
platform: document-processing
control: Accessibility
documentation: ug
---

# Accessibility in ASP.NET Core DOCX Editor

The accessibility compliance for the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](https://ej2.syncfusion.com/aspnetcore/documentation/common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](https://ej2.syncfusion.com/aspnetcore/documentation/common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](https://ej2.syncfusion.com/aspnetcore/documentation/common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](https://ej2.syncfusion.com/aspnetcore/documentation/common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](https://ej2.syncfusion.com/aspnetcore/documentation/common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](https://ej2.syncfusion.com/aspnetcore/documentation/common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> |
| [Keyboard Navigation Support](https://ej2.syncfusion.com/aspnetcore/documentation/common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Accessibility Checker Validation](https://ej2.syncfusion.com/aspnetcore/documentation/common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Axe-core Accessibility Validation](https://ej2.syncfusion.com/aspnetcore/documentation/common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## Screen Reader Support

The DOCX Editor provides screen reader support for improved accessibility. Set the [`enableScreenReader`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorSettings.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorSettings_EnableScreenReader) property to `true` in [`documentEditorSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_DocumentEditorSettings) to enable screen reader support and expose the necessary accessibility information for screen reader tools.

### Enable Screen Reader Support

```cshtml
@using Syncfusion.EJ2.DocumentEditor

<ejs-documenteditorcontainer height="590px"
                             documentEditorSettings="settings">
</ejs-documenteditorcontainer>

@code {
    DocumentEditorSettings settings = new DocumentEditorSettings
    {
        EnableScreenReader = true
    };
}
```

N> `enableScreenReader` is disabled by default. Set it to `true` to enable screen reader support.

## Keyboard interaction

The DOCX Editor supports [keyboard shortcuts](./keyboard-shortcut) for navigation and editing without a mouse, including tab navigation, cursor movement, and shortcut key combinations for common editing actions such as copy, paste, undo, and redo.

## Ensuring accessibility

The DOCX Editor component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the DOCX Editor component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/wordprocessor.html) in a new window to evaluate the accessibility of the DOCX Editor component with accessibility tools.

## See also

- [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core components](https://ej2.syncfusion.com/aspnetcore/documentation/common/accessibility)
