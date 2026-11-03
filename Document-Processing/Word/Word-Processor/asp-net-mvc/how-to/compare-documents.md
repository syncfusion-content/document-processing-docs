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
* In a controller action, convert the original and revised SFDT contents to DocIO `WordDocument` instances using the `WordDocument.Save` method of the Document Editor library.
* Compare the documents using the `Compare` method of DocIO. The changes are marked as tracked changes in the original document.
* Load the compared document into the Document Editor `WordDocument` instance using the `WordDocument.Load` method and return it as SFDT.
* In the client, call the controller action and open the returned SFDT using the [`open`](https://ej2.syncfusion.com/documentation/api/document-editor#open) method, with the `showRevisions` property enabled to display the tracked changes.

The following example code illustrates how to compare two documents (using static SFDT contents) and open the resultant document in the Document Editor.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
<button id="compare" class="e-btn e-primary">Compare Documents</button>
@Html.EJS().DocumentEditorContainer("container").Height("590px").EnableToolbar(false).ShowPropertiesPane(false).EnableTrackChanges(true).ServiceUrl(Url.Content("~/DocumentEditor/")).Render()

<script>
    document.getElementById('compare').addEventListener('click', function () {
        var container = document.getElementById('container').ej2_instances[0];
        var editor = container.documentEditor;
        // Compare the documents on the server side and open the resultant SFDT with tracked changes.
        fetch('@Url.Content("~/DocumentEditor/CompareDocuments")', { method: 'POST' })
            .then(function (response) { return response.text(); })
            .then(function (sfdt) {
                editor.showRevisions = true;
                editor.open(sfdt);
            });
    });
</script>
{% endhighlight %}
{% highlight c# tabtitle="DocumentEditorController.cs" %}
        // Static SFDT contents of the original and revised documents (truncated here).
        private const string OriginalSfdt = "...";
        private const string RevisedSfdt = "...";

        // Compares the original and revised documents and returns the resultant SFDT with tracked changes.
        [HttpPost]
        public ActionResult CompareDocuments()
        {
            using (DLSWordDocument originalDocument = ToWordDocument(OriginalSfdt))
            using (DLSWordDocument revisedDocument = ToWordDocument(RevisedSfdt))
            {
                // Marks the differences as tracked changes in the original document.
                originalDocument.Compare(revisedDocument);

                // Loads the compared document into the Document Editor WordDocument and serializes it as SFDT.
                EJ2WordDocument document = EJ2WordDocument.Load(originalDocument);
                string json = JsonConvert.SerializeObject(document);
                document.Dispose();
                return Content(json, "application/json");
            }
        }

        private static DLSWordDocument ToWordDocument(string sfdt)
        {
            // Converts the SFDT content to a DocIO document through a DOCX stream.
            using (DLSWordDocument sfdtDocument = EJ2WordDocument.Save(sfdt))
            {
                MemoryStream stream = new MemoryStream();
                sfdtDocument.Save(stream, DocIOFormatType.Docx);
                stream.Position = 0;
                return new DLSWordDocument(stream, DocIOFormatType.Docx);
            }
        }
{% endhighlight %}
{% endtabs %}

## View the comparison result with tracked changes in Document Editor

Once the resultant SFDT content is opened in the Document Editor, all the insertions and deletions are highlighted as tracked changes (revisions) in the document. You can accept or reject the revisions individually or all at once using the Review pane of the Document Editor.

N> [View sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-MVC-DOCX-Editor-Examples/tree/master/compare-documents).

## Online Demo

Explore how to compare Word documents side by side with the ASP.NET MVC DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/comparedocuments#/tailwind3).
