---
layout: post
title: How to Compare Word Documents in Vue DOCX Editor | Syncfusion
description: Compare two Word documents in Syncfusion® Vue DOCX Editor using server-side DocIO and view the resultant document with tracked changes.
control: Compare documents
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Compare Word Documents in Vue DOCX Editor

Comparing two Word documents allows you to identify the changes between two versions of a document. The [Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) does not provide built-in support for comparing documents on the client side. However, similar to mail merge, you can achieve this using the server-side Word Library ([DocIO](https://help.syncfusion.com/document-processing/word/word-library/net/overview)) as a dependency and view the resultant document with tracked changes in the Document Editor.

The comparison highlights the following changes as tracked revisions:

* Insertions
* Deletions
* Formatting

N> 1. DocIO performs word level comparison while comparing two Word documents. In this scenario, if a single character in a word is changed, the entire word will be highlighted as changed.
N> 2. Comparing two Word documents is supported in DOCX format only. So, the SFDT content is converted to DOCX format in the server side before comparison.

To learn more about the comparison functionality in DocIO, refer to this [page](https://help.syncfusion.com/document-processing/word/word-library/net/word-document/compare-word-documents).

## Compare documents on the server side

* In the client-side, send the original and revised documents to the server using a button click action. The documents can be sent as [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) with file content, file name, author name, and date time details.

The following example code illustrates how to send the original and revised SFDT documents to the server side for comparison.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button id='compare' v-on:click="onCompare">Compare Documents</button>
    <ejs-documenteditor ref='documenteditor' :serviceUrl='serviceUrl' :isReadOnly='false' :enableTrackChanges='true'
      :enableSelection='true' :enableSfdtImport='true' :enableSfdtExport='true' height="590px"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { onMounted, ref, provide } from 'vue';
import { DocumentEditorComponent as EjsDocumenteditor, SfdtExport, Selection, Editor, UndoRedo, View } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject required modules.
provide('DocumentEditor', [SfdtExport, Selection, Editor, UndoRedo, View]);

const onCompare = function () {
  let http = new XMLHttpRequest();
  // Replace your running web service Url here
  http.open('POST', 'http://localhost:62869/api/documenteditor/CompareDocuments', true);
  http.responseType = 'text';
  //Form data with the original and revised SFDT documents.
  let formData = new FormData();
  formData.append('originalFile', new File([originalDocument], 'original.sfdt', { type: 'application/json' }));
  formData.append('revisedFile', new File([revisedDocument], 'revised.sfdt', { type: 'application/json' }));
  formData.append('author', 'Author');
  formData.append('dateTime', new Date().toISOString());
  http.onreadystatechange = () => {
    if (http.readyState === 4) {
      if (http.status === 200 || http.status === 304) {
        // Open the resultant SFDT content (with tracked changes) in the Document Editor.
        documenteditor.value.open(http.responseText);
      } else {
        alert('Failed to compare the documents. Please try again.');
      }
    }
  };
  http.send(formData);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button id='compare' v-on:click="onCompare">Compare Documents</button>
    <ejs-documenteditor ref='documenteditor' :serviceUrl='serviceUrl' :isReadOnly='false' :enableTrackChanges='true'
      :enableSelection='true' :enableSfdtImport='true' :enableSfdtExport='true' height="590px"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, SfdtExport, Selection, Editor, UndoRedo, View } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data() {
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
    };
  },
  provide: {
    //Inject required modules.
    DocumentEditor: [SfdtExport, Selection, Editor, UndoRedo, View]
  },
  methods: {
    onCompare: function () {
      let http = new XMLHttpRequest();
      // Replace your running web service Url here
      http.open('POST', 'http://localhost:62869/api/documenteditor/CompareDocuments', true);
      http.responseType = 'text';
      //Form data with the original and revised SFDT documents.
      let formData = new FormData();
      formData.append('originalFile', new File([originalDocument], 'original.sfdt', { type: 'application/json' }));
      formData.append('revisedFile', new File([revisedDocument], 'revised.sfdt', { type: 'application/json' }));
      formData.append('author', 'Author');
      formData.append('dateTime', new Date().toISOString());
      http.onreadystatechange = () => {
        if (http.readyState === 4) {
          if (http.status === 200 || http.status === 304) {
            // Open the resultant SFDT content (with tracked changes) in the Document Editor.
            this.$refs.documenteditor.open(http.responseText);
          } else {
            alert('Failed to compare the documents. Please try again.');
          }
        }
      };
      http.send(formData);
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

* In the server-side, add a Web API in the controller file to compare the documents using the `Compare` method of DocIO. The resultant document is converted back to SFDT and returned to the client-side.

The following example code illustrates how to compare the original and revised documents in the server side.

```c#
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("CompareDocuments")]
public string CompareDocuments([FromForm] CompareParameter data)
{
    if (data.OriginalFile == null || data.RevisedFile == null)
        return null;
    IFormFile originalFile = data.OriginalFile;
    IFormFile revisedFile = data.RevisedFile;

    try
    {
        using (WDocument revisedDocument = GetWordDocument(revisedFile))
        {
            using (WDocument originalDocument = GetWordDocument(originalFile))
            {
                //Compare the original and revised documents.
                originalDocument.Compare(revisedDocument);
                //Hooks MetafileImageParsed event.
                WordDocument.MetafileImageParsed += OnMetafileImageParsed;
                WordDocument document = WordDocument.Load(originalDocument);
                //Unhooks MetafileImageParsed event.
                WordDocument.MetafileImageParsed -= OnMetafileImageParsed;

                //Serialize the resultant document as SFDT and return it to the client-side.
                string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
                document.Dispose();
                return json;
            }
        }
    }
    catch (Exception ex)
    {
        throw new InvalidOperationException("Error comparing documents: " + ex.Message, ex);
    }
}

public class CompareParameter
{
    public IFormFile OriginalFile { get; set; }
    public IFormFile RevisedFile { get; set; }
    public string Author { get; set; }
    public string DateTime { get; set; }
}

private static WDocument GetWordDocument(IFormFile file)
{
    Stream stream = new MemoryStream();
    int index = file.FileName.LastIndexOf('.');
    string type = index > -1 && index < file.FileName.Length - 1 ?
        file.FileName.Substring(index) : ".docx";
    file.CopyTo(stream);
    stream.Position = 0;

    WDocument document;
    if (type == ".sfdt")
    {
        using (var reader = new StreamReader(stream))
        {
            string sfdtContent = reader.ReadToEnd();
            //Convert the SFDT content to DOCX format.
            document = WordDocument.Save(sfdtContent);
            var outStream = new MemoryStream();
            document.Save(outStream, WFormatType.Docx);
            document.Close();
            WDocument wordDocument = new WDocument(outStream, WFormatType.Docx);
            return wordDocument;
        }
    }
    else
    {
        document = new WDocument(stream, GetWFormatType(type));
        stream.Dispose();
        return document;
    }
}
```

N> The `MetafileImageParsed` event is hooked to convert the metafile images (WMF, EMF) in the document to a raster image format, so that they can be displayed in the client-side DOCX Editor component.

## View the resultant document with tracked changes

Once the comparison is completed on the server side, the resultant SFDT content is returned to the client-side. This SFDT content contains all the changes as tracked revisions (insertions, deletions, and formatting). You can open this content in the Document Editor using the [`open`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#open) API, and the tracked changes will be displayed in the editor. The revisions can be accepted or rejected using the built-in review pane in the DOCX Editor. To learn more about track changes, refer to this [page](../track-changes).

## Preview Sample

{% previewsample "/document-processing/code-snippet/document-editor/vue/compare-documents-cs1" %}

## Online Demo

Explore how to compare Word documents side-by-side using the Vue DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/vue/#/tailwind3/document-editor/compare-documents).

## See Also

* [Compare Word documents using DocIO](https://help.syncfusion.com/document-processing/word/word-library/net/word-document/compare-word-documents)
* [Track Changes in Vue DOCX Editor](../track-changes)
