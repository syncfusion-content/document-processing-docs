---
layout: post
title: How to Compare Word Documents in ASP.NET Core DOCX Editor | Syncfusion
description: Learn how to compare two Word documents using DocIO and view the resultant document with tracked changes in Syncfusion® ASP.NET Core DOCX Editor.
platform: document-processing
control: DOCX Editor
documentation: ug
---

# How to Compare Word Documents in ASP.NET Core DOCX Editor

In this article, we are going to see how to compare two Word documents and view the resultant document with tracked changes in the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor).

Document comparison is performed with the [Syncfusion<sup style="font-size:70%">&reg;</sup> .NET Word library (DocIO)](https://www.syncfusion.com/document-sdk/net-word-library). It highlights the following changes as tracked changes:

* Insertions
* Deletions

After the comparison, the resultant document is opened in the Document Editor, where you can view the inserted and deleted changes as revisions, and accept or reject them using the Review pane.

## Compare documents using DocIO

The following steps illustrate how to compare the documents:

* Install the [`Syncfusion.DocIO.Net.Core`](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core) and [`Syncfusion.EJ2.WordEditor.AspNet.Core`](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Core) NuGet packages in the ASP.NET Core application.
* On the server side, convert the original and revised SFDT contents to DocIO `WordDocument` instances using the `WordDocument.Save` method of the Document Editor library.
* Compare the documents using the `Compare` method of DocIO. The changes are marked as tracked changes in the original document.
* Load the compared document into the Document Editor `WordDocument` instance using the `WordDocument.Load` method and return it as SFDT.
* On the client side, open the resultant SFDT in the Document Editor using the [`open`](https://ej2.syncfusion.com/aspnetcore/documentation/api/document-editor#open) method, with the `showRevisions` property enabled to display the tracked changes.

The following example code illustrates how to compare two documents (using static SFDT contents) and open the resultant document in the Document Editor.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
@page
@model IndexModel
@Html.AntiForgeryToken()

<button id="compare" class="e-btn e-primary" style="margin-bottom: 10px">Compare Documents</button>
<ejs-documenteditorcontainer id="container" height="590px" enableToolbar="false" showPropertiesPane="false" enableTrackChanges="true"></ejs-documenteditorcontainer>

<script>
    document.getElementById('compare').addEventListener('click', async function () {
        var token = document.querySelector('input[name="__RequestVerificationToken"]').value;
        // Compares the documents on the server side and gets the resultant SFDT.
        var response = await fetch('/?handler=Compare', {
            method: 'POST',
            headers: { 'RequestVerificationToken': token }
        });
        var sfdt = await response.text();
        var editor = document.getElementById('container').ej2_instances[0].documentEditor;
        editor.showRevisions = true;
        editor.open(sfdt);
    });
</script>
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using Syncfusion.EJ2.DocumentEditor;
using WDocument = Syncfusion.DocIO.DLS.WordDocument;
using WFormatType = Syncfusion.DocIO.FormatType;

public class IndexModel : PageModel
{
    // Static SFDT contents of the original and revised documents.
    private const string OriginalSfdt = "{\"sfdt\":\"UEsDBAoAAAAI...\"}";
    private const string RevisedSfdt = "{\"sfdt\":\"UEsDBAoAAAAI...\"}";

    public void OnGet()
    {
    }

    public IActionResult OnPostCompare()
    {
        using WDocument originalDocument = ToWordDocument(OriginalSfdt);
        using WDocument revisedDocument = ToWordDocument(RevisedSfdt);

        // Compares the original document with the revised document and marks the changes as tracked changes.
        originalDocument.Compare(revisedDocument);

        // Loads the compared document into the Document Editor WordDocument and serializes it as SFDT.
        WordDocument document = WordDocument.Load(originalDocument);
        string json = JsonConvert.SerializeObject(document);
        document.Dispose();
        return Content(json, "application/json");
    }

    private static WDocument ToWordDocument(string sfdt)
    {
        // Converts the SFDT content to a DocIO document through a DOCX stream.
        using Stream stream = WordDocument.Save(sfdt, FormatType.Docx);
        stream.Position = 0;
        return new WDocument(stream, WFormatType.Docx);
    }
}
{% endhighlight %}
{% endtabs %}

## View the comparison result with tracked changes in Document Editor

Once the resultant SFDT content is opened in the Document Editor, all the insertions and deletions are highlighted as tracked changes (revisions) in the document. You can accept or reject the revisions individually or all at once using the Review pane of the Document Editor.

N> [View sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-DOCX-Editor-Examples/tree/master/compare-documents).

## Online Demo

Explore how to compare Word documents side by side with the ASP.NET Core DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/comparedocuments#/tailwind3).
