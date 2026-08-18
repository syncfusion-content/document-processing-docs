---
title: Mini Toolbar in WPF DOCX Editor | Syncfusion
description: The mini toolbar in WPF DOCX Editor offers built-in rich text formatting options like bold and italic, with enable or disable configuration support.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: mini-toolbar
---
# Mini Toolbar in WPF DOCX Editor

The [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) (SfRichTextBoxAdv) supports built-in mini toolbar to provide rich text formatting options such as Bold, Italic etc. The following screenshot shows built-in mini toolbar of SfRichTextBoxAdv control.
![WPF RichTextBox displays Mini Toolbar](Mini-Toolbar_images/wpf-richtextbox-mini-toolbar.jpeg)

## Enable/Disable Mini Toolbar

In SfRichTextBoxAdv, the built-in mini toolbar is enabled by default. It is possible to enable/disable the built-in mini toolbar. The following code example demonstrates how to disable the built-in mini toolbar in SfRichTextBoxAdv.
{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" EnableMiniToolBar="False" xmlns:RichTextBoxAdv="clr-namespace:Syncfusion.Windows.Controls.RichTextBoxAdv;assembly=Syncfusion.SfRichTextBoxAdv.Wpf" />

{% endhighlight %}
{% highlight c# %}
// Initializes a new instance of RichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();

//Disables the built-in mini tool bar in SfRichTextBoxAdv.
richTextBoxAdv.EnableMiniToolBar = false;

{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()

'Disables the built-in mini tool bar in SfRichTextBoxAdv.
richTextBoxAdv.EnableMiniToolBar = False


{% endhighlight %}
{% endtabs %}

N> You can refer to our [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) feature tour page for its groundbreaking feature representations.You can also explore our [WPF RichTextBox example](https://github.com/syncfusion/docx-editor-sdk-wpf-demos) to knows how to render and configure the editing tools.