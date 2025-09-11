---
layout: post
title: Insert Text in Angular Document Editor | Syncfusion
description: Learn here all about Insert text in current position in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Insert text in current position 
documentation: ug
domainurl: ##DomainURL##
---

# Insert Text at Current Position in Angular Document Editor

You can insert the text, paragraph and rich-text content in Angular Document Editor component.

## Insert text in current cursor position

You can use [`insertText`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#inserttext) API in editor module to insert the text in current cursor position.

The following example illustrates how to add the text in current selection.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
  ImageFormat,
} from '@syncfusion/ej2-angular-documenteditor';

import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `<div><button ejs-button (click)="insertText()" >Insert Text</button>
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [enableToolbar]=true >
    </ejs-documenteditorcontainer>
</div>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  public insertText(): void {
    // It will insert the provided text in current selection
    this.container?.documentEditor.editor.insertText('Syncfusion');
  }
}
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Insert paragraph in current cursor position

To insert new paragraph at current selection, you can can use [`insertText`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#inserttext) API with parameter as `\r\n` or `\n`.

The following example code illustrates how to add the new paragraph in current selection.

```typescript
// It will add the new paragraph in current selection
this.container.documentEditor.editor.insertText('\n');
```

## Insert the rich-text content

To insert the HTML content, you have to convert the HTML content to SFDT Format using [`web service`](../web-services-overview). Then use [`paste`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#paste) API to insert the sfdt at current cursor position.

>Note: Html string should be welformatted html. [`DocIO`](https://help.syncfusion.com/file-formats/docio/html) support only welformatted XHTML.  

The following example illustrates how to insert the HTML content at current cursor position.

* Send the HTML content to server side for SFDT conversion. Refer to the following example to send the HTML content to server side and inserting it in current cursor position.

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
  template: `<button ejs-button (click)="insertText()" >Export HTML</button>
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [enableToolbar]=true >
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  public insertText(): void {
    let proxy = this;
    let htmltags: string =
      "<?xml version='1.0' encoding='utf - 8'?><!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN''http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'><html xmlns ='http://www.w3.org/1999/xhtml' xml:lang='en' lang ='en'><body><h1>The img element</h1><img src='https://www.w3schools.com/images/lamp.jpg' alt ='Lamp Image' width='500' height='600'/></body></html>";
    let http: XMLHttpRequest = new XMLHttpRequest();
    http.open('POST', 'http://localhost:62869/api/documenteditor/LoadString');
    http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    http.responseType = 'json';
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200 || http.status === 304) {
          // Insert the sfdt content in cursor position using paste API
          proxy.container?.documentEditor.editor.paste(http.response);
        } else {
          alert('failed;');
        }
      }
    };

    let htmlContent: any = { content: htmltags };
    http.send(JSON.stringify(htmlContent));
  }
}
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

* Please refer the following code example for server-side web implementation for HTML conversion using DocumentEditor.

```c#
//API controller for the conversion.
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("LoadString")]
public string LoadString([FromBody]InputParameter data)
{
      // You can also load HTML file/string from server side.
      Syncfusion.EJ2.DocumentEditor.WordDocument document = Syncfusion.EJ2.DocumentEditor.WordDocument.LoadString(data.content, FormatType.Html); // Convert the HTML to SFDT format.
      string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
      document.Dispose();
      return json;
}

public class InputParameter
{
      public string content {get; set; }
}
```

>Note: The above example illustrates inserting HTML content. Similarly, you can insert any rich-text content by converting any of the supported file formats (DOCX, DOC, WordML, HTML, RTF) to SFDT.