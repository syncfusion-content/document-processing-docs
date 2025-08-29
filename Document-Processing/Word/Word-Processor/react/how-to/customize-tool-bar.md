---
layout: post
title: Customize tool bar in React Document editor component | Syncfusion
description: Learn here all about Customize tool bar in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Customize tool bar 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Customize tool bar in React Document editor component

## How to customize existing toolbar in DocumentEditorContainer

Document Editor Container allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by [`CustomToolbarItemModel`](https://ej2.syncfusion.com/react/documentation/api/document-editor/customToolbarItemModel/) and with existing items in [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#toolbaritems) property. Newly added item click action can be defined in [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - Existing items can be shown or hidden using the [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#toolbaritems) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/react/documentation/api/document-editor/toolbarItem/).

* Enable, Disable -  Toolbar items can be enabled or disable using [`enableItems`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/toolbar#enableItems)

{% raw %}
```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  CustomToolbarItemModel,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
let container = DocumentEditorContainerComponent;
function App() {
  //Custom toolbar item.
  let toolItem = {
    prefixIcon: 'e-de-ctnr-lock',
    tooltipText: 'Disable Image',
    text: onWrapText('Disable Image'),
    id: 'Custom',
  };
  let items = [
    toolItem,
    'Undo',
    'Redo',
    'Separator',
    'Image',
    'Table',
    'Hyperlink',
    'Bookmark',
    'TableOfContents',
    'Separator',
    'Header',
    'Footer',
    'PageSetup',
    'PageNumber',
    'Break',
    'InsertFootnote',
    'InsertEndnote',
    'Separator',
    'Find',
    'Separator',
    'Comments',
    'TrackChanges',
    'Separator',
    'LocalClipboard',
    'RestrictEditing',
    'Separator',
    'FormFields',
    'UpdateFields',
    'ContentControl',
  ];
  function onToolbarClick(args) {
    switch (args.item.id) {
      case 'save':
        //Save the document(Download the document)
        container.documentEditor.save('sample', 'Docx');
        break;
      default:
        break;
    }
  }

  function onToolbarClick(args) {
    switch (args.item.id) {
      case 'Custom':
        //Disable image toolbar item.
        container.toolbar.enableItems(4, false);
        break;
      default:
        break;
    }
  }
  function onWrapText(text) {
    let content = '';
    const index = text.lastIndexOf(' ');
    if (index !== -1) {
      content =
        text.slice(0, index) +
        "<div class='e-de-text-wrap'>" +
        text.slice(index + 1) +
        '</div>';
    } else {
      content = text;
    }
    return content;
  }
  return (
    <div>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          container = scope;
        }}
        height={'590px'}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        toolbarItems={items}
        toolbarClick={onToolbarClick.bind(this)}
        enableToolbar={true}
      />
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);

```
{% endraw %}

>Note: Default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.