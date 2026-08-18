---
layout: post
title: How to Auto Save Document in ASP.NET MVC DOCX Editor | Syncfusion
description: Automatically save edited documents to the server at regular intervals in Syncfusion® ASP.NET MVC DOCX Editor to prevent data loss.
platform: document-processing
control: Auto Save Document In Document Editor
documentation: ug
---


# How to Auto Save Document in ASP.NET MVC DOCX Editor

In this article, we are going to see how to auto save the document to server. You can automatically save the edited content in regular intervals of time. It helps reduce the risk of data loss by saving an open document automatically at customized intervals.

The following example illustrates how to auto save the document on the server.

* In the client-side, using content change event, we can automatically save the edited content in regular intervals of time. Based on `contentChanged` boolean, the document is sent as DOCX format to server-side using [`saveAsBlob`] method.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/auto-save-server/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Auto-save-server.cs" %}
{% endhighlight %}
{% endtabs %}



* On the server-side, receive the stream content from client-side and persist it to the server or a database. Add Web API in controller file like below to save the document.

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
    return "Success";
}
```

## Online Demo

Explore how to automatically save Word documents using the ASP.NET MVC Document Editor in this [ASP.NET MVC Document Editor live demo](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/defaultfunctionalities#/tailwind3).

## See Also
* [Auto-save document in Document Editor](./auto-save-document-in-document-editor)
