---
title: Text Prediction in UWP DOCX Editor | Syncfusion
description: The text prediction in UWP DOCX Editor offers text prediction support while editing using virtual keyboard, with enable or disable configuration.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: virtualization
---
# Text Prediction in UWP DOCX Editor

The SfRichTextBoxAdv provides support for text prediction while editing text using virtual keyboard in phone device. By default text prediction is enabled in SfRichTextBoxAdv. The following sample code demonstrates how to enable or disable text prediction in SfRichTextBoxAdv.
{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" ManipulationMode="All" IsTextPredictionEnabled="False" />

{% endhighlight %}

{% highlight c# %}
// Initializes a new instance of SfRichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.ManipulationMode = ManipulationModes.All;

// Disables text prediction in RichTextBoxAdv.
richTextBoxAdv.IsTextPredictionEnabled = false;

{% endhighlight %}

{% endtabs %}
