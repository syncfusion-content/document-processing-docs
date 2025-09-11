---
layout: post
title: Auto Save Document in Document Editor Component | Syncfusion
description: Learn here all about Auto save document in document editor in Syncfusion Document Editor component of syncfusion and more.
platform: document-processing
control: Auto Save Document In Document Editor
documentation: ug
---


# Auto save document in Document editor control

In this article, we are going to see how to auto save the document to server. You can automatically save the edited content in regular intervals of time. It helps reduce the risk of data loss by saving an open document automatically at customized intervals.

The following example illustrates how to auto save the document in server.

* In the client-side, using content change event, we can automatically save the edited content in regular intervals of time. Based on `contentChanged` boolean, the document send as DOCX format to server-side using [`saveAsBlob`] method.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/auto-save-server/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/auto-save-server/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



* In server-side, Receives the stream content from client-side and process it to save the document in Server or Database from the received stream. Add Web API in controller file like below to save the document.

```c#
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("AutoSave")]
public string AutoSave()
{
    IFormFile file = HttpContext.Request.Form.Files[0];
    Stream stream = new MemoryStream();    
    file.CopyTo(stream);
    //Save the stream to database or server as per the requirement.
    stream.Close();
    return "Sucess";
}
```

## See Also
* [AutoSave document in DocumentEditor](./auto-save-document-in-document-editor)
