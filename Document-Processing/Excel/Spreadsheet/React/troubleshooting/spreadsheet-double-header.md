---
layout: post
title: Fix double header issue in React Spreadsheet
description: Fix duplicate or misplaced header caused by multiple refresh/resize actions and redundant lifecycle calls.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Issue

In some scenarios, the Spreadsheet header appears twice or is rendered below the data instead of at the top.

## Cause

The double header issue in the Spreadsheet component can occur when multiple refresh actions are triggered, such as calling `refresh()` method before a previous render or sheet refresh has completed. The below image show double header rendered issue in spreadsheet:
## Example image

![Double header example](../images/image.png)


## Troubleshooting checklist (in order)


1. **Check for multiple refresh or resize actions**: Have you triggered multiple `refresh()` or `resize()` actions? If so, kindly check details regarding where you have used them along with relevant code snippets.

2. **Check the complete Spreadsheet rendering code**: Provide the complete Spreadsheet rendering code snippet along with any customization code so we can inspect render timing and event usage.

3. **Verify Excel import customizations**: If this occurs during Excel import, check any import customization code and share a sample Excel file (dummy data) that reproduces the issue.

4. **Check DOM rendering during tab switching**: We suspect the reported issue may occur when the Spreadsheet DOM content is not fully rendered while switching tabs or visibility changes. Provide rendering code and package version details.

5. **Test with the latest version**: We fixed many refresh-related bugs in recent releases. Confirm whether the issue persists on latest version or newer.

6. **Check custom event handlers**: Verify custom handlers (`sheetChanged`, `dataBound`, `created`, `beforeSave`, etc.) that may trigger extra refreshes.


## Example scenario

If you have customized refresh behavior or are switching between tabs/sheets frequently, ensure that:

- Each refresh action is completed before triggering another one
- The DOM is fully rendered before performing subsequent operations

## See Also

* [Performance Best Practices](../performance-best-practices)
* [Resize handling](../mobile-responsiveness)
* [Freeze panes](../freeze-pane)
