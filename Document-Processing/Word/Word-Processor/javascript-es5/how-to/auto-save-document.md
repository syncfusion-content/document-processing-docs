---
layout: post
title: Auto save document in JavaScript (ES5) Document Editor | Syncfusion
description: Learn here all about Auto save document in document editor in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Auto save document in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# Auto save document in JavaScript (ES5) Document editor control

In this article, we are going to see how to auto save the document to server. You can automatically save the edited content in regular intervals of time. It helps reduce the risk of data loss by saving an open document automatically at customized intervals.

The following example illustrates how to auto save the document in server.

* In the client-side, using content change event, we can automatically save the edited content in regular intervals of time. Based on `contentChanged` boolean, the document send as DOCX format to server-side using [`saveAsBlob`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#saveasblob) method.

```ts
import {
    DocumentEditorContainer,
    Toolbar,
} from '@syncfusion/ej2-documenteditor';
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });
let contentChanged: boolean = false;
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.created = function () {
    setInterval(() => {
        if (contentChanged) {
            //You can save the document as below
            container.documentEditor.saveAsBlob('Docx').then((blob: Blob) => {
                console.log('Saved sucessfully');
                let exportedDocument: Blob = blob;
                //Now, save the document where ever you want.
                let formData: FormData = new FormData();
                formData.append('fileName', 'sample.docx');
                formData.append('data', exportedDocument);
                /* tslint:disable */
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
                            console.log('Saved sucessfully');
                        }
                    }
                };
                req.send(formData);
            });
            contentChanged = false;
        }
    }, 1000);
};
container.appendTo('#container');

container.contentChange = (): void => {
    contentChanged = true;
};
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

* In server-side, Receives the stream content from client-side and process it to save the document in Server or Database from the received stream. Add Web API in controller file like below to save the document.

```c#
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
    return "Sucess";
}
```

## See Also
* [Autosave document in DocumentEditor](../how-to/auto-save-document-in-document-editor)
