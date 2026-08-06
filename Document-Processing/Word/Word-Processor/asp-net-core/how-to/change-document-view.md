---
layout: post
title: Change Document View in ASP.NET Core DOCX Editor | Syncfusion
description: Learn here all about how to change document view in Syncfusion Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Change Document View
documentation: ug
---


# Change document view in ASP.NET Core Document Editor Component

## How to change the document view in DocumentEditor component

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) allows you to switch the document view between page layout (`Pages`) and continuous web layout (`Continuous`) using the [`layoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_LayoutType) property with the supported [`LayoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.LayoutType.html) values.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/web-layout/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/web-layout/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



N> Default value of [`layoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_LayoutType) in DocumentEditor and DocumentEditorContainer components is [`Pages`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.LayoutType.html).

## How to change the document view in DocumentEditorContainer component

DocumentEditorContainer component allows you to switch the document view between page layout (`Pages`) and continuous web layout (`Continuous`) using the [`layoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_LayoutType) property with the supported [`LayoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.LayoutType.html) values.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/web-layout/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/web-layout/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N> Default value of [`layoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_LayoutType) in DocumentEditorContainer component is [`Pages`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.LayoutType.html).