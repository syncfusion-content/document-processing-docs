---
layout: post
title: Freeze pane in React Spreadsheet component | Syncfusion
description: Learn here all about Freeze pane in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Freeze pane 
platform: document-processing
documentation: ug
---

# Freeze pane in React Spreadsheet component

**Freeze Panes** helps you keep specific rows or columns visible while scrolling through the sheet content. This makes it easier to work with large spreadsheets without losing track of important headers or labels.  

You can set the number of frozen rows and columns using the [`frozenRows`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#frozenrows) and [`frozenColumns`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#frozencolumns) properties inside the [`Sheet`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#sheets) property.

To quickly get started with Freeze Panes in React Spreadsheet, you can check out this video tutorial:

{% youtube "https://www.youtube.com/watch?v=TX4P6gFymwo" %}

## Apply freeze panes on UI

**User Interface**:

In the active spreadsheet, click the cell where you want to create freeze panes. Freeze panes can be done in any of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Panes` item.
* Use the [`freezePanes`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#freezepanes) method programmatically.

## FrozenRows

It allows you to keep a certain number of rows visible while scrolling vertically through the rest of the worksheet.

**User Interface**:

In the active spreadsheet, select the cell where you want to create frozen rows. Frozen rows can be done in any one of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Rows` item.
* You can specify the number of frozen rows using the `frozenRows` property inside the `Sheet` property.

## FrozenColumns

It allows you to keep a certain number of columns visible while scrolling horizontally through the rest of the worksheet.

**User Interface**:

In the active spreadsheet, you can freeze columns by selecting the cell where you want them to remain visible. Frozen columns can be applied in the following ways:

* Go to the **View** tab in the Ribbon toolbar and choose the **Freeze Columns** option.  
* Set the number of frozen columns using the [`frozenColumns`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/sheet#frozencolumns) property inside the [Sheet](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/sheet) property.  

In this demo, `frozenColumns` is set to **2** and `frozenRows` is set to **2**. As a result, the first two columns on the left and the top two rows remain frozen while scrolling.


{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/freeze-pane-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/freeze-pane-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/freeze-pane-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/freeze-pane-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/freeze-pane-cs1" %}

## Limitations

Here, we have listed out the limitations with Freeze Panes feature.

* Merging cells between the freeze and unfreeze areas is not supported.
* If images and charts are added inside the freeze area cells, their portion in the unfreeze area will not move when scrolling.

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)