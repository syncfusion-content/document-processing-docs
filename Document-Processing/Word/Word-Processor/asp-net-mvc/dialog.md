---
layout: post
title: Dialog in ASP.NET MVC Document Editor Component | Syncfusion
description: Learn here all about dialog in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Dialog
documentation: ug
---


# Dialog in ASP.NET MVC in Document Editor Component

Document Editor provides dialog support to major operations such as insert or edit hyperlink, formatting text, paragraph, style, list and table properties.

## Font Dialog

Font dialog allows to modify all text properties for selected contents at once such as bold, italic, underline, font size, font color, strikethrough, subscript and superscript.

N>To enable font dialog for a document editor instance, set ‘enableFontDialog’ to true.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}




## Paragraph dialog

This dialog allows modifying the paragraph formatting for selection at once such as text alignment, indentation, and spacing.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/paragraph-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Paragraph-dialog.cs" %}
{% endhighlight %}{% endtabs %}




## Table dialog

This dialog allows creating and inserting a table at cursor position by specifying the required number of rows and columns.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/table-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Table-dialog.cs" %}
{% endhighlight %}{% endtabs %}




## Bookmark dialog

This dialog allows to perform the following operations:

* View all bookmarks.
* Navigate to a bookmark.
* Create a bookmark at current selection.
* Delete an existing bookmark.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/bookmark-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Bookmark-dialog.cs" %}
{% endhighlight %}{% endtabs %}




## Hyperlink dialog

This dialog allows editing or inserting a hyperlink at cursor position.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/hyperlink-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hyperlink-dialog.cs" %}
{% endhighlight %}{% endtabs %}




## Table of contents dialog

This dialog allows creating and inserting table of contents at cursor position. If the table of contents already exists at cursor position, you can customize its properties.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/table-of-contents-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Table-of-contents-dialog.cs" %}
{% endhighlight %}{% endtabs %}




## Styles Dialog

This dialog allows managing the styles in a document. It will display all the styles in the document with options to modify the properties of the existing style or create new style with the help of ‘Style dialog’.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/styles-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Styles-dialog.cs" %}
{% endhighlight %}{% endtabs %}




## Style dialog

You can directly use this dialog for modifying any existing style or add new style by providing the style name.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/style-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Style-dialog.cs" %}
{% endhighlight %}{% endtabs %}




## List dialog

This dialog allows creating a new list or modifying existing lists in the document.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/list-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="List-dialog.cs" %}
{% endhighlight %}{% endtabs %}



## Borders and shading dialog

This dialog allows customizing the border style, border width, and background color of the table or selected cells.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/borders-shading-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Borders-and-shading-dialog.cs" %}
{% endhighlight %}{% endtabs %}



## Table options dialog

This dialog allows customizing the default cell margins and spacing between each cells of the selected table.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/table-options-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Table-options-dialog.cs" %}
{% endhighlight %}{% endtabs %}




## Table properties dialog

This dialog allows customizing the table, row, and cell properties of the selected table.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/table-properties-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Table-properties-dialog.cs" %}
{% endhighlight %}{% endtabs %}




## Page setup dialog

This dialog allows customizing margins, size, and layout options for pages of the section.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/page-setup-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Page-setup-dialog.cs" %}
{% endhighlight %}{% endtabs %}



## See Also

* [Feature module](./feature-module)
