---
layout: post
title: Accessibility with EJ2 ASP.NET Core PDF Viewer | Syncfusion
description: Learn here all about accessibility in ASP.NET Core PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---
# Accessibility in Syncfusion PDF Viewer component

The PDF Viewer component adheres to accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), and [WCAG 2.2](https://www.w3.org/TR/WCAG22/). It also integrates [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) commonly used for accessibility evaluation.

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

The PDF Viewer component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guidelines, making it easy for users of assistive technologies (AT) and those who rely solely on keyboard navigation. The following keyboard shortcuts are supported by the PDF Viewer component:

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

The current implementation of our PDF Viewer includes keyboard shortcuts for functions such as scrolling, zooming, text search, printing, and annotation deletion.

To enhance user experience, we are adding additional keyboard shortcuts for actions like navigating between pages, accessing specific pages, toggling annotation tools, and displaying PDF elements (outlines, annotations, bookmarks, and thumbnails).

To support these enhancements, we are introducing a new class called **commandManager**. This class handles custom commands triggered by specific key gestures, which are defined by users and executed accordingly.

The **commandManager** includes a parameter called `keyboardCommand` (which replaces `Commands`). This parameter holds a collection of custom keyboard commands specified by users. Each custom command is represented by a `KeyboardCommand` class, containing the `name` of the command and its associated `gesture` (keyboard combination).

Additionally, we are introducing an `EventCallback` to the `keyboardCustomCommands` parameter for the `CommandManager`. This will handle keyboard events and trigger appropriate methods when specific key combinations are pressed.

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

Each `keyboardCommand` object consists of a name property, specifying the `name` of the `custom command`, and a `gesture property`, defining the key gesture associated with the command.

For example, the first command named `customCopy` is associated with the **G** key and requires both the **Shift** and **Alt** modifier keys to be pressed simultaneously.

Additionally, there's an explanation of the key modifiers used in the gestures:

* Ctrl corresponds to the Control key, represented by the value `1`.
* Alt corresponds to the Alt key, represented by the value `2`.
* Shift corresponds to the Shift key, represented by the value `4`.
* Meta corresponds to the Command key on macOS or the Windows key on Windows, represented by the value `8`.

This setup allows users to perform custom actions within the PDF viewer by pressing specific key combinations, enhancing the user experience and providing more efficient navigation and interaction options.

## Ensuring accessibility

The PDF Viewer component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

N> Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a simple PDF Viewer sample.
