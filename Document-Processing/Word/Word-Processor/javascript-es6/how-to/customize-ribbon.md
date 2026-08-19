---
layout: post
title: How to Customize Ribbon in TypeScript DOCX Editor | Syncfusion
description: Customize ribbon tabs, groups, and commands in Syncfusion® TypeScript DOCX Editor to tailor the toolbar experience and improve user productivity.
platform: document-processing
control: Ribbon Customization
documentation: ug
domainurl: ##DomainURL##
---

# How to Customize Ribbon in TypeScript DOCX Editor

The [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) provides an extensive and flexible API to customize the built-in ribbon UI. You can:

- Customize the File menu.
- Add the Backstage menu instead of File menu.
- Show, hide, or add Ribbon tabs.
- Show, hide, or add groups within tabs.
- Show, hide, add, enable, or disable items within groups.

Below are detailed examples for each ribbon customization scenario.

## File Menu Customization

The Document Editor provides APIs to remove existing File menu items and add new custom items based on your requirements. You can modify the File menu using the [`fileMenuItems`](https://ej2.syncfusion.com/documentation/api/document-editor-container#filemenuitems) property.

In the example below, the "Open" and "Export" items have been removed from the File Menu Items, and new custom items have been added.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true, toolbarMode: 'Ribbon',
    fileMenuItems: ["New", "Print", { text: 'Export', id: 'custom_item',iconCss: 'e-icons e-export' }
    ],
    fileMenuItemClick: function (args) {
        if (args.item.id) {
            container.documentEditor.save('Sample', 'Docx');
        }
    }
});
```

## Backstage Menu Customization

The Document Editor provides a [`backStageMenu`](https://ej2.syncfusion.com/documentation/api/document-editor-container#backStageMenu) API to add a backstage menu. When the backstage menu is enabled, the default File menu items are automatically hidden.

The following code example shows how to add the backstage menu items.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true, toolbarMode: 'Ribbon',
     backstageMenu: {
        text: 'File',
        backButton: { text: 'close' },
        items: [
            { id: 'new', text: 'New', iconCss: 'e-icons e-de-ctnr-new' }],
    }
});
```

Refer to this documentation to know more about [`backstage items`](https://ej2.syncfusion.com/documentation/ribbon/backstage).

## Tab Customization

You can customize the ribbon tabs in the Document Editor by showing, hiding, or adding tabs according to your application's requirements.

### Show/Hide Tab

The Document Editor provides the [`showTab`](https://ej2.syncfusion.com/documentation/api/document-editor-container/ribbon#showtab) API to show and hide the existing tab using the existing `RibbonTabType` and `tabId`.

The following code example shows how to show/hide an existing tab using the existing tab type and tab ID.
```ts
// To hide the Home tab using the built-in `RibbonTabType`
container.ribbon.showTab('Home', false);

// To hide a tab by its tab id (for example, a custom tab)
container.ribbon.showTab('custom_tab', false);
```

### Add Tab

The Document Editor provides the [`addTab`](https://ej2.syncfusion.com/documentation/api/document-editor-container/ribbon#addtab) API, which allows you to insert a new custom tab either between existing tabs or at the end of the ribbon tabs.

```ts
import { RibbonTabModel } from '@syncfusion/ej2-ribbon';

// To add the tab at the end of the tabs
let ribbonTab: RibbonTabModel = {
    header: 'Custom Tab', id: 'custom_tab', groups: [{
        header: 'Custom Group', collections: [{
            items: [{
                type: 'Button',
                buttonSettings: {
                    content: 'New',
                    iconCss: 'e-icons e-de-ctnr-new',
                    clicked: function () {
                        container.documentEditor.openBlank();
                    }
                }
            }]
        }]
    }]
};
container.ribbon.addTab(ribbonTab);

// To add the tab before the Insert tab (existing tab)
container.ribbon.addTab(ribbonTab, 'Insert');
```


## Group Customization

You can also customize ribbon groups within a tab to better organize commands or add new functionality as per your needs.

### Show/Hide Group 

The Document Editor provides a [`showGroup`](https://ej2.syncfusion.com/documentation/api/document-editor-container/ribbon#showgroup) API to show or hide existing groups within a ribbon tab.

The following code example shows how to show/hide the group using group ID or [`RibbonGroupInfo`](https://ej2.syncfusion.com/documentation/api/document-editor-container#ribbongroupinfo).

```ts

// To hide the clipboard group using group index
container.ribbon.showGroup({tabId: 'Home', index: 1}, false);

// To show the clipboard group using group index
container.ribbon.showGroup({tabId: 'Home', index: 1}, true);

// To hide the group using id
container.ribbon.showGroup('custom_group', false);

```

### Add Group

To extend the ribbon's functionality, you can add custom groups to any tab. This allows you to organize related commands together within a tab.

```ts

import { RibbonGroupModel } from '@syncfusion/ej2-ribbon';

// Add the new group at the end of the Home tab
let ribbonGroup: RibbonGroupModel =
{
    header: 'Custom Group', collections: [{
        items: [{
            type: 'Button',
            buttonSettings: {
                content: 'New',
                iconCss: 'e-icons e-de-ctnr-new',
                clicked: function () {
                    container.documentEditor.openBlank();
                }
            }
        }]
    }]
};
container.ribbon.addGroup('Home', ribbonGroup);

// Add the new group at the specified index of the Home tab (before the Clipboard group)

container.ribbon.addGroup('Home', ribbonGroup, 1);

```

## Item Customization

You can customize individual items within ribbon groups. This includes showing, hiding, enabling, disabling, or adding new items to any group within a ribbon tab.

### Show/Hide Item

Use the [`showItems`](https://ej2.syncfusion.com/documentation/api/document-editor-container/ribbon#showitems) API in the Document Editor ribbon to show/hide an existing item. Here, you can specify the item ID or [`RibbonItemInfo`](https://ej2.syncfusion.com/documentation/api/document-editor-container#ribboniteminfo).

The following code example shows how to show/hide the item using item ID or [`RibbonItemInfo`](https://ej2.syncfusion.com/documentation/api/document-editor-container#ribboniteminfo).

```ts
// To hide the Bold and Italic items using ribbon item information
container.ribbon.showItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [5, 6] }, false);

// To show the Bold and Italic items using ribbon item information
container.ribbon.showItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [5, 6] }, true);

// To hide the item using item ID
container.ribbon.showItems('custom_item', false);
```

### Enable/Disable Item

Use the [`enableItems`](https://ej2.syncfusion.com/documentation/api/document-editor-container/ribbon#enableitems) API in the Document Editor ribbon to enable/disable an existing item.

```ts
// To disable the underline using ribbon item info
container.ribbon.enableItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [7] }, false);

// To enable the underline using ribbon item info
container.ribbon.enableItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [7] }, true);

// To disable the item using id
container.ribbon.enableItems('custom_item', false);

```

### Add Item

You can use the [`addItem`](https://ej2.syncfusion.com/documentation/api/document-editor-container/ribbon#additem) API in the Document Editor ribbon to add a new item. Additionally, you can specify the target tab and group where the new item should be placed.

```ts

// To add the item at the end of the specified group (the item will be added at the end of the Undo group)
let ribbonItem: RibbonItemModel = {
    type: 'Button',
    buttonSettings: {
        content: 'New',
        iconCss: 'e-icons e-de-ctnr-new',
        clicked: function () {
            container.documentEditor.openBlank();
        }
    }
};
container.ribbon.addItem({ tabId: 'Home', index: 0 }, ribbonItem);

// To add the item before the specified item index (the item will be added before the Redo item in the Undo group)

container.ribbon.addItem({ tabId: 'Home', index: 0 }, ribbonItem, 1);```

## Online Demo

Explore how to customize the ribbon in the JavaScript DOCX Editor for working with Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript/#/material3/document-editor/ribbon-customization.html).


## Related Links

- [File menu Customization Demo](https://document.syncfusion.com/demos/docx-editor/javascript/#/material3/document-editor/ribbon-customization.html)