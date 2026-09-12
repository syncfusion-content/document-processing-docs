---
layout: post
title: Import in ASP.NET Core DOCX Editor | Syncfusion
description: The Import feature in ASP.NET Core DOCX Editor enables users to load and edit documents from supported formats while preserving content structure.
platform: document-processing
control: Import
documentation: ug
---


# Import in ASP.NET Core DOCX Editor

In [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor), the documents are stored in its own format called **Syncfusion Document Text (SFDT)**.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/import/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/import/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Import document from local machine


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/import-sfdt/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/import-sfdt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



## Convert Word documents into SFDT

You can convert Word documents into SFDT format using the .NET Standard library [`Syncfusion.EJ2.WordEditor.AspNet.Core`](<https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Core/>) by the web API service implementation. This library helps you convert Word documents (.dotx, .docx, .docm, .dot, .doc), rich text format documents (.rtf), and text documents (.txt) into SFDT format.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/import-docx/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/import-docx/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


Here’s how to handle the server-side action for converting a Word document into SFDT.

```csharp
[AcceptVerbs("Post")]
public string Import(IFormCollection data)
{
    if (data.Files.Count == 0)
        return null;
    Stream stream = new MemoryStream();
    IFormFile file = data.Files[0];
    int index = file.FileName.LastIndexOf('.');
    string type = index > -1 && index < file.FileName.Length - 1 ?
        file.FileName.Substring(index) : ".docx";
    file.CopyTo(stream);
    stream.Position = 0;

    WordDocument document = WordDocument.Load(stream, GetFormatType(type.ToLower()));
    string sfdt = Newtonsoft.Json.JsonConvert.SerializeObject(document);
    document.Dispose();
    return sfdt;
}

internal static FormatType GetFormatType(string format)
{
    if (string.IsNullOrEmpty(format))
        throw new NotSupportedException("EJ2 DocumentEditor does not support this file format.");
    switch (format.ToLower()) {
        case ".dotx":
        case ".docx":
        case ".docm":
        case ".dotm":
            return FormatType.Docx;
        case ".dot":
        case ".doc":
            return FormatType.Doc;
        case ".rtf":
            return FormatType.Rtf;
        case ".txt":
            return FormatType.Txt;
        case ".xml":
            return FormatType.WordML;
        default:
            throw new NotSupportedException("EJ2 DocumentEditor does not support this file format.");
    }
}
```

## Opening a document in asynchronous mode

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) supports asynchronous document loading, which can be enabled using the enable property available in the openAsyncSettings API.

### Properties

**enable:** Enables or disables asynchronous document loading.
**initialPageLoadCount:** Number of pages to load initially when the document is opened.
**incrementalPageLoadCount:** Number of pages to load incrementally after initial pages load, during the asynchronous document-loading operation.

The following example shows how to open the document asynchronously in DOCX Editor.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/async-loading/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Async-loading.cs" %}
{% endhighlight %}
{% endtabs %}

N> When asynchronous loading is enabled, the document initially opens in read-only mode, allowing users to view the first set of pages while the remaining pages load in the background. During this time, the document can be viewed but cannot be edited or saved. Once loading is complete, editing and saving become available.

## See Also

* [Feature modules](../asp-net-core/feature-module)
