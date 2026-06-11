---
layout: post
title: Template in Angular Spreadsheet component | Syncfusion
description: Learn here all about Template in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Template 
documentation: ug
---

# Template in Angular Spreadsheet component

Cell Template is used for adding HTML elements into Spreadsheet. You can add the cell template in spreadsheet by using the `template` property and specify the address using the `address` property inside the `ranges` property. You can customize the Html elements similar to Syncfusion<sup style="font-size:70%">&reg;</sup> components (TextBox, DropDownList, RadioButton, MultiSelect, DatePicker etc) by using the `beforeCellRender` event. In this demo, Cell template is applied to `C2:C9` and instantiated with Html input components like TextBox, RadioButton, TextArea. You need to bind the events to perform any operations through HTML elements or Syncfusion<sup style="font-size:70%">&reg;</sup> components. Here, we have added `change` event in to the MultiSelect control, and we have updated the selected data into the spreadsheet cell through that change event.

The following sample describes the above behavior.

Sample link: [`Cell template`](https://document.syncfusion.com/demos/spreadsheet-editor/angular/#/material3/spreadsheet/cell-template)

<!-- {% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/template-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/template-cs1" %} -->

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/angular/#/material3/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Filtering](./filter)
* [Sorting](./sort)
* [Hyperlink](./link)