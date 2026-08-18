---
layout: post
title: How to Show and Hide Spinner in ASP.NET Core DOCX Editor | Syncfusion
description: Show or hide loading indicators in Syncfusion® ASP.NET Core DOCX Editor when opening documents and processing content.
platform: document-processing
control: Show Hide Spinner
documentation: ug
---


# How to Show and Hide Spinner in ASP.NET Core DOCX Editor

Using the [`spinner`](https://ej2.syncfusion.com/aspnetcore/documentation/spinner/getting-started-asp-core) component, you can show or hide the spinner while opening a document in [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor).

```typescript
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method is used to hide the spinner
hideSpinner(document.getElementById('container'));
```


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/spinner/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Spinner.cs" %}
{% endhighlight %}
{% endtabs %}


N> In the above example, we have used setInterval to hide spinner, just for demo purposes.
