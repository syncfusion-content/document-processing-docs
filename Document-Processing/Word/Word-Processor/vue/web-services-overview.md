---
layout: post
title: Web services in Vue Document editor component | Syncfusion
description: Learn here all about Web services in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Web services 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Web services in Vue Document editor component

You can deploy web APIs for server-side dependencies of Document Editor component in the following platforms.

* [ASP.NET Core](./web-services/core)
* [ASP.NET MVC](./web-services/mvc)
* [Java](./web-services/java)

## Which operations require server-side interaction

|Operations|When client-server communication will be triggered?|What type of data will be transferred between client and server?|
|------------|--------------------------------------|------------------------|
|[Open file formats other than SFDT](./import#convert-word-documents-into-sfdt)|When opening the document other than SFDT (Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor's native file format), the server-side web API is invoked from client-side script.|**Client**: Sends the input file.<br>**Server**: Receives the input file and sends the converted SFDT back to the client.<br><br>The server-side web API internally extracts the content from the document (DOCX, DOC, WordML, RTF, HTML) using Syncfusion<sup style="font-size:70%">&reg;</sup> Word library (DocIO) and converts it into SFDT for opening the document in Document Editor.|
|[Paste with formatting](./clipboard#paste-with-formatting)|When pasting the formatted content (HTML/RTF) received from system clipboard. For converting HTML/RTF to SFDT format.<br><br> **Note**: Whereas plain text received from system clipboard will be pasted directly in the client-side.|**Client**: Sends the input Html or Rtf string. <br>**Server**: Receives the input Html or Rtf string and sends the converted SFDT back to the client.|
|[Restrict editing](./document-management)|When protecting the document, for generating hash.|**Client**: Sends the input data for hashing algorithm.<br> **Server**: Receives the input data for hashing algorithm and sends the result hash information back to the client.|
|[Spellcheck](./spell-check)(default)|When the spellchecker is enabled on client-side Document Editor, and it performs the spell check validation for words in the document.|**Client**: Sends the words (string) with their language for spelling validation.<br> **Server**: Receives the words (string) with their language for spelling validation and sends the validation result as JSON back to the client.|
|[SpellCheckByPage](./spell-check)|Document editor provides options to spellcheck page by page when loading the documents. By [enabling optimized spell check](./spell-check#enableoptimizedspellcheck) in client-side, you can perform spellcheck page by page when loading the documents.|**Client**: Sends the words (string) with their language for spelling validation.<br> **Server**: Receives the words (string) with their language for spelling validation and sends the validation result as JSON back to the client.|
|[Save as file formats other than SFDT and DOCX](./saving-documents/server-side-export) (optional API)|You can configure this API, if you want to save the document in file format other than DOCX and SFDT.<br><br> For saving the files as WordML, DOC, RTF, HTML, ODT, Text using Syncfusion<sup style="font-size:70%">&reg;</sup> Word library (DocIO) and PDF using  Syncfusion<sup style="font-size:70%">&reg;</sup> Word (DocIO) and PDF libraries.|You can transfer document from client to server either as SFDT or DOCX format.<br><br>First option (SFDT):<br>**Client**: Sends the SFDT.<br>**Server**: Receives the SFDT and saves the converted document as any file format supported by [Syncfusion<sup style="font-size:70%">&reg;</sup> Word library (DocIO)](https://www.syncfusion.com/word-framework/net/word-library) in server or sends the saved file to the client browser.<br><br>Second option (DOCX):<br>**Client**: Sends the DOCX file.<br>**Server**: Receives the DOCX file and saves the converted document as any file format supported by [Syncfusion<sup style="font-size:70%">&reg;</sup> Word library (DocIO)](https://www.syncfusion.com/word-framework/net/word-library) in server or sends the saved file to the client browser.|

>Note: If you don't require the above functionalities then you can deploy as pure client-side component without any server-side interactions.

Please refer the [example from GitHub](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) to configure the web service and set the [serviceUrl](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#serviceurl).

If your running web service Url is `http://localhost:62869/`, set the serviceUrl like below:

```ts
this.$refs.container.serviceUrl = "http://localhost:62869/api/documenteditor/";
```

## Required Web API structure

Please check below table for expected web API structure.

|Expected method name |Parameters |Return type |
|-----|----|----|
|Import |Files(IFormCollection) |json(sfdt format) |
|SystemClipboard|CustomerParameter: content(type string either rtf or html) and type(either .rtf or .html) |json(sfdt format) |
|RestrictEditing |Parameter of type CustomRestrictParameter<br>public class CustomRestrictParameter<br>        {<br>            public string passwordBase64 { get; set; }<br>            public string saltBase64 { get; set; }<br>            public int spinCount { get; set; }<br>        } |result hash information |
|SpellCheck(default) |Parameter: SpellCheckJsonData<br>public class SpellCheckJsonData <br>{<br>            public int LanguageID { get; set; }<br>            public string TexttoCheck { get; set; }<br>            public bool CheckSpelling { get; set; }<br>            public bool CheckSuggestion { get; set; }<br>            public bool AddWord { get; set; }<br>        }  |Json type of Spellcheck containing details of spell checked word |
|SpellCheckByPage |Parameter: SpellCheckJsonData<br>public class SpellCheckJsonData <br>{<br>            public int LanguageID { get; set; }<br>            public string TexttoCheck { get; set; }<br>            public bool CheckSpelling { get; set; }<br>            public bool CheckSuggestion { get; set; }<br>            public bool AddWord { get; set; }<br>        }  |Json type of Spellcheck containing details of spell checked word <br><br> **Note**: Document editor provides options to spellcheck page by page when loading the documents. By [enabling optimized spell check](./spell-check#enableoptimizedspellcheck) in client-side, you can perform spellcheck page by page when loading the documents. |
|Save(optional API) |parameter: SaveParameter <br>public class SaveParameter<br>{<br>public string Content { get; set; }<br> public string FileName { get; set; }<br> } |void(Save the file as file stream) |
|ExportSFDT(optional API) |parameter: SaveParameter <br>public class SaveParameter<br>{<br>public string Content { get; set; }<br> public string FileName { get; set; }<br> } |FileStreamResult (to save the document in client-side) |
|Export(optional API) |Files(IFormCollection) |FileStreamResult (to save the document in client-side) |

## Customize the expected method name

Document editor component provides an option to customize the expected method name for Import, SystemClipboard, RestrictEditing and SpellCheck using [serverActionSettings](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/documentEditorContainerModel#serveractionsettings).

The following example code illustrates how to customize the method name using serverActionSettings.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :serverActionSettings='settings'
      height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide } from 'vue';

const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
// Customize the API name
const settings = { import: 'Import1', systemClipboard: 'SystemClipboard1', spellCheck: 'SpellCheck1', restrictEditing: 'RestrictEditing1' };

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :serverActionSettings='settings'
      height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
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
      // Customize the API name
      settings: { import: 'Import1', systemClipboard: 'SystemClipboard1', spellCheck: 'SpellCheck1', restrictEditing: 'RestrictEditing1' }
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Add the custom headers to XMLHttpRequest

Document editor component provides an an option to add custom headers of XMLHttpRequest using the [`headers`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/documentEditorContainerModel#headers).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :headers='customHeaders' height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide } from 'vue';

const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
// custom headers
const customHeaders = [{ 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' }, { 'Content-Type': 'application/json' }]

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :headers='customHeaders' height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
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
      // custom headers
      customHeaders: [{ 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' }, { 'Content-Type': 'application/json' }]
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Modify the XMLHttpRequest before request send

Document editor component provides an option to modify the XMLHttpRequest object (setting additional headers, if needed) using [`beforeXmlHttpRequestSend`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#beforexmlhttprequestsend) event and it gets triggered before a server request.

You can customize the required [`XMLHttpRequest`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/xmlHttpRequestEventArgs/) properties.

The following example code illustrates how to modify the XMLHttpRequest using beforeXmlHttpRequestSend.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { onMounted, provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

onMounted(function () {
  //Here, modifying the request headers
  container.value.headers = [{ syncfusion: 'true' }];
  // Below action, cancel all server-side interactions expect spell check
  container.value.beforeXmlHttpRequestSend = (
    args) => {
    args.headers = container.value.headers;
    args.withCredentials = true;
    switch (args.serverActionType) {
      case 'Import':
      case 'RestrictEditing':
      case 'SystemClipboard':
        args.cancel = true;
        break;
    }
  };
})
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';
  Vue.use(DocumentEditorContainerPlugin);
  export default {
    data() {
      return { serviceUrl:'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'};
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar]
    },
    mounted(){
     // Below action, cancel all server-side interactions expect spell check
     this.$refs.container.beforeXmlHttpRequestSend = (
      args ) => {
      //Here, modifying the request headers
      args.headers = [{ syncfusion: 'true' }];
      args.withCredentials = true;
      switch (args.serverActionType) {
        case 'Import':
        case 'RestrictEditing':
        case 'SystemClipboard':
          args.cancel = true;
          break;
      }
    };
  }
}
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Note: Find the customizable serverActionType values are `'Import' | 'RestrictEditing' | 'SpellCheck' | 'SystemClipboard'`.