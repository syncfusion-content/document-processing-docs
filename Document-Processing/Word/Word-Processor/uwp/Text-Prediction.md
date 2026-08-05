---
title: Text Prediction in UWP RichTextBox control | Syncfusion
description: Learn here all about Text Prediction support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: text-prediction,virtual-keyboard,suggestion-bar,soft-keyboard,phone,is-text-prediction-enabled,enable,dissable
---
# Text prediction in UWP RichTextBox

[`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) provides support for text prediction when editing text using the soft (virtual) keyboard on phone devices. The suggestions appear in the soft keyboard's suggestion bar while the user types. By default, text prediction is enabled in SfRichTextBoxAdv.

## Enabling or disabling text prediction

The following sample code demonstrates how to enable or disable text prediction in `SfRichTextBoxAdv` by setting the [`IsTextPredictionEnabled`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#istextpredictionenabled) property.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" ManipulationMode="All" IsTextPredictionEnabled="False" />

{% endhighlight %}

{% highlight c# %}
using Syncfusion.UI.Xaml.RichTextBoxAdv;

// Initializes a new instance of SfRichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.ManipulationMode = ManipulationModes.All;

// Disables text prediction in SfRichTextBoxAdv.
richTextBoxAdv.IsTextPredictionEnabled = false;

{% endhighlight %}
{% highlight VB %}
Imports Syncfusion.UI.Xaml.RichTextBoxAdv

' Initializes a new instance of SfRichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
richTextBoxAdv.ManipulationMode = ManipulationModes.All

' Disables text prediction in SfRichTextBoxAdv.
richTextBoxAdv.IsTextPredictionEnabled = False

{% endhighlight %}
{% endtabs %}

N> The XAML snippet assumes the `RichTextBoxAdv` namespace is mapped to `using:Syncfusion.UI.Xaml.RichTextBoxAdv` on the page root.

N> The `IsTextPredictionEnabled` property is supported from Syncfusion UWP RichTextBox v17.4.0.X onwards, and the text prediction suggestions appear only on devices that expose a soft (virtual) keyboard (typically phone and tablet devices).

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [Commands in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/commands)
- [Spell check in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/spell-check)
- [Getting started with UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/getting-started)
