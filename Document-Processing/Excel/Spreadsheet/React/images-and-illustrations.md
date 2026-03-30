---
layout: post
title: Images and illustrations in React Spreadsheet component | Syncfusion
description: Learn here how to insert, position, resize, select, and delete images in the Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Images and Illustrations

Our Syncfusion React Spreadsheet component allows you to insert images directly into worksheet cells to enhance visual presentation and provide additional context alongside data. Images such as logos, screenshots, diagrams, or illustrations can be placed within a sheet, positioned as needed, resized, selected, or removed.

Image support in the Spreadsheet can be controlled using the [allowImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowimage) property. This property is enabled by default.

## Insert and Position Images

In the Syncfusion React Spreadsheet component, images can be inserted into a worksheet and placed in a specific cell. The target cell determines where the image initially appears, and the image is rendered as an overlay on top of the grid.

Images are inserted programmatically using the [insertImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertimage) method. This method allows you to define the image source along with its initial width and height, and specify the cell address where the image should be placed.

Once an image is inserted, it can be repositioned by selecting and dragging it to another location within the worksheet. The image remains independent of cell values and does not interfere with data editing, sorting, or filtering operations. You can also insert multiple images at once by passing multiple image configurations to the method.

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

Images added to a worksheet can be removed either through user interaction or programmatically. In the UI, an image can be deleted by selecting it and pressing the Delete, Backspace key or you can also choose Clear All from the ribbon to clear the current selection. This immediately removes the image from the worksheet.

Our Spreadsheet component also provides the [deleteImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deleteimage) method. This method removes an image based on its unique identifier and the cell address where it is placed.

The Spreadsheet also provides methods to manage image selection. The [selectImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#selectimage) method allows you to programmatically select an image in the active sheet, while the [deselectImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deselectimage) method removes the current image selection.

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