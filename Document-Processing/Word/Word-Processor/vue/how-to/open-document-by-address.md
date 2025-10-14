---
layout: post
title: Open Document by Address in Vue Document Editor Component | Syncfusion
description: Learn here all about open document by address in Syncfusion Essential Vue Document Editor component, it's elements and more.
control: Open document by address 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open Document by Address in Vue Document Editor Component

## How to open a document from URL in DocumentEditor

In this article, we are going to see how to open a document from URL in DocumentEditor

please refer below example for client-side code

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button id='import' v-on:click="onClick">Import</button>
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

const onClick = function () {
  let http = new XMLHttpRequest();
  //add your url in which you want to open document inside the ""
  let content = { fileUrl: "" };
  let baseurl = "/api/documenteditor/ImportFileURL";
  http.open("POST", baseurl, true);
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  http.onreadystatechange = () => {
    if (http.readyState === 4) {
      if (http.status === 200 || http.status === 304) {
        //open the SFDT text in Document Editor
        container.value.ej2Instances.documentEditor.open(http.responseText);
      }
    }
  };
  http.send(JSON.stringify(content));
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button id='import' v-on:click="onClick">Import</button>
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    onClick: function () {
      let http = new XMLHttpRequest();
      //add your url in which you want to open document inside the ""
      let content = { fileUrl: "" };
      let baseurl = "/api/documenteditor/ImportFileURL";
      http.open("POST", baseurl, true);
      http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      http.onreadystatechange = () => {
        if (http.readyState === 4) {
          if (http.status === 200 || http.status === 304) {
            //open the SFDT text in Document Editor
            this.$refs.container.ej2Instances.documentEditor.open(http.responseText);
          }
        }
      };
      http.send(JSON.stringify(content));
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

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
