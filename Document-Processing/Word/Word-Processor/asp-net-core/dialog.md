---
layout: post
title: Dialog in Document Editor Component | Syncfusion
description: Learn here all about dialog in Syncfusion Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Dialog
documentation: ug
---


# Dialog in ASP.NET Core in Document Editor Component

Document Editor provides dialog support to major operations such as insert or edit hyperlink, formatting text, paragraph, style, list and table properties.

## Font Dialog

Font dialog allows to modify all text properties for selected contents at once such as bold, italic, underline, font size, font color, strikethrough, subscript and superscript.

N>To enable font dialog for a document editor instance, set ‘enableFontDialog’ to true.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Paragraph dialog

This dialog allows modifying the paragraph formatting for selection at once such as text alignment, indentation, and spacing.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/paragraph-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/paragraph-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Table dialog

This dialog allows creating and inserting a table at cursor position by specifying the required number of rows and columns.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/table-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/table-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Bookmark dialog

This dialog allows to perform the following operations:

* View all bookmarks.
* Navigate to a bookmark.
* Create a bookmark at current selection.
* Delete an existing bookmark.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/bookmark-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/bookmark-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Hyperlink dialog

This dialog allows editing or inserting a hyperlink at cursor position.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/hyperlink-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/hyperlink-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Table of contents dialog

This dialog allows creating and inserting table of contents at cursor position. If the table of contents already exists at cursor position, you can customize its properties.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/table-of-contents-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/table-of-contents-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Styles Dialog

This dialog allows managing the styles in a document. It will display all the styles in the document with options to modify the properties of the existing style or create new style with the help of ‘Style dialog’.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/styles-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/styles-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Style dialog

You can directly use this dialog for modifying any existing style or add new style by providing the style name.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/style-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/style-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## List dialog

This dialog allows creating a new list or modifying existing lists in the document.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/list-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/list-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Borders and shading dialog

This dialog allows customizing the border style, border width, and background color of the table or selected cells.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/borders-shading-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/borders-shading-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Table options dialog

This dialog allows customizing the default cell margins and spacing between each cells of the selected table.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/table-options-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/table-options-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Table properties dialog

This dialog allows customizing the table, row, and cell properties of the selected table.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/table-properties-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/table-properties-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Page setup dialog

This dialog allows customizing margins, size, and layout options for pages of the section.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/page-setup-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/page-setup-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## See Also

* [Feature module](../asp-net-core/feature-module)
