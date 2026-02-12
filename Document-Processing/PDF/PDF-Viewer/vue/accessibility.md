---
layout: post
title: Accessibility in Vue PDF Viewer | Syncfusion
description: Learn about accessibility in the Syncfusion Vue PDF Viewer, including compliance with WCAG 2.2, Section 508, ADA standards, and keyboard navigation support.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Syncfusion Vue PDF Viewer

The PDF Viewer component follows accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) commonly used to evaluate accessibility.

The accessibility compliance for the PDF Viewer component is summarized below.

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

Note: Mobile device support is marked as partial due to platform-level constraints on hover interactions, complex keyboard navigation, and screen reader capabilities that vary by device and browser.

## WAI-ARIA attributes

[WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) (Accessibility Initiative – Accessible Rich Internet Applications) defines a way to increase the accessibility of web pages, dynamic content, and user interface components developed with Ajax, HTML, JavaScript, and related technologies. ARIA provides additional semantics to describe the role, state, and functionality of web components. The following ARIA attributes are used in the PDF Viewer component:

| Attributes | Purpose |
| --- | --- |
| `aria-disabled`| Indicates whether the PDF Viewer component is in a disabled state or not.|
| `aria-expanded`| Indicates whether an element within the PDF Viewer is expanded or collapsed. |
| `aria-readonly` | Indicates the read-only state of a PDF Viewer element. |
| `aria-haspopup` | Indicates the presence of a popup, such as a context menu or submenu. |
| `aria-label` | Provides a human-readable label for interactive elements in the PDF Viewer. |
| `aria-labelledby` | Identifies the element(s) that label the PDF Viewer, often referencing the title element. |
| `aria-describedby` | Identifies the element(s) that describe the PDF Viewer or its controls. |
| `aria-orientation` | Indicates whether an element is oriented horizontally or vertically. |
| `aria-valuetext` | Provides a human-readable text alternative for the current value of a range-type element. |
| `aria-valuemax` | Specifies the maximum value of a range-type element. |
| `aria-valuemin` | Specifies the minimum value of a range-type element. |
| `aria-valuenow` | Specifies the current value of a range-type element. |
| `aria-controls` | Identifies the element(s) controlled by the current element. |

## Keyboard interaction

The PDF Viewer follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline to support users who rely on assistive technologies (AT) or keyboard navigation. The following keyboard shortcuts are supported by the PDF Viewer.

| **Press (Windows)** |**Press (Macintosh)** | **To do this** |
| --- | --- | --- |
|||**Shortcuts for page navigation**|
| <kbd>CONTROL + Left Arrow (or) CONTROL + Up Arrow</kbd> | <kbd>COMMAND + Left Arrow (or) COMMAND + Up Arrow </kbd> |Navigate to the first page |
| <kbd>CONTROL + Right Arrow (or) CONTROL + Down Arrow</kbd> |<kbd>COMMAND + Right Arrow (or) COMMAND + Down Arrow</kbd> |Navigate to the last page |
|<kbd>Left Arrow</kbd> |<kbd> Left Arrow (or) Shift + Space </kbd> |Navigate to the previous page|
| <kbd>Right Arrow</kbd> | <kbd>Right Arrow (or) Space</kbd> | Navigate to the next page |
| <kbd>CONTROL + G</kbd> | <kbd>COMMAND + G</kbd> | Go to a specific page|
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
| <kbd>CONTROL + P</kbd> | <kbd> COMMAND + P </kbd> |Print the document|
|<kbd>Delete</kbd> |<kbd>Delete</kbd> |Delete the annotations and form fields|
|<kbd>CONTROL + Shift + A</kbd> |<kbd>COMMAND + Shift + A</kbd> |Toggle Annotation Toolbar|
|<kbd>CONTROL + Alt + 0</kbd> |<kbd>COMMAND + Option + 0</kbd> |Show Command panel|
|<kbd>CONTROL + Alt + 2</kbd> |<kbd>COMMAND + Option + 2</kbd> |Show Bookmarks|
|<kbd>CONTROL + Alt + 1</kbd> |<kbd>COMMAND + Option + 1</kbd> |Show Thumbnails|
|<kbd>CONTROL + S</kbd> |<kbd>COMMAND + S</kbd> |Download|
|<kbd>Shift + H</kbd> |<kbd>Shift + H</kbd> |Enable pan mode|
|<kbd>Shift + V</kbd> |<kbd>Shift + V</kbd> |Enable text selection mode|

The PDF Viewer includes keyboard shortcuts for scrolling, zooming, text search, printing, and annotation deletion.

Additional keyboard shortcuts are available for common actions such as navigating between pages, accessing specific pages, toggling annotation tools, and displaying PDF elements (outlines, annotations, bookmarks, thumbnails).

To support custom key bindings, the viewer provides a `commandManager` configuration object that handles custom commands triggered by specified key gestures. Custom commands are defined by name and executed when their associated key gesture is detected.

The `commandManager` configuration includes a `keyboardCommand` collection that holds user-defined keyboard commands. Each command is represented by a `KeyboardCommand` object containing a `name` and an associated `gesture` describing the key combination.

The `keyboardCustomCommands` parameter is an event callback invoked when a custom key combination is detected; handlers can perform application-specific actions in response.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :commandManager="commandManager">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';


const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  Annotation, ThumbnailView, Print, TextSelection, TextSearch]);

const commandManager = {
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
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :commandManager="commandManager">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
      Annotation, ThumbnailView, Print, TextSelection, TextSearch]
  },
  methods: {
    commandManager: {
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
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :commandManager="commandManager">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  Annotation, ThumbnailView, Print, TextSelection, TextSearch])

const commandManager = {
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
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :commandManager="commandManager">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
      Annotation, ThumbnailView, Print, TextSelection, TextSearch]
  },

  methods: {
    commandManager: function () {
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
  }

}
</script>

{% endhighlight %}
{% endtabs %}

Each `keyboardCommand` object consists of a `name` property for the custom command and a `gesture` property defining the key gesture associated with the command. For example, the `customCopy` command is associated with the G key and requires both the Shift and Alt modifier 

Key modifiers used in gestures:
- Ctrl corresponds to the Control key (value `1`).
- Alt corresponds to the Alt key (value `2`).
- Shift corresponds to the Shift key (value `4`).
- Meta corresponds to the Command key on macOS or the Windows key on Windows (value `8`).

This enables custom actions within the PDF Viewer when specific key combinations are pressed, improving navigation and interaction efficiency.

## Ensuring accessibility

The PDF Viewer component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components](../common/accessibility)