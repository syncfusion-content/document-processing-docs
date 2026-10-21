---
layout: post
title: How to Compare Word Documents in React DOCX Editor | Syncfusion
description: Compare two Word documents in Syncfusion® React DOCX Editor using the server-side Word Library (DocIO) and view the resultant document with tracked changes.
control: Compare Word documents
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Compare Word Documents in React DOCX Editor

In this article, we are going to see how to compare two Word documents in the [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) and view the comparison result with tracked changes.

## Compare documents using server-side Word Library (DocIO)

Similar to mail merge, comparing two Word documents is a server-side operation that cannot be performed directly in the browser. The DOCX Editor provides the client-side rendering and editing capabilities, whereas the actual comparison of two documents is achieved using the server-side Word Library (DocIO). The following workflow explains how the comparison is achieved end to end:

1. Provide the original and revised documents from the client side (DOCX Editor) as SFDT content.

2. Send the original and revised documents to the server-side Web API using the `CompareDocuments` API.

3. Perform the comparison of the two documents on the server side using the Word Library (DocIO).

4. Return the compared document as SFDT content from the server to the client.

5. Finally, view the resultant document with tracked changes in the DOCX Editor.

For detailed information about comparing documents using the Word Library (DocIO), refer to this [page](https://help.syncfusion.com/document-processing/word/word-library/net/how-to/compare-documents).

## Server-side Web API for CompareDocuments

The DOCX Editor Web API (like the one hosted at [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices)) provides the `CompareDocuments` API to compare two documents on the server side. This API accepts the original and revised documents, compares them using DocIO, and returns the resultant document as SFDT content that can be opened in the DOCX Editor.

The following code illustrates how to implement the `CompareDocuments` Web API in an ASP.NET Core Web API project.

{% tabs %}
{% highlight c# tabtitle="DocumentEditorController.cs" %}

[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllOrigins")]
[Route("api/DocumentEditor/CompareDocuments")]
public string CompareDocuments()
{
    try
    {
        IFormFile originalFile = HttpContext.Request.Form.Files["originalDocument"];
        IFormFile revisedFile = HttpContext.Request.Form.Files["revisedDocument"];
        string authorName = HttpContext.Request.Form["authorName"];
        DateTime dateTime = DateTime.Parse(HttpContext.Request.Form["dateTime"]);
        WordDocument originalDocument;
        using (Stream stream = originalFile.OpenReadStream())
        {
            originalDocument = WordDocument.Load(stream, GetFormatType(originalFile.FileName));
        }
        WordDocument revisedDocument;
        using (Stream stream = revisedFile.OpenReadStream())
        {
            revisedDocument = WordDocument.Load(stream, GetFormatType(revisedFile.FileName));
        }
        //Compare the original and revised documents
        originalDocument.Compare(revisedDocument, authorName, dateTime);
        //Save the compared document as SFDT
        string sfdtDocument;
        originalDocument.Save(out sfdtDocument);
        originalDocument.Dispose();
        revisedDocument.Dispose();
        return sfdtDocument;
    }
    catch (Exception ex)
    {
        return ex.Message;
    }
}

[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllOrigins")]
[Route("api/DocumentEditor/Import")]
public string Import()
{
    try
    {
        IFormFile file = HttpContext.Request.Form.Files["file"];
        WordDocument document;
        using (Stream stream = file.OpenReadStream())
        {
            document = WordDocument.Load(stream, GetFormatType(file.FileName));
        }
        //Save the document as SFDT
        string sfdtDocument;
        document.Save(out sfdtDocument);
        document.Dispose();
        return sfdtDocument;
    }
    catch (Exception ex)
    {
        return ex.Message;
    }
}

[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllOrigins")]
[Route("api/DocumentEditor/GetFormatType")]
public FormatType GetFormatType(string fileName)
{
    if (fileName.EndsWith(".doc"))
    {
        return FormatType.Doc;
    }
    else if (fileName.EndsWith(".docx"))
    {
        return FormatType.Docx;
    }
    else if (fileName.EndsWith(".rtf"))
    {
        return FormatType.Rtf;
    }
    else if (fileName.EndsWith(".txt"))
    {
        return FormatType.Txt;
    }
    else if (fileName.EndsWith(".xml"))
    {
        return FormatType.WordML;
    }
    else
    {
        return FormatType.Automatic;
    }
}

{% endhighlight %}
{% endtabs %}

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Compare documents in DOCX Editor

You can compare two documents in the DOCX Editor by sending the original and revised SFDT contents to the server-side `CompareDocuments` Web API from the client side and open the resultant SFDT content in the DOCX Editor to view the comparison result with tracked changes.

The following example code illustrates how to compare two documents using static SFDT contents from the client side and view the compared document in the DOCX Editor.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/compare-documents-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/compare-documents-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

The following SFDT contents are used as the original and revised documents in the above example.

{% tabs %}
{% highlight ts tabtitle="data.ts" %}
{% include code-snippet/document-editor/react/compare-documents-cs1/app/data.ts %}
{% endhighlight %}
{% endtabs %}

N> You can get the complete working sample of side-by-side comparison of two documents from this [GitHub example](https://github.com/SyncfusionExamples/react-docx-editor-compare-documents/).

## View the compared document with tracked changes

Once the comparison is completed on the server side, the resultant SFDT content contains the tracked changes of both insertions and deletions made between the original and revised documents. After receiving the compared SFDT content from the server side, enable the `showRevisions` property in DOCX Editor and open the resultant document using the `open` API to view the comparison result with tracked changes in the DOCX Editor.

```ts
container.current.documentEditor.showRevisions = true;
container.current.documentEditor.open(sfdt);
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
