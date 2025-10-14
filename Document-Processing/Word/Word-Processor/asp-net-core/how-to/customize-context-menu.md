---
layout: post
title: Customize Context Menu in Document Editor Component | Syncfusion
description: Learn here all about how to customize context menu in Syncfusion Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize Context Menu
documentation: ug
---


# Context menu customization

## How to customize context menu in Document Editor

Document Editor allows to add custom option in context menu. It can be achieved by using the `addCustomMenu()` method and custom action is defined using the `customContextMenuSelect`.

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

Document Editor allows to customize the added custom option and also to hide or show default context menu.

#### Hide default context menu items

Using `addCustomMenu()` method, you can hide the default context menu, by setting second parameter as true.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/hide-context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/hide-context-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


#### Customize added context menu items

The following code shows how to hide or show added custom option in context menu using the `customContextMenuBeforeOpen`.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-context-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


#### Customize Context Menu with sub-menu items

Document Editor allows you to customize the Context Menu with sub-menu items. It can be achieved by using the `addCustomMenu()` method.

The following code shows how to add a sub items in the custom option in context menu in Document Editor Container.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-sub-context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-sub-context-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

