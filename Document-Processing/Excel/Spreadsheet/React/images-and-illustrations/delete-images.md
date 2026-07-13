---
layout: post
title: Delete Images in React Spreadsheet component | Syncfusion
description: Learn here how to delete images in the Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Images
platform: document-processing
documentation: ug
---

# Delete images in React Spreadsheet

Images added to a worksheet can be removed either through user interaction or programmatically.

**Delete via UI:**

To remove an image from the worksheet:

1. **Click the image** to select it
2. **Press Delete** or **Backspace** to remove it immediately

**Alternative UI method:**

- **Select the image** and choose **Clear All** or **Clear Contents** from the ribbon to clear the selection and all embedded objects including the image

**Delete programmatically:**

The Spreadsheet component provides the [deleteImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deleteimage) method. This method removes an image based on its unique identifier and the cell address where it is placed.

Pass the image ID to remove a specific image. This approach is useful when you track image IDs at insertion time and want to remove them later without relying on user selection.

Calling `deleteImage()` removes the image from the runtime model and the DOM overlay.

The following code example shows how to delete an image by ID in spreadsheet:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/delete-image-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/delete-image-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/delete-image-cs1" %}
