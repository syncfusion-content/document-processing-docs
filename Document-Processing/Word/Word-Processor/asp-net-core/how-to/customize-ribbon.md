---
layout: post
title: Customize Ribbon in DOCX Editor | Syncfusion
description: Learn how to customize the ribbon in Syncfusion DOCX Editor - file menu, backstage, tabs, groups, and items.
platform: document-processing
control: Ribbon Customization
documentation: ug
domainurl: ##DomainURL##
---

# Customize Ribbon in ASP.NET Core DOCX Editor

The [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) provides an extensive and flexible API to customize the built-in ribbon UI. You can:

- Customize the File menu.
- Add the Backstage menu instead of File menu.
- Show, hide, or add Ribbon tabs.
- Show, hide, or add groups within tabs.
- Show, hide, add, enable, or disable items within groups.

Below are detailed examples for each ribbon customization scenario.

## File Menu Customization

The DOCX Editor allows you to replace the default File menu items by setting the `fileMenuItems` property. You can include built-in items (such as `New` and `Print`) alongside your own custom items.

In the example below, the File menu is configured with `New`, `Print`, and a custom `Export` item that triggers a save action when clicked.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-ribbon-file/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Customize-ribbon-file.cs" %}
{% endhighlight %}
{% endtabs %}


## Backstage Menu Customization

The DOCX Editor provides a `backstageMenu` API to add a backstage menu in place of the File menu. When the `backstageMenu` property is set, the default File menu item list (`fileMenuItems`) is not displayed; the backstage items defined here take its place.

The following code example shows how to add backstage menu items.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-ribbon-backstage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Customize-ribbon-backstage.cs" %}
{% endhighlight %}
{% endtabs %}


Refer to this documentation to learn more about [backstage items](https://ej2.syncfusion.com/documentation/ribbon/backstage).

## Tab Customization

You can customize the ribbon tabs in the DOCX Editor by showing, hiding, or adding tabs according to your application's requirements.

### Show/Hide Tab

The DOCX Editor provides the `showTab` API to show or hide a tab using its built-in `RibbonTabType` name or a custom `tabId`. The built-in tab types are `Home`, `Insert`, `Layout`, `References`, `Review`, and `View`.

The following code example shows how to show or hide an existing tab using its tab type or tab id.

```typescript

// To hide the Home tab using the built-in `RibbonTabType`
container.ribbon.showTab('Home', false);

// To hide a tab by its tab id (for example, a custom tab)
container.ribbon.showTab('custom_tab', false);
```

### Add Tab

The DOCX Editor provides the `addTab` API, which allows you to insert a new custom tab either between existing tabs or at the end of the ribbon tabs.

```typescript

<script>
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
        
        // For initialization before adding ribbon tab
        setTimeout(function () {
            var container = document.getElementById('container').ej2_instances[0];
            // To add the tab at end of tab
            var ribbonTab = {
                header: 'Custom Tab',
                id: 'custom_tab',
                groups: [{
                    header: 'Custom Group',
                    collections: [{
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

            // To add the tab before the Insert tab (an existing tab)
            container.ribbon.addTab(ribbonTab, 'Insert');
        }, 100);
</script>
```

## Group Customization

You can also customize ribbon groups within a tab to better organize commands or add new functionalities as per your needs.

### Show/Hide Group

The DOCX Editor provides a `showGroup` API to show or hide existing groups within a ribbon tab. You can identify the target group by passing either a group id or a `RibbonGroupInfo` object, whose fields are `{ tabId, index }` — where `tabId` is the tab identifier and `index` is the zero-based group position within that tab.

The following code example show how to show/hide the group using group Id or `RibbonGroupInfo`.

```typescript

// To hide the clipboard group using group index
container.ribbon.showGroup({tabId: 'Home', index: 1} , false);

// To show the clipboard group using group index
container.ribbon.showGroup({tabId: 'Home', index: 1} , true);

// To hide the group using id
container.ribbon.showGroup('custom_group', false);

```

### Add Group

To extend the ribbon's functionality, you can add custom groups to any tab. This allows you to organize related commands together within a tab.

```typescript

<script>
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
        
        // For initialization before adding ribbon tab
        setTimeout(function () {
            var container = document.getElementById('container').ej2_instances[0];
            // Add the new group at the end of the Home tab
            var ribbonGroup = {
                header: 'Custom Group',
                collections: [{
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
        }, 100);
</script>
```

## Item Customization

You can customize individual items within ribbon groups. This includes showing, hiding, enabling, disabling, or adding new items to any group within a ribbon tab.

### Show/Hide Item

Use the `showItems` API in the DOCX Editor ribbon to show or hide existing items. You can identify the target item by passing either an item id or a `RibbonItemInfo` object, whose fields are `{ tabId, groupIndex, itemIndexes }` — where `tabId` is the tab identifier, `groupIndex` is the zero-based group position, and `itemIndexes` is an array of zero-based item positions within that group.

The following code example shows how to show or hide an item using an item id or `RibbonItemInfo`.

```typescript
// To hide the Bold and Italic items using ribbon item information
container.ribbon.showItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [5, 6] } , false);

// To show the Bold and Italic items using ribbon item information
container.ribbon.showItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [5, 6] } , true);

// To hide the item using item id
container.ribbon.showItems('custom_item', false);
```

### Enable/Disable Item

Use the `enableItems` API in the DOCX Editor ribbon to enable or disable an existing item.

```typescript
// To disable the underline using ribbon item info
container.ribbon.enableItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [7] },false);

// To enable the underline using ribbon item info
container.ribbon.enableItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [7] },true);

// To disable the item using id
container.ribbon.enableItems('custom_item', false);

```

### Add Item

You can use the `addItem` API in the DOCX Editor ribbon to add a new item. Additionally, you can specify the target tab and group where the new item should be placed.

```typescript

<script>
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);

    // For initialization before adding ribbon tab
    setTimeout(function () {
        var container = document.getElementById('container').ej2_instances[0];
        
        // To add the item at the end of the specified group (the item will be added at the end of the Undo group)
        var ribbonItem = {
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
        container.ribbon.addItem({ tabId: 'Home', index: 0 }, ribbonItem, 1);
    }, 100);
</script>

```

## Online Demo

Explore how to customize the ribbon in the ASP.NET Core DOCX Editor for working with Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/ribboncustomization#/tailwind3).

## Related Links

- [File menu Customization Demo](https://ej2.syncfusion.com/demos/#/material/document-editor/ribbon-customization)