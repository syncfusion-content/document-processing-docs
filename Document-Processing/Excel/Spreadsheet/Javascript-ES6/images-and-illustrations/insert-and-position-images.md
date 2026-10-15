---
layout: post
title: Insert and Position Images in JavaScript ES6 Spreadsheet | Syncfusion
description: Learn about inserting and positioning images in the Syncfusion JavaScript ES6 Spreadsheet component within worksheet cells.
control: Images
platform: document-processing
documentation: ug
---

# Insert and Position images in JavaScript ES6 Spreadsheet

In the [JavaScript ES6 Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-es6-spreadsheet-editor) component, images can be inserted into a worksheet and placed in a specific cell. The target cell determines where the image initially appears, and the image is rendered as an overlay on top of the grid.

Images are inserted programmatically using the [insertImage](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#insertimage) method. This method allows you to define the image source along with its initial width and height, and specify the cell address where the image should be placed.

Once an image is inserted, it can be repositioned by selecting and dragging it to another location within the worksheet. The image remains independent of cell values and does not interfere with data editing, sorting, or filtering operations. You can also insert multiple images at once by passing multiple image configurations to the method.

The following code example shows how to insert an image in spreadsheet:

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% include code-snippet/spreadsheet/javascript-es6/insert-image-cs1/app/app.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/insert-image-cs1" %}
