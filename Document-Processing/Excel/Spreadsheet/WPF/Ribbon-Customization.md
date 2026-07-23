---
layout: post
title: Ribbon Customization in WPF Spreadsheet control | Syncfusion®
description: Learn here all about Ribbon Customization support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Ribbon Customization in WPF Spreadsheet (SfSpreadsheet)

Ribbon Customization can be done in two ways,

## Using Control Template

You can customize the ribbon items by overriding the template of [SfSpreadsheetRibbon](http://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheetRibbon.html).

## Using Event

You can add or remove ribbon menu items by handling the `SfSpreadsheetRibbon.Loaded` event.

### Adding a RibbonTab

To add a custom ribbon tab with user-defined menu options to `SfSpreadsheetRibbon`,

{% tabs %}
{% highlight xaml %}
<syncfusion:SfSpreadsheetRibbon x:Name="ribbon" DataContext="{Binding ElementName=spreadsheet}" />
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}
ribbon.Loaded += ribbon_Loaded;
    
void ribbon_Loaded(object sender, RoutedEventArgs e)
{
    var ribbon1 = GridUtil.GetVisualChild<Ribbon>(sender as FrameworkElement);

    if (ribbon1 != null)
    {
      RibbonTab ribbonTab = new RibbonTab();
      ribbonTab.Caption = "OTHER";
      RibbonButton Button1 = new RibbonButton();
      Button1.Label = "PRINT";
      Button1.SmallIcon = new BitmapImage(new Uri("/../Icon/Icons_Print.png", UriKind.Relative));
      Button1.Click += Button1_Click;
      RibbonButton Button2 = new RibbonButton();
      Button2.Label = "PRINT PREVIEW";
      Button2.SmallIcon = new BitmapImage(new Uri("/../Icon/Icons_Print.png", UriKind.Relative));
      Button2.Click += Button2_Click;
      var customRibbonBar = new RibbonBar();
      customRibbonBar.Header = "Printing Options";
      customRibbonBar.Items.Add(Button1);
      customRibbonBar.Items.Add(Button2);
      customRibbonBar.IsLauncherButtonVisible = false;
      ribbonTab.Items.Add(customRibbonBar);
      ribbon1.Items.Add(ribbonTab);
    }
}
{% endhighlight %}
{% endtabs %}

### Adding a Ribbon Item to an Existing Tab

To add a ribbon item to an already existing tab,

{% tabs %}
{% highlight xaml %}
<syncfusion:SfSpreadsheetRibbon x:Name="ribbon" DataContext="{Binding ElementName=spreadsheet}" />
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}
ribbon.Loaded += ribbon_Loaded;
    
void ribbon_Loaded(object sender, RoutedEventArgs e)
{
    var ribbon1 = GridUtil.GetVisualChild<Ribbon>(sender as FrameworkElement);
    
    // To add the ribbon button in View tab,
    
    if (ribbon1 != null)
    {
      var ribbonTab = ribbon1.Items[2] as RibbonTab;
      RibbonButton Button1 = new RibbonButton();
      Button1.Label = "PRINT";
      Button1.SmallIcon = new BitmapImage(new Uri("/../Icon/Icons_Print.png", UriKind.Relative));
      Button1.Click += Button1_Click;
      ribbonTab.Items.Add(Button1);
    }
}
{% endhighlight %}
{% endtabs %}

### Removing a RibbonTab

To remove a ribbon tab from `SfSpreadsheetRibbon`,

{% tabs %}
{% highlight xaml %}
<syncfusion:SfSpreadsheetRibbon x:Name="ribbon" DataContext="{Binding ElementName=spreadsheet}" />
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}
ribbon.Loaded += ribbon_Loaded;
    
void ribbon_Loaded(object sender, RoutedEventArgs e)
{
    var ribbon1 = GridUtil.GetVisualChild<Ribbon>(sender as FrameworkElement);
    
    // To remove the Data tab from the ribbon,

    if (ribbon1 != null)
    {
      var item = ribbon1.Items[1];
      ribbon1.Items.Remove(item);
    }
}
{% endhighlight %}
{% endtabs %}


### Removing a Ribbon Item from a RibbonTab

To remove ribbon menu items from a ribbon tab in `SfSpreadsheetRibbon`,

{% tabs %}
{% highlight xaml %}
<syncfusion:SfSpreadsheetRibbon x:Name="ribbon" DataContext="{Binding ElementName=spreadsheet}" />
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}
ribbon.Loaded += ribbon_Loaded;
    
void ribbon_Loaded(object sender, RoutedEventArgs e)
{
    var ribbon1 = GridUtil.GetVisualChild<Ribbon>(sender as FrameworkElement);
    
    // To remove the Freeze Panes menu group in the View tab,
    
    if (ribbon1 != null)
    {
      var ribbonTab = ribbon1.Items[2] as RibbonTab;
      ribbonTab.Items.Remove(ribbonTab.Items[1]);
    }
}
{% endhighlight %}
{% endtabs %}

### Canceling a Ribbon Command

You can cancel particular actions of SpreadsheetRibbon commands by handling the [CommandExecuting](http://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.Helpers.CommandExecutionEventArgs.html) event.

{% tabs %}
{% highlight xaml %}
<syncfusion:SfSpreadsheetRibbon x:Name="ribbon" DataContext="{Binding ElementName=spreadsheet}" />
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}
this.ribbon.Commands.CommandExecuting += Commands_CommandExecuting;

void Commands_CommandExecuting(object sender, CommandExecutingEventArgs args)
{
	// Stops the copy button's command execution.
	if (args.CommandName == "Copy")
	{
		// Set the bool value to true.
		// The operation specified in CommandName will not be performed.
		args.Cancel = true;
	}
}
{% endhighlight %}
{% endtabs %}


N> You can refer to our [WPF Spreadsheet Editor](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [WPF Spreadsheet example](https://github.com/syncfusion/wpf-demos) to know how to render and configure the spreadsheet.