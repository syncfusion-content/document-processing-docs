---
layout: post
title: Sheet Visibility in React Spreadsheet component | Syncfusion
description: Learn here all about sheet visibility in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Worksheet 
platform: document-processing
documentation: ug
---

# Sheet visibility

Hiding a worksheet can help prevent unauthorized or accidental changes to your file.

There are three visibility state as like Microsoft Excel,

| State | Description |
|-------|---------|
| `Visible` | You can see the worksheet once the component is loaded. |
| `Hidden` | This worksheet is not visible, but you can unhide by selecting the sheet from `List All Sheets` dropdown menu. |
| `VeryHidden` | This worksheet is not visible and cannot be unhidden. Changing the state property to `Visible` is the only way to view this sheet. |

The following code example shows the three types of sheet visibility state.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/sheet-visiblity-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/sheet-visiblity-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/sheet-visiblity-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/sheet-visiblity-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/sheet-visiblity-cs1" %}