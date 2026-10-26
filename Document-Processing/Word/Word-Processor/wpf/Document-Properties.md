---
title: Document Properties in WPF DOCX Editor | Syncfusion
description: The document properties in WPF DOCX Editor track document statistics, enabling easy access to word count, paragraph count, and pages count.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: Word count, paragraph count, page count, current page number.
---
# Document Properties in WPF DOCX Editor
[WPF DOCX Editor](https://www.syncfusion.com/wpf-controls/richtextbox) keep tracking the statistics about your documents. These statistics contains information about word count, paragraph count and pages count.

## Word count
WPF DOCX Editor automatically counts the number of words in a document while you type. You can get the words count from [WordCount](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_WordCount) property. The default value of this property is 0. 

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

## Paragraph count
WPF DOCX Editor automatically counts the number of paragraphs in a document while you type. You can get the paragraph count from [ParagraphCount](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_ParagraphCount) property. The default value of this property is 0. Also, it ignores empty paragraphs.

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

## Page count
WPF DOCX Editor counts the number of pages in a document while you type. You can get the page count from [PageCount](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_PageCount) property. The default value of this property is 0.

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

## Current page number
The [CurrentPageNumber](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_CurrentPageNumber) property in the WPF DOCX Editor control returns the page number where the selection(cursor) is present.

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


N> You can refer to our [WPF DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) feature tour page for its groundbreaking feature representations. You can also explore our [WPF DOCX Editor example](https://github.com/syncfusion/docx-editor-sdk-wpf-demos) to know how to render and configure the editing tool.

## See also

- [Document Structure in WPF DOCX Editor](./Document-Structure)
- [Selection in WPF DOCX Editor](./Selection)
- [Commands in WPF DOCX Editor](./Commands)
