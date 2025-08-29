---
layout: post
title: Table in React Document editor component | Syncfusion
description: Learn here all about Table in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Table 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Table in React Document editor component

Tables are an efficient way to present information. Document Editor can display and edit the tables. You can select and edit tables through keyboard, mouse, or touch interactions. Document Editor exposes a rich set of APIs to perform these operations programmatically.

## Create a table

You can create and insert a table at cursor position by specifying the required number of rows and columns.

Refer to the following sample code.

  ```ts
    documenteditor.editor.insertTable(3,3);
  ```

## Set the maximum number of Rows when inserting a table

You can use the [maximumRows](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorSettings#maximumrows) property to set the maximum number of rows allowed while inserting a table in the Document Editor component.

```ts
function App() {
  // Set the maximum number of Rows
  return (
    <DocumentEditorContainerComponent 
    documentEditorSettings = { { maximumRows: 4 } }
   />
   );
}
```

When the maximum row limit is reached, an alert will appear, as follow 

![Row Limit Alert](images/Row_Limit_Alert.PNG) 

>Note: The maximum value of Row is 32767, as per Microsoft Word application and you can set any value less than or equal to 32767 to this property.

## Set the maximum number of Columns when inserting a table

You can use the [maximumColumns](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorSettings#maximumcolumns) property to set the maximum number of Columns allowed while inserting a table in the Document Editor component.

Refer to the following sample code.

```ts
function App() {
  // Set the maximum number of Columns
  return (
    <DocumentEditorContainerComponent 
    documentEditorSettings = { { maximumColumns: 4 } }
   />
   );
}
```

When the maximum column limit is reached, an alert will appear, as follow 

![Column Limit Alert](images/Column_Limit_Alert.PNG) 

>Note: The maximum value of Column is 63, as per Microsoft Word application and you can set any value less than or equal to 63 to this property.

## Insert rows

You can add a row (or several rows) above or below the row at cursor position by using the [`insertRow`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#insertrow) method. This method accepts the following parameters:

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

You can add a column (or several columns) to the left or right of the column at cursor position by using the [`insertColumn`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#insertcolumn) method. This method accepts the following parameters:

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

Document Editor allows you to delete the entire table. You can use the [`deleteTable()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#deletetable) method of editor instance, if selection is in table. Refer to the following sample code.

   ```ts
    documenteditor.editor.deleteTable();
   ```

## Delete row

Document Editor allows you to delete the selected number of rows. You can use the [`deleteRow()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#deleterow) method of editor instance to delete the selected number of rows, if selection is in table. Refer to the following sample code.

```ts
documenteditor.editor.deleteRow();
```

## Delete column

Document Editor allows you to delete the selected number of columns. You can use the [`deleteColumn()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#deletecolumn) method of editor instance to delete the selected number of columns, if selection is in table. Refer to the following sample code.

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


```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, Selection, Editor, EditorHistory, ContextMenu, TableDialog, } from '@syncfusion/ej2-react-documenteditor';
import { ToolbarComponent, ItemDirective, ItemsDirective, } from '@syncfusion/ej2-react-navigations';
//Inject require modules.
DocumentEditorComponent.Inject(Selection, Editor, EditorHistory, ContextMenu, TableDialog);
function App() {
    let documenteditor: DocumentEditorComponent;
  React.useEffect(() => {
   ComponentDidMount();
}, []);
   function ComponentDidMount() {
      documenteditor.editor.insertTable(2, 2);
    }

    function toolbarButtonClick(arg) {
        switch (arg.item.id) {
            case 'table':
                //Insert table API to add table
               documenteditor.editor.insertTable(3, 2);
                break;
            case 'insert_above':
                //Insert the specified number of rows to the table above to the row at cursor position
                documenteditor.editor.insertRow(true, 2);
                break;
            case 'insert_below':
                //Insert the specified number of rows to the table below to the row at cursor position
                documenteditor.editor.insertRow();
                break;
            case 'insert_left':
                //Insert the specified number of columns to the table left to the column at cursor position
                documenteditor.editor.insertColumn(true, 2);
                break;
            case 'insert_right':
                //Insert the specified number of columns to the table right to the column at cursor position
                zeditor.insertColumn();
                break;
            case 'delete_table':
                //Delete the entire table
               documenteditor.editor.deleteTable();
                break;
            case 'delete_rows':
                //Delete the selected number of rows
                documenteditor.editor.deleteRow();
                break;
            case 'delete_columns':
                //Delete the selected number of columns
                documenteditor.editor.deleteColumn();
                break;
            case 'merge_cell':
                //Merge the selected cells into one (both vertically and horizontally)
                documenteditor.editor.mergeCells();
                break;
            case 'table_dialog':
                //Opens insert table dialog
                documenteditor.showDialog('Table');
                break;
        }
    }
        return (
            <div>
                <ToolbarComponent clicked={toolbarButtonClick}>
                    <ItemsDirective>
                        <ItemDirective id="table" prefixIcon="e-de-ctnr-table e-icons" />
                        <ItemDirective type="Separator" />
                        <ItemDirective id="insert_above" prefixIcon="e-de-ctnr-insertabove e-icons" />
                        <ItemDirective id="insert_below" prefixIcon="e-de-ctnr-insertbelow e-icons" />
                        <ItemDirective type="Separator" />
                        <ItemDirective id="insert_left" prefixIcon="e-de-ctnr-insertleft e-icons" />
                        <ItemDirective id="insert_right" prefixIcon="e-de-ctnr-insertright e-icons" />
                        <ItemDirective type="Separator" />
                        <ItemDirective id="delete_table" prefixIcon="e-de-delete-table e-icons" />
                        <ItemDirective id="delete_rows" prefixIcon="e-de-ctnr-deleterows e-icons" />
                        <ItemDirective id="delete_columns" prefixIcon="e-de-ctnr-deletecolumns e-icons" />
                        <ItemDirective type="Separator" />
                        <ItemDirective text="Dialog" />
                    </ItemsDirective>

                </ToolbarComponent>

                <DocumentEditorComponent
                    id="container"
                    height={'330px'}
                    ref={scope => {
                        documenteditor = scope;
                    }}
                    isReadOnly={false}
                    enableSelection={true}
                    enableEditor={true}
                    enableEditorHistory={true}
                    enableContextMenu={true}
                    enableTableDialog={true}
                />
            </div>
        );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

## See Also

* [Feature modules](./feature-module)
* [Insert table dialog](./dialog#table-dialog)
