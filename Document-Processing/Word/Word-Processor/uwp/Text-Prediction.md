---
title: Text Prediction in UWP DOCX Editor | Syncfusion
description: The text prediction in UWP DOCX Editor offers text prediction support while editing using virtual keyboard, with enable or disable configuration.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: text-prediction,is-text-prediction-enabled
---
# Text Prediction in UWP DOCX Editor

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