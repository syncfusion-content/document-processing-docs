---
layout: post
title: Import in ASP.NET MVC DOCX Editor | Syncfusion
description: The Import feature in ASP.NET MVC DOCX Editor enables users to load and edit documents from supported formats while preserving content structure.
platform: document-processing
control: Import
documentation: ug
---


# Import in ASP.NET MVC DOCX Editor

In [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor), documents are stored in its own format called **Syncfusion Document Text (SFDT)**.

The following example shows how to open SFDT data in DOCX Editor.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/import/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/import/document-editor.cs %}
{% endhighlight %}
{% endtabs %}




## Import a document from a local machine

The following example shows how to import a document from a local machine.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/import-sfdt/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/import-sfdt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}




## Convert Word documents into SFDT

You can convert Word documents into SFDT format using the [`Syncfusion.EJ2.WordEditor.AspNet.MVC5`](<https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.MVC5/>) by the web API service implementation. This library helps you to convert Word documents (.dotx, .docx, .docm, .dot, .doc), rich text format documents (.rtf), and text documents (.txt) into SFDT format. Refer to the following example.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/import-docx/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/import-docx/document-editor.cs %}
{% endhighlight %}
{% endtabs %}




Here's how to handle the server-side action for converting a Word document into SFDT.

```csharp
[HttpPost]
public HttpResponseMessage Import()
{
    if (HttpContext.Current.Request.Files.Count == 0)
    return null;

    HttpPostedFile file = HttpContext.Current.Request.Files[0];
    int index = file.FileName.LastIndexOf('.');
    string type = index > -1 && index < file.FileName.Length - 1 ?
    file.FileName.Substring(index) : ".docx";
    Stream stream = file.InputStream;
    stream.Position = 0;

    EJ2WordDocument document = EJ2WordDocument.Load(stream, GetFormatType(type.ToLower()));
    string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
    document.Dispose();
    stream.Close();
    return new HttpResponseMessage() { Content = new StringContent(json) };
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

Documents can be loaded asynchronously using the `openAsyncSettings` API to improve the initial loading experience by opening the document while remaining pages load in the background.

### Properties

Configure asynchronous loading using these properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **enable** | boolean | `false` | Enables or disables asynchronous document loading. |
| **initialPageLoadCount** | number | `5` | Number of pages to load immediately when the document opens. Recommended values: 3-10 |
| **incrementalPageLoadCount** | number | `3` | Number of pages to load in each batch during background loading. Recommended values: 2-5 |

The following example demonstrates how to configure and enable asynchronous document loading:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/async-loading/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Async-loading.cs" %}
{% endhighlight %}
{% endtabs %}

N> When asynchronous loading is enabled, the document initially opens in read-only mode, allowing users to view the first set of pages while the remaining pages continue loading in the background. During this loading process, editing and saving are disabled. Once the document has fully loaded, all content becomes editable and the document can be saved.

## See Also

* [Feature modules](./feature-module)
