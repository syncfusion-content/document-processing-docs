---
title: Layout Types in WPF RichTextBox control | Syncfusion
description: Learn here all about Layout Types support in Syncfusion WPF RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: layout-types,pages,continuous,block,layout-type
---
# Layout Types in WPF RichTextBox (SfRichTextBoxAdv)

The [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) (SfRichTextBoxAdv) control allows you to choose between the following layout types through the [LayoutType](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_LayoutType) property. The default `LayoutType` is `Pages`.

* Pages

* Continuous

* Block

Use **Pages** when you need paginated rendering with page breaks, headers, footers, and section properties. Use **Continuous** when you need a single scrollable rich-text surface. Use **Block** when you need a read-only rich-text display that still supports clipboard copy.


## Pages

When using the [Pages](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.LayoutType.html) layout type, the content of the document is rendered sequentially in several pages, similar to the Print Layout view of Microsoft Word. The size and margin of each page are defined by the Section format properties. Configure page size and margins through the `Section` format properties of the document.

The following code example demonstrates how to define the layout type of the SfRichTextBoxAdv control as Pages.
{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" LayoutType="Pages"/>

{% endhighlight %}

{% highlight c# %}
// Initializes a new instance of RichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Defines the layout type as Pages.
richTextBoxAdv.LayoutType = LayoutType.Pages;

{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
' Defines the layout type as Pages.
richTextBoxAdv.LayoutType = LayoutType.Pages


{% endhighlight %}

{% endtabs %}

![WPF RichTextBox rendered in Pages layout, showing paginated content](Layout-Types_images/wpf-richtextbox-page-layout.jpeg)

## Continuous

When using the [Continuous](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.LayoutType.html) layout type, the entire content of the document is rendered continuously in a single page, similar to the Web Layout view of Microsoft Word. This layout looks like a simple text box with rich-text content and is suitable for applications such as forums and blogs.

The following code example demonstrates how to define the layout type of the SfRichTextBoxAdv control as Continuous.
{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" LayoutType="Continuous"/>

{% endhighlight %}

{% highlight c# %}
// Initializes a new instance of RichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Defines the layout type as Continuous.
richTextBoxAdv.LayoutType = LayoutType.Continuous;

{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
' Defines the layout type as Continuous.
richTextBoxAdv.LayoutType = LayoutType.Continuous


{% endhighlight %}

{% endtabs %}

![WPF RichTextBox rendered in Continuous layout, showing all content on a single scrollable page](Layout-Types_images/wpf-richtextbox-continuous-layout.jpeg)

## Block

When using the [Block](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.LayoutType.html) layout type, the content of the document is rendered continuously in a single page as read-only. In Block layout, the document is read-only by default. This layout looks like a simple text block with rich-text content such as text, images, and tables. The Block layout also supports copying contents to the clipboard. It can be used for applications such as forums and blogs in order to display the rich-text content with the same look and feel as in the Continuous layout type.

The following code example demonstrates how to define the layout type of the SfRichTextBoxAdv control as Block.
{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" LayoutType="Block"/>

{% endhighlight %}

{% highlight c# %}
// Initializes a new instance of RichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Defines the layout type as Block.
richTextBoxAdv.LayoutType = LayoutType.Block;

{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
' Defines the layout type as Block.
richTextBoxAdv.LayoutType = LayoutType.Block


{% endhighlight %}

{% endtabs %}

![WPF RichTextBox rendered in Block layout, showing read-only rich-text content in a single block](Layout-Types_images/wpf-richtextbox-box-layout.jpeg)

N> You can refer to our [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) feature tour page for its groundbreaking feature representations. You can also explore our [WPF RichTextBox example](https://github.com/syncfusion/docx-editor-sdk-wpf-demos) to know how to render and configure the editing tool.

## See Also

- [Document Structure in WPF RichTextBox](Document-Structure)
- [EditorSettings in WPF RichTextBox](EditorSettings)
- [Commands in WPF RichTextBox](Commands)