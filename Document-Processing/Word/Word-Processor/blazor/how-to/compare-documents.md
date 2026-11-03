---
layout: post
title: How to Compare Word Documents in Blazor DOCX Editor | Syncfusion
description: Learn how to compare two Word documents using DocIO and view the resultant document with tracked changes in Syncfusion® Blazor DOCX Editor.
platform: document-processing
control: DOCX Editor
documentation: ug
---

# How to Compare Word Documents in Blazor DOCX Editor

In this article, we are going to see how to compare two Word documents and view the resultant document with tracked changes in the [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor).

Document comparison is performed with the [Syncfusion<sup style="font-size:70%">&reg;</sup> .NET Word library (DocIO)](https://www.syncfusion.com/document-sdk/net-word-library). It highlights the following changes as tracked changes:

* Insertions
* Deletions

After the comparison, the resultant document is opened in the Document Editor, where you can view the inserted and deleted changes as revisions, and accept or reject them using the Review pane.

## Compare documents using DocIO

The following steps illustrate how to compare the documents:

* Install the [`Syncfusion.DocIO.Net.Core`](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core) NuGet package in the Blazor application.
* Convert the original and revised SFDT contents to DocIO `WordDocument` instances using the `WordDocument.Save` method of the Document Editor library.
* Compare the documents using the `Compare` method of DocIO. The changes are marked as tracked changes in the original document.
* Load the compared document into the Document Editor `WordDocument` instance using the `WordDocument.Load` method and serialize it as SFDT.
* Open the resultant SFDT in the Document Editor using the [`OpenAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditor_OpenAsync_System_String_) method, with the `ShowRevisions` property enabled to display the tracked changes.

The following example code illustrates how to compare two documents (using static SFDT contents) and open the resultant document in the Document Editor.

```razor
@page "/"

@using System.Text.Json
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.DocumentEditor
@using WDocument = Syncfusion.DocIO.DLS.WordDocument
@using WFormatType = Syncfusion.DocIO.FormatType

<SfButton CssClass="e-primary" OnClick="CompareDocumentsAsync">Compare Documents</SfButton>
<SfDocumentEditorContainer @ref="container" EnableToolbar="false" ShowPropertiesPane="false" EnableTrackChanges="true" Height="590px">
</SfDocumentEditorContainer>

@code {
    private SfDocumentEditorContainer? container;

    // Static SFDT contents of the original and revised documents.
    private const string OriginalSfdt = "{\"sections\":[{\"blocks\":[{\"inlines\":[{\"text\":\"Syncfusion Document Editor lets you create Word documents.\"}]},{\"inlines\":[{\"text\":\"This paragraph is removed in the revised document.\"}]}],\"headersFooters\":{}}]}";
    private const string RevisedSfdt = "{\"sections\":[{\"blocks\":[{\"inlines\":[{\"text\":\"Syncfusion Document Editor lets you create and edit Word documents.\"}]},{\"inlines\":[{\"text\":\"This paragraph is added in the revised document.\"}]}],\"headersFooters\":{}}]}";

    private async Task CompareDocumentsAsync()
    {
        if (container == null) return;

        // Compare the documents and get the resultant SFDT.
        string sfdt = CompareDocuments(OriginalSfdt, RevisedSfdt);

        SfDocumentEditor editor = container.DocumentEditor;
        editor.ShowRevisions = true;
        await editor.OpenAsync(sfdt);
    }

    private static string CompareDocuments(string originalSfdt, string revisedSfdt)
    {
        using WDocument originalDocument = ToWordDocument(originalSfdt);
        using WDocument revisedDocument = ToWordDocument(revisedSfdt);

        // Compares the original document with the revised document and marks the changes as tracked changes.
        originalDocument.Compare(revisedDocument);

        // Loads the compared document into the Document Editor WordDocument and serializes it as SFDT.
        WordDocument document = WordDocument.Load(originalDocument);
        string json = JsonSerializer.Serialize(document);
        document.Dispose();
        return json;
    }

    private static WDocument ToWordDocument(string sfdt)
    {
        // Converts the SFDT content to a DocIO document through a DOCX stream.
        using WDocument sfdtDocument = WordDocument.Save(sfdt);
        MemoryStream stream = new MemoryStream();
        sfdtDocument.Save(stream, WFormatType.Docx);
        stream.Position = 0;
        return new WDocument(stream, WFormatType.Docx);
    }
}
```

## View the comparison result with tracked changes in Document Editor

Once the resultant SFDT content is opened in the Document Editor, all the insertions and deletions are highlighted as tracked changes (revisions) in the document. You can accept or reject the revisions individually or all at once using the Review pane of the Document Editor.

N> [View sample in GitHub](https://github.com/SyncfusionExamples/Blazor-DOCX-Editor-Examples/tree/master/compare-documents).
