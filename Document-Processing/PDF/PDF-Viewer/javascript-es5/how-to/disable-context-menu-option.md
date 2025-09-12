---
layout: post
title: Disable context menu option in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Disable context menu option in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Disable context menu option
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Disable context menu option in Javascript Pdfviewer control

To disable the context menu in the Syncfusion PDF viewer control, you can use the [**ContextMenuOption**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#contextmenuoption) property as `'None'` to hide all context menu options. Default value of the **ContextMenuOption** is `'RightClick'`.

Here is an example of how you can use the **ContextMenuOption** to disable context menu in the PDF Viewer:

```

<button id='disable'>Disable ContextMenuOption</button>

```

```javascript

// Disable ContextMenuOption
document.getElementById('disable').addEventListener('click', ()=> {
  viewer.contextMenuOption = 'None';
});

```

This will hide the context menu and prevent the user from right-clicking on the PDF viewer.

Find the sample [how to disable context menu](https://stackblitz.com/edit/jlphem-uicunx?devtoolsheight=33&file=index.js)