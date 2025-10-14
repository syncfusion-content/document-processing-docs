---
layout: post
title: Server side export in JavaScript (ES5) Document editor control | Syncfusion
description: Learn here all about Server side export in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Server side export 
documentation: ug
domainurl: ##DomainURL##
---

# Server side export in JavaScript (ES5) Document editor control

## SFDT to DOCX export

Document Editor supports server-side export of **Syncfusion Document Text (.sfdt)** to Doc, DOCX, RTF, Txt, WordML, HTML formats using server-side helper **Syncfusion.EJ2.DocumentEditor** available in ASP.NET Core & ASP.NET MVC platform in the below NuGet's.

* [Syncfusion.EJ2.WordEditor.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Core)
* [Syncfusion.EJ2.WordEditor.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Mvc5)
* [Syncfusion.EJ2.WordEditor.AspNet.Mvc4](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Mvc4)

Please refer the following code example.

```c#
    //API controller for the conversion.
    [HttpPost]
    public void ExportSFDT([FromBody]SaveParameter data)
    {
        Stream document = WordDocument.Save(data.content, FormatType.Docx);
        FileStream file = new FileStream("sample.docx", FileMode.OpenOrCreate, FileAccess.ReadWrite);
        document.CopyTo(file);
        file.Close();
        document.Close();
    }

    public class SaveParameter
    {
        public string content { get; set; }
    }
```

Please refer the client side example to serialize the sfdt and send to the server.

```ts
import { DocumentEditor, FormatType, WordExport, SfdtExport } from '@syncfusion/ej2-documenteditor';

//Inject require modules.
DocumentEditor.Inject(WordExport, SfdtExport);

let documenteditor: DocumentEditor = new DocumentEditor({ enableSfdtExport: true, enableWordExport: true, enableTextExport: true });

documenteditor.appendTo('#DocumentEditor');

//Open the sfdt document.
documenteditor.open(sfdt);

document.getElementById('export').addEventListener('click', () => {
    let http: XMLHttpRequest = new XMLHttpRequest();
    http.open('POST', 'http://localhost:5000/api/documenteditor/ExportSFDT');
    http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    http.responseType = 'json';
    //Serialize document content as SFDT.
    let sfdt: any = { content: documenteditor.serialize() };
    //Send the sfdt content to server side.
    http.send(JSON.stringify(sfdt));
});

```

> DocumentEditor object is available in DocumentEditorContainer component(DocumentEditor packaged with toolbar, statusbar & properties pane) as [`documentEditor`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#documenteditor)
