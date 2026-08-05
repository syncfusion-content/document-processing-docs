---
layout: post
title: Customize Context Menu in ASP.NET Core DOCX Editor | Syncfusion
description: Learn here all about how to customize the context menu in Syncfusion ASP.NET Core Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Document Editor
documentation: ug
---


# Context Menu Customization in ASP.NET Core Document Editor

## How to Customize the Context Menu

[ASP.NET Core Document Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) allows you to add a custom option in the context menu. You can achieve this by using the `addCustomMenu()` method, and the custom action is defined using the `customContextMenuSelect` event.

### Add a Custom Option


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/add-custom-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/add-custom-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



### Customize Custom Options in the Context Menu

The Document Editor allows you to customize the added custom option and also to hide or show the default context menu.

#### Hide Default Context Menu Items

Using the `addCustomMenu()` method, you can hide the default context menu by setting the second parameter to `true`.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/hide-context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/hide-context-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


#### Customize Added Context Menu Items

The following code shows how to hide or show the added custom option in the context menu using the `customContextMenuBeforeOpen` event.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-context-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


#### Customize Context Menu with Sub-Menu Items

The Document Editor allows you to customize the context menu with sub-menu items. You can achieve this by using the `addCustomMenu()` method.

The following code shows how to add sub-items to the custom option in the context menu in the Document Editor Container.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-sub-context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-sub-context-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

## Online Demo

Explore how to customize the context menu in the ASP.NET Core Document Editor for working with Word documents in this live [ASP.NET Core Context Menu Customization demo](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/customcontextmenu#/tailwind3).