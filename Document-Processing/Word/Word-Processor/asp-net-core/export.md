---
layout: post
title: Export in DOCX Editor Component | Syncfusion
description: Learn here all about Export in Syncfusion DOCX Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Export
documentation: ug
---


# Export in ASP.NET Core DOCX Editor Component

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) exports the document into various known file formats on the client side, such as Microsoft Word document (.docx), Word Template (.dotx), text document (.txt), and its own format called **Syncfusion Document Text (.sfdt)**. Rich Text Format (.rtf) export is also supported via a server-side conversion.

We are providing two types of save APIs as mentioned below.

|API name|Purpose|Code Snippet for DOCX Editor|Code Snippet for DOCX Editor Container|
|--------|---------|----------|----------|
|save(filename,FormatType):void<br>FormatType: Sfdt or Docx or Dotx or Txt|Creates the document with specified file name and format type. Then, the created file is downloaded in the client browser by default.|documenteditor.save('sample', 'Docx')|container.documentEditor.save('sample', 'Docx')|
|saveAsBlob(FormatType):Blob|Creates the document in specified format type and returns the created document as Blob.<br>This blob can be uploaded to your required server, database, or file path.|documenteditor.saveAsBlob('Docx')|container.documentEditor.saveAsBlob('Docx')|

## Sfdt export

The following example shows how to export documents in DOCX Editor as Syncfusion document text (.sfdt).


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



N> To enable Sfdt export for a DOCX Editor instance, set [`enableSfdtExport`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_EnableSfdtExport) to true.

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


N> To enable Word export for a DOCX Editor instance, set [`enableWordExport`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_EnableWordExport) to true.

## Word Template Export 

The following example shows how to export the document as Word Template (.dotx).

>Note: The Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor component's document pagination (page-by-page display) can't be guaranteed for all the Word documents to match the pagination of Microsoft Word application. For more information about [why the document pagination (page-by-page display) differs from Microsoft Word](../asp-net-core/import#why-the-document-pagination-differs-from-microsoft-word).


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


N> To enable text export for a DOCX Editor instance, set [`enableTextExport`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_EnableTextExport) to true.

## Export as blob

DOCX Editor also supports API to store the document into a blob.

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



For instance, to export the document as a Rich Text Format file, implement an ASP.NET Core web API controller that uses the **Syncfusion.DocIO** package (install it on the server project from NuGet) and converts the DOCX blob to RTF.

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

On the client side, you can consume this web service and save the document as a Rich Text Format (.rtf) file.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/export-rtf/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/export-rtf/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

## Online Demo

Explore how to export Word documents in various formats using the ASP.NET Core DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/export#/tailwind3).

## See Also

* [Feature modules](../asp-net-core/feature-module)
* [How to export the document as pdf](../asp-net-core/how-to/export-document-as-pdf).
