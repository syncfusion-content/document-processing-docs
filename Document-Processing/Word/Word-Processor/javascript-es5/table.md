---
layout: post
title: Tables in JavaScript DOCX Editor | Syncfusion
description: Tables in JavaScript DOCX Editor enable adding and managing rows, columns, and cells to present information in a structured format.
platform: document-processing
control: Table 
documentation: ug
domainurl: ##DomainURL##
---

# Tables in JavaScript DOCX Editor

Tables are an efficient way to present information. [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) can display and edit tables. You can select and edit tables through keyboard, mouse, or touch interactions. Document Editor exposes a rich set of APIs to perform these operations programmatically.

## Create a table

You can create and insert a table at the cursor position by specifying the required number of rows and columns.

Refer to the following sample code.

```ts
documenteditor.editor.insertTable(3, 3);
```

## Set the maximum number of rows when inserting a table

You can use the [maximumRows](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documentEditorSettings#maximumrows) property to set the maximum number of rows allowed while inserting a table in the Document Editor component.

Refer to the following sample code.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ documentEditorSettings: { maximumRows: 4 } });
```

When the maximum row limit is reached, an alert will appear, as follows:

![Row Limit Alert](images/Row_Limit_Alert.PNG)

N> The maximum value of the Row property is 32767, as per the Microsoft Word application, and you can set any value less than or equal to 32767 to this property.

## Set the maximum number of Columns when inserting a table

You can use the [maximumColumns](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documentEditorSettings#maximumcolumns) property to set the maximum number of columns allowed while inserting a table in the Document Editor component.

Refer to the following sample code.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ documentEditorSettings: { maximumColumns: 4 } });
```

When the maximum column limit is reached, an alert will appear, as follows:

![Column Limit Alert](images/Column_Limit_Alert.PNG)

N> The maximum value of the Column property is 63, as per the Microsoft Word application, and you can set any value less than or equal to 63 to this property.

## Insert rows

You can add a row (or several rows) above or below the row at the cursor position by using the [`insertRow`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#insertrow) method. This method accepts the following parameters:

Parameter | Type | Description
----------|------|-------------
above (optional) | boolean | Optional. Defaults to false and inserts below the row at the cursor position.
count (optional) | number | Optional. Defaults to 1.

Refer to the following sample code.

```ts
// Inserts a row below the row at the cursor position.
documenteditor.editor.insertRow();

// Inserts a row above the row at the cursor position.
documenteditor.editor.insertRow(true);

// Inserts three rows above the row at the cursor position.
documenteditor.editor.insertRow(true, 3);
```

## Insert columns

You can add a column (or several columns) to the left or right of the column at the cursor position by using the [`insertColumn`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#insertcolumn) method. This method accepts the following parameters:

Parameter | Type | Description
----------|------|-------------
left (optional) | boolean | Optional. Defaults to false and inserts to the right of the column at the cursor position.
count (optional) | number | Optional. Defaults to 1.

Refer to the following sample code.

```ts
// Insert a column to the right of the column at the cursor position.
documenteditor.editor.insertColumn();

// Insert a column to the left of the column at the cursor position.
documenteditor.editor.insertColumn(true);

// Insert two columns to the left of the column at the cursor position.
documenteditor.editor.insertColumn(true, 2);
```

### Select an entire table

If the cursor position is inside a table, you can select the entire table by using the following sample code.

```ts
documenteditor.selection.selectTable();
```

### Select row

You can select the entire row at the cursor position by using the following sample code.

```ts
documenteditor.selection.selectRow();
```

If the current selection spans cells of different rows, all these rows will be selected.

### Select column

You can select the entire column at the cursor position by using the following sample code.

```ts
documenteditor.selection.selectColumn();
```

If the current selection spans cells of different columns, all these columns will be selected.

### Select cell

You can select the cell at the cursor position by using the following sample code.

```ts
documenteditor.selection.selectCell();
```

## Delete table

Document Editor allows you to delete the entire table. You can use the [`deleteTable()`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#deletetable) method of the editor instance if the selection is in a table. Refer to the following sample code.

```ts
documenteditor.editor.deleteTable();
```

## Delete row

Document Editor allows you to delete the selected number of rows. You can use the [`deleteRow()`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#deleterow) method of the editor instance to delete the selected number of rows if the selection is in a table. Refer to the following sample code.

```ts
documenteditor.editor.deleteRow();
```

## Delete column

Document Editor allows you to delete the selected number of columns. You can use the [`deleteColumn()`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#deletecolumn) method of the editor instance to delete the selected number of columns if the selection is in a table. Refer to the following sample code.

```ts
documenteditor.editor.deleteColumn();
```

## Merge cells

You can merge cells vertically, horizontally, or a combination of both into a single cell. To vertically merge the cells, the columns within the selection should be aligned in the left and right directions. To horizontally merge the cells, the rows within the selection should be aligned in the top and bottom directions.

Refer to the following sample code.

```ts
documenteditor.editor.mergeCells();
```

## Positioning the table

Document Editor preserves the position properties of the table and displays the table based on the position properties. It does not support modifying the position properties. However, the table moves automatically with the surrounding text if it is positioned relative to the paragraph.

## How to work with tables

The following sample demonstrates how to delete the table rows or columns, merge cells, and bind the API to a button.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/table-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/table-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/table-cs1" %}

## See Also

* [Feature modules](./feature-module)
* [Insert table dialog](./dialog#table-dialog)
