---
layout: post
title: Undo redo in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Undo redo in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Undo redo 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in ##Platform_Name## Spreadsheet control

{% if page.publishingplatform == "typescript" %}

`Undo` option helps you to undone the last action performed and `Redo` option helps you to do the same action which is reverted in the Spreadsheet. You can use the [`allowUndoRedo`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowundoredo) property to enable or disable undo redo functionality in spreadsheet.

{% elsif page.publishingplatform == "javascript" %}

`Undo` option helps you to undone the last action performed and `Redo` option helps you to do the same action which is reverted in the Spreadsheet. You can use the [`allowUndoRedo`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowundoredo) property to enable or disable undo redo functionality in spreadsheet.

{% endif %}


> * The default value for `allowUndoRedo` property is `true`.

By default, the `UndoRedo` module is injected internally into Spreadsheet to perform undo redo.

## Undo

It reverses the last action you performed with Spreadsheet. Undo can be done by any of the following ways:

{% if page.publishingplatform == "typescript" %}

* Select the undo item from HOME tab in Ribbon toolbar.
* Use `Ctrl + Z` keyboard shortcut to perform the undo.
* Use the [`undo`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#undo) method programmatically.

{% elsif page.publishingplatform == "javascript" %}

* Select the undo item from HOME tab in Ribbon toolbar.
* Use `Ctrl + Z` keyboard shortcut to perform the undo.
* Use the [`undo`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#undo) method programmatically.

{% endif %}

## Redo

It reverses the last undo action you performed with Spreadsheet. Redo can be done by any of the following ways:

{% if page.publishingplatform == "typescript" %}

* Select the redo item from HOME tab in Ribbon toolbar.
* Use `Ctrl + Y` keyboard shortcut to perform the redo.
* Use the [`redo`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#redo) method programmatically.

{% elsif page.publishingplatform == "javascript" %}

* Select the redo item from HOME tab in Ribbon toolbar.
* Use `Ctrl + Y` keyboard shortcut to perform the redo.
* Use the [`redo`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#redo) method programmatically.

{% endif %}


## Update custom actions in UndoRedo collection

{% if page.publishingplatform == "typescript" %}

You can update your own custom actions in UndoRedo collection, by using the [`updateUndoRedoCollection`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#updateundoredocollection) method. And also customize the undo redo operations of your custom action by using `actionComplete` event.

{% elsif page.publishingplatform == "javascript" %}

You can update your own custom actions in UndoRedo collection, by using the [`updateUndoRedoCollection`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#updateundoredocollection) method. And also customize the undo redo operations of your custom action by using `actionComplete` event.

{% endif %}

The following code example shows `How to update and customize your own actions for undo redo` functionality in the Spreadsheet control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/undo-redo-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/undo-redo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/undo-redo-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/undo-redo-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/undo-redo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/undo-redo-cs1" %}
{% endif %}

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Hyperlink](./link)