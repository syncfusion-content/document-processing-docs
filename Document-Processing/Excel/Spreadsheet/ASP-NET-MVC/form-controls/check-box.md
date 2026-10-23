---
layout: post
title: Check Box Form Control in ASP.NET MVC Spreadsheet | Syncfusion
description: Learn how to create and configure Check Box form controls in Syncfusion ASP.NET MVC Spreadsheet component.
control: Form Controls
platform: document-processing
documentation: ug
---

# Check Box Form Control

The Check Box form control allows users to toggle between checked, unchecked, and mixed states, while updating the corresponding value in a linked cell.

## Configuration Options

Check Box provides the following configuration options:

- **Unchecked**: The unselected state of the Check Box for a Linked cell. If Unchecked, linked cell value: **FALSE**
- **Checked**: The selected state of the Check Box for a Linked cell. If Checked, linked cell value: **TRUE**
- **Mixed**: Represents the mixed state of the Check Box for a Linked cell.
- **Cell Link**: Specify a cell reference to link the Check Box to a worksheet cell.

The linked cell value is automatically updated whenever the Check Box state changes.

## Code Example

The following code example shows the Check Box Form Control functionality in the Spreadsheet control.

{% tabs %}
{% highlight html tabtitle="Razor" %}
{% include code-snippet/spreadsheet/asp-net-mvc/form-controls-check-box-cs1/razor %}
{% endhighlight %}
{% highlight html tabtitle="Tag Helper" %}
{% include code-snippet/spreadsheet/asp-net-mvc/form-controls-check-box-cs1/tagHelper %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Form Controls](../form-controls)
* [Radio Button](./radio-button)
* [Combo Box](./combo-box)
