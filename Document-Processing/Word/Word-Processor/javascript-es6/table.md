---
layout: post
title: Table in JavaScript (ES6) Document editor control | Syncfusion
description: Learn here all about Table in Syncfusion JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Table 
documentation: ug
domainurl: ##DomainURL##
---

# Table in JavaScript (ES6) Document editor control

Tables are an efficient way to present information. Document Editor can display and edit the tables. You can select and edit tables through keyboard, mouse, or touch interactions. Document Editor exposes a rich set of APIs to perform these operations programmatically.

## Create a table

You can create and insert a table at cursor position by specifying the required number of rows and columns.

Refer to the following sample code.

```ts
 documenteditor.editor.insertTable(3,3);
```
## Set the maximum number of rows when inserting a table

 

You can use the [maximumRows](https://ej2.syncfusion.com/documentation/api/document-editor/documentEditorSettings#maximumrows) property to set the maximum number of rows allowed while inserting a table in the Document Editor component.

Refer to the following sample code.

```ts
 let container: DocumentEditorContainer = new DocumentEditorContainer({ documentEditorSettings: { maximumRows: 4 } });
```

When the maximum row limit is reached, an alert will appear, as follow 

![Row Limit Alert](images/Row_Limit_Alert.PNG) 

>Note: The maximum value of Row is 32767, as per Microsoft Word application and you can set any value less than or equal to 32767 to this property.
## Set the maximum number of Columns when inserting a table

 

You can use the [maximumColumns](https://ej2.syncfusion.com/documentation/api/document-editor/documentEditorSettings#maximumcolumns) property to set the maximum number of columns allowed while inserting a table in the Document Editor component.

Refer to the following sample code.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ documentEditorSettings: { maximumColumns: 4 } });
```

When the maximum column limit is reached, an alert will appear, as follow 

![Column Limit Alert](images/Column_Limit_Alert.PNG) 

>Note: The maximum value of Column is 63, as per Microsoft Word application and you can set any value less than or equal to 63 to this property.

## Insert rows

You can add a row (or several rows) above or below the row at cursor position by using the [`insertRow`](https://ej2.syncfusion.com/documentation/api/document-editor/editor#insertrow) method. This method accepts the following parameters:

Parameter | Type | Description
----------|------|-------------
above(optional) | boolean | This is optional and if omitted, it takes the value as false and inserts below the row at cursor position.
count(optional) | number | This is optional and if omitted, it takes the value as 1.

Refer to the following sample code.

```ts
//Inserts a row below the row at cursor position
documentedior.editor.insertRow();

//Inserts a row above the row at cursor position
documentedior.editor.insertRow(false);

//Inserts three rows below the row at cursor position
documentedior.editor.insertRow(true, 3)
```

## Insert columns

You can add a column (or several columns) to the left or right of the column at cursor position by using the [`insertColumn`](https://ej2.syncfusion.com/documentation/api/document-editor/editor#insertcolumn) method. This method accepts the following parameters:

Parameter | Type | Description
----------|------|-------------
left(optional) | boolean| This is optional and if omitted, it takes the value as false and inserts to the right of column at cursor position.
count(optional) | number |  This is optional and if omitted, it takes the value as 1.

Refer to the following sample code.

```ts
//Insert a column to the right of the column at cursor position.
documentedior.editor.insertColumn();

//Insert a column to the left of the column at cursor position.
documentedior.editor.insertColumn(false);

//Insert two columns to the left of the column at cursor position.
documentedior.editor.insertColumn(false, 2);
```

### Select an entire table

If the cursor position is inside a table, you can select the entire table by using the following sample code.

```ts
documenteditor.selection.selectTable();
```

### Select row

You can select the entire row at cursor position by using the following sample code.

```ts
documenteditor.selection.selectRow();
```

If current selection spans across cells of different rows, all these rows will be selected.

### Select column

You can select the entire column at cursor position by using the following sample code.

```ts
documenteditor.selection.selectColumn();
```

If current selection spans across cells of different columns, all these columns will be selected.

### Select cell

You can select the cell at cursor position by using the following sample code.

```ts
documenteditor.selection.selectCell();
```

## Delete table

Document Editor allows you to delete the entire table. You can use the [`deleteTable()`](https://ej2.syncfusion.com/documentation/api/document-editor/editor#deletetable) method of editor instance, if selection is in table. Refer to the following sample code.

```ts
documenteditor.editor.deleteTable();
```

## Delete row

Document Editor allows you to delete the selected number of rows. You can use the [`deleteRow()`](https://ej2.syncfusion.com/documentation/api/document-editor/editor#deleterow) method of editor instance to delete the selected number of rows, if selection is in table. Refer to the following sample code.

```ts
documenteditor.editor.deleteRow();
```

## Delete column

Document Editor allows you to delete the selected number of columns. You can use the [`deleteColumn()`](https://ej2.syncfusion.com/documentation/api/document-editor/editor#deletecolumn) method of editor instance to delete the selected number of columns, if selection is in table. Refer to the following sample code.

```ts
documenteditor.editor.deleteColumn();
```

## Merge cells

You can merge cells vertically, horizontally, or combination of both to a single cell. To vertically merge the cells, the columns within selection should be even in left and right directions. To horizontally merge the cells, the rows within selection should be even in top and bottom direction.
Refer to the following sample code.

```ts
documenteditor.editor.mergeCells()
```

## Positioning the table

Document Editor preserves the position properties of the table and displays the table based on position properties. It does not support modifying the position properties. Whereas the table will be automatically moved along with text edited if it is positioned relative to the paragraph.

## How to work with tables

The following sample demonstrates how to delete the table row or columns, merge cells and how to bind the API with button.

 

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/table-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/table-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/table-cs1" %}



## See Also

* [Feature modules](./feature-module)
* [Insert table dialog](./dialog#table-dialog)
