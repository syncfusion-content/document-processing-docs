---
layout: post
title: List Format in ASP.NET Core DOCX Editor | Syncfusion
description: The list format feature in ASP.NET Core DOCX Editor enables users to create and customize bulleted and numbered lists for organized document content.
platform: document-processing
control: List Format
documentation: ug
---


# List Format in ASP.NET Core DOCX Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) supports single-level and multilevel lists. Lists are used to organize data as step-by-step instructions in documents for easy understanding of key points. You can apply a list to a paragraph using the supported APIs.

## Create bullet list

Bullets are usually used for unordered lists. To apply a bulleted list to selected paragraphs, use the following method of `Editor` instance.

N> `applyBullet(bullet, fontFamily)`

|Parameter|Type|Description|
|---------|----|-----------|
|Bullet|string|Bullet character.|
|fontFamily|string|Bullet font family.|

```typescript
documenteditor.editor.applyBullet('\uf0b7', 'Symbol');
```

## Create numbered list

Numbered lists are usually used for ordered lists. To apply a numbered list to selected paragraphs, use the following method of `Editor` instance.

N> `applyNumbering(numberFormat, listLevelPattern)`

|Parameter|Type|Description|
|---------|----|-----------|
|numberFormat|string|"%n" representations in `numberFormat` parameter will be replaced by respective list level's value. "%1)" will be displayed as "1)".|
|listLevelPattern|string|Optional. Default value is `Arabic`.|

```typescript
documenteditor.editor.applyNumbering('%1)', 'UpRoman');
```

## Clear list

You can also clear the list formatting applied to selected paragraphs.

```typescript
documenteditor.editor.clearList();
```

## Working with lists


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/list/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="List.cs" %}
{% endhighlight %}
{% endtabs %}



## Editing numbered list

Document Editor restarts the numbering or continues numbering for a numbered list. These options are found in the built-in context menu, if the list value is selected.

![Image](images/list.JPG)

## Online Demo

Explore how to apply bullets and numbering in Word documents using the ASP.NET Core Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/bulletsandnumbering#/tailwind3).

## See Also

* [List dialog](../asp-net-core/dialog#list-dialog)
