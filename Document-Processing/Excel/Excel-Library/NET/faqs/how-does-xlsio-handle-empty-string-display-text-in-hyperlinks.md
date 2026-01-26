---
title: Hyperlink display text behavior | Syncfusion
description: This page explains how Syncfusion XlsIO handles empty string display text in hyperlinks, consistent with Microsoft Excel behavior.
platform: document-processing
control: XlsIO
documentation: UG
---

# How does XlsIO handle empty string display text in hyperlinks?

As per Microsoft Excel behavior, hyperlinks cannot be assigned with empty display text values. When the display text of a hyperlink is set to an empty string, Excel automatically uses the hyperlink address itself as the display text. Syncfusion XlsIO follows the same behavior.

If a user does not provide a <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IHyperLink.html#Syncfusion_XlsIO_IHyperLink_TextToDisplay">TextToDisplay</a> value explicitly after assigning a hyperlink <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IHyperLink.html#Syncfusion_XlsIO_IHyperLink_Address">Address</a>, XlsIO uses the address value as the display text to match Excel behavior. If <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IHyperLink.html#Syncfusion_XlsIO_IHyperLink_TextToDisplay">TextToDisplay</a> is assigned after the <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IHyperLink.html#Syncfusion_XlsIO_IHyperLink_Address">Address</a>, that value is used.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Case 1: Without TextToDisplay - address itself is used as display text
IHyperLink hyperlink1 = sheet.HyperLinks.Add(sheet.Range["A1"]);
hyperlink1.Type = ExcelHyperLinkType.Url;
hyperlink1.Address = "http://www.syncfusion.com"; //Display text will be "http://www.syncfusion.com"

//Case 2: With TextToDisplay - provided text is used as display text
IHyperLink hyperlink2 = sheet.HyperLinks.Add(sheet.Range["A2"]);
hyperlink2.Type = ExcelHyperLinkType.Url;
hyperlink2.Address = "http://www.syncfusion.com";
hyperlink2.TextToDisplay = "syncfusion"; //Display text will be "syncfusion"
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Case 1: Without TextToDisplay - address itself is used as display text
IHyperLink hyperlink1 = sheet.HyperLinks.Add(sheet.Range["A1"]);
hyperlink1.Type = ExcelHyperLinkType.Url;
hyperlink1.Address = "http://www.syncfusion.com"; //Display text will be "http://www.syncfusion.com"

//Case 2: With TextToDisplay - provided text is used as display text
IHyperLink hyperlink2 = sheet.HyperLinks.Add(sheet.Range["A2"]);
hyperlink2.Type = ExcelHyperLinkType.Url;
hyperlink2.Address = "http://www.syncfusion.com";
hyperlink2.TextToDisplay = "syncfusion"; //Display text will be "syncfusion"
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Case 1: Without TextToDisplay - address itself is used as display text
Dim hyperlink1 As IHyperLink = sheet.HyperLinks.Add(sheet.Range("A1"))
hyperlink1.Type = ExcelHyperLinkType.Url
hyperlink1.Address = "http://www.syncfusion.com" 'Display text will be "http://www.syncfusion.com"

'Case 2: With TextToDisplay - provided text is used as display text
Dim hyperlink2 As IHyperLink = sheet.HyperLinks.Add(sheet.Range("A2"))
hyperlink2.Type = ExcelHyperLinkType.Url
hyperlink2.Address = "http://www.syncfusion.com"
hyperlink2.TextToDisplay = "syncfusion" 'Display text will be "syncfusion"
{% endhighlight %}
{% endtabs %}  