---
layout: post
title: How to Compare Word Documents in Angular DOCX Editor | Syncfusion
description: Learn how to compare two Word documents on the server side using DocIO and view the resultant document with tracked changes in Syncfusion® Angular DOCX Editor.
platform: document-processing
control: Compare Word documents
documentation: ug
domainurl: ##DomainURL##
---

# How to Compare Word Documents in Angular DOCX Editor

In this article, we are going to see how to compare two Word documents and view the resultant document with tracked changes in the Document Editor.

Document comparison is a server-side operation and it cannot be performed in the client side alone, because the Document Editor performs comparison using the .NET Word library (DocIO) on the server side. Similar to performing mail merge operations, you can achieve document comparison using [DocIO](https://www.syncfusion.com/document-sdk/net-word-library) as a dependency in your server-side Web API project.

The .NET Word library (DocIO) enables you to compare two Word documents and highlight the following changes as tracked changes.
*	Insertions
*	Deletions
*	Formatting

N> 1. DocIO performs word level comparison while comparing two Word documents. In this scenario, if a single character in a word is changed, the entire word will be highlighted as changed.
N> 2. Comparing two Word documents is supported in DOCX format only.

After the comparison, the resultant document (with tracked changes) is loaded into the Document Editor on the client side, where you can view the inserted, deleted, and formatting changes as revisions, and accept or reject them using the Review pane.

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

N> The `MetafileImageParsed` event is hooked while loading the compared document into the `WordDocument` instance to parse the metafile images present in the document. You can refer to the [MetafileImageParsed event](https://help.syncfusion.com/document-processing/word/word-processor/web-services/core) section to handle this event in your Web API project.

## Compare documents from the client side

* Pass the original and revised document contents (as SFDT strings) to the server-side `CompareDocuments` Web API using the `FormData` object, where the comparison is performed and the resultant SFDT content is returned.
* Open the resultant SFDT content returned from the server side in the Document Editor using the [`open`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#open) method to view the comparison result with tracked changes.

The following example code illustrates how to compare two documents (using static SFDT contents) and open the resultant document in the Document Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/compare-documents-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/compare-documents-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## View the comparison result with tracked changes in Document Editor

Once the resultant SFDT content returned from the server side is opened in the Document Editor, all the insertions, deletions, and formatting changes are highlighted as tracked changes (revisions) in the document. You can show or hide the revisions pane using the `showRevisions` property of the Document Editor, and accept or reject the revisions individually or all at once using the Review pane of the Document Editor.

## Preview Sample

{% previewsample "/document-processing/samples/document-editor/angular/compare-documents-cs1" %}

## Online Demo

Explore how to compare Word documents side by side with the Angular DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/angular/#/tailwind3/document-editor/compare-documents).

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
