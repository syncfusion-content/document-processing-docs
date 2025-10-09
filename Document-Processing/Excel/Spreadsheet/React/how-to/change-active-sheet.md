---
layout: post
title: Changing the active sheet while importing a file in the React Spreadsheet component | Syncfusion
description: Learn here all about changing the active sheet index while importing a file in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

## Changing the active sheet while importing a file in React Spreadsheet component

You can change the active sheet of imported file by updating [`activeSheetIndex`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#activesheetindex) property on the [`openComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#opencomplete) event.

The following code example shows how to set the active sheet when importing an Excel file.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/change-active-sheet-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/change-active-sheet-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/change-active-sheet-cs1" %}