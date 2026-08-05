---
layout: post
title: Change Document View in ASP.NET MVC DOCX Editor Component | Syncfusion
description: Learn here all about how to change document view in Syncfusion ASP.NET MVC DOCX Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Change Document View
documentation: ug
---


# Change document view in ASP.NET MVC DOCX Editor component

## How to change the document view

DocumentEditor allows you to change the view to web layout and print using the [`layoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_LayoutType) property with the supported [`LayoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.LayoutType.html) (`Continuous` for web layout, `Pages` for print layout).


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/web-layout/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Web-layout.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/web-layout/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



N> Default value of [`layoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_LayoutType) in DocumentEditor component is [`Pages`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.LayoutType.html).

## How to change the document view in DocumentEditorContainer component

DocumentEditorContainer component allows you to change the view to web layout and print using the [`layoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_LayoutType) property with the supported [`LayoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.LayoutType.html) (`Continuous` for web layout, `Pages` for print layout). DocumentEditorContainer is the toolbar-included wrapper around DocumentEditor; use it when you need the built-in toolbar.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/web-layout/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Web-layout.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/web-layout/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



N> Default value of [`layoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_LayoutType) in DocumentEditorContainer component is [`Pages`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.LayoutType.html).