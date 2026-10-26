---
layout: post
title: How to Resize in ASP.NET Core DOCX Editor | Syncfusion
description: Adjust the height and width of the Syncfusion® ASP.NET Core DOCX Editor to create responsive layouts and customize the document editing experience.
platform: document-processing
control: Resize DOCX Editor
documentation: ug
---


# How to Resize in ASP.NET Core DOCX Editor 

This section explains how to change height and width of [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor).

## Change height of DOCX Editor

DocumentEditorContainer initially renders with a default height. You can change the height of the DOCX Editor using the `height` property, the value of which is in pixels.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/change-height/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Change-height.cs" %}
{% endhighlight %}
{% endtabs %}



Similarly, you can use the `height` property for DocumentEditor also.

## Change width of DOCX Editor

DocumentEditorContainer initially renders with a default width. You can change the width of the DOCX Editor using the `width` property, the value of which is in percent.



{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/change-width/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Change-width.cs" %}
{% endhighlight %}
{% endtabs %}



Similarly, you can use the `width` property for DocumentEditor also.

## Resize DOCX Editor

Using the `resize` method, you can change the height and width of the DOCX Editor.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/resize/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Resize.cs" %}
{% endhighlight %}
{% endtabs %}

