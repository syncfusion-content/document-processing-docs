---
layout: post
title:  How to Insert Page Numbers in ASP.NET Core DOCX Editor | Syncfusion
description: Insert page numbers and navigate to specific pages in Syncfusion® ASP.NET Core DOCX Editor using built-in APIs for efficient document navigation and formatting.
platform: document-processing
control: Insert Page number And Navigate To Specific Page
documentation: ug
---

# How to Insert Page Numbers and Navigate in ASP.NET Core DOCX Editor

You can insert a page number and navigate to a specific page in the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) component in the following ways.

## Insert page number

You can use the [`insertPageNumber`] API in the editor module to insert the page number at the current cursor position. By default, the page number will be inserted in Arabic number style. You can change it by providing the number style in the parameter.

N> Currently, the DOCX Editor has options to insert a page number at the current cursor position.

The following example code illustrates how to insert a page number in the header.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/insert-page-number/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Insert-page-number.cs" %}
{% endhighlight %}
{% endtabs %}


You can also use the [`insertField`] API in the Editor module to insert the page number at the current position.

```typescript
//Current page number
container.documentEditor.editor.insertField('PAGE \* MERGEFORMAT', '1');
```

## Get page count

You can use the [`pageCount`] API to get the total number of pages in the document.

The following example code illustrates how to get the number of pages in the document.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/page-count/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Page-count.cs" %}
{% endhighlight %}
{% endtabs %}


## Navigate to specific page

You can use the [`goToPage`] API in the Selection module to move the selection to the start of the specified page number.

The following example code illustrates how to move the selection to a specific page.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/go-to-page/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Go-to-page.cs" %}
{% endhighlight %}
{% endtabs %}

