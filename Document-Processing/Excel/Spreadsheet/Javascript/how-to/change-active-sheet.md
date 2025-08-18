---
layout: post
title: Change active sheet in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about changing active sheet index when import a file in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Spreadsheet 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Changing the active sheet in ##Platform_Name## Spreadsheet control

{% if page.publishingplatform == "typescript" %}

You can change the active sheet of imported file by updating [`activeSheetIndex`](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#activesheetindex) property on the [`openComplete`](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#opencomplete) event.

{% elsif page.publishingplatform == "javascript" %}

You can change the active sheet of imported file by updating [`activeSheetIndex`](https://helpej2.syncfusion.com/javascript/documentation/api/spreadsheet/#activesheetindex) property on the [`openComplete`](https://helpej2.syncfusion.com/javascript/documentation/api/spreadsheet/#opencomplete) event.

{% endif %}

The following code example shows how to set the active sheet when importing an Excel file.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/change-active-sheet-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/change-active-sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/change-active-sheet-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/change-active-sheet-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/change-active-sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/change-active-sheet-cs1" %}
{% endif %}
