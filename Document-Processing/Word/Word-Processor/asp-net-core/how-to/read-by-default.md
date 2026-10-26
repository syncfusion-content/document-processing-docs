---
layout: post
title: How to Open ASP.NET Core DOCX Editor in Read-Only Mode | Syncfusion
description: Open Syncfusion® ASP.NET Core DOCX Editor in read-only mode to prevent document modifications while allowing users to view content.
platform: document-processing
control: Read By Default
documentation: ug
---


# How to Open ASP.NET Core DOCX Editor in Read-Only Mode

This section explains how to open a document in read only mode by default in [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (DOCX Editor and Document Editor Container).

## Opening a document in read only mode by default in DOCX Editor

Using the [`isReadOnly`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_IsReadOnly) property in the DOCX Editor allows you to enable or disable read only mode in the DOCX Editor.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/read-only/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Read-only.cs" %}
{% endhighlight %}
{% endtabs %}


## Opening a document in read only mode by default in Document Editor Container

Using the [`restrictEditing`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_RestrictEditing) property in the Document Editor Container allows you to enable or disable read only mode in the DOCX Editor.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/read-only/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Read-only.cs" %}
{% endhighlight %}
{% endtabs %}


N> You can use the [`restrictEditing`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_RestrictEditing) in [`Document Editor Container`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html) and [`isReadOnly`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_IsReadOnly) in [`DOCX Editor`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html) based on your requirement to change component to read only mode.
