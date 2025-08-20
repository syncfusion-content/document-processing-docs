---
layout: post
title: Freeze pane in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Freeze pane in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Freeze pane 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Freeze pane in ##Platform_Name## Spreadsheet control

{% if page.publishingplatform == "typescript" %}

Freeze Panes helps you to keep particular rows or columns visible when scrolling the sheet content in the spreadsheet. You can specify the number of frozen rows and columns using the [`frozenRows`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#frozenrows) and [`frozenColumns`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#frozencolumns) properties inside the [`Sheet`](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#sheets) property.

{% elsif page.publishingplatform == "javascript" %}

Freeze Panes helps you to keep particular rows or columns visible when scrolling the sheet content in the spreadsheet. You can specify the number of frozen rows and columns using the [`frozenRows`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#frozenrows) and [`frozenColumns`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#frozencolumns) properties inside the [`Sheet`](https://helpej2.syncfusion.com/javascript/documentation/api/spreadsheet/#sheets) property.

{% endif %}

## Apply freezepanes on UI

**User Interface**:

In the active spreadsheet, click the cell where you want to create freeze panes. Freeze panes can be done in any of the following ways:

{% if page.publishingplatform == "typescript" %}

* Select the View tab in the Ribbon toolbar and choose the `Freeze Panes` item.
* Use the [`freezePanes`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#freezepanes) method programmatically.

{% elsif page.publishingplatform == "javascript" %}

* Select the View tab in the Ribbon toolbar and choose the `Freeze Panes` item.
* Use the [`freezePanes`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#freezepanes) method programmatically.

{% endif %}

## FrozenRows

It allows you to keep a certain number of rows visible while scrolling vertically through the rest of the worksheet.

**User Interface**:

In the active spreadsheet, select the cell where you want to create frozen rows. Frozen rows can be done in any one of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Rows` item.
* You can specify the number of frozen rows using the `frozenRows` property inside the `Sheet` property.

## FrozenColumns

It allows you to keep a certain number of columns visible while scrolling horizontally through the rest of the worksheet.

**User Interface**:

In the active spreadsheet, select the cell where you want to create frozen columns. Frozen columns can be done in any one of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Columns` item.
* You can specify the number of frozen columns using the `frozenColumns` property inside the `Sheet` property.

In this demo, the frozenColumns is set as ‘2’, and the frozenRows is set as ‘2’. Hence, the two columns on the left and the top two rows are frozen.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/freezepane-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/freezepane-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/freezepane-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/freezepane-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/freezepane-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/freezepane-cs1" %}
{% endif %}

## Limitations

Here, we have listed out the limitations with Freeze Panes feature.

* Merging the cells between freeze and unfreeze area.
* If images and charts are added inside the freeze area cells, their portion in the unfreeze area will not move when scrolling.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)