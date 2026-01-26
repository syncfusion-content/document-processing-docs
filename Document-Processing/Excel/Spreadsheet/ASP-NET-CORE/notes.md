---
layout: post
title: Notes in EJ2 ASP.NET Core Syncfusion Spreadsheet Control
description: Learn here all about the notes feature in EJ2 ASP.NET CORE Spreadsheet Control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Notes
documentation: ug
---


# Notes in ASP.NET Core Spreadsheet control

The **Notes** feature is used to insert comments, provide feedback, suggest changes, or leave remarks on specific cells while reviewing documents in the Spreadsheet. You can enable or disable the notes functionality using the [enableNotes](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_EnableNotes) property, which defaults to **true**.

When opening the Excel document with notes in the Spreadsheet, they will be displayed in the control. The cells containing notes will be indicated with a red colored triangle at the top-right corner. Hovering the mouse over these cells will display the content of the notes.

![Spreadsheet showing a note](./images/spreadsheet_show_note.png)

In the below example, you can add, edit, save, and delete notes.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/note-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="NotesController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/note-cs1/notesController.cs %}
{% endhighlight %}
{% endtabs %}

## Adding a note

In the active worksheet, you can add a note in the following ways:

* **Context Menu**: Right-click the desired cell and select **Add Note**.
* **Ribbon**: Select the cell, navigate to the **Review** tab, click the **Notes** dropdown, and select **Add Note**.
* **Keyboard Shortcut**: Select the cell and press <kbd>Shift</kbd> + <kbd>F2</kbd>.
* **Programmatically**: 
    * Use the `updateCell` method with the note model to add a note to a specific cell.
    * Bind notes via code-behind during initial load by associating the note model with the cell model.

A dialog box will open where you can enter the note content. After entering the content, you can either click on other cells or press the <kbd>Esc</kbd> button to automatically save the note and close the dialog box.

![Adding a note in Spreadsheet](./images/spreadsheet_add_note.gif)

## Editing a note

In the active worksheet, you can modify the content of existing notes in the document:

* **Context Menu**: Right-click the cell containing the note and select **Edit Note**.
* **Ribbon**: Select the cell containing the note, navigate to the **Review** tab, click the **Notes** dropdown, and select **Edit Note**.
* **Keyboard Shortcut**: Select the cell containing the note and press <kbd>Shift</kbd> + <kbd>F2</kbd>.

The note editor dialog box will open with the existing content. After editing the content, you can either click on other cells or press the <kbd>Esc</kbd> button to automatically save the changes and close the dialog box.

![Editing a note in Spreadsheet](./images/spreadsheet_edit_note.gif)

## Deleting a note

You can remove notes from cells using the following ways:

* **Context Menu**: Right-click the cell containing the note and select **Delete Note**.
* **Ribbon**: Select the cell containing the note, navigate to the **Review** tab, click the **Notes** dropdown, and select **Delete Note**.

The note will be removed from the cell, and the red triangle indicator will be removed.

![Deleting a note in Spreadsheet](./images/spreadsheet_delete_note.gif)

## Navigating between notes

The Syncfusion Spreadsheet provides intuitive navigation to quickly move between cells containing notes in your worksheet. These options are accessible through the **Notes** dropdown in the **Review** tab.

### Previous Note

To navigate to the previous note:

* In the **Review** tab, open the **Notes** dropdown and select **Previous Note**.
* The Spreadsheet will automatically select the previous note in the current worksheet, searching leftward and then upward.
* If no prior note exists in the sheet, the search continues to the previous worksheet in order.
* If the workbook contains no notes, the selection remains on the current cell.

### Next Note

To navigate to the next note:

*  In the **Review** tab, open the **Notes** dropdown and select **Next Note**.
* The Spreadsheet will automatically select the next note in the current worksheet, searching rightward and then downward.
* If no subsequent note exists in the sheet, the search continues to the next worksheet in order.
* If the workbook contains no notes, the selection remains on the current cell.

This functionality streamlines the process of reviewing notes across worksheets, ensuring efficient traversal and discovery.

## Show/Hide Note

The **Show/Hide Note** option allows you to toggle the visibility of individual notes as sticky notes within the worksheet. When enabled, the note appears as a persistent floating text box, making it convenient to reference key information without hovering over the cell.

To toggle the visibility of a note:

* **Context Menu**: Right-click the cell containing the note and select **Show/Hide Note**.
* **Ribbon**: Select the cell, go to the **Review** tab, click the **Notes** dropdown, and choose **Show/Hide Note**.

**Behavior:**

* **Default State (Hidden)**: Notes are hidden by default and only appear when hovering over the cell, which displays a red triangle indicator.
* **Sticky State (Visible)**: Toggling Show/Hide Note on a hidden note makes it visible as a sticky note, which remains on display even when navigating to other cells or selections.
* **Toggle Functionality**: Selecting Show/Hide Note again on a visible note hides it, reverting to the default state.
* **Independent Control**: Each note can be toggled individually, allowing you to display only the most relevant notes for your current task.

## Show All Notes

The **Show All Notes** option enables you to display all notes in the current worksheet simultaneously as sticky notes, simplifying the review of multiple comments at a glance.

To activate:

* Navigate to the **Review** tab, click the **Notes** dropdown, and select **Show All Notes**.

All notes in the worksheet will appear as floating text boxes near their respective cells.

> **Note**: After using Show All Notes, you can hide individual notes selectively via the **Show/Hide Note** option. Additionally, any new notes added to the worksheet will automatically appear as visible sticky notes when Show All Notes is active.

This functionality enhances workflow efficiency by providing flexible control over note visibility, whether for individual focus or comprehensive review.

## Saving the document with notes

The Spreadsheet data, including notes, can be saved and exported as an Excel document by selecting **File > Save As** in the ribbon menu. Exporting worksheets with notes is supported in Excel file formats such as Microsoft Excel (.xlsx) and Microsoft Excel 97-2003 (.xls).

> When exporting the Spreadsheet to file formats such as Comma Separated Values (.csv), Excel Macro-Enabled Workbook (.xlsm), Excel Binary Workbook (.xlsb), and PDF Document (.pdf), the notes will not be available.

## Disabling notes

To disable the note functionality, you need to set the [enableNotes](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_EnableNotes) property to **false**. After disabling, the notes in the document will not be shown when opened in the Spreadsheet. The **"Add Note"** option will not be shown in the context menu. The keyboard shortcuts for the note functionality will not work.

![Spreadsheet with notes feature disabled](./images/spreadsheet_notes_disable.png)

In the below example, the note functionality is disabled in the Spreadsheet.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/note-cs2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="NotesController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/note-cs2/notesController.cs %}
{% endhighlight %}
{% endtabs %}

## Integrating notes during initial loading and using cell data binding

The notes can be added initially when the Spreadsheet loads using cell data binding. You need to use the `notes` property in the cell settings to add notes to the Spreadsheet.

In the below example, you can navigate between notes using **Previous Note** and **Next Note** options, toggle individual note visibility with **Show/Hide Note**, display all notes at once using **Show All Notes** and see how notes are added using the `updateCell` method in the `created` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/note-cs3/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="NotesController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/note-cs3/notesController.cs %}
{% endhighlight %}
{% endtabs %}

## Limitations

* When importing the document with notes, the formatting of the content in the notes will not be available. Similarly, while adding notes, we cannot apply formatting to them.
* The style and appearance of the dialog box for the notes, including size, color, border, and other elements, cannot be directly changed.
* Exporting the workbook along with notes is not supported in file formats such as Comma Separated Values (.csv), Excel Macro-Enabled Workbook (.xlsm), Excel Binary Workbook (.xlsb), and PDF Document (.pdf).
* Notes added outside the used ranges of the worksheet will not be included in the exported document.
