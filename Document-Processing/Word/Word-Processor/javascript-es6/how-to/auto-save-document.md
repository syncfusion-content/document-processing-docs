---
layout: post
title: Auto Save Document in JavaScript (ES6) DOCX Editor | Syncfusion
description: Learn here all about Auto Save Document in the Document Editor in Syncfusion JavaScript (ES6) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Auto Save Document
documentation: ug
domainurl: ##DomainURL##
---

# Auto Save Document in JavaScript (ES6) Document Editor control

In this article, we are going to see how to auto save the document to the server. You can automatically save the edited content in regular intervals of time. It helps reduce the risk of data loss by saving an open document automatically at customizable intervals.

The following example illustrates how to auto save the document on the server.

* On the client side, using the content change event, we can automatically save the edited content in regular intervals of time. Based on the `contentChanged` boolean value, the document is sent as DOCX format to the server side using the [`saveAsBlob`](https://ej2.syncfusion.com/documentation/api/document-editor#saveasblob) method.

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
                console.log('Saved successfully');
                let exportedDocument: Blob = blob;
                //Now, save the document wherever you want.
                let formData: FormData = new FormData();
                formData.append('fileName', 'sample.docx');
                formData.append('data', exportedDocument);
                /* tslint:disable */
                let req = new XMLHttpRequest();
                // Replace your running URL here
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
};
container.appendTo('#container');

container.contentChange = (): void => {
    contentChanged = true;
};
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

* On the server side, receive the stream content from the client side and process it to save the document in the server or database from the received stream. Add a Web API in the controller file as below to save the document.

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
    return "Success";
}
```

## Online Demo

Explore how to automatically save Word documents using the JavaScript DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript/#/material3/document-editor/default.html).

## See Also

* [Auto save document in DocumentEditor](../how-to/auto-save-document-in-document-editor)
