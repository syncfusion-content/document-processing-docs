---
layout: post
title: Auto save document in Vue Document editor component | Syncfusion
description: Learn here all about Auto save document in document editor in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Auto save document in document editor 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Auto save document in document editor in Vue Document editor component

In this article, we are going to see how to auto save the document to server. You can automatically save the edited content in regular intervals of time. It helps reduce the risk of data loss by saving an open document automatically at customized intervals.

The following example illustrates how to auto save the document in server.

* In the client-side, using content change event, we can automatically save the edited content in regular intervals of time. Based on `contentChanged` boolean, the document send as Docx format to server-side using [`saveAsBlob`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#saveasblob) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated"
      v-on:contentChange="contentChangeEvent" height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
const contentChanged = ref(false);

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

const contentChangeEvent = function () {
  contentChanged.value = true;
}
const onCreated = function () {
  setInterval(() => {
    if (contentChanged.value) {
      //You can save the document as below
      container.value.ej2Instances.documentEditor
        .saveAsBlob('Docx')
        .then((blob) => {
          console.log('Saved sucessfully');
          let exportedDocument = blob;
          //Now, save the document where ever you want.
          let formData = new FormData();
          formData.append('fileName', 'sample.docx');
          formData.append('data', exportedDocument);
          /* tslint:disable */
          var req = new XMLHttpRequest();
          // Replace your running Url here
          req.open(
            'POST',
            'http://localhost:62869/api/documenteditor/AutoSave',
            true
          );
          req.onreadystatechange = () => {
            if (req.readyState === 4) {
              if (req.status === 200 || req.status === 304) {
                console.log('Saved sucessfully');
              }
            }
          };
          req.send(formData);
        });
      contentChanged.value = false;
    }
  }, 1000);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated"
      v-on:contentChange="contentChangeEvent" height="590px" id='container'
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
      serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
      contentChanged: false
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    contentChangeEvent: function () {
      this.contentChanged = true;
    },
    onCreated: function () {
      setInterval(() => {
        if (this.contentChanged) {
          //You can save the document as below
          this.$refs.container.ej2Instances.documentEditor
            .saveAsBlob('Docx')
            .then((blob) => {
              console.log('Saved sucessfully');
              let exportedDocument = blob;
              //Now, save the document where ever you want.
              let formData = new FormData();
              formData.append('fileName', 'sample.docx');
              formData.append('data', exportedDocument);
              /* tslint:disable */
              var req = new XMLHttpRequest();
              // Replace your running Url here
              req.open(
                'POST',
                'http://localhost:62869/api/documenteditor/AutoSave',
                true
              );
              req.onreadystatechange = () => {
                if (req.readyState === 4) {
                  if (req.status === 200 || req.status === 304) {
                    console.log('Saved sucessfully');
                  }
                }
              };
              req.send(formData);
            });
          this.contentChanged = false;
        }
      }, 1000);
    },
  },
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

  * In server-side, Receives the stream content from client-side and process it to save the document in Server or Database from the received stream. Add Web API in controller file like below to save the document.

      ```c#
      [AcceptVerbs("Post")]
      [HttpPost]
      [EnableCors("AllowAllOrigins")]
      [Route("AutoSave")]
      public string AutoSave()
      {
          IFormFile file = HttpContext.Request.Form.Files[0];
          Stream stream = new MemoryStream();    
          file.CopyTo(stream);
          //Save the stream to database or server as per the requirement.
          stream.Close();
          return "Sucess";
      }
      ```

## See Also
* [Autosave document in DocumentEditor](../how-to/auto-save-document-in-document-editor)