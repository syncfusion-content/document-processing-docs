---
layout: post
title: Insert and Position Images in React Spreadsheet component | Syncfusion
description: Learn here how to customize images in the Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Insert and position images in React Spreadsheet

In the [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) component, images can be inserted into a worksheet and placed in a specific cell. The target cell determines where the image initially appears, and the image is rendered as an overlay on top of the grid.

Images are inserted programmatically using the [insertImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertimage) method. This method allows you to define the image source along with its initial width and height, and specify the cell address where the image should be placed.

Once an image is inserted, it can be repositioned by selecting and dragging it to another location within the worksheet. The image remains independent of cell values and does not interfere with data editing, sorting, or filtering operations. You can also insert multiple images at once by passing multiple image configurations to the method.

The following code example shows how to insert an image in spreadsheet:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/insert-image-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/insert-image-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/insert-image-cs1" %}
