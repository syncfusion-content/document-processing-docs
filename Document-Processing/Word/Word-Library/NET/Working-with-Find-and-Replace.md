---
title: Find and replace in Word document | DocIO | Syncfusion
description: Learn how to find a text and replace it with another text, image, or table in a Word document using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Working with Find and Replace

You can search a particular text you like to change and replace it with another text or part of the document.

To quickly get started with the Find and Replace options in a Word document, please check out this video:
{% youtube "https://www.youtube.com/watch?v=EJDihId35nI" %}


The following table illustrates the supported overloads for Find and Replace functionality.

<table>
<tr>
<th>Overloads<br/><br/></th>
<th>When to use<br/><br/></th>
<th>Examples<br/><br/></th>
</tr>
<tbody>
<tr>
<td>{{ '[Find(string given, bool caseSensitive, bool wholeWord)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Find_System_String_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Finds the text based on specified string, taking into the consideration of caseSensitive and wholeWord options.</td>
<td>{{ '[Find first occurrence using string example.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-text-in-Word-document)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Find(Regex pattern)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Find_System_Text_RegularExpressions_Regex_)' | markdownify }}</td>
<td>Finds the text based on specified regular expression.</td>
<td>{{ '[Find first occurrence using regex example.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-text-with-formatted-text)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[FindAll(string given, bool caseSensitive, bool wholeWord)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindAll_System_String_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Finds and returns all entries of the specified string, taking into the consideration of caseSensitive and wholeWord options.</td>
<td>{{ '[Find and highlight all](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-highlight-all)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[FindAll(Regex pattern)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindAll_System_Text_RegularExpressions_Regex_)' | markdownify }}</td>
<td>Finds and returns all entries of the specified regular expression.</td>
<td>{{ '[Find all and replace text with merge field.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-with-merge-field)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[FindNext(TextBodyItem startTextBodyItem, string given, bool caseSensitive, bool wholeWord)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindNext_Syncfusion_DocIO_DLS_TextBodyItem_System_String_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Finds the next entry of the specified text from the specified text body item, taking into the consideration of caseSensitive and wholeWord options.</td>
<td>{{ '[Find next occurrence using string example.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-next)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[FindNext(TextBodyItem startBodyItem, Regex pattern)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindNext_Syncfusion_DocIO_DLS_TextBodyItem_System_Text_RegularExpressions_Regex_)' | markdownify }}</td>
<td>Finds the next entry of the specified regular expression from the specified text body item.</td>
<td>{{ '[Find next occurrence using regex example.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-next-and-replace-with-formatted-text)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[FindSingleLine(string given, bool caseSensitive, bool wholeWord)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindSingleLine_System_String_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Finds the first entry of specified pattern of text in single-line mode which is extended to several paragraph in the document, taking into the consideration of caseSensitive and wholeWord options.</td>
<td>{{ '[Find first text using string that extend to several paragraphs.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-find-next-paragraphs)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[FindSingleLine(Regex pattern)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindSingleLine_System_Text_RegularExpressions_Regex_)' | markdownify }}</td>
<td>Finds the first entry of specified pattern of text in single-line mode which is extended to several paragraph in the document.</td>
<td>{{ '[Find first text using string that extend to several paragraphs.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-text-extended-to-several-paragraphs)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[FindNextSingleLine(TextBodyItem startTextBodyItem, string given, bool caseSensitive, bool wholeWord)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindNextSingleLine_Syncfusion_DocIO_DLS_TextBodyItem_System_String_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Finds the next entry of the specified text from the specified text body item in single-line mode which is extended to several paragraph in the document, taking into the consideration of caseSensitive and wholeWord options.</td>
<td>{{ '[Find next using string that extended to several paragraphs.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-find-next-paragraphs)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[FindNextSingleLine(TextBodyItem startBodyItem, Regex pattern)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindNextSingleLine_Syncfusion_DocIO_DLS_TextBodyItem_System_Text_RegularExpressions_Regex_)' | markdownify }}</td>
<td>Finds the next entry of the specified pattern of text in single-line mode which is extended to several paragraph in the document.</td>
<td>{{ '[Find next using regex that extended to several paragraphs.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-next-multiline-text-and-replace-text)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Replace(string given, IWordDocument replaceDoc, bool caseSensitive, bool wholeWord)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_String_Syncfusion_DocIO_DLS_IWordDocument_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Replaces all entries of given string in the document with another Word document, taking into consideration case sensitive, whole word options.</td>
<td>{{ '[Find and replace text with Word document.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-with-Word-document)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Replace(string given, IWordDocument replaceDoc, bool caseSensitive, bool wholeWord, bool saveFormatting)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_String_Syncfusion_DocIO_DLS_IWordDocument_System_Boolean_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Replaces all entries of given string in the document with another Word document, taking into consideration case sensitive, whole word and formatting options.</td>
<td>{{ '[Find and replace text with Word document with formatting.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-text-with-Word-document)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Replace(string given, TextBodyPart bodyPart, bool caseSensitive, bool wholeWord)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_String_Syncfusion_DocIO_DLS_TextBodyPart_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Replaces all entries of given string in the document with TextBodyPart, taking into consideration case sensitive, whole word options.</td>
<td>{{ '[Find and replace text with image.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-text-with-image)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Replace(string given, TextBodyPart bodyPart, bool caseSensitive, bool wholeWord, bool saveFormatting)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_String_Syncfusion_DocIO_DLS_TextBodyPart_System_Boolean_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Replaces all entries of given string in the document with TextBodyPart, taking into consideration case sensitive, whole word and formatting options.</td>
<td>{{ '[Find and replace text with document element with formatting.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-text-with-body-part)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Replace(string given, TextSelection textSelection, bool caseSensitive, bool wholeWord)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_String_Syncfusion_DocIO_DLS_TextSelection_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Replaces all entries of given string in the document with TextSelection, taking into consideration case sensitive and whole word options.</td>
<td>{{ '[Find and replace text with another selected text.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-next-multiline-text-and-replace-text)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Replace(string given, TextSelection textSelection, bool caseSensitive, bool wholeWord, bool saveFormatting)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_String_Syncfusion_DocIO_DLS_TextSelection_System_Boolean_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Replaces all entries of given string in the document with TextSelection, taking into consideration case sensitive, whole word and formatting options.</td>
<td>{{ '[Find and replace text with another selected text with formatting.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-text-with-formatted-text)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Replace(string given, string replace, bool caseSensitive, bool wholeWord)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_String_System_String_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Replaces all entries of given string in the document with replace string, taking into consideration of case sensitive and whole word options.</td>
<td>{{ '[Find and replace text with another text.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-all)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Replace(Regex pattern, IWordDocument replaceDoc, bool saveFormatting)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_Text_RegularExpressions_Regex_Syncfusion_DocIO_DLS_IWordDocument_System_Boolean_)' | markdownify }}</td>
<td>Replaces all entries of given regular expression in the document with the another word document along with its formatting.</td>
<td>{{ '[Find and replace text with HTML.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-text-in-Word-with-HTML)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Replace(Regex pattern, TextBodyPart bodyPart)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_Text_RegularExpressions_Regex_Syncfusion_DocIO_DLS_TextBodyPart_)' | markdownify }}</td>
<td>Replaces all entries of given regular expression in the document with the TextBodyPart.</td>
<td>{{ '[Replace text with content control.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-text-with-content-control)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Replace(Regex pattern, TextBodyPart bodyPart, bool saveFormatting)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_Text_RegularExpressions_Regex_Syncfusion_DocIO_DLS_TextBodyPart_System_Boolean_)' | markdownify }}</td>
<td>Replaces all entries of given regular expression in the document with the TextBodyPart along with its formatting.</td>
<td>{{ '[Replace text in headers and footers.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-text-in-headers-and-footers)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Replace(Regex pattern, TextSelection textSelection)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_Text_RegularExpressions_Regex_Syncfusion_DocIO_DLS_TextSelection_)' | markdownify }}</td>
<td>Replaces the specified regular expression with a TextSelection in the document.</td>
<td>{{ '[Replace text within table.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-text-within-table)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[Replace(Regex pattern, string replace)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_Text_RegularExpressions_Regex_System_String_)' | markdownify }}</td>
<td>Replaces all entries of the given System.Text.RegularExpressions.Regex with the replace string.</td>
<td>{{ '[Find and replace all using regex.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-pattern-text-with-normal-text)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[ReplaceSingleLine(string given, TextBodyPart replacement, bool caseSensitive, bool wholeWord)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_ReplaceSingleLine_System_String_Syncfusion_DocIO_DLS_TextBodyPart_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Replaces all entries of given string which is extended to several paragraphs in the document with TextBodyPart, taking into consideration case sensitive, whole word options.</td>
<td>{{ '[Find and replace multiple paragraphs.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-multiple-paragraphs)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[ReplaceSingleLine(string given, TextSelection replacement, bool caseSensitive, bool wholeWord)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_ReplaceSingleLine_System_String_Syncfusion_DocIO_DLS_TextSelection_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Replaces all entries of given string which is extended to several paragraph in the document with TextSelection, taking into consideration case sensitive and whole word options.</td>
<td>{{ '[Replace text with another formatted text.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-next-and-replace-with-formatted-text)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[ReplaceSingleLine(string given, string replace, bool caseSensitive, bool wholeWord)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_ReplaceSingleLine_System_String_System_String_System_Boolean_System_Boolean_)' | markdownify }}</td>
<td>Replaces all entries of given string which is extended to several paragraphs in the document with replace string, taking into consideration of case sensitive and whole word options.</td>
<td>{{ '[Replace paragraphs with text.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-paragraphs-with-text)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[ReplaceSingleLine(Regex pattern, TextBodyPart replacement)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_ReplaceSingleLine_System_Text_RegularExpressions_Regex_Syncfusion_DocIO_DLS_TextBodyPart_)' | markdownify }}</td>
<td>Replaces all entries of given regular expression text which is extended to several paragraph in the document with the TextBodyPart.</td>
<td>{{ '[Find and replace text with page break.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-text-with-page-break)'| markdownify }}</td>
</tr>
<tr>
<td>{{ '[ReplaceSingleLine(Regex pattern, TextSelection replacement)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_ReplaceSingleLine_System_Text_RegularExpressions_Regex_Syncfusion_DocIO_DLS_TextSelection_)' | markdownify }}</td>
<td>Replaces all entries of given regular expression text which is extended to several paragraph in the document with the TextSelection.</td>
<td>{{ '[Replace text extended to several paragraphs.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-text-extended-to-several-paragraphs)' | markdownify }}</td>
</tr>
<tr>
<td>{{ '[ReplaceSingleLine(Regex pattern, string replace)](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_ReplaceSingleLine_System_Text_RegularExpressions_Regex_System_String_)' | markdownify }}</td>
<td>Replaces all entries of the specified pattern text, which is extended to several paragraph, with replace text.</td>
<td>{{ '[Replace multiline text with single line.](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-multiline-text-with-single-line)' | markdownify }}</td>
</tr>
</tbody>
</table>

## Finding contents in a Word document

You can find the first occurrence of a particular text within a single paragraph in the document by using [Find](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Find_System_String_System_Boolean_System_Boolean_) method. You can also find a particular text pattern in the document.

The following code example illustrates how to find a particular text in the document.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-text-in-Word-document/.NET/Find-text-in-Word-document/Program.cs" %}
//Loads the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Finds the first occurrence of a particular text in the document
TextSelection textSelection = document.Find("as graphical contents", false, true);
//Gets the found text as single text range
WTextRange textRange = textSelection.GetAsOneRange();
//Modifies the text
textRange.Text = "Replaced text";
//Sets highlight color
textRange.CharacterFormat.HighlightColor = Color.Yellow;
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Finds the first occurrence of a particular text in the document
TextSelection textSelection = document.Find("as graphical contents", false, true);
//Gets the found text as single text range
WTextRange textRange = textSelection.GetAsOneRange();
//Modifies the text
textRange.Text = "Replaced text";
//Sets highlight color
textRange.CharacterFormat.HighlightColor = Color.Yellow;
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Find the first occurrence of a particular text in the document
Dim textSelection As TextSelection = document.Find("as graphical contents", False, True)
'Gets the found text as single text range
Dim textRange As WTextRange = textSelection.GetAsOneRange()
'Modifies the text
textRange.Text = "Replaced text"
'Sets highlight color
textRange.CharacterFormat.HighlightColor = Color.Yellow
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-text-in-Word-document).

### Match case

The following code example illustrates how to find a particular text by matching case in the document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-match-case/.NET/Find-match-case/Program.cs" %}
//Loads the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Finds the first occurrence of a particular text in the document
TextSelection textSelection = document.Find("adventure", true, false);
//Gets the found text as single text range
WTextRange textRange = textSelection.GetAsOneRange();
//Modifies the text
textRange.Text = "Replaced text";
//Sets highlight color
textRange.CharacterFormat.HighlightColor = Color.Yellow;
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Finds the first occurrence of a particular text in the document
TextSelection textSelection = document.Find("adventure", true, false);
//Gets the found text as single text range
WTextRange textRange = textSelection.GetAsOneRange();
//Modifies the text
textRange.Text = "Replaced text";
//Sets highlight color
textRange.CharacterFormat.HighlightColor = Color.Yellow;
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Find the first occurrence of a particular text in the document
Dim textSelection As TextSelection = document.Find("adventure", true, false)
'Gets the found text as single text range
Dim textRange As WTextRange = textSelection.GetAsOneRange()
'Modifies the text
textRange.Text = "Replaced text"
'Sets highlight color
textRange.CharacterFormat.HighlightColor = Color.Yellow
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-match-case).

### Whole words only

The following code example illustrates how to find a whole word in the document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-whole-words-only/.NET/Find-whole-words-only/Program.cs" %}
//Loads the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Finds the first occurrence of a particular text in the document
TextSelection textSelection = document.Find("AdventureWorks", false, true);
//Gets the found text as single text range
WTextRange textRange = textSelection.GetAsOneRange();
//Modifies the text
textRange.Text = "Replaced text";
//Sets highlight color
textRange.CharacterFormat.HighlightColor = Color.Yellow;
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Finds the first occurrence of a particular text in the document
TextSelection textSelection = document.Find("AdventureWorks", false, true);
//Gets the found text as single text range
WTextRange textRange = textSelection.GetAsOneRange();
//Modifies the text
textRange.Text = "Replaced text";
//Sets highlight color
textRange.CharacterFormat.HighlightColor = Color.Yellow;
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Find the first occurrence of a particular text in the document
Dim textSelection As TextSelection = document.Find("AdventureWorks", false, true)
'Gets the found text as single text range
Dim textRange As WTextRange = textSelection.GetAsOneRange()
'Modifies the text
textRange.Text = "Replaced text"
'Sets highlight color
textRange.CharacterFormat.HighlightColor = Color.Yellow
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-whole-words-only).

### Find next occurrence

The following code example illustrates how to find the next occurrence in the document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-next/.NET/Find-next/Program.cs" %}
//Loads the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Finds the first occurrence of a particular text in the document
TextSelection textSelection = document.Find("as graphical contents", false, true);
//Gets the found text as single text range
WTextRange textRange = textSelection.GetAsOneRange();
//Modifies the text
textRange.Text = "Replaced text";
//Sets highlight color
textRange.CharacterFormat.HighlightColor = Color.Yellow;
//Finds the next occurrence of a particular text from the previous paragraph
textSelection = document.FindNext(textRange.OwnerParagraph, "paragraph", true, false);
//Gets the found text as single text range
WTextRange range = textSelection.GetAsOneRange();
//Sets bold formatting
range.CharacterFormat.Bold = true;
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Finds the first occurrence of a particular text in the document
TextSelection textSelection = document.Find("as graphical contents", false, true);
//Gets the found text as single text range
WTextRange textRange = textSelection.GetAsOneRange();
//Modifies the text
textRange.Text = "Replaced text";
//Sets highlight color
textRange.CharacterFormat.HighlightColor = Color.Yellow;
//Finds the next occurrence of a particular text from the previous paragraph
textSelection = document.FindNext(textRange.OwnerParagraph, "paragraph", true, false);
//Gets the found text as single text range
WTextRange range = textSelection.GetAsOneRange();
//Sets bold formatting
range.CharacterFormat.Bold = true;
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Find the first occurrence of a particular text in the document
Dim textSelection As TextSelection = document.Find("as graphical contents", False, True)
'Gets the found text as single text range
Dim textRange As WTextRange = textSelection.GetAsOneRange()
'Modifies the text
textRange.Text = "Replaced text"
'Sets highlight color
textRange.CharacterFormat.HighlightColor = Color.Yellow
'Finds the next occurrence of a particular text from the previous paragraph
textSelection = document.FindNext(textRange.OwnerParagraph, "paragraph", True, False)
'Gets the found text as single text range
Dim range As WTextRange = textSelection.GetAsOneRange()
'Sets bold formatting
range.CharacterFormat.Bold = True
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-next).

## Replacing the Search results

### Find and replace text with body part

You can replace a particular text with another text, part of a document or entire document by using [Replace](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_String_Syncfusion_DocIO_DLS_TextBodyPart_System_Boolean_System_Boolean_System_Boolean_) method. 

The following code example illustrates how to replace a particular text.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Replace-text-with-body-part/.NET/Replace-text-with-body-part/Program.cs" %}
//Loads a template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Finds the first occurrence of a particular text in the document
TextSelection selection = document.Find("contents", false, false);
//Initializes text body part
TextBodyPart bodyPart = new TextBodyPart(selection);
//Replaces a particular text with the text body part
document.Replace("paragraph", bodyPart, false, true, true);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a template document
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Finds the first occurrence of a particular text in the document
TextSelection selection = document.Find("contents", false, false);
//Initializes text body part
TextBodyPart bodyPart = new TextBodyPart(selection);
//Replaces a particular text with the text body part
document.Replace("paragraph", bodyPart, false, true, true);
//Saves and closes the document
document.Save("Replace.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a template document
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Finds the first occurrence of a particular text in the document
Dim selection As TextSelection = document.Find("contents", False, False)
'Initializes text body part
Dim bodyPart As New TextBodyPart(selection)
'Replaces a particular text with the text body part
document.Replace("paragraph", bodyPart, False, True, True)
'Saves and closes the document
document.Save("Replace.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-text-with-body-part).

### Find and replace first occurrence

You can specify to replace only the first occurrence of the specified text by setting [ReplaceFirst](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_ReplaceFirst) property of [WordDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html) class to true. 

The following code example illustrates how to replace the first occurrence of a particular text.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-and-replace-first-occurrence/.NET/Find-and-replace-first-occurrence/Program.cs" %}
//Loads a template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Sets to replace only the first occurrence of a particular text
document.ReplaceFirst = true;
//Finds the first occurrence of a particular text in the document
TextSelection selection = document.Find("contents", false, false);
//Initializes text body part
TextBodyPart bodyPart = new TextBodyPart(selection);
//Replaces a particular text with the text body part
document.Replace("paragraph", bodyPart, false, true, true);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a template document
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Sets to replace only the first occurrence of a particular text
document.ReplaceFirst = true;
//Finds the first occurrence of a particular text in the document
TextSelection selection = document.Find("contents", false, false);
//Initializes text body part
TextBodyPart bodyPart = new TextBodyPart(selection);
//Replaces a particular text with the text body part
document.Replace("paragraph", bodyPart, false, true, true);
//Saves and closes the document
document.Save("Replace.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a template document
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Sets to replace only the first occurrence of a particular text
document.ReplaceFirst = True
'Finds the first occurrence of a particular text in the document
Dim selection As TextSelection = document.Find("contents", False, False)
'Initializes text body part
Dim bodyPart As New TextBodyPart(selection)
'Replaces a particular text with the text body part
document.Replace("paragraph", bodyPart, False, True, True)
'Saves and closes the document
document.Save("Replace.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-first-occurrence).

### Find and replace text with Word document

The following code example illustrates how to replace a particular text with a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Replace-text-with-Word-document/.NET/Replace-text-with-Word-document/Program.cs" %}
//Loads a template document
FileStream fileStreamPath1 = new FileStream("SourceTemplate.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath1, FormatType.Docx);
//Gets the document to replace the text
FileStream fileStreamPath2 = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
IWordDocument replaceDocument = new WordDocument(fileStreamPath2, FormatType.Docx);
//Replaces a particular text with another document
document.Replace("paragraph", replaceDocument, false, true, true);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a template document
WordDocument document = new WordDocument("SourceTemplate.docx", FormatType.Docx);
//Gets the document to replace the text
IWordDocument replaceDocument = new WordDocument("Template.docx");
//Replaces a particular text with another document
document.Replace("paragraph", replaceDocument, false, true, true);
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a template document
Dim document As New WordDocument("SourceTemplate.docx", FormatType.Docx)
'Gets the document to replace the text
Dim replaceDocument As IWordDocument = New WordDocument("Template.docx")
'Replaces a particular text with another document
document.Replace("paragraph", replaceDocument, False, True, True)
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-text-with-Word-document).

### Find and replace paragraphs with text

You can replace a particular text extended to several paragraphs in a document with another text or part of a document by using [ReplaceSingleLine](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_ReplaceSingleLine_System_String_System_String_System_Boolean_System_Boolean_) method.

The following code example illustrates how to replace the text extended to several paragraphs with simple text.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-and-replace-paragraphs-with-text/.NET/Find-and-replace-paragraphs-with-text/Program.cs" %}
//Loads a template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Replaces the text extended to two paragraphs with simple text
document.ReplaceSingleLine("First paragraph Second paragraph", "Replaced paragraph", true, false);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a template document
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Replaces the text extended to two paragraphs with simple text
document.ReplaceSingleLine("First paragraph Second paragraph", "Replaced paragraph", true, false);
//Saves and closes the document
document.Save("Replace.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a template document
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Replaces the text extended to two paragraphs with simple text
document.ReplaceSingleLine("First paragraph Second paragraph", "Replaced paragraph", True, False)
'Saves and closes the document
document.Save("Replace.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-paragraphs-with-text).

### Find next and replace with formatted text
You can find the next occurrence of a text using the [FindNext](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindNext_Syncfusion_DocIO_DLS_TextBodyItem_System_Text_RegularExpressions_Regex_) method. You can also replace the text that extends to two paragraphs using [ReplaceSingleLine](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_ReplaceSingleLine_System_String_Syncfusion_DocIO_DLS_TextSelection_System_Boolean_System_Boolean_) method.

The following code example illustrates how to replace the text extended to several paragraphs with a particular text in the document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-next-and-replace-with-formatted-text/.NET/Find-next-and-replace-with-formatted-text/Program.cs" %}
//Open the file as a Stream.
using (FileStream docStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
{
    //Load the file stream into a Word document.
    using (WordDocument document = new WordDocument(docStream, FormatType.Docx))
    {
        //Access the specific paragraph in a Word document.
        TextBodyItem textBodyItem = document.Sections[0].Paragraphs[3] as WParagraph;
        //Find the next occurrence of the specified text from the previous paragraph.
        TextSelection textSelections = document.FindNext(textBodyItem, new Regex("Adventure Works Cycles"));
        //Replace the text extended to two paragraphs with the above selected text.
        document.ReplaceSingleLine("CompanyName", textSelections, true, true);
        //Save a Word document to the MemoryStream.
        MemoryStream outputStream = new MemoryStream();
        document.Save(outputStream, FormatType.Docx);
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load an existing Word document. 
using (WordDocument document = new WordDocument("Input.docx", FormatType.Docx))
{
    //Access the specific paragraph in a Word document.
    TextBodyItem textBodyItem = document.Sections[0].Paragraphs[3] as WParagraph;
    //Find the next occurrence of the specified text from the previous paragraph.
    TextSelection textSelections = document.FindNext(textBodyItem, new Regex("Adventure Works Cycles"));
    //Replace the text extended to two paragraphs with the above selected text.
    document.ReplaceSingleLine("CompanyName", textSelections, true, true);
    //Save a Word document.
    document.Save("Sample.docx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load an existing Word document. 
Using document As WordDocument = New WordDocument("Input.docx", FormatType.Docx)
    'Access the specific paragraph in a Word document.
    Dim textBodyItem As TextBodyItem = TryCast(document.Sections(0).Paragraphs(3), WParagraph)
    'Find the next occurrence of the specified text from the previous paragraph.
    Dim textSelections As TextSelection = document.FindNext(textBodyItem, New Regex("Adventure Works Cycles"))
    'Replace the text extended to two paragraphs with the above selected text.
    document.ReplaceSingleLine("CompanyName", textSelections, True, True)
    'Save a Word document.
    document.Save("Sample.docx")
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-next-and-replace-with-formatted-text).

### Find and replace text with other text

You can find text in a Word document and replace it with other text. Unlike the [Find](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Find_System_String_System_Boolean_System_Boolean_) method, the Replace method replaces all occurrences of the text. You can customize it to replace only the first occurrence of a text by setting the [ReplaceFirst](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_ReplaceFirst) property of the [WordDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html) class to true.

The following code example illustrates how to replace all occurrences of a misspelled word with the correctly spelled word.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Replace-misspelled-word/.NET/Replace-misspelled-word/Program.cs" %}
//Loads the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Finds all occurrences of a misspelled word and replaces with properly spelled word
document.Replace("Cyles", "Cycles", true, true);
//Saves and closes the document
FileStream outputStream = new FileStream("Sample.docx", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite);
document.Save(outputStream, FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
//Finds all occurrences of a misspelled word and replaces with properly spelled word
document.Replace("Cyles", "Cycles", true, true);
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As WordDocument = New WordDocument("Template.docx")
'Finds all occurrences of a misspelled word and replaces with properly spelled word
document.Replace("Cyles", "Cycles", True, True)
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-misspelled-word).

### Find and replace non-breaking spaces with regular spaces
You can find non-breaking spaces used in a Word document and replace them with regular spaces using [Replace](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_String_System_String_System_Boolean_System_Boolean_) method.

The following code example illustrates how to find and replace non-breaking spaces with regular spaces in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-and-replace-non-breaking-spaces/.NET/Find-and-replace-non-breaking-spaces/Program.cs" %}
//Open the file as stream.
using (FileStream docStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
{
    //Load the file stream into a Word document.
    using (WordDocument document = new WordDocument(docStream, FormatType.Docx))
    {
        //Replace all occurrences of non-breaking spaces with regular spaces.
        document.Replace(ControlChar.NonBreakingSpace, ControlChar.Space, false, false);
        //Save the Word document to the MemoryStream.
        MemoryStream outputStream = new MemoryStream();
        document.Save(outputStream, FormatType.Docx);
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load an existing Word document.
using (WordDocument document = new WordDocument("Input.docx", FormatType.Docx))
{
    //Replace all occurrences of non-breaking spaces with regular spaces.
    document.Replace(ControlChar.NonBreakingSpace, ControlChar.Space, false, false);
    //Save the Word document.
    document.Save("Sample.docx", FormatType.Docx);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load an existing Word document. 
Using document As WordDocument = New WordDocument("Input.docx", FormatType.Docx)
    'Replace all occurrences of non-breaking spaces with regular spaces.
    document.Replace(ControlChar.NonBreakingSpace, ControlChar.Space, false, False)
    'Save the Word document.
    document.Save("Sample.docx", FormatType.Docx)
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-non-breaking-spaces).

### Find and replace text with an image
You can find placeholder text in a Word document and replace it with any desired image.

The following code example illustrates how to find and replace text in a word document with an image

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-and-replace-text-with-image/.NET/Find-and-replace-text-with-image/Program.cs" %}
//Loads the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Finds all the image placeholder text in the Word document
TextSelection[] textSelections = document.FindAll(new Regex("^//(.*)"));
for (int i = 0; i < textSelections.Length; i++)
{
    //Replaces the image placeholder text with desired image
    WParagraph paragraph = new WParagraph(document);
    FileStream imageStream = new FileStream("Filepath" + textSelections[i].SelectedText + ".png", FileMode.Open, FileAccess.ReadWrite);
    WPicture picture = paragraph.AppendPicture(imageStream) as WPicture;
    TextSelection newSelection = new TextSelection(paragraph, 0, 1);
    TextBodyPart bodyPart = new TextBodyPart(document);
    bodyPart.BodyItems.Add(paragraph);
    document.Replace(textSelections[i].SelectedText, bodyPart, true, true);
}
//Saves and closes the document
FileStream outputStream = new FileStream("Sample.docx", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite);
document.Save(outputStream, FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
//Finds all the image placeholder text in the Word document
TextSelection[] textSelections = document.FindAll(new Regex("^//(.*)"));
for (int i = 0; i < textSelections.Length; i++)
{
    //Replaces the image placeholder text with desired image
    WParagraph paragraph = new WParagraph(document);
    WPicture picture = paragraph.AppendPicture(Image.FromFile(@"Filepath" + textSelections[i].SelectedText + ".png")) as WPicture;
    TextSelection newSelection = new TextSelection(paragraph, 0, 1);
    TextBodyPart bodyPart = new TextBodyPart(document);
    bodyPart.BodyItems.Add(paragraph);
    document.Replace(textSelections[i].SelectedText, bodyPart, true, true);
}
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As WordDocument = New WordDocument("Template.docx")
'Finds all the image placeholder text in the Word document
Dim textSelections() As TextSelection = document.FindAll(New Regex("^//(.*)"))
For i As Integer = 0 To textSelections.Length – 1
    'Replaces the image placeholder text with desired image
    Dim paragraph As WParagraph = New WParagraph(document)
    Dim picture As WPicture = CType(paragraph.AppendPicture(Image.FromFile("Filepath" + textSelections(i).SelectedText + ".png")), WPicture)
    Dim newSelection As TextSelection = New TextSelection(paragraph, 0, 1)
    Dim bodyPart As TextBodyPart = New TextBodyPart(document)
    bodyPart.BodyItems.Add(paragraph)
    document.Replace(textSelections(i).SelectedText, bodyPart, True, True)
Next
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% highlight c# tabtitle="Xamarin" %}
//"App" is the class of Portable project
Assembly assembly = typeof(App).GetTypeInfo().Assembly;
//Opens an existing wod document
WordDocument document = new WordDocument(assembly.GetManifestResourceStream("Sample.Assets.Template.docx"), FormatType.Automatic);
//Finds all the image placeholder text in the Word document
TextSelection[] textSelections = document.FindAll(new Regex("^//(.*)"));
for (int i = 0; i < textSelections.Length; i++)
{
    //Replaces the image placeholder text with desired image
    WParagraph paragraph = new WParagraph(document);
    Stream imageStream = assembly.GetManifestResourceStream("Sample.Assets."+ textSelections[i].SelectedText.Trim('/') + ".png");
    WPicture picture = paragraph.AppendPicture(imageStream) as WPicture;
    TextSelection newSelection = new TextSelection(paragraph, 0, 1);
    TextBodyPart bodyPart = new TextBodyPart(document);
    bodyPart.BodyItems.Add(paragraph);
    document.Replace(textSelections[i].SelectedText, bodyPart, true, true);
}
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Save the stream as a file in the device and invoke it for viewing
Xamarin.Forms.DependencyService.Get<ISave>().SaveAndView("Sample.docx", "application/msword", stream);
//Closes the document instance
document.Close();
//Please download the helper files from the below link to save the stream as file and open the file for viewing in Xamarin platform
//https://help.syncfusion.com/document-processing/word/word-library/net/create-word-document-in-xamarin#helper-files-for-xamarin
{% endhighlight %}

{% highlight c# tabtitle="UWP" %}
//"App" is the class of Portable project
Assembly assembly = typeof(App).GetTypeInfo().Assembly;
//Opens an existing word document 
WordDocument document = new WordDocument(assembly.GetManifestResourceStream("Sample.Assets.Template.docx"), FormatType.Docx);
//Finds all the image placeholder text in the Word document
TextSelection[] textSelections = document.FindAll(new Regex("^//(.*)"));
for (int i = 0; i < textSelections.Length; i++)
{
    //Replaces the image placeholder text with desired image
    WParagraph paragraph = new WParagraph(document);
    Stream imageStream = assembly.GetManifestResourceStream("Sample.Assets." + textSelections[i].SelectedText.Trim('/') + ".png");
    WPicture picture = paragraph.AppendPicture(imageStream) as WPicture;
    TextSelection newSelection = new TextSelection(paragraph, 0, 1);
    TextBodyPart bodyPart = new TextBodyPart(document);
    bodyPart.BodyItems.Add(paragraph);
    document.Replace(textSelections[i].SelectedText, bodyPart, true, true);
}
//Saves the Word file to MemoryStream
MemoryStream stream = new MemoryStream();
await document.SaveAsync(stream, FormatType.Docx);
//Saves the stream as Word document file in local machine
Save(stream, "Sample.docx");
//Closes the document instance
document.Close();
//Please refer the below link to save Word document in UWP platform
//https://help.syncfusion.com/document-processing/word/word-library/net/create-word-document-in-uwp#save-word-document-in-uwp
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-text-with-image).

### Find and replace a pattern of text with a merge field 
You can find and replace a pattern of text in a Word document with merge fields using Regex.

The following code example illustrates how to create a mail merge template by replacing a pattern of text (enclosed within ‘«’ and ‘»’) in a Word document with the desired merge fields.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-and-replace-with-merge-field/.NET/Find-and-replace-with-merge-field/Program.cs" %}
//Loads the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Finds all the placeholder text enclosed within '«' and '»' in the Word document
TextSelection[] textSelections = document.FindAll(new Regex("«([(?i)image(?-i)]*:*[a-zA-Z0-9 ]*:*[a-zA-Z0-9 ]+)»"));
string[] searchedPlaceholders = new string[textSelections.Length];
for (int i = 0; i < textSelections.Length; i++)
{
    searchedPlaceholders[i] = textSelections[i].SelectedText;
}
for (int i = 0; i < searchedPlaceholders.Length; i++)
{
    //Replaces the placeholder text enclosed within '«' and '»' with desired merge field
    WParagraph paragraph = new WParagraph(document);
    paragraph.AppendField(searchedPlaceholders[i].TrimStart('«').TrimEnd('»'), FieldType.FieldMergeField);
    TextSelection newSelection = new TextSelection(paragraph, 0, paragraph.Items.Count);
    TextBodyPart bodyPart = new TextBodyPart(document);
    bodyPart.BodyItems.Add(paragraph);
    document.Replace(searchedPlaceholders[i], bodyPart, true, true, true);
}
//Saves and closes the document
FileStream outputStream = new FileStream("Sample.docx", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite);
document.Save(outputStream, FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
//Finds all the placeholder text enclosed within '«' and '»' in the Word document
TextSelection[] textSelections = document.FindAll(new Regex("«([(?i)image(?-i)]*:*[a-zA-Z0-9 ]*:*[a-zA-Z0-9 ]+)»"));
string[] searchedPlaceholders = new string[textSelections.Length];
for (int i = 0; i < textSelections.Length; i++)
{
    searchedPlaceholders[i] = textSelections[i].SelectedText;
}
for (int i = 0; i < searchedPlaceholders.Length; i++)
{
    //Replaces the placeholder text enclosed within '«' and '»' with desired merge field
    WParagraph paragraph = new WParagraph(document);
    paragraph.AppendField(searchedPlaceholders[i].TrimStart('«').TrimEnd('»'), FieldType.FieldMergeField);
    TextSelection newSelection = new TextSelection(paragraph, 0, paragraph.Items.Count);
    TextBodyPart bodyPart = new TextBodyPart(document);
    bodyPart.BodyItems.Add(paragraph);
    document.Replace(searchedPlaceholders[i], bodyPart, true, true, true);
}
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As WordDocument = New WordDocument("Template.docx")
'Finds all the placeholder text enclosed within '«' and '»' in the Word document
Dim textSelections() As TextSelection = document.FindAll(New Regex("([(?i)image(?-i)]*:*[a-zA-Z0-9 ]*:*[a-zA-Z0-9 ]+)»"))
Dim searchedPlaceholders() As String = New String(textSelections.Length - 1) {}
For i As Integer = 0 To textSelections.Length - 1
    searchedPlaceholders(i) = textSelections(i).SelectedText
Next
For i As Integer = 0 To searchedPlaceholders.Length - 1
    'Replaces the placeholder text enclosed within '«' and '»' with desired merge field
    Dim paragraph As WParagraph = New WParagraph(document)
    paragraph.AppendField(searchedPlaceholders(i).TrimStart("«").TrimEnd("»"), FieldType.FieldMergeField)
    Dim newSelection As TextSelection = New TextSelection(paragraph, 0, 	paragraph.Items.Count)
    Dim bodyPart As TextBodyPart = New TextBodyPart(document)
    bodyPart.BodyItems.Add(paragraph)
    document.Replace(searchedPlaceholders(i), bodyPart, True, True, True)
Next
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-with-merge-field).

### Find and replace text with a table 
You can find placeholder text in a Word document and replace it with a table.

The following code example illustrates how to do this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-and-replace-text-with-table/.NET/Find-and-replace-text-with-table/Program.cs" %}
//Loads the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Creates a new table
WTable table = new WTable(document);
table.ResetCells(1, 6);
table[0, 0].Width = 52f;
table[0, 0].AddParagraph().AppendText("Supplier ID");
table[0, 1].Width = 128f;
table[0, 1].AddParagraph().AppendText("Company Name");
table[0, 2].Width = 70f;
table[0, 2].AddParagraph().AppendText("Contact Name");
table[0, 3].Width = 92f;
table[0, 3].AddParagraph().AppendText("Address");
table[0, 4].Width = 66.5f;
table[0, 4].AddParagraph().AppendText("City");
table[0, 5].Width = 56f;
table[0, 5].AddParagraph().AppendText("Country");
//Imports data to the table
ImportDataToTable(table);
//Applies the built-in table style (Medium Shading 1 Accent 1) to the table
table.ApplyStyle(BuiltinTableStyle.MediumShading1Accent1);
//Replaces the table placeholder text with a new table
TextBodyPart bodyPart = new TextBodyPart(document);
bodyPart.BodyItems.Add(table);
document.Replace("[Suppliers table]", bodyPart, true, true, true);
//Saves and closes the document
FileStream outputStream = new FileStream("Sample.docx", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite);
document.Save(outputStream, FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
//Creates a new table
WTable table = new WTable(document);
table.ResetCells(1, 6);
table[0, 0].Width = 52f;
table[0, 0].AddParagraph().AppendText("Supplier ID");
table[0, 1].Width = 128f;
table[0, 1].AddParagraph().AppendText("Company Name");
table[0, 2].Width = 70f;
table[0, 2].AddParagraph().AppendText("Contact Name");
table[0, 3].Width = 92f;
table[0, 3].AddParagraph().AppendText("Address");
table[0, 4].Width = 66.5f;
table[0, 4].AddParagraph().AppendText("City");
table[0, 5].Width = 56f;
table[0, 5].AddParagraph().AppendText("Country");
//Imports data to the table
ImportDataToTable(table);
//Applies the built-in table style (Medium Shading 1 Accent 1) to the table
table.ApplyStyle(BuiltinTableStyle.MediumShading1Accent1);
//Replaces the table placeholder text with a new table
TextBodyPart bodyPart = new TextBodyPart(document);
bodyPart.BodyItems.Add(table);
document.Replace("[Suppliers table]", bodyPart, true, true, true);
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As WordDocument = New WordDocument("Template.docx")
'Creates a new table
Dim table As WTable = New WTable(document)
table.ResetCells(1, 6)
table(0, 0).Width = 52.0
table(0, 0).AddParagraph.AppendText("Supplier ID")
table(0, 1).Width = 128.0
table(0, 1).AddParagraph.AppendText("Company Name")
table(0, 2).Width = 70.0
table(0, 2).AddParagraph.AppendText("Contact Name")
table(0, 3).Width = 92.0
table(0, 3).AddParagraph.AppendText("Address")
table(0, 4).Width = 66.5
table(0, 4).AddParagraph.AppendText("City")
table(0, 5).Width = 56.0
table(0, 5).AddParagraph.AppendText("Country")
'Imports data to the table
ImportDataToTable(table)
'Applies the built-in table style (Medium Shading 1 Accent 1) to the table
table.ApplyStyle(BuiltinTableStyle.MediumShading1Accent1)
Dim bodyPart As TextBodyPart = New TextBodyPart(document)
bodyPart.BodyItems.Add(table)
document.Replace("[Suppliers table]", bodyPart, True, True, True)
'Saves the Word document
document.Save("Result.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

The following code example provides supporting methods for the above code.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
private void ImportDataToTable(WTable table)
{
    FileStream fs = new FileStream("Suppliers.xml", FileMode.Open, FileAccess.Read);
    XmlReader reader = XmlReader.Create(fs);
    if (reader == null)
        throw new Exception("reader");
    while (reader.NodeType != XmlNodeType.Element)
        reader.Read();
    if (reader.LocalName != "SuppliersList")
        throw new XmlException("Unexpected xml tag " + reader.LocalName);
    reader.Read();
    while (reader.NodeType == XmlNodeType.Whitespace)
        reader.Read();
    while (reader.LocalName != "SuppliersList")
    {
        if (reader.NodeType == XmlNodeType.Element)
        {
            switch (reader.LocalName)
            {
                case "Suppliers":
                    //Adds new row to the table for importing data from next record
                    WTableRow tableRow = table.AddRow(true);
                    ImportDataToRow(reader, tableRow);
                    break;
            }
        }
        else
        {
            reader.Read();
            if ((reader.LocalName == "SuppliersList") && reader.NodeType == XmlNodeType.EndElement)
                break;
        }
    }
    reader.Dispose();
    fs.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void ImportDataToTable(WTable table)
{
    FileStream fs = new FileStream("Suppliers.xml", FileMode.Open, FileAccess.Read);
    XmlReader reader = XmlReader.Create(fs);
    if (reader == null)
        throw new Exception("reader");
    while (reader.NodeType != XmlNodeType.Element)
        reader.Read();
    if (reader.LocalName != "SuppliersList")
        throw new XmlException("Unexpected xml tag " + reader.LocalName);
    reader.Read();
    while (reader.NodeType == XmlNodeType.Whitespace)
        reader.Read();
    while (reader.LocalName != "SuppliersList")
    {
        if (reader.NodeType == XmlNodeType.Element)
        {
            switch (reader.LocalName)
            {
                case "Suppliers":
                    //Adds new row to the table for importing data from next record
                    WTableRow tableRow = table.AddRow(true);
                    ImportDataToRow(reader, tableRow);
                    break;
            }
        }
        else
        {
            reader.Read();
            if ((reader.LocalName == "SuppliersList") && reader.NodeType == XmlNodeType.EndElement)
                break;
        }
    }
    reader.Dispose();
    fs.Dispose();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub ImportDataToTable(ByVal table As WTable)
    Dim fs As FileStream = New FileStream("Suppliers.xml", FileMode.Open, FileAccess.Read)
    Dim reader As XmlReader = XmlReader.Create(fs)
    If (reader Is Nothing) Then
        Throw New Exception("reader")
    End If
    While (reader.NodeType <> XmlNodeType.Element)
        reader.Read()
    End While
    If (reader.LocalName <> "SuppliersList") Then
        Throw New XmlException(("Unexpected xml tag " + reader.LocalName))
    End If
    reader.Read
    While (reader.NodeType = XmlNodeType.Whitespace)
        reader.Read()
    End While
    While (reader.LocalName <> "SuppliersList")
        If (reader.NodeType = XmlNodeType.Element) Then
            Select Case (reader.LocalName)
                Case "Suppliers"
                    'Adds new row to the table for importing data from next record
                    Dim tableRow As WTableRow = table.AddRow(True)
                    ImportDataToRow(reader, tableRow)
            End Select
        Else
            reader.Read
            If ((reader.LocalName = "SuppliersList") _
                AndAlso (reader.NodeType = XmlNodeType.EndElement)) Then
                Exit While
            End If
        End If
    End While
    reader.Dispose
    fs.Dispose
End Sub
{% endhighlight %}

{% endtabs %}

The following code example provides supporting methods for the above code.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
Private void ImportDataToRow(XmlReader reader, WTableRow tableRow)
{
    if (reader == null)
        throw new Exception("reader");
    while (reader.NodeType != XmlNodeType.Element)
        reader.Read();
    if (reader.LocalName != "Suppliers")
        throw new XmlException("Unexpected xml tag " + reader.LocalName);
    reader.Read();
    while (reader.NodeType == XmlNodeType.Whitespace)
        reader.Read();
    while (reader.LocalName != "Suppliers")
    {
        if (reader.NodeType == XmlNodeType.Element)
        {
            switch (reader.LocalName)
            {
                case "SupplierID":
                    tableRow.Cells[0].AddParagraph().AppendText(reader.ReadElementContentAsString());
                    break;
                case "CompanyName":
                    tableRow.Cells[1].AddParagraph().AppendText(reader.ReadElementContentAsString());
                    break;
                case "ContactName":
                    tableRow.Cells[2].AddParagraph().AppendText(reader.ReadElementContentAsString());
                    break;
                case "Address":
                    tableRow.Cells[3].AddParagraph().AppendText(reader.ReadElementContentAsString());
                    break;
                case "City":
                    tableRow.Cells[4].AddParagraph().AppendText(reader.ReadElementContentAsString());
                    break;
                case "Country":
                    tableRow.Cells[5].AddParagraph().AppendText(reader.ReadElementContentAsString());
                    break;
                default:
                    reader.Skip();
                    break;
            }
        }
        else
        {
            reader.Read();
            if ((reader.LocalName == "Suppliers") && reader.NodeType == XmlNodeType.EndElement)
                break;
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
Private void ImportDataToRow(XmlReader reader, WTableRow tableRow)
{
    if (reader == null)
        throw new Exception("reader");
    while (reader.NodeType != XmlNodeType.Element)
        reader.Read();
    if (reader.LocalName != "Suppliers")
        throw new XmlException("Unexpected xml tag " + reader.LocalName);
    reader.Read();
    while (reader.NodeType == XmlNodeType.Whitespace)
        reader.Read();
    while (reader.LocalName != "Suppliers")
    {
        if (reader.NodeType == XmlNodeType.Element)
        {
            switch (reader.LocalName)
            {
                case "SupplierID":
                    tableRow.Cells[0].AddParagraph().AppendText(reader.ReadElementContentAsString());
                    break;
                case "CompanyName":
                    tableRow.Cells[1].AddParagraph().AppendText(reader.ReadElementContentAsString());
                    break;
                case "ContactName":
                    tableRow.Cells[2].AddParagraph().AppendText(reader.ReadElementContentAsString());
                    break;
                case "Address":
                    tableRow.Cells[3].AddParagraph().AppendText(reader.ReadElementContentAsString());
                    break;
                case "City":
                    tableRow.Cells[4].AddParagraph().AppendText(reader.ReadElementContentAsString());
                    break;
                case "Country":
                    tableRow.Cells[5].AddParagraph().AppendText(reader.ReadElementContentAsString());
                    break;
                default:
                    reader.Skip();
                    break;
            }
        }
        else
        {
            reader.Read();
            if ((reader.LocalName == "Suppliers") && reader.NodeType == XmlNodeType.EndElement)
                break;
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub ImportDataToRow(ByVal reader As XmlReader, ByVal tableRow As WTableRow)
    If (reader Is Nothing) Then
        Throw New Exception("reader")
    End If
    While (reader.NodeType <> XmlNodeType.Element)
        reader.Read()
    End While
    If (reader.LocalName <> "Suppliers") Then
        Throw New XmlException(("Unexpected xml tag " + reader.LocalName))
    End If
    reader.Read
    While (reader.NodeType = XmlNodeType.Whitespace)
        reader.Read()
    End While
    While (reader.LocalName <> "Suppliers")
        If (reader.NodeType = XmlNodeType.Element) Then
            Select Case (reader.LocalName)
                Case "SupplierID"
                    tableRow.Cells(0).AddParagraph.AppendText(reader.ReadElementContentAsString)
                Case "CompanyName"
                    tableRow.Cells(1).AddParagraph.AppendText(reader.ReadElementContentAsString)
                Case "ContactName"
                    tableRow.Cells(2).AddParagraph.AppendText(reader.ReadElementContentAsString)
                Case "Address"
                    tableRow.Cells(3).AddParagraph.AppendText(reader.ReadElementContentAsString)
                Case "City"
                    tableRow.Cells(4).AddParagraph.AppendText(reader.ReadElementContentAsString)
                Case "Country"
                    tableRow.Cells(5).AddParagraph.AppendText(reader.ReadElementContentAsString)
                Case Else
                    reader.Skip
            End Select
        Else
            reader.Read
            If ((reader.LocalName = "Suppliers") _
                AndAlso (reader.NodeType = XmlNodeType.EndElement)) Then
                Exit While
            End If
        End If
    End While
End Sub
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-text-with-table).

### Find and replace text in Word document with another document 

You can find and replace text with another Word document.

The following code example illustrates how to merge or combine Word documents by replacing text with another document (the content of a subheading).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-and-replace-with-Word-document/.NET/Find-and-replace-with-Word-document/Program.cs" %}
//Loads the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Finds all the content placeholder text in the Word document
TextSelection[] textSelections = document.FindAll(new Regex(@"\[(.*)\]"));
for (int i = 0; i < textSelections.Length; i++)
{
    //Replaces the content placeholder text with desired Word document.
    WordDocument subDocument = new WordDocument(new FileStream("Filepath" + textSelections[i].SelectedText.TrimStart('[').TrimEnd(']') + ".docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite), FormatType.Docx);
    document.Replace(textSelections[i].SelectedText, subDocument, true, true);
    subDocument.Dispose();
}
//Saves and closes the document
FileStream outputStream = new FileStream("Sample.docx", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite);
document.Save(outputStream, FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
//Finds all the content placeholder text in the Word document
TextSelection[] textSelections = document.FindAll(new Regex(@"\[(.*)\]"));
for (int i = 0; i < textSelections.Length; i++)
{
    //Replaces the content placeholder text with desired Word document.
    WordDocument subDocument = new WordDocument("Filepath"+ textSelections[i].SelectedText.TrimStart('[').TrimEnd(']') + ".docx", FormatType.Docx);
    document.Replace(textSelections[i].SelectedText, subDocument, true, true);
    subDocument.Dispose();
}
//Saves and closes the document instance
document.Save("Result.docx");
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As WordDocument = New WordDocument("Template.docx")
'Finds all the content placeholder text in the Word document
Dim textSelections() As TextSelection = document.FindAll(New Regex("\[(.*)\]"))
For i As Integer = 0 To textSelections.Length - 1
    'Replaces the content placeholder text with desired Word document.
    Dim subDocument As WordDocument = New WordDocument("Filepath" + textSelections(i).SelectedText.TrimStart("[").TrimEnd("]") + ".docx", FormatType.Docx)
    document.Replace(textSelections(i).SelectedText, subDocument, True, True)
    subDocument.Dispose()
Next
'Saves and closes the document instance
document.Save("Result.docx")
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-with-Word-document).

### Find and replace text extending to several paragraphs

Apart from finding text in a paragraph, you can also find and replace text that extends to several paragraphs in a Word document. You can find the first occurrence of the text that extends to several paragraphs by using the [FindSingleLine](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindSingleLine_System_String_System_Boolean_System_Boolean_) method. Find the next occurrences of the text by using the [FindNextSingleLine](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindNextSingleLine_Syncfusion_DocIO_DLS_TextBodyItem_System_String_System_Boolean_System_Boolean_) method. Similarly, you can replace text that extends to several paragraphs by using [ReplaceSingleLine](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_ReplaceSingleLine_System_String_Syncfusion_DocIO_DLS_TextBodyPart_System_Boolean_System_Boolean_) method.

N> The [FindSingleLine](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindSingleLine_System_String_System_Boolean_System_Boolean_) method matches text across multiple paragraphs but skips intermediate empty paragraphs in the resulting text selection.

The following code example illustrates how to replace text that extends to several paragraphs.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-and-replace-multiple-paragraphs/.NET/Find-and-replace-multiple-paragraphs/Program.cs" %}
//Loads the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
WordDocument subDocument = new WordDocument(new FileStream("Source.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite), FormatType.Docx);
//Gets the content from another Word document 
TextBodyPart replacePart = new TextBodyPart(subDocument);
foreach (TextBodyItem bodyItem in subDocument.LastSection.Body.ChildEntities)
{
    replacePart.BodyItems.Add(bodyItem.Clone());
}
string placeholderText = "Suppliers/Vendors of Northwind" + "Customers of Northwind" + "Employee details of Northwind traders" + "The product information" + "The inventory details" + "The shippers" + "Purchase Order transactions" + "Sales Order transaction" + "Inventory transactions" + "Invoices" + "[end replace]";
//Finds the text that extends to several paragraphs and replaces it with desired content
document.ReplaceSingleLine(placeholderText, replacePart, false, false);
//Saves and closes the document
FileStream outputStream = new FileStream("Sample.docx", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite);
document.Save(outputStream, FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens the input Word document.
WordDocument document = new WordDocument("Template.docx");
WordDocument subDocument = new WordDocument("Source.docx", FormatType.Docx);
//Gets the content from another Word document 
TextBodyPart replacePart = new TextBodyPart(subDocument);
foreach (TextBodyItem bodyItem in subDocument.LastSection.Body.ChildEntities)
{
    replacePart.BodyItems.Add(bodyItem.Clone());
}
string placeholderText = "Suppliers/Vendors of Northwind" + "Customers of Northwind"+ "Employee details of Northwind traders" + "The product information"+ "The inventory details" + "The shippers" + "Purchase Order transactions" + "Sales Order transaction" + "Inventory transactions" + "Invoices" + "[end replace]";
//Finds the text that extends to several paragraphs and replaces it with desired content
document.ReplaceSingleLine(placeholderText, replacePart, false, false);
subDocument.Dispose();
//Saves and closes the document instance
document.Save("Result.docx");
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As WordDocument = New WordDocument("Template.docx")
Dim subDocument As WordDocument = New WordDocument("Source.docx", FormatType.Docx)
Dim replacePart As TextBodyPart = New TextBodyPart(subDocument)
'Gets the content from another Word document 
For Each bodyItem As TextBodyItem In subDocument.LastSection.Body.ChildEntities
    replacePart.BodyItems.Add(bodyItem.Clone)
Next
Dim placeholderText As String = "Suppliers/Vendors of Northwind" + "Customers of Northwind" + "Employee details of Northwind traders" + "The product information" + "The inventory details" + "The shippers" + "Purchase Order transactions" + "Sales Order transaction" + "Inventory transactions" + "Invoices" + "[end replace]"
'Finds the text that extends to several paragraphs and replaces it with desired content
document.ReplaceSingleLine(placeholderText, replacePart, False, False)
subDocument.Dispose()
'Saves and closes the document instance
document.Save("Result.docx")
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-multiple-paragraphs).

### Find text in a Word document and format 

You can find text in a Word document and format or highlight it .You can find the first occurrence of text using the [FindAll](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindAll_System_String_System_Boolean_System_Boolean_) method. Find the next occurrences of the text using the [FindNext](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindNext_Syncfusion_DocIO_DLS_TextBodyItem_System_String_System_Boolean_System_Boolean_) method.

The following code example illustrates how to find all occurrences of a length of text and highlight it.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-and-highlight-all/.NET/Find-and-highlight-all/Program.cs" %}
//Loads the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Finds all occurrence of the text in the Word document
TextSelection[] textSelections = document.FindAll("Adventure", true, true);
for (int i = 0; i < textSelections.Length; i++)
{
    //Sets the highlight color for the searched text as Yellow
    textSelections[i].GetAsOneRange().CharacterFormat.HighlightColor = Color.Yellow;
}
//Saves and closes the document
FileStream outputStream = new FileStream("Sample.docx", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite);
document.Save(outputStream, FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
//Finds all occurrence of the text in the Word document
TextSelection[] textSelections = document.FindAll("Adventure", true, true);
for (int i = 0; i < textSelections.Length; i++)
{
    //Sets the highlight color for the searched text as Yellow
    textSelections[i].GetAsOneRange().CharacterFormat.HighlightColor = Color.Yellow;
}
//Saves and closes the document instance
document.Save("Result.docx");
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As WordDocument = New WordDocument("Template.docx")
'Finds all occurrence of the text in the Word document
Dim textSelections() As TextSelection = document.FindAll("Adventure", True, True)
For i As Integer = 0 To textSelections.Length - 1
    'Sets the highlight color for the searched text as Yellow.
    textSelections(i).GetAsOneRange.CharacterFormat.HighlightColor = Color.Yellow
Next
'Saves and closes the document instance
document.Save("Result.docx")
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-highlight-all).

### Find and replace the pattern of text with normal text

You can find the pattern of text using Regex and replace it with normal text in a Word document using the [Replace](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Replace_System_Text_RegularExpressions_Regex_System_String_) method.

The following code example illustrates how to replace the pattern of text with normal text in the Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Replace-pattern-text-with-normal-text/.NET/Replace-pattern-text-with-normal-text/Program.cs" %}
//Open the file as Stream.
using (FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
    //Load the file stream into a Word document.
    using (WordDocument document = new WordDocument(docStream, FormatType.Automatic))
    {
        //Replace all occurrences of the given pattern of text with normal text.
        document.Replace(new Regex("{[A-Za-z]+}"), "cycles company");
        //Save the Word document to MemoryStream.
        MemoryStream outputStream = new MemoryStream();
        document.Save(outputStream, FormatType.Docx);
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing Word document.
using (WordDocument document = new WordDocument("Template.docx", FormatType.Docx))
{
    //Replace all occurrences of the given pattern of text with normal text.
    document.Replace(new Regex("{[A-Za-z]+}"), "cycles company");
    //Save the Word document.
    document.Save("Sample.docx", FormatType.Docx);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Word document.
Using document As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Replace all occurrences of the given pattern of text with normal text.
    document.Replace(New Regex("{[A-Za-z]+}"), "cycles company")
    'Save the WordDocument instance.
    document.Save("Sample.docx", FormatType.Docx)
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-pattern-text-with-normal-text).

### Find and replace a pattern of multiline text

You can find a pattern of text which extends to several paragraphs using Regex and replace it with normal text in a Word document using the [ReplaceSingleLine](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_ReplaceSingleLine_System_Text_RegularExpressions_Regex_System_String_) method.

The following code example illustrates how to replace a pattern of multiline text with a single line in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Replace-multiline-text-with-single-line/.NET/Replace-multiline-text-with-single-line/Program.cs" %}
//Open the file as Stream.
using (FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
    //Load the file stream into a Word document.
    using (WordDocument document = new WordDocument(docStream, FormatType.Docx))
    {
        //Replace the text extended to several paragraphs with simple text.
        document.ReplaceSingleLine(new Regex(@"\[(.*)\]"), "Thank you for Payment");
        //Save the Word document to MemoryStream.
        MemoryStream outputStream = new MemoryStream();
        document.Save(outputStream, FormatType.Docx);
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing Word document.
using (WordDocument document = new WordDocument("Template.docx", FormatType.Docx))
{
    //Replace the text extended to several paragraphs with simple text.
    document.ReplaceSingleLine(new Regex(@"\[(.*)\]"), "Thank you for Payment");
    //Save the Word document.
    document.Save("Sample.docx", FormatType.Docx);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Word document.
Using document As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Replace the text extended to several paragraphs with simple text.
    document.ReplaceSingleLine(New Regex("\[(.*)\]"), "Thank you for Payment")
    'Save the Word document.
    document.Save("Sample.docx", FormatType.Docx)
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-multiline-text-with-single-line).

### Find and replace text with formatted text

You can select a text using the [Find](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Find_System_Text_RegularExpressions_Regex_) method and replace text in a Word document with that selected text along with formatting (bold, italic, and so on).

The following code example illustrates how to find and replace text with the formatted text in the Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-and-replace-text-with-formatted-text/.NET/Find-and-replace-text-with-formatted-text/Program.cs" %}
//Open the file as Stream.
using (FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
    //Load the file stream into a Word document.
    using (WordDocument document = new WordDocument(docStream, FormatType.Automatic))
    {
        //Find the first occurrence of a particular text in the document.
        TextSelection selection = document.Find(new Regex ("^«(.*)»"));
        //Replace the particular text with the selected text along with formatting.
        document.Replace("Bear", selection, false, false, true);
        //Save the Word document to MemoryStream.
        MemoryStream outputStream = new MemoryStream();
        document.Save(outputStream, FormatType.Docx);
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing Word document.
using (WordDocument document = new WordDocument("Template.docx", FormatType.Docx))
{
    //Find the first occurrence of a particular text in the document.
    TextSelection selection = document.Find(new Regex ("^«(.*)»"));
    //Replace the particular text with the selected text along with formatting.
    document.Replace("Bear", selection, false, false, true);
    //Save the Word document.
    document.Save("Sample.docx", FormatType.Docx);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Word document.
Using document As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Find the first occurrence of a particular text in the document.
    Dim selection As TextSelection = document.Find(New Regex("^«(.*)»"))
    'Replace the particular text with the selected text along with formatting.
    document.Replace("Bear", selection, False, False, True)
    'Save the Word document.
    document.Save("Sample.docx", FormatType.Docx)
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-replace-text-with-formatted-text).

### Find and replace the text extended to several paragraphs

You can select a text which extends to several paragraphs using the [FindSingleLine](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindSingleLine_System_Text_RegularExpressions_Regex_) method and replace text in the Word document with that selected text.

The following code example illustrates how to find and replace the text extended to several paragraphs in the Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Replace-text-extended-to-several-paragraphs/.NET/Replace-text-extended-to-several-paragraphs/Program.cs" %}
//Open the file as Stream.
using (FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
    //Load the file stream into a Word document.
    using (WordDocument document = new WordDocument(docStream, FormatType.Automatic))
    {
        //Find the first occurrence of particular text extended to several paragraphs in the document.
        TextSelection[] textSelections = document.FindSingleLine(new Regex(@"\[(.*)\]"));
        //Replace the particular text extended to several paragraphs with the selected text.
        document.ReplaceSingleLine(new Regex("<<(.*)>>"), textSelections[1]);
        //Save the Word document to MemoryStream.
        MemoryStream outputStream = new MemoryStream();
        document.Save(outputStream, FormatType.Docx);
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing Word document.
using (WordDocument document = new WordDocument("Template.docx", FormatType.Docx))
{
    //Find the first occurrence of particular text extended to several paragraphs in the document.
    TextSelection[] textSelections = document.FindSingleLine(new Regex(@"\[(.*)\]"));
    //Replace the particular text extended to several paragraphs with the selected text.
    document.ReplaceSingleLine(new Regex("<<(.*)>>"), textSelections[1]);
    //Save the Word document.
    document.Save("Sample.docx", FormatType.Docx);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Word document.
Using document As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Find the first occurrence of particular text extended to several paragraphs in the document.
    Dim textSelections As TextSelection() = document.FindSingleLine(New Regex("\[(.*)\]"))
    'Replace the particular text extended to several paragraphs with the selected text.
    document.ReplaceSingleLine(New Regex("<<(.*)>>"), textSelections(1))
    'Save the Word document.
    document.Save("Sample.docx", FormatType.Docx)
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Replace-text-extended-to-several-paragraphs).

### Find next multiline text and replace with selected text

You can select the next occurrence of a text which extends to several paragraphs using the [FindNextSingleLine](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindNextSingleLine_Syncfusion_DocIO_DLS_TextBodyItem_System_Text_RegularExpressions_Regex_) method and replace text in the Word document with that selected text.

The following code example illustrates how to find the next occurrence of text extended to several paragraphs and replace the particular text with selected text in the Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-next-multiline-text-and-replace-text/.NET/Find-next-multiline-text-and-replace-text/Program.cs" %}
//Open the file as Stream.
using (FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
    //Load the file stream into a Word document.
    using (WordDocument document = new WordDocument(docStream, FormatType.Automatic))
    {
        //Access the specific table in a Word document.
        WTable table = document.LastSection.Tables[0] as WTable;
        //Find the next occurrence of particular text extended to several paragraphs after the specific table.
        TextSelection[] textSelections = document.FindNextSingleLine(table, new Regex(@"\[(.*)\]"));
        //Replace the particular text with the selected text.
        document.Replace("Equation of sodium chloride and silver nitrate", textSelections[1], true, true);
        //Save the Word document to MemoryStream.
        MemoryStream outputStream = new MemoryStream();
        document.Save(outputStream, FormatType.Docx);
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing Word document.
using (WordDocument document = new WordDocument("Template.docx", FormatType.Docx))
{
    //Access the specific table in a Word document.
    WTable table = document.LastSection.Tables[0] as WTable;
    //Find the next occurrence of particular text extended to several paragraphs after the specific table.
    TextSelection[] textSelections = document.FindNextSingleLine(table, new Regex(@"\[(.*)\]"));
    //Replace the particular text with the selected text.
    document.Replace("Equation of sodium chloride and silver nitrate", textSelections[1], true, true);
    //Save the Word document.
    document.Save("Sample.docx", FormatType.Docx);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Word document.
Using document As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Access the specific table in a Word document.
    Dim table As WTable = TryCast(document.LastSection.Tables(0), WTable)
    'Find the next occurrence of particular text extended to several paragraphs after the specific table.
    Dim textSelections As TextSelection() = document.FindNextSingleLine(table, New Regex("\[(.*)\]"))
    'Replace the particular text with the selected text.
    document.Replace("Equation of sodium chloride and silver nitrate", textSelections(1), True, True)
    'Save the Word document.
    document.Save("Sample.docx", FormatType.Docx)
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-next-multiline-text-and-replace-text).

## Find and format text

You can able to find and format the text in Word document using DocIO.

### Find and highlight all in Word document

You can find text in a Word document and format or highlight it .You can find the first occurrence of text using the [FindAll](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindAll_System_String_System_Boolean_System_Boolean_) method. Find the next occurrences of the text using the [FindNext](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_FindNext_Syncfusion_DocIO_DLS_TextBodyItem_System_String_System_Boolean_System_Boolean_) method.

The following code example illustrates how to find all occurrences of a length of text and highlight it.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Find-and-Replace/Find-and-highlight-all/.NET/Find-and-highlight-all/Program.cs" %}
//Loads the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Finds all occurrence of the text in the Word document
TextSelection[] textSelections = document.FindAll("Adventure", true, true);
for (int i = 0; i < textSelections.Length; i++)
{
    //Sets the highlight color for the searched text as Yellow
    textSelections[i].GetAsOneRange().CharacterFormat.HighlightColor = Color.Yellow;
}
//Saves and closes the document
FileStream outputStream = new FileStream("Sample.docx", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite);
document.Save(outputStream, FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
//Finds all occurrence of the text in the Word document
TextSelection[] textSelections = document.FindAll("Adventure", true, true);
for (int i = 0; i < textSelections.Length; i++)
{
    //Sets the highlight color for the searched text as Yellow
    textSelections[i].GetAsOneRange().CharacterFormat.HighlightColor = Color.Yellow;
}
//Saves and closes the document instance
document.Save("Result.docx");
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As WordDocument = New WordDocument("Template.docx")
'Finds all occurrence of the text in the Word document
Dim textSelections() As TextSelection = document.FindAll("Adventure", True, True)
For i As Integer = 0 To textSelections.Length - 1
    'Sets the highlight color for the searched text as Yellow.
    textSelections(i).GetAsOneRange.CharacterFormat.HighlightColor = Color.Yellow
Next
'Saves and closes the document instance
document.Save("Result.docx")
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Find-and-Replace/Find-and-highlight-all).

## Online Demo

* Explore how to find a specific text pattern using regular expression and highlight it in an existing Word document using find functionality using the .NET Word Library (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/findandhighlight#/tailwind).
* See how to replace a specific text in the Word document with another text using the find and replace functionality using the .NET Word Library (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/simplereplace#/tailwind).
* See how to replace a specific content in the Word document with another document using the find and replace functionality using the .NET Word Library (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/advancedreplace#/tailwind).

## See Also

* [How to replace the particular text with hyperlink in Word document](https://support.syncfusion.com/kb/article/10326/how-to-replace-the-particular-text-with-hyperlink-in-word-document)
* [How to find the empty paragraphs in the Word document using Essential<sup>&reg;</sup> DocIO](https://support.syncfusion.com/kb/article/3943/how-to-find-the-empty-paragraphs-in-the-word-document-using-essential-docio-in-net-webforms-)
* [How to replace text in a Word document with HTML](https://support.syncfusion.com/kb/article/11906/how-to-replace-text-in-a-word-document-with-html)
* [How to find and replace text inside table in Word document](https://support.syncfusion.com/kb/article/11922/how-to-find-and-replace-text-inside-table-in-word-document)
* [How to find and replace text in headers and footers of Word document](https://support.syncfusion.com/kb/article/11848/how-to-find-and-replace-text-in-headers-and-footers-of-word-document)
* [How to find and replace placeholder with page break in Word document](https://support.syncfusion.com/kb/article/11975/how-to-find-and-replace-text-with-page-break-in-word-document)
* [How to find and replace text with content control in Word document?](https://support.syncfusion.com/kb/article/11926/finding-and-replacing-text-with-content-in-aspnet-core-word)
* [How to find and replace line break in Word document as paragraph mark?](https://support.syncfusion.com/kb/article/11935/how-to-find-and-replace-line-break-in-word-document-as-paragraph-mark)
* [How to insert another document before a text in Word document?](https://support.syncfusion.com/kb/article/12178/how-to-insert-another-document-before-a-text-in-word-document)
* [How to replace text within bookmark content in Word document?](https://support.syncfusion.com/kb/article/12159/how-to-replace-text-within-bookmark-content-in-word-document)
* [How to find and replace a text with chart in Word document?](https://support.syncfusion.com/kb/article/13951/how-to-find-and-replace-a-text-with-chart-in-word-document)
* [How to find and replace a text with hyperlink in Word document?](https://support.syncfusion.com/kb/article/13954/how-to-find-and-replace-a-text-with-hyperlink-in-word-document)
* [How to find and replace a text with Table of Contents (TOC) in Word document?](https://support.syncfusion.com/kb/article/13958/how-to-find-and-replace-a-text-with-table-of-contents-toc-in-word-document)
* [How to replace text in a Word document with HTML in ASP.NET Core?](https://support.syncfusion.com/kb/article/15520/how-to-replace-text-in-a-word-document-with-html-in-aspnet-core?)
* [How to find and replace text with list paragraphs in Word document?](https://support.syncfusion.com/kb/article/15922/how-to-find-and-replace-with-multiple-list-paragraphs-in-word-document)
* [How to find and replace a text with the Excel content in a Word document?](https://support.syncfusion.com/kb/article/15947/how-to-find-and-replace-a-text-with-the-excel-content-in-a-word-document)
* [How to replace list paragraph text with multiple paragraphs from another Word document](https://support.syncfusion.com/kb/article/17814/how-to-replace-list-paragraph-text-with-multiple-paragraphs-from-another-word-document)
* [How to replace the text with an HTML table in a Word document](https://support.syncfusion.com/kb/article/17712/how-to-replace-the-text-with-an-html-table-in-a-word-document)
* [How to find and apply bold formatting to a specific word in replaced content](https://support.syncfusion.com/kb/article/17700/how-to-find-and-apply-bold-formatting-to-a-specific-word-in-replaced-content)
* [How to find and replace an image title in a Word document?](https://support.syncfusion.com/kb/article/18808/how-to-find-and-replace-an-image-title-in-a-word-document) 
* [How to apply bold formatting to the content between placeholders in a Word document?](https://support.syncfusion.com/kb/article/17778/how-to-apply-bold-formatting-to-the-content-between-placeholders-in-a-word-document)
* [How to Replace and Convert Word Document to PDF in ASP.NET Core?](https://support.syncfusion.com/kb/article/20112/how-to-replace-and-convert-word-document-to-pdf-in-aspnet-core)
