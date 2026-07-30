---
layout: post
title: Limitations in WPF Spreadsheet control | Syncfusion®
description: Learn here all about Limitations support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Limitations in WPF Spreadsheet (SfSpreadsheet)

## Release memory held by AutomationPeer

SfSpreadsheet retains an instance in memory even after the spreadsheet is disposed or its sheets are removed. This happens because the WPF **AutomationPeer** holds memory that must be released manually. Use the following steps to release it.

Create a class derived from `WindowAutomationPeer` and override it's `GetChildrenCore` method and returns “null” value that clears the **AutomationPeer** item from memory as follows

{% tabs %}
{% highlight c# %}
public class FakeWindowsPeer : WindowAutomationPeer
{

    public FakeWindowsPeer (Window window): base(window)
    { }

    protected override List<AutomationPeer> GetChildrenCore()
    {
        return null;
    }
}
{% endhighlight %}
{% endtabs %}

Now override the `OnCreateAutomationPeer` of the window and it returns the class as follows.

{% tabs %}
{% highlight c# %}
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    protected override AutomationPeer OnCreateAutomationPeer()
    {
        return new FakeWindowsPeer(this);
    }
}
{% endhighlight %}
{% endtabs %}

N> For more information, see the [WPF Spreadsheet Editor](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour and the [WPF Spreadsheet demos](https://github.com/syncfusion/wpf-demos).
