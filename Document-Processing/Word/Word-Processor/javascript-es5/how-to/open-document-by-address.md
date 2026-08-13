---
layout: post
title: Open document by address in JavaScript (ES5) Docx editor | Syncfusion
description: Learn here all about Open document by address in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open a Document by Address
documentation: ug
domainurl: ##DomainURL##
---

# Open document by address in JavaScript (ES5) Document editor control

## How to Open a Document from a URL in DocumentEditor

In this article, we are going to see how to open a document from a URL in the [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor).

Please refer to the example below for the client-side code.

```js
// Initialize the Document Editor Container component.
var container = new ej.documenteditor.DocumentEditorContainer();
container.appendTo('#DocumentEditorContainer');
document.getElementById('import').addEventListener('click', function () {
    var http = new XMLHttpRequest();
    // Add the URL from which you want to open the document inside the ""
    var content = { fileUrl: "" };
    var baseUrl = "/api/documenteditor/ImportFileURL";
    http.open("POST", baseUrl, true);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            if (http.status === 200 || http.status === 304) {
                // Open the SFDT text in the Document Editor
                container.documentEditor.open(http.responseText);
            }
        }
    };
    http.send(JSON.stringify(content));
});
```

Please refer to the example below for the server-side code.

```c#
    [AcceptVerbs("Post")]
    public string ImportFileURL([FromBody]FileUrlInfo param)
    {
        try {
            using(WebClient client = new WebClient())
            {
                MemoryStream stream = new MemoryStream(client.DownloadData(param.fileUrl));
                WordDocument document = WordDocument.Load(stream, FormatType.Docx);
                string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
                document.Dispose();
                stream.Dispose();
                return json;
            }
        }
        catch (Exception) {
            return "";
        }
    }
    public class FileUrlInfo {
        public string fileUrl { get; set; }
        public string Content { get; set; }
    }
```
