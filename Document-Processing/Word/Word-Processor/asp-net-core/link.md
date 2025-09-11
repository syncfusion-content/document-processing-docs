---
layout: post
title: Link in Document Editor Component
description: Learn here all about Link in Syncfusion Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Link
documentation: ug
---


# Hyperlink

Document editor supports hyperlink field. You can link a part of the document content to Internet or file location, mail address, or any text within the document.

## Navigate a hyperlink

Document editor triggers ‘requestNavigate’ event whenever user clicks Ctrl key or tap a hyperlink within the document. This event provides necessary details about link type, navigation URL, and local URL (if any) as arguments, and allows to easily customize the hyperlink navigation functionality.

### Add the requestNavigate event for DocumentEditor

The following example illustrates how to add requestNavigate event for DocumentEditor.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/hyperlink/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/hyperlink/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


### Add the requestNavigate event for DocumentEditorContainer component

The following example illustrates how to add requestNavigate event for DocumentEditorContainer component.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/link/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/link/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


If the selection is in hyperlink, trigger this event by calling ‘navigateHyperlink’ method of ‘Selection’ instance.

```typescript
documenteditor.selection.navigateHyperlink();
```

## Copy link

Document editor copies link text of a hyperlink field to the clipboard if the selection is in hyperlink.

```typescript
documenteditor .selection.copyHyperlink();
```

## Add hyperlink

To create a basic hyperlink in the document, press `ENTER` / `SPACEBAR` / `SHIFT + ENTER` / `TAB` key after typing the address, for instance `http://www.google.com`. Document editor automatically converts this address to a hyperlink field. The text can be considered as a valid URL if it starts with any of the following.

N> `<http://>`<br>
<br/> `<https://>`<br>
<br/> `file:///`<br>
<br/> `www.`<br>
<br/> `mailto:`<br>


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/hyperlink-edit/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/hyperlink-edit/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Customize screen tip

You can customize the screen tip text for the hyperlink by using below sample code.

```typescript
documenteditor.insertHyperlink('https://www.google.com', 'Google', '<<Screen tip text>>');
```

Screen tip text can be modified through UI by using the [Hyperlink dialog](../asp-net-core/dialog#hyperlink-dialog)

![Add or modify the screen tip text for hyperlinks in a Word document.](images/screentip.png)

## Remove hyperlink

To remove link from hyperlink in the document, press Backspace key at the end of a hyperlink. By removing the link, it will be converted as plain text. You can use ‘removeHyperlink’ method of ‘Editor’ instance if the selection is in hyperlink.

```typescript
documenteditor.editor.removeHyperlink();
```

## Hyperlink dialog

Document editor provides dialog support to insert or edit a hyperlink.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/hyperlink-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/hyperlink-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


You can use the following keyboard shortcut to open the hyperlink dialog if the selection is in hyperlink.

| Key Combination | Description |
|-----------------|-------------|
|Ctrl + K | Open hyperlink dialog that allows you to create or edit hyperlink|

## See Also

* [Feature modules](../asp-net-core/feature-module)
* [Hyperlink dialog](../asp-net-core/dialog#hyperlink-dialog)
