---
layout: post
title: Delete Images in JavaScript ES6 Spreadsheet | Syncfusion
description: Learn about deleting images in the Syncfusion JavaScript ES6 Spreadsheet component and managing image elements in worksheets.
control: Images
platform: document-processing
documentation: ug
---

# Delete Images in JavaScript ES6 Spreadsheet

Images added to a worksheet can be removed either through user interaction or programmatically.

**Delete via UI:**

To remove an image from the worksheet:

1. **Click the image** to select it
2. **Press Delete** or **Backspace** to remove it immediately

**Alternative UI method:**

- **Select the image** and choose **Clear All** or **Clear Contents** from the ribbon to clear the selection and all embedded objects including the image

**Delete programmatically:**

The Spreadsheet component provides the [deleteImage](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#deleteimage) method. This method removes an image based on its unique identifier and the cell address where it is placed.

Pass the image ID to remove a specific image. This approach is useful when you track image IDs at insertion time and want to remove them later without relying on user selection.

Calling `deleteImage()` removes the image from the runtime model and the DOM overlay.

The following code example shows how to delete an image by ID in spreadsheet:

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% include code-snippet/spreadsheet/javascript-es6/delete-image-cs1/app/app.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/delete-image-cs1" %}
