---
layout: post
title: How to Open a Document by URL in TypeScript DOCX Editor | Syncfusion
description: Open a document from a URL in Syncfusion® TypeScript DOCX Editor to load and display remote files for viewing and editing.
platform: document-processing
control: Open a Document by Address
documentation: ug
domainurl: ##DomainURL##
---

# How to Open a Document by URL in TypeScript DOCX Editor

## How to open a document from a URL in the DocumentEditor

In this article, we are going to see how to open a document from a URL in the [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor).

Please refer to the example below for the client-side code.

```ts
//Initialize Document Editor Container component.
let container: DocumentEditorContainer = new DocumentEditorContainer();

container.appendTo('#DocumentEditorContainer');

document.getElementById('import').addEventListener('click', () => {
    let http: XMLHttpRequest = new XMLHttpRequest();
    // Add your URL inside the "" where you want to open the document
    let content = { fileUrl: "" };
    let baseUrl: string = "/api/documenteditor/ImportFileURL";
    http.open("POST", baseUrl, true);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.onreadystatechange = () => {
        if (http.readyState === 4) {
            if (http.status === 200 || http.status === 304) {
                //open the SFDT text in the Document Editor
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
            using (WebClient client = new WebClient())
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
