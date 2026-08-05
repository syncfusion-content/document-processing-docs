---
layout: post
title: Customize Context Menu in DOCX Editor Component | Syncfusion
description: Learn here all about how to customize context menu in Syncfusion DOCX Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize Context Menu
documentation: ug
---


# Context menu customization in ASP.NET Core DOCX Editor

## How to customize context menu in DOCX Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) allows you to add a custom option in the context menu. It can be achieved by using the `addCustomMenu()` method, and the custom action is defined using the `customContextMenuSelect` event.

### Add Custom Option


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/add-custom-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/add-custom-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



### Customize custom option in context menu

DOCX Editor allows you to customize the added custom option and also to hide or show the default context menu.

#### Hide default context menu items

Using the `addCustomMenu()` method, you can hide the default context menu by setting the second parameter to `true`.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/hide-context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/hide-context-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


#### Customize added context menu items

The `customContextMenuBeforeOpen` event is raised before the context menu opens. Its args expose the `items` array (the menu items about to be rendered) and the `cancel` flag, so you can mutate, show, or hide individual added items at run time based on the current selection.

The following code shows how to hide or show the added custom option in the context menu using `customContextMenuBeforeOpen`.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-context-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


#### Customize Context Menu with sub-menu items

DOCX Editor allows you to customize the Context Menu with sub-menu items. It can be achieved by using the `addCustomMenu()` method with the third parameter (`addSubMenu`) set to `true`, and nesting child `MenuItemModel` entries under each parent item's `items` property.

The following code shows how to add sub items to a custom option in the context menu of the DOCX Editor Container.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-sub-context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-sub-context-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

## Online Demo

Explore how to customize the context menu in the ASP.NET Core DOCX Editor for working with Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/customcontextmenu#/tailwind3).