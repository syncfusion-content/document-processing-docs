---
layout: post
title: How to Open a Document by URL in ASP.NET Core DOCX Editor | Syncfusion
description: Open a document from a URL in Syncfusion® ASP.NET Core DOCX Editor to load and display remote files for viewing and editing.
platform: document-processing
control: Open Document By Address
documentation: ug
---


# How to Open a Document by URL in ASP.NET Core DOCX Editor

## Open a document from a URL in the DOCX Editor

This article explains how to open a document from a URL in the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor).


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/open-by-url/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Open-by-url.cs" %}
{% endhighlight %}
{% endtabs %}



```typescript
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
export class App extends React.Component<{}, {}> {
  container: DocumentEditorContainerComponent;
  public contentChanged: boolean = false;
  onClick(): void {
    let http: XMLHttpRequest = new XMLHttpRequest();
    // Add your URL in which you want to open the document inside the "".
    let content = { fileUrl: "" };
    let baseurl: string = "/api/documenteditor/ImportFileURL";
    http.open("POST", baseurl, true);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.onreadystatechange = () => {
        if (http.readyState === 4) {
            if (http.status === 200 || http.status === 304) {
                // Open the SFDT text in the Document Editor.
                this.container.documentEditor.open(http.responseText);
            }
        }
    };
    http.send(JSON.stringify(content));
  }
  render() {
    return (
      <div>
      <button id='import' onClick={this.onClick.bind(this)}>Import</button>
      <DocumentEditorContainerComponent id="container" ref={(scope) => { this.container = scope; }}
        height={'590px'}
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
      />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
```


```csharp
[AcceptVerbs("Post")]
public string ImportFileURL([FromBody] FileUrlInfo param)
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
