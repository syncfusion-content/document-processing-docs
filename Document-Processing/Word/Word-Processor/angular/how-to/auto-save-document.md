---
layout: post
title: Auto Save to Server in Angular DOCX Editor | Syncfusion
description: Learn how to auto-save documents to a server from the Syncfusion Angular Document Editor component.
platform: document-processing
control: Auto save document in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# Auto Save Document to Server in Angular Document Editor component

This article explains how to auto-save the document to a server. You can save the edited content automatically at regular intervals, which reduces the risk of data loss by saving the open document at customized intervals.

The following example illustrates how to auto-save the document to a server.

* On the client side, use the `contentChange` event to detect edits and save the document at regular intervals. When the `contentChanged` flag is `true`, the document is sent to the server in Document format using the [`saveAsBlob()`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#saveasblob) method.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
  DocumentEditorContainerModule,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [enableToolbar]="true" 
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
      'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

    setInterval(() => {
      if (this.contentChanged) {
        // Save the document as shown below.
        this.container?.documentEditor.saveAsBlob('Docx').then((blob: Blob) => {
          console.log('Saved successfully');
          let exportedDocument: Blob = blob;
          // Save the document wherever you want.
          let formData: FormData = new FormData();
          formData.append('fileName', 'sample.docx');
          formData.append('data', exportedDocument);
          /* tslint:disable */
          var req = new XMLHttpRequest();
          // Replace with your running URL here.
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

N> 1. The Web Service link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the `serviceUrl` property of the Document Editor is intended solely for demonstration and evaluation purposes.
N> 2. For production deployment, please host your own Web Service with your required server configurations.
N> 3. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the `serviceUrl` property.

* On the server side, receive the stream from the client and process it to save the document to a server or database. Add a Web API method in a controller file to save the document, as shown below.

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

Explore how to automatically save Word documents in the Angular Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/angular/#/tailwind3/document-editor/auto-save).

## See Also
* [AutoSave document in DocumentEditor](../how-to/auto-save-document-in-document-editor)
