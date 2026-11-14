---
layout: post
title: How to Compare Word Documents in Vue DOCX Editor | Syncfusion
description: Learn how to compare two Word documents on the server side using DocIO and view the resultant document with tracked changes in Syncfusion® Vue DOCX Editor.
platform: document-processing
control: Compare Word documents
documentation: ug
domainurl: ##DomainURL##
---

# How to Compare Word Documents in Vue DOCX Editor

In this article, we are going to see how to compare two Word documents and view the resultant document with tracked changes in the Document Editor.

Document comparison is a server-side operation and it cannot be performed in the client side alone, because the Document Editor performs comparison using the .NET Word library (DocIO) on the server side. Similar to performing mail merge operations, you can achieve document comparison using [DocIO](https://www.syncfusion.com/document-sdk/net-word-library) as a dependency in your server-side Web API project.

The .NET Word library (DocIO) enables you to compare two Word documents and highlight the following changes as tracked changes.
*	Insertions
*	Deletions

After the comparison, the resultant document (with tracked changes) is loaded into the Document Editor on the client side, where you can view the inserted and deleted changes as revisions, and accept or reject them using the Review pane.

## Compare documents using server-side Web API

Add a Web API controller in the server-side project to compare the original and revised documents using the `Compare` method of DocIO, and then load the compared document into the `WordDocument` instance of the Document Editor server-side library to serialize it as SFDT (Syncfusion Document Text) content. Send the resultant SFDT content back to the client side to open it in the Document Editor.

The following example code illustrates how to add the `CompareDocuments` Web API in the controller file to compare the original and revised documents using DocIO.

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
                //Compares the original document with the revised document and highlights the changes as tracked changes.
                originalDocument.Compare(revisedDocument);
                //Hooks MetafileImageParsed event.
                WordDocument.MetafileImageParsed += OnMetafileImageParsed;
                //Loads the compared document into the WordDocument instance of the Document Editor server-side library.
                WordDocument document = WordDocument.Load(originalDocument);
                //Unhooks MetafileImageParsed event.
                WordDocument.MetafileImageParsed -= OnMetafileImageParsed;
                //Serializes the compared document as SFDT content.
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
        //Converts the SFDT content to DOCX format for comparison.
        using (var reader = new StreamReader(stream))
        {
            string sfdtContent = reader.ReadToEnd();
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
        //Loads the DOCX document for comparison.
        document = new WDocument(stream, GetWFormatType(type));
        stream.Dispose();
        return document;
    }
}
```

N> The `MetafileImageParsed` event is hooked to convert the metafile images (WMF, EMF) in the document to a raster image format, so that they can be displayed in the client-side DOCX Editor component.

## Compare documents from the client side

* Pass the original and revised document contents (either SFDT or DOCX files) to the server-side `CompareDocuments` Web API using the `FormData` object, where the comparison is performed and the resultant SFDT content is returned.
* Open the resultant SFDT content returned from the server side in the Document Editor using the [`open`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#open) method to view the comparison result with tracked changes.

The following example code illustrates how to compare two documents (using static SFDT contents) and open the resultant document in the Document Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/compare-documents-cs1/app-composition.vue %}
{% endhighlight %}

{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/compare-documents-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## View the comparison result with tracked changes in Document Editor

Once the resultant SFDT content returned from the server side is opened in the Document Editor, all the insertions and deletions are highlighted as tracked changes (revisions) in the document. You can show or hide the revisions pane using the `showRevisions` property of the Document Editor, and accept or reject the revisions individually or all at once using the Review pane of the Document Editor.

The following example code illustrates how to show the revisions and open the resultant SFDT content in the Document Editor.

```ts
// Show the revisions pane.
this.$refs.documenteditor.showRevisions = true;
// Open the resultant SFDT content in the Document Editor.
this.$refs.documenteditor.open(sfdt);
```

## Preview Sample

{% previewsample "/document-processing/code-snippet/document-editor/vue/compare-documents-cs1" %}

## Online Demo

Explore how to compare Word documents side by side with the Vue DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/vue/#/tailwind3/document-editor/compare-documents).

## See Also

* [Compare Word documents using DocIO](https://help.syncfusion.com/document-processing/word/word-library/net/word-document/compare-word-documents)
* [Track Changes in Vue DOCX Editor](../track-changes)
