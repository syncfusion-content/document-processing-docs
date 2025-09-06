---
layout: post
title: Get selected content in React Document editor component | Syncfusion
description: Learn here all about Get the selected content in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Get the selected content 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Get the selected content in React Document editor component

You can get the selected content from the React Document Editor component as plain text and SFDT (rich text).

## Get the selected content as plain text

You can use [`text`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the selected content as plain text from React Document Editor component.

The following example code illustrates how to add search in google option in context menu for the selected text.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container: DocumentEditorContainerComponent;
  let contentChanged: boolean = false;
  function onCreate() {
    // creating Custom Options
    let menuItems: MenuItemModel[] = [
      {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find',
      },
    ];
    // adding Custom Options
    container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    container.documentEditor.customContextMenuSelect = (
      args: any
    ): void => {
      // custom Options Functionality
      let id: string = container.documentEditor.element.id;
      switch (args.id) {
        case id + 'search_in_google':
          // To get the selected content as plain text
          let searchContent: string =
            container.documentEditor.selection.text;
          if (
            !container.documentEditor.selection.isEmpty &&
            /\S/.test(searchContent)
          ) {
            window.open('http://google.com/search?q=' + searchContent);
          }
          break;
      }
    };
  }
  return (
    <DocumentEditorContainerComponent
      id="container"
      ref={(scope) => {
        container = scope;
      }}
      height={'590px'}
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      enableToolbar={true}
      created={onCreate}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

You can add the following custom options using this API,

* Save or export the selected text as text file.
* Search the selected text in Google or other search engines.
* Show synonyms for the selected word in context menu and replace with selected synonym using the setter method of same API.

## Get the selected content as SFDT (rich text)

You can use [`sfdt`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#sfdt-code-classlanguage-textstringcode) API to get the selected content as rich text from React Document Editor component.

The following example code illustrates how to get the content of a bookmark and export it as SFDT.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container: DocumentEditorContainerComponent;
  let contentChanged: boolean = false;
  function onCreate() {
    // To insert text in cursor position
    container.documentEditor.editor.insertText('Document editor');
    // To select all the content in document
    container.documentEditor.selection.selectAll();
    // Insert bookmark to selected content
    container.documentEditor.editor.insertBookmark('Bookmark1');
    //Select the bookmark
    container.documentEditor.selection.selectBookmark('Bookmark1');
    // To get the selected content as sfdt
    let selectedContent: string = container.documentEditor.selection.sfdt;
    // Insert the sfdt content in cursor position using paste API
    container.documentEditor.editor.paste(selectedContent);
  }
  return (
    <DocumentEditorContainerComponent
      id="container"
      ref={(scope) => {
        container = scope;
      }}
      height={'590px'}
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      enableToolbar={true}
      created={onCreate}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

You can add the following custom options using this API,

* Save or export the selected content as SFDT file.
* Get the content of a bookmark in Word document as SFDT by selecting a bookmark using [`selectbookmark`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#selectbookmark) API.
* Create template content that can be inserted to multiple documents in cursor position using [`paste`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#paste) API.