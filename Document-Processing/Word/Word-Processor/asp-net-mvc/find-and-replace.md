---
layout: post
title: Find and Replace in ASP.NET MVC DOCX Editor | Syncfusion
description: The find and replace feature in ASP.NET MVC DOCX Editor helps users quickly locate specific content and replace it throughout a document.
platform: document-processing
control: Find And Replace
documentation: ug
---


# Find and Replace in ASP.NET MVC DOCX Editor

The [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor)  component searches for a portion of text in the document through a built-in interface called `OptionsPane` or rich APIs. When used in combination with selection, it performs various operations on the search results like replacing it with some other text, highlighting it, making it bold, and more.

## Options pane

This provides options to search for a portion of text in the document. After the search operation is completed, the search results will be displayed in a list with options to navigate between them. The current occurrence of matched text or all occurrences can be replaced with other text by switching to the `Replace` tab. This pane is opened using the keyboard shortcut `Ctrl+F`.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/options-pane/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Options-pane.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/options-pane/document-editor.cs %}
{% endhighlight %}
{% endtabs %}




You can close the options pane by pressing the `Esc` key.

## Search

The `Search` module of the DOCX Editor exposes the following APIs:

|API Name|Type |Description|
|---|---|---|
|`findAll()` | Method |Searches for specified text in the whole document and highlights it with yellow.|
|`searchResults` |Property |This is an instance of `SearchResults`.|
|`find()` | Method |Finds the immediate occurrence of specified text from the cursor position in the document and highlights it with yellow.|

### Find the immediate occurrence in the document

Using the `find()` method, you can find the immediate occurrence of specified text from the current cursor position in the document.

```typescript
documenteditor.search.find('Some text', 'None');
```

N> The second parameter is an optional parameter and it denotes find options. Possible values of find options are `'None' |'WholeWord' |'CaseSensitive'| 'CaseSensitiveWholeWord'`.

### Find all the occurrences in the document

Using the `findAll()` method, you can find all the occurrences of specified text in the whole document and highlight them with yellow.

```typescript
documenteditor.search.findAll('Some text', 'None');
```

N> The second parameter is an optional parameter and it denotes find options. Possible values of find options are `'None' |'WholeWord' |'CaseSensitive'| 'CaseSensitiveWholeWord'`.

## Search results

The `SearchResults` class provides information about the search results after the search operation is completed, which can be identified using the `searchResultsChange` event. This will expose the following APIs:

|API Name|Type |Description|
|---|---|---|
|`length` |Property|Returns the total number of results found on the search.|
|`index` |Property|Returns the index of selected search result. You can change the value for this property to move the selection.|
|`replaceAll()` |Method|Replaces all the occurrences with the specified text.|
|`clear()` |Method|Clears the search results.|

### Replace all the occurrences

Using `replaceAll`, you can replace all the occurrences with the specified text.

```typescript
documentEditor.search.findAll ('Some text');
// Replace all the searched text with word 'Mike'
documentEditor.search.searchResults.replaceAll("Mike");  
```

### Replace

Using `insertText`, you can replace the currently searched text with the specified text and it replaces a single occurrence.

N>This `insertText` API accepts the following control characters.
<br/>* New line characters ("\r", "\r\n", "\n") - Inserts a new paragraph and appends the remaining text to the new paragraph.
<br/>* Line break character ("\v") - Moves the remaining text to start in a new line.
<br/>* Tab character ("\t") - Allocates a tab space and continues with the next character.

```typescript
container.documentEditor.search.findAll('works');

let searchLength: number = container.documentEditor.search.searchResults.length;

for (let i = searchLength - 1; i >= 0; i--) {
  // It will move selection to specific searched index, move to each occurrence one by one
  container.documentEditor.search.searchResults.index = i;
  // Replace it with some text
  container.documentEditor.editor.insertText('Hello');
}

container.documentEditor.search.searchResults.clear();
```

## SearchResultsChange event

`DocumentEditor` exposes the `searchResultsChange` event that will be triggered whenever search results are changed. Consider the following scenarios:

* A search operation is completed with some results.
* The results are replaced with some other text, which will be cleared automatically.
* The results are cleared explicitly.

```typescript
documentEditor.searchResultsChange = function() {

};
```

## Customize find and replace

Using the exposed APIs, you can customize the find and replace functionality in your application.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/find-replace/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Find-replace.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/find-replace/document-editor.cs %}
{% endhighlight %}
{% endtabs %}




## See Also

* [Options pane](./dialog)
* [Feature modules](./feature-module)
