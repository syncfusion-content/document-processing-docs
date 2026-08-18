---
layout: post
title: How to Open a Document by URL in JavaScript DOCX Editor | Syncfusion
description: Open a document from a URL in Syncfusion® JavaScript DOCX Editor to load and display remote files for viewing and editing.
platform: document-processing
control: Open document by address 
documentation: ug
domainurl: ##DomainURL##
---

# How to Open a Document by URL in JavaScript DOCX Editor

## How to open a document from URL in DocumentEditor

In this article, we are going to see how to open a document from URL in [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor)

please refer below example for client-side code

```js
//Initialize Document Editor Container component.
var container = new ej.documenteditor.DocumentEditorContainer();
container.appendTo('#DocumentEditorContainer');
document.getElementById('import').addEventListener('click', function () {
    var http = new XMLHttpRequest();
    //add your url in which you want to open document inside the ""
    var content = { fileUrl: "" };
    var baseurl = "/api/documenteditor/ImportFileURL";
    http.open("POST", baseurl, true);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            if (http.status === 200 || http.status === 304) {
                //open the SFDT text in Document Editor
                container.documentEditor.open(http.responseText);
            }
        }
    };
    http.send(JSON.stringify(content));
});
```

please refer below example for server-side code

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
