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
* Create a Web API in the controller that accepts the original and revised files. On the server side, convert the SFDT contents to DocIO `WordDocument` instances using the `WordDocument.Save` method of the Document Editor library.
* Compare the documents using the `Compare` method of DocIO. The changes are marked as tracked changes in the original document.
* Load the compared document into the Document Editor `WordDocument` instance using the `WordDocument.Load` method and return it as SFDT from the Web API.
* On the client side, call the Web API to get the resultant SFDT and open the resultant SFDT in the Document Editor using the [`open`](https://ej2.syncfusion.com/aspnetcore/documentation/api/document-editor#open) method, with the `showRevisions` property enabled to display the tracked changes.

The following example code illustrates how to compare two documents (using static SFDT contents) and open the resultant document in the Document Editor. The static SFDT contents are kept in the `wwwroot/data` folder (`original.json` and `revised.json`) and are shortened here.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
@page
@model IndexModel

<button id="compare" class="e-btn e-primary" style="margin-bottom: 10px">Compare Documents</button>
<ejs-documenteditorcontainer id="container" height="590px" enableToolbar="false" showPropertiesPane="false" enableTrackChanges="true"></ejs-documenteditorcontainer>

<script>
    // Loads the static SFDT contents as files, as the Web API accepts the original and revised files.
    async function getSfdtFile(url, fileName) {
        var response = await fetch(url);
        return new File([await response.text()], fileName);
    }

    document.getElementById('compare').addEventListener('click', async function () {
        var formData = new FormData();
        formData.append('OriginalFile', await getSfdtFile('/data/original.json', 'original.sfdt'));
        formData.append('RevisedFile', await getSfdtFile('/data/revised.json', 'revised.sfdt'));
        // Compares the documents using the Web API and gets the resultant SFDT.
        var response = await fetch('/api/DocumentEditor/CompareDocuments', { method: 'POST', body: formData });
        var sfdt = await response.text();
        var editor = document.getElementById('container').ej2_instances[0].documentEditor;
        editor.showRevisions = true;
        editor.open(sfdt);
    });
</script>
{% endhighlight %}
{% highlight c# tabtitle="DocumentEditorController.cs" %}
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.DocumentEditor;
using WDocument = Syncfusion.DocIO.DLS.WordDocument;
using WFormatType = Syncfusion.DocIO.FormatType;

namespace CompareDocuments.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentEditorController : ControllerBase
    {
        [AcceptVerbs("Post")]
        [HttpPost]
        [EnableCors("AllowAllOrigins")]
        [Route("CompareDocuments")]
        public string? CompareDocuments([FromForm] CompareParameter data)
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
                        // Compares the original document with the revised document and highlights the changes as tracked changes.
                        originalDocument.Compare(revisedDocument);
                        // Hooks MetafileImageParsed event.
                        WordDocument.MetafileImageParsed += OnMetafileImageParsed;
                        // Loads the compared document into the WordDocument instance of the Document Editor server-side library.
                        WordDocument document = WordDocument.Load(originalDocument);
                        // Unhooks MetafileImageParsed event.
                        WordDocument.MetafileImageParsed -= OnMetafileImageParsed;
                        // Serializes the compared document as SFDT content.
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
            public IFormFile? OriginalFile { get; set; }
            public IFormFile? RevisedFile { get; set; }
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
                // Converts the SFDT content to DOCX format for comparison.
                using (var reader = new StreamReader(stream))
                {
                    string sfdtContent = reader.ReadToEnd();
                    document = WordDocument.Save(sfdtContent);
                    var outStream = new MemoryStream();
                    document.Save(outStream, WFormatType.Docx);
                    document.Close();
                    return new WDocument(outStream, WFormatType.Docx);
                }
            }
            else
            {
                // Loads the DOCX document for comparison.
                document = new WDocument(stream, GetWFormatType(type));
                stream.Dispose();
                return document;
            }
        }

        private static WFormatType GetWFormatType(string format)
        {
            return format.ToLower() switch
            {
                ".dotx" => WFormatType.Dotx,
                ".docm" => WFormatType.Docm,
                ".dotm" => WFormatType.Dotm,
                ".docx" => WFormatType.Docx,
                ".rtf" => WFormatType.Rtf,
                ".txt" => WFormatType.Txt,
                ".xml" => WFormatType.WordML,
                _ => WFormatType.Docx,
            };
        }

        private static void OnMetafileImageParsed(object? sender, MetafileImageParsedEventArgs args)
        {
            // Metafile (EMF/WMF) images are not rendered on the server, so the default handling is kept.
        }
    }
}
{% endhighlight %}
{% endtabs %}

## View the comparison result with tracked changes in Document Editor

Once the resultant SFDT content is opened in the Document Editor, all the insertions and deletions are highlighted as tracked changes (revisions) in the document. You can accept or reject the revisions individually or all at once using the Review pane of the Document Editor.

N> [View sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-DOCX-Editor-Examples/tree/master/compare-documents).

## Online Demo

Explore how to compare Word documents side by side with the ASP.NET Core DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/comparedocuments#/tailwind3).
