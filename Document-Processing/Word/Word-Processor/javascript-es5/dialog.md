---
layout: post
title: Dialogs in JavaScript DOCX Editor | Syncfusion
description: The dialogs in JavaScript DOCX Editor provides built-in dialogs to edit text, paragraphs, tables, bookmarks, and other document elements.
platform: document-processing
control: Dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Dialogs in JavaScript DOCX Editor

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) provides dialog support for major operations such as inserting or editing hyperlinks, and formatting text, paragraph, style, list, and table properties.

## Font Dialog

The Font dialog allows you to modify all text properties for selected contents at once, such as bold, italic, underline, font size, font color, strikethrough, subscript, and superscript.

>DOCX Editor features are segregated into individual feature-wise modules. To enable the Font dialog for a DOCX Editor instance, set 'enableFontDialog' to true along with the required modules ('enableSelection', 'enableEditor') in the DocumentEditor constructor.

Refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs2" %}

## Paragraph dialog

This dialog allows modifying the paragraph formatting for the selection at once, such as text alignment, indentation, and spacing.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs3" %}

## Table dialog

This dialog allows creating and inserting a table at the cursor position by specifying the required number of rows and columns.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs4" %}

## Bookmark dialog

This dialog allows you to perform the following operations:

* View all bookmarks.
* Navigate to a bookmark.
* Create a bookmark at the current selection.
* Delete an existing bookmark.
To open this dialog, refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs5" %}

## Hyperlink dialog

This dialog allows editing or inserting a hyperlink at the cursor position.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs6" %}

## Table of contents dialog

This dialog allows creating and inserting a table of contents at the cursor position. If the table of contents already exists at the cursor position, you can customize its properties.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs7" %}

## Styles Dialog

This dialog allows managing the styles in a document. It will display all the styles in the document with options to modify the properties of the existing style or create a new style with the help of the 'Style dialog'. Refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs8" %}

## Style dialog

You can directly use this dialog for modifying any existing style or adding a new style by providing the style name.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs9" %}

## List dialog

This dialog allows creating a new list or modifying existing lists in the document.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs10" %}

## Borders and shading dialog

This dialog allows customizing the border style, border width, and background color of the table or selected cells.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs11" %}

## Table options dialog

This dialog allows customizing the default cell margins and spacing between each cell of the selected table.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs12" %}

## Table properties dialog

This dialog allows customizing the table, row, and cell properties of the selected table.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs13" %}

## Page setup dialog

This dialog allows customizing margins, size, and layout options for the pages of the section.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs14" %}

## Column dialog

This dialog allows the end user to customize the number of columns, column width, and space between columns for the pages in a section.

To open this dialog, refer to the following example.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs15" %}

## See Also

* [Feature module](./feature-module)