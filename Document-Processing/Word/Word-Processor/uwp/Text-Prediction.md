---
title: Text Prediction in UWP RichTextBox control | Syncfusion
description: Learn here all about Text Prediction support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: text-prediction,is-text-prediction-enabled
---
# Text prediction in UWP RichTextBox (SfRichTextBoxAdv)

[`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) provides support for text prediction when editing text using the virtual keyboard on phone  devices. By default, text prediction is enabled in SfRichTextBoxAdv.

## Enabling or disabling text prediction

The following sample code demonstrates how to enable or disable text prediction in `SfRichTextBoxAdv` by setting the [`IsTextPredictionEnabled`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_UI_Xaml_RichTextBoxAdv_SfRichTextBoxAdv_IsTextPredictionEnabled) property.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" ManipulationMode="All" IsTextPredictionEnabled="False" />

{% endhighlight %}

{% highlight c# %}
// Initializes a new instance of SfRichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.ManipulationMode = ManipulationModes.All;

// Disables text prediction in SfRichTextBoxAdv.
richTextBoxAdv.IsTextPredictionEnabled = false;

{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of SfRichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
richTextBoxAdv.ManipulationMode = ManipulationModes.All

' Disables text prediction in SfRichTextBoxAdv.
richTextBoxAdv.IsTextPredictionEnabled = False

{% endhighlight %}
{% endtabs %}

## See also

- [Commands in UWP RichTextBox](./Commands)
- [Importing and exporting documents in UWP RichTextBox](./Import-and-Export)
- [Getting started with UWP RichTextBox](./Getting-Started)