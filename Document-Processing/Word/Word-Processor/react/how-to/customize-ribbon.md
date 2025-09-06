---
layout: post
title: Customize Ribbon in React Document Editor | Syncfusion
description: Learn how to customize the ribbon in Syncfusion React Document Editor - file menu, backstage, tabs, groups, and items.
platform: document-processing
control: Ribbon Customization
documentation: ug
domainurl: ##DomainURL##
---

# Customize Ribbon in React Document editor component

The Syncfusion Document Editor provides an extensive and flexible API to customize the built-in ribbon UI. You can:

- Customize the File menu.
- Add the Backstage menu instead of File menu.
- Show, hide, or add Ribbon tabs.
- Show, hide, or add groups within tabs.
- Show, hide, add, enable, or disable items within groups.

Below are detailed examples for each ribbon customization scenario.

## File Menu Customization

Document Editor provides APIs to remove existing File menu items and add new custom items based on your requirements. You can modify the File menu using the [`fileMenuItems`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#filemenuitems) property.

In the example below, the "Open" and "Export" items have been removed from the File Menu Items, and new custom items have been added.

```ts

import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { DocumentEditorContainerComponent, Ribbon, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);
const Default = () => {
  let hostUrl = "https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/";
  let container = React.useRef(null);
  const fileMenuItemClick = (args) => {
    if (args.item.id) {
      container.current.documentEditor.save('Sample', 'Docx');
    }
  };
  return (<div className="control-pane">
    <div className="control-section">
      <div id="documenteditor_container_body">
        <DocumentEditorContainerComponent
          id="container"
          ref={container}
          style={{ display: 'block' }}
          height={'590px'}
          toolbarMode={'Ribbon'}
          enableToolbar={true}
          serviceUrl={hostUrl}
          fileMenuItems={[
            "New",
            "Print",
            { text: 'Export', id: 'custom_item', iconCss: 'e-icons e-export' }
          ]}
          fileMenuItemClick={fileMenuItemClick}
        />
      </div>
    </div>
  </div>);
};
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```

## Backstage Menu Customization

The Document Editor provides an [`backStageMenu`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#backStageMenu) API to add a backstage menu. When the backstage menu is enabled, the default File menu items are automatically hidden.

The following code example shows how to add the backstage menu items.

{% raw %}

```ts

import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { DocumentEditorContainerComponent, Ribbon, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);
const Default = () => {
    let hostUrl = "https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/";
    let container = React.useRef(null);
    return (
        <div className="control-pane">
            <div className="control-section">
                <div id="documenteditor_container_body">
                    <DocumentEditorContainerComponent
                        id="container"
                        ref={container}
                        style={{ display: 'block' }}
                        height={'590px'}
                        toolbarMode="Ribbon"
                        enableToolbar={true}
                        backstageMenu={{
                            text: 'File',
                            backButton: { text: 'Close' },
                            items: [
                                { id: 'new', text: 'New', iconCss: 'e-icons e-de-ctnr-new' }
                            ]
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```
{% endraw %}

Refer this documentation know more about [`backstage items`](https://ej2.syncfusion.com/documentation/ribbon/backstage)

## Tab Customization

You can customize the ribbon tabs in the Document Editor by showing, hiding, or adding tabs according to your application's requirements.

### Show/Hide Tab

Document editor provides the [`showTab`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/ribbon#showtab) API to show and hide the existing tab using existing `RibbonTabType` and `tabId`.

The following code example how to show/hide existing tab using existing tab type and tab id.

```ts
// To hide the Home tab using the built-in `RibbonTabType`
container.current.ribbon.showTab('Home', false);

// To hide a tab by its tab id (for example, a custom tab)
container.current.ribbon.showTab('custom_tab', false);
```

### Add Tab

The Document Editor provides the [`addTab`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/ribbon#addtab) API, which allows you to insert a new custom tab either between existing tabs or at the end of the ribbon tabs.

```ts

import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { DocumentEditorContainerComponent, Ribbon, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);
const Default = () => {
  const hostUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
  const container = React.useRef(null);

  // To add the tab at end of tab
  React.useEffect(() => {
      const ribbonTab = {
        header: 'Custom Tab',
        id: 'custom_tab',
        groups: [
          {
            header: 'Custom Group',
            collections: [
              {
                items: [
                  {
                    type: 'Button',
                    buttonSettings: {
                      content: 'New',
                      iconCss: 'e-icons e-de-ctnr-new',
                      clicked: () => {
                        container.current.documentEditor.openBlank();
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      };
      container.current.ribbon.addTab(ribbonTab);

      // To add the tab before the Insert tab(exising tab)
      container.current.ribbon.addTab(ribbonTab, 'Insert');
  }, []);

  return (
    <div className="control-pane">
      <div className="control-section">
        <div id="documenteditor_container_body">
          <DocumentEditorContainerComponent
            id="container"
            ref={container}
            style={{ display: 'block' }}
            height={'590px'}
            toolbarMode={'Ribbon'}
            enableToolbar={true}
            serviceUrl={hostUrl}
          />
        </div>
      </div>
    </div>
  );
};
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```

## Group Customization

You can also customize ribbon groups within a tab to better organize commands or add new functionalities as per your needs.

### Show/Hide Group 

Document Editor provides an [`showGroup`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/ribbon#showgroup) API to show or hide existing groups within a ribbon tab.

The following code example show how to show/hide the group using group Id or [`RibbonGroupInfo`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#ribbongroupinfo).

```ts
// To hide the clipboard group using group index
container.current.ribbon.showGroup({tabId: 'Home', index: 1} , false);

// To show the clipboard group using group index
container.current.ribbon.showGroup({tabId: 'Home', index: 1} , true);

// To hide the group using id
container.current.ribbon.showGroup('custom_group', false);

```

### Add Group

To extend the ribbon's functionality, you can add custom groups to any tab. This allows you to organize related commands together within a tab.

```ts

import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { DocumentEditorContainerComponent, Ribbon, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);

const Default = () => {
  const hostUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
  const container = React.useRef(null);

  // Add the new group at the end of the Home tab
  React.useEffect(() => {
      const ribbonGroup = {
        header: 'Custom Group',
        collections: [
          {
            items: [
              {
                type: 'Button',
                buttonSettings: {
                  content: 'New',
                  iconCss: 'e-icons e-de-ctnr-new',
                  clicked: () => {
                    container.current.documentEditor.openBlank();
                  }
                }
              }
            ]
          }
        ]
      };
      container.current.ribbon.addGroup('Home', ribbonGroup);

      // Add the new group at the specified index of the Home tab (before the Clipboard group)
      
      container.current.ribbon.addGroup('Home', ribbonGroup, 1);
  }, []);

  return (
    <div className="control-pane">
      <div className="control-section">
        <div id="documenteditor_container_body">
          <DocumentEditorContainerComponent
            id="container"
            ref={container}
            style={{ display: 'block' }}
            height="590px"
            toolbarMode="Ribbon"
            enableToolbar={true}
            serviceUrl={hostUrl}
          />
        </div>
      </div>
    </div>
  );
};
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```

## Item Customization

You can customize individual items within ribbon groups. This includes showing, hiding, enabling, disabling, or adding new items to any group within a ribbon tab.

### Show/Hide Item

Using [`showItems`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/ribbon#showitems) API in Document editor ribbon to enable/disable the existing item. Here, you can specify the item Id or [`RibbonItemInfo`].

The following code example show how to show/hide the item using item Id or [`RibbonItemInfo`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#ribboniteminfo).

```ts
// To hide the Bold and Italic items using ribbon item information
container.current.ribbon.showItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [5, 6] } , false);

// To show the Bold and Italic items using ribbon item information
container.current.ribbon.showItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [5, 6] } , true);

// To hide the item using item id
container.current.ribbon.showItems('custom_item', false);
```

### Enable/Disable Item

Using [`enableItems`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/ribbon#enableitems) API in Document editor ribbon to enable/disable the existing item.

```ts
// To disable the underline using ribbon item info
container.current.ribbon.enableItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [7] },false);

// To enable the underline using ribbon item info
container.current.ribbon.enableItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [7] },true);

// To disable the item using id
container.current.ribbon.enableItems('custom_item', false);

```

### Add Item

You can use the [`addItem`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/ribbon#additem) API in the Document Editor ribbon to add a new item. Additionally, you can specify the target tab and group where the new item should be placed.

```ts


import { createRoot } from 'react-dom/client';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
  Ribbon
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);

const Default = () => {
  const hostUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
  const container = React.useRef(null);
  
  // To add the item at the end of the specified group (the item will be added at the end of the Undo group)
  React.useEffect(() => {
      const ribbonItem = {
        type: 'Button',
        buttonSettings: {
          content: 'New',
          iconCss: 'e-icons e-de-ctnr-new',
          clicked: () => {
            container.current.documentEditor.openBlank();
          }
        }
      };
      container.current.ribbon.addItem({ tabId: 'Home', index: 0 }, ribbonItem);
      
      // To add the item before the specified item index (the item will be added before the Redo item in the Undo group)

      container.current.ribbon.addItem({ tabId: 'Home', index: 0 }, ribbonItem, 1);
  }, []);

  return (
    <div className="control-pane">
      <div className="control-section">
        <div id="documenteditor_container_body">
          <DocumentEditorContainerComponent
            id="container"
            ref={container}
            style={{ display: 'block' }}
            height="590px"
            toolbarMode="Ribbon"
            enableToolbar={true}
            serviceUrl={hostUrl}
          />
        </div>
      </div>
    </div>
  );
};
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```


## Related Links

- [File menu Customization Demo](https://ej2.syncfusion.com/demos#/material/document-editor/ribbon-customization)