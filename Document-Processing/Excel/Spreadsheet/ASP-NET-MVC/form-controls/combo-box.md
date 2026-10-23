---
layout: post
title: Combo Box Form Control in ASP.NET MVC Spreadsheet | Syncfusion
description: Learn how to create and configure Combo Box (Dropdown) form controls in Syncfusion ASP.NET MVC Spreadsheet component.
control: Form Controls
platform: document-processing
documentation: ug
---

# Combo Box (Dropdown) Form Control

The Combo Box (Dropdown) form control allows users to select an item from a predefined list and stores the selected item's position in the linked cell.

> **Note:** The Combo Box (Dropdown) control displays an **empty list** when first inserted. You must configure the Input Range and set a Cell Link to make the Combo Box (Dropdown) functional.

## Configuration Options

Combo Box (Dropdown) provides the following configuration options:

- **Input Range**: Specify the cell range for combo box (e.g., **H1:H11**). This configuration uses cells H1 through H11 as the source for Combo Box options. When users click the combo box button, they will see the values from this range as selectable options.
- **Cell Link**: Specify a cell reference to link the selected item's position within the Combo Box (Dropdown).

The linked cell value is automatically updated whenever the Combo Box's selected item changes.

## Code Example

The following code example shows the Combo Box (Dropdown) Form Control functionality in the Spreadsheet control.

{% tabs %}
{% highlight html tabtitle="Razor" %}
{% include code-snippet/spreadsheet/asp-net-mvc/form-controls-dropdown-cs1/razor %}
{% endhighlight %}
{% highlight html tabtitle="Tag Helper" %}
{% include code-snippet/spreadsheet/asp-net-mvc/form-controls-dropdown-cs1/tagHelper %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Form Controls](../form-controls)
* [Check Box](./check-box)
* [Radio Button](./radio-button)
