---
layout: post
title: Add custom icons to cells for grouping rows and columns in the React Spreadsheet component | Syncfusion
description: Learn how to implement custom expand/collapse icons in cells to show and hide grouped rows and columns in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

## How to Add Custom Icons to Cells for Hiding and Unhiding Rows and Columns in React Spreadsheet

This guide demonstrates how to implement a custom grouping feature with expand/collapse icons in cells, allowing users to show and hide grouped rows and columns in the Syncfusion React Spreadsheet component.

## Use Case

You want to create an Excel-like grouping experience where users can click icons in header cells to expand or collapse groups of rows or columns, making it easier to organize and view hierarchical data.

---

## Implementation Overview

The implementation includes the following key aspects:

1. **Group Storage** - Use a global variable (`grpCollection`) to store group details (start index, end index, sheet reference, and collapsed state).
2. **Initialization** - Set up group visibility in the `created` event based on their hidden status.
3. **Icon Rendering** - Inject expand/collapse icons into header cells using `beforeCellRender`.
4. **Visibility Toggle** - Show or hide rows/columns within a group when users click the icons.
5. **Insert/Delete Handling** - Dynamically adjust group boundaries when rows or columns are added or removed.
6. **Undo/Redo Support** - Maintain consistency during undo and redo operations.

---

## Implementation Steps

### 1. Define the Group Collection

Create a global variable to store group information including start index, end index, sheet name, hidden state, and type (row or column).

### 2. Initialize Group Visibility

In the `created` event, loop through the group collection and apply the initial visibility state for each group based on their `isHidden` property.

### 3. Render Icons in Header Cells

Use the `beforeCellRender` event to inject expand/collapse icons into the appropriate header cells. The icon displays '+' for collapsed groups and '-' for expanded groups.

### 4. Toggle Group Visibility

Implement the toggle function to show or hide rows/columns when users click the icon. The function calls `hideRow`/`showRow` or `hideColumn`/`showColumn` methods based on the group type and updates the icon accordingly.

### 5. Handle Insert and Delete Operations

Use the `actionComplete` event to update group indices when rows or columns are inserted or deleted. This ensures group boundaries remain accurate after structural changes to the spreadsheet.

---

## How It Works

- **Group Collection**: A JavaScript array stores metadata for each group, including start/end indices, sheet reference, hidden state, and type (row or column).
- **Icon Rendering**: The `beforeCellRender` event detects header cells that belong to a group and injects clickable expand/collapse icons.
- **Visibility Control**: When users click an icon, the `toggleGroupVisibility` function calls `hideRow`/`showRow` or `hideColumn`/`showColumn` methods.
- **Dynamic Updates**: The `actionComplete` event monitors insert and delete operations, automatically adjusting group boundaries to maintain consistency.
- **Undo/Redo**: Group indices are updated during undo operations to ensure the group structure remains intact.

---

## Key APIs

- [`created`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#created) - Event triggered after the Spreadsheet is initialized
- [`beforeCellRender`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#beforecellrender) - Event triggered before each cell is rendered
- [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#actioncomplete) - Event triggered after an action is completed
- [`hideRow`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#hiderow) - Hide rows in the spreadsheet
- [`hideColumn`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#hidecolumn) - Hide columns in the spreadsheet
- [`freezePanes`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#freezepanes) - Freeze rows and columns
- [`getActiveSheet`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#getactivesheet) - Get the currently active sheet

---

The following code example shows how to add custom icons to cells for grouping functionality:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/icon-in-cell-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/icon-in-cell-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/icon-in-cell-cs1" %}


## Method 2: Add Dynamic Row Expansion Icons with Template Button

This approach allows users to dynamically fetch and display row data using "+" icons, with initialization triggered through a custom template button in the header.

### Use Case

You want to dynamically populate spreadsheet rows from a data source based on unique IDs, allowing users to click a "+" icon to fetch and add new rows incrementally.

### Implementation Overview

The implementation includes the following key aspects:

1. **Data Source Setup** - Store records with unique numeric IDs as keys and corresponding data objects as values.
2. **Template Button** - Add a custom button in the header to trigger initialization.
3. **Initial Population** - Populate initial records by iterating over the data source and updating cells.
4. **Icon Rendering** - Render a "+" icon as a template in the row following the last populated row using `beforeCellRender`.
5. **Dynamic Row Addition** - Fetch new records, populate rows, insert empty rows, and move the "+" icon for further additions.

### Implementation Steps

### 1. Define the Data Source

Create a data source containing records with unique numeric IDs as keys and corresponding data objects as values.

### 2. Add Template Button to Header

Add a custom template button in the spreadsheet header. When clicked, it displays an initialize button that triggers the icon setup process.

### 3. Initialize and Populate Records

Populate initial records by iterating over the data source and updating spreadsheet cells using the `updateCell` method. Set up manual headers starting from a specific column using `getCellAddress`, followed by formatting with `cellFormat` for better readability.

### 4. Render "+" Icon Template

Use the `updateCell` method and `beforeCellRender` event to render a "+" icon as a template in the row following the last populated row.

### 5. Handle Icon Click to Populate Rows

When the "+" icon is clicked, trigger the `populateRow` method which:
- Fetches the next record from the data source using the row index as the unique ID.
- Populates the row with the fetched data.
- Inserts a new empty row using the `insertRow` method.
- Moves the "+" icon to the newly inserted row for further additions.

---

## How It Works

- **Data Source**: A JavaScript object stores records with numeric IDs as keys, enabling quick lookup by row index.
- **Template Button**: A custom button in the header initiates the icon setup, giving users control over when to enable dynamic row addition.
- **Icon as Template**: The "+" icon is rendered using `updateCell` with a template, making it interactive and visually distinct.
- **Dynamic Population**: Each click fetches data for the next ID, updates cells, and repositions the icon to maintain continuity.
- **Row Insertion**: The `insertRow` method creates space for the next record, keeping the spreadsheet organized and expandable.

---

- [`updateCell`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#updatecell) - Update cell properties and values
- [`beforeCellRender`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#beforecellrender) - Event triggered before each cell is rendered
- [`getCellAddress`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#getcelladdress) - Get cell address from row and column indices
- [`cellFormat`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#cellformat) - Format cells with styles
- [`insertRow`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#insertrow) - Insert new rows in the spreadsheet
- [`addRibbonTabs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#addribbontabs) - Add custom tabs to the ribbon toolbar

---

The following code example shows how to dynamically fetch and display row data using "+" icons:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/dynamic-row-expansion-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/dynamic-row-expansion-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/dynamic-row-expansion-cs1" %}

---

## Comparison of Methods

| Feature | Grouping Icons | Dynamic Row Expansion |
|---------|-------------------------|----------------------------------|
| **Purpose** | Collapse/expand grouped rows and columns | Dynamically fetch and add new rows |
| **Initialization** | Automatic on spreadsheet creation | User-triggered via template button |
| **Icon Type** | "+/-" for expand/collapse | "+" for adding rows |
| **Data Source** | Static group definitions | Dynamic data fetched by unique ID |
| **Use Case** | Organizing hierarchical data | Incremental data loading |
| **Row Insertion** | No new rows added | Inserts rows dynamically |

---
