---
layout: post
title: Accessibility in Blazor Spreadsheet | Syncfusion
description: Learn about accessibility support in the Syncfusion Blazor Spreadsheet, including WCAG compliance, keyboard navigation, and WAI-ARIA attributes.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Accessibility in Blazor Spreadsheet

The [Blazor Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/blazor-spreadsheet-editor) follows accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WAI-ARIA](https://www.w3.org/TR/wai-aria#roles) roles commonly used to evaluate accessibility.

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
The accessibility compliance for the Spreadsheet component is outlined below. The icons in the table indicate the level of compliance: a full check means all features meet the requirement, a partial check means some features do not, and a cross means the requirement is not met. Click any criterion to learn more about the standard.
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](https://blazor.syncfusion.com/documentation/common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](https://blazor.syncfusion.com/documentation/common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](https://blazor.syncfusion.com/documentation/common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes">  |
| [Right-To-Left Support](https://blazor.syncfusion.com/documentation/common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](https://blazor.syncfusion.com/documentation/common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](https://blazor.syncfusion.com/documentation/common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](https://blazor.syncfusion.com/documentation/common/accessibility#keyboard-navigation-support) |<img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Axe-core Accessibility Validation](https://blazor.syncfusion.com/documentation/common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |

## WAI-ARIA attributes
The [Blazor Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/blazor-spreadsheet-editor) follows [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns to meet accessibility standards. The following ARIA attributes are used in the Spreadsheet component:

| Attributes | Purpose |
|---|---|
| `role=textbox` | Identifies an element as an input field that allows text entry. |
| `role=button` | Identifies an element that functions as a button. |
| `role=combobox` | Identifies a component that combines a text input with a popup listbox or tree. |
| `role=menu` | Defines a container for a collection of choices or commands presented in a contextual or dropdown format. |
| `role=alert` | Designates an element that displays important, time-sensitive information. |
| `aria-label` | This attribute describes the accessible name for the interactive elements. |
| `aria-expanded` | Indicates whether a collapsible element (e.g., a dropdown) is currently expanded or collapsed. |
| `aria-live` | Defines a region as "live", meaning its content updates dynamically. Values include "off", "polite" (waits until idle), or "assertive" (announces immediately). |
| `aria-rowindex` | Defines the row index of a row with respect to the total number of rows in the Spreadsheet. |
| `aria-colindex` | Defines the column index of a column with respect to the total number of columns in the Spreadsheet. |
| `aria-multiline` | Indicates whether a textbox accepts multiple lines of input or only a single line. |


## Keyboard interaction

The [Blazor Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/blazor-spreadsheet-editor) follows [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert#keyboardinteraction) guidelines, making it accessible for people who use assistive technologies (AT) and those who rely on keyboard navigation.

N> For a complete list of keyboard shortcuts available in the Blazor Spreadsheet, refer to the [Keyboard shortcuts](./keyboard-shortcuts) documentation.

## See also

* [Accessibility in Syncfusion Blazor](https://blazor.syncfusion.com/documentation/common/accessibility)