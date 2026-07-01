---
layout: post
title: Select and Deselect Iamges in React Spreadsheet component | Syncfusion
description: Learn here how to select and deselect images in the Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Images
platform: document-processing
documentation: ug
---

# Select and deselect images in React Spreadsheet

You can select images in the spreadsheet either by clicking them in the UI or programmatically using methods.

**Select an image via UI:**

1. **Click the image** in the worksheet to select it
2. Resize handles and a selection border appear around the image

**Select an image programmatically:**

The [selectImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#selectimage) method allows you to programmatically select an image in the active sheet. Pass the image ID to select a specific image, or use the cell address where the image is located.

**Deselect an image programmatically:**

The [deselectImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deselectimage) method removes the selection from the currently active image. Use this method to deselect any selected image without needing to specify an image ID.
