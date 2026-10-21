---
layout: post
title: Insert and Position images in Angular Spreadsheet component | Syncfusion
description: Learn here how to customize images in the Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Images
platform: document-processing
documentation: ug
---

# Insert and Position images in Angular Spreadsheet

In the Syncfusion Angular Spreadsheet component, images can be inserted into a worksheet and placed in a specific cell. The target cell determines where the image initially appears, and the image is rendered as an overlay on top of the grid.

Images are inserted programmatically using the [insertImage](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#insertimage) method. This method allows you to define the image source along with its initial width and height, and specify the cell address where the image should be placed.

Once an image is inserted, it can be repositioned by selecting and dragging it to another location within the worksheet. The image remains independent of cell values and does not interfere with data editing, sorting, or filtering operations. You can also insert multiple images at once by passing multiple image configurations to the method.

The following code example shows how to insert an image in spreadsheet:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/insert-image-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/insert-image-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/insert-image-cs1" %}
