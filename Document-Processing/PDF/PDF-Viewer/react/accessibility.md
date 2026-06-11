---
layout: post
title: Accessibility in React PDF Viewer component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React PDF Viewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Syncfusion PDF Viewer components React

The PDF Viewer component follows accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and the WCAG ARIA roles specified by WAI-ARIA. The component's accessibility compliance is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

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

[WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) (Accessible Rich Internet Applications) provides semantics to describe the role, state, and functionality of web components. The following ARIA attributes are used by the PDF Viewer component.

| Attributes | Purpose |
| --- | --- |
| `aria-disabled`| Indicates whether the PDF Viewer component is in a disabled state or not.|
| `aria-expanded`| Indicates whether the suggestion list has expanded or not. |
| `aria-readonly` | Indicates the readonly state of the PDF Viewer element. |
| `aria-haspopup` | Indicates whether the PDF Viewer input element has a suggestion list or not. |
| `aria-label` | Indicates the breadcrumb item text. |
| `aria-labelledby` | Provides a label for the PDF Viewer. Typically, the "aria-labelledby" attribute will contain the id of the element used as the PDF Viewer's title. |
| `aria-describedby` | This attribute points to the PDF Viewer element describing the one it's set on. |
| `aria-orientation` | Indicates whether the PDF Viewer element is oriented horizontally or vertically. |
| `aria-valuetext` | Returns the current text of the PDF Viewer. |
| `aria-valuemax` | Indicates the Maximum value of the PDF Viewer. |
| `aria-valuemin` | Indicates the Minimum value of the PDF Viewer. |
| `aria-valuenow` | Indicates the current value of the PDF Viewer. |
| `aria-controls` | Attribute is set to the button and it points to the corresponding content. |

## Keyboard interaction

The PDF Viewer component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline to support users of assistive technologies and users who rely on keyboard navigation. The following keyboard shortcuts are supported by the PDF Viewer component.

| **Press (Windows)** |**Press (Macintosh)** | **To do this** |
| --- | --- | --- |
|||**Shortcuts for page navigation**|
| <kbd>CONTROL + Left Arrow (or) CONTROL + Up Arrow</kbd> | <kbd>COMMAND + Left Arrow (or) COMMAND + Up Arrow </kbd> |Navigate to the first page |
| <kbd>CONTROL + Right Arrow (or) CONTROL + Down Arrow</kbd> |<kbd>COMMAND + Right Arrow (or) COMMAND + Down Arrow</kbd> |Navigate to the last page |
|<kbd>Left Arrow</kbd> |<kbd> Left Arrow (or) Shift + Space </kbd> |Navigate to the previous page|
| <kbd>Right Arrow</kbd> | <kbd>Right Arrow (or) Space</kbd> | Navigate to the next page |
| <kbd>CONTROL + G</kbd> | <kbd>COMMAND + G</kbd> | Go To The Page|
|<kbd>Up Arrow</kbd> |<kbd>Up Arrow </kbd> |Scroll up|
| <kbd>Down Arrow</kbd> | <kbd>Down Arrow</kbd> | Scroll down|
|||**Shortcuts for Zooming**|
|<kbd>CONTROL + =</kbd> |<kbd>COMMAND + =</kbd> | Perform zoom-in operation |
| <kbd>CONTROL + -</kbd> | <kbd>COMMAND + -</kbd> | Perform zoom-out operation |
|<kbd>CONTROL + 0</kbd> |<kbd>COMMAND + 0</kbd> | Retain the zoom level to 1 |
|||**Shortcut for Text Search**|
| <kbd>CONTROL + F</kbd> | <kbd>COMMAND + F</kbd> |Open the search toolbar|
|||**Shortcut for Text Selection**|
|<kbd>CONTROL + C</kbd> |<kbd>CONTROL + C</kbd> | Copy the selected text or annotation or form field |
| <kbd>CONTROL + X</kbd> | <kbd>CONTROL + X</kbd> |Cut the selected text or annotation of the form field|
|<kbd>CONTROL + Y</kbd> |<kbd>CONTROL + Y</kbd> |Paste the selected text or annotation or form field|
|||**Shortcuts for the general operation**|
| <kbd>CONTROL + Z</kbd> | <kbd>CONTROL + Z</kbd> |Undo the action|
|<kbd>CONTROL + Y</kbd> |<kbd>CONTROL + Y</kbd> |Redo the action|
| <kbd>CONTROL + P</kbd> | <kbd>COMMAND + P</kbd> |Print the document|
|<kbd>Delete</kbd> |<kbd>Delete</kbd> |Delete the annotations and form fields|
|<kbd>CONTROL + Shift + A</kbd> |<kbd>COMMAND + Shift + A</kbd> |Toggle Annotation Toolbar|
|<kbd>CONTROL + Alt + 0</kbd> |<kbd>COMMAND + Option + 0</kbd> |Show Command panel|
|<kbd>CONTROL + Alt + 2</kbd> |<kbd>COMMAND + Option + 2</kbd> |Show Bookmarks|
|<kbd>CONTROL + Alt + 1</kbd> |<kbd>COMMAND + Option + 1</kbd> |Show Thumbnails|
|<kbd>CONTROL + S</kbd> |<kbd>COMMAND + S</kbd> |Download|
|<kbd>Shift + H</kbd> |<kbd>Shift + H</kbd> |Enable pan mode|
|<kbd>Shift + V</kbd> |<kbd>Shift + V</kbd> |Enable text selection mode|

The current implementation of the PDF Viewer includes keyboard shortcuts for scrolling, zooming, text search, printing, annotation deletion, and other common actions.

Additional keyboard shortcuts support navigation between pages, direct access to specific pages, toggling annotation tools, and displaying PDF elements such as outlines, annotations, bookmarks, and thumbnails.

To support custom keyboard actions, the implementation includes a `commandManager` construct that handles commands triggered by specific key gestures. The `commandManager` exposes a `Commands` parameter that contains a collection of custom keyboard commands. Each custom command is represented by a `KeyboardCommand` object containing a `name` and an associated `gesture` description.

A `keyboardCustomCommands` callback is available to handle keyboard events and trigger custom behavior when a defined key combination is detected.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import {PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
       ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {

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
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
        <PdfViewerComponent
          ref={(scope) => { pdfviewer = scope; }}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          commandManager = {commandManager}
          style={{ 'height': '640px' }}>

                <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
                                    ThumbnailView, Print,TextSelection, TextSearch]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import {PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
       ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
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
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
        <PdfViewerComponent
          ref={(scope) => { pdfviewer = scope; }}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
          commandManager = {commandManager}
          style={{ 'height': '640px' }}>

                <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
                                    ThumbnailView, Print,TextSelection, TextSearch]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

Each `keyboardCommand` object includes a `name` property that identifies the command and a `gesture` property that defines the key gesture associated with the command.

For example, a command named `customCopy` can be associated with the **G** key together with the **Shift** and **Alt** modifiers.

Key modifier encodings used in gesture definitions are as follows:

- Control (Ctrl): `1`
- Alt: `2`
- Shift: `4`
- Meta (Command on macOS or Windows key on Windows): `8`

These gesture definitions enable users to invoke custom actions in the PDF Viewer by pressing specified key combinations, improving navigation and interaction efficiency.

## Ensuring accessibility

The PDF Viewer component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)