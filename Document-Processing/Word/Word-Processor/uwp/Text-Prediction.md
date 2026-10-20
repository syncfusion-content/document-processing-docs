---
title: Text Prediction in UWP DOCX Editor | Syncfusion
description: The text prediction in UWP DOCX Editor offers text prediction support while editing using virtual keyboard, with enable or disable configuration.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: text-prediction,is-text-prediction-enabled
---
# Text Prediction in UWP DOCX Editor

The [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) provides support for text prediction while editing text using a virtual keyboard on a phone device. Text prediction is enabled by default in SfRichTextBoxAdv and can be disabled by setting the `IsTextPredictionEnabled` property to **false**.

The following sample code demonstrates how to disable text prediction in SfRichTextBoxAdv.

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

- [Commands in UWP DOCX Editor](./Commands)
- [Importing and exporting documents in UWP DOCX Editor](./Import-and-Export)
- [Getting started with UWP DOCX Editor](./Getting-Started)
