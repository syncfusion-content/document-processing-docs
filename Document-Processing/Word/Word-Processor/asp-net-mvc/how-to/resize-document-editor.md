---
layout: post
title: How to Resize in ASP.NET MVC DOCX Editor | Syncfusion
description: Adjust the height and width of the Syncfusion® ASP.NET MVC DOCX Editor to create responsive layouts and customize the document editing experience.
platform: document-processing
control: Resize Document Editor
documentation: ug
---


# How to Resize in ASP.NET MVC DOCX Editor 

This article explains how to change the height and width of the Document Editor.

## Change the height of the Document Editor

The DocumentEditorContainer initially renders with the default height. You can change the height of the Document Editor using the `height` property, the value of which is in pixels.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/change-height/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Change-height.cs" %}
{% endhighlight %}
{% endtabs %}


Similarly, you can use the `height` property for the DocumentEditor also.

## Change the width of the Document Editor

The DocumentEditorContainer initially renders with the default width. You can change the width of the Document Editor using the `width` property, the value of which is in percent.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/change-width/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Change-width.cs" %}
{% endhighlight %}
{% endtabs %}



Similarly, you can use the `width` property for the DocumentEditor also.

## Resize the Document Editor

Using the `resize` method, you can change the height and width of the Document Editor.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/resize/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Resize.cs" %}
{% endhighlight %}
{% endtabs %}

