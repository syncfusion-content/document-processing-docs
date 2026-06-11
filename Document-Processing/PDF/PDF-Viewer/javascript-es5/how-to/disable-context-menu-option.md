---
layout: post
title: Disable the context menu in JavaScript PDF Viewer | Syncfusion
description: Learn how to disable the context menu in the JavaScript PDF Viewer using the ContextMenuOption property.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Disable the context menu in JavaScript PDF Viewer

Set [ContextMenuOption](https://ej2.syncfusion.com/documentation/api/pdfviewer/#contextmenuoption) to `None` to hide all context menu options. The default value is `RightClick`.

Example: Disable context menu

```

<button id='disable'>Disable ContextMenuOption</button>

```

```javascript

// Disable ContextMenuOption
document.getElementById('disable').addEventListener('click', ()=> {
  viewer.contextMenuOption = 'None';
});

```

This hides the context menu and prevents right-click interactions in the viewer.

Sample: [How to disable the context menu](https://stackblitz.com/edit/jlphem-uicunx?devtoolsheight=33&file=index.js)