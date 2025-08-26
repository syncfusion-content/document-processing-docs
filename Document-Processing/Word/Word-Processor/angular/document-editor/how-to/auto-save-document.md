---
layout: post
title: Auto save document in Angular Document editor component | Syncfusion
description: Learn here all about Auto save document in document editor in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Auto save document in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# Auto save document in Angular Document editor component

In this article, we are going to see how to auto save the document to server. You can automatically save the edited content in regular intervals of time. It helps reduce the risk of data loss by saving an open document automatically at customized intervals.

The following example illustrates how to auto save the document in server.

* In the client-side, using content change event, we can automatically save the edited content in regular intervals of time. Based on `contentChanged` boolean, the document send as DOCX format to server-side using [`saveAsBlob`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#saveasblob) method.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [enableToolbar]=true 
      (created)="onCreate()"
      (contentChange)="onContentChange()">
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  public contentChanged: boolean | undefined;
  onCreate(): void {
    (this.container as DocumentEditorContainerComponent).serviceUrl =
      'https://services.syncfusion.com/angular/production/api/documenteditor/';

    setInterval(() => {
      if (this.contentChanged) {
        //You can save the document as below
        this.container?.documentEditor.saveAsBlob('Docx').then((blob: Blob) => {
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
        this.contentChanged = false;
      }
    }, 1000);
  }

  onContentChange(): void {
    this.contentChanged = true;
  }
}
```

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

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
* [AutoSave document in DocumentEditor](../../document-editor/how-to/auto-save-document-in-document-editor)
