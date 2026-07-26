---
title: Touch in UWP RichTextBox control | Syncfusion
description: Learn here all about Touch support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: touch,touch-manipulation,manipulation-mode,pan,scroll,zoom,pinch-zoom,scale,translate,manipulationmodes
---
# Touch in UWP RichTextBox

In a UWP application, you should specify the `ManipulationMode` property on the controls in order to enable touch manipulations such as pan, scroll, and zoom. Similarly, set the `ManipulationMode` property on the [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) control.

N> `ManipulationMode` is inherited from the UWP `UIElement` class, so the same enum and flag-combination rules apply to SfRichTextBoxAdv.

The following code example demonstrates how to configure all touch manipulations on the SfRichTextBoxAdv control.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" ManipulationMode="TranslateX, TranslateY, TranslateInertia, Scale, ScaleInertia, Rotate, RotateInertia" xmlns:RichTextBoxAdv="using:Syncfusion.UI.Xaml.RichTextBoxAdv"/>


{% endhighlight %}

{% highlight c# %}
// Initializes a new instance of SfRichTextBoxAdv control.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Sets the manipulation mode for the control.
richTextBoxAdv.ManipulationMode = ManipulationModes.TranslateX | ManipulationModes.TranslateY | ManipulationModes.TranslateInertia | ManipulationModes.Scale | ManipulationModes.ScaleInertia | ManipulationModes.Rotate | ManipulationModes.RotateInertia;


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

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [Getting started with UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/getting-started)
- [Overview of UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/overview)
- [Selection in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/selection)

