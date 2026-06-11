---
layout: post
title: Keyboard accessibility in Blazor SfPdfViewer Component | Syncfusion
description: Checkout and learn here all about Keyboard accessibility in Syncfusion Blazor SfPdfViewer component and more.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Accessibility in Syncfusion® Blazor SfPdfViewer
The Blazor SfPdfViewer component follows established accessibility guidelines and standards, including the [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles), which are commonly used to evaluate accessibility.

The accessibility compliance for the Blazor SfPdfViewer component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](https://blazor.syncfusion.com/documentation/common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Section 508 Support](https://blazor.syncfusion.com/documentation/common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Screen Reader Support](https://blazor.syncfusion.com/documentation/common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Right-To-Left Support](https://blazor.syncfusion.com/documentation/common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](https://blazor.syncfusion.com/documentation/common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](https://blazor.syncfusion.com/documentation/common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Keyboard Navigation Support](https://blazor.syncfusion.com/documentation/common/accessibility#keyboard-navigation-support) |<img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core Accessibility Validation](https://blazor.syncfusion.com/documentation/common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

[WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) (Accessibility Initiative – Accessible Rich Internet Applications) defines a way to enhance the accessibility of web pages, dynamic content, and user interface components developed with Ajax, HTML, JavaScript, and related technologies. ARIA provides additional semantics to describe the role, state, and functionality of web components. The following ARIA attributes are commonly applied in the SfPdfViewer component:

| Attributes | Purpose |
| --- | --- |
| `aria-disabled` | Indicates whether an interactive control (for example, a toolbar button) is disabled and not operable. |
| `aria-expanded` | Indicates whether an expandable element (for example, a panel or toolbar menu) is currently expanded. |
| `aria-readonly` | Indicates that the element is read-only and user input is not expected. |
| `aria-haspopup` | Identifies that the element opens a popup (menu, dialog, or toolbar). |
| `aria-label` | Provides an accessible name for controls or regions when a visible label is not available. |
| `aria-labelledby` | Identifies the element that labels this element by referencing that element's id. |
| `aria-describedby` | Identifies the element that provides a description for this element by referencing that element's id. |
| `aria-orientation` | Indicates the orientation (horizontal or vertical) of widgets such as sliders or splitters. |
| `aria-valuetext` | Provides a human-readable text alternative of the current value (for example, a zoom level). |
| `aria-valuemax` | Indicates the maximum value for range widgets (for example, maximum zoom). |
| `aria-valuemin` | Indicates the minimum value for range widgets (for example, minimum zoom). |
| `aria-valuenow` | Indicates the current numeric value for range widgets (for example, current zoom). |
| `aria-controls` | Identifies the element or region controlled by this element (for example, a button that opens a panel). |

## Keyboard interaction

The Blazor SfPdfViewer component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline, making it accessible to users who rely on assistive technologies (AT) and keyboard navigation. The following keyboard shortcuts are supported by the SfPdfViewer component.

| Windows | Mac | Action |
| --- | --- | --- |
|||**Shortcuts for page navigation**|
| <kbd>Ctrl</kbd> + <kbd>←</kbd> / <kbd>Ctrl</kbd> + <kbd>↑</kbd> | <kbd>⌘</kbd> + <kbd>←</kbd> / <kbd>⌘</kbd> + <kbd>↑</kbd> |Navigate to the first page |
| <kbd>Ctrl</kbd> + <kbd>→</kbd> / <kbd>Ctrl</kbd> + <kbd>↓</kbd> | <kbd>⌘</kbd> + <kbd>→</kbd> / <kbd>⌘</kbd> + <kbd>↓</kbd> |Navigate to the last page |
| <kbd>←</kbd> | <kbd>←</kbd> / <kbd>⇧</kbd> + <kbd>Space</kbd> |Navigate to the previous page |
| <kbd>→</kbd> | <kbd>→</kbd> / <kbd>Space</kbd> | Navigate to the next page |
| <kbd>Ctrl</kbd> + <kbd>G</kbd> | <kbd>⌘</kbd> + <kbd>G</kbd> | Go To The Page|
| <kbd>↑</kbd> |<kbd>↑</kbd> |Scroll up|
| <kbd>↓</kbd> | <kbd>↓</kbd> | Scroll down|
|||**Shortcuts for Zooming**|
| <kbd>Ctrl</kbd> + <kbd>=</kbd> | <kbd>⌘</kbd> + <kbd>=</kbd> | Perform zoom-in operation |
| <kbd>Ctrl</kbd> + <kbd>-</kbd> | <kbd>⌘</kbd> + <kbd>-</kbd> | Perform zoom-out operation |
|<kbd>Ctrl</kbd> + <kbd>0</kbd> | <kbd>⌘</kbd> + <kbd>0</kbd> | Reset zoom to 100% |
|||**Shortcut for Text Search**|
| <kbd>Ctrl</kbd> + <kbd>F</kbd> | <kbd>⌘</kbd> + <kbd>F</kbd> | Open the search toolbar|
|||**Shortcut for Text Selection**|
|<kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>⌘</kbd> + <kbd>C</kbd> | Copy the selected text or annotation |
| <kbd>Ctrl</kbd> + <kbd>X</kbd> | <kbd>⌘</kbd> + <kbd>X</kbd> | Cut the selected text or annotation |
|<kbd>Ctrl</kbd> + <kbd>V</kbd> | <kbd>⌘</kbd> + <kbd>V</kbd> | Paste the selected text or annotation |
|||**Shortcuts for general operation**|
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> | Undo the action |
|<kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd> + <kbd>Y</kbd> | Redo the action |
| <kbd>Ctrl</kbd> + <kbd>P</kbd> | <kbd>⌘</kbd> + <kbd>P</kbd> | Print the document |
| <kbd>Delete</kbd> | <kbd>Delete</kbd> | Delete the annotations |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>A</kbd> | Toggle Annotation Toolbar|
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>0</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>0</kbd> | Show Command panel |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>2</kbd> | Show Bookmarks |
|<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>1</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>1</kbd> | Show Thumbnails |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | <kbd>⌘</kbd> + <kbd>S</kbd> | Download |
| <kbd>Shift</kbd> + <kbd>H</kbd> | <kbd>⇧</kbd> + <kbd>H</kbd> | Enable pan mode |
| <kbd>Shift</kbd> + <kbd>V</kbd> | <kbd>⇧</kbd> + <kbd>V</kbd> | Enable text selection mode |

## Ensuring accessibility

The Blazor SfPdfViewer component's accessibility levels are ensured through an [axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) with playwright tests.

The accessibility compliance of the Blazor SfPdfViewer component is demonstrated in the following sample. Open the [SfPdfViewer accessibility sample](https://blazor.syncfusion.com/accessibility/sfpdfviewer) in a new window to evaluate the accessibility of the Blazor SfPdfViewer component with accessibility tools.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components](https://blazor.syncfusion.com/documentation/common/accessibility)