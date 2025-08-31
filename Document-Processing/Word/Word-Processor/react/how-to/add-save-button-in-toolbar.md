---
layout: post
title: Add save button in React Document editor component | Syncfusion
description: Learn here to add save button in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Add save button tool bar 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Add save button in React Document editor toolbar

## To add a save button to the existing toolbar in DocumentEditorContainer

DocumentEditorContainer allows you to add a new button to the existing items in a toolbar using [`CustomToolbarItemModel`](https://ej2.syncfusion.com/react/documentation/api/document-editor/customToolbarItemModel/) and with existing items in [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#toolbaritems) property. Newly added item click action can be defined in [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/toolbar/clickEventArgs/).

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
  let toolItem = {
    prefixIcon: 'e-save icon',
    tooltipText: 'Save the Document',
    text: 'Save',
    id: 'save',
  };
  let items = [
    'New',
    'Open',
    toolItem,
    'Separator',
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