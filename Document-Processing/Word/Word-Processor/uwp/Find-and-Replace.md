---
title: Find and Replace in UWP RichTextBox control | Syncfusion
description: Learn here all about Find and Replace support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: search,find,replace-text,textsearchresult,findall,findoptions,showoptionspanecommand,regex,highlightcolor,case-sensitive,whole-word
---
# Find and replace support in UWP RichTextBox

The [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) control supports searching text content in the document. When used in combination with selection, this becomes a powerful tool that enables scenarios such as highlighting specific parts of the document, applying formatting (for example, bold), or replacing text. You can extend your search by using regular expressions to find a particular pattern of text in the document.

N> The XAML snippets in this document assume the `RichTextBoxAdv` namespace is mapped to `using:Syncfusion.UI.Xaml.RichTextBoxAdv` and that the host `SfRichTextBoxAdv` is declared as `<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" />`.

## Finding text

The following code example explains how to find the first occurrence of a particular text in the document and apply bold formatting.

{% tabs %}
{% highlight c# %}
using Syncfusion.UI.Xaml.RichTextBoxAdv;
using System.Text.RegularExpressions;

// Finds the first occurrence of the specified text, matching case, in the SfRichTextBoxAdv document from the current selection.
TextSearchResult textSearchResult = richTextBoxAdv.Find("Panda", FindOptions.CaseSensitive);

// Selects the text search result.
richTextBoxAdv.Selection.Select(textSearchResult.Start, textSearchResult.End);

// Applies bold formatting to the current selection.
richTextBoxAdv.Selection.CharacterFormat.Bold = true;

{% endhighlight %}
{% highlight VB %}
Imports Syncfusion.UI.Xaml.RichTextBoxAdv
Imports System.Text.RegularExpressions

' Finds the first occurrence of the specified text, matching case, in the SfRichTextBoxAdv document from the current selection.
Dim textSearchResult As TextSearchResult = richTextBoxAdv.Find("Panda", FindOptions.CaseSensitive)

' Selects the text search result.
richTextBoxAdv.[Select](textSearchResult.Start, textSearchResult.End)

' Applies bold formatting to the current selection.
richTextBoxAdv.Selection.CharacterFormat.Bold = True

{% endhighlight %}
{% endtabs %}

The following code example demonstrates how to find all occurrences of a particular pattern of text in the document and highlight the result.

{% tabs %}
{% highlight c# %}
// Finds all the words that start with 'S' in the SfRichTextBoxAdv document.
TextSearchResults textSearchResults = richTextBoxAdv.FindAll(new Regex(@"\bS\S*"), FindOptions.None);

// If any text search results are found.
if (textSearchResults != null)
{
    for (int j = 0; j < textSearchResults.Count; j++)
    {

        TextSearchResult textSearchResult = textSearchResults[j];

        // Adds the search result text positions to the selection.
        richTextBoxAdv.Selection.SelectionRanges.Add(textSearchResult.Start, textSearchResult.End);
    }

    // Applies the highlight color to the selection.
    richTextBoxAdv.Selection.CharacterFormat.HighlightColor = HighlightColor.Yellow;
}

{% endhighlight %}
{% highlight VB %}
' Finds all the words that start with 'S' in the SfRichTextBoxAdv document.
Dim textSearchResults As TextSearchResults = richTextBoxAdv.FindAll(New Regex("\bS\S*"), FindOptions.None)

' If any text search results are found.
If textSearchResults IsNot Nothing Then
    For j As Integer = 0 To textSearchResults.Count - 1

        Dim textSearchResult As TextSearchResult = textSearchResults(j)

        ' Adds the search result text positions to the selection.
        richTextBoxAdv.Selection.SelectionRanges.Add(textSearchResult.Start, textSearchResult.End)
    Next

    ' Applies the highlight color to the selection.
    richTextBoxAdv.Selection.CharacterFormat.HighlightColor = HighlightColor.Yellow
End If

{% endhighlight %}
{% endtabs %}

N> Common `FindOptions` values are `CaseSensitive`, `WholeWord`, `SearchReverse`, and `None`. The regex pattern `@"\bS\S*"` matches any word that starts with a capital `S` (the `\b` is a word boundary, `S` is a literal capital S, and `\S*` matches zero or more non-whitespace characters).

## Replacing text

You can replace a single occurrence or all occurrences of a particular text or pattern in a document with another text by performing a search operation. This helps you to modify the content easily.

The following code example demonstrates how to replace a single occurrence of a text with another text in `SfRichTextBoxAdv`.

{% tabs %}
{% highlight c# %}
// Finds the text "flat" that matches the whole word in the document.
TextSearchResult textSearchResult = richTextBoxAdv.Find("flat", FindOptions.WholeWord);

// If any text search result is found, replace it with the text "apartment".
if (textSearchResult != null)
    textSearchResult.Replace("apartment");

{% endhighlight %}
{% highlight VB %}
' Finds the text "flat" that matches the whole word in the document.
Dim textSearchResult As TextSearchResult = richTextBoxAdv.Find("flat", FindOptions.WholeWord)

' If any text search result is found, replace it with the text "apartment".
If textSearchResult IsNot Nothing Then
    textSearchResult.Replace("apartment")
End If

{% endhighlight %}
{% endtabs %}

The following code example demonstrates how to replace all occurrences of a particular text with another text in `SfRichTextBoxAdv`.

{% tabs %}
{% highlight c# %}
// Finds the text "lift" that matches the whole word in the document.
TextSearchResults textSearchResults = richTextBoxAdv.FindAll("lift", FindOptions.WholeWord);

// If any text search results are found, replace all occurrences with the text "elevator".
if (textSearchResults != null)
    textSearchResults.ReplaceAll("elevator");

{% endhighlight %}
{% highlight VB %}
' Finds the text "lift" that matches the whole word in the document.
Dim textSearchResults As TextSearchResults = richTextBoxAdv.FindAll("lift", FindOptions.WholeWord)

' If any text search results are found, replace all occurrences with the text "elevator".
If textSearchResults IsNot Nothing Then
    textSearchResults.ReplaceAll("elevator")
End If

{% endhighlight %}
{% endtabs %}

## Options pane

SfRichTextBoxAdv provides a built-in options pane to find text and navigate to the results, similar to the Microsoft Word application. It also provides a separate pane for advanced find and replace options.

The following XAML shows how to show the options pane in `SfRichTextBoxAdv` using command binding. Pass a `CommandParameter` to choose between the default search pane, the advanced find pane, or the advanced replace pane.

{% tabs %}
{% highlight xaml %}
<!-- Binds the button to the UI command that shows the default search pane. -->
<Button Content="Show Search Pane" Command="{Binding ElementName=richTextBoxAdv, Path=ShowOptionsPaneCommand}" />

<!-- Binds the button to the UI command that shows the advanced find pane. -->
<Button Content="Show Advanced Find Pane" Command="{Binding ElementName=richTextBoxAdv, Path=ShowOptionsPaneCommand}" CommandParameter="Find" />

<!-- Binds the button to the UI command that shows the advanced replace pane. -->
<Button Content="Show Advanced Replace Pane" Command="{Binding ElementName=richTextBoxAdv, Path=ShowOptionsPaneCommand}" CommandParameter="Replace" />

{% endhighlight %}
{% endtabs %}

| `CommandParameter` | Pane shown |
| --- | --- |
| (none) | Default search pane |
| `Find` | Advanced find pane |
| `Replace` | Advanced replace pane |

![SfRichTextBoxAdv with the default search pane](Find-and-Replace_images/Find-and-Replace_img1.jpeg)

![SfRichTextBoxAdv with the advanced find pane](Find-and-Replace_images/Find-and-Replace_img2.jpeg)

![SfRichTextBoxAdv with the advanced replace pane](Find-and-Replace_images/Find-and-Replace_img3.jpeg)

N> Currently, the SfRichTextBoxAdv does not support the options pane on Phone devices.

N> The find, replace, and options-pane APIs are supported from Syncfusion UWP RichTextBox v17.4.0.X onwards.

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [Selection in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/selection)
- [Commands in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/commands)
- [Getting started with UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/getting-started)
