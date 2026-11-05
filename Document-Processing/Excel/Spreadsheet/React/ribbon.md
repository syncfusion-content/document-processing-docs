---
layout: post
title: Ribbon in React Spreadsheet | Syncfusion
description: The ribbon in React Spreadsheet organizes commands into tabs, providing quick access to editing, formatting, and worksheet features.
platform: document-processing
control: Ribbon
documentation: ug
---

# Ribbon in React Spreadsheet 

It helps to organize a spreadsheet's features into a series of tabs. By clicking the expand/collapse button in the ribbon header, users can toggle 
the ribbon toolbar between expanded and collapsed states to maximize spreadsheet 
viewing area. This collapse/expand functionality is built-in by default.
You can use the [`showRibbon`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#showribbon) property to show or hide ribbon functionality.

> The default value for `showRibbon` property is `true`.

## Customize the Ribbon

## Customize the Ribbon

You can customize the ribbon using the following methods to tailor it to your application's needs. These methods allow you to control tab and item visibility, 
enable/disable functionality, and add custom elements:

| Method | Action |
|-------|---------|
| [`hideRibbonTabs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#hideribbontabs) | Hide specified ribbon tabs. |
| [`enableRibbonTabs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#enableribbontabs) | Enable or disable specified ribbon tabs. |
| [`addRibbonTabs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#addribbontabs) | Add custom ribbon tabs. |
| [`hideToolbarItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#hidetoolbaritems) | Hide specified toolbar items. |
| [`enableToolbarItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#enabletoolbaritems) | Enable or disable specified toolbar items. |
| [`addToolbarItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#addtoolbaritems) | Add custom toolbar items. |
| [`hideFileMenuItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#hidefilemenuitems) | Hide specified file menu items. |
| [`enableFileMenuItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#enablefilemenuitems) | Enable or disable file menu items. |
| [`addFileMenuItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#addfilemenuitems) | Add custom file menu items. |

For advanced ribbon customization options, including creating custom tabs, adding toolbar items, and managing ribbon tab and item states, refer to the [Ribbon Customization](./user-interface-customization/ribbon-customization) documentation.

## Note

You can refer to our [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations.

## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)