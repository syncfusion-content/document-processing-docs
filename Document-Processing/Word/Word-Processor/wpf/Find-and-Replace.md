---
title: Find and Replace in WPF RichTextBox control | Syncfusion
description: Learn here all about Find and Replace support in Syncfusion WPF RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: search,find,replace-text,find-options,regex-find
---
# Find and Replace in WPF RichTextBox (SfRichTextBoxAdv)

The [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) (SfRichTextBoxAdv) control supports searching text contents in the document. When combined with selection, it becomes a powerful tool for highlighting specific parts of the document, applying formatting such as bold, or replacing text. You can extend your search by using regular expressions to find a particular pattern of text in the document.

The find and replace operations are exposed through the [Find](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_Find_System_String_Syncfusion_Windows_Controls_RichTextBoxAdv_FindOptions_), [FindAll](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_FindAll_System_String_Syncfusion_Windows_Controls_RichTextBoxAdv_FindOptions_), and [FindOptions](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.FindOptions.html) API members.

## Find

The following code example explains how to find the first occurrence of a particular text in the document and apply bold formatting.
{% tabs %}
{% highlight c# %}
// Finds the first occurrence of a specified text that matches case in SfRichTextBoxAdv document from current selection.
TextSearchResult textSearchResult = richTextBoxAdv.Find("Panda", FindOptions.CaseSensitive);

// Selects the text search result.
richTextBoxAdv.Selection.Select(textSearchResult.Start, textSearchResult.End);

// Applies Bold formatting for the current selection.
richTextBoxAdv.Selection.CharacterFormat.Bold = true;

{% endhighlight %}
{% highlight VB %}
' Finds the first occurrence of a specified text that matches case in SfRichTextBoxAdv document from current selection.
Dim textSearchResult As TextSearchResult = richTextBoxAdv.Find("Panda", FindOptions.CaseSensitive)

' Selects the text search result.
richTextBoxAdv.Selection.Select(textSearchResult.Start, textSearchResult.[End])

' Applies Bold formatting for the current selection.
richTextBoxAdv.Selection.CharacterFormat.Bold = True


{% endhighlight %}

{% endtabs %}

The `Find` method accepts a [FindOptions](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.FindOptions.html) value that controls how the search is performed. The following flags are available:

| Flag | Description |
|------|-------------|
| `None` | Performs a case-insensitive search without whole-word matching (default behavior). |
| `CaseSensitive` | Performs a search that matches the exact case of the search text. |
| `WholeWord` | Performs a search that matches only whole words. |

N> When `CaseSensitive` is not specified, the search is case-insensitive by default.

## Find all

The following code example demonstrates how to find all occurrences of a particular pattern of text in the document and highlight the result.
{% tabs %}
{% highlight c# %}
// Finds all the words that start with ‘S’ in SfRichTextBoxAdv document.
TextSearchResults textSearchResults = richTextBoxAdv.FindAll(new Regex(@"\bS\S*"), FindOptions.None);

// If any text search results found.
if (textSearchResults != null)
{
    for (int j = 0; j < textSearchResults.Count; j++)
    {
        TextSearchResult textSearchResult = textSearchResults[j];

        // Adds the search result text positions to the selection.
        richTextBoxAdv.Selection.SelectionRanges.Add(textSearchResult.Start, textSearchResult.End);
    }

    // Applies highlight color to all selected ranges.
    richTextBoxAdv.Selection.CharacterFormat.HighlightColor = HighlightColor.Yellow;
}

{% endhighlight %}
{% highlight VB %}
' Finds all the words that start with ‘S’ in SfRichTextBoxAdv document.
Dim textSearchResults As TextSearchResults = richTextBoxAdv.FindAll(New Regex("\bS\S*"), FindOptions.None)

' If any text search results found.
If textSearchResults IsNot Nothing Then
    For j As Integer = 0 To textSearchResults.Count - 1
        Dim textSearchResult As TextSearchResult = textSearchResults(j)

        ' Adds the search result text positions to the selection.
        richTextBoxAdv.Selection.SelectionRanges.Add(textSearchResult.Start, textSearchResult.[End])
    Next

    ' Applies highlight color to all selected ranges.
    richTextBoxAdv.Selection.CharacterFormat.HighlightColor = HighlightColor.Yellow
End If


{% endhighlight %}

{% endtabs %}

The example above applies a [HighlightColor](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.HighlightColor.html) to the selected ranges. The supported values are `Black`, `Blue`, `Cyan`, `Green`, `Magenta`, `Red`, `Yellow`, `White`, and `None` (which clears an existing highlight).

## Replacing existing text

You can replace a single occurrence or all occurrences of a particular text or pattern of text in a document with another text by performing a search operation. This makes it easy to modify the document contents.

### Replace a single occurrence

The following code example demonstrates how to replace a single occurrence of a text with another text in SfRichTextBoxAdv. The [`TextSearchResult.Replace(string)`](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.TextSearchResult.html) method takes the replacement text as its argument and replaces the matched text in the current result.
{% tabs %}
{% highlight c# %}
// Finds the text "colour" that matches whole word in the document.
TextSearchResult textSearchResult = richTextBoxAdv.Find("colour", FindOptions.WholeWord);

// If any text search result found, replace it with the text "color".
if (textSearchResult != null)
    textSearchResult.Replace("color");

{% endhighlight %}
{% highlight VB %}
' Finds the text "colour" that matches whole word in the document.
Dim textSearchResult As TextSearchResult = richTextBoxAdv.Find("colour", FindOptions.WholeWord)

' If any text search result found, replace it with the text "color".
If textSearchResult IsNot Nothing Then
	textSearchResult.Replace("color")
End If


{% endhighlight %}

{% endtabs %}

### Replace all occurrences

The following code example demonstrates how to replace all occurrences of a particular text with another text in SfRichTextBoxAdv. The [`TextSearchResults.ReplaceAll(string)`](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.TextSearchResults.html) method takes the replacement text as its argument and applies it to every match returned by `FindAll`.
{% tabs %}
{% highlight c# %}
// Finds the text "analyse" that matches whole word in the document.
TextSearchResults textSearchResults = richTextBoxAdv.FindAll("analyse", FindOptions.WholeWord);

// If any text search results found, replace all occurrences with the text "analyze".
if(textSearchResults != null)
    textSearchResults.ReplaceAll("analyze");

{% endhighlight %}
{% highlight VB %}
' Finds the text "analyse" that matches whole word in the document.
Dim textSearchResults As TextSearchResults = richTextBoxAdv.FindAll("analyse", FindOptions.WholeWord)

' If any text search results found, replace all occurrences with the text "analyze".
If textSearchResults IsNot Nothing Then
	textSearchResults.ReplaceAll("analyze")
End If


{% endhighlight %}

{% endtabs %}

## Options Pane

The SfRichTextBoxAdv provides built-in options pane support to find text and navigate through the search results, similar to that of Microsoft Word.
The following code example demonstrates how to show the options pane in SfRichTextBoxAdv through the [ShowOptionsPaneCommand](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_ShowOptionsPaneCommand) routed UI command.
{% tabs %}
{% highlight xaml %}
<!-- Binding Button to UI Command that shows the options pane  -->
<Button Content="Show Options Pane" Command="RichTextBoxAdv:SfRichTextBoxAdv.ShowOptionsPaneCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" />


{% endhighlight %}

{% endtabs %}
![WPF RichTextBox displays the Find option pane with the search input and navigation controls](Find-and-Replace_images/wpf-richtextbox-find-option.jpeg)

N> You can refer to our [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) feature tour page for its groundbreaking feature representations. You can also explore our [WPF RichTextBox example](https://github.com/syncfusion/docx-editor-sdk-wpf-demos) to know how to render and configure the editing tool.

## See Also

- [Selection in WPF RichTextBox](Selection)
- [Commands in WPF RichTextBox](Commands)
- [Document Structure in WPF RichTextBox](Document-Structure)