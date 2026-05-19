---
layout: post
title: Fix double header issue in React Spreadsheet
description: Fix duplicate or misplaced header caused by multiple refresh/resize actions and redundant lifecycle calls.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Issue

In some scenarios, the Spreadsheet header appears twice or is rendered below the data instead of at the top. The issue in the Spreadsheet component can occur when multiple refresh actions are triggered, such as calling `refresh()` action before a previous render or sheet refresh has completed. The below image show double header rendered issue in spreadsheet:

![Double header example](../images/image.png)

## Troubleshooting checklist (in order)

Follow these steps in order to diagnose and fix the double-header issue:

1. **Ensure only one refresh/resize at a time:** Ensure only one `refresh()` or `resize()` action is triggered at a tim before the previous render completes.

2. **Avoid refresh in rapid UI updates:** Do not call `refresh()` inside rapid UI updates, tight loops, or multiple event handlers—debounce or throttle these calls where appropriate.

3. **Use lifecycle events carefully:** Use lifecycle events (`created`, `dataBound`, etc.) without redundant `refresh()` or `resize()` calls.

4. **Confirm package version:** Confirm the Spreadsheet package version you are using latest version.


5. **Initialization & mounts:** Ensure the Spreadsheet component is initialized only once and that no duplicate mounts occur in your application.

6. **Frozen panes / merged cells:** Verify frozen panes, hidden rows, or merged cells that could affect header rendering or position.

7. **CSS/layout inspection:** Inspect CSS/layout (positioning, `z-index`, transforms) that may visually duplicate or misplace the header.


## See Also

* [Performance Best Practices](../performance-best-practices)
* [Resize handling](../mobile-responsiveness)
* [Freeze panes](../freeze-pane)
