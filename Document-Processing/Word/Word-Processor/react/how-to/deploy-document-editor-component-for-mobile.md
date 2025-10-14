---
layout: post
title: Deploy mobile document editor in React | Syncfusion
description: Learn here all about Deploy document editor component for mobile in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Deploy document editor component for mobile 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Deploy document editor component for mobile in React Document editor component

## Document editor component for Mobile

At present, Document editor component is not responsive for mobile, and we haven't ensured the editing functionalities in mobile browsers. Whereas it works properly as a document viewer in mobile browsers.

Hence, it is recommended to switch the Document editor component as read-only in mobile browsers. Also, invoke [`fitPage`](https://ej2.syncfusion.com/react/documentation/api/document-editor#fitpage/) method with `FitPageWidth` parameter in document change event, such as to display one full page by adjusting the zoom factor.

The following example code illustrates how to deploy Document Editor component for Mobile.

{% raw %}

```ts
import {
  DocumentEditorContainer,
  Toolbar,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-react-documenteditor';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container;
  let hosturl =
    'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

  function onDocumentChange() {
    let proxy = (container = DocumentEditorContainerComponent);
    //To detect the device
    let isMobileDevice = /Android|Windows Phone|webOS/i.test(
      navigator.userAgent
    );

    if (isMobileDevice) {
      proxy.restrictEditing = true;
      setTimeout(() => {
        proxy.documentEditor.fitPage('FitPageWidth');
      }, 50);
    } else {
      proxy.restrictEditing = false;
    }
  }
  return (
    <div className="App">
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          container = scope;
        }}
        style={{ height: '590px' }}
        enableToolbar={true}
        documentChange={onDocumentChange}
        serviceUrl={hosturl}
        height={'590px'}
      />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));


```
{% endraw %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

You can download the complete working example from this [GitHub location](https://github.com/SyncfusionExamples/Deploy-Document-Editor-in-Mobile-Friendly-Web-page/)

>Note: You can use the [`restrictEditing`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#restrictediting) in DocumentEditorContainer and [`isReadOnly`](https://ej2.syncfusion.com/react/documentation/api/document-editor#isreadonly) in DocumentEditor based on your requirement to change component to read only mode.