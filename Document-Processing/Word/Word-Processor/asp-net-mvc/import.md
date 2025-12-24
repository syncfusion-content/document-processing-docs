---
layout: post
title: Import in ASP.NET MVC Document Editor Component | Syncfusion
description: Learn here all about Import in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Import
documentation: ug
---


# Importing in the ASP.NET MVC Document Editor Component

In Document Editor, the documents are stored in its own format called **Syncfusion Document Text (SFDT)**.

The following example shows how to open SFDT data in Document Editor.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/import/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/import/document-editor.cs %}
{% endhighlight %}
{% endtabs %}




## Import document from local machine

The following example shows how to import document from local machine.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/import-sfdt/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/import-sfdt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}




## Convert word documents into SFDT

You can convert word documents into SFDT format using the [`Syncfusion.EJ2.WordEditor.AspNet.MVC5`](<https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.MVC5/>) by the web API service implementation. This library helps you to convert word documents (.dotx,.docx,.docm,.dot,.doc), rich text format documents (.rtf), and text documents (.txt) into SFDT format. Refer to the following example.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/import-docx/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/import-docx/document-editor.cs %}
{% endhighlight %}
{% endtabs %}




Here’s how to handle the server-side action for converting word document in to SFDT.

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
## Enable Async (Lazy) Loading in Document Editor

Document Editor provides an option to enable Async (Lazy) Loading using the [`openAsyncSettings`] property.

* [`enable`] - Enables or disables async loading.
* [`initialPageLoadCount`] - Defines the number of pages rendered immediately when the document opens.
* [`incrementalPageLoadCount`] - Specifies how many pages load in each background batch after the initial set.

The following code shows the how to enable the Async loading in Document Editor.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/import-async/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/import-async/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

>Note: Users can view the pages already loaded, but all other interactions remain restricted until all pages finish loading.

## See Also

* [Feature modules](./feature-module)
