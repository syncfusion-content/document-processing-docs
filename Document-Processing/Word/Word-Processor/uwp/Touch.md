---
title: Touch in UWP DOCX Editor | Syncfusion
description: The touch in UWP DOCX Editor supports touch manipulations like pan, scroll, and zoom, enabled through the ManipulationMode property configuration.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: touch,touch-manipulation,manipulation-mode,manipulationmodes
---
# Touch in UWP DOCX Editor

In a UWP application, you should specify the `ManipulationMode` property on the controls in order to enable touch manipulations such as pan, scroll, and zoom. Similarly, set the `ManipulationMode` property on the [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) control.

The following code example demonstrates how to configure all touch manipulations on the SfRichTextBoxAdv control.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" ManipulationMode="All" xmlns:RichTextBoxAdv="using:Syncfusion.UI.Xaml.RichTextBoxAdv"/>


{% endhighlight %}

{% highlight c# %}
// Initializes a new instance of SfRichTextBoxAdv control.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Sets the manipulation mode for the control.
richTextBoxAdv.ManipulationMode = ManipulationModes.All;


{% endhighlight %}

{% endtabs %}

You can configure the specific touch manipulations for a `UIElement` by setting appropriate combinations of `ManipulationModes` flags. The following table lists the `ManipulationModes` values that enable specific touch manipulations.

<table>
<tr>
<td>
{{'**Touch Manipulation**'| markdownify }}
</td>
<td>
{{'**ManipulationModes**'| markdownify }}
</td>
</tr>
<tr>
<td>
Vertical scrolling only
</td>
<td>
TranslateY, TranslateInertia
</td>
</tr>
<tr>
<td>
Horizontal scrolling only
</td>
<td>
TranslateX, TranslateInertia
</td>
</tr>
<tr>
<td>
Vertical and horizontal scrolling only
</td>
<td>
TranslateX, TranslateY, TranslateInertia
</td>
</tr>
<tr>
<td>
Scaling only
</td>
<td>
Scale, ScaleInertia
</td>
</tr>
<tr>
<td>
Scrolling and scaling only
</td>
<td>
Scale, ScaleInertia, TranslateX, TranslateY, TranslateInertia
</td>
</tr>
</table>

The following code example demonstrates how to configure the touch manipulations for scrolling and scaling alone in the SfRichTextBoxAdv control.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" ManipulationMode="Scale, ScaleInertia, TranslateX, TranslateY, TranslateInertia" xmlns:RichTextBoxAdv="using:Syncfusion.UI.Xaml.RichTextBoxAdv"/>


{% endhighlight %}

{% highlight c# %}
// Initializes a new instance of SfRichTextBoxAdv control.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Sets the manipulation mode for the control.
richTextBoxAdv.ManipulationMode = ManipulationModes.Scale | ManipulationModes.ScaleInertia | ManipulationModes.TranslateX | ManipulationModes.TranslateY | ManipulationModes.TranslateInertia;


{% endhighlight %}

{% endtabs %}

## See also

- [Getting started with UWP RichTextBox](./Getting-Started)
- [Overview of UWP RichTextBox](./Overview)
- [Selection in UWP RichTextBox](./Selection)