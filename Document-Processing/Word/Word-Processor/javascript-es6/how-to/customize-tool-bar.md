---
layout: post
title: How to Customize Toolbar in TypeScript DOCX Editor | Syncfusion
description: Customize the toolbar in Syncfusion® TypeScript DOCX Editor by adding, removing, showing, hiding, enabling, and disabling toolbar items.
platform: document-processing
control: Customize Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# How to Customize Toolbar in TypeScript DOCX Editor

## How to customize the existing toolbar in DocumentEditorContainer

DocumentEditorContainer allows you to customize (add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can be defined by [`CustomToolbarItemModel`](https://ej2.syncfusion.com/documentation/api/document-editor/customToolbarItemModel) along with the existing items in the [`toolbarItems`](https://ej2.syncfusion.com/documentation/api/document-editor-container#toolbaritems) property. The click action for the newly added item can be defined in [`toolbarClick`](https://ej2.syncfusion.com/documentation/api/toolbar/clickEventArgs).

* Show, Hide - Existing items can be shown or hidden using the [`toolbarItems`](https://ej2.syncfusion.com/documentation/api/document-editor-container#toolbaritems) property. Predefined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/documentation/api/document-editor/toolbarItem).

* Enable, Disable - Toolbar items can be enabled or disabled using [`enableItems`](https://ej2.syncfusion.com/documentation/api/document-editor-container/toolbar#enableItems).

```ts
let toolItem: CustomToolbarItemModel = {
    prefixIcon: "e-de-ctnr-lock",
    tooltipText: "Disable Image",
    text: onWrapText("Disable Image"),
    id: "Custom"
};

//Initialize Document Editor Container component with custom toolbar item.
let container: DocumentEditorContainer = new DocumentEditorContainer({
    toolbarItems: [toolItem, 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields', 'ContentControl']
});
container.appendTo('#container');
//To handle custom toolbar click event.
container.toolbarClick = (args: ClickEventArgs): void => {
    switch (args.item.id) {
        case 'Custom':
            //Disable the Image toolbar item.
            container.toolbar.enableItems(4, false);
            break;
    }
};

function onWrapText(text: string): string {
  let content: string = '';
    const index: number = text.lastIndexOf(' ');

    if (index !== -1) {
        content = text.slice(0, index) + "<div class='e-de-text-wrap'>" + text.slice(index + 1) + "</div>";
    } else {
        content = text;
    }

    return content;
}
```

N> The default value of the `toolbarItems` property is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields', 'ContentControl']`.

## Online Demo

Explore how to customize the toolbar in the JavaScript DOCX Editor for working with Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript/#/material3/document-editor/toolbar-customization.html).