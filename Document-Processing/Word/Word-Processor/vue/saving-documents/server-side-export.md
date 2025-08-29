---
layout: post
title: Server side export in Vue Document editor component | Syncfusion
description: Learn here all about Server side export in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Server side export 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Server side export in Vue Document editor component

## SFDT to DOCX export

Document Editor supports server-side export of **Syncfusion Document Text (.sfdt)** to Doc, DOCX, RTF, Txt, WordML, HTML formats using server-side helper `**Syncfusion.EJ2.DocumentEditor**` available in ASP.NET Core & ASP.NET MVC platform in the below NuGet's.

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

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div>
      <button v-on:click='exportBlob'>Save</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSfdtExport='true' :enableWordExport='true' :enableSelection='true'
      :enableEditor='true' :isReadOnly='false' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, SfdtExport, WordExport } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const documenteditor = ref(null);
//Inject require modules.
provide('DocumentEditor', [SfdtExport, WordExport, Selection, Editor])

const exportBlob = function () {
    let http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:5000/api/documenteditor/ExportSFDT');
    http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    http.responseType = 'json';
    //Serialize document content as SFDT.
    let sfdt = { content: documenteditor.value.serialize() };
    //Send the sfdt content to server side.
    http.send(JSON.stringify(sfdt));
  }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div>
      <button v-on:click='exportBlob'>Save</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSfdtExport='true' :enableWordExport='true' :enableSelection='true'
      :enableEditor='true' :isReadOnly='false' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, SfdtExport, WordExport } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditor: [SfdtExport, WordExport, Selection, Editor]
  },
  methods: {
    exportBlob: function () {
      let http = new XMLHttpRequest();
      http.open('POST', 'http://localhost:5000/api/documenteditor/ExportSFDT');
      http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      http.responseType = 'json';
      //Serialize document content as SFDT.
      let sfdt = { content: this.$refs.documenteditor.serialize() };
      //Send the sfdt content to server side.
      http.send(JSON.stringify(sfdt));
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> DocumentEditor object is available in DocumentEditorContainer component(DocumentEditor packaged with toolbar, status bar & properties pane) as [`documentEditor`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#documenteditor-code-classlanguage-textdocumenteditorcode/)