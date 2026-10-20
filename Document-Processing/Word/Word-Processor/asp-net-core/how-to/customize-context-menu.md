---
layout: post
title: How to Customize Context Menu in ASP.NET Core DOCX Editor | Syncfusion
description: Customize the context menu in Syncfusion® ASP .NET Core DOCX Editor by adding custom menu items, modifying existing options, and handling menu actions.
platform: document-processing
control: DOCX Editor
documentation: ug
---


# How to Customize Context Menu in ASP.NET Core DOCX Editor

## How to customize the context Menu

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) allows you to add a custom option in the context menu. You can achieve this by using the `addCustomMenu()` method, and the custom action is defined using the `customContextMenuSelect` event.

### Add a custom option


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/add-custom-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/add-custom-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



### Customize custom options in the context Menu

The DOCX Editor allows you to customize the added custom option and also to hide or show the default context menu.

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

The following code shows how to hide or show the added custom option in the context menu using the `customContextMenuBeforeOpen` event.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-context-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


#### Customize context menu with sub-menu items

The DOCX Editor allows you to customize the context menu with sub-menu items. You can achieve this by using the `addCustomMenu()` method.

The following code shows how to add sub-items to the custom option in the context menu in the Document Editor Container.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-sub-context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-sub-context-menu/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

## Online demo

Explore how to customize the context menu in the ASP.NET Core DOCX Editor for working with Word documents in this live [ASP.NET Core Context Menu Customization demo](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/customcontextmenu#/tailwind3).
