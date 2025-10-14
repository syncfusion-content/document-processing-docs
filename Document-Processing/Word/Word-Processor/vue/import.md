---
layout: post
title: Import in Vue Document editor component | Syncfusion
description: Learn here all about Import in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Import 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Import in Vue Document editor component

In Document Editor, the documents are stored in its own format called **Syncfusion Document Text (SFDT)**.

The following example shows how to open SFDT data in Document Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/import-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/import-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/import-cs1" %}

## Import document from local machine

The following example shows how to import document from local machine.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/import-sfdt-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/import-sfdt-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/import-sfdt-cs1" %}

## Convert word documents into SFDT

You can convert word documents into SFDT format using the .NET Standard library [`Syncfusion.EJ2.WordEditor.AspNet.Core`](<https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Core/>) by the web API service implementation. This library helps you to convert word documents (.dotx,.docx,.docm,.dot,.doc), rich text format documents (.rtf), and text documents (.txt) into SFDT format.

>Note: The Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component's document pagination (page-by-page display) can't be guaranteed for all the Word documents to match the pagination of Microsoft Word application. For more information about [why the document pagination (page-by-page display) differs from Microsoft Word](./import#why-the-document-pagination-differs-from-microsoft-word)

Please refer the following example for converting word documents into SFDT.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <input type="file" ref="fileUpload" v-on:change="onFileUpload"
    accept=".dotx,.docx,.docm,.dot,.doc,.rtf,.txt,.xml,.sfdt" style="position:fixed; left:-100em" />
  <div>
    <div>
      <button v-on:click='openFileButtonClickHandler'>Import</button>
    </div>
    <ejs-documenteditor ref="documenteditor" height="370px" style="width: 100%;display:block"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor } from '@syncfusion/ej2-vue-documenteditor';
import { ref } from 'vue';

const documenteditor = ref(null);
const fileUpload = ref(null);

const loadFile = function (file) {
  let ajax = new XMLHttpRequest();
  ajax.open('POST', 'https://localhost:4000/api/documenteditor/Import', true);
  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4) {
      if (ajax.status === 200 || ajax.status === 304) {
        // open SFDT text in document editor
        documenteditor.value.open(ajax.responseText);
      }
    }
  }
  let formData = new FormData();
  formData.append('files', file);
  ajax.send(formData);
}

const openFileButtonClickHandler = function () {
  fileUpload.value.click();
}

const onFileUpload = function (e) {
  if (e.target.files[0]) {
    let file = e.target.files[0];
    if (file.name.substr(file.name.lastIndexOf('.')) === '.sfdt') {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        let contents = e.target.result;
        documenteditor.value.open(contents);
      };
      fileReader.readAsText(file);
    }
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <input type="file" ref="fileUpload" v-on:change="onFileUpload"
    accept=".dotx,.docx,.docm,.dot,.doc,.rtf,.txt,.xml,.sfdt" style="position:fixed; left:-100em" />
  <div>
    <div>
      <button v-on:click='openFileButtonClickHandler'>Import</button>
    </div>
    <ejs-documenteditor ref="documenteditor" height="370px" style="width: 100%;display:block"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  methods: {
    loadFile: function (file) {
      let ajax = new XMLHttpRequest();
      ajax.open('POST', 'https://localhost:4000/api/documenteditor/Import', true);
      ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
          if (ajax.status === 200 || ajax.status === 304) {
            // open SFDT text in document editor
            this.$refs.documenteditor.open(ajax.responseText);
          }
        }
      }
      let formData = new FormData();
      formData.append('files', file);
      ajax.send(formData);
    },
    openFileButtonClickHandler: function () {
      this.$refs.fileUpload.click();
    },
    onFileUpload: function (e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        if (file.name.substr(file.name.lastIndexOf('.')) === '.sfdt') {
          let fileReader = new FileReader();
          fileReader.onload = (e) => {
            let contents = e.target.result;
            this.$refs.documenteditor.open(contents);
          };
          fileReader.readAsText(file);
        }
      }
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

Here’s how to handle the server-side action for converting word document in to SFDT.

```c#
    [AcceptVerbs("Post")]
    public string Import(Microsoft.AspNetCore.Http.IFormCollection data)
    {
        if (data.Files.Count == 0)
            return null;
        System.IO.Stream stream = new System.IO.MemoryStream();
        Microsoft.AspNetCore.Http.IFormFile file = data.Files[0];
        int index = file.FileName.LastIndexOf('.');
        string type = index > -1 && index < file.FileName.Length - 1 ?
            file.FileName.Substring(index) : ".docx";
        file.CopyTo(stream);
        stream.Position = 0;

        Syncfusion.EJ2.DocumentEditor.WordDocument document = Syncfusion.EJ2.DocumentEditor.WordDocument.Load(stream, GetFormatType(type.ToLower()));
        string sfdt = Newtonsoft.Json.JsonConvert.SerializeObject(document);
        document.Dispose();
        return sfdt;
    }

    internal static Syncfusion.EJ2.DocumentEditor.FormatType GetFormatType(string format)
    {
        if (string.IsNullOrEmpty(format))
            throw new System.NotSupportedException("EJ2 DocumentEditor does not support this file format.");
        switch (format.ToLower()) {
            case ".dotx":
            case ".docx":
            case ".docm":
            case ".dotm":
                return Syncfusion.EJ2.DocumentEditor.FormatType.Docx;
            case ".dot":
            case ".doc":
                return Syncfusion.EJ2.DocumentEditor.FormatType.Doc;
            case ".rtf":
                return Syncfusion.EJ2.DocumentEditor.FormatType.Rtf;
            case ".txt":
                return Syncfusion.EJ2.DocumentEditor.FormatType.Txt;
            case ".xml":
                return Syncfusion.EJ2.DocumentEditor.FormatType.WordML;
            default:
                throw new System.NotSupportedException("EJ2 DocumentEditor does not support this file format.");
        }
    }
```

To know about server-side action, please refer this [page](./web-services-overview).

## Compatibility with Microsoft Word

Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor is a minimal viable Word document viewer/editor product for web applications. As most compatible Word editor, the product vision is adding valuable feature sets of Microsoft Word, and not to cover 100% feature sets of Microsoft Word desktop application. You can even see the feature sets difference between Microsoft Word desktop and their Word online application. So kindly don't misunderstand this component as a complete replacement for Microsoft Word desktop application and expect 100% feature sets of it.

### How Syncfusion<sup style="font-size:70%">&reg;</sup> accepts the feature request for Document Editor

Syncfusion<sup style="font-size:70%">&reg;</sup> accepts new feature request as valid based on feature value and technological feasibility, then plan to implement unsupported features incrementally in future releases in a phase-by-phase manner.

### How to report the problems in Document Editor

You can report the problems with displaying, or editing Word documents in Document Editor component through [`support forum`](https://www.syncfusion.com/forums/), [`Direct-Trac`](https://www.syncfusion.com/support/directtrac/), or [`feedback portal`](https://www.syncfusion.com/feedback/). Kindly share the Word document for replicating the problem easily in minimal time. If you have confidential data, you can replace it and attach the document.

### Why the document pagination differs from Microsoft Word

For your understanding about the Word document structure and the workflow of Word viewer/editor components, the Word document is a flow document in which content will not be preserved page by page; instead, the content will be preserved sequentially like a HTML file. Only the Word viewer/editor paginates the content of the Word document page by page dynamically, when opened for viewing or editing and this page-wise position information will not be preserved in the document level (it is Word file format specification standard). Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component also does the same.
  
At present there is a known technical limitation related to slight difference in text size calculated using HTML element based text measuring approach. Even though the text size is calculated with correct font and font size values, the difference lies; it is as low as 0.00XX to 0. XXXX values compared to that of Microsoft Word application’s display. Hence the document pagination (page-by-page display) can't be guaranteed for all the Word documents to match the pagination of Microsoft Word application.

### How Syncfusion<sup style="font-size:70%">&reg;</sup> address the document pagination difference compared to Microsoft Word

The following table illustrates the reasons for pagination (page-by-page display) difference compared to Microsoft Word in your documents and how Syncfusion<sup style="font-size:70%">&reg;</sup> address it.

| Root causes | How is it solved? |
|-----------------|-------------|
|Any mistake (wrong behavior handled) in lay outing the supported elements and formatting   |Customer can report to Syncfusion<sup style="font-size:70%">&reg;</sup> support and track the status through bug report link.  Syncfusion<sup style="font-size:70%">&reg;</sup> fixes the bugs in next possible weekly patch release and service pack or main releases. |
|Font missing in deployment environment|Customer can either report to Syncfusion<sup style="font-size:70%">&reg;</sup> support and get suggestion or solve it on their own by installing the missing fonts in their deployment environment.|
|Any unsupported elements or formatting present in your document |Customer can report to Syncfusion<sup style="font-size:70%">&reg;</sup> support and track the status through feature request link.   Syncfusion<sup style="font-size:70%">&reg;</sup> implements unsupported features incrementally in future releases based on feature importance, customer interest, efforts involved, and technological feasibility. Also, suggests alternate approach for possible cases.|
|Technical limitation related to framework   For example, there is a known case with slight fractional difference in text size measured using HTML and Microsoft Word’s display.|Customer can report to Syncfusion<sup style="font-size:70%">&reg;</sup> support and track the status through feature request link.  Syncfusion<sup style="font-size:70%">&reg;</sup> does research about alternate approaches to overcome the technical limitation/behaviors and process it same as a feature. >Note: Here the challenge is, time schedule for implementation varies based on the alternate solution and its reliability.|

## See Also

* [Feature modules](./feature-module)