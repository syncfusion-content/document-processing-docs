---
layout: post
title: Open document by address in JavaScript (ES6) Document editor control | Syncfusion
description: Learn here all about Open document by address in Syncfusion JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open document by address 
documentation: ug
domainurl: ##DomainURL##
---

# Open document by address in JavaScript (ES6) Document editor control

## How to open a document from URL in DocumentEditor

In this article, we are going to see how to open a document from URL in DocumentEditor

please refer below example for client-side code

```ts
//Initialize Document Editor Container component.
let container: DocumentEditorContainer = new DocumentEditorContainer();

container.appendTo('#DocumentEditorContainer');

document.getElementById('import').addEventListener('click', () => {
    let http: XMLHttpRequest = new XMLHttpRequest();
    //add your url in which you want to open document inside the ""
    let content = { fileUrl: "" };
    let baseurl: string = "/api/documenteditor/ImportFileURL";
    http.open("POST", baseurl, true);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.onreadystatechange = () => {
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
