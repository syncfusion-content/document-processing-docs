---
layout: post
title: Context Menu in Angular PDF Viewer | Syncfusion
description: Learn about the context menu options in the Syncfusion Angular PDF Viewer, default behavior, and links to built-in and customization guides.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Context Menu in Angular PDF Viewer

The Angular PDF Viewer provides a built-in context menu for interacting with text, annotations, form fields, and document elements. This feature enhances the user experience by offering quick access to relevant actions based on the current selection or the specific area of the document being interacted with.

## Understanding the Context Menu

The context menu is designed to be context-aware, meaning it dynamically updates its items based on the target element. For example, right-clicking on selected text shows text-related actions such as copy and highlight, while right-clicking on an annotation shows annotation management options such as copy, cut, paste, and delete. For the complete list of items by scenario, see the [Built-in Context Menu](builtin-context-menu.md) page.

### Core Capabilities

The context menu supports several configurations:

* **Default Behavior**: Provides standard actions such as cut, copy, and annotation management.
* **Customization**: Allows adding new menu items, removing default ones, or reordering them to meet specific application requirements.
* **Granular Control**: Developers can fully disable the menu or replace it with custom logic using events. For details, see the [Customize Context Menu](custom-context-menu.md) page.

### Client-side Interaction

The availability and behavior of the context menu are governed primarily by client-side logic. It is not affected by server-side configurations or cloud environments, ensuring consistent performance across different deployment scenarios.

## See Also

* [Built-in Context Menu](builtin-context-menu.md): A technical reference for default menu items by context (text, annotations, form fields, and empty space).
* [Customize Context Menu](custom-context-menu.md): A guide on how to add custom menu items, handle click events, and disable the menu entirely.
* [Angular PDF Viewer Getting Started](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started): Installation, module registration, and license key registration.
* [API Reference: PdfViewerComponent](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index): Related properties such as `enableContextMenu` and `contextMenuOption`, and events such as `contextMenuOpen` and `contextMenuItemSelected`.
