---
layout: post
title: Auto save document in React Document editor component | Syncfusion
description: Learn here all about Auto save document in document editor in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Auto save document in document editor 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Auto save document in React Document editor component

In this article, we are going to see how to auto save the document to the server. You can automatically save the edited content at regular intervals of time. It helps reduce the risk of data loss by saving an open document automatically at customized intervals.

The following example illustrates how to auto save the document on the server.

* On the client side, using the content change event, we can automatically save the edited content at regular intervals of time. Based on the `contentChanged` boolean, the document is sent as Docx format to the server side using the [`saveAsBlob`](https://ej2.syncfusion.com/react/documentation/api/document-editor#saveasblob) method.

```
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container;
  let contentChanged = false;
  function onCreate() {
    setInterval(() => {
      if (contentChanged) {
        //You can save the document as below
        container.documentEditor.saveAsBlob('Docx').then((blob: Blob) => {
          console.log('Saved successfully');
          let exportedDocument: Blob = blob;
          //Now, save the document wherever you want.
          let formData: FormData = new FormData();
          formData.append('fileName', 'sample.docx');
          formData.append('data', exportedDocument);
          /* eslint-disable */
          var req = new XMLHttpRequest();
          // Replace your running Url here
          req.open(
            'POST',
            'http://localhost:62869/api/documenteditor/AutoSave',
            true
          );
          req.onreadystatechange = () => {
            if (req.readyState === 4) {
              if (req.status === 200 || req.status === 304) {
                console.log('Saved successfully');
              }
            }
          };
          req.send(formData);
        });
        contentChanged = false;
      }
    }, 1000);
  }

  function onContentChange() {
    contentChanged = true;
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
      contentChange={onContentChange}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
 ```
 
> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

* On the server side, receive the stream content from the client side and process it to save the document in AWS S3. Add Web API in the controller file like below to save the document in AWS S3.

  ```
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("AutoSave")]
public string AutoSave()
{
    IFormFile file = HttpContext.Request.Form.Files[0];
    Stream stream = new MemoryStream();    
    file.CopyTo(stream);
    //Save the stream to database or server as per the requirement.
    stream.Close();
    return "Success";
}
 ```

## Online Demo

Explore how to automatically save Word documents using the React Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/react/#/material3/document-editor/default).

## See Also
* [Autosave document in DocumentEditor](../how-to/auto-save-document-in-document-editor)
