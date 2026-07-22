---
layout: post
title: Template in EJ2 JavaScript Spreadsheet control | Syncfusion
description: Learn here all about Template in Syncfusion EJ2 JavaScript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Template
documentation: ug
---

# Template in EJ2 JavaScript Spreadsheet control

Cell Template is used for adding HTML elements into a Spreadsheet. You can add the cell template in a spreadsheet by using the `template` property and specify the address using the `address` property inside the `ranges` property. You can customize the HTML elements similar to Syncfusion<sup style="font-size:70%">&reg;</sup> components (TextBox, DropDownList, RadioButton, MultiSelect, DatePicker, etc.) by using the `beforeCellRender` event. In this demo, cell template is applied to `C2:C9` and instantiated with HTML input components like TextBox, RadioButton, and TextArea. You must bind events to perform any operations through HTML elements or Syncfusion<sup style="font-size:70%">&reg;</sup> components. Here, we have bound the `change` event to the MultiSelect control and updated the selected data into the spreadsheet cell through that event.

The `beforeCellRender` event provides arguments that include the cell element and address, allowing you to append custom HTML or Syncfusion components to the cell.

The following code example describes the above behavior.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/template-cs1" %}

## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)
