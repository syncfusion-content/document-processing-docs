---
layout: post
title: Built-in Context Menu in React PDF Viewer | Syncfusion
description: Explore the default context menu items in the React PDF Viewer, including options for text selection, annotations, and form fields.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Built-in Context Menu in React PDF Viewer

The React PDF Viewer includes a context-sensitive menu that updates dynamically based on the right-clicked element within the document.

## Context Menu Scenarios

Menu items vary depending on the target element:

* **Right-click on Text**: Displays options to annotate and copy selected text.
  ![context menu on text](../images/context-menu-text.png)
* **Right-click on Annotations**: Provides options to copy, cut, paste, or remove annotations, and add comments.
  ![context menu on annotation](../images/context-menu-annotation.png)
* **Right-click on Form Fields**: Shows standard form field interactions, such as modifying properties. The context menu for form fields appears only when the viewer is in **designer mode**.
  ![context menu on form fields](../images/context-menu-forms.png)
* **Right-click on Empty Space**: Displays the option to paste a previously copied annotation or form field.
  ![context menu on empty space](../images/context-menu-empty.png)

## Default Items

### Text Menu Items

* **Copy**: Copies selected text to the clipboard.
* **Highlight**: Highlights selected text. 
* **Underline**: Underlines selected text.
* **Strikethrough**: Strikes through selected text.
* **Squiggly**: Applies a squiggly underline to selected text.
* **Redact Text**: Redacts selected text.

### Annotation Menu Items

* **Copy**: Copies the selected annotation to the clipboard for pasting within the same page.
* **Cut**: Removes the selected annotation and copies it for pasting within the same page.
* **Paste**: Pastes a copied or cut annotation.
* **Delete**: Removes the selected annotation.
* **Comments**: Opens the comments panel to manage annotation comments.

### Form Field Menu Items

* **Copy**: Copies the selected form field for pasting within the same page.
* **Cut**: Removes the selected form field and copies it for pasting within the same page.
* **Paste**: Pastes a copied or cut form field.
* **Delete**: Removes the selected form field.
* **Properties**: Opens the properties dialog for the selected form field.

N> Menu items appear contextually and change depending on the selection. The availability of the context menu is a client-side feature and is not affected by cloud or server configurations.