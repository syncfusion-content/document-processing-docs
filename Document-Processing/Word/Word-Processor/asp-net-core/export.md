---
layout: post
title: Export in Document Editor Component | Syncfusion
description: Learn here all about Export in Syncfusion Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Export
documentation: ug
---


# Export in ASP.NET Core in Document Editor Component 

Document editor exports the document into various known file formats in client-side such as Microsoft Word document (.docx), text document (.txt), and its own format called **Syncfusion Document Text (.sfdt)**.

We are providing two types of save APIs  as mentioned below.

|API name|Purpose|Code Snippet for Document Editor|Code Snippet for Document Editor Container|
|--------|---------|----------|----------|
|save(filename,FormatType):void<br>FormatType: Sfdt or Docx or Txt|Creates the document with specified file name and format type. Then, the created file is downloaded in the client browser by default.|documenteditor.save('sample', 'Docx')|container.documentEditor.save('sample', 'Docx')|
|saveAsBlob(FormatType):Blob|Creates the document in specified format type and returns the created document as Blob.<br>This blob can be uploaded to your required server, database, or file path.|documenteditor.saveAsBlob('Docx')|container.documentEditor.saveAsBlob('Docx')|

## Sfdt export

The following example shows how to export documents in document editor as Syncfusion document text (.sfdt).


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/export-sfdt/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/export-sfdt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-container-sfdt/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-container-sfdt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



N>To enable Sfdt export for a document editor instance, set [`enableSfdtExport`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_EnableSfdtExport) to true.

## Word export

The following example shows how to export the document as Word document (.docx).


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/export-docx/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/export-docx/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-container-docx/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-container-docx/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N>To enable word export for a document editor instance, set [`enableWordExport`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_EnableWordExport) to true.

## Word Template Export 

The following example shows how to export the document as Word Template (.dotx).

>Note: The Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component's document pagination (page-by-page display) can't be guaranteed for all the Word documents to match the pagination of Microsoft Word application. For more information about [why the document pagination (page-by-page display) differs from Microsoft Word](../asp-net-core/import#why-the-document-pagination-differs-from-microsoft-word)


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/export-dotx/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/export-dotx/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-container-dotx/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-container-dotx/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Text export

The following example shows how to export document as text document (.txt).


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/export-txt/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/export-txt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-container-txt/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-container-txt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N>To enable text export for a document editor instance, set [`enableTextExport`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_EnableTextExport) to true.

## Export as blob

Document editor also supports API to store the document into a blob.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/export-blob/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/export-blob/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-container-blob/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-container-blob/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



For instance, to export the document as Rich Text Format file, implement an ASP.NET MVC web API controller using DocIO library by passing the DOCX blob.

```csharp
//API controller for the conversion.
[HttpPost]
public HttpResponseMessage ExportAsRtf()
{
    System.Web.HttpPostedFile data = HttpContext.Current.Request.Files[0];
    //Opens document stream
    WordDocument wordDocument = new WordDocument(data.InputStream);
    MemoryStream stream = new MemoryStream();
    //Converts document stream as RTF
    wordDocument.Save(stream, FormatType.Rtf);
    wordDocument.Close();
    stream.Position = 0;
    return new HttpResponseMessage() { Content = new StreamContent(stream) };
}
```

In client-side, you can consume this web service and save the document as Rich Text Format (.rtf) file.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/export-rtf/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/export-rtf/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## See Also

* [Feature modules](../asp-net-core/feature-module)
* [How to export the document as pdf](../asp-net-core/how-to/export-document-as-pdf).
