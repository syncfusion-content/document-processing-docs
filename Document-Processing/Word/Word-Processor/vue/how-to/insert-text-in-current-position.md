---
layout: post
title: Insert text in current position in Vue Document editor component | Syncfusion
description: Learn here all about Insert text in current position in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Insert text in current position 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Insert text in current position in Vue Document editor component

You can insert the text, paragraph and rich-text content in Vue Document Editor component.

## Insert text in current cursor position

You can use [`insertText`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor#inserttext) API in editor module to insert the text in current cursor position.

The following example code illustrates how to add the text in current selection.

```
// It will insert the provided text in current selection
this.$refs.container.ej2Instances.documentEditor.editor.insertText('Syncfusion');
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div>
      <button v-on:click='insertText'>Insert Text</button>
    </div>
    <ejs-documenteditorcontainer ref='container' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

const insertText = function () {
  //It will insert the provided text in current selection
  container.value.ej2Instances.documentEditor.editor.insertText('Syncfusion');
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
      <button v-on:click='insertText'>Insert Text</button>
    </div>
    <ejs-documenteditorcontainer ref='container' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    insertText: function () {
      //It will insert the provided text in current selection
      this.$refs.container.ej2Instances.documentEditor.editor.insertText('Syncfusion');
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

Please check below gif which illustrates how to insert text in current cursor position on button click:

![Insert text in current cursor position in Vue document editor](../images/insert_text.gif)

## Insert paragraph in current cursor position

To insert new paragraph at current selection, you can can use [`insertText`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor#inserttext) API with parameter as `\r\n` or `\n`.

The following example code illustrates how to add the new paragraph in current selection.

```
// It will add the new paragraph in current selection
this.$refs.container.ej2Instances.documentEditor.editor.insertText('\n');
```

## Insert the rich-text content

To insert the HTML content, you have to convert the HTML content to SFDT Format using [`web service`](../web-services-overview). Then use [`paste`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor#paste) API to insert the sfdt at current cursor position.

>Note: Html string should be well formatted html. [`DocIO`](https://help.syncfusion.com/file-formats/docio/html) support only well formatted XHTML.  

The following example illustrates how to insert the HTML content at current cursor position.

* Send the HTML content to server side for SFDT conversion. Refer to the following example to send the HTML content to server side and inserting it in current cursor position.


  {% tabs %}
  {% highlight html tabtitle="Composition API (~/src/App.vue)" %}
  
  <template>
    <div id="app">
      <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
        :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
    </div>
  </template>
  <script setup>
  import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
  import { provide, ref } from 'vue';

  const container = ref(null);
  const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

  //Inject require modules.
  provide('DocumentEditorContainer', [Toolbar]);

  const onCreated = function () {
    let htmltags =
      "<?xml version='1.0' encoding='utf - 8'?><!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN''http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'><html xmlns ='http://www.w3.org/1999/xhtml' xml:lang='en' lang ='en'><body><h1>The img element</h1><img src='https://www.w3schools.com/images/lamp.jpg' alt ='Lamp Image' width='500' height='600'/></body></html>";
    let http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:5000/api/documenteditor/LoadString');
    http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    http.responseType = 'json';
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200 || http.status === 304) {
          // Insert the sfdt content in cursor position using paste API
          container.value.ej2Instances.documentEditor.editor.paste(http.response);
        } else {
          alert('failed;');
        }
      }
    };

    let htmlContent = { content: htmltags };
    http.send(JSON.stringify(htmlContent));
  }
  </script>
  {% endhighlight %}
  {% highlight html tabtitle="Options API (~/src/App.vue)" %}
  
  <template>
    <div id="app">
      <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
        :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
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
        serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
      };
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar]
    },
    methods: {
      onCreated: function () {
        let htmltags =
          "<?xml version='1.0' encoding='utf - 8'?><!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN''http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'><html xmlns ='http://www.w3.org/1999/xhtml' xml:lang='en' lang ='en'><body><h1>The img element</h1><img src='https://www.w3schools.com/images/lamp.jpg' alt ='Lamp Image' width='500' height='600'/></body></html>";
        let http = new XMLHttpRequest();
        http.open('POST', 'http://localhost:5000/api/documenteditor/LoadString');
        http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        http.responseType = 'json';
        http.onreadystatechange = function () {
          if (http.readyState === 4) {
            if (http.status === 200 || http.status === 304) {
              // Insert the sfdt content in cursor position using paste API
              this.$refs.container.ej2Instances.documentEditor.editor.paste(http.response);
            } else {
              alert('failed;');
            }
          }
        };

        let htmlContent = { content: htmltags };
        http.send(JSON.stringify(htmlContent));
      }
    }
  };
  </script>

  {% endhighlight %}
  {% endtabs %}
  
> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

* Please refer the following code example for server-side web implementation for HTML conversion using DocumentEditor.

    ```c#
    //API controller for the conversion.
    [HttpPost]
    public string LoadString([FromBody]InputParameter data)
    {
        // You can also load HTML file/string from server side.
        Syncfusion.EJ2.DocumentEditor.WordDocument document = Syncfusion.EJ2.DocumentEditor.WordDocument.LoadString(data.content, FormatType.Html); // Convert the HTML to SFDT format.
        string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
        document.Dispose();
        return json;
    }

    public class InputParameter
    {
        public string content {get; set; }
    }
    ```

>Note: The above example illustrates inserting HTML content. Similarly, you can insert any rich-text content by converting any of the supported file formats (DOCX, DOC, WordML, HTML, RTF) to SFDT.