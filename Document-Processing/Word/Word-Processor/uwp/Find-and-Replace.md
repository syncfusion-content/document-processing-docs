---
title: Find and Replace in UWP DOCX Editor | Syncfusion
description: The find and replace in UWP DOCX Editor offers text search support, enabling scenarios like highlighting, formatting updates, or text replacement.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: search,find,replace-text,findall,findoptions,showoptionspanecommand
---
# Find and Replace in UWP DOCX Editor

The [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) control supports searching text content in the document. When used in combination with selection, this becomes a powerful tool that enables scenarios such as highlighting specific parts of the document, applying formatting (for example, bold), or replacing text. You can extend your search by using regular expressions to find a particular pattern of text in the document.

## Finding text

The following code example explains how to find the first occurrence of a particular text in the document and apply bold formatting.

{% tabs %}
{% highlight c# %}
// Finds the first occurrence of the specified text, matching case, in the SfRichTextBoxAdv document from the current selection.
TextSearchResult textSearchResult = richTextBoxAdv.Find("Panda", FindOptions.CaseSensitive);

// Selects the text search result.
richTextBoxAdv.Selection.Select(textSearchResult.Start, textSearchResult.End);

// Applies bold formatting to the current selection.
richTextBoxAdv.Selection.CharacterFormat.Bold = true;

{% endhighlight %}
{% highlight VB %}
' Finds the first occurrence of the specified text, matching case, in the SfRichTextBoxAdv document from the current selection.
Dim textSearchResult As TextSearchResult = richTextBoxAdv.Find("Panda", FindOptions.CaseSensitive)

' Selects the text search result.
richTextBoxAdv.Selection.Select(textSearchResult.Start, textSearchResult.End)

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

The following code example demonstrates how to show the default search pane in `SfRichTextBoxAdv` through command binding.

{% tabs %}
{% highlight xaml %}
<!-- Binds the button to the UI command that shows the default search pane. -->
<Button Content="Show Search Pane" Command="{Binding ElementName=richTextBoxAdv, Path=ShowOptionsPaneCommand}" />

{% endhighlight %}
{% endtabs %}

![SfRichTextBoxAdv with the default search pane](Find-and-Replace_images/Find-and-Replace_img1.jpeg)

The following code example demonstrates how to show the advanced find pane in `SfRichTextBoxAdv` through command binding.

{% tabs %}
{% highlight xaml %}
<!-- Binds the button to the UI command that shows the advanced find pane. -->
<Button Content="Show Advanced Find Pane" Command="{Binding ElementName=richTextBoxAdv, Path=ShowOptionsPaneCommand}" CommandParameter="Find" />

{% endhighlight %}
{% endtabs %}

![SfRichTextBoxAdv with the advanced find pane](Find-and-Replace_images/Find-and-Replace_img2.jpeg)

The following code example demonstrates how to show the advanced replace pane in `SfRichTextBoxAdv` through command binding.

{% tabs %}
{% highlight xaml %}
<!-- Binds the button to the UI command that shows the advanced replace pane. -->
<Button Content="Show Advanced Replace Pane" Command="{Binding ElementName=richTextBoxAdv, Path=ShowOptionsPaneCommand}" CommandParameter="Replace" />

{% endhighlight %}
{% endtabs %}

![SfRichTextBoxAdv with the advanced replace pane](Find-and-Replace_images/Find-and-Replace_img3.jpeg)

N> Currently, the SfRichTextBoxAdv does not support the options pane on Phone devices.

## See also

- [Getting started with UWP DOCX Editor](./Getting-Started)
- [Selection in UWP DOCX Editor](./Selection)
- [Commands in UWP DOCX Editor](./Commands)
