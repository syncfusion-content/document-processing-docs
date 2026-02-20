---
layout: post
title: Accessibility with EJ2 ASP.NET Core PDF Viewer | Syncfusion
description: Learn here all about accessibility in ASP.NET Core PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---
# Accessibility in Syncfusion PDF Viewer component

The PDF Viewer component adheres to accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), and [WCAG 2.2](https://www.w3.org/TR/WCAG22/). It implements [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) to ensure comprehensive accessibility support for all users.

## Accessibility compliance

Below is an outline of the accessibility compliance for the PDF Viewer component:

| Accessibility Criteria | Compatibility |
| --- | --- |
| WCAG 2.2 Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Section 508 Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Accessibility Checker Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Axe-core Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

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

[WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) (Web Accessibility Initiative – Accessible Rich Internet Applications) defines a way to make web content and web applications more accessible. It provides additional semantics to describe the role, state, and functionality of web components. The following ARIA attributes are used in the PDF Viewer component:

| Attributes | Purpose |
| --- | --- |
| `aria-disabled` | Indicates whether the PDF Viewer component is in a disabled state. |
| `aria-expanded` | Indicates whether the suggestion list has expanded. |
| `aria-readonly` | Indicates the read-only state of the PDF Viewer element. |
| `aria-haspopup` | Indicates whether the PDF Viewer input element has a suggestion list. |
| `aria-label` | Provides a label for the breadcrumb item. |
| `aria-labelledby` | Provides a label for the PDF Viewer, typically pointing to the ID of the element used as the viewer's title. |
| `aria-describedby` | This attribute points to an element describing the PDF Viewer component. |
| `aria-orientation` | Indicates whether the PDF Viewer element is oriented horizontally or vertically. |
| `aria-valuetext` | Returns the current text value of the PDF Viewer. |
| `aria-valuemax` | Indicates the maximum value of the PDF Viewer. |
| `aria-valuemin` | Indicates the minimum value of the PDF Viewer. |
| `aria-valuenow` | Indicates the current value of the PDF Viewer. |
| `aria-controls` | Attribute set on a button, pointing to its corresponding content. |

## Keyboard interaction

The PDF Viewer component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guidelines, making it accessible for users of assistive technologies and those who rely solely on keyboard navigation. The built-in keyboard shortcuts support common operations such as document navigation, zooming, searching, text selection, and annotation management.

### Built-in keyboard shortcuts

| **Press (Windows)** | **Press (Macintosh)** | **To do this** |
| --- | --- | --- |
| | | **Shortcuts for page navigation** |
| <kbd>CONTROL + Left Arrow (or) CONTROL + Up Arrow</kbd> | <kbd>COMMAND + Left Arrow (or) COMMAND + Up Arrow</kbd> | Navigate to the first page |
| <kbd>CONTROL + Right Arrow (or) CONTROL + Down Arrow</kbd> | <kbd>COMMAND + Right Arrow (or) COMMAND + Down Arrow</kbd> | Navigate to the last page |
| <kbd>Left Arrow</kbd> | <kbd>Left Arrow (or) Shift + Space</kbd> | Navigate to the previous page |
| <kbd>Right Arrow</kbd> | <kbd>Right Arrow (or) Space</kbd> | Navigate to the next page |
| <kbd>CONTROL + G</kbd> | <kbd>COMMAND + G</kbd> | Go to a specific page |
| <kbd>Up Arrow</kbd> | <kbd>Up Arrow</kbd> | Scroll up |
| <kbd>Down Arrow</kbd> | <kbd>Down Arrow</kbd> | Scroll down |
| | | **Shortcuts for zooming** |
| <kbd>CONTROL + =</kbd> | <kbd>COMMAND + =</kbd> | Perform zoom-in operation |
| <kbd>CONTROL + -</kbd> | <kbd>COMMAND + -</kbd> | Perform zoom-out operation |
| <kbd>CONTROL + 0</kbd> | <kbd>COMMAND + 0</kbd> | Reset zoom level to 100% |
| | | **Shortcut for text search** |
| <kbd>CONTROL + F</kbd> | <kbd>COMMAND + F</kbd> | Open the search toolbar |
| | | **Shortcut for text selection** |
| <kbd>CONTROL + C</kbd> | <kbd>CONTROL + C</kbd> | Copy selected text, annotation, or form field |
| <kbd>CONTROL + X</kbd> | <kbd>CONTROL + X</kbd> | Cut selected text, annotation, or form field |
| <kbd>CONTROL + V</kbd> | <kbd>COMMAND + V</kbd> | Paste selected text, annotation, or form field |
| | | **Shortcuts for general operations** |
| <kbd>CONTROL + Z</kbd> | <kbd>COMMAND + Z</kbd> | Undo the action |
| <kbd>CONTROL + Y</kbd> | <kbd>COMMAND + Y</kbd> | Redo the action |
| <kbd>CONTROL + P</kbd> | <kbd>COMMAND + P</kbd> | Print the document |
| <kbd>Delete</kbd> | <kbd>Delete</kbd> | Delete selected annotations and form fields |
| <kbd>CONTROL + Shift + A</kbd> | <kbd>COMMAND + Shift + A</kbd> | Toggle Annotation Toolbar |
| <kbd>CONTROL + Alt + 0</kbd> | <kbd>COMMAND + Option + 0</kbd> | Show Command panel |
| <kbd>CONTROL + Alt + 2</kbd> | <kbd>COMMAND + Option + 2</kbd> | Show Bookmarks |
| <kbd>CONTROL + Alt + 1</kbd> | <kbd>COMMAND + Option + 1</kbd> | Show Thumbnails |
| <kbd>CONTROL + S</kbd> | <kbd>COMMAND + S</kbd> | Download the document |
| <kbd>Shift + H</kbd> | <kbd>Shift + H</kbd> | Enable pan mode |
| <kbd>Shift + V</kbd> | <kbd>Shift + V</kbd> | Enable text selection mode |

## Custom keyboard commands

In addition to the built-in keyboard shortcuts, the PDF Viewer component supports custom keyboard commands, allowing developers to define application-specific keyboard gestures and actions. This feature enhances user experience by enabling efficient navigation and interaction tailored to specific workflows.

### Configuring custom keyboard commands

Custom keyboard commands are configured through the **CommandManager** class, which manages keyboard events and executes defined commands. The CommandManager accepts a collection of custom keyboard commands via the `keyboardCommand` parameter, where each command specifies a unique name and its associated keyboard gesture.

Each keyboard gesture consists of two components:
- **Key**: The primary key (represented using the `PdfKeys` enum)
- **Modifier keys**: Optional modifier keys (Shift, Ctrl, Alt, or Meta combinations)

### Modifier keys reference

The following modifier keys can be combined with primary keys:

- **Ctrl** (Control key): represented by the value `1`
- **Alt** (Alt key): represented by the value `2`
- **Shift** (Shift key): represented by the value `4`
- **Meta** (Command key on macOS or Windows key on Windows): represented by the value `8`

Multiple modifiers can be combined using the bitwise OR operator (`|`).

### Example: Defining custom keyboard commands

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   commandManager="commandManager">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">

    function commandManager() {
       keyboardCommand: [{
            name: 'customCopy',
            gesture: {
                pdfKeys: PdfKeys.G,
                modifierKeys: ModifierKeys.Shift | ModifierKeys.Alt
               }
            },
            {
            name: 'customPaste',
            gesture: {
                pdfKeys: PdfKeys.H,
                modifierKeys: ModifierKeys.Shift | ModifierKeys.Alt
               }
            },
            {
            name: 'customCut',
            gesture: {
                pdfKeys: PdfKeys.Z,
                modifierKeys: ModifierKeys.Control
               }
            },
            {
            name: 'customSelectAll',
            gesture: {
                pdfKeys: PdfKeys.E,
                modifierKeys: ModifierKeys.Control
               }
            },
        ]
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   commandManager="commandManager">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
    function commandManager() {
       keyboardCommand: [{
            name: 'customCopy',
            gesture: {
                pdfKeys: PdfKeys.G,
                modifierKeys: ModifierKeys.Shift | ModifierKeys.Alt
               }
            },
            {
            name: 'customPaste',
            gesture: {
                pdfKeys: PdfKeys.H,
                modifierKeys: ModifierKeys.Shift | ModifierKeys.Alt
               }
            },
            {
            name: 'customCut',
            gesture: {
                pdfKeys: PdfKeys.Z,
                modifierKeys: ModifierKeys.Control
               }
            },
            {
            name: 'customSelectAll',
            gesture: {
                pdfKeys: PdfKeys.E,
                modifierKeys: ModifierKeys.Control
               }
            },
        ]
    }
</script>

{% endhighlight %}
{% endtabs %}

Each `keyboardCommand` object consists of the following properties:

- **name**: The identifier for the custom command (e.g., `customCopy`, `customPaste`)
- **gesture**: An object containing the key binding configuration:
  - **pdfKeys**: The primary key from the `PdfKeys` enum
  - **modifierKeys**: A combination of modifier keys using the `ModifierKeys` enum with bitwise OR operations

In the example above, the `customCopy` command is triggered by pressing **G** in combination with **Shift** and **Alt** keys. The gesture definition allows multiple modifier keys to be combined, enabling flexible keyboard accessibility patterns.

## Ensuring accessibility

The PDF Viewer component's accessibility compliance is validated through automated testing using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools.

N> Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a simple PDF Viewer sample.
