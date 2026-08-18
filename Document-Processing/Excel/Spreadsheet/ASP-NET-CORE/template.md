---
layout: post
title: Cell Template in ASP.NET Core Spreadsheet | Syncfusion
description: Learn about cell templates in the Syncfusion ASP.NET Core Spreadsheet control, including custom content and cell rendering options.
platform: document-processing
control: Template
documentation: ug
---


# Cell Template in ASP.NET Core Spreadsheet

Cell Template allows you to add HTML elements to the Spreadsheet. Use the `template` property to define a cell template and the `address` property within `ranges` to specify where the template is applied.

Use the `beforeCellRender` event to further customize the HTML elements or initialize Syncfusion components within templated cells. You can initialize components such as TextBox, DropDownList, RadioButton, MultiSelect, DatePicker, and TextArea.

In the following example, a cell template is applied to the `C2:C9` range. Bind events to perform operations through the HTML elements or Syncfusion components. The MultiSelect `change` event writes the selected value to the corresponding Spreadsheet cell.

The following code example demonstrates how to apply a cell template, initialize components in the templated cells, and handle component events.

The following code example describes the above behavior.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/template/template.cs %}
{% endhighlight %}
{% endtabs %}



## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)
