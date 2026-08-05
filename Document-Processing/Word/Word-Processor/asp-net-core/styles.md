---
layout: post
title: Styles in ASP.NET Core DOCX Editor Component | Syncfusion
description: Learn how to create, manage, customize, and apply styles in the Syncfusion ASP.NET Core Document Editor component for consistent document formatting.
platform: document-processing
control: Styles
documentation: ug
---


# Styles in ASP.NET Core Document Editor

Styles are useful for applying a set of formatting consistently throughout the document. In [ASP.NET Core Document Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) , styles are created and added to a document programmatically or via the built-in Styles dialog.

## Styles definition overview

A style in the Document Editor should have the following properties:

* **name**: Name of the style. All styles in a document have a unique name, which is used as an identifier when applying the style.
* **type**: Specifies the document elements that the style will target. For example, paragraph or character.
* **next**: Specifies the style that should be automatically applied to a new paragraph created after the current one.
* **link**: Provides a relation between the paragraph and character style.
* **characterFormat**: Specifies the properties of paragraph and character style.
* **paragraphFormat**: Specifies the properties of paragraph style.
* **basedOn**: Specifies that the current style inherits the style set to this property. This is how hierarchical styles are defined. It can be optional.

N> The style type should match the inherited style type. For example, it is not possible to have a character style inherit a paragraph style.

## Default style

The default style for span and paragraph properties is `Normal`. It internally inherits the default style of the document loaded or the Document Editor component.

## Style hierarchy

Each style initially checks its local value for the property that is being evaluated and turns to the style it is based on. If no local value is found, it turns to its default style.

Style inheritance of different styles is listed as follows:

### Character style

Character styles are based only on other character styles.

The inheritance is: Character properties are inherited from the base character style.

### Paragraph style

Paragraph styles are based on other paragraph styles or on linked styles. When a paragraph style is based on another paragraph style, the inheritance of the properties is as follows:
* Paragraph properties are inherited from the base paragraph style.
* Span properties are inherited from the base paragraph style.

When a paragraph style is based on a linked style, the inheritance of the properties is as follows:
* Paragraph properties are inherited from the paragraph style part in its base linked style.
* Span properties are inherited from the span style part in its base linked style.

### Linked style

Linked styles are composite styles and their components are paragraph and character styles with a link between them. To apply paragraph properties, take the properties from the linked paragraph style. Similarly, to apply character properties, take the properties from the linked character style. Linked styles are based on other linked styles or on paragraph styles.

When a linked style is based on a paragraph style, the hierarchy of the properties is as follows:

* Paragraph properties are inherited from the `basedOn` paragraph style.
* Character properties are inherited from the `basedOn` paragraph style.

When a linked style is based on another linked style, the hierarchy of the properties is as follows:

* Paragraph properties are inherited from the paragraph style part in its base linked style.
* Span properties are inherited from the span style part in its base linked style.

## Defining new styles

New styles are defined and added to the style collection of the document. In this way, they will be discovered by the default UI and applied to the parts of a document.

### Defining a character style


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/character-style/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Character-style.cs" %}
{% endhighlight %}
{% endtabs %}



### Defining a paragraph style


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/paragraph-style/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Paragraph-style.cs" %}
{% endhighlight %}
{% endtabs %}


### Defining a linked style


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/linked-style/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Linked-style.cs" %}
{% endhighlight %}
{% endtabs %}


### Applying a style

The styles are applied using the **applyStyle** method of **editorModule**, where the parameter is the **Name** of the Style.

The styles of the **Character** type are applied to the currently selected part of the document. If there is no selection, the values are applied to the word at the caret position. The styles of **Paragraph** type follow the same logic and are applied to all paragraphs in the selection or the current paragraph.

When there is no selection, styles of **Linked** type will change the values of the paragraph, and apply both the Paragraph and Character properties. When there is a selection, Linked Style changes only the character properties of the selected text.

For example, the following line will apply the "New Linked" to the current paragraph.

```typescript
documenteditor.editor.applyStyle('New Linked');
//Clear direct formatting and apply the specified style
documenteditor.editor.applyStyle('New Linked', true);
```

## Get Styles

You can get the styles in the document using the following code snippet.

```typescript
//Get paragraph styles
var paragraphStyles = documentEditor.getStyles('Paragraph');
//Get character styles
var characterStyles = documentEditor.getStyles('Character');
```

## Online Demo

Explore how to apply and modify styles in Word documents using the ASP.NET Core Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/styles).