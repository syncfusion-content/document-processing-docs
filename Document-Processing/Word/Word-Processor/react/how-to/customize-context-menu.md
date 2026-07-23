---
layout: post
title: Customize context menu in React DOCX Editor component | Syncfusion
description: Learn how to customize the context menu in the Syncfusion React Document Editor component by adding custom menu items and handling selection events.
control: Customize Context Menu
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Customize Context Menu in React Document Editor component

## How to Customize Context Menu in the Document Editor

[React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) allows you to add custom options to the context menu. Use the [`addCustomMenu()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/contextmenu#addcustommenu) method to add a custom option, and handle the selection with the [`customContextMenuSelect`](https://ej2.syncfusion.com/react/documentation/api/document-editor/customContentMenuEventArgs) event.

### Add Custom Option

The following code shows how to add a custom option to the context menu.

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
let container = DocumentEditorContainerComponent;
function App() {
  function onCreate() {
    // creating Custom Options
    let menuItems = [
      {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find',
      },
    ];
    // adding Custom Options
    container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    container.documentEditor.customContextMenuSelect = (args) => {
      // custom Options Functionality
      let id = container.documentEditor.element.id;
      switch (args.id) {
        case id + 'search_in_google':
          // To get the selected content as plain text
          let searchContent = container.documentEditor.selection.text;
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
    <div>
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
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);

```

N> 1. The Web Service link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the `serviceUrl` property is intended solely for demonstration and evaluation purposes.
N> 2. For production deployment, please host your own Web Service with your required server configurations.
N> 3. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the `serviceUrl` property.

### Customize Custom Option in Context Menu

The Document Editor allows you to customize an added custom option and also to hide or show default context menu items.

#### Hide Default Context Menu Items

Using the [`addCustomMenu()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/contextmenu#addcustommenu) method, you can replace the default context menu by setting the second parameter to `true`.

The following code shows how to replace the default context menu and add a custom option in the context menu.

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
let container = DocumentEditorContainerComponent;
function App() {
  function onCreate() {
  
      // creating Custom Options
      let menuItems = [
        {
          text: 'Search In Google',
          id: 'search_in_google',
          iconCss: 'e-icons e-de-ctnr-find',
        },
      ];
      // adding Custom Options
      container.documentEditor.contextMenu.addCustomMenu(menuItems, true);
  
  }
  return (
    <div>
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
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);


```

N> 1. The Web Service link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the `serviceUrl` property is intended solely for demonstration and evaluation purposes.
N> 2. For production deployment, please host your own Web Service with your required server configurations.
N> 3. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the `serviceUrl` property.

#### Customize Added Context Menu Items

The following code shows how to show or hide an added custom option in the context menu using the [`customContextMenuBeforeOpen`](https://ej2.syncfusion.com/react/documentation/api/document-editor/beforeOpenCloseCustomContentMenuEventArgs) event.

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
let container = DocumentEditorContainerComponent;
function App() {
  function onCreate() {
  
     // creating Custom Options
    let menuItems = [
      {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find',
      },
    ];
    // adding Custom Options
    container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    container.documentEditor.customContextMenuSelect = (args) => {
      // custom Options Functionality
      let id = container.documentEditor.element.id;
      switch (args.id) {
        case id + 'search_in_google':
          let searchContent = container.documentEditor.selection.text;
          if (!container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
            window.open('http://google.com/search?q=' + searchContent);
          }
          break;
      }
    };
    //  custom options hide/show functionality
    container.documentEditor.customContextMenuBeforeOpen = (args) => {
      let search = document.getElementById(args.ids[0]);
      search.style.display = 'none';
      let searchContent = container.documentEditor.selection.text;
      if (!container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
        search.style.display = 'block';
      }
    };
  
  }
  return (
    <div>
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
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);


```

N> 1. The Web Service link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the `serviceUrl` property is intended solely for demonstration and evaluation purposes.
N> 2. For production deployment, please host your own Web Service with your required server configurations.
N> 3. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the `serviceUrl` property.

The following is the output of the custom context menu with customization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/customize-context-menu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/customize-context-menu-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/customize-context-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/customize-context-menu-cs1" %}

N> 1. The Web Service link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the `serviceUrl` property is intended solely for demonstration and evaluation purposes.
N> 2. For production deployment, please host your own Web Service with your required server configurations.
N> 3. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the `serviceUrl` property.

#### Customize Context Menu with Sub-Menu Items

The Document Editor allows you to customize the context menu with sub-menu items. It can be achieved by using the [`addCustomMenu()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/contextmenu#addcustommenu) method.
 
The following code shows how to add sub-items inside a custom context menu option in the Document Editor container.
 
```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
 
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container;
  let menuItems = [
    {
      text: 'Form field',
      id: 'form field',
      iconCss: 'e-de-formfield e-icons',
      items: [
        {
          text: 'Text form',
          id: 'Text form',
          iconCss: 'e-icons e-de-textform',
        },
        {
          text: 'Check box',
          id: 'Check box',
          iconCss: 'e-icons e-de-checkbox-form',
        },
        {
          text: 'Drop down',
          id: 'Drop down',
          iconCss: 'e-icons e-de-dropdownform',
        },
      ],
    },
  ];
  function onCreated() {
    // adding Custom Options
    container.documentEditor.contextMenu.addCustomMenu(menuItems, false, true);
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
      created={onCreated}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
 
```

N> 1. The Web Service link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the `serviceUrl` property is intended solely for demonstration and evaluation purposes.
N> 2. For production deployment, please host your own Web Service with your required server configurations.
N> 3. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the `serviceUrl` property.

## Online Demo

Explore how to customize the context menu in the React Document Editor for working with Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/custom-context-menu).