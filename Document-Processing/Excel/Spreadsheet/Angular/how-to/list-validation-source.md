---
layout: post
title: Surpassing the 255-Character Limitation for List Validation Sources in the Angular Spreadsheet Component | Syncfusion
description: Learn here all about how to surpass the 255-Character limitation for list validation sources in Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

## How to surpass the 255-Character limitation for list validation sources in Angular Spreadsheet Component

In the Angular Spreadsheet component, if you enter a list validation source that exceeds 255 characters, the validation will not be applied to the cell, and further input will be restricted. This behavior is not specific to the Spreadsheet component alone — it also aligns with the behavior of Microsoft Excel as well. You can refer to the following [article](https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3?ui=en-us&rs=en-us&ad=us) to learn more about this limitation.

To surpass this limitation, you can use a reference to a range of cells as the list validation source instead of providing the values directly. For example: `=Sheet1!B2:B10` or `=Sheet1!$B$2:$B$10`.

Refer to the following code example to understand how to use a cell range as the list validation source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/angular/list-validation-source-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/spreadsheet/angular/list-validation-source-cs1/src/datasource.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/list-validation-source-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/list-validation-source-cs1" %}