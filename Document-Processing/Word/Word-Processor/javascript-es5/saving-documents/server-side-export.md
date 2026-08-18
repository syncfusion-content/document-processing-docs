---
layout: post
title: Export in JavaScript DOCX Editor | Syncfusion
description: The export feature in JavaScript DOCX Editor enables users to save and download documents in supported formats while preserving content and formatting.
platform: document-processing
control: Server side export 
documentation: ug
domainurl: ##DomainURL##
---

# Server-side Export in JavaScript DOCX Editor

## SFDT to DOCX export

Document Editor supports server-side export of **Syncfusion Document Text (.sfdt)** to DOC, DOCX, RTF, TXT, WordML, and HTML formats using the server-side helper component **[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor)** (Document Editor), available with the NuGet packages below for ASP.NET Core, ASP.NET MVC 5, and ASP.NET MVC 4.

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

Please refer to the client-side example to serialize the SFDT and send it to the server.

```js

var documenteditor = new ej.documenteditor.DocumentEditor({ enableSfdtExport: true, enableWordExport: true, enableTextExport: true });

documenteditor.appendTo('#DocumentEditor');

// Open the SFDT document.
documenteditor.open(sfdt);

document.getElementById('export').addEventListener('click', function () {
    var http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:5000/api/documenteditor/ExportSFDT');
    http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    http.responseType = 'json';

    // Serialize document content as SFDT.
    var sfdt = { content: documenteditor.serialize() };

    // Send the SFDT content to server.
    http.send(JSON.stringify(sfdt));
});


```

N> The `DocumentEditor` object is available through the `DocumentEditorContainer` component (DocumentEditor packaged with toolbar, status bar, and properties pane) as [`documentEditor`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#documenteditor).
