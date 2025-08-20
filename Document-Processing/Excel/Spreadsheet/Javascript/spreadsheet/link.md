---
layout: post
title: Link in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Link in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Link 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Link in ##Platform_Name## Spreadsheet control

{% if page.publishingplatform == "typescript" %}

Hyperlink is used to navigate to web links or cell reference within the sheet or to other sheets in Spreadsheet. You can use the [`allowHyperlink`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowhyperlink) property to enable or disable hyperlink functionality.

{% elsif page.publishingplatform == "javascript" %}

Hyperlink is used to navigate to web links or cell reference within the sheet or to other sheets in Spreadsheet. You can use the [`allowHyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowhyperlink) property to enable or disable hyperlink functionality.

{% endif %}

> * The default value for `allowHyperlink` property is `true`.

## Insert Link

You can insert a hyperlink in a worksheet cell for quick access to related information.

**User Interface**:

In the active spreadsheet, click the cell where you want to create a hyperlink. Insert hyperlink can be done by any of the following ways:

* Select the INSERT tab in the Ribbon toolbar and choose the `Link` item.
* Right-click the cell and then click Hyperlink item in the context menu.
* Use `Ctrl + K` keyboard shortcut to apply the hyperlink.

{% if page.publishingplatform == "typescript" %}
* Use the [`addHyperlink`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#addhyperlink) method programmatically.
{% elsif page.publishingplatform == "javascript" %}
* Use the [`addHyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#addhyperlink) method programmatically.
{% endif %}
 
## Edit Hyperlink

You can change an existing hyperlink in your workbook by changing its destination or the text that is used to represent it.

**User Interface**:

In the active spreadsheet, Select the cell that contains the hyperlink that you want to change. Editing the hyperlink while opening the dialog can be done by any one of the following ways:

* Select the INSERT tab in the Ribbon toolbar and choose the `Link` item.
* Right-click the cell and then click Edit Hyperlink item in the context menu, or you can press Ctrl+K.

In the Edit Link dialog box, make the changes that you want, and click UPDATE.

## Remove Hyperlink

Performing this operation remove a single hyperlink without losing the display text.

**User Interface**:

In the active spreadsheet, click the cell where you want to remove a hyperlink. remove hyperlink can be done by any of the following ways:

{% if page.publishingplatform == "typescript" %}

* Right-click the cell and then click Remove Hyperlink item in the context menu.
* Use the [`removeHyperlink()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#removehyperlink) method programmatically.

{% elsif page.publishingplatform == "javascript" %}

* Right-click the cell and then click Remove Hyperlink item in the context menu.
* Use the [`removeHyperlink()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#removehyperlink) method programmatically.

{% endif %}

## How to change target attribute

There is an event named `beforeHyperlinkClick` which triggers only on clicking hyperlink. You can customize where to open the hyperlink by using the `target` property in the arguments of that event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/link-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/link-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/link-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/link-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/link-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/link-cs1" %}
{% endif %}

## Limitations

* Inserting hyperlink not supported for multiple ranges.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)