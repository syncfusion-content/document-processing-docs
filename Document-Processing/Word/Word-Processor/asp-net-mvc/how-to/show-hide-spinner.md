---
layout: post
title: Show Hide Spinner in ASP.NET MVC Document Editor Component
description: Learn here all about how to show hide spinner in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Show Hide Spinner
documentation: ug
---


# How to show and hide spinner while opening document in React Document Editor component

Using [`spinner`](https://ej2.syncfusion.com/aspnetcore/documentation/spinner/getting-started-asp-core/) component, you can show or hide spinner while opening document in DocumentEditor.

```typescript
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method used hide spinner
hideSpinner(document.getElementById('container'));
```


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/spinner/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Spinner.cs" %}
{% endhighlight %}{% endtabs %}



N> In above example, we have used setInterval to hide spinner, just for demo purpose.
