---
layout: post
title: Images and illustrations in React Spreadsheet component | Syncfusion
description: Learn here how to insert, position, resize, select, and delete images in the Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Images and Illustrations

Syncfusion react spreadsheet component allows inserting images into worksheet cells to improve presentation and add context. Use images for logos, screenshots, diagrams, or illustrations. Images can be positioned, resized, selected, or removed. Control image support with the [allowImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowimage) property (enabled by default).

## Insert and Position Images

Insert an image into a worksheet and place it in a specific cell. The cell determines the image's initial position; the image is rendered as an overlay on the grid. Insert images programmatically using the [insertImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertimage) method. Provide the image source, initial width and height, and the target cell address.

After insertion, select and drag an image to reposition it. Images do not affect cell values and do not block editing, sorting, or filtering. You can insert multiple images at once by passing multiple configurations to the method.

The following code example shows how to insert an image in spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/insert-image-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/insert-image-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/insert-image-cs1" %}

## Resize Images

After inserting an image into the spreadsheet, you can resize it to fit the layout or align it with surrounding content. Images can be resized interactively through the UI by selecting the image and using the resize handles displayed around it.

## Delete Images

Images added to a worksheet can be removed either through user interaction or programmatically. In the UI, an image can be deleted by selecting it and pressing the Delete, Backspace key or you can also choose Clear All from the ribbon to clear the current selection. This immediately removes the image from the worksheet. You can use the [deleteImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deleteimage) method to remove an image by id and cell address.

The component also provides selection helpers: use [selectImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#selectimage) to programmatically select an image and [deselectImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deselectimage) to clear selection.

The following code example shows how to delete an image by id in spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/delete-image-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/delete-image-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/delete-image-cs1" %}