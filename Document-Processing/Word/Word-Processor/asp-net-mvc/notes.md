---
layout: post
title: Notes in ASP.NET MVC Document Editor Component
description: Learn here all about notes in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Notes
documentation: ug
---


# Insert footnote endnote

DocumentEditorContainer component provides support for inserting footnotes and endnotes through the in-built toolbar.

![Insert footnote endnote](images/note-toolbar.jpg)

The footnotes and endnotes are both ways of adding extra bits of information to your writing outside of the main text. You can use footnotes and endnotes to add side comments to your work or to place other publications like books, articles, or websites.

## Insert footnotes

Document editor exposes an API to insert footnotes at cursor position programmatically or can be inserted to the end of selected text.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/footnote/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/footnote/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



## Insert endnotes

Document editor exposes an API to insert endnotes at cursor position programmatically or can be inserted to the end of selected text.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/endnote/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/endnote/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



## Update or edit footnotes and endnotes

You can update or edit the footnotes and endnotes using the built-in context menu shown up by right-clicking it. The footnote endnote dialog box popup and you can customize the number format and start at.

![Update or edit footnotes and endnotes](images/notes-option.jpg)
