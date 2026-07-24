---
layout: post
title: Deploy mobile DOCX Editor in React | Syncfusion
description: Learn here all about Deploy Document Editor component for mobile in Syncfusion React Document Editor component of Syncfusion Essential JS 2 and more.
control: Deploy Document Editor component for mobile
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Deploy Document Editor component for mobile in React Document Editor component

## Document Editor component for mobile

At present, [React Document Editor](https://www.syncfusion.com/docx-editor/sdk/react-docx-editor) (Document Editor) component is not responsive for mobile, and editing functionalities are not supported in mobile browsers. However, it works properly as a document viewer in mobile browsers.

Hence, it is recommended to switch the Document Editor component to read-only in mobile browsers. Also, invoke the [`fitPage`](https://ej2.syncfusion.com/react/documentation/api/document-editor#fitpage/) method with `FitPageWidth` parameter in the document change event to display one full page by adjusting the zoom factor.

The following example code illustrates how to deploy the Document Editor component for mobile.

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

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

You can download the complete working example from this [GitHub location](https://github.com/SyncfusionExamples/Deploy-Document-Editor-in-Mobile-Friendly-Web-page/)

N> You can use the [`restrictEditing`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#restrictediting) in DocumentEditorContainer and [`isReadOnly`](https://ej2.syncfusion.com/react/documentation/api/document-editor#isreadonly) in DocumentEditor based on your requirement to change the component to read-only mode.