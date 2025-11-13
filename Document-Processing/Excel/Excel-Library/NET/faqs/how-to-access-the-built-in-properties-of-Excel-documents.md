---
title: How to access the built-in properties of Excel documents | Syncfusion
description: This page shows how to access the built-in properties of Excel documents using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to access the built-in properties of Excel documents?

You can access the built-in properties of Excel documents by using the [IWorkbook.BuiltInDocumentProperties](https://help.syncfusion.com/cr/aspnet-core/Syncfusion.XlsIO.Implementation.Collections.BuiltInDocumentProperties.html) property.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
IBuiltInDocumentProperties documentProperties = workbook.BuiltInDocumentProperties;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
IBuiltInDocumentProperties documentProperties = workbook.BuiltInDocumentProperties;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim documentProperties As IBuiltInDocumentProperties = workbook.BuiltInDocumentProperties
{% endhighlight %}
{% endtabs %}

## See Also

* [How to disable ExportDocumentProperties](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-converter-settings#export-document-properties)