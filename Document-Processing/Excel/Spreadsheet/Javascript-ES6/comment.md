---
layout: post
title: Comment in EJ2 TypeScript Spreadsheet control | Syncfusion
description: Learn here all about Comment feature in Syncfusion EJ2 TypeScript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Comment
documentation: ug
---

# Comment in EJ2 TypeScript Spreadsheet control

The **Comment** feature allows you to add remarks and **replies** to cells, making it easier to provide feedback or enabling contextual discussions without altering cell values. Comment are distinct from **Notes** and includes advanced capabilities such as replies, resolve/reopen, and an optional **Comments Review Pane** to maintain clear communication and streamline review workflows. When a cell contains a comment, a small comment indicator appears in its corner. Hover over the indicator to preview the comment.

![Spreadsheet showing a comment](./images/spreadsheet_comment.png)

## Author identity

The Syncfusion Spreadsheet does not automatically track user identity. To tag new comments and replies with an author name, set the `author` property when initializing the Spreadsheet.

```ts

    import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
    // Initialize Spreadsheet component
    const spreadsheet: Spreadsheet = new Spreadsheet(
        // Set the author name, If not set, "Guest User" will be shown as the author by default.
        author: 'Place the Author Name Here'
    );
    // Render initialized Spreadsheet
    spreadsheet.appendTo('#element');

```
If the author property is not set, Guest User will be displayed as the author for comment and replies by default.

## Adding a comment

You can add a **comment** to a cell in the following ways:
* **Context menu**: Right-click the target cell and click **"New Comment"**.
* **Ribbon**: Use **Review > Comment > New Comment**.
* **Keyboard shortcut**: Press **Ctrl + Shift + F2** to open the comment container.
* **Programmatically**: 
    * Use the `updateCell` method with the comment model to add a comment to a specific cell.
    * Integrate comments during initial loading by binding the comment model to the cell model when initializing the spreadsheet.

![Adding a comment in Spreadsheet](./images/spreadsheet_adding_a_comment.gif)

After posting, the comment becomes visible with the comment indicator in the cell and can be previewed on hover.

## Adding a reply

You can add one or more replies to an existing comment to provide additional details or answers:

* **Context menu**: Right-click the cell that already has a comment, select **Comment > New Reply**, enter your reply, and click **Post**.
* **Ribbon**: Use **Review > Comment > New Comment** on a cell that contains a comment. This triggers **reply mode**.
* **Comment container**: Open the comment container by hovering over the comment indicator, type your reply in the input box, and click **Post**.
* **Keyboard shortcut**: Press **Ctrl + Shift + F2** on a cell that contains a comment to open the comment container in reply mode.

After posting, the replies appear under the initial comment in the container.

## Editing a comment or reply

You can edit the content of a comment or its replies directly within the comment container

* **Edit initial comment**: In the comment container. Click the **⋯ (More thread actions)** menu in the header, select **Edit Comment**, modify the text and click **Post**.
* **Edit a reply comment**: In the comment container, hover over the specific reply, click the **⋯ (More actions)**, select **Edit Comment**, update the text and click **Post**.

![Editing a comment reply in Spreadsheet](./images/spreadsheet_edit_comment.png)

## Resolve and Reopen

The **Resolve thread** option marks a comment thread as completed when the discussion or issue is addressed. When a thread is resolved, its background color changes to indicate the resolved state, and the reply input box and reply menu actions are hidden. Use **Reopen** to restore the comment if further discussion is needed.

### Resolve a comment
* In the comment container, click the **⋯ (More thread actions)** menu in the container header and select **Resolve Thread**. 

### Reopen a comment
* In the comment container, click the **Reopen** button in the container header to make the thread active again.

![Resolve and reopen in Spreadsheet](./images/spreadsheet_resolve_reopen.gif)

You can also use the `isResolved` property in the comment model when initializing or updating comments programmatically.

## Deleting a comment or reply
You can delete either a specific reply or an entire comment thread (including all replies) using the following options:

### Deleting a comment thread
* **Context menu**: Right-click the cell that contains the comment and select **Comment > Delete Comment**.
* **Ribbon**: Use **Review > Comment > Delete Comment** on a cell that contains the comment.
* **Comment container**: In the comment container, click the **⋯ (More thread actions)** menu in the header and select **Delete Thread** for an active comment or use the **Delete Thread** button in container header for a resolved comment.

![Deleting a comment thread in Spreadsheet](./images/spreadsheet_delete_comment.png)

Deleting a thread removes the comment and all its replies from the cell.

### Delete a reply
In the comment container, hover over the reply and click the **⋯ (More actions)** menu then select **Delete Comment**.

![Deleting a comment reply in Spreadsheet](./images/spreadsheet_delete-reply_comment.png)

## Next and Previous Comment

The **Review > Comment > Next Comment and Previous Comment** options in the ribbon allows you to quickly navigate between cells that contain comments:

* **Next Comment**: Moves to the next cell with a comment.
* **Previous Comment**: Moves to the previous cell with a comment.

Navigation starts within the active sheet. When all comments in the active sheet have been visited (end or start reached), the navigation automatically continues to the next or previous sheet that contains comments. This ensures you can review all comments across the workbook without manually switching sheets.

## Show Comments and Comments Review Pane

The **Comments Review Pane** provides a centralized view of all comments in the active sheet and offers filtering, inline actions, and navigation. This pane helps you to manage comments efficiently without switching between individual cells.

You can show or hide the Comments Review Pane using:

* **Ribbon**: Use **Review > Comment > Show Comments**.
* **Property**: Set the `showCommentsPane` property when initializing the Spreadsheet. The default value for the `showCommentsPane` property is `false`.

![Show comments in Spreadsheet](./images/spreadsheet_show_comments.gif)

### Features of the Comments Review Pane

The Comments Review Pane allows you to:

* **Add new comment** using the **New** button.
* **Filter comments** by **All**, **Active**, or **Resolved** to focus on specific comments.
* **Navigate between comments** and synchronize selection with the corresponding cells.
* Perform actions such as:
  * **Reply** – Add replies directly from the pane.
  * **Edit** – Modify the text of a comment or reply.
  * **Delete** – Remove a reply or an entire thread.
  * **Resolve/Reopen** – Change the status of a comment.

When the Review Pane is open, all actions performed in the comments review pane or in the cell’s comment container are synchronized:

* Selecting a comment in the Comments Review Pane highlights the corresponding cell in the sheet.
* Selecting a cell with a comment focuses the respective comment thread in the Comments Review Pane.
* Actions such as **Reply**, **Edit**, **Delete**, and **Resolve/Reopen** update both the pane comment thread and the cell comment container instantly, ensuring consistency across the UI.

## Saving a Workbook with Comments

You can save spreadsheet data along with **comments** using **File > Save As > Microsoft Excel(.xlsx)**.
- **MS Excel (.xlsx)** - Preserves all **threaded comments** (modern comments).

> Comments are **not included** when exporting to **.xls**, **.csv**, and **.pdf**.

### Why Comments Are Not Saved in `.xls`
The **.xls** format is based on the older Excel binary structure (BIFF8), which does not support modern features like **threaded comments**.
Threaded comments introduced in newer Excel versions require the **Open XML** structure used by `.xlsx`.  

> To retain threaded comments, always save the workbook in **.xlsx** format.

## Integrating comments during initial loading using cell data binding

You can bind **comment thread** to cells at initial load by providing a `comment` object in the cell model. Each cell supports **per comment thread**, which can include:
- **Initial comment fields**: `author`, `text`, `createdTime`, `isResolved`
- **Replies**: A collection of replies. Each reply is an object containing its `author`, `text`, and `createdTime` (no nested replies-of-replies).

When the workbook renders, cells that include a `comment`:
- Show the **comment indicator** in the cell corner.
- Open the **comment container** on hover.
- Appear in the **Comments Review Pane** if it is shown.

In the below sample, comments are added to a specific cell using cell data binding. The review pane is shown initially by enabling the `showCommentsPane` property, and comments are added using `updateCell` method in the `created` event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/comemnt-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/comemnt-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/comemnt-cs1" %}

### Notes

* **One thread per cell**: Attach a single `comment` object per cell. New remarks should be added as replies inside the existing thread.
* **Comments and Notes cannot coexist**: When a cell contains comment, notes cannot be added. Similarly, if a cell already has a notes, comment cannot be added.
* **New comment**: When the Comments Review Pane is enabled, adding a new comment renders the drafted comment container directly in the Comments Review Pane.
* **Comments in Print**: Comments are not included in print output.
* **Author Identity**: The author name for each comment and reply is static once set. When exporting, the author information is preserved for all comments, even if multiple authors exist in the workbook.

## Limitations

* **Un-posted comment is not stored**: If you type in the comment container and close it without clicking **Post**, the entered text is not saved and does not retain in the input box when you reopen the container. Only posted content is persisted in the comment model.
* **Non-collaborative**: Real-time multi-user synchronization is not supported. However, when exporting and re-importing the workbook, the author information for each comment and reply is preserved.

## See Also

* [Notes](./notes)
* [Hyperlink](./link)