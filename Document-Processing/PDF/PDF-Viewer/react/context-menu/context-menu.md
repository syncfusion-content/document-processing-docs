---
layout: post
title: Context Menu in React PDF Viewer | Syncfusion
description: Learn about the contextual menu options in the Syncfusion React PDF Viewer, including default behavior and customization possibilities.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Context Menu in React PDF Viewer

The React PDF Viewer provides a built-in context menu for interacting with text, annotations, form fields, and document elements. This feature enhances the user experience by offering quick access to relevant actions based on the current selection or the right-clicked area of the document

## Understanding the Context Menu

The context menu is designed to be context-sensitive, meaning it dynamically updates its items based on the target element. For instance, right-clicking on selected text will show annotation options; right-clicking on an annotation will display management options such as copy, cut, paste, delete, and comments. Form-field and empty-space menus are also supported, with form-field items appearing only in Form Designer mode.

### Core Capabilities

The context menu supports several configurations:

* **Default Behavior**: Provides standard actions such as cut, copy, and annotation management.
* **Customization**: Allows adding new menu items, removing default ones, or reordering them to meet specific application requirements.
* **Granular Control**: Developers can fully disable the menu or replace it with custom logic using events.

### Client-side Interaction

The availability and behavior of the context menu are governed primarily by client-side logic. It is not affected by server-side configurations or cloud environments, ensuring consistent performance across different deployment scenarios.

## Further Reading

* [Built-in Context Menu](builtin-context-menu) – A technical reference for default menu behavior and items.
* [Customize Context Menu](custom-context-menu) – A guide on how to implement custom menu items and dynamic updates.
