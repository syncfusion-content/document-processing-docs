---
layout: post
title: Deploy Document Editor For Mobile in ASP.NET MVC | Syncfusion
description: Learn here all about deploy document editor component for mobile in Syncfusion ASP.NET MVC Document Editor component of syncfusion and more.
platform: document-processing
control: Deploy Document Editor Component For Mobile
documentation: ug
---


# Deploy Document Editor component for Mobile

## Document editor component for Mobile

At present, Document editor component is not responsive for mobile, and the editing functionalities aren't ensured in mobile browsers. Whereas it works properly as a document viewer in mobile browsers.

Hence, it is recommended to switch the Document editor component as read-only in mobile browsers. Also, invoke `fitPage` method with `FitPageWidth` parameter in document change event, such as to display one full page by adjusting the zoom factor.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/mobile-view/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Mobile-view.cs" %}
{% endhighlight %}{% endtabs %}



N> You can use the [`restrictEditing`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_RestrictEditing) in DocumentEditorContainer and [`isReadOnly`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_IsReadOnly) in DocumentEditor based on your requirement to change component to read only mode.
