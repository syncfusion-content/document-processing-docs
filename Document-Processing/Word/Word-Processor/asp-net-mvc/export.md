---
layout: post
title: Export in ASP.NET MVC Document Editor Component | Syncfusion
description: Learn here all about Export in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Export
documentation: ug
---


# Export in ASP.NET MVC in Document Editor Component 

Document editor exports the document into various known file formats in client-side such as Microsoft Word document (.docx), text document (.txt), and its own format called **Syncfusion Document Text (.sfdt)**.

We are providing two types of save APIs  as mentioned below.

|API name|Purpose|Code Snippet for Document Editor|Code Snippet for Document Editor Container|
|--------|---------|----------|----------|
|save(filename,FormatType):void<br>FormatType: Sfdt or Docx or Txt|Creates the document with specified file name and format type. Then, the created file is downloaded in the client browser by default.|documenteditor.save('sample', 'Docx')|container.documentEditor.save('sample', 'Docx')|
|saveAsBlob(FormatType):Blob|Creates the document in specified format type and returns the created document as Blob.<br>This blob can be uploaded to your required server, database, or file path.|documenteditor.saveAsBlob('Docx')|container.documentEditor.saveAsBlob('Docx')|

## Sfdt export

The following example shows how to export documents in document editor as Syncfusion document text (.sfdt).



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/export-sfdt/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/export-sfdt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/export-container-sfdt/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/export-container-sfdt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



N>To enable Sfdt export for a document editor instance, set [`enableSfdtExport`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_EnableSfdtExport) to true.

## Word export

The following example shows how to export the document as Word document (.docx).



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/export-docx/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/export-docx/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/export-container-docx/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/export-container-docx/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



N>To enable word export for a document editor instance, set [`enableWordExport`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_EnableWordExport) to true.

## Word Template Export 

The following example shows how to export the document as Word Template (.dotx).

>Note: The Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component's document pagination (page-by-page display) can't be guaranteed for all the Word documents to match the pagination of Microsoft Word application. For more information about [why the document pagination (page-by-page display) differs from Microsoft Word](./import#why-the-document-pagination-differs-from-microsoft-word)



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/export-dotx/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/export-dotx/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/export-container-dotx/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/export-container-dotx/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Text export

The following example shows how to export document as text document (.txt).



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/export-txt/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/export-txt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/export-container-txt/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/export-container-txt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}




N>To enable text export for a document editor instance, set [`enableTextExport`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_EnableTextExport) to true.

## Export as blob

Document editor also supports API to store the document into a blob.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/export-blob/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Export-blob.cs" %}
{% endhighlight %}{% endtabs %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/export-container-blob/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Export-blob.cs" %}
{% endhighlight %}{% endtabs %}



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
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/export-rtf/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Export-rtf.cs" %}
{% endhighlight %}{% endtabs %}




## See Also

* [Feature modules](./feature-module)
* [How to export the document as pdf](./how-to/export-document-as-pdf).
