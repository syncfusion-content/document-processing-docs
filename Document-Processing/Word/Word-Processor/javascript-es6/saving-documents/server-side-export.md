---
layout: post
title: Export in TypeScript DOCX Editor | Syncfusion
description: The export feature in TypeScript DOCX Editor enables users to save and download documents in supported formats while preserving content and formatting.
platform: document-processing
control: Server side export 
documentation: ug
domainurl: ##DomainURL##
---

# Server-side Export in TypeScript DOCX Editor

## SFDT to DOCX export

[JavaScript (ES6) DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) supports server-side export of **Syncfusion Document Text (.sfdt)** to Doc, DOCX, RTF, Txt, WordML, HTML formats using server-side helper **Syncfusion.EJ2.DocumentEditor** available in ASP.NET Core & ASP.NET MVC platform in the NuGet packages below.

* [Syncfusion.EJ2.WordEditor.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Core)
* [Syncfusion.EJ2.WordEditor.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Mvc5)
* [Syncfusion.EJ2.WordEditor.AspNet.Mvc4](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Mvc4)

Please refer to the following code example.

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

Please refer to the following client-side example to serialize the SFDT and send it to the server.

```ts
import { DocumentEditor, FormatType, WordExport, SfdtExport } from '@syncfusion/ej2-documenteditor';

//Inject required modules.
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

N> The DocumentEditor object is available in the DocumentEditorContainer component (DocumentEditor packaged with toolbar, status bar & properties pane) as [`documentEditor`](https://ej2.syncfusion.com/documentation/api/document-editor-container#documenteditor).
