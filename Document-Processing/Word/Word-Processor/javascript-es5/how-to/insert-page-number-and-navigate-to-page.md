---
layout: post
title: Page number and navigate Page in Document editor control | Syncfusion
description: Learn here all about Insert page number and navigate to page in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Insert page number and navigate to page 
documentation: ug
domainurl: ##DomainURL##
---

# Insert page number and navigate to page in JavaScript (ES5) Document editor control

You can insert page number and navigate to specific page in JavaScript Document Editor component by following ways.

## Insert page number

You can use [`insertPageNumber`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#insertpagenumber) API in editor module to insert the page number in current cursor position. By default, Page number will insert in Arabic number style. You can change it, by providing the number style in parameter.

>Note: Currently, Document Editor have options to insert page number at current cursor position.

The following example code illustrates how to insert page number in header.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To move the selection to header
container.documentEditor.selection.goToHeader();
// Insert page number in the current cursor position
container.documentEditor.editor.insertPageNumber();
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Also, you use [`insertField`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#insertfield) API in Editor module to insert the Page number in current position

```ts
//Current page number
container.documentEditor.editor.insertField('PAGE \* MERGEFORMAT', '1');
```

## Get page count

You can use [`pageCount`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#pagecount) API to gets the total number of pages in Document.

The following example code illustrates how to get the number of pages in Document.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To get the total number of pages
let pageCount : number=container.documentEditor.pageCount;
```


## Navigate to specific page

You can use [`goToPage`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#gotopage) API in Selection module to move selection to the start of the specified page number.

The following example code illustrates how to move selection to specific page.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
let sfdt: any = {sfdt: 'UEsDBAoAAAAIAPaKZVrvd0ouRgMAAPguAAAEAAAAc2ZkdO1ZW2/aMBj9K8h7RRVJICF5mzqhPUxTpT1WPDiJTaw5lznuaIv63+dbuBRC05ZLNJmXY+LY5/g7nw3ytwJlxUlOntEvnHIQcfaAhqBGCYjuV0BgxUC0AtUSRL7jDkGVgSgIRYPmoiGQGeQGY4NZCiLPHwJsMMUViEYCS6QbMdEgmMBPtLyDCwSGABUYRGI4lii6GWkQKSS4AJEjEGmsFkUtJvjKYEwSMb5ISlqrHvRnqZDGPFFDdc/9/EWQqtVVWC4tTlktkQtZK9FHuUa20Bib75mGvxIE1ryQwkuWQyp4qdSpOhI9q1gdhrRG4glRbPvPORWUABNWc/AiZJ1VkdFhaSyNpbE0lsbSWBpLY2ksjaWxNJbG0lgaS2NpLM1/QdN+4VajpCxSe+NmaSyNpbE0H6KZi4G6Z74ueZiDVr1iWrh+BpHjiIZ4BdxCSmJGxLQPqiJTc10CggoyXaYRQ+SZrQfJ1tYwmGxmxnCnC+MCo60nQumn4kBJYQpPGrFBrsXGtQKowZScqFlQSdcVLqP2t2Rt2sti3V4mTcltE2hcG0UcU91I+VIX0UwlC5niWCbEArH22iDONX+lIc14rpVgrAUmZV6ZyD/x2KiUcQCyCvdlpj5AZcGT+g3dyQUz+eei+jqdiscNhUxeyfgdwZQUi4FzKtI3rZSlzW0vb0ZB6Pi+PxkFgTsKx8Guuc5+wU9nur+b6YMfZJFx6YyKrzubjEMfvErezUu7KWye63Ll1o7cDtDgNoMMvBHF5iWuc+Aicr8hDB8oH9xBBhcMVtlgVhZ8ra2le0fjy+uFuBdLh/dlg9uWDd5ls8Htkg1uezZ418qGRpvXU4O9NoPdoxFzZl7geyc02OtisNdu8PnkdjR43FODx/sGk+aH+ZI7eNzF4PEhg88tt6PBk54aPDmwgy/o66SLr5ODG/eqdvo9tdN/l50nP4f9Lnb677TzAsdv0FM7g48dvyf3Nejia/DR4/cCBk97avC07Q/U6GZyNGae+pzQ4mkXi6ftf6HOKbijyWFPTQ6P7eLruB12cTs8vqH7YDtip/H88HXV/qXMTkBV7IyKRtSsLPn1RRkV8gqSqmtJMRnVmOQamfn6qJHki1pN+w9QSwECFAAKAAAACAD2imVa73dKLkYDAAD4LgAABAAAAAAAAAAAAAAAAAAAAAAAc2ZkdFBLBQYAAAAAAQABADIAAABoAwAAAAA=',};
container.documentEditor.open(sfdt);
// To move selection to page number 2
container.documentEditor.selection.goToPage(2);
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.