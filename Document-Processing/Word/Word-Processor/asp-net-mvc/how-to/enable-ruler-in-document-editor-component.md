---
layout: post
title: How to Enable Ruler in ASP.NET MVC DOCX Editor | Syncfusion
description: Enable the ruler in Syncfusion® ASP.NET MVC DOCX Editor to set margins, tab stops, and paragraph indentations for precise document formatting.
platform: document-processing
control: Enable Ruler
documentation: ug
---

# How to Enable Ruler in React ASP.NET MVC Editor

To enable the ruler, set the [`showRuler`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorSettings.html) property to `true` in the `documentEditorSettings` of the DOCX Editor component. By default, the ruler is disabled. The ruler can be used to set specific margins, tab stops, or indentations within a document to ensure consistent formatting.

## How to enable ruler in the DOCX Editor component

The following example illustrates how to enable the ruler in the DOCX Editor.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/ruler/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/ruler/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



## How to enable ruler in the Document Editor Container component

The following example illustrates how to enable the ruler in the Document Editor Container.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/ruler/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/ruler/document-editor.cs %}
{% endhighlight %}
{% endtabs %}