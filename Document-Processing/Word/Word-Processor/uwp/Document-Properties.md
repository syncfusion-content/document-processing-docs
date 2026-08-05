---
title: Document Properties in UWP RichTextBox control | Syncfusion
description: Learn here all about Document Properties support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: word-count,paragraph-count,page-count,current-page-number,selection-changed
---
# Document properties in UWP RichTextBox

[`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) keeps track of statistics about your document. These statistics contain information about word count, paragraph count, and page count. The following sections describe each statistic and how to retrieve it.

N> The XAML snippets in this document assume the `RichTextBoxAdv` namespace is mapped to `clr-namespace:Syncfusion.UI.Xaml.RichTextBoxAdv;assembly=Syncfusion.SfRichTextBoxAdv.UWP`.

## Word count
SfRichTextBoxAdv automatically counts the number of words in a document while you type. You can get the word count from the [`WordCount`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#wordcount) property. The default value of this property is 0.

The following sample code demonstrates how to get the total number of words in the document.
{% tabs %}
{% highlight Xaml %}
<TextBlock x:Name="wordCount" Text="{Binding Path=WordCount}" />

{% endhighlight %}
{% highlight C# %}
using Syncfusion.UI.Xaml.RichTextBoxAdv;

wordCount.Text = richTextBoxAdv.WordCount.ToString();

{% endhighlight %}
{% highlight VB %}
Imports Syncfusion.UI.Xaml.RichTextBoxAdv

wordCount.Text = richTextBoxAdv.WordCount.ToString()

{% endhighlight %}
{% endtabs %}

## Paragraph count
SfRichTextBoxAdv automatically counts the number of paragraphs in a document while you type. You can get the paragraph count from the [`ParagraphCount`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#paragraphcount) property. The default value of this property is 0. Empty paragraphs are ignored.

The following sample code demonstrates how to get the total number of paragraphs in the document.
{% tabs %}
{% highlight Xaml %}
<TextBlock x:Name="paragraphCount" Text="{Binding Path=ParagraphCount}" />

{% endhighlight %}
{% highlight C# %}
using Syncfusion.UI.Xaml.RichTextBoxAdv;

paragraphCount.Text = richTextBoxAdv.ParagraphCount.ToString();

{% endhighlight %}
{% highlight VB %}
Imports Syncfusion.UI.Xaml.RichTextBoxAdv

paragraphCount.Text = richTextBoxAdv.ParagraphCount.ToString()

{% endhighlight %}
{% endtabs %}

## Page count
SfRichTextBoxAdv counts the number of pages in a document while you type. You can get the page count from the [`PageCount`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#pagecount) property. The default value of this property is 0.

N> `PageCount` is not a dependency property and does not raise change notifications. Read its value inside the `SelectionChanged` event, as shown below.

The following sample code demonstrates how to get the total number of pages in the document.
{% tabs %}
{% highlight Xaml %}
<TextBlock x:Name="pageCount" Grid.Row="0" />
<RichTextBoxAdv:SfRichTextBoxAdv Grid.Row="1" x:Name="richTextBoxAdv" SelectionChanged="RichTextBoxAdv_SelectionChanged" />

{% endhighlight %}
{% highlight C# %}
using Syncfusion.UI.Xaml.RichTextBoxAdv;
using Windows.UI.Xaml.Controls;

private void RichTextBoxAdv_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    pageCount.Text = richTextBoxAdv.PageCount.ToString();
}

{% endhighlight %}
{% highlight VB %}
Imports Syncfusion.UI.Xaml.RichTextBoxAdv
Imports Windows.UI.Xaml.Controls

Private Sub RichTextBoxAdv_SelectionChanged(ByVal sender As Object, ByVal e As SelectionChangedEventArgs)
    pageCount.Text = richTextBoxAdv.PageCount.ToString()
End Sub

{% endhighlight %}
{% endtabs %}

## Current page number
The [`CurrentPageNumber`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#currentpagenumber) property returns the page number where the selection (cursor) is present in the document.

N> `CurrentPageNumber` is not a dependency property and does not raise change notifications. Read its value inside the `SelectionChanged` event, as shown below.

The following sample code demonstrates how to get the current page number in the document.
{% tabs %}
{% highlight Xaml %}
<TextBlock x:Name="currentPageNumber" Grid.Row="0" />
<RichTextBoxAdv:SfRichTextBoxAdv Grid.Row="1" x:Name="richTextBoxAdv" SelectionChanged="RichTextBoxAdv_SelectionChanged" />

{% endhighlight %}
{% highlight C# %}
using Syncfusion.UI.Xaml.RichTextBoxAdv;
using Windows.UI.Xaml.Controls;

private void RichTextBoxAdv_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    currentPageNumber.Text = richTextBoxAdv.CurrentPageNumber.ToString();
}

{% endhighlight %}
{% highlight VB %}
Imports Syncfusion.UI.Xaml.RichTextBoxAdv
Imports Windows.UI.Xaml.Controls

Private Sub RichTextBoxAdv_SelectionChanged(ByVal sender As Object, ByVal e As SelectionChangedEventArgs)
    currentPageNumber.Text = richTextBoxAdv.CurrentPageNumber.ToString()
End Sub

{% endhighlight %}
{% endtabs %}

N> The word-count, paragraph-count, page-count, and current-page-number APIs are supported from Syncfusion UWP RichTextBox v17.4.0.X onwards.

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [Selection in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/selection)
- [Getting started with UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/getting-started)

