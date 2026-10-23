---
layout: post
title: Radio Button Form Control in ASP.NET MVC Spreadsheet | Syncfusion
description: Learn how to create and configure Radio Button form controls in Syncfusion ASP.NET MVC Spreadsheet component.
control: Form Controls
platform: document-processing
documentation: ug
---

# Radio Button Form Control

The Radio Button form control allows users to store either 1 (selected) or 0 (unselected) in a linked cell.

> Once a Radio Button is selected, clicking the same Radio Button again does not uncheck it.

## Configuration Options

Radio Button provides the following configuration options:

- **Unchecked**: The unselected state of the Radio Button for a Linked cell. If Unchecked, linked cell value: **0**
- **Checked**: The selected state of the Radio Button for a Linked cell. If Checked, linked cell value: **1**
- **Cell Link**: Specify a cell reference to link the Radio Button to a worksheet cell.

The linked cell value is automatically updated whenever the Radio Button state changes.

> **Note:** Within a worksheet, only one Radio Button can be selected (checked) at a time. Selecting a new Radio Button automatically deselects any previously selected Radio Button.

## Code Example

The following code example shows the Radio Button Form Control functionality in the Spreadsheet control.

{% tabs %}
{% highlight html tabtitle="Razor" %}
{% include code-snippet/spreadsheet/asp-net-mvc/form-controls-radio-button-cs1/razor %}
{% endhighlight %}
{% highlight html tabtitle="Tag Helper" %}
{% include code-snippet/spreadsheet/asp-net-mvc/form-controls-radio-button-cs1/tagHelper %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Form Controls](../form-controls)
* [Check Box](./check-box)
* [Combo Box](./combo-box)
