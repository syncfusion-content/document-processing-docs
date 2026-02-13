---
layout: post
title: Customize tool bar in JavaScript (ES5) Document editor control | Syncfusion
description: Learn here all about Customize tool bar in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize tool bar 
documentation: ug
domainurl: ##DomainURL##
---

# Customize tool bar in JavaScript (ES5) Document editor control

## How to customize existing toolbar in DocumentEditorContainer

DocumentEditorContainer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by [`CustomToolbarItemModel`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/customToolbarItemModel/) and with existing items in [`toolbarItems`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#toolbaritems) property. Newly added item click action can be defined in [`toolbarClick`](https://ej2.syncfusion.com/javascript/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - Existing items can be shown or hidden using the [`toolbarItems`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#toolbaritems) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/toolbarItem/).

* Enable, Disable -  Toolbar items can be enabled or disable using [`enableItems`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container/toolbar/#enableItems)

```js

var toolItem = {
    prefixIcon: "e-de-ctnr-lock",
    tooltipText: "Disable Image",
    text: onWrapText("Disable Image"),
    id: "Custom"
};
//Initialize Document Editor Container component with custom toolbar item.
var container = new ej.documenteditor.DocumentEditorContainer({
    toolbarItems: [toolItem, 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']
});
container.appendTo('#container');
//To handle custom toolbar click event.
container.toolbarClick = function (args) {
    switch (args.item.id) {
        case 'Custom':
            //Disable image toolbar item.
            container.toolbar.enableItems(4, false);
            break;
    }
};
function onWrapText(text) {
    var content = '';
    var index = text.lastIndexOf(' ');
    if (index !== -1) {
        content = text.slice(0, index) + "<div class='e-de-text-wrap'>" + text.slice(index + 1) + "</div>";
    } else {
        content = text;
    }
    return content;
}
```

>Note: Default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.