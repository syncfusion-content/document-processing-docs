---
layout: post
title: How to Compare Word Documents in ASP.NET MVC DOCX Editor | Syncfusion
description: Learn how to compare two Word documents using DocIO and view the resultant document with tracked changes in Syncfusion® ASP.NET MVC DOCX Editor.
platform: document-processing
control: DOCX Editor
documentation: ug
---

# How to Compare Word Documents in ASP.NET MVC DOCX Editor

In this article, we are going to see how to compare two Word documents and view the resultant document with tracked changes in the [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor).

Document comparison is performed on the server side with the [Syncfusion<sup style="font-size:70%">&reg;</sup> .NET Word library (DocIO)](https://www.syncfusion.com/document-sdk/net-word-library). It highlights the following changes as tracked changes:

* Insertions
* Deletions

After the comparison, the resultant document is opened in the Document Editor, where you can view the inserted and deleted changes as revisions, and accept or reject them using the Review pane.

## Compare documents using DocIO

The following steps illustrate how to compare the documents:

* Install the [`Syncfusion.DocIO.AspNet.Mvc5`](https://www.nuget.org/packages/Syncfusion.DocIO.AspNet.Mvc5) NuGet package in the ASP.NET MVC application.
* In a controller action, accept the original and revised documents as uploaded files (DOCX, DOC, RTF or SFDT). Convert SFDT files to DocIO `WordDocument` instances using the `WordDocument.Save` method of the Document Editor library.
* Compare the documents using the `Compare` method of DocIO. The changes are marked as tracked changes in the original document.
* Load the compared document into the Document Editor `WordDocument` instance using the `WordDocument.Load` method and return it as SFDT.
* In the client, post the documents to the Web API as form data and open the returned SFDT using the [`open`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/index-default#open) method, with the `showRevisions` property enabled to display the tracked changes.

The following example code illustrates how to compare two documents (using static SFDT contents sent as files) and open the resultant document in the Document Editor.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
<button id="compare" class="e-btn e-primary">Compare Documents</button>
@Html.EJS().DocumentEditorContainer("container").Height("590px").EnableToolbar(false).ShowPropertiesPane(false).EnableTrackChanges(true).Render()

<script>
    // Static SFDT contents of the original and revised documents.
    var originalSfdt = '...';
    var revisedSfdt = '...';

    document.getElementById('compare').addEventListener('click', function () {
        var editor = document.getElementById('container').ej2_instances[0].documentEditor;

        // Send the documents to the Web API, which compares them and returns the resultant SFDT.
        var formData = new FormData();
        formData.append('OriginalFile', new Blob([originalSfdt]), 'original.sfdt');
        formData.append('RevisedFile', new Blob([revisedSfdt]), 'revised.sfdt');

        fetch('@Url.Content("~/DocumentEditor/CompareDocuments")', { method: 'POST', body: formData })
            .then(function (response) { return response.text(); })
            .then(function (sfdt) {
                editor.showRevisions = true;
                editor.open(sfdt);
            });
    });
</script>
{% endhighlight %}
{% highlight c# tabtitle="DocumentEditorController.cs" %}
    // Multipart form: "OriginalFile" and "RevisedFile" = the documents to compare (.docx, .doc, .rtf or .sfdt).
    // Returns the original document with the differences marked as tracked changes, as SFDT.
    [HttpPost]
    public ActionResult CompareDocuments(HttpPostedFileBase originalFile, HttpPostedFileBase revisedFile)
    {
        if (originalFile == null || revisedFile == null)
        {
            return new HttpStatusCodeResult(400, "Both the original and revised files are required.");
        }

        try
        {
            using (DLSWordDocument revisedDocument = GetWordDocument(revisedFile))
            using (DLSWordDocument originalDocument = GetWordDocument(originalFile))
            {
                // Compares the original document with the revised document and highlights the changes as tracked changes.
                originalDocument.Compare(revisedDocument);

                // Loads the compared document into the WordDocument instance of the Document Editor server-side library.
                EJ2WordDocument document = EJ2WordDocument.Load(originalDocument);

                // Serializes the compared document as SFDT content.
                string json = JsonConvert.SerializeObject(document);
                document.Dispose();
                return Content(json, "application/json");
            }
        }
        catch (Exception ex)
        {
            throw new InvalidOperationException("Error comparing documents: " + ex.Message, ex);
        }
    }

    private static DLSWordDocument GetWordDocument(HttpPostedFileBase file)
    {
        string type = Path.GetExtension(file.FileName);
        if (string.IsNullOrEmpty(type))
        {
            type = ".docx";
        }

        MemoryStream stream = new MemoryStream();
        file.InputStream.CopyTo(stream);
        stream.Position = 0;

        if (type.ToLowerInvariant() == ".sfdt")
        {
            // Converts the SFDT content to DOCX format for comparison.
            using (StreamReader reader = new StreamReader(stream))
            using (DLSWordDocument sfdtDocument = EJ2WordDocument.Save(reader.ReadToEnd()))
            {
                MemoryStream outStream = new MemoryStream();
                sfdtDocument.Save(outStream, DocIOFormatType.Docx);
                outStream.Position = 0;
                return new DLSWordDocument(outStream, DocIOFormatType.Docx);
            }
        }

        // Loads the document for comparison.
        return new DLSWordDocument(stream, GetDocIOFormatType(type));
    }

    private static DocIOFormatType GetDocIOFormatType(string extension)
    {
        switch (extension.ToLowerInvariant())
        {
            case ".dotx": return DocIOFormatType.Dotx;
            case ".docm": return DocIOFormatType.Docm;
            case ".dotm": return DocIOFormatType.Dotm;
            case ".doc": return DocIOFormatType.Doc;
            case ".dot": return DocIOFormatType.Dot;
            case ".rtf": return DocIOFormatType.Rtf;
            case ".docx": return DocIOFormatType.Docx;
            default: throw new NotSupportedException("Unsupported file format: " + extension);
        }
    }
{% endhighlight %}
{% endtabs %}

## View the comparison result with tracked changes in Document Editor

Once the resultant SFDT content is opened in the Document Editor, all the insertions and deletions are highlighted as tracked changes (revisions) in the document. You can accept or reject the revisions individually or all at once using the Review pane of the Document Editor.

N> [View sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-MVC-DOCX-Editor-Examples/tree/master/compare-documents).

## Online Demo

Explore how to compare Word documents side by side with the ASP.NET MVC DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/comparedocuments#/tailwind3).
