---
title: Document Properties in WPF RichTextBox control | Syncfusion
description: Learn about the Document Properties support in Syncfusion WPF RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: Word count, paragraph count, page count, current page number.
---
# Document Properties in WPF RichTextBox (SfRichTextBoxAdv)
[WPF RichTextBox](https://www.syncfusion.com/wpf-controls/richtextbox) keeps track of the statistics about your documents. These statistics contain information about word count, paragraph count and pages count.

## Word Count
RichTextBox automatically counts the number of words in a document while you type. You can get the words count from [WordCount](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_WordCount) property. The default value of this property is 0. 

The following sample code demonstrates how to get the total number of words in the document.
{% tabs %}
{% highlight xaml %}
<TextBlock Text="{Binding Path=WordCount, Mode=TwoWay, ElementName=richTextBoxAdv}" />

{% endhighlight %}
{% highlight c# %}
int wordCount = richTextBoxAdv.WordCount;

{% endhighlight %}
{% highlight VB %}
Dim wordCount As Integer = richTextBoxAdv.WordCount

{% endhighlight %}
{% endtabs %}

## Paragraph Count
RichTextBox automatically counts the number of paragraphs in a document while you type. You can get the paragraph count from [ParagraphCount](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_ParagraphCount) property. The default value of this property is 0. Also, it ignores empty paragraphs.

The following sample code demonstrates how to get the total number of paragraphs in the document.
{% tabs %}
{% highlight xaml %}
<TextBlock Text="{Binding Path=ParagraphCount, Mode=TwoWay, ElementName=richTextBoxAdv}" />

{% endhighlight %}
{% highlight c# %}
int paragraphCount = richTextBoxAdv.ParagraphCount;

{% endhighlight %}
{% highlight VB %}
Dim paragraphCount As Integer = richTextBoxAdv.ParagraphCount

{% endhighlight %}
{% endtabs %}

## Page Count
RichTextBox counts the number of pages in a document while you type. You can get the page count from [PageCount](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_PageCount) property. The default value of this property is 0.

The following sample code demonstrates how to get the total number of pages in the document.
{% tabs %}
{% highlight xaml %}
<TextBlock x:Name="PageCount" Grid.Row="0" />
<RichTextBoxAdv:SfRichTextBoxAdv Grid.Row="1" x:Name="richTextBoxAdv" SelectionChanged="RichTextBoxAdv_SelectionChanged"/>

{% endhighlight %}
{% highlight c# %}
private void RichTextBoxAdv_SelectionChanged(object obj, SelectionChangedEventArgs args)
{
	PageCount.Text = richTextBoxAdv.PageCount.ToString();
}

{% endhighlight %}
{% highlight VB %}
Private Sub RichTextBoxAdv_SelectionChanged(ByVal obj As Object, ByVal args As SelectionChangedEventArgs)
PageCount.Text = richTextBoxAdv.PageCount.ToString()
End Sub

{% endhighlight %}
{% endtabs %}

## Current Page Number
The [CurrentPageNumber](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_CurrentPageNumber) property in the RichTextBox control returns the page number where the selection(cursor) is present.

The following sample code demonstrates how to get current page number in the document.

{% tabs %}
{% highlight xaml %}
<TextBlock x:Name="CurrentPageNumber" Grid.Row="0" />
<RichTextBoxAdv:SfRichTextBoxAdv Grid.Row="1" x:Name="richTextBoxAdv" SelectionChanged="RichTextBoxAdv_SelectionChanged"/>

{% endhighlight %}
{% highlight c# %}
private void RichTextBoxAdv_SelectionChanged(object obj, SelectionChangedEventArgs args)
{
	CurrentPageNumber.Text = richTextBoxAdv.CurrentPageNumber.ToString();
}

{% endhighlight %}
{% highlight VB %}
Private Sub RichTextBoxAdv_SelectionChanged(ByVal obj As Object, ByVal args As SelectionChangedEventArgs)
    CurrentPageNumber.Text = richTextBoxAdv.CurrentPageNumber.ToString()
End Sub

{% endhighlight %}
{% endtabs %}

N> The above PageCount and CurrentPageNumber properties are not a dependency property. And it is not notifying for dynamic changes. So, get these properties value in
selection changed event.


## See Also

- [WPF RichTextBox Feature Tour](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor)
- [WPF RichTextBox Examples](https://github.com/syncfusion/docx-editor-sdk-wpf-demos)
