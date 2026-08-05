---
layout: post
title: Insert text, paragraph, and rich text in DOCX Editor | Syncfusion
description: Learn how to insert text, a paragraph, and rich-text content at the current cursor position in the Syncfusion ASP.NET Core DOCX Editor component.
platform: document-processing
control: Insert Text, Paragraph And Rich-Text Content
documentation: ug
---

# Insert text, paragraph, and rich text in Document Editor component

You can insert text, a paragraph, and rich-text content in the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) component.

## Insert text at the current cursor position

You can use the [`insertText`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#inserttext) API in the editor module to insert the text at the current cursor position.

The following example code illustrates how to add the text in the current selection.

```typescript
// It will insert the provided text in the current selection
this.container.documentEditor.editor.insertText('Syncfusion');
```

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/insert-text/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Insert-text.cs" %}
{% endhighlight %}
{% endtabs %}


## Insert a paragraph at the current cursor position

To insert a new paragraph at the current selection, you can use the [`insertText`] API with the parameter as `\r\n` or `\n`.

The following example code illustrates how to add a new paragraph in the current selection.

```typescript
// It will add a new paragraph in the current selection
this.container.documentEditor.editor.insertText('\n');
```

## Insert the rich-text content

To insert HTML content, you have to convert the HTML content to SFDT format using the [`web service`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor). Then use the [`paste`] API to insert the SFDT at the current cursor position.

N> The HTML string should be well-formatted HTML. [`DocIO`](https://help.syncfusion.com/file-formats/docio/html) supports only well-formatted XHTML.  

The following example illustrates how to insert the HTML content at the current cursor position.

* Send the HTML content to the server side for SFDT conversion. Refer to the following example to send the HTML content to the server side and insert it at the current cursor position.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/insert-rich-text/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Insert-rich-text.cs" %}
{% endhighlight %}
{% endtabs %}


* Refer to the following code example for the server-side web implementation for HTML conversion using the DocumentEditor.

```c#
//API controller for the conversion.
[HttpPost]
public string LoadString([FromBody]InputParameter data)
{
    // You can also load an HTML file/string from the server side.
    Syncfusion.EJ2.DocumentEditor.WordDocument document = Syncfusion.EJ2.DocumentEditor.WordDocument.LoadString(data.content, FormatType.Html); // Convert the HTML to SFDT format.
    string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
    document.Dispose();
    return json;
}

public class InputParameter
{
    public string content {get; set; }
}
```

N> The above example illustrates inserting HTML content. Similarly, you can insert any rich-text content by converting any of the supported file formats (DOCX, DOC, WordML, HTML, RTF) to SFDT.