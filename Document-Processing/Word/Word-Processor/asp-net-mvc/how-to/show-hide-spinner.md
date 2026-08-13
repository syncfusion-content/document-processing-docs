---
layout: post
title: How to Show and Hide Spinner in ASP.NET MVC DOCX Editor | Syncfusion
description: Show or hide loading indicators in Syncfusion® ASP.NET MVC DOCX Editor when opening documents and processing content.
platform: document-processing
control: Show or Hide a Spinner
documentation: ug
---


# How to Show and Hide Spinner in ASP.NET MVC DOCX Editor

Using the [`spinner`](https://ej2.syncfusion.com/aspnetcore/documentation/spinner/getting-started-asp-core) component, you can show or hide the spinner while opening a document in the Document Editor.

```typescript
// showSpinner() makes the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() hides the spinner
hideSpinner(document.getElementById('container'));
```


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/spinner/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Spinner.cs" %}
{% endhighlight %}
{% endtabs %}


N> In the above example, `setInterval` is used to hide the spinner for demo purposes only.
