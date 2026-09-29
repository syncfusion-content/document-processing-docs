---
title: Document Properties in UWP DOCX Editor | Syncfusion
description: The document properties in UWP DOCX Editor track document statistics, enabling easy access to word count, paragraph count, and pages count.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: word-count,paragraph-count,page-count,current-page-number,selection-changed
---
# Document Properties in UWP DOCX Editor
RichTexBox keep tracking the statistics about your documents. These statistics contains information about word count, paragraph count and pages count.

[`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) keeps track of statistics about your document. These statistics contain information about word count, paragraph count, and page count. The following sections describe each statistic and how to retrieve it.

## Word count
SfRichTextBoxAdv automatically counts the number of words in a document while you type. You can get the word count from the [`WordCount`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_UI_Xaml_RichTextBoxAdv_SfRichTextBoxAdv_WordCount) property. The default value of this property is 0.

The following sample code demonstrates how to get the total number of words in the document.

{% tabs %}
{% highlight Xaml %}
<TextBlock Text="{Binding Path=WordCount, Mode=TwoWay}"  />

{% endhighlight %}
{% highlight C# %}
int wordCount = richTextBoxAdv.WordCount;

{% endhighlight %}
{% highlight VB %}
Dim wordCount As Integer = richTextBoxAdv.WordCount

{% endhighlight %}
{% endtabs %}

## Paragraph count
SfRichTextBoxAdv automatically counts the number of paragraphs in a document while you type. You can get the paragraph count from the [`ParagraphCount`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_UI_Xaml_RichTextBoxAdv_SfRichTextBoxAdv_ParagraphCount) property. The default value of this property is 0. Empty paragraphs are ignored.

The following sample code demonstrates how to get the total number of paragraphs in the document.
{% tabs %}
{% highlight Xaml %}
<TextBlock x:Name="paragraphCount" Text="{Binding Path=ParagraphCount}" />

{% endhighlight %}
{% highlight C# %}
int paragraphCount = richTextBoxAdv.ParagraphCount;

{% endhighlight %}
{% highlight VB %}
Dim paragraphCount As Integer = richTextBoxAdv.ParagraphCount

{% endhighlight %}
{% endtabs %}

## Page count
SfRichTextBoxAdv counts the number of pages in a document while you type. You can get the page count from the [`PageCount`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_UI_Xaml_RichTextBoxAdv_SfRichTextBoxAdv_PageCount) property. The default value of this property is 0.

N> `PageCount` is not a dependency property and does not raise change notifications. Read its value inside the `SelectionChanged` event, as shown below.

The following sample code demonstrates how to get the total number of pages in the document.
{% tabs %}
{% highlight Xaml %}
<TextBlock x:Name="pageCount" Grid.Row="0" />
<RichTextBoxAdv:SfRichTextBoxAdv Grid.Row="1" x:Name="richTextBoxAdv" SelectionChanged="RichTextBoxAdv_SelectionChanged" />

{% endhighlight %}
{% highlight C# %}
private void RichTextBoxAdv_SelectionChanged(object obj, SelectionChangedEventArgs args)
{
	pageCount.Text = richTextBoxAdv.PageCount.ToString();
}

{% endhighlight %}
{% highlight VB %}
Private Sub RichTextBoxAdv_SelectionChanged(ByVal obj As Object, ByVal args As SelectionChangedEventArgs)
pageCount.Text = richTextBoxAdv.PageCount.ToString()
End Sub

{% endhighlight %}
{% endtabs %}

## Current page number
The [`CurrentPageNumber`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_UI_Xaml_RichTextBoxAdv_SfRichTextBoxAdv_CurrentPageNumber) property returns the page number where the selection (cursor) is present in the document.

N> `CurrentPageNumber` is not a dependency property and does not raise change notifications. Read its value inside the `SelectionChanged` event, as shown below.

The following sample code demonstrates how to get the current page number in the document.
{% tabs %}
{% highlight Xaml %}
<TextBlock x:Name="currentPageNumber" Grid.Row="0" />
<RichTextBoxAdv:SfRichTextBoxAdv Grid.Row="1" x:Name="richTextBoxAdv" SelectionChanged="RichTextBoxAdv_SelectionChanged" />

{% endhighlight %}
{% highlight C# %}
private void RichTextBoxAdv_SelectionChanged(object obj, SelectionChangedEventArgs args)
{
	currentPageNumber.Text = richTextBoxAdv.CurrentPageNumber.ToString();
}

{% endhighlight %}
{% highlight VB %}
Private Sub RichTextBoxAdv_SelectionChanged(ByVal obj As Object, ByVal args As SelectionChangedEventArgs)
    currentPageNumber.Text = richTextBoxAdv.CurrentPageNumber.ToString()
End Sub

{% endhighlight %}
{% endtabs %}

## See also

- [Getting started with UWP DOCX Editor](./Getting-Started)
- [Selection in UWP DOCX Editor](./Selection)
- [Table support in UWP DOCX Editor](./Table)
