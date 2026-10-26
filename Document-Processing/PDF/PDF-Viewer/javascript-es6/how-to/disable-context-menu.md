---
layout: post
title: How to Disable the Context Menu in JavaScript (ES6) PDF | Syncfusion
description: Disable the right-click context menu in the JavaScript (ES6) PDF Viewer to prevent users from accessing context menu actions on PDF content.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Disable the Context Menu in JavaScript (ES6) PDF Viewer

Set [ContextMenuOption] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#contextmenuoption) to `None` to hide all context menu options. The default value is `RightClick`.

## Example: Disable context menu

```html

<button id='disable'>Disable ContextMenuOption</button>

```

```ts

// Disable ContextMenuOption
document.getElementById('disable').addEventListener('click', ()=> {
  viewer.contextMenuOption = 'None';
});

```

This hides the context menu and prevents right-click interactions in the viewer.

Sample: How to disable the context menu
https://stackblitz.com/edit/e99te3-ha9bkx?devtoolsheight=33&file=index.ts
